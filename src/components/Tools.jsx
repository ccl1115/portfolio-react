import React, { forwardRef } from "react";
import Icon from "./Icon.jsx";

export default forwardRef((_, ref) => {
  return (
    <div ref={ref} className="blocks2 text-white">
      <div className="col-span-2 lg:col-span-4 text-center text-2xl mb-15">
        使用的工具
      </div>
      <Icon icon="./assets/ic_android_studio.png" />
      <div className="mt-1 text-sm">开发Android和Flutter应用</div>
      <Icon icon="./assets/ic_vscode.png" />
      <div className="mt-1 text-sm">
        常用的代码编辑工具, 开发Vue, Flutter等平台下的程序
      </div>
      <Icon icon="./assets/ic_vim.png" />
      <div className="mt-1 text-sm">使用Vim在终端环境下的文本编辑工具</div>
      <Icon icon="./assets/ic_git.png" />
      <div className="mt-1 text-sm">
        Git Flow模式, branch, rebase, cherry-pick等高级Git使用, 搭建Git仓库
      </div>
      <Icon icon="./assets/ic_jetbrains.jpg" />
      <div className="mt-1 text-sm">
        JetBrains系列IDE, 包括WebStore, PyCharm, IntelliJ等
      </div>
      <Icon icon="./assets/ic_docker.png" />
      <div className="mt-1 text-sm">
        使用Docker快速搭建和维护各种基础服务, mysql, redis, gitlab, jenkins等,
        搭建开发和测试环境
      </div>
      <Icon icon="./assets/ic_figma.jpeg" />
      <div className="mt-1 text-sm">使用Figma简单的应用UI原型制作</div>
      <Icon icon="./assets/ic_illustrator_photoshop.jpg" />
      <div className="mt-1 text-sm">
        使用Photoshop和Illustrator进行切图，简单的图标制作
      </div>
      <Icon icon="./assets/ic_trello_asana.jpg" />
      <div className="mt-1 text-sm">Asana和Trello的项目看板管理</div>
    </div>
  );
});
