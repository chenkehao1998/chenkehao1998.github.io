(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{871:function(a,t,s){"use strict";s.r(t);var n=s(3),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"什么是portainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是portainer"}},[a._v("#")]),a._v(" 什么是portainer")]),a._v(" "),t("p",[a._v("图形化 docker管理工具")]),a._v(" "),t("h1",{attrs:{id:"安装过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[a._v("#")]),a._v(" 安装过程")]),a._v(" "),t("ol",[t("li",[a._v("创建一个文件夹用于portainer的映射（其实也可以直接用数据卷）")]),a._v(" "),t("li",[a._v("执行命令")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v(":9000 --name portainer "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -v /var/run/docker.sock:/var/run/docker.sock "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v("/data:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    cr.portainer.io/portainer/portainer-ce:latest\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);