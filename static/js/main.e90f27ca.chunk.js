(this["webpackJsonppokemons-app"]=this["webpackJsonppokemons-app"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(17),s=n.n(o),a=(n(49),n(50),n(18)),i=n(84),u=n(1),j=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(i.a,{onClick:e.clicked,bg:"info",style:{width:"14rem"},children:Object(u.jsxs)(i.a.Body,{children:[Object(u.jsx)(i.a.Title,{children:e.title}),Object(u.jsx)(i.a.Img,{src:e.src}),Object(u.jsx)(i.a.Text,{children:e.type})]})})})},p=Object(c.createContext)({}),l=n(11),h=n(80),b=n(81),m=n(82),f=n(79),d=Object(l.a)((function(e){var t=Object(c.useContext)(p);return Object(u.jsx)("div",{children:Object(u.jsxs)(m.a,{animation:!1,show:t.show,onHide:t.changeShow,children:[Object(u.jsx)(m.a.Header,{closeButton:!0,children:Object(u.jsx)(m.a.Title,{children:e.title})}),Object(u.jsxs)(m.a.Body,{children:[Object(u.jsx)("img",{src:e.src}),Object(u.jsx)("img",{src:e.backSrc}),Object(u.jsxs)("p",{children:["weight: ",e.weight]}),Object(u.jsxs)("p",{children:["height: ",e.height]}),Object(u.jsxs)("p",{children:["type: ",e.type]})]}),Object(u.jsx)(m.a.Footer,{children:Object(u.jsx)(f.a,{onClick:t.changeShow,variant:"primary",children:"Close"})})]})})})),O=n(85),x=Object(l.a)((function(){var e=Object(c.useContext)(p);return Object(u.jsx)("div",{children:Object(u.jsxs)(O.a,{children:[e.previousUrl&&Object(u.jsx)(O.a.Prev,{onClick:e.goToPreviousUrl,children:"Previous"}),e.nextUrl&&Object(u.jsx)(O.a.Next,{onClick:e.goToNextUrl,children:"Next"})]})})})),g=n(83),y=n(42),k=Object(l.a)((function(){var e=Object(c.useContext)(p);return Object(u.jsx)("div",{children:Object(u.jsx)(g.a,{children:Object(u.jsx)(g.a.Row,{children:Object(u.jsx)(y.a,{xs:"auto",children:Object(u.jsxs)(g.a.Control,{onChange:e.changePages,as:"select",children:[Object(u.jsxs)("option",{children:["pages: ",e.limit]}),Object(u.jsx)("option",{children:"10"}),Object(u.jsx)("option",{children:"20"}),Object(u.jsx)("option",{children:"50"})]})})})})})})),v=Object(l.a)((function(){var e=Object(c.useContext)(p),t=Object(c.useState)(0),n=Object(a.a)(t,2),r=n[0],o=n[1];return Object(c.useEffect)((function(){e.getPokemons()}),[e.currentUrl,e.nextUrl,e.previousUrl,e.limit,e.offset]),e.loadingPokemons?Object(u.jsx)("div",{children:"loading..."}):e.pokemons[r]?Object(u.jsxs)("div",{children:[Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(b.a,{style:{marginTop:"10px",marginBottom:"-14px",marginLeft:"-5px"},children:[Object(u.jsx)(x,{}),Object(u.jsx)(k,{})]}),Object(u.jsx)(b.a,{className:"justify-content-md-center",children:e.pokemons.map((function(t,n){return Object(u.jsx)(j,{clicked:function(){o(n),e.changeShow()},title:t.name,src:t.sprites.front_default,type:t.types.map((function(e){return"".concat(e.type.name," ")}))},t.name)}))}),Object(u.jsx)(b.a,{style:{marginLeft:"-5px",marginTop:"2px",marginBottom:"10px"},children:Object(u.jsx)(x,{})})]}),Object(u.jsx)(d,{height:e.pokemons[r].height,title:e.pokemons[r].name,weight:e.pokemons[r].weight,src:e.pokemons[r].sprites.front_default,backSrc:e.pokemons[r].sprites.back_default,type:e.pokemons[r].types.map((function(e){return"".concat(e.type.name," ")}))})]}):null})),w=n(8),P=Object(l.a)((function(){var e=Object(c.useContext)(p),t=Object(w.f)(),n=Object(c.useState)(""),r=Object(a.a)(n,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){e.getAllPokemonNames()}),[e.count]),e?Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsxs)(g.a.Row,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(g.a.Control,{onChange:function(e){s(e.target.value)},type:"search",placeholder:"Enter pokemon name",value:o})}),Object(u.jsx)(f.a,{onClick:function(n){n.preventDefault(),e.getPokemon(o),t.push("/search")},type:"submit",children:"Search"})]})})})}):null})),T=Object(l.a)((function(){var e=Object(c.useContext)(p),t=Object(c.useState)(0),n=Object(a.a)(t,2),r=n[0],o=n[1];return 0==e.queryStatus?Object(u.jsx)("p",{children:"No pokemon has been found! Try again!"}):e.loadingPokemonSearch?Object(u.jsx)("div",{children:"...loading"}):e.query[r]?Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{children:Object(u.jsx)(b.a,{style:{marginTop:"10px"},className:"justify-content-md-center",children:e.query.map((function(t,n){return Object(u.jsx)(j,{clicked:function(){o(n),e.changeShow()},title:t.name,src:t.sprites.front_default,type:t.types.map((function(e){return"".concat(e.type.name," ")}))},t.name)}))})}),Object(u.jsx)(d,{title:e.query[r].name,src:e.query[r].sprites.front_default,backSrc:e.query[r].sprites.back_default,height:e.query[r].height,weight:e.query[r].weight,type:e.query[r].types.map((function(e){return"".concat(e.type.name," ")}))})]}):null})),A=n(21),S=function(){var e=Object(w.f)();return Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{style:{marginTop:"5px"},onClick:function(){e.push("/home")},children:Object(u.jsx)(b.a,{children:Object(u.jsx)(y.a,{xs:"auto",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABQElEQVRYhe3WvS8EcRDG8Q8nIkFBFCIKjZJOdR2VTkWpuURJ6f4EpVZUOiqlkOhEodGoJHQ0EgmREHGrmWNPjnPvzX6TaXZmnnn2t7PZJaM5RiO6wjgucYXJTg+fwjWSiFtM/6gp51rODO5C/DwiwT1m221gDg8hfIphDOIorj0i3y4D83gK0UMMpHL92I/cCxZbbWAZbyG4i1yVmlzkklRtSwys4j3EttHzR20PtlLDmzawiVJEsY6+YvQkdfZ9kb6TEtYb0FjDh/+dXAU57Ph+lisNDC+zhNfQ2kNfrYZ+HKjc5mZZwLPqb08FQzj2vTz53wobIJ/SPYlZFYzgTAu3twpp7QuMpZOFSNz8w0BSI2r1lWcUfhZsYKIDBiZiVs3CevMN9fX+5aQTZAYyA5mBap/ItvzJ/jaz6yeQkfEJsCB4+A445oAAAAAASUVORK5CYII="})})})})})},C=Object(l.a)((function(){var e=Object(c.useContext)(p),t=Object(w.f)(),n=Object(c.useState)("choose one"),r=Object(a.a)(n,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){e.getTypes()}),[e.typesUrl]),Object(u.jsx)("div",{children:Object(u.jsx)(g.a,{children:Object(u.jsx)(g.a.Row,{className:"justify-content-md-center",children:Object(u.jsx)(y.a,{xs:"auto",children:Object(u.jsxs)(g.a.Control,{onChange:function(n){s(n.target.value),e.getPokemonsByType(n.target.value),n.target.value=0,t.push("/categories")},as:"select",children:[Object(u.jsxs)("option",{value:"0",children:["Category: ",o]}),e.types.map((function(e){return Object(u.jsx)("option",{children:e.name},e.name)}))]})})})})})})),B=Object(l.a)((function(){var e=Object(c.useContext)(p),t=Object(c.useState)(0),n=Object(a.a)(t,2),r=n[0],o=n[1];return e.loadingPokemonTypes?Object(u.jsx)("div",{children:"...loading"}):e.pokemonsByType&&e.pokemonsByType[r]?Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{children:Object(u.jsx)(b.a,{style:{marginTop:"10px"},className:"justify-content-md-center",children:e.pokemonsByType.map((function(t,n){return Object(u.jsx)(j,{clicked:function(){o(n),e.changeShow()},title:t.name,src:t.sprites.front_default,type:t.types.map((function(e){return"".concat(e.type.name," ")}))},t.name)}))})}),Object(u.jsx)(d,{title:e.pokemonsByType[r].name,src:e.pokemonsByType[r].sprites.front_default,backSrc:e.pokemonsByType[r].sprites.back_default,height:e.pokemonsByType[r].height,weight:e.pokemonsByType[r].weight,type:e.pokemonsByType[r].types.map((function(e){return"".concat(e.type.name," ")}))})]}):null})),U=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(A.a,{children:[Object(u.jsx)("h5",{style:{marginTop:"5px"},children:"Pokemons Application"}),Object(u.jsx)(h.a,{children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(C,{}),Object(u.jsx)(P,{})]})}),Object(u.jsxs)(w.c,{children:[Object(u.jsx)(w.a,{path:"/search",children:Object(u.jsx)(T,{})}),Object(u.jsx)(w.a,{path:"/categories",children:Object(u.jsx)(B,{})}),Object(u.jsx)(w.a,{path:"/",children:Object(u.jsx)(v,{})})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))},q=(n(57),n(14)),E=n.n(q),Z=n(20),I=n(44),R=n(19),D=n.n(R),z=n(7),F=new function e(){var t=this;Object(I.a)(this,e),this.count=0,this.query=[],this.queryStatus=!0,this.pokemons=[],this.allPokemonNames=[],this.currentUrl="https://pokeapi.co/api/v2/pokemon/",this.show=!1,this.typesUrl="https://pokeapi.co/api/v2/type/",this.types=[],this.pokemonsByType=[],this.previousUrl="",this.nextUrl="",this.limit="20",this.offset="0",this.loadingPokemons=!0,this.loadingPokemonTypes=!1,this.loadingPokemonSearch=!1,this.getCount=Object(Z.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://pokeapi.co/api/v2/pokemon").then((function(e){return e.data.count}));case 2:n=e.sent,Object(z.g)((function(){t.count=n}));case 4:case"end":return e.stop()}}),e)}))),this.getAllPokemonNames=Object(Z.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getCount(),D.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(t.count)).then((function(e){t.allPokemonNames=e.data.results.map((function(e){return e.name}))}));case 2:case"end":return e.stop()}}),e)}))),this.changePages=function(e){t.limit=e.target.value},this.changeShow=function(){t.show=!t.show},this.getPokemon=function(){var e=Object(Z.a)(E.a.mark((function e(n){var c,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loadingPokemonSearch=!0,t.queryStatus=!0,0!=(c=t.allPokemonNames.filter((function(e){return e.includes(n.toLowerCase().trim())}))).length){e.next=5;break}return e.abrupt("return",t.queryStatus=!1);case 5:if(""!=n.trim()){e.next=7;break}return e.abrupt("return",t.queryStatus=!1);case 7:return e.prev=7,r=c.map((function(e){return D.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e))})),e.next=11,Promise.all(r.map((function(e){return e.catch((function(e){return e}))})));case 11:o=e.sent,Object(z.g)((function(){t.query=o.map((function(e){return e.data})),t.queryStatus=!0,t.loadingPokemonSearch=!1})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),Object(z.g)((function(){t.queryStatus=!0,t.loadingPokemonSearch=!1,t.queryStatus=!1}));case 18:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t){return e.apply(this,arguments)}}(),this.getPokemons=Object(Z.a)(E.a.mark((function e(){var n,c,r,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingPokemons=!0,e.next=3,D.a.get("".concat(t.currentUrl,"?limit=").concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return e.data}));case 3:return n=e.sent,Object(z.g)((function(){t.nextUrl=n.next,t.previousUrl=n.previous})),c=n.results.map((function(e){return e.url})),r=c.map((function(e){return D.a.get(e)})),e.next=9,Promise.all(r.map((function(e){return e.catch((function(e){return e}))})));case 9:o=e.sent,s=o.filter((function(e){return!(e instanceof Error)})),Object(z.g)((function(){t.pokemons=s.map((function(e){return e.data})),t.loadingPokemons=!1}));case 12:case"end":return e.stop()}}),e)}))),this.goToPreviousUrl=function(){t.offset=+t.offset-+t.limit,+t.offset<0&&(t.offset=0)},this.goToNextUrl=function(){t.offset=+t.limit+ +t.offset},this.getTypes=Object(Z.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(t.typesUrl).then((function(e){return e.data.results}));case 2:n=e.sent,Object(z.g)((function(){t.types=n}));case 4:case"end":return e.stop()}}),e)}))),this.getPokemonsByType=function(){var e=Object(Z.a)(E.a.mark((function e(n){var c,r,o,s,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingPokemonTypes=!0,e.next=3,D.a.get("https://pokeapi.co/api/v2/type/".concat(n)).then((function(e){return e.data.pokemon}));case 3:return c=e.sent,r=c.map((function(e){return e.pokemon.url})),o=r.map((function(e){return D.a.get(e)})),e.next=8,Promise.all(o.map((function(e){return e.catch((function(e){return e}))})));case 8:s=e.sent,a=s.filter((function(e){return!(e instanceof Error)})),Object(z.g)((function(){t.pokemonsByType=a.map((function(e){return e.data})),t.loadingPokemonTypes=!1}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object(z.d)(this)};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p.Provider,{value:F,children:Object(u.jsx)(U,{})})}),document.getElementById("root")),N()}},[[77,1,2]]]);
//# sourceMappingURL=main.e90f27ca.chunk.js.map