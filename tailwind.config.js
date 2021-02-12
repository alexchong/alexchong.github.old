const plugin = require("tailwindcss/plugin");

const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];

module.exports = {
  purge: [],

  // darkMode: false, // or 'media' or 'class'
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pidgin: {
          light: "#4660F6",
          DEFAULT: "#232739",
          dark: "#080c21",
        },
        stickyNote: "#f9f4ec",
      },
    },
    fontFamily: {
      display: ["Open Sans", ...defaultSans],
      body: ["Merriweather", ...defaultSerif],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      // TODO: Refactor Markdown styling here or other means (i.e. typography.js override or main.css)
      const article = {
        ".article h2": {
          fontSize: "1.5rem",
          lineHeight: "2rem",
        },
        ".article h3": {
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
        },
        ".article h2,.article h3,.article  h4,.article  h5.article": {
          fontWeight: "bold",
          marginBottom: "1.5rem",
        },
        ".article p": {
          marginBottom: "1.5rem",
        },
        ".article a": {
          color: "#e50b4f !important",
        },
        ".article a:hover": {
          textDecoration: "underline",
        },
        ".article pre": {
          marginBottom: "1.5rem !important", // override react-syntax-highlighter
        },
        ".article ol": {
          listStyle: "decimal",
          margin: "0 0 1.5rem 1rem",
        },
        ".article ul": {
          listStyle: "disc",
          margin: "0 0 1.5rem 1rem",
        },
        ".article blockquote": {
          marginBottom: "1.5rem, 0",
        },
      };
      addComponents(article);
    }),
  ],
};

// const defaultSans = [
//   "system-ui",
//   "-apple-system",
//   "BlinkMacSystemFont",
//   '"Segoe UI"',
//   "Roboto",
//   '"Helvetica Neue"',
//   "Arial",
//   '"Noto Sans"',
//   "sans-serif",
//   '"Apple Color Emoji"',
//   '"Segoe UI Emoji"',
//   '"Segoe UI Symbol"',
//   '"Noto Color Emoji"',
// ];

// const defaultSerif = [
//   "Georgia",
//   "Cambria",
//   '"Times New Roman"',
//   "Times",
//   "serif",
// ];

// module.exports = {
//   purge: {
//     mode: "all",
//     content: [
//       "./components/**/*.{js,ts,jsx,tsx,css}",
//       "./pages/**/*.{js,ts,jsx,tsx}",
//     ],
//     options: {
//       safelist: { deep: [/blur$/] },
//     },
//   },
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         "neon-orange": "#f92300",
//       },
//       fontSize: {
//         "7xl": "4.5rem",
//       },
//       spacing: {
//         14: "3.375rem",
//       },
//       typography: (theme) => ({
//         DEFAULT: {
//           css: {
//             color: theme("colors.gray.800"),
//             blockquote: {
//               borderLeftColor: theme("colors.gray.700"),
//             },
//             "ol > li::before": {
//               color: theme("colors.gray.700"),
//             },
//             "ul > li::before": {
//               backgroundColor: theme("colors.gray.700"),
//             },
//             a: {
//               color: theme("colors.neon-orange"),
//             },
//           },
//         },

//         dark: {
//           css: {
//             color: theme("colors.gray.100"),
//             blockquote: {
//               borderLeftColor: theme("colors.gray.300"),
//             },
//             "ol > li::before": {
//               color: theme("colors.gray.300"),
//             },
//             "ul > li::before": {
//               backgroundColor: theme("colors.gray.300"),
//             },
//             a: {
//               color: theme("colors.yellow.500"),
//             },
//             h1: {
//               color: theme("colors.gray.100"),
//             },
//             h2: {
//               color: theme("colors.gray.100"),
//             },
//             h3: {
//               color: theme("colors.gray.100"),
//             },
//             h4: {
//               color: theme("colors.gray.100"),
//             },
//             h5: {
//               color: theme("colors.gray.100"),
//             },
//             h6: {
//               color: theme("colors.gray.100"),
//             },
//             strong: {
//               color: theme("colors.gray.100"),
//             },
//             code: {
//               color: theme("colors.gray.100"),
//             },
//             figcaption: {
//               color: theme("colors.gray.100"),
//             },
//             blockquote: {
//               color: theme("colors.gray.100"),
//               borderLeftColor: theme("colors.gray.200"),
//             },
//           },
//         },
//       }),
//     },
//     fontFamily: {
//       display: ["Open Sans", ...defaultSans],
//       body: ["Merriweather", ...defaultSerif],
//     },
//   },
//   variants: {},
//   plugins: [require("@tailwindcss/typography")],
//   variants: {
//     extend: {
//       typography: ["dark"],
//     },
//   },
// };
