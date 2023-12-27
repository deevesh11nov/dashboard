/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: {
          "100": "#f6f7fd",
          "200": "#eef0f8",
        },
        white: "#fff",
        slategray: {
          "100": "#80808f",
          "200": "#6c7293",
          "300": "#5b5d80",
        },
        gray: {
          "100": "#212121",
          "200": "#1e1e2d",
          "300": "#1b1b28",
        },
        silver: {
          "100": "#b5b5c3",
          "200": "rgba(181, 181, 195, 0.7)",
        },
        darkslategray: {
          "100": "#464e5f",
          "200": "#434349",
        },
        orange: "#ffa800",
        whitesmoke: {
          "100": "#f3f6f9",
          "200": "#eff2f5",
          "300": "#eeeff3",
          "400": "#ebedf2",
          "500": "#eaeaea",
          "600": "#e5eaee",
        },
        royalblue: {
          "100": "#5d78ff",
          "200": "#526ae5",
        },
        dodgerblue: {
          "100": "#6993ff",
          "200": "#3699ff",
          "300": "rgba(124, 145, 253, 0.1)",
        },
        mediumseagreen: {
          "100": "#50cd89",
          "200": "#0bb783",
        },
        lightcyan: {
          "100": "#d7f9ef",
          "200": "#c9f7f5",
        },
        lightslategray: {
          "100": "#959cbd",
          "200": "#959cb6",
          "300": "#888c9f",
        },
        papayawhip: "#fff4de",
        dimgray: "#4a4b68",
        saddlebrown: "#634100",
        blueviolet: {
          "100": "#8a50fc",
          "200": "#8950fc",
        },
        lavender: "#eee5ff",
        crimson: {
          "100": "#f65464",
          "200": "#f64e60",
        },
        mistyrose: {
          "100": "#ffe2e6",
          "200": "#ffe2e5",
        },
        cadetblue: "#74bbb7",
        darkslateblue: "#663259",
        mediumturquoise: "#1bc5bd",
        tomato: "#ef6327",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "museo-sans": "'Museo Sans'",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      smi: "13px",
      mid: "17px",
      "2xs": "11px",
      sm: "14px",
      "5xl": "24px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
