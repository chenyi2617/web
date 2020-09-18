.<template>
  <div>
      <table></table>
    <div class="top">
      <img src="../assets/vip/01.png" alt />
    </div>
    <div class="layui-container content">
        <div class="portrait">
            <div class="typ">
                <h5>石猴</h5>
                <div>无折扣</div>
                <h6>
                    0-1999
                </h6>
            </div>
            <div class="typ">
                <h5>铜猴</h5>
                <div>
                    <span>98</span>折
                </div>
                <h6>
                    2000-4999积分
                </h6>
            </div>
            <div class="typ">
                <h5>银猴</h5>
                <div>
                    <span>96</span>折
                </div>
                <h6>
                    5000-8999积分
                </h6>
            </div>
            <div class="typ">
                <h5>金猴</h5>
                <div>
                    <span>94</span>折
                    <p>金猴专享礼包</p>
                </div>
                <h6>
                    9000-13999积分
                </h6>
            </div>
            <div class="typ">
                <h5>王猴</h5>
                <div>
                    <span>92</span>折
                    <p>金猴专享礼包</p>
                </div>
                <h6>
                    14000-19999积分
                </h6>
            </div>
            <div class="typ">
                <h5>大圣</h5>
                <div>
                    <span>9</span>折
                    <p>金猴专享礼包</p>
                </div>
                <h6>
                    20000-无上限
                </h6>
            </div>
        </div>
        <div class="portrait">
            <div class="bottom2">
                <h1><img src="../assets/vip/1.jpg" alt=""></h1>
                <p>1.客户签收之后，增加积分。1元1分。</p>
                <p>2.评论可以加分。普通评论：+50分，五星带图好评：+100分。
   被系统评为【优质评论】另外+50分</p>
                <p>3.退货会扣减对应的积分。</p>
            </div>
            <div>
                <div class="topx"></div>
                <div class="botx"></div>
            </div>
            <div class="bottom1">
                <h1>
                    <img src="../assets/vip/2.jpg" alt="">
                </h1>
                <p>专享礼包：每月金猴、猴王、大圣会员有机会获得礼包。</p>
                <p>发放对象：每月1日当天会员级别为金猴、猴王、大圣的会员。</p>
                <p>发放时间：每月初自动发放，礼包内的优惠券当月有效。</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top{
    margin-top: 81px;
}
.top > img {
  width: 100%;
}
@media (max-width: 1270px) {
  .top > img {
    width: 1270px;
  }
}
@media (max-width: 1270px) {
  .layui-container {
    width: 1270px;
  }
}
.portrait{
     display: flex;
}

.content{
    padding: 50px 130px;
}
.typ{
    width: 166px;
    height: 228px;
    background-color: #f7f7f7;
    text-align: center;
    margin: 4px;
}
.typ>h5{
    font-size: 24px;
    width: 128px;
    height: 58px;
    margin: 0 auto;
    line-height: 58px;
    border-bottom: solid 2px #c9c9c9;
}
.typ>div{
    height: 130px;
    line-height: 130px;
}
.typ>div>span{
    font-size: 40px;
    color: #da9f00;
}
.typ>div>p{
    line-height: 0px;
    margin-top: -25px;
    color: #da9f00;
}
.typ>h6{
    height: 40px;
    line-height: 40px;
    background-color: #ebebeb;
}
.bottom2{
    width: 395px;
    height: 180px;
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 30px 100px 20px 0px;
    line-height: 35px;
    border-top:1px solid #ccc;
    margin-right: 10px;
}
.botx{
    height: 200px;
    border-left: solid 1px #ccc;
    margin-top: 10px;
}
.topx{
    border: solid 2px #ccc;
    margin-top: 30px;
}
.bottom1{
    width: 395px;
    height: 180px;
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 30px 100px 20px 50px;
    line-height: 30px;
    border-top:1px solid #ccc;
    margin-left: 10px;
}
</style>