"use strict";(self.webpackChunkmovies_store=self.webpackChunkmovies_store||[]).push([[984],{5984:(j,d,n)=>{n.r(d),n.d(d,{ActorListModule:()=>Y});var m=n(8583),u=n(6304),v=n(9765),A=n(6782),x=n(3315),T=n(1696),t=n(7716),l=n(3301),b=n(3810),f=n(7965),c=n(6052),g=n(3013),Z=n(628);function y(o,a){1&o&&(t.TgZ(0,"tr",11),t.TgZ(1,"th",12),t._uU(2," #"),t._UZ(3,"p-sortIcon",13),t.qZA(),t.TgZ(4,"th",14),t._uU(5," Name "),t._UZ(6,"p-columnFilter",15),t._UZ(7,"p-sortIcon",16),t.qZA(),t.TgZ(8,"th",17),t._uU(9," Age "),t._UZ(10,"p-columnFilter",18),t._UZ(11,"p-sortIcon",19),t.qZA(),t.TgZ(12,"th",20),t._uU(13," Birthday "),t._UZ(14,"p-columnFilter",21),t._UZ(15,"p-sortIcon",22),t.qZA(),t.TgZ(16,"th",23),t._uU(17," Movies "),t._UZ(18,"p-columnFilter",24),t._UZ(19,"p-sortIcon",25),t.qZA(),t.TgZ(20,"th",26),t._uU(21,"Details"),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("matchMode","contains"),t.xp6(4),t.Q6J("matchMode","contains"),t.xp6(4),t.Q6J("matchMode","contains"),t.xp6(4),t.Q6J("matchMode","contains"))}function U(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr",27),t.TgZ(1,"td",26),t._uU(2),t.qZA(),t.TgZ(3,"td",28),t._uU(4),t.qZA(),t.TgZ(5,"td",28),t._uU(6),t.qZA(),t.TgZ(7,"td",28),t._uU(8),t.ALo(9,"mask"),t.qZA(),t.TgZ(10,"td",26),t._uU(11),t.qZA(),t.TgZ(12,"td",26),t.TgZ(13,"a",29),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw(3).actorDetalis(i)}),t._UZ(14,"i",30),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=a.$implicit,r=a.rowIndex;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.age),t.xp6(2),t.Oqu(t.xi3(9,5,e.birth,"0000-00-00")),t.xp6(3),t.Oqu(e.movies)}}const M=function(){return{field:"id",order:1}},C=function(o){return[o]};function L(o,a){if(1&o&&(t.TgZ(0,"p-table",8),t.YNc(1,y,22,4,"ng-template",9),t.YNc(2,U,15,8,"ng-template",10),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("value",e.actors)("multiSortMeta",t.VKq(4,C,t.DdM(3,M)))("rowHover",!0)}}function I(o,a){1&o&&(t.TgZ(0,"div",31),t._uU(1,"Loading, please wait..."),t.qZA())}function S(o,a){if(1&o&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"h4",5),t._uU(3,"Actors"),t.qZA(),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,L,3,6,"p-table",7),t.YNc(6,I,2,0,"ng-template",null,1,t.W1O),t.qZA(),t.qZA()),2&o){const e=t.MAs(7),r=t.oxw();t.xp6(5),t.Q6J("ngIf",r.actors)("ngIfElse",e)}}function _(o,a){1&o&&(t.TgZ(0,"div",31),t._uU(1,"Loading, please wait..."),t.qZA())}let F=(()=>{class o{constructor(e,r,s){var i=this;this.modalService=e,this.bsModalRef=r,this.actorService=s,this.ngUnsubscribe=new v.xQ,this.actors=[],this.actors1=[],this.actorsList=[],this.done=!1,this.prepareData=(0,u.Z)(function*(){i.actors=[],i.actorsList=[],i.actors=yield i.actorService.getBy(),i.actors1=yield i.actorService.getBy();for(const p of i.actors)i.actorsList.push((0,x.m)(p));for(const[p,h]of i.actorsList.entries())h.movies=(h.movies||[]).map(E=>E.name).join("\n");i.actors=i.actorsList,i.done=!0})}ngOnInit(){var e=this;return(0,u.Z)(function*(){yield e.prepareData()})()}actorDetalis(e){const r={isAdmin:!1,data:this.actors1.filter(s=>s.id===e.id)[0],canEdit:!1};this.bsModalRef=this.modalService.show(T.z,{class:"modal-xl",backdrop:"static",keyboard:!0,initialState:r}),this.bsModalRef.content.hideEvent.pipe((0,A.R)(this.ngUnsubscribe)).subscribe(s=>{this.prepareData()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.tT),t.Y36(l.UZ),t.Y36(b.V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-actor-list"]],decls:4,vars:2,consts:[["class","card border-0 border-rounded-0","style","width:100%;",4,"ngIf","ngIfElse"],["loading",""],["position","bottom-right"],[1,"card","border-0","border-rounded-0",2,"width","100%"],[1,"card-header","row","text-right"],[1,"float-left"],[1,"card-body","m-0","p-0"],["sortMode","multiple","styleClass","p-datatable-gridlines p-datatable-striped",3,"value","multiSortMeta","rowHover",4,"ngIf","ngIfElse"],["sortMode","multiple","styleClass","p-datatable-gridlines p-datatable-striped",3,"value","multiSortMeta","rowHover"],["class","row","pTemplate","header"],["class","row","pTemplate","body"],[1,"col-12","row","pl-0","pr-0","ml-0","mr-0"],["pSortableColumn","id",1,"col-2","pt-0","pb-0","text-center"],["field","id"],["pSortableColumn","name","p-columnFilter","name",1,"col-2","pt-0","pb-0","text-center"],["type","text","field","name","display","menu",3,"matchMode"],["field","name"],["pSortableColumn","age","p-columnFilter","age",1,"col-2","pt-0","pb-0","text-center"],["type","number","field","age","display","menu",3,"matchMode"],["field","age"],["pSortableColumn","birthday","p-columnFilter","birthday",1,"col-2","pt-0","pb-0","text-center"],["type","text","field","birthday","display","menu",3,"matchMode"],["field","birthday"],["pSortableColumn","movies","p-columnFilter","movies",1,"col-2","pt-0","pb-0","text-center"],["type","json","field","movies","display","menu",3,"matchMode"],["field","movies"],[1,"col-2","pt-0","pb-0","text-center"],[1,"row","col-12","pl-0","pr-0","ml-0","mr-0"],[1,"col-2","pt-0","pb-0"],[3,"click"],["aria-hidden","true",1,"fa","fa-info-circle","fa-fw"],[1,"alert","alert-warning"]],template:function(e,r){if(1&e&&(t.YNc(0,S,8,2,"div",0),t.YNc(1,_,2,0,"ng-template",null,1,t.W1O),t._UZ(3,"p-toast",2)),2&e){const s=t.MAs(2);t.Q6J("ngIf",r.done)("ngIfElse",s)}},directives:[m.O5,f.FN,c.iA,g.jx,c.lQ,c.fz,c.xl],pipes:[Z.Iq],styles:[""]}),o})();var q=n(7957),J=n(9529),N=n(3928),O=n(8063);const Q=[{path:"",component:F,children:[{path:"",redirectTo:"actor"}]}];let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[l.UZ,g.ez],imports:[[m.ez,J.kW,N.j,O.m,c.U$,l.zk.forRoot(),q.Bz.forChild(Q),f.EV,Z.yI.forRoot()]]}),o})()}}]);