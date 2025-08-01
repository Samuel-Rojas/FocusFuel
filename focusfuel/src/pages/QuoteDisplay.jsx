import { useState, useEffect } from "react";

export default function QuoteDisplay() {
  const API_QUOTE_KEY = "mrwhmrr/HrE2uYHrdbkZDw==rqTvoKFO3meBdW9J";
  const api_url = "https://api.api-ninjas.com/v1/advice";

  const [quote, storeQuote] = useState('');

  async function getQuote() {
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "X-Api-Key": API_QUOTE_KEY,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${await response.text()}`);
      }
      const data = await response.json();
      console.log(data);
      storeQuote(data);
      return data;
    } catch (err) {
      console.error("could not fetch", err);
    }
  }

//   useEffect(() => {
//     getQuote()
//   }, []);
 
  return (
    <div className="border-1 rounded-2xl p-6">
      <h2 className="flex items-center justify-center">Quote Will Go Here</h2>
    </div>
  );
}
