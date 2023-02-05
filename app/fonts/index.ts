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
});

export const suisseWorks = localFont({
  src: [
    {
      path: "./SuisseWorks-BookItalic-WebTrial.ttf",
      weight: "400",
    },
    {
      path: "./SuisseWorks-BoldItalic-WebTrial.ttf",
      weight: "700",
    },
  ],
  variable: "--font-suisse-works",
});

export const suisseMono = localFont({
  src: [
    {
      path: "./SuisseIntlMono-Regular-WebTrial.woff2",
      weight: "400",
    },
  ],
  variable: "--font-suisse-mono",
});
