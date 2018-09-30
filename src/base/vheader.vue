<template>
    <div>
        <div class="header">
            <i class="iconfont icon-fanhui" v-if="back"></i>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
   props:{
       back:{
           type:Boolean,
       }
   }
    }
</script>
<style scoped lang="less">
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 110;
        background:#e5e5e5;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: black;
        i{
            position: absolute;
            left: 5px;
        }

    }
</style>