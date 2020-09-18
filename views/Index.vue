<template>
  <div class="index">
    <!-- 轮播图部分 -->
    <div class="banner">
      <div class="layui-carousel" id="test1">
        <div carousel-item>
          <div>
            <img src="../assets/images/banner_01.jpg" alt />
          </div>
          <div>
            <img src="../assets/images/banner_02.jpg" alt />
          </div>
          <div>
            <img src="../assets/images/banner_03.jpg" alt />
          </div>
          <div>
            <img src="../assets/images/banner_04.jpg" alt />
          </div>
          <div>
            <img src="../assets/images/banner_05.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 主要业务部分 -->
    <div class="primary">
      <p>主要业务</p>
      <div class="layui-row layui-col-space30">
        <div class="layui-col-md3">
          <a href>
            <div>
              <img src="../assets/images/primary_01.png" alt />
            </div>
            <h5>3D打印</h5>
            <p>
              399元/件标准价
              <br />微米精度从3cm到30米
              <br />德国蔡司工业级3D扫描仪
              <br />将您的实物快速扫描为3D文件
            </p>
          </a>
        </div>
        <div class="layui-col-md3">
          <a href>
            <div>
              <img src="../assets/images/primary_02.png" alt />
            </div>
            <h5>云3D打印</h5>
            <p>
              低至0.5元/克
              <br />10+专业后处理工艺
              <br />1分钟即时报价 自助下单
              <br />30+材料 塑料、金属、石蜡等
            </p>
          </a>
        </div>
        <div class="layui-col-md3">
          <a href>
            <div>
              <img src="../assets/images/primary_03.png" alt />
            </div>
            <h5>3D设计</h5>
            <p>
              专属设计师
              <br />全程客服沟通
              <br />支持各种CAD、3D软件
              <br />图纸、照片、实物均可3D建模
            </p>
          </a>
        </div>
        <div class="layui-col-md3">
          <a href>
            <div>
              <img src="../assets/images/primary_04.png" alt />
            </div>
            <h5>3D后处理</h5>
            <p>
              精细上色
              <br />电镀复模喷镀烤漆
              <br />产品级小批量试制
              <br />泡沫雕刻多种工程塑料可选
            </p>
          </a>
        </div>
      </div>
    </div>
    <hr />
    <!-- 行业案例部分 -->
    <!-- <div class="business">
      <p>行业案例</p>
      <a href>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/images/business_01.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/business_02.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/business_03.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/business_04.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/business_05.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/business_06.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/business_07.jpg" alt />
            </div> -->
            <!-- Add Pagination -->
            <!-- <div class="swiper-pagination"></div>
          </div>
        </div>
      </a>
      <a href>
        <div class="busbutton">查看更多案例</div>
      </a>
    </div>
    <hr /> -->
    <!-- 案例视频部分 -->
    <div class="videos">
      <p>案例视频</p>
      <div class="layui-row layui-col-space5">
        <div class="layui-col-md4">
          <div class="grid-demo grid-demo-bg1">
            <video controls muted loop preload="none" poster="../assets/images/poster01.png" src="http://172.18.31.205:5050/video/001.mp4" width="255px"></video>
          </div>
        </div>
        <div class="layui-col-md4">
          <div class="grid-demo">
            <video controls muted loop preload="none" poster="../assets/images/poster02.png" src="http://172.18.31.205:5050/video/002.mp4"></video>
          </div>
        </div>
        <div class="layui-col-md4">
          <div class="grid-demo grid-demo-bg1">
            <video controls muted loop preload="none" poster="../assets/images/poster03.png" src="http://172.18.31.205:5050/video/003.mp4"></video>
          </div>
        </div>
      </div>
    </div>
    <a href>
      <div class="busbutton">查看更多视频</div>
    </a>
    <hr />
    <!-- 3D打印教育解决方案部分 -->
    <div class="solution">
      <div>
        <img src="../assets/images/edu.png" alt />
      </div>
      <div>
        <h2>3D打印教育解决方案</h2>
        <p>产教融合，打造应用服务型专业</p>
        <p>创新基地，全套人才培养方案规划</p>
        <p>不断更新，实战型教学资源库</p>
        <p>平台软件，助力中国制造2025</p>
        <button type="button" class="layui-btn layui-btn-lg layui-btn-normal">查看详情</button>
      </div>
    </div>
    <hr />
    <!-- 咨讯动态部分 -->
    <div class="information">
      <p>资讯动态</p>
      <div v-for="(item,index) in data.slice(0,3)" :key="index">
        <div>
          <a href>
            <img :src="item.pic" alt />
          </a>
        </div>
        <div>
          <a href>
            <h4>{{item.title}}</h4>
          </a>
          <div>{{item.simple}}</div>
        </div>
      </div>
      <!-- <div>
        <div>
          <a href>
            <img src="../assets/images/information_01.png" alt />
          </a>
        </div>
        <div>
          <a href>
            <h4>透视SLM 3D打印技术如何制造针翅热管热交换器</h4>
          </a>
          <div>
            热交换器非常适合通过增材制造的方式来制造，不过一个吸引人的
            或创成式式的设计本身往往是不够的。据了解，这其中还包括对传
            热/流体力学的基本原理的掌握，对热流体模拟仿真和AM-增材制
            造过程的深刻理解和结合，这是取得令人信服的竞争性结果所必需
            的。
          </div>
        </div>
      </div>
      <div>
        <div>
          <a href>
            <img src="../assets/images/information_02.jpg" alt />
          </a>
        </div>
        <div>
          <a href>
            <h4>仿真释放3D打印-增材制造潜力</h4>
          </a>
          <div>
            在憧憬增材制造带来的无限发展空间的同时，其实金属增材工艺也
            面临着巨大挑战。离开仿真，金属增材制造将遭遇严重瓶颈，只能
            封印在低层次的应用空间。本文将直面增材工艺仿真——仿真技术
            的第二个深层次应用。
          </div>
        </div>
      </div>
      <div>
        <div>
          <a href>
            <img src="../assets/images/information_03.jpg" alt />
          </a>
        </div>
        <div>
          <a href>
            <h4>3D打印铜在电动汽车、电动摩托、牵引电机方面的案例</h4>
          </a>
          <div>
            未来的驱动任务-无论是在工业领域还是交通领域-都对各个组件提
            出了很高的要求。电动机的经典制造工艺很快达到了极限。基于传
            统的制造工艺，优化的几何形状通常是不可能的，结果是设计者在
            性能和效率上痛苦折衷。通过3D打印制造铜线圈解决了这个问题，
            而且电动机中较高的铜含量可减少损耗并改善绕组的热耦合。
          </div>
        </div>
      </div> -->
      <a href>
        <div class="busbutton">更多>></div>
      </a>
    </div>
    <hr />
    <!-- 在线3D工具 -->
    <div class="tool">
      <div>
        <div>
          <h3>在线3D工具</h3>
          <p>100多种在线3D定制工具</p>
          <p>让人人都可修改定制</p>
          <p>助力您将想法快速变为现实</p>
        </div>
        <div>
          <button type="button" class="layui-btn layui-btn-lg layui-btn-primary">更多工具</button>
        </div>
      </div>
      <div>
        <div>
          <a href>
            <img src="../assets/images/gongju1.png" alt />
            <p>涂鸦变3D</p>
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/gongju2.png" alt />
            <p>模型定制器</p>
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/gongju3.png" alt />
            <p>照片浮雕</p>
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/gongju4.png" alt />
            <p>2D转3D</p>
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/gongju5.png" alt />
            <p>3D格式转换</p>
          </a>
        </div>
      </div>
    </div>
    <hr />
    <!-- 增材制造中心解决方案 -->
    <div class="make">
      <div>
        <h2>增材制造中心解决方案</h2>
        <p>一站式先进增材制造方案的提供者</p>
        <p>设备+运营+服务，三位一体</p>
        <p>丰富的多领域增材制造生产服务经验</p>
        <button type="button" class="layui-btn layui-btn-lg layui-btn-primary">查看详情</button>
      </div>
      <div>
        <img src="../assets/images/make.png" alt />
      </div>
    </div>
    <hr />
    <!-- 3D模型库buf -->
    <div class="library">
      <h3>3D模型库</h3>
      <div>
        <div>
          <a href>
            <img src="../assets/images/mxk-1.jpg" alt />
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/mxk-2.jpg" alt />
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/mxk-3.jpg" alt />
          </a>
        </div>
      </div>
      <div>
        <div>
          <a href>
            <img src="../assets/images/mxk-4.jpg" alt />
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/mxk-5.jpg" alt />
          </a>
        </div>
        <div>
          <a href>
            <img src="../assets/images/mxk-6.jpg" alt />
          </a>
        </div>
      </div>
    </div>
    <hr />
    <!-- 知识堂部分 -->
    <div class="information">
      <p>知识堂</p>
      <div v-for="(item,index) in data.slice(3,6)" :key="index">
        <div>
          <a href>
            <img :src="item.pic" alt />
          </a>
        </div>
        <div>
          <a href>
            <h4>{{item.title}}</h4>
          </a>
          <div>{{item.simple}}</div>
        </div>
      </div>
      <a href>
        <div class="busbutton">更多>></div>
      </a>
    </div>
    <!-- 友情链接部分 -->
    <div class="blogroll">
      <div>
        <div></div>
        <span>友情链接</span>
        <div></div>
      </div>
      <div>
        <a href>新奇谷</a>
        <a href>青少年三维创意社区</a>
        <a href>3D打印论坛</a>
        <a href>中国3D打印网</a>
        <a href>易登网</a>
        <a href>RFID打印机</a>
        <a href>摩登犀牛网</a>
        <a href>3D虎南</a>
        <a href>极熊3D打印</a>
        <a href>3D打印</a>
        <a href>创想3D打印</a>
        <a href>印梦园3D打印</a>
        <a href>资源库</a>
        <a href>3D扫描仪</a>
        <a href>3D模型下载</a>
        <a href>北京3d打印服务</a>
        <a href>3D打印机</a>
        <br />
        <a href>三迪时空3D打印</a>
        <a href>来设计</a>
        <a href>3D打印机</a>
        <a href>AM之家</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      title: "",
      simple: "",
      pic: "",
      i: 0,
    };
  },
  mounted() {
    layui.use("carousel", function () {
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: "#test1",
        width: "100%", //设置容器宽度
        arrow: "always", //始终显示箭头
        height: "500px",
        //,anim: 'updown' //切换动画方式
      });
    });
    // var swiper = new Swiper(".swiper-container", {
    //   pagination: ".swiper-pagination",
    //   slidesPerView: 4,
    //   paginationClickable: true,
    //   spaceBetween: 30,
    // });
    this.getData();
  },
  methods: {
    getData() {
      let url = "index/text";
      this.axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.data = res.data;
          // console.log(this.data);

          this.title = res.data[0].title;
          this.simple = res.data[0].simple;
          this.pic = res.data[0].pic;
          // console.log(this.title, this.simple, this.pic);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/index.css";
.layui-carousel > div > div > img {
  height: 100%;
  width: 100%;
}
.swiper-container {
  width: 1200px;
  height: 300px;
}
.swiper-slide {
  padding-right: 10px;
  padding-left: 5px;
}
.layui-btn-lg {
  width: 150px;
  height: 50px;
}
</style>