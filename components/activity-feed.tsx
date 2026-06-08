"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Activity, ShieldCheck, Server, RefreshCw } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Event = {
  Icon: LucideIcon;
  text: string;
  meta: string;
  tone: "ok" | "info" | "alert";
};

const EVENTS: Event[] = [
  { Icon: CheckCircle2, text: "scl-vps-prod-01 provisionado",      meta: "hace 11 s", tone: "ok"    },
  { Icon: ShieldCheck,   text: "DDoS 0.4 Gbps mitigado (bue-edge)",meta: "hace 38 s", tone: "info"  },
  { Icon: Server,        text: "Snapshot scl-ded-db-02 completado",meta: "hace 1 m",  tone: "ok"    },
  { Icon: RefreshCw,     text: "Reboot programado scl-wp-cyber",   meta: "hace 2 m",  tone: "info"  },
  { Icon: Activity,      text: "Pico de tráfico 7.8 Gbps en scl-edge", meta: "hace 3 m", tone: "info" },
  { Icon: AlertCircle,   text: "CPU 92% scl-app-stage — auto-scale", meta: "hace 4 m", tone: "alert" },
  { Icon: CheckCircle2,  text: "Backup diario integro (14 servidores)", meta: "hace 5 m", tone: "ok"   },
  { Icon: ShieldCheck,   text: "WAF regla custom aplicada",         meta: "hace 7 m", tone: "info"  },
  { Icon: Server,        text: "Migración a EPYC Genoa completada", meta: "hace 9 m", tone: "ok"    }
];

const toneColors = {
  ok:    { bg: "bg-green-50",  text: "text-green-700", dot: "bg-green-500" },
  info:  { bg: "bg-soft-orange", text: "text-brand", dot: "bg-brand" },
  alert: { bg: "bg-red-50",    text: "text-red-700",   dot: "bg-red-500" }
};

export function ActivityFeed() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, []);

  // Show 4 visible events, rotating
  const visible = [0, 1, 2, 3].map((i) => EVENTS[(tick + i) % EVENTS.length]);

  return (
    <div className="space-y-2">
      <AnimatePresence initial={false}>
        {visible.map((e, i) => {
          const t = toneColors[e.tone];
          return (
            <motion.div
              key={`${tick}-${i}`}
              initial={{ opacity: 0, x: -8, scale: 0.98 }}
              animate={{ opacity: 1 - i * 0.18, x: 0, scale: 1 - i * 0.01 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2.5 rounded-lg border border-ink-100 bg-white px-3 py-2"
            >
              <span className={"relative inline-flex h-7 w-7 items-center justify-center rounded-md " + t.bg + " " + t.text}>
                <e.Icon size={13} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[11.5px] font-semibold text-ink-900 truncate">{e.text}</div>
                <div className="text-[10px] text-ink-500 inline-flex items-center gap-1">
                  <span className={"h-1 w-1 rounded-full " + t.dot} />
                  {e.meta}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
