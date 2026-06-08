export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00D4FF',
        secondary: '#7C3AED',
        surface: 'rgba(255,255,255,0.05)'
      },
      boxShadow: {
        glow: '0 0 80px rgba(0, 212, 255, 0.16)'
      }
    }
  },
  plugins: []
};
