import Link from "next/link";
import React from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto pt-[8vh]">
        <div className="flex justify-end">
          <Logo logoHeight="120px" logoWidth="900px" />
        </div>
      </section>
      <footer className="bg-surface">
        <section className="py-[8vh] grid grid-cols-1 md:grid-cols-4 max-w-screen-2xl mx-auto">
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Hosting Services </h3>
            <ul className="space-y-2 text-text">
              <li>
                <Link href="/"> Cloud Hosting </Link>{" "}
              </li>
              <li>
                <Link href="/"> WordPress Hosting </Link>{" "}
              </li>
              <li>
                <Link href="/"> Business Hosting </Link>{" "}
              </li>
              <li>
                <Link href="/"> pre-Managed VPS Hosting </Link>{" "}
              </li>
              <li>
                <Link href="/"> Reseller VPS Hosting </Link>{" "}
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
