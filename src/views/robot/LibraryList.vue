<template>
    <div class="contentBody">
        <div style="display: flex; justify-content: space-between;">
            <div class="tableTitle">
                问答列表
                <jt-button size="large" @click="changeResult" class="exportBtn" style="width: 49px;">切换结果</jt-button>
            </div>
            <div style="display: flex; align-items: center;">
                <a class="iconfont searchIcon" @click="todo" style="margin-right: 18px; font-size: 18px; color: #555555;">&#xe622;</a>
                <a class="iconfont reloadIcon" @click="todo" style="margin-right: 10px; font-size: 18px; color: #555555;">&#xe623;</a>
                <jt-divider type="vertical" style="margin-right: 18px; height: 16px; color: #E9EBEF;" />
                <jt-range-picker @change="todo" separator="-" style="width: 216px; margin-right: 8px;">
                    <jt-icon slot="suffixIcon" type="calendar" />
                </jt-range-picker>
                <jt-button size="large" @click="todo" class="exportBtn" style="border-radius:2px 0px 0px 2px;">
                    <span class="iconfont icondaoru" style="font-size: 12px;">导入</span>
                </jt-button>
                <jt-button size="large" @click="todo" class="exportBtn" style="border-radius:0px 2px 2px 0px;">
                    <span class="iconfont icondaochu" style="font-size: 12px;">导出</span>
                </jt-button>
                <jt-button size="large" type="primary" @click="todo" class="createBtn">
                    <jt-icon type="plus" />新建问答
                </jt-button>
            </div>
        </div>
        <div v-if="!showEmpty" style="margin-top: 16px;">
            <div>
                <jt-table
                    :columns="columns"
                    :dataSource="showData"
                    :pagination="false"
                    rowKey="id"
                    :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange, columnWidth: 40 }"
                >
                    <span slot="action-slot" slot-scope="">
                        <span class="btn-common" @click="todo">
                            <span class="iconfont btn-icon" style="vertical-align: middle; margin-right: 4px; color: #999999;">&#xe614;</span>
                            <span style="vertical-align: middle;">编辑</span>
                        </span>
                    </span>
                </jt-table>
            </div>
            <div style="display: flex; flew-flow: row; margin-top: 16px;">
                <div style="width: 400px; text-align: left;">
                    <jt-button size="large" @click="todo" class="exportBtn" style="width: 64px;">删除</jt-button>
                    <span style="margin-left: 16px;">共 {{recordCount}} 条记录</span>
                    <span class="pageOption" style="margin-left: 15px;">每页显示</span>
                    <jt-select :defaultValue="10" style="min-width: 50px; margin: 0 5px;" @change="getShowSizeChangeData">
                        <jt-icon slot="suffixIcon" type="caret-down" :style="{ color: '#606266',marginRight:'-7px' }"/>
                        <jt-select-option :value="2">2</jt-select-option>
                        <jt-select-option :value="5">5</jt-select-option>
                        <jt-select-option :value="10">10</jt-select-option>
                        <jt-select-option :value="20">20</jt-select-option>
                        <jt-select-option :value="100">100</jt-select-option>
                    </jt-select>
                    <span>条</span>
                </div>
                <div style="width: 601px; text-align: right;">
                    <jt-pagination
                        showQuickJumper :current="currentPage" :pageSize="pageSize" :total="recordCount"
                        @change="getPageChangeData" style="text-align: right;"
                    />
                </div>
                <div style="width: 55px; text-align: right;">
                    <jt-button size="large" @click="todo" class="exportBtn" style="width: 49px;">GO</jt-button>
                </div>
            </div>
        </div>
        <div v-if="showEmpty" class="emptyData">
            <div class="emptyMsgTitle">您还没有添加问答</div>
            <div class="emptyMsgDetail">
                <span>您可以 </span>
                <router-link to="/home/robotHome/createQA">
                    <span style="color: #337DFF;">新建问答</span>
                </router-link>
                <span>，也可以 </span>
                <span style="color: #337DFF;"><a href="javascript:;" @click="todo">导入</a></span>
                <span>，直接批量导入问答</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@/assets/style/var.less";

div.contentBody {
    width: 1096px;
    min-height: 609px;
    background: #FFFFFF;
    border-radius: 2px;
    padding: 20px 20px 48px 20px;
    .emptyData {
        display: flex;
        flex-direction: column;
        margin-top: 36px;
        margin-left: 348px;
        width: 400px;
        height: 360px;
        background: url('../../assets/image/EmptyLibrary.png') no-repeat center;
        background-size: 100% 100%;
        .emptyMsgTitle {
            text-align: center;
            margin-top: 267px;
            font-size: 18px;
            font-family: 'PingFangSC-Semibold,PingFang SC';
            font-weight: 600;
            color: #333333;
            text-align: center;
            margin-bottom: 16px;
        }
        .emptyMsgDetail {
            text-align: center;
            font-size: 14px;
            font-family: 'PingFangSC-Regular,PingFang SC';
            font-weight: 400;
            color: #555555;
            text-align: center;
            margin-bottom: 35px;
            a {
                color: #337DFF;
            }
        }
    }
    .tableTitle {
        width: 201px;
        height: 24px;
        font-size: 16px;
        font-family: 'PingFangSC-Medium,PingFang SC';
        font-weight: 500;
        color: #333333;
        line-height: 22px;
    }
    .createBtn {
        margin-left: 8px;
        width: 88px;
        height: 32px;
        padding: 6px 0;
        font-size: 12px;
        font-family: 'PingFangSC-Regular,PingFang SC';
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
    }
    .exportBtn {
        width: 68px;
        height: 32px;
        padding: 6px 0;
        font-size: 12px;
        font-family: 'PingFangSC-Regular,PingFang SC';
        font-weight: 400;
        color: #333333;
        line-height: 17px;
    }
    .btn-common {
        cursor: pointer;
        color: #555555;
    }
    /deep/ tr {
        transition: color 0s;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        line-height: 18px;
        &:hover {
            .action-slot, .btn-icon, .btn-common {
                color: #337DFF!important;
            }
        }
        th {
            height: 40px;
            font-size: 12px;
            color: #333333;
            background: #F4F5F7;
        }
        td {
            height: 40px;
            font-size: 12px;
            color: #555555;
            background: #FFFFFF;
        }
    }
}
</style>

