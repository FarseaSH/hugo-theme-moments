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

## 特点 Feature

1. 专门支持短博文的Hugo主题
2. 响应式设计，桌面端&手机端精心适配
3. 拥有和社交平台一致的图片浏览体验
4. 简洁的设计，纯净的体验，摆脱社交平台广告
5. 支持在Moments中分享主流互联网平台的信息（朋友圈文章，知乎， 哔哩哔哩， 网易云音乐，等等）
6. 多用户，和不同的人一起搭建不同的Moments空间
7. (To be expected)RSS接入，第一时间了解朋友的分享

## 快速入门

- [实例：各种类型的Moment](#实例：各种类型的Moment)
- [安装与部署](#安装与部署)

### 实例：各种类型的Moment

#### 包含图片集的Moment

![图片集的moments](https://z3.ax1x.com/2021/10/24/5WpVWn.png)

```
---
name: 赛肯德
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.360buyimg.com%2Fn1%2Fjfs%2Ft22180%2F273%2F1048905858%2F16927%2Fc863f2d8%2F5b1ee306Nc3fa41e8.jpg&refer=http%3A%2F%2Fimg11.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630730078&t=818b15beaf41cabfa800ddea79f89445

date: 2021-08-04T11:57:49+08:00

tags:
 - 图片集
 - 美食

pictures:
 - https://p8.itc.cn/images01/20210119/628400a0528c4dc696efdac8749b176d.jpeg
 - https://img.uooyoo.com/img2017/5/9/2017050941664829.jpg
 - https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg
 - https://cdn.pixabay.com/photo/2016/01/11/07/18/cupcakes-1133146_1280.jpg

note: 这是附带图片集的moment
---

你也可以为每条moment附带更多的图片，做成图片集。

比如最近打卡的美食们：
```

#### 单一图片的Moment

![单一图片的Moment](https://z3.ax1x.com/2021/10/24/5WptQx.png)

```
---
name: 福斯特
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F0%2Fw400h400%2F20181111%2F89f9-hnstwwq6307162.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630729931&t=e8c4135ba966d5fbfd5d30adf96551c0

date: 2021-08-04T23:57:46+08:00

tags:
 - 图片
 - 最新moment

pictures: 
 - https://cdn.pixabay.com/photo/2016/03/09/11/57/grand-canyon-1246248_1280.jpg

note: 这是加入图片的moment
---

你可以为每条moment附带图片。

比如说，好看的风景：
```



#### 附带网页链接的Moment

![网页链接](https://z3.ax1x.com/2021/10/24/5W3vfs.png)

```
---
name: 瑟德
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190822%2F14%2F1566456820-UokjFbWpuN.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630729842&t=560fc243f983753c1f4541a1d9c0d365

date: 2021-08-03T11:57:40+08:00

tags:
 - 链接
 - Github
 - 不知道贴什么标签

link: https://www.github.com
link_logo:
link_text: GitHub - Where the world builds software · GitHub

note: 这是加入链接的Moment
---
你也可以像这样附带网络链接。

GitHub是通过Git进行版本控制的软件源代码托管服务平台，由GitHub公司（曾称Logical Awesome）的开发者Chris Wanstrath、P. J. Hyett和汤姆·普雷斯顿·沃纳使用Ruby on Rails编写而成。（引用自Wikipedia）
```

#### 纯文字Moment

![fNGzbF.png](https://z3.ax1x.com/2021/08/11/fNGzbF.png)

```
---
name:
avatar:

date: 2021-08-01T11:33:28+08:00

tags:
 - default
 -

note: 这是纯文字的moment
---
当然，你也可以什么都不附带，只发送纯文字moment。
```

### 安装与部署

#### 安装

<!-- todo 要求 -->

```bash
$ hugo new site my_moments_name
$ cd my_moments_name
$ git clone https://github.com/FarseaSH/hugo-theme-moments themes/moments
```

#### 第一次配置

将以下设置覆盖到`config.toml`文件中

```
baseURL = "https://farseash.github.io/demo-hugo-theme-moments/"
languageCode = "zh-Hans"
theme = "moments"
paginate = 10
paginatePath = '.'

[params]
    title = "Moments Demo"
    signature = "人生如逆旅，我亦是行人。"
    cover = "https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg"

    name = "Default User"
    avatar = "/img/default_avatar.png"
```

#### 创建新的Moment

```
hugo new moments/your_moments_name.md
```

再进入`content/moments`文件夹打开相应的markdown文件进行编辑。


#### 将自己的Moments发布到网上

请参考Hugo文档deploy部分[Hugo Deploy | Hugo](https://gohugo.io/hosting-and-deployment/hugo-deploy/)

## 更多的设置

### 修改配置文件 `config.toml`

修改对应配置文件`config.toml`中的参数，以满足你的要求。对于下面没有提及的参数，请不要修改。

- `baseURL`: 你所部署发布的网站地址。如果你的主页url是在域名子路径下（如 http://site.com/subpath/），请务必设定此项。
- `paginate`: 单一页面上，显示的Moment的数量
- `title`: 页面顶端的标题
- `signature`: 页面顶端的签名
- `cover`: 页面顶端的封面图
- `name`: Moment默认发布人
- `avatar`: Moment默认发布人的头像

## 未来功能开发&愿景

- [ ] RSS订阅
- [ ] 将Moments打印，作为实体手帐
- [ ] Moments评论功能
- [ ] 更多平台，更多媒体类型的外链支持

最后一段是我发布Moments demo时候写下的愿景，希望自己不忘初心，与Moments一起成长。


> - Moments是一款Hugo主题，它为你提供了一个兼具社交性与私密性的记录分享空间。
> - 它可以是你的朋友圈，并利用RSS把你的moment推送给那些你想告诉的人
> - 它可以是你的私人手帐，将你的moment打印出来放进日记本的夹层里面
> - 它也可以是你的社交账号，附在博客旁，贴上那些短小精干的moment
> - 它还可以是你们的团队平台，和朋友、队友们一起创建属于你们的moments