(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(3),o=a.n(r),c=(a(14),a(4)),s=a(5),l=a(7),m=a(6),u=a(1),p=a(8),d=(a(15),a(16),function(e){return n.a.createElement("section",{className:"App__contact blue white"},n.a.createElement("ul",{className:"contact__icons-list"},n.a.createElement("li",{className:"contact__item"},n.a.createElement("a",{href:"mailto:julia.mersing.ortiz@gmail.com",target:"blank"},n.a.createElement("i",{className:"far fa-envelope card-icon"}))),n.a.createElement("li",{className:"contact__item"},n.a.createElement("a",{href:"https://linkedin.com/in/juliamersingortiz",target:"blank"},n.a.createElement("i",{className:"fab fa-linkedin-in linkedin-icon"}))),n.a.createElement("li",{className:"contact__item"},n.a.createElement("a",{href:"https://github.com/JuliaMersing",target:"blank"},n.a.createElement("i",{className:"fab fa-github-alt github-icon"})))))}),h=(a(17),function(e){return n.a.createElement("header",{className:"App__header"},n.a.createElement("h1",null,"Julia Mersing"),n.a.createElement("h2",null,"Front-end developer"),n.a.createElement("a",{className:"App_header_arrow",href:"#about-me"},n.a.createElement("span",{className:"arrow-icon"},"^")))}),_=(a(18),function(e){return n.a.createElement("section",{id:"about-me",className:"Main__section_about-me"},n.a.createElement("div",{className:"about-me__container"},n.a.createElement("p",{className:"about-me__text"},"Saber gestionar cuentas y proyectos es importante, pero el coraz\xf3n de una empresa radica en su producto, y eso es su construcci\xf3n donde quiero seguir creciendo y aprendiendo."),n.a.createElement("p",{className:"about-me__text"},"\xbfQuieres ver alguno de mis \xfaltimos proyectos?")))}),b=[{name:"La Colmena",description:"Web de empresa basada en mobile first con responsive. #html #saas",url:"https://github.com/JuliaMersing/La-Colmena",emoji:"\ud83d\udc1d",id:1},{name:"AwesomeCards",description:"App de intercambio de tarjetas de contacto. #vanilla #javascript",url:"https://github.com/JuliaMersing/Awesome-Card",emoji:"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb",id:2},{name:"Listen to my Card",description:"Proyecto heredado y refactorizado a #react",url:"https://github.com/JuliaMersing/Listen-to-my-Card",emoji:"\ud83c\udfb5",id:3},{name:"TVShows",description:"Gestor de series favoritas #javascript #localstorage #api",url:"https://github.com/JuliaMersing/TV-Shows",emoji:"\ud83d\udcfa",id:4},{name:"Ricky&Morty",description:"Buscador de personajes Ricky and Morty. #filters #React-rooter",url:"https://github.com/JuliaMersing/Rick_and_Morty_React_Web",emoji:"\ud83d\udc7d",id:5},{name:"Lista Pokemon",description:"Buscador de usuarios y repos de github #javascript",url:"https://github.com/JuliaMersing/Pokemon-List",emoji:"\ud83e\uddfe",id:6}],f=(a(19),function(e){var t=e.name,a=e.url,i=e.emoji,r=e.description,o=e.showDescription,c=e.removeDescription,s=e.isDescription,l=e.projectId,m=e.currentId;return n.a.createElement("div",null,n.a.createElement("a",{className:"works__link",href:a,target:"blank"},n.a.createElement("div",{id:l,className:l===m&&s?"work__description":"work__picture-ct",onMouseOver:o,onMouseOut:c},l===m&&s?n.a.createElement("div",null,n.a.createElement("h4",{className:"work__description-title",style:{color:"white"}},t),n.a.createElement("p",{className:"work__description-text"},r)):i)))}),E=(a(20),function(e){var t=e.showDescription,a=e.removeDescription,i=e.isDescription,r=e.currentId;return n.a.createElement("section",{className:"Main__section_works"},n.a.createElement("ul",{className:"works__list"},b.map((function(e,o){var c=e.name,s=e.url,l=e.image,m=e.emoji,u=e.description,p=e.id;return n.a.createElement("li",{key:o,className:"works__item"},n.a.createElement(f,{projectId:p,name:c,url:s,image:l,emoji:m,description:u,isDescription:i,showDescription:t,removeDescription:a,currentId:r}))}))),n.a.createElement(d,null))}),v=(a(21),function(e){var t=e.showDescription,a=e.removeDescription,i=e.isDescription,r=e.currentId;return n.a.createElement("main",{className:"App__main"},n.a.createElement(_,null),n.a.createElement(E,{isDescription:i,showDescription:t,removeDescription:a,currentId:r}))}),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isDescription:!1,currentId:""},a.showDescription=a.showDescription.bind(Object(u.a)(a)),a.removeDescription=a.removeDescription.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"showDescription",value:function(e){var t=parseInt(e.currentTarget.id);this.setState({isDescription:!0,currentId:t})}},{key:"removeDescription",value:function(){this.setState({isDescription:!1,currentId:""})}},{key:"render",value:function(){var e=this.showDescription,t=this.removeDescription,a=this.state,i=a.isDescription,r=a.currentId;return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement(d,null),n.a.createElement(v,{isDescription:i,showDescription:e,removeDescription:t,currentId:r}))}}]),t}(n.a.Component);o.a.render(n.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.809a6bbc.chunk.js.map