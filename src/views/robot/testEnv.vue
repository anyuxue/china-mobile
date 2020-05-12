<template>
    <div class="content">
        <header class="main-header">测试环境</header>
    
        <div class="robot_none">
            <jt-row  type="flex" justify="space-between">
                <jt-col>
                    <h4 class="titleName">机器人列表</h4>
                </jt-col>
                <jt-col>
                    <a  @click="todo">
                        <span class="icon iconfont iconsousuo" :style="{ fontSize: '16px', color: '#555555',marginRight:'19px' }"></span>
                    </a>
                    <a  @click="todo">
                        <span class="icon iconfont iconshuaxin" :style="{ fontSize: '16px', color: '#555555',marginRight:'19px' }"></span>
                    </a>
                    <span class="dividerLine" style="margin-top: 4px;"></span>
                    <jt-select class = "select_status" v-model = "selectStatus">
                        <jt-select-option v-for = "select_status in status" :key = "select_status">{{select_status}}</jt-select-option>
                    </jt-select>  
                   
                    <jt-button size="large"  type="primary" style="padding:6px 8px"  @click="todo">
                        <jt-icon type="plus" :style="{ marginRight:'2px' }"/> 新建机器人
                    </jt-button>
                </jt-col>
            </jt-row>

            <div v-if = "isNone">
                <!--空态时显示-->
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
            <div v-else>
                <jt-table :columns="robotColumns" :dataSource="robotData" class="mt16 jtTable">
                    <span slot="options-slot">
                        <span class="icon iconfont iconfasong" style="width: 14px; height: 14px;"></span> 
                        <jt-button type="link" @click="todo" style="padding:0px 33px 0px 2px; border: 0px; color:#555555">发布</jt-button>

                        <span class="icon iconfont iconmoxingxunlian" style="width: 14px; height: 14px;"></span>
                        <jt-button type="link" @click="todo" style="padding:0px 33px 0px 2px; border: 0px; color:#555555">设置</jt-button>

                        <span class="icon iconfont iconshanchu" style="width: 14px; height: 14px;"></span>
                        <jt-button type="link" @click="todo" style="padding:0px 33px 0px 2px; border: 0px; color:#555555">删除</jt-button>
                    </span>
                </jt-table>

                
            </div>
        </div>
    </div>
</template>
<script>
import {Select,Icon,Table, Empty,ConfigProvider} from "ant-design-vue";
export default {
    name: "RobotNone",
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
            isNone : false,
            selectStatus : "全部状态",
            status : ["已在线","未在线"],
            robotColumns : [
                {title: '机器人名称',dataIndex: 'name',key: 'name',},
                {title: '机器人描述', dataIndex: 'describe',key: 'describe',},
                {title: '最后修改人',dataIndex: 'reviser',key: 'reviser',},
                {title: '修改时间',dataIndex: 'time', key: 'time',},
                {title: "操作",dataIndex: "options",key: "options",scopedSlots: { customRender: "options-slot" }}
            ],
            robotData : 
            [
                {
                    name:"小天",
                    describe:"机器人的主要功能描述，最多可18个字...",
                    reviser:"张三",
                    time:"2020.03.25 19:59:25",
                }
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
<style lang="less">
    @import "~@/assets/style/var.less";
    .main-header{
        height: 58px;
        background-color: #fff;
        padding-left: 20px;
        line-height: 58px;
        font-weight: 500;
        font-size: @jt-font-size-lg;
        color: @jt-color-text-strong;
    }
    div.robot_none{
        background-color: #fff;
        margin: 20px 20px 40px 20px;
        padding: 20px 20px 20px 20px;
        color: #333333;
        font-size: 16px;
        .titleName{
            font-size: @jt-font-size-lg;
            font-weight:500;
            color:@jt-color-text-strong;
        }
        .select_status{
            width:160px;
            height:32px;
            border-radius:2px;
            margin-right: 8px;
            color:#BBBBBB;
            font-size: 12px
        }

        .mt16{
            margin-top:16px;
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
        .jtTable{
            thead>tr>th{
                padding:11px 0 11px 16px!important;
                font-size: @jt-font-size-sm!important;
                color:@jt-color-text-strong!important;
            }
            table tbody tr:hover>td{
                background: #F5F8FF!important;
            }
            tbody>tr>td{
                padding:11px 0 11px 16px!important;
                font-size: @jt-font-size-sm!important;
                color:@jt-color-text!important;
                text-overflow: ellipsis;
                overflow: hidden; 
                white-space: nowrap;
            }
        }
    }
</style>