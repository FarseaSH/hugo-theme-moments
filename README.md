<h1 align=center>Hugo 主题 Moments | <a href="https://farseash.github.io/demo-hugo-theme-moments/">Demo</a></h1>

</br>


Moments是一款Hugo主题，用于短文发布，它为你提供了一个兼具社交性与私密性的记录分享空间。

它可以是你的朋友圈，并利用RSS把你的moment推送给那些你想告诉的人；

它可以是你的私人手帐，将你的moment打印出来放进日记本的夹层里面；

它也可以是你的社交账号，附在博客旁，贴上那些短小精干的moment；

它还可以是你们的团队平台，和朋友、队友们一起创建属于你们的moments。


## Screenshot

![demo](https://z3.ax1x.com/2021/08/08/flwRF1.png)

## 快速入门

### 安装

<!-- todo 要求 -->

```bash
$ hugo new site my_moments_name
$ cd my_moments_name
$ git clone https://github.com/FarseaSH/hugo-theme-moments themes/moments
```

### 配置

将以下设置覆盖到`config.toml`文件中

```toml
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

### 创建新的Moment

```
hugo new moments/your_moments_name.md
```

再进入`content/moments`文件夹打开相应的markdown文件进行编辑。


### 将自己的Moments发布到网上

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

### 各种类型Moment的模板

#### 纯文字

[![fNGzbF.png](https://z3.ax1x.com/2021/08/11/fNGzbF.png)](https://imgtu.com/i/fNGzbF)

```
---
# 名称
name:
avatar:

# 发布时间
date: 2021-08-01T11:33:28+08:00

# 给Moment添加标签
tags:
 - default
 -

# 附加信息类型1:单个图片
pic:

# 备注信息
note: 这是纯文字的moment
---
当然，你也可以什么都不附带，只发送纯文字moment。
```

#### 单一图片

[![fNYnyV.png](https://z3.ax1x.com/2021/08/11/fNYnyV.png)](https://imgtu.com/i/fNYnyV)

```
---
# 名称
name: 福斯特
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F0%2Fw400h400%2F20181111%2F89f9-hnstwwq6307162.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630729931&t=e8c4135ba966d5fbfd5d30adf96551c0

# 发布时间
date: 2021-08-04T23:57:46+08:00

# 给Moment添加标签
tags:
 - 图片
 - 最新moment

# 附加信息类型1:单个图片
pic: https://cdn.pixabay.com/photo/2016/03/09/11/57/grand-canyon-1246248_1280.jpg

# 备注信息
note: 这是加入图片的moment
---

你可以为每条moment附带图片。

比如说，好看的风景：
```

#### 图片集

[![fNt5DK.png](https://z3.ax1x.com/2021/08/11/fNt5DK.png)](https://imgtu.com/i/fNt5DK)

```
---
# 名称
name: 赛肯德
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.360buyimg.com%2Fn1%2Fjfs%2Ft22180%2F273%2F1048905858%2F16927%2Fc863f2d8%2F5b1ee306Nc3fa41e8.jpg&refer=http%3A%2F%2Fimg11.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630730078&t=818b15beaf41cabfa800ddea79f89445

# 发布时间
date: 2021-08-04T11:57:49+08:00

# 给Moment添加标签
tags:
 - 图片集
 - 美食

# 附加信息类型2:图片组
pic_set:
 - https://p8.itc.cn/images01/20210119/628400a0528c4dc696efdac8749b176d.jpeg
 - https://img.uooyoo.com/img2017/5/9/2017050941664829.jpg
 - https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg
 - https://cdn.pixabay.com/photo/2016/01/11/07/18/cupcakes-1133146_1280.jpg

# 备注信息
note: 这是附带图片集的moment
---

你也可以为每条moment附带更多的图片，做成图片集。

比如最近打卡的美食们：
```

#### 网页链接

[![fNNF8s.png](https://z3.ax1x.com/2021/08/11/fNNF8s.png)](https://imgtu.com/i/fNNF8s)

```
---
# 名称
name: 瑟德
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190822%2F14%2F1566456820-UokjFbWpuN.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630729842&t=560fc243f983753c1f4541a1d9c0d365

# 发布时间
date: 2021-08-03T11:57:40+08:00

# 给Moment添加标签
tags:
 - 链接
 - Github
 - 不知道贴什么标签

# 附加信息类型3:链接
link: https://www.github.com
link_logo:
link_text: GitHub - Where the world builds software · GitHub

# 备注信息
note: 这是加入链接的Moment
---
你也可以像这样附带网络链接。

GitHub是通过Git进行版本控制的软件源代码托管服务平台，由GitHub公司（曾称Logical Awesome）的开发者Chris Wanstrath、P. J. Hyett和汤姆·普雷斯顿·沃纳使用Ruby on Rails编写而成。（引用自Wikipedia）
```

## 未来功能开发

- [ ] RSS订阅
- [ ] Moments打印功能
- [ ] 支持网页分享link的提供