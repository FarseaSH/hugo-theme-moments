<h1 align=center>Hugo 主题 Moments | <a href="https://farseash.github.io/demo-hugo-theme-moments/demo/">Demo</a></h1>

<p align="center">
    <img src="https://s1.ax1x.com/2023/07/22/pCqEWOx.png" alt="logo" style="width: 60%" />
</p>

Moments是一款专门为短博文设计的[Hugo](https://gohugo.io/)主题。开发初衷是在微信朋友圈之外做一个纯粹写给自己的，独立的短文/动态空间，去记录生活点滴，个人思绪，发现与想法。后面发现Moments的使用对象不仅仅可以是自己，还可以是一群人，你可以为是朋友、团队，亦或情侣搭建一个专有的Moments空间。

Moments is a hugo theme designed for micro-blogging. The original intention is to create a personal space for sharing daily life, thoughts, discoveries & ideas, outside Wechat. Later on, it came to my mind that Moments can be a sharing space not only for a single individual, but also for friends, teams or even couples.

> 我正开发另一个项目——使用Notion，结合Moments主题，免费、快速搭建短博文平台。即将发布。
> 
> I'm currently working on another project: with the help of Notion, together with this Moments theme, build a micro-blogging platform, simple and free. It will be released soon.

## Screenshot

![demo](https://s11.ax1x.com/2024/01/07/pFSuyPU.png)

Check it out 👉 [Moments Demo](https://farseash.github.io/demo-hugo-theme-moments/demo/)

更多Moments用例: [情侣点滴](https://farseash.github.io/demo-hugo-theme-moments/showcases/couple/) | 朋友分享 | 个人成长 | 产品更新

## 特点 Feature

1. 专门支持短博文的 Hugo 主题
2. 响应式设计，桌面端&手机端精心适配
3. 拥有和社交平台一致的图片浏览体验
4. 简洁的设计，纯净的体验，摆脱社交平台广告
5. 支持在 Moments 中分享主流互联网平台的信息（朋友圈文章，知乎，哔哩哔哩， 网易云音乐，等等）
6. 设计上支持多用户，和不同的人一起搭建不同的 Moments 空间


## 不同类型的 Moment 示例

### 附加图片的 Moment

<img src="https://s11.ax1x.com/2024/01/11/pFCm8Et.png" alt="图片集的Moment" style="width: 400px">

```
---
name: Frank
signature: '@Moments 向导 002'
avatar: https://s11.ax1x.com/2024/01/07/pizHZLV.png
date: 2024-01-06T23:04:00+08:00
tags:
  - 美食
pictures:
 - https://s11.ax1x.com/2024/01/07/pizO3tO.png
 - https://s11.ax1x.com/2024/01/07/pizOBAf.png
 - https://s11.ax1x.com/2024/01/07/pizOy9g.png
 - https://s11.ax1x.com/2024/01/07/pizORun.png
 - https://s11.ax1x.com/2024/01/07/pizOI4U.png
 - https://s11.ax1x.com/2024/01/07/pizOTCF.png
 - https://s11.ax1x.com/2024/01/07/pizjpd0.png
 - https://s11.ax1x.com/2024/01/07/pizjiJU.png
 - https://s11.ax1x.com/2024/01/07/pFSkNid.png
note:
---

好嘞～众所周知，美食能治愈一切！以下图片不建议睡前点开。
```

### 分享文章的 Moment

<img src="https://s11.ax1x.com/2024/01/11/pFCmUgg.png" alt="分享链接Moment" style="width: 400px">

```
---
name: Frank
signature: '@Moments 向导 002'
avatar: https://s11.ax1x.com/2024/01/07/pizHZLV.png
date: 2024-01-06T23:07:00+08:00
tags:
  - 好文收藏
link: https://mp.weixin.qq.com/s/T2oxRagwfAAtHao5YqAY1A
link_text: 「好的友谊」的10点标志，你拥有过几点？
note:
---

这篇公众号文章也挺不错的，推荐给大家。
```


### 分享视频的 Moment

<img src="https://s11.ax1x.com/2024/01/14/pFPvjfI.png" alt="分享视频Moment" style="width: 400px">

```
---
name: Frank
signature: '@Moments 向导 002'
avatar: https://s11.ax1x.com/2024/01/07/pizHZLV.png
date: 2024-01-06T23:07:00+08:00
tags:
  - 好看的视频分享
link: //player.bilibili.com/player.html?aid=535243818&bvid=BV1cM41197ui&cid=1312553206&p=1
note:
---

我是B站木鱼水心的粉丝，最近更新的史记系列超级好看。
```

### 更多正在设计开发中的 Moment 类型

- 纪念日 / 倒数日
- 文字摘录引用
- 习惯打卡
- 歌词
- 地图格式

（如果您有任何其它想要添加的类型，欢迎在 [issue](https://github.com/FarseaSH/hugo-theme-moments/issues) 区域提出）

## 安装与部署

### 安装

<!-- todo 要求 -->
**注意：** 主题的使用需要安装 extended 版本的 Hugo，详见 [https://gohugo.io/installation/](https://gohugo.io/installation/)

```bash
$ hugo new site my_moments_name
$ cd my_moments_name
$ git clone https://github.com/FarseaSH/hugo-theme-moments.git themes/moments
```

### 第一次配置

将以下设置覆盖到`config.yaml`文件中

```
baseURL: https://YOUR-MOMENTS-PATH.com
languageCode: zh-Hans
theme: moments
pagination:
    path: .
    pagerSize: 10

params:
    title: "Moments Demo"
    signature: "人生如逆旅，我亦是行人。"
    cover: "default-background.png"

    name: "Me"
    avatar: "avatar.png"
```


#### (Optional) config.yaml 的配置

上面配置文件`config.yaml`中的参数，建议修改以下几项，以满足你的要求。

- `baseURL`: 你所部署发布的网站地址。如果你的主页url是在域名子路径下（如 http://site.com/subpath/），请务必设定此项。
- `paginate`: 单一页面上，显示的Moment的数量
- `title`: 页面顶端的标题
- `signature`: 页面顶端的网站slogan/签名
- `cover`: 页面顶端的封面图
- `name`: Moment默认发布者的名称
- `avatar`: Moment默认发布者的头像(可以为http链接)

### 创建新的Moment

```
hugo new moments/your_moment_name.md
```

### 将自己的Moments发布到网上

请参考Hugo文档deploy部分[Hugo Deploy | Hugo](https://gohugo.io/hosting-and-deployment/hugo-deploy/)

## 更多正在开发的功能

- 更多 Moment 类型支持
- RSS 支持
- Moment 评论功能
- 卡片样式 Moments 主题开发
