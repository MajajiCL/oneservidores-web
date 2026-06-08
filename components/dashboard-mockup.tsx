"use client";

import {
  Server, Cpu, HardDrive, Wifi, ShieldCheck, MoreHorizontal,
  Search, Bell, Plus, ChevronDown, Activity, Globe2,
  LucideIcon
} from "lucide-react";
import { Sparkline } from "./sparkline";
import { ActivityFeed } from "./activity-feed";

/**
 * Glassmorphic dashboard mockup over void canvas.
 * Hairline borders, no drop shadows — elevation via glass blur and brand glow.
 */
export function DashboardMockup() {
  return (
    <div className="relative max-w-[1180px] mx-auto">
      {/* Ambient glow under the mockup */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-24 -top-16 -bottom-12 blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(closest-side at 50% 30%, rgba(255,120,0,0.40), transparent 70%)"
        }}
      />

      {/* Glass panel frame */}
      <div className="relative rounded-card-lg glass-strong overflow-hidden shadow-glass">
        {/* Browser chrome top bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="ml-4 flex-1 rounded-pill bg-void/60 border border-white/10 px-3 py-1 text-[11px] text-slate font-mono inline-flex items-center gap-1.5">
            <ShieldCheck size={11} className="text-brand" />
            portal.oneservidores.com / dashboard
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-pill border border-brand/30 bg-brand/10 text-brand text-[10px] font-mono uppercase tracking-[0.16em] px-2.5 py-1">
              <span className="h-1 w-1 rounded-full bg-brand animate-pulseGlow" /> LIVE
            </span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="grid grid-cols-12 bg-void/40">
          {/* Sidebar */}
          <aside className="hidden lg:flex col-span-2 flex-col border-r border-white/5 bg-void/30 py-5 px-3">
            <div className="px-2 mb-5">
              <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate">Workspace</div>
              <div className="mt-1.5 inline-flex items-center gap-1 text-body-sm font-bold text-bone-white">
                MajajiCL <ChevronDown size={12} className="text-slate" />
              </div>
            </div>
            <nav className="space-y-0.5 text-[12.5px]">
              {[
                ["Dashboard", true],
                ["Servidores VPS", false],
                ["Dedicados", false],
                ["Hosting cPanel", false],
                ["Dominios", false],
                ["Backups", false],
                ["Red & DNS", false],
                ["Facturación", false],
                ["Tickets", false]
              ].map(([label, active]) => (
                <a
                  key={label as string}
                  href="#"
                  className={
                    "block rounded-pill px-3 py-1.5 transition " +
                    (active
                      ? "bg-brand/15 text-brand font-semibold border border-brand/20"
                      : "text-bone-white/60 hover:text-bone-white hover:bg-white/5")
                  }
                >
                  {label as string}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="col-span-12 lg:col-span-10 p-5 lg:p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate">PRODUCCIÓN · SCL</div>
                <div className="mt-1 text-subheading font-bold text-bone-white">Tus servidores</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-1.5 rounded-pill border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[12px] text-slate">
                  <Search size={12} /> Buscar servidor…
                </div>
                <button className="inline-flex items-center justify-center h-8 w-8 rounded-pill border border-white/10 text-bone-white/70 hover:text-bone-white hover:border-brand transition">
                  <Bell size={13} />
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-pill bg-bone-white text-void px-3.5 py-1.5 text-[12px] font-bold hover:bg-brand transition">
                  <Plus size={12} /> Nuevo servidor
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              <StatCard label="UPTIME MENSUAL" value="99.998%"  trend="+0.002%" Icon={Activity}
                sparkData={[99.95, 99.97, 99.98, 99.99, 99.96, 99.98, 99.99]} />
              <StatCard label="SERVIDORES ACTIVOS" value="14"    trend="+2 este mes" Icon={Server}
                sparkData={[8, 9, 9, 10, 11, 12, 12, 13, 14]} />
              <StatCard label="TRÁFICO 7D" value="8.4 TB"      trend="↑ 12%" Icon={Wifi}
                sparkData={[5.8, 6.2, 6.8, 7.1, 7.4, 7.9, 8.1, 8.4]} />
              <StatCard label="AHORRO vs AWS" value="$1.2M"  trend="CLP · este mes" Icon={Globe2} highlight
                sparkData={[400, 550, 700, 820, 950, 1050, 1200]} />
            </div>

            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-12 lg:col-span-8 rounded-card border border-white/5 bg-void/40 overflow-hidden">
                <div className="grid grid-cols-12 gap-3 px-4 py-2.5 border-b border-white/5 bg-white/[0.02] text-[10px] font-mono uppercase tracking-[0.18em] text-slate">
                  <div className="col-span-4">Servidor</div>
                  <div className="col-span-2 hidden md:block">Recursos</div>
                  <div className="col-span-2 hidden md:block">Red</div>
                  <div className="col-span-2">Carga</div>
                  <div className="col-span-2 hidden md:block">Estado</div>
                </div>
                {[
                  { name: "scl-vps-prod-01", type: "VPS KVM", os: "Debian 12",    cpu: "8 vCPU",       ram: "16 GB",  net: "10 Gbps", load: 0.42, status: "Running", flag: "scl" },
                  { name: "scl-ded-db-02",   type: "Dedicado", os: "Ubuntu 22",   cpu: "AMD EPYC 32c", ram: "128 GB", net: "10 Gbps", load: 0.78, status: "Running", flag: "scl" },
                  { name: "scl-vps-cpanel",  type: "Hosting",  os: "cPanel + LSWS", cpu: "4 vCPU",     ram: "8 GB",   net: "1 Gbps",  load: 0.31, status: "Running", flag: "scl" },
                  { name: "bue-vps-app-03",  type: "VPS LXC",  os: "Alpine",       cpu: "2 vCPU",     ram: "4 GB",   net: "1 Gbps",  load: 0.18, status: "Running", flag: "bue" },
                  { name: "scl-wp-cyber",    type: "WP VPS",   os: "CyberPanel",   cpu: "4 vCPU",     ram: "8 GB",   net: "1 Gbps",  load: 0.55, status: "Deploy",  flag: "scl" }
                ].map((r) => (
                  <ServerRow key={r.name} {...r} />
                ))}
              </div>

              <div className="col-span-12 lg:col-span-4 rounded-card border border-white/5 bg-void/40 p-3">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate">
                    Actividad en vivo
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-pill border border-brand/30 bg-brand/10 text-brand text-[9px] font-mono uppercase tracking-[0.16em] px-1.5 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-brand animate-pulseGlow" /> Live
                  </span>
                </div>
                <ActivityFeed />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend, Icon, highlight = false, sparkData }: {
  label: string; value: string; trend: string; Icon: LucideIcon; highlight?: boolean; sparkData?: number[];
}) {
  return (
    <div
      className={
        "rounded-card p-3.5 relative overflow-hidden " +
        (highlight
          ? "border border-brand/30 bg-gradient-to-br from-brand/15 to-transparent"
          : "border border-white/5 bg-void/40")
      }
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-slate">
        <span>{label}</span>
        <span className={"inline-flex h-6 w-6 items-center justify-center rounded-pill " + (highlight ? "bg-brand text-void" : "bg-white/5 text-brand border border-white/10")}>
          <Icon size={11} />
        </span>
      </div>
      <div className="mt-2 text-[22px] font-bold tracking-tight text-bone-white leading-none">{value}</div>
      <div className="mt-1 text-[10.5px] text-brand font-mono uppercase tracking-wider">{trend}</div>
      {sparkData && (
        <div className="mt-2 -mb-1 -mx-1">
          <Sparkline data={sparkData} height={28} strokeWidth={1.4} color="#FFA94D" />
        </div>
      )}
    </div>
  );
}

function ServerRow({ name, type, os, cpu, ram, net, load, status, flag }: {
  name: string; type: string; os: string; cpu: string; ram: string; net: string; load: number; status: string; flag: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-3 px-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition text-[12px]">
      <div className="col-span-12 md:col-span-4 flex items-center gap-2.5 min-w-0">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-pill border border-white/10 bg-brand/10 text-brand">
          <Server size={13} />
        </span>
        <div className="min-w-0">
          <div className="font-mono text-bone-white truncate inline-flex items-center gap-1.5">
            {name}
            <span className="text-[9px] font-mono text-slate uppercase tracking-[0.16em] border border-white/10 rounded px-1 py-0.5">{flag}</span>
          </div>
          <div className="text-[10.5px] text-slate font-mono">{type} · {os}</div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-2 text-bone-white/80 hidden md:block font-mono text-[11px]">
        <div className="inline-flex items-center gap-1"><Cpu size={10} className="text-slate" /> {cpu}</div>
        <div className="inline-flex items-center gap-1 text-slate"><HardDrive size={10} className="text-slate" /> {ram}</div>
      </div>
      <div className="col-span-6 md:col-span-2 text-bone-white/80 hidden md:block font-mono text-[11px]">
        <div className="inline-flex items-center gap-1"><Wifi size={10} className="text-slate" /> {net}</div>
      </div>
      <div className="col-span-8 md:col-span-2">
        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand to-brand-glow transition-all"
            style={{ width: `${Math.round(load * 100)}%` }}
          />
        </div>
        <div className="mt-1 text-[10px] text-slate font-mono">{Math.round(load * 100)}% load</div>
      </div>
      <div className="col-span-4 md:col-span-2 hidden md:flex items-center justify-between">
        <span
          className={
            "inline-flex items-center gap-1 text-[9.5px] font-mono uppercase tracking-[0.16em] px-2 py-0.5 rounded-pill border " +
            (status === "Running"
              ? "border-white/10 bg-white/5 text-bone-white"
              : "border-brand/30 bg-brand/10 text-brand")
          }
        >
          <span className={"h-1 w-1 rounded-full " + (status === "Running" ? "bg-bone-white" : "bg-brand")} />
          {status}
        </span>
        <button className="text-slate hover:text-bone-white"><MoreHorizontal size={13} /></button>
      </div>
    </div>
  );
}
