'use client'
import React from "react";
import NavBar from "./components/navbar"
import './assets/fontawesome/fontawesome.min.js';
import './assets/fontawesome/solid.min.js';
import Layout from "./components/Layout";

export default function Home() {
  const [theme, setTheme] = React.useState('dark');
  return (
    <main>
      <>
        <NavBar setTheme={setTheme} theme={theme} />
        <Layout theme={theme} />
      </>
    </main>
  );
}