<script>
// import {Pagination, Divider as JtDivider, Select, DatePicker} from "ant-design-vue";
// import {Component} from 'vue-property-decorator';
// import Vue from 'vue';
// import {Column} from "ant-design-vue/types/table/column";
// import '@/assets/font/iconfont.css'

// Vue.use(Select);
// enum STATUS {QUEUE = 0, COMPLETE = 1, RUNING = 2, FAIL = 3}

// @Component({
//     components: {
//         Pagination,
//         JtProgress,
//         JtDivider,
//         JtTooltip,
//         "jt-range-picker": DatePicker.RangePicker
//     }
// })
const columns = [
    {
        title: '问题ID',
        dataIndex: 'id',
        key: 'id',
        width: 120,
        ellipsis: true,
    },
    {
        title: '标准问',
        dataIndex: 'question',
        key: 'question',
        width: 178,
        ellipsis: true,
    },
    {
        title: '答案',
        dataIndex: 'answer',
        key: 'answer',
        width: 268,
        ellipsis: true,
    },
    {
        title: '编辑人',
        dataIndex: 'editor',
        key: 'editor',
        width: 179,
        ellipsis: true,
    },
    {
        title: '编辑时间',
        dataIndex: 'editTime',
        key: 'editTime',
        width: 178
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        scopedSlots: { customRender: 'action-slot' }
    }
];

const allData = [];
const showData = [];
const pageSize = 10;
const recordCount = 0;
const currentPage = 1;
const selectedRowKeys = [];
const showEmpty = false;

// export default class TableTypeA extends Vue {
export default {
    name: "RobotHome",
    data() {
        return {
            columns,
            allData,
            showData,
            pageSize,
            recordCount,
            currentPage,
            selectedRowKeys,
            showEmpty
        }
    },
    mounted() {
        this.getInitData();
    },
    methods: {
        getInitData() {
            this.allData = [
                {id: '1001',question: 'question1001',answer: 'answer1001',editor: 'editor1001',editTime: '2020.03.25 19:59:01'},
                {id: '1002',question: 'question1002',answer: 'answer1002',editor: 'editor1002',editTime: '2020.03.25 19:59:02'},
                {id: '1003',question: 'question1003',answer: 'answer1003',editor: 'editor1003',editTime: '2020.03.25 19:59:03'},
                {id: '1004',question: 'question1004',answer: 'answer1004',editor: 'editor1004',editTime: '2020.03.25 19:59:04'},
                {id: '1005',question: 'question1005',answer: 'answer1005',editor: 'editor1005',editTime: '2020.03.25 19:59:05'},
                {id: '1006',question: 'question1006',answer: 'answer1006',editor: 'editor1006',editTime: '2020.03.25 19:59:06'},
                {id: '1007',question: 'question1007',answer: 'answer1007',editor: 'editor1007',editTime: '2020.03.25 19:59:07'},
                {id: '1008',question: 'question1008',answer: 'answer1008',editor: 'editor1008',editTime: '2020.03.25 19:59:08'},
                {id: '1009',question: 'question1009',answer: 'answer1009',editor: 'editor1009',editTime: '2020.03.25 19:59:09'},
                {id: '1010',question: 'question1010',answer: 'answer1010',editor: 'editor1010',editTime: '2020.03.25 19:59:10'},
                {id: '1011',question: 'question1011',answer: 'answer1011',editor: 'editor1011',editTime: '2020.03.25 19:59:11'},
                {id: '1012',question: 'question1012',answer: 'answer1012',editor: 'editor1012',editTime: '2020.03.25 19:59:12'},
            ];
            this.recordCount = this.allData.length;
            this.showData = this.getshowData(this.currentPage);
        },
        getshowData(pageIndex) {
            return this.allData.slice((pageIndex - 1 ) * this.pageSize, pageIndex * this.pageSize);
        },
        getShowSizeChangeData(showSizeSelected) {
            const dataIndexBeforeChange = (this.currentPage - 1) * this.pageSize
            this.pageSize = showSizeSelected;
            const currentPageAfterChange = Math.floor(dataIndexBeforeChange / this.pageSize) + 1
            this.currentPage = currentPageAfterChange;
            this.showData = this.getshowData(this.currentPage)
        },
        getPageChangeData(pageIndex) {
            this.currentPage = pageIndex;
            this.showData = this.getshowData(pageIndex);
        },
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys;
        },
        todo() {
            console.log("TODO");
        },
        changeResult() {
            this.showEmpty = !this.showEmpty;
        }
    }
}
</script>
