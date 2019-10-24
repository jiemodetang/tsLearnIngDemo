<template>
  <div class="about">
    <div>
      ----------------------------------------------------------------
      <h1>子组件</h1>
    </div>
    <div>
      父组件传递的值:
      {{tochild}}
    </div>子组件：我的子组件的数据
   <div>
      <button @click="propMsg">点击给父组件发送数据</button>
   </div>
  </div>
</template>
	
	<script lang="ts" type="text/tsx">
import { Component, Emit, Vue, Watch ,Prop} from "vue-property-decorator";
@Component
export default class About extends Vue {
  //接受父组件传来的值
  @Prop({
    type: String,
    required: true 
  })
  private tochild: string;
  //向父组件传值的代码
  msg: string = "子组件的msg数据";
  // @Emit("bindSend") send(msg: string) {}
  propMsg() {
    console.log(this.$options.propsData);
    
    this.msg = "子组件的msg数据,被传给了父组件";
    //方法1
    // this.send(this.msg);
    //方法2
    this.$emit("bindSend", this.msg);
  }
}
</script>
