<template>
    <div>
        <h1>npm测试</h1>
        <div>{{val}}</div>
        <div class="datepicker-components">
            <v2-datepicker v-model="val" ></v2-datepicker>
        </div>
   </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from "vue-property-decorator";
    import 'v2-datepicker/lib/index.css';
    import { DatePicker } from 'v2-datepicker';
    import moment from 'moment';

    //日历组件
    @Component<npmTest>({
        components: {
            'v2-datepicker': DatePicker
        }
    })
    export default class  npmTest extends  Vue{
        //日历组件
      private val:string= '123'
        //moment组件
        mounted(){


            console.log(moment().format('YYYY-MM-DD')); // 2019-04-27
            console.log(moment().format('YYYY.MM.DD hh:mm:ss')); // 2019.04.27 11:08:53
            console.log(moment().format('YYYY年MM月DD日 hh:mm:ss')) // 2019年04月27日 11:08:53
            console.log(moment().year()); // 2019
            console.log(moment().month()+ 1); // 4
            console.log(moment().date()); // 27
            console.log(moment().hour()); // 23
            console.log(moment().minute()); // 12
            console.log(moment().second()); // 14
            console.log(moment().millisecond()); // 188，毫秒复制代码console.log(
        }

     }
</script>

<style scoped>

</style>
