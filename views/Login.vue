<template>
  <div>
    <div class="login">
      <p>魔猴账号登录</p>
      <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title">
          <li class="layui-this">短信验证登录</li>
          <li>账号密码登录</li>
        </ul>
        <div class="layui-tab-content" style="height: 320px;">
          <div class="layui-tab-item layui-show">
            <div class="note">
              <div>
                <input
                  type="tel"
                  name="phone"
                  lay-verify="required|phone"
                  autocomplete="off"
                  class="layui-input"
                  placeholder="请输入手机号"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  lay-verify="required|number"
                  autocomplete="off"
                  class="layui-input"
                  placeholder="图片验证码"
                />
                <img src="../assets/images/login/yzm.png" alt />
                <a href>换一张</a>
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  lay-verify="required|number"
                  autocomplete="off"
                  class="layui-input"
                  placeholder="验证码"
                />
                <a href>
                  <div>获取验证码</div>
                </a>
              </div>
              <button type="button" class="layui-btn layui-btn-normal layui-btn-lg">立即登录</button>
            </div>
          </div>
          <div class="layui-tab-item">
            <div class="account">
              <div>
                <input
                  type="tel"
                  name="phone"
                  lay-verify="required|phone"
                  autocomplete="off"
                  class="layui-input"
                  placeholder="请输入手机号/邮箱"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  lay-verify="pass"
                  placeholder="请输入密码"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
              <button type="button" class="layui-btn layui-btn-normal layui-btn-lg" @click="show">立即登录</button>
              <div class="layui-input-block">
                <input type="checkbox" name="like1[write]" lay-skin="primary" title checked />
                <a href>自动登录</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login_buttom">
        <div>
          <div></div>
          <a href>其他方式登录</a>
          <div></div>
        </div>
        <div>
          <a href>
            <img src="../assets/images/qq.png" alt />
          </a>
          <a href>
            <img src="../assets/images/weixin.png" alt />
          </a>
          <a href>
            <img src="../assets/images/weibo.png" alt />
          </a>
        </div>
        <a href="/register">注册账户</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginName',
  mounted() {
    layui.use("element", function () {
      var element = layui.element;
      console.log(element);
      //获取hash来切换选项卡，假设当前地址的hash为lay-id对应的值
      var layid = location.hash.replace(/^#test1=/, "");
      element.tabChange("test1", layid); //假设当前地址为：http://a.com#test1=222，那么选项卡会自动切换到“发送消息”这一项
      //监听Tab切换，以改变地址hash值
      element.on("tab(test1)", function () {
        location.hash = "test1=" + this.getAttribute("lay-id");
      });
    });
  },
  methods:{
    show(){
      //  this.$router.push('/')
      const { href } = this.$router.resolve({
        path: '/'
      });
      window.open(href, '_blank');
    }
  }
};
</script>

<style scoped>
@import "../assets/css/login.css";
.layui-input-block {
  margin-left: 0;
  margin-top: 15px;
}
</style>