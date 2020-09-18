<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/images/mh-logo.jpg" alt />
      </router-link>
    </div>
    <div>
      <div id="app">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#333"
          active-text-color="#666"
        >
          <el-submenu index="1">
            <template slot="title">
              <router-link class="a_style" to="/offer">在线报价</router-link>
            </template>
            <el-menu-item index="1-1">开始打印</el-menu-item>
            <el-menu-item index="1-2">3D扫描一口价</el-menu-item>
            <el-menu-item index="1-3">开始建模</el-menu-item>
            <el-menu-item index="1-4">支持打印材料</el-menu-item>
            <el-menu-item index="1-5">小批量制造</el-menu-item>
            <el-menu-item index="1-6">打印必读</el-menu-item>
            <el-menu-item index="1-7">保密承诺</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <router-link class="a_style" to="/business">行业案例</router-link>
            </template>
            <el-menu-item index="2-1">视频案例</el-menu-item>
            <el-menu-item index="2-2">行业案例</el-menu-item>
            <el-menu-item index="2-3">开始3D打印</el-menu-item>
            <el-menu-item index="2-4">3D扫描一口价</el-menu-item>
            <el-menu-item index="2-5">开始建模</el-menu-item>
            <el-menu-item index="2-6">支持打印材料</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" class="aaa">
            <router-link class="a_style" to="/kehu">客户说</router-link>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <router-link class="a_style" to="/resource">资源</router-link>
            </template>
            <el-menu-item index="4-1">咨询</el-menu-item>
            <el-menu-item index="4-2">问答</el-menu-item>
            <el-menu-item index="4-3">设备库</el-menu-item>
            <el-menu-item index="4-1">知识堂</el-menu-item>
            <el-menu-item index="4-2">3D模型库</el-menu-item>
            <el-menu-item index="4-3">3D工具</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <router-link class="a_style" to="/vip">优惠</router-link>
            </template>
            <el-menu-item index="5-1">会员优惠</el-menu-item>
            <el-menu-item index="5-2">积分换购</el-menu-item>
            <el-menu-item index="5-3">魔猴支付</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <router-link class="a_style" to="/mme">魔猴教育</router-link>
            </template>
            <el-menu-item index="6-1">3D打印教育解决方案</el-menu-item>
            <el-menu-item index="6-2">E200教育3D打印机</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <!-- <div class="nav">
      <router-link class="a_style" to="/offer">在线报价</router-link>
    </div>
    <div class="nav">
      <a class="a_style" href>行业案例</a>
    </div>
    <div class="nav">
      <a class="a_style" href>客户说</a>
    </div>
    <div class="nav">
      <a class="a_style" href>资源</a>
    </div>
    <div class="nav">
      <router-link class="a_style" to="/vip">优惠</router-link>
    </div>
    <div class="nav">
      <router-link class="a_style" to="/mme">魔猴教育</router-link>
      </div>-->
    </div>

    <div class="fdj">
      <a href>
        <img src="../assets/images/fdj.png" alt />
      </a>
    </div>
    <div class="shopcart">
      <a href>
        <img src="../assets/images/shopcart.png" alt />
      </a>
    </div>
    <div class="log">
      <el-button round @click="submitForm()">登录</el-button>
      <el-dialog :visible.sync="dialogTableVisible"  center :append-to-body="true" width="600px">
        <login-name></login-name>
      </el-dialog>

      <!-- <el-button type="text" @click="open">登录</el-button> -->
      <!-- <router-link class="a_css" to="/login">登陆</router-link> -->
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
      activeIndex: "1",
      dialogTableVisible: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    submitForm() {
      this.dialogTableVisible = true; //默认页面不显示为false,点击按钮将这个属性变成true
    },
  },
};
</script>

<style>
#app {
  width: 900px !important;
  margin-left: 40px;
}
.header .el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-submenu__title {
  padding: 8px 20px !important;
}
.aaa {
  line-height: 75px !important;
  color: #777;
}
.el-menu-item.is-active {
  border-bottom: none !important;
}
.el-menu.el-menu--horizontal {
  line-height: 75px !important;
  border-bottom: none;
}
.el-submenu__title {
  border-bottom: none !important;
}
</style>