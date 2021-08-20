<h1 align=center>Hugo Theme Moments | <a href="https://farseash.github.io/demo-hugo-theme-moments/">Demo</a></h1>

</br>

[中文说明](README-zh.md)

Moments is a Hugo theme for short posts(similar to Twitter posts). It provides a sharing space with privacy.

## Screenshot

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

## Create new Moment

```
hugo new moments/your_moments_name.md
```

Then, go to the file you just create to 

## Put your Moments on the Internet

Please refer to Hugo document deploying part [https://gohugo.io/hosting-and-deployment/hugo-deploy/](https://gohugo.io/hosting-and-deployment/hugo-deploy/)

# Configuration

Modify the settings in the  `config.toml` to satisfy your own need. Please do not modify the arguments that are not included below.

- `baseURL`: The base URL where you deploy your Moments。If the index page is under the subpath (like [http://site.com/subpath/](http://site.com/subpath/%EF%BC%89%EF%BC%8C%E8%AF%B7%E5%8A%A1%E5%BF%85%E8%AE%BE%E5%AE%9A%E6%AD%A4%E9%A1%B9%E3%80%82)), please change this setting.
- `paginate`: The number of Moments on a single page.
- `title`: The title that is shown on the top.
- `signature`: The signature(or the subtitle) that is shown on the top.
- `cover`: The cover image that is shown on the top.
- `name`: The default name that is shown as the author of Moments where the name is not set.
- `avatar`: The default avatar that is shown in Moments where the avatar is not set.