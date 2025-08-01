"use client";

import { useEffect, useState } from "react";
import { M_PLUS_Rounded_1c } from "next/font/google";

// Load cute rounded font
const mPlus = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Page() {
  const [quote, setQuote] = useState<string | null>(null);
  const [character, setCharacter] = useState<string | null>(null);
  const [show, setShow] = useState<string | null>(null);

  const fetchQuote = () => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setCharacter(data.character);
        setShow(data.show);
      })
      .catch(() => setQuote(null));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (!quote) {
    return (
      <div className="flex items-center justify-center h-screen bg-pink-50">
        <p className="text-lg text-gray-400 animate-pulse">Loading quote…</p>
      </div>
    );
  }

  return (
    <div
      className={`${mPlus.className} flex items-center justify-center h-screen bg-pink-50 px-4`}
    >
      <div className="max-w-xl w-full bg-white rounded-3xl border-4 border-pink-200 shadow-[0_4px_20px_rgba(255,182,193,0.4)] p-8 text-center space-y-6 transition-all duration-300 hover:scale-[1.01]">
        <p className="text-2xl md:text-3xl font-semibold text-pink-700 leading-relaxed relative before:content-['🌸'] after:content-['✨']">
          “{quote}”
        </p>
        <p className="text-base text-gray-500">
          — <span className="font-semibold text-gray-700">{character}</span> from{" "}
          <span className="text-pink-500 font-medium">{show}</span>
        </p>
        <button
          onClick={fetchQuote}
          className="mt-4 px-6 py-2 bg-pink-400 text-white rounded-full shadow-md hover:bg-pink-500 hover:shadow-lg active:scale-95 transition-transform duration-200"
        >
          ✨ New Quote
        </button>
      </div>
    </div>
  );
}
