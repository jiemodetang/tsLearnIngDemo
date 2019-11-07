<template>
  <div id="app">
    <ul id="menu">
      <li class="active" data-menuanchor="page1">
        <a href="#page1">Section 1</a>
      </li>
      <li data-menuanchor="page2">
        <a href="#page2">Section 2</a>
      </li>
      <li data-menuanchor="page3">
        <a href="#page3">Section 3</a>
      </li>
    </ul>
    <full-page :options=" options" id="fullpage" ref="fullpage">
      <div class="section">
        <h3>Section 1</h3>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<style lang="css" scoped>
/* Reset CSS
 * --------------------------------------- */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
form,fieldset,input,textarea,p,blockquote,th,td {
    padding: 0;
    margin: 0;
}
a{
    text-decoration:none;
}
table {
    border-spacing: 0;
}
fieldset,img {
    border: 0;
}
address,caption,cite,code,dfn,em,strong,th,var {
    font-weight: normal;
    font-style: normal;
}
strong{
    font-weight: bold;
}
ol,ul {
    list-style: none;
    margin:0;
    padding:0;
}
caption,th {
    text-align: left;

}
h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-size: 100%;
    margin:0;
    padding:0;
}
q:before,q:after {
    content:'';
}
abbr,acronym { border: 0;
}
*{
    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
    -moz-box-sizing: border-box; /* <=28 */
    box-sizing: border-box;
}

/* Custom
 * --------------------------------------- */
body {
    font-family: arial, helvetica;
}
.section{
    position: relative;
    text-align: center;
}
#section-1 h2{
    color: #fff;
    font-size: 10em;
    font-weight: 900;
}
#section-1 h1{
    font-size: 2em;
    font-weight: 100;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    margin: 1.5em auto 1em auto;
    color: #35495e;
    padding-right: 30px;
    padding-left: 30px;
}
#section-1 li {
    display: inline-block;
    margin: 1.25em 0.3em;
}
.section-1-button{
    padding: 0.93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
}
h3{
    font-size: 5em;
    text-align: center;
    color: #fff;
    font-weight: bold;
}
#logo{
    position: fixed;
    top: 20px;
    left: 20px;
    color: #fff;
    font-weight: bold;
    z-index: 99;
    font-size: 1.9em;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
}

/* Menu
 * --------------------------------------- */
#menu-line {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 159px;
    height: 2px;
    background: #fff;
}

#menu{
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 70;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    letter-spacing: 1px;
    font-size: 1.1em;
}
#menu li{
    display: inline-block;
    margin: 10px 0px;
    position: relative;
}
#menu a{
    color: #fff;
    padding: 0 1.1em 1.1em 1.1em;
}
#menu li.active a:after{
    content: '';
    margin: 0 1.1em 0 1.1em;
    height: 2px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    display: block;
}

/* Actions buttons
 * --------------------------------------- */
.actions{
    position: fixed;
    bottom: 2%;
    margin: 0 auto;
    z-index: 99;
    left: 0;
    right: 0;
    text-align: center;
}
.actions li{
    display: inline-block;
    margin: 0.3em 0.3em;
}
.actions-button{
    padding: 0.73em 1.47em;
    background: rgba(53, 73, 94, 0.47);
    border-radius: 5px;
    display: block;
    color: #fff;
    cursor: pointer;
}

/* Twitter
 * --------------------------------------- */
.twitter-share i{
    vertical-align: middle;
    position: relative;
    top: 2px;
    display: inline-block;
    width: 38px;
    height: 14px;
    color: white;
    top: -4px;
    left: -2px;
    fill: #fff;
}
.twitter-share svg{
    height: 40px;
    margin-top: -10px;
}
.view-github{
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
    padding: .93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
}

</style>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import 'fullpage.js/vendors/scrolloverflow.js';
import 'fullpage.js/dist/fullpage.min.css'
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);

// @Component<fullpage>({
//   components: {
//  VueFullPage
//   }
// })
export default class fullpage extends Vue {
  afterLoad(origin: any, destination: any, direction: any) {
    console.log('After load....')
    console.log(destination)
  }
  private options = {
    licenseKey: 'YOUR_KEY_HERE',
    menu: '#menu',
    anchors: ['page1', "",'page2', 'page3'],
    afterLoad: this.afterLoad,
    controlArrows: true,
    sectionsColor: [
      '#41b883',
      '#ff5f45',
      '#0798ec',
      '#fec401',
      '#1bcee6',
      '#ee1a59',

      '#2c3e4f',
      '#ba5be9',
      '#b4b8ab'
    ]
  }
}
</script>