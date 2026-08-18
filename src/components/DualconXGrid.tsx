"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  active: boolean;
  pulse: boolean;
}

interface Edge {
  x1: number; y1: number;
  x2: number; y2: number;
  lit: boolean;
}

const GRID_COLS = 14;
const GRID_ROWS = 9;
const SKIP_PROBABILITY = 0.28; // randomly drop some nodes so it feels organic
const EDGE_SKIP = 0.22;

function buildGraph(w: number, h: number) {
  const cw = w / (GRID_COLS - 1);
  const ch = h / (GRID_ROWS - 1);

  const nodes: Node[] = [];
  const present: boolean[][] = Array.from({ length: GRID_ROWS }, () =>
    Array(GRID_COLS).fill(false)
  );

  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      const skip = Math.random() < SKIP_PROBABILITY;
      if (!skip) {
        present[r][c] = true;
        nodes.push({ x: c * cw, y: r * ch, active: false, pulse: false });
      }
    }
  }

  const edges: Edge[] = [];
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      if (!present[r][c]) continue;
      const x1 = c * cw;
      const y1 = r * ch;
      // right
      if (c + 1 < GRID_COLS && present[r][c + 1] && Math.random() > EDGE_SKIP) {
        edges.push({ x1, y1, x2: (c + 1) * cw, y2: y1, lit: false });
      }
      // down
      if (r + 1 < GRID_ROWS && present[r + 1][c] && Math.random() > EDGE_SKIP) {
        edges.push({ x1, y1, x2: x1, y2: (r + 1) * ch, lit: false });
      }
    }
  }

  return { nodes, edges };
}

export function DualconXGrid({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dims, setDims] = useState({ w: 1440, h: 900 });
  const [graph, setGraph] = useState<{ nodes: Node[]; edges: Edge[] }>({
    nodes: [],
    edges: [],
  });
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  // Build graph on mount & resize
  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setDims({ w, h });
      setGraph(buildGraph(w, h));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Pulse a random node every ~2.5 s
  useEffect(() => {
    if (!graph.nodes.length) return;
    const cycle = () => {
      setActiveIdx(Math.floor(Math.random() * graph.nodes.length));
      setTimeout(() => setActiveIdx(-1), 1200);
    };
    cycle();
    const id = setInterval(cycle, 2600);
    return () => clearInterval(id);
  }, [graph.nodes.length]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      width={dims.w}
      height={dims.h}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
    >
      {/* Edges */}
      {graph.edges.map((e, i) => (
        <line
          key={i}
          x1={e.x1} y1={e.y1}
          x2={e.x2} y2={e.y2}
          stroke="#1E2A38"
          strokeWidth="1"
          opacity="0.7"
        />
      ))}

      {/* Nodes */}
      {graph.nodes.map((n, i) => {
        const isActive = i === activeIdx;
        return (
          <g key={i}>
            {/* Glow ring on active */}
            {isActive && (
              <circle
                cx={n.x} cy={n.y} r={7}
                fill="none"
                stroke="#36D1DC"
                strokeWidth="1"
                opacity="0.25"
                style={{ animation: "grid-pulse 1.2s ease-out forwards" }}
              />
            )}
            <circle
              cx={n.x} cy={n.y}
              r={isActive ? 2.5 : 1.5}
              fill={isActive ? "#36D1DC" : "#1E2A38"}
              opacity={isActive ? 0.9 : 0.8}
              style={isActive ? { filter: "drop-shadow(0 0 4px #36D1DC)" } : undefined}
            />
          </g>
        );
      })}

      <style>{`
        @keyframes grid-pulse {
          0%   { r: 4;  opacity: 0.25; }
          100% { r: 14; opacity: 0; }
        }
      `}</style>
    </svg>
  );
}
