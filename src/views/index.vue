<template>
<div class="layout">
        <Menu mode="horizontal" theme="light" active-name="2">
                <MenuItem class="ivu-custom-header"  name="1">
                    <Icon type="android-send"></Icon>
                    <span>{{title}}</span>
                </MenuItem>
        </Menu>
        <div class="layout-content">
            <div class="layout-content-main">
                <Row>
                    <Col span="16" offset="4">
                        <Form :label-width="80" class="ivu-custom-form" ref="ivu-form" enctype="application/x-www-form-urlencoded">
                            <FormItem label="部署路径" prop="formData.path">
                                <Input v-model="formData.path" placeholder="/home/work/platform"></Input>
                            </FormItem>
                            <FormItem label="分支选择" prop="formData.branch">
                                <Select v-model="formData.branch[0]">
                                    <Option v-for="v in formData.branch" :value="v" :key="v">{{v}}</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="机器列表" prop="formData.ips">
                                <Input v-model="formData.ips" type="textarea" :autosize="{minRows: 10,maxRows: 20}" placeholder="部署机器列表，多机器换行隔开"></Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="sync">上线</Button>
                                <Button type="warning">回滚</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="layout-copy">
            2017 &copy; {{title}}
        </div>
</div>
</template>
<script>
    export default {
        data: () => {
            return {
                name: "",
                title: "OLP",
                formData: {
                    path: '',
                    branch: ['请选择'],
                    ips: '',
                },
                ruleValidate: {
                    path: [
                        { required: true, message: '部署路径不能为空', trigger: 'blur',type: 'string'}
                    ],
                    branch: [
                        { required: true, message: '上线tag不能为空', trigger: 'blur' },
                        { type: 'string', message: '请填写正确的上线版本tag', trigger: 'blur' }
                    ],
                    ips: [
                        { required: true, message: '请按规则填写上线机器名', trigger: 'blur',type: 'string' }
                    ]
                }
                }
        },
        mounted: function() {
            // 获取tag列表
            axios.get('/api/tags').then(data => {
                let tagsData = data.data || {};
                let tags = tagsData.data || [];
                this.branch = tags;
            });
        },
        methods: {
            sync: function() {
                axios.post('/api/sync', this.formData).then(function (response) {
                    console.log(response);
                });
            }
        }
    };
</script>
<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        margin-top: 30px;
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 30px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .ivu-btn {
        margin-right: 15px;
    }
    .layout-content .ivu-custom-form{
        font-size: 14px!important;
    }
    .ivu-custom-header span{
        font-size: 18px;
    }
    .ivu-custom-header i{
        font-size: 30px;
        vertical-align: sub;
    }
</style>