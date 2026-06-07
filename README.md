# OneServidores — Sitio corporativo

Sitio web corporativo de **OneServidores** (datacenter, VPS, dedicados, hosting y colocation en Chile y Argentina), construido como una landing moderna en Next.js con dark theme, marca naranja `#FF7800` y secciones inspiradas en la arquitectura típica de sitios de infraestructura de datacenter.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS 3**
- **Framer Motion** para entradas y micro-interacciones
- **Lucide Icons**
- TypeScript estricto

## Estructura

```
app/
  layout.tsx        # metadata, fonts, header/footer wrappers
  page.tsx          # home compuesta por las secciones
  globals.css       # tokens, utilidades, Inter, scrollbar, masks
components/
  topbar.tsx        # barra superior con teléfonos y portal
  header.tsx        # navbar sticky con megamenu y CTA
  hero.tsx          # título grande + grid de capacidades
  metrics.tsx       # 6 métricas (Gbps, Tier III, NOC, SLA, países, provisión)
  capabilities.tsx  # 3 grandes capas: Datacenter, Cloud, Red
  bandwidth.tsx     # selector interactivo 1→10 Gbps con PPS/CPS/latencia
  principles.tsx    # 6 principios de operación
  sectors.tsx       # tabs de industrias (misión crítica, salud, gaming...)
  spotlight.tsx     # datacenter spotlight con rack visualization
  services-quick.tsx# 8 atajos a servicios (VPS, dedicados, hosting, etc.)
  partners-marquee.tsx # marquee de tecnologías y aliados
  cta.tsx           # bloque final de cotización + teléfono
  footer.tsx        # 4 columnas de links + contacto y RRSS
lib/
  site.ts           # configuración: nav, productos, métricas, principios, sectores
  utils.ts          # cn() para combinar clases
public/
  logo-white.png    # logo oficial OneServidores (blanco sobre dark)
  logo-dark.png     # versión oscura para fondos claros
  favicon-*.png     # íconos del sitio
```

## Comandos

```bash
npm install
npm run dev       # http://localhost:3030
npm run build
npm start         # producción en puerto 3030
```

## Tokens de marca

| Token       | Valor       | Uso                                  |
|-------------|-------------|--------------------------------------|
| `brand`     | `#FF7800`   | CTAs, acentos, hover states          |
| `brand-600` | `#E66B00`   | Hover sobre botones primarios        |
| `ink-950`   | `#070808`   | Background principal                 |
| `ink-900`   | `#0B0D0E`   | Cards y bandas alternas              |
| `ink-100`   | `#C4CACF`   | Texto secundario                     |
| `ink-50`    | `#EEF1F3`   | Texto principal                      |

Fuente: **Inter** (Google Fonts, weights 300–900).

## Datos reales usados

- Teléfonos: `+56 2 2840 2574`, `+56 9 7155 0409`
- Dirección: Ahumada 370, Of. 516, Santiago
- Portal: `portal.oneservidores.com`
- Productos: Web Hosting cPanel, VPS KVM/LXC, VPS WordPress (CyberPanel + OpenLiteSpeed), Dedicados, Colocation, Reseller, Dominios

## Licencia

Código propietario de MajajiCL / OneServidores.
