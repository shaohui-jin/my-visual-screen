import{d as u,c as l,b as e,F as s,u as o,l as r}from"./index-d4851931.js";const h=u({setup(){const{proxy:n}=r(),t=l(()=>o().useThemeStore.globalTitle);return{showLogo:l(()=>{const{isCollapse:i,layout:a}=o().useThemeStore;return!i||a==="classic"||document.body.clientWidth<1e3}),globalTitle:t,onThemeConfigChange:()=>{if(o().useThemeStore.layout==="transverse")return!1;n.mittBus.emit("onMenuClick"),o().useThemeStore.isCollapse=!o().useThemeStore.isCollapse}}},render(){return e(s,null,[this.showLogo?e(s,null,[e("div",{class:"layout-logo",onClick:this.onThemeConfigChange},[e("img",{src:"/ms-icon-144.png",class:"layout-logo-medium-img"},null),e("span",null,[this.globalTitle])])]):e(s,null,[e("div",{class:"layout-logo-size",onClick:this.onThemeConfigChange},[e("img",{src:"/ms-icon-144.png",class:"layout-logo-size-img"},null)])])])}});export{h as default};