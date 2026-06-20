import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import {  readFileSync } from 'fs';
import posthtml from "@vituum/vite-plugin-posthtml";
import include from "posthtml-include";
import expressions from "posthtml-expressions";


const SITE_DATA_PATH = "src/data/site.json";
const siteData = readSiteData();
console.log(siteData);

export default defineConfig({
  plugins: [
    tailwindcss(),
    posthtml({
      root: "./src",
      plugins: [
        include({ root: resolve(__dirname, 'src') }),
        expressions({ locals: siteData }),
      ] 
    }),
  ],
  base: '/',
  build: {
    rollupOptions : {
      input: {
        main: resolve(__dirname, "index.html"),
        servicii: resolve(__dirname, "servicii.html")
      },
    },
  },
});


function readSiteData()
{
  try {

    return JSON.parse(
      readFileSync(resolve(__dirname, SITE_DATA_PATH))
    );
  }
  catch (error) {
    console.error(`ERROR during site data loading: ${error}`);
    return {};
  } 
}
