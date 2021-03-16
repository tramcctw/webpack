解决的是 css 类名冲突的问题
# BEM 规范

一个完整的类名 block__element_modifier
只使用顶级类名，不嵌套类名
由三个部分构成

- Block:表示页面中的区域，表示最顶级的划分，如轮播图(banner),文章(article)
- element: 在大区域中的组成部分，如(banner_img)
- modifier 可选：表示状态，例(bannner__dot_selected)

在某些大型工程中，BEM可能会加一个前缀
- l:layout 表示这个样式是用于布局的
- c:component,表示该样式时一个组件
- u:util 表示该样式是一个通用的工具性质的样式
- j:javascript,表示由js获取元素使用的