<template>
    <div class="table-type-4">
        <jt-row type="flex" align="middle">
            <jt-col :span="4">
                <h4 class="titleName">测试环境使用详情</h4>
            </jt-col>
            <jt-col :span="20" style="text-align: right; display: inline-block;">
                <jt-icon type="redo" style="margin-right:15px; pxcursor: pointer; display: inline-block"/>
                <div class="small-line"></div>
                <jt-range-picker @change="onDateChange" separator="-" format="YYYY.MM.DD" size= "small" class="date-class">
                    <jt-icon slot="suffixIcon" type="calendar" />
                </jt-range-picker>
            </jt-col>
        </jt-row>
        <jt-table :columns="typeAColumns" :dataSource="typeADataShow"  rowKey='id' class="mt8 jtTabel" :pagination="false"  >
        </jt-table>
        <jt-row style="" class="total-attr">
            <jt-col :span="13">
                <span >合计</span>
            </jt-col>
            <jt-col :span="6">
                <span style="margin-left:8px">{{totalFlow}}</span>
            </jt-col>
            <jt-col :span="4">
                {{totalGPS}}
            </jt-col>
        </jt-row>
        <jt-row style="" class="total-bottom">
        </jt-row>
        <jt-row class="mt16">
            <jt-col :span="6" class="pageOptionWrap">
                <span> 共 {{typeACount}} 条记录</span>
                <span class="pageOption">每页显示</span>
                <jt-select :defaultValue="typeAPageSize"  style="width: 50px" @change="onTypeAShowSizeChange" class="pageOptionSel">
                    <jt-icon slot="suffixIcon" type="caret-down" :style="{ color: '#606266',marginRight:'-7px' }"/>
                    <jt-select-option value="10">10</jt-select-option>
                    <jt-select-option value="20">20</jt-select-option>
                    <jt-select-option value="30">30</jt-select-option>
                </jt-select>
                <span>条</span>
            </jt-col>
            <jt-col :span="18">
                <jt-pagination  :total="typeACount" :pageSize="typeAPageSize" showQuickJumper style="text-align: right;"   @change="onTypeAPageChange">
                </jt-pagination>
            </jt-col>
        </jt-row>
    </div>    
</template>

<script>
import {Pagination, DatePicker, Select} from "ant-design-vue";
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn');

export default {
    name:'test-env-detail',
    components:{
        "jt-pagination":Pagination,
        "jt-range-picker": DatePicker.RangePicker,
        "jt-select": Select,
        "jt-select-option": Select.Option,
    },

    data: () => ({
        typeAColumns: [
            {title: '机器人ID', dataIndex: 'id', key: 'id', className:"col-att"},
            {title: '机器人名称', dataIndex: 'name', key: 'name' , className:"col-att"},
            {title: '测试环境调用量', dataIndex: 'flow', key: 'flow', className:"col-att"},
            {title: '日均GPS', dataIndex: 'gps', key: 'gps', className:"col-att"}
        ],
        typeADataSrc: [],
        typeADataShow: [],
        typeACurrentPage: 1,
        typeAPageSize: 10,
        typeACount: 0,

        totalFlow: 0,
        totalGPS: 0,
    }),

    mounted(){
        this.initTypical1();
    },
    
    methods:{
        initTypical1(){
            this.typeADataSrc = [
                {id: 'ID000001', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000002', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000003', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000004', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000005', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000006', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000007', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000008', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000009', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000010', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000011', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000012', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000013', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000014', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000015', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000016', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000017', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000018', name: '中国移动智能机器人', flow: 1000, gps:10},
                {id: 'ID000019', name: '中国移动智能机器人', flow: 1000, gps:10},

            ];
            this.typeACount = this.typeADataSrc.length;
            this.typeADataShow = this.calctypeADataShow(1);
            for (let i = 0; i < this.typeADataSrc.length; i++) { 
                this.totalFlow =  this.typeADataSrc[i].flow + this.totalFlow,
                this.totalGPS =  this.typeADataSrc[i].gps + this.totalGPS
            }
        },
        calctypeADataShow(pageIndex){
            return this.typeADataSrc.slice((pageIndex - 1 ) * this.typeAPageSize, pageIndex * this.typeAPageSize);
        },
        onTypeAShowSizeChange(showSizeSelected){
            const dataIndexBeforeChange = (this.typeACurrentPage - 1) * this.typeAPageSize
            this.typeAPageSize = showSizeSelected;
            const currentPageAfterChange = Math.floor(dataIndexBeforeChange / this.typeAPageSize) + 1
            this.typeACurrentPage = currentPageAfterChange;
            this.typeADataShow = this.calctypeADataShow(this.typeACurrentPage)
        },
        onTypeAPageChange(pageIndex){
            this.typeACurrentPage = pageIndex;
            this.typeADataShow = this.calctypeADataShow(pageIndex);
        },
        onDateChange(date, dateString) {
            alert(dateString)
            //alert(date)
        },
        clickMenu(idx) {
            alert("ccc" + idx)
        }
    }
    
}
</script>

<style lang="less">
@import "~@/assets/style/var.less";
 div.table-type-4{
    padding: 20px;
    background-color: #fff;
    .titleName{
        font-size: @jt-font-size-lg;
        font-weight:500;
        color:@jt-color-text-strong;
        height: 24px;
        line-height: 24px;
    }
    .mr8{
        margin-right:8px
    }
    .mt16{
        margin-top:16px;
    }
    .mt8 {
        margin-top:8px;
    }
    .addBtn{
        padding:6px 8px;
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
        thead>tr>th{
            padding:11px 0 11px 16px!important;
            font-size: @jt-font-size-sm!important;
            color:@jt-color-text-strong!important;
        }
        table tbody tr:hover>td{
            background: #F5F8FF!important;
            button{
                color:#337DFF;
                .anticon{
                    color:#337DFF;
                }
            }
            a{
                color:#337DFF!important;
                .anticon{
                    color:#337DFF; 
                }
            }
        }
        tbody>tr>td{
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
                    margin-left:6px;
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
                }
            }
            .del.disable{
                color:#CCCCCC;
                .anticon{
                    color:#CCCCCC;
                }
                .delIcon{
                    font-size: 14px;
                    color: #999999;
                }
                .delIcon.disable{
                    color:#CCCCCC;
                }
            }
            
            
        }
    }
    .ant-pagination{
        font-size: @jt-font-size-sm!important;
    }
    .searchIcon,.reloadIcon{
        font-size:15px;
        color:#555555;
        margin-right:19px;
        font-weight: 500;
    }
    .status-common{
        position: relative;
        &::before{
            content: '';
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 8px;
            position: absolute;
            left: -12px;
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
    .total-attr {
        height: 40px;
        background-color: #FFFFFF;
        box-shadow:0px -4px 4px 0px rgba(0,0,0,0.05);
        font-size: @jt-font-size-sm;
        line-height: 40px;
        padding-left: 16px;
    }
    .total-bottom {
        height: 1px;
        background:rgb(233,235,239, 1);
        box-shadow: 0px -4px 4px 0px rgba(0,0,0,0.05);
    }
    .small-line {
        position: relative;
        top: 3px;
        width:1px;
        height:16px;
        background:rgba(233,235,239,1);
        margin-right: 15px;
        display: inline-block
    }

    .date-class {
        margin-left: 0px; 
        width:230px;
        height:32px;
        font-size:12px;
        display: inline-block
    }
}
</style>


