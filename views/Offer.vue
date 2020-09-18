<template>
  <div class="offer">
    <div class="offer_nav">
      <div>
        <a href>3D云打印</a>
        <a href>新手必读</a>
        <a href>成功案例</a>
        <a href>材料指南</a>
        <a href>材料属性一览表</a>
        <a href>保密承诺</a>
        <a href>售后政策</a>
        <a href>STL格式转换</a>
      </div>
    </div>
    <div class="part_one">
      <div>
        <img src="../assets/images/offer/20200820173331.png" alt />
      </div>
      <div>
        <img src="../assets/images/offer/20200820173342.png" alt />
      </div>
      <div>
        <img src="../assets/images/offer/20200820173350.png" alt />
      </div>
      <div>
        <img src="../assets/images/offer/20200820173356.png" alt />
      </div>
    </div>
    <div class="part_two">
      <div>
        <div>
          <div>
            <img src="../assets/images/offer/3_new.jpg" alt />
          </div>
          <div>
            <p>进口光敏树脂</p>
            <p>1.20元/克</p>
          </div>
          <a href>
            <img src="../assets/images/offer/down.png" alt />
          </a>
        </div>
        <div>
          <div>
            <img src="../assets/images/offer/monkey.jpg" alt />
          </div>
          <div>
            <p>实心</p>
          </div>
          <a href>
            <img src="../assets/images/offer/down.png" alt />
          </a>
        </div>
        <a href>
          <div>
            <img src="../assets/images/offer/yun.png" alt />上传3D文件
          </div>
        </a>
        <a href>
          <div>
            <img src="../assets/images/offer/history.png" alt />
            <p>历史上传</p>
          </div>
        </a>
        <img src="../assets/images/offer/mp-qr.jpg" alt />
        <div>
          <a href>
            <div>文件上传</div>
          </a>
          <a href>
            <div>使用指南</div>
          </a>
        </div>
      </div>
      <div class="part_bottom">
        <div>
          <img src="../assets/images/offer/file.png" alt />
          <span>支持多文件上传</span>
        </div>
        <div>
          <img src="../assets/images/offer/drap.png" alt />
          <span>支持拖拽上传</span>
        </div>
        <div>
          <img src="../assets/images/offer/refer.png" alt />
          <a href>需要建模？立即咨询</a>
        </div>
        <div>
          <img src="../assets/images/offer/wen.png" alt />
          <a href>3D扫描399元/件</a>
        </div>
      </div>
    </div>
    <div class="part_three">
      <div>
        <a href>
          <div>推荐材料</div>
        </a>
        <a href>
          <div>原型手板</div>
        </a>
        <a href>
          <div>功能零件</div>
        </a>
        <a href>
          <div>展示模型</div>
        </a>
        <a href>
          <div>动漫手办</div>
        </a>
        <a href>
          <div>建筑塑料</div>
        </a>
        <a href>
          <div>医疗卫生</div>
        </a>
        <a href>
          <div>航空汽车</div>
        </a>
        <a href>
          <div>批量生产</div>
        </a>
        <a href>换一批</a>
      </div>
      <div class="three_bottom">
        <div v-for="(item,index) in data.slice(0,3)" :key="index">
          <div>
            <p>{{item.title}}</p>
            <a href>
              <img src="../assets/images/offer/drap.png" />选择该材料
            </a>
          </div>
          <div>
            <p>{{item.price}}元/克</p>
          </div>
          <div>
            <div>
              <img :src="item.pic" alt />
              <div>
                <p>
                  强度：
                  <img v-for="(item,i) in (item.strength)" :key="'a'+i" :src="xing_active" alt />
                  <img v-for="(item,i) in (5-item.strength)" :key="'b'+i" :src="xing" alt="">
                </p>
                <p>
                  外观：
                  <img v-for="(item,i) in (item.appearance)" :key="'c'+i" :src="xing_active" alt />
                  <img v-for="(item,i) in (5-item.appearance)" :key="'d'+i" :src="xing" alt="">
                </p>
                <p>
                  精度：
                  <img v-for="(item,i) in (item.prec)" :key="'e'+i" :src="xing_active" alt />
                  <img v-for="(item,i) in (5-item.prec)" :key="'f'+i" :src="xing" alt="">
                </p>
              </div>
            </div>
            <div>
              <div v-for="(item,index) in genre[index]" :key="index">{{item}}</div>
              <!-- <div>展示模型</div>
              <div>动漫手办</div>-->
            </div>
            <div>
              <p>{{item.detail}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part_four">
      <div>
        <div>
          <h2>常见问题</h2>
        </div>
        <div>
          <p>1.魔猴网怎么下单最省钱？</p>
          <p>2.如何选择打印材料？</p>
          <p>3.如何为3D打印设计？</p>
          <p>4.魔猴网上色工艺有什么特点？</p>
          <p>5.魔猴网的报价是如何计算的？</p>
          <p>6.什么是异形件？</p>
          <p>7.3D软件如何导出STL文件？</p>
          <p>8.如何开发票？</p>
        </div>
      </div>
      <div>
        <div>
          <h2>服务流程</h2>
        </div>
        <div>
          <div>
            <img src="../assets/images/offer/service_process.jpg" alt />
          </div>
          <div>
            <h6>上传文件</h6>
            <p>40+种材料，快速报价，价格低至0.5元/克，专业3D打印建模，如需要请联系客服</p>
            <h6>下单支付</h6>
            <p>网络下单，全程跟踪订单流转及物流过程，支持银行卡、微信、支付宝等多种支付方式</p>
            <h6>魔猴生产</h6>
            <p>快速确认、即时上机、北京、安徽、上海、广东等多地发货，多种后处理工艺，一站式服务</p>
            <h6>快递交付</h6>
            <p>专业包装，专业物流，稳妥交付，免除后顾之忧；支持快递当日件、次日件与同城专人直送</p>
          </div>
        </div>
      </div>
      <div class="a">
        <div class="layui-carousel" id="test10">
          <div carousel-item>
            <div>
              <img src="../assets/images/offer/sure.jpg" />
            </div>
            <div>
              <img src="../assets/images/offer/fb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      genre: "",
      xing: require("../assets/images/offer/xing.png"),
      xing_active: require("../assets/images/offer/xing_active.png"),
    };
  },
  methods: {
    getData() {
      let url = "offer/text";
      this.axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.data = res.data;
          // console.log(this.data);
          let genre = [];
          for (var i = 0; i < this.data.length; i++) {
            genre.push(this.data[i].genre.split(","));
            this.genre = genre;
          }
          // console.log(this.genre);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getData();
    layui.use(["carousel", "form"], function () {
      var carousel = layui.carousel,
        form = layui.form;

      //常规轮播
      carousel.render({
        elem: "#test1",
        arrow: "always",
      });

      //改变下时间间隔、动画类型、高度
      carousel.render({
        elem: "#test2",
        interval: 1800,
        anim: "fade",
        height: "120px",
      });

      //设定各种参数
      var ins3 = carousel.render({
        elem: "#test3",
      });
      //图片轮播
      carousel.render({
        elem: "#test10",
        width: "370px",
        height: "450px",
        interval: 5000,
      });

      //事件
      carousel.on("change(test4)", function (res) {
        console.log(res);
      });

      var $ = layui.$,
        active = {
          set: function (othis) {
            var THIS = "layui-bg-normal",
              key = othis.data("key"),
              options = {};

            othis
              .css("background-color", "#5FB878")
              .siblings()
              .removeAttr("style");
            options[key] = othis.data("value");
            ins3.reload(options);
          },
        };

      //监听开关
      form.on("switch(autoplay)", function () {
        ins3.reload({
          autoplay: this.checked,
        });
      });

      $(".demoSet").on("keyup", function () {
        var value = this.value,
          options = {};
        if (!/^\d+$/.test(value)) return;

        options[this.name] = value;
        ins3.reload(options);
      });

      //其它示例
      $(".demoTest .layui-btn").on("click", function () {
        var othis = $(this),
          type = othis.data("type");
        active[type] ? active[type].call(this, othis) : "";
      });
    });
  },
};
</script>

<style >
@import "../assets/css/offer.css";
.a .layui-carousel-ind ul {
  margin-left: 250px;
}
.a .layui-carousel-arrow {
  display: none;
}
</style>