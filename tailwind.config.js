/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'xs': '320px', // Extra small devices, like older smartphones
      // '2xs': '360px', // Small devices, typically smaller smartphones
      // 'xs': '480px',  // Small devices, commonly for compact smartphones
      // 'sm': '640px',  // Standard breakpoint for tablets and large smartphones
      'md': '768px',  // Medium devices, like small tablets
      'lg': '1024px', // Large devices, like laptops
      'xl': '1280px', // Extra large devices, like large laptops
      // '2xl': '1536px', // Extra extra large devices, like high-res screens
    },
    fontFamily: {
      'overused-grotesk': ['Overused Grotesk', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    fontWeight: {
      'thin': 100,             // Tailwind's font-thin
      'extralight': 200,       // Tailwind's font-extralight
      'light': 300,            // Tailwind's font-light, matches designer's value
      'normal': 400,           // Tailwind's font-normal
      'regular': 400,          // Designer's value, same as 'normal'
      'medium': 500,           // Tailwind's font-medium, matches designer's value
      'semibold': 600,         // Tailwind's font-semibold, matches designer's value
      'bold': 700,             // Tailwind's font-bold, matches designer's value
      'extrabold': 800,        // Tailwind's font-extrabold
      'black': 900,            // Tailwind's font-black
    },
    colors: {
      'white': '#FFFFFF',
      'green': {
        DEFAULT: '#009E73',
        900: '#1AA881',
        800: '#33B18F',
        700: '#4DBB9D',
        600: '#66C5AB',
        500: '#80CFB9',
        400: '#99D8C7',
        300: '#B3E2D5',
        200: '#CCECE3',
        100: '#E6F5F1',
      },
      'black': '#000000',
      'dark-blue': {
        DEFAULT: '#0072B2',
        900: '#1A80BA',
        800: '#338EC1',
        700: '#4D9CC9',
        600: '#66AAD1',
        500: '#80B9D9',
        400: '#99C7E0',
        300: '#B3D5E8',
        200: '#CCE3F0',
        100: '#E6F1F7',
      },
        'grey': {
          DEFAULT: '#e4e4e4',
          900: '#2e2e2e',
          800: '#5b5b5b',
          700: '#898989',
          600: '#b6b6b6',
          500: '#e4e4e4',
          400: '#e7e7e7',
          300: '#ececec',
          200: '#f2f2f2',
          100: '#f7f7f7',
          50: '#fcfcfc',
        },
      'light-blue': {
        DEFAULT: '#56B4E9',
        900: '#67BCEB',
        800: '#78C3ED',
        700: '#89CBF0',
        600: '#9AD2F2',
        500: '#ABDAF4',
        400: '#BBE1F6',
        300: '#CCE9F8',
        200: '#DDF0FB',
        100: '#EEF8FD',
      },
      'light-grey': '#F5F5F5',
      'yellow': {
        DEFAULT: '#F0E442',
        900: '#F2E755',
        800: '#F3E968',
        700: '#F5EC7B',
        600: '#F6EF8E',
        500: '#F8F2A1',
        400: '#F9F4B3',
        300: '#FBF7C6',
        200: '#FCFAD9',
        100: '#FEFCEC',
      },
      'amber': {
        DEFAULT: '#E69F00',
        900: '#E9A91A',
        800: '#EBB233',
        700: '#EEBC4D',
        600: '#F0C566',
        500: '#F3CF80',
        400: '#F5D999',
        300: '#F8E2B3',
        200: '#FAECCC',
        100: '#FDF5E6',
      },
      'orange': {
        DEFAULT: '#D96E1A',
        900: '#DD7E33',
        800: '#E18B48',
        700: '#E8A876',
        600: '#ECB78D',
        500: '#F0C5A3',
        400: '#F4D4BA',
        300: '#F7E2D1',
        200: '#FBF1E8',
        100: '#FBEFE6',
      },
      'pink': {
        DEFAULT: '#CC79A7',
        900: '#D186B0',
        800: '#D694B9',
        700: '#DBA1C1',
        600: '#E0AFCA',
        500: '#E6BCD3',
        400: '#EBC9DC',
        300: '#F0D7E5',
        200: '#F5E4ED',
        100: '#FAF2F6',
      },
      "neutral": {
        "DEFAULT": "#0a0a0a",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#525252",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717",
    },},
    extend: {
      fontSize: {
        'headline': '8.0625rem', // 129px
        'subhead-01': '2.125rem', // 34px
        'subhead-02': '1.875rem', // 30px
        'body': '1.78125rem', // 28.5px
        'caption': '1.8125rem', // 29px
        'footer': '1.40625rem', // 22.5px
        'footer-02': '1.78125rem', // 28.5px
        'statistic': '6.875rem', // 110px
        'callout': '2.4375rem', // 39px
        'graph-axis': '2.4375rem', // 39px
        'graph-key': '2.4375rem', // 39px
      },
      lineHeight: {
        'headline': '8.8125rem', // 141px
        'subhead-01': '2.8125rem', // 45px
        'subhead-02': '2.3125rem', // 37px
        'body': '2.65625rem', // 42.5px
        'caption': '2.1875rem', // 35px
        'footer': '2.375rem', // 38px
        'footer-02': '2.65625rem', // 42.5px
        'statistic': '8.9375rem', // 143px
        'callout': '3.25rem', // 52px
        'graph-axis': '3.25rem', // 52px
        'graph-key': '3.25rem', // 52px
      },
      letterSpacing: {
        'tight': '-0.01rem', // -1%
        'tighter': '-0.02rem', // -2%
        'tightest': '-0.03rem', // -3%
        'default': '0', // 0%
      },
      width: {
        '68': '17.0rem',
        '76': '19.0rem',
        '78': '19.5rem',
        '128': '32.0rem',
        '144':'36rem',
        '176': '44.0rem',
        '224': '56.0rem',
        '192':'48rem',
        '208': '52.0rem',
        '240': '60.0rem',
        '272': '68.0rem',
        '320': '80.0rem',
        '368': '92.0rem',
        '1/6': '16.666667%',
      },
      height: {
        '68': '17.0rem',
        '128': '32.0rem',
        '144':'36rem',
        '176': '44.0rem',
        '224': '56.0rem',
        '192':'48rem',
        '208': '52.0rem',
        '240': '60.0rem',
        '272': '68.0rem',
        '320': '80.0rem',
        '368': '92.0rem',
        '1/6': '16.666667%',
      },
      borderWidth:{
        '6': '6px',
      },
      gap: {
        '13': '3.366rem', // 53.86px
        '18':'4.447rem', //71.15px
        '22': '5.625rem' // 90px 
      },
      boxShadow: {
        'custom-border-xl': 'inset 0 0 0 4px #2e2e2e', 
        'custom-border-md': 'inset 0 0 0 3px #2e2e2e', 
        'custom-border-sm': 'inset 0 0 0 2px #2e2e2e', 

      },
    },
    
  },
  variants: {
    extend: {
      fill: ['group-hover'], 
    },
  },
  //plugin added
  plugins: [require('@tailwindcss/typography'), 
  require('@tailwindcss/aspect-ratio'), 
  require('@tailwindcss/container-queries'),require("flowbite/plugin")],
};

