(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{426:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_jpeg_wxfrom_5_wx_lazy_3110747499bc4eb48.804b3302.jpg"},427:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_png_wxfrom_5_wx_lazy__d56f24fb6dda49e7b.7361a186.jpg"},428:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_png_wxfrom_5_wx_lazy__08cda71c6bd140bb9.0c6bce20.jpg"},429:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_png_wxfrom_5_wx_lazy__044567115a0e4a739.30df9a8f.jpg"},430:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_jpeg_wxfrom_5_wx_lazy_ab90f00b5d3a4cea9.11397166.jpg"},431:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_png_wxfrom_5_wx_lazy__3a57f6d8684d459b8.3225326d.jpg"},432:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_png_wxfrom_5_wx_lazy__f26881468d4a43f6b.d36b6c83.jpg"},433:function(a,e,_){a.exports=_.p+"assets/img/640_wx_fmt_png_wxfrom_5_wx_lazy__949fd25314e44ee5a.30134531.jpg"},771:function(a,e,_){"use strict";_.r(e);var t=_(3),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("通过如下前序两篇文章:")]),a._v(" "),e("ol",[e("li",[e("p",[e("RouterLink",{attrs:{to:"/04.java/04.spring/02.Spring Bean 生命周期之“我从哪里来”？.html"}},[a._v("Spring Bean 生命周期之“我从哪里来”？")])],1)]),a._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/04.java/04.spring/03.Spring Bean 生命周期之“我要到哪里去”？.html"}},[a._v("Spring Bean 生命周期之“我要到哪里去”？")])],1)])]),a._v(" "),e("p",[a._v("我们了解了 Spring Bean 的生命周期核心内容，bean 是如何被初始化变为"),e("code",[a._v("Ready for Use")]),a._v("的状态，当资源被回收时又是如何被 destroy 的，但"),e("code",[a._v("Spring Bean Life Cycle")]),a._v("图并未被全部点亮，这篇文章将点亮剩余内容，同时说说你常见的 XxxxAware 接口")]),a._v(" "),e("p",[a._v("为什么要说 Spring Bean 生命周期又说 Aware 呢？下来点亮剩下内容你也许就明白了：")]),a._v(" "),e("p",[e("img",{attrs:{src:_(426),alt:""}})]),a._v(" "),e("p",[a._v("在 Spring Bean"),e("code",[a._v("Ready for Use")]),a._v("之前的起源当然是要调用构造器，所以 Constructor 毋庸置疑是创建 Spring Bean 的第一步")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("通过 Setter 方法完成依赖注入，SDI （Setter Dependency Injection）")])]),a._v(" "),e("li",[e("p",[a._v("依赖注入一旦结束，"),e("code",[a._v("BeanNameAware.setBeanName()")]),a._v("会被调用，它设置该 bean 在 Bean Factory 中的名称")])]),a._v(" "),e("li",[e("p",[a._v("接下来调用"),e("code",[a._v("BeanClassLoaderAware.setBeanClassLoader()")]),a._v("，为 bean 实例提供类加载器，我们知道所有类都是要通过类加载器加载到上下文的，关于类的加载机制/双亲委派模型（大厂都爱问的面试题）内容会在后续给出来，让你透彻的了解")])]),a._v(" "),e("li",[e("p",[a._v("然后"),e("code",[a._v("BeanFactoryAware.setBeanFactory()")]),a._v("会被调用为 bean 实例提供其所拥有的 factory")])])]),a._v(" "),e("p",[a._v("关于 1、2 两点我要额外多说一些内容，请看下面代码："),e("img",{attrs:{src:_(427),alt:""}})]),a._v(" "),e("p",[a._v("这里，我们尝试通过构造器访问自动注入的 field "),e("code",[a._v("Environment env")]),a._v("，当构造器被调用时，Spring Bean 还没被完全初始化，这就会导致"),e("code",[a._v("NullPointerExceptions")]),a._v("；我们变换一下方式："),e("img",{attrs:{src:_(428),alt:""}})]),a._v(" "),e("p",[a._v("这种方式，Environment 实例被安全注入之后才调用"),e("code",[a._v("@PostConstruct")]),a._v("标记的方法，这样就不会抛出"),e("code",[a._v("NullPointerException")]),a._v("了。")]),a._v(" "),e("p",[a._v("这会回看周期图，有没有豁然开朗？")]),a._v(" "),e("blockquote",[e("p",[a._v("等所有 Spring Bean 都完成依赖注入（周期图中的 Setter Methods 部分）再使用 bean 的引用才是安全的方式，到这里终于可以说一说 Aware 了")])]),a._v(" "),e("h2",{attrs:{id:"aware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aware"}},[a._v("#")]),a._v(" Aware")]),a._v(" "),e("p",[a._v("Aware 是 Spring 中的一个根接口，继承该接口的子接口有很多，比如周期图中的那三个 Aware，但是该接口没有任何方法，所以大家可以把它理解成一个标记接口："),e("img",{attrs:{src:_(429),alt:""}})]),a._v(" "),e("p",[a._v('Aware 翻译过来可以理解为"察觉的；注意到的；感知的" ，XxxxAware 也就是对....感知的，没有 Aware 就是无感知的吗？对喽')]),a._v(" "),e("blockquote",[e("p",[a._v("Spring 的依赖注入最大亮点就是所有的 Bean 对 Spring 容器的存在是没有意识的，拿Spring Bean 生命周期之“我从哪里来”？文章中“小学生入少先队”为例子说明，小学生还是那个小学生，加入少先队还是加入共青团只不过规则不一样罢了")])]),a._v(" "),e("p",[a._v("但是在实际项目中，我们不可避免的要用到 Spring 容器本身提供的资源（难免要有事情需要少先队组织的帮助），这时候要让 Bean 主动意识到 Spring 容器的存在，才能调用 Spring 所提供的资源，这就是 Spring Aware. 其实 Spring Aware 是 Spring 设计为框架内部使用的，若使用了，你的 Bean 将会和 Spring 框架耦合，所以自己不单独使用，但是在读框架源码时希望你不再模糊.")]),a._v(" "),e("p",[a._v("常见的 Spring Aware 接口")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Aware子接口")]),a._v(" "),e("th",[a._v("描述")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("BeanNameAware")]),a._v(" "),e("td",[a._v("获取容器中 Bean 的名称")])]),a._v(" "),e("tr",[e("td",[a._v("BeanFactoryAware")]),a._v(" "),e("td",[a._v("获取当前 BeanFactory ，这样可以调用容器的服务")])]),a._v(" "),e("tr",[e("td",[a._v("ApplicationContextAware")]),a._v(" "),e("td",[a._v("同上，在BeanFactory 和 ApplicationContext 的区别中已明确说明")])]),a._v(" "),e("tr",[e("td",[a._v("MessageSourceAware")]),a._v(" "),e("td",[a._v("获取 Message Source 相关文本信息")])]),a._v(" "),e("tr",[e("td",[a._v("ApplicationEventPublisherAware")]),a._v(" "),e("td",[a._v("发布事件")])]),a._v(" "),e("tr",[e("td",[a._v("ResourceLoaderAware")]),a._v(" "),e("td",[a._v("获取资源加载器，这样获取外部资源文件")])])])]),a._v(" "),e("p",[a._v("来看类关系图：")]),a._v(" "),e("p",[e("img",{attrs:{src:_(430),alt:""}})]),a._v(" "),e("p",[a._v("当然不止以上这些 Aware， 通常使用 Spring Aware 的目的是为了让 Bean 获得 Spring 容器的服务。")]),a._v(" "),e("h2",{attrs:{id:"代码示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[a._v("#")]),a._v(" 代码示例")]),a._v(" "),e("h3",{attrs:{id:"beannameaware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beannameaware"}},[a._v("#")]),a._v(" BeanNameAware")]),a._v(" "),e("p",[e("img",{attrs:{src:_(431),alt:""}})]),a._v(" "),e("p",[a._v("注册 bean\n"),e("img",{attrs:{src:_(432),alt:""}})]),a._v(" "),e("p",[a._v("运行\n"),e("img",{attrs:{src:_(433),alt:""}})]),a._v(" "),e("p",[a._v("和预想一样，Bean Name 输出结果为"),e("code",[a._v("myCustomBeanName")]),a._v("，如果移除掉 @Bean 注解的 name 属性， 输出结果为"),e("code",[a._v("getMyBeanName")])]),a._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("在大多数情况下，我们应该避免使用任何 Aware 接口，除非我们需要它们。实现这些接口会将代码耦合到Spring框架，但是希望看过本节内容之后阅读框架源码思维更加清晰")]),a._v(" "),e("h2",{attrs:{id:"灵魂追问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#灵魂追问"}},[a._v("#")]),a._v(" 灵魂追问")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("框架中有哪些经典的 Aware 应用？")])]),a._v(" "),e("li",[e("p",[a._v("到现在你能很好的理解 Spring Bean 的生命周期吗？")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);