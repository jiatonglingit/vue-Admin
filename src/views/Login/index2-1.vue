<template>
    <div id="login">
      <div class="login-warp">
        <ul class="menu-tab">
          <li v-for="(item,index) in menuTab" :key="index" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
        </ul>
        <!-- 表单区域 -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-form" size="medium">
          <el-form-item prop="username" class="item-form">
            <label>邮箱</label>
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="item-form">
            <label>密码</label>
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="passwords" class="item-form" v-show="mode ==='register'">
            <label>重复密码</label>
            <el-input type="password" v-model="ruleForm.passwords" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="code" class="item-form">
            <label>验证码</label>
            <el-row :gutter="10">
              <el-col :span="15">
            <el-input v-model.number="ruleForm.code"></el-input>
              </el-col>
              <el-col :span="9">
                <el-button type="success" class="block">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="submitForm('ruleForm')" class="block" id="blocktred">提交</el-button>
          </el-form-item>
          </el-form>
      </div>
    </div>
</template>
<script>
import { stripscript,validateEmail,validatePwd,validateCd } from '@/uitls/validate.js'
export default {
    data(){
      //验证用户名
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        }else if(validateEmail(value)){
          callback(new Error('邮箱输入格式有误'));
        } else {
          callback();
        }
      };
      //验证密码
      var validatePassword = (rule, value, callback) => {
        //过滤后的数据
       this.ruleForm.password=stripscript(value)
       value=this.ruleForm.password 
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (validatePwd(value)) {
          callback(new Error('密码为6-20的数字加字母'));
        } else {
          callback();
        }
      };
      //验证重复密码
      var validatePasswords = (rule, value, callback) => {
        if(this.mode=='login'){callback()}
        //过滤后的数据
       this.ruleForm.passwords=stripscript(value)
       value=this.ruleForm.passwords 
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value!=this.ruleForm.password) {
          callback(new Error('两次密码输入不一致'));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === ''){
           callback(new Error('验证码不能为空'));
        }else if(validateCd(value)){
           callback(new Error('验证码为6位数'));
        }else{
          callback()
        }
      };
      return{
        menuTab:[
          {txt:'登录',current:true,type:'login'},
          {txt:'注册',current:false,type:'register'}
        ],
         ruleForm: {
          username: '',
          password: '',
          passwords:'',
          code: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
           passwords: [
            { validator: validatePasswords, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        },
        mode:'login'
    
      }
    },
    created(){},
    methods:{
      toggleMenu(data){
        // console.log(data)
        this.mode=data.type
        this.menuTab.forEach(elme=>{
          elme.current=false
        })
        data.current=true
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
    
}
</script>
<style lang="scss" scoped>
#login{
  height:100vh;
  background-color:#344a5f
}
.login-warp{
  width: 330px;
  margin: auto;
}
.menu-tab{
text-align: center;
li{
  display: inline-block;
  width: 88px;
  line-height: 36px;
  font-size: 14px;
  color: white;
  border-radius: 2px;
  cursor: pointer;
}
.current{
  background: rgba(0, 0, 0, 0.1);
}
}
.login-form{
  margin-top: 29px;
  label{
    display: block;
    font-size: 14px;
    color: white;
  }
  .item-form{
    margin-bottom: 13px;
  }
  .block{
    display: block;
    width: 100%;
  }
  #blocktred{
    margin-top:10px ;
  }
}
</style>