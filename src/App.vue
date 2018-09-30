<template>
  <div id="App" >
      <router-view/>
      <v-bottom></v-bottom>
  </div>
</template>
<script>
import vBottom from './base/bottom'
import vHeader from './base/vheader'
  export default{
    name:'App',
    components:{
       vBottom,
        vHeader
    }
  }
</script>
<style lang="less">
body{
    margin: 0;
}
a{
    text-decoration: none;
    color: #b9b9b9;
}
p{
    margin: 0;
    padding: 0;
    color: black;
}
li{
    margin: 10px 0;
    text-align: center;
    list-style: none;
    width: 33.33333%;
}
.content{
    position: absolute;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 54px;
}
</style>
