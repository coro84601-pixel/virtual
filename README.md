Virtual Shopping - Plataforma de Tiendas Virtuales Multi-tenant

Plataforma web que permite a proveedores gestionar sus propias tiendas virtuales con catálogos públicos, gestión de pedidos y un sistema POS integrado para ventas presenciales.

Características Principales

🏪 Tiendas Virtuales Individualizadas
Cada proveedor dispone de su propio catálogo público accesible mediante una URL compartible.

📱 Catálogo Público
Los clientes pueden navegar productos y realizar pedidos sin necesidad de registrarse.

🛒 Gestión Completa de Productos
Soporte para múltiples presentaciones de productos (unidad, docena, caja) con control de stock unificado.

💰 Sistema Multi-moneda
Soporte para BOB, USD y ARS con manejo automático de precios.

📊 Panel de Administración
Gestión de cuentas, suscripciones y aprobación de proveedores dentro de la plataforma.

🖨️ Sistema POS
Permite realizar ventas presenciales rápidas y generar comprobantes o tickets automáticamente.

🔐 Control de Acceso a Catálogos
Los proveedores pueden configurar sus catálogos como públicos o privados con clave de acceso.

Stack Tecnológico

Frontend

React 19

TypeScript 5

Vite 7

Backend

Supabase (PostgreSQL, Auth y Storage)

Estilos

Tailwind CSS 4

Mapas

Leaflet para geolocalización de tiendas

PDF

jsPDF para generación de comprobantes

Arquitectura

La aplicación está desarrollada como una SPA (Single Page Application) con separación de datos mediante provider_id.

El sistema maneja tres roles principales:

Customer → acceso al catálogo público (/catalogo/:providerId)

Provider → dashboard completo para gestión de la tienda

Admin → panel de administración de proveedores

Flujo de Pedidos

El sistema permite crear pedidos desde dos puntos de entrada:

Catálogo público

Sistema POS

Ambos utilizan el mismo proceso de creación de pedidos y generan comprobantes en PDF automáticamente.

Notas

El sistema maneja stock unificado mediante factores de conversión entre presentaciones de producto y permite configurar catálogos privados protegidos por clave.

