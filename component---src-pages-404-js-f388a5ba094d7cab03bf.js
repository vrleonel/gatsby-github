(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),o=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),l=a.n(s);a.d(t,"a",function(){return l.a});a(146);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}},github:{viewer:{name:"Vitor Ruiz Leonel",repositories:{nodes:[{name:"thomas"},{name:"movie-api"},{name:"ml-test"},{name:"chico"},{name:"vanilla-carousel"},{name:"PureJSCarousel"},{name:"Altran"},{name:"react-simples"},{name:"react-tutorial"},{name:"javascript30"},{name:"easynvest-test"},{name:"mollynho_bot"},{name:"mollynho_bot"},{name:"curso-react-redux"},{name:"exercicios_webpack"},{name:"exercicios_react"},{name:"todo-app"},{name:"enzyme"},{name:"NuMarket"},{name:"react-app-root"},{name:"oab-na-medida"},{name:"grupozap-code-challenge"},{name:"ze-delivery-code-challenge"},{name:"shell-node"},{name:"c4-api-banner"},{name:"bot-hera"},{name:"vrleonel.github.io"},{name:"gatsby-site"},{name:"woliveiras.github.io"},{name:"gatsby-github"}]}}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(153),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},151:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(145),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var u=c,m=(a(152),function(e){var t=e.children;return i.a.createElement(l.b,{query:"3876399479",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("span",null,JSON.stringify(e,null,2)),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});m.propTypes={children:s.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-f388a5ba094d7cab03bf.js.map