(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{459:function(t,a,s){t.exports=s.p+"assets/img/95af3f13329ba7f7b70531315fddbfbb.2672268f.png"},795:function(t,a,s){"use strict";s.r(a);var r=s(3),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Java内存模型(JavaMemoryModel)描述了Java程序中各种变量(线程共享变量)的访问规则，以及在JVM中将变量，存储到内存和从内存中读取变量这样的底层细节。")]),t._v(" "),a("h2",{attrs:{id:"jmm有以下规定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmm有以下规定"}},[t._v("#")]),t._v(" JMM有以下规定：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("所有的共享变量都存储于主内存，这里所说的变量指的是实例变量和类变量，不包含局部变量，因为局部变量是线程私有的，因此不存在竞争问题。")])]),t._v(" "),a("li",[a("p",[t._v("每一个线程还存在自己的工作内存，线程的工作内存，保留了被线程使用的变量的工作副本。\n线程对变量的所有的操作(读，取)都必须在工作内存中完成，而不能直接读写主内存中的变量。")])]),t._v(" "),a("li",[a("p",[t._v("不同线程之间也不能直接访问对方工作内存中的变量，线程间变量的值的传递需要通过主内存中转来完成。")])])]),t._v(" "),a("h2",{attrs:{id:"本地内存和主内存的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地内存和主内存的关系"}},[t._v("#")]),t._v(" 本地内存和主内存的关系：")]),t._v(" "),a("p",[a("img",{attrs:{src:s(459),alt:"95af3f13329ba7f7b70531315fddbfbb.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);