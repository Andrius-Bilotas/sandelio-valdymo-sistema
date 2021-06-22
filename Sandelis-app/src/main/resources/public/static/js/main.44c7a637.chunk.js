(this["webpackJsonpsandelio-valdymo-sistema"]=this["webpackJsonpsandelio-valdymo-sistema"]||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),i=a.n(r),c=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),l(e),r(e),i(e)}))},s=(a(36),a(1)),o=a(3);var m=function(e){return l.a.createElement("div",{style:{backgroundColor:"#9DD7FF"}},l.a.createElement("header",{className:"container-fluid py-3",style:{backgroundColor:"#6495ED"}},l.a.createElement("div",{className:"row"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"nav-link",style:{color:"black"}},"Klientai")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/ataskaita",className:"nav-link",style:{color:"black"}},"Ataskaita"))))),e.children)},u=a(9),h=a(10),d=a(12),p=a(11),v=a(8),E=a.n(v);var b=function(e){var t=e.client;return l.a.createElement("div",{className:"card mx-auto mb-5",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h5",{className:"card-title"},t.firstname+" "+t.lastname),l.a.createElement("p",{className:"card-text"},"Gimimo metai: ",t.birthdate),l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null,"Telefonas: ",t.phone)),l.a.createElement("p",{className:"card-text"},"Kliento tipas: ","LOYAL"===t.clientType?"Lojalus":"Paprastas"),l.a.createElement("p",{className:"card-text"},"Inventoriaus dydis: ",t.inventory.length),l.a.createElement(o.b,{to:"/klientai/".concat(t.id),className:"btn btn-primary"},"Pla\u010diau")))},f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={clients:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="Sandelio valdymo sistema",E.a.get("/sandelio-valdymas/api/clients").then((function(t){e.setState({clients:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row pt-3 justify-content-center"},l.a.createElement("h2",null,"Klientai")),l.a.createElement("div",{className:"row pt-3"},l.a.createElement(o.b,{to:"/klientai/prideti",className:"btn btn-primary"},"Prid\u0117ti klient\u0105")),l.a.createElement("div",{className:"row pt-3"},this.state.clients.map((function(e){return l.a.createElement(b,{client:e})}))))}}]),a}(n.Component),g=a(15),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),E.a.post("/sandelio-valdymas/api/clients",{firstname:e.state.firstname,lastname:e.state.lastname,birthdate:e.state.birthdate,phone:e.state.phone,clientType:e.state.clientType}).then((function(t){e.props.history.push("/")})).catch((function(e){console.log(e),alert(e.response.data.message)}))},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value)),console.log(e.state.kategorija)},e.state={firstname:"",lastname:"",birthdate:"",phone:"",clientType:"REGULAR"},e}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row pt-3 justify-content-center"},l.a.createElement("h2",null,"Naujo kliento k\u016brimo forma")),l.a.createElement("div",{className:"row pt-3"},l.a.createElement("form",{className:"pt-3",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstname"},l.a.createElement("b",null,"Vardas")),l.a.createElement("input",{name:"firstname",type:"text",className:"form-control",value:this.state.firstname,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"lastname"},l.a.createElement("b",null,"Pavard\u0117")),l.a.createElement("input",{name:"lastname",type:"text",className:"form-control",value:this.state.lastname,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"birthdate"},l.a.createElement("b",null,"Gimimo data")),l.a.createElement("input",{name:"birthdate",type:"text",className:"form-control",value:this.state.birthdate,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"phone"},l.a.createElement("b",null,"Telefono numeris")),l.a.createElement("input",{name:"phone",type:"text",className:"form-control",value:this.state.phone,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"clientType"},l.a.createElement("b",null,"Kliento Tipas")),l.a.createElement("select",{value:this.state.clientType,className:"form-control",name:"clientType",id:"clientType",onChange:this.handleChange},l.a.createElement("option",{value:"REGULAR"},"Paprastas"),l.a.createElement("option",{value:"LOYAL"},"Lojalus")),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"Prid\u0117ti vartotoj\u0105")))))}}]),a}(n.Component);var N=function(e){var t=e.item,a=e.onRemove;return l.a.createElement("div",{className:"card mx-auto mb-5",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h5",{className:"card-title"},t.name),l.a.createElement("p",{className:"card-text"},"Svoris: ",t.weight),l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null,"Sektorius: ",t.sector)),l.a.createElement("p",{className:"card-text"},"Prid\u0117jimo data: ",t.dateAdded),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a(t.id)}},"I\u0161trinti")))},k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).removeItem=function(t){E.a.delete("/sandelio-valdymas/api/clients/".concat(e.props.match.params.id,"/").concat(t)).then((function(t){e.setState({client:t.data,inventory:t.data.inventory})})).catch((function(e){console.log(e)}))},e.state={client:{},inventory:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="Sandelio valdymo sistema",E.a.get("/sandelio-valdymas/api/clients/".concat(this.props.match.params.id)).then((function(t){e.setState({client:t.data,inventory:t.data.inventory}),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row pt-3 justify-content-center"},l.a.createElement("h2",null,"Kliento: ",this.state.client.firstname+" "+this.state.client.lastname," inventorius")),l.a.createElement("div",{className:"row pt-3"},l.a.createElement(o.b,{to:"/klientai/".concat(this.props.match.params.id,"/prideti"),className:"btn btn-primary"},"Prid\u0117ti inventori\u0173 ")),l.a.createElement("div",{className:"row pt-3"},this.state.inventory.map((function(t){return l.a.createElement(N,{item:t,onRemove:e.removeItem})}))))}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),E.a.post("/sandelio-valdymas/api/clients/".concat(e.props.match.params.id),{name:e.state.name,weight:e.state.weight,sector:e.state.sector,clientId:e.props.match.params.id}).then((function(t){console.log(t),e.props.history.push("/klientai/".concat(e.props.match.params.id))})).catch((function(e){console.log(e),alert(e.response.data.message)}))},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value)),console.log(e.state.kategorija)},e.state={name:"",weight:0,sector:0,clientId:0},e}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row pt-3 justify-content-center"},l.a.createElement("h2",null,"Naujo kliento inventoriaus k\u016brimo forma")),l.a.createElement("div",{className:"row pt-3"},l.a.createElement("form",{className:"pt-3",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},l.a.createElement("b",null,"Pavadinimas")),l.a.createElement("input",{name:"name",type:"text",className:"form-control",value:this.state.name,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"weight"},l.a.createElement("b",null,"Svoris")),l.a.createElement("input",{name:"weight",type:"text",className:"form-control",value:this.state.weight,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"sector"},l.a.createElement("b",null,"Sektorius (1 - 40)")),l.a.createElement("input",{name:"sector",type:"text",className:"form-control",value:this.state.sector,onChange:this.handleChange}),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"Prid\u0117ti inventori\u0173")))))}}]),a}(n.Component);var w=function(e){var t=e.sector;return l.a.createElement("div",{className:"card mx-auto mb-5",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h5",{className:"card-title"},"Sektorius: ",t.sectorNumber),l.a.createElement("p",{className:"card-text"},"Bendras svoris: ",t.totalWeight),l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null,"Inventoriaus kiekis: ",t.totalItemCount))))},C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={clientsWithMostInventory:[],clientsWithBiggestWeight:[],sectorsWithMostInventory:[],sectorsWithBiggestWeight:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="Sandelio valdymo sistema",E.a.get("/sandelio-valdymas/api/report").then((function(t){e.setState({clientsWithMostInventory:t.data.clientsWithMostInventoryItems,clientsWithBiggestWeight:t.data.clientsWithBiggestInventoryWeight,sectorsWithMostInventory:t.data.sectorsWithMostInventoryItems,sectorsWithBiggestWeight:t.data.sectorsWithBiggestInventoryWeight})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row pt-3 justify-content-center"},l.a.createElement("h2",null,"Ataskaita")),l.a.createElement("div",{className:"row pt-3"},l.a.createElement("h3",null,"Klientai su daugiausiai inventoriaus:")),l.a.createElement("div",{className:"row pt-3"},this.state.clientsWithMostInventory.map((function(e){return l.a.createElement(b,{client:e})}))),l.a.createElement("div",{className:"row pt-3"},l.a.createElement("h3",null,"Klientai su did\u017eiausiu inventoriaus svoriu:")),l.a.createElement("div",{className:"row pt-3"},this.state.clientsWithBiggestWeight.map((function(e){return l.a.createElement(b,{client:e})}))),l.a.createElement("div",{className:"row pt-3"},l.a.createElement("h3",null,"Sektoriai su daugiausiai inventoriaus:")),l.a.createElement("div",{className:"row pt-3"},this.state.sectorsWithMostInventory.map((function(e){return l.a.createElement(w,{sector:e})}))),l.a.createElement("div",{className:"row pt-3"},l.a.createElement("h3",null,"Sektoriai su did\u017eiausiu inventoriaus svoriu:")),l.a.createElement("div",{className:"row pt-3"},this.state.sectorsWithBiggestWeight.map((function(e){return l.a.createElement(w,{sector:e})}))))}}]),a}(n.Component);a(59);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,{basename:"/sandelio-valdymas"},l.a.createElement(m,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:f}),l.a.createElement(s.a,{exact:!0,path:"/klientai/prideti",component:y}),l.a.createElement(s.a,{exact:!0,path:"/klientai/:id",component:k}),l.a.createElement(s.a,{exact:!0,path:"/klientai/:id/prideti",component:j}),l.a.createElement(s.a,{exact:!0,path:"/ataskaita",component:C}),l.a.createElement(s.a,{path:"*",component:function(e){return l.a.createElement("div",null,"Route did not match",l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Go Home"))}})))),document.getElementById("root")),c()}},[[31,1,2]]]);
//# sourceMappingURL=main.44c7a637.chunk.js.map