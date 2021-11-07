"use strict";(self.webpackChunkmovies_store=self.webpackChunkmovies_store||[]).push([[851],{4851:(F,s,i)=>{i.r(s),i.d(s,{MoviesListModule:()=>_});var c=i(8583),u=i(6304),v=i(5610),t=i(7716),Z=i(149),a=i(3301),p=i(7965),r=i(6052),m=i(3013);function g(e,n){1&e&&(t.TgZ(0,"tr",11),t.TgZ(1,"th",12),t._uU(2," Movie"),t._UZ(3,"p-sortIcon",13),t.qZA(),t.TgZ(4,"th",14),t._uU(5," Name "),t._UZ(6,"p-columnFilter",15),t._UZ(7,"p-sortIcon",16),t.qZA(),t.TgZ(8,"th",17),t._uU(9," Category "),t._UZ(10,"p-columnFilter",18),t._UZ(11,"p-sortIcon",19),t.qZA(),t.TgZ(12,"th",20),t._uU(13," Director "),t._UZ(14,"p-columnFilter",21),t._UZ(15,"p-sortIcon",22),t.qZA(),t.TgZ(16,"th",23),t._uU(17," Year "),t._UZ(18,"p-columnFilter",24),t._UZ(19,"p-sortIcon",25),t.qZA(),t.TgZ(20,"th",26),t._uU(21," Rate "),t._UZ(22,"p-columnFilter",27),t._UZ(23,"p-sortIcon",28),t.qZA(),t.TgZ(24,"th",29),t._uU(25,"Details"),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("matchMode","contains"),t.xp6(4),t.Q6J("matchMode","contains"),t.xp6(4),t.Q6J("matchMode","contains"),t.xp6(4),t.Q6J("matchMode","contains"),t.xp6(4),t.Q6J("matchMode","contains"))}function f(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"tr",30),t.TgZ(1,"td",29),t._uU(2),t.qZA(),t.TgZ(3,"td",31),t._uU(4),t.qZA(),t.TgZ(5,"td",31),t._uU(6),t.qZA(),t.TgZ(7,"td",31),t._uU(8),t.qZA(),t.TgZ(9,"td",32),t._uU(10),t.qZA(),t.TgZ(11,"td",32),t._uU(12),t.qZA(),t.TgZ(13,"td",29),t.TgZ(14,"a",33),t.NdJ("click",function(){const S=t.CHM(o).$implicit;return t.oxw(2).movieDetalis(S)}),t._UZ(15,"i",34),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=n.$implicit,l=n.rowIndex;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.category),t.xp6(2),t.Oqu(o.director),t.xp6(2),t.Oqu(o.year),t.xp6(2),t.Oqu(o.rate)}}const x=function(){return{field:"id",order:1}},h=function(e){return[e]};function M(e,n){if(1&e&&(t.TgZ(0,"p-table",8),t.YNc(1,g,26,5,"ng-template",9),t.YNc(2,f,16,6,"ng-template",10),t.qZA()),2&e){const o=t.oxw();t.Q6J("value",o.movies)("multiSortMeta",t.VKq(4,h,t.DdM(3,x)))("rowHover",!0)}}function T(e,n){1&e&&(t.TgZ(0,"div",35),t._uU(1,"Loading, please wait..."),t.qZA())}let y=(()=>{class e{constructor(o,l){this.movieService=o,this.modalService=l,this.movies=[]}ngOnInit(){var o=this;return(0,u.Z)(function*(){o.movies=yield o.movieService.getBy()})()}movieDetalis(o){this.modalService.show(v.Q,{class:"modal-xl",backdrop:"static",keyboard:!0,initialState:{data:o}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(Z.I),t.Y36(a.tT))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-movies-list"]],decls:10,vars:2,consts:[[1,"card","border-0","border-rounded-0",2,"width","100%"],[1,"card-header","p-1","bg-transparent"],[1,"form-inline","float-left"],[1,"d-inline","float-left"],[1,"card-body","m-0","p-0"],["sortMode","multiple","styleClass","p-datatable-gridlines p-datatable-striped",3,"value","multiSortMeta","rowHover",4,"ngIf","ngIfElse"],["loading",""],["position","bottom-right"],["sortMode","multiple","styleClass","p-datatable-gridlines p-datatable-striped",3,"value","multiSortMeta","rowHover"],["class","row","pTemplate","header"],["class","row","pTemplate","body"],[1,"col-12","row","pl-0","pr-0","ml-0","mr-0"],["pSortableColumn","id",1,"col-1","pt-0","pb-0","text-center"],["field","id"],["pSortableColumn","name","p-columnFilter","name",1,"col-2","pt-0","pb-0","text-center"],["type","text","field","name","display","menu",3,"matchMode"],["field","name"],["pSortableColumn","category","p-columnFilter","category",1,"col-2","pt-0","pb-0","text-center"],["type","text","field","category","display","menu",3,"matchMode"],["field","category"],["pSortableColumn","director","p-columnFilter","director",1,"col-2","pt-0","pb-0","text-center"],["type","text","field","director","display","menu",3,"matchMode"],["field","director"],["pSortableColumn","year","p-columnFilter","year",1,"col-2","pt-0","pb-0","text-center"],["type","text","field","year","display","menu",3,"matchMode"],["field","year"],["pSortableColumn","rate","p-columnFilter","rate",1,"col-2","pt-0","pb-0","text-center"],["type","text","field","rate","display","menu",3,"matchMode"],["field","rate"],[1,"col-1","pt-0","pb-0","text-center"],[1,"row","col-12","pl-0","pr-0","ml-0","mr-0"],[1,"col-2","pt-0","pb-0"],[1,"col-2","pt-0","pb-0","text-center"],[3,"click"],["aria-hidden","true",1,"fa","fa-info-circle","fa-fw"],[1,"alert","alert-warning"]],template:function(o,l){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"h1",3),t._uU(4,"Movies"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,M,3,6,"p-table",5),t.YNc(7,T,2,0,"ng-template",null,6,t.W1O),t.qZA(),t.qZA(),t._UZ(9,"p-toast",7)),2&o){const d=t.MAs(8);t.xp6(6),t.Q6J("ngIf",l.movies)("ngIfElse",d)}},directives:[c.O5,p.FN,r.iA,m.jx,r.lQ,r.fz,r.xl],styles:[""]}),e})();var U=i(9529),A=i(3928),C=i(8063),b=i(7957);const q=[{path:"",component:y,children:[{path:"",redirectTo:"movies"}]}];let _=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[a.UZ,m.ez],imports:[[c.ez,U.kW,A.j,C.m,r.U$,a.zk.forRoot(),b.Bz.forChild(q),p.EV]]}),e})()}}]);