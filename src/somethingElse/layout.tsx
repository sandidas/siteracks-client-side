"use client"; // this is a client component
import { ThemeProvider } from "@/Context/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <body className="px-[4vw] dark:bg-background">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
