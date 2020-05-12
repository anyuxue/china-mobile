<template>
    <div id="home">
        <nav id="nav-1st" :class="collapsed ? 'nav-collapsed' : 'nav-expanded'">
            <header id="nav-header">
                <div id="logo"></div>
            </header>
            <div id="module-name">智能交互中心</div>
            <ul id="nav-menu">
                <li v-for="(menuitem, menuIdex) in menus" :key="menuitem.name" class="menu-item">
                    <router-link
                        :to="{ path: menuitem.link }"
                        class="menu-title"
                        @click.native="clickMenu(menuitem, menuIdex)"
                        :class="{'menu-actived': openMenuIndex === menuIdex }"
                    >
                        <span :class="'menu-icon iconfont ' + menuitem.icon"></span>
                        <span class="menu-text" v-if="!collapsed">{{ menuitem.name}}</span>
                        <span
                            v-if="menuitem.subs && !collapsed"
                            class="arrow-icon iconfont iconzhankai"
                        ></span>
                    </router-link>
                    <transition-collapse>
                        <ul
                            class="sub-menu"
                            :class="{'sub-menu-show':menuitem.subs && openMenuIndex === menuIdex}"
                        >
                            <li class="sub-menu-header" v-show="collapsed">
                                <router-link
                                    :to="{ path: menuitem.link }"
                                    @click.native="clickMenu(menuitem, menuIdex)"
                                >
                                    <div class="sub-menu-header-title">{{ menuitem.name}}</div>
                                </router-link>
                            </li>
                            <li
                                class="sub-menu-item"
                                v-for="subitem in menuitem.subs"
                                :key="subitem.name"
                            >
                                <router-link
                                    class="sub-menu-title"
                                    :to="{ path: subitem.link }"
                                    @click.native="clickSubMenu()"
                                >
                                    <span>{{subitem.name}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </transition-collapse>
                </li>
            </ul>
        </nav>
        <main id="wrapper" :class="{'nav-collapsed-left': collapsed}">
            <section id="container">
                <router-view />
            </section>
            <header id="header">
                <span
                    class="nav-trigger iconfont"
                    :class="collapsed ? 'icondaohangzhankai' : 'icondaohangshouqi'"
                    @click="() => (collapsed = !collapsed)"
                ></span>
                <div class="top-menu">
                    <span class="top-menu-item">站内信</span>
                    <span class="top-menu-item">工单</span>
                    <span class="top-menu-item">帮助</span>
                    <span class="top-menu-item">备案</span>
                    <span class="top-menu-item user-msg">user***</span>
                </div>
            </header>
        </main>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
#nav-header {
    width: 200px;
    height: 50px;
    line-height: 50px;
    background: #16233a;
    text-align: center;
}
#logo {
    background: url("~@/assets/logo.png") no-repeat 41px ~"/" 100px 28px;
    height: 50px;
}
#home {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 1366px;
    min-height: 625px;
}
#module-name {
    height: 58px;
    font-weight: 600;
    color: @jt-color-white;
    line-height: 60px;
    padding: 0 26px;
}
#nav-1st {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 200px;
    background: #304364;
    color: @jt-color-nav-text;
    a {
        color: @jt-color-nav-text;
    }
    &.nav-collapsed {
        width: 50px;
        #nav-header {
            width: 50px;
            overflow: hidden;
            #logo {
                width: 45px;
                background-position: 6px;
            }
        }
        #module-name {
            display: none;
        }
        #nav-menu .menu-item {
            .menu-title {
                padding: 0 17px;
            }
            .sub-menu {
                position: absolute;
                left: 50px;
                top: 0;
                width: 180px;
                display: none;
                .sub-menu-header {
                    height: 40px;
                    line-height: 40px;
                    background-color: rgba(38, 56, 87, 0.9);
                    cursor: initial;
                    .sub-menu-header-title {
                        height: 40px;
                        line-height: 40px;
                        margin: 0 18px;
                        border-bottom: 1px solid rgba(80, 100, 136, 0.9);
                    }
                }
                .sub-menu-item {
                    height: 40px;
                    line-height: 40px;
                    background-color: rgba(38, 56, 87, 0.9);
                    .sub-menu-title {
                        padding-left: 40px;
                    }
                }
            }

            &:hover {
                .sub-menu {
                    display: block;
                }
            }
        }
    }
    &.nav-expanded {
        overflow-y: auto;
        overflow-x: hidden;
        .sub-menu {
            display: none;
            &.sub-menu-show {
                display: block;
            }
        }
    }
    #nav-menu {
        user-select: none;
        .menu-item {
            cursor: pointer;
            position: relative;
            .menu-title {
                padding: 0 26px;
                height: 40px;
                line-height: 40px;
                position: relative;
                display: block;
                // border-left: 0px solid @jt-color-primary;
                // transition: border-width ease 300ms;
                &:hover {
                    color: @jt-color-white;
                }
                &.menu-actived {
                    // border-left-width: 3px;
                    background-color: #263857;
                    color: @jt-color-white;
                }
                .menu-icon {
                    margin-right: 10px;
                    font-size: @jt-font-size-lger;
                }
                .menu-text {
                    position: relative;
                    bottom: 1px;
                }
                .arrow-icon {
                    position: absolute;
                    top: 50%;
                    right: 20px;
                    transform: translateY(-50%);
                }
            }
            .sub-menu {
                .sub-menu-item {
                    height: 40px;
                    line-height: 40px;
                    background-color: #263857;
                    font-size: @jt-font-size-sm;
                    .sub-menu-title {
                        display: block;
                        padding-left: 55px;
                        &.router-link-active {
                            color: @jt-color-white;
                            background-color: @jt-color-primary;
                        }
                        &:hover {
                            color: @jt-color-white;
                        }
                    }
                }
            }
        }
    }
}
#wrapper {
    position: absolute;
    top: 0;
    left: 200px;
    right: 0;
    bottom: 0;
    z-index: 0;
    &.nav-collapsed-left {
        left: 50px;
    }
}
#header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    box-shadow: 0px -1px 8px 1px rgba(0, 0, 0, 0.2);
    z-index: 1;
    .nav-trigger {
        font-size: 18px;
        line-height: 50px;
        padding: 0 8px;
        cursor: pointer;
    }
    .top-menu {
        float: right;
        padding-right: 16px;
        .top-menu-item {
            display: inline-block;
            width: 76px;
            line-height: 50px;
            text-align: center;
            border-left: 1px solid #f5f5f5;
        }
        .user-msg {
            width: 91px;
            border-right: 1px solid #f5f5f5;
        }
    }
}
#container {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
    background: #eff1f4;
    z-index: 0;
}
</style>
<script>
import TransitionCollapse from "@/lib/transition-collapse.js";

