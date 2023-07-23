document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "Human strength lies in the ability to change yourself. – Saitama",
    "A dropout will beat a genius through hard work.” –  Rock Lee",
    "Forgetting is like a wound. The wound may heal, but it has already left a scar. – Monkey D. Luffy",
    "How can you keep moving forward if you keep regretting the past? – Edward Elric",
    "Being lonely is more painful than getting heart. – Monkey D. Luffy",
    "Stop pitying yourself. Pity yourself, and life becomes an endless nightmare. – Dazai",
    "Those painful memories are what help us make it to tomorrow and become stronger. – Erza Scarlet",
    "Push through the pain; giving up hurts more. – Vegeta",
    "If you don’t take risks, you can’t create a future! – Monkey D. Luffy",
    "If you don’t like your destiny, don’t accept it. – Naruto Uzumaki ",
    "Being weak is nothing to be ashamed of… Staying weak is !! – Fuegoleon Vermillion",
    "Hard work is worthless for those that don’t believe in themselves.– Naruto Uzumaki",
    "Be someone’s light when they are hopeless. – Violet evergarden",
    "Don’t worry about what other people think. Hold your head up high and plunge forward – Izuku Midoriya ",
    "THE MOMENT PEOPLE COME TO KNOW LOVE, THEY RUN THE RISK OF CARRYING HATE. – OBITO UCHIHA",
    "The longer you live… The more you realize that reality is just made of pain, suffering, and emptiness. – Madara Uchiha",
    "It’s just pathetic to give up on something before you even give it a shot. – Reiko Mikami",
    "Simplicity is the easiest path to true beauty. – Seishuu Handa",
    "Power comes in response to a need, not a desire. You have to create that need. – Goku",
    "If you master one, that’s cause for celebration. - Zenitsu Agatsuma",
    "f you can only do one thing, hone it to perfection. Hone it to the utmost limit. - Jigoro Kuwajima",
  ];

  const quoteDisplay = document.getElementById("quoteDisplay");
  const generateButton = document.getElementById("generateButton");

  generateButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote;
  });
});
