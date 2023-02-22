import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";

export default createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
