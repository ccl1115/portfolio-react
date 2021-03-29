import React, { forwardRef } from "react";
export default forwardRef((_, ref) => {
  return (
    <div ref={ref} className="blocks text-white">
      <div className="col-span-3 text-center text-2xl mb-15">公司和项目</div>
      <div className="col-span-3 lg:col-span-1 text-right">
        <p className="text-sm">北京千橡科技有限公司</p>
        <p className="text-xl">人人网</p>
        <p className="text-sm opacity-50">2011.09 - 2013.04</p>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm">
        <p>开发人人网Android客户端</p>
        <p>重构客户端UI架构</p>
      </div>

      <div className="col-span-3 lg:col-span-1 text-right sm:mt-10 lg:mt-0">
        <p className="text-sm">北京百度科技有限公司</p>
        <p className="text-xl">百度贴吧</p>
        <p className="text-sm opacity-50">2013.05 - 2014.05</p>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm">
        <p>百度贴吧SDK, 提供给第三方使用</p>
        <p>贴吧垂直版本</p>
        <p>class multi-dex, 插件系统, UI层级优化等技术问题</p>
      </div>

      <div className="col-span-3 lg:col-span-1 text-right sm:mt-10 lg:mt-0">
        <p className="text-sm">北京优趣科技有限公司</p>
        <p className="text-xl">蓝莓</p>
        <p className="text-sm opacity-50">2014.05 - 2015.09</p>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm">
        <p>技术合伙人</p>
        <p>独立完成整个App开发</p>
        <p>聊天，Feed，群组等社交功能</p>
      </div>

      <div className="col-span-3 lg:col-span-1 text-right sm:mt-10 lg:mt-0">
        <p className="text-sm">北京字节跳动科技有限公司</p>
        <p className="text-xl">时光相册</p>
        <p className="text-sm opacity-50">2015.10 - 2017.04</p>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm">
        <p>智能相册管理工具</p>
        <p>照片云端同步</p>
        <p>照片编辑</p>
        <p>图库管理</p>
      </div>

      <div className="col-span-3 lg:col-span-1 text-right sm:mt-10 lg:mt-0">
        <p className="text-sm">贵阳语玩科技有限公司</p>
        <p className="text-xl">语玩</p>
        <p className="text-sm opacity-50">2017.07 - 2018.12</p>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm">
        <p>狼人杀游戏客户端开发</p>
        <p>聊天室开发</p>
        <p>后台管理页面开发</p>
        <p>运营活动页面开发</p>
        <p>微信小程序 音频推流</p>
      </div>

      <div className="col-span-3 lg:col-span-1 text-right sm:mt-10 lg:mt-0">
        <p className="text-sm">贵州乐诚科技有限公司</p>
        <p className="text-xl">乐诚监狱智能终端机</p>
        <p className="text-sm opacity-50">2019.05 - 2019.10</p>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm">
        <p>银行支付接口(PHP)</p>
        <p>终端Android客户端开发</p>
        <p>人脸识别门禁系统</p>
      </div>

      <div className="col-span-3 lg:col-span-1 text-right sm:mt-10 lg:mt-0">
        <p className="text-sm">贵州车秘科技有限公司</p>
        <p className="text-xl">掌上车秘Android版</p>
        <p className="text-xl">岗亭系统Android版</p>
        <p className="text-sm opacity-50">2020.01 - 至今</p>
      </div>
      <div className="col-span-3 lg:col-span-2 text-sm">
        <p>基于蓝牙的室内车位导航系统</p>
        <p>MQTT岗亭消息推送</p>
        <p>掌上车秘App 1.0维护</p>
      </div>
    </div>
  );
});
