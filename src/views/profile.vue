<template>
  <div class="home">
    <p>{{count}}</p>
    <p>{{text}}</p>
    <button @click="addCount">点击count值增加</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {},


})
export default class about extends Vue {
  @Prop({ type: String, required: true })
  private a: string;

  public count: number = 1;
  public text: string = "我是数字1";

  public addCount(): void {
    this.count++;
       console.log(this.a, this.$router);
  }
  
  // watch
  @Watch("count")
  getCount(newVal: number) {
    if (newVal == 2) {
      this.text = "我是数字2";
    } else if (newVal == 3) {
      this.text = "我是数字3";
    } else {
      this.text = "我会继续增长";
    }
  }
}
</script>
