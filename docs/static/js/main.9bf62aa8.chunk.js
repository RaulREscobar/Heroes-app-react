(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{14:function(e,a,r){},15:function(e,a,r){},17:function(e,a,r){"use strict";r.r(a);r(1);var c=r(9),s=r.n(c),t=(r(14),r(15),r(4)),i=r(2),n=r(0);var l=function(){return Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)("hr",{}),Object(n.jsx)("button",{className:"btn btn-primary",children:"Login"})]})},o=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark px-3",children:[Object(n.jsx)(t.b,{className:"navbar-brand",to:"/",children:"HeroApp"}),Object(n.jsx)("div",{className:"navbar-collapse",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)(t.c,{activeclassname:"active",className:"nav-item nav-link",to:"/marvel",children:"Marvel"}),Object(n.jsx)(t.c,{activeclassname:"active",className:"nav-item nav-link",to:"/dc",children:"DC"}),Object(n.jsx)(t.c,{activeclassname:"active",className:"nav-item nav-link",to:"/search",children:"Search"})]})}),Object(n.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(n.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(n.jsx)("p",{className:"nav-item nav-link text-info mb-0",children:"Usuario"}),Object(n.jsx)("button",{className:"nav-item nav-link border-0 bg-transparent",to:"/login",children:"Logout"})]})})]})},h=r(7),d=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}];var j=function(e){var a=e.id,r=e.superhero,c=e.alter_ego,s=e.first_appearance,t=e.characters;return Object(n.jsx)("div",{className:"col-12 col-md-6",children:Object(n.jsx)("div",{className:"card mb-3",children:Object(n.jsxs)("div",{className:"row g-0",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"img-fluid rounded-start",alt:r})}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:r}),Object(n.jsx)("p",{className:"card-text",children:c}),c!==t&&Object(n.jsx)("p",{className:"card-text",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsx)("small",{className:"card-muted",children:s})}),Object(n.jsx)("div",{className:"mt-3",children:Object(n.jsx)("a",{href:"/hero/".concat(a),className:"btn btn-outline-dark btn-sm",children:"more"})})]})})]})})})};var m=function(e){var a=e.publisher,r=d.filter((function(e){return e.publisher===a}));return Object(n.jsx)("div",{className:"row animate__animated animate__fadeIn",children:r.map((function(e){return Object(n.jsx)(j,Object(h.a)({},e),e.id)}))})};var b=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"DC"}),Object(n.jsx)("hr",{}),Object(n.jsx)(m,{publisher:"DC Comics"})]})};var p=function(){var e=d.find((function(e){return"dc-batman"===e.id})),a=e.id,r=e.superhero,c=e.publisher,s=e.alter_ego,t=e.first_appearance,i=e.characters;return Object(n.jsxs)("div",{className:"row mt-4  animate__animated animate__fadeIn",children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),alt:r,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsx)("h3",{children:r}),Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("b",{children:"Alter ego: "})," ",s]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("b",{children:"Publisher: "})," ",c]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("b",{children:"Fist appearence: "})," ",t]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h4",{children:"Characters"}),Object(n.jsx)("p",{children:i}),Object(n.jsx)("button",{className:"btn btn-outline-dark",children:"Go Back"})]})]})};var u=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Marvel"}),Object(n.jsx)("hr",{}),Object(n.jsx)(m,{publisher:"Marvel Comics"})]})};var v=function(){var e=d.filter((function(e){return e.superhero.toLocaleLowerCase().includes("green")}));return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-3",children:[Object(n.jsx)("h4",{children:"Buscador"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{type:"text",placeholder:"Encuentra tu h\xe9roe...",className:"form-control",name:"keyword"}),Object(n.jsx)("button",{type:"submit",className:"btn btn-outline-dark mt-3 w-100",children:"Buscar"})]})]}),Object(n.jsxs)("div",{className:"col-9",children:[Object(n.jsx)("h4",{children:"Resultado"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"row animate__animated animate__fadeIn",children:e.map((function(e){return Object(n.jsx)(j,Object(h.a)({},e),e.id)}))})]})]})})},x=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsx)("div",{className:"container mt-3",children:Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{path:"/Marvel",element:Object(n.jsx)(u,{})}),Object(n.jsx)(i.a,{path:"/dc",element:Object(n.jsx)(b,{})}),Object(n.jsx)(i.a,{path:"/search",element:Object(n.jsx)(v,{})}),Object(n.jsx)(i.a,{path:"/heroe",element:Object(n.jsx)(p,{})}),Object(n.jsx)(i.a,{path:"*",element:Object(n.jsx)("main",{className:"p-5",children:Object(n.jsx)("p",{children:"Not Found"})})})]})})]})},O=function(){return Object(n.jsx)(t.a,{children:Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{path:"/login",element:Object(n.jsx)(l,{})}),Object(n.jsx)(i.a,{path:"*",element:Object(n.jsx)(x,{})})]})})};var f=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(O,{})})};s.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9bf62aa8.chunk.js.map