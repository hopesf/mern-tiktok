(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{28:function(e,a,t){e.exports=t(58)},33:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),s=t.n(c),l=(t(33),t(7)),o=t.n(l),i=t(18),u=t(5),m=t(19),d=t.n(m).a.create({baseURL:"https://tiktok-clone-cdr.herokuapp.com/"}),p=t(21),E=t.n(p),f=t(20);var v=function(e){var a=e.channel,t=e.desc,n=e.song;return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,"@",a),r.a.createElement("p",null,t),r.a.createElement("div",{className:"video_ticker"},r.a.createElement(E.a,{className:"icon"}),r.a.createElement(f.a,{mode:"smooth"},(function(e){e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n))})))),r.a.createElement("img",{className:"record",src:"https://static.thenounproject.com/png/934821-200.png",alt:""}))},h=t(23),b=t.n(h),g=t(24),k=t.n(g),N=t(25),j=t.n(N),O=t(26),S=t.n(O);var _=function(e){var a=e.likes,t=e.shares,c=e.messages,s=Object(n.useState)(!1),l=Object(u.a)(s,2),o=l[0],i=l[1];return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar_button"},o?r.a.createElement(b.a,{fontSize:"large",onClick:function(e){return i(!1)}}):r.a.createElement(k.a,{fontSize:"large",onClick:function(e){return i(!0)}}),r.a.createElement("p",null,o?a+1:a)),r.a.createElement("div",{className:"sidebar_button"},r.a.createElement(j.a,{fontSize:"large"}),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"sidebar_button"},r.a.createElement(S.a,{fontSize:"large"}),r.a.createElement("p",null,t)))};var x=function(e){var a=e.url,t=e.channel,c=e.desc,s=e.song,l=e.likes,o=e.messages,i=e.shares,m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=d[0],E=d[1],f=Object(n.useRef)(null);return r.a.createElement("div",{className:"video"},r.a.createElement("video",{onClick:function(){p?(f.current.pause(),E(!1)):(f.current.play(),E(!0))},className:"video_player",loop:!0,ref:f,src:a}),r.a.createElement(v,{channel:t,desc:c,song:s}),r.a.createElement(_,{likes:l,shares:i,messages:o}))};var y=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/videos");case 2:return a=e.sent,c(a.data),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app_videos"},t.map((function(e){var a=e.url,t=e.channel,n=e.desc,c=e.song,s=e.likes,l=e.messages,o=e.shares;return r.a.createElement(x,{url:a,channel:t,desc:n,song:c,likes:s,messages:l,shares:o})}))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ab0ae47b.chunk.js.map