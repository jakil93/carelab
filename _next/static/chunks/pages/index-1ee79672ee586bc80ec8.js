(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),i=t(4651),u=t(7426);var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=s.href,p=s.as,_=e.children,v=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof _&&(_=a.default.createElement("a",null,_));var g=(n=a.default.Children.only(_))&&"object"===typeof n&&n.ref,y=u.useIntersection({rootMargin:"200px"}),E=r(y,2),H=E[0],L=E[1],w=a.default.useCallback((function(e){H(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,H]);a.default.useEffect((function(){var e=L&&t&&c.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,L,b,t,o]);var M={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:u,scroll:i}))}(e,o,d,p,v,h,m,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof b?b:o&&o.locale,C=o&&o.isLocaleDomain&&c.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);M.href=C||c.addBasePath(c.addLocale(p,k,o&&o.defaultLocale))}return a.default.cloneElement(n,M)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||s||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},6124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var r=t(5893),o=t(4476),a=t.n(o),c=t(1664);function i(){return(0,r.jsxs)("div",{className:a().container,children:["\uba54\uc778\ud398\uc774\uc9c02233",(0,r.jsx)(c.default,{href:"/about",children:"abount"})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);