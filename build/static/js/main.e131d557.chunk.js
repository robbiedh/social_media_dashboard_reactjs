(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(83)},48:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),r=a.n(o),c=(a(47),a(5)),s=a(6),i=a(8),u=a(7),m=a(9),d=(a(48),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null," Home "))}}]),t}(n.Component)),h=a(16),p=Object(h.a)(),b=a(14),E=a(84),f=a(85),j=a(86),v=a(87),O=a(88),g=a(89),y=a(90),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(b.a)(a)),a.state={collapsed:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,{color:"faded",light:!0},l.a.createElement(f.a,{href:"/",className:"mr-auto"},"Social Media Dashboard"),l.a.createElement(j.a,{onClick:this.toggleNavbar,className:"mr-2"}),l.a.createElement(v.a,{isOpen:!this.state.collapsed,navbar:!0},l.a.createElement(O.a,{navbar:!0},l.a.createElement(g.a,null,l.a.createElement(y.a,{href:"/"},"Home")),l.a.createElement(g.a,null,l.a.createElement(y.a,{href:"/users"},"User")),l.a.createElement(g.a,null,l.a.createElement(y.a,{href:"/post-all"},"Post"))))))}}]),t}(n.Component),C=a(100),S=a(11),N=a.n(S),P=a(92),_=a(93),D=a(94),J=a(95),I=new function e(){Object(c.a)(this,e),this.url="https://jsonplaceholder.typicode.com"},U=a(12),w=a(91),B=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.id+1," "),l.a.createElement("td",null,this.props.obj.id),l.a.createElement("td",null,this.props.obj.name),l.a.createElement("td",null,this.props.obj.username),l.a.createElement("td",null,this.props.obj.email),l.a.createElement("td",null,this.props.obj.address.street),l.a.createElement("td",null,this.props.obj.address.suite),l.a.createElement("td",null,this.props.obj.address.city),l.a.createElement("td",null,this.props.obj.address.zipcode),l.a.createElement("td",null,this.props.obj.address.geo.lat),l.a.createElement("td",null,this.props.obj.address.geo.lng),l.a.createElement("td",null,this.props.obj.phone),l.a.createElement("td",null,this.props.obj.website),l.a.createElement("td",null,this.props.obj.company.name),l.a.createElement("td",null,this.props.obj.company.catchPhares),l.a.createElement("td",null,this.props.obj.company.bs),l.a.createElement("td",null," ",l.a.createElement(U.b,{to:"/post/"+this.props.obj.id}," ",l.a.createElement(w.a,{color:"info"},"   Lihat Post ")," "),"  "),l.a.createElement("td",null," ",l.a.createElement(U.b,{to:"/album/"+this.props.obj.id},l.a.createElement(w.a,{color:"info"},"   Lihat Album "))," "))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={users:[],visible:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({visible:!0}),N.a.get(I.url+"/users").then(function(t){e.setState({users:t.data,visible:!1}),console.log("data produk : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P.a,null,l.a.createElement(_.a,null,l.a.createElement("h1",null," Halaman List User  "))),this.state.visible?l.a.createElement(P.a,null," ",l.a.createElement(_.a,{xs:"auto"}," ",l.a.createElement(D.a,null)," ")," "):l.a.createElement(P.a,null,l.a.createElement(_.a,null,l.a.createElement(J.a,{dark:!0,size:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Nomer "),l.a.createElement("td",null,"ID"),l.a.createElement("td",null," Name"),l.a.createElement("td",null,"Username"),l.a.createElement("td",null," Email"),l.a.createElement("td",null," Street"),l.a.createElement("td",null," suite"),l.a.createElement("td",null," city"),l.a.createElement("td",null," zipcode"),l.a.createElement("td",null," latitude"),l.a.createElement("td",null," Longitude"),l.a.createElement("td",null," Phone"),l.a.createElement("td",null," Website"),l.a.createElement("td",null," Company Name"),l.a.createElement("td",null," Company catchpharse"),l.a.createElement("td",null," Company bs"),l.a.createElement("td",null," Post User"),l.a.createElement("td",null,"Album User"))),l.a.createElement("tbody",null,this.state.users.map(function(e,t){return l.a.createElement(B,{key:t,id:t,obj:e})}))))))}}]),t}(n.Component),M=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.id+1," "),l.a.createElement("td",null," ",this.props.obj.id),l.a.createElement("td",null," ",this.props.obj.title),l.a.createElement("td",null," ",this.props.obj.body))}}]),t}(n.Component),A=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).props.match.params;return a.state={posts:[],id_user:n.id},console.log(a.state.id_user),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/posts?userId="+this.state.id_user).then(function(t){e.setState({posts:t.data}),console.log("data post : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P.a,null,l.a.createElement(_.a,null,l.a.createElement("h1",null," List  Post User "))),l.a.createElement(P.a,null,l.a.createElement(_.a,null,l.a.createElement(U.b,{to:"/add-post"},l.a.createElement(w.a,{color:"success"},"Add Post "),"  "))),l.a.createElement(P.a,null,l.a.createElement(J.a,{dark:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Nomer "),l.a.createElement("td",null,"Id Post "),l.a.createElement("td",null,"Judul Post "),l.a.createElement("td",null," Body Post "),l.a.createElement("td",null," # "))),l.a.createElement("tbody",null,this.state.posts.map(function(e,t){return l.a.createElement(M,{key:t,id:t,obj:e})})))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={user:[]},a.handleDelet=a.handleDelet.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/users?id="+this.props.obj.userId).then(function(t){e.setState({user:t.data[0]})}).catch(function(e){console.log(e)})}},{key:"handleDelet",value:function(){var e=I.url+"/posts/"+this.props.obj.id;N.a.delete(e).then(function(e){console.log(e.data),alert("Data Berhasil Di Hapus"),p.push("/post-all")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("tr",null,l.a.createElement("td",null," ",this.props.id+1),l.a.createElement("td",null," ",this.props.obj.id),l.a.createElement("td",null," ",this.state.user.username),l.a.createElement("td",null," ",this.state.user.email),l.a.createElement("td",null," ",this.props.obj.title),l.a.createElement("td",null," ",this.props.obj.body),l.a.createElement("td",null,l.a.createElement(U.b,{to:"comment/"+this.props.obj.id}," Lihat Commentar "),l.a.createElement("input",{type:"submit",onClick:function(){return e.handleDelet()},value:"Delete",className:"btn btn-danger"}),l.a.createElement(U.b,{to:"edit-post/"+this.props.obj.id}," Edit Post  ")))}}]),t}(n.Component),H=function(e){function t(e){var a;Object(c.a)(this,t);(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).props.match.params;return a.state={posts:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/posts").then(function(t){e.setState({posts:t.data}),console.log("data post : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null," List  All Post  "),l.a.createElement(U.b,{to:"/add-post"}," Add Post  "),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Nomer  "),l.a.createElement("td",null,"Id Post "),l.a.createElement("td",null,"Username "),l.a.createElement("td",null,"Email "),l.a.createElement("td",null,"Judul Post "),l.a.createElement("td",null,"Body Post "),l.a.createElement("td",null,"# "))),l.a.createElement("tbody",null,this.state.posts.map(function(e,t){return l.a.createElement(x,{key:t,id:t,obj:e})}))))}}]),t}(n.Component),z=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null," ",this.props.id+1),l.a.createElement("td",null," ",this.props.obj.id),l.a.createElement("td",null," ",this.props.obj.title),l.a.createElement("td",null," ",l.a.createElement(U.b,{to:"/photo/"+this.props.obj.id}," Lihat Photo ")," "))}}]),t}(n.Component),W=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).props.match.params;return a.state={albums:[],id_user:n.id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/albums?userId="+this.state.id_user).then(function(t){e.setState({albums:t.data}),console.log("data post : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null," List  Album User "),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Nomer  "),l.a.createElement("td",null,"Id Album "),l.a.createElement("td",null,"Judul Album "))),l.a.createElement("tbody",null,this.state.albums.map(function(e,t){return l.a.createElement(z,{key:t,id:t,obj:e})}))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={user:[]},a.handleDelet=a.handleDelet.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleDelet",value:function(){var e=this,t=I.url+"/comments/"+this.props.obj.id;N.a.delete(t).then(function(t){console.log(t.data),alert("Comment  Berhasil Di Hapus"),p.push("/comment/"+e.props.id_post)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("tr",null,l.a.createElement("td",null," ",this.props.id+1),l.a.createElement("td",null," ",this.props.obj.id),l.a.createElement("td",null," ",this.props.obj.name),l.a.createElement("td",null," ",this.props.obj.email),l.a.createElement("td",null," ",this.props.obj.body),l.a.createElement("td",null,l.a.createElement("input",{type:"submit",onClick:function(){return e.handleDelet()},value:"Delete Comment",className:"btn btn-danger"}),l.a.createElement(U.b,{to:"/edit-comment/"+this.props.obj.id}," Edit Comment  ")))}}]),t}(n.Component),$=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).props.match.params;return a.state={comments:[],id_post:n.id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/comments?userId="+this.state.id_post).then(function(t){e.setState({comments:t.data}),console.log("data post : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null," List  Comment  "),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Nomer  "),l.a.createElement("td",null,"Id  "),l.a.createElement("td",null,"Name "),l.a.createElement("td",null,"Email "),l.a.createElement("td",null,"Body  "))),l.a.createElement("tbody",null,this.state.comments.map(function(t,a){return l.a.createElement(T,{key:a,id_post:e.state.id_post,id:a,obj:t})}))))}}]),t}(n.Component),q=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.id+1," "),l.a.createElement("td",null," ",this.props.obj.title),l.a.createElement("td",null,l.a.createElement("img",{src:this.props.obj.thumbnailUrl})),l.a.createElement("td",null,l.a.createElement(U.b,{to:"/detail-photo/"+this.props.obj.id}," Detail Photo  ")))}}]),t}(n.Component),F=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).props.match.params;return a.state={photos:[],id_album:n.id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/photos?albumId="+this.state.id_album).then(function(t){e.setState({photos:t.data}),console.log("data post : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null," List  Album User "),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Nomer "),l.a.createElement("td",null,"title  "),l.a.createElement("td",null,"Photo "))),l.a.createElement("tbody",null,this.state.photos.map(function(e,t){return l.a.createElement(q,{key:t,id:t,obj:e})}))))}}]),t}(n.Component),G=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).props.match.params;return a.state={photo:[],album:[],id_photo:n.id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/photos?id="+this.state.id_photo).then(function(t){e.setState({photo:t.data[0]},e.getdata_album.bind(e)),console.log("data get photo : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"getdata_album",value:function(){var e=this;N.a.get(I.url+"/albums?id="+this.state.photo.albumId).then(function(t){e.setState({album:t.data[0]}),console.log("data post : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null," Titile Photo :  ",this.state.photo.title,"  "),l.a.createElement("p",null," Titile Album  :  ",this.state.album.title,"  "),l.a.createElement("p",null," Original Link   : ",l.a.createElement("a",{href:this.state.photo.url}," ",this.state.photo.url," "),"  "),l.a.createElement("img",{src:this.state.photo.thumbnailUrl}))}}]),t}(n.Component),K=a(15),Q=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).props.match.params;return a.state={comment:[],id_comment:n.id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/comments?id="+this.state.id_comment).then(function(t){e.setState({comment:t.data[0]}),console.log("data get photo : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"handle_update",value:function(){console.log(this.state.comment),N.a.put(I.url+"/comments/"+this.state.id_comment,this.state.comment).then(function(e){console.log("respon data  : "+JSON.stringify(e.data)),""!=e.data&&alert("Update Comment Berhasil")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",null," Edit  Comment"),l.a.createElement("p",null," Name  :    ",l.a.createElement("input",{value:""!=this.state.comment.name?this.state.comment.name:"",onChange:function(t){return e.setState({comment:Object(K.a)({},e.state.comment,{name:t.target.value})})}})," "),l.a.createElement("p",null," Email  :   ",l.a.createElement("input",{value:""!=this.state.comment.email?this.state.comment.email:"",onChange:function(t){return e.setState({comment:Object(K.a)({},e.state.comment,{email:t.target.value})})}}),"  "),l.a.createElement("p",null," Body    :  ",l.a.createElement("input",{value:""!=this.state.comment.body?this.state.comment.body:"",onChange:function(t){return e.setState({comment:Object(K.a)({},e.state.comment,{body:t.target.value})})}}),"  "),l.a.createElement("input",{type:"submit",onClick:this.handle_update.bind(this)}))}}]),t}(n.Component),R=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(i.a)(this,Object(u.a)(t).call(this,e)),console.log("ayo ");var n=a.props.match.params;return a.state={post:[],id_post:n.id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/posts?id="+this.state.id_post).then(function(t){e.setState({post:t.data[0]}),console.log("respon data post : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"handle_update",value:function(){console.log(this.state.post),N.a.put(I.url+"/posts/"+this.state.id_post,this.state.post).then(function(e){console.log("respon data  : "+JSON.stringify(e.data)),""!=e.data&&alert("Update Post Berhasil")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",null," Edit  Post"),l.a.createElement("p",null," Judul :    ",l.a.createElement("input",{value:""!=this.state.post.title?this.state.post.title:"",onChange:function(t){return e.setState({post:Object(K.a)({},e.state.post,{title:t.target.value})})}})," "),l.a.createElement("p",null," Body    :  ",l.a.createElement("input",{value:""!=this.state.post.body?this.state.post.body:"",onChange:function(t){return e.setState({post:Object(K.a)({},e.state.post,{body:t.target.value})})}}),"  "),l.a.createElement("input",{type:"submit",onClick:this.handle_update.bind(this)}))}}]),t}(n.Component),V=a(96),X=a(97),Y=a(98),Z=a(99),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={user:[],error:{userId:!1,title:!1,body:!1},post:{userId:"",title:"",body:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get(I.url+"/users").then(function(t){e.setState({user:t.data}),console.log("data get photo : "+JSON.stringify(t.data))}).catch(function(e){console.log(e)})}},{key:"handle_update",value:function(){console.log(this.state.post),N.a.post(I.url+"/posts",this.state.post).then(function(e){console.log("respon data  : "+JSON.stringify(e.data)),""!=e.data&&alert("Simpan Post Berhasil")}).catch(function(e){console.log(e)})}},{key:"validation_user",value:function(){this.state.post.userId}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(P.a,null,l.a.createElement(_.a,null,l.a.createElement("h2",null," Add Post"))),l.a.createElement(V.a,null,l.a.createElement(X.a,null,l.a.createElement(Y.a,{for:"user"},"Post Dengan User "),l.a.createElement(Z.a,{type:"select",name:"email",id:"user",placeholder:"Pilih User",value:this.state.post.userId,onChange:function(t){return e.setState({post:Object(K.a)({},e.state.post,{userId:t.target.value})})}},l.a.createElement("option",{value:"null"},"--Pilih User--"),this.state.user.map(function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.name)}))),l.a.createElement(X.a,null,l.a.createElement(Y.a,{for:"judul"},"Judul Post "),l.a.createElement(Z.a,{type:"text",name:"judul",id:"judul",value:""!=this.state.post.title?this.state.post.title:"",onChange:function(t){return e.setState({post:Object(K.a)({},e.state.post,{title:t.target.value})})}})),l.a.createElement(X.a,null,l.a.createElement(Y.a,{for:"body"},"Body  "),l.a.createElement(Z.a,{type:"textarea",name:"body",id:"body",value:""!=this.state.post.body?this.state.post.body:"",onChange:function(t){return e.setState({post:Object(K.a)({},e.state.post,{body:t.target.value})})}})),l.a.createElement(X.a,null,l.a.createElement(_.a,null,l.a.createElement(w.a,{color:"success",onClick:this.handle_update.bind(this)},"Post")))))}}]),t}(n.Component),te=a(18);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=l.a.createElement(U.a,{history:p},l.a.createElement(C.a,null,l.a.createElement(k,null),l.a.createElement(te.a,{exact:!0,path:"/",component:d}),l.a.createElement(te.a,{path:"/users",component:L}),l.a.createElement(te.a,{path:"/post/:id",component:A}),l.a.createElement(te.a,{path:"/add-post",component:ee}),l.a.createElement(te.a,{path:"/post-all",component:H}),l.a.createElement(te.a,{path:"/edit-post/:id",component:R}),l.a.createElement(te.a,{path:"/album/:id",component:W}),l.a.createElement(te.a,{path:"/photo/:id",component:F}),l.a.createElement(te.a,{path:"/comment/:id",component:$}),l.a.createElement(te.a,{path:"/edit-comment/:id",component:Q}),l.a.createElement(te.a,{path:"/detail-photo/:id",component:G})));r.a.render(ae,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.e131d557.chunk.js.map