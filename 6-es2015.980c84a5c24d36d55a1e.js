(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",(function(){return u}));var o=n("ofXK"),r=n("sbAP"),i=n("tyNb"),c=n("quSY"),a=n("GuhC"),s=n("fXoL"),p=n("A5z7");function l(t,e){if(1&t&&(s.Sb(0,"mat-chip",10),s.rc(1),s.Rb()),2&t){const t=e.$implicit;s.Cb(1),s.sc(t)}}function b(t,e){if(1&t&&(s.Sb(0,"div",1),s.rc(1,"\n    "),s.Sb(2,"div",2),s.rc(3,"\n        "),s.Sb(4,"mat-chip-list",3),s.rc(5,"\n            "),s.qc(6,l,2,1,"mat-chip",4),s.rc(7,"\n        "),s.Rb(),s.rc(8,"\n        "),s.Sb(9,"h1",5),s.rc(10),s.Rb(),s.rc(11,"\n        "),s.Sb(12,"div",6),s.rc(13,"\n            "),s.Sb(14,"time",7),s.rc(15),s.dc(16,"date"),s.Rb(),s.rc(17,"\n        "),s.Rb(),s.rc(18,"\n    "),s.Rb(),s.rc(19,"\n    "),s.Nb(20,"hr"),s.rc(21,"\n    "),s.Nb(22,"scully-content"),s.rc(23,"\n    "),s.Nb(24,"hr"),s.rc(25,"\n    "),s.Sb(26,"div",8),s.rc(27,"\n        Have questions/comments? Tweet @"),s.Sb(28,"a",9),s.rc(29,"krishnaanaril"),s.Rb(),s.rc(30,"\n    "),s.Rb(),s.rc(31,"\n"),s.Rb()),2&t){const t=s.cc();s.Cb(6),s.hc("ngForOf",t.metaData.keywords),s.Cb(4),s.sc(t.metaData.title),s.Cb(4),s.hc("datetime",t.metaData.date),s.Cb(1),s.sc(s.ec(16,4,t.metaData.date))}}let d=(()=>{class t{constructor(t,e,n,o){this.router=t,this.route=e,this.scully=n,this.metaService=o,this.subscriptions=new c.a,this.current$=this.scully.getCurrent()}ngOnInit(){this.subscriptions.add(this.current$.subscribe(t=>{this.metaData={title:t.title,description:t.description,date:t.date,category:t.category?t.category:"",imageUrl:t.image?t.image:"",keywords:t.keywords?t.keywords.split(",").map(t=>t.trim()):[],siteUrl:t.route,type:"website"},this.metaService.setMetaForCurrentPage(this.metaData)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(i.d),s.Mb(i.a),s.Mb(r.c),s.Mb(a.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-blog"]],decls:1,vars:1,consts:[["class","blog-post",4,"ngIf"],[1,"blog-post"],[1,"title-section"],["aria-label","Blog tags/keywords"],["class","keywords","color","primary",4,"ngFor","ngForOf"],[1,"blog-title"],[1,"sub-items-container"],[3,"datetime"],[1,"post-footer"],["href","https://twitter.com/krishnaanaril"],["color","primary",1,"keywords"]],template:function(t,e){1&t&&s.qc(0,b,32,6,"div",0),2&t&&s.hc("ngIf",e.metaData)},directives:[o.k,p.b,o.j,r.a,p.a],pipes:[o.e],styles:["[_ngcontent-%COMP%]::slotted(h1){color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%]{margin:auto;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;max-width:768px;font-size:18px;line-height:1.5;font-family:Raleway,sans-serif}@media (max-width:768px){.blog-post[_ngcontent-%COMP%], .post-footer[_ngcontent-%COMP%]{margin:0 10px}}img[_ngcontent-%COMP%]{width:100%;display:block;margin:auto}img[_ngcontent-%COMP%] + em[_ngcontent-%COMP%]{display:block;word-break:break-all;text-align:center}img[_ngcontent-%COMP%] + em[_ngcontent-%COMP%], img[_ngcontent-%COMP%] + em[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-size:.9rem;color:grey}pre[_ngcontent-%COMP%]{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}code[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:10px;display:block}.blog-title[_ngcontent-%COMP%]{font-weight:400;font-size:4.5rem;line-height:1;word-break:normal;display:block;margin:0 auto 10px;text-align:center;font-family:Zilla Slab,serif}@media (max-width:768px){.blog-title[_ngcontent-%COMP%]{font-size:3rem}}hr[_ngcontent-%COMP%]{width:100px}.sub-items-container[_ngcontent-%COMP%], mat-chip-list[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-chip-list[_ngcontent-%COMP%]{margin:50px auto 5px}.keywords[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:10px;border:1px solid grey}"]}),t})();const g=[{path:":title",component:d},{path:"**",component:d}];let m=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[i.h.forChild(g)],i.h]}),t})();var h=n("vvyD");let u=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[o.c,m,r.b,h.a]]}),t})()}}]);