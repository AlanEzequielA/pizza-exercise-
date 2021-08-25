import Head from "next/head";
import { GlobalStyle } from "../../globalStyle";
import { Hero } from "../components/hero";
import Products  from "../components/products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizzaaa</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Hero />
      <Products />
    </div>
)};