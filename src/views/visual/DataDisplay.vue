<template>
    <div class="content">
        <section class="sector">
            <h3>滑动条</h3>
            <div>
                <h4 style="margin-bottom: 16px">Presets:</h4>
                <div>
                    <jt-tag color="pink">pink</jt-tag>
                    <jt-tag color="red">red</jt-tag>
                    <jt-tag color="orange">orange</jt-tag>
                    <jt-tag color="green">green</jt-tag>
                    <jt-tag color="cyan">cyan</jt-tag>
                    <jt-tag color="blue">blue</jt-tag>
                    <jt-tag color="purple">purple</jt-tag>
                </div>
                <h4 style="margin: '16px 0'">Custom:</h4>
                <div>
                    <jt-tag color="#f50">#f50</jt-tag>
                    <jt-tag color="#2db7f5">#2db7f5</jt-tag>
                    <jt-tag color="#87d068">#87d068</jt-tag>
                    <jt-tag color="#108ee9">#108ee9</jt-tag>
                </div>
            </div>
        </section>
        <section class="sector">
            <h3>可编辑标签</h3>
            <div>
                <jt-tag>Tag 1</jt-tag>
                <jt-tag>
                    <a href="https://github.com/vueComponent/ant-design">Link</a>
                </jt-tag>
                <jt-tag closable @close="log">Tag 2</jt-tag>
                <jt-tag closable @close="preventDefault">Prevent Default</jt-tag>
                <template v-for="(tag, index) in tags">
                    <jt-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                        <jt-tag
                            :key="tag"
                            :closable="index !== 0"
                            @close="() => handleClose(tag)"
                        >{{ `${tag.slice(0, 20)}...` }}</jt-tag>
                    </jt-tooltip>
                    <jt-tag
                        v-else
                        :key="tag"
                        :closable="index !== 0"
                        @close="() => handleClose(tag)"
                    >{{ tag }}</jt-tag>
                </template>
                <jt-input
                    v-if="inputVisible"
                    ref="input"
                    type="text"
                    size="small"
                    :style="{ width: '78px' }"
                    :value="inputValue"
                    @change="handleInputChange"
                    @blur="handleInputConfirm"
                    @keyup.enter="handleInputConfirm"
                />
                <jt-tag
                    v-else
                    @click="showInput"
                    style="background: #fff; borderStyle: dashed;"
                >+ New Tag</jt-tag>
            </div>
            <div>
                <jt-badge count="5">
                    <a href="#" class="head-example"></a>
                </jt-badge>
            </div>
            <div>
                <div style="margin-top: 10px">
                    <jt-badge :dot="show">
                        <a href="#" class="head-example"></a>
                    </jt-badge>
                    <br />
                    <jt-switch v-model="show" />
                </div>
            </div>
        </section>
        <section class="sector">
            <h3>状态原点用字体图标</h3>
        </section>
        <section class="sector">
            <h3>提示框</h3>
            <div id="components-jt-tooltip-demo-placement">
                <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
                    <jt-tooltip placement="topLeft">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>TL</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="top">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>Top</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="topRight">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>TR</jt-button>
                    </jt-tooltip>
                </div>
                <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                    <jt-tooltip placement="leftTop">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>LT</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="left">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>Left</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="leftBottom">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>LB</jt-button>
                    </jt-tooltip>
                </div>
                <div
                    :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }"
                >
                    <jt-tooltip placement="rightTop">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>RT</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="right">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>Right</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="rightBottom">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>RB</jt-button>
                    </jt-tooltip>
                </div>
                <div
                    :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }"
                >
                    <jt-tooltip placement="bottomLeft">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>BL</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="bottom">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>Bottom</jt-button>
                    </jt-tooltip>
                    <jt-tooltip placement="bottomRight">
                        <template slot="title">
                            <span>prompt text</span>
                        </template>
                        <jt-button>BR</jt-button>
                    </jt-tooltip>
                </div>
            </div>
        </section>
        <section class="sector">
            <h3>表格以表格典型页面为准</h3>
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
#components-jt-tooltip-demo-placement .ant-btn {
    width: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
<script>
import { Tag, Badge, Switch } from "ant-design-vue";
export default {
    components: {
        "jt-tag": Tag,
        "jt-badge": Badge,
        "jt-switch": Switch
    },
    data() {
        return {
            tags: [
                "Unremovable",
                "Tag 2",
                "Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3"
            ],
            inputVisible: false,
            inputValue: "",
            count: 5,
            show: true,
            buttonWidth: 70
        };
    },
    methods: {
        log(e) {
            console.log(e);
        },
        preventDefault(e) {
            e.preventDefault();
            console.log("Clicked! But prevent default.");
        },
        handleClose(removedTag) {
            const tags = this.tags.filter(tag => tag !== removedTag);
            console.log(tags);
            this.tags = tags;
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(function() {
                this.$refs.input.focus();
            });
        },

        handleInputChange(e) {
            this.inputValue = e.target.value;
        },

        handleInputConfirm() {
            const inputValue = this.inputValue;
            let tags = this.tags;
            if (inputValue && tags.indexOf(inputValue) === -1) {
                tags = [...tags, inputValue];
            }
            console.log(tags);
            Object.assign(this, {
                tags,
                inputVisible: false,
                inputValue: ""
            });
        }
    },
    name: "DataDisplay"
};
</script>
