"use strict";(self.webpackChunkandys_man_club=self.webpackChunkandys_man_club||[]).push([[259],{6355:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(5861),a=r(4578),s=r(4687),o=r.n(s),i=r(7294),c=r(5557),u=r(6725),l=r(8688),f=r(6760),h=r(6256),p=r(249),d=r(2798),y=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).state={story:null,cta_referrer:null,background_color:null},e.getCtaReferrer=function(){return(0,d.Z)("cta_referrer")},e.setCtaReferrer=function(t){(0,p.Z)("cta_referrer="+t),e.setState({cta_referrer:t})},e.setBackgroundColor=function(t){e.setState({background_color:t})},e}(0,a.Z)(e,t);var r=e.prototype;return r.getInitialStory=function(){var t=(0,n.Z)(o().mark((function t(){var e,r,n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams(window.location.search),r=e.get("path"),t.next=4,l.Z.get("cdn/stories/"+r,{version:"draft"});case 4:return n=t.sent,a=n.data.story,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r.componentDidMount=function(){var t=(0,n.Z)(o().mark((function t(){var e,r=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getInitialStory();case 2:(e=t.sent).content&&this.setState({story:e}),setTimeout((function(){return l.Z.initEditor(r)}),200),this.getCtaReferrer()&&this.setCtaReferrer(this.getCtaReferrer());case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r.render=function(){return null===this.state.story?i.createElement("div",null,"Loading"):i.createElement(f.z.Provider,{value:{currentPage:this.state.story.uuid,location:this.props.location,name:this.state.story.name,first_published_at:this.state.story.first_published_at,content:this.state.story.content,tag_list:this.state.story.tag_list,setCtaReferrer:this.setCtaReferrer,ctaReferrer:this.state.cta_referrer,background_color:this.state.background_color,setBackgroundColor:this.setBackgroundColor}},i.createElement(u.Z,{location:this.props.location,isEditor:!0},"news_views"===this.state.story.content.component&&i.createElement(h.Z,null),i.createElement(c.Z,{blok:this.state.story.content})))},e}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-editor-js-94a07600db5219bc7755.js.map