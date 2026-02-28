"use client";

import { useEffect, useRef } from "react";

const nodes = [
  { id: "data", label: "Data Sources", x: 8, y: 50, desc: "GA4 · GSC · CRM" },
  { id: "python", label: "Python ETL", x: 32, y: 25, desc: "Extract · Transform · Load" },
  { id: "ai", label: "AI Workflows", x: 32, y: 75, desc: "LLM · Agents · Prompts" },
  { id: "react", label: "React / Next.js", x: 62, y: 50, desc: "TypeScript · Full-Stack" },
  { id: "output", label: "Output", x: 88, y: 50, desc: "Reports · Tools · Sites" },
];

const connections = [
  { from: "data", to: "python" },
  { from: "data", to: "ai" },
  { from: "python", to: "react" },
  { from: "ai", to: "react" },
  { from: "react", to: "output" },
];

// Clean SVG icons for each node
function NodeIcon({ id }: { id: string }) {
  const cls = "w-5 h-5 md:w-6 md:h-6";
  switch (id) {
    case "data":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "python":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case "ai":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "react":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      );
    case "output":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AutomationVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    let animFrame: number;
    let t = 0;

    const draw = () => {
      t += 0.005;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw connections
      connections.forEach((conn, idx) => {
        const from = nodes.find((n) => n.id === conn.from)!;
        const to = nodes.find((n) => n.id === conn.to)!;
        const x1 = (from.x / 100) * rect.width;
        const y1 = (from.y / 100) * rect.height;
        const x2 = (to.x / 100) * rect.width;
        const y2 = (to.y / 100) * rect.height;

        // Gradient line
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.12)");
        gradient.addColorStop(1, "rgba(99, 102, 241, 0.25)");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        const cx1 = x1 + (x2 - x1) * 0.4;
        const cx2 = x1 + (x2 - x1) * 0.6;
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(cx1, y1, cx2, y2, x2, y2);
        ctx.stroke();

        // Animated particle
        const pt = (t * 0.4 + idx * 0.2) % 1;
        const bx = (1 - pt) ** 3 * x1 + 3 * (1 - pt) ** 2 * pt * cx1 + 3 * (1 - pt) * pt ** 2 * cx2 + pt ** 3 * x2;
        const by = (1 - pt) ** 3 * y1 + 3 * (1 - pt) ** 2 * pt * y1 + 3 * (1 - pt) * pt ** 2 * y2 + pt ** 3 * y2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(99, 102, 241, ${0.5 + Math.sin(t * 3 + idx) * 0.3})`;
        ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-[var(--border)] bg-gradient-to-br from-slate-50 to-indigo-50/50 overflow-hidden"
         style={{ aspectRatio: "16/9" }}>
      {/* Canvas for animated connections */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute flex flex-col items-center gap-1 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl bg-white border border-[var(--border)] shadow-sm flex items-center justify-center text-slate-600 hover:shadow-md hover:border-indigo-300 transition-all duration-300 hover:scale-110">
            <NodeIcon id={node.id} />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-[var(--foreground)] whitespace-nowrap mt-0.5">
            {node.label}
          </span>
          <span className="text-[8px] md:text-[10px] text-[var(--muted)] whitespace-nowrap">
            {node.desc}
          </span>
        </div>
      ))}

      {/* Subtle glow accents */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/8 rounded-full blur-3xl" />
    </div>
  );
}
