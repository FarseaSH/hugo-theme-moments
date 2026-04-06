# 最近更新

## dev 最新开发版

- Feature: 新增 `countdown-day` shortcode，支持倒数日/纪念日显示功能
- Feautre: tag样式，在tag标签后面，可以显示该tag下moment的数量，以及当前moment在tag下moment中的序数k
- Feature: 加入tag过滤页面，显示某一个标签下所有moment，点击moment中的tag标签即可进入汇总页面
- Improvement: 优化图片视图展示效果下，文字说明最多保留前100个字符
- Improvement: 点击标题可以返回首页
- Performance: 优化加载时间，切换package cdn源
- Docs: 修改README，默认配置文件改为yaml格式
- Bugfix: 修复新版本Hugo `resource.Get` 一个外部url地址会报错的问题


## v1.3.0

- Feature: 标签样式升级：tag标签现在会以独立样本显示在正文上方
- Feature: moment支持插入视频文件进行播放
- Feature: moment加入音乐播放器模块，支持加入音乐进行播放
- Feature: moment图片支持引用站内图片
- Feature: moment发布图片数量现在没有限制，多于9张的图片会在moment中自动隐藏，并显示"更多"样式按钮，在图片阅读模式下显示
- Feature: 底部分页导航栏样式优化，会自动隐藏中间页数，以避免过长情况下产生显示的不美观
- Feature: 重新设计了主题默认的favicon
- Feature: moment正文样式进行微调：列表样式进行优化，moment元素比例进行微调等
- Feature: 优化返回顶部按钮的样式
- Feature: 主题开放了一个计数接口，以json格式返回站点或者某个section中moment的发布总数
- Feature: 主题开放了一个jsonp范式的计数接口，便于在其它网页中显示当前moment的发布总数
- Bugfix: 修复section页面的pagenation样式错误
- Bugfix: 修复默认背景图片、默认头像、icon资源等URL路径错误的bug
- Bugfix: 修复分享链接中默认logo，URL路径错误的bug


## v1.2

- (By ZhaoZuohong) 无限滚动功能
- (By ZhaoZuohong) 新增样式行内代码，引用
- (By ZhaoZuohong) 新增折叠功能样式
- (By ZhaoZuohong) `赫蹏`插件的支持
- (By ZhaoZuohong) 其它样式优化
  - 用户信息与正文间距调整
  - 当一行无法显示所有标签时，设置单个标签内不换行
  - 长链接自动换行支持
- 鼠标放在点赞按钮上会改变样式
- 链接样式优化，在右端加入了一个手势图标





