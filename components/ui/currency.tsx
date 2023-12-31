"use client";
import { useState, useEffect } from "react";

export const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">{formatter.format(Number(value))} </div>
  );
};

export default Currency;
