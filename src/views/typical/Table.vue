<template>
    <section class="content">
        <article><TableTypeA /></article>
        <article><TableTypeB /></article>
        <article><TableTypeC /></article>
        <article><TableTypeD /></article>
    </section>
</template>
<style lang="less" scoped>
.content{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    overflow: auto;
    article{
        background-color: #fff;
        border: 1px solid #EFF1F4;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 2px;
    }
    .mt20{
        margin-top:20px;
    }
}
</style>
<script>
import TableTypeA from './TableExamples/TableTypeA.vue';
import TableTypeB from './TableExamples/TableTypeB.vue';
import TableTypeC from './TableExamples/TableTypeC.vue';
import TableTypeD from './TableExamples/TableTypeD.vue';
export default {
    name: "Table",
    components: {TableTypeA, TableTypeB, TableTypeC, TableTypeD},
};
</script>
