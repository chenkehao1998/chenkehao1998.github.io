(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{666:function(t,_,s){t.exports=s.p+"assets/img/02__E4_B8_8D_E5_81_9C_E6_9C_BA_E_5624f3051e58493b9.fbcf9271.png"},971:function(t,_,s){"use strict";s.r(_);var n=s(3),e=Object(n.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("双写迁移方案")]),t._v(" "),_("p",[t._v("简单来说，就是在线上系统里面，之前所有写库的地方，增删改操作，都除了对老库增删改，都加上对新库的增删改，这就是所谓双写，同时写俩库，老库和新库。")]),t._v(" "),_("p",[t._v("然后系统部署之后，新库数据差太远，用之前说的导数工具，跑起来读老库数据写新库，写的时候要根据gmt_modified这类字段判断这条数据最后修改的时间，除非是读出来的数据在新库里没有，或者是比新库的数据新才会写。")]),t._v(" "),_("p",[t._v("接着导万一轮之后，有可能数据还是存在不一致，那么就程序自动做一轮校验，比对新老库每个表的每条数据，接着如果有不一样的，就针对那些不一样的，从老库读数据再次写。反复循环，直到两个库每个表的数据都完全一致为止。")]),t._v(" "),_("p",[t._v("接着当数据完全一致了，就ok了，基于仅仅使用分库分表的最新代码，重新部署一次，不就仅仅基于分库分表在操作了么，还没有几个小时的停机时间，很稳。所以现在基本玩儿数据迁移之类的，都是这么干了。")]),t._v(" "),_("p",[_("img",{attrs:{src:s(666),alt:"02_不停机双写方案"}})])])}),[],!1,null,null,null);_.default=e.exports}}]);