(self.webpackChunkandys_man_club=self.webpackChunkandys_man_club||[]).push([[913],{6162:function(e,t,a){"use strict";var i=a(4836);t.Z=void 0;var r,n=i(a(6115)),s=i(a(7867)),o=i(a(7071)),l=i(a(434)),d=i(a(7294)),u=i(a(5697)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},h=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=g(t||a||[]);return i&&i.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(h);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),b=function(e){var t=f(e),a=p(t);return m[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,S=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function j(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function E(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+d+s+o+a+i+t+n+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(C,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?d.default.createElement("picture",null,r(i),o):o})),C=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,f=e.loading,h=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,c);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:f,draggable:h,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var H=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&w&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,c=void 0===u?{}:u,h=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,O=e.draggable,E=p||m;if(!E)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,l.default)({opacity:L?1:0,transition:H?"opacity "+y+"ms":"none"},o),V="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},q=(0,l.default)({opacity:this.state.imgLoaded?0:1},H&&k,o,c),M={title:t,alt:this.state.isVisible?"":a,style:q,className:h,itemProp:w},P=this.state.isHydrated?g(E):E[0];if(p)return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&k)}),P.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:M,imageVariants:E,generateSources:R}),P.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:M,imageVariants:E,generateSources:j}),this.state.isVisible&&d.default.createElement("picture",null,x(E),d.default.createElement(C,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:E}))}}));if(m){var T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete T.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},H&&k)}),P.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:M,imageVariants:E,generateSources:R}),P.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:M,imageVariants:E,generateSources:j}),this.state.isVisible&&d.default.createElement("picture",null,x(E),d.default.createElement(C,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:E}))}}))}return null},t}(d.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var W=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function k(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}H.propTypes={resolutions:W,sizes:V,fixed:k(u.default.oneOfType([W,u.default.arrayOf(W)])),fluid:k(u.default.oneOfType([V,u.default.arrayOf(V)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var q=H;t.Z=q},4170:function(e,t,a){"use strict";a.d(t,{A:function(){return p},w:function(){return g}});var i=/^(https?:)?\/\/a.storyblok.com\/f\/*[0-9]+\/*[0-9]*x*[0-9]*\/[A-Za-z0-9]+\/[\S]+\.[a-zA-Z]+/;function r(e){var t=null,a=null;if("string"==typeof e&&(t=e),"object"==typeof e&&(t=e.image,a=e.base64?e.base64:null),!(t=i.test(t)?t:null))return!1;var r=t.replace(/^(https?:)?\/\/a.storyblok.com\//,""),n=r.split("/"),s=n[4],o=n[2].split("x").map((function(e){return parseInt(e,10)})),l=o[0],d=o[1];return{originalPath:r,extension:s.split(".")[1],metadata:{dimensions:{width:l,height:d,aspectRatio:l/d},lqip:a}}}var n="https://img2.storyblok.com",s=[1,1.5,2,3],o=[.25,.5,1,1.5,2,3],l={quality:100,smartCrop:!0,format:null,fill:null,toFormat:null,base64:null,useBase64:!0},d=Object.assign({},l,{maxWidth:800,maxHeight:null}),u=Object.assign({},l,{width:400,height:null});function c(e){var t=e.includes("filters:format(webp)"),a=/[a-f0-9]+-\d+x\d+\.webp/.test(e);return t||a}function f(e,t){var a=t.width,i=t.height,r=t.smartCrop,s=t.quality,o=t.format,l=t.fill,d=e.split("."),u=n;a&&i&&(u+="/"+a+"x"+i),r&&(u+="/smart");var c=[s&&"quality("+s+")",o&&o!==d[1]&&"format("+o+")",l&&"fill("+l+")"];return(c=c.filter((function(e){return!0===Boolean(e)}))).length>0&&(u+=function(e){return e.reduce((function(e,t,a){return e+":"+t}),"/filters")}(c)),u+"/"+e}function h(e,t){var a=t.height;return f(e,{width:(t.width/3).toFixed(0),height:(a/3).toFixed(0),quality:10})}function p(e,t){void 0===t&&(t={});var a=r(e);if(!a)return null;var i=Object.assign({},u,t),n=i.width,o=i.height,l=a.metadata.dimensions,d=a.originalPath,p=l.aspectRatio;i.height&&(p=n/i.height);var g=null;i.toFormat?g=i.toFormat:c(d)&&(g="jpg");var m=s.map((function(e){return Math.round(n*e)})).filter((function(e){return e<l.width})).reduce((function(e,t,a){var r=s[a]+"x",n=Math.round(t/p),o=Object.assign({},i,{width:t,height:n}),l=f(d,Object.assign({},o,{format:"webp"})),u=f(d,Object.assign({},o,g&&{format:g}));return e.webp.push(l+" "+r),e.base.push(u+" "+r),e}),{webp:[],base:[]}),b=Math.round(o||n/p),y=Object.assign({},i,{width:n,height:b}),v=f(d,Object.assign({},y,g&&{format:g})),w=f(d,Object.assign({},y,{format:"webp"}));return{base64:h(d,{width:n,height:o,aspectRatio:p}),aspectRatio:p,width:Math.round(n),height:b,src:v,srcWebp:w,srcSet:m.base.join(",\n")||null,srcSetWebp:m.webp.join(",\n")||null}}function g(e,t){void 0===t&&(t={});var a=r(e);if(!a)return null;var i=Object.assign({},d,t),n=i.maxWidth,s=a.metadata.dimensions,l=a.originalPath,u=s.aspectRatio;i.maxHeight&&(u=n/i.maxHeight);var p=i.maxHeight||Math.round(n/s.aspectRatio),g=null;i.toFormat?g=i.toFormat:c(l)&&(g="jpg");var m=i.sizes||"(max-width: "+n+"px) 100vw, "+n+"px",b=o.map((function(e){return Math.round(n*e)})).filter((function(e){return e<s.width})).concat(s.width).filter((function(e){return e<s.width})).reduce((function(e,t){var a={width:t,height:Math.round(t/u)},r=f(l,Object.assign({},i,a,{format:"webp"})),n=f(l,Object.assign({},i,a,{format:g}));return e.webp.push(r+" "+t+"w"),e.base.push(n+" "+t+"w"),e}),{webp:[],base:[]}),y={width:n,height:p},v=f(l,Object.assign({},i,y,{format:g})),w=f(l,Object.assign({},i,y,{format:"webp"}));return{base64:h(l,{width:n,height:p,aspectRatio:u}),aspectRatio:u,src:v,srcWebp:w,srcSet:b.base.join(",\n")||null,srcSetWebp:b.webp.join(",\n")||null,sizes:m}}},7736:function(e,t,a){"use strict";var i=a(7294),r=a(6162),n=a(4170);t.Z=function(e){var t,a=e.image,s=e.className,o=null==a||null===(t=a.filename)||void 0===t?void 0:t.includes(".svg"),l=null!=a&&a.filename?[Object.assign({},(0,n.w)(a.filename,{maxWidth:1280,quality:60,smartCrop:!1}),{media:"(min-width: 1536px)"}),Object.assign({},(0,n.w)(a.filename,{maxWidth:1280,quality:60,smartCrop:!1}),{media:"(min-width: 1280px)"}),Object.assign({},(0,n.w)(a.filename,{maxWidth:1024,quality:60,smartCrop:!1}),{media:"(min-width: 1024px)"}),Object.assign({},(0,n.w)(a.filename,{maxWidth:768,quality:60,smartCrop:!1}),{media:"(min-width: 768px)"})]:"";return o?i.createElement("img",{className:s,alt:null==a?void 0:a.alt,src:a.filename}):i.createElement(r.Z,{className:s,alt:null==a?void 0:a.alt,fluid:l,placeholderStyle:{filter:"blur(1rem)"}})}},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=c801a55f9f006608ceafa45d7ca2ddad06c6b332-ed31b60cb698f2e28708.js.map