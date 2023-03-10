import ProductCard from '@/Components/Card/ProductCard';
import { managedVPSHostingData } from '@/Components/Data/ProductDataManagedVpsHosting';
import SectionTitle from '@/Components/SectionTitle/SectionTitle';
import React from 'react';

const ManagedVpsHostingPricing = () => {
    return (
        <div>
        <SectionTitle bottomSpace supTitle='Choose Your' title="100% Fully Managed VPS Hosting Plan" />
        <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {managedVPSHostingData.map((product, key) => (
            // type for show items component by filter
            <ProductCard className="" key={key} type="managedVpsHosting" product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default ManagedVpsHostingPricing;