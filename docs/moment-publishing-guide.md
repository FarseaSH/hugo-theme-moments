# Moment 发布指南

就像朋友圈和微博一样，moments主题支持多种类型短博文的发布，如附带图片，转发链接等。在Hugo中，这些不同类型主要靠Hugo正文markdown文件的front matter字段约定，下面对字段进行说明，并给出各个类型短博文的配置方法，并给出相关实例。

## 基础字段说明

下面这些字段是最常用的 front matter：

| 字段 | 类型 | 是否必填 | 说明 |
| --- | --- | --- | --- |
| `date` | string | 是 | 发布时间，建议使用 ISO 8601 格式，例如 `2025-03-28T20:30:00+08:00` |
| `name` | string | 否 | 发布者名称。不填时使用站点配置中的默认名称 |
| `avatar` | string | 否 | 发布者头像。不填时使用站点默认头像。可填远程 URL，也可填站内资源路径 |
| `signature` | string | 否 | 发布动作说明或个性签名。不填时默认显示“发布了” |
| `tags` | array | 否 | 标签列表 |
| `note` | string | 否 | 显示在正文下方、时间后面的补充说明 |
| `top` | number | 否 | 置顶顺序。值大于 `0` 时生效，值越小越靠前 |
| `pictures` | array | 否 | 图片列表，推荐的新图片字段 |
| `link` | string | 否 | 外部链接、音频链接、部分嵌入类资源链接 |
| `link_text` | string | 否 | 链接展示文字 |
| `link_logo` | string | 否 | 自定义链接图标资源路径 |
| `video` | string | 否 | 直接视频资源地址 |

一个最小可用示例：

```yaml
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 日常
note: 这是一条最基础的 Moment
---
```

正文写在 front matter 之后：

```md
---
date: 2025-03-28T20:30:00+08:00
---

今天把文档整理起来了。
```

## 1. 纯文字 Moment

适用于只有正文内容的场景。

```md
---
date: 2025-03-28T20:30:00+08:00
name: Frank
avatar: https://example.com/avatar.png
tags:
  - 日常
note: 晚间记录
---

今天把项目重新捡起来了，准备系统整理一下文档和功能。
```

## 2. 单张图片 Moment

使用 `pictures`，即使只有一张图也放在数组里。

```md
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 图片
pictures:
  - https://example.com/demo.jpg
note: 单张图片示例
---

这是单张图片的发布格式。
```

## 3. 多图 Moment

主题会根据图片数量自动切换展示布局，多于 9 张时会显示“更多”遮罩。

```md
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 图片集
pictures:
  - https://example.com/1.jpg
  - https://example.com/2.jpg
  - https://example.com/3.jpg
  - https://example.com/4.jpg
note: 多图示例
---

这是图片集类型的 Moment。
```

## 4. 站内资源图片 Moment

`pictures` 也可以填写站内资源路径。当前主题会尝试通过 Hugo `resources.Get` 解析这类路径。

```md
---
date: 2025-03-28T20:30:00+08:00
pictures:
  - 20240809/picture_test.jpeg
  - 20240809/picture_test2.jpeg
note: 站内图片资源示例
---

这条 Moment 使用了站内图片资源。
```

## 5. 普通外部链接 Moment

用于分享网页、文章或仓库链接。

```md
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 收藏
link: https://github.com/FarseaSH/hugo-theme-moments
link_text: hugo-theme-moments 项目地址
note: 一个普通链接示例
---

最近在重新整理这个项目。
```

### `link` 的自动图标识别

当前主题会自动识别以下链接并使用对应图标：

- 微信公众号文章
- GitHub 仓库或页面
- 哔哩哔哩普通视频页
- 知乎回答
- 知乎专栏文章

如果没有命中自动识别，会使用默认链接图标。

## 6. 自定义链接图标 Moment

如果你不想使用自动识别图标，可以手动指定 `link_logo`。

