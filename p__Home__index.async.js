"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{96117:function(ze,w,n){n.r(w),n.d(w,{default:function(){return Pe}});var Q=n(56690),j=n.n(Q),X=n(89728),y=n.n(X),J=n(61655),b=n.n(J),$=n(26389),S=n.n($),g=n(62435),I=n(80840),q=n(42122),t=n.n(q),_=n(70215),V=n.n(_),ee=n(66115),z=n.n(ee),te=n(38416),F=n.n(te),O=n(84289),ae=n(43033),e=n(86074),ne=["dataSource","isMobile"],re=function(u){b()(r,u);var o=S()(r);function r(c){var a;return j()(this,r),a=o.call(this,c),F()(z()(a),"phoneClick",function(){var s=!a.state.phoneOpen;a.setState({phoneOpen:s})}),a.state={phoneOpen:!1},a}return y()(r,[{key:"render",value:function(){var a=this,s=this.props,i=s.dataSource,d=s.isMobile,h=V()(s,ne),l=this.state.phoneOpen,v=i.LinkMenu,x=v.children,f=Object.keys(x).map(function(M,W){var m=x[M],p=ae.rU,D={};return m.to&&m.to.match(/\//g)&&(D.href=m.to,p="a",delete m.to),g.createElement(p,t()(t()(t()({},m),D),{},{key:W.toString()}),x[M].children)}),C=l===void 0?300:null;return(0,e.jsx)(O.ZP,t()(t()(t()({component:"header",animation:{opacity:0,type:"from"}},i.wrapper),h),{},{children:(0,e.jsxs)("div",t()(t()({},i.page),{},{className:"".concat(i.page.className).concat(l?" open":""),children:[(0,e.jsx)(O.ZP,t()(t()({animation:{x:-30,type:"from",ease:"easeOutQuad"}},i.logo),{},{children:(0,e.jsx)("img",{width:"100%",src:i.logo.children,alt:"img"})})),d&&(0,e.jsxs)("div",t()(t()({},i.mobileMenu),{},{onClick:function(){a.phoneClick()},children:[(0,e.jsx)("em",{}),(0,e.jsx)("em",{}),(0,e.jsx)("em",{})]})),(0,e.jsx)(O.ZP,t()(t()({},v),{},{animation:d?{height:0,duration:300,onComplete:function(W){a.state.phoneOpen&&(W.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:C,reverse:!!l,children:f}))]}))}))}}]),r}(g.Component),se=re,ie=n(13012),N=n.n(ie),E=n(11889),P=n(1289),oe=n(72575),Fe=n(83154),ce=["name","texty"],le=function(u){b()(r,u);var o=S()(r);function r(){return j()(this,r),o.apply(this,arguments)}return y()(r,[{key:"render",value:function(){var a=Object.assign({},(N()(this.props),this.props)),s=a.dataSource;delete a.dataSource,delete a.isMobile;var i=s.textWrapper.children.map(function(d){var h=d.name,l=d.texty,v=V()(d,ce);return h.match("button")?(0,e.jsx)(E.Z,t()(t()({type:"primary"},v),{},{children:d.children}),h):(0,e.jsx)("div",t()(t()({},v),{},{children:l?(0,e.jsx)(oe.Z,{type:"mask-bottom",children:d.children}):d.children}),h)});return(0,e.jsx)("div",t()(t()(t()({},a),s.wrapper),{},{children:(0,e.jsx)(P.Z,t()(t()({type:["bottom","top"],delay:200},s.textWrapper),{},{children:i}),"QueueAnim")}))}}]),r}(g.PureComponent),de=le,R=n(71230),A=n(15746),B=n(46889),me=n(3600),k=n.n(me),he=n(18698),ue=n.n(he),pe=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,T=function(o,r){var c=o.name.indexOf("title")===0?"h1":"div";c=o.href?"a":c;var a=typeof o.children=="string"&&o.children.match(pe)?g.createElement("img",{src:o.children,alt:"img"}):o.children;return o.name.indexOf("button")===0&&ue()(o.children)==="object"&&(a=g.createElement(E.Z,t()({},o.children))),g.createElement(c,t()({key:r.toString()},o),a)},Y=n.p+"static/adverse-4.9d0037aa.png",ve=n.p+"static/USV.9c0b3635.png",ke=function(u){b()(r,u);var o=S()(r);function r(){var c;j()(this,r);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return c=o.call.apply(o,[this].concat(s)),F()(z()(c),"getBlockChildren",function(d){return d.map(function(h){var l=Object.assign({},(N()(h),h)),v=l.title,x=l.img,f=l.content;return["title","img","content"].forEach(function(C){return delete l[C]}),(0,e.jsxs)("li",t()(t()({},l),{},{children:[(0,e.jsx)("span",t()(t()({},x),{},{children:(0,e.jsx)("img",{src:x.children,width:"100%",alt:"img"})})),(0,e.jsx)("h2",t()(t()({},v),{},{children:v.children})),(0,e.jsx)("div",t()(t()({},f),{},{children:f.children}))]}),l.name)})}),c}return y()(r,[{key:"render",value:function(){var a=Object.assign({},(N()(this.props),this.props)),s=a.dataSource,i=a.isMobile;delete a.dataSource,delete a.isMobile;var d=this.getBlockChildren(s.block.children),h=i?"bottom":"left",l=i?{y:30,opacity:0,delay:600,type:"from",ease:"easeOutQuad"}:{x:30,opacity:0,type:"from",ease:"easeOutQuad"};return(0,e.jsx)("div",t()(t()(t()({},a),s.wrapper),{},{children:(0,e.jsxs)(k(),t()(t()({},s.OverPack),{},{component:R.Z,children:[(0,e.jsxs)(P.Z,t()(t()({type:h,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},s.textWrapper),{},{component:A.Z,children:[(0,e.jsx)("div",t()(t()({},s.titleWrapper),{},{children:s.titleWrapper.children.map(T)}),"title"),(0,e.jsx)(P.Z,t()(t()({component:"ul",type:h,ease:"easeOutQuad"},s.block),{},{children:d}),"ul")]}),"text"),(0,e.jsx)(O.ZP,t()(t()({animation:l,resetStyle:!0},s.img),{},{component:A.Z,children:(0,e.jsx)(B.Z,{src:Y})}),"img")]}))}))}}]),r}(g.Component),He=null,Le=n(61254),H=n(32273),ge=n(81393),Z=n(27049),L=n(95507),we=n(45098),xe=n.p+"static/WaterScenes-network.d0f3e674.png",Ie={wrapper:{className:"home-page-wrapper content6-wrapper"},OverPack:{className:"home-page content6"},textWrapper:{className:"content6-text",xs:24,md:8},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u8682\u8681\u91D1\u878D\u4E91\u63D0\u4F9B\u4E13\u4E1A\u7684\u670D\u52A1",className:"title-h1"},{name:"content",className:"title-content",children:"\u57FA\u4E8E\u963F\u91CC\u4E91\u8BA1\u7B97\u5F3A\u5927\u7684\u57FA\u7840\u8D44\u6E90"}]},img:{children:"https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png",className:"content6-img",xs:24,md:16},block:{children:[{name:"block0",img:{children:"https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",className:"content6-icon"},title:{className:"content6-title",children:"\u6280\u672F"},content:{className:"content6-content",children:"\u4E30\u5BCC\u7684\u6280\u672F\u7EC4\u4EF6\uFF0C\u7B80\u5355\u7EC4\u88C5\u5373\u53EF\u5FEB\u901F\u642D\u5EFA\u91D1\u878D\u7EA7\u5E94\u7528\uFF0C\u4E30\u5BCC\u7684\u6280\u672F\u7EC4\u4EF6\uFF0C\u7B80\u5355\u7EC4\u88C5\u5373\u53EF\u5FEB\u901F\u642D\u5EFA\u91D1\u878D\u7EA7\u5E94\u7528\u3002"}},{name:"block1",img:{className:"content6-icon",children:"https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"},title:{className:"content6-title",children:"\u878D\u5408"},content:{className:"content6-content",children:"\u89E3\u653E\u4E1A\u52A1\u53CA\u6280\u672F\u751F\u4EA7\u529B\uFF0C\u63A8\u52A8\u91D1\u878D\u670D\u52A1\u5E95\u5C42\u521B\u65B0\uFF0C\u63A8\u52A8\u91D1\u878D\u670D\u52A1\u5E95\u5C42\u521B\u65B0\u3002\u89E3\u653E\u4E1A\u52A1\u53CA\u6280\u672F\u751F\u4EA7\u529B\uFF0C\u63A8\u52A8\u91D1\u878D\u670D\u52A1\u5E95\u5C42\u521B\u65B0\u3002"}},{name:"block2",img:{className:"content6-icon",children:"https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"},title:{className:"content6-title",children:"\u5F00\u53D1"},content:{className:"content6-content",children:"\u7B26\u5408\u91D1\u878D\u53CA\u8981\u6C42\u7684\u5B89\u5168\u53EF\u9760\u3001\u9AD8\u53EF\u7528\u3001\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u80FD\u529B\uFF0C\u7B26\u5408\u91D1\u878D\u53CA\u8981\u6C42\u7684\u5B89\u5168\u53EF\u9760\u3001\u9AD8\u53EF\u7528\u3001\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u80FD\u529B\u3002"}}]}},fe=function(u){b()(r,u);var o=S()(r);function r(){var c;j()(this,r);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return c=o.call.apply(o,[this].concat(s)),F()(z()(c),"getBlockChildren",function(d){return d.map(function(h){var l=Object.assign({},(N()(h),h)),v=l.title,x=l.img,f=l.content;return["title","img","content"].forEach(function(C){return delete l[C]}),(0,e.jsxs)("li",t()(t()({},l),{},{children:[(0,e.jsx)("span",t()(t()({},x),{},{children:(0,e.jsx)("img",{src:x.children,width:"100%",alt:"img"})})),(0,e.jsx)("h2",t()(t()({},v),{},{children:v.children})),(0,e.jsx)("div",t()(t()({},f),{},{children:f.children}))]}),l.name)})}),c}return y()(r,[{key:"render",value:function(){var a=Object.assign({},(N()(this.props),this.props)),s=a.dataSource;delete a.dataSource,delete a.isMobile;var i=[{name:"Color, Texture, Shape",star:1},{name:"Range Measurement",star:5},{name:"Velocity Measurement",star:5},{name:"Lighting Robustness",star:5},{name:"Weather Robustness",star:5},{name:"Classification Ability",star:2},{name:"3D Perception",star:1},{name:"Cost Advantage",star:4}],d={data:i.map(function(m){return t()(t()({},m),{},{star:m.star})}),xField:"name",yField:"star",appendPadding:[0,20,0,20],color:"#B2934A",legend:!0,meta:{star:{alias:"Radar Ability",min:0,nice:!0,formatter:function(p){return p}}},xAxis:{tickLine:null},yAxis:{label:!1,grid:{alternateColor:"rgba(0, 0, 0, 0.04)"}},point:{size:2},area:{}},h=[{name:"Color, Texture, Shape",star:5},{name:"Range Measurement",star:2},{name:"Velocity Measurement",star:2},{name:"Lighting Robustness",star:3},{name:"Weather Robustness",star:3},{name:"Classification Ability",star:5},{name:"3D Perception",star:3},{name:"Cost Advantage",star:5}],l={data:h.map(function(m){return t()(t()({},m),{},{star:m.star})}),xField:"name",yField:"star",appendPadding:[0,20,0,20],color:"#B66A6A",meta:{star:{alias:"Camera Ability",min:0,nice:!0,formatter:function(p){return p}}},xAxis:{tickLine:null},yAxis:{label:!1,grid:{alternateColor:"rgba(0, 0, 0, 0.04)"}},point:{size:2},area:{}},v=[{name:"Color, Texture, Shape",star:5},{name:"Range Measurement",star:5},{name:"Velocity Measurement",star:5},{name:"Lighting Robustness",star:5},{name:"Weather Robustness",star:5},{name:"Classification Ability",star:5},{name:"3D Perception",star:3},{name:"Cost Advantage",star:4}],x={data:v.map(function(m){return t()(t()({},m),{},{star:m.star})}),xField:"name",yField:"star",color:"#589D9D",meta:{star:{alias:"Fusion Ability",min:0,nice:!0,formatter:function(p){return p}}},xAxis:{tickLine:null},yAxis:{label:!1,grid:{alternateColor:"rgba(0, 0, 0, 0.04)"}},point:{size:2},area:{}},f=function(p,D,Re,Be){console.log("params",p,D,Re,Be)},C=[{title:"Sensor",dataIndex:"name",key:"name"},{title:"Detail",dataIndex:"detail",key:"detail",render:function(p){return(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:p}})}}],M=[{key:"1",name:"Radar",detail:"Oculii EAGLE 77GHz Point Cloud Radar, 200m detection range, 0.43m range resolution, 0.27m/s velocity resolution, < 1&deg; azimuth angle resolution, < 1&deg; elevation angle resolution, 110&deg; HFOV, 45&deg; VFOV, 15Hz capture frequency"},{key:"2",name:"Camera",detail:"SONY IMX317 CMOS sensor, RGB color, 1920 x 1080 resolution, 100&deg; HFOV, 60&deg; VFOV, 30Hz capture frequency"},{key:"3",name:"GPS",detail:"latitude, longitude and altitude coordinates, < 2.5m position accu- racy, < 0.1m/s velocity accuracy, 10Hz update rate"},{key:"4",name:"IMU",detail:"l0-axis inertial navigation ARHS (3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer and a barometer), 0.5&deg; heading accuracy, 0.1&deg; roll/pitch accuracy, 50Hz update rate"}],W=[{title:"WaterScenes, the first multi-task 4D radar-camera fusion dataset on water surfaces, which offers data from multiple sensors, including a 4D radar, monocular camera, GPS, and IMU. It can be applied in multiple tasks, such as <b>object detection</b>, <b>instance segmentation</b>, <b>semantic segmentation</b>, <b>free-space segmentation</b>, and <b>waterline segmentation</b>."},{title:"Our dataset covers diverse <b>time conditions</b> (daytime, nightfall, night), <b>lighting conditions</b> (normal, dim, strong), <b>weather conditions</b> (sunny, overcast, rainy, snowy) and <b>waterway conditions</b> (river, lake, canal, moat). An information list is also offered for retrieving specific data for experiments under different conditions."},{title:"We provide <b>2D box-level</b> and <b>pixel-level</b> annotations for camera images, and <b>3D point-level</b> annotations for radar point clouds. We also We provide a <b>toolkit</b> for radar point clouds that includes: pre-processing, labeling, projection and visualization, assisting researchers in processing and analyzing our dataset."},{title:"We build corresponding benchmarks and evaluate popular algorithms for object detection, point cloud segmentation, image segmentation, and panoptic perception. Experiments demonstrate the advantages of radar perception on water surfaces, particularly in adverse lighting and weather conditions."}];return(0,e.jsxs)("div",{class:"home-page-wrapper content6-wrapper",children:[(0,e.jsxs)("div",{class:"ant-row home-page content6",id:"WaterScenes",children:[(0,e.jsx)(Z.Z,{orientation:"center",children:(0,e.jsx)("h1",{name:"title",className:"title-h1",children:"WaterScenes Dataset"})}),(0,e.jsx)("div",{class:"ant-col content6-text ant-col-xs-24 ant-col-md-24",children:(0,e.jsx)("div",{className:"title-wrapper",children:(0,e.jsx)("div",{className:"chart",children:(0,e.jsx)(B.Z,{src:Y})})})}),(0,e.jsx)("div",{class:"ant-col content6-img ant-col-xs-24 ant-col-md-24",style:{padding:"10px 0 0 0"},children:(0,e.jsx)(L.ZP,{header:(0,e.jsx)("h2",{children:"Contributions:"}),itemLayout:"horizontal",bordered:!0,dataSource:W,renderItem:function(p,D){return(0,e.jsx)(L.ZP.Item,{children:(0,e.jsx)(L.ZP.Item.Meta,{title:(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:p.title}})})})}})})]}),(0,e.jsxs)("div",{class:"ant-row home-page content6",id:"USV",children:[(0,e.jsx)(Z.Z,{orientation:"center",children:(0,e.jsx)("h1",{name:"title",className:"title-h1",children:"USV Setup"})}),(0,e.jsx)("div",{class:"ant-col content6-text ant-col-xs-24 ant-col-md-12",children:(0,e.jsx)(ge.Z,{pagination:{pageSize:10,hideOnSinglePage:!0},columns:C,dataSource:M})}),(0,e.jsx)("div",{class:"ant-col content6-text ant-col-xs-24 ant-col-md-11 ant-col-md-2"}),(0,e.jsx)("div",{class:"ant-col content6-text ant-col-xs-24 ant-col-md-11 ant-col-md-10",children:(0,e.jsx)(B.Z,{src:ve})})]}),(0,e.jsxs)("div",{class:"ant-row home-page content6",id:"radar-camera-fusion",children:[(0,e.jsx)(Z.Z,{orientation:"center",children:(0,e.jsx)("h1",{name:"title",className:"title-h1",children:"Radar-Camera Fusion"})}),(0,e.jsx)(Z.Z,{orientation:"left",plain:!0,children:(0,e.jsx)("h2",{children:"Characteristic of Radar and Camera Sensors"})}),(0,e.jsx)("div",{class:"ant-col content6-text ant-col-xs-24 ant-col-md-10",children:(0,e.jsxs)(R.Z,{children:[(0,e.jsx)(A.Z,{span:24,children:(0,e.jsx)(H.Z,t()({},d))}),(0,e.jsx)(A.Z,{span:24,children:(0,e.jsx)(H.Z,t()({},l))})]})}),(0,e.jsx)("div",{class:"ant-col content6-text ant-col-xs-24 ant-col-md-14",children:(0,e.jsx)(R.Z,{align:"start",children:(0,e.jsx)(A.Z,{span:24,children:(0,e.jsx)(H.Z,t()({},x))})})}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{class:"ant-col content6-text ant-col-xs-24 ant-col-md-24",children:[(0,e.jsx)(Z.Z,{orientation:"left",plain:!0,children:(0,e.jsx)("h2",{children:"4D Radar-Camera Fusion on Water Surfaces"})}),(0,e.jsx)(R.Z,{align:"start",children:(0,e.jsx)(A.Z,{span:24,children:(0,e.jsx)(B.Z,{src:xe})})})]})]}),(0,e.jsxs)("div",{class:"ant-row home-page content6",id:"Citation",children:[(0,e.jsx)("h1",{name:"title",class:"title-h1",children:"Citation"}),(0,e.jsx)("div",{style:{backgroundColor:"#f3f6fa",padding:"10px"},children:(0,e.jsxs)("code",{children:["@misc{yao2023waterscenes,",(0,e.jsx)("br",{}),"\xA0\xA0\xA0\xA0","title={WaterScenes: A Multi-Task 4D Radar-Camera Fusion Dataset and Benchmark for Autonomous Driving on Water Surfaces}, ",(0,e.jsx)("br",{}),"\xA0\xA0\xA0\xA0","author={Shanliang Yao and Runwei Guan and Zhaodong Wu and Yi Ni and Zixian Zhang and Zile Huang and Xiaohui Zhu and Yutao Yue and Yong Yue and Hyungjoon Seo and Ka Lok Man},",(0,e.jsx)("br",{}),"\xA0\xA0\xA0\xA0","year={2023},",(0,e.jsx)("br",{}),"\xA0\xA0\xA0\xA0","eprint={2307.06505},",(0,e.jsx)("br",{}),"\xA0\xA0\xA0\xA0","archivePrefix={arXiv},",(0,e.jsx)("br",{}),"\xA0\xA0\xA0\xA0","primaryClass={cs.CV}",(0,e.jsx)("br",{}),"}"]})})]})]})}}]),r}(g.PureComponent),je=fe,ye=function(u){b()(r,u);var o=S()(r);function r(){return j()(this,r),o.apply(this,arguments)}return y()(r,[{key:"render",value:function(){var a=Object.assign({},(N()(this.props),this.props)),s=a.dataSource;return delete a.dataSource,delete a.isMobile,(0,e.jsx)(k(),t()(t()(t()({},a),s.OverPack),{},{children:(0,e.jsx)(P.Z,t()(t()({type:"bottom",leaveReverse:!0,delay:[0,100]},s.titleWrapper),{},{children:s.titleWrapper.children.map(T)}),"page")}))}}]),r}(g.PureComponent),be=ye,Se=function(u){b()(r,u);var o=S()(r);function r(){return j()(this,r),o.apply(this,arguments)}return y()(r,[{key:"render",value:function(){var a=a||[];(function(){var d=document.createElement("script");d.src="https://hm.baidu.com/hm.js?ccbb089c76eb88b55f087dfb0b7ecc03";var h=document.getElementsByTagName("script")[0];h.parentNode.insertBefore(d,h)})();var s=Object.assign({},(N()(this.props),this.props)),i=s.dataSource;return delete s.dataSource,delete s.isMobile,(0,e.jsx)("div",t()(t()(t()({},s),i.wrapper),{},{children:(0,e.jsx)(k(),t()(t()({},i.OverPack),{},{children:(0,e.jsx)(O.ZP,t()(t()({animation:{y:"+=30",opacity:0,type:"from"}},i.copyright),{},{children:i.copyright.children}),"footer")}))}))}}]),r}(g.PureComponent),Ne=Se,Ce=n.p+"static/logo.a8ce2897.png",Ae={isScrollLink:!0,wrapper:{className:"header2 home-page-wrapper jrhtw9ph4a-editor_css"},page:{className:"home-page"},logo:{className:"header2-logo",children:Ce},LinkMenu:{className:"header2-menu",children:[{name:"linkNav",to:"WaterScenes",children:"WaterScenes Dataset",className:"menu-item"},{name:"linkNav",to:"USV",children:"USV Setup",className:"menu-item"},{name:"linkNav",to:"radar-camera-fusion",children:"Radar-Camera Fusion",className:"menu-item"},{name:"linkNav",to:"Citation",children:"Citation",className:"menu-item"}]},mobileMenu:{className:"header2-mobile-menu"},Menu:{children:[{name:"Banner3_0",to:"Banner3_0",children:"\u9996\u9875",className:"active menu-item"},{name:"Content8_0",to:"Content8_0",children:"\u7279\u9080\u5609\u5BBE",className:"menu-item"},{name:"Content9_0",to:"Content9_0",children:"\u4F1A\u8BAE\u65E5\u7A0B",className:"menu-item"},{name:"Content10_0",to:"Content10_0",children:"\u5927\u4F1A\u5730\u5740",className:"menu-item"},{name:"Content11_0",to:"Content11_0",children:"\u5C55\u53F0\u5C55\u793A",className:"menu-item"},{name:"Content12_0",to:"Content12_0",children:"\u7279\u522B\u9E23\u8C22",className:"menu-item"}]}},Me={wrapper:{className:"banner3"},textWrapper:{className:"banner3-text-wrapper",children:[{name:"slogan",className:"banner3-slogan",children:"WaterScenes: A Multi-Task 4D Radar-Camera Fusion Dataset for Autonomous Driving on Water Surfaces"},{name:"nameEn",className:"banner3-name-en",children:"Shanliang Yao, Runwei Guan, Zhaodong Wu, Yi Ni, Zile Huang, Zixian Zhang, Yong Yue"},{name:"nameEn",className:"banner3-name-en",children:"Weiping Ding, Eng Gee Lim, Hyungjoon Seo, Ka Lok Man, Xiaohui Zhu, Yutao Yue"},{name:"time",className:"banner3-time",children:"University of Liverpool, Xi\u2018an Jiaotong-Liverpool University, Nantong University, Institute of Deep Perception Technology, JITRI"},{name:"button",className:"banner3-button",children:"GitHub: https://github.com/WaterScenes/WaterScenes",type:"primary",href:"https://github.com/WaterScenes/WaterScenes",target:"_blank"}]}},Oe={OverPack:{className:"home-page-wrapper content13-wrapper",playScale:.3},titleWrapper:{className:"title-wrapper",children:[]}},Ze={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.01},copyright:{className:"copyright",children:(0,e.jsxs)("span",{children:["\xA92023 ",(0,e.jsx)("a",{href:"https://github.com/WaterScenes",children:"WaterScenes"})," All Rights Reserved"]})}},Ve={wrapper:{className:"home-page-wrapper content6-wrapper"},OverPack:{className:"home-page content6"},textWrapper:{className:"content6-text",xs:24,md:8},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u8682\u8681\u91D1\u878D\u4E91\u63D0\u4F9B\u4E13\u4E1A\u7684\u670D\u52A1",className:"title-h1"},{name:"content",className:"title-content",children:"\u57FA\u4E8E\u963F\u91CC\u4E91\u8BA1\u7B97\u5F3A\u5927\u7684\u57FA\u7840\u8D44\u6E90"}]},img:{children:"https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png",className:"content6-img",xs:24,md:16},block:{children:[{name:"block0",img:{children:"https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",className:"content6-icon"},title:{className:"content6-title",children:"\u6280\u672F"},content:{className:"content6-content",children:"\u4E30\u5BCC\u7684\u6280\u672F\u7EC4\u4EF6\uFF0C\u7B80\u5355\u7EC4\u88C5\u5373\u53EF\u5FEB\u901F\u642D\u5EFA\u91D1\u878D\u7EA7\u5E94\u7528\uFF0C\u4E30\u5BCC\u7684\u6280\u672F\u7EC4\u4EF6\uFF0C\u7B80\u5355\u7EC4\u88C5\u5373\u53EF\u5FEB\u901F\u642D\u5EFA\u91D1\u878D\u7EA7\u5E94\u7528\u3002"}},{name:"block1",img:{className:"content6-icon",children:"https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"},title:{className:"content6-title",children:"\u878D\u5408"},content:{className:"content6-content",children:"\u89E3\u653E\u4E1A\u52A1\u53CA\u6280\u672F\u751F\u4EA7\u529B\uFF0C\u63A8\u52A8\u91D1\u878D\u670D\u52A1\u5E95\u5C42\u521B\u65B0\uFF0C\u63A8\u52A8\u91D1\u878D\u670D\u52A1\u5E95\u5C42\u521B\u65B0\u3002\u89E3\u653E\u4E1A\u52A1\u53CA\u6280\u672F\u751F\u4EA7\u529B\uFF0C\u63A8\u52A8\u91D1\u878D\u670D\u52A1\u5E95\u5C42\u521B\u65B0\u3002"}},{name:"block2",img:{className:"content6-icon",children:"https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"},title:{className:"content6-title",children:"\u5F00\u53D1"},content:{className:"content6-content",children:"\u7B26\u5408\u91D1\u878D\u53CA\u8981\u6C42\u7684\u5B89\u5168\u53EF\u9760\u3001\u9AD8\u53EF\u7528\u3001\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u80FD\u529B\uFF0C\u7B26\u5408\u91D1\u878D\u53CA\u8981\u6C42\u7684\u5B89\u5168\u53EF\u9760\u3001\u9AD8\u53EF\u7528\u3001\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u80FD\u529B\u3002"}}]}},We={wrapper:{className:"home-page-wrapper"},OverPack:{className:"home-page",playScale:.05},copyright:{className:"copyright",children:(0,e.jsxs)("span",{children:["\xA92018 ",(0,e.jsx)("a",{href:"https://motion.ant.design",children:"Ant Motion"})," All Rights Reserved"]})}},U;(0,I.ac)(function(u){U=u});var De=typeof window!="undefined"?window:{},G=De.location,K=G===void 0?{}:G,Pe=function(u){b()(r,u);var o=S()(r);function r(c){var a;return j()(this,r),a=o.call(this,c),a.state={isMobile:U,show:!K.port},a}return y()(r,[{key:"componentDidMount",value:function(){var a=this;(0,I.ac)(function(s){a.setState({isMobile:!!s})}),K.port&&setTimeout(function(){a.setState({show:!0})},500)}},{key:"render",value:function(){var a=this,s=[(0,e.jsx)(se,{id:"Nav0_0",dataSource:Ae,isMobile:this.state.isMobile},"Nav0_0"),(0,e.jsx)(de,{id:"Banner3_0",dataSource:Me,isMobile:this.state.isMobile},"Banner3_0"),(0,e.jsx)(je,{id:"Dataset0_0",dataSource:We,isMobile:this.state.isMobile},"Dataset0_0"),(0,e.jsx)(be,{id:"Content13_0",dataSource:Oe,isMobile:this.state.isMobile},"Content13_0"),(0,e.jsx)(Ne,{id:"Footer0_0",dataSource:Ze,isMobile:this.state.isMobile},"Footer0_0")];return(0,e.jsx)("div",{className:"templates-wrapper",ref:function(d){a.dom=d},children:this.state.show&&s})}}]),r}(g.Component)}}]);
