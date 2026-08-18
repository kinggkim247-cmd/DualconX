import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

/**
 * Shared hook that fetches the brand logo URL from Supabase once per component mount.
 * Returns null while loading or if no logo has been uploaded.
 */
export function useBrandLogo(): string | null {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const { data } = await supabase
        .from("operational_proofs")
        .select("image_url")
        .eq("asset_key", "brand-logo")
        .single();
      if (data?.image_url) setLogoUrl(data.image_url);
    };
    fetchLogo();
  }, []);

  return logoUrl;
}
