import React from 'react';
export default function Header({title, subtitle}) {
  return (
    <>
      <div className="grid grid-cols-6 gap-0 h-30 pt-5 pb-5 lg:w-1/2">
        <div className="col-span-1 flex flex-row items-end justify-end" />
        <div className="col-start-2 col-span-4 flex flex-col items-start px-5">
          <p className="text-lg text-gray-100">{title}</p>
          <p className="text-sm text-gray-300">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center mx-10 mb-1 gap-x-5 text-sm lg:w-1/2">
        <a
          className="p-2 rounded-lg hover:text-gray-800 hover:bg-gray-400 hover:shadow-md transition-all"
          href="https://blog.bbsimonyu.com"
        >
          BLOG
        </a>
        <a
          className="p-2 rounded-lg hover:bg-gray-400 hover:shadow-md transition-all"
          href="https://github.com/ccl1115"
        >
          <img className="w-6 h-6" src="./assets/ic_github.png"/>
        </a>
      </div>
    </>
  );
}
