"use client";

import { useEffect, useState } from "react";

export type PricingPlanProps = {
  id: number;
  title: string;
  price: number;
  opensAt: Date;
  expiresAt: Date;
  onPurchaseClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function PricingPlan({
  id,
  title,
  price,
  expiresAt,
  opensAt,
  onPurchaseClick,
}: PricingPlanProps) {
  const [expiryDate, setExpiryDate] = useState("");
  useEffect(() => {
    const formattedDate = new Date(expiresAt).toLocaleDateString();
    setExpiryDate(formattedDate);
  }, [expiresAt]);

  const expired = expiresAt < new Date();
  const notStarted = opensAt > new Date();

  if (expired) {
    return (
      <div
        key={id}
        className="p-12 max-w-sm mx-auto border-4 border-gray-700 bg-gradient-to-r from-gray-600 to-gray-700  rounded-xl shadow-lg shrink space-y-2 text-gray-400"
      >
        <div className="text-xl font-bold">{title}</div>
        <div className="text-m font-small">Price: ${price}</div>
        <div className="text-m font-small">Until: {expiryDate}</div>
        <button
          className="bg-gray-700 text-gray-500 font-bold py-2 px-4 rounded"
          disabled
        >
          Sold out
        </button>
      </div>
    );
  }

  if (notStarted)
    return (
      <div
        key={id}
        className="p-12 max-w-sm mx-auto border-4 border-gray-700 bg-gradient-to-r from-gray-700 via-slate-500 to-gray-700 rounded-xl shadow-lg shrink space-y-2 text-gray-800"
      >
        <div className="text-xl font-bold">{title}</div>
        <div className="text-m font-small">Price: ${price}</div>
        <div className="text-m font-small">Until: {expiryDate}</div>
        <button
          className="bg-gray-700 text-gray-500 font-bold py-2 px-4 rounded"
          disabled
        >
          Not started
        </button>
      </div>
    );

  return (
    <div
      key={id}
      className="p-12 max-w-sm mx-auto border-4 border-orange-300 bg-gradient-to-l from-gray-100 to-orange-300 rounded-xl shadow-lg shrink space-y-2 text-gray-800"
    >
      <div className="text-xl font-bold underline font-bold">{title}</div>
      <div className="text-m font-small">
        Price:{" "}
        <span className="underline font-bold decoration-orange-700">
          ${price}
        </span>
      </div>
      <div className="text-m font-small">Until: {expiryDate}</div>
      <button
        className="bg-orange-700 hover:bg-orange-800 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out"
        type="submit"
        onClick={(e) => onPurchaseClick(e)}
      >
        Buy
      </button>
    </div>
  );
}