```md
---
date: 2025-03-28T20:30:00+08:00
link: https://example.com/article
link_text: 自定义图标的链接
link_logo: link-logos/default_link_logo.png
note: 自定义链接图标
---

这里演示如何手动指定链接图标。
```

## 7. 网易云音乐 Moment

如果 `link` 是网易云音乐歌曲链接，主题会自动渲染播放器。

```md
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 音乐
link: https://music.163.com/song?id=1309046495
link_text: 想见你想见你想见你
note: 网易云音乐示例
---

适合分享一首歌。
```

## 8. 音频文件 Moment

如果 `link` 指向音频文件，当前主题会自动识别为音频播放器。支持的后缀包括：

- `.mp3`
- `.flac`
- `.wav`

```md
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 音频
link: https://example.com/demo.mp3
link_text: 晚间播客片段
note: 音频播放示例
---

这是一条带音频播放器的 Moment。
```

## 9. 哔哩哔哩嵌入视频 Moment

如果 `link` 填写的是 Bilibili player 地址，主题会直接渲染嵌入式播放器。

```md
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 视频
link: //player.bilibili.com/player.html?aid=427247956&bvid=BV153411G7S6&cid=738404299&page=1
note: Bilibili 嵌入视频示例
---

这里展示一个 Bilibili 播放器。
```

## 10. 直接视频资源 Moment

如果你有可直接访问的视频资源地址，可以使用 `video` 字段。

```md
---
date: 2025-03-28T20:30:00+08:00
tags:
  - 视频
video: https://example.com/video.m3u8
note: 直接视频资源示例
---

这里展示一个直接视频地址。
```

## 11. 倒计时 Moment

倒计时功能不是 front matter 字段，而是通过 shortcode 使用。

当前 shortcode：

```md
{{< countdown-day startDate="viewDate" endDate="pubDate" title="倒数日功能推出" >}}
```

完整示例：

```md
---
date: 2025-07-30T17:40:00+08:00
tags:
  - 倒计时
---

测试一下倒计时功能

{{< countdown-day startDate="viewDate" endDate="pubDate" title="倒数日功能推出" >}}
```

### `countdown-day` 参数说明

| 参数 | 说明 |
| --- | --- |
| `startDate` | 起始日期，可以填具体日期，也可以填 `viewDate` 或 `pubDate` |
| `endDate` | 结束日期，可以填具体日期，也可以填 `viewDate` 或 `pubDate` |
| `title` | 倒计时标题 |

说明：

- `viewDate` 表示访客打开页面当天
- `pubDate` 表示当前这条 Moment 的发布日期
- 如果 `startDate <= endDate`，展示“还有 X 天”
- 如果 `startDate > endDate`，展示“已经 X 天”

## 12. 可折叠内容 Moment

主题还支持 `details` shortcode，适合收纳额外信息。

```md
---
date: 2025-03-28T20:30:00+08:00
---

这是正文。

{{< details "展开查看更多" >}}
这里是折叠区域里的补充说明。
{{< /details >}}
```

## 13. 列表、引用、代码等富文本内容

这部分不需要额外 front matter，直接写在正文即可。

````md
---
date: 2025-03-28T20:30:00+08:00
---

这是一个列表：

- 第一项
- 第二项

> 这是一段引用

```python
print("hello moments")
```
````

## 14. 置顶 Moment

通过 `top` 字段控制置顶顺序。

```md
---
date: 2025-03-28T20:30:00+08:00
top: 1
tags:
  - 公告
note: 置顶示例
---

这条 Moment 会被置顶显示。
```

规则：

- `top` 大于 `0` 时生效
- 值越小越靠前
- 例如 `top: 1` 会比 `top: 2` 更靠前

## 推荐使用的字段组合

当前建议优先使用以下字段：

- `date`
- `name`
- `avatar`
- `signature`
- `tags`
- `note`
- `pictures`
- `link`
- `link_text`
- `link_logo`
- `video`
- `top`

