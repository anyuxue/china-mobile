<template>
    <div id="custom-order">
        <div id="order_detail" v-show="pageIdx==0">
            <div class="header">
                <span>智能交互中心</span>
            </div>
            <div id="greyBg" style="font-size:12px">
                <div id="addtion">
                    <div id="charge-div">
                        <div class="item-label">
                            <span class="p4">计费模式</span>
                        </div>
                        <ul id="charge-ul">
                            <SmallRadio id="charge-mode" v-for="(item, idx) in resp.chargemode" v-bind:infoStr="getChargeModeStr(idx)" :idx="idx" :selIdx="selChargeMode" :key="idx" @click.native="selectChangeMode(idx)"></SmallRadio>
                        </ul>
                    </div>
                    <div id="region-div">
                        <div class="item-label">
                            <span class="p4">地域</span>
                        </div>
                        <ul id="region-ul">
                            <SmallRadio id="region" v-for="(item, idx) in resp.region" v-bind:infoStr="getRegionStr(idx)" :idx="idx" :selIdx="selRegion" :key="idx" @click.native="sellectRegion(idx)"></SmallRadio>
                        </ul>
                    </div>
                </div>
                <div id="env" >
                    <div class="test-env-div" style="height:85px">
                        <div class="item-label">
                            <span class="p4 env-word">测试环境</span>
                        </div>
                        <jt-table :columns="testColumns" :dataSource="testData"  rowKey='id' class="jtTabel table-pos" :pagination="false">
                        </jt-table>
                    </div>
                    <div class="test-env-div">
                        <div class="item-label">
                            <span class="p4 env-word">生产环境</span>
                        </div>
                        <jt-table :rowSelection="rowSelection" :columns="proColumns" :dataSource="proData" rowKey='id' class="jtTabel table-pos" :pagination="false">
                        </jt-table>
                        <div class="env-tips tips-color">
                            <span>测试环境流量包不可扩容，生产环境当月套餐内流量包不足后，每一千次调用花费50元</span>
                        </div>
                    </div>
                    <div class="test-env-div use-term" v-show="opType==0 || opType==2">
                        <div class="item-label">
                            <span class="p4">使用期限</span>
                        </div>
                        <div id="counter">
                            <jt-input-num :min=1 :max=36 :defaultValue="counter" @change="changeCounter">
                            </jt-input-num>
                            <span style="margin-left:5px">个月</span>
                        </div>
                        <div class="counter-tips tips-color">
                            <span>订购时最多36个月</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-foot foot-margin" v-show="pageIdx==0">
            <div class="fixed-bot-panel" id="bottom-panel" style="position: absolute; bottom: auto;">
                <div class="fee-wrapper">
                    费用合计
                    <span class="total">
                        ¥
                        <span>{{spend}}</span>
                    </span>
                    元
                    <div>
                        <span class="tips-color">费用合计=所选套餐单价*使用期限</span>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <jt-button size="large" type="primary" @click="submitOrder">确认订单</jt-button>
                </div>
            </div>
        </div>
        <div id="order-config" v-show="pageIdx==1">
            <div class="header">
                <span>智能交互中心</span>
            </div>
            <div class="grey-config">
                <div>
                    <jt-button type="icon" class="bt-icon" @click="pageIdx--">
                        <span class="iconfont icondingdanyefanhui"></span>
                    </jt-button>
                    <jt-button size="large" type="link" @click="pageIdx--" style="padding-left:10px">
                        修改配置
                    </jt-button>
                </div>
                <div class="order-info">
                    <jt-table :columns="orderColumns" :dataSource="orderData"  rowKey='id' class="jtTabel" :pagination="false" >
                        <span slot="slot-config">
                            <div>
                                <span>地域</span>
                                <span style="margin-left:70px">{{getRegionStr(selRegion)}}</span>
                            </div>
                            <div>
                                <span>服务配置</span>
                                <span style="margin-left:45px">测试环境：{{testData[selTestEnv].flow}}</span>
                                <span style="margin-left:20px">{{testData[selTestEnv].qps}}QPS</span>
                            </div>
                            <div>
                                <span style="margin-left:93px">生产环境：{{proData[selIdx].flow}}</span>
                                <span style="margin-left:20px">{{proData[selIdx].qps}}QPS</span>
                            </div>
                        </span>
                        <span slot="slot-price" slot-scope="text" style="color:#F04134">
                            {{text}}
                        </span>
                    </jt-table>
                </div>
                <div class="cost-info">
                    <div>
                        账户余额
                        <span style="color: #F04134; margin-left: 20px">
                            ¥{{balance}}
                        </span>
                        <jt-button size="large" type="link" @click="reCharge" style="padding-left:10px">
                            立即充值
                        </jt-button>
                    </div>
                    <div>
                        服务协议
                        <Checkbox @change="agree" style="margin-left: 20px; margin-right:5px"></Checkbox>
                        我已阅读并同意
                        <jt-button size="large" type="link" @click="openAgreement" style="padding-left:10px">
                            《xxx服务条款》
                        </jt-button>
                    </div>
                    <div class="recharge-wrapper fee-wrapper">
                        费用合计
                        <span class="total">
                            ¥
                            <span>{{spend}}</span>
                        </span>
                        元
                        <div style="margin-top:13px">
                            <jt-button size="large" type="primary" @click="payOrder">前往支付</jt-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import "~@/assets/style/var.less";
