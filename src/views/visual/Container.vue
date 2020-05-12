<template>
    <div class="content">
        <div class="square sq1"></div>
        <div class="square sq2"></div>
        <div class="square sq3"></div>
        <div class="square sq4"></div>
        <div class="square sq5"></div>
        <div class="square sq6"></div>
        <div class="square sq7"></div>
        <div class="square sq8"></div>
        <div class="square sq9"></div>
        <div class="square sq10"></div>
        <div class="square sq11"></div>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    display: flex;
    flex-flow: row wrap;
    background: @jt-color-white;
    padding: 10px;
    margin: @jt-gap;
}
.square {
    width: 100px;
    height: 100px;
    line-height: 100px;
    float: left;
    margin: 10px;
    text-align: center;
}
.sq1 {
    background: rgba(245, 245, 245, 1);
    border: 1px solid rgba(217, 217, 217, 1);
}
.sq2 {
    background: rgba(253, 236, 234, 1);
    border: 1px solid rgba(247, 160, 153, 1);
}
.sq3 {
    background: rgba(234, 242, 255, 1);
    border: 1px solid rgba(153, 190, 255, 1);
}
.sq4 {
    background: rgba(231, 248, 235, 1);
    border: 1px solid rgba(135, 223, 155, 1);
}
.sq5 {
    background: rgba(255, 244, 232, 1);
    border: 1px solid rgba(255, 201, 142, 1);
}
.sq6 {
    background: rgba(241, 242, 245, 1);
    border: 1px solid rgba(186, 193, 205, 1);
}
.sq7 {
    background: rgba(255, 255, 255, 1);
    border: 1px dashed rgba(217, 217, 217, 1);
}
.sq8 {
    border: 1px dashed rgba(51, 125, 255, 1);
}
.sq9 {
    background: rgba(51, 125, 255, 0.1);
    border: 1px dashed rgba(51, 125, 255, 1);
}
.sq10 {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
        0px 6px 16px 0px rgba(0, 0, 0, 0.08),
        0px 3px 6px -4px rgba(0, 0, 0, 0.12);
}
.sq11 {
    background: rgba(51, 51, 51, 0.85);
    box-shadow: 0px 0px 10px 0px rgba(153, 153, 153, 0.3);
}
</style>
<script>
export default {
    name: "Container",
    data: () => ({})
};
</script>
