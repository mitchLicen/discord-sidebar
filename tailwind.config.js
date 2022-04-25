module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:'#202225;',
        secondary:'#f865f2;',
        gray: {
          900:'#202225',
          800:'#2f3136',
          700:'#3639f3',
          600:'#4f545c',
          400:'#d4d7dc',
          300:'#e3e4e8',
          200:'ebedef',
          100:'#f2f3f5',
        }
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
    },
  },
  plugins: [],
};