<template>
    <div class="table-type-a">
        <div class="table-title" style="margin-bottom: 8px;">
            <jt-row>
                <jt-col :span="6">
                    <h3 class="p2">数据列表</h3>
                </jt-col>
                <jt-col :span="18" style="text-align: right;">
                    <a class="iconfont searchIcon" @click="todo" style="margin-right: 16px; cursor: pointer; font-size: 18px;">&#xe622;</a>
                    <a class="iconfont reloadIcon" @click="todo" style="margin-right: 16px; cursor: pointer; font-size: 18px;">&#xe623;</a>
                    <jt-divider type="vertical" style="margin-right: 16px; margin-left: 0px;" />
                    <jt-button size="large" type="primary" @click="todo" class="btn-create">
                        <jt-icon type="plus" style="font-size: 16px;" />
                        <i class="btn-word">新建数据</i>
                    </jt-button>
                </jt-col>
            </jt-row>
        </div>
        <jt-table :columns="typeAColumns" :dataSource="typeADataShow" :pagination="false" rowKey="name">
            <span slot="status-slot" slot-scope="text" :class="['status-common', getStatusMarkStyle(text)]">
                {{getStatusMarkWord(text)}}
            </span>
            <span slot="location-slot" slot-scope="text" class="location-slot">
                <jt-tooltip placement="topLeft">
                    <template slot="title">
                        <span>复制文件地址</span>
                    </template>
                    <span class="iconfont btn-icon copyicon" style="vertical-align: middle; margin-right: 4px; color: #999999; cursor: pointer;" @click="copy($event, text)">&#xe61c;</span>
                </jt-tooltip>
                <jt-tooltip placement="topLeft">
                    <template slot="title">
                        <span>{{text}}</span>
                    </template>
                    <span class="location-span">
                        {{text}}
                    </span>
                </jt-tooltip>
            </span>
            <span slot="progress-slot" slot-scope="text">
                <jt-progress v-if="text !== 50" :percent="text" size="small" style="width: 70%;">
                    <template v-slot:format="percent">
                        <span>{{percent}}%</span>
                    </template>
                </jt-progress>
                <jt-progress v-if="text === 50" :percent="text" size="small" :format="percent => `${percent}%`" :strokeColor="'#F04134'" style="width: 70%;"></jt-progress>
            </span>
            <span slot="options-slot" slot-scope="text, record, index" class="options-slot">
                <span class="btn-common btn-stop" v-if="index % 3 === 0" @click="todo">
                    <span class="iconfont btn-icon" style="vertical-align: middle; margin-right: 4px; color: #999999;">&#xe612;</span>
                    <span style="vertical-align: middle;">停止</span>
                </span>
                <span class="btn-common btn-retry" v-if="index % 3 === 1" @click="todo">
                    <span class="iconfont btn-icon" style="vertical-align: middle; margin-right: 4px; color: #999999;">&#xe623;</span>
                    <span style="vertical-align: middle;">重试</span>
                </span>
                <span class="btn-common btn-del" v-if="index % 3 === 2" @click="todo" style="margin-left: -2px;">
                    <span class="iconfont btn-icon" style="vertical-align: middle; margin-right: 4px; color: #999999; margin-left: 2px;">&#xe62f;</span>
                    <span style="vertical-align: middle;">删除</span>
                </span>
            </span>
        </jt-table>
        <jt-row style="margin-top: 20px;">
            <jt-col :span="6">
                共 {{typeACount}} 条记录
                <span class="pageOption" style="margin-left: 15px;">每页显示</span>
                <a-select :defaultValue="10" style="min-width: 50px; margin: 0 5px;" @change="onTypeAShowSizeChange">
                    <jt-icon slot="suffixIcon" type="caret-down" :style="{ color: '#606266',marginRight:'-7px' }"/>
                    <a-select-option :value="2">2</a-select-option>
                    <a-select-option :value="5">5</a-select-option>
                    <a-select-option :value="10">10</a-select-option>
                    <a-select-option :value="20">20</a-select-option>
                    <a-select-option :value="100">100</a-select-option>
                </a-select>
                <span>条</span>
            </jt-col>
            <jt-col :span="18">
                <Pagination
                    showQuickJumper :current="typeACurrentPage" :pageSize="typeAPageSize" :total="typeACount"
                    @change="onTypeAPageChange" style="text-align: right;"
                />
            </jt-col>
        </jt-row>
    </div>
