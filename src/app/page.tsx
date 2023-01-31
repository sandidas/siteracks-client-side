"use client"; // this is a client component
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Button } from "@mantine/core";
import HomeBanner from "@/Components/Home/HomeBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <HomeBanner />
      <Button>Primary button</Button>
    </main>
  );
}
