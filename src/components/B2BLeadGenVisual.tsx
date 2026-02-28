"use client";

export default function B2BLeadGenVisual() {
  return (
    <div className="w-full rounded-2xl border border-[var(--border)] bg-gradient-to-br from-cyan-50/50 to-blue-50/50 overflow-hidden p-6 md:p-8">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {/* Card 1: LinkedIn Strategy — spans 2 cols on mobile */}
        <div className="col-span-2 md:col-span-1 rounded-xl bg-white border border-[var(--border)] p-5 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">LinkedIn</span>
          </div>
          <p className="text-sm font-semibold mb-3">Thought Leadership</p>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 h-12">
            {[25, 35, 30, 45, 55, 50, 65, 75, 85, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#0A66C2] to-[#0A66C2]/60"
                style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">+135% Follower Growth</p>
        </div>

        {/* Card 2: Email Infrastructure */}
        <div className="rounded-xl bg-white border border-[var(--border)] p-5 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">EDM</span>
          </div>
          <p className="text-sm font-semibold mb-3">Lead Nurturing</p>
          {/* Pulsing dots animation */}
          <div className="flex items-center gap-2 mt-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-indigo-400"
                style={{
                  animation: `pulse 2s ease-in-out ${i * 0.3}s infinite`,
                }}
              />
            ))}
            <svg className="w-4 h-4 text-indigo-300 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">Scalable Pipeline</p>
        </div>

        {/* Card 3: Global Reach */}
        <div className="rounded-xl bg-white border border-[var(--border)] p-5 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Reach</span>
          </div>
          <p className="text-sm font-semibold mb-2">Multi-Region</p>
          {/* Region tags */}
          <div className="flex flex-wrap gap-1.5">
            {["EU", "NA", "ME"].map((region) => (
              <span
                key={region}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200"
              >
                {region}
              </span>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">Tier-1 Inbound</p>
        </div>
      </div>

      {/* Pulse keyframe */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
