import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import LiveChat from "@/Components/LiveChat/LiveChat";
import WebHostingArticle from "@/Components/Pages/WebHosting/WebHostingArticle";
import WebHostingBanner from "@/Components/Pages/WebHosting/WebHostingBanner";
import WebHostingEssentials from "@/Components/Pages/WebHosting/WebHostingEssentials";
import WebHostingFaq from "@/Components/Pages/WebHosting/WebHostingFaq";
import WebHostingPremiumAdvantage from "@/Components/Pages/WebHosting/WebHostingPremiumAdvantage";
import WebHostingPricing from "@/Components/Pages/WebHosting/WebHostingPricing";

// import axios from "axios";
// import Head from "next/head";
import React, { FC } from "react";

// interface IProductFetch {
//   webHosting: { child: [{}] };
// }
// export interface IProductProps {
//   products: [];
// }

const WebHosting = () => {
  return (
    <>
      {useDynamicHead({ slug: "webHosting" })}

      <main>
        <section className="bg-surface">
          <WebHostingBanner />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingPricing />
        </section>
        <WebHostingArticle />
        <LiveChat />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingEssentials />
        </section>
        <MoneyBackGuarantee />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingPremiumAdvantage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingFaq />
        </section>
      </main>
    </>
  );
};

// export async function getStaticProps() {
//   const res = await axios.get<IProductFetch>("http://localhost:3000/json/products.json");
//   const products = res.data?.webHosting?.child;
//   return {
//     props: { products },
//   };
// }

export default WebHosting;
