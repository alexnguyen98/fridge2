import { makeUrl } from "expo-linking";

export default {
  prefixes: [makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Cart: {
            screens: {
              CartScreen: "cart",
            },
          },
          Scan: {
            screens: {
              ScanScreen: "scan",
            },
          },
          Favourites: {
            screens: {
              FavouritesScreen: "favourite",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
