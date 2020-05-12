<template>
    <div class="platform-index">
        <div class="my-serve">
            <jt-row class="row-len" :gutter="16">
                <jt-col class="bgr-font-color bgr-font-size" :span="2">
                    我的服务
                </jt-col>
                <jt-col class="" :span="2" :offset="18">
                    <jt-button class="bt-top" style="margin-left:27px">变更</jt-button>
                </jt-col>
                <jt-col class="" :span="2">
                    <jt-button class="bt-top" type="primary" style="margin-left:10px">续费</jt-button>
                </jt-col>
            </jt-row>
            <div class="gray-line" style="margin-top:16px"></div>
            <jt-row class="row-len" :gutter="16">
                <jt-col  :span="2">
                    <img src='~@/views/platform/testenv_icon.png' class="icon-attr" style="margin-top:16px"/>
                </jt-col>
                <jt-col  :span="2">
                    <p class="bg-font-size common-font-color" style="margin-top:29px; margin-bottom:4px" >测试环境</p>
                    <router-link to="/home/controlPlatform/test-env-detail" @click.native="clickMenu(1)">
                        <span class="small-font-size link-font-color">使用详情</span>
                    </router-link>
                </jt-col>
                <jt-col  :span="5" :offset="3">
                    <p class="common-font-color num-font-size num-style">{{resp.testEnv.useTimes}}</p>
                    <p class="small-font-size gray-font-color num-tips-style">已用次数(今日)</p>
                </jt-col>
                <jt-col  :span="5">
                    <p class="common-font-color num-font-size num-style" >{{resp.testEnv.leftTimes}}</p>
                    <p class="small-font-size gray-font-color num-tips-style">剩余次数(今日)</p>
                </jt-col>
                <jt-col  :span="3">
                    <p class="common-font-color num-font-size num-style" >{{resp.testEnv.qpsLimit}}</p>
                    <p class="small-font-size gray-font-color num-tips-style">QPS限制(今日)</p>
                </jt-col>
            </jt-row>
            <div class="gray-line" style="margin-top:24px"></div>
            <jt-row class="row-len" :gutter="16">
                <jt-col  :span="2">
                    <img src='~@/views/platform/proenv_icon.png' class="icon-attr" style="margin-top:56px"/>
                </jt-col>
                <jt-col  :span="2">
                    <p class="bg-font-size common-font-color" style="margin-top:70px; margin-bottom:4px" >生产环境</p>
                    <router-link to="/home/controlPlatform/production-env-detail" @click.native="clickMenu(2)">
                        <span class="small-font-size link-font-color">使用详情</span>
                    </router-link>
                </jt-col>
                <jt-col  :span="5" :offset="3">
                    <p class="common-font-color num-font-size num-style">5500</p>
                    <p class="small-font-size gray-font-color num-tips-style">已用次数(今日)</p>
                    <p class="common-font-color num-font-size num-style">20</p>
                    <p class="small-font-size gray-font-color num-tips-style">日均QPS(本月)</p>
                </jt-col>
                <jt-col  :span="5">
                    <p class="common-font-color num-font-size num-style" >4500</p>
                    <p class="small-font-size gray-font-color num-tips-style">剩余次数(今日)</p>
                    <p class="common-font-color num-font-size num-style" >25</p>
                    <p class="small-font-size gray-font-color num-tips-style">峰值QPS(本月)</p>
                </jt-col>
                <jt-col  :span="3">
                    <pre class="common-font-color num-font-size num-style" >&nbsp;</pre>
                    <pre class="small-font-size gray-font-color num-tips-style">&nbsp;</pre>
                    <p class="common-font-color num-font-size num-style" >25</p>
                    <p class="small-font-size gray-font-color num-tips-style">QPS限制(本月)</p>
                </jt-col>
            </jt-row>
        </div>
        <div class="grey-block">
        </div>
        <div class="my-robot">
            <jt-row  :gutter="16">
                <jt-col class="bgr-font-color bgr-font-size" :span="2">
                    我的机器人
                </jt-col>
            </jt-row>
            <jt-row  :gutter="16" style="margin-top:16px">
                <jt-col  :span="2">
                    <img src='~@/views/platform/testrobot_icon.png' class="icon-attr"/>
                </jt-col>
                <jt-col  :span="3">
                    <p class="bg-font-size common-font-color" style="margin-top:25px">测试环境</p>
                </jt-col>
                <jt-col  :span="4">
                    <p class="common-font-color num-font-size" style="margin:0px" >5</p>
                    <p class="small-font-size gray-font-color">测试中机器人</p>
                </jt-col>
                <jt-col  :span="2">
                    <jt-button class="bt-top" style="padding:4px 10px; margin-top:21px" @click="gotoEnvRobotList">机器人列表</jt-button>
                </jt-col>
                <jt-col  :span="1" >
                    <div style="background-color: #E9EBEF; height:72px; width:1px; margin-left:33px"></div>
                </jt-col>
                <jt-col :span="2">
                    <img src='~@/views/platform/prorobot_icon.png' class="icon-attr" style="margin-left:-14px"/>
                </jt-col>
                <jt-col  :span="3">
                    <p class="bg-font-size common-font-color" style="margin-top:25px">生产环境</p>
                </jt-col>
                <jt-col  :span="4">
                    <p class="common-font-color num-font-size" style="margin:0px" >1</p>
                    <p class="small-font-size gray-font-color">生产中机器人</p>
                </jt-col>
                <jt-col  :span="2">
                    <jt-button class="bt-top" style="padding:4px 10px; margin-top:21px" @click="gotoProRobotList">机器人列表</jt-button>
                </jt-col>
            </jt-row>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@/assets/style/var.less";
    .icon-attr {
        width: 72px;
        height: 72px;
    }

    .row-len {
        padding-left: 20px;
        padding-right: 20px;
    }
    .gray-line {
        background-color: #E9EBEF;
        height: 1px;
    }
    .grey-block {
      height: 20px;
      background-color: rgba(239,241,244,1);
    }
    .num-style {
        margin-top:22px;
        margin-bottom:0px;
    }

    .num-tips-style {
        margin-bottom: 0px;
    }

    .num-font-size {
        font-size: 30px;
    }
    .bgr-font-size {
        font-size: @jt-font-size-lg;
        
        //font-weight:bold
    }
    .bg-font-size {
         font-size: @jt-font-size-lg;
         
    }

    .small-font-size {
        font-size: @jt-font-size-sm;
    }

    .bgr-font-color {
        color: @jt-color-text-strong;
    }

    .common-font-color {
        color: @jt-color-text-strong;
    }

    .link-font-color {
        color: #337DFF
    }

    .gray-font-color {
        color: #999999
    }

    .bt-top {
        width: 80px;
        height: 32px;
    }

    .main-header{
        height: 58px;
        background-color: #fff;
        padding-left: 20px;
        line-height: 58px;
        font-weight: 500;
        font-size: @jt-font-size-lg;
        color: @jt-color-text-strong;
    }

    .my-serve {
        height: 378px;
        background: #ffffff;
        padding: 20px 0px 30px 0px;
        
    }

    .my-robot {
        height: 165px;
        background: #ffffff;
        padding: 20px;
    }

