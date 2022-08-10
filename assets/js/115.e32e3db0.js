(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{720:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-题目"}},[s._v("#")]),s._v(" 1. 题目")]),s._v(" "),t("blockquote",[t("p",[s._v("难度：简单\n编写一个 SQL 查询，来删除 Person 表中所有重复的电子邮箱，重复的邮箱里只保留 Id 最小 的那个。")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Id")]),s._v(" "),t("th",[s._v("Email")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("1")]),s._v(" "),t("td",[s._v("john@example.com")])]),s._v(" "),t("tr",[t("td",[s._v("2")]),s._v(" "),t("td",[s._v("bob@example.com")])]),s._v(" "),t("tr",[t("td",[s._v("3")]),s._v(" "),t("td",[s._v("john@example.com")])])])]),s._v(" "),t("p",[s._v("Id 是这个表的主键。\n例如，在运行你的查询语句之后，上面的 Person 表应返回以下几行: |")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Id")]),s._v(" "),t("th",[s._v("Email")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("1")]),s._v(" "),t("td",[s._v("john@example.com")])]),s._v(" "),t("tr",[t("td",[s._v("2")]),s._v(" "),t("td",[s._v("bob@example.com")])])])]),s._v(" "),t("h2",{attrs:{id:"_2-解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-解答"}},[s._v("#")]),s._v(" 2. 解答")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" person\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" m_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" person "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" email\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_3-注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-注意事项"}},[s._v("#")]),s._v(" 3. 注意事项")]),s._v(" "),t("p",[s._v("这道题使用MySql 写成")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" person\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" m_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" person "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" email\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("会报错\n解决方法: "),t("RouterLink",{attrs:{to:"/数据库/mysql 出现You can_t specify target table for update .html"}},[s._v("mysql 出现You can't specify target table for update in FROM clause错误的解决方法")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);