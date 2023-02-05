import localFont from "@next/font/local";

export const suisseIntl = localFont({
  src: [
    {
      path: "./SuisseIntl-Bold-WebTrial.woff2",
      weight: "700",
    },
    {
      path: "./SuisseIntl-SemiBold-WebTrial.woff2",
      weight: "600",
    },
    {
      path: "./SuisseIntl-Medium-WebTrial.woff2",
      weight: "500",
    },
    {
      path: "./SuisseIntl-Regular-WebTrial.woff2",
      weight: "400",
    },
  ],
  variable: "--font-suisse-intl",
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  adjustFontFallback: false,
});

export const suisseWorks = localFont({
  src: [
    {
      path: "./SuisseWorks-BookItalic-WebTrial.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./SuisseWorks-BoldItalic-WebTrial.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-suisse-works",
  fallback: ["Times New Roman", "Times", "serif"],
  adjustFontFallback: false,
});

export const suisseMono = localFont({
  src: [
    {
      path: "./SuisseIntlMono-Regular-WebTrial.woff2",
      weight: "400",
    },
  ],
  variable: "--font-suisse-mono",
  fallback: [
    "ui-monospace",
    "Cascadia Mono",
    "Segoe UI Mono",
    "Ubuntu Mono",
    "Roboto Mono",
    "Menlo",
    "Monaco",
    "Consolas",
    "monospace",
  ],
  adjustFontFallback: false,
});
