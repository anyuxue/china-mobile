<template>
    <div class="content">
        <img src="@/assets/init.png" alt />
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    background: @jt-color-white;
    padding: 10px;
    margin: @jt-gap;
}
</style>
<script>
export default {
    name: "Init",
    data: () => ({})
};
</script>
