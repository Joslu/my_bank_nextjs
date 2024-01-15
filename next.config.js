/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // Definir redirección para la ruta de inicio
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },

  // Otras opciones opcionales...
};

module.exports = nextConfig;
