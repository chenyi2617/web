<template>
  <div class="dddd">
    <div style="height:81px"></div>
    <div class="resour_top">
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
            <router-link class="a_style" to="/offer">分类</router-link>
          </template>
          <el-menu-item index="1-1">知识堂</el-menu-item>
          <el-menu-item index="1-2">行业咨询</el-menu-item>
          <el-menu-item index="1-3">3D潮流</el-menu-item>
          <el-menu-item index="1-4">科技前沿</el-menu-item>
          <el-menu-item index="1-5">创意空间</el-menu-item>
          <el-menu-item index="1-6">魔猴动态</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <router-link class="a_style" to="/offer">排序方式</router-link>
          </template>
          <el-menu-item index="2-1">最新</el-menu-item>
          <el-menu-item index="2-2">最热</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="resour_nav layui-container">
      <div>
        <div v-for="(item,index) in data" :key="index">
          <a href>
            <img :src="item.pic" alt />
          </a>
          <a href>
            <h5>{{item.title}}</h5>
          </a>
          <h6>行业资讯</h6>
          <div>
            <p>{{item.simple}}</p>
          </div>
          <hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
        </div>
      </div>
      <div>
        <div>
          <h4>文章分类</h4>
          <hr>
          <a>1 知识堂</a>
          <hr>
          <a>2 行业咨询</a>
          <hr>
          <a>3 3D潮流</a>
          <hr>
          <a>4 科技前沿</a>
          <hr>
          <a>5 创意空间</a>
          <hr>
          <a>6 魔猴动态</a>
          <hr>
        </div>
        <div>
          <h4>热门文章</h4>
          <a href=""><img src="../assets/images/source/banner-260.jpg" alt=""></a>
          <a href=""><img src="../assets/images/source/nv.jpg" alt=""></a>
          <a href=""><img src="../assets/images/source/xi.jpg" alt=""></a>
          <a href=""><img src="../assets/images/source/zhe.jpg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: "1",
      data:[],
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getData(){
      let url = "/index/text";
      this.axios.get(url)
      .then(res => {
        console.log(res);
        this.data = res.data;
        console.log(this.data);
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
  mounted(){
    this.getData();
  }
};
</script>

<style scoped>
@import "../assets/css/resource.css";
</style>