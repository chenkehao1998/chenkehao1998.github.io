(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{744:function(t,e,v){"use strict";v.r(e);var a=v(3),o=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("这里的 shiro 拦截器需要设置成"),e("code",[t._v('map.put("/admin/*", "authc");')]),t._v("\n这里有两种poc，都是可以绕过")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("admin/a%25%32%66a")])]),t._v(" "),e("li",[e("code",[t._v("/;/admin/aaa")])])]),t._v(" "),e("p",[t._v("第一种情况")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("/admin/a%25%32%66a")]),t._v("——>传入到shiro自动解码一次变成"),e("code",[t._v("/admin/a%2fa")]),t._v("——>经过 decodeRequestString 变成"),e("code",[t._v("/admin/a/a")])])]),t._v(" "),e("p",[t._v("由于这里我们的拦截器是"),e("code",[t._v('map.put("/admin/*", "authc");')]),t._v("，这里需要了解一下shiro的URL是ant格式，路径是支持通配符表示的。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("?")]),t._v("：匹配一个字符")]),t._v(" "),e("li",[e("code",[t._v("*")]),t._v("：匹配零个或多个字符串")]),t._v(" "),e("li",[e("code",[t._v("**")]),t._v("：匹配路径中的零个或多个路径")])]),t._v(" "),e("p",[t._v("第2种情况成功利用需要下面的条件")]),t._v(" "),e("blockquote",[e("p",[t._v("应用不能部署在根目录，也就是需要context-path，server.servlet.context-path=/test，如果为根目录则context-path为空，就会被CVE-2020-1957的patch将URL格式化，值得注意的是若Shiro版本小于1.5.2的话那么该条件就不需要。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);