<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in imgDatas" :key="index"><img :src="item.url" width="100%" height="100%"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: 'carrousel',
        props:{
            imgDatas:{
                default:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840868797&di=ce34efbc484efe7f7c311d868a64897f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017a6256f90af86ac72579483365f3.jpg"
            }
        },
        data() {
            return {
                swiperOption: {
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    },
                    loop:true,
                    autoplay:true,
                },
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        created(){
            console.log()
        },
        beforeMount (){
            console.log(this.imgDatas)
        },
        mounted(){
            console.log(this.swiper)

        }
    }
    </script>
<style scoped>

</style>