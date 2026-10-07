# Redirecciones 301 · WordPress → Next.js

Generado el 2026-10-02 comprobando las dos puntas: que la URL de
WordPress responda hoy y que la ruta de Next exista en el build.

## Listas

| origen | destino |
|---|---|
| `/` | `/` |
| `/co-location/` | `/colocation` |
| `/contacto/` | `/contacto` |
| `/footer/` | `/` |
| `/nosotros/` | `/nosotros` |
| `/reseller/` | `/hosting/reseller` |
| `/servidores-dedicados/` | `/dedicados` |
| `/servidores-vps-kvm/` | `/vps/kvm` |
| `/servidores-vps-lxc/` | `/vps/lxc` |
| `/servidores-vps-wordpress/` | `/hosting/wordpress` |
| `/webhosting/` | `/hosting` |

## Huecos — resolver ANTES de cortar

- `/politica-privacidad/` — falta la página en Next
- `/terminos-condiciones/` — falta la página en Next

## WooCommerce (14 URLs)

Productos y categorías de la demo del tema, no de OneServidores.
Si no se migran, deben devolver **410 Gone**, no 301 a la portada:
redirigir contenido borrado a la home le dice a Google que la home
es un duplicado.

- `/product-category/decor/`
- `/product-category/hardware-solutions/`
- `/product-category/hardware-solutions/connectivity-and-accessories/`
- `/product-category/hardware-solutions/hosting-solutions/`
- `/product-category/hardware-solutions/infrastructure-management/`
- `/product-category/security-and-backup/`
- `/product/data-center-rack-space/`
- `/product/hardware-firewall-appliance/`
- `/product/kvm-over-ip-console/`
- `/product/managed-backup-appliance/`
- `/product/managed-hosting-service-package/`
- `/product/network-switch/`
- `/product/rack-mounted-server/`
- `/product/uninterruptible-power-supply/`

## nginx / Apache

```nginx
rewrite ^/$ / permanent;
rewrite ^/co-location$ /colocation permanent;
rewrite ^/contacto$ /contacto permanent;
rewrite ^/footer$ / permanent;
rewrite ^/nosotros$ /nosotros permanent;
rewrite ^/reseller$ /hosting/reseller permanent;
rewrite ^/servidores-dedicados$ /dedicados permanent;
rewrite ^/servidores-vps-kvm$ /vps/kvm permanent;
rewrite ^/servidores-vps-lxc$ /vps/lxc permanent;
rewrite ^/servidores-vps-wordpress$ /hosting/wordpress permanent;
rewrite ^/webhosting$ /hosting permanent;
```
