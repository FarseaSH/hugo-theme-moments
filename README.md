<h1 align=center>Hugo Theme Moments | <a href="https://farseash.github.io/demo-hugo-theme-moments/">Demo</a></h1>

</br>

[中文说明](README-zh.md)

Moments is a Hugo theme for short posts(similar to Twitter posts). It provides a sharing space with privacy.

## Screenshot

![demo](https://z3.ax1x.com/2021/08/20/fjCS5F.png)

## Quick Start

### Install

```
$ hugo new site my_moments_name
$ cd my_moments_name
$ git clone https://github.com/FarseaSH/hugo-theme-moments themes/moments
```

### Configuration

Copy and paste what is below in the `config.toml` file.

```
baseURL = "https://farseash.github.io/demo-hugo-theme-moments/"
languageCode = "zh-Hans"
theme = "moments"
paginate = 10
paginatePath = '.'

[params]
    title = "Moments Demo"
    signature = "The only journey is the one within."
    cover = "https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg"

    name = "Default User"
    avatar = "/img/default_avatar.png"
```

### Create new Moment

```
hugo new moments/your_moments_name.md
```

Then, go to the file you just create to 

### Put your Moments on the Internet

Please refer to Hugo document deploying part [https://gohugo.io/hosting-and-deployment/hugo-deploy/](https://gohugo.io/hosting-and-deployment/hugo-deploy/)

## Configuration

### Modify `config.toml` file
Modify the settings in the  `config.toml` to satisfy your own need. Please do not modify the arguments that are not included below.

- `baseURL`: The base URL where you deploy your Moments。If the index page is under the subpath (like http://site.com/subpath/), please change this setting.
- `paginate`: The number of Moments on a single page.
- `title`: The title that is shown on the top.
- `signature`: The signature(or the subtitle) that is shown on the top.
- `cover`: The cover image that is shown on the top.
- `name`: The default name that is shown as the author of Moments where the name is not set.
- `avatar`: The default avatar that is shown in Moments where the avatar is not set.

### Different types of Moments

#### Plain Text

![fNGzbF.png](https://z3.ax1x.com/2021/08/11/fNGzbF.png)

```
---
top: 4
name: Default User
avatar: img/default_avatar.png

date: 2021-08-01T11:33:28+08:00

tags:
 - default
 -

pic:

pic_set:
 - 
 - 

link:
link_logo:
link_text:

note: This a pure text Moment.
---

In fact, you don't even need to include anything other than the plain text.
```

#### Single picture

![fNYnyV.png](https://z3.ax1x.com/2021/08/11/fNYnyV.png)

```
---
name: First
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F0%2Fw400h400%2F20181111%2F89f9-hnstwwq6307162.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630729931&t=e8c4135ba966d5fbfd5d30adf96551c0

date: 2021-08-04T23:57:46+08:00

tags:
 - picture

pic: https://cdn.pixabay.com/photo/2016/03/09/11/57/grand-canyon-1246248_1280.jpg

pic_set:
 - 
 -

link:
link_logo:
link_text:

note: This is a Moment with a picture
---

You can attach a picture(like the landscape below) to your Moments
```

#### Multiple pictures

![fNt5DK.png](https://z3.ax1x.com/2021/08/11/fNt5DK.png)
```
---
name: Second
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.360buyimg.com%2Fn1%2Fjfs%2Ft22180%2F273%2F1048905858%2F16927%2Fc863f2d8%2F5b1ee306Nc3fa41e8.jpg&refer=http%3A%2F%2Fimg11.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630730078&t=818b15beaf41cabfa800ddea79f89445

date: 2021-08-04T11:57:49+08:00

tags:
 - pictures
 - food

pic:

pic_set:
 - https://p8.itc.cn/images01/20210119/628400a0528c4dc696efdac8749b176d.jpeg
 - https://img.uooyoo.com/img2017/5/9/2017050941664829.jpg
 - https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg
 - https://cdn.pixabay.com/photo/2016/01/11/07/18/cupcakes-1133146_1280.jpg

link:
link_logo:
link_text:

note: This is a Moment with pictures
---

You can even attach multiple one pictures like the food I enjoy recently.
```

#### Webpage link

![fNNF8s.png](https://z3.ax1x.com/2021/08/11/fNNF8s.png)

```
---
name: Third
avatar: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190822%2F14%2F1566456820-UokjFbWpuN.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630729842&t=560fc243f983753c1f4541a1d9c0d365

date: 2021-08-03T11:57:40+08:00

tags:
 - link
 - Github

pic:

pic_set:
 - 
 -

link: https://www.github.com
link_logo:
link_text: GitHub - Where the world builds software · GitHub

note: This is a Moment with a web page link 
---

You may also attach a link to any web page.

GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018. (Cited from Wikipedia)

```

## More to Expect

- [ ] RSS share
- [ ] Print Moments
- [ ] More link logos
- [ ] Make Moments more lightweight