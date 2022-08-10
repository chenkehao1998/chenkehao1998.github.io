(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{809:function(t,l,n){"use strict";n.r(l);var v=n(3),_=Object(v.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[t._v("那 Linux 系统为了解决中断处理程序执⾏过⻓和中断丢失的问题，将中断过程分成了两个阶段。")]),t._v(" "),l("ul",[l("li",[t._v("上半部⽤来快速处理中断，⼀般会暂时关闭中断请求，主要负责处理跟硬件紧密相关或者时间敏感的事情。")]),t._v(" "),l("li",[t._v("下半部⽤来延迟处理上半部未完成的⼯作，⼀般以「内核线程」的⽅式运⾏。")])]),t._v(" "),l("blockquote",[l("p",[t._v("外卖例⼦，由于第⼀个配送员⻓时间跟我通话，则导致第⼆位配送员⽆法拨通我的电话，其实当我接到第⼀位配送员的电话，可以告诉配送员说我现在下楼，剩下的事情，等我们⻅⾯再说（上半部），然后就可以挂断电话，到楼下后，在拿外卖，以及跟配送员说其他的事情（下半部）。这样，第⼀位配送员就不会占⽤我⼿机太多时间，当第⼆位配送员正好过来时，会有很⼤⼏率拨通我的电话。")])]),t._v(" "),l("blockquote",[l("p",[t._v("⼀个计算机中的例⼦，常⻅的⽹卡接收⽹络包的例⼦。\n⽹卡收到⽹络包后，会通过硬件中断通知内核有新的数据到了，于是内核就会调⽤对应的中断处理程序来响应该事件，这个事件的处理也是会分成上半部和下半部。\n上部分要做到快速处理，所以只要把⽹卡的数据读到内存中，然后更新⼀下硬件寄存器的状态，⽐如把状态更新为表示数据已经读到内存中的状态值。接着，内核会触发⼀个软中断，把⼀些处理⽐较耗时且复杂的事情，交给「软中断处理程序」去做，也就是中断的下半部，其主要是需要从内存中找到⽹络数据，再按照⽹络协议栈，对⽹络数据进⾏逐层解析和处理，最后把数据送给应⽤程序。")])]),t._v(" "),l("p",[t._v("中断处理程序的上部分和下半部可以理解为：")]),t._v(" "),l("ul",[l("li",[t._v("上半部直接处理硬件请求，也就是硬中断，主要是负责耗时短的⼯作，特点是快速执行；")]),t._v(" "),l("li",[t._v("下半部是由内核触发，也就说软中断，主要是负责上半部未完成的⼯作，通常都是耗时⽐较长的事情，特点是延迟执行；")])])])}),[],!1,null,null,null);l.default=_.exports}}]);