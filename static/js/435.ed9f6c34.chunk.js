"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[435],{977:function(e,t,n){var i=n(413),a=n(885),r=n(925),o=n(791),s=n(184),l=["src","alt"];function c(e,t){var n=e.src,c=e.alt,d=(0,r.Z)(e,l),u=(0,o.useState)(!1),p=(0,a.Z)(u,2),f=p[0],m=p[1];(0,o.useEffect)((function(){m(!1)}),[n]);return f?(0,s.jsx)("div",{className:"w-full h-full bg-slate-800 flex justify-center items-center shadow-md",children:(0,s.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"42",height:"42",viewBox:"0 0 32 32",children:[(0,s.jsx)("title",{children:"photo-error"}),(0,s.jsx)("path",{fill:"#F62682",d:"M24.166 17.759h0.105v7.247c0 1.628-1.313 2.993-2.993 2.993h-14.284c-1.628 0-2.993-1.313-2.993-2.993v-14.6c0-1.681 1.365-2.993 3.046-3.046h9.978c-0.368 0.84-0.525 1.786-0.525 2.731 0 4.201 3.414 7.667 7.667 7.667zM9.777 10.144c-1.365 0-2.468 1.103-2.468 2.468s1.103 2.468 2.468 2.468c1.365 0 2.468-1.103 2.468-2.468s-1.103-2.468-2.468-2.468zM7.256 25.322l14.6 0.053-3.991-7.93c-0.263-0.578-0.998-0.578-1.313-0.053l-1.733 3.046c-0.315 0.525-1.050 0.63-1.47 0.158l-0.683-0.735c-0.683-0.735-1.891-0.63-2.416 0.263l-2.993 5.199zM24.166 4c3.361 0 6.092 2.731 6.092 6.092s-2.731 6.092-6.092 6.092c-3.361 0-6.092-2.731-6.092-6.092s2.731-6.092 6.092-6.092zM24.954 6.363h-1.208l0.105 4.569h0.998l0.105-4.569zM24.376 13.453c0.368 0 0.683-0.315 0.683-0.683s-0.315-0.683-0.683-0.683c-0.368 0-0.683 0.315-0.683 0.683s0.315 0.683 0.683 0.683z"})]})}):(0,s.jsx)("img",(0,i.Z)((0,i.Z)({ref:t,src:n,alt:c},d),{},{onError:function(){m(!0)}}))}t.Z=(0,o.forwardRef)(c)},460:function(e,t,n){n(791);var i=n(184);t.Z=function(e){var t=e.onClick,n=e.disable,a=e.children,r=e.className,o=void 0===r?"":r;return(0,i.jsx)("button",{onClick:function(){n||t()},className:"flex justify-center items-center text-white bg-primary rounded-lg shadow-lg font-semibold   md:py-3 md:px-6  md:text-lg md:gap-2 text-base gap-[2px] ".concat(n?"cursor-default opacity-70":"","   ").concat(o),children:a})}},566:function(e,t,n){var i=n(982),a=(n(791),n(853)),r=n(460),o=n(184);t.Z=function(e){var t=e.movieInfo,n=e.disable,s=e.className,l=void 0===s?"p-[13px] md:px-4 md:py-4 md:gap-0 bg-gray-500 bg-opacity-60 rounded-lg text-[22px] md:text-xl flex justify-center items-center transition-all":s,c=(0,a.b)(),d=c.setWatchLists,u=c.watchLists,p=c.setStoredWatchListValue;return(0,o.jsx)(r.Z,{disable:n,onClick:function(){d((function(e){if(JSON.stringify(e).includes(JSON.stringify(t)))return(0,i.Z)(e);console.log(t);var n=[].concat((0,i.Z)(e),[t]);return p(n),n}))},className:"".concat(JSON.stringify(u).includes(JSON.stringify(t))?"opacity-0 invisible":"","  ").concat(l," "),children:(0,o.jsx)("ion-icon",{name:"add-sharp"})})}},818:function(e,t,n){n(791);var i=n(871),a=n(460),r=n(184);t.Z=function(e){var t=e.disable,n=e.onClick,o=void 0===n?function(){}:n,s=e.className,l=void 0===s?"":s,c=e.children,d=e.movieID,u=(0,i.s0)();return(0,r.jsx)(a.Z,{disable:t,className:"".concat(l),onClick:function(){o(),u("/home/".concat(d))},children:c})}},966:function(e,t,n){var i=n(885),a=(n(791),n(853)),r=n(566),o=n(470),s=n(818),l=n(464),c=n(977),d=n(184),u=function(e){if(e){var t=e.split("-"),n=(0,i.Z)(t,3),a=n[0],r=n[1];return[n[2],r,a].join("-")}};t.Z=(0,o.withErrorBoundary)((function(e){var t=e.movieInfo,n=e.isLoading,i=(0,a.b)().watchLists;return(0,d.jsxs)("div",{className:"group movie-card rounded-xl p-5 bg-slate-800 relative h-[505px] flex flex-col justify-between items-center select-none",children:[n?(0,d.jsx)("div",{className:"skeleton w-full h-[380px] rounded-[inherit]"}):(0,d.jsxs)("div",{className:"relative w-full h-[380px]  rounded-[inherit]",children:[(0,d.jsx)(c.Z,{src:"https://image.tmdb.org/t/p/w780/".concat(t.poster_path||t.backdrop_path),alt:"",className:"w-full h-full  rounded-[inherit] object-cover object-top"}),(0,d.jsx)(s.Z,{className:"absolute top-2/4 left-2/4 bg-opacity-80 rounded-full -translate-x-2/4 -translate-y-2/4 p-4",movieID:null===t||void 0===t?void 0:t.id,disable:n,children:(0,d.jsx)("span",{className:"flex items-center justify-center text-3xl",children:(0,d.jsx)("ion-icon",{name:"play-circle"})})})]}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center text-white w-full ",children:[n?(0,d.jsx)("span",{className:"skeleton w-full h-[10px] rounded-xl my-1 mt-2"}):(0,d.jsx)("h3",{className:"font-bold text-lg text-left w-full my-1 mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap",children:t.title||t.name}),(0,d.jsxs)("div",{className:"flex justify-between items-center text-gray-400 w-full mb-7 text-sm",children:[n?(0,d.jsx)("span",{className:"skeleton w-[60px] h-[10px] rounded-xl my-3"}):(0,d.jsx)("span",{children:u(t.release_date)||u(t.first_air_date)}),(0,d.jsx)(l.Z,{isLoading:n,voteAverage:null===t||void 0===t?void 0:t.vote_average})]})]}),(0,d.jsx)(r.Z,{className:"absolute top-5 right-5 p-3 bg-gray-500 bg-opacity-60 rounded-lg text-[22px] flex justify-center items-center invisible opacity-0 ".concat(!JSON.stringify(i).includes(JSON.stringify(t))&&"group-hover:opacity-100 group-hover:visible"," transition-all"),disable:n,movieInfo:t})]})}),{FallbackComponent:function(){return(0,d.jsx)("p",{className:"bg-red-50 text-red-500",children:"Something went wrong with this component"})}})},464:function(e,t,n){n.d(t,{Z:function(){return a}});n(791);var i=n(184),a=function(e){var t=e.className,n=e.isLoading,a=e.voteAverage,r=e.size,o=void 0===r?"40px":r,s=e.bold,l=void 0===s?"3px":s,c=e.text,d=void 0===c?"10px":c,u=e.color,p=void 0===u?"#f62682":u,f=function(e){"number"!==typeof e&&(e=0);var t=e/10*100;return Math.round(100*t)/100}(a);return(0,i.jsx)("span",{className:"flex justify-center items-center ".concat(t),children:n?(0,i.jsx)("div",{className:"pie animate skeleton",style:{"--p":10,"--b":l,"--w":o,"--text":d,"--c":p},children:"10%"}):(0,i.jsxs)("div",{className:"pie animate ",style:{"--p":f,"--b":l,"--w":o,"--text":d,"--c":p},children:[f,"%"]})})}},246:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(419),a=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},r=n(853),o=function(e,t,n){var o=(0,r.b)().language,s=function(){if(e)return"".concat("https://api.themoviedb.org/3","/").concat(e,"?api_key=").concat("1a5c4195d358f72fdbec913b288dd9e8","&language=").concat(o).concat(t?"&query=".concat(t):"").concat(n?"&page=".concat(n):"")}(),l=(0,i.ZP)(s,a),c=l.data,d=l.error;return d?(console.log(d),c||{}):c?{data:c,error:d}:{data:{},error:d}}},678:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(791),a=n(885);var r=function(e,t){(0,i.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},o=n(184),s=function(e){var t=e.initItem,n=e.handleChooseItem,s=e.items,l=(0,i.useState)(t),c=(0,a.Z)(l,2),d=c[0],u=c[1],p=(0,i.useState)(!1),f=(0,a.Z)(p,2),m=f[0],x=f[1],v=(0,i.useRef)();return r(v,(function(){x(!1)})),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{onClick:function(){return x(!m)},ref:v,className:"relative flex justify-center items-center gap-4 min-w-[150px] cursor-pointer ",children:[(0,o.jsx)("span",{className:"",children:d}),(0,o.jsx)("span",{className:"flex justify-center items-center",children:m?(0,o.jsx)("ion-icon",{name:"caret-up-outline"}):(0,o.jsx)("ion-icon",{name:"caret-down-outline"})}),(0,o.jsx)("div",{className:"absolute top-[calc(100%+10px)] left-0 w-full h-auto bg-slate-800 z-10  ".concat(m?"visible opacity-100":"invisible opacity-0"),children:null===s||void 0===s?void 0:s.map((function(e,t){return(0,o.jsx)("div",{className:"px-4 p-3 cursor-pointer transition-all hover:bg-slate-600 hover:text-white ",onClick:function(){!function(e){n(e),u(e),x(!1)}(e)},children:e},t)}))})]})})},l=n(853),c=n(470),d=function(e){var t=e.setMovieType,n=e.type,i=e.movieType,a=e.title;return(0,o.jsx)("span",{onClick:function(){return t(n)},className:"hover:text-primary cursor-pointer p-2 ".concat(i===n&&"text-primary"),children:a})};var u=(0,c.withErrorBoundary)((function(e){var t=e.movieType,n=e.setMovieType,i=(0,l.b)(),a=i.setLanguage,r=i.language;return(0,o.jsxs)("header",{className:"header flex justify-center items-center text-gray-600 text-base md:text-xl font-semibold gap-3 md:gap-5 px-2 py-3 md:p-5 ",children:[(0,o.jsx)(d,{setMovieType:n,movieType:t,type:"movie",title:"In Theaters "}),(0,o.jsx)(d,{setMovieType:n,movieType:t,type:"tv",title:"On TV"}),(0,o.jsx)(s,{initItem:r,handleChooseItem:function(e){a(e)},items:["vi-Vi","en-US"]})]})}),{FallbackComponent:function(){return(0,o.jsx)("p",{className:"bg-red-50 text-red-500",children:"Something went wrong with this component"})}})},435:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(791),a=n(885),r=n(470),o=n(92),s=n(246),l=n(566),c=n(818),d=n(977),u=n(184),p=function(e){var t=e.movieInfo,n=e.isLoading;return(0,u.jsxs)("div",{className:"w-full h-full relative rounded-lg ",children:[n?(0,u.jsx)("div",{className:"bg-slate-800 w-[1190px] h-full rounded-[inherit]"}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-[inherit]"}),(0,u.jsx)(d.Z,{src:"https://image.tmdb.org/t/p/w780/".concat(t.backdrop_path||t.poster_path),alt:"",className:"w-full h-full rounded-[inherit] object-fill"})]}),(0,u.jsxs)("div",{className:"absolute left-5 bottom-5 w-full text-white font-bold",children:[n?(0,u.jsx)("div",{className:"skeleton mb-4 w-[200px] h-3 rounded-full"}):(0,u.jsx)("h2",{className:" text-xl mb-4",children:t.title||t.name}),(0,u.jsxs)("div",{className:"flex justify-start items-center gap-4",children:[(0,u.jsxs)(c.Z,{disable:n,movieID:null===t||void 0===t?void 0:t.id,className:"flex justify-center items-center px-5 py-3 ",children:[(0,u.jsx)("span",{children:"Watch"}),(0,u.jsx)("span",{className:"flex items-center justify-center text-xl",children:(0,u.jsx)("ion-icon",{name:"play-circle"})})]}),(0,u.jsx)(l.Z,{disable:n,movieInfo:t})]})]})]})},f=(n(676),n(171),n(401)),m=function(e){var t=e.detail,n=e.type,i=(0,s.Z)("".concat(t,"/").concat(n)).data,a=(null===i||void 0===i?void 0:i.results)||[];return(0,u.jsx)("section",{className:"banner h-[290px] page-container mb-10 overflow-hidden max-w-[100vw]",children:(0,u.jsx)(o.tq,{loop:!0,spaceBetween:30,centeredSlides:!0,autoplay:{delay:5e3,disableOnInteraction:!1},effect:"creative",creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},modules:[f.pt,f.gI],children:a.length<=0?new Array(10).fill(0).map((function(e,t){return(0,u.jsx)(o.o5,{children:(0,u.jsx)(p,{isLoading:!0})},t)})):a.map((function(e){return(0,u.jsx)(o.o5,{children:(0,u.jsx)(p,{movieInfo:e})},e.id)}))})})},x=n(966);n(750);var v=(0,r.withErrorBoundary)((function(e){var t=e.type,n=void 0===t?"now_playing":t,i=e.detail,a=(0,s.Z)("".concat(i,"/").concat(n)).data,r=(null===a||void 0===a?void 0:a.results)||[];return(0,u.jsx)("div",{className:"movie-list w-full overflow-hidden ",children:(0,u.jsx)(o.tq,{grabCursor:!0,slidesPerView:"auto",effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},modules:[f.lI],className:"w-full m-auto",children:r.length<=0?new Array(10).fill(0).map((function(e,t){return(0,u.jsx)(o.o5,{children:(0,u.jsx)(x.Z,{isLoading:!0})},t)})):r.map((function(e){return(0,u.jsx)(o.o5,{children:(0,u.jsx)(x.Z,{movieInfo:e})},e.id)}))})})}),{FallbackComponent:function(){return(0,u.jsx)("p",{className:"bg-red-50 text-red-500",children:"Something went wrong with this component"})}});var h=(0,r.withErrorBoundary)((function(e){var t=e.detail,n=void 0===t?"movie":t,i=e.banner,a=void 0===i?"upcoming":i,r=e.type,o=void 0===r?[{title:"now playing",type:"now_playing"},{title:"Top Rated",type:"top_rated"}]:r;return(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)(m,{detail:n,type:a}),null===o||void 0===o?void 0:o.map((function(e,t){return(0,u.jsxs)("section",{className:"movies-layout page-container px-3 pb-8 max-w-[100vw] ",children:[(0,u.jsx)("h2",{className:"capitalize text-white text-2xl font-bold mb-4",children:e.title}),(0,u.jsx)(v,{detail:n,type:e.type})]},t)}))]})}),{FallbackComponent:function(){return(0,u.jsx)("p",{className:"bg-red-50 text-red-500",children:"Something went wrong with this component"})}}),g=n(678),j=[{detail:"movie",banner:"upcoming",type:[{title:"now playing",type:"now_playing"},{title:"Top Rated",type:"top_rated"}]},{detail:"tv",banner:"popular",type:[{title:"Airing Today",type:"airing_today"},{title:"On The Air",type:"on_the_air"},{title:"Top Rated",type:"top_rated"}]}],y=function(){var e=(0,i.useState)("movie"),t=(0,a.Z)(e,2),n=t[0],r=t[1],o=(0,i.useState)({}),s=(0,a.Z)(o,2),l=s[0],c=s[1];return(0,i.useEffect)((function(){var e=j.filter((function(e){return e.detail===n}))[0];c(e)}),[n]),(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsx)(g.Z,{movieType:n,setMovieType:r}),(0,u.jsx)(h,{detail:l.detail,banner:l.banner,type:l.type})]})},b=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(y,{})})}},750:function(){},171:function(){},676:function(){}}]);
//# sourceMappingURL=435.ed9f6c34.chunk.js.map