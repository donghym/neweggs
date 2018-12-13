<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei",PingFangSC-Regular,Helvetica,Droid Sans,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  box-sizing: border-box;
  outline:0;
}
blockquote,body,button,dd,dl,dt,fieldset,form,h1,h4,h4,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul {
  margin:0;
  padding:0;
  vertical-align:baseline;
  font-size: 12px;
}
img {
  border:0 none;
  vertical-align:top
}
em,i {
  font-style:normal
}
ol,ul {
  list-style:none
}
button,h1,h4,h4,h4,h5,h6,input,select {
  font-size:100%;
  font-family:inherit
}
table {
  border-collapse:collapse;
  border-spacing:0
}
a,a:visited {
  text-decoration:none;
  color:#333
}
body {
  margin:0 auto;
  min-width:320px;
  max-width:540px;
  background:#fff;
  font-size:14px;
  font-family:-apple-system,Helvetica,sans-serif;
  line-height:1.5;
  color:#666;
  -webkit-text-size-adjust:100%!important;
}
.clearfix:after,.clearfix:before{
  content:'';
  display: table;
}
.clearfix:after{clear: both;zoom:1;}
</style>
