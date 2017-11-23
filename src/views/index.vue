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
    .layout-nav{
        width: 420px;
        margin: 0;
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
</style>
<template>
<div class="layout">
        <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-nav">
                <MenuItem class="ivu-custom-header">
                    <Icon type="ios-speedometer"></Icon>
                    <span>MIP PlatForm</span>
                </MenuItem>
            </div>
        </Menu>
        <div class="layout-content">
            <div class="layout-content-main">
                <Row>
                    <Col span="16" offset="4">
                        <Form :model="formItem" :label-width="80" class="ivu-custom-form">
                            <FormItem label="部署路径">
                                <Input v-model="formItem.input" placeholder="部署路径"></Input>
                            </FormItem>
                            <FormItem label="上线分支">
                                <Select v-model="formItem.select">
                                    <Option value="beijing">v0.0.1</Option>
                                    <Option value="shanghai">v0.0.2</Option>
                                    <Option value="shenzhen">v0.0.3</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="机器列表">
                                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 10,maxRows: 15}" placeholder="部署机器列表，多机器换行隔开"></Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary">Submit</Button>
                                <Button type="primary">开始同步</Button>
                                <Button type="warning">开始上线</Button>
                                <Button type="warning">回滚</Button>
                            </FormItem>
                        </Form>
                    
                    </Col>
                </Row>
            </div>
        </div>
        <div class="layout-copy">
            2017 &copy; MIP
        </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    textarea: ''
                }
            }
        }
    };
</script>