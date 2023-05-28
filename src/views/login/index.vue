<template>
    <div class="app-container">
      <div>
        <div class="login-wrap">
          <div class="wrap-left" ref="wrapLeft" v-show="wrapLeftshow">
            <div class="login-top">
              <h3>登入账号</h3>
              <el-button class="loinicon iconfont icon-11qq" type="text"></el-button>
              <el-button class="loinicon iconfont icon-weixin3" type="text"></el-button>
              <p>选择登陆方式或电子邮箱登陆</p>
            </div>
            <div class="login-middle">
              <el-form label-position="left" label-width="80px" :model="loginForm">
                <el-form-item>
                  <el-input v-model="loginForm.userName" placeholder="用户名" class="loginInput"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input show-password="true" v-model="loginForm.passWord" placeholder="密码" class="loginInput"/>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="loginForm.verificationCode" placeholder="验证码" class="loginInput"/>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-bottom">
              <a>忘记密码</a>
              <el-button round class="login-btn" @click="" >LOGIN IN</el-button>
            </div>
          </div>
          <div class="wrap-right" v-show="wrapRightshow">
            <div class="login-top">
              <h3>注册账号</h3>
              <el-button class="loinicon iconfont icon-11qq" type="text"></el-button>
              <el-button class="loinicon iconfont icon-weixin3" type="text"></el-button>
            </div>
            <div class="login-middle">
              <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item>
                  <el-input v-model.number="registerForm.userName" placeholder="用户名" class="loginInput"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="password" v-model="registerForm.pass" placeholder="密码" autocomplete="off" class="loginInput"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="password" v-model="registerForm.checkPass" placeholder="确认密码" autocomplete="off" class="loginInput"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-bottom">
              <el-button round class="login-btn" @click="submitForm('ruleForm')">SIGN IN</el-button>
            </div>
          </div>
          <div class="swich-sign animated bounceInLeft" id="swichSign" v-show="swichSignshow">
            <div class="circle-top"></div>
            <div class="swich-wrap">
              <h3>hello friend</h3>
              <p>请注册账号成为会员</p>
              <el-button round class="login-btn swich" @click="swichSign">SIGN IN</el-button>
            </div>
            <div class="cricle-bottom"></div>
          </div>
          <div class="swich-login" ref="swichLogin" v-show="swichLoginshow">
            <div class="circle-top"></div>
            <div class="swich-wrap">
              <h3>hello friend</h3>
              <p>请登陆账号享受会员权益</p>
              <el-button round class="login-btn swich" @click="swichLogin">LOGIN IN</el-button>
            </div>
            <div class="cricle-bottom"></div>
          </div>
        </div>
      </div>
    </div>
</template>
import $ from 'jquery'
<script type="text/javascript">
export default{
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      wrapLeftshow: true,
      wrapRightshow: false,
      swichSignshow: true,
      swichLoginshow: false,
      labelPosition: 'right',
      loginForm: {
        userName: '',
        password: '',
        verificationCode: ''
      },
      registerForm: {
        pass: '',
        checkPass: '',
        userName: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userName: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    swichSign() {
      $('#swichSign').addClass('animated bounceOutLeft')
      let swichsignclass = document.getElementsByClassName('swich-sign')[0];
      swichsignclass.classList.add('animate__fadeOutTopRight')
      // oDialog.classList.remove('animate__zoomOut')
      // oDialog.classList.add('animate__zoomIn')
      // this.$refs.swichSign.add('animate__fadeOutTopRight')
      console.log('111', this.$refs.swichSign.style)
      // this.swichSignshow = false
      // this.wrapLeftshow = false
      // this.wrapRightshow = true
      // this.swichLoginshow = true
    },
    swichLogin() {
      this.swichSignshow = true
      this.wrapLeftshow = true
      this.wrapRightshow = false
      this.swichLoginshow = false
    }
  }
}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
.app-container {
  width: 100%;
  height: 100vh;
  //min-height: 100%;
  background-color: #ecf0f3;
  //border: 1px solid transparent;
  overflow: hidden;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  .login-wrap {
    width: 50%;
    height: 370px;
    margin: 100px auto;
    border-radius: 10px/10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    .wrap-left {
      border-right: 1px solid #d1d9e6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 60%;
      height: 100%;
      //left: 50%;
    }
    .wrap-right {
      width: 60%;
      height: 100%;
      border-left: 1px solid #d1d9e6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: calc(100% - 60%);
    }
    .swich-sign {
      width: 40%;
      height: 100%;
      //border: 1px solid red;
      position: absolute;
      left: calc(100% - 40%);
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      //padding: 50px;
      z-index: 200;
      transition: 1.25s;
      background-color: #ecf0f3;
      overflow: hidden;
      box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
      animation: 2s linear;
    }
    .swich-login {
      width: 40%;
      height: 100%;
      position: absolute;
      //left: calc(100% - 40%);
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      //padding: 50px;
      z-index: 200;
      transition: 1.25s;
      background-color: #ecf0f3;
      overflow: hidden;
      box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
    }
  }
  @keyframes move {
    from {
      left:calc(100% - 40%);
    }
    to {
      left: 200px;
    }
  }
  .login-top {
    margin-bottom: 10px;
    h3 {
      text-align: center;
    }
    p {
      font-size: 14px;
    }
    ::v-deep .el-button {
      padding: 5px 11px;
    }
  }
  .login-middle {
    ::v-deep .el-form-item {
      margin: 0;
    }
    ::v-deep .el-form-item__content {
      margin-left: 0 !important;
    }
    .loginInput {
      display: block;
      margin-bottom: 7px;
      width: 230px;
      font-size: 13px;
      letter-spacing: 0.15px;
      outline: none;
      ::v-deep .el-input__inner {
        background-color: #ecf0f3;
        border: none;
        border-radius: 8px;
        box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
        height: 36px;
        line-height: 36px;
      }

    }
  }
  .login-bottom {
    a {
      text-decoration-color: red;
      display: block;
      text-align: center;
      font-size: 13px;
      color: #181818;
      border-bottom: 1px solid #a0a5a8;
      margin-bottom: 10px;
    }
    .login-in {
      margin-top: 10px;
    }
  }
}
.swich-wrap {
  height: 150px;
  position: absolute;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p,h3 {
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
  }
}
.swich {
  margin: 5px 0;
}
.circle-top {
  height: 160px;
  width: 63%;
  border-radius: 0 0 50% 50%;
  line-height: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
  position: absolute;
  bottom: 80%;
  left: 0;
}
.cricle-bottom {
  height: 200px;
  width: 75%;
  border-radius: 50% 50% 0 0;
  line-height: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px -8px 12px #b8bec7, inset -8px 8px 12px #fff;
  position: absolute;
  bottom: -25%;
  left: 40%;
}
.loinicon {
  font-size: 25px;

}
.login-btn {
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
}
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0)
  }
}

</style>
