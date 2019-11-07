<template>
    <div class="home">
        要测试字体啦
        {{text}}
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'

// import Fontmin from 'fontmin'
@Component({
    components: {}
})
export default class fontmin extends Vue {
    private text: string = ''
    private created(): void {
        var Fontmin = require('fontmin')

        console.log(Fontmin);
        
        // var srcPath = '../fontmin/*.TTF' // 字体源文件路径，需要保证该ttf文件存在
        // var destPath = '../fontmin' // 字体输出路径
        // var text = '我你今天中大奖了快来领红包' //有哪些文字可能需要用到这个字体的,都可以在这里进行配置

        // // 初始化
        // var fontmin = new Fontmin()
        //     .src(srcPath) // 输入配置
        //     .use(
        //         Fontmin.glyph({
        //             // 字型提取插件
        //             text: '我你今天中大奖了快来领红包' // 所需文字
        //         })
        //     )
        //     .use(Fontmin.ttf2eot()) // eot 转换插件
        //     .use(Fontmin.ttf2woff()) // woff 转换插件
        //     .use(Fontmin.ttf2svg()) // svg 转换插件
        //     .use(Fontmin.css()) // css 生成插件
        //     .dest(destPath) // 输出配置

        // // 执行
        // fontmin.run(function(err: any, files: any, stream: any) {
        //     if (err) {
        //         // 异常捕捉
        //         console.error(err)
        //     }

        //     console.log('done') // 成功
        // })
    }
}
</script>
 