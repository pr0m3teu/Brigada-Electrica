// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const poppinsFontOptions = {
  variants: [
    {
      weight: 300,
      style: "normal",
      src: ["./src/assets/fonts/Poppins/Poppins-Light.ttf"]
    },
    {
      weight: 400,
      style: "normal",
      src: ["./src/assets/fonts/Poppins/Poppins-Regular.ttf"]
    },
    {
      weight: 500,
      style: "normal",
      src: ["./src/assets/fonts/Poppins/Poppins-Medium.ttf"]
    },
    {
      weight: 600,
      style: "normal",
      src: ["./src/assets/fonts/Poppins/Poppins-SemiBold.ttf"]
    },
    {
      weight: 700,
      style: "normal",
      src: ["./src/assets/fonts/Poppins/Poppins-Bold.ttf"]
    },
  ],
};

const montserratFontOptions = {
  variants: [
    {
      weight: 300,
      style: "normal",
      src: ["./src/assets/fonts/Montserrat/Montserrat-Light.ttf"],
    },
    {
      weight: 400,
      style: "normal",
      src: ["./src/assets/fonts/Montserrat/Montserrat-Regular.ttf"],
    },
    {
      weight: 500,
      style: "normal",
      src: ["./src/assets/fonts/Montserrat/Montserrat-Medium.ttf"],
    },
    {
      weight: 600,
      style: "normal",
      src: ["./src/assets/fonts/Montserrat/Montserrat-SemiBold.ttf"],
    },
    {
      weight: 700,
      style: "normal",
      src: ["./src/assets/fonts/Montserrat/Montserrat-Bold.ttf"],
    },
  ],
}



// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Poppins",
      cssVariable: "--font-poppins",
      options: poppinsFontOptions,

    },
    {
      provider: fontProviders.local(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      options: montserratFontOptions,
    }
  ]
});


