"use client"; // this is a client component

import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Button } from "@mantine/core";
import HomeBanner from "@/Components/Home/HomeBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Button>Primary button</Button>
    </main>
  );
}
