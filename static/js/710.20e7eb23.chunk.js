"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[710],{977:function(e,t,s){var i=s(413),l=s(885),n=s(925),a=s(791),r=s(184),c=["src","alt"];function o(e,t){var s=e.src,o=e.alt,d=(0,n.Z)(e,c),u=(0,a.useState)(!1),m=(0,l.Z)(u,2),x=m[0],f=m[1];return x?(0,r.jsx)("div",{className:"w-full h-full bg-slate-800 flex justify-center items-center shadow-md",children:(0,r.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"42",height:"42",viewBox:"0 0 32 32",children:[(0,r.jsx)("title",{children:"photo-error"}),(0,r.jsx)("path",{fill:"#F62682",d:"M24.166 17.759h0.105v7.247c0 1.628-1.313 2.993-2.993 2.993h-14.284c-1.628 0-2.993-1.313-2.993-2.993v-14.6c0-1.681 1.365-2.993 3.046-3.046h9.978c-0.368 0.84-0.525 1.786-0.525 2.731 0 4.201 3.414 7.667 7.667 7.667zM9.777 10.144c-1.365 0-2.468 1.103-2.468 2.468s1.103 2.468 2.468 2.468c1.365 0 2.468-1.103 2.468-2.468s-1.103-2.468-2.468-2.468zM7.256 25.322l14.6 0.053-3.991-7.93c-0.263-0.578-0.998-0.578-1.313-0.053l-1.733 3.046c-0.315 0.525-1.050 0.63-1.47 0.158l-0.683-0.735c-0.683-0.735-1.891-0.63-2.416 0.263l-2.993 5.199zM24.166 4c3.361 0 6.092 2.731 6.092 6.092s-2.731 6.092-6.092 6.092c-3.361 0-6.092-2.731-6.092-6.092s2.731-6.092 6.092-6.092zM24.954 6.363h-1.208l0.105 4.569h0.998l0.105-4.569zM24.376 13.453c0.368 0 0.683-0.315 0.683-0.683s-0.315-0.683-0.683-0.683c-0.368 0-0.683 0.315-0.683 0.683s0.315 0.683 0.683 0.683z"})]})}):(0,r.jsx)("img",(0,i.Z)((0,i.Z)({ref:t,src:s,alt:o},d),{},{onError:function(){f(!0)}}))}t.Z=(0,a.forwardRef)(o)},460:function(e,t,s){s(791);var i=s(184);t.Z=function(e){var t=e.onClick,s=e.disable,l=e.children,n=e.className,a=void 0===n?"":n;return(0,i.jsx)("button",{onClick:function(){s||t()},className:"flex justify-center items-center text-white bg-primary rounded-lg shadow-lg font-semibold   md:py-3 md:px-6  md:text-lg md:gap-2 text-base gap-[2px] ".concat(s?"cursor-default opacity-70":"","   ").concat(a),children:l})}},566:function(e,t,s){var i=s(982),l=(s(791),s(47)),n=s(460),a=s(184);t.Z=function(e){var t=e.movieInfo,s=e.disable,r=e.className,c=void 0===r?"p-[13px] md:px-4 md:py-4 md:gap-0 bg-gray-500 bg-opacity-60 rounded-lg text-[22px] md:text-xl flex justify-center items-center transition-all":r,o=(0,l.b)(),d=o.setWatchLists,u=o.watchLists;return(0,a.jsx)(n.Z,{disable:s,onClick:function(){d((function(e){return JSON.stringify(e).includes(JSON.stringify(t))?(0,i.Z)(e):[].concat((0,i.Z)(e),[t])}))},className:"".concat(JSON.stringify(u).includes(JSON.stringify(t))?"opacity-0 invisible":"","  ").concat(c," "),children:(0,a.jsx)("ion-icon",{name:"add-sharp"})})}},818:function(e,t,s){s(791);var i=s(871),l=s(460),n=s(184);t.Z=function(e){var t=e.disable,s=e.onClick,a=void 0===s?function(){}:s,r=e.className,c=void 0===r?"":r,o=e.children,d=e.movieID,u=(0,i.s0)();return(0,n.jsx)(l.Z,{disable:t,className:"".concat(c),onClick:function(){a(),u("/home/".concat(d))},children:o})}},966:function(e,t,s){var i=s(885),l=(s(791),s(47)),n=s(566),a=s(470),r=s(818),c=s(464),o=s(977),d=s(184),u=function(e){if(e){var t=e.split("-"),s=(0,i.Z)(t,3),l=s[0],n=s[1];return[s[2],n,l].join("-")}};t.Z=(0,a.withErrorBoundary)((function(e){var t=e.movieInfo,s=e.isLoading,i=(0,l.b)().watchLists;return(0,d.jsxs)("div",{className:"group movie-card rounded-xl p-5 bg-slate-800 relative h-[505px] flex flex-col justify-between items-center select-none",children:[s?(0,d.jsx)("div",{className:"skeleton w-full h-[380px] rounded-[inherit]"}):(0,d.jsxs)("div",{className:"relative w-full h-[380px]  rounded-[inherit]",children:[(0,d.jsx)(o.Z,{src:"https://image.tmdb.org/t/p/w780/".concat(t.poster_path||t.backdrop_path),alt:"",className:"w-full h-full  rounded-[inherit] object-cover object-top"}),(0,d.jsx)(r.Z,{className:"absolute top-2/4 left-2/4 bg-opacity-80 rounded-full -translate-x-2/4 -translate-y-2/4 p-4",movieID:null===t||void 0===t?void 0:t.id,disable:s,children:(0,d.jsx)("span",{className:"flex items-center justify-center text-3xl",children:(0,d.jsx)("ion-icon",{name:"play-circle"})})})]}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center text-white w-full ",children:[s?(0,d.jsx)("span",{className:"skeleton w-full h-[10px] rounded-xl my-1 mt-2"}):(0,d.jsx)("h3",{className:"font-bold text-lg text-left w-full my-1 mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap",children:t.title||t.name}),(0,d.jsxs)("div",{className:"flex justify-between items-center text-gray-400 w-full mb-7 text-sm",children:[s?(0,d.jsx)("span",{className:"skeleton w-[60px] h-[10px] rounded-xl my-3"}):(0,d.jsx)("span",{children:u(t.release_date)||u(t.first_air_date)}),(0,d.jsx)(c.Z,{isLoading:s,voteAverage:null===t||void 0===t?void 0:t.vote_average})]})]}),(0,d.jsx)(n.Z,{className:"absolute top-5 right-5 p-3 bg-gray-500 bg-opacity-60 rounded-lg text-[22px] flex justify-center items-center invisible opacity-0 ".concat(!JSON.stringify(i).includes(JSON.stringify(t))&&"group-hover:opacity-100 group-hover:visible"," transition-all"),disable:s,movieInfo:t})]})}),{FallbackComponent:function(){return(0,d.jsx)("p",{className:"bg-red-50 text-red-500",children:"Something went wrong with this component"})}})},464:function(e,t,s){s.d(t,{Z:function(){return l}});s(791);var i=s(184),l=function(e){var t=e.isLoading,s=e.voteAverage,l=e.size,n=void 0===l?"40px":l,a=e.bold,r=void 0===a?"3px":a,c=e.text,o=void 0===c?"10px":c,d=e.color,u=void 0===d?"#f62682":d,m=function(e){"number"!==typeof e&&(e=0);var t=e/10*100;return Math.round(100*t)/100}(s);return(0,i.jsx)("span",{className:"flex justify-center items-center",children:t?(0,i.jsx)("div",{className:"pie animate skeleton",style:{"--p":10,"--b":r,"--w":n,"--text":o,"--c":u},children:"10%"}):(0,i.jsxs)("div",{className:"pie animate",style:{"--p":m,"--b":r,"--w":n,"--text":o,"--c":u},children:[m,"%"]})})}},246:function(e,t,s){s.d(t,{Z:function(){return a}});var i=s(419),l=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},n=s(47),a=function(e,t,s){var a=(0,n.b)().language,r=function(){if(e)return"".concat("https://api.themoviedb.org/3","/").concat(e,"?api_key=").concat("1a5c4195d358f72fdbec913b288dd9e8","&language=").concat(a).concat(t?"&query=".concat(t):"").concat(s?"&page=".concat(s):"")}(),c=(0,i.ZP)(r,l),o=c.data,d=c.error;return d?(console.log(d),o||{}):o?{data:o,error:d}:{data:{},error:d}}},710:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var i=s(885),l=(s(791),s(871)),n=s(92),a=s(966),r=s(246),c=s(464),o=(s(750),s(676),s(880),s(401)),d=(s(818),s(977)),u=s(184),m=function(e){if(e){var t=e.split("-"),s=(0,i.Z)(t,3),l=s[0],n=s[1];return[s[2],n,l].join("-")}},x=function(){var e=(0,l.UO)().movieId,t=(0,r.Z)("movie/".concat(e,"/credits")).data;if(t&&t.cast&&!(t.cast.length<=0)){var s=t.cast;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{className:"text-center text-2xl mb-10 font-bold",children:"Top Billed Cast"}),(0,u.jsx)("div",{className:"grid grid-cols-4 gap-3 w-full p-3",children:s.slice(0,4).map((function(e){return(0,u.jsx)("div",{className:"cast-item",children:(0,u.jsx)(d.Z,{src:"https://image.tmdb.org/t/p/w300/".concat(e.profile_path),alt:"",className:"w-full h-[120px] object-cover rounded-lg"})},e.id)}))})]})}},f=function(){var e=(0,l.UO)().movieId,t=(0,r.Z)("movie/".concat(e,"/videos")).data;if(!t||!t.results||t.results.length<=0)return null;var s=t.results;return(0,u.jsxs)("div",{className:"py-10 mt-10",children:[(0,u.jsx)("h2",{className:"text-center text-2xl mb-10 font-bold",children:"Trailers"}),s.slice(0,3).map((function(e){return(0,u.jsxs)("div",{className:"w-full mt-10",children:[(0,u.jsx)("h3",{className:"font-bold text-xl mb-5",children:e.name}),(0,u.jsx)("div",{className:"w-full aspect-video",children:(0,u.jsx)("iframe",{className:"w-full h-full object-fill",width:"864",height:"486",title:e.name,src:"https://www.youtube.com/embed/".concat(e.key),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]},e.id)}))]})},h=function(){var e=(0,l.UO)().movieId,t=(0,r.Z)("movie/".concat(e,"/similar")).data;if(!t||!t.results||t.results.length<=0)return null;var s=t.results;return(0,u.jsxs)("div",{className:"mt-10",children:[(0,u.jsx)("h2",{className:"text-center text-3xl mb-10 font-bold",children:"Similar movies"}),(0,u.jsx)("div",{className:"movie-list",children:(0,u.jsx)(n.tq,{grabCursor:!0,slidesPerView:"auto",effect:"coverflow",centeredSlides:!0,coverflowEffect:{rotate:80,stretch:0,depth:100,modifier:1,slideShadows:!0},autoplay:{delay:2e3,disableOnInteraction:!1},pagination:!0,modules:[o.lI,o.tl,o.pt],children:null===s||void 0===s?void 0:s.map((function(e){return(0,u.jsx)(n.o5,{children:(0,u.jsx)(a.Z,{movieInfo:e})})}))})})]})},p=function(){var e=(0,l.UO)().movieId,t=(0,r.Z)("movie/".concat(e)).data;if(t){var s=t.backdrop_path,i=t.poster_path,a=t.title,p=t.genres,v=t.overview,j=t.release_date,b=t.vote_average;return(0,u.jsxs)("div",{className:"w-[100vw]",children:[(0,u.jsxs)("div",{className:"relative rounded-xl h-[360px] mb-10",children:[(0,u.jsx)("div",{className:"absolute w-full inset-0 bg-slate-800 bg-opacity-70"}),(0,u.jsx)(d.Z,{src:"https://image.tmdb.org/t/p/original/".concat(s||i),alt:"",className:"w-full h-full object-fill rounded-[inherit]"}),(0,u.jsxs)(n.tq,{autoplay:{delay:3e3,disableOnInteraction:!1},effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:!0,modules:[o.tl,o.SH,o.pt],className:"top-0 left-0 movie-detail inset-0 z-10",children:[(0,u.jsx)(n.o5,{children:(0,u.jsx)("div",{className:"flex justify-center items-center w-full h-full relative z-10 rounded-2xl shadow-lg",children:(0,u.jsx)(d.Z,{src:"https://image.tmdb.org/t/p/w500/".concat(i||s),alt:"",className:"w-full h-full max-w-[200px] max-h-[300px]  object-cover object-top rounded-[inherit]"})})}),(0,u.jsx)(n.o5,{children:(0,u.jsxs)("div",{className:"mx-auto w-full max-w-[500px] mb-10 flex flex-col justify-start items-center p-4",children:[(0,u.jsx)("h3",{className:"my-3 font-bold text-xl",children:"Overview"}),(0,u.jsx)("p",{className:"text-justify text-base leading-relaxed content-overflow-limitline ",style:{"--line":"9"},children:v||"no overview"})]})}),(0,u.jsx)(n.o5,{className:"flex justify-center items-center",children:(0,u.jsxs)("div",{className:"w-[90%] h-auto bg-slate-800 bg-opacity-30 rounded-2xl flex justify-start items-center gap-3 p-4",children:[(0,u.jsx)(c.Z,{voteAverage:b,size:"100px",bold:"6px",text:"25px"}),(0,u.jsxs)("div",{className:"font-bold flex flex-col gap-2 justify-center items-start",children:[(0,u.jsx)("div",{children:a}),(0,u.jsx)("div",{children:j&&(0,u.jsxs)("span",{children:[(0,u.jsx)("span",{className:"mr-2",children:"Time:"}),m(j)]})})]})]})})]})]}),(0,u.jsx)("div",{className:"text-3xl font-bold text-center mb-5 p-3  ",children:a}),(0,u.jsx)("div",{className:"w-[100vw] p-4 flex justify-center items-center gap-2 mb-10",children:p&&p.length>0&&p.slice(0,3).map((function(e,t){return(0,u.jsx)("div",{className:"text-sm border-2 rounded-2xl py-2 px-3 border-primary text-primary font-bold",children:e.name},e.id||t)}))}),(0,u.jsx)(x,{}),(0,u.jsx)(f,{}),(0,u.jsx)(h,{})]})}}},750:function(){},880:function(){},676:function(){}}]);
//# sourceMappingURL=710.20e7eb23.chunk.js.map