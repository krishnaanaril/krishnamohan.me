(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",function(){return y});var r=n("ofXK"),c=n("sbAP"),a=n("tyNb"),o=n("jtHE"),i=n("GuhC"),s=n("zx2A");class d{constructor(t){this.notifier=t}call(t,e){const n=new g(t),r=Object(s.c)(this.notifier,new s.a(n));return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n}}class g extends s.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var m=n("fXoL");function l(t,e){if(1&t&&(m.Kb(0,"div",1),m.cc(1,"\n    "),m.Kb(2,"div",2),m.cc(3,"\n        "),m.cc(4,"\n        "),m.Kb(5,"h1",3),m.cc(6),m.Jb(),m.cc(7,"\n        "),m.Kb(8,"div"),m.cc(9,"\n            "),m.Kb(10,"time",4),m.cc(11),m.Sb(12,"date"),m.Jb(),m.cc(13,"\n        "),m.Jb(),m.cc(14,"\n    "),m.Jb(),m.cc(15,"\n    "),m.Gb(16,"hr",5),m.cc(17,"\n    "),m.Kb(18,"div",6),m.cc(19,"\n        "),m.Gb(20,"scully-content"),m.cc(21,"\n    "),m.Jb(),m.cc(22,"\n    "),m.Gb(23,"hr"),m.cc(24,"\n    "),m.cc(25,"\n"),m.Jb()),2&t){const t=m.Rb();m.wb(6),m.dc(t.metaData.title),m.wb(4),m.Wb("datetime",t.metaData.date),m.wb(1),m.dc(m.Tb(12,3,t.metaData.date))}}let b=(()=>{class t{constructor(t,e){this.scully=t,this.metaService=e,this.destroyed$=new o.a(1),this.current$=this.scully.getCurrent()}ngOnInit(){var t;this.current$.pipe((t=this.destroyed$,e=>e.lift(new d(t)))).subscribe(t=>this.setMetaDataInPage(t))}setMetaDataInPage(t){this.metaData=this.getMetaDataFromBlogRoute(t),this.metaService.setMetaForCurrentPage(this.metaData)}getMetaDataFromBlogRoute(t){return{title:t.title,description:t.description,date:t.date,category:t.category?t.category:"",imageUrl:t.image?t.image:"",keywords:t.keywords?t.keywords.split(",").map(t=>t.trim()):[],siteUrl:t.route,type:"website"}}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return t.\u0275fac=function(e){return new(e||t)(m.Fb(c.c),m.Fb(i.a))},t.\u0275cmp=m.zb({type:t,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","container mx-auto min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",4,"ngIf"],[1,"container","mx-auto","min-h-screen","bg-gray-200","text-gray-800","dark:bg-gray-800","dark:text-gray-50"],[1,""],[1,"text-3xl"],[3,"datetime"],[1,"w-1/4"],[1,"max-w-screen-md","mx-auto","p-12","leading-8"]],template:function(t,e){1&t&&m.bc(0,l,26,5,"div",0),2&t&&m.Wb("ngIf",e.metaData)},directives:[r.k,c.a],pipes:[r.e],styles:["ol[_ngcontent-%COMP%]{list-style-type:decimal}ul[_ngcontent-%COMP%]{list-style-type:disc;padding-left:2.5rem}p[_ngcontent-%COMP%]{padding-top:1.25rem;padding-bottom:1.25rem}h2[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem;margin-top:1.25rem;margin-bottom:1.25rem}h3[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem;margin-top:.75rem;margin-bottom:.75rem}pre[_ngcontent-%COMP%]{overflow-x:scroll;padding:1.25rem}code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}code[_ngcontent-%COMP%]{padding:.25rem .5rem}"]}),t})();const p=[{path:":title",component:b},{path:"**",component:b}];let u=(()=>{class t{}return t.\u0275mod=m.Db({type:t}),t.\u0275inj=m.Cb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(p)],a.g]}),t})(),y=(()=>{class t{}return t.\u0275mod=m.Db({type:t}),t.\u0275inj=m.Cb({factory:function(e){return new(e||t)},imports:[[r.c,u,c.b]]}),t})()}}]);