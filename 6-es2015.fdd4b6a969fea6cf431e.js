(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",function(){return f});var r=n("ofXK"),c=n("sbAP"),a=n("tyNb"),o=n("jtHE"),i=n("GuhC"),s=n("zx2A");class b{constructor(t){this.notifier=t}call(t,e){const n=new d(t),r=Object(s.c)(this.notifier,new s.a(n));return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n}}class d extends s.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var g=n("fXoL");function l(t,e){if(1&t&&(g.Kb(0,"div",11),g.cc(1),g.Jb()),2&t){const t=e.$implicit;g.wb(1),g.dc(t)}}function m(t,e){if(1&t&&(g.Kb(0,"div",1),g.cc(1,"\n    "),g.Kb(2,"div",2),g.cc(3,"\n        "),g.Kb(4,"div",3),g.cc(5,"\n            "),g.bc(6,l,2,1,"div",4),g.cc(7,"\n        "),g.Jb(),g.cc(8,"\n        "),g.Kb(9,"div",5),g.cc(10,"\n            "),g.Kb(11,"h1",6),g.cc(12),g.Jb(),g.cc(13,"\n        "),g.Jb(),g.cc(14,"\n        "),g.Kb(15,"div",7),g.cc(16,"\n            "),g.Kb(17,"time",8),g.cc(18),g.Sb(19,"date"),g.Jb(),g.cc(20,"\n        "),g.Jb(),g.cc(21,"\n    "),g.Jb(),g.cc(22,"\n    "),g.Gb(23,"hr",9),g.cc(24,"\n    "),g.Kb(25,"div",10),g.cc(26,"\n        "),g.Gb(27,"scully-content"),g.cc(28,"\n    "),g.Jb(),g.cc(29,"\n    "),g.Gb(30,"hr"),g.cc(31,"\n    "),g.cc(32,"\n"),g.Jb()),2&t){const t=g.Rb();g.wb(6),g.Wb("ngForOf",t.metaData.keywords),g.wb(6),g.dc(t.metaData.title),g.wb(5),g.Wb("datetime",t.metaData.date),g.wb(1),g.dc(g.Tb(19,4,t.metaData.date))}}let p=(()=>{class t{constructor(t,e){this.scully=t,this.metaService=e,this.destroyed$=new o.a(1),this.current$=this.scully.getCurrent()}ngOnInit(){var t;this.current$.pipe((t=this.destroyed$,e=>e.lift(new b(t)))).subscribe(t=>this.setMetaDataInPage(t))}setMetaDataInPage(t){this.metaData=this.getMetaDataFromBlogRoute(t),this.metaService.setMetaForCurrentPage(this.metaData)}getMetaDataFromBlogRoute(t){return{title:t.title,description:t.description,date:t.date,category:t.category?t.category:"",imageUrl:t.image?t.image:"",keywords:t.keywords?t.keywords.split(",").map(t=>t.trim()):[],siteUrl:t.route,type:"website"}}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return t.\u0275fac=function(e){return new(e||t)(g.Fb(c.c),g.Fb(i.a))},t.\u0275cmp=g.zb({type:t,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","container mx-auto min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",4,"ngIf"],[1,"container","mx-auto","min-h-screen","bg-gray-200","text-gray-800","dark:bg-gray-800","dark:text-gray-50"],[1,""],["aria-label","Blog tags/keywords",1,"pt-8","flex","flex-row","justify-center"],["class","bg-gray-300 dark:bg-gray-700 border border-gray-400 ml-2 mr-2 pb-2 pl-4 pr-4 pt-2 rounded-full",4,"ngFor","ngForOf"],[1,"max-w-screen-lg","mx-auto"],[1,"text-5xl","pt-5","pb-5","text-center"],[1,"flex","flex-row","justify-center","m-5","max-w-screen-sm","mx-auto"],[1,"text-center","text-xl",3,"datetime"],[1,"mx-auto","w-1/4"],[1,"max-w-screen-md","mx-auto","p-12","leading-8"],[1,"bg-gray-300","dark:bg-gray-700","border","border-gray-400","ml-2","mr-2","pb-2","pl-4","pr-4","pt-2","rounded-full"]],template:function(t,e){1&t&&g.bc(0,m,33,6,"div",0),2&t&&g.Wb("ngIf",e.metaData)},directives:[r.k,r.j,c.a],pipes:[r.e],styles:["ol[_ngcontent-%COMP%]{list-style-type:decimal}ul[_ngcontent-%COMP%]{list-style-type:disc;padding-left:2.5rem}p[_ngcontent-%COMP%]{padding-top:1.25rem;padding-bottom:1.25rem}h2[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem;margin-top:1.25rem;margin-bottom:1.25rem}h3[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem;margin-top:.75rem;margin-bottom:.75rem}pre[_ngcontent-%COMP%]{overflow-x:auto;padding:1.25rem}code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}code[_ngcontent-%COMP%]{padding:.25rem .5rem}"]}),t})();const u=[{path:":title",component:p},{path:"**",component:p}];let y=(()=>{class t{}return t.\u0275mod=g.Db({type:t}),t.\u0275inj=g.Cb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(u)],a.g]}),t})(),f=(()=>{class t{}return t.\u0275mod=g.Db({type:t}),t.\u0275inj=g.Cb({factory:function(e){return new(e||t)},imports:[[r.c,y,c.b]]}),t})()}}]);