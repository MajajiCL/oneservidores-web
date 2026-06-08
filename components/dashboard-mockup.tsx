"use client";

import { motion } from "framer-motion";
import {
  Server, Cpu, HardDrive, Wifi, ShieldCheck, MoreHorizontal,
  Search, Bell, Plus, ChevronDown, Activity, Globe2,
  LucideIcon
} from "lucide-react";
import { Sparkline } from "./sparkline";
import { ActivityFeed } from "./activity-feed";

/**
 * Dashboard mockup — fake OneServidores admin panel.
 * The "real product" visual at the center of the hero (Linear/Vercel pattern).
 */
export function DashboardMockup() {
  return (
    <div className="relative max-w-[1180px] mx-auto">
      {/* Soft brand glow under the mockup */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-20 -top-12 -bottom-8 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side at 50% 30%, rgba(255,120,0,0.25), transparent 70%)"
        }}
      />

      {/* Browser chrome frame */}
      <div
        className="relative rounded-2xl border border-ink-200 bg-white shadow-cardHover overflow-hidden"
        style={{ boxShadow: "0 30px 80px -25px rgba(15,23,42,0.25), 0 8px 20px -8px rgba(255,120,0,0.18)" }}
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ink-100 bg-ink-50/70">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c941]" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-white border border-ink-200 px-3 py-1 text-[11px] text-ink-500 inline-flex items-center gap-1.5">
            <ShieldCheck size={11} className="text-brand" />
            portal.oneservidores.com / dashboard
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-ink-500">
            <span className="inline-flex items-center gap-1 rounded-full bg-soft-orange text-brand font-semibold px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulseGlow" /> LIVE
            </span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="grid grid-cols-12">
          {/* Sidebar */}
          <aside className="hidden lg:flex col-span-2 flex-col border-r border-ink-100 bg-ink-50/30 py-5 px-3">
            <div className="px-2 mb-5">
              <div className="text-[11px] uppercase tracking-wider font-bold text-ink-500">Workspace</div>
              <div className="mt-1 inline-flex items-center gap-1 text-[13px] font-bold text-ink-900">
                MajajiCL <ChevronDown size={12} />
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
                    "block rounded px-2.5 py-1.5 transition " +
                    (active
                      ? "bg-soft-orange text-brand font-semibold"
                      : "text-ink-600 hover:bg-ink-100/60")
                  }
                >
                  {label as string}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="col-span-12 lg:col-span-10 p-5 lg:p-6">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold">Producción</div>
                <div className="mt-0.5 text-[18px] font-extrabold text-ink-900">Tus servidores</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-1.5 rounded-md border border-ink-200 px-2.5 py-1.5 text-[12px] text-ink-500">
                  <Search size={12} /> Buscar servidor…
                </div>
                <button className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-ink-200 text-ink-500 hover:bg-ink-50">
                  <Bell size={14} />
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-md bg-brand text-white px-3 py-1.5 text-[12px] font-bold hover:bg-brand-600 transition">
                  <Plus size={13} /> Nuevo servidor
                </button>
              </div>
            </div>

            {/* Stats row with sparklines */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              <StatCard label="Uptime mensual" value="99.998%"  trend="+0.002%" Icon={Activity}
                sparkData={[99.95, 99.97, 99.98, 99.99, 99.96, 99.98, 99.99]} />
              <StatCard label="Servidores activos" value="14"    trend="+2 este mes" Icon={Server}
                sparkData={[8, 9, 9, 10, 11, 12, 12, 13, 14]} />
              <StatCard label="Tráfico (7d)" value="8.4 TB"      trend="↑ 12%" Icon={Wifi}
                sparkData={[5.8, 6.2, 6.8, 7.1, 7.4, 7.9, 8.1, 8.4]} />
              <StatCard label="Ahorro vs AWS" value="$1.2M CLP"  trend="este mes" Icon={Globe2} highlight
                sparkData={[400, 550, 700, 820, 950, 1050, 1200]} />
            </div>

            {/* Two columns: servers table + activity feed */}
            <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-8 rounded-xl border border-ink-200 overflow-hidden">
              <div className="grid grid-cols-12 gap-3 px-4 py-2.5 border-b border-ink-100 bg-ink-50/60 text-[10.5px] uppercase tracking-wider text-ink-500 font-bold">
                <div className="col-span-4">Servidor</div>
                <div className="col-span-2 hidden md:block">Recursos</div>
                <div className="col-span-2 hidden md:block">Red</div>
                <div className="col-span-2">Carga</div>
                <div className="col-span-2 hidden md:block">Estado</div>
              </div>
              {[
                { name: "scl-vps-prod-01", type: "VPS KVM", os: "Debian 12", cpu: "8 vCPU", ram: "16 GB", net: "10 Gbps", load: 0.42, status: "Running", flag: "scl" },
                { name: "scl-ded-db-02",   type: "Dedicado", os: "Ubuntu 22", cpu: "AMD EPYC 32c", ram: "128 GB", net: "10 Gbps", load: 0.78, status: "Running", flag: "scl" },
                { name: "scl-vps-cpanel",  type: "Hosting",  os: "cPanel + LSWS", cpu: "4 vCPU", ram: "8 GB", net: "1 Gbps", load: 0.31, status: "Running", flag: "scl" },
                { name: "bue-vps-app-03",  type: "VPS LXC",  os: "Alpine",    cpu: "2 vCPU", ram: "4 GB",  net: "1 Gbps", load: 0.18, status: "Running", flag: "bue" },
                { name: "scl-wp-cyber",    type: "WP VPS",   os: "CyberPanel", cpu: "4 vCPU", ram: "8 GB", net: "1 Gbps", load: 0.55, status: "Deploy", flag: "scl" }
              ].map((r) => (
                <ServerRow key={r.name} {...r} />
              ))}
            </div>

              {/* Activity feed column */}
              <div className="col-span-12 lg:col-span-4 rounded-xl border border-ink-200 bg-white p-3">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="text-[10.5px] uppercase tracking-wider font-bold text-ink-500">
                    Actividad en vivo
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-soft-orange text-brand text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">
                    <span className="h-1 w-1 rounded-full bg-brand animate-pulseGlow" /> Live
                  </span>
                </div>
                <ActivityFeed />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Floating "live" pills */}
      <FloatChip
        delay={0.8}
        className="absolute -top-5 -left-2 lg:-left-10"
        Icon={Activity}
        title="Latencia"
        value="12 ms"
        sub="Santiago → BA"
      />
      <FloatChip
        delay={1.0}
        className="absolute top-1/3 -right-2 lg:-right-12"
        Icon={ShieldCheck}
        title="Anti-DDoS"
        value="0.4 Gbps"
        sub="mitigado hoy"
        accent
      />
      <FloatChip
        delay={1.2}
        className="absolute -bottom-3 left-1/3"
        Icon={Cpu}
        title="Provisión"
        value="11 min"
        sub="vps-prod-01"
      />
    </div>
  );
}

