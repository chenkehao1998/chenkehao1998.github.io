(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{847:function(v,_,t){"use strict";t.r(_);var r=t(3),s=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"首部格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首部格式"}},[v._v("#")]),v._v(" 首部格式")]),v._v(" "),_("p",[v._v("分为固定首部和可变首部")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9naXRlZS5jb20va2VoYW9vL3BpY2dvX3JlcG9zaXRvcnkvcmF3L21hc3Rlci9pbWcvaW1hZ2UtMjAyMDA0MjcxODE1MDk3NTEucG5n?x-oss-process=image/format,png",alt:"image-20200427181509751"}})]),v._v(" "),_("h2",{attrs:{id:"固定首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#固定首部"}},[v._v("#")]),v._v(" 固定首部")]),v._v(" "),_("p",[_("strong",[v._v("序号字段")]),v._v("：占 4 字节，序号字段的值则指的是本报文段所发送的"),_("strong",[v._v("数据的第一个字节")]),v._v("的序号")]),v._v(" "),_("p",[_("strong",[v._v("确认号字段")]),v._v("：占 4 字节，是"),_("strong",[v._v("期望")]),v._v("收到对方的"),_("strong",[v._v("下一个报文段")]),v._v("的数据的"),_("strong",[v._v("第一个字节")]),v._v("的序号。")]),v._v(" "),_("blockquote",[_("p",[v._v("例： B正确收到A发送过来的一个报文段，其序号字段值是501，而数据长度是200字节（序号501-700）。这表明B正确收到了A发送的到序号700为止的数据。因此， B期望收到A的下一个数据序号是701。")]),v._v(" "),_("p",[v._v("若确认号=N，则表明：到序号N-1为止的所有数据都已正确收到。")])]),v._v(" "),_("p",[_("strong",[v._v("数据偏移")]),v._v("（即首部长度）：占 4 位，它指出 TCP 报文段的数据起始处距离 TCP 报文段的起始处有多远。“数据偏移”的单位是 32 位字（以 4 字节为计算单位,4*8=32）。")]),v._v(" "),_("p",[_("strong",[v._v("保留字段")]),v._v("：占 6 位，保留为今后使用，但目前应置为 0。")]),v._v(" "),_("p",[v._v("紧急 "),_("strong",[v._v("URG")]),v._v("：当 URG = 1 时，表明紧急指针字段有效。它告诉系统此报文段中有紧急数据，应尽快传送(相当于高优先级的数据)。")]),v._v(" "),_("blockquote",[_("p",[v._v("urgent紧急")])]),v._v(" "),_("p",[v._v("确认 "),_("strong",[v._v("ACK")]),v._v("：只有当 ACK = 1 时确认号字段才有效。当 ACK = 0时，确认号无效")]),v._v(" "),_("blockquote",[_("p",[v._v("acknowledge承认")])]),v._v(" "),_("p",[v._v("推送 "),_("strong",[v._v("PSH")]),v._v(" (PuSH)：接收 TCP 收到 PSH = 1 的报文段，就尽快地交付接收应用进程，而不再等到整个缓存都填满了后再向上交付。")]),v._v(" "),_("p",[v._v("复位 "),_("strong",[v._v("RST")]),v._v(" (ReSeT) ：当 RST = 1 时，表明 TCP 连接中出现严重差错（如由于主机崩溃或其他原因），必须释放连接，然后再重新建立运输连接")]),v._v(" "),_("p",[v._v("同步 "),_("strong",[v._v("SYN")]),v._v("：同步 SYN = 1 表示这是一个连接请求或连接接受报文")]),v._v(" "),_("blockquote",[_("p",[v._v("synchronized同步的")])]),v._v(" "),_("p",[v._v("终止 "),_("strong",[v._v("FIN")]),v._v(" (FINis)：用来释放一个连接。 FIN = 1 表明此报文段的发送端的数据已发送完毕，并要求释放运输连接。")]),v._v(" "),_("p",[_("strong",[v._v("窗口字段")]),v._v("：占 2 字节，用来让"),_("strong",[v._v("对方")]),v._v("设置发送窗口的"),_("strong",[v._v("依据")]),v._v("，单位为字节。")]),v._v(" "),_("blockquote",[_("p",[v._v("例： A发送给B的报文段中，确认号是701，窗口字段是1000。\n表明从701号算起，发送此报文段的A还有接收1000个字节数据的接收缓存空间。\n即 告诉B可以发送1000个字节。")])]),v._v(" "),_("p",[_("strong",[v._v("检验和")]),v._v(":占 2 字节。 检验和字段计算方法同UDP。")]),v._v(" "),_("p",[_("strong",[v._v("紧急指针字段")]),v._v("：占 16 位， 指出在本报文段中紧急数据共有多少个字节（紧急数据放在本报文段数据的最前面） 。")]),v._v(" "),_("h2",{attrs:{id:"可变首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可变首部"}},[v._v("#")]),v._v(" 可变首部")]),v._v(" "),_("p",[_("strong",[v._v("选项字段")]),v._v("：长度可变。 TCP 最初只规定了一种选项， 即最大报文段长度 MSS。 MSS 是 TCP 报文段中的数据字段的最大长度。")]),v._v(" "),_("p",[_("strong",[v._v("填充字段")]),v._v(" ：这是为了使整个首部长度是 4 字节的整数倍。")]),v._v(" "),_("blockquote",[_("p",[v._v("凑数用的")])]),v._v(" "),_("h1",{attrs:{id:"可靠传输的工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输的工作原理"}},[v._v("#")]),v._v(" 可靠传输的工作原理")]),v._v(" "),_("h2",{attrs:{id:"理想的传输条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#理想的传输条件"}},[v._v("#")]),v._v(" 理想的传输条件")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("传输信道不产生差错。")])]),v._v(" "),_("li",[_("p",[v._v("不管发送方以多快的速度发送数据，接收方总是来得及处理收\n到的数据。")])])]),v._v(" "),_("blockquote",[_("p",[v._v("在这样的理想传输条件下，不需要采取任何措施就能够实现可靠传输。然而实际的网络都不具备以上两个理想条件。 必须使用一些可靠传输协议， 在不可靠的传输信道实现可靠传输。")])]),v._v(" "),_("h2",{attrs:{id:"停止等待协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#停止等待协议"}},[v._v("#")]),v._v(" 停止等待协议")]),v._v(" "),_("p",[_("RouterLink",{attrs:{to:"/网络/网络原理/传输层/TCP：停止等待协议.html"}},[v._v("TCP：停止等待协议")])],1),v._v(" "),_("h2",{attrs:{id:"连续arq协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连续arq协议"}},[v._v("#")]),v._v(" 连续ARQ协议")]),v._v(" "),_("p",[_("RouterLink",{attrs:{to:"/网络/网络原理/传输层/TCP_连续ARQ协议.html"}},[v._v("TCP:连续ARQ协议")])],1),v._v(" "),_("h1",{attrs:{id:"拥塞控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[v._v("#")]),v._v(" 拥塞控制")]),v._v(" "),_("p",[_("RouterLink",{attrs:{to:"/网络/网络原理/传输层/TCP_ 拥塞控制.html"}},[v._v("TCP: 拥塞控制")])],1),v._v(" "),_("h1",{attrs:{id:"连接管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接管理"}},[v._v("#")]),v._v(" 连接管理")]),v._v(" "),_("p",[v._v("TCP运输连接分为三个阶段")]),v._v(" "),_("ol",[_("li",[v._v("连接建立")]),v._v(" "),_("li",[v._v("数据传送")]),v._v(" "),_("li",[v._v("连接释放")])]),v._v(" "),_("h2",{attrs:{id:"建立连接之前"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建立连接之前"}},[v._v("#")]),v._v(" 建立连接之前")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("TCP连接的建立采用 客户/服务器 的方式")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("主动发起连接")]),v._v("建立请求的"),_("strong",[v._v("应用进程")]),v._v("叫做"),_("strong",[v._v("客户")]),v._v("（Client）")]),v._v(" "),_("li",[_("strong",[v._v("被动等待连接")]),v._v("建立的"),_("strong",[v._v("应用进程")]),v._v("叫做"),_("strong",[v._v("服务器")]),v._v("（Server）")])])]),v._v(" "),_("li",[_("p",[v._v("客户、服务器都能确知对方的存在")])]),v._v(" "),_("li",[_("p",[v._v("要允许双方协商一些参数：")]),v._v(" "),_("ul",[_("li",[v._v("最大窗口值、时间戳、服务质量等")])])]),v._v(" "),_("li",[_("p",[v._v("要能对运输实体资源进行分配：")]),v._v(" "),_("ul",[_("li",[v._v("缓存大小、连接表中的项目等")])])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9naXRlZS5jb20va2VoYW9vL3BpY2dvX3JlcG9zaXRvcnkvcmF3L21hc3Rlci9pbWcvaW1hZ2UtMjAyMDA0MjgxMjQ0MjgwODUucG5n?x-oss-process=image/format,png",alt:"image-20200428124428085"}})]),v._v(" "),_("p",[v._v("服务器要提前创建传输控制块TCB  ，并进入监听状态")]),v._v(" "),_("blockquote",[_("p",[v._v("TCB存储连接中所需的TCP连接请求表、窗口值、序号、时间戳等重要信息。")])]),v._v(" "),_("p",[v._v("客户端确定要访问的地址，也创建传输控制块TCB，准备发起网络访问")]),v._v(" "),_("h2",{attrs:{id:"建立连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建立连接"}},[v._v("#")]),v._v(" 建立连接")]),v._v(" "),_("p",[v._v("三次握手 "),_("RouterLink",{attrs:{to:"/网络/网络原理/传输层/TCP：连接的建立，三次握手.html"}},[v._v("TCP：连接的建立，三次握手")])],1),v._v(" "),_("h2",{attrs:{id:"释放连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#释放连接"}},[v._v("#")]),v._v(" 释放连接")]),v._v(" "),_("p",[v._v("四次挥手 "),_("RouterLink",{attrs:{to:"/网络/网络原理/传输层/TCP_连接的释放 四次挥手.html"}},[v._v("TCP:连接的释放 四次挥手")])],1)])}),[],!1,null,null,null);_.default=s.exports}}]);