<template>
  <div>
    <table></table>
    <div class="register">
      <p>注册魔猴账号</p>
      <div>
        <input
          type="tel"
          name="names"
          lay-verify="required|phone"
          autocomplete="off"
          class="layui-input"
          placeholder="请输入您的姓名"
          v-model="name"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          lay-verify="required|phone"
          autocomplete="off"
          class="layui-input"
          placeholder="请输入常用手机号码"
          @blur="phone1"
          @focus="phone2"
          v-model="phone"
        />
        <span class="span">{{value}}</span>
      </div>
      <div>
        <input
          type="text"
          name="number"
          lay-verify="required|number"
          autocomplete="off"
          class="layui-input"
          placeholder="图片验证码"
          v-model="yan"
        />
        <img src="../assets/images/login/yzm.png" alt="">
        <a href>换一张</a>
      </div>
      <div>
        <input
          type="text"
          name="number"
          lay-verify="required|number"
          autocomplete="off"
          class="layui-input"
          placeholder="请输入短信验证码"
          v-model="ha"
        />
        <a href>
          <div>获取验证码</div>
        </a>
      </div>
      <div>
        <input
          type="password"
          name="password"
          lay-verify="pass"
          placeholder="请输入密码"
          autocomplete="off"
          class="layui-input"
          v-model="passw"
          @blur="pass"
          @focus="pass1;"
        />
        <span class="span">{{value1}}</span>
      </div>
      <button type="button" class="layui-btn layui-btn-normal layui-btn-lg" @click="zhuce">立即注册</button>
      <div>
        <p>
          点击“立即注册”,即表示您同意并愿意遵守《
          <a>魔猴服务协议</a> 》
        </p>
      </div>
      <div>
        <span>已有账户，</span>
        <router-link to="/login">直接登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginName from "../views/Login";
export default {
  components: { LoginName },
  name: "navShow",
  data() {
    return {
      phone: "",
      passw: "",
      name: "",
      yan: "",
      ha: "",
      value:'',
      value1:''
    };
  },
  methods: {
    zhuce() {
      this.axios
        .post(
          "ajax/zhuce",
          `phone=${this.phone}&upwd=${this.passw}&uname=${this.name}`
        )
        .then((res) => {
          alert(res.data);
            this.passw = "",
            this.phone = "",
            this.name = "",
            this.yan = "",
            this.ha = "";
        });
    },
    phone2(){
      this.value=''
    },
    phone1() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.value='请输入正常手机号'
        return;
      } else {
        this.axios.get("ajax/zhu?phone=" + this.phone).then((res) => {
          console.log(res.data);
          if (res.data == "1") {
            this.value="手机号已经注册";
            return;
          }
        });
      }
    },
    pass1(){
      this.value1=""
    },
    pass() {
      console.log(this.passw);
      if (this.passw == '') {
        this.value1="密码为空"
      } else if (this.passw.length < 8) {
        this.value1="请输入8位以上密码"
      }
    },
  },
};
</script>
<style scoped>
@import "../assets/css/register.css";
</style>