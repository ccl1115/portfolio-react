import React from "react";

export default function Footer() {
  return (
    <div className="py-10 lg:mx-5 rounded-t-sm lg:mb-20 bg-white text-gray-800 text-center shadow-lg">
      <div className="grid sm:grid-cols-1 lg:grid-cols-3">
        <p className="lg:col-span-3 sm:pb-0 lg:pb-10 lg:text-lg">
          © 2021 all rights reversed by Simon Yu
        </p>
        <p className="text-xs">
          <a
            target="blank"
            className="text-blue-700"
            href="https://github.com/ccl1115/portfolio"
          >
            Source code
          </a>{" "}
          of this site
        </p>
        <p className="text-xs">
          This portfolio is written using{" "}
          <a className="text-blue-700" href="https://reactjs.org">
            React
          </a>
        </p>
        <p className="text-xs">
          <a className="text-blue-700" href="https://greensock.com/gsap">
            GSAP
          </a>{" "}
          for animation and
          <a className="text-blue-700" href="https://tailwindcss.com">
            TailwindCSS
          </a>{" "}
          for styling
        </p>
        <p className="lg:col-span-3 lg:pt-10 text-xs">
          Freely hosted at{" "}
          <a className="text-blue-700" href="https://vercel.com">
            Vercel
          </a>
        </p>
      </div>
    </div>
  );
}
