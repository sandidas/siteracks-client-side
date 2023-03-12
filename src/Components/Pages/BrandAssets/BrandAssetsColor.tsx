import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const BrandAssetsColor = () => {
  return (
    <div>
      <SectionTitle title="SiteRacks Brand Color" />

      <h4 className="text-title text-center text-2xl">Primary Colors</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
        <FeatureCard customClass="bg-[#14A600]">
          <div className="text-white">#14A600</div>
          <div className="text-white">CMYK (C:80%, M:0%, Y:100%, K:0%)</div>
          <div className="text-white">RGB (R:20, G:166, B:0)</div>
        </FeatureCard>

        <FeatureCard customClass="bg-[#FFFFFF]">
          <div className="text-black">#FFFFFF</div>
          <div className="text-black">CMYK (C:0%, M:0%, Y:0%, K:0%)</div>
          <div className="text-black">RGB (R:255, G:255, B:255)</div>
        </FeatureCard>

        <FeatureCard customClass="bg-[#070A1B]">
          <div className="text-primary">#070A1B</div>
          <div className="text-primary">CMYK (C:99%, M:88%, Y:53%, K:82%)</div>
          <div className="text-primary">RGB (R:7, G:10, B:24)</div>
        </FeatureCard>
      </div>

      <h4 className="text-title text-center text-2xl pt-16">Secondary Colors</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
        <FeatureCard customClass="bg-[#1D4354]">
          <div className="text-white">#1D4354</div>
          <div className="text-white">CMYK (C:90%, M:60%, Y:45%, K:41%)</div>
          <div className="text-white">RGB (R:29, G:67, B:84)</div>
        </FeatureCard>

        <FeatureCard customClass="bg-[#E0E0E0]">
          <div className="text-black">#E0E0E0</div>
          <div className="text-black">CMYK (C:15%, M:10%, Y:11%, K:0%)</div>
          <div className="text-black">RGB (R:224, G:224, B:224)</div>
        </FeatureCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 pt-10 uppercase">
       
        <FeatureCard customClass="bg-[#43b633]">
          <div className="text-white text-base">#43b633</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#72c866]">
          <div className="text-white text-base">#72c866</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#9fd997]">
          <div className="text-slate-600 text-base">#9fd997</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#ceebca]">
          <div className="text-slate-600 text-base">#ceebca</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#ffffff]">
          <div className="text-black text-base">#ffffff</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#393b49]">
          <div className="text-white text-base">#393b49</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#6a6c76]">
          <div className="text-white text-base">#6a6c76</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#9a9ba2]">
          <div className="text-white text-base">#9a9ba2</div>    
        </FeatureCard>

              <FeatureCard customClass="bg-[#cbcccf]">
          <div className="text-black text-base">#cbcccf</div>    
        </FeatureCard>

       
        <FeatureCard customClass="bg-[#4a6976]">
          <div className="text-white text-base">#4a6976</div>    
        </FeatureCard>

       
        <FeatureCard customClass="bg-[#778c96]">
          <div className="text-white text-base">#778c96</div>    
        </FeatureCard>

       
        <FeatureCard customClass="bg-[#a3b2b9]">
          <div className="text-white text-base">#a3b2b9</div>    
        </FeatureCard>

       
        <FeatureCard customClass="bg-[#d0d7db]">
          <div className="text-black text-base">#d0d7db</div>    
        </FeatureCard>

        <FeatureCard customClass="bg-[#e4e4e4]">
          <div className="text-black text-base">#e4e4e4</div>    
        </FeatureCard>


        <FeatureCard customClass="bg-[#eaeaea]">
          <div className="text-black text-base">#eaeaea</div>    
        </FeatureCard>


        <FeatureCard customClass="bg-[#f1f1f1]">
          <div className="text-black text-base">#f1f1f1</div>    
        </FeatureCard>


      </div>
    </div>
  );
};

export default BrandAssetsColor;
