(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"m",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"o",(function(){return i})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return u})),n.d(t,"i",(function(){return l})),n.d(t,"l",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"n",(function(){return b}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENT",i="SET_ERROR",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",v="AUTH_LOGOUT",b="SET_AUTH_REDIRECT_PATH"},,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return E}));var r=n(1),a=n(17),o=function(e){return{type:r.a,payload:e}},i=function(e){return{type:r.m,payload:e}},c=function(){return function(e){a.a.get("/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){return e(function(e){return{type:r.o,error:e}}(t))}))}},u=n(8),l=function(e,t){return function(n){n({type:r.j}),a.a.post("/orders.json?auth="+t,e).then((function(t){console.log(t.data),n(function(e,t){return{type:r.k,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){return n(function(e){return{type:r.i,error:e}}(e))}))}},s=function(){return{type:r.l}},d=function(e,t){return function(n){n({type:r.g});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';console.log(o),a.a.get("https://react-my-burger-11efd.firebaseio.com/orders.json"+o).then((function(e){var t,a=[];for(var o in console.log(e),e.data)a.push(Object(u.a)(Object(u.a)({},e.data[o]),{},{id:o}));console.log(a),n((t=a,{type:r.h,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.f,error:t}))}))}},p=n(32),m=n.n(p),h=function(e,t){return{type:r.e,tokenId:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expiryDate"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(f())}),e)}},v=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbiP7HxlMpgSWd1zw1S_CTepkCgOTJ_WU";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbiP7HxlMpgSWd1zw1S_CTepkCgOTJ_WU"),m.a.post(i,o).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("userId",e.data.localId),localStorage.setItem("token",e.data.idToken),localStorage.setItem("expiryDate",t),a(h(e.data.idToken,e.data.localId)),a(g(1e3*e.data.expiresIn))})).catch((function(e){console.log(e.response.data.error.message),a(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}},b=function(e){return{type:r.n,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(null!=t){var n=new Date(localStorage.getItem("expiryDate")).getTime()-(new Date).getTime();if(n>0){var r=localStorage.getItem("userId");e(h(t,r)),e(g(n))}else e(f())}else e(f())}}},,function(e,t,n){"use strict";var r=n(32),a=n.n(r).a.create({baseURL:"https://react-my-burger-11efd.firebaseio.com/"});t.a=a},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__MTWN9",BreadTop:"BurgerIngredient_BreadTop__2Zagr",Seeds1:"BurgerIngredient_Seeds1__lYR4z",Seeds2:"BurgerIngredient_Seeds2__2EGcv",Meat:"BurgerIngredient_Meat__vuapu",Cheese:"BurgerIngredient_Cheese__3ZwUR",Salad:"BurgerIngredient_Salad__1sxCb",Bacon:"BurgerIngredient_Bacon__28AIO"}},function(e,t,n){"use strict";t.a=function(e){return e.children}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(39),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(62),i=n.n(o);t.a=function(e){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2zDqF",Open:"SideDrawer_Open__wdlSJ",Close:"SideDrawer_Close__TnktA",Logo:"SideDrawer_Logo__1Du1e"}},function(e,t,n){e.exports={Input:"Input_Input__3AQBU",Label:"Input_Label__2fraW",InputElement:"Input_InputElement__2L6Cy",Invalid:"Input_Invalid__3h-Mx"}},,,function(e,t,n){"use strict";var r=n(3),a=n(4),o=n(6),i=n(5),c=n(0),u=n.n(c),l=n(50),s=n(19);t.a=function(e,t){return function(n){Object(o.a)(d,n);var c=Object(i.a)(d);function d(){var e;Object(r.a)(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=c.call.apply(c,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(a.a)(d,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){console.log("Will Unmount",this.resInterceptor,this.reqInterceptor),t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),d}(c.Component)}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(57),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{onClick:e.clicked,className:i.a.Backdrop}):null}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2lT79",Logo:"Toolbar_Logo__2Uke2",DesktopOnly:"Toolbar_DesktopOnly__1vXkL"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__8xvMJ",active:"NavigationItem_active__JV_Cx"}},,,,function(e,t,n){e.exports={Button:"Button_Button__SkcEm",Success:"Button_Success__2UWXE",Danger:"Button_Danger__1WYYY"}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(3),a=n(4),o=n(6),i=n(5),c=n(0),u=n.n(c),l=n(63),s=n.n(l),d=n(19),p=n(31),m=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.show!==e.show||this.props.children!==e.children}},{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),u.a.createElement("div",{className:s.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(c.Component);t.a=m},function(e,t,n){"use strict";var r=n(67),a=n(0),o=n.n(a),i=n(3),c=n(4),u=n(6),l=n(5),s=n(18),d=n.n(s),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:d.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:d.a.BreadTop},o.a.createElement("div",{className:d.a.Seeds1}),o.a.createElement("div",{className:d.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:d.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:d.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:d.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:d.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),m=n(59),h=n.n(m);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(p,{key:n+t,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return t.length||(t=o.a.createElement("p",null,"Please start adding ingredients")),o.a.createElement("div",{className:h.a.Burger},o.a.createElement(p,{type:"bread-top"}),t,o.a.createElement(p,{type:"bread-bottom"}))}},function(e,t,n){e.exports={Content:"Layout_Content__1EpBw"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__3pAD1"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3d44l"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__aksxw"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2PUhT"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__2pE7H"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2FBDv"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1JhYj"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__OwFTt",load6:"Spinner_load6__3MKTe",round:"Spinner_round__1obNV"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3oZDc"}},function(e,t,n){e.exports={Order:"Order_Order__2EiBp"}},function(e,t,n){e.exports={Auth:"Auth_Auth__3wKsr"}},,,function(e,t,n){e.exports=n(96)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=(n(73),n(3)),u=n(4),l=n(6),s=n(5),d=n(19),p=n(52),m=n.n(p),h=n(33),f=n.n(h),g=n(53),v=n.n(g),b=n(54),E=n.n(b),_=function(e){return a.a.createElement("div",{className:E.a.Logo},a.a.createElement("img",{src:v.a,alt:"MyBurger"}))},y=n(55),k=n.n(y),O=n(35),C=n.n(O),S=n(16),I=function(e){return a.a.createElement("li",{onClick:e.clicked,className:C.a.NavigationItem},a.a.createElement(S.b,{exact:!0,activeClassName:C.a.active,to:e.link},e.children))},j=function(e){return a.a.createElement("ul",{className:k.a.NavigationItems},a.a.createElement(I,{clicked:e.clicked,link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(I,{clicked:e.clicked,link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(I,{clicked:e.clicked,link:"/logout"},"Logout"):a.a.createElement(I,{clicked:e.clicked,link:"/auth"},"Authenticate"))},w=n(56),T=n.n(w),D=function(e){return a.a.createElement("div",{onClick:e.clicked,className:T.a.DrawerToggle},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},N=function(e){return a.a.createElement("header",{className:f.a.Toolbar},a.a.createElement(D,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:f.a.Logo},a.a.createElement(_,null)),a.a.createElement("nav",{className:f.a.DesktopOnly},a.a.createElement(j,{isAuthenticated:e.isAuthenticated})))},A=n(26),H=n.n(A),x=n(31),B=function(e){var t=[H.a.SideDrawer];return e.open?t.push(H.a.Open):t.push(H.a.Close),a.a.createElement(d.a,null,a.a.createElement(x.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:H.a.Logo},a.a.createElement(_,null)),a.a.createElement("nav",null,a.a.createElement(j,{clicked:e.closed}))))},R=n(9),L=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerOpenedHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(N,{isAuthenticated:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerOpenedHandler}),a.a.createElement(B,{isAuthenticated:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:m.a.Content},this.props.children))}}]),n}(r.Component),P=Object(R.b)((function(e){return{isAuthenticated:null!==e.auth.tokenId}}))(L),U=n(51),M=n(20),F=n(60),q=n.n(F),W=function(e){return a.a.createElement("div",{className:q.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes well!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(U.a,{ingredients:e.ingredients})),a.a.createElement(M.a,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),a.a.createElement(M.a,{btnType:"Success",clicked:e.checkoutContinued},"Success"))},V=n(7),Y=n(8),G=n(61),z=n.n(G),J=n(17),X=n(24),Z=n(27),K=n.n(Z),$=function(e){var t=null,n=[K.a.InputElement];switch(!e.valid&&e.shouldValidate&&e.touched&&n.push(K.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.onChangeHandler}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.onChangeHandler}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.onChangeHandler},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.onChangeHandler}))}return a.a.createElement("div",{className:K.a.Input},a.a.createElement("label",{className:K.a.Label},e.label),t)},Q=n(15),ee=n(30),te=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest"}},valid:!1},e.onChangeHandler=function(t,n){var r=Object(Y.a)({},e.state.orderForm),a=Object(Y.a)({},r[n]);a.value=t.target.value,a.valid=e.checkValidity(a.value,a.validation),a.touched=!0,r[n]=a;var o=!0;for(var i in r)r[i].hasOwnProperty("validation")&&(o=r[i].valid&&o);e.setState({orderForm:r,valid:o})},e.orderHandler=function(t){t.preventDefault(),console.log(e.props.ingredients);var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;e.setState({loading:!0});var a={ingredients:e.props.ingredients,price:e.props.totalPrice.toFixed(2),orderData:n,userId:e.props.userId};console.log(e.props.token),e.props.burgerSuccessHandler(a,e.props.token)},e}return Object(u.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return void 0===t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("div",{className:z.a.ContactData},a.a.createElement("h4",null,"Enter your Contact Data"),a.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return a.a.createElement($,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,onChangeHandler:function(n){return e.onChangeHandler(n,t.id)},shouldValidate:t.config.validation,valid:t.config.valid,touched:t.config.touched})})),a.a.createElement(M.a,{disabled:!this.state.valid,btnType:"Success"},"ORDER")));return this.props.loading?a.a.createElement(X.a,null):r}}]),n}(r.Component),ne=Object(R.b)((function(e){return{ingredients:e.burger.ingredients,totalPrice:e.burger.totalPrice,loading:e.order.loading,token:e.auth.tokenId,userId:e.auth.userId}}),(function(e){return{burgerSuccessHandler:function(t,n){return e(Q.g(t,n))}}}))(Object(ee.a)(te,J.a)),re=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).cancelCheckoutHandler=function(){e.props.history.goBack()},e.continueCheckoutHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){console.log("hello");var e=a.a.createElement(V.a,{to:"/"});if(this.props.ingredients){var t=this.props.donePurchase?a.a.createElement(V.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(W,{ingredients:this.props.ingredients,checkoutCancelled:this.cancelCheckoutHandler,checkoutContinued:this.continueCheckoutHandler}),a.a.createElement(V.b,{path:this.props.match.path+"/contact-data",component:ne}))}return e}}]),n}(r.Component),ae=Object(R.b)((function(e){return{ingredients:e.burger.ingredients,donePurchase:e.order.donePurchase}}))(re),oe=n(64),ie=n.n(oe),ce=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return a.a.createElement("span",{style:{display:"inline-block",textTransform:"capitalize",padding:"5px",margin:"0 8px",border:"1px solid #ccc"}},"(",e.name,") (",e.amount,")")}));return a.a.createElement("div",{className:ie.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",Number(e.price).toFixed(2))))},ue=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchOrdersHandler(this.props.token,this.props.userId)}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.loading?a.a.createElement(X.a,null):null,this.props.orders.map((function(e){return a.a.createElement(ce,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),n}(r.Component),le=Object(R.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.tokenId,userId:e.auth.userId}}),(function(e){return{fetchOrdersHandler:function(t,n){return e(Q.d(t,n))}}}))(Object(ee.a)(ue,J.a)),se=n(21),de=n(65),pe=n.n(de),me=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e.inputChangedHandler=function(t,n){var r=Object(Y.a)(Object(Y.a)({},e.state.controls),{},Object(se.a)({},n,Object(Y.a)(Object(Y.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:r})},e.submitHandler=function(t){t.preventDefault(),e.props.authHandler(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.building||this.props.setAuthRedirectPathHandler()}},{key:"checkValidity",value:function(e,t){var n=!0;if(void 0===t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.isEmail){n=/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(e)&&n}return t.maxLength&&(n=e.length<=t.maxLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map((function(t){return a.a.createElement($,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,onChangeHandler:function(n){return e.inputChangedHandler(n,t.id)},shouldValidate:t.config.validation,valid:t.config.valid,touched:t.config.touched})})),o=null;return this.props.error&&(o=this.props.error.message),this.props.loading&&(r=a.a.createElement(X.a,null)),a.a.createElement("div",{className:pe.a.Auth},console.log("hello2"),console.log(this.props.isAuthenticated),this.props.isAuthenticated?a.a.createElement(V.a,{to:this.props.authRedirectPath}):null,a.a.createElement("form",{onSubmit:this.submitHandler},o,r,a.a.createElement(M.a,{btnType:"Success"},"SUBMIT")),a.a.createElement(M.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP"))}}]),n}(r.Component),he=Object(R.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.tokenId,building:e.burger.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{authHandler:function(t,n,r){return e(Q.b(t,n,r))},setAuthRedirectPathHandler:function(){return e(Q.j("/"))}}}))(me),fe=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.logoutHandler()}},{key:"render",value:function(){return a.a.createElement(V.a,{to:"/"})}}]),n}(r.Component),ge=Object(R.b)(null,(function(e){return{logoutHandler:function(){return e(Q.f())}}}))(fe),ve=function(e){return function(t){Object(l.a)(r,t);var n=Object(s.a)(r);function r(){var e;Object(c.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),r}(r.Component)}((function(){return n.e(3).then(n.bind(null,99))})),be=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.authSetStateHandler()}},{key:"render",value:function(){var e=a.a.createElement(V.d,null,a.a.createElement(V.b,{path:"/auth",component:he}),a.a.createElement(V.b,{path:"/",exact:!0,component:ve}),a.a.createElement(V.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(V.d,null,a.a.createElement(V.b,{path:"/auth",component:he}),a.a.createElement(V.b,{path:"/checkout",component:ae}),a.a.createElement(V.b,{path:"/orders",component:le}),a.a.createElement(V.b,{path:"/logout",component:ge}),a.a.createElement(V.b,{path:"/",exact:!0,component:ve}),a.a.createElement(V.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(P,{style:{textAlign:"center"}},e))}}]),n}(r.Component),Ee=Object(R.b)((function(e){return{isAuthenticated:null!==e.auth.tokenId}}),(function(e){return{authSetStateHandler:function(){return e(Q.c())}}}))(be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=n(22),ye=n(1),ke=function(e,t){return Object(Y.a)(Object(Y.a)({},e),t)},Oe={salad:.5,cheese:.4,meat:1.3,bacon:.7},Ce={ingredients:null,totalPrice:4,error:null,building:!1},Se=function(e,t){var n=Object(se.a)({},t.payload.ingredient,e.ingredients[t.payload.ingredient]+1),r=ke(e.ingredients,n),a=ke(e,{ingredients:r,building:!0});return ke(a,{totalPrice:e.totalPrice+Oe[t.payload.ingredient]})},Ie=function(e,t){var n=Object(se.a)({},t.payload.ingredient,e.ingredients[t.payload.ingredient]-1),r=ke(e.ingredients,n),a=ke(e,{ingredients:r,building:!0});return ke(a,{totalPrice:e.totalPrice-Oe[t.payload.ingredient]})},je=function(e,t){var n=4;for(var r in t.ingredients)n+=Oe[r]*t.ingredients[r];return ke(e,{ingredients:t.ingredients,totalPrice:n,error:!1,building:!1})},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.a:return Se(e,t);case ye.m:return Ie(e,t);case ye.p:return je(e,t);case ye.o:return ke(e,{error:t.error});default:return e}},Te={orders:[],loading:!1,donePurchase:!1},De=function(e,t){return ke(e,{donePurchase:!1})},Ne=function(e,t){var n=Object(Y.a)(Object(Y.a)({},t.orderData),{},{id:t.orderId});return console.log(e.orders.concat(n)),ke(e,{loading:!1,orders:e.orders.concat(n),donePurchase:!0})},Ae=function(e,t){return ke(e,{loading:!1})},He=function(e,t){return ke(e,{loading:!0})},xe=function(e,t){return ke(e,{loading:!0})},Be=function(e,t){return ke(e,{loading:!1,error:t.error})},Re=function(e,t){return ke(e,{loading:!1,orders:t.orders})},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.l:return De(e);case ye.k:return Ne(e,t);case ye.i:return Ae(e);case ye.j:return He(e);case ye.g:return xe(e);case ye.h:return Re(e,t);case ye.f:return Be(e,t);default:return e}},Pe={userId:null,tokenId:null,error:null,loading:!1,authRedirectPath:"/"},Ue=function(e,t){return ke(e,{error:null,loading:!0})},Me=function(e,t){return ke(e,{userId:t.userId,tokenId:t.tokenId,error:null,loading:!1})},Fe=function(e,t){return ke(e,{userId:null,tokenId:null,error:t.error,loading:!1})},qe=function(e,t){return ke(e,{userId:null,tokenId:null})},We=function(e,t){return ke(e,{authRedirectPath:t.path})},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.d:return Ue(e);case ye.e:return Me(e,t);case ye.b:return Fe(e,t);case ye.c:return qe(e);case ye.n:return We(e,t);default:return e}},Ye=n(66),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.d,ze=Object(_e.c)({burger:we,order:Le,auth:Ve}),Je=Object(_e.e)(ze,Ge(Object(_e.a)(Ye.a)));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R.a,{store:Je},a.a.createElement(S.a,null,a.a.createElement(Ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[68,1,2]]]);
//# sourceMappingURL=main.1a428e34.chunk.js.map