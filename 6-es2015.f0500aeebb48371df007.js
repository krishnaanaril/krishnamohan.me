(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",function(){return p});var c=n("ofXK"),a=n("sbAP"),r=n("tyNb"),s=n("jtHE"),i=n("GuhC"),o=n("zx2A");class l{constructor(t){this.notifier=t}call(t,e){const n=new b(t),c=Object(o.c)(this.notifier,new o.a(n));return c&&!n.seenValue?(n.add(c),e.subscribe(n)):n}}class b extends o.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var d=n("fXoL");function u(t,e){if(1&t&&(d.Kb(0,"div",1),d.cc(1,"\n    "),d.Kb(2,"div",2),d.cc(3,"\n        "),d.cc(4,"\n        "),d.Kb(5,"h1",3),d.cc(6),d.Jb(),d.cc(7,"\n        "),d.Kb(8,"div"),d.cc(9,"\n            "),d.Kb(10,"time",4),d.cc(11),d.Sb(12,"date"),d.Jb(),d.cc(13,"\n        "),d.Jb(),d.cc(14,"\n    "),d.Jb(),d.cc(15,"\n    "),d.Gb(16,"hr"),d.cc(17,"\n    "),d.Kb(18,"div",5),d.cc(19,"\n        "),d.Gb(20,"scully-content"),d.cc(21,"\n    "),d.Jb(),d.cc(22,"\n    "),d.Gb(23,"hr"),d.cc(24,"\n    "),d.cc(25,"\n"),d.Jb()),2&t){const t=d.Rb();d.wb(6),d.dc(t.metaData.title),d.wb(4),d.Wb("datetime",t.metaData.date),d.wb(1),d.dc(d.Tb(12,3,t.metaData.date))}}let g=(()=>{class t{constructor(t,e){this.scully=t,this.metaService=e,this.destroyed$=new s.a(1),this.current$=this.scully.getCurrent()}ngOnInit(){var t;this.current$.pipe((t=this.destroyed$,e=>e.lift(new l(t)))).subscribe(t=>this.setMetaDataInPage(t))}setMetaDataInPage(t){this.metaData=this.getMetaDataFromBlogRoute(t),this.metaService.setMetaForCurrentPage(this.metaData)}getMetaDataFromBlogRoute(t){return{title:t.title,description:t.description,date:t.date,category:t.category?t.category:"",imageUrl:t.image?t.image:"",keywords:t.keywords?t.keywords.split(",").map(t=>t.trim()):[],siteUrl:t.route,type:"website"}}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return t.\u0275fac=function(e){return new(e||t)(d.Fb(a.c),d.Fb(i.a))},t.\u0275cmp=d.zb({type:t,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","container mx-auto min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",4,"ngIf"],[1,"container","mx-auto","min-h-screen","bg-gray-200","text-gray-800","dark:bg-gray-800","dark:text-gray-50"],[1,""],[1,"text-3xl"],[3,"datetime"],[1,"max-w-screen-md","mx-auto","p-12","leading-8"]],template:function(t,e){1&t&&d.bc(0,u,26,5,"div",0),2&t&&d.Wb("ngIf",e.metaData)},directives:[c.k,a.a],pipes:[c.e],styles:["ol[_ngcontent-%COMP%]{list-style-type:decimal}ul[_ngcontent-%COMP%]{list-style-type:disc}"]}),t})();const m=[{path:":title",component:g},{path:"**",component:g}];let y=(()=>{class t{}return t.\u0275mod=d.Db({type:t}),t.\u0275inj=d.Cb({factory:function(e){return new(e||t)},imports:[[r.g.forChild(m)],r.g]}),t})(),p=(()=>{class t{}return t.\u0275mod=d.Db({type:t}),t.\u0275inj=d.Cb({factory:function(e){return new(e||t)},imports:[[c.c,y,a.b]]}),t})()}}]);