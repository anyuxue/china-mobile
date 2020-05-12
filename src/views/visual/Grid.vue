<template>
    <section class="content">
        <jt-row :gutter="16">
            <jt-col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </jt-col>
            <jt-col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </jt-col>
            <jt-col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </jt-col>
            <jt-col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </jt-col>
        </jt-row>
    </section>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    background: @jt-color-white;
    padding: 10px;
    margin: @jt-gap;
}
.ant-row > div {
    background: transparent;
    border: 0;
}
.gutter-box {
    color: @jt-color-white;
    background: @jt-color-primary;
    padding: 5px 0;
}
</style>
<script>
export default {
    name: "Grid",
    components: {}
};
</script>
