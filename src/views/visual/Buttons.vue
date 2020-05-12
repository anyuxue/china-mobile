<template>
    <section class="content">
        <section class="sector">
            <div class="btns">
                <ConfigProvider :autoInsertSpaceInButton="true">
                    <jt-button size="large" type="primary">主按钮</jt-button>
                </ConfigProvider>
                <jt-button size="large">二级按钮</jt-button>
                <jt-button size="large" type="danger">危险按钮</jt-button>
                <jt-button size="large" type="link">操作1</jt-button>
            </div>
            <div class="btns">
                <ConfigProvider :autoInsertSpaceInButton="true">
                    <jt-button type="primary">主按钮</jt-button>
                </ConfigProvider>
                <jt-button>二级按钮</jt-button>
                <jt-button type="danger">危险按钮</jt-button>
                <jt-button type="link">操作1</jt-button>
            </div>
            <div class="btns">
                <ConfigProvider :autoInsertSpaceInButton="true">
                    <jt-button size="small" type="primary">主按钮</jt-button>
                </ConfigProvider>
                <jt-button size="small">二级按钮</jt-button>
                <jt-button size="small" type="danger">危险按钮</jt-button>
                <jt-button size="small" type="link">操作1</jt-button>
            </div>
        </section>
        <section class="sector">
            <div class="btns">
                <jt-button type="primary" disabled>灰度按钮</jt-button>
                <a href="javascript:void(0)" disabled style="margin:0 10px;">操作</a>
            </div>
        </section>
        <section class="sector">
            <div class="btns">
                <jt-button type="primary">主按钮</jt-button>
                <jt-button>二级按钮</jt-button>
                <jt-button type="danger">危险按钮</jt-button>
                <jt-button type="link">操作1</jt-button>
            </div>
        </section>
        <section class="sector">
            <jt-button type="danger" ghost>幽灵危险按钮</jt-button>
        </section>
        <section class="sector">
            <jt-button type="icon">
                <span class="iconfont iconfasong"></span>
            </jt-button>
            <jt-button type="icon">
                <span class="iconfont iconfasong"></span>按钮
            </jt-button>
        </section>
    </section>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.content {
    margin: @jt-gap;
}
.sector {
    margin-bottom: 8px;
    padding: 8px;
    background: #fff;
}
.btns {
    margin: 10px;
    button {
        margin: 8px;
    }
}
</style>
<script>
import { ConfigProvider } from "ant-design-vue";
export default {
    name: "Buttons",
    components: {
        ConfigProvider
    }
};
</script>
