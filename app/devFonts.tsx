import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-Inter",
});

const syne = localFont({
  src: [
    {
      path: "../public/fonts/Syne/Syne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Syne/Syne-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Syne/Syne-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Syne/Syne-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-Syne",
});
const marcellus = localFont({
  src: [
    {
      path: "../public/fonts/Marcellus/Marcellus-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Marcellus",
});
export { inter, syne, marcellus };