export default {
    name: "Home",
    data: () => ({
        menus: [
            {
                icon: "iconyunyingguanli",
                name: "视觉规范(郭诗剑)",
                link: "/home/visual"
            },
            {
                icon: "iconjiqiren",
                name: "一级导航目录",
                subs: [
                    {
                        link: "/home/dev",
                        name: "测试环境"
                    },
                    {
                        link: "/home/pro",
                        name: "生产环境"
                    }
                ]
            },
            {
                icon: "iconmoxingxunlian",
                link: "/home/table",
                name: "典型表格(夏爽)"
            },
            {
                icon: "icontezhenggongcheng",
                link: "/home/form",
                name: "典型表单(李帅霖)"
            },
            {
                icon: "iconshujuku",
                link: "/home/drawer",
                name: "典型抽屉(沈涛)"
            },
            {
                icon: "iconyunyingguanli",
                link: "/home/data",
                name: "数据可视化(夏爽)"
            },
            {
                icon: "iconyuzhijineng",
                link: "/home/in-in",
                name: "接口文档（沈涛）"
            },
            {
                icon: "iconshujutansuo",
                link: "/about",
                name: "404"
            },
            {
                icon: "iconkongzhitai",
                name: "问答库",
                link: "/home/qaLibrary"
            },
            {
                icon: "iconkongzhitai",
                name: "控制台",
                link: "/home/controlPlatform"
            },
            {
                icon: "iconjiqiren",
                name: "我的机器人",
                subs: [
                    {
                        link: "/home/testEnv",
                        name: "测试环境"
                    },
                    {
                        link: "/home/productionEnv",
                        name: "生产环境"
                    }
                ]
            },
            {
                icon: "iconkongzhitai",
                name: "订购",
                link: "/custom-order"
            },
            {
                icon: "iconyuzhijineng",
                link: "/home/presetskill-empty",
                name: "预置技能（空）"
            },
            {
                icon: "iconyuzhijineng",
                link: "/home/presetskill-added",
                name: "预置技能（添加）"
            },
            {
                icon: "iconyuzhijineng",
                link: "/home/presetskill-production",
                name: "预置技能（生产）"
            },
        ],
        collapsed: false,
        openMenuIndex: -1
    }),
    watch: {
        $route() {
            this.openMenu();
        }
    },
    components: {
        "transition-collapse": TransitionCollapse
    },
    methods: {
        openMenu() {
            this.menus.forEach((menuItem, index) => {
                if (menuItem.subs) {
                    menuItem.subs.forEach(subItem => {
                        if (this.$route.path.includes(subItem.link)) {
                            this.openMenuIndex = index;
                        }
                    });
                } else if (this.$route.path.includes(menuItem.link)) {
                    this.openMenuIndex = index;
                }
            });
        },
        clickMenu(menuitem, menuIndex) {
            if (menuitem.subs) {
                if (this.openMenuIndex === menuIndex) {
                    this.openMenuIndex = -1;
                } else {
                    this.openMenuIndex = menuIndex;
                }
            } else {
                this.openMenuIndex = menuIndex;
                this.collapsed = true;
            }
        },
        clickSubMenu() {
            this.collapsed = true;
        }
    },
    mounted() {
        this.openMenu();
    }
};
</script>
