<template>
    <div class="container">
        <nav class="nav-2nd">
            <header class="nav-2nd-tip">
                <div style="padding: 20px 0px;">
                    <Breadcrumb>
                        <breadcrumb-item>
                            <router-link to="/home/qaLibrary">
                                <span style="width: 11px; height: 11px; color: #999999;">
                                    <jt-icon type="left" />
                                </span>
                                <span class="headerText">测试环境</span>
                            </router-link>
                        </breadcrumb-item>
                    </Breadcrumb>
                </div>
            </header>
            <div style="margin-bottom: 16px;">
                <div style="display: flex; flex-flow: row;">
                    <div style="width: 40px; height: 40px; margin-top: 16px; margin-left: 16px;">
                        <img src="../../assets/image/RobotAvatar.png" width="40px" height="40px" />
                    </div>
                    <div style="margin-top: 17px; margin-right: 32px; margin-left: 8px;">
                        <span class="robotName">无敌聪明的小机器人</span>
                        <span class="robotId">ID:sd7869</span>
                    </div>
                </div>
                <div style="margin-top: 8px; margin-left: 62px;">
                    <jt-button class="testButton">测试</jt-button>
                </div>
            </div>
            <ul class="nav-2nd-menu">
                <li v-for="item in navs" :key="item.name">
                    <router-link
                        v-bind:to="{ path: item.link }"
                        @click.native="clickMenu(item, item.name)"
                        :class="{'menu-actived': openMenuName === item.name && !item.hasOwnProperty('subs') }"
                    >
                        <span :class="'menu-icon iconfont ' + item.icon"></span>
                        <span>{{item.name}}</span>
                        <span
                            v-if="item.subs"
                            :class="['arrow-icon', 'iconfont', item.openFlag ? 'iconshouqi' : 'iconzhankai']"
                        ></span>
                    </router-link>
                    <transition-collapse>
                        <ul class="sub-menu" v-show="item.subs && item.openFlag">
                            <li
                                class="sub-menu-item"
                                v-for="subitem in item.subs"
                                :key="subitem.name"
                            >
                                <router-link
                                    class="sub-menu-title"
                                    :to="{ path:subitem.link }"
                                    @click.native="clickMenu(subitem, subitem.name)"
                                >
                                    <span>{{subitem.name}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </transition-collapse>
                </li>
            </ul>
        </nav>
        <section class="section">
            <div class="breadcrumb">
                <Breadcrumb>
                    <breadcrumb-item>
                        <router-link to="/home/qaLibrary">测试环境</router-link>
                    </breadcrumb-item>
                    <breadcrumb-item>{{openMenuName}}</breadcrumb-item>
                </Breadcrumb>
            </div>
            <div style="width: 1136px; padding: 20px 20px 40px 20px">
                <router-view></router-view>
            </div>
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
    .nav-2nd-menu {
        li {
            cursor: pointer;
            position: relative;
            a {
                height: 40px;
                line-height: 40px;
                position: relative;
                display: block;
                &:hover {
                    background-color: #f5f8ff;
                }
                &.menu-actived {
                    border-width: 3px;
                    background-color: #eaf2ff;
                    color: #337dff;
                }
                .menu-icon {
                    margin-right: 8px;
                    font-size: @jt-font-size-lger;
                }
                .arrow-icon {
                    float: right;
                    width: 11px;
                    height: 11px;
                    margin-right: 18px;
                    color: #cccccc;
                }

                border-right: 0px solid #337dff;
                padding-left: 25px;
                color: @jt-color-text;
            }
            .sub-menu {
                .sub-menu-item {
                    height: 40px;
                    line-height: 40px;
                    .sub-menu-title {
                        display: block;
                        padding-left: 50px;
                        &.router-link-active {
                            border-width: 3px;
                            background-color: #eaf2ff;
                            color: #337dff;
                        }
                        &:hover {
                            background-color: #f5f8ff;
                        }
                    }
                }
            }
        }
    }
}
.nav-2nd-tip {
    display: block;
    height: 58px;
    background: #ffffff;
    border-bottom: 1px solid #e9ebef;
    margin: 0 16px;
    padding: 0 4px;
}
.section {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 180px;
    right: 0;
    overflow-y: auto;
}
.robotName {
    width: 84px;
    font-size: 14px;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #555555;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.robotId {
    width: 84px;
    margin-top: 2px;
    font-size: 12px;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #999999;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
.testButton {
    width: 72px;
    height: 24px;
    padding: 3px 15px 3px 14px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    font-size: 12px;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #555555;
    line-height: 18px;
}
.headerText {
    width: 120px;
    height: 18px;
    font-size: 12px;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #555555;
    line-height: 20px;
    margin-left: 5px;
}
.breadcrumb {
    width: 1136px;
    background: #ffffff;
    height: 58px;
    line-height: 58px;
    padding: 19px;
    border-left: 1px solid #e9ebef;
    border-bottom: 1px solid #e9ebef;
}
</style>

<script>
import TransitionCollapse from "@/lib/transition-collapse.js";
import { Breadcrumb } from "ant-design-vue";

export default {
    name: "RobotHome",
    data: () => ({
        imgEmptyLibrary: "../../assets/image/EmptyLibrary.png",
        navs: [
            {
                icon: "iconwendaku",
                link: "libraryList",
                name: "问答库"
            },
            {
                icon: "iconduihuajineng",
                name: "对话技能",
                openFlag: true,
                subs: [
                    {
                        link: "guideDialog",
                        name: "引导式对话"
                    },
                    {
                        link: "sceneDialog",
                        name: "场景式对话"
                    }
                ]
            },
            {
                icon: "iconyuzhijineng",
                link: "presetSkills",
                name: "预置技能"
            },
            {
                icon: "iconyunyingguanli",
                name: "运营管理",
                openFlag: true,
                subs: [
                    {
                        link: "extRecommendation",
                        name: "扩展问推荐"
                    },
                    {
                        link: "userLogs",
                        name: "用户日志"
                    },
                    {
                        link: "dataStatistics",
                        name: "数据统计"
                    },
                    {
                        link: "operationLog",
                        name: "操作日志"
                    }
                ]
            },
            {
                icon: "iconshujubiaozhu",
                link: "dataAnnotation",
                name: "数据标注"
            }
        ],
        openMenuName: ""
    }),
    watch: {
        $route() {
            this.setOpenMenu();
        }
    },
    components: {
        "transition-collapse": TransitionCollapse,
        Breadcrumb,
        "breadcrumb-item": Breadcrumb.Item
    },
    methods: {
        setOpenMenu() {
            this.navs.forEach(menuItem => {
                if (menuItem.subs) {
                    menuItem.subs.forEach(subItem => {
                        if (this.$route.path.includes(subItem.link)) {
                            this.openMenuName = subItem.name;
                        }
                    });
                } else if (this.$route.path.includes(menuItem.link)) {
                    this.openMenuName = menuItem.name;
                }
            });
        },
        clickMenu(menuitem, menuName) {
            if (!menuitem.subs) {
                this.openMenuName = menuName;
            } else {
                menuitem.openFlag = !menuitem.openFlag;
            }
        }
    },
    mounted() {
        this.setOpenMenu();
    }
};
</script>
