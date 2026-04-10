/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Obligatorio para GitHub Pages
  images: {
    unoptimized: true, // GitHub no tiene servidor para optimizar imágenes de Next
  },
  // IMPORTANTE: Si tu repositorio se llama, por ejemplo, "portfolio", 
  // debés ponerlo acá abajo entre las barras. 
  // Si tu repo se llama exactamente "tuusuario.github.io", dejalo vacío: ''
  basePath: '/LautaroSalina99.github.io', 
};

export default nextConfig;