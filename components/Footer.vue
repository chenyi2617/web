<template>
  <div class="footer">
    <div class="top">
      <ul>
        <li>
          <h3>与我们互动</h3>
          <ul>
            <div class="image">
              <a href>
                <img :src="wxIMG" @mouseenter="changeImg(1)" @mouseleave="changeImgBack(1)" alt />
              </a>
              <a href>
                <img :src="wbIMG" @mouseover="changeImg(2)" @mouseout="changeImgBack(2)" alt />
              </a>
            </div>
            <div class="image">
              <a href>
                <img :src="qqIMG" @mouseover="changeImg(3)" @mouseout="changeImgBack(3)" alt />
              </a>
              <a href>
                <img :src="phoneIMG" @mouseover="changeImg(4)" @mouseout="changeImgBack(4)" alt />
              </a>
            </div>
          </ul>
        </li>
        <li>
          <a href></a>
          <h3>业务网络</h3>
          <ul>
            <li>
              <a href>3D打印服务</a>
            </li>
            <li>
              <a href>3D打印教育</a>
            </li>
            <li>
              <a href>增材制造中心</a>
            </li>
            <li>
              <a href>会员体系</a>
            </li>
            <li>
              <a href>Mohou English</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>公司介绍</h3>
          <ul>
            <li>
              <a href>关于我们</a>
            </li>
            <li>
              <a href>网站地图</a>
            </li>
            <li>
              <a href>服务条款</a>
            </li>
            <li>
              <a href>隐私条款</a>
            </li>
            <li>
              <a href>版权声明</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>3D打印文档</h3>
          <ul>
            <li>
              <a href>材料指南</a>
            </li>
            <li>
              <a href>精华帖集合</a>
            </li>
            <li>
              <a href>材料一览表</a>
            </li>
            <li>
              <a href>成功案例</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>联系我们</h3>
          <ul>
            <li>
              <a href>企业招聘</a>
            </li>
            <li>
              <a href>商务合作</a>
            </li>
            <li>
              <a href>媒体报道</a>
            </li>
            <li>
              <a href>投诉和建议</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="middle">
      <p>全国免费咨询热线</p>
      <p>4008-759-058</p>
      <img src="../assets/images/blue_call.png" alt />
    </div>
    <hr />
    <div class="bottom">
      <p>© 2013-2020 魔猴网（北京易速普瑞科技股份有限公司） ｜ 京ICP备13036976号-4 | 京公网安备 11010802030794号</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxIMG: require("../assets/images/weixin.png"),
      wxIMG_color: require("../assets/images/weixin_color.png"),
      wxIMG_back:require("../assets/images/weixin.png"),
      wbIMG: require("../assets/images/weibo.png"),
      wbIMG_color: require("../assets/images/weibo_color.png"),
      wbIMG_back:require("../assets/images/weibo.png"),
      qqIMG: require("../assets/images/qq.png"),
      qqIMG_color: require("../assets/images/qq_color.png"),
      qqIMG_back:require("../assets/images/qq.png"),
      phoneIMG: require("../assets/images/phone.png"),
      phoneIMG_color: require("../assets/images/phone_color.png"),
      phoneIMG_back:require("../assets/images/phone.png"),
    };
  },
  methods: {
    changeImg(index) {
      switch (index) {
        case 1:
          this.wxIMG = this.wxIMG_color;
          break;
        case 2:
          this.wbIMG = this.wbIMG_color;
          break;
        case 3:
          this.qqIMG = this.qqIMG_color;
          break;
        case 4:
          this.phoneIMG = this.phoneIMG_color;
          break;
      }
    },
    changeImgBack(index) {
      switch (index) {
        case 1:
          this.wxIMG = this.wxIMG_back;  
          break;
        case 2:
          this.wbIMG = this.wbIMG_back;
          break;
        case 3:
          this.qqIMG = this.qqIMG_back;
          break;
        case 4:
          this.phoneIMG = this.phoneIMG_back;
          break;
      }
    },
  },
};
</script>

<style>
</style>