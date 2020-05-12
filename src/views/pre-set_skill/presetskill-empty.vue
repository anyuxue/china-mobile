<template>
    <div class="wrapper">
        <div class="breadcrumb">
            <Breadcrumb>
                <breadcrumb-item>测试环境</breadcrumb-item>
                <breadcrumb-item>
                </breadcrumb-item>
                <breadcrumb-item>预置技能</breadcrumb-item>
            </Breadcrumb>
        </div>

        <section class="content">
            <div class="content-wrap" v-show="pageIndex == 0">
                <h1 class="h1">预置技能</h1>
                <!-- <jt-button  size="large"  type="primary" style="padding:6px 8px"   @click="showcont">
                    <jt-icon type="plus" :style="{ marginRight:'2px' }"/> 添加预置技能
                </jt-button> -->

                <jt-button class="top-button" size="large"  type="primary" style="padding:6px 8px"   @click="showDrawer">
                    <jt-icon type="plus" :style="{ marginRight:'2px' }"/> 添加预置技能
                </jt-button>
                
                <div class="table-type-3">
                    <jt-empty :image="emptyImage" :imageStyle="{ margin:'160px auto auto auto',width:'400px',height:'270px'}">
                        <div class="emptyDescriptS" slot="description" style="margin-top:-45px">
                            <p class="emptyDescript">您还没有添加任何预置技能</p>
                            <p>您可以点击 <a href="javascript:;" @click="showDrawer">添加预置技能 </a>为机器人添加预置技能</p>
                        </div>
                    </jt-empty>
                </div>
                
                <jt-drawer
                    title="请选择要添加的预置技能"
                    :width="721"
                    :drawerStyle="{
                        background: '#EFF1F4'
                    }"
                    :headerStyle="{
                        paddingTop: '9px',
                        paddingLeft: '20px',
                        background: '#EFF1F4',
                        height: '52px',
                        fontSize: '16px',
                        fontFamily:'PingFangSC-Medium,PingFang SC',
                        fontWeight:'500',
                        color:'#333333',
                        lineHeight:'22px',

                    }"
                    @close="onClose"
                    :visible="visible"
                    :bodyStyle="{
                        background: '#EFF1F4',
                        padding: '0',
                        borderTop: '1px solid #D9D9D9',
                        height: 'calc(100% - 52px)'
                    }"
                >
                    <div class="drawerBody">
                        <div class="bodyLeft divScroll">
                            <div class="options">
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
                                    <span style="float: right;">
                                        <jt-switch v-model="value1" @change='changestatus' defaultunChecked checkedChildren="开" unCheckedChildren="关" />
                                    </span>
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
                            <div class="options">
                                <div style="margin: 16px 16px 0 17px;">
                                    <span><jt-icon type="message" /></span>
                                    <span style="
                                        margin-left: 10px;
                                        font-size: 14px;
                                        font-family: PingFangSC-Regular,PingFang SC;
                                        font-weight: 400;
                                        color: #333333;
                                        line-height: 20px;"
                                    >图标待切换</span>
                                    <span style="float: right;">
                                        <jt-switch @click="showcont" defaultunChecked checkedChildren="开" unCheckedChildren="关" />
                                    </span>
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
                            <div class="options">
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
                                    <span style="float: right;">
                                        <jt-switch @click="showcont" defaultunChecked checkedChildren="开" unCheckedChildren="关" />
                                    </span>
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
                            <div class="options">
                                <div style="margin: 16px 16px 0 17px;">
                                    <span><jt-icon type="message" /></span>
                                    <span style="
                                        margin-left: 10px;
                                        font-size: 14px;
                                        font-family: PingFangSC-Regular,PingFang SC;
                                        font-weight: 400;
                                        color: #333333;
                                        line-height: 20px;"
                                    >音乐</span>
                                    <span style="float: right;">
                                        <jt-switch @click="showcont" defaultunChecked checkedChildren="开" unCheckedChildren="关" />
                                    </span>
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
                            <div class="options">
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
                                    <span style="float: right;">
                                        <jt-switch @click="showcont" defaultunChecked checkedChildren="开" unCheckedChildren="关" />
                                    </span>
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
                            <div class="options">
                                <div style="margin: 16px 16px 0 17px;">
                                    <span><jt-icon type="message" /></span>
                                    <span style="
                                        margin-left: 10px;
                                        font-size: 14px;
                                        font-family: PingFangSC-Regular,PingFang SC;
                                        font-weight: 400;
                                        color: #333333;
                                        line-height: 20px;"
                                    >成语接龙</span>
                                    <span style="float: right;">
                                        <jt-switch @click="showcont" defaultunChecked checkedChildren="开" unCheckedChildren="关" />
                                    </span>
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
                            <div class="options">
                                <div style="margin: 16px 16px 0 17px;">
                                    <span><jt-icon type="message" /></span>
                                    <span style="
                                        margin-left: 10px;
                                        font-size: 14px;
                                        font-family: PingFangSC-Regular,PingFang SC;
                                        font-weight: 400;
                                        color: #333333;
                                        line-height: 20px;"
                                    >其他</span>
                                    <span style="float: right;">
                                        <jt-switch @click="showcont" defaultunChecked checkedChildren="开" unCheckedChildren="关" />
                                    </span>
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
                        <div class="bodyRight">
                            <div class="bodyDialog divScroll">
                                <div v-for="msg in msgList">
                                    <div class="robotMsg" v-if="msg.type === 'robot' ">{{ msg.msg }}</div>
                                    <div class="userMsg" v-if="msg.type === 'user' ">{{ msg.msg }}</div>
                                </div>
                            </div>
                            <div class="bodyInput">
                                <jt-button class="enterButton">
                                    <span><jt-icon type="vertical-align-top" /></span>
                                    <span style="margin-left: 10px;">置顶对话</span>
                                </jt-button>
                                <jt-input-textarea class="inputArea" placeholder="在此体验技能，按enter键可直接发送" v-model="inputContent" @keyup.enter="pressEnter" />
                            </div>
                        </div>
                    </div>
                    <div class="drawerFooter">
                        <jt-button :style="{ marginRight: '8px', width: '80px', height: '32px' }" @click="onClose">取消</jt-button>
                        <jt-button :style="{ width: '80px', height: '32px' }" type="primary" @click="onClose">确定</jt-button>
                    </div>
                </jt-drawer>
            </div>

            <div class="content-wrap" v-show="pageIndex == 1">
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
.top-button{
    float: right;
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


.drawerBody {
    overflow: hidden;
    width: 721px;
    height: calc(100% - 64px);
    display: flex;
    flex-flow: row;
}
.bodyLeft {
    width: 280px;
    height: 100%;
    border-right: 1px solid #D9D9D9;
    padding: 20px 20px 0 20px;
    overflow: auto;
    display: flex;
    flex-flow: column;
}
.divScroll::-webkit-scrollbar {
    width: 6px;
}
.divScroll::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #D9D9D9;
    opacity: 0.2;
}
.divScroll::-webkit-scrollbar-track {
    background: transparent;
}
.options {
    background: #FFFFFF;
    border-radius: 2px;
    width: 240px;
    height: 96px;
    margin-bottom: 16px;
}
.bodyRight {
    width: 440px;
    height: 100%;
    display: flex;
    flex-flow: column;
}
.bodyDialog {
    width: 440px;
    height: calc(100% - 152px);
    border-bottom: 1px solid #D9D9D9;
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-flow: column;
    overflow: auto;
}
.bodyInput {
    width: 440px;
    height: 152px;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 8px;
}
.drawerFooter {
    background: #FFFFFF;
    width: 721px;
    height: 64px;
    border-top: 1px solid #E9EBEF;
    padding: 16px 20px 16px;
    text-align: right;
}
.enterButton {
    width: 88px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid #D9D9D9;
    font-size: 12px;
    font-weight: 400;
    color: #555555;
    line-height: 18px;
    padding-left: 10px;
    &:hover{
            color: #337DFF;
            border-color:#337DFF;
        }
}
.inputArea {
    resize: none;
    margin-top: 9px;
    max-height: 95px;
    min-height: 95px;
    overflow: auto;
    background: transparent;
    border-style: none;
    font-size: 12px;
    font-weight: 400;
    color: #555555;
    line-height: 18px;
    padding: 0;
    border: none;
    box-shadow: none;
}
.robotMsg {
    float: left;
    width: fit-content;
    max-width: 344px;
    background: #FFFFFF;
    border-radius: 0px 24px 24px 24px;
    padding: 13px 16px 13px 16px;
    font-size: 12px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 18px;
    margin-bottom: 16px;
}
.userMsg {
    float: right;
    width: fit-content;
    max-width: 344px;
    background: #C7DBFF;
    border-radius: 24px 0px 24px 24px;
    padding: 13px 16px 13px 16px;
    font-size: 12px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 18px;
}
</style>


