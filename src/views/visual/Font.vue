<template>
    <div class="content">
        <pre>font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'</pre>
        <p class="p1">一级标题</p>
        <p class="p2">卡片标题</p>
        <p class="p3">弹窗标题</p>
        <p class="p4">导航步骤条</p>
        <p class="p5">提示、正文</p>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    background: @jt-color-white;
    padding: 10px;
    margin: @jt-gap;
}
.p1 {
    font-size: @jt-font-size-lger;
    font-weight: @jt-font-weight-medium;
    color: @jt-color-text-title;
}
.p2 {
    font-size: @jt-font-size-lg;
    font-weight: @jt-font-weight-medium;
    color: @jt-color-text-strong;
}
.p3 {
    font-size: @jt-font-size-base;
    font-weight: @jt-font-weight-medium;
    color: @jt-color-text-strong;
}
.p4 {
    font-size: @jt-font-size-base;
    color: @jt-color-text-strong;
}
.p5 {
    font-size: @jt-font-size-sm;
}
</style>
<script>
export default {
    name: "Font"
};
</script>
