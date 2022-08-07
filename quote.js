const quotearr = [
    "kunal betichod",
    "kunal baila",
    "kunal chok maya",
    "kunal ka ppo",
];
export const generateQuote = () => { 
    let quote = quotearr[Math.floor(Math.random() * quotearr.length)];
    return quote;
  };
