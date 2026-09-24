# 📋 Guía para el Vendedor: Cómo Administrar tu Catálogo de Lámparas 3D

¡Felicitaciones! Tu sitio web está diseñado con una arquitectura moderna que **no requiere base de datos de pago ni servidores complejos**. 

Para editar, agregar productos o cambiar precios, solo modificás los archivos JSON dentro de la carpeta `src/data/`.

---

## 1. Modificar Productos y Precios (`src/data/products.json`)

Abrí el archivo `src/data/products.json`. Cada producto tiene la siguiente estructura:

```json
{
  "id": "spiral-dune",
  "slug": "spiral-dune",
  "name": "Spiral Dune",
  "tagline": "Estructura helicoidal continua para mesa con difusión 360°",
  "description": "Una obra de arte paramétrica inspirada en las dunas...",
  "category": "Mesa",
  "price": 48500,
  "currency": "ARS",
  "installmentsText": "3 cuotas sin interés o 10% OFF por transferencia",
  "image": "/images/spiral-dune.png",
  "galleryImages": [
    "/images/spiral-dune.png",
    "/images/voronoi-cellular.png"
  ],
  "dimensions": {
    "height": "32 cm",
    "diameter": "22 cm",
    "weight": "680 g"
  },
  "specs": {
    "layerResolution": "0.20mm micro-capas de precisión",
    "material": "Bio-PLA sustentable de almidón de maíz",
    "bulbSocket": "E27 LED Cálido 2700K (Incluido)",
    "cableType": "Cable textil vintage 1.8m con interruptor",
    "productionTime": "22 horas de impresión aditiva continua"
  },
  "finishes": [
    {
      "id": "arena",
      "name": "Arena Marplatense",
      "hex": "#E5DFD3",
      "description": "Textura mate arenosa con sutil veteado orgánico"
    },
    {
      "id": "terracota",
      "name": "Terracota Costero",
      "hex": "#C87D55",
      "description": "Tono arcilla cálido"
    }
  ],
  "stockStatus": "in_stock",
  "stockText": "En Stock Mar del Plata (Entrega 24/48 hs)"
}
```

### ¿Cómo cambiar un precio?
- Buscá `"price": 48500` y cambialo por el nuevo número (por ejemplo `"price": 52000`).

### ¿Cómo cambiar la disponibilidad de stock?
- Si tenés la lámpara en taller lista para entrega: `"stockStatus": "in_stock"`
- Si la fabricás bajo pedido: `"stockStatus": "made_to_order"`

### ¿Cómo agregar una nueva foto?
- Colocá la imagen en la carpeta `public/images/mi-lampara.jpg`
- En el JSON colocás: `"image": "/images/mi-lampara.jpg"`

---

## 2. Modificar WhatsApp y Datos Bancarios (`src/data/settings.json`)

En `src/data/settings.json` podés configurar:
- **`whatsappNumber`**: El número internacional de WhatsApp sin símbolos (ej: `"5492235000000"`).
- **`phoneDisplay`**: Cómo se muestra en pantalla (ej: `"+54 9 223 500-0000"`).
- **`bankAccount`**:
  - `alias`: Tu Alias de Mercado Pago o Banco (ej: `"LUMINA.3D.MDP"`).
  - `cbu`: Tu CBU / CVU oficial.
  - `holderName`: Tu nombre o razón social.
- **`freeShippingZones`**: Lista de barrios con entrega gratuita en Mar del Plata.

---

## 3. Flujo de Venta Automático hacia WhatsApp

1. El cliente entra a la web, prueba el simulador de luz 2700K y elige una lámpara.
2. Al tocar **"Pedir por WhatsApp"**, se le abre WhatsApp con un mensaje prearmado con el nombre exacto de la lámpara, el color elegido y su consulta para entrega en Mar del Plata.
3. El vendedor negocia / confirma y le envía el Alias/CBU.
4. El cliente transfiere o abona contra entrega y el vendedor realiza el envío a domicilio.