.table-pos {
    position: relative;
    bottom: 33px;
    left: 140px;
    width: calc(100% - 140px);
}

.jtTabel{
    thead>tr>th{
        height: 32px;
        line-height: 32px;
        padding:0px 0px 0px 10px!important;
        font-size: @jt-font-size-sm!important;
        color:@jt-color-text-strong!important;
        background: #E7EDF2;
        border-right: 1px solid #FFF;
    }
    table tbody tr {
        border-bottom-color: #fff;
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
        height: 32px;
        line-height: 32px;
        padding:0px 0px 0px 10px!important;
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
    }
}

.col-empty {
    width: 60px;
}

.recharge-wrapper {
    position: absolute;
    top: 20px;
    right: 20px;
    bottom:20px;
    text-align:right;
}

.use-term {
    margin: 0px 0px 0px 0px
}

.number_unit {
    margin: 10px;
}

#counter {
    display: inline-block;
    margin: 0px 0px 0px 20px
}
////////////////////////////////
#charge-div {
    height:32px;
}

#region-div {
    margin: 20px 0px 0px 0px;
    height: 32px;
}

.test-env-div {
     padding: 20px 0px 0px 0px;
}

.env-tips {
    margin: -30px 0px 0px 140px;
}

.counter-tips{
    margin: 0px 0px 0px 138px;
    
}

.tips-color {
    color: #CCCCCC;
    font-size: @jt-font-size-sm;
}

.item-label {
    height: 32px;
    width: 120px;
    line-height: 32px;
    display: inline-block;
    vertical-align: top;
    font-weight:400;
}

.env-word {
    height: 32px;
    width: 120px;
    line-height: 32px;
    font-weight:400;
}

#region-ul {
    display: inline-block;
    margin: 0px 0px 0px 20px; 
}

#charge-ul {
    display: inline-block;
    margin: 0px 0px 0px 20px; 
}

#order_detail {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    top: 0;
    background: #eff1f4;
    overflow: auto;
}

.header {
    height: 60px;
    line-height: 60px;
    background: @jt-color-white;
    font-size: 16px;
    font-weight: 400;
    color: rgba(3,17,41,1);
    padding-left: 19px;
}

#addtion {
    height:124px;
    background: #ffffff;
    padding: 20px 0px 20px 30px;
    margin: 20px;
    border-radius:2px;
}

#env {
    min-height:200px;
    background: #ffffff;
    margin:20px 20px 40px 20px;
    padding: 0px 30px 20px 30px;
    border-radius:2px;
}

.order-foot{
    position: absolute;
    height:80px;
    bottom:0px;
    left: 0;
    right: 0;
}

.foot-margin {
    margin: 0 auto;
}

.order-foot .fixed-bot-panel{
    background: #FFF;
    width: 100%;
    margin: 0 auto;
    z-index: 103;
    bottom: 0;
    position: absolute;
    box-shadow: 0 -4px 5px -3px rgba(0,0,0,0.35);
    height: 80px;
    padding: 10px 20px;
}

.total{
    font-size: 26px;
    color: #F04134;
}

.btn-wrapper{
    //padding-top:auto, 20px;
    position: absolute;
    right:  32px;
    top: 26px;
}

.fee-wrapper{
    color: #555555;
    font-size: @jt-font-size-sm;
}

#cost{
    font-size: @jt-font-size-lg;
    color: @jt-color-highlight; 
}

.p1 {
    font-size: @jt-font-size-lger;
}
.p2 {
    font-size: @jt-font-size-lg;
    color: #031129;
}
.p3 {
    font-size: @jt-font-size-base;
}
.p4 {
    font-size: @jt-font-size-sm;
    color:@jt-color-text-strong
}
////////////ordier-config////////////////
.grey-config {
    height: auto;
    width: 100%;
    min-width: 1100px;
    padding: 10px 20px 20px 20px;
    background: #eff1f4;
    font-size: 12px;
}

.bt-icon {
    width:17px;
    height:18px;
    background:rgba(255,255,255,1);
    border-radius:1px;
    border:1px solid rgba(217,217,217,1);
    padding:0px;
}

.order-info {
    background:rgba(255,255,255,1);
    margin-top: 5px;
    padding: 20px 20px 0px 20px;
}

.cost-info {
    background:rgba(255,255,255,1);
    margin-top: 20px;
    padding: 20px 20px 40px 20px;
    position: relative;
}

</style>

<script>
import {Table, InputNumber, Checkbox} from "ant-design-vue";
import SmallRadio from './small-radio';

