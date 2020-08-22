const newsData = [
  // {
  //   "id": 4,
  //   "img": "/img/b1/img_news_hotspot_1.png",
  //   "time": "06-27",
  //   "title": "情仇面面相觑，激战一触即发",
  //   "summary": "《景区环境靠大家》活动已开启...",
  //   "text": [
  //     {ntype: "text", data: "测试的发来的及撒六块腹肌圣诞快乐放假啊圣诞快乐风景可怜的撒风，说到风口浪尖撒到了看法即使对方死的苏打粉。电视剧啊浪费就撒地哦放假哦是大家佛i"},
  //     {ntype: "img", data: "/img/home/main.jpg"},
  //   ]
  // },
  // {
  //   "id": 3,
  //   "img": "/img/b1/img_news_hotspot_2.png",
  //   "time": "06-03",
  //   "title": "花果山正式开放景区门票售卖",
  //   "summary": "花果山正式开放景区门票售卖...",
  //   "text": [
  //     {ntype: "text", data: "测试的发来的及撒六块腹肌圣诞快乐放假啊圣诞快乐风景可怜的撒风，说到风口浪尖撒到了看法即使对方死的苏打粉。电视剧啊浪费就撒地哦放假哦是大家佛i"},
  //     {ntype: "img", data: "/img/home/main.jpg"},
  //   ]
  // },
  // {
  //   "id": 2,
  //   "img": "/img/b1/img_news_hotspot_3.png",
  //   "time": "05-14",
  //   "title": "天文爱好者聚集山顶守候日食",
  //   "summary": "天文爱好者聚集山顶守候日食...",
  //   "text": [
  //     {ntype: "text", data: "测试的发来的及撒六块腹肌圣诞快乐放假啊圣诞快乐风景可怜的撒风，说到风口浪尖撒到了看法即使对方死的苏打粉。电视剧啊浪费就撒地哦放假哦是大家佛i"},
  //     {ntype: "img", data: "/img/home/main.jpg"},
  //   ]
  // },
  // {
  //   "id": 1,
  //   "img": "/img/b1/img_news_hotspot_4.png",
  //   "time": "04-22",
  //   "title": "《景区环境靠大家》活动已开启",
  //   "summary": "《景区环境靠大家》活动已开启...",
  //   "text": [
  //     {ntype: "text", data: "测试的发来的及撒六块腹肌圣诞快乐放假啊圣诞快乐风景可怜的撒风，说到风口浪尖撒到了看法即使对方死的苏打粉。电视剧啊浪费就撒地哦放假哦是大家佛i"},
  //     {ntype: "img", data: "/img/home/main.jpg"},
  //   ]
  // },
];

const newsDict = {};
for (let i = 0; i < newsData.length; i++) {
  newsDict[newsData[i].id] = i;
}

function newsSelect(id) {
  let idx = newsDict[id];
  if (idx == undefined) {
    return {};
  }
  return newsData[idx];
}

const bilibiliInfo = {
  url: "https://space.bilibili.com/642389251",
  qrcode: "/img/qrcode/img_qrcode_bm_bilibili_172.png",
};
const sinablogInfo = {
  url: "https://weibo.com/u/7483050868",
  qrcode: "/img/qrcode/img_qrcode_bm_sinablog_172.png",
};
const wechatInfo = {
  // url: "http://weixin.qq.com/r/FhOMlNXEvIjDrZH390YE",
  url: "",
  qrcode: "/img/qrcode/img_qrcode_bm_wechat_172.png",
};

export default {
  newsData,
  newsSelect,
  bilibiliInfo,
  sinablogInfo,
  wechatInfo,
};
