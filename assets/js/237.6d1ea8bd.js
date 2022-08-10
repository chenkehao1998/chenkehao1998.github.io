(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{907:function(t,_,v){"use strict";v.r(_);var s=v(3),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"oh-my-zsh-插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh-插件"}},[t._v("#")]),t._v(" oh-my-zsh 插件")]),t._v(" "),_("h2",{attrs:{id:"git"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),_("p",[t._v("默认已开启")]),t._v(" "),_("p",[_("strong",[t._v("作用")])]),t._v(" "),_("p",[t._v("可以使用各种 "),_("code",[t._v("git")]),t._v(" 命令缩写。😋")]),t._v(" "),_("p",[t._v("比如")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("git add --all ===> gaa\ngit commit -m ===> gcmsg\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://static.hufangyun.com/hexo/img/zsh-git.png?imageView2/2/w/350",alt:""}})]),t._v(" "),_("p",[t._v("查看所有 "),_("code",[t._v("git")]),t._v(" 命令缩写")]),t._v(" "),_("p",[t._v("cat ~/.oh-my-zsh/plugins/git/git.plugin.zsh")]),t._v(" "),_("p",[t._v("或者筛选对应的命令")]),t._v(" "),_("p",[t._v("如和 "),_("code",[t._v("config")]),t._v(" 有关的命令")]),t._v(" "),_("p",[t._v("alias | grep config")]),t._v(" "),_("h2",{attrs:{id:"autojump"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#autojump"}},[t._v("#")]),t._v(" autojump")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"}},[t._v("autojump 官网"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("作用")]),t._v(" 目录间快速跳转,不用再一直 "),_("code",[t._v("cd")]),t._v(" 了 😁")]),t._v(" "),_("p",[_("strong",[t._v("使用")])]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("autojump")]),t._v(" 的缩写 "),_("code",[t._v("j")])]),t._v(" "),_("p",[_("code",[t._v("cd")]),t._v(" 命令进入 "),_("code",[t._v("~/user/github/Youthink")]),t._v(" 文件夹，下一次再想进入 "),_("code",[t._v("Yourhink")]),t._v(" 文件夹的时候,直接 "),_("code",[t._v("j youthink")]),t._v(" 即可\n或者只输入 "),_("code",[t._v("youthink")]),t._v(" 的一部分 "),_("code",[t._v("youth")]),t._v(" 都行")]),t._v(" "),_("p",[t._v("删除无效路径")]),t._v(" "),_("p",[t._v("j --purge 无效路径")]),t._v(" "),_("p",[t._v("打开 muisc 文件夹")]),t._v(" "),_("p",[t._v("jo music")]),t._v(" "),_("p",[t._v("多个参数一起使用 打开 "),_("code",[t._v("/home/user/work/inbox")])]),t._v(" "),_("p",[t._v("j w in")]),t._v(" "),_("p",[t._v("和 "),_("code",[t._v("Z")]),t._v(" 不同 "),_("code",[t._v("autojump")]),t._v(" 不是 "),_("code",[t._v("zsh")]),t._v(" 内置的插件，需要额外安装。")]),t._v(" "),_("p",[t._v("首先安装 "),_("code",[t._v("autojump")]),t._v("，如果你用 "),_("code",[t._v("Mac")]),t._v("，可以使用 "),_("code",[t._v("brew")]),t._v(" 安装：")]),t._v(" "),_("p",[t._v("brew install autojump")]),t._v(" "),_("p",[t._v("如果是 "),_("code",[t._v("Linux")]),t._v("，可以使用 "),_("code",[t._v("git")]),t._v(" 安装，比如：")]),t._v(" "),_("p",[t._v("git clone git://github.com/joelthelion/autojump.git")]),t._v(" "),_("p",[t._v("进入目录，执行")]),t._v(" "),_("p",[t._v("./install.py")]),t._v(" "),_("p",[t._v("最后把以下代码加入 "),_("code",[t._v(".zshrc")]),t._v("：")]),t._v(" "),_("p",[t._v("[[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh")]),t._v(" "),_("h2",{attrs:{id:"z"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#z"}},[t._v("#")]),t._v(" Z")]),t._v(" "),_("p",[t._v("如果你不想额外安装 "),_("code",[t._v("autojump")])]),t._v(" "),_("p",[t._v("可以使用 "),_("code",[t._v("oh-my-zsh")]),t._v(" 内置的类似组件 "),_("a",{attrs:{href:"https://github.com/rupa/z",target:"_blank",rel:"noopener noreferrer"}},[t._v("Z"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("和 "),_("code",[t._v("autojump")]),t._v(" 除了名字不一样，基本雷同。")]),t._v(" "),_("p",[t._v("z -x 无效路径")]),t._v(" "),_("p",[t._v("效果图")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.hufangyun.com/hexo/img/zsh-z.jpg?imageView2/2/w/500",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"zsh-syntax-highlighting"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zsh-syntax-highlighting"}},[t._v("#")]),t._v(" zsh-syntax-highlighting")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("作用")]),t._v(" 平常用的"),_("code",[t._v("ls")]),t._v("、"),_("code",[t._v("cd")]),t._v(" 等命令输入正确会绿色高亮显示，输入错误会显示其他的颜色。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.hufangyun.com/hexo/img/zsh-syntax-highlighting.png?imageView2/2/w/450",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("安装")])]),t._v(" "),_("p",[t._v("克隆项目")]),t._v(" "),_("p",[t._v("git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting")]),t._v(" "),_("p",[t._v("在 "),_("code",[t._v("~/.zshrc")]),t._v(" 中配置")]),t._v(" "),_("p",[t._v("plugins=(其他的插件 zsh-syntax-highlighting)")]),t._v(" "),_("p",[t._v("使配置生效")]),t._v(" "),_("p",[t._v("source ~/.zshrc")]),t._v(" "),_("h2",{attrs:{id:"zsh-autosuggestions"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zsh-autosuggestions"}},[t._v("#")]),t._v(" zsh-autosuggestions")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("作用")])]),t._v(" "),_("p",[t._v("效率神器 👍")]),t._v(" "),_("p",[t._v("如图输入命令时，会给出建议的命令（灰色部分）按键盘 → 补全")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.hufangyun.com/hexo/img/zsh-autosuggestions.jpg?imageView2/2/w/350",alt:""}})]),t._v(" "),_("p",[t._v("如果感觉 → 补全不方便，还可以自定义补全的快捷键，比如我设置的逗号补全")]),t._v(" "),_("p",[t._v("bindkey ',' autosuggest-accept")]),t._v(" "),_("p",[t._v("在 "),_("code",[t._v(".zshrc")]),t._v(" 文件添加这句话即可。")]),t._v(" "),_("p",[_("strong",[t._v("安装")])]),t._v(" "),_("p",[t._v("克隆项目")]),t._v(" "),_("p",[t._v("git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions")]),t._v(" "),_("p",[t._v("在 "),_("code",[t._v("~/.zshrc")]),t._v(" 中配置")]),t._v(" "),_("p",[t._v("plugins=(其他的插件 zsh-autosuggestions)")]),t._v(" "),_("p",[t._v("使配置生效")]),t._v(" "),_("p",[t._v("source ~/.zshrc")]),t._v(" "),_("h2",{attrs:{id:"sublime"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sublime"}},[t._v("#")]),t._v(" sublime")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/sublime",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("已经内置直接启用即可")]),t._v(" "),_("p",[_("strong",[t._v("作用")])]),t._v(" "),_("p",[t._v("在命令行使用 "),_("code",[t._v("Sublime Text")]),t._v(" 打开文件、项目")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("st")]),t._v(" "),_("td",[t._v("打开 sublime")])]),t._v(" "),_("tr",[_("td",[t._v("st + 文件夹")]),t._v(" "),_("td",[t._v("打开该文件夹")])]),t._v(" "),_("tr",[_("td",[t._v("st + 文件")]),t._v(" "),_("td",[t._v("打开该文件")])]),t._v(" "),_("tr",[_("td",[t._v("stt")]),t._v(" "),_("td",[t._v("打开当前的文件夹，相当于 st .")])]),t._v(" "),_("tr",[_("td",[t._v("sst")]),t._v(" "),_("td",[t._v("管理员权限 相当于 sudo st")])])])]),t._v(" "),_("h2",{attrs:{id:"git-open"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-open"}},[t._v("#")]),t._v(" git-open")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/paulirish/git-open",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("在终端里打开当前项目的远程仓库地址")]),t._v(" "),_("p",[t._v("不要小看这个插件欧，每次改完本地代码，当你想用浏览器访问远程仓库的时候，就知道这个插件多方便了 😘")]),t._v(" "),_("p",[t._v("支持打开的远程仓库")]),t._v(" "),_("ul",[_("li",[t._v("github.com")]),t._v(" "),_("li",[t._v("gist.github.com")]),t._v(" "),_("li",[t._v("gitlab.com")]),t._v(" "),_("li",[t._v("自定义域名的 GitLab")]),t._v(" "),_("li",[t._v("bitbucket.org")]),t._v(" "),_("li",[t._v("Atlassian Bitbucket Server (formerly Atlassian Stash)")]),t._v(" "),_("li",[t._v("Visual Studio Team Services")]),t._v(" "),_("li",[t._v("Team Foundation Server (on-premises)")])]),t._v(" "),_("p",[_("strong",[t._v("安装")])]),t._v(" "),_("p",[t._v("克隆项目")]),t._v(" "),_("p",[t._v("git clone https://github.com/paulirish/git-open.git $ZSH_CUSTOM/plugins/git-open")]),t._v(" "),_("p",[t._v("在 "),_("code",[t._v("~/.zshrc")]),t._v(" 中配置")]),t._v(" "),_("p",[t._v("plugins=(其他的插件 git-open)")]),t._v(" "),_("p",[t._v("使配置生效")]),t._v(" "),_("p",[t._v("source ~/.zshrc")]),t._v(" "),_("h1",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("blockquote",[_("p",[t._v("我在 "),_("code",[t._v(".zshrc")]),t._v(" 中的其他配置")])]),t._v(" "),_("h2",{attrs:{id:"history-命令时间格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#history-命令时间格式"}},[t._v("#")]),t._v(" history 命令时间格式")]),t._v(" "),_("p",[_("code",[t._v("history")]),t._v(" 命令查看历史输入命令的时间展示格式")]),t._v(" "),_("p",[t._v('HIST_STAMPS="yyyy-mm-dd"')]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.hufangyun.com/hexo/img/zsh-history.jpg?imageView2/2/w/350",alt:""}})]),t._v(" "),_("p",[t._v("时间会按照指定的格式展示，方便搜索查看")]),t._v(" "),_("h2",{attrs:{id:"主题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[t._v("#")]),t._v(" 主题")]),t._v(" "),_("p",[t._v("在 "),_("code",[t._v("~/.zshrc")]),t._v(" 文件中设置主题为 "),_("code",[t._v("random")]),t._v(" 即可开启随机主题")]),t._v(" "),_("p",[t._v('ZSH_THEME="random"')]),t._v(" "),_("p",[t._v("每次打开新的终端的时候，zsh 都会随机使用一个主题")]),t._v(" "),_("h2",{attrs:{id:"别名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[t._v("#")]),t._v(" 别名")]),t._v(" "),_("p",[t._v('alias go="git-open"')]),t._v(" "),_("p",[t._v('alias rm="trash"')]),t._v(" "),_("p",[t._v("安装了一个 "),_("code",[t._v("trash")]),t._v(" 命令，替代 "),_("code",[t._v("rm")]),t._v(" 命令，被删除的文件会放到垃圾桶")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/sindresorhus/trash",target:"_blank",rel:"noopener noreferrer"}},[t._v("trash 官网"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("安装方式")]),t._v(" "),_("p",[t._v("npm install --global trash-cli")]),t._v(" "),_("p",[t._v('alias cp="cp -i')]),t._v(" "),_("p",[t._v("防止 "),_("code",[t._v("copy")]),t._v(" 的时候覆盖已存在的文件, 带上 "),_("code",[t._v("i")]),t._v(" 选项，文件已存在的时候，会提示，需要确认才能 "),_("code",[t._v("copy")])]),t._v(" "),_("h2",{attrs:{id:"bat-代替-cat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bat-代替-cat"}},[t._v("#")]),t._v(" "),_("code",[t._v("bat")]),t._v(" 代替 "),_("code",[t._v("cat")])]),t._v(" "),_("p",[_("code",[t._v("cat")]),t._v(" 某个文件，可以在终端直接输出文件内容，"),_("code",[t._v("bat")]),t._v(" 相比 "),_("code",[t._v("cat")]),t._v(" 增加了行号和颜色高亮 👍")]),t._v(" "),_("p",[t._v("直接上个效果")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.hufangyun.com/hexo/img/zsh-bat.jpg?imageView2/2/w/500",alt:""}})]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/sharkdp/bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("安装方式")]),t._v(" "),_("p",[t._v("macOS 上")]),t._v(" "),_("p",[t._v("brew install bat")])])}),[],!1,null,null,null);_.default=a.exports}}]);