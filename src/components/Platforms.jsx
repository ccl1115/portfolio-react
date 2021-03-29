import React, { forwardRef } from "react";
import Icon from "./Icon";
export default forwardRef((_, ref) => {
  return (
    <div ref={ref} className="blocks text-white">
      <div className="col-span-3 text-center text-2xl">开发平台</div>
      <div className="col-span-3 lg:col-span-1">
        <div className="flex flex-row items-center justify-center float-right">
          <Icon icon="./assets/ic_android.jpg" />
          <p className="m-2">Android</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm pt-1">
        <p>多年在Android平台上开发App的经验</p>
        <p>
          使用JetPack进行高效的开发(ViewModel, LiveData, NavigationUI, Room)
        </p>
        <p>使用Kotlin进行开发</p>
        <p>使用Flutter开发Android应用</p>
        <p>熟悉Dagger(Hilt), Koin等依赖注入设计模式</p>
        <p>高级的UI开发，自定义控件, Canvas绘制</p>
        <p>内存优化，内存泄漏查找</p>
        <p>Android系统源码二次开发</p>
      </div>

      <div className="col-span-3 lg:col-span-1 sm:mt-10 lg:mt-0">
        <div className="flex flex-row items-center justify-center float-right">
          <Icon icon="./assets/ic_flutter.png" />
          <p className="m-2">Flutter</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm pt-1">
        <p>熟悉声明式开发模式</p>
        <p>熟悉Dart语言</p>
        <p>BloC, MobX等无状态化开发模式</p>
      </div>

      <div className="col-span-3 lg:col-span-1 sm:mt-10 lg:mt-0">
        <div className="flex flex-row items-center justify-center float-right">
          <Icon icon="./assets/ic_nodejs.png" />
          <p className="m-2">NodeJS as Back End</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm pt-1">
        <p>在NodeJS平台上开发简单的API服务，中间件，WebSocket应用服务</p>
        <p>Express, Koa, Hapi等常用轻量级服务框架</p>
        <p>熟悉非阻塞异步IO编程思想</p>
        <p>Strapi等Headless CMS框架</p>
        <p>LoopBack网络服务开发框架</p>
      </div>

      <div className="col-span-3 lg:col-span-1 sm:mt-10 lg:mt-0">
        <div className="flex flex-row flex-wrap items-center justify-center float-right">
          <Icon icon="./assets/ic_react.png" />
          <Icon icon="./assets/ic_vuejs.png" />
          <p className="m-2">Front End Stack</p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm pt-1">
        <p>使用Vue/React/Svelte开发网页应用，管理后台等</p>
        <p>了解SSR, NuxtJS等服务端渲染</p>
        <p>Webpack, Gulp, Eslint, Babel, Yarn等工具链</p>
        <p>SASS, LESS等样式扩展</p>
        <p>Tailwind/Bootstrap等CSS框架</p>
        <p>Nx, Lerna等多项目管理工具</p>
        <p>了解最新的ECMAScript规范</p>
        <p>了解PWA, Responsive, WebAssembly, WebGL等现代Web技术</p>
        <p>使用Lighthouse优化网页</p>
      </div>
      <div className="col-span-3 lg:col-span-1 text-right sm:mt-10 lg:mt-0">
        其他前端
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm pt-1">
        <p>微信小程序开发</p>
        <p>UniApp开发</p>
        <p>Electron开发桌面应用</p>
      </div>
    </div>
  );
});
