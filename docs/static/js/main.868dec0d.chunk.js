(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(3),o=a.n(n),c=(a(14),a(4)),s=a(5),l=a(7),m=a(6),u=a(1),p=a(8),d=(a(15),a(16),function(e){return r.a.createElement("section",{className:"App__contact blue white"},r.a.createElement("ul",{className:"contact__icons-list"},r.a.createElement("li",{className:"contact__item"},r.a.createElement("a",{href:"mailto:julia.mersing.ortiz@gmail.com",target:"blank"},r.a.createElement("i",{className:"far fa-envelope card-icon"}))),r.a.createElement("li",{className:"contact__item"},r.a.createElement("a",{href:"https://linkedin.com/in/juliamersingortiz",target:"blank"},r.a.createElement("i",{className:"fab fa-linkedin-in linkedin-icon"}))),r.a.createElement("li",{className:"contact__item"},r.a.createElement("a",{href:"https://github.com/JuliaMersing",target:"blank"},r.a.createElement("i",{className:"fab fa-github-alt github-icon"})))))}),h=(a(17),function(e){return r.a.createElement("header",{className:"App__header"},r.a.createElement("h1",null,"Julia Mersing"),r.a.createElement("h2",null,"Front-end developer"),r.a.createElement("a",{className:"App_header_arrow",href:"#about-me"},r.a.createElement("span",{className:"arrow-icon"},"^")))}),f=(a(18),function(e){return r.a.createElement("section",{id:"about-me",className:"Main__section_about-me"},r.a.createElement("div",{className:"about-me__container"},r.a.createElement("p",{className:"about-me__text"},"Saber gestionar cuentas y proyectos es importante, pero el coraz\xf3n de una empresa radica en su producto, y eso es su construcci\xf3n donde quiero seguir creciendo y aprendiendo."),r.a.createElement("p",{className:"about-me__text"},"\xbfQuieres ver alguno de mis \xfaltimos proyectos?")))}),_=[{name:"La Colmena",description:"Web de empresa basada en mobile first con responsive. #html #saas",url:"https://github.com/JuliaMersing/project-promo-m-module-1-team-4",emoji:"\ud83d\udc1d",id:1},{name:"AwesomeCards",description:"App de intercambio de tarjetas de contacto. #vanilla #javascript",url:"https://github.com/JuliaMersing/project-promo-m-module-2-team-3",emoji:"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb",id:2},{name:"Listen to my Card",description:"Proyecto heredado y refactorizado a #react",url:"https://github.com/JuliaMersing/project-promo-m-module-3-team-2",emoji:"\ud83c\udfb5",id:3},{name:"TVShows",description:"Gestor de series favoritas #javascript #localstorage #api",url:"https://github.com/JuliaMersing/modulo-2-evaluacion-final-JuliaMersing",emoji:"\ud83d\udcfa",id:4},{name:"Ricky&Morty",description:"Buscador de personajes Ricky and Morty. #filters #React-rooter",url:"https://github.com/JuliaMersing/modulo-3-evaluacion-final-JuliaMersing",emoji:"\ud83d\udc7d",id:5},{name:"Lista Pokemon",description:"Buscador de usuarios y repos de github #javascript",url:"https://github.com/JuliaMersing/project-promo-m-module-2-team-3",emoji:"\ud83e\uddfe",id:6}],E=(a(19),function(e){var t=e.name,a=e.url,i=e.emoji,n=e.description,o=e.showDescription,c=e.removeDescription,s=e.isDescription,l=e.projectId,m=e.currentId;return r.a.createElement("div",null,r.a.createElement("a",{className:"works__link",href:a,target:"blank"},r.a.createElement("div",{id:l,className:l===m&&s?"work__description":"work__picture-ct",onMouseOver:o,onMouseOut:c},l===m&&s?r.a.createElement("div",null,r.a.createElement("h4",{className:"work__description-title",style:{color:"white"}},t),r.a.createElement("p",{className:"work__description-text"},n)):i)))}),b=(a(20),function(e){var t=e.showDescription,a=e.removeDescription,i=e.isDescription,n=e.currentId;return r.a.createElement("section",{className:"Main__section_works"},r.a.createElement("ul",{className:"works__list"},_.map((function(e,o){var c=e.name,s=e.url,l=e.image,m=e.emoji,u=e.description,p=e.id;return r.a.createElement("li",{key:o,className:"works__item"},r.a.createElement(E,{projectId:p,name:c,url:s,image:l,emoji:m,description:u,isDescription:i,showDescription:t,removeDescription:a,currentId:n}))}))),r.a.createElement(d,null))}),v=(a(21),function(e){var t=e.showDescription,a=e.removeDescription,i=e.isDescription,n=e.currentId;return r.a.createElement("main",{className:"App__main"},r.a.createElement(f,null),r.a.createElement(b,{isDescription:i,showDescription:t,removeDescription:a,currentId:n}))}),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isDescription:!1,currentId:""},a.showDescription=a.showDescription.bind(Object(u.a)(a)),a.removeDescription=a.removeDescription.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"showDescription",value:function(e){var t=parseInt(e.currentTarget.id);this.setState({isDescription:!0,currentId:t})}},{key:"removeDescription",value:function(){this.setState({isDescription:!1,currentId:""})}},{key:"render",value:function(){var e=this.showDescription,t=this.removeDescription,a=this.state,i=a.isDescription,n=a.currentId;return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(d,null),r.a.createElement(v,{isDescription:i,showDescription:e,removeDescription:t,currentId:n}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.868dec0d.chunk.js.map