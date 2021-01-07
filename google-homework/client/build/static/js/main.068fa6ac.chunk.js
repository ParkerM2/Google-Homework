(this["webpackJsonpreact-google-books"]=this["webpackJsonpreact-google-books"]||[]).push([[0],{55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),i=n(29),s=n.n(i),c=n(14),r=n(2),l=n(30),u=n(9),h=n(10),d=n(12),b=n(11),j=n(13),v=n.n(j),g=function(e){return v.a.get("/api/google",{params:e})},m=function(){return v.a.get("/api/books")},f=function(e){return v.a.delete("/api/books/"+e)},p=function(e){return v.a.post("/api/books",e)},k=function(e){var t=e.children;return Object(o.jsx)("ul",{children:t})};var O=function(e){var t=e.q,n=e.handleInputChange,a=e.handleFormSubmit;return Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"Query",children:Object(o.jsx)("strong",{children:"Book"})}),Object(o.jsx)("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Ready Player One",name:"q",onChange:n,required:!0})]}),Object(o.jsx)("div",{className:"pull-right",children:Object(o.jsx)("button",{onClick:a,type:"submit",className:"btn btn-lg btn-danger float-right",children:"Search"})})]})};var x=function(e){var t=e.title,n=e.subtitle,a=e.authors,i=e.link,s=e.description,c=e.image,r=e.Button;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:t}),n&&Object(o.jsx)("h5",{children:n}),Object(o.jsxs)("p",{children:[" Written by : ",a]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{target:"_blank",href:i,children:"view"}),Object(o.jsx)(r,{})]}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:s})})]})},B=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={books:[],q:"",message:"Search For A Book To Begin!"},e.handleInputChange=function(t){var n=t.target,o=n.name,a=n.value;console.log(e.state),e.setState(Object(l.a)({},o,a))},e.getBooks=function(){g("lol").then((function(t){return e.setState({books:t.data.description})})).catch((function(){return e.setState({books:[],message:"No New Books Found, Try a Different Query"})}))},e.handleFormSubmit=function(t){t.preventDefault(),console.log(t),e.getBooks(e.state.q)},e.handleBookSave=function(t){var n=e.state.books.find((function(e){return e.id===t}));p({googleId:n.id,title:n.volumeInfo.title,subtitle:n.volumeInfo.subtitle,link:n.volumeInfo.infoLink,authors:n.volumeInfo.authors,description:n.volumeInfo.description,image:n.volumeInfo.imageLinks.thumbnail}).then((function(){return e.getBooks()})),console.log(n.volumeInfo.description,"after API.saveBook")},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" Google Books Search "}),Object(o.jsx)("h2",{children:" Search for and Save Books"}),Object(o.jsx)(O,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q}),this.state.books.length?Object(o.jsx)(k,{children:this.state.books.map((function(t){return Object(o.jsx)(x,{title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return Object(o.jsx)("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-primary ml-2",children:"Save"})}},t.id)}))}):Object(o.jsxs)("h2",{children:[" ",this.state.message]})]})}}]),n}(a.Component),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={books:[]},e.getSavedBooks=function(){m().then((function(e){return console.log("response from API.getSavedBooks",e)})).catch((function(e){return console.log(e)})),console.log(e.state.books,"after API call get savedbooks")},e.handleDeleteBook=function(t){f(t).then((function(t){return e.getSavedBooks()}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getSavedBooks(),console.log(this.state.books,"inside of componentdidmount")}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" React Google Book Search"}),Object(o.jsx)("h2",{children:" Saved Books : "}),this.state.books.length?Object(o.jsx)(k,{children:this.state.books.map((function(t){return Object(o.jsx)(x,{title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return Object(o.jsx)("button",{onClick:function(){return e.handleDeleteBook(t._id)},children:"Delete Book"})}},t._id)}))}):Object(o.jsx)("h3",{children:"No Saved books"})]})}}]),n}(a.Component);var N=function(){return Object(o.jsx)("h4",{children:" Error 404 You may not pass go, go straight to jail."})},y=(n(55),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={open:!1,width:window.innerWidth},e.updateWidth=function(){var t={width:window.innerWidth};e.state.open&&t.width>991&&(t.open=!1),e.setState(t)},e.toggleNav=function(){e.setState({open:!e.state.open})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2",children:[Object(o.jsx)(c.b,{className:"navbar-brand",to:"/",children:"Google Books"}),Object(o.jsx)("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(c.b,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/",children:"Search"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(c.b,{onClick:this.toggleNav,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved",children:"Saved"})})]})})]})}}]),n}(a.Component));var w=function(){return Object(o.jsx)(c.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",component:B}),Object(o.jsx)(r.a,{exact:!0,path:"/saved",component:S}),Object(o.jsx)(r.a,{component:N})]})]})})};s.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.068fa6ac.chunk.js.map