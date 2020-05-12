<template>
    <div class="wrapper">
        <div class="breadcrumb">
            <Breadcrumb>
                <breadcrumb-item>一级菜单</breadcrumb-item>
                <breadcrumb-item>
                    <a href>二级菜单</a>
                </breadcrumb-item>
                <breadcrumb-item>
                    <a href>三级菜单</a>
                </breadcrumb-item>
                <breadcrumb-item>当前位置</breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="content">
            <section class="sector">
                <h3>分页</h3>
                <Pagination v-model="current" :total="50" showLessItems />
                <br />
                <Pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange" />
                <br />
                <Pagination size="small" :total="50" showSizeChanger showQuickJumper />
            </section>
            <section class="sector">
                <h3>标签页</h3>
                <Tabs defaultActiveKey="1">
                    <tab-pane tab="选项一" key="1">内容一</tab-pane>
                    <tab-pane tab="选项二" key="2">内容二</tab-pane>
                    <tab-pane tab="不可选" key="3" disabled>内容三</tab-pane>
                </Tabs>
            </section>
            <section class="sector">
                <h3>下拉框</h3>
                <jt-dropdown>
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        级联下拉框
                        <jt-icon type="down" />
                    </a>
                    <jt-menu slot="overlay">
                        <jt-menu-item>1st menu item</jt-menu-item>
                        <jt-menu-item>2nd menu item</jt-menu-item>
                        <jt-sub-menu title="sub menu" key="test">
                            <jt-menu-item>3rd menu item</jt-menu-item>
                            <jt-menu-item>4th menu item</jt-menu-item>
                        </jt-sub-menu>
                        <jt-sub-menu title="disabled sub menu" disabled>
                            <jt-menu-item>5d menu item</jt-menu-item>
                            <jt-menu-item>6th menu item</jt-menu-item>
                        </jt-sub-menu>
                    </jt-menu>
                </jt-dropdown>
            </section>
            <section class="sector">
                <h3>步骤</h3>
                <Steps :current="2">
                    <Step>
                        <!-- <span slot="title">Finished</span> -->
                        <template slot="title">第一步</template>
                        <span slot="description">描述多描述多描述多描述多描述多描述多描述多描述多描述多描述多描述多描述多描述多描述多描述多描述多描述</span>
                    </Step>
                    <Step title="第二步" subTitle="副标题" description="描了个述" />
                    <Step title="Waiting" description="This is a description." />
                    <Step title="完成" description="This is a description." />
                </Steps>
            </section>
            <section class="sector">
                <Steps direction="vertical" :current="1">
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </section>
            <section class="sector">
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </section>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
.wrapper {
    .breadcrumb {
        height: 58px;
        line-height: 58px;
        background: @jt-color-white;
        padding: 19px;
        border-bottom: 1px solid #e9ebef;
    }
    .content {
        position: absolute;
        top: 58px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
        padding: @jt-gap;
    }
}
.sector {
    margin-bottom: 8px;
    padding: 8px;
    background: #fff;
    &:last-child {
        margin-bottom: 0;
    }
}
</style>
<script>
import { Pagination, Tabs, Breadcrumb, Steps } from "ant-design-vue";
import { TabPane } from "ant-design-vue/es/tabs";
export default {
    components: {
        Pagination,
        Tabs,
        "tab-pane": TabPane,
        Breadcrumb,
        "breadcrumb-item": Breadcrumb.Item,
        Steps,
        Step: Steps.Step
    },
    methods: {
        // test
        test() {
            debugger;
        },
        // pagination
        onChange(pageNumber) {
            console.log("Page: ", pageNumber);
        },
        // tabs
        callback(key) {
            console.log(key);
        },
        onEdit(targetKey, action) {
            this[action](targetKey);
        },
        add() {
            const panes = this.panes;
            const activeKey = `newTab${this.newTabIndex++}`;
            panes.push({
                title: "New Tab",
                content: "Content of new Tab",
                key: activeKey
            });
            this.panes = panes;
            this.activeKey = activeKey;
        },
        remove(targetKey) {
            let activeKey = this.activeKey;
            let lastIndex;
            this.panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1;
                }
            });
            const panes = this.panes.filter(pane => pane.key !== targetKey);
            if (panes.length && activeKey === targetKey) {
                if (lastIndex >= 0) {
                    activeKey = panes[lastIndex].key;
                } else {
                    activeKey = panes[0].key;
                }
            }
            this.panes = panes;
            this.activeKey = activeKey;
        }
    },
    data() {
        const panes = [
            { title: "Tab 1", content: "Content of Tab 1", key: "1" },
            { title: "Tab 2", content: "Content of Tab 2", key: "2" },
            {
                title: "Tab 3",
                content: "Content of Tab 3",
                key: "3",
                closable: false
            }
        ];
        return {
            current: 2,
            activeKey: panes[0].key,
            panes,
            newTabIndex: 0
        };
    },
    name: "Navigation"
};
</script>
