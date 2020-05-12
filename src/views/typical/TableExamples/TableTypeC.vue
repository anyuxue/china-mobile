<template>
    <div class="table-type-3">
        <jt-row  type="flex" justify="space-between">
            <jt-col>
                <h4 class="titleName">机器人列表</h4>
            </jt-col>
            <jt-col>
                <a class="iconfont searchIcon" @click="todo">&#xe622;</a>
                <a class="iconfont reloadIcon" @click="todo">&#xe623;</a>
                <span class="dividerLine"></span>
                <jt-select placeholder="全部状态" style="width: 160px;" class="mr8">
                    <jt-icon slot="suffixIcon" type="down" :style="{ color: '#999999' }"/>
                    <jt-select-option value="全部状态">全部状态</jt-select-option>
                    <jt-select-option value="排队中">排队中</jt-select-option>
                    <jt-select-option value="进行中">进行中</jt-select-option>
                    <jt-select-option value="失败">失败</jt-select-option>
                    <jt-select-option value="完成">完成</jt-select-option>
                </jt-select>
                <jt-button size="large"  type="primary" class="addBtn"  @click="todo">
                    <span class="iconfont creatIcon" >&#xe628;</span>
                    <span class="btn_word">新建机器人</span>
                </jt-button>
            </jt-col>
        </jt-row>
        <jt-configProvider>
            <template  v-slot:renderEmpty>
                <jt-empty :image="emptyImage" :imageStyle="{ margin: '20px auto',width:'400px',height:'270px'}">
                    <div class="emptyDescriptS" slot="description" style="margin-top:-45px">
                        <p class="emptyDescript">您还没有添加任何机器人</p>
                        <p>您可以点击 <a href="javascript:;" @click="todo">新建机器人</a>创建属于自己的机器人</p>
                    </div>
                </jt-empty>
            </template> 
            <jt-table :columns="robotColumns" :dataSource="robotData" class="mt16 jtTable">
                <span slot="options-slot" ></span>
            </jt-table>
        </jt-configProvider>
    </div>
</template>
<script>
import {Select,Icon,Table, Empty,ConfigProvider} from "ant-design-vue";
import '@/assets/font/iconfont.css'
export default {
    name: "TableTypeC",
    components: {
        "jt-select": Select,
        "jt-select-option": Select.Option,
        "jt-icon":Icon, 
        'jt-table':Table,
        'jt-empty':Empty,
        'jt-configProvider':ConfigProvider,
    },
    data(){
        return {
            robotColumns : [
                {title: '机器人名称',dataIndex: 'name',key: 'name',},
                {title: '机器人描述', dataIndex: 'describe',key: 'describe',},
                {title: '最后修改人',dataIndex: 'reviser',key: 'reviser',},
                {title: '修改时间',dataIndex: 'time', key: 'time',},
                {title: "操作",dataIndex: "options",key: "options",scopedSlots: { customRender: "options-slot" }}
            ],
            robotData : [
            ],
            emptyImage: require("@/assets/image/empty@2x.png"),
        }
    },
    methods: {
        todo(){
            this.$message.info("TODO:");
        }
    }
};
</script>
<style lang="less" scoped>
    @import "~@/assets/style/var.less";
    div.table-type-3{
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
        .ant-empty-image img{
            width: 100%!important;
        }
        .ant-table-empty .ant-table-placeholder{
            border-bottom:0!important;
        }
        .emptyDescript{
            font-size:18px;
            font-family:'PingFangSC-Semibold,PingFang SC';
            font-weight:600;
            color:#333333;
            text-align: center;
            margin-bottom:16px;
        }
        .emptyDescriptS{
            font-size:14px;
            font-family:'PingFangSC-Regular,PingFang SC';
            font-weight:400;
            color:#555555;
            text-align: center;
            margin-bottom:35px;
            a{
                color:#337DFF;
            }
        }
        .searchIcon,.reloadIcon{
            font-size:18px;
            color:#555555;
            margin-right:19px;
        }
        .jtTable{
            /deep/ tr{
                th{
                    padding:11px 0 11px 16px!important;
                    font-size: @jt-font-size-sm!important;
                    color:@jt-color-text-strong!important;
                }
                &:hover>td{
                    background: #F5F8FF!important;
                }
                td{
                    padding:11px 0 11px 16px!important;
                    font-size: @jt-font-size-sm!important;
                    color:@jt-color-text!important;
                    text-overflow: ellipsis;
                    overflow: hidden; 
                    white-space: nowrap;
                }
            }
        }
        .ant-select-selection-selected-value,.ant-select-selection__placeholder{
            font-size: @jt-font-size-sm!important;
        }
    }
</style>