const chargModeName = ['包月计费']
const region = ['华北地区1']
const goodsInxName = ["一", "二", "三", "四"]

export default {
    name: 'CustomOrder',
    components:{
        SmallRadio,
        Checkbox,
        "jt-table": Table,
        "jt-input-num": InputNumber,
    },
    mounted () {
        // 请求服务器
    },
    methods:{
        getIdxStr(idx) {
            return  "套餐" + goodsInxName[idx]
        },
        getRegionStr(idx) {
            return region[idx]
        },
        getChargeModeStr(idx) {
            return chargModeName[idx]
        },
        selectItem(idx) {
            this.selIdx = idx
            this.calSpend()
        },
        changeCounter(value) {
            this.counter = value
            this.calSpend()
        },
        selectChangeMode(idx) {
            this.selChargeMode = idx
        },
        sellectRegion(idx) {
            this.selRegion = idx
        },
        selectTestEnv(idx) {
            this.selTestEnv = idx
        },
        calSpend() {
            this.spend = this.counter * this.proData[this.selIdx].price
        },
        submitOrder() {
            this.pageIdx++
            this.orderData[0].term = this.counter + "个月"
            this.orderData[0].price = "¥" + this.proData[this.selIdx].price + "/月"
            this.orderData[0].chargeMode = chargModeName[this.selChargeMode]
            this.orderData[0].config = region[this.selRegion] + "," + this.testData[this.selTestEnv].flow + "," + this.testData[this.selTestEnv].qps
            "," + this.proData[this.selIdx].flow + "," + this.proData[this.selIdx].qps
        },
        agree() {
            this.bAgree = !this.bAgree
        },
        openAgreement() {
            //打开服务协议
        },
        reCharge() {
            // 打开充值页面
        },
        payOrder() {
            if (!this.bAgree) {
                alert("未同意")
            }

            this.$router.push({path:'/order-result', query: {}})
        }

    },
    computed: {
        rowSelection() {
            return {
                type: "radio",
                //hideDefaultSelections: true,
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log("selselectedRowKeysIdx=" + selectedRowKeys)
                    this.selectItem(selectedRowKeys - 1)
                },
                getCheckboxProps: record => ({
                    disabled: record.id === 1,
                    defaultChecked: record.id === 2, 
                    // Column configuration not to be checked
                    id: record.id,
                }),
            }
        }
    },
    data: function () {
        return {
            testColumns: [
                {title: ' ', dataIndex: 'id', key: 'id', className:"col-empty"},
                {title: '流量包数量', dataIndex: 'flow', key: 'flow' , className:"col-att"},
                {title: 'QPS限制', dataIndex: 'qps', key: 'qps', className:"col-att"},
            ],
            testData: [
                {id: ' ', flow: '1000次/天', qps:"1"},
            ],

            proColumns: [
                {title: '套餐名称', dataIndex: 'name', key: 'name', className:"col-att"},
                {title: '流量包数量', dataIndex: 'flow', key: 'flow' , className:"col-att"},
                {title: 'QPS限制', dataIndex: 'qps', key: 'qps', className:"col-att"},
                {title: '适用对象', dataIndex: 'tips', key: 'tips', className:"col-att"},
                {title: '资费', dataIndex: 'price', key: 'price', className:"col-att"},
            ],
            proData: [
                {id: 1, name: '免费套餐', flow: '1000次/天', qps:"1", tips: "初次定投用户（开通日起一个月有效）", price: 0},
                {id: 2, name: '初级套餐', flow: '10,000次/天', qps:"10", tips: "开发者和小企业", price: 475},
                {id: 3, name: '中级套餐', flow: '100,000次/天', qps:"20", tips: "中小型企业", price: 4750},
                {id: 4, name: '高级套餐', flow: '1,000,000次/天', qps:"30", tips: "大中型企业", price: 23750},
            ],
            orderColumns: [
                {title: '产品名称', dataIndex: 'id', key: 'id'},
                {title: '配置信息', dataIndex: 'config', key: 'config', scopedSlots:{customRender: "slot-config"}},
                {title: '使用期限', dataIndex: 'term', key: 'term'},
                {title: '单价', dataIndex: 'price', key: 'price', scopedSlots:{customRender: "slot-price"} },
                {title: '计费方式', dataIndex: 'chargeMode', key: 'chargeMode',},
            ],

            orderData:[
                {id: "智能交互中心", config: "aaa", term: "1", price: "0", chargeMode:"bbb"}
            ],

            pageIdx: 0,
            selIdx: 0,
            selChargeMode: 0,
            selRegion: 0,
            selTestEnv:0,
            spend:0,
            counter:1,
            balance: 5000,
            bAgree: false,
            opType: 2,  //0正常订购，1变更，2续费
            resp: {
                chargemode: [
                    0
                ],
                region:[
                    0
                ],
                tips : "当月套餐内次数包不足时，每一千次调用花费15元"
            }
        }
    }      
}
</script>