import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./components/Header.jsx";
import "./App.sass";
import Intro from "./components/Intro.jsx";
import Languages from "./components/Languages.jsx";
import Platforms from "./components/Platforms.jsx";
import Projects from "./components/Projects.jsx";
import Tools from "./components/Tools.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  let html;
  let topButton = useRef(null);
  let header = useRef(null);

  let projects = useRef(null);
  let languages = useRef(null);
  let tools = useRef(null);
  let platforms = useRef(null);

  let preTop;

  function onScroll(event) {
    const top = event.target.documentElement.scrollTop;
    const d = top - preTop;
    if (d > 0) {
      gsap.to(header.current, { y: -header.current.clientHeight });
      gsap.to(topButton.current, { scale: 1 });
    } else if (d < 0) {
      gsap.to(header.current, { y: 0, scale: 1, duration: 0.5 });
    }
    if (top < 100) {
      gsap.to(topButton.current, { scale: 0 });
    }
    preTop = top;

    scrollFadeIn(top, languages);
    scrollFadeIn(top, tools);
    scrollFadeIn(top, projects);
    scrollFadeIn(top, platforms);
  }

  function scrollFadeIn(top, el) {
    if (top + html.clientHeight / 2 + 500 > el.current.offsetTop) {
      const a = (top + html.clientHeight / 2 - el.current.offsetTop) / 300;
      gsap.set(el.current, {
        opacity: Math.min(1, a),
        y: Math.max(0, (1 - a) * 400),
      });
    }
  }

  function toTop() {
    gsap.to(html, { scrollTop: 0 });
  }

  useEffect(() => {
    html = document.documentElement;
    gsap.config({ force3D: true });
    document.addEventListener("scroll", onScroll);
    gsap.set(topButton.current, { scale: 0 });
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="superman">
      <div
        ref={header}
        className="purple80 text-gray-100 fixed top-0 w-full z-10 shadow-lg lg:flex lg:flex-row items-center"
      >
        <Header title="simon's portfolio" subtitle="禹璐的简历" />
      </div>

      <button
        ref={topButton}
        onClick={toTop}
        id="top-button"
        className="fixed z-20 top-7 left-4 rounded-full shadow-lg border-white border-2 w-10 h-10 p-2 purple80"
      >
        <img src="./assets/menu.png" alt="top" className="w-6 h-6" />
      </button>

      <div className="py-10"/>

      <Intro />
      <Languages ref={languages} />
      <Platforms ref={platforms} />
      <Projects ref={projects} />
      <Tools ref={tools} />

      <Footer />
    </div>
  );
}
