(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5444:function(n,e,t){n.exports=t(5686)},5449:function(n,e,t){},5686:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(26),c=t.n(o),i=(t(5449),t(2)),u=t(1),l=t(5689),s=t(5691),f=t(5690),p=t(28),b=t(29),d=t(32),m=t(30),h=t(31),x=t(9);function g(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(n){return n},a=t?n:[],o=e.trim().toLowerCase().replace("_"," ");return 0===o.length?a:n.filter(function(n){return r(n).toLowerCase().includes(o)})}var v=t(15),j=t.n(v),O=t(130),E=t(47),y=t(24),w=t(64),k=t(131),C=t.n(k),z="https://m.bulbapedia.bulbagarden.net/w/api.php",S={origin:"*",action:"parse",format:"json",redirects:1};function I(n){return L.apply(this,arguments)}function L(){return(L=Object(y.a)(j.a.mark(function n(e){var t,r;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_(Object(w.a)({},e,{prop:"wikitext"}));case 2:return t=n.sent,r=t.wikitext,n.next=6,C()(r["*"]);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}function _(n){return P.apply(this,arguments)}function P(){return(P=Object(y.a)(j.a.mark(function n(e){var t,r,a;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=A(e),r="".concat(z,"?").concat(t),n.next=4,fetch(r).then(function(n){return n.json()});case 4:return a=n.sent,n.abrupt("return",a.parse);case 6:case"end":return n.stop()}},n)}))).apply(this,arguments)}function A(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function e(n){return Object.keys(n).map(function(e){return"".concat(e,"=").concat(n[e])})}return[].concat(Object(E.a)(e(S)),Object(E.a)(e(n))).join("&")}var B="List_of_Pok\xe9mon_by_Kanto_Pok\xe9dex_number";function F(){return(F=Object(y.a)(j.a.mark(function n(){var e,t,r;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I({page:B});case 2:return t=n.sent,r=(e=[]).concat.apply(e,Object(E.a)(t.sections().filter(function(n){return 2===n.depth}).map(function(n){return t.sections(n._title).json().templates.filter(function(n){return"rdex"===n.template}).map(function(n){var e=Object(O.a)(n.list),t=e[0],r=e[1],a=e[2],o=(e[3],e.slice(4));return{kantoDex:t,isAlolan:"A"===r.slice(-1),name:a,types:o}})}))),n.abrupt("return",r.sort(function(n,e){return n.kantoDex-e.kantoDex}));case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}function R(){return(R=Object(y.a)(j.a.mark(function n(e){var t,r,a,o,c,i;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I({page:e});case 2:return t=n.sent,r=-1!==e.indexOf("Alolan_"),a=T(t,e,r),o=a.types,c=a.learnset,i=D(t,r),n.abrupt("return",{types:o,learnset:c,typeEffectiveness:i});case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}function T(n,e,t){var r=[],a=[],o=n.sections("").json().infoboxes[0],c=o.type1,i=o.type2,u=o.form2type1,l=o.form2type2;o.lv100exp,o.ability1;return t?(e=e.replace("_"," "),a=n.sections("=".concat(e)).json().templates,r=l?[u.text,l.text]:[u.text]):((a=n.sections("By leveling up").json().templates)||(a=n.sections("=".concat(e)).json().templates),r=i?[c.text,i.text]:[c.text]),{types:r,learnset:a.filter(function(n){return"learnlist/level7"===n.template})}}function D(n,e){var t=function(n,e){var t=n.sections("Type effectiveness").json().templates,r=n.sections("Type effectiveness").index();for(;!t;){r++;var a=n.sections(r);e&&-1===a.title().indexOf("Alolan ")||(t=a.json().templates)}return t[0]}(n,e),r={weak:[],resistant:[],immune:[],normal:[]};return Object.keys(t).forEach(function(n){var e=t[n];if(!(isNaN(e)||e<25&&"0"!==e)){var a,o=e/100;1===o?a="normal":0===o?a="immune":o>1?a="weak":o<1&&(a="resistant"),r[a].push([n,o])}}),r}function N(n){return W.apply(this,arguments)}function W(){return(W=Object(y.a)(j.a.mark(function n(e){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I({page:"".concat(e," (move)")});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n)}))).apply(this,arguments)}function K(){return(K=Object(y.a)(j.a.mark(function n(e){var t,r,a,o;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N(e);case 2:return t=n.sent,r=t.sections("Description").templates(),a=r[r.length-2],o=a.list[1],n.abrupt("return",o);case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}var V=t(4),q=t.n(V);function J(){var n=Object(i.a)(["\n  position: relative;\n  ",";\n  background-color: ",";\n  border: ",';\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    height: 20%;\n    background: ',';\n  }\n  &:after {\n    content: "";\n    position: absolute;\n    width: 60%;\n    height: 60%;\n    background-color: ',";\n    border-radius: 50%;\n  }\n"]);return J=function(){return n},n}var M=u.b.div(J(),function(n){return n.size&&"\n    width: ".concat(.5*n.size,"px;\n    height: ").concat(.5*n.size,"px;\n  ")},function(n){return n.background},function(n){return"".concat(.25*n.size,"px solid ").concat(n.color)},function(n){return n.background},function(n){return n.color});M.propTypes={size:q.a.number.isRequired,color:q.a.string,background:q.a.string},M.defaultProps={color:"gray",background:"white"};var X=M,H="\n  repeating-linear-gradient(90deg,\n    transparent 0 10px,\n    rgba(0, 0, 121, 0.03) 12px 14px,\n    transparent 16px 26px\n  ) fixed,\n  repeating-linear-gradient(0deg,\n    transparent 0 10px,\n    rgba(0, 0, 121, 0.03) 12px 14px,\n    transparent 16px 26px\n  ) fixed,\n  radial-gradient(circle at 50% 0, #2cffff, #69fffe 35%, #008dee)\n  fixed\n";function Y(){var n=Object(i.a)(["\n  width: 100%;\n"]);return Y=function(){return n},n}function $(){var n=Object(i.a)(["\n  margin: ","px auto;\n  animation: 1s "," ease-in-out infinite;\n"]);return $=function(){return n},n}function G(){var n=Object(i.a)(["\n  0% { transform: rotate(0deg) }\n  10% { transform: rotate(22deg) }\n  30% { transform: rotate(-22deg) }\n  40% { transform: rotate(0deg) }\n"]);return G=function(){return n},n}var Q=Object(u.c)(G()),U=Object(u.b)(X)($(),function(n){return n.size/4},Q),Z=u.b.div(Y());function nn(n){return a.a.createElement(Z,null,a.a.createElement(U,n))}function en(){var n=Object(i.a)(["\n  margin: 16px;\n"]);return en=function(){return n},n}nn.defaultProps={size:128,background:H};var tn=u.b.div(en()),rn=t(16),an=t(46),on="calc(2 * (".concat("375px"," + 2 * ").concat("32px","))"),cn="(100vw - ".concat(on,") / 2"),un="calc(".concat(cn,")"),ln="calc(".concat(cn," + ").concat("32px"," + ").concat("4px",")");function sn(){var n=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return sn=function(){return n},n}function fn(){var n=Object(i.a)(["\n  background-color: #4eedfa;\n  padding: 16px;\n  font-size: 20px;\n"]);return fn=function(){return n},n}function pn(){var n=Object(i.a)(["\n  @media only screen and (min-width: ",") {\n    max-width: ",";\n    && {\n      top: ",";\n      right: ",";\n      & > div {\n        box-shadow: inset 1px 2px 3px 1px grey;\n      }\n    }\n  }\n"]);return pn=function(){return n},n}function bn(){var n=Object(i.a)(["\n  height: 104px;\n"]);return bn=function(){return n},n}function dn(){var n=Object(i.a)(["\n  && {\n    color: black;\n    font-weight: bold;\n  }\n"]);return dn=function(){return n},n}function mn(n){var e=n.left,t=n.children,r=n.right,o=n.onClickBack,c=e||(o?a.a.createElement(On,{onClick:o}):null),i="string"===typeof t?a.a.createElement(rn.h,{variant:"h2",color:"inherit"},t):t;return a.a.createElement(hn,null,a.a.createElement(xn,null),a.a.createElement(gn,{color:"inherit"},a.a.createElement(vn,null,c,a.a.createElement(jn,null,i),r)))}var hn=u.b.div(dn()),xn=u.b.div(bn()),gn=Object(u.b)(rn.a)(pn(),on,"375px","20px",ln),vn=Object(u.b)(rn.g)(fn()),jn=u.b.div(sn());function On(n){return a.a.createElement(rn.b,Object.assign({color:"inherit","aria-label":"Back"},n),a.a.createElement(an.a,null))}var En=t(40),yn=t(33),wn=function(n){function e(n){var t;return Object(p.a)(this,e),(t=Object(d.a)(this,Object(m.a)(e).call(this,n))).state=Object(yn.a)({},n.name,n.defaultValue),t.inputRef={focus:function(){}},t.onChange=t.onChange.bind(Object(x.a)(Object(x.a)(t))),t.onKeyDown=t.onKeyDown.bind(Object(x.a)(Object(x.a)(t))),t.focus=t.focus.bind(Object(x.a)(Object(x.a)(t))),t.clear=t.clear.bind(Object(x.a)(Object(x.a)(t))),t}return Object(h.a)(e,n),Object(b.a)(e,[{key:"onChange",value:function(n){var e=n.target,t=e.name,r=e.value;this.setState(Object(yn.a)({},t,r)),this.props.onChange(r)}},{key:"onKeyDown",value:function(n){13===n.keyCode&&this.props.onSubmit(this.state[this.props.name])}},{key:"focus",value:function(){this.inputRef.focus()}},{key:"clear",value:function(){var n=this.props,e=n.name,t=n.onChange,r=n.onClear;this.setState(Object(yn.a)({},e,"")),r?r():t(""),this.focus()}},{key:"render",value:function(){var n=this,e=this.props,t=(e.defaultValue,e.onClear,Object(En.a)(e,["defaultValue","onClear"]));return a.a.createElement(rn.c,Object.assign({inputRef:function(e){return n.inputRef=e},value:this.state[this.props.name],autoComplete:"off",onKeyDown:this.onKeyDown},t,{onChange:this.onChange}))}}]),e}(a.a.Component);wn.defaultProps={onSubmit:function(){},onChange:function(){},defaultValue:""};var kn=t(135),Cn=t.n(kn),zn=t(88);function Sn(){var n=Object(i.a)(["\n  .react-autosuggest__suggestions-list {\n    list-style: none;\n    padding: 0;\n  }\n"]);return Sn=function(){return n},n}function In(n){var e=n.inputRef,t=void 0===e?function(){}:e,r=n.ref,o=Object(En.a)(n,["inputRef","ref"]);return a.a.createElement(rn.c,Object.assign({fullWidth:!0,inputRef:function(n){r(n),t(n)}},o))}function Ln(n){var e=n.parts,t=n.isHighlighted,r=n.onClick,o=n.text;return a.a.createElement(rn.d,{selected:t,component:"div",onClick:function(){return r(o)}},e.map(function(n,e){return n.highlight?a.a.createElement("span",{key:String(e),style:{fontWeight:500}},n.text):a.a.createElement("strong",{key:String(e),style:{fontWeight:300}},n.text)}))}function _n(n){var e=n.anchorEl,t=n.children,r=n.containerProps;return a.a.createElement(rn.f,{anchorEl:e,open:Boolean(t)},a.a.createElement(Pn,Object.assign({square:!0},r,{style:{listStyleType:"none",width:e?e.clientWidth:null},root:{listStyleType:"none"}}),t))}var Pn=Object(u.b)(rn.e)(Sn());r.Component;function An(){var n=Object(i.a)(["\n  z-index: 1;\n"]);return An=function(){return n},n}function Bn(){var n=Object(i.a)(["\n  flex: 1;\n"]);return Bn=function(){return n},n}function Fn(){var n=Object(i.a)(["\n  display: flex;\n  margin-top: 12px;\n  border-radius: 8px;\n  box-shadow: 0 0 8px 8px rgba(182, 237, 255, 0.24), 0 0 0 2px rgba(32, 129, 255, 0.2);\n  border: solid 1px #b0ebff;\n  ","\n"]);return Fn=function(){return n},n}var Rn=function(n){function e(n){var t;return Object(p.a)(this,e),(t=Object(d.a)(this,Object(m.a)(e).call(this,n))).state={isFocused:!1},t.textInput={},t.onFocus=t.onFocus.bind(Object(x.a)(Object(x.a)(t))),t.onBlur=t.onBlur.bind(Object(x.a)(Object(x.a)(t))),t}return Object(h.a)(e,n),Object(b.a)(e,[{key:"onFocus",value:function(){this.setState({isFocused:!0})}},{key:"onBlur",value:function(){this.setState({isFocused:!1})}},{key:"render",value:function(){var n=this,e=this.state.isFocused;return a.a.createElement(Tn,{isFocused:e},a.a.createElement(rn.b,{"aria-label":"Search",onClick:this.textInput.focus},a.a.createElement(an.c,null)),a.a.createElement(Dn,Object.assign({ref:function(e){return n.textInput=e},name:"searchText",placeholder:"Search\u2026",onFocus:this.onFocus,onBlur:this.onBlur},this.props)),a.a.createElement(Nn,{onClick:this.textInput.clear,"aria-label":"Clear"},a.a.createElement(an.b,null)))}}]),e}(r.Component);Rn.defaultProps={onChange:function(){},defaultValue:""};var Tn=u.b.div(Fn(),function(n){return n.isFocused?"background-color: rgba(255, 255, 255, 0.5);":"background-color: rgba(106, 171, 255, 0.24);"}),Dn=Object(u.b)(wn)(Bn()),Nn=Object(u.b)(rn.b)(An());function Wn(n){return a.a.createElement(tn,null,a.a.createElement(mn,null,"Search Pok\xe9mon name",a.a.createElement(Rn,{onChange:n.onChange,placeholder:"Search by Pokemon..."})),n.searchResultContent)}var Kn=t(58),Vn=t.n(Kn);function qn(){var n=Object(i.a)(["\n  color: white;\n  min-width: 72px;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: ",";\n  font-size: 12px;\n  font-weight: bold;\n  padding: 2px 8px 4px;\n  letter-spacing: -0.3px;\n  border-radius: 5px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n\n  &:not(:first-child) {\n    margin-left: 4px;\n  }\n"]);return qn=function(){return n},n}function Jn(){var n=Object(i.a)(["\n  display: flex;\n  color: white;\n"]);return Jn=function(){return n},n}var Mn=u.b.div(Jn()),Xn=u.b.div(qn(),function(n){return n.color});function Hn(n){switch(n.toLowerCase()){case"normal":return"#aaaa99";case"fire":return"#ff4421";case"fighting":case"fight":return"#bb5644";case"water":return"#3399ff";case"flying":return"#8898ff";case"grass":return"#77cc55";case"poison":return"#aa5599";case"electric":return"#ffcc33";case"ground":return"#ddbb55";case"psychic":return"#ff5599";case"rock":return"#bbaa66";case"ice":return"#66ccff";case"bug":return"#aaba21";case"dragon":return"#7767ed";case"ghost":return"#6766ba";case"steel":return"#aaaabb";case"fairy":return"#ed99ee";default:return"#68A090"}}function Yn(n){var e=n.types;return a.a.createElement(Mn,null,e.map(function(n,e){return a.a.createElement(Xn,{key:e,color:Hn(n)},n)}))}function $n(){var n=Object(i.a)(["\n  color: ",";\n  text-align: left;\n  line-height: 20px;\n  padding-bottom: 8px;\n"]);return $n=function(){return n},n}function Gn(){var n=Object(i.a)(["\n  margin-left: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return Gn=function(){return n},n}function Qn(){var n=Object(i.a)(["\n  max-width: calc(72px / .65);\n  max-height: calc(72px / .65);\n  transform: scale(.65);\n  image-rendering: auto;\n"]);return Qn=function(){return n},n}function Un(){var n=Object(i.a)(["\n  width: 72px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Un=function(){return n},n}function Zn(){var n=Object(i.a)(["\n  display: inline-box;\n"]);return Zn=function(){return n},n}var ne=u.b.div(Zn()),ee=u.b.div(Un()),te=u.b.img(Qn()),re=u.b.div(Gn()),ae=u.b.div($n(),function(n){return n.titleColor||n.theme.color.black});function oe(n,e){var t=n.toLowerCase(),r="normal-sprite";if(e)t+="-alola";else switch(t){case"nidoran\u2642":t="nidoran_m";break;case"nidoran\u2640":t="nidoran_f";break;case"farfetch'd":t="farfetchd";break;case"mr. mime":t="mr._mime";break;case"meltan":case"melmetal":r="lgswitch-sprite"}return"".concat("https://projectpokemon.org/images","/").concat(r,"/").concat(t,".gif")}function ce(n){var e=n.name,t=n.types,r=n.titleColor,o=n.isAlolan;return a.a.createElement(ne,null,a.a.createElement(ee,null,a.a.createElement(te,{src:oe(e,o)})),a.a.createElement(re,null,a.a.createElement(ae,{titleColor:r},e),a.a.createElement(Yn,{types:t})))}function ie(){var n=Object(i.a)(['\n  position: relative;\n  && {\n    background-color: rgba(32, 129, 255, 0.3);\n    box-shadow: 0 0 8px 10px rgba(182, 237, 255, 0.3);\n    border: solid 3px rgba(176, 235, 255, 0.8);\n    :before {\n      content: " ";\n      position: absolute;\n      top: -6px;\n      left: -6px;\n      right: -6px;\n      bottom: -6px;\n      border: 3px solid rgba(32, 129, 255, 0.3);\n      border-radius: 12px 32px;\n    }\n  }\n']);return ie=function(){return n},n}function ue(){var n=Object(i.a)(["\n  border-radius: 9px 29px;\n  justify-content: left;\n"]);return ue=function(){return n},n}var le=u.b.div(ue()),se=Object(u.b)(le)(ie()),fe=le;function pe(){var n=Object(i.a)(["\n  font-size: 20px;\n  margin: 16px 0;\n  padding: 4px 8px;\n"]);return pe=function(){return n},n}var be=Object(u.b)(se)(pe());function de(n){var e=n.listItem,t=e.name,r=e.types,o=e.isAlolan,c=n.onClick;return a.a.createElement(be,{onClick:c},a.a.createElement(ce,{name:t,types:r,isAlolan:o,titleColor:"white"}))}function me(){var n=Object(i.a)(["\n  margin-top: 24px;\n"]);return me=function(){return n},n}function he(n){return a.a.createElement(r.Fragment,null,n.searchText&&a.a.createElement(xe,null,n.filteredList.length?a.a.createElement("span",null,"Showing ",a.a.createElement("b",null,n.filteredList.length)," results "):a.a.createElement("span",null,"No result "),"for ",a.a.createElement("b",null,'"',n.searchText,'"')),a.a.createElement(Vn.a,null,n.filteredList.map(function(e,t){return a.a.createElement(de,{listItem:e,key:t,onClick:function(){return n.onClickItem(t)}})})))}de.defaultProps={onClick:function(){}},he.defaultProps={onClickItem:function(){}};var xe=u.b.div(me());function ge(){return"Failed to connect to the network..."}var ve=function(n){function e(n){var t;return Object(p.a)(this,e),(t=Object(d.a)(this,Object(m.a)(e).call(this,n))).state={pokemonList:[],searchText:"",isLoading:!0},t.onClickItem=t.onClickItem.bind(Object(x.a)(Object(x.a)(t))),t}return Object(h.a)(e,n),Object(b.a)(e,[{key:"componentDidMount",value:function(){var n=this;(function(){return F.apply(this,arguments)})().then(function(e){return n.setState({pokemonList:e})}).catch(function(n){"Network request failed"===n.message||console.error(n)}).finally(function(){return n.setState({isLoading:!1})})}},{key:"onClickItem",value:function(n,e){var t=n[e],r=this.getResultItemName(t);this.props.history.push("/pokemon/".concat(r))}},{key:"getResultItemName",value:function(n){return n.isAlolan?"Alolan_".concat(n.name):n.name}},{key:"render",value:function(){var n,e=this,t=this.state,r=t.pokemonList,o=t.searchText,c=t.isLoading,i=g(r,o,!0,this.getResultItemName);return n=c?a.a.createElement(nn,null):r.length?a.a.createElement(he,{filteredList:i,searchText:o,onClickItem:function(n){return e.onClickItem(i,n)}}):a.a.createElement(ge,null),a.a.createElement(Wn,Object.assign({onChange:function(n){return e.setState({searchText:n})},searchResultContent:n},this.props))}}]),e}(r.Component),je=t(27),Oe=t(60),Ee=t.n(Oe);function ye(){var n=Object(i.a)(["\n  width: 14px;\n  box-sizing: content-box;\n  height: 6.5px;\n  background: #999;\n  border-color: #eee;\n  border-style: solid;\n  border-width: 1px 1px 8.5px 1px;\n  border-radius: 50%;\n  position: relative;\n  box-shadow: ",';\n  &:before, &:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    border-radius: 50%;\n    width: 50%;\n    height: 100%;\n    box-sizing: content-box;\n  }\n  &:before {\n    left: 0;\n    background: #eee;\n  }\n  &:after {\n    left: 50%;\n    background: #999;\n  }\n']);return ye=function(){return n},n}function we(){var n=Object(i.a)(["\n  position: relative;\n  width: 14px;\n  height: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  &, &:before, &:after {\n    background-color: #2266cc;\n    border: 1px solid #b9eeff;\n    border-radius: 50%;\n    box-shadow: ",';\n  }\n  &:before, &:after {\n    content: "";\n    position: absolute;\n  }\n  &:before {\n    width: 70%;\n    height: 70%;\n  }\n  &:after {\n    width: 45%;\n    height: 45%;\n  }\n']);return we=function(){return n},n}function ke(){var n=Object(i.a)(["\n  transform: rotate(45deg);\n  top: 2px;\n  left: 8px;\n  &:before, &:after {\n    width: 7.5px;\n    height: 7.5px;\n  }\n"]);return ke=function(){return n},n}function Ce(){var n=Object(i.a)(["\n  top: 4px;\n  left: 4px;\n  &:before, &:after {\n    width: 8px;\n    height: 8px;\n  }\n"]);return Ce=function(){return n},n}function ze(){var n=Object(i.a)(['\n  position: absolute;\n  &:before, &:after {\n    content: "";\n    position: absolute;\n    background-color: #ffcd00;\n  }\n  &:before {\n    transform: skew(22.5deg, 22.5deg);\n  }\n  &:after {\n    transform: skew(-22.5deg, -22.5deg);\n  }\n']);return ze=function(){return n},n}function Se(){var n=Object(i.a)(["\n  position: relative;\n  padding-right: 16px;\n  filter: drop-shadow(",");\n"]);return Se=function(){return n},n}function Ie(){var n=Object(i.a)(["\n  margin-right: 4px;\n  top: 1px;\n"]);return Ie=function(){return n},n}function Le(n){var e=n.category,t=Object(En.a)(n,["category"]);switch(e){case"Physical":return a.a.createElement(_e,t);case"Special":return a.a.createElement(Ne,t);case"Status":return a.a.createElement(We,t);default:return null}}function _e(n){return a.a.createElement(Fe,n,a.a.createElement(De,null),a.a.createElement(Te,null))}var Pe="0 1px 2px rgba(0, 0, 0, 0.5)",Ae="inset ".concat(Pe,", ").concat(Pe),Be=u.b.span(Ie()),Fe=Object(u.b)(Be)(Se(),"0 1px 0.5px rgba(0, 0, 0, 0.5)"),Re=u.b.div(ze()),Te=Object(u.b)(Re)(Ce()),De=Object(u.b)(Re)(ke()),Ne=Object(u.b)(Be)(we(),Ae),We=Object(u.b)(Be)(ye(),Ae),Ke=t(59),Ve=t.n(Ke);function qe(){var n=Object(i.a)(["\n  margin-left: 8px;\n"]);return qe=function(){return n},n}function Je(){var n=Object(i.a)(["\n  font-weight: bold;\n"]);return Je=function(){return n},n}function Me(){var n=Object(i.a)(["\n  display: flex;\n"]);return Me=function(){return n},n}function Xe(){var n=Object(i.a)(["\n  margin: 16px 0;\n"]);return Xe=function(){return n},n}function He(){var n=Object(i.a)(["\n  transition: transform 400ms;\n  transform: rotate(","deg);\n"]);return He=function(){return n},n}function Ye(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 10px;\n  margin-right: 8px;\n"]);return Ye=function(){return n},n}function $e(){var n=Object(i.a)(["\n  margin-top: 4px;\n  font-size: 14px;\n"]);return $e=function(){return n},n}function Ge(){var n=Object(i.a)(["\n  display: flex;\n  /* justify-content: space-between; */\n  align-items: center;\n"]);return Ge=function(){return n},n}function Qe(){var n=Object(i.a)(["\n  font-size: 20px;\n  flex: 3;\n  padding-bottom: 8px;\n"]);return Qe=function(){return n},n}function Ue(){var n=Object(i.a)(["\n  min-width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: ",";\n  font-size: 16px;\n  color: white;\n  margin-right: 8px;\n  z-index: 1;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n"]);return Ue=function(){return n},n}function Ze(){var n=Object(i.a)(["\n  flex-direction: column;\n  text-align: left;\n  width: 100%;\n  cursor: pointer;\n  color: white;\n  && {\n    background-image: linear-gradient(\n      white -64px,\n      "," 32px\n    );\n    box-shadow: 0 0 8px 10px rgba(182, 237, 255, 0.3);\n    border: 2px solid rgba(0, 0, 0, 0.2);\n    margin-bottom: 24px;\n    padding: 12px 16px;\n    align-items: normal;\n  }\n"]);return Ze=function(){return n},n}function nt(){var n=Object(i.a)(['\n  display: flex;\n  position: relative;\n  :not(:last-child):before {\n    content: " ";\n    position: absolute;\n    border: 2px solid ',";\n    bottom: -17px;\n    top: 17px;\n    left: 14px;\n  }\n"]);return nt=function(){return n},n}var et=u.b.div(nt(),function(n){return n.theme.color.black}),tt=Object(u.b)(fe)(Ze(),function(n){return n.color}),rt=u.b.div(Ue(),function(n){return n.theme.color.black}),at=u.b.div(Qe()),ot=u.b.div(Ge()),ct=Object(u.b)(Ve.a)($e()),it=u.b.div(Ye()),ut=u.b.div(He(),function(n){return n.isExpanded?180:0}),lt=u.b.div(Xe()),st=u.b.div(Me()),ft=u.b.div(Je()),pt=u.b.div(qe());function bt(n){var e=n.level,t=n.moveName,r=n.type,o=n.category,c=n.power,i=n.accuracy,u=n.pp,l=(n.stabIndicator,n.description),s=n.toggleExpanded,f=n.isExpanded;return a.a.createElement(et,null,a.a.createElement(rt,null,e),a.a.createElement(tt,{color:Hn(r),onClick:s},a.a.createElement(at,null,t),a.a.createElement(ot,null,a.a.createElement(Yn,{types:[r]}),a.a.createElement(Xn,{color:mt(o)},a.a.createElement(Le,{category:o}),o,"Status"!==o&&a.a.createElement("span",null,":\xa0",dt(c)))),a.a.createElement(ct,{in:f,timeout:"auto",unmountOnExit:!0},a.a.createElement(lt,null,l||a.a.createElement(nn,{size:57,background:Hn(r)})),a.a.createElement(st,null,a.a.createElement(ft,null,a.a.createElement("div",null,"Accuracy"),a.a.createElement("div",null,"PP")),a.a.createElement(pt,null,a.a.createElement("div",null,dt(i),"%"),a.a.createElement("div",null,u)))),a.a.createElement(it,null,f?"hide":"show"," details...",a.a.createElement(ut,{isExpanded:f},a.a.createElement(Ee.a,null)))))}function dt(n){return"&mdash;"===n?"-":n}function mt(n){switch(n){case"Physical":return"#ff4400";case"Special":return"#2266cc";case"Status":return"#999999";default:return"transparent"}}function ht(n){var e=Object(je.a)(n.list,9),t=e[0],o=e[1],c=e[2],i=e[3],u=e[4],l=e[5],s=e[6],f=(e[7],e[8]),p=Object(r.useState)(!1),b=Object(je.a)(p,2),d=b[0],m=b[1],h=Object(r.useState)(""),x=Object(je.a)(h,2),g=x[0],v=x[1];return a.a.createElement(bt,{level:t,moveName:o,type:c,category:i,power:u,accuracy:l,pp:s,stabIndicator:f,description:g,toggleExpanded:function(){d||function(n){return K.apply(this,arguments)}(o).then(v),m(!d)},isExpanded:d})}function xt(){var n=Object(i.a)(["\n  margin: 24px 0 16px;\n  font-weight: bold;\n"]);return xt=function(){return n},n}var gt=u.b.div(xt());function vt(){var n=Object(i.a)(["\n  display: flex;\n  margin-left: 4px;\n  padding: 2px 0;\n"]);return vt=function(){return n},n}function jt(){var n=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 16px;\n"]);return jt=function(){return n},n}var Ot=Object(u.b)(se)(jt()),Et=u.b.div(vt());function yt(n){n.normal;var e=n.weak,t=n.resistant,r=n.immune;return a.a.createElement("div",null,e.length>0&&a.a.createElement("div",null,a.a.createElement(gt,null,"Weak to"),a.a.createElement(Ot,null,e.map(wt))),t.length>0&&a.a.createElement("div",null,a.a.createElement(gt,null,"Resistant to"),a.a.createElement(Ot,null,t.map(wt))),r.length>0&&a.a.createElement("div",null,a.a.createElement(gt,null,"Immune to"),a.a.createElement(Ot,null,r.map(wt))))}function wt(n,e){var t=Object(je.a)(n,2),r=t[0];t[1];return a.a.createElement(Et,{key:e},a.a.createElement(Yn,{types:[r]}))}function kt(n){var e=n.isLoading,t=n.name,r=n.isAlolan,o=n.details,c=o.types,i=o.learnset,u=o.typeEffectiveness,l=n.onClickBack;return a.a.createElement(tn,null,a.a.createElement(mn,{onClickBack:l},a.a.createElement(ce,{name:t,types:c,isAlolan:r})),e?a.a.createElement(nn,null):a.a.createElement(yt,u),a.a.createElement(gt,null,"Moves by leveling up"),e?a.a.createElement(nn,null):i.map(function(n,e){var t=n.list;return a.a.createElement(ht,{key:e,list:t})}))}function Ct(n){var e=n.match.params,t=n.history.push,o=Object(r.useState)(!1),c=Object(je.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)({types:[],learnset:[],typeEffectiveness:{normal:[],weak:[],resistant:[],immune:[]}}),s=Object(je.a)(l,2),f=s[0],p=s[1];var b=e.pokemon;Object(r.useEffect)(function(){u(!0),function(n){return R.apply(this,arguments)}(b).then(function(n){p(n),u(!1)})},[e]);var d=b.indexOf("_"),m="";return-1!==d&&(m=b.substr(d+1)),a.a.createElement(kt,{isLoading:i,name:m||b,isAlolan:""!==m,details:f,onClickBack:function(){t("/search")}})}var zt={color:{black:"#0a4342"}};function St(){var n=Object(i.a)(["\n  top: 50%;\n  right: 20px;\n  height: calc(50% - 8px);\n  &:after {\n    top: -13px;\n    left: -6px;\n  }\n"]);return St=function(){return n},n}function It(){var n=Object(i.a)(["\n  bottom: 50%;\n  left: 15px;\n  height: 50%;\n  &:after {\n    left: 6px;\n    bottom: -13px;\n  }\n"]);return It=function(){return n},n}function Lt(){var n=Object(i.a)(['\n  position: absolute;\n  background-color: #7ff6f3;\n  width: 2px;\n  &:after {\n    content: "";\n    position: absolute;\n    background-color: #7ff6f3;\n    width: 2px;\n    height: 16px;\n    transform: rotate(-45deg);\n  }\n']);return Lt=function(){return n},n}function _t(){var n=Object(i.a)(["\n  background-color: ",";\n  top: ",";\n"]);return _t=function(){return n},n}function Pt(){var n=Object(i.a)(["\n  background-color: black;\n  height: 20px;\n  width: 20px;\n  top: 8px;\n  right: 9px;\n"]);return Pt=function(){return n},n}function At(){var n=Object(i.a)(['\n  position: absolute;\n  height: 12px;\n  width: 12px;\n  right: 13px;\n  border-radius: 50%;\n  /*background: radial-gradient(circle at 50% 120%, #323232, #0a0a0a 80%, #000000 100%);*/\n  box-shadow: 1px 1px 2px black;\n  &:before { /* bottom light */\n    content: "";\n    position: absolute;\n    background: radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%);\n    border-radius: 50%;\n    bottom: 2.5%;\n    left: 5%;\n    opacity: 0.6;\n    height: 100%;\n    width: 90%;\n    filter: blur(1px);\n  }\n  &:after { /* shine */\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 5%;\n    left: 10%;\n    border-radius: 50%;\n    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);\n    transform: translateX(-32%) translateY(-32%) skewX(-20deg);\n    filter: blur(1px);\n  }\n']);return At=function(){return n},n}function Bt(){var n=Object(i.a)(["\n  position: absolute;\n  top: 8px;\n  right: 18px;\n  width: 2px;\n  height: 110px;\n  background-color: black;\n  box-shadow: inset 1px 1px 2px gray;\n"]);return Bt=function(){return n},n}function Ft(){var n=Object(i.a)([""]);return Ft=function(){return n},n}function Rt(){var n=Object(i.a)(["\n  position: absolute;\n  left: 75%;\n  width: 7.5%;\n  height: 100%;\n  background-color: #fc5849;  \n  box-shadow: inset 2px 0px 8px 5px #c0362d;\n"]);return Rt=function(){return n},n}function Tt(){var n=Object(i.a)(["\n  transform: rotate(90deg);\n  z-index: 1;\n"]);return Tt=function(){return n},n}function Dt(){var n=Object(i.a)(["\n  width: 120%;\n  height: calc(100% - 16px);\n  position: absolute;\n  display: flex;\n  border: 8px solid #c0362d;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n"]);return Dt=function(){return n},n}function Nt(){var n=Object(i.a)(['\n  display: flex;\n  align-items: center;\n  background-color: #fc5849;\n  position: absolute;\n  width: 17.5%;\n  height: 64%;\n  border: 8px solid #c0362d;\n  border-width: 8px 0;\n  &:before {\n    content: "";\n    width: 80%;\n    height: 25%;\n    border: 8px solid #c0362d;\n    border-width: 8px 0;\n  }\n  &:after {\n    content: "";\n    position: absolute;\n    width: 557%;\n    height: 0;\n    border: 4px solid #c0362d;\n  }\n']);return Nt=function(){return n},n}function Wt(){var n=Object(i.a)(["\n  background: linear-gradient(to right,white 30%,#e4e4e4 70%);\n  box-shadow: 1px -1px 3px #222;\n  border: 2px solid white;\n  border-radius: ",";\n  width: ",";\n  height: ",";\n  left: ",";\n  ","\n  position: ",";\n"]);return Wt=function(){return n},n}function Kt(){var n=Object(i.a)(["\n  display: flex;\n  padding-top: 24px;\n"]);return Kt=function(){return n},n}function Vt(){var n=Object(i.a)(["\n  display: flex;\n"]);return Vt=function(){return n},n}function qt(){var n=Object(i.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return qt=function(){return n},n}function Jt(){var n=Object(i.a)(["\n  flex: 3;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n"]);return Jt=function(){return n},n}function Mt(){var n=Object(i.a)(["\n  flex: 1;\n  align-items: center;\n"]);return Mt=function(){return n},n}function Xt(){var n=Object(i.a)(["\n  display: flex;\n  width: 75%;\n"]);return Xt=function(){return n},n}function Ht(){var n=Object(i.a)(["\n  border-right: 1px solid #14aa9f;\n  display: flex;\n  flex-direction: column;\n"]);return Ht=function(){return n},n}function Yt(){var n=Object(i.a)(["\n  background-color: #fc5849;\n  border-radius: 16px;\n  flex: 1;\n  position: relative;\n  box-shadow: inset -2px -4px 2px 4px #c0362d;\n  overflow: hidden;\n"]);return Yt=function(){return n},n}function $t(){var n=Object(i.a)(["\n  display: none;\n  @media only screen and (min-width: ",") {\n    display: flex;\n    padding: ",";\n    height: calc(100% - 2 * ",");\n    position: fixed;\n    left: ",";\n    right: ",";\n  }\n"]);return $t=function(){return n},n}var Gt=u.b.div($t(),on,"4px","4px",un,un),Qt=u.b.div(Yt()),Ut=Object(u.b)(Qt)(Ht()),Zt=u.b.div(Xt()),nr=Object(u.b)(Zt)(Mt()),er=Object(u.b)(Zt)(Jt()),tr=Object(u.b)(Zt)(qt()),rr=u.b.div(Vt()),ar=u.b.div(Kt()),or=u.b.div(Wt(),function(n){return"circle"===n.shape?"50%":"3px"},function(n){return n.width||n.size},function(n){return n.height||n.size},function(n){return n.left},function(n){return n.top&&"top: ".concat(n.top,";")},function(n){return n.position||"relative"}),cr=u.b.div(Nt()),ir=u.b.div(Dt()),ur=Object(u.b)(X)(Tt()),lr=u.b.div(Rt()),sr=Object(u.b)(Qt)(Ft()),fr=u.b.div(Bt()),pr=u.b.div(At()),br=Object(u.b)(pr)(Pt()),dr=Object(u.b)(pr)(_t(),function(n){return n.color},function(n){return n.top}),mr=u.b.div(Lt()),hr=Object(u.b)(mr)(It()),xr=Object(u.b)(mr)(St());function gr(){return a.a.createElement(Gt,null,a.a.createElement(Ut,null,a.a.createElement(nr,null,a.a.createElement(or,{shape:"circle",size:"24px",left:"40px"}),a.a.createElement(or,{shape:"circle",size:"72px",left:"55px"}),a.a.createElement(or,{shape:"circle",size:"24px",left:"70px"}),a.a.createElement(or,{width:"9px",height:"48px",left:"66%",top:"4%",position:"absolute"})),a.a.createElement(er,null,a.a.createElement(ir,null,a.a.createElement(ur,{size:180,color:"#c0362d",background:"#fc5849"})),a.a.createElement(cr,null)),a.a.createElement(tr,null,a.a.createElement(rr,null,a.a.createElement(or,{width:"45px",height:"24px",left:"40px"}),a.a.createElement(or,{width:"45px",height:"24px",left:"50px"}),a.a.createElement(or,{width:"45px",height:"24px",left:"60px"})),a.a.createElement(ar,null,a.a.createElement(or,{shape:"plus",size:"36px",left:"40px"}),a.a.createElement(or,{shape:"circle",size:"30px",left:"135px"}))),a.a.createElement(lr,null)),a.a.createElement(sr,null,a.a.createElement(fr,null),a.a.createElement(br,null),a.a.createElement(dr,{top:"60px",color:"red"}),a.a.createElement(dr,{top:"80px",color:"yellow"}),a.a.createElement(dr,{top:"100px",color:"green"}),a.a.createElement(hr,null),a.a.createElement(xr,null)))}function vr(){var n=Object(i.a)(["\n  color: ",";\n  @media only screen and (max-width: calc(",' - 1px)) {\n    &:before {\n      content: "";\n      position: fixed;\n      width: 100vw;\n      height: 100vh;\n      background: ',";\n      z-index: -1;\n    }\n  }\n  @media only screen and (min-width: ",") {\n    position: absolute;\n    top: ",";\n    right: ",";\n    height: calc(100% - 2 * ",");\n    width: 100%;\n    max-width: ",";\n    overflow: scroll;\n    box-shadow: inset 1px 2px 3px 1px grey;\n    background: ",";\n  }\n"]);return vr=function(){return n},n}function jr(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  @media only screen and (min-width: ",") {\n    width: 100vw;\n    min-height: 100vh;\n    position: relative;\n    background-color: #14aaa0;\n  }\n"]);return jr=function(){return n},n}function Or(){return a.a.createElement("div",null,"404 Not Found")}var Er=u.b.div(jr(),on),yr=u.b.div(vr(),function(n){return n.theme.color.black},on,H,on,"20px",ln,"20px","375px",H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(function(){return a.a.createElement(u.a,{theme:zt},a.a.createElement(Er,null,a.a.createElement(gr,null),a.a.createElement(yr,null,a.a.createElement(l.a,null,a.a.createElement(s.a,null,a.a.createElement(f.a,{path:"/search",component:ve}),a.a.createElement(f.a,{path:"/pokemon/:pokemon",component:Ct}),a.a.createElement(f.a,{path:"/",component:ve}),a.a.createElement(f.a,{component:Or}))))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[5444,1,2]]]);
//# sourceMappingURL=main.f3f4f613.chunk.js.map