</template>
<script lang="ts">
import {Pagination, Progress as JtProgress, Divider as JtDivider, Tooltip as JtTooltip, Select } from "ant-design-vue";
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import {Column} from "ant-design-vue/types/table/column";
import '@/assets/font/iconfont.css'

Vue.use(Select);
enum STATUS {QUEUE = 0, COMPLETE = 1, RUNING = 2, FAIL = 3}

@Component({
    components: {
        Pagination, JtProgress, JtDivider, JtTooltip
    }
})
export default class TableTypeA extends Vue {
    /**
     * 设计稿中各列栅格依次如下
     * 4, 2, 2, 2, 5, 3, 4, 2 = 24
     * 猜测width属性的工作方式：
     * - 如果每一列都配置了width属性时，则各列会遵从配置按比例分配宽度。
     * - 如果部分列配置了width属性，则作为实际数值作为列宽，单位px。其余列平分。
     */
    typeAColumns: Partial<Column>[] = [
        {title: '数据名称', dataIndex: 'name', key: 'name', width: 4},
        {title: '数据类型', dataIndex: 'type', key: 'type', width: 2},
        {title: '状态', dataIndex: 'status',  key: 'status', scopedSlots: { customRender: 'status-slot' }, width: 2},
        {title: '数据大小', dataIndex: 'size',  key: 'size', width: 2},
        {title: '文件地址', dataIndex: 'location',  key: 'location', scopedSlots: { customRender: 'location-slot' }, ellipsis: true, width: 5, customCell: this.locationCustomCell},
        {title: '创建时间', dataIndex: 'createTime', key: 'createTime', width: 3},
        {title: '任务进度', dataIndex: 'progress', key: 'progress', scopedSlots: { customRender: 'progress-slot' }, width: 4},
        {title: '操作', dataIndex: 'options', key: 'options', scopedSlots: { customRender: 'options-slot' }, width: 2}
    ];
    typeADataSrc: object[] = [];
    typeADataShow: object[] = [];
    typeAPageSize = 10;
    typeACount = 0;
    typeACurrentPage = 1;
    mounted(){
        this.initTypicalA();
    }
    locationCustomCell(): any{
        return{
            style: {
                paddingRight: '50px'
            }
        }
    }
    initTypicalA(){
        this.typeADataSrc = [
            {name: '202003210-notebook-0', type: 'table', status: 0, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/end', createTime: '2020.03.25 19:59', progress: 5},
            {name: '202003210-notebook-1', type: 'table', status: 1, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/end', createTime: '2020.03.25 19:59', progress: 10},
            {name: '202003210-notebook-2', type: 'table', status: 2, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/to/to/to/to/to/to/end', createTime: '2020.03.25 19:59', progress: 20},
            {name: '202003210-notebook-3', type: 'table', status: 3, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 30},
            {name: '202003210-notebook-4', type: 'table', status: 0, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 40},
            {name: '202003210-notebook-5', type: 'table', status: 1, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 50},
            {name: '202003210-notebook-6', type: 'table', status: 2, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 60},
            {name: '202003210-notebook-7', type: 'table', status: 3, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 70},
            {name: '202003210-notebook-10', type: 'table', status: 2, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 100},
            {name: '202003210-notebook-8', type: 'table', status: 0, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 80},
            {name: '202003210-notebook-9', type: 'table', status: 1, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 90},
            {name: '202003210-notebook-11', type: 'table', status: 3, size: '2.5GB', location: '/root/datas/cmcc/aic123/to/to/to/end', createTime: '2020.03.25 19:59', progress: 10},
        ];
        this.typeACount = this.typeADataSrc.length;
        this.typeADataShow = this.calctypeADataShow(1);
    }
    calctypeADataShow(pageIndex: number){
        return this.typeADataSrc.slice((pageIndex - 1 ) * this.typeAPageSize, pageIndex * this.typeAPageSize);
    }
    onTypeAShowSizeChange(showSizeSelected: number){
        const dataIndexBeforeChange: number = (this.typeACurrentPage - 1) * this.typeAPageSize
        this.typeAPageSize = showSizeSelected;
        const currentPageAfterChange: number = Math.floor(dataIndexBeforeChange / this.typeAPageSize) + 1
        this.typeACurrentPage = currentPageAfterChange;
        this.typeADataShow = this.calctypeADataShow(this.typeACurrentPage)
    }
    onTypeAPageChange(pageIndex: number){
        this.typeACurrentPage = pageIndex;
        this.typeADataShow = this.calctypeADataShow(pageIndex);
    }
    getStatusMarkStyle(status: STATUS): STATUS | string | undefined{
        const statusClassnamemap: Map<STATUS, string> = new Map([
            [STATUS.QUEUE, 'status-queue'],
            [STATUS.COMPLETE, 'status-complete'],
            [STATUS.RUNING, 'status-running'],
            [STATUS.FAIL, 'status-fail']
        ]);
        if(!statusClassnamemap.has(status)){
            return status;
        }
        return statusClassnamemap.get(status);
    }
    getStatusMarkWord(status: STATUS): STATUS | string | undefined{
        const statusWordmap: Map<STATUS, string> = new Map([
            [STATUS.QUEUE, '排队中'],
            [STATUS.COMPLETE, '完成'],
            [STATUS.RUNING, '运行中'],
            [STATUS.FAIL, '失败']
        ]);
        if(!statusWordmap.has(status)){
            return status;
        }
        return statusWordmap.get(status);
    }
    todo(){
        this.$message.info("TODO:");
    }
    copy(event: Event, text: string){
        try{
            const oInput = document.createElement('input');
            oInput.value = text;
            document.body.appendChild(oInput);
            oInput.select();
            document.execCommand("Copy");
            oInput.remove();
            this.$message.success("复制成功");
        }
        catch(err){
            console.warn(err)
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
div.table-type-a{
    .status-common{
        position: relative;
        padding-left: 14px;
        &::before{
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 8px;
            position: absolute;
            left: 0px;
            top: 6px;
        }
    }
    .status-complete::before{
        background-color: #10C038;
    }
    .status-fail::before{
        background-color: #F04134;
    }
    .status-queue::before{
        background-color: #FF931D;
    }
    .status-running::before{
        background-color: #337DFF;
    }
    .btn-common{
        cursor: pointer;
        color: #555555;
    }
    // progress, 100%时文字颜色修正
    /deep/ .ant-progress-status-success .ant-progress-text{
        color: #999999;
    }
    /deep/ tr{
        transition: color 0s;
        &:hover{
            .location-slot, .options-slot, .btn-icon, .btn-common{
                color: #337DFF!important;
            }
        }
        th{
            font-size: 12px;
            color: #333333;
        }
        td{
            font-size: 12px;
        }
    }
    .location-span{
        vertical-align: middle;
    }
    .btn-create{
        padding-left: 8px;
        width: 96px;
        height: 32px;
        font-size: 12px;
        font-weight: 500;
        i{
            vertical-align: top;
            &:nth-of-type(1){
                margin-top: 1px;
            }
        }
        i.btn-word{
            height: 18px;
            line-height: 18px;
            display: inline-block;
            font-style: normal;
            font-weight: @jt-font-weight-medium;
            margin-left: 10px;
        }
    }
    /deep/ .ant-select-selection__rendered{
        margin-left: 10px;
        margin-right: 22px;
    }
}
</style>