<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>   
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{
    Header,
    Footer,
  }
}
</script>
<style>
  @import "./assets/css/header.css";
  @import "./assets/css/footer.css";
  @import "./assets/css/reset.css"
</style>
