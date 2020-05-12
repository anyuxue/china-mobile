<template>
    <div class="wrapper">
        <div class="breadcrumb">
            <Breadcrumb>
                <breadcrumb-item>生产环境</breadcrumb-item>
                <breadcrumb-item>
                </breadcrumb-item>
                <breadcrumb-item>预置技能</breadcrumb-item>
            </Breadcrumb>
        </div>

        <section class="content">
            <div class="content-wrap" v-show="pageIndex == 0">
                <h1 class="h1">预置技能</h1>


                <div class="mid-card">
                    <div class="mid-card-1">
                        <div style="margin: 16px 16px 0 17px;">
                            <span><jt-icon type="message" /></span>
                            <span style="
                                margin-left: 10px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #333333;
                                line-height: 20px;"
                            >闲聊</span>
                        </div>
                        <div style="margin: 8px 31px 16px 17px;">
                            <span style="
                                font-size: 12px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #999999;
                                line-height: 18px;"
                            >简介：此预置问答将提供闲聊的功能<br>问题示例：跟我聊聊吧</span>
                        </div>
                    </div>
                    <div class="mid-card-2">
                        <div style="margin: 16px 16px 0 17px;">
                            <span><jt-icon type="message" /></span>
                            <span style="
                                margin-left: 10px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #333333;
                                line-height: 20px;"
                            >笑话</span>
                        </div>
                        <div style="margin: 8px 31px 16px 17px;">
                            <span style="
                                font-size: 12px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #999999;
                                line-height: 18px;"
                            >简介：此预置问答将提供闲聊的功能<br>问题示例：跟我聊聊吧</span>
                        </div>
                    </div>
                    <div class="mid-card-3">
                        <div style="margin: 16px 16px 0 17px;">
                            <span><jt-icon type="message" /></span>
                            <span style="
                                margin-left: 10px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #333333;
                                line-height: 20px;"
                            >成语</span>
                        </div>
                        <div style="margin: 8px 31px 16px 17px;">
                            <span style="
                                font-size: 12px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #999999;
                                line-height: 18px;"
                            >简介：此预置问答将提供闲聊的功能<br>问题示例：跟我聊聊吧</span>
                        </div>
                    </div>
                    <div class="mid-card-4">
                        <div style="margin: 16px 16px 0 17px;">
                            <span><jt-icon type="message" /></span>
                            <span style="
                                margin-left: 10px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #333333;
                                line-height: 20px;"
                            >闹钟</span>
                        </div>
                        <div style="margin: 8px 31px 16px 17px;">
                            <span style="
                                font-size: 12px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #999999;
                                line-height: 18px;"
                            >简介：此预置问答将提供闲聊的功能<br>问题示例：跟我聊聊吧</span>
                        </div>
                    </div>
                    <div class="mid-card-5">
                        <div style="margin: 16px 16px 0 17px;">
                            <span><jt-icon type="message" /></span>
                            <span style="
                                margin-left: 10px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #333333;
                                line-height: 20px;"
                            >天气</span>
                        </div>
                        <div style="margin: 8px 31px 16px 17px;">
                            <span style="
                                font-size: 12px;
                                font-family: PingFangSC-Regular,PingFang SC;
                                font-weight: 400;
                                color: #999999;
                                line-height: 18px;"
                            >简介：此预置问答将提供闲聊的功能<br>问题示例：跟我聊聊吧</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style lang="less" scoped>
@import "~@/assets/style/var.less";
.wrapper {
    .breadcrumb {
        height:58px;
        background:#fff;
        line-height: 58px;
        margin-left: 1px;
        padding: 19px 27px;
        position: relative;
        border-bottom: 1px solid #E9EBEF;
    }
    .content {
        position: absolute;
        top: 58px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
    }
}
.content-wrap {
    margin: 20px;
    padding: 20px;
    background-color: @jt-color-white;
    height: 600px;
}
.h1{
    width:88px;
    height:24px;
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:24px;
    float: left;
}
.mid-card{
    margin-top: 48px;
}
.mid-card-1{
    width:252px;
    height:96px;
    background:rgba(255,255,255,1);
    border-radius:2px;
    border:1px solid rgba(217,217,217,1);
    float: left;
    margin-right: 16px;
}
.mid-card-2{
    width:252px;
    height:96px;
    background:rgba(255,255,255,1);
    border-radius:2px;
    border:1px solid rgba(217,217,217,1);
    float: left;
    margin-right: 16px;
}
.mid-card-3{
    width:252px;
    height:96px;
    background:rgba(255,255,255,1);
    border-radius:2px;
    border:1px solid rgba(217,217,217,1);
    float: left;
    margin-right: 16px;
}
.mid-card-4{
    width:252px;
    height:96px;
    background:rgba(255,255,255,1);
    border-radius:2px;
    border:1px solid rgba(217,217,217,1);
    float: left;
    margin-right: 16px;
}
.mid-card-5{
    width:252px;
    height:96px;
    background:rgba(255,255,255,1);
    border-radius:2px;
    border:1px solid rgba(217,217,217,1);
    margin-top: 20px;
    float: left;
}
</style>


<script>
import {
    Breadcrumb,
    Icon,
    Modal,
    // Empty,
} from "ant-design-vue";

export default {
    name: "Form",
    components: {
        Breadcrumb,
        "breadcrumb-item": Breadcrumb.Item,
        "jt-icon":Icon, 
    },
    data() {
        return {
            pageIndex: 0,
        };
    },
}
</script>
