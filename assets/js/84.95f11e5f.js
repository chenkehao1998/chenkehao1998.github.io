(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{434:function(e,a,n){e.exports=n.p+"assets/img/v2-baaf7d50702f6d0935820b9415ff3_1c3833b91e3744cf9.3172e8f0.jpg"},772:function(e,a,n){"use strict";n.r(a);var t=n(3),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("RouterLink",{attrs:{to:"/04.java/04.spring/02.Spring Bean 生命周期之“我从哪里来”？.html"}},[e._v("Spring Bean 生命周期之“我从哪里来”？")])],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/04.java/04.spring/03.Spring Bean 生命周期之“我要到哪里去”？.html"}},[e._v("Spring Bean 生命周期之“我要到哪里去”？")])],1),e._v(" "),a("p",[e._v("有任何引用的时候被垃圾回收机制回收。而由Spring IoC容器托管的对象，它们的生命周期完全由容器控制。Spring中每个Bean的生命周期如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:n(434),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"_1-实例化bean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-实例化bean"}},[e._v("#")]),e._v(" 1. 实例化Bean")]),e._v(" "),a("p",[e._v("对于BeanFactory容器，当客户向容器请求一个尚未初始化的bean时，或初始化bean的时候需要注入另一个尚未初始化的依赖时，容器就会调用createBean进行实例化。\n对于ApplicationContext容器，当容器启动结束后，便实例化所有的bean。\n容器通过获取BeanDefinition对象中的信息进行实例化。并且这一步仅仅是简单的实例化，并未进行依赖注入。\n实例化对象被包装在BeanWrapper对象中，BeanWrapper提供了设置对象属性的接口，从而避免了使用反射机制设置属性。")]),e._v(" "),a("h2",{attrs:{id:"_2-设置对象属性-依赖注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置对象属性-依赖注入"}},[e._v("#")]),e._v(" 2. 设置对象属性（依赖注入）")]),e._v(" "),a("p",[e._v("实例化后的对象被封装在BeanWrapper对象中，并且此时对象仍然是一个原生的状态，并没有进行依赖注入。\n紧接着，Spring根据BeanDefinition中的信息进行依赖注入。\n并且通过BeanWrapper提供的设置属性的接口完成依赖注入。")]),e._v(" "),a("h2",{attrs:{id:"_3-注入aware接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-注入aware接口"}},[e._v("#")]),e._v(" 3. 注入Aware接口")]),e._v(" "),a("p",[e._v("紧接着，Spring会检测该对象是否实现了xxxAware接口，并将相关的xxxAware实例注入给bean。\n"),a("RouterLink",{attrs:{to:"/04.java/04.spring/04.Spring Aware 到底是个啥？.html"}},[e._v("Spring Aware 到底是个啥？")])],1),e._v(" "),a("h2",{attrs:{id:"_4-beanpostprocessor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-beanpostprocessor"}},[e._v("#")]),e._v(" 4. BeanPostProcessor")]),e._v(" "),a("p",[e._v("当经过上述几个步骤后，bean对象已经被正确构造，但如果你想要对象被使用前再进行一些自定义的处理，就可以通过BeanPostProcessor接口实现。\n该接口提供了两个函数：")]),e._v(" "),a("ul",[a("li",[e._v("postProcessBeforeInitialzation( Object bean, String beanName )\n当前正在初始化的bean对象会被传递进来，我们就可以对这个bean作任何处理。\n这个函数会先于InitialzationBean执行，因此称为前置处理。\n所有Aware接口的注入就是在这一步完成的。")]),e._v(" "),a("li",[e._v("postProcessAfterInitialzation( Object bean, String beanName )\n当前正在初始化的"),a("a",{attrs:{href:"https://www.zhihu.com/search?q=bean%E5%AF%B9%E8%B1%A1&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A247019950%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("bean对象"),a("OutboundLink")],1),e._v("会被传递进来，我们就可以对这个bean作任何处理。\n这个函数会在InitialzationBean完成后执行，因此称为后置处理。")])]),e._v(" "),a("h2",{attrs:{id:"_5-initializingbean与init-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-initializingbean与init-method"}},[e._v("#")]),e._v(" 5. InitializingBean与init-method")]),e._v(" "),a("p",[e._v("当BeanPostProcessor的前置处理完成后就会进入本阶段。\nInitializingBean接口只有一个函数：")]),e._v(" "),a("ul",[a("li",[e._v("afterPropertiesSet()")])]),e._v(" "),a("p",[e._v("这一阶段也可以在bean正式构造完成前增加我们自定义的逻辑，但它与前置处理不同，由于该函数并不会把当前bean对象传进来，因此在这一步没办法处理对象本身，只能增加一些额外的逻辑。\n若要使用它，我们需要让bean实现该接口，并把要增加的逻辑写在该函数中。然后Spring会在前置处理完成后检测当前bean是否实现了该接口，并执行afterPropertiesSet函数。")]),e._v(" "),a("p",[e._v("当然，Spring为了降低对客户代码的侵入性，给bean的配置提供了init-method属性，该属性指定了在这一阶段需要执行的函数名。Spring便会在初始化阶段执行我们设置的函数。init-method本质上仍然使用了InitializingBean接口。")]),e._v(" "),a("h2",{attrs:{id:"_6-disposablebean和destroy-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-disposablebean和destroy-method"}},[e._v("#")]),e._v(" 6. DisposableBean和destroy-method")]),e._v(" "),a("p",[e._v("和init-method一样，通过给destroy-method指定函数，就可以在bean销毁前执行指定的逻辑。")])])}),[],!1,null,null,null);a.default=r.exports}}]);