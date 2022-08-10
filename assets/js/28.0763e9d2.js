(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{474:function(s,n,a){s.exports=a.p+"assets/img/watermark_type_ZmFuZ3poZW5naGVpd_dd40cf61c23b49d19.c00f6671.png"},475:function(s,n,a){s.exports=a.p+"assets/img/watermark_type_ZmFuZ3poZW5naGVpd_938d0ef9f423410c8.392ba1bb.png"},476:function(s,n,a){s.exports=a.p+"assets/img/watermark_type_ZmFuZ3poZW5naGVpd_db219904341843358.d7c8bf28.png"},477:function(s,n,a){s.exports=a.p+"assets/img/watermark_type_ZmFuZ3poZW5naGVpd_4b6b561a089341cc8.bf9a151f.png"},478:function(s,n,a){s.exports=a.p+"assets/img/watermark_type_ZmFuZ3poZW5naGVpd_2ee620a5fdcd414d8.6632d56c.png"},797:function(s,n,a){"use strict";a.r(n);var t=a(3),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("本文原文地址 "),n("a",{attrs:{href:"https://blog.csdn.net/qq_27184497/article/details/116902175?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"}},[s._v("blog.csdn.net"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("我们先看看类的加载过程，在我们运行 java 代码时，首先会通过编译器将. java 的文件编程成. class 文件，之后在通过类加载器将. class 文件转为字节码加载到 jvm 运行时数据区里面，整个加载过程如下")]),s._v(" "),n("p",[n("img",{attrs:{src:a(474),alt:""}})]),s._v(" "),n("p",[s._v("上图只是类的加载过程，还没有创建对象； 那如果创建对象的话，比如执行 "),n("strong",[s._v("new Object();")]),s._v(" 这段代码，里面主要有 2 个步骤，分别是实例化和初始化")]),s._v(" "),n("p",[n("img",{attrs:{src:a(475),alt:""}})]),s._v(" "),n("p",[s._v("如果创建对象的是有引用变量，那就是这样的")]),s._v(" "),n("p",[n("img",{attrs:{src:a(476),alt:""}})]),s._v(" "),n("h1",{attrs:{id:"实例化-半初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例化-半初始化"}},[s._v("#")]),s._v(" 实例化 (半初始化)")]),s._v(" "),n("p",[s._v("对象实例化的过程，其实也叫半初始化，就是时候你创建对象的过程中创建到一半的情况下，拿下面的代码来举例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package com.test;\npublic class Test {\n \n    public static void main(String[] args) throws InterruptedException {\n \n        Obj object_1 = new Obj();\n    }\n}\n \nclass Obj {\n    int i = 13;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("首先会为该对象分配一块堆内存用来存放对象和父类的属性实例，new 这个关键字就是用来分配内存的，并且给对象和父类的属性进行复制，这里的赋值都是给默认值，也就是零值；")]),s._v(" "),n("p",[n("img",{attrs:{src:a(477),alt:""}})]),s._v(" "),n("h1",{attrs:{id:"初始化和引用赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化和引用赋值"}},[s._v("#")]),s._v(" 初始化和引用赋值")]),s._v(" "),n("p",[s._v("初始化就需要给属性赋值真正的数据了，这个数据是用户给定的，如果是引用的话，就会将引用变量指向给定的地址，并且调用初始化方法")]),s._v(" "),n("p",[n("strong",[s._v("init() 方法")]),s._v("：就是我们说的构造器，构造器就包括 构造方法、{} 包住的代码等。")]),s._v(" "),n("p",[n("strong",[s._v("clinit() 方法")]),s._v("： "),n("clinit",[s._v("() 方法是由编译器自动收集类中的所有类变量的赋值动作和静态语句块（static{} 语句）中的语句合并产生的，编译器收集的顺序是有语句在源文件中出现的顺序所决定的，静态语句块中只能访问到定义在静态语句块之前的变量，定义在它之后的变量，在前面的静态语句块中可以赋值，但不能访问。")])],1),s._v(" "),n("h3",{attrs:{id:"引用赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用赋值"}},[s._v("#")]),s._v(" "),n("strong",[s._v("引用赋值")])]),s._v(" "),n("p",[s._v("引用赋值是先分配一块栈内存来存放 object_1 并将栈内存的 object_1 指向"),n("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E5%A0%86%E5%86%85%E5%AD%98&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[s._v("堆内存"),n("OutboundLink")],1),s._v("的对象实例，这也是对象创建的最后一步操作；引用赋值完成后，整个对像就创建完成了！")]),s._v(" "),n("p",[n("img",{attrs:{src:a(478),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"init-与-clinit-加载顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#init-与-clinit-加载顺序"}},[s._v("#")]),s._v(" init() 与 clinit() 加载顺序")]),s._v(" "),n("p",[s._v("当一个类初始化的时候，先调用 "),n("cinit",[s._v(" 方法 ，然后在继续执行 < init>")])],1),s._v(" "),n("p",[s._v("我们用用代码测试下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package com.test;\n \n/**\n * 类初始化\n */\npublic class Init {\n \n    public static void main(String[] args) {\n        ChildClass childClass = new ChildClass();\n    }\n}\n \n \nclass  ChildClass extends ParentClass{\n \n    static {\n        System.out.println("我是子类的静态方法");\n    }\n \n    public ChildClass(){\n        System.out.println("我是子类的构造函数");\n    }\n}\n \nclass ParentClass{\n    static {\n        System.out.println("我是父类的静态方法");\n    }\n \n    public ParentClass(){\n        System.out.println("我是父类的构造函数");\n    }\n \n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("打印结果")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("我是父类的静态方法\n我是子类的静态方法\n我是父类的构造函数\n我是子类的构造函数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);