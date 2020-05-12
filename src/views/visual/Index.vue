<template>
    <div class="container">
        <nav class="nav-2nd">
            <header class="nav-2nd-tip">
                <span class="menu-icon iconfont iconfanhui"></span>
                <span class="menu-text">视觉规范</span>
            </header>
            <ul class="nav-2nd-menu">
                <li v-for="item in navs" :key="item.link">
                    <router-link v-bind:to="{ path:`/home/visual/${item.link}` }">
                        <span :class="'menu-icon iconfont ' + item.icon"></span>
                        <span class="menu-text">{{item.name}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
        <section class="section">
            <router-view></router-view>
        </section>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.nav-2nd {
    background: #fff;
    width: 180px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    user-select: none;
    overflow-y: auto;
    border-right: 1px solid #e9ebef;
    .nav-2nd-tip {
        padding: 0 4px;
        .menu-icon {
            margin-right: 3px;
        }
        .menu-text {
            position: relative;
            bottom: 1px;
        }
        &:hover {
            color: @jt-color-primary;
        }
    }
    .nav-2nd-menu {
        li {
            height: 40px;
            line-height: 40px;
            .menu-icon {
                margin-right: 8px;
                font-size: @jt-font-size-lger;
            }
            .menu-text {
                position: relative;
                bottom: 2px;
            }
            a {
                border-right: 0px solid #337dff;
                display: inline-block;
                width: 100%;
                height: 100%;
                padding: 0 24px;
                color: @jt-color-text;
                &:hover {
                    background: @jt-color-nav-hover;
                }
                &.router-link-active {
                    border-width: 3px;
                    background-color: #eaf2ff;
                    color: #337dff;
                }
            }
        }
    }
}
.nav-2nd-tip {
    display: block;
    height: 59px;
    line-height: 59px;
    margin: 0 16px;
    border-bottom: 1px solid #e9ebef;
    font-size: 12px;
    color: @jt-color-text-strong;
}
.section {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 180px;
    right: 0;
    overflow-y: auto;
}
</style>
<script>
export default {
    name: "Index",
    components: {},
    methods: {
        greet: function(event) {
            console.log(event);
        }
    },
    data: () => ({
        navs: [
            {
                icon: "iconyunyingguanli",
                link: "color",
                name: "颜色"
            },
            {
                icon: "icontezhenggongcheng",
                link: "font",
                name: "文字"
            },
            {
                icon: "iconmoxingyingyong",
                link: "container",
                name: "容器"
            },
            {
                icon: "iconmoxingku",
                link: "buttons",
                name: "按钮"
            },
            {
                icon: "iconfasong",
                link: "navigation",
                name: "导航"
            },
            {
                icon: "iconshujubiaozhu",
                link: "dataEntry",
                name: "数据录入"
            },
            {
                icon: "iconshujuku",
                link: "dataDisplay",
                name: "数据展示"
            },
            {
                icon: "iconwendaku",
                link: "feedback",
                name: "反馈"
            },
            {
                icon: "iconkongzhitai",
                link: "grid",
                name: "栅格"
            },
            {
                icon: "iconlianjie",
                link: "init",
                name: "工具"
            }
        ]
    })
};
</script>
