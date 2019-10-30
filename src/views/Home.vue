<template>
  <div class="home">
    <div>
      <h1>home父组件</h1>
    </div>
    <div>从子组件传来的值:{{msg}}</div>
    <div>Watch:{{watchdata}}</div>
    <HelloWorld tochild="给孩子值" @bindSend="propMsg" />
    <div>
      <input type="text" value="去about页面" v-model="goAboutPageData" />
      <button @click="goAbout">跳转go</button>
    </div>
  </div>
</template>
<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  //子父组件传值的代码
  private msg: string = "";
  propMsg(zmsg:string) {
    this.msg = zmsg;
  }

  //watch的相关代码
  private watchdata: string = "";
  @Watch("msg")
  private watchdata1() {
    let that = this
  that.watchdata = 'watch改变的值'
  }


  //去about页面
  private goAboutPageData: string = "";
  private goAbout():void{
  this.$router.push({
    name:'about',
    params:{toAbout:"123456"},
    query:{id:"456789"},
  })
  }

}
</script>