<script>
import {
    Breadcrumb,
    Icon,
    Table, 
    Empty,
    ConfigProvider,
} from "ant-design-vue";

export default {
    name: "Form",
    components: {
        Breadcrumb,
        "breadcrumb-item": Breadcrumb.Item,
        "jt-icon":Icon, 
        'jt-empty':Empty,
    },
    data() {
        return {
            pageIndex: 0,
            // show:true,
            value1:false,
            emptyImage: require("@/assets/image/empty@2x.png"),
            inputContent: '',
            msgList: [
                {
                    type: 'robot',
                    msg: '您好，我是机器人无敌聪明的小智，您可以随时对我进行测试，您可以这样问我：帮我看下今天的天气'
                }
            ],
            form: this.$form.createForm(this),
            visible: false
        };
    },
    methods: {
        // showcont:function(){
        //     this.show = !this.show;
        // },
        change:function(callback){
            console.log(callback);
            // if(callback){
            //     !this.value1
            // }
            // else{
            //     this.value1
            // }
        },
        // if(checkedChildren){
        //         this.show
        //     }
        //     else{
        //         this.show = !this.show
        //     }
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
        pressEnter() {
            const userMsg = {
                type: 'user',
                msg: this.inputContent
            };
            const robotMsg = {
                type: 'robot',
                msg: '先给我红包'
            };
            this.msgList.push(userMsg, robotMsg);
            this.inputContent = '';
        }
    }
};
</script>
