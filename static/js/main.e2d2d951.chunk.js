(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(n,e,t){n.exports=t.p+"static/media/maintenance.5f9ca9eb.jpg"},16:function(n,e,t){n.exports=t.p+"static/media/logo-white.96979723.png"},18:function(n,e,t){n.exports=t(32)},24:function(n,e,t){},25:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},26:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(3),i=t.n(o),c=(t(24),t(4)),l=t(5),m=t(7),s=t(6),u=t(8),d=(t(25),t(26),t(1)),p=t(2),f=t(10),b=t.n(f);function h(){var n=Object(d.a)(["\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n"]);return h=function(){return n},n}function g(){var n=Object(d.a)(["\n    height: 15rem;\n\n    @media only screen and (max-width: 37.5em) {\n        margin-top: 10%;\n        height: 10rem;\n    }\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    \n    @media only screen and (max-width: 37.5em) {\n        /* top: .1rem;\n        left: .1rem; */\n        position: relative;\n        margin: 0 auto;\n    }\n"]);return v=function(){return n},n}function y(){var n=Object(d.a)(["\n    height: 95vh;\n    background-image: linear-gradient(\n        to right bottom,\n        rgba(68, 70, 73, 0.8),\n        rgba(39, 60, 180, 0.8)),\n    url(",");\n    background-size: cover;\n    background-position: top;\n    position: relative;\n\n    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {\n        -webkit-clip-path: polygon(0 0, 100% 3vh, 100% 100%, 0 100%);\n        clip-path: polygon(0 0, 100% 3vh, 100% 100%, 0 100%);\n        height: 90vh;\n    }\n    \n    @media (min-width: 192dpi) and (min-width: 37.5em),\n        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),\n        only screen and (min-width: 125em) {\n            background-image: linear-gradient(\n                to right bottom,\n                rgba(68, 70, 73, 0.8),\n                rgba(39, 60, 180, 0.8)),\n            url(",");\n        }\n        \n    @media only screen and (max-width: 37.5em) {\n        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);\n        clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);\n    }\n"]);return y=function(){return n},n}var w=p.a.div(y(),b.a,b.a),O=p.a.div(v()),j=p.a.img(g()),k=p.a.div(h());function E(){var n=Object(d.a)(["\n    0% {\n        opacity: 0;\n        transform: translateY(3rem);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0)\n    }\n"]);return E=function(){return n},n}function x(){var n=Object(d.a)(["\n    0% {\n        opacity: 0;\n        transform: translateX(-10rem);\n    }\n\n    80% {\n        transform: translateX(1rem);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0)\n    }\n"]);return x=function(){return n},n}function z(){var n=Object(d.a)(["\n    0% {\n        opacity: 0;\n        transform: translateX(10rem);\n    }\n\n    80% {\n        transform: translateX(-1rem);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0)\n    }\n"]);return z=function(){return n},n}var C=Object(p.b)(z()),X=Object(p.b)(x());Object(p.b)(E());function N(){var n=Object(d.a)(["\n    display: block;\n    font-size: 2rem;\n    font-weight: 800;\n    letter-spacing: 1rem;\n    animation: "," 1s ease-out;\n\n    @media only screen and (max-width: 56.25em) {\n        letter-spacing: .5rem;\n        font-size: 2rem;\n    }\n\n    @media only screen and (max-width: 37.5em) {\n        letter-spacing: .5rem;\n        font-size: 1rem;\n    }\n"]);return N=function(){return n},n}function Y(){var n=Object(d.a)(["\n    display: block;\n    font-size: 6rem;\n    font-weight: 400;\n    letter-spacing: 3.5rem;\n\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-timing-function: ease-out;\n    \n    @media only screen and (max-width: 56.25em) {\n        letter-spacing: 1rem;\n        font-size: 5rem\n    }\n\n    @media only screen and (max-width: 37.5em) {\n        letter-spacing: 1rem;\n        font-size: 3rem\n    }\n"]);return Y=function(){return n},n}function T(){var n=Object(d.a)(["\n    color: #fff;\n\n    backface-visibility: hidden;\n    margin-bottom: 6rem;\n"]);return T=function(){return n},n}var B=p.a.h1(T()),I=p.a.span(Y(),X),J=p.a.span(N(),C),R=t(16),S=t.n(R);function U(){var n=Object(d.a)(["\n    &, :link, :visited {\n        text-decoration: none;\n        padding: 1.5rem 4rem;\n        display: inline-block;\n        border-radius: 10rem;\n        transition: all .2s;\n        position: relative;\n        font-size: 1.6rem;\n\n        border: none;\n        cursor: pointer;\n\n        background-color: ",";\n        color: ","\n    }\n\n    :hover {\n        transform: translateY(-3px);\n        box-shadow: 0 1rem 2rem rgba(255, 255, 255, .2);\n\n        ::after {\n            transform: scaleX(1.4) scaleY(1.6);\n            opacity: 0;\n        }\n    }\n\n    :active, :focus {\n        outline: none;\n        transform: translateY(-1px);\n        box-shadow: 0 .5rem 1rem rgba(255, 255, 255, .2);\n    }\n\n    ::after {\n        content: \"\";\n        display: inline-block;\n        height: 100%;\n        width: 100%;\n        border-radius: 10rem;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        transition: all .4s;\n    }\n\n    &white {\n        background-color: 'green';\n    }\n"]);return U=function(){return n},n}var W=p.a.a(U(),function(n){return n.background||"white"},function(n){return n.color||"#777"}),A=function(n){function e(){return Object(c.a)(this,e),Object(m.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(u.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null,r.a.createElement(O,null,r.a.createElement(j,{src:S.a})),r.a.createElement(k,null,r.a.createElement(B,null,r.a.createElement(I,null,"UNDER CONSTRUCTION"),r.a.createElement(J,null,"Coming soon, ",r.a.createElement("span",{style:{color:"#1866e2"}},"{"),"with",r.a.createElement("span",{style:{color:"#ef5da1"}},"Style"),r.a.createElement("span",{style:{color:"#1866e2"}},"}"))),r.a.createElement("div",null,r.a.createElement(W,null,"Click here if you are me")),r.a.createElement("div",null,r.a.createElement(W,{style:{marginTop:16},color:"white",background:"#2998ff"},"or, Go to my blog")))))}}]),e}(r.a.Component),D=function(n){function e(){return Object(c.a)(this,e),Object(m.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(u.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.e2d2d951.chunk.js.map