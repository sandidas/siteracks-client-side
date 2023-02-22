import Link from "next/link";
import React from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto pt-[10vh] px-5">
        <div className="flex justify-end">
          <Logo logoHeight="120px" logoWidth="900px" />
        </div>
      </section>
      <footer className="bg-surface px-5">
        <section className="py-[10vh] grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-2xl mx-auto">
          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Hosting </h3>
            <ul className="space-y-4 text-text text-sm">
              <li>
                <Link href="/" className="hover:text-title">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  WordPress Hosting
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Business Hosting
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  pre-Managed VPS Hosting
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Reseller VPS Hosting
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Professional Email
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Domain </h3>
            <ul className="space-y-4 text-text text-sm">
              <li>
                <Link href="/" className="hover:text-title">
                  Register a New Domain
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Transfer Domain To Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Privacy & Protection for Domains
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Domain WHOIS
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Security </h3>
            <ul className="space-y-4 text-text text-sm">
              <li>
                <Link href="/" className="hover:text-title">
                  Website Backups
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  SSL Certificates
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  SiteLock Certificates
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Wildcard SSL
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Help</h3>
            <ul className="space-y-4 text-text text-sm">
              <li>
                <Link href="/" className="hover:text-title">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Open Support Ticket
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">SiteRacks </h3>
            <ul className="space-y-4 text-text text-sm">
              <li>
                <Link href="/" className="hover:text-title">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-title">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-title">
                  Brand Assets
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className=" max-w-screen-2xl mx-auto ">
          <div className="py-5 flex items-center justify-between">
            <Logo logoWidth="250px" logoHeight="33px" />
            <div className="flex">
              <div>F</div>
              <div>T</div>
              <div>I</div>
            </div>
          </div>
          <div className="py-[2vh] border-t border-slate-300 dark:border-slate-600 text-text">
            <p>Copyright © 2023 SiteRacks, LLC. All Rights Reserved.</p>
            <p className="text-xs">
            All trademarks, logos, and brand names are the property of their respective owners.
            </p>
            <ul className="flex text-sm gap-5 justify-end">
            <li> <Link href="/" className="hover:text-title"> Terms and Conditions </Link> </li>
            <li> <Link href="/" className="hover:text-title"> Privacy Policy </Link> </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
