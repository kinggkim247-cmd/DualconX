"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { 
  Settings, 
  Shield, 
  Lock, 
  Server, 
  Globe, 
  Bell, 
  Database,
  Loader2,
  Save,
  ShieldCheck,
  MonitorPlay,
  Upload,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { AdminSidebar } from "@/components/AdminSidebar";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Hero Settings State
  const [heroSettings, setHeroSettings] = useState({
    title: "",
    description: "",
    primary_cta: "",
    secondary_cta: "",
    is_animation_enabled: true,
    animation_style: "Evidence Network",
    animation_intensity: 50,
    overlay_darkness: 60,
  });
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      } else {
        setUser(session.user);
        fetchSettings();
      }
    };
    checkAuth();
  }, [router]);

  const fetchSettings = async () => {
    // Fetch Hero Settings
    const { data: settings } = await supabase.from("hero_settings").select("*").single();
    if (settings) {
      setHeroSettings(settings);
    }

    // Fetch Hero Image
    const { data: img } = await supabase
      .from("operational_proofs")
      .select("image_url")
      .eq("asset_key", "hero-bg")
      .single();
    if (img) setHeroImage(img.image_url);

    setIsLoading(false);
  };

  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `hero-bg_${Date.now()}.${fileExt}`;
      const filePath = `operational/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('public-assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('public-assets')
        .getPublicUrl(filePath);

      await supabase
        .from('operational_proofs')
        .upsert({
          asset_key: 'hero-bg',
          label: 'Hero Background Image',
          image_url: publicUrl
        }, { onConflict: 'asset_key' });

      setHeroImage(publicUrl);
      toast({ title: "Asset Updated", description: "Hero image published successfully." });
    } catch (error: any) {
      toast({ title: "Upload Failed", description: error.message, variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    // Save Hero Settings
    try {
      const { error } = await supabase.from("hero_settings").update(heroSettings).eq("id", heroSettings.id || null);
      // Wait, since we don't have ID, we can update without EQ if there's only one row, but supabase requires filter.
      // Let's just upsert or update where title is not null (as a hack) or fetch ID first.
      
      const { data } = await supabase.from("hero_settings").select("id").single();
      if (data) {
        await supabase.from("hero_settings").update(heroSettings).eq("id", data.id);
      } else {
        await supabase.from("hero_settings").insert(heroSettings);
      }

      toast({
        title: "Settings Updated",
        description: "Laboratory configuration has been securely synchronized.",
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminSidebar userEmail={user?.email} />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <header className="h-16 border-b border-white/5 flex items-center justify-between pl-16 pr-4 lg:px-8 sticky top-0 bg-background/80 backdrop-blur-md z-10">
          <h1 className="font-headline font-bold text-lg lg:text-xl truncate">Lab Settings</h1>
          <Button size="sm" onClick={handleSave} className="gap-2 text-[10px] font-bold uppercase bg-primary text-primary-foreground">
            <Save className="w-3.5 h-3.5" /> Sync
          </Button>
        </header>

        <div className="p-4 lg:p-8 space-y-8">
          <Tabs defaultValue="hero" className="space-y-6">
            <TabsList className="bg-white/5 border border-white/10 p-1 flex overflow-x-auto h-auto">
              <TabsTrigger value="hero" className="text-[10px] font-bold uppercase px-4 py-2">Hero Experience</TabsTrigger>
              <TabsTrigger value="forensics" className="text-[10px] font-bold uppercase px-4 py-2">Forensics</TabsTrigger>
              <TabsTrigger value="network" className="text-[10px] font-bold uppercase px-4 py-2">Network</TabsTrigger>
              <TabsTrigger value="security" className="text-[10px] font-bold uppercase px-4 py-2">Security</TabsTrigger>
              <TabsTrigger value="account" className="text-[10px] font-bold uppercase px-4 py-2">Account</TabsTrigger>
            </TabsList>

            <TabsContent value="hero" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                
                {/* Visuals & Motion */}
                <Card className="bg-card/50 border-white/5">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <MonitorPlay className="w-4 h-4 text-cyan-500" /> Visuals & Motion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Background Image</Label>
                      <div className="flex gap-4 items-center">
                        <div className="w-32 h-20 bg-black/40 rounded border border-white/10 overflow-hidden relative flex items-center justify-center">
                          {heroImage ? (
                            <Image src={heroImage} alt="Hero" fill className="object-cover opacity-60" unoptimized />
                          ) : (
                            <ImageIcon className="w-6 h-6 opacity-30" />
                          )}
                          {isUploading && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <Loader2 className="w-4 h-4 text-primary animate-spin" />
                            </div>
                          )}
                        </div>
                        <Input 
                          type="file" 
                          accept="image/*"
                          onChange={handleHeroImageUpload}
                          className="bg-white/5 border-white/10 file:bg-primary file:text-primary-foreground file:font-bold file:rounded-md file:border-none file:text-[10px] file:px-4 file:mr-4 file:cursor-pointer flex-1" 
                          disabled={isUploading}
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Enable Hero Animation</Label>
                        <p className="text-[10px] text-muted-foreground">Render motion layers on top of background.</p>
                      </div>
                      <Switch 
                        checked={heroSettings.is_animation_enabled} 
                        onCheckedChange={(v) => setHeroSettings({...heroSettings, is_animation_enabled: v})} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Animation Style</Label>
                      <Select 
                        value={heroSettings.animation_style} 
                        onValueChange={(v) => setHeroSettings({...heroSettings, animation_style: v})}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-white/10">
                          <SelectItem value="Evidence Network">Evidence Network</SelectItem>
                          <SelectItem value="Forensic Scan">Forensic Scan</SelectItem>
                          <SelectItem value="Data Flow">Data Flow</SelectItem>
                          <SelectItem value="Minimal Cinematic">Minimal Cinematic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] uppercase font-bold text-muted-foreground">Animation Intensity</Label>
                        <span className="text-[10px] font-mono text-cyan-500">{heroSettings.animation_intensity}%</span>
                      </div>
                      <Slider 
                        value={[heroSettings.animation_intensity]} 
                        max={100} step={1}
                        onValueChange={([v]) => setHeroSettings({...heroSettings, animation_intensity: v})}
                        className="py-2"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] uppercase font-bold text-muted-foreground">Overlay Darkness</Label>
                        <span className="text-[10px] font-mono text-cyan-500">{heroSettings.overlay_darkness}%</span>
                      </div>
                      <Slider 
                        value={[heroSettings.overlay_darkness]} 
                        max={100} step={1}
                        onValueChange={([v]) => setHeroSettings({...heroSettings, overlay_darkness: v})}
                        className="py-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Content */}
                <Card className="bg-card/50 border-white/5">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" /> Hero Content
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Hero Title</Label>
                      <Input 
                        value={heroSettings.title} 
                        onChange={(e) => setHeroSettings({...heroSettings, title: e.target.value})}
                        className="bg-white/5 border-white/10" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Hero Description</Label>
                      <Input 
                        value={heroSettings.description} 
                        onChange={(e) => setHeroSettings({...heroSettings, description: e.target.value})}
                        className="bg-white/5 border-white/10" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Primary CTA Label</Label>
                      <Input 
                        value={heroSettings.primary_cta} 
                        onChange={(e) => setHeroSettings({...heroSettings, primary_cta: e.target.value})}
                        className="bg-white/5 border-white/10" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Secondary CTA Label</Label>
                      <Input 
                        value={heroSettings.secondary_cta} 
                        onChange={(e) => setHeroSettings({...heroSettings, secondary_cta: e.target.value})}
                        className="bg-white/5 border-white/10" 
                      />
                    </div>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>

            <TabsContent value="forensics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <Card className="bg-card/50 border-white/5">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" /> Intake Protocols
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-sm">AI Enhancement</Label>
                        <p className="text-[10px] text-muted-foreground">Auto-optimize descriptions.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Probability Scoring</Label>
                        <p className="text-[10px] text-muted-foreground">Auto-score on submission.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-white/5">
                  <CardHeader>
                    <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Database className="w-4 h-4 text-accent" /> Data Persistence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Retention (Days)</Label>
                      <Input type="number" defaultValue="90" className="bg-white/5 border-white/10" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="network" className="space-y-6">
              <Card className="bg-card/50 border-white/5">
                <CardHeader>
                  <CardTitle className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Server className="w-4 h-4 text-primary" /> Forensic Clusters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { node: "Budapest Primary", status: "Online", latency: "12ms" },
                    { node: "Singapore Beta", status: "Online", latency: "142ms" },
                  ].map((cluster) => (
                    <div key={cluster.node} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-1.5 h-1.5 rounded-full", cluster.status === "Online" ? "bg-green-500 animate-pulse" : "bg-muted")} />
                        <span className="text-sm font-bold truncate">{cluster.node}</span>
                      </div>
                      <div className="text-[10px] font-mono text-primary">{cluster.latency}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </main>
    </div>
  );
}
