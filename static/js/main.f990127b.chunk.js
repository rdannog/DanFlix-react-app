(this["webpackJsonpaula-api"]=this["webpackJsonpaula-api"]||[]).push([[0],{45:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var c,i,r,a,s,o,l,d,j,b,h,p,x,u,O,f,m,v,g,w,y,k,S,_=t(0),D=t.n(_),M=t(37),z=t.n(M),F=(t(45),t(3)),U=t(10),A=t.n(U),C=t(11),H=t(13),L=t(14),I=t(15),J=t(17),R=t(16),W=t(2),B=t(22),E=t.n(B),P=E.a.create({baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=0f6296ac61ec5966cd4f6b9f39a2b01c&language=en-US&page=1"}),q=t(1),G=Object(W.a)(c||(c=Object(F.a)(["\nbody{\n  background-color:black;\n  color:white;\n  text-decoration:none;\n}\n"]))),K=W.b.div(i||(i=Object(F.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content:center;\nflex-direction: column;\n"]))),N=W.b.div(r||(r=Object(F.a)(["\nborder: solid 2px black;\nwidth: 80vw;\nmargin: 1rem;\npadding: 5vh 5vw;\nlist-style:none;\ntext-align:center;\ndisplay: flex;\njustify-content:center;\nalign-items:center;\nflex-direction: column;\nborder-bottom: solid 3px white;\n\n"]))),Q=W.b.img(a||(a=Object(F.a)(["\nwidth:280px;\nborder: solid 2px black;\nborder-radius: 8px;\n"]))),T=W.b.div(s||(s=Object(F.a)(["\nwidth:50%;\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n"]))),V=W.b.div(o||(o=Object(F.a)(["\nwidth:50%;\nfont-size: 1.2rem;\ndisplay:flex;\njustify-content:center;\nflex-direction:column;\n\n"]))),X=W.b.div(l||(l=Object(F.a)(["\nwidth:100%;\ndisplay:flex;\nalign-items:center;\njustify-content: center;\n@media(max-width:900px){\n  flex-direction: column;\n}\n"]))),Y=W.b.div(d||(d=Object(F.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content:center;\nflex-direction:column;\npadding:2rem;\nbutton{\n  background-color: red;\n  opacity:0.8;\n  width: 200px;\n  height:40px;\n  border: none;\n  border-radius: 8px;\n  margin-bottom:1rem;\n  cursor:pointer;\n  font-size: 1rem;\n  color:white;\n}\n"]))),Z=function(e){Object(J.a)(t,e);var n=Object(R.a)(t);function t(){var e;Object(L.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={movies:[]},e.getMovies=Object(H.a)(A.a.mark((function n(){var t,c;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.get();case 2:t=n.sent,e.setState({movies:t.data.results}),c=t.data.results.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{poster_path:"https://image.tmdb.org/t/p/w500".concat(e.poster_path)})})),e.setState({movies:c});case 6:case"end":return n.stop()}}),n)}))),e}return Object(I.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){return Object(q.jsxs)(K,{children:[Object(q.jsx)(G,{}),this.state.movies.map((function(e){return Object(q.jsxs)(N,{children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{children:e.title}),Object(q.jsxs)("h3",{children:["(",e.release_date,")"]})]}),Object(q.jsxs)(X,{children:[Object(q.jsx)(T,{children:Object(q.jsx)(Q,{src:e.poster_path})}),Object(q.jsxs)(V,{children:[Object(q.jsx)("p",{children:e.overview}),Object(q.jsxs)(Y,{children:[Object(q.jsx)("button",{children:"Watch Here"}),Object(q.jsx)("button",{children:"Download"})]})]})]})]},e.id)}))]})}}]),t}(D.a.Component),$=E.a.create({baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=0f6296ac61ec5966cd4f6b9f39a2b01c&language=en-US&page=1"}),ee=Object(W.a)(j||(j=Object(F.a)(["\nbody{\n  background-color:black;\n  color:white;\n}\n"]))),ne=W.b.div(b||(b=Object(F.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content:center;\nflex-direction: column;\n"]))),te=W.b.div(h||(h=Object(F.a)(["\nborder: solid 2px black;\nwidth: 80vw;\nmargin: 1rem;\npadding: 5vh 5vw;\nborder-bottom: solid 3px white;\nlist-style:none;\ntext-align:center;\ndisplay: flex;\njustify-content:center;\nalign-items:center;\nflex-direction: column;\n}\n"]))),ce=W.b.img(p||(p=Object(F.a)(["\nwidth:280px;\n"]))),ie=W.b.div(x||(x=Object(F.a)(["\nwidth:50%;\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n"]))),re=W.b.div(u||(u=Object(F.a)(["\nwidth:50%;\nfont-size: 1.2rem;\ndisplay:flex;\njustify-content:center;\nflex-direction:column;\n"]))),ae=W.b.div(O||(O=Object(F.a)(["\nwidth:100%;\ndisplay:flex;\nalign-items:center;\njustify-content: center;\n@media(max-width:900px){\n  flex-direction: column;\n}\n"]))),se=W.b.div(f||(f=Object(F.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content:center;\nflex-direction:column;\npadding:2rem;\nbutton{\n  background-color: red;\n  opacity:0.8;\n  width: 200px;\n  height:40px;\n  border: none;\n  border-radius: 8px;\n  margin-bottom:1rem;\n  cursor:pointer;\n  font-size: 1rem;\n  color:white;\n}\n"]))),oe=function(e){Object(J.a)(t,e);var n=Object(R.a)(t);function t(){var e;Object(L.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={shows:[]},e.getShows=Object(H.a)(A.a.mark((function n(){var t,c;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$.get();case 2:t=n.sent,e.setState({shows:t.data.results}),c=t.data.results.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{poster_path:"https://image.tmdb.org/t/p/w500".concat(e.poster_path)})})),e.setState({shows:c});case 6:case"end":return n.stop()}}),n)}))),e}return Object(I.a)(t,[{key:"componentDidMount",value:function(){this.getShows()}},{key:"render",value:function(){return Object(q.jsxs)(ne,{children:[Object(q.jsx)(ee,{}),this.state.shows.map((function(e){return Object(q.jsxs)(te,{children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{children:e.name}),Object(q.jsxs)("h3",{children:["First air date: ",e.first_air_date]})]}),Object(q.jsxs)(ae,{children:[Object(q.jsx)(ie,{children:Object(q.jsx)(ce,{src:e.poster_path})}),Object(q.jsxs)(re,{children:[Object(q.jsx)("p",{children:e.overview}),Object(q.jsxs)(se,{children:[Object(q.jsx)("button",{children:"Watch Here"}),Object(q.jsx)("button",{children:"Download"})]})]})]})]},e.id)}))]})}}]),t}(D.a.Component),le=Object(W.a)(m||(m=Object(F.a)(["\nbody{\n  background-color:black;\n  color:white;\n}\n"]))),de=W.b.div(v||(v=Object(F.a)(["\nwidth: 100%;\ndisplay: flex;\nalign-items:center;\njustify-content:center;\nflex-direction:row;\nflex-wrap: wrap;\n"]))),je=W.b.div(g||(g=Object(F.a)(["\nwidth:18vw;\npadding: 5vh 2vw;\nmargin:2vh 1vw;\ndisplay: flex;\nalign-items:center;\njustify-content:center;\nflex-direction:column;\n&:hover{\n  background-color:goldenrod;\n  border-radius: 12px;\n}\n"]))),be=W.b.img(w||(w=Object(F.a)(["\nwidth: 200px;\nborder-radius: 12px;\n"]))),he=function(e){Object(J.a)(t,e);var n=Object(R.a)(t);function t(){var e;Object(L.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={shows:[]},e.getShows=Object(H.a)(A.a.mark((function n(){var t,c;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$.get();case 2:t=n.sent,e.setState({shows:t.data.results}),c=t.data.results.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{poster_path:"https://image.tmdb.org/t/p/w500".concat(e.poster_path)})})),e.setState({shows:c});case 6:case"end":return n.stop()}}),n)}))),e}return Object(I.a)(t,[{key:"componentDidMount",value:function(){this.getShows()}},{key:"render",value:function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h2",{style:{paddingLeft:"6%",height:"13vh",display:"flex",alignItems:"flex-end"},children:"Popular Shows"}),Object(q.jsxs)(de,{children:[Object(q.jsx)(le,{}),this.state.shows.map((function(e){return Object(q.jsxs)(je,{children:[Object(q.jsx)("div",{children:Object(q.jsx)(be,{src:e.poster_path})}),Object(q.jsx)("div",{children:Object(q.jsx)("h3",{children:e.name})})]},e.id)}))]})]})}}]),t}(D.a.Component),pe=t(18),xe=t(4),ue=W.b.nav(y||(y=Object(F.a)(["\nheight: 16vh;\ndisplay: flex;\nalign-items:flex-end;\njustify-content:center;\n"]))),Oe=W.b.ul(k||(k=Object(F.a)(["\nwidth:100%;\ndisplay: flex;\nalign-items:center;\njustify-content:space-evenly;\nlist-style: none;\nli{\n  font-size: 2rem;\n}\n"]))),fe=W.b.div(S||(S=Object(F.a)(["\nmargin: 3vh auto;\nfont-size: 25px;\nborder-bottom: solid 1px white;\ndisplay: flex;\nalign-items:center;\njustify-content:center;\n"])));function me(){var e={textDecoration:"underline red",color:"white"};return Object(q.jsx)(pe.a,{children:Object(q.jsxs)("div",{children:[Object(q.jsx)(fe,{children:Object(q.jsx)("h1",{children:Object(q.jsx)(pe.b,{to:"/DanFlix-react-app",style:{color:"red",textDecoration:"none"},children:"DanFlix"})})}),Object(q.jsx)(ue,{children:Object(q.jsxs)(Oe,{children:[Object(q.jsx)("li",{children:Object(q.jsx)(pe.b,{to:"/home",style:e,children:"Home"})}),Object(q.jsx)("li",{children:Object(q.jsx)(pe.b,{to:"/movies",style:e,children:"Movies"})}),Object(q.jsx)("li",{children:Object(q.jsx)(pe.b,{to:"/shows",style:e,children:"Shows"})})]})}),Object(q.jsxs)(xe.c,{children:[Object(q.jsx)(xe.a,{path:"/DanFlix-react-app",exact:!0,children:Object(q.jsx)(he,{})}),Object(q.jsx)(xe.a,{path:"/home",children:Object(q.jsx)(he,{})}),Object(q.jsx)(xe.a,{path:"/movies",children:Object(q.jsx)(Z,{})}),Object(q.jsx)(xe.a,{path:"/shows",children:Object(q.jsx)(oe,{})})]})]})})}z.a.render(Object(q.jsx)(D.a.StrictMode,{children:Object(q.jsx)(me,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.f990127b.chunk.js.map