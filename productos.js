// ════════════════════════════════════════════════════════════════════
//  DATOS DE LA TIENDA — editá este archivo para cambiar productos y precios.
//  Este archivo es PÚBLICO: no pongas costos ni ganancias acá.
// ════════════════════════════════════════════════════════════════════

// Número de WhatsApp que recibe los pedidos (código de país + área, sin + ni espacios).
const WHATSAPP = '5493534171117';

// OFERTA con cuenta regresiva (se muestra arriba de Productos y en la barra superior).
//   texto:   qué se ofrece, ej: '10% OFF en toda la línea Elfbar'
//   termina: día en formato 'AAAA-MM-DD'; termina ese día a las 23:59 (hora de Argentina).
//   descuento: % que se descuenta del precio por cantidad mientras dure la oferta
//              (0 = solo se muestra el aviso, los precios no cambian).
//   productos: ids a los que aplica, ej: ['trio', 'pod_kit']. Vacío = todos.
// Cuando la fecha pasa, o si texto queda vacío, la oferta se apaga sola.
const OFERTA = {
  texto:     '5% OFF en todos los productos',
  termina:   '2026-10-15',
  descuento: 5,
  productos: [],
};

// px: precio POR UNIDAD según cuántas unidades de ese producto lleve el cliente.
//   1 → de 1 a 4 u. · 5 → de 5 a 9 u. · 10 → de 10 a 19 u. · 20 → 20 u. o más
// imagen: nombre del archivo dentro de la carpeta img/ (ej: 'ice-king.webp').
//   Si está vacío se muestra un placeholder.
const PRODUCTOS = [
  { id: 'elfbar_ice_king_40000', nombre: 'ELF BAR ICE KING 40K', imagen: 'elf-bar-ice-king-40k.webp', px: { 1: 24000, 5: 21500, 10: 21000, 20: 20500 } },
  { id: 'bc_40k_pro',            nombre: 'ELF BAR EB CREATE BC 40K PRO', imagen: 'elf-bar-eb-create-bc-40k-pro.webp', px: { 1: 18000, 5: 16000, 10: 15500, 20: 15000 } },
  { id: 'elfbar_te30000',        nombre: 'ELF BAR TE 30K', imagen: 'elf-bar-te-30k.webp', px: { 1: 22000, 5: 20000, 10: 19500, 20: 19000 } },
  { id: 'trio',                  nombre: 'ELF BAR TRIO 40K', imagen: 'elf-bar-trio-40k.webp', px: { 1: 23000, 5: 19500, 10: 19000, 20: 18500 } },
  { id: 'funky_lands_ti7000',    nombre: 'FUNKY LANDS TI 7000', imagen: 'funky-lands-ti-7000.webp', px: { 1: 11000, 5: 9500,  10: 9250,  20: 9000  } },
  { id: 'pod_kit',               nombre: 'LIFE POD PRO 8K', imagen: 'life-pod-pro-8k.webp', px: { 1: 18000, 5: 16000, 10: 15500, 20: 15000 } },
];
