"use strict";(self.webpackChunkestudio_de_la_fisica=self.webpackChunkestudio_de_la_fisica||[]).push([[7028],{3760:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});a(1504);var t=a(867),r=a(4357),i=a(5756),c=a(8272),l=a(6448),n=a(7624);function d(e){let{year:s,posts:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.c,{as:"h3",id:s,children:s}),(0,n.jsx)("ul",{children:a.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(t.c,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:s}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(d,{...e})},s)))})})})}function o(e){let{archive:s}=e;const a=(0,r.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,r.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const s=e.reduce(((e,s)=>{const a=s.metadata.date.split("-")[0],t=e.get(a)??[];return e.set(a,[s,...t])}),new Map);return Array.from(s,(e=>{let[s,a]=e;return{year:s,posts:a}}))}(s.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.U7,{title:a,description:t}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.c,{as:"h1",className:"hero__title",children:a}),(0,n.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,n.jsx)("main",{children:d.length>0&&(0,n.jsx)(h,{years:d})})]})]})}}}]);