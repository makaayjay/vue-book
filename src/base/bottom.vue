<template>
    <div >
        <div class="footer">
        <router-link to="/home"><i class="iconfont icon-index"></i><span>Home</span></router-link>
        <router-link to="/list"><i class="iconfont icon-list"></i><span>list</span></router-link>
        <router-link to="/detail"><i class="iconfont icon-book"></i><span>detail</span></router-link>
        <router-link to="/collect"><i class="iconfont icon-index"></i><span>collect</span></router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name:'bottom'
    }
</script>
<style scoped lang="less">
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 110;
    display: flex;
    background: white;
    border-top: 1px #ccc solid;
    padding: 5px 0;
    a{
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        font-size: 15px;
        i{
            font-size:20px;
        };
    };
    a.router-link-exact-active{
        color: darkorange;
    }
}
</style>