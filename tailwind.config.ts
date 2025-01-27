import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

const config: Config = {
  darkMode: 'selector',
  important: true,
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveDown: {
          '0%': { top: '0%' },
          '100%': { top: 'calc(100% - 2rem)' }, // Adjust based on highlighter height
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        moveDown: 'moveDown 10s linear infinite',
      },
      screens: {
        'sssm:': '320px',
        'ssm': '400px',
        'sslg': '580px',
        'sm': '640px',
        'md': '768px',
        'slg': '800px',
        'mlg': '900px',
        'lg': '1024px',
        'xlg': '1150px',
        "xxlg": "1200px",
        'xl': '1280px',
        '0.5xl': '1366px',
        '2xl': '1536px'
      },
      borderRadius: {
        "2.5xl": "20px"
      },
      boxShadow: {
        'course_card-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        contactFormShadow: "0px 4px 9.3px 0px rgba(0, 0, 0, 0.25)"
      },
      margin: {
        "4.5": "14px"
      },
      width: {
        "80%": "80%",
        "428px": "428px",
        "508px": "508px",
        "600px": "600px",
        "116px": "116px"
      },
      height: {
        "284px": "284px",
        "416px": "416px",
        "554px": "554px",
        "600px": "600px",
        "342px": "342px",
        "282px": "282px",
        "116px": "116px"
      },
      fontFamily: {
        nooriNastaleeq: ['"Noto Nastaliq Urdu", serif'],
        raleway: ['"Raleway", sans-serif', ...defaultTheme.fontFamily.sans],
        inika: ["Inika", ...defaultTheme.fontFamily.serif],
        kavivanar: ["Kavivanar", 'cursive'],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
        roboto: ['Roboto', 'sans'],
        scheherazadeNew: ['Scheherazade New', ...defaultTheme.fontFamily.serif],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        primary: "#037CDF",
        buttons: "#037CDF",
        navText: "#2B2525",
        mobileNavBg: "#037cdf",
        navItemHeaderBg: "#262626",
        headerSearchFieldBg: "#313131",
        bannerHeadingText: "#2220A5",
        bannerHeadingCaption: "rgba(0, 0, 0, 0.70)",
        lightHeadingText: "#030098",
        darkHeadingText: "#8ab9ee",
        courseCardText: "#0B0B0A",
        courseCardLightBg: "#E9E9E9",
        courseCardDarkBg: "#272727",
        courseCardDarkButtonText: "#FFFDFD",
        heading: "#242424",
        paragraph: "#575757",
        grayButtonBg: "#EDEDED",
        islamicNewsAndUpdateParagraph: "#DADADA",
        LandingPageButton: "#373737",
        urduCommunityEventsTitle: "#333333",
        communityEventsCardTitleBlock: "#004F90",
        ourImpactBg: "#D8EDFF",
        footerBg: "#1C1C1C",
        greenHeading: "#00EB7D",
        staticCalenderBg: "#004F90",

        // Pricing Page
        pricingCardBg: "#F9F8F8",
        pricingCardHeading: "rgba(11, 11, 10, 0.90)",

        // About Us Page 
        aboutUsLeftBannerBg: "#DBAE10",
        aboutUsRightBannerBg: "#E9D694",
        aboutGoalsHeader: "#FBFBFF",
        aboutGoalsBottomBar: "#DEAE07",
        appSecondary: "#F0F0F0",

        // Contact Us Form 
        contactFormHeading: "#000007",
        contactFormSubHeading: "#1D1C1C"
      },
      backgroundImage: {
        "library_banner": "url('/Library/banner.png')",
        "contact_us_banner": "url('/Contact/banner.png')",
        "about_us_banner": "url('/about-us/AboutUsBanner.jpg')",
        "curved_lines_texture": "url('/Home/IslamicNewsAndUpdates/curved_lines.png')",
        // Snapshots of our Impact
        "snapshots1": "url('/Home/SnapShotsOfOurImpact/1.png')",
        "snapshots2": "url('/Home/SnapShotsOfOurImpact/2.png')",
        "snapshots3": "url('/Home/SnapShotsOfOurImpact/3.png')",
        "snapshots4": "url('/Home/SnapShotsOfOurImpact/4.png')",
        "snapshots5": "url('/Home/SnapShotsOfOurImpact/5.png')",
        "snapshots6": "url('/Home/SnapShotsOfOurImpact/6.png')"
      },
      fontSize: {
        "40px": "40px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
export default config;
