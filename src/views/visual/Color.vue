<template>
    <div class="content">
        <div v-for="item in colors" class="wrapper">
            <div
                class="square square-solid"
                :style="{background:item.color, borderColor:item.color}"
            >
                <pre>{{item.color}}</pre>
            </div>
            <div class="square square-hollow" :style="{borderColor:item.color}">
                <pre>{{item.color}}</pre>
            </div>
            <div class="square-tip">{{item.tip}}</div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    display: flex;
    flex-flow: column wrap;
    background: @jt-color-white;
    padding: 10px;
    margin: @jt-gap;
}
.wrapper {
    .square {
        width: 100px;
        height: 100px;
        line-height: 100px;
        float: left;
        margin: 2px;
        border: 3px solid;
        text-align: center;
    }
    .square-tip {
        float: left;
        width: 200px;
        height: 100px;
        padding: 3px;
    }
}
</style>
<script>
export default {
    name: "Color",
    data: () => ({
        colors: [
            {
                color: "#337DFF",
                tip:
                    "全局导航，导航菜单选中状态，按钮，文字链接；状态：正在运行、进行中等等"
            },
            {
                color: "#5392FF",
                tip: "一般按钮鼠标悬停状态的颜色"
            },
            {
                color: "#125DE1",
                tip: "一般按钮鼠标点击、纯文字按钮鼠标悬停和点击的颜色"
            },
            {
                color: "#10C038",
                tip: "成功提示的颜色"
            },
            {
                color: "#F04134",
                tip: "失败提示的颜色"
            },
            /* {
                color: "#F04134",
                tip: "告警提示的颜色/最高"
            }, */
            {
                color: "#FF931D",
                tip: "告警提示的颜色/高"
            },
            /* {
                color: "#FFBB03",
                tip: "告警提示的颜色/中"
            },
            {
                color: "#FFD667",
                tip: "告警提示的颜色/低"
            }, */
            {
                color: "#337DFF",
                tip: "进行中的颜色"
            },
            {
                color: "#75849B",
                tip: "未进行的动作颜色"
            },
            {
                color: "#FFFFFF",
                tip: ""
            },
            {
                color: "#F4F5F7",
                tip: "列表表头"
            },
            {
                color: "#F5F8FF",
                tip: "左侧导航、列表每行悬停背景色"
            },
            {
                color: "#F9FAFC",
                tip: "嵌入式列表下拉背景"
            },
            {
                color: "#E9ECF1",
                tip: "选项卡颜色、弹窗分割线"
            },
            {
                color: "#EFF1F4",
                tip: "背景"
            },
            {
                color: "#031129",
                tip: "标题文字的颜色"
            },
            {
                color: "#333333",
                tip: "正文、强调文字"
            },
            {
                color: "#555555",
                tip: "正文、列表参数展示文字颜色"
            },
            {
                color: "#999999",
                tip: "辅助文字"
            },
            {
                color: "#BBBBBB",
                tip: "不可用状态"
            },
            {
                color: "#D9D9D9",
                tip: "所有border默认状态颜色"
            },
            {
                color: "#D0D0D0",
                tip: "导航icon/文字默认颜色"
            }
        ]
    })
};
</script>
