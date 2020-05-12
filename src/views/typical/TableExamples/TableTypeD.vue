<template>
    <div class="table-type-4">
        <jt-row type="flex" justify="space-between">
            <jt-col >
                <h4 class="titleName">实例列表</h4>
            </jt-col>
            <jt-col>
                <a class="iconfont searchIcon" @click="todo">&#xe622;</a>
                <a class="iconfont reloadIcon" @click="todo">&#xe623;</a>
                <span class="dividerLine"></span>
                <jt-button size="large"  type="primary" class="addBtn" @click="todo">
                    <span class="iconfont creatIcon" >&#xe628;</span>
                    <span class="btn_word">新建项目</span>
                </jt-button>
            </jt-col>
        </jt-row>
        <jt-table :columns="exampleColumns" :dataSource="exampleData"  rowKey='id' class="mt16 jtTabel" :pagination="false"  >
            <!-- 状态表头提示 -->
            <div slot="data_status">
                <span>状态</span>
                <jt-tooltip placement="top">
                    <template slot="title"><span>状态提示文字</span></template>
                    <jt-icon  type="question-circle" :style="{marginLeft:'6px',color:'#999999'}"/>
                </jt-tooltip>
            </div>
            <!-- 名称 -->
            <span  slot="data-name-solt" slot-scope="text" >
                <jt-tooltip placement="topLeft">
                    <template slot="title"><span> {{text}}</span></template>
                    {{text}}
                </jt-tooltip>
            </span>
            <!-- 状态 -->
            <span  slot="data-status-slot" slot-scope="text" :class="['status-common', getStatusMarkStyle(text)]">
                {{getStatusMarkWord(text)}}
            </span>
            <!-- 资源套餐 -->
            <a slot="data-package-slot"  slot-scope="text" @click="todo" class="optionSlot">
                <span  class="iconfont icon">&#xe614;</span>
                <jt-tooltip placement="topLeft">
                    <template slot="title"><span> {{text}}</span></template>
                    {{text}}
                </jt-tooltip>
                
            </a>
            <!-- 操作 -->
            <span slot="data-options-slot" class="option-wrapper optionSlot" slot-scope="text, record">
                <jt-button v-if="record.data_status===1" size="large" type="link" @click="todo"><span  class="iconfont icon">&#xe610;</span>开始</jt-button>
                <jt-button v-if="record.data_status!=1" size="large" type="link" @click="todo"><span  class="iconfont icon">&#xe612;</span>暂停</jt-button>
                <jt-button  size="large" type="link" @click="todo" class="del" :class="{'disable':record.data_status===1}" :disabled="record.data_status===1"><span  class="iconfont  delIcon icon" :class="['disable',record.data_status===1]">&#xe62f;</span>删除</jt-button>
            </span>
        </jt-table>
        <jt-row class="mt16">
            <jt-col :span="6" class="pageOptionWrap">
                <span> 共 {{typeDCount}} 条记录</span>
                <span class="pageOption">每页显示</span>
                <jt-select :defaultValue="typeDPageSize"  style="min-width: 50px" @change="pageChange" class="pageOptionSel">
                    <jt-icon slot="suffixIcon" type="caret-down" :style="{ color: '#606266',marginRight:'-7px' }"/>
                    <jt-select-option :value="10">10</jt-select-option>
                    <jt-select-option :value="20">20</jt-select-option>
                    <jt-select-option :value="300000000000">300000000000</jt-select-option>
                </jt-select>
                <span>条</span>
            </jt-col>
            <jt-col :span="18">
                <jt-pagination  :total="typeDCount" :pageSize="typeDPageSize" showQuickJumper style="text-align: right;"   @change="onTypical4PageChange">
                </jt-pagination>
            </jt-col>
        </jt-row>
    </div>
</template>
<script lang="ts">
import {Pagination,Select} from "ant-design-vue";
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import { Column } from "ant-design-vue/types/table/column";
import '@/assets/font/iconfont.css'

enum STATUS {QUEUE = 0, SUSPEND = 1, RUNING = 2, FAIL = 3}

