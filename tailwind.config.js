/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'DesktopImg1': "url('./assets/images/bg-sidebar-desktop.svg')",
        'MobileImg1': "url('./assets/images/bg-sidebar-mobile.svg')",
      },

      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },

      colors: {
        MarineBlue: 'hsl(213, 96%, 18%)',
        PurplishBlue: 'hsl(243, 100%, 62%)',
        PastelBlue: 'hsl(228, 100%, 84%)',
        LightBlue: 'hsl(206, 94%, 87%)',
        StrawberryRed: 'hsl(354, 84%, 57%)',
        CoolGray: 'hsl(231, 11%, 63%)',
        LightGray: 'hsl(229, 24%, 87%)',
        MagnoliaNeutral: 'hsl(217, 100%, 97%)',
        AlabasterNeutral: 'hsl(231, 100%, 99%)',
        WhiteNeutral: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

