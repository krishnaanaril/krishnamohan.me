(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",function(){return y});var a=n("ofXK"),r=n("sbAP"),s=n("tyNb"),c=n("jtHE"),i=n("GuhC"),o=n("zx2A");class d{constructor(t){this.notifier=t}call(t,e){const n=new b(t),a=Object(o.c)(this.notifier,new o.a(n));return a&&!n.seenValue?(n.add(a),e.subscribe(n)):n}}class b extends o.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var l=n("fXoL");function u(t,e){if(1&t&&(l.Kb(0,"div",1),l.dc(1,"\n    "),l.Kb(2,"div",2),l.dc(3,"\n        "),l.dc(4,"\n        "),l.Kb(5,"h1",3),l.dc(6),l.Jb(),l.dc(7,"\n        "),l.Kb(8,"div"),l.dc(9,"\n            "),l.Kb(10,"time",4),l.dc(11),l.Sb(12,"date"),l.Jb(),l.dc(13,"\n        "),l.Jb(),l.dc(14,"\n    "),l.Jb(),l.dc(15,"\n    "),l.Gb(16,"hr"),l.dc(17,"\n    "),l.Kb(18,"div",5),l.dc(19,"\n        "),l.Gb(20,"scully-content"),l.dc(21,"\n    "),l.Jb(),l.dc(22,"\n    "),l.Gb(23,"hr"),l.dc(24,"\n    "),l.dc(25,"\n"),l.Jb()),2&t){const t=l.Rb();l.wb(6),l.ec(t.metaData.title),l.wb(4),l.Wb("datetime",t.metaData.date),l.wb(1),l.ec(l.Tb(12,3,t.metaData.date))}}let g=(()=>{class t{constructor(t,e){this.scully=t,this.metaService=e,this.destroyed$=new c.a(1),this.current$=this.scully.getCurrent()}ngOnInit(){var t;this.current$.pipe((t=this.destroyed$,e=>e.lift(new d(t)))).subscribe(t=>this.setMetaDataInPage(t))}setMetaDataInPage(t){this.metaData=this.getMetaDataFromBlogRoute(t),this.metaService.setMetaForCurrentPage(this.metaData)}getMetaDataFromBlogRoute(t){return{title:t.title,description:t.description,date:t.date,category:t.category?t.category:"",imageUrl:t.image?t.image:"",keywords:t.keywords?t.keywords.split(",").map(t=>t.trim()):[],siteUrl:t.route,type:"website"}}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return t.\u0275fac=function(e){return new(e||t)(l.Fb(r.c),l.Fb(i.a))},t.\u0275cmp=l.zb({type:t,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","container mx-auto min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",4,"ngIf"],[1,"container","mx-auto","min-h-screen","bg-gray-200","text-gray-800","dark:bg-gray-800","dark:text-gray-50"],[1,""],[1,"text-3xl"],[3,"datetime"],[1,"w-768px"]],template:function(t,e){1&t&&l.cc(0,u,26,5,"div",0),2&t&&l.Wb("ngIf",e.metaData)},directives:[a.k,r.a],pipes:[a.e],styles:[""]}),t})();const m=[{path:":title",component:g},{path:"**",component:g}];let p=(()=>{class t{}return t.\u0275mod=l.Db({type:t}),t.\u0275inj=l.Cb({factory:function(e){return new(e||t)},imports:[[s.g.forChild(m)],s.g]}),t})(),y=(()=>{class t{}return t.\u0275mod=l.Db({type:t}),t.\u0275inj=l.Cb({factory:function(e){return new(e||t)},imports:[[a.c,p,r.b]]}),t})()}}]);