function StatCard({ label, value, trend, Icon, highlight = false, sparkData }: {
  label: string; value: string; trend: string; Icon: LucideIcon; highlight?: boolean; sparkData?: number[];
}) {
  return (
    <div
      className={
        "rounded-xl border p-3.5 relative overflow-hidden " +
        (highlight
          ? "border-brand/30 bg-gradient-to-br from-soft-orange to-white"
          : "border-ink-200 bg-white")
      }
    >
      <div className="flex items-center justify-between text-[10.5px] uppercase tracking-wider text-ink-500 font-bold">
        <span>{label}</span>
        <span className={"inline-flex h-6 w-6 items-center justify-center rounded-md " + (highlight ? "bg-brand text-white" : "bg-soft-orange text-brand")}>
          <Icon size={11} />
        </span>
      </div>
      <div className="mt-2 text-[20px] font-extrabold tracking-tight text-ink-900 leading-none">{value}</div>
      <div className="mt-1 text-[11px] text-brand font-semibold">{trend}</div>
      {sparkData && (
        <div className="mt-2 -mb-1 -mx-1">
          <Sparkline data={sparkData} height={28} strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}

function ServerRow({ name, type, os, cpu, ram, net, load, status, flag }: {
  name: string; type: string; os: string; cpu: string; ram: string; net: string; load: number; status: string; flag: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-3 px-4 py-3 border-b border-ink-100 last:border-0 hover:bg-ink-50/40 transition text-[12px]">
      <div className="col-span-12 md:col-span-4 flex items-center gap-2.5 min-w-0">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-soft-orange text-brand">
          <Server size={14} />
        </span>
        <div className="min-w-0">
          <div className="font-semibold text-ink-900 truncate inline-flex items-center gap-1.5">
            {name}
            <span className="text-[9.5px] font-bold text-ink-500 uppercase tracking-wider bg-ink-100 rounded px-1 py-0.5">{flag}</span>
          </div>
          <div className="text-[10.5px] text-ink-500">{type} · {os}</div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-2 text-ink-700 hidden md:block">
        <div className="inline-flex items-center gap-1"><Cpu size={11} className="text-ink-400" /> {cpu}</div>
        <div className="inline-flex items-center gap-1 text-ink-500"><HardDrive size={11} className="text-ink-400" /> {ram}</div>
      </div>
      <div className="col-span-6 md:col-span-2 text-ink-700 hidden md:block">
        <div className="inline-flex items-center gap-1"><Wifi size={11} className="text-ink-400" /> {net}</div>
      </div>
      <div className="col-span-8 md:col-span-2">
        <div className="h-1.5 rounded-full bg-ink-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand to-brand-600 transition-all"
            style={{ width: `${Math.round(load * 100)}%` }}
          />
        </div>
        <div className="mt-1 text-[10.5px] text-ink-500">{Math.round(load * 100)}% load</div>
      </div>
      <div className="col-span-4 md:col-span-2 hidden md:flex items-center justify-between">
        <span
          className={
            "inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full " +
            (status === "Running"
              ? "bg-green-50 text-green-700"
              : "bg-soft-orange text-brand")
          }
        >
          <span className={"h-1.5 w-1.5 rounded-full " + (status === "Running" ? "bg-green-500" : "bg-brand")} />
          {status}
        </span>
        <button className="text-ink-300 hover:text-ink-700"><MoreHorizontal size={14} /></button>
      </div>
    </div>
  );
}

function FloatChip({ Icon, title, value, sub, className = "", delay = 0, accent = false }: {
  Icon: LucideIcon; title: string; value: string; sub: string; className?: string; delay?: number; accent?: boolean;
}) {
  return (
    <motion.div
      className={"z-10 pointer-events-none " + className}
      initial={{ opacity: 0, y: 10, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        className={
          "rounded-2xl border bg-white/85 backdrop-blur-xl shadow-card px-3.5 py-2.5 min-w-[140px] " +
          (accent ? "border-brand/30" : "border-ink-200")
        }
        style={{ boxShadow: "0 12px 30px -10px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.6) inset" }}
      >
        <div className="flex items-center gap-2">
          <span className={"inline-flex h-7 w-7 items-center justify-center rounded-lg " + (accent ? "bg-brand text-white" : "bg-soft-orange text-brand")}>
            <Icon size={13} />
          </span>
          <div className="leading-tight">
            <div className="text-[9.5px] uppercase tracking-wider font-bold text-ink-500">{title}</div>
            <div className="text-[13.5px] font-extrabold text-ink-900 leading-none mt-0.5">{value}</div>
          </div>
        </div>
        <div className="mt-1 pt-1 border-t border-ink-100/70 text-[10px] text-ink-500">{sub}</div>
      </motion.div>
    </motion.div>
  );
}
