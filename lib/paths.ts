const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/oneservidores-web" : "";

export function asset(p: string): string {
  const clean = p.startsWith("/") ? p : `/${p}`;
  return `${basePath}${clean}`;
}
