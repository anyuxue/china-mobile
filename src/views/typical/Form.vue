<template>
    <div class="wrapper">
        <div class="breadcrumb">
            <Breadcrumb>
                <breadcrumb-item>我的机器人</breadcrumb-item>
                <breadcrumb-item>
                    <a href>生产环境</a>
                </breadcrumb-item>
                <breadcrumb-item>
                    <a href>问答库</a>
                </breadcrumb-item>
                <breadcrumb-item>问答详情</breadcrumb-item>
            </Breadcrumb>
        </div>
        <section class="content">
            <div class="content-wrap" v-show="pageIndex == 0">
                <h2>新建数据探索</h2>
                <div class="form-content">
                    <jt-row class="form-row input-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>任务名称
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <jt-input placeholder="请输入" />
                            <div class="input-tip">只能由数字、字母或-组成且首位只能是字母，长度小于40个字符</div>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row radio-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>任务类型
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <Radio class="jt-radio">描述性统计</Radio>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>使用数据
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <div class="upload-box">
                                <div class="upload">
                                    <span class="iconfont">&#xe61d;</span>这里是资.xml
                                    <Icon type="close" class="close" />
                                    <!-- <div class="progress" style="width:50%"></div> -->
                                </div>
                                <div class="upload">
                                    <span class="iconfont">&#xe61d;</span>这里是资.xml
                                    <Icon type="close" class="close" />
                                    <!-- <div class="progress" style="width:30%"></div> -->
                                </div>
                                <div class="upload">
                                    <span class="iconfont">&#xe61d;</span>这里是资.xml
                                    <Icon type="close" class="close" />
                                    <!-- <div class="progress" style="width:20%"></div> -->
                                </div>
                                <span class="upload-btn">选择</span>
                            </div>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>观察数据量
                            <Tooltip placement="top">
                                <template slot="title">
                                    <span>随机采样</span>
                                </template>
                                <Icon type="question-circle" class="title-icon" />
                            </Tooltip>
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <jt-row class="slider-box" align="middle">
                                <jt-col :span="19" style="margin-top:-10px">
                                    <Slider
                                        v-model="slider"
                                        :marks="marks[0]"
                                        :tipFormatter="tipFormatter"
                                    />
                                </jt-col>
                                <jt-col :span="4" offset="1" style="display:flex;line-height:32px">
                                    <jt-input
                                        placeholder="请输入"
                                        v-model="slider"
                                        style="margin-right:10px;"
                                    />%
                                </jt-col>
                            </jt-row>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>观察特征
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <RadioGroup class="jt-radio-group" name="radioGroup" :defaultValue="1">
                                <Radio :value="1" class="jt-radio">全部特征</Radio>
                                <Radio :value="2" class="jt-radio">选择特征</Radio>
                            </RadioGroup>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row radio-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>标注特征
                            <Tooltip placement="top">
                                <template slot="title">
                                    <span>仅支持分类，标注特征必须为离散型</span>
                                </template>
                                <Icon type="question-circle" class="title-icon" />
                            </Tooltip>
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <RadioGroup name="radioGroup" class="jt-radio-group" :defaultValue="1">
                                <Radio :value="1" class="jt-radio">
                                    <Select defaultValue="Label" style="width: 184px">
                                        <Select-option value="Label">Label</Select-option>
                                        <Select-option value="lucy">Lucy</Select-option>
                                        <Select-option value="disabled" disabled>Disabled</Select-option>
                                        <Select-option value="Yiminghe">yiminghe</Select-option>
                                    </Select>
                                </Radio>
                                <Radio :value="2" class="jt-radio">选择特征</Radio>
                                <p class="radio-tip">
                                    原始特征 102 条 / 不使用 4 条 / 使用 98 条
                                    <span>重选</span>
                                </p>
                            </RadioGroup>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row" :gutter="16">
                        <jt-col class="row-title" :span="4"></jt-col>
                        <jt-col class="row-content" :span="10">
                            <div class="button-group">
                                <jt-button class="button" type="primary" @click="pageIndex++">下一步</jt-button>
                                <jt-button class="button">取消</jt-button>
                            </div>
                        </jt-col>
                    </jt-row>
                </div>
            </div>
            <div class="content-wrap" v-show="pageIndex == 1">
                <h2>新建数据探索</h2>
                <div class="form-content">
                    <jt-row class="form-row input-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>标准问
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <jt-input placeholder="请输入" :disabled="switchType" />
                            <div class="input-tip error">错误提示</div>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row input-row" :gutter="16">
                        <jt-col class="row-title" :span="4">类似问题</jt-col>
                        <jt-col class="row-content" :span="10">
                            <jt-input
                                placeholder="请输入"
                                v-model="sameQuestion"
                                @keyup.enter="addSameQuestion"
                                :disabled="switchType"
                            />
                            <p class="input-out-tip" style="width:150px">可按回车键添加多条</p>
                            <jt-input
                                placeholder="请输入"
                                v-for="(item, index) in sameQuestionList"
                                v-model="sameQuestionList[index]"
                                :value="item"
                                :key="index"
                                :disabled="switchType"
                            >
                                <Icon
                                    slot="suffix"
                                    class="icon"
                                    type="delete"
                                    @click="deleteSameQuestion(index)"
                                />
                            </jt-input>
                            <!-- <a-input placeholder="Basic usage" v-model="userName" ref="userNameInput">
                            <a-icon slot="prefix" type="user" />
                            </a-input>-->
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row input-row" :gutter="16">
                        <jt-col class="row-title" :span="4">关键词</jt-col>
                        <jt-col class="row-content" :span="5">
                            <jt-input
                                placeholder="请输入"
                                v-model="keyword"
                                :disabled="switchType"
                                @keyup.enter="addKeyword"
                            />
                            <p class="input-out-tip" style="width:150px">可按回车键添加多条</p>
                            <jt-input
                                placeholder="请输入"
                                v-for="(item, index) in keywordList"
                                v-model="keywordList[index]"
                                :value="item"
                                :key="index"
                                :disabled="switchType"
                            >
                                <Icon
                                    slot="suffix"
                                    class="icon"
                                    type="delete"
                                    @click="deleteKeyword(index)"
                                />
                            </jt-input>
                            <!-- <a-input placeholder="Basic usage" v-model="userName" ref="userNameInput">
                            <a-icon slot="prefix" type="user" />
                            </a-input>-->
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row" :gutter="16">
                        <jt-col class="row-title" :span="4">阈值</jt-col>
                        <jt-col class="row-content" :span="10">
                            <jt-row class="slider-box" align="middle">
                                <jt-col :span="19" style="margin-top:-10px">
                                    <Slider
                                        :disabled="switchType"
                                        v-model="slider"
                                        :marks="marks[1]"
                                        :max="1"
                                        :step="0.1"
                                    />
                                </jt-col>
                                <jt-col :span="4" offset="1">
                                    <jt-input
                                        :disabled="switchType"
                                        placeholder="请输入"
                                        v-model="slider"
                                    />
                                </jt-col>
                            </jt-row>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row input-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>推荐标准问题
                        </jt-col>
                        <jt-col class="row-content" :span="10">
                            <div class="sort-list">
                                <div
                                    class="sort-list-title"
                                    :class="{disabled:sortList.length >= 5 || switchType}"
                                >
                                    <div class="icon" @click="sortListAdd">
                                        <Icon type="plus" />
                                    </div>最多可添加5条
                                </div>
                                <jt-input
                                    placeholder="推荐标准问题"
                                    v-for="(item, index) in sortList"
                                    :key="index"
                                    v-model="sortList[index]"
                                    :disabled="switchType"
                                    class="sort-list-input"
                                >
                                    <div slot="suffix" class="sort-controller">
                                        <Icon
                                            class="icon up"
                                            type="arrow-up"
                                            @click="resortList(item,index,1)"
                                            v-show="index != 0"
                                        />
                                        <Icon
                                            class="icon down"
                                            type="arrow-down"
                                            v-show="index != sortList.length-1"
                                            @click="resortList(item,index,0)"
                                        />
                                    </div>
                                    <span
                                        slot="suffix"
                                        class="iconfont"
                                        @click="sortListDelete(index)"
                                    >&#xe62f;</span>
                                </jt-input>
                            </div>
                        </jt-col>
                    </jt-row>
                </div>
                <h2>新建数据探索</h2>
                <div class="form-content">
                    <jt-row class="form-row input-row" :gutter="16">
                        <jt-col class="row-title" :span="4">
                            <span>*</span>答案
                        </jt-col>
                        <jt-col class="row-content" :span="13">
                            <div class="textarea-input">
                                <jt-input
                                    type="textarea"
                                    :disabled="switchType"
                                    :rows="4"
                                    v-model="textareaText"
                                />
                                <p :class="{error:textareaText.length > 200}">
                                    已输入
                                    <span>{{textareaText.length}}</span>/200字
                                </p>
                            </div>
                        </jt-col>
                    </jt-row>
                    <jt-row class="form-row" :gutter="16">
                        <jt-col class="row-title" :span="4"></jt-col>
                        <jt-col class="row-content" :span="10">
                            <div class="button-group">
                                <jt-button class="button" disabled>保存</jt-button>
                                <jt-button class="button" disabled>保存并新建下一条</jt-button>
                                <jt-button class="button" @click="pageIndex--">取消</jt-button>
                                <a-switch
                                    defaultChecked
                                    v-model="switchType"
                                    @change="switchChange"
                                />
                            </div>
                        </jt-col>
                    </jt-row>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var.less";
@font-face {
    font-family: "iconfont";
    src: url("../../assets/font/iconfont.eot");
    src: url("../../assets/font/iconfont.eot?#iefix")
            format("embedded-opentype"),
        url("../../assets/font/iconfont.woff2") format("woff2"),
        url("../../assets/font/iconfont.woff") format("woff"),
        url("../../assets/font/iconfont.ttf") format("truetype"),
        url("../../assets/font/iconfont.svg#iconfont") format("svg");
}
*[disabled] {
    color: @jt-color-text-secondary;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.wrapper {
    .breadcrumb {
        height: 58px;
        line-height: 58px;
        background: @jt-color-white;
        margin-left: 1px;
        padding: 19px 27px;
        position: relative;
        z-index: 999;
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
.content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    width: 100%;
    // width: ~"calc(100% - 200px)";
}
.content-wrap {
    margin-bottom: 20px;
    padding: 20px;
    background-color: @jt-color-white;
    min-height: ~"calc(100% - 20px)";
    > h2:not(:first-of-type) {
        margin-top: 64px;
    }
}
.row-content {
    position: relative;
}
.icon {
    cursor: pointer;
}
h2 {
    font-size: @jt-font-size-lg;
    font-weight: @jt-font-weight-medium;
    color: @jt-color-text-strong;
}
.form-content {
    margin-top: 48px;
    font-size: @jt-font-size-sm;
}
.form-row {
    margin-bottom: 25px;
    position: relative;
}

.input-row {
    .row-title {
        line-height: 32px;
    }
    input {
        width: 100%;
        .icon {
            color: @jt-color-text-secondary;
            cursor: pointer;
        }
    }
}
.radio-row {
    display: flex;
    align-items: center;
}
.jt-radio-group {
    position: relative;
    .jt-radio {
        margin-right: 16px;
    }
    .radio-tip {
        position: absolute;
        left: 100%;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 330px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        span {
            color: @jt-color-primary;
            cursor: pointer;
            user-select: none;
            margin-left: 8px;
        }
    }
}
.jt-radio {
    font-weight: @jt-font-weight;
    color: @jt-color-text;
}
.row-title {
    text-align: right;
    color: @jt-color-text-strong;
    > span {
        color: @jt-color-highlight;
        padding-right: 4px;
    }
}
.input-tip {
    // position: absolute;
    // left: 8px;
    // top: ~"calc(100% + 4px)";
    margin-top: 4px;
    color: @jt-color-text-secondary;
    &.error {
        margin-top: 2px;
        color: @jt-color-error;
        // top: ~"calc(100% + 2px)";
    }
}
.input-out-tip {
    position: absolute;
    left: ~"calc(100%)";
    top: 7px;
    color: @jt-color-text-secondary;
}
.upload-box {
    padding: 16px;
    border: 1px solid @jt-color-nav-text;
    border-radius: 2px;
    .upload-btn {
        color: @jt-color-primary;
        user-select: none;
        cursor: pointer;
        margin-top: 16px;
        margin-right: 16px;
        text-align: right;
        display: block;
    }
}
.title-icon {
    color: @jt-color-text-secondary;
}
.upload {
    width: 100%;
    line-height: 22px;
    height: 22px;
    background-color: #f5f8ff;
    position: relative;
    padding: 0 12px;
    color: @jt-color-text-secondary;
    margin-bottom: 4px;
    &:last-of-type {
        margin-bottom: 0;
    }
    .iconfont {
        margin-right: 7px;
        color: @jt-color-text-secondary;
        // font-size: 12px;
    }
    .close {
        position: absolute;
        right: 10px;
        top: 0;
        bottom: 0;
        margin: auto;
        // color: @jt-color-primary;
        width: 12px;
        height: 12px;
        cursor: pointer;
    }
    .progress {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: @jt-color-primary;
        opacity: 0.14;
    }
}
.button-group {
    .button {
        min-width: 80px;
        height: 32px;
    }
    .button:not(:last-of-type) {
        margin-right: 8px;
    }
}
// 排序列表
.sort-list {
    .sort-list-title {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        color: @jt-color-text-secondary;
        border-radius: 2px;
        .icon {
            border: 1px solid @jt-color-nav-text;
            width: 32px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            color: @jt-color-text;
            cursor: pointer;
            margin-right: 8px;
            border-radius: 2px;
        }
        &.disabled {
            .icon {
                background: rgba(245, 245, 245, 1);
                border: 1px solid rgba(217, 217, 217, 1);
                color: #bbb;
                cursor: no-drop;
            }
        }
    }
    .sort-controller {
        margin-right: 10px;
        width: 30px;
        position: relative;
        .icon {
            top: -6px;
            margin: auto;
            position: absolute;
            &.down {
                left: 0;
            }
            &.up {
                right: 0;
            }
        }
    }
    .sort-list-input {
        &:not(:last-of-type) /deep/ .ant-input {
            border-bottom: none;
        }
        .icon,
        .iconfont {
            color: @jt-color-text-secondary;
            cursor: pointer;
            &:hover {
                color: @jt-color-primary;
            }
        }
    }
}
// 多行文本框
.textarea-input {
    position: relative;
    textarea {
        width: 100%;
        height: 144px;
        resize: none;
        padding: 8px;
        display: block;
    }
    p {
        position: absolute;
        right: 8px;
        bottom: -8px;
        color: @jt-color-text-secondary;
        user-select: none;
        &.error {
            span {
                color: @jt-color-error;
            }
        }
    }
}
</style>
<script>
import {
    Radio,
    Icon,
    Tooltip,
    Slider,
    Select,
    Switch,
    Breadcrumb
} from "ant-design-vue";
export default {
    name: "Form",
    components: {
        Radio,
        RadioGroup: Radio.Group,
        Icon,
        Tooltip,
        Slider,
        Select,
        SelectOption: Select.Option,
        "a-switch": Switch,
        Breadcrumb,
        "breadcrumb-item": Breadcrumb.Item
    },
    data() {
        return {
            pageIndex: 0,
            // 上传
            defaultFileList: [
                {
                    uid: "1",
                    name: "xxx.png",
                    status: "done",
                    response: "Server Error 500", // custom error message to show
                    url: "http://www.baidu.com/xxx.png"
                },
                {
                    uid: "2",
                    name: "yyy.png",
                    status: "done",
                    url: "http://www.baidu.com/yyy.png"
                },
                {
                    uid: "3",
                    name: "zzz.png",
                    status: "error",
                    response: "Server Error 500", // custom error message to show
                    url: "http://www.baidu.com/zzz.png"
                }
            ],
            // 进度条
            marks: [
                {
                    0: "0%",
                    100: "100%"
                },
                {
                    0: "0",
                    1: "1"
                }
            ],
            // 滑动条
            slider: 0,
            // 类似问题
            sameQuestion: "",
            sameQuestionList: [],
            // 关键词
            keyword: "",
            keywordList: [],
            // 可排序列表
            sortList: [],
            // 多行文本框
            textareaText: "",
            // 选择框
            switchType: false
        };
    },
    methods: {
        // 滑动输入条内容格式化
        tipFormatter(value) {
            return `${value}%`;
        },
        // 添加类似问题
        addSameQuestion() {
            this.sameQuestionList.push(this.sameQuestion);
            this.sameQuestion = "";
        },
        /**
         * 删除类似问题
         * @param {int} 点击的问题在sameQuestionList中的下标
         */
        deleteSameQuestion(index) {
            this.sameQuestionList.splice(index, 1);
        },
        // 添加类似问题
        addKeyword() {
            this.keywordList.push(this.keyword);
            this.keyword = "";
        },
        /**
         * 删除类似问题
         * @param {int} 点击的问题在keywordList中的下标
         */
        deleteKeyword(index) {
            if (this.switchType) {
                return;
            }
            this.keywordList.splice(index, 1);
        },
        // 排序列表添加
        sortListAdd() {
            if (this.sortList.length >= 5 || this.switchType) {
                return;
            }
            this.sortList.push("");
        },
        /**
         * 列表重新排序
         * @param {obj} item 列表下标
         * @param {int} index 列表下标
         * @param {int} type 排序类别（0向下 1向上）
         */
        resortList(item, index, type) {
            if (this.switchType) {
                return;
            }
            if (type == 0) {
                this.sortList.splice(index, 1);
                this.sortList.splice(index + 1, 0, item);
            } else {
                this.sortList.splice(index, 1);
                this.sortList.splice(index - 1, 0, item);
            }
        },
        /**
         * 排序列表删除项
         * @param {int} index   列表下标
         */
        sortListDelete(index) {
            if (this.switchType) {
                return;
            }
            this.sortList.splice(index, 1);
        },
        switchChange(checked) {
            console.log(checked);
        }
    }
};
</script>