</style>

<script>
import {Modal} from "ant-design-vue";
//import content from '*.svg';

export default {
    name: "PlatfromIndex",
    components:{
        //"jt-modal": Modal,
    },
    mounted() {
        if ( 0 != this.state) {
            this.modalVisible = true;
            if (1 == this.state) {
                Modal.warning({
                    title: <div style="font-size:14px; font-weight:500; color:#333333">您的账户已到期2天，请续费</div>,
                    content: <div style="font-size:12px; font-weight:400; color:#555555">您可以前往为账户续费，续费后将能正常使用<br />温馨提示：到期7天扔未续费，您的账户将自动退订</div>,
                    okText: "立即续费",
                    width: 408,
                    centered: true,
                    //icon: "iconfont iconjinggao-tianchong",
                    onOk: (e) => {
                        console.log("aaa");
                        this.$router.push({path:'/custom-order', query: {}})
                        return new Promise((resolve, reject) => {
                            setTimeout(resolve, 1);
                        }).catch(() => console.log('Oops errors!'));
                    }
                })
            } else if (2 == this.state) {
                Modal.warning({
                    title: <div style="font-size:14px; font-weight:500; color:#333333; width:332px">您的账户免费套餐已到期2天，请变更套餐后继续使用</div>,
                    content: <div style="font-size:12px; font-weight:400; color:#555555">您可以重新订购变更套餐，变更后将能继续正常使用<br />温馨提示：到期7天扔未续费，您的账户将自动退订</div>,
                    okText: '重新订购',
                    width: 432,
                    height: 176,
                    centered:true,
                    onOk: (e) => {
                        console.log("bbb");
                        this.$router.push({path:'/custom-order', query: {}})
                        return new Promise((resolve, reject) => {
                            setTimeout(resolve, 1);
                        }).catch(() => console.log('Oops errors!'));
                    }      
                })
            }
        }
    },
    methods: {
        handleModalOk: (e) => {
            console.log("ccc")
        },
        gotoEnvRobotList() {
            this.$router.push({path:'/home/testEnv', query: {}})
        },
        gotoProRobotList() {
            this.$router.push({path:'/home/productionEnv', query: {}})
        },
        clickMenu(idx) {
            //alert("aaa" + idx)
        }
    },
    data: function () {
        return {
            resp: {
                testEnv:{
                    useTimes: 100,
                    leftTimes: 200,
                    qpsLimit: 10,
                    robotNum: 5,
                },
                proEnv:{
                    useTimes: 5500,
                    leftTimes: 4500,
                    qpsAvg: 10,
                    qpsPeak: 25,
                    qpsLimit: 25,
                    rototNum: 1,
                },
            },
           
            state: 0,
            modalVisible: false,
            modalTitle: "",
            modalText: "",
            modalTips: "",
            modalOkText:""
        }
    }
};
</script>
