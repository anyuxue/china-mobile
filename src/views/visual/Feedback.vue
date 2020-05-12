<template>
    <div class="content">
        <section class="sector">
            <h3>弹窗</h3>
            <jt-button type="primary" @click="showModal">弹窗测试</jt-button>
            <jt-modal
                title="标题"
                :visible="visible"
                @ok="handleOk"
                :confirmLoading="confirmLoading"
                @cancel="handleCancel"
                width="374px"
            >
                <p>{{ ModalText }}</p>
            </jt-modal>
        </section>
        <section class="sector">
            <h3>通知框</h3>
            <div>
                <jt-button type="primary" @click="openNotification('topLeft')">左上</jt-button>
                <jt-button type="primary" @click="openNotification('topRight')">右上</jt-button>
                <jt-divider />
                <jt-button type="primary" @click="openNotification('bottomLeft')">左下</jt-button>
                <jt-button type="primary" @click="openNotification('bottomRight')">右下</jt-button>
            </div>
        </section>
        <section class="sector">
            <h3>全局提示</h3>
            <div>
                <jt-button @click="success">成功</jt-button>
                <jt-button @click="error">错误</jt-button>
                <jt-button @click="warning">警告</jt-button>
                <jt-button @click="info">提示</jt-button>
            </div>
        </section>
        <section class="sector">
            <h3>告警</h3>
            <div>
                <jt-alert message="Success Tips" type="success" showIcon />
                <jt-alert message="Informational Notes" type="info" showIcon />
                <jt-alert message="Warning" type="warning" showIcon />
                <jt-alert message="Error" type="error" showIcon />
                <jt-alert
                    message="Success Tips"
                    description="Detailed description and advices about successful copywriting."
                    type="success"
                    showIcon
                />
                <jt-alert
                    message="Informational Notes"
                    description="Additional description and informations about copywriting."
                    type="info"
                    showIcon
                />
                <jt-alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                />
                <jt-alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                />
            </div>
        </section>
        <section class="sector">
            <h3>进度条</h3>
            <div>
                <div>
                    <jt-progress :percent="30" />
                    <jt-progress :percent="50" status="active" />
                    <jt-progress :percent="70" status="exception" />
                    <jt-progress :percent="100" />
                    <jt-progress :percent="50" :showInfo="false" />
                </div>
                <div>
                    <jt-progress type="circle" :percent="75" />
                    <jt-progress type="circle" :percent="70" status="exception" />
                    <jt-progress type="circle" :percent="100" />
                </div>
                <div style="width: 170px">
                    <jt-progress :percent="30" size="small" />
                    <jt-progress :percent="50" size="small" status="active" />
                    <jt-progress :percent="70" size="small" status="exception" />
                    <jt-progress :percent="100" size="small" />
                </div>
            </div>
        </section>
        <section class="sector">
            <h3>Loading加载</h3>
            <div>需提供svg或gif</div>
            <div>
                <jt-loading></jt-loading>
            </div>
        </section>
        <section class="sector">
            <h3>抽屉</h3>
            <div>以抽屉典型页面为准</div>
        </section>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    margin: @jt-gap;
}
.sector {
    margin-bottom: 10px;
    padding: 10px;
    background: #fff;
    .ant-input {
        width: 200px;
    }
}
</style>
<script>
import { Modal, Divider, Alert, Progress } from "ant-design-vue";
import Loading from "@/components/Loading.vue";
export default {
    components: {
        "jt-modal": Modal,
        "jt-divider": Divider,
        "jt-alert": Alert,
        "jt-progress": Progress,
        "jt-loading": Loading
    },
    data() {
        return {
            ModalText: "宽度自定义，当前374px",
            visible: false,
            confirmLoading: false
        };
    },
    methods: {
        success() {
            this.$message.success("成功消息");
        },
        info() {
            this.$message.info("提示消息");
        },
        error() {
            this.$message.error("错误消息");
        },
        warning() {
            this.$message.warning("警告消息");
        },
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            console.log(e);
            this.ModalText = "test";
            this.confirmLoading = true;
            // setTimeout(() => {
            this.visible = false;
            this.confirmLoading = false;
            // }, 2000);
        },
        handleCancel(e) {
            console.log(e);
            console.log("Clicked cancel button");
            this.visible = false;
        },
        openNotification(placement) {
            this.$notification.open({
                message: `Notification ${placement}`,
                description:
                    "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
                placement
            });
        }
    },
    name: "Feedback"
};
</script>
