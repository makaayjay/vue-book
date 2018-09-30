<template>
    <div>
        <v-header :back="true">{{bid}}</v-header>
        <div class="content">
            <loading v-if="loading">疯狂加载中</loading>
            <img :src="book.bookCover"  v-else/>
            <div class="bookinfo">
                <b>{{book.bookTitle}}</b>
                <p>价格：{{book.bookPrice}}</p>
                <p>作者：<b>{{book.author}}</b></p>
            </div>
        </div>
    </div>
</template>
<script>
    import vHeader from '../base/vheader'
    import axios from 'axios'
    import loading from '../base/loading'
    export default{
        data(){
            return{
                book:{},
                loading:true
            }
        },
        components:{
            vHeader,
            loading
        },
        computed:{
            bid(){
                return this.$route.params.bid
            }
        },
        methods:{
            getBook(){
                axios.get('/getOneBook',{data:{isbn:this.bid}}).then((res)=>
                    {
                        this.loading=false
                        this.book=res.data
                    }
                )
            }
        },
        created(){
            setTimeout(this.getBook,500)
        }
    }
</script>