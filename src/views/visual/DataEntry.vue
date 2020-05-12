<template>
    <div class="content">
        <section class="sector">
            <h3>单选</h3>
            <RadioGroup name="radioGroup" :defaultValue="1">
                <Radio :value="1">A</Radio>
                <Radio :value="2">B</Radio>
                <Radio :value="3">C</Radio>
                <Radio :value="4">D</Radio>
            </RadioGroup>
        </section>
        <section class="sector">
            <h3>多选</h3>
            <Checkbox
                :indeterminate="indeterminate"
                @change="onCheckAllChange"
                :checked="checkAll"
            >Check all</Checkbox>
            <br />
            <checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange" />
        </section>
        <section class="sector">
            <h3>开关</h3>
            <jt-switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        </section>
        <section class="sector">
            <h3>输入框</h3>
            <jt-input placeholder="Basic usage" />
            <jt-input size="small" placeholder="small size" />
        </section>
        <section class="sector">
            <h3>搜索框</h3>
            <jt-input-search
                placeholder="input search text"
                style="width: 200px"
                @search="onSearch"
            />
            <jt-input placeholder="Basic usage" ref="userNameInput" style="width: 200px">
                <jt-tooltip slot="suffix" title="Extra information">
                    <span class="iconfont iconsousuo" @click="onSearchInput"></span>
                </jt-tooltip>
            </jt-input>
            <br />
            <jt-input-group compact>
                <jt-select style="width: 20%" defaultValue="Option1-1">
                    <jt-select-option value="Option1-1">Option1-1</jt-select-option>
                    <jt-select-option value="Option1-2">Option1-2</jt-select-option>
                </jt-select>
                <jt-input-search style="width: 30%" placeholder="input search text" />
            </jt-input-group>
        </section>
        <section class="sector">
            <h3>选择器</h3>
            <jt-select defaultValue="lucy" style="width: 120px">
                <jt-select-option value="jack">Jack</jt-select-option>
                <jt-select-option value="lucy">Lucy</jt-select-option>
                <jt-select-option value="disabled" disabled>Disabled</jt-select-option>
                <jt-select-option value="Yiminghe">yiminghe</jt-select-option>
            </jt-select>
            <jt-select defaultValue="lucy" style="width: 120px" disabled>
                <jt-select-option value="lucy">Lucy</jt-select-option>
            </jt-select>
            <jt-select
                mode="multiple"
                style="width: 100%"
                placeholder="select one country"
                v-model="value"
                optionLabelProp="label"
            >
                <jt-select-option value="china" label="China">
                    <span role="img" aria-label="China">🇨🇳</span>
                    China (中国)
                </jt-select-option>
                <jt-select-option value="usa" label="USA">
                    <span role="img" aria-label="USA">🇺🇸</span>
                    USA (美国)
                </jt-select-option>
                <jt-select-option value="japan" label="Japan">
                    <span role="img" aria-label="Japan">🇯🇵</span>
                    Japan (日本)
                </jt-select-option>
                <jt-select-option value="korea" label="Korea">
                    <span role="img" aria-label="Korea">🇰🇷</span>
                    Korea (韩国)
                </jt-select-option>
            </jt-select>
        </section>
        <section class="sector">
            <h3>日期选择器</h3>
            <jt-date-picker @change="onChange" />
            <br />
            <jt-month-picker @change="onChange" placeholder="Select month" />
            <br />
            <jt-range-picker @change="onChange" separator="-" />
            <br />
            <jt-range-picker @change="onChange" separator="-">
                <jt-icon slot="suffixIcon" type="calendar" />
            </jt-range-picker>
            <br />
            <jt-week-picker @change="onChange" placeholder="Select week" />
        </section>
        <section class="sector">
            <h3>时间选择器</h3>
            <jt-time-picker @change="onChange" />
            <jt-date-picker @change="onChange" showTime />
        </section>
        <section class="sector">
            <h3>穿梭框</h3>
            <jt-transfer
                :dataSource="mockData"
                :titles="['列表1', '列表2']"
                :targetKeys="targetKeys"
                :selectedKeys="selectedKeys"
                @change="handleChange"
                @selectChange="handleSelectChange"
                @scroll="handleScroll"
                :render="item => item.title"
                :disabled="disabled"
            />
            <jt-switch
                unCheckedChildren="enabled"
                checkedChildren="disabled"
                :checked="disabled"
                @change="handleDisable"
                style="margin-top: 16px"
            />
            <jt-transfer
                :dataSource="mockData2"
                showSearch
                :listStyle="{
                    width: '250px',
                    height: '300px',
                }"
                :operations="['to right', 'to left']"
                :targetKeys="targetKeys2"
                @change="handleChange2"
                :render="item => `${item.title}-${item.description}`"
            >
                <jt-button
                    size="small"
                    style="float:right;margin: 5px"
                    @click="getMock"
                    slot="footer"
                >reload</jt-button>
                <span slot="notFoundContent">没数据</span>
            </jt-transfer>
        </section>
        <section class="sector">
            <h3>滑动条</h3>
            <div class="sector-slider">
                <jt-slider :marks="marks" id="test" :defaultValue="30" :disabled="disabled" />
                <jt-slider range :defaultValue="[20, 50]" :disabled="disabled" />Disabled:
                <jt-switch size="small" :checked="disabled" @change="handleDisabledChange" />
            </div>
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
.sector-slider {
    width: 100%;
    padding: 20px;
    h4 {
        margin: 0 0 16px;
    }
    .ant-slider-with-marks {
        margin-bottom: 44px;
    }
}
.ant-input-affix-wrapper {
    .ant-input-suffix {
        .iconfont:hover {
            color: @jt-color-primary;
        }
    }
}
</style>
<script>
import {
    Radio,
    Checkbox,
    Switch,
    Select,
    DatePicker,
    TimePicker,
    Transfer,
    Slider
} from "ant-design-vue";
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];
const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1
    });
}

const oriTargetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);
export default {
    components: {
        Radio,
        RadioGroup: Radio.Group,
        Checkbox,
        "checkbox-group": Checkbox.Group,
        "jt-switch": Switch,
        "jt-select": Select,
        "jt-select-option": Select.Option,
        "jt-date-picker": DatePicker,
        "jt-month-picker": DatePicker.MonthPicker,
        "jt-week-picker": DatePicker.WeekPicker,
        "jt-range-picker": DatePicker.RangePicker,
        "jt-time-picker": TimePicker,
        "jt-transfer": Transfer,
        "jt-slider": Slider
    },
    data() {
        return {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
            plainOptions,
            value: ["china"],
            mockData,
            targetKeys: oriTargetKeys,
            selectedKeys: ["1", "4"],
            disabled: false,
            mockData2: [],
            targetKeys2: [],
            marks: {
                0: "0GB",
                26: "26GB",
                37: "37GB",
                100: {
                    /* style: {
                        color: "#f50"
                    }, */
                    label: <strong>100GB</strong>
                }
            }
        };
    },
    mounted() {
        this.getMock();
    },
    methods: {
        onSearchInput() {
            console.log(this.$refs.userNameInput.value);
        },
        onSearch(value) {
            console.log(value);
        },
        onChange(checkedList) {
            this.indeterminate =
                !!checkedList.length &&
                checkedList.length < plainOptions.length;
            this.checkAll = checkedList.length === plainOptions.length;
        },
        onCheckAllChange(e) {
            Object.assign(this, {
                checkedList: e.target.checked ? plainOptions : [],
                indeterminate: false,
                checkAll: e.target.checked
            });
        },
        handleChange(nextTargetKeys, direction, moveKeys) {
            this.targetKeys = nextTargetKeys;

            console.log("targetKeys: ", nextTargetKeys);
            console.log("direction: ", direction);
            console.log("moveKeys: ", moveKeys);
        },
        handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
            this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];

            console.log("sourceSelectedKeys: ", sourceSelectedKeys);
            console.log("targetSelectedKeys: ", targetSelectedKeys);
        },
        handleScroll(direction, e) {
            console.log("direction:", direction);
            console.log("target:", e.target);
        },
        handleDisable(disabled) {
            this.disabled = disabled;
        },
        getMock() {
            const targetKeys = [];
            const mockData = [];
            for (let i = 0; i < 20; i++) {
                const data = {
                    key: i.toString(),
                    title: `content${i + 1}`,
                    description: `description of content${i + 1}`,
                    chosen: Math.random() * 2 > 1
                };
                if (data.chosen) {
                    targetKeys.push(data.key);
                }
                mockData.push(data);
            }
            this.mockData2 = mockData;
            this.targetKeys = targetKeys;
        },
        handleChange2(targetKeys, direction, moveKeys) {
            console.log(targetKeys, direction, moveKeys);
            this.targetKeys2 = targetKeys;
        },
        handleDisabledChange(disabled) {
            this.disabled = disabled;
        }
    },
    name: "DataEntry"
};
</script>