@Component({
    components: {
        "jt-pagination":Pagination,
        "jt-select": Select,
        "jt-select-option": Select.Option,
    }
})
export default class TableTypeD extends Vue {
    exampleColumns: Partial<Column>[] = [
        {title: '实例名称',dataIndex: 'data_name',key: 'name',scopedSlots: { customRender: "data-name-solt" },ellipsis: true, width: 4},
        {title: '实例ID', dataIndex: 'data_id',key: 'id',width: 3},
        {dataIndex: 'data_status',key: 'status', slots: { title: 'data_status' }, scopedSlots: { customRender: "data-status-slot" },width:2},
        {title: '资源套餐', dataIndex: 'data_package',key: 'package',scopedSlots: { customRender: "data-package-slot" },ellipsis: true, width:5},
        {title: '创建时间',dataIndex: 'data_creatTime',key: 'creatTime',width:3},
        {title: '服务时长',dataIndex: 'data_serviceTime',key: 'serviceTime',width:2},
        {title: '操作',dataIndex: 'data_options',key: 'options',scopedSlots: { customRender: "data-options-slot" },width:5},
    ];
    exampleData: object[] = [];
    typeDDataSrc: object[] = [];
    typeDPageSize = 10;
    typeDCount = 0;
    mounted(){
        this.initTypical4();
    }
    initTypical4(){
        this.typeDDataSrc = [
            {'id':"1",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"2",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"3",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':0,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"4",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':1,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"5",'data_name':'notebook-1_3452612352261...662','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"6",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"7",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"8",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"9",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"10",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':3,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
            {'id':"11",'data_name':'20200320-notebook-1','data_id':'dl-bj-263','data_status':2,'data_package':'GPU实例_8核128GB内存4GPU', 'data_creatTime':'2020.03.25 19:59','data_serviceTime':'06:23:13'},
        ];
        this.typeDCount = this.typeDDataSrc.length;
        this.exampleData = this.calctypeDDataShow(1);
    }
    calctypeDDataShow(pageIndex: number){
        return this.typeDDataSrc.slice((pageIndex - 1 ) * this.typeDPageSize, pageIndex * this.typeDPageSize);
    }
    getStatusMarkStyle(status: STATUS): STATUS | string | undefined{
        const statusClassnamemap: Map<STATUS, string> = new Map([
            [STATUS.QUEUE, 'status-queue'],
            [STATUS.SUSPEND, 'status-suspend'],
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
            [STATUS.QUEUE, '启动中'],
            [STATUS.SUSPEND, '已暂停'],
            [STATUS.RUNING, '进行中'],
            [STATUS.FAIL, '失败']
        ]);
        if(!statusWordmap.has(status)){
            return status;
        }
        return statusWordmap.get(status);
    }
    onTypical4ShowSizeChange(currentPageIndex: number, pageSize: number){
        this.typeDPageSize = pageSize;
        this.exampleData = this.calctypeDDataShow(currentPageIndex);
    }
    pageChange(pages: number){
        this.typeDPageSize=pages;
        this.exampleData = this.calctypeDDataShow(1);
    }
    onTypical4PageChange(pageIndex: number){
        this.exampleData = this.calctypeDDataShow(pageIndex);
    }
    todo(){
        this.$message.info("TODO:");
    }
}
</script>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
div.table-type-4{
    .titleName{
        font-size: @jt-font-size-lg;
        font-weight:500;
        color:@jt-color-text-strong;
    }
    .mr8{
        margin-right:8px
    }
    .mt16{
        margin-top:16px;
    }
    .addBtn{
        padding:0;
        height: 32px;
        vertical-align: top;
        width: 96px;
        text-align: center;
        span{
            display: inline-block;
            vertical-align: middle;
            line-height: 16px;
            &.btn_word{
                margin-left: 10px;
                font-size: 12px;
                font-weight: @jt-font-weight-medium;
            }
        }
        .creatIcon{
            font-size: 16px;
        }
    }
    .dividerLine{
        height: 16px;
        width: 1px;
        background:#E9EBEF;
        margin-right: 16px;
        display: inline-block;
        vertical-align: text-top;
    }
    
    .pageOptionWrap{
        font-size: @jt-font-size-sm!important;
        color:@jt-color-text-strong;
        font-weight: 400;
        .pageOption{
            display: inline-block;
            margin-left:15px;
        }
        .pageOptionSel{
            margin:0 5px;
            line-height: 28px;
            .ant-select-selection__rendered{
                margin-right: 14px;
                margin-left: 10px;
                line-height: 28px;
            }
            .ant-select-selection-selected-value{
                font-size: @jt-font-size-sm;
            }
        }
    }
    .ant-pagination-options-quick-jumper{
        height: 28px;
        line-height: 28px;
        font-size: @jt-font-size-sm!important;
        color:@jt-color-text-strong;
        input{
            height: 28px;
        }
    }
    .jtTabel{
        /deep/ tr{
            th{
                padding:11px 0 11px 16px!important;
                font-size: @jt-font-size-sm!important;
                color:@jt-color-text-strong!important;
            }
            &:hover>td{
                background: #F5F8FF!important;
                .optionSlot{
                    color:#337DFF!important;
                    button,.icon{
                        color:#337DFF!important;
                    }
                    
                }
            }
            td{
                padding:11px 0 11px 16px!important;
                font-size: @jt-font-size-sm!important;
                color:@jt-color-text!important;
                a{
                    color:@jt-color-text!important;
                    .anticon{
                        color:@jt-color-text-secondary; 
                    }
                    span{
                        height: 16px;
                        line-height: 16px;
                        vertical-align: middle;
                    }
                }
                button{
                    padding:0;
                    line-height: 16px!important;
                    color:@jt-color-text;
                    margin-right: 50px;
                    .anticon{
                        color:@jt-color-text-secondary; 
                    }
                    span{
                        height: 16px;
                        line-height: 16px;
                        margin-left:6px;
                        vertical-align: middle;
                        display: inline-block;
                    }
                }
                .del.disable{
                    color:#CCCCCC;
                    .delIcon{
                        color:#CCCCCC;
                    }
                }
                .icon{
                    font-size:16px;
                    color:#999999;
                    vertical-align: middle;
                }
            }
        }
    }
    .ant-pagination{
        font-size: @jt-font-size-sm!important;
    }
    .searchIcon,.reloadIcon{
        font-size:18px;
        color:#555555;
        margin-right:19px;
        line-height: 32px;
    }
    .status-common{
        position: relative;
        padding-left: 14px;
        &::before{
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 6px;
        }
    }
    .status-suspend::before{
        background-color: #75849B;
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
}
</style>