"use client";

import PricingPlan from "@/components/pricing-plan";
import RaceInfo from "@/components/race-info";
import Sponsor from "@/components/sponsor";
import {
  RACES,
  RACE_INFO,
  RACE_PRICING_PLANS,
  RACE_SPONSORS,
} from "../../../../public/data";

export default function Page({ params }: { params: { slug: string } }) {
  const race = RACES.find((race) => race.slug === params.slug);
  const pricingPlans = RACE_PRICING_PLANS.find(
    (pricingPlan) => pricingPlan.raceId === race!.id
  );
  const sponsors = RACE_SPONSORS[race!.id];
  const raceInfo = RACE_INFO[race!.id];

  const handlePurchase = (event: any) => {
    console.log("handle ticket purchase");
  };

  return (
    <>
      <div className="grid grid-cols-1 justify-items-center mb-10">
        <RaceInfo {...raceInfo} />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5 justify-items-center mb-10">
        {pricingPlans?.plans.map((plan) => (
          <PricingPlan
            key={plan.id}
            {...plan}
            onPurchaseClick={handlePurchase}
          />
        ))}
      </div>
      <div
        className={`flex ${
          sponsors.length < 3
            ? "flex-grow"
            : "grid md:grid-cols-3 sm:grid-cols-1"
        } gap-5 justify-items-center mb-10`}
      >
        {sponsors.map((sponsor) => (
          <Sponsor key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </>
  );
}
