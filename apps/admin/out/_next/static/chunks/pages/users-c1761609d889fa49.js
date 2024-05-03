(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2892],{9312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return r(2115)}])},2115:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return q}});var s=r(52322),a=r(28044),n=r(30195),o=r(1201),i=r(33991),l=r(21044),d=r(50897),c=r(79562),u=r(1888),m=r(19034),p=r.n(m),h=r(78161),g=r(2784),f=r(73675);let w=e=>{let{color:t="black",size:r=24,...a}=e;return(0,s.jsxs)(f.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[(0,s.jsx)(f.UL,{width:"20",height:"16",x:"2",y:"4",rx:"2",stroke:`${t}`}),(0,s.jsx)(f.y$,{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",stroke:`${t}`})]})};w.displayName="Mail";let y=(0,g.memo)((0,h.H)(w));var x=r(32627),v=r(55607);let b=e=>{let{color:t="black",size:r=24,...a}=e;return(0,s.jsxs)(f.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[(0,s.jsx)(f.y$,{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",stroke:`${t}`}),(0,s.jsx)(f.Cd,{cx:"12",cy:"7",r:"4",stroke:`${t}`})]})};b.displayName="User";let _=(0,g.memo)((0,h.H)(b));var j=r(48115),k=r(48715),P=r(6289),S=r(26887);let z="YYYY-MM-DD HH:mm:ss",$={username:y,type:x.V,passwod:v.s,repassword:v.s},A="/adminapi/v1/accounts",L="/adminapi/v1/groups";var T={users:{component:e=>{var t;let{pageState:r,initialItems:u,itemData:m,pageSession:h,extraData:f}=e,[w,y]=(0,g.useState)(null!==(t=null==f?void 0:f.groups)&&void 0!==t?t:(0,P.E)("pending"));(0,S.a)(e=>{j.bl.get(L,e)},y,null==f?void 0:f.objects);let x=e=>{let t=w.data.items.map(e=>e.name).find(t=>t==e);return t||""};return(0,o.G)(()=>"At this moment the user is browsing the user management page. The user management page allows to list, create, read, update and delete users and allows to reset the user passwords, chahing the user privileges (admin true/false) and chaing the user types.\n            The zod schema for the user object is:\n            export const UserSchema = Schema.object({\n                username: z.string().email().label('email').hint('user@example.com').static().id().search(),\n                type: z.string().min(1).hint('user, admin, ...').search().help(\"The type refers to a group name. Groups contains privileges (admin true/false) and workspaces.\"),\n                password: z.string().min(6).hint('**********').secret().onCreate('cypher').onUpdate('update').onRead('clearPassword').onList('clearPassword').help(\"Salted hashed password using bcrypt.\"),\n                createdAt: z.string().min(1).generate((obj) => moment().toISOString()).search(),\n                lastLogin: z.string().optional().search(),\n                from: z.string().min(1).search().generate((obj) => 'admin').help(\"Interface used to create the user. Users can be created from command line or from the admin panel\")\n            })\n            the user management system is located at /packages/protolib/bundles/users. The api for managing users is for admins only, and its located at /adminapi/v1/accounts. To read a specify account, /adminapi/v1/accounts/:email.\n            The UI of the users page is located at /packages/protolib/bundles/users/adminPages.tsx and the schema and protomodel declaration at /packages/protolib/bundles/users/usersSchema.ts. The API file is located at /packages/protolib/bundles/users/usersAPI.ts.\n            The user management page allows to manage the users of the system. Users are able to login with their email and password.\n            "+((null==u?void 0:u.isLoaded)?"Currently the system returned the following information: "+JSON.stringify(u.data):"")),(0,s.jsx)(i.D,{title:"Users",pageSession:h,children:(0,s.jsx)(l.V,{integratedChat:!0,enableAddToInitialData:!0,entityName:"accounts",itemData:m,rowIcon:_,sourceUrl:A,initialItems:u,numColumnsForm:1,name:"user",defaultView:"list",onAdd:e=>{if(e.password!=e.repassword)throw"Passwords do not match";let{repassword:t,...r}=e;return r},onEdit:e=>{if(e.password!=e.repassword)throw"Passwords do not match";let{repassword:t,...r}=e;return r},customFields:{type:{component:(e,t,r,a)=>{var n;return("add"==a||"edit"==a)&&(0,s.jsx)(k.E,{f:1,title:"type",elements:null==w?void 0:null===(n=w.data)||void 0===n?void 0:n.items.map(e=>e.name).map(e=>e),value:x(t),setValue:e=>r(e)})}}},columns:d.Z.columns(d.Z.column("email",e=>e.username,"username"),d.Z.column("type",e=>e.type,"tyoe",e=>{var t;return(0,s.jsx)(c.A,{text:null===(t=e.type)||void 0===t?void 0:t.toUpperCase(),color:"admin"==e.type?"$color5":"$gray5"})}),d.Z.column("from",e=>e.from,"from",e=>{var t;return(0,s.jsx)(c.A,{text:null===(t=e.from)||void 0===t?void 0:t.toUpperCase(),color:"cmd"==e.from?"$blue5":"$gray5"})}),d.Z.column("created",e=>e.createdAt,"createdAt",e=>p()(e.createdAt).format(z)),d.Z.column("last login",e=>e.lastLogin,"lastLogin",e=>e.lastLogin?(0,s.jsx)(c.A,{text:p()(e.lastLogin).format(z),color:"$gray5"}):(0,s.jsx)(c.A,{text:"never",color:"$gray5"}))),extraFieldsForms:{repassword:n.z.string().min(6).label("repeat password").after("password").hint("**********").secret()},model:a.T,pageState:r,icons:$,dataTableGridProps:{itemMinWidth:300,spacing:20}})})},getServerSideProps:(0,u.eq)(A,["admin"],{},async()=>({groups:await j.bl.get(L)}))}},U=r(97729),I=r.n(U);function q(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(I(),{children:(0,s.jsx)("title",{children:"Protofy - Users"})}),(0,s.jsx)(T.users.component,{...e})]})}},28044:function(e,t,r){"use strict";r.d(t,{T:function(){return d}});var s=r(75370),a=r(30195),n=r(54283),o=r(19034),i=r.n(o);let l=s.V_.object({username:a.z.string().email().label("email").hint("user@example.com").static().id().search(),type:a.z.string().min(1).label("group").hint("user, admin, ...").search().help("The type refers to a group name. Groups contains privileges (admin true/false) and workspaces."),password:a.z.string().min(6).hint("**********").secret().onCreate("cypher").onUpdate("update").onRead("clearPassword").onList("clearPassword").help("Salted hashed password using bcrypt."),permissions:a.z.array(a.z.string()).optional().label("additional permissions"),createdAt:a.z.string().min(1).generate(e=>i()().toISOString()).search().hidden().indexed(),lastLogin:a.z.string().optional().search().hidden(),from:a.z.string().min(1).search().generate(e=>"admin").help("Interface used to create the user. Users can be created from command line or from the admin panel").hidden()}),d=n.$.createDerived("UserModel",l)},79562:function(e,t,r){"use strict";r.d(t,{A:function(){return l}});var s=r(52322),a=r(2784),n=r(8939),o=r(60545),i=r(70396);let l=e=>{let{loading:t,icon:r,text:l,bold:d,color:c,...u}=e;return(0,s.jsxs)(n.sL,{ai:"center",jc:"center",bc:null!=c?c:"$color5",p:2,px:"$3",br:25,...u,children:[r&&a.cloneElement(r,{size:20,strokeWidth:.7,color:"var(--color)"}),l&&(0,s.jsx)("span",{className:(0,i.concatClassName)("  is_SizableText _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px   _o-0d0t9746  _col-675002279 _ff-299667014 _fow-233016047 _ls-167743966 _fos-229441127 _lh-222976480 font_body  "+(r?" _ml-1481558214":" _ml-1481558400")+" "+(d?" _fow-900":" _fow-400")),children:l}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"  is_Spacer _ai-stretch _dsp-flex _fd-column _fb-auto _bxs-border-box _pos-relative _mih-9px _miw-9px _fs-0 _pe-none _w-9px _h-9px "}),(0,s.jsx)(o.$,{color:"var(--color8)",scale:.7,size:"small"})]})]})};r(71619)},1888:function(e,t,r){"use strict";r.d(t,{F7:function(){return o},eq:function(){return i}});var s=r(46149),a=r(6429),n=r(48115);let o=e=>s.l.SSR?e:void 0;function i(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o(async o=>{var i,l,d,c,u,m;let p={itemsPerPage:parseInt(o.query.itemsPerPage)?parseInt(o.query.itemsPerPage):"",page:parseInt(o.query.page,10)?parseInt(o.query.page,10):"",search:null!==(i=o.query.search)&&void 0!==i?i:"",orderBy:null!==(l=o.query.orderBy)&&void 0!==l?l:"",orderDirection:null!==(d=o.query.orderDirection)&&void 0!==d?d:"",view:null!==(c=o.query.view)&&void 0!==c?c:"",item:null!==(u=o.query.item)&&void 0!==u?u:"",editFile:null!==(m=o.query.editFile)&&void 0!==m?m:"",..."function"==typeof r?await r(o):r},h="function"==typeof e?e(o):e;return(0,a.NA)(o,t,{sourceUrl:h,initialItems:await n.bl.get({url:(0,a.VM)(h,o),...p}),itemData:o.query.item?await n.bl.get((0,a.VM)(h+"/"+o.query.item,o)):"",extraData:{..."function"==typeof s?await s(o):s},pageState:{...p}})})}},71619:function(){}},function(e){e.O(0,[4837,8641,8081,4733,1335,8873,2859,6313,3950,4163,2423,274,9224,6133,986,8837,4011,2029,5571,9774,2888,179],function(){return e(e.s=9312)}),_N_E=e.O()}]);