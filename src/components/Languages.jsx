import React from 'react';
import Icon from './Icon.jsx';
export default function Languages() {
  return (
    <div className="blocks text-white">
      <div className="col-span-3 text-center text-2xl mb-15">使用的语言</div>
      <div className="col-span-3 lg:col-span-1">
        <div className="flex flex-row items-center justify-center float-right">
          <Icon icon="./assets/ic_java.webp" />
          <p className="m-2">Java</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm mt-1">
        精通Java语言，主要用于Android平台上的App开发。
      </div>
      <div className="col-span-3 lg:col-span-1 sm:mt-10 lg:mt-0">
        <div className="flex flex-row items-center justify-center float-right">
          <Icon icon="./assets/ic_kotlin.png" />
          <p className="m-2">Kotlin</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm mt-1">
        熟练使用Kotlin语言，使用其开发过完整的App。了解Coroutine和Flow等异步机制。
      </div>
      <div className="col-span-3 lg:col-span-1 sm:mt-10 lg:mt-0">
        <div className="flex flex-row flex-wrap items-center justify-center float-right">
          <Icon icon="./assets/ic_javascript.jpeg" />
          <Icon icon="./assets/ic_typescript.jpg" />
          <p className="m-2">JavaScript/TypeScript</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm mt-1">
        熟练使用JavaScript和TypeScript进行前端和后端开发。
      </div>
      <div className="col-span-3 lg:col-span-1 sm:mt-10 lg:mt-0">
        <div className="flex flex-row items-center justify-center float-right">
          <Icon icon="./assets/ic_dart.png" />
          <p className="m-2">Dart</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm mt-1">
        使用Dart开发Flutter应用，了解其语言特性。
      </div>
      <div className="col-span-3 lg:col-span-1 sm:mt-10 lg:mt-0">
        <div className="flex flex-row items-center justify-center float-right">
          <Icon icon="./assets/ic_python.png" />
          <p className="m-2">Python</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm mt-1">
        使用Python开发脚本任务，自动化工作等。也了解Python上的Web开发。
      </div>
    </div>
  );
}
