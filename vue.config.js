const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    themeColor: "#181818",
    msTileColor: "#181818",
    name: "BetterBetterCompass - VideoGamesClub",
  },
  transpileDependencies: true,
});
