(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",(function(){return d}));var o=n("ofXK"),c=n("sbAP"),i=n("tyNb"),r=n("quSY"),a=n("GuhC"),s=n("fXoL");function b(t,e){if(1&t&&(s.Rb(0,"div",1),s.mc(1,"\n    "),s.Rb(2,"div",2),s.mc(3,"\n        "),s.Rb(4,"h1",3),s.mc(5),s.Qb(),s.mc(6,"\n        "),s.Rb(7,"div"),s.mc(8),s.Qb(),s.mc(9,"\n        "),s.Rb(10,"div"),s.mc(11),s.Qb(),s.mc(12,"\n        "),s.Rb(13,"div"),s.mc(14),s.Qb(),s.mc(15,"\n    "),s.Qb(),s.mc(16,"\n    "),s.Mb(17,"hr"),s.mc(18,"\n    "),s.Mb(19,"scully-content"),s.mc(20,"\n    "),s.Mb(21,"hr"),s.mc(22,"\n    "),s.Rb(23,"div",4),s.mc(24,"\n        Have questions/comments? Tweet @"),s.Rb(25,"a",5),s.mc(26,"krishnaanaril"),s.Qb(),s.mc(27,"\n    "),s.Qb(),s.mc(28,"\n"),s.Qb()),2&t){const t=s.ac();s.Bb(5),s.nc(t.metaData.title),s.Bb(3),s.nc(t.metaData.date),s.Bb(3),s.nc(t.metaData.category),s.Bb(3),s.nc(t.metaData.keywords[0])}}let m=(()=>{class t{constructor(t,e,n,o){this.router=t,this.route=e,this.scully=n,this.metaService=o,this.subscriptions=new r.a,this.current$=this.scully.getCurrent()}ngOnInit(){this.subscriptions.add(this.current$.subscribe(t=>{this.metaData={title:t.title,description:t.description,date:t.date,category:t.category?t.category:"",imageUrl:t.image?t.image:"",keywords:t.keywords?t.keywords.split(",").map(t=>t.trim()):[],siteUrl:t.route,type:"website"},this.metaService.setMetaForCurrentPage(this.metaData)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(i.d),s.Lb(i.a),s.Lb(c.c),s.Lb(a.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","blog-post",4,"ngIf"],[1,"blog-post"],[1,"title-section"],[1,"blog-title"],[1,"post-footer"],["href","https://twitter.com/krishnaanaril"]],template:function(t,e){1&t&&s.lc(0,b,29,4,"div",0),2&t&&s.fc("ngIf",e.metaData)},directives:[o.j,c.a],styles:["[_ngcontent-%COMP%]::slotted(h1){color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%]{margin:auto;max-width:768px;font-size:18px;line-height:1.5}img[_ngcontent-%COMP%]{width:75%;display:block;margin:auto}img[_ngcontent-%COMP%] + em[_ngcontent-%COMP%]{display:block;text-align:center}img[_ngcontent-%COMP%] + em[_ngcontent-%COMP%], img[_ngcontent-%COMP%] + em[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-size:.9rem;color:grey}pre[_ngcontent-%COMP%]{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:10px;display:block}.blog-title[_ngcontent-%COMP%]{max-width:720px;font-size:3rem;display:block;margin:50px auto;text-align:center;font-family:Zilla Slab,serif}hr[_ngcontent-%COMP%]{width:100px}"]}),t})();const p=[{path:":title",component:m},{path:"**",component:m}];let l=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[i.f.forChild(p)],i.f]}),t})(),d=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[o.c,l,c.b]]}),t})()}}]);