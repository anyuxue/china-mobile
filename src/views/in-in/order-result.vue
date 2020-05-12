<template>
    <div class="result">
        <div class="header">
            <span>智能交互中心</span>
        </div>
        <div class="info">
            <div class="fail" v-show="result==1">
                <div class="icon-pos">
                    <jt-alert type="error" class="icon-size" showIcon/>
                </div>
                <div style="margin-top:7px">
                    <span class="result-word">订购失败</span>
                </div>
                <div style="margin-top:20px">
                    <span class="result-tips">失败原因：{{errorMsg}}</span>
                </div>
                <jt-button type="primary" class="bt-class"   @click="reOrder">重新订购</jt-button>
            </div>
            <div class="success" v-show="result==0">
                <div class="icon-pos">
                    <jt-alert type="success" class="icon-size" showIcon/>
                </div>
                <div style="margin-top:7px">
                    <span class="result-word">订购成功</span>
                </div>
                <div style="margin-top:20px">
                    <span class="result-tips">{{errorMsg}}</span>
                </div>
                <jt-button type="primary" class="bt-class"   @click="goPlatform">管理控制台</jt-button>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import "~@/assets/style/var.less";

.ant-alert-success {
    background-color: #fff;
    border: 0px;
    svg{
        width: 48px;
        height: 48px;
    }
}

.ant-alert-error {
    background-color: #fff;
    border: 0px;
    svg{
        width: 48px;
        height: 48px;
    }
}

.ant-alert-icon {
    top: 0px;
    left: 0px;
}

.result {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    top: 0;
    background: #eff1f4;
    overflow: auto;
    min-height:400px;
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

.info {
    position: absolute;
    top: 80px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background:rgba(255,255,255,1);
    border-radius:2px;
}

.fail, .success {
    text-align:center
}

.icon-pos {
    margin-top: 90px;
    display: inline-block
}
.icon-size {
   
    width: 48px;
    height: 48px;
    padding: 0px;
}

.result-word {
    width:80px;
    height:28px;
    font-size:20px;
    font-weight:400;
    color:rgba(3,17,41,1);
    line-height:28px;
}

.result-tips {
    width:266px;
    height:20px;
    font-size:14px;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:20px;
}

.bt-class {
    height:32px;
    border-radius:2px;
    margin-top: 20px;
}

</style>

<script>
import {Alert} from "ant-design-vue";
export default {
    name: 'OrderResult',
    components:{
        "jt-alert": Alert,
    },

    methods: {
        reOrder() {
            this.$router.push({path:'/custom-order', query: {}})
        },
        goPlatform() {
            this.$router.push({path:'/home/controlPlatform', query: {}})
        }

    },
    data: function () {
        return {
            result: 0,
            errorMsg: "订购失败：目前平台资源有限，请稍后重试",
        }
    }
}
</script>