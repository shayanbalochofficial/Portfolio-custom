import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import Hero from "./../components/hero";

import About from "@/app/about/page";
import Projects from "@/app/projects/page";

const page = () => {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <br />
      <About />
      <br />
      <br />
      <br />
      <Projects />
    </div>
  );
};

export default page;
