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
                <el-button type="success" class="block" @click="GetCode()">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="submitForm('ruleForm')" class="block" id="blocktred" :disabled="loginButtonStatus">{{mode ==="login" ? '登录' :'注册'}}</el-button>
          </el-form-item>
          </el-form>
      </div>
    </div>
</template>
<script>
import { GetSms } from '@/api/login'
import { reactive,ref,isRef,toRefs,onMounted } from '@vue/composition-api'
import { stripscript,validateEmail,validatePwd,validateCd } from '@/utils/validate.js'
export default {
    // setup(prop,context){
    setup(prop,{ refs,root }){
      // console.log(context)
      // attrs: (...)  this.$attrs
      // emit: (...)    this.$emit
      // isServer: (...)  this.$iServer
      // listeners: (...) this.$Listeners
      // parent: (...)  this.$parent
      // refs: (...) this.$refs
      // root: (...) this
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
      ruleForm.password=stripscript(value)
       value=ruleForm.password 
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
        if(mode.value=='login'){callback()}
        //过滤后的数据
       ruleForm.passwords=stripscript(value)
       value=ruleForm.passwords 
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value!=ruleForm.password) {
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
      /**
       * 这里面放置data数据，生命周期，自定义的函数
       */
     const menuTab=reactive([
          {txt:'登录',current:true,type:'login'},
          {txt:'注册',current:false,type:'register'}
        ])
      //模块值
      const mode=ref('login') 
      //登录按钮禁用状态
      const loginButtonStatus=ref(true)
      /**
       * 验证规则
       */
      const ruleForm=reactive({
          username: '',
          password: '',
          passwords:'',
          code: '' 
        })
       const rules=reactive({
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
        })


      /**
       * 声明函数
       *
       */
       const toggleMenu=(data=>{
         mode.value=data.type
        menuTab.forEach(elme=>{
          elme.current=false
        })
        data.current=true
       })
     const submitForm=(formName=>{
       refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
     })
     const GetCode=(()=>{
       //进行提示
      //  if(ruleForm.username == ''){
      //    root.$message.error('邮箱不能为空！');
      //    return false
      //  }
       //请求的接口
       GetSms({username:ruleForm.username}).then(response=>{
         console.log(response)
       }).catch(error=>{
         console.log(error);
         
       })
     })   
      return{
      menuTab,mode,loginButtonStatus,ruleForm,rules,toggleMenu,submitForm,GetCode

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