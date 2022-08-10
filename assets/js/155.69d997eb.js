(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{794:function(e,t,v){"use strict";v.r(t);var _=v(3),r=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("前言： 万能的程序猿可以指定哪些不是垃圾不能被回收，哪些是普通的垃圾可以晚点回收，哪些是超级垃圾需立马被回收…")]),e._v(" "),t("h1",{attrs:{id:"强引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强引用"}},[e._v("#")]),e._v(" 强引用")]),e._v(" "),t("p",[t("strong",[e._v("解释：")]),e._v(" 我们日常用 “=” 号 直接赋值的对象大都属于强引用，它被认为是"),t("code",[e._v("必须")]),e._v("用到的对象，哪怕是抛出OOM，GC也不会回收。")]),e._v(" "),t("p",[e._v("( 如何中断强引用？ 直接赋值为 null 即可，这时GC会认为对象无引用，可直接回收 )")]),e._v(" "),t("hr"),e._v(" "),t("blockquote",[t("p",[e._v("注意弱引用、软引用、虚引用和强引用的直接区别就是对象都要被一个"),t("code",[e._v("Reference类")]),e._v("包裹。")])]),e._v(" "),t("h1",{attrs:{id:"软引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软引用"}},[e._v("#")]),e._v(" 软引用")]),e._v(" "),t("p",[t("strong",[e._v("举例")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SoftReference sr = new SoftReference<String>(new String("hello"));\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("解释：")]),e._v(" 被标为软引用的对象被认为是"),t("code",[e._v("有用但不一定需要立马被回收")]),e._v("的对象，在发生GC时除非内存不够才会被回收，否则不会。")]),e._v(" "),t("p",[t("strong",[e._v("用例：")]),e._v(" 做一些小的缓存，比如网页浏览的上一页内容缓存进去，如果有人请求上一页，在内存足够的情况下直接返回内容，反之被可能因内存不够被回收掉了，重新获取内容即可。灵活的缓存，减少了OOM几率。")]),e._v(" "),t("h1",{attrs:{id:"弱引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#弱引用"}},[e._v("#")]),e._v(" 弱引用")]),e._v(" "),t("p",[t("strong",[e._v("举例：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('WeakReference wr = new WeakReference<String>(new String("hello"));\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("解释：")]),e._v(" 被标为弱引用的对象被认为是"),t("code",[e._v("非必须")]),e._v("对象，在发生GC时会被毫不留情的直接回收。")]),e._v(" "),t("p",[t("strong",[e._v("用例：")]),e._v(" 因为GC不会时刻发生，弱引用也不是说new出来会被立马回收，所以也可以和软引用一样做缓存之类的事。")]),e._v(" "),t("h1",{attrs:{id:"虚引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚引用"}},[e._v("#")]),e._v(" 虚引用")]),e._v(" "),t("p",[t("strong",[e._v("举例：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PhantomReference pr \n     = new PhantomReference<String>(new String("hello"),new ReferenceQueue<>());\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("strong",[e._v("解释：")]),e._v(" 虚引用"),t("code",[e._v("必须搭配ReferenceQueue")]),e._v("使用，被标为虚引用的对象，在发生GC时会被放进队列，然后回收。")]),e._v(" "),t("p",[t("strong",[e._v("用例：")]),e._v(" 和上面说的几个引用比，没发现有什么特别用处，你可以用来记录跟踪对象被垃圾回收的活动。有人形容虚引用为 —— “死亡证明，一般活人是根本不用的，只有人挂了的时候，去火葬场才能查到是哪个人挂了”")]),e._v(" "),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[t("strong",[e._v("表格概览：")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("引用类型")]),e._v(" "),t("th",[e._v("被回收时间")]),e._v(" "),t("th",[e._v("用途")]),e._v(" "),t("th",[e._v("生存时间")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("强引用")]),e._v(" "),t("td",[e._v("从来不会")]),e._v(" "),t("td",[e._v("对象的一般状态")]),e._v(" "),t("td",[e._v("JVM停止运行时")])]),e._v(" "),t("tr",[t("td",[e._v("软引用")]),e._v(" "),t("td",[e._v("内存不足时")]),e._v(" "),t("td",[e._v("对象缓存")]),e._v(" "),t("td",[e._v("内存不足时")])]),e._v(" "),t("tr",[t("td",[e._v("弱引用")]),e._v(" "),t("td",[e._v("jvm垃圾回收时")]),e._v(" "),t("td",[e._v("对象缓存")]),e._v(" "),t("td",[e._v("gc运行后")])]),e._v(" "),t("tr",[t("td",[e._v("虚引用")]),e._v(" "),t("td",[e._v("未知")]),e._v(" "),t("td",[e._v("未知")]),e._v(" "),t("td",[e._v("未知")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);