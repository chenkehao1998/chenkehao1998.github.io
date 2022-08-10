(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{756:function(a,s,t){"use strict";t.r(s);var n=t(3),l=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("本文原文地址 "),s("a",{attrs:{href:"https://blog.csdn.net/qq_43732685/article/details/120315275",target:"_blank",rel:"noopener noreferrer"}},[a._v("blog.csdn.net"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"java-中为-final-变量赋值的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-中为-final-变量赋值的几种方式"}},[a._v("#")]),a._v(" java 中为 final 变量赋值的几种方式")]),a._v(" "),s("ul",[s("li",[a._v("final 修饰的变量并不是在申明的时候就必须得赋值")]),a._v(" "),s("li",[a._v("被 final 修饰的变量，有三种赋值方式：")])]),a._v(" "),s("ol",[s("li",[a._v("在声明时直接赋值")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private final int finalVal = 10;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("先声明，然后在构造方法中赋值（最常用的方式）")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("class Demo {\n\t    private final int finalVal;\n\t    public Demo (int val){\n\t        this.finalVal = val;\n\t    }\n\t }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("先声明，然后在构造代码块中赋值")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private final int finalVal;\n\t    {\n\t        this.finalVal = 10;\n\t    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("ul",[s("li",[a._v("被 final static 修饰的变量，有两种赋值方式：")])]),a._v(" "),s("ol",[s("li",[a._v("在定义时直接赋值")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public static final int finalVal = 10;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("在静态代码块里赋值")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public static final int finalVal;\nstatic {\n  finalVal = 10;\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=l.exports}}]);