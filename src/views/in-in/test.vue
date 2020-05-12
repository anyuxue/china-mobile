<template>
    <section class="content">
        <div class="demoControl">
            <div class="btns">
                <h1>接口公共服务使用文档</h1>
                <Button v-on:click="testGet" size="large">Get方法测试</Button>
                <Button v-on:click="testDelete" size="large">Delete方法测试</Button>
                <br>
                <Button v-on:click="testPost" size="large">Post方法测试</Button>
                <Button v-on:click="testPut" size="large">Put方法测试</Button>
            </div>
            <div class="result">
                <span style="">{{ message }}</span>
            </div>
        </div>
        <br /><hr />
        <div class="demoSource">
            <pre>
                <span style="color: blue;">GET方法调用代码</span>
                testGet()
                    this.message = this.message.split('').reverse().join('');
                    const url = 'http://192.168.235.125:8082/api/pms/server/hosts/biz/100';
                    const headers = {"BK_USER": "admin"};
                    const params = {
                        "id": "1031",
                        "name": "1031"
                    };
                    this.$api.get(url, params, headers, response => {
                        this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
                    });
                }
            </pre>
            <pre>
                <span style="color: blue;">DELETE方法调用代码</span>
                testDelete() {
                    const url = 'http://192.168.235.125:8082/api/pms/server/biz/80';
                    const headers = {};
                    const params = {
                        "id": "194",
                        "name": "194"
                    };
                    this.$api.delete(url, params, headers, response => {
                        this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
                    });
                }
            </pre>
            <pre>
                <span style="color: blue;">POST方法调用代码</span>
                testPost() {
                    const url = 'http://192.168.235.125:8082/api/pms/server/biz/data';
                    const headers = {};
                    const params = {
                        "id": "103",
                        "name": "第二名称1"
                    };
                    this.$api.post(url, params, headers, response => {
                        console.log(params);
                        this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
                    });
                }
            </pre>
            <pre>
                <span style="color: blue;">PUT方法调用代码</span>
                testPut() {
                    const url = 'http://192.168.235.125:8082/api/pms/server/biz';
                    const headers = {};
                    const params = {
                        "id": "103",
                        "name": "第二名称1"
                    };
                    this.$api.put(url, params, headers, response => {
                        this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
                    });
                }
            </pre>
        </div>
    </section>
</template>

<style lang="less" scoped>
    .content {
        padding: 10px;
    }
    .demoControl {
        display: flex;
        flex-flow: row wrap;
    }
    .btns {
        text-align: center;
        margin: 10px 10px 10px 10px;
        button {    
            margin: 8px;
        };
    }
    .result {
        padding: 20px;
        margin: 10px 10px 10px 100px;
        color: red;
        height: 200px;
        width: 600px;
    }
    .demoSource {
        height: 400px;
        overflow-y: scroll;
        margin: 30px 20px 0 20px;
    }
</style>

<script>
import Vue from 'vue'
import Api from '../../utils/http.js';
import { Button, ConfigProvider } from "ant-design-vue";

Vue.prototype.$api = Api;

export default {
    name: 'test',
    data() {
        return {
            message: '这里显示接口调用返回结果！！!'
        };
    },
    components: {
        Button
    },
    methods: {
        testGet() {
            const url = 'http://192.168.235.125:8082/api/pms/server/hosts/biz/100';
            const headers = {"BK_USER": "admin"};
            const params = {
                "id": "1031",
                "name": "1031"
            };
            this.$api.get(url, params, headers, response => {
                this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
            });
        },
        testDelete() {
            const url = 'http://192.168.235.125:8082/api/pms/server/biz/80';
            const headers = {};
            const params = {
                "id": "194",
                "name": "194"
            };
            this.$api.delete(url, params, headers, response => {
                this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
            });
        },
        testPost() {
            const url = 'http://192.168.235.125:8082/api/pms/server/biz/data';
            const headers = {};
            const params = {
                "id": "103",
                "name": "第二名称1"
            };
            this.$api.post(url, params, headers, response => {
                console.log(params);
                this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
            });
        },
        testPut() {
            const url = 'http://192.168.235.125:8082/api/pms/server/biz';
            const headers = {};
            const params = {
                "id": "103",
                "name": "第二名称1"
            };
            this.$api.put(url, params, headers, response => {
                this.message = response.data.resultHeader.resultCode + '@' + response.data.resultHeader.resultMessage;
            });
        },
    }
}
</script>