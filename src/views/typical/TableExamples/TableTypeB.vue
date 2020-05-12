<template>
    <div class="table-type-b">
        <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="标签 A" key="1">
                <h1 class="p2 table-name">新建数据</h1>
                <a-steps :current="1" size="default" style="width: 40%; margin: 48px 0 28px 10%;">
                    <a-step title="上传数据" />
                    <a-step title="数据存储配置" />
                </a-steps>
                <p class="table-title">数据量 43,653 特征数量 163 占用存储空间 150 MB 可预览前 100 行</p>
                <a-table :columns="tableColumns" :dataSource="tableData" :pagination="false" rowKey="user_id" :scroll="{ x: 1300, y: 408 }">
                    <template slot="user_id_slot" style="border: 1px solid red" >
                        <a-input value="user_id" class="key-input" disabled />
                        <a-select defaultValue="int" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="1" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="age_slot" >
                        <a-input value="age" disabled class="key-input" />
                        <a-select defaultValue="int" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="1" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="arpu_slot" >
                        <a-input value="arpu" disabled class="key-input" />
                        <a-select defaultValue="int" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="1" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="false" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="GPRS_month_slot" >
                        <a-input value="GPRS_month" disabled class="key-input" />
                        <a-select defaultValue="int" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="1" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="false" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="is_group_slot" >
                        <a-input value="is_group" disabled class="key-input" />
                        <a-select defaultValue="int" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="1" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="false" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="item_name_slot" >
                        <a-input value="item_name" disabled class="key-input" />
                        <a-select defaultValue="int" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="1" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="false" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="join_date_slot" >
                        <a-input value="join_date" disabled class="key-input" />
                        <a-select defaultValue="int" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="1" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="false" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="age2_slot" >
                        <a-input value="age2" disabled class="key-input" />
                        <a-select defaultValue="float" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="2" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="arpu2_slot" >
                        <a-input value="arpu2" disabled class="key-input" />
                        <a-select defaultValue="float" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="2" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="GPRS_month2_slot" >
                        <a-input value="GPRS_month2" disabled class="key-input" />
                        <a-select defaultValue="float" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="2" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="is_group2_slot" >
                        <a-input value="is_group2" disabled class="key-input" />
                        <a-select defaultValue="float" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="2" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="item_name2_slot" >
                        <a-input value="item_name2" disabled class="key-input" />
                        <a-select defaultValue="float" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="2" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check">使用</a-checkbox>
                    </template>
                    <template slot="join_date2_slot" >
                        <a-input value="join_date2" disabled class="key-input" />
                        <a-select defaultValue="float" class="key-input" @change="test">
                            <a-select-option value="int">int</a-select-option>
                            <a-select-option value="flout">flout</a-select-option>
                        </a-select>
                        <a-select defaultValue="2" class="key-input" @change="test">
                            <a-select-option value="1">连续</a-select-option>
                            <a-select-option value="2">离散</a-select-option>
                        </a-select>
                        <a-checkbox :defaultChecked="true" @change="test" class="key-check" style="width: 134px;">使用</a-checkbox>
                    </template>
                </a-table>
            </a-tab-pane>
            <a-tab-pane tab="标签 B" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
const tableColumns = [
    {dataIndex: 'user_id', key: 'user_id', slots: { title: 'user_id_slot'}, width: 138, fixed: 'left'},
    {dataIndex: 'age', key: 'age', slots: { title: 'age_slot'}, width: 130},
    {dataIndex: 'arpu', key: 'arpu', slots: { title: 'arpu_slot'}, width: 134},
    {dataIndex: 'GPRS_month', key: 'GPRS_month', slots: { title: 'GPRS_month_slot'}, width: 134},
    {dataIndex: 'is_group', key: 'is_group', slots: { title: 'is_group_slot'}, width: 134},
    {dataIndex: 'item_name', key: 'item_name', slots: { title: 'item_name_slot'}, width: 134},
    {dataIndex: 'join_date', key: 'join_date', slots: { title: 'join_date_slot'}, width: 134},
    {dataIndex: 'age2', key: 'age2', slots: { title: 'age2_slot'}, width: 134},
    {dataIndex: 'arpu2', key: 'arpu2', slots: { title: 'arpu2_slot'}, width: 134},
    {dataIndex: 'GPRS_month2', key: 'GPRS_month2', slots: { title: 'GPRS_month2_slot'}, width: 134},
    {dataIndex: 'is_group2', key: 'is_group2', slots: { title: 'is_group2_slot'}, width: 134},
    {dataIndex: 'item_name2', key: 'item_name2', slots: { title: 'item_name2_slot'}, width: 134},
    {dataIndex: 'join_date2', key: 'join_date2', slots: { title: 'join_date2_slot'}, width: 150},
];
const el = {
    'user_id': 'id', 'age': '11', 'arpu': 'a', 'GPRS_month': '3', 'is_group': 'true', 'item_name': '飞享套餐','join_date': '1943.07.09',
    'age2': '11', 'arpu2': 'a', 'GPRS_month2': '3', 'is_group2': 'true', 'item_name2': '飞享套餐','join_date2': '1943.07.09',
}
const tableData = new Array(32).fill(el).map((el, index) => ({...el, 'user_id': `${el.user_id}${index}`}));

import Vue from 'vue';
import {Tabs, Table, Input, Checkbox, Steps} from 'ant-design-vue';
Vue.use(Tabs).use(Table).use(Input).use(Checkbox).use(Steps)

export default {
    name: 'typical-table-b',
    data(){
        return {
            tableData,
            tableColumns,
        }
    },
    methods: {
        test(){
            console.log(1)
        },
        callback(){
            console.log('TODO:')
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.p2{
    font-size: @jt-font-size-lg;
    color: #333333;
    font-weight: @jt-font-weight-medium;
}
div.table-type-b{
    .table-name{
        height: 24px;
    }
    .table-title{
        color: #555555;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }
    /deep/ tr{
        transition: color 0s;
    }
    /deep/ .ant-tabs-tab{
        width: 160px;
        text-align: center;
    }
    /deep/ .ant-table-thead > tr > th{
        padding-top: 16px;
        padding-left: 16px;
        padding-right: 5px;
        padding-bottom: 0px;
        font-size: 12px;
    }
    /deep/ .ant-table-tbody > tr > td{
        padding-left: 16px;
        padding-top: 10px;
        font-size: 12px;
    }
    /deep/ .ant-table-thead > tr > th:nth-child(2){
        padding-left: 11px;
    }
    .key-input{
        width: 118px;
        height: 32px;
        margin-bottom: 8px;
        font-size: 12px;
    }
    .key-check{
        display: block;
        width: 118px;
        height: 25px;
        margin: 0 auto;
        text-align: left;
        font-size: 12px;
    }
    /deep/ .ant-steps-item-title{
        font-size: 14px;
    }
}
</style>