(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{819:function(t,A,L){"use strict";L.r(A);var M=L(3),S=Object(M.a)({},(function(){var t=this,A=t._self._c;return A("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[A("ol",[A("li",[A("p",[t._v("为了保证A发送的最后一个ACK报文能够到达B。这个ACK报文段有可能丢失，因而使处在LAST-ACK状态的B收不到对已发送的FIN+ACK报文段的确认。B会超时重传这个FIN+ACK报文段，而A就能在2MSL时间内收到这个重传的FIN+ACK报文段。如果A在TIME-WAIT状态不等待一段时间，而是在发送完ACK报文段后就立即释放连接，就无法收到B重传的FIN+ACK报文段，因而也不会再发送一次确认报文段。这样，B就无法按照正常的步骤进入CLOSED状态。")])]),t._v(" "),A("li",[A("p",[t._v("A在发送完ACK报文段后，再经过2MSL时间，就可以使本连接持续的时间所产生的所有报文段都从网络中消失。这样就可以使下一个新的连接中不会出现这种旧的连接请求的报文段。")])])]),t._v(" "),A("p",[t._v("什么是2MSL")]),t._v(" "),A("p",[t._v("MSL是Maximum Segment Lifetime英文的缩写，中文可以译为“报文最大生存时间”，他是"),A("strong",[t._v("任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃")]),t._v("。因为tcp报文（segment）是ip数据报（datagram）的数据部分，具体称谓请参见《数据在网络各层中的称呼》一文，而ip头中有一个TTL域，TTL是time to live的缩写，中文可以译为“生存时间”，这个生存时间是由源主机设置初始值但不是存的具体时间，而是存储了一个ip数据报可以经过的最大路由数，每经过一个处理他的路由器此值就减1，当此值为0则数据报将被丢弃，同时发送ICMP报文通知源主机。RFC 793中规定MSL为2分钟，实际应用中常用的是30秒，1分钟和2分钟等。")]),t._v(" "),A("p",[t._v("2MSL即两倍的MSL，TCP的TIME_WAIT状态也称为2MSL等待状态，当TCP的一端发起主动关闭，在发出最后一个ACK包后，即第3次握手完成后发送了第四次握手的ACK包后就进入了TIME_WAIT状态，必须在此状态上停留两倍的MSL时间，等待2MSL时间主要目的是怕最后一个ACK包对方没收到，那么对方在超时后将重发第三次握手的FIN包，主动关闭端接到重发的FIN包后可以再发一个ACK应答包。在TIME_WAIT状态时两端的端口不能使用，要等到2MSL时间结束才可继续使用。当连接处于2MSL等待阶段时任何迟到的报文段都将被丢弃。不过在实际应用中可以通过设置SO_REUSEADDR选项达到不必等待2MSL时间结束再使用此端口。")]),t._v(" "),A("p",[t._v("TTL与MSL是有关系的但不是简单的相等的关系，MSL要大于等于TTL。")])])}),[],!1,null,null,null);A.default=S.exports}}]);