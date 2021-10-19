module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#E9E3DF',
        'secondary': '#0088a2',
        'danger': '#e3342f',
       })
    },
  },
  variants: {
    extend: {
      backgroundColor:['active']
    },
  },
  plugins: [],
};
