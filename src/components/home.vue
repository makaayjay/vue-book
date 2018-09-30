<template>
    <div>
        <v-header :back="false">首页</v-header>
        <div class="content">
        <swiper v-if="imgUrl.length" :imgDatas="imgUrl" class="swiper"></swiper>
            <div class="contenter">
            <h2>热门图书</h2>
            <ul>
                <li v-for="item in books">
                    <img :src="item.bookCover"/>
                    <b>{{item.bookTitle}}</b>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import vHeader from '../base/vheader'
    import Swiper from '../base/swiper'
    import axios from 'axios'
    export default{
        data(){
          return {

              imgUrl:[],
              books:[]
          }
        },
        components:{
            vHeader,
            Swiper,
        },
        created(){
            axios.get("/getImg").then(
                (res)=>{
                    this.imgUrl=res.data
                }
            );
            axios.get("/getHotBooks").then(
                (res)=>{
                    this.books=res.data
                }
            )
        }
    }
</script>
<style scoped lang="less">
    .swiper{
    height: 200px;
    }
    .contenter{
        width: 90%;
        margin: 0 auto;
        ul{
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            li{
                margin: 10px 0;
                text-align: center;
                list-style: none;
                width: 33.33333%;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>