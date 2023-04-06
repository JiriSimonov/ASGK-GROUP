"use strict";(self.webpackChunkASGK_GROUP=self.webpackChunkASGK_GROUP||[]).push([[252],{8252:(At,f,r)=>{r.r(f),r.d(f,{ClientsModule:()=>Ut});var c=r(6895),A=r(858),i=r(4006),t=r(4650),p=r(727),S=r(8372),y=r(3900),_=r(4004),Y=r(590);const I=e=>n=>n.valueChanges.pipe((0,S.b)(1e3),(0,y.w)(()=>e.getClientById(n.value).pipe((0,_.U)(o=>o?null:{isClientNotExits:!0}))),(0,Y.P)());var g=r(1135),q=r(9841),T=r(8505);const b={barcode:(e,n)=>+n.barcode-+e.barcode,user_id:(e,n)=>+n.user_id-+e.user_id,bonus:(e,n)=>+n.bonus-+e.bonus,phone:(e,n)=>+n.phone-+e.phone,discount:(e,n)=>parseInt(n.discount,10)-parseInt(e.discount,10)};var $=r(529);const h="/passes";let Z=(()=>{class e{constructor(o){this.http=o}getClients(){return this.http.get(h)}searchClient(o){return this.http.get(h,{params:{search:Object.entries(o).map(([s,a])=>`${s}=${a}`).join(",")}})}sendMessage(o){return this.http.post("/message/push",o)}getClientById(o){return this.http.get(`${h}/userid/${o}`)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG($.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),d=(()=>{class e{constructor(o){this.clientsHttpService=o,this.sort$$=new g.X(null),this.sort$=this.sort$$.asObservable(),this.clients$$=new g.X([]),this.clients$=(0,q.a)([this.clients$$.asObservable(),this.sort$]).pipe((0,_.U)(([s,a])=>a?[...s].sort((u,U)=>(b[a.active]?b[a.active](u,U):((e,n)=>e.localeCompare(n))(u[a.active].toString(),U[a.active].toString()))*("asc"===a.direction?1:-1)):s))}getClients(){return this.clientsHttpService.getClients().pipe((0,T.b)(o=>this.clients$$.next(o.passes)))}searchClient(o){return this.clientsHttpService.searchClient(o).pipe((0,T.b)(s=>this.clients$$.next(s.passes)))}sendMessage(o){return this.clientsHttpService.sendMessage(o)}sortClients(o){this.sort$$.next(o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(Z))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var x=r(5412),m=r(9549),v=r(4144),C=r(4859);function D(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"required"),t.qZA())}function Q(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Only numbers"),t.qZA())}function F(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"User does not exist"),t.qZA())}function J(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Length is 7"),t.qZA())}function B(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"required"),t.qZA())}function w(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Min length is 10"),t.qZA())}function O(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Max length is 200"),t.qZA())}let k=(()=>{class e{constructor(o,s,a){this.clientsService=o,this.dialog=s,this.clientsHttpService=a,this.subs=new p.w0}ngOnInit(){this.messageForm=new i.cw({user_id:new i.NI("",[i.kI.required,i.kI.maxLength(7),i.kI.minLength(7),i.kI.pattern("[0-9]+")],[I(this.clientsHttpService)]),push_message:new i.NI("",[i.kI.required,i.kI.minLength(10),i.kI.maxLength(200)])})}get userIdControl(){return this.messageForm.controls.user_id}get pushMessageControl(){return this.messageForm.controls.push_message}get message(){return{user_id:this.userIdControl.value??"",push_message:this.pushMessageControl.value??""}}onSubmit(){this.subs.add(this.clientsService.sendMessage(this.message).subscribe(()=>{this.dialog.closeAll()}))}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d),t.Y36(x.uw),t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["asgk-clients-modal"]],decls:21,vars:11,consts:[[1,"message"],[1,"message__form",3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","1184987",3,"formControl"],[4,"ngIf"],["matInput","","placeholder","hello!",3,"formControl"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"send message"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"user id"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,D,2,0,"mat-error",4),t.YNc(9,Q,2,0,"mat-error",4),t.YNc(10,F,2,0,"mat-error",4),t.YNc(11,J,2,0,"mat-error",4),t.qZA(),t.TgZ(12,"mat-form-field",2)(13,"mat-label"),t._uU(14,"message"),t.qZA(),t._UZ(15,"textarea",5),t.YNc(16,B,2,0,"mat-error",4),t.YNc(17,w,2,0,"mat-error",4),t.YNc(18,O,2,0,"mat-error",4),t.qZA(),t.TgZ(19,"button",6),t._uU(20,"send"),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",s.messageForm),t.xp6(4),t.Q6J("formControl",s.userIdControl),t.xp6(1),t.Q6J("ngIf",s.userIdControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",s.userIdControl.hasError("pattern")),t.xp6(1),t.Q6J("ngIf",s.userIdControl.hasError("isClientNotExits")),t.xp6(1),t.Q6J("ngIf",s.userIdControl.hasError("minlength")||s.userIdControl.hasError("maxlength")),t.xp6(4),t.Q6J("formControl",s.pushMessageControl),t.xp6(1),t.Q6J("ngIf",s.pushMessageControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",s.pushMessageControl.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",s.pushMessageControl.hasError("maxlength")),t.xp6(1),t.Q6J("disabled",s.messageForm.invalid||s.messageForm.pending))},dependencies:[c.O5,m.KE,m.hX,m.TO,v.Nt,C.lW,i._Y,i.Fj,i.JJ,i.JL,i.oH,i.sg],styles:[".message[_ngcontent-%COMP%]{padding:20px}.message__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}"],changeDetection:0}),e})();var l=r(5717),N=r(6308);function j(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," barcode "),t.qZA())}function E(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.barcode," ")}}function H(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," user_id "),t.qZA())}function P(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.user_id," ")}}function G(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1," birthday "),t.qZA())}function L(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.birthday," ")}}function X(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," bonus "),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.bonus," ")}}function z(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," discount "),t.qZA())}function K(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.discount," ")}}function V(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," email "),t.qZA())}function W(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.email," ")}}function tt(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," first_name "),t.qZA())}function et(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.first_name," ")}}function nt(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," last_name "),t.qZA())}function ot(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.last_name," ")}}function st(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," link "),t.qZA())}function it(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.link," ")}}function rt(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," pat_name "),t.qZA())}function at(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.pat_name," ")}}function lt(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," gender "),t.qZA())}function mt(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.gender," ")}}function ct(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," phone "),t.qZA())}function ut(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.phone," ")}}function pt(e,n){1&e&&(t.TgZ(0,"th",20),t._uU(1," template "),t.qZA())}function ht(e,n){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.created_at," ")}}function dt(e,n){1&e&&t._UZ(0,"tr",23)}function Ct(e,n){1&e&&t._UZ(0,"tr",24)}const ft=function(){return[]};let _t=(()=>{class e{constructor(o,s){this.clientsService=o,this.createDialog=s,this.clients$=this.clientsService.clients$,this.displayedColumns=["last_name","first_name","pat_name","gender","birthday","email","phone","barcode","user_id","bonus","created_at","discount","link"],this.subs=new p.w0}ngOnInit(){this.subs.add(this.clientsService.getClients().subscribe())}openMessageDialog(){this.createDialog.open(k,{width:"400px"})}sortClients(o){this.clientsService.sortClients(o)}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d),t.Y36(x.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["asgk-clients-table"]],decls:45,vars:6,consts:[["mat-table","","matSort","","matSortDisableClear","",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","barcode"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","user_id"],["matColumnDef","birthday"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","bonus"],["matColumnDef","discount"],["matColumnDef","email"],["matColumnDef","first_name"],["matColumnDef","last_name"],["matColumnDef","link"],["matColumnDef","pat_name"],["matColumnDef","gender"],["matColumnDef","phone"],["matColumnDef","created_at"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-raised-button","","color","primary",1,"table__btn",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,s){if(1&o&&(t.TgZ(0,"table",0),t.NdJ("matSortChange",function(u){return s.sortClients(u)}),t.ALo(1,"async"),t.ynx(2,1),t.YNc(3,j,2,0,"th",2),t.YNc(4,E,2,1,"td",3),t.BQk(),t.ynx(5,4),t.YNc(6,H,2,0,"th",2),t.YNc(7,P,2,1,"td",3),t.BQk(),t.ynx(8,5),t.YNc(9,G,2,0,"th",6),t.YNc(10,L,2,1,"td",3),t.BQk(),t.ynx(11,7),t.YNc(12,X,2,0,"th",2),t.YNc(13,R,2,1,"td",3),t.BQk(),t.ynx(14,8),t.YNc(15,z,2,0,"th",2),t.YNc(16,K,2,1,"td",3),t.BQk(),t.ynx(17,9),t.YNc(18,V,2,0,"th",2),t.YNc(19,W,2,1,"td",3),t.BQk(),t.ynx(20,10),t.YNc(21,tt,2,0,"th",2),t.YNc(22,et,2,1,"td",3),t.BQk(),t.ynx(23,11),t.YNc(24,nt,2,0,"th",2),t.YNc(25,ot,2,1,"td",3),t.BQk(),t.ynx(26,12),t.YNc(27,st,2,0,"th",2),t.YNc(28,it,2,1,"td",3),t.BQk(),t.ynx(29,13),t.YNc(30,rt,2,0,"th",2),t.YNc(31,at,2,1,"td",3),t.BQk(),t.ynx(32,14),t.YNc(33,lt,2,0,"th",2),t.YNc(34,mt,2,1,"td",3),t.BQk(),t.ynx(35,15),t.YNc(36,ct,2,0,"th",2),t.YNc(37,ut,2,1,"td",3),t.BQk(),t.ynx(38,16),t.YNc(39,pt,2,0,"th",2),t.YNc(40,ht,2,1,"td",3),t.BQk(),t.YNc(41,dt,1,0,"tr",17),t.YNc(42,Ct,1,0,"tr",18),t.qZA(),t.TgZ(43,"button",19),t.NdJ("click",function(){return s.openMessageDialog()}),t._uU(44,"send message"),t.qZA()),2&o){let a;t.Q6J("dataSource",null!==(a=t.lcZ(1,3,s.clients$))&&void 0!==a?a:t.DdM(5,ft)),t.xp6(41),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns)}},dependencies:[C.lW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,N.YE,N.nU,c.Ov],styles:[".table__btn[_ngcontent-%COMP%]{margin-top:20px}"],changeDetection:0}),e})();function gt(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"required"),t.qZA())}function Tt(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"required"),t.qZA())}function bt(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.changeClearButtonVisibility())}),t._uU(1,"clear sort"),t.qZA()}}let Zt=(()=>{class e{constructor(o,s){this.clientsService=o,this.cdr=s,this.showClearButton=!1,this.subs=new p.w0}ngOnInit(){this.searchForm=new i.cw({first_name:new i.NI("",[i.kI.required]),last_name:new i.NI("",[i.kI.required])})}get firstNameControl(){return this.searchForm.controls.first_name}get lastNameControl(){return this.searchForm.controls.last_name}get searchValue(){return{first_name:this.firstNameControl.value??"",last_name:this.lastNameControl.value??""}}onSubmit(){this.subs.add(this.clientsService.searchClient(this.searchValue).subscribe(()=>{this.showClearButton=!this.showClearButton,this.cdr.detectChanges()}))}changeClearButtonVisibility(){this.subs.add(this.clientsService.getClients().subscribe(()=>{this.showClearButton=!this.showClearButton,this.cdr.detectChanges()}))}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["asgk-search-form"]],decls:17,vars:7,consts:[[1,"search"],[1,"search__form",3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","\u0418\u0432\u0430\u043d",3,"formControl"],[4,"ngIf"],["matInput","","placeholder","\u0418\u0432\u0430\u043d\u043e\u0432",3,"formControl"],["mat-raised-button","","color","primary",1,"search__btn",3,"disabled"],["class","clear","mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",1,"clear",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"h2"),t._uU(1,"search client"),t.qZA(),t.TgZ(2,"div",0)(3,"form",1),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"First name"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,gt,2,0,"mat-error",4),t.qZA(),t.TgZ(9,"mat-form-field",2)(10,"mat-label"),t._uU(11,"Last name"),t.qZA(),t._UZ(12,"input",5),t.YNc(13,Tt,2,0,"mat-error",4),t.qZA(),t.TgZ(14,"button",6),t._uU(15,"search"),t.qZA()(),t.YNc(16,bt,2,0,"button",7),t.qZA()),2&o&&(t.xp6(3),t.Q6J("formGroup",s.searchForm),t.xp6(4),t.Q6J("formControl",s.firstNameControl),t.xp6(1),t.Q6J("ngIf",s.firstNameControl.hasError("required")),t.xp6(4),t.Q6J("formControl",s.lastNameControl),t.xp6(1),t.Q6J("ngIf",s.lastNameControl.hasError("required")),t.xp6(1),t.Q6J("disabled",s.searchForm.invalid),t.xp6(2),t.Q6J("ngIf",s.showClearButton))},dependencies:[c.O5,m.KE,m.hX,m.TO,v.Nt,C.lW,i._Y,i.Fj,i.JJ,i.JL,i.oH,i.sg],styles:[".search[_ngcontent-%COMP%]{display:flex;gap:10px}.search__form[_ngcontent-%COMP%]{display:flex;gap:20px}.search__btn[_ngcontent-%COMP%], .clear[_ngcontent-%COMP%]{margin-top:10px}"],changeDetection:0}),e})(),xt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["asgk-clients-page"]],decls:3,vars:0,consts:[[1,"container"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"asgk-search-form")(2,"asgk-clients-table"),t.qZA())},dependencies:[_t,Zt]}),e})();var vt=r(5179);const Nt=[{path:"",component:xt}];let Ut=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,A.Bz.forChild(Nt),vt.m,i.UX]}),e})()}}]);