module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "account-bg": 'url("/assets/img/dream-account.jpg")',
        "game-bg": 'url("/assets/img/dream-game.jpg")',
        "deck-bg": 'url("/assets/img/dream-deck.jpg")',
        "library-bg": 'url("/assets/img/dream-library.jpg")',
      },
    },
  },
  plugins: [],
};
