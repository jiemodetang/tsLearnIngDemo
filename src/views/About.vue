<template>
  <div class="about">
    <h1>about页面</h1>
    <div>上个页面传params接受:{{aboutId}}</div>
    <div>从route的prop接受:{{toAboutQuery.id}}</div>
  </div>
</template>
<script lang ='ts'>
interface Object {
  name: string;
}
import { Vue, Component, Prop, Watch ,Model} from "vue-property-decorator";
//需要注入about
@Component<about>({
  beforeRouteEnter(to,from,next){
    next((vm:about) => {
      console.log(vm)
      vm.aboutId = to.params.toAbout
      // vm.toAboutQuery= to.query
    });
  }
})
export default class about extends Vue {
  //路由传值
  private aboutId:string='111'
  @Prop({type:Object})//any表示有任意属性
  private toAboutQuery:any

}
</script>