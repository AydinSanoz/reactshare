(this["webpackJsonpreact-share"]=this["webpackJsonpreact-share"]||[]).push([[0],{162:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),i=a.n(n),c=a(12),s=a.n(c),o=(a(162),a(37)),l=a(14),d=a(16),u=a(234),j=a(244),b=a(245),h=a(8),m=a(116),p=a.n(m),O=a(237),x=a(239),f=a(242),v=a(241),g=a(240),A=a(243),P=a(90),_=Object(u.a)({root:{maxWidth:300,margin:"auto",marginBottom:"30px",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.5)","&:hover":{transform:"scale(1.02)",boxShadow:"0 20px 70px -13px rgba(0,0,0,0.5)"}},media:{paddingTop:4,height:140,backgroundSize:"contain"}});function w(e){var t=e.id,a=e.userImage,n=e.userName,i=e.userEmail,c=_(),s=Object(l.f)();return Object(r.jsxs)(O.a,{className:c.root,children:[Object(r.jsxs)(x.a,{children:[Object(r.jsx)(g.a,{className:c.media,image:a}),Object(r.jsxs)(v.a,{children:[Object(r.jsx)(P.a,{gutterBottom:!0,variant:"h9",component:"h2",children:n}),Object(r.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:i})]})]}),Object(r.jsxs)(f.a,{children:[Object(r.jsx)(A.a,{size:"small",color:"primary",onClick:function(){return s.push("/user/".concat(t))},children:"View Full Profile"}),Object(r.jsx)(A.a,{size:"small",color:"primary",onClick:function(){return s.push("/user/".concat(t,"/post"))},children:"View User Posts"})]})]})}var S=a(41),E=a.n(S),y=a(80),C=Object({NODE_ENV:"production",PUBLIC_URL:"/reactshare",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyAvmR8Tx6hS2wEsBGT8NmMWrTrDNieKrLI",REACT_APP_AUTH_DOMAIN:"reactshare-3c3ac.firebaseapp.com",REACT_APP_DATABASE_URL:"https://reactshare-3c3ac.firebaseio.com",REACT_APP_PROJECT_ID:"reactshare-3c3ac",REACT_APP_STORAGE_BUCKET:"reactshare-3c3ac.appspot.com",REACT_APP_MESSAGING_SENDER_ID:"54001819488",REACT_APP_ID:"1:54001819488:web:28c2eedb06377ffb5b0805",REACT_APP_API_BASE_URL:"https://dummyapi.io/data/api",REACT_APP_API_TOKEN:"5fc26c8ffe00c873851af154"}),T=C.REACT_APP_API_BASE_URL,N=C.REACT_APP_API_TOKEN,R=function(){var e=Object(y.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(T).concat(t),{headers:{"app-id":N}});case 2:return a=e.sent,e.abrupt("return",null===a||void 0===a?void 0:a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(u.a)((function(e){return{wrapper:{paddingTop:"5rem",minHeight:"calc(100vh - 9.0625rem)",textAlign:"center",overflow:"auto"},avatar:{margin:"1rem auto",backgroundColor:e.palette.secondary.main}}}));var k=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],i=t[1],c=I(),s=Object({NODE_ENV:"production",PUBLIC_URL:"/reactshare",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyAvmR8Tx6hS2wEsBGT8NmMWrTrDNieKrLI",REACT_APP_AUTH_DOMAIN:"reactshare-3c3ac.firebaseapp.com",REACT_APP_DATABASE_URL:"https://reactshare-3c3ac.firebaseio.com",REACT_APP_PROJECT_ID:"reactshare-3c3ac",REACT_APP_STORAGE_BUCKET:"reactshare-3c3ac.appspot.com",REACT_APP_MESSAGING_SENDER_ID:"54001819488",REACT_APP_ID:"1:54001819488:web:28c2eedb06377ffb5b0805",REACT_APP_API_BASE_URL:"https://dummyapi.io/data/api",REACT_APP_API_TOKEN:"5fc26c8ffe00c873851af154"});return s.REACT_APP_API_BASE_URL,s.REACT_APP_API_TOKEN,Object(n.useEffect)((function(){R("/user").then((function(e){return i(e.data)}))}),[]),Object(r.jsx)(j.a,{className:c.wrapper,children:Object(r.jsx)(b.a,{container:!0,spacing:1,children:null===a||void 0===a?void 0:a.map((function(e){return Object(r.jsx)(b.a,{item:!0,sm:3,xs:6,children:Object(r.jsx)(w,{id:e.id,userImage:null===e||void 0===e?void 0:e.picture,userName:"".concat(Object(h.a)(null===e||void 0===e?void 0:e.title)," ").concat(null===e||void 0===e?void 0:e.firstName," ").concat(null===e||void 0===e?void 0:e.lastName),userEmail:null===e||void 0===e?void 0:e.email})},null===e||void 0===e?void 0:e.id)}))})})},D=a(64),U=a(257),W=a(255),B=a(77),L=a(138),F=a(139),G=a(84),K=(a(185),function(e){return console.log(e),e.message}),H={},M=new(function(){function e(){Object(L.a)(this,e),0===G.a.apps.length&&G.a.initializeApp(H),console.log(G.a.apps),this.firebaseAuth=G.a.auth()}return Object(F.a)(e,[{key:"register",value:function(){var e=Object(y.a)(E.a.mark((function e(t,a,r){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.firebaseAuth.createUserWithEmailAndPassword(a,r);case 3:this.firebaseAuth.currentUser.updateProfile({displayName:t}),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",K(e.t0));case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"useGoogleProvider",value:function(){try{var e=new G.a.auth.GoogleAuthProvider;e.setCustomParameters({prompt:"select_account"}),this.firebaseAuth.signInWithPopup(e)}catch(t){return console.log(t.message),K(t)}}},{key:"signIn",value:function(){var e=Object(y.a)(E.a.mark((function e(t,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.firebaseAuth.signInWithEmailAndPassword(t,a);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",K(e.t0));case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){try{this.firebaseAuth.signOut()}catch(e){return console.log(e.message),K(e)}}},{key:"forgotPassword",value:function(){var e=Object(y.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.firebaseAuth.sendPasswordResetEmail(t);case 3:window.location.href="/",e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0?K(e.t0):K({message:"Check your email to reset your password"}));case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),q=a(35),z=a(74),V=a.n(z),J=q.a().shape({displayName:q.b().required("Display Name is required!!"),email:q.b().email("Invalid Email").required("Email is required!!"),password:q.b().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),Y=Object(u.a)((function(e){return{wrapper:{paddingTop:"5rem",height:"calc(100vh - 9.0625rem)"},avatar:{margin:"1rem auto",backgroundColor:e.palette.secondary.main},signUp:{margin:"1rem"}}}));var Q=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(B.b)({initialValues:{displayName:"",email:"",password:""},validationSchema:J,onSubmit:function(e){M.register(e.displayName,e.email,e.password).then((function(e){return i(e)}))}}),s=Y();return Object(r.jsxs)(j.a,{className:s.wrapper,maxWidth:"sm",children:[Object(r.jsx)(U.a,{className:s.avatar,children:Object(r.jsx)(V.a,{})}),Object(r.jsx)(P.a,{className:s.signUp,variant:"h4",children:"Sign Up"}),Object(r.jsx)("form",{onSubmit:c.handleSubmit,children:Object(r.jsxs)(b.a,{container:!0,spacing:3,children:[Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(W.a,Object(D.a)(Object(D.a)({name:"displayName",label:"Display Name",variant:"outlined",fullWidth:!0},c.getFieldProps("displayName")),{},{error:c.touched.displayName&&c.errors.displayName,helperText:c.touched.displayName&&c.errors.displayName}))}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(W.a,Object(D.a)(Object(D.a)({name:"email",label:"Email",variant:"outlined",fullWidth:!0},c.getFieldProps("email")),{},{error:c.touched.email&&c.errors.email,helperText:c.touched.email&&c.errors.email}))}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(W.a,Object(D.a)(Object(D.a)({name:"password",label:"Password",variant:"outlined",type:"password",fullWidth:!0},c.getFieldProps("password")),{},{error:c.touched.password&&c.errors.password,helperText:c.touched.password&&c.errors.password}))}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(A.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Register"})}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(A.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){M.useGoogleProvider()},children:"SignUp with Google"})}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsxs)(o.b,{to:"/login",children:[" ","I have already an account. SignIn"]})}),Object(r.jsx)("p",{style:{textAlign:"center",color:"red"},children:Object(r.jsx)("small",{children:a})})]})})]})},X=q.a().shape({email:q.b().email("Invalid Email").required("Email is required!!"),password:q.b().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),Z=Object(u.a)((function(e){return{wrapper:{paddingTop:"5rem",height:"calc(100vh - 9.0625rem)"},avatar:{margin:"1rem auto",backgroundColor:e.palette.primary.main},signIn:{margin:"1rem"},link:{display:"flex",flexDirection:"row",justifyContent:"space-between"}}})),$={email:"",password:""};var ee=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Z(),s=function(){M.useGoogleProvider()};return Object(r.jsxs)(j.a,{className:c.wrapper,maxWidth:"sm",children:[Object(r.jsx)(U.a,{className:c.avatar,children:Object(r.jsx)(V.a,{})}),Object(r.jsx)(P.a,{className:c.signIn,variant:"h4",children:"Sign In"}),Object(r.jsx)(B.a,{initialValues:$,validationSchema:X,onSubmit:function(e){M.signIn(e.email,e.password).then((function(e){return i(e)}))},children:function(e){var t=e.handleSubmit,n=e.handleChange,i=e.values,l=e.errors;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)(b.a,{container:!0,spacing:3,children:[Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(W.a,{className:c.gridItem,name:"email",label:"Email",variant:"outlined",fullWidth:!0,value:i.email,onChange:n,error:l.email,helperText:l.email})}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(W.a,{name:"password",label:"Password",variant:"outlined",type:"password",fullWidth:!0,value:i.password,onChange:n,error:l.password,helperText:l.password})}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(A.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Login"})}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(A.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:s,children:"Sign In with Google"})}),Object(r.jsxs)(b.a,{item:!0,xs:12,className:c.link,children:[Object(r.jsxs)(o.b,{to:"/register",children:[" ",'If you don"t hava an account? SignUp please'," "]}),Object(r.jsxs)(o.b,{to:"/forgot-password",children:[" ","Forget Password"," "]})]})]}),Object(r.jsx)("p",{style:{textAlign:"center",color:"red"},children:Object(r.jsx)("small",{children:a})})]})}})]})},te=q.a().shape({email:q.b().email("Invalid Email").required("Email is required!!")}),ae=Object(u.a)((function(e){return{wrapper:{marginTop:"10rem",height:"calc(100vh - 19.0625rem)",textAlign:"center"},avatar:{margin:"1rem auto",backgroundColor:e.palette.primary.main},forgotPassword:{margin:"1rem"}}})),re={email:""};var ne=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],i=(t[1],ae());return Object(r.jsxs)(j.a,{className:i.wrapper,maxWidth:"sm",children:[Object(r.jsx)(U.a,{className:i.avatar,children:Object(r.jsx)(V.a,{})}),Object(r.jsx)(P.a,{className:i.forgotPassword,variant:"h4",children:"Forgot Password"}),Object(r.jsx)(B.a,{initialValues:re,validationSchema:te,onSubmit:function(e){M.forgotPassword(e.email).then((function(){}))},children:function(e){var t=e.handleSubmit,n=e.handleChange,i=e.values,c=e.errors;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)(b.a,{container:!0,spacing:3,children:[Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(W.a,{name:"email",label:"Email",variant:"outlined",fullWidth:!0,value:i.email,onChange:n,error:c.email,helperText:c.email})}),Object(r.jsx)(b.a,{item:!0,xs:12,children:Object(r.jsx)(A.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Submit"})})]}),Object(r.jsx)("p",{style:{textAlign:"center",color:"red"},children:Object(r.jsx)("small",{children:a})})]})}})]})},ie=a(247),ce=a(254),se=a(246),oe=function(e){return Object(ce.a)(Object(se.a)(e),"MM/dd/yyyy HH:mm")},le=Object(u.a)((function(e){return{wrapper:{height:"calc(100vh - 9.0625rem)",backgroundColor:"#bdbdbd",display:"flex",flexDirection:"column",justifyContent:"center"},avatar:{margin:"1rem auto",backgroundColor:e.palette.secondary.main}}}));var de=function(){var e=Object(l.g)().id,t=le(),a=Object(n.useState)(),i=Object(d.a)(a,2),c=i[0],s=i[1];return Object(n.useEffect)((function(){console.log("\ud83d\ude80 ~ file: UserDetail.js ~ line 27 ~ UserDetail ~ userDetail",c),R("/user/".concat(e)).then((function(e){return s(e)})).catch().finally()}),[e]),Object(r.jsx)(j.a,{className:t.wrapper,children:c?Object(r.jsxs)(b.a,{container:!0,spacing:3,direction:"row",justify:"space-around",alignItems:"center",children:[Object(r.jsx)(b.a,{item:!0,xs:4,children:Object(r.jsx)("img",{src:null===c||void 0===c?void 0:c.picture,alt:"user"})}),Object(r.jsxs)(b.a,{item:!0,xs:4,children:[Object(r.jsx)(P.a,{variant:"h6",children:"".concat(Object(h.a)(null===c||void 0===c?void 0:c.title)," ").concat(null===c||void 0===c?void 0:c.firstName," ").concat(null===c||void 0===c?void 0:c.lastName)})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(P.a,{variant:"h9",children:[Object(r.jsx)("b",{children:"Gender : "})," ",Object(h.a)(null===c||void 0===c?void 0:c.gender)]})," ",Object(r.jsx)("br",{}),(null===c||void 0===c?void 0:c.registerDate)&&Object(r.jsxs)(P.a,{variant:"h9",children:[Object(r.jsx)("b",{children:" Date Of Birth: "}),oe(c.dateOfBirth)]})," ",Object(r.jsx)("br",{}),(null===c||void 0===c?void 0:c.registerDate)&&Object(r.jsxs)(P.a,{variant:"h9",children:[Object(r.jsx)("b",{children:"Register Date: "}),oe(c.registerDate)]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(P.a,{variant:"h9",children:[Object(r.jsx)("b",{children:"Email: "})," ",null===c||void 0===c?void 0:c.email]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(P.a,{variant:"h9",children:[Object(r.jsx)("b",{children:"Phone:"}),null===c||void 0===c?void 0:c.phone]})," ",Object(r.jsx)("br",{})]}),Object(r.jsx)(b.a,{item:!0,xs:4})]}):Object(r.jsx)(ie.a,{})})},ue=a(97),je=a(4),be=a(248),he=a(250),me=a(249),pe=a(112),Oe=a(142),xe=a.n(Oe),fe=a(143),ve=a.n(fe),ge=a(141),Ae=a.n(ge),Pe=Object(u.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:pe.a[500]}}}));function _e(e){var t=e.id,a=e.userInitial,c=e.title,s=e.subheader,o=e.imgSrc,l=e.imgTitle,u=e.description,j=e.likes,b=Pe(),h=i.a.useState(!1),m=Object(d.a)(h,2),p=m[0],x=m[1],A=Object(n.useState)(),_=Object(d.a)(A,2),w=_[0],S=_[1],E=function(e){R("/post/".concat(e,"/comment")).then((function(e){return S(null===e||void 0===e?void 0:e.data)})).catch().finally()};return Object(r.jsxs)(O.a,{className:b.root,children:[Object(r.jsx)(be.a,{avatar:Object(r.jsx)(U.a,{"aria-label":"recipe",className:b.avatar,children:a}),action:Object(r.jsx)(me.a,{"aria-label":"settings",children:Object(r.jsx)(Ae.a,{})}),title:c,subheader:s}),Object(r.jsx)(g.a,{className:b.media,image:o,title:l}),Object(r.jsx)(v.a,{children:Object(r.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:u})}),Object(r.jsxs)(f.a,{disableSpacing:!0,children:[Object(r.jsx)(me.a,{"aria-label":"add to favorites",children:Object(r.jsx)(xe.a,{})}),Object(r.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:"".concat(j," Likes")}),Object(r.jsx)(me.a,{className:Object(je.a)(b.expand,Object(ue.a)({},b.expandOpen,p)),onClick:function(){return e=t,p||E(e),void x(!p);var e},"aria-expanded":p,"aria-label":"show more",children:Object(r.jsx)(ve.a,{})})]}),Object(r.jsx)(he.a,{in:p,timeout:"auto",unmountOnExit:!0,children:Object(r.jsx)(v.a,{children:w?w.length?w.map((function(e){return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(P.a,{variant:"body2",children:e.owner.firstName}),Object(r.jsx)(P.a,{paragraph:!0,children:e.message}),Object(r.jsx)("hr",{})]},e.id)})):"No comment":Object(r.jsx)(ie.a,{})})})]})}var we=Object(u.a)((function(e){return{wrapper:{marginTop:"10rem",minHeight:"calc(100vh - 19.0625rem)",textAlign:"center"},avatar:{margin:"1rem auto",backgroundColor:e.palette.secondary.main}}}));var Se=function(){var e=Object(l.g)().id,t=we(),a=Object(n.useState)(),i=Object(d.a)(a,2),c=i[0],s=i[1];return Object(n.useEffect)((function(){R("/user/".concat(e,"/post")).then((function(e){return s(null===e||void 0===e?void 0:e.data)})).catch().finally()}),[e]),Object(r.jsx)(j.a,{className:t.wrapper,children:c?Object(r.jsx)(b.a,{container:!0,spacing:1,children:null===c||void 0===c?void 0:c.map((function(e){var t=e.owner,a=t.firstName,n=t.lastName;return Object(r.jsx)(b.a,{item:!0,sm:4,xs:6,children:Object(r.jsx)(_e,{id:e.id,userInitial:a[0],title:"".concat(a," ").concat(n),subheader:oe(e.publishDate),imgSrc:e.image,imgTitle:"Image Title",description:e.text,likes:e.likes})},null===e||void 0===e?void 0:e.id)}))}):Object(r.jsx)(ie.a,{})})},Ee=a(251),ye=a(252),Ce=a(144),Te=a.n(Ce),Ne=a(145),Re=a.n(Ne),Ie=a(256),ke=a(146),De=Object(n.createContext)();var Ue=function(e){var t=Object(n.useState)(),a=Object(d.a)(t,2),i=a[0],c=a[1];return Object(n.useEffect)((function(){null===M||void 0===M||M.firebaseAuth.onAuthStateChanged((function(e){c(e)}))}),[]),Object(r.jsx)(De.Provider,{value:{currentUser:i},children:e.children})},We=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},accountCircle:{paddingLeft:"1rem"}}}));function Be(){var e=Object(n.useContext)(De).currentUser,t=We(),a=Object(l.f)(),c=i.a.useState(!0),s=Object(d.a)(c,2),o=(s[0],s[1],i.a.useState(null)),u=Object(d.a)(o,2),j=u[0],b=u[1],h=Boolean(j),m=Object(n.useCallback)((function(){a.push("/")}),[]),p=Object(n.useCallback)((function(){b(null)}),[]),O=Object(n.useCallback)((function(){M.signOut()}),[]);return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(Ee.a,{position:"static",children:Object(r.jsxs)(ye.a,{children:[Object(r.jsx)(me.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:m,children:Object(r.jsx)(Te.a,{})}),Object(r.jsx)(P.a,{variant:"h6",className:t.title,children:"React Share"}),e?Object(r.jsxs)("div",{children:[Object(r.jsxs)(me.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",children:[null===e||void 0===e?void 0:e.displayName,Object(r.jsx)(Re.a,{className:t.accountCircle})]}),Object(r.jsxs)(ke.a,{id:"menu-appbar",anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:p,children:[Object(r.jsx)(Ie.a,{onClick:p,children:"Profile"}),Object(r.jsx)(Ie.a,{onClick:p,children:"My account"}),Object(r.jsx)(Ie.a,{onClick:O,children:"Sign Out"})]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ie.a,{onClick:function(){window.location.href="/login"},children:"Sign in"}),Object(r.jsx)(Ie.a,{onClick:function(){window.location.href="/register"},children:"Sign up"})]})]})})})}var Le=a(253);function Fe(){return Object(r.jsxs)(P.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(r.jsx)(Le.a,{color:"inherit",href:"https://material-ui.com/",children:"React Share"})," ",(new Date).getFullYear(),"."]})}var Ge=Object(u.a)((function(e){return{main:{marginTop:e.spacing(0),marginBottom:e.spacing(0),textAlign:"center"},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[800]:e.palette.grey[200]}}}));function Ke(){var e=Ge();return Object(r.jsx)("div",{id:"footer",className:e.main,children:Object(r.jsx)("footer",{className:e.footer,children:Object(r.jsxs)(j.a,{maxWidth:"sm",children:[Object(r.jsx)(P.a,{variant:"body1",children:"Address Virginia, USA."}),Object(r.jsx)(Fe,{})]})})})}var He=function(){var e=Object(n.useContext)(De).currentUser;return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(Be,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/register",component:e?k:Q}),Object(r.jsx)(l.a,{exact:!0,path:"/login",component:e?k:ee}),Object(r.jsx)(l.a,{exact:!0,path:"/forgot-password",component:ne}),Object(r.jsx)(l.a,{exact:!0,path:"/user/:id",component:e?de:ee}),Object(r.jsx)(l.a,{exact:!0,path:"/user/:id/post",component:e?Se:ee}),Object(r.jsx)(l.a,{path:"/",component:k})]}),Object(r.jsx)(Ke,{})]})};var Me=function(){return Object(r.jsx)(Ue,{children:Object(r.jsx)(He,{})})},qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,258)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Me,{})}),document.getElementById("root")),qe()}},[[188,1,2]]]);
//# sourceMappingURL=main.4621bfe1.chunk.js.map