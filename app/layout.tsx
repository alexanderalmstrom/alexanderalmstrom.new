import "./css/global.css";
import { cx } from "class-variance-authority";
import { suisseIntl } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("dark:bg-black dark:text-white", suisseIntl.className)}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
