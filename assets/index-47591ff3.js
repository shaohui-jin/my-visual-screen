import{d as n,u as r,b as t,F as s,p as e,_ as o}from"./index-d4851931.js";const a=e(()=>o(()=>import("./default-ce0ac208.js"),["assets/default-ce0ac208.js","assets/index-d4851931.js","assets/index-2648dcb0.css"])),l=e(()=>o(()=>import("./classic-0f9f3e64.js"),["assets/classic-0f9f3e64.js","assets/index-d4851931.js","assets/index-2648dcb0.css"])),_=e(()=>o(()=>import("./transverse-ce4ea41a.js"),["assets/transverse-ce4ea41a.js","assets/index-d4851931.js","assets/index-2648dcb0.css"])),c=e(()=>o(()=>import("./columns-b7fca14c.js"),["assets/columns-b7fca14c.js","assets/index-d4851931.js","assets/index-2648dcb0.css"])),m=n({name:"SLALayout",setup(){const u=r().useThemeStore.layout;return{getLayout:()=>{switch(u){case"default":return t(a,null,null);case"classic":return t(l,null,null);case"transverse":return t(_,null,null);case"columns":return t(c,null,null)}}}},render(){return t(s,null,[this.getLayout()])}});export{m as default};
