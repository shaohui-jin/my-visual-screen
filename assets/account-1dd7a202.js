import{u as d,G as p,H as g,d as w,w as h,I as x,q as y,c as S,v as F,b as e,e as t,J as C,K as I,y as V,f as u,F as B,E as R}from"./index-d4851931.js";import{U as b}from"./user-7338bae8.js";function A(o){const n=new Date(o).getHours();return n<6?"凌晨好":n<9?"早上好":n<12?"上午好":n<14?"中午好":n<17?"下午好":n<19?"傍晚好":n<22?"晚上好":"夜里好"}async function E(){if(!d().useUserStore.token)return!1;await p(),g()}const T=w({setup(){const o=h(),n=x(),s=y({isShowPassword:!1,ruleForm:{username:"",password:"",captcha:""},loading:{signIn:!1}}),r=()=>s.isShowPassword=!s.isShowPassword,l=S(()=>A(new Date)),a=async()=>{s.loading.signIn=!0,b.login(s.ruleForm).then(async i=>{window.App.$console.info("登录成功",i),d().useThemeStore.isRequestRoutes||await E(),c()}).catch(()=>!1).finally(()=>{s.loading.signIn=!1})},c=()=>{const i=l.value,f=o.query.redirect||"/",m=JSON.parse(o.query.params||"{}");n.push({path:f,query:m}),setTimeout(()=>{s.loading.signIn=!0,R.success(`${i}，欢迎回来`)},300)};return{currentTime:l,onSignIn:a,handleShowPassword:r,...F(s)}},render(){const{ruleForm:o,isShowPassword:n,loading:s,handleShowPassword:r,onSignIn:l}=this;return e(B,null,[e(t("el-form"),{class:"login-content-form"},{default:()=>[e(t("el-form-item"),{class:"login-animation-one"},{default:()=>[e(t("el-input"),{modelValue:o.username,"onUpdate:modelValue":a=>o.username=a,type:"text",placeholder:"用户名 admin 或不输均为test",clearable:!0,autocomplete:"off"},{prefix:()=>e(t("el-icon"),null,{default:()=>[e(C,null,null)]})})]}),e(t("el-form-item"),{class:"login-animation-two"},{default:()=>[e(t("el-input"),{modelValue:o.password,"onUpdate:modelValue":a=>o.password=a,type:n?"text":"password",placeholder:"密码 123456",autocomplete:"off"},{prefix:()=>e(t("el-icon"),null,{default:()=>[e(I,null,null)]}),suffix:()=>e("i",{class:["iconfont","el-input__icon","login-content-password",n?"icon-xianshimima":"icon-yincangmima"],onClick:r},null)})]}),e(t("el-form-item"),{class:"login-animation-three"},{default:()=>[e(t("el-row"),{gutter:15},{default:()=>[e(t("el-col"),{span:16},{default:()=>[e(t("el-input"),{modelValue:o.captcha,"onUpdate:modelValue":a=>o.captcha=a,type:"text",maxlength:"4",placeholder:"请输入验证码",clearable:!0,autocomplete:"off"},{prefix:()=>e(t("el-icon"),null,{default:()=>[e(V,null,null)]})})]}),e(t("el-col"),{span:8},{default:()=>[e("div",{class:"login-content-code"},[e("span",{class:"login-content-code-img"},[u("1234")])])]})]})]}),e(t("el-form-item"),{class:"login-animation-four"},{default:()=>[e(t("el-button"),{type:"primary",class:"login-content-submit",round:!0,loading:s.signIn,onClick:l},{default:()=>[e("span",null,[u("登录")])]})]}),e(t("el-form-item"),{class:"login-animation-five"},{default:()=>[e(t("el-button"),{text:!0,size:"small"},{default:()=>[u("第三方登录")]}),e(t("el-button"),{text:!0,size:"small"},{default:()=>[u("友情链接")]})]})]})])}});export{T as default};
