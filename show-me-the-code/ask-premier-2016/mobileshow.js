/**
mobileshow
mengjia@people.cn
2015.9.18
*/
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if ('0'.replace(0, e) == 0) {
        while (c--)
            r[e(c)] = k[c];
        k = [function(e) {
            return r[e] || e
        }
        ];
        e = function() {
            return '([5-8jow-yA-Z]|[12]\\w)'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}('(6(){6 r(a,b){w c=a.H.S(1n 21("\\\\b"+b+"\\\\b","g"),"");a.H=c.S(/ +/g," ").S(/(^ +| +$)/g,"")+" "+b}6 s(a,b){a.H=a.H.S(1n 21("\\\\b"+b+"\\\\b","g")," ").S(/ +/g," ").S(/(^ +| +$)/g,"")}6 l(a,b,c){a&&a.22?a.22("on"+b,c):a&&a.1z(b,c,!1)}6 h(a,b,c){a.24?a&&a.24("on"+b,c):a&&a.1A(b,c,!1)}6 d(a){a=(m+a).S(/-+/g,"-").S(/(^-|-$)/g,"").split("-");T(w b=1;b<a.A;b++)a[b]=a[b].25(0,1).toLocaleUpperCase()+a[b].25(1).toLowerCase();1d a.join("")}6 t(){I(1o.1p.13(/26 [678]/))U{5.P="MediaPlayer",5.o=x.1B("object"),5.o.classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6",5.o.1e.autoStart=!1,5.o.1e.1C=19}V(a){}14 5.P="W",5.o=x.1B("audio");5.o.7.M="Q";5.o.7.position="absolute";5.o.7.left="-27";5.o.7.top="-27";x.1f.insertBefore(5.o,x.1f.firstChild)}w f="";-1!==1o.1p.1q("WebKit")?f="1g":-1!==1o.1p.1q("Firefox")?f="1r":-1!==1o.1p.1q("26")&&(f="D");w u={1r:"28",1g:"webkitAnimationEnd",D:"MSAnimationEnd"}[f]||"28",v={1r:"29",1g:"webkitTransitionEnd",D:"MSTransitionEnd"}[f]||"29",m={1r:"",1g:"-1g-",D:""}[f]||"",n="mousedown",p="mousemove",q="mouseup";void 0!==x.ontouchstart&&(n="touchstart",p="touchmove",q="touchend");t.prototype={R:!1,setMute:6(a){5.R=a=!0===a;I("W"==5.P)5.o.muted=a;14 U{5.o.1e.R=a}V(b){}},setVolume:6(a){a=parseInt(a);19<a?a=19:0>a&&(a=0);I("W"==5.P)5.o.1C=a/19;14 U{5.o.1e.1C=a}V(b){}},X:6(){I("W"==5.P)5.o.X();14 U{5.o.2a.X()}V(a){}},2b:6(a){a=1==a;I("W"==5.P)5.o.loop=a;14 U{5.o.1e.playCount=a?9999:1}V(b){}},1h:6(){I("W"==5.P)5.o.1h();14 U{5.o.2a.1h()}V(a){}},2c:6(){I("W"==5.P)1d 5.o.2d;U{1d 2==5.o.playState}V(a){}},2e:6(a){I("W"==5.P)5.o.1a=a;14 U{5.o.URL=a}V(b){}}};window.mobileshow={2f:[],R:!1,init:6(a,b){w c=5;5.K&&5.2g();5.K=x.Y(a);5.Z=(5.K||x).1i(".Z");T(w e=0;e<5.Z.A;e++)5.Z[e].7.M="Q";5.A=5.Z.A;5.L=-1;5.cssKey="";b&&b.A?(5.1s=b,5.2h()):!1===b?5.1D():5.15(0);w d=-1,f,h,g,k=0;5.1E=6(a){a=a.1t?a.1t[0]:a;d=a.2i;f=a.2j;c.1F&&!c.R&&c.11.2c()&&(c.1u(),console.log("X"))};5.1G=6(a){I(-1!=d)1d a=a.1t?a.1t[0]:a,h=a.2i-d,g=a.2j-f,0==k?(0<g&&10<16.17(g)&&16.17(g)>16.17(h)&&(k=-1,c.2k(g)),0>g&&10<16.17(g)&&16.17(g)>16.17(h)&&(k=1,c.2l(g))):10<16.17(g)&&c.1v(g,k),!1};5.1H=6(a){d=-1;0!=k&&c.1I(k);k=0};l(5.K,n,5.1E);l(5.K,p,5.1G);l(5.K,q,5.1H);5.11||(5.11=1n t,5.11.2b(!0),l(x.Y(".1j"),"click",6(){c.R?c.1u():c.1J();1d!1}))},setSound:6(a){5.1F=a;5.R?5.1J():5.1u()},1J:6(){5.R=!0;r(x.Y(".1j"),"2m");s(x.Y(".1j"),"2n");5.11.1h()},1u:6(){5.11.2e(5.1F);5.R=!1;s(x.Y(".1j"),"2m");r(x.Y(".1j"),"2n");5.11.X()},1D:6(){5.N=x.1B("E");5.N.H="loadingPage";5.N.innerHTML=\'<E 18="loadingBar"><E 18="block_1 N"></E><E 18="block_2 N"></E><E 18="block_3 N"></E><E 18="block_4 N"></E><E 18="block_5 N"></E></E><E 18="loadingTxt">\\u8f7d\\u5165\\u4e2d</E>\';5.K.appendChild(5.N);5.N.7.M="1K"},2o:6(){5.N.7.M="Q";5.15(0)},2h:6(){w a=5,b=0,c;5.1D();T(w d=0;d<5.1s.A;d++)c=1n Image,c.onerror=c.onload=6(){b++;b>=a.1s.A&&a.2o()},c.1a=5.1s[d]},2g:6(){5.K&&(h(5.K,n,5.1E),h(5.K,p,5.1G),h(5.K,q,5.1H),5.K=12,5.11.1h())},15:6(a,b){w c=5;I(a!=5.L){w e=0;a>5.L?e=1:a<5.L&&(e=-1);-1==5.L&&(e=0);a>=5.A?a=0:0>a&&(a=5.A-1);a+1==5.A?x.Y(".2p").7.M="Q":x.Y(".2p").7.M="1K";5.B&&(5.B.7.1L=1);5.j&&("6"==2q 5.j.G&&5.j.G(),5.j.7.1L=2,5.B=5.j);5.j=5.Z[a];5.1M(5.j);1k(5.1N);w f=6(){1k(c.1O);5.1A(v,f,12);5.7[d("1l")]="Q";5.G=12;c.2r();c.1P()};0!==e?(5.j.G=f,5.j.1z(v,f,12),5.j.7[d("1l")]="Q",5.j.7[d("O")]="1Q("+e*x.1f.1R+"px)",5.B&&(5.B.7[d("1l")]="Q"),b||c.1I(e)):5.1w();5.L=a;5.2t();5.j.7.M="1K";5.j.7.1L=10;0==e&&5.1P()}},2u:6(){5.15(5.L+1)},pre:6(){5.15(5.L-1)},2k:6(a){5.15(5.L-1,!0);5.1v(a,-1)},2l:6(a){5.15(5.L+1,!0);5.1v(a,1)},1v:6(a,b){w c=b*x.1f.1R+a,e=c*b/x.1f.1R*.1+.9;5.j.7[d("O-1x")]="50% 50%";5.j.7[d("O")]="1Q("+c+"px)";5.B&&(5.B.7[d("O-1x")]="50% "+(1==b?"0":"19%"),5.B.7[d("O")]="2v("+e+")")},1I:6(a){w b=5;1S(6(){b.j.7[d("O-1x")]="50% 50%";b.j.7[d("1l")]=m+"O 0.4s 2x-2y";b.j.7[d("O")]="1Q(0px)";b.B&&(b.B.7[d("1l")]=m+"O 0.4s 2x-2y",b.B.7[d("O-1x")]="50% "+(1==a?"0":"19%"),b.B.7[d("O")]="2v(0.9)")},10);5.1w();1k(5.1O);5.1O=1S(6(){b.j.G&&b.j.G()},500);5.1M(5.L+1>=5.A-1?5.Z[0]:5.Z[5.L+1])},1M:6(a){I(a&&!a.y("8-2z")){T(w b=(a||x).1i("img[8-1a]"),c=0;c<b.A;c++)b[c].1a=b[c].y("8-1a"),b[c].1T("8-1a");a.1y("8-2z",1)}},1w:6(){w a=5,b=0;1k(5.1N);I(b=5.j.y("8-1w"))b=-1!==b.1q("D")?b==1U(b):1E3*1U(b),2A>b&&(b=2A),5.1N=1S(6(){a.2u()},b)},2r:6(){I(5.B){5.B.7.M="Q";5.B.J||(5.B.J=(5.B||x).1i("*[8-1c],*[8-C],*[8-1m]"));T(w a=0;a<5.B.J.A;a++)"6"==2q 5.B.J[a].G&&5.B.J[a].G()}},2t:6(){5.j.J||(5.j.J=(5.j||x).1i("*[8-1c],*[8-C],*[8-1m]"));T(w a,b,c,e=0;e<5.j.J.A;e++)c=5.j.J[e],a=c.y("8-1c"),b=c.y("8-C"),c.y("8-1m"),a&&(a=a.13(/([a-z]*)\\s([\\d\\.]+(?:s|D))(?:\\s([\\d\\.]+(?:s|D)))?/i))&&3<=a.A?c.7.M="Q":b&&(b=b.13(/([a-z]*)\\s([\\d\\.]+(?:s|D))(?:\\s([\\d\\.]+(?:s|D)))?/i))&&3<=b.A&&(c.1y("8-F",c.y("8-F")||c.H),c.H=c.y("8-F")+" "+b[1],c.7[d("C-1V")]=b[2],c.7[d("C-1W-1X")]="backwards",c.7[d("C-X-1Y")]="2d")},1P:6(){w a;5.j.J||(5.j.J=(5.j||x).1i("*[8-1c],*[8-C],*[8-1m]"));T(;a=5.2f.pop();)1k(a);T(w b,c,d=0;d<5.j.J.A;d++)c=5.j.J[d],a=c.y("8-1c"),b=c.y("8-C"),c.y("8-1m"),a&&(a=a.13(/([a-z]*)\\s([\\d\\.]+(?:s|D))(?:\\s([\\d\\.]+(?:s|D)?))?/i))&&3<=a.A?5.2B(c):b&&(b=b.13(/([a-z]*)\\s([\\d\\.]+(?:s|D))(?:\\s([\\d\\.]+(?:s|D)?))?(?:\\s(\\d+|1Z))?/i))&&3<=b.A&&5.20(c)},2B:6(a){w b=5,c=a.y("8-1c").13(/([a-z]*)\\s([\\d\\.]+(?:s|D))(?:\\s([\\d\\.]+(?:s|D)?))?/i),e=6(){5.1A(u,arguments.call,12);5.y("8-F")&&(5.H=5.y("8-F"));5.1T("8-F");5.G=12;2C 5.G;b.20(5)};a.1z(u,e,12);a.G=e;a.7.M="";a.1y("8-F",a.y("8-F")||a.H);a.H=a.y("8-F")+" "+c[1];a.7[d("C-1V")]=c[2];a.7[d("C-2D")]=c[3]||0;a.7[d("C-1W-1X")]="2E";a.7[d("C-2F-2G")]=1;a.7[d("C-X-1Y")]="2H"},2I:6(){5.y("8-F")&&(5.H=5.y("8-F"));5.1T("8-F");5.G=12;2C 5.G},20:6(a){w b=a.y("8-C");b&&(b=b.13(/([a-z]*)\\s([\\d\\.]+(?:s|D))(?:\\s([\\d\\.]+(?:s|D)?))?(?:\\s(\\d+|1Z))?/i))&&3<=b.A&&(a.G=5.2I,a.7.M="",a.1y("8-F",a.y("8-F")||a.H),a.H=a.y("8-F")+" "+b[1],a.7[d("C-1V")]=b[2],a.7[d("C-2D")]=b[3]||0,a.7[d("C-1W-1X")]="2E",a.7[d("C-2F-2G")]=1U(b[4])?b[4]:"1Z",a.7[d("C-X-1Y")]="2H")}}})();', [], 169, '|||||this|function|style|data|||||||||||nowScen|||||audioObj||||||||var|document|getAttribute||length|preScen|animation|ms|div|endClassName|_endFn|className|if|childs|ele|index|display|loading|transform|__objType|none|mute|replace|for|try|catch|Audio|play|querySelector|scenery||auido_bg|null|match|else|select|Math|abs|class|100|src||animationIn|return|settings|body|webkit|pause|querySelectorAll|sound|clearTimeout|transition|animationOut|new|navigator|userAgent|indexOf|moz|preloadList|touches|playSound|moveScen|autoNext|origin|setAttribute|addEventListener|removeEventListener|createElement|volume|showLoading|__startFn|soundSrc|__moveFn|__endFn|endMoveScen|stopSound|block|zIndex|preloadScen|_autoNextTimer|_pageTranEndTimeout|actionScen|translateY|clientHeight|setTimeout|removeAttribute|parseFloat|duration|fill|mode|state|infinite|_action|RegExp|attachEvent||detachEvent|substr|MSIE|100px|animationend|transitionend|controls|setLoop|isPaused|paused|setSrc|_timers|uninit|preload|pageX|pageY|preMoveScen|nextMoveScen|s_off|s_on|hideLoading|moveArr|typeof|clearPreScen||readyScen|next|scale||ease|out|isLoad|3E3|_actionIn|delete|delay|both|iteration|count|running|_ele_animation_end_event_fn'.split('|'), 0, {}))
