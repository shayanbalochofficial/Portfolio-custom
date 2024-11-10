import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Skills } from "@/components/skills";

const page = () => {
  return (
    <div>
      <div className="">
        <h1 className="heading">About Me</h1>
        <Image
          src="/2413477.jpg"
          alt="img"
          width={200}
          height={200}
          className="img1"
        />
        <h2 className="">Microdosing Synth tattooed vexillologist</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          distinctio nihil iste quia quod quaerat temporibus dolorem,
          perferendis accusantium adipisci officia blanditiis assumenda eaque
          doloribus odio delectus. Iure non dolorem quia assumenda modi,
          necessitatibus odit dolores porro, possimus, laudantium atque. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Sunt labore, dolore
          numquam ab reiciendis quidem.
        </p>
        <div className="btn3">
          <button className="bt2">
            <FaLinkedin className="icon" />
          </button>
          <button className="bt2">
            <FaGithub className="icon" />
          </button>
          <button className="bt2">
            <FaInstagram className="icon" />
          </button>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default page;
