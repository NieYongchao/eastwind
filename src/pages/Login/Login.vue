<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">EastWind</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{ on: flag }" @click="flag = true"
            >短信登录</a
          >
          <a href="javascript:;" :class="{ on: !flag }" @click="flag = false"
            >密码登录</a
          >
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{ on: flag }">
            <section class="login_message">
              <input
                type="text"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
              />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{ right_phone: rightPhone }"
                @click.prevent="getCode"
              >
                获取验证码
              </button>
            </section>
            <section class="login_verification">
              <input
                type="text"
                maxlength="8"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: !flag }">
            <section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                  v-model="name"
                />
              </section>
              <section class="login_verification">
                <input
                  type="text"
                  maxlength="8"
                  placeholder="密码"
                  v-if="showPwd"
                  v-model="pwd"
                />
                <input
                  type="password"
                  maxlength="8"
                  placeholder="密码"
                  v-else
                  v-model="pwd"
                />
                <div
                  class="switch_button"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div class="switch_circle" :class="{ right: showPwd }"></div>
                  <span class="switch_text">{{ showPwd ? "abc" : "..." }}</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="验证码"
                  v-model="captcha"
                />
                <img
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click="getCaptcha"
                  ref="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-back"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="showAlert" @closeTip="close" />
  </section>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip";
import { reqSendCode, reqSmsLogin, reqPwdLogin } from "../../api";
export default {
  data() {
    return {
      flag: true, // true短信登录  false密码登录
      countDown: 0, //验证码倒计时
      showPwd: false, //是否显示密码
      phone: "", //手机号
      code: "", //验证码
      name: "", //用户名
      pwd: "", //密码
      captcha: "", //图形验证码
      alertText: "", //提示文本
      showAlert: false, //是否显示提示框 默认不显示
    };
  },
  computed: {
    rightPhone() {
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone);
    },
  },
  methods: {
    // 获取验证码
    async getCode() {
      // 如果当前没有计时
      if (!this.countDown) {
        // 启动倒计时30s
        this.countDown = 30;
        this.intervalId = setInterval(() => {
          this.countDown--;
          console.log(this.countDown);
          if (this.countDown <= 0) {
            clearInterval(this.intervalId);
          }
        }, 1000);
        // 发送请求获取验证码
        let result = await reqSendCode(this.phone);
        if (result.code == 1) {
          this.alertShow(result.msg);
          if (this.countDown) {
            this.countDown = 0;
            clearInterval(this.intervalId);
            this.intervalId = undefined;
          }
        }
      }
    },
    // 显示弹窗
    alertShow(alertText) {
      this.showAlert = true;
      this.alertText = alertText;
    },
    // 关闭弹窗
    close() {
      this.showAlert = false;
      this.alertText = "";
    },
    // 登录
    async login() {
      // 前台表单验证
      let result; //用来保存成功返回的用户数据
      if (this.flag) {
        // 短信登录验证
        if (!this.rightPhone) {
          //手机号不正确
          this.alertShow("请检查手机号码是否正确");
          return;
        } else if (!/^\d{6}$/.test(this.code)) {
          // 验证码是否为6个数字
          this.alertShow("验证码不正确");
          return;
        }
        // 发送短信登录请求
        result = await reqSmsLogin(this.phone, this.code);
      } else {
        // 用户名登录验证
        let { name, pwd, captcha } = this;
        if (!this.name) {
          //用户名
          this.alertShow("用户名必须输入");
          return;
        } else if (!this.pwd) {
          // 密码
          this.alertShow("密码必须输入");
          return;
        } else if (!this.captcha) {
          // 验证码
          this.alertShow("验证码必须输入");
          return;
        }
        // 发送密码登录请求
        result = await reqPwdLogin({ name, pwd, captcha });
      }
      // 停止计时器
      if (this.countDown) {
        this.countDown = 0;
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
      // 根据result进行处理
      if(result.code==0){
        // 保存用户信息
        let user = result.data
        this.$store.dispatch('recordUser', user)
        this.$router.replace('/user')
      } else {
        // 登录失败显示新的验证码
        this.getCaptcha()
        this.alertShow(result.msg)
      }
    },
    // 点击获取新的图片验证码
    getCaptcha() {
      this.$refs.captcha.src = "http://localhost:4000/captcha?time" + Date.now();
    },
  },
  components: {
    AlertTip,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import url('//at.alicdn.com/t/font_2001281_jn4p81ikcwr.css');
@import "../../common/stylus/mixins.styl";
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #4e6ef2
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #4e6ef2
            font-weight 700
            border-bottom 2px solid #4e6ef2
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #4e6ef2
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right_phone
                color black
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color .3s,border-color .3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #4e6ef2
              >.switch_circle
                //transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
                &.right
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #4e6ef2
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4e6ef2
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 10px
      left 10px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>
