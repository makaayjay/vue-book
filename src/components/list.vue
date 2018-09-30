<template >
    <div>
        <v-header :back="true">列表</v-header>
        <div class="content" ref="scroll" ><!--父组件必须是有高度或者限制位置内容溢出才能绑定scroll事件-->
            <ul >
                <router-link v-for="(item,index) in books" :to="{name:'detail',params:{bid:item.bookIsbn}}" tag="li" :key="index">
                    <p v-if="imgLoading">图片正在加载</p>
                    <img v-else :src="item.bookCover"/>
                    <div class="bookinfo">
                        <b>{{item.bookTitle}}</b>
                        <p>价格：{{item.bookPrice}}</p>
                        <p>作者：<b>{{item.author}}</b></p>
                        <button class="btn" @click.stop="remove(item.bookIsbn)">删除</button><!-- .stop组织冒泡事件-->
                    </div>
                </router-link>
            </ul>
            <p @click="getMoreBook" v-if="hasMore">加载更多</p>
            <p v-else>已无更多</p>
        </div>
    </div>
</template>
<script>
    import vHeader from '../base/vheader'
    import axios from 'axios'
    export default{
        data(){
          return{
              books:[],
              hasMore:true,
              isLoading:false,
              imgLoading:true,
              timer:0
          }
        },
        components:{
            vHeader
        },
        created(){
                this.getMoreBook()
        },
        mounted(){
           this.listenerScroll()//监听滚动事件，但是因为window其他页面也会有滚动事件监听，所以得在页面销毁后移除
        },
        destroyed(){
            this.destroyedScroll()//页面销毁后移除监听事件。
        },
        methods:{
            listenerScroll(){
                window.addEventListener('scroll', this.getScroll, true)
            },
            destroyedScroll(){
                window.removeEventListener('scroll',this.getScroll,true)
            },
            getScroll(){
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
        let htmlHeight=document.body.scrollHeight||document.documentElement.scrollHeight;
                console.log(htmlHeight)
        //clientHeight是网页在浏览器中的可视高度，
        let clientHeight=document.body.clientHeight||document.documentElement.clientHeight;
                console.log(clientHeight)
        //scrollTop是浏览器滚动条的top位置，
        let scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
                console.log(scrollTop)
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        if(scrollTop+clientHeight>=htmlHeight){
            console.log("到底啦")
            this.getMoreBook();
        }
    },
            getMoreBook(){
                if(this.hasMore&&!this.isLoading){
                    this.isLoading=true//正在加载
                    axios.get('/getBooks',{
                        data:{
                            offset:this.books.length// 传入的值为BOOKS的长度，一遍offset+5为现有书+5
                        }
                    }).then((item)=>{
                       //当没有更多书的时候就不执行
                        this.imgLoading=false
                        this.hasMore=item.data.hasMore
                        this.books=this.books.concat(item.data.books)
                        this.isLoading=false//加载完毕
                            console.log(item.data)
                    })
                }
            },
            remove(id){
                axios.delete('/delete',{
                    data:{ //data传递主体（body）params传递url？后面的参数
                        isbn:id
                    }
                }).then((res)=>{
                    console.log(res)
                    this.books=res.data
                }).catch((err)=>{
                    console.log(err)
                    }
                );
            }
        }
    }
</script>
<style lang="less" scoped>
    ul{
        margin: 0;
        padding: 0;
        li{
            width: 90%;
            display: flex;
            margin: 10px 0;
            text-align: center;
            list-style: none;
            img{
                width: 50%;
                height: auto;
            }
            .bookinfo{
                margin: 15px 0;
                width: 50%;
                p{
                    line-height: 30px;
                }
                .btn{
                    border-radius: 4px;
                    background-color: rgba(250,90,90,1);
                    color: white;
                    margin-top:15px;
                }
            }

        }
    }
</style>