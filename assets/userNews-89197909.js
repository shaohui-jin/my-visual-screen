import{d as u,r as a,b as e,f as l,F as i,e as c}from"./index-d4851931.js";const r=u({setup(){const o=a([{label:"关于版本发布的通知",value:"my-visual-screen，基于 vue3 + CompositionAPI + typescript + vite + element plus，正式发布时间：待定！",time:"2023-09-22"},{label:"关于学习交流的通知",value:"QQ群号码 xxxx，欢迎小伙伴入群学习交流探讨！",time:"2023-09-22"}]);return{newsList:o,onAllReadClick:()=>{o.value=[]},onGoToGihubClick:()=>{window.open("https://github.com/shaohui-jin/shaohui-jin.github.io")}}},render(){const{newsList:o,onAllReadClick:n,onGoToGihubClick:s}=this;return e(i,null,[e("div",{class:"layout-navbar-breadcrumb-user-news"},[e("div",{class:"head-box"},[e("div",{class:"head-box-title"},[l("通知")]),o.length>0&&e("div",{class:"head-box-btn",onClick:n},[l("全部已读")])]),e("div",{class:"content-box"},[o.length>0?o.map(t=>e(i,null,[e("div",{class:"content-box-item"},[e("div",null,[t.label]),e("div",{class:"content-box-msg"},[t.value]),e("div",{class:"content-box-time"},[t.time])])])):e(c("el-empty"),{description:"暂无通知"},null)]),o.length>0&&e("div",{class:"foot-box",onClick:s},[l("前往通知中心")])])])}});export{r as default};
