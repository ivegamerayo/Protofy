(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3584],{68918:function(e,t,r){"use strict";r.d(t,{d:function(){return l}});var i=r(78161),s=r(2784),a=r(87656),n=r(52322);let o=e=>{let{color:t="black",size:r=24,...i}=e;return(0,n.jsxs)(a.Svg,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i,children:[(0,n.jsx)(a.Path,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",stroke:`${t}`}),(0,n.jsx)(a.Polyline,{points:"15 3 21 3 21 9",stroke:`${t}`}),(0,n.jsx)(a.Line,{x1:"10",x2:"21",y1:"14",y2:"3",stroke:`${t}`})]})};o.displayName="ExternalLink";let l=(0,s.memo)((0,i.H)(o))},34085:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return r(26920)}])},26920:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var i=r(52322),s=r(30195),a=r(75370),n=r(54283);let o=a.V_.object({name:s.z.string().hint("catalog, tutorial, invoice...").search(),description:s.z.string().search(),url:s.z.string().label("url").hint("http://...").static().search(),type:s.z.union([s.z.literal("text"),s.z.literal("video"),s.z.literal("image"),s.z.literal("code"),s.z.literal("youtube"),s.z.literal("pdf")]).search(),tags:s.z.array(s.z.string()).search()}),l=s.z.object({...a.Pp.shape,...o.shape});class c extends n.J{list(e){if(!e)return this.read();if(e.startsWith("tags:")){let t=e.slice(5).split(",").map(e=>e.trim().toLowerCase());if(t.every(e=>this.data.tags.includes(e.toLowerCase())))return this.read()}else{let r=this.objectSchema.is("search").getFields();for(var t=0;t<r.length;t++)if((this.data[r[t]]+"").toLowerCase().includes(e.toLowerCase()))return this.read()}}static _newInstance(e,t){return new c(e,t)}constructor(e,t){super(e,l,t,"Resource")}}var d=r(40214),u=r(13997),h=r(50897),m=r(79562),g=r(1888),p=r(71932),f=r(68918),v=r(78161),y=r(2784),w=r(87656);let j=e=>{let{color:t="black",size:r=24,...s}=e;return(0,i.jsxs)(w.Svg,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[(0,i.jsx)(w.Path,{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:`${t}`}),(0,i.jsx)(w.Path,{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:`${t}`})]})};j.displayName="Link";let x=(0,y.memo)((0,v.H)(j)),b={};var S={resources:{component:e=>{var t;let{pageState:r,initialItems:s,pageSession:a}=e;return(0,i.jsx)(d.D,{title:"Resources",pageSession:a,children:(0,i.jsx)(u.V,{integratedChat:!0,rowIcon:x,enableAddToInitialData:!0,sourceUrl:"/adminapi/v1/resources",initialItems:s,numColumnsForm:1,name:"resource",columns:h.Z.columns(h.Z.column("","lol",!0,e=>(0,i.jsx)("a",{href:e.url,target:"_blank",children:(0,i.jsx)(p.z,{Icon:f.d})}),!0,"50px"),h.Z.column("name","name",!0,void 0,!0,"250px"),h.Z.column("url","url",!0,void 0,!0,"400px"),h.Z.column("type","type",!0,e=>(0,i.jsx)(m.A,{text:e.type,color:"$gray5"}),!0,"150px"),h.Z.column("tags","tags",!1,e=>Object.keys(null!==(t=null==e?void 0:e.tags)&&void 0!==t?t:[]).length?Object.keys(e.tags).map((t,r)=>(0,i.jsx)(m.A,{ml:r?"$2":"$0",text:e.tags[t],color:"$color5"},t)):(0,i.jsx)(m.A,{text:"empty",color:"$gray5"}),!0,"200px")),model:c,pageState:r,icons:b})})},getServerSideProps:(0,g.eq)("/adminapi/v1/resources",["admin"],{})}},k=r(97729),I=r.n(k);function _(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(I(),{children:(0,i.jsx)("title",{children:"Protofy - Resources"})}),(0,i.jsx)(S.resources.component,{...e})]})}},54283:function(e,t,r){"use strict";r.d(t,{$:function(){return l},J:function(){return o}});var i=r(94801),s=r(55858),a=r(53596);let n=(0,a.j)();class o{get(e,t){var r;return null!==(r=this.data[e])&&void 0!==r?r:t}getObjectSchema(){return this.objectSchema}getModelName(){return this.modelName}getLocation(){let e=this.objectSchema.is("location").getFields();if(!e.length)throw"Model error: "+this.getModelName()+" doesn't have location information";let t=e[0],r=this.objectSchema.getFieldKeyDefinition(t,"latKey"),i=this.objectSchema.getFieldKeyDefinition(t,"lonKey");if(this.data[t])return{lat:this.data[t][r],lon:this.data[t][i]}}getId(){return this.data[this.idField]}getNotificationsTopic(e){return"notifications/".concat(this.getModelName(),"/").concat(e,"/").concat(this.getId())}getNotificationsPayload(){return this.serialize()}setId(e,t){return new this.constructor({...t||this.data,[this.idField]:e},this.session,this.modelName)}isVisible(){return!this.isDeleted()}isDeleted(){return!!this.data._deleted}list(e,t,r){if(!e)return this.read();{let{parsed:t,searchWithoutTags:r}=function(e){let t;let r=/(\w+):("[^"]+"|\S+)/g,i={},s=e;for(;null!==(t=r.exec(e));){let e=t[1].toLowerCase(),r=t[2].replace(/"/g,"").toLowerCase();i[e]=r,s=s.replace(t[0],"")}return{parsed:i,searchWithoutTags:s=s.trim()}}(e);for(let[e,r]of Object.entries(t))if(!this.data.hasOwnProperty(e)||this.data[e]!=r)return;let s=this.objectSchema.is("search").getFields();for(var i=0;i<s.length;i++)if((this.data[s[i]]+"").toLowerCase().includes(r.toLowerCase()))return this.read()}}async listTransformed(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=this.list(e,r,i);if(s)return await this.getObjectSchema().apply("list",s,t)}create(e){let t=this.getData(e);return n.debug({transformed:t},"Creating object: ".concat(JSON.stringify(t))),new this.constructor(t,this.session,this.modelName).validate()}async createTransformed(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=await this.getObjectSchema().apply("create",{...this.data},e);return this.create(t)}read(e){return{...this.data}}async readTransformed(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=await this.getObjectSchema().apply("read",this.read(t),e);return r}update(e,t){return e.setId(this.getId(),{...t||e.data})}async updateTransformed(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=await this.getObjectSchema().apply("update",{...e.data},t,{...this.data});return this.update(e,r)}delete(e){return new this.constructor({_deleted:!0,...e||this.data},this.session,this.modelName)}async deleteTransformed(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=await this.getObjectSchema().apply("delete",{...this.data},e);return this.delete(t)}validate(){return this.schema.parse(this.data),this}serialize(){return JSON.stringify(this.data)}static getApiOptions(){throw Error("Derived class must implement getApiOptions")}static _newInstance(e,t){throw Error("Derived class must implement _newInstance.")}static unserialize(e,t){return this._newInstance(JSON.parse(e),t)}static load(e,t){return this._newInstance(e,t)}static sort(e,t,r){return e.sort((e,i)=>e[t]>i[t]?"asc"===r?1:-1:e[t]<i[t]?"asc"===r?-1:1:0)}getData(e){return{...this.getObjectSchema().applyGenerators(null!=e?e:this.data)}}constructor(e,t,r,a){var n,o;this.data=e,this.session=null!=r?r:(0,i.ed)(),this.schema=t,this.objectSchema=s.U.load(this.schema),this.modelName=null!==(n=null==a?void 0:a.toLowerCase())&&void 0!==n?n:"unknown";let l=this.objectSchema.is("id");l.getFields().length>1&&(l=l.isNot("fallbackId")),this.idField=null!==(o=l.getFirst("id"))&&void 0!==o?o:"id"}}class l extends o{static _newInstance(e,t){throw Error("Derived class must implement _newInstance.")}static createDerived(e,t,r,i){class s extends l{static _newInstance(e,t){return new s(e,t)}static getApiOptions(){return{name:r,prefix:i}}constructor(r,i){super(r,t,i,e.substring(0,e.length-5).toLowerCase())}}return s.schemaInstance=t,Object.defineProperty(s,"name",{value:e,writable:!1}),s}constructor(e,t,r,i){super(e,t,r,i)}}},1888:function(e,t,r){"use strict";r.d(t,{F7:function(){return n},eq:function(){return o}});var i=r(44499),s=r(6429),a=r(48115);let n=e=>i.l.SSR?e:void 0;function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n(async n=>{var o,l,c,d,u,h;let m={itemsPerPage:parseInt(n.query.itemsPerPage)?parseInt(n.query.itemsPerPage):"",page:parseInt(n.query.page,10)?parseInt(n.query.page,10):"",search:null!==(o=n.query.search)&&void 0!==o?o:"",orderBy:null!==(l=n.query.orderBy)&&void 0!==l?l:"",orderDirection:null!==(c=n.query.orderDirection)&&void 0!==c?c:"",view:null!==(d=n.query.view)&&void 0!==d?d:"",item:null!==(u=n.query.item)&&void 0!==u?u:"",editFile:null!==(h=n.query.editFile)&&void 0!==h?h:"",..."function"==typeof r?await r(n):r},g="function"==typeof e?e(n):e;return(0,s.NA)(n,t,{sourceUrl:g,initialItems:await a.bl.get({url:(0,s.VM)(g,n),...m}),itemData:n.query.item?await a.bl.get((0,s.VM)(g+"/"+n.query.item,n)):"",extraData:{..."function"==typeof i?await i(n):i},pageState:{...m}})})}}},function(e){e.O(0,[8641,8081,4733,1335,8873,2859,6313,3950,9331,9613,7369,2905,1004,9097,8404,4608,9774,2888,179],function(){return e(e.s=34085)}),_N_E=e.O()}]);