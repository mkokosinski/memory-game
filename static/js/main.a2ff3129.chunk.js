(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a});var i={GAME_STARTED:"gameStarted",TILES:"tiles",ROUNDS_COUNTER:"roundsCounter",ACTIVE_TILE:"activeTile",GAME_IS_COMPLETED:"gameIsCompleted"},a={HOME:"/Home",GAME:"/Game",SETTINGS:"/Settings",DEV_REPOSITORY:"https://github.com/mkokosinski/"}},,,function(n,t,e){"use strict";e.r(t),e.d(t,"LanguageContext",function(){return o});var i=e(0),a=e.n(i),r=e(12),o=a.a.createContext(r.default.Polish)},function(n,t,e){"use strict";e.r(t),e.d(t,"Container",function(){return s}),e.d(t,"MenuContainer",function(){return l}),e.d(t,"Menu",function(){return d}),e.d(t,"Item",function(){return f});var i=e(1),a=e(3);function r(){var n=Object(i.a)(["\n    background-color: #D7CCC8; \n    border: 1px solid #BCAAA4;\n    border-collapse:collapse;\n    font-weight: bold;\n    padding:20px 60px;\n    text-transform: uppercase;\n    text-align:center;\n    cursor: pointer;\n    transition: background-color ease-out 200ms;\n    user-select: none;\n\n    :hover{\n        background-color:#EFEBE9;\n    }\n\n    :active{\n        background-color:#e6dedb;\n    }\n"]);return r=function(){return n},n}function o(){var n=Object(i.a)(["\n    background-color: ",";\n    border-radius:4px;\n    box-shadow: 0 1px 10px -2px rgba(0,0,0,0.5);\n    list-style: none;\n    margin:0;\n    padding:0;\n"]);return o=function(){return n},n}function c(){var n=Object(i.a)(["\n    padding:40px;\n"]);return c=function(){return n},n}function u(){var n=Object(i.a)(["\n  min-height: 100vh;\n  width: 100%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n"]);return u=function(){return n},n}var s=a.b.div(u()),l=a.b.ul(c()),d=a.b.ul(o(),function(n){return n.bgColor||""}),f=a.b.li(r())},function(n,t,e){"use strict";e.r(t),e.d(t,"SettingsContainer",function(){return g}),e.d(t,"StyledDropdown",function(){return m}),e.d(t,"StyledDropdownImg",function(){return v}),e.d(t,"FormRow",function(){return b}),e.d(t,"CenterContent",function(){return h}),e.d(t,"Button",function(){return x});var i=e(1),a=e(3),r=e(43),o=e.n(r),c=e(23);function u(){var n=Object(i.a)(["\n    background: #fdfdfd;\n    box-shadow: 0 1px 2px -2px rgba(0,0,0,.7);\n    border: 1px solid rgba(0,0,0,.1);\n    cursor: pointer;\n    display: block;\n    margin: 25px 10px 0;\n    padding:10px;\n    transition: 100ms;\n    width:100px;\n\n    :hover{\n        background: white;\n        box-shadow: 0 2px 3px -3px rgba(0,0,0,.7);\n    }\n\n    :active{\n        box-shadow: none;\n        outline: none;\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(i.a)(["\n    display: flex;\n    width:100%;\n    align-items:center;\n    justify-content:center;\n"]);return s=function(){return n},n}function l(){var n=Object(i.a)(["\n    align-items:center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 15px;\n    margin-top: 10px;\n"]);return l=function(){return n},n}function d(){var n=Object(i.a)(["\n        /* .Dropdown-option{\n            align-items:center;\n            column-gap: 10px;\n            display:grid;\n            grid-template-columns: 1fr 4fr;\n        \n            &:before{\n                content: url('","');\n                display:block;\n                height: 19px;\n                width:20px;\n            }\n        } \n        \n        .Dropdown-control{\n        align-items:center;\n        column-gap: 10px;\n        display:grid;\n        grid-template-columns: 1fr 4fr;\n        \n            &:before{\n                content: url('","');\n                display:block;\n                height: 19px;\n                width:20px;\n            }\n        } */\n"]);return d=function(){return n},n}function f(){var n=Object(i.a)(["\n    .Dropdown-control{\n      \n        }\n    .Dropdown-option{\n        }\n"]);return f=function(){return n},n}function p(){var n=Object(i.a)(["\n    background: #f2f2f2;\n    box-shadow: 0 2px 6px -3px rgba(0,0,0,0.8);\n    display:block;\n    padding: 20px;\n"]);return p=function(){return n},n}var g=a.b.div(p()),m=Object(a.b)(o.a)(f()),v=Object(a.b)(o.a)(d(),c.i1,c.i2),b=a.b.div(l()),h=a.b.div(s()),x=a.b.button(u())},,,function(n,t,e){"use strict";e.r(t);t.default={Polski:{resume:"Wzn\xf3w gr\u0119",newGame:"Nowa gra",settings:"Opcje",exit:"Wyj\u015bcie",resetGame:"Resetuj",playAgain:"Zagraj ponownie",endGameMessage:"Gra zako\u0144czona! Tw\xf3j wynik to:",roundsCount:"Ilo\u015b\u0107 tur:",difficultyLabel:"Poziom",difficulty:{easy:"\u0141atwy",hard:"Trudny"},langLabel:"J\u0119zyk",lang:{polish:"Polski",english:"English"},saveButton:"Zapisz",saveToastMessage:"Zmiany zosta\u0142y zapisane!",goBackButton:"Wr\xf3\u0107"},English:{resume:"Resume",newGame:"New game",settings:"Settings",exit:"Exit",resetGame:"Reset game",playAgain:"Play again",endGameMessage:"The game is over! Your score:",roundsCount:"Round number:",difficultyLabel:"Level",difficulty:{easy:"Easy",hard:"Hard"},langLabel:"Language",lang:{polish:"Polski",english:"English"},saveButton:"Save",saveToastMessage:"Changes have been saved!",goBackButton:"Back"}}},,,function(n,t,e){"use strict";e.r(t);var i=e(1),a=e(3);function r(){var n=Object(i.a)(["\n    @media (min-width: ","em) and (min-height: ","em) {\n      ","\n    }\n  "]);return r=function(){return n},n}var o={giant:{w:992,h:992},desktop:{w:768,h:768},tablet:{w:572,h:572},phablet:{w:376,h:376}},c=Object.keys(o).reduce(function(n,t){return n[t]=function(){return Object(a.a)(r(),o[t].w/16,o[t].h/16,a.a.apply(void 0,arguments))},n},{});function u(){var n=Object(i.a)(["font-size: 1em; padding: 20px 10px"]);return u=function(){return n},n}function s(){var n=Object(i.a)(["font-size: 0.9em; padding: 16px 10px"]);return s=function(){return n},n}function l(){var n=Object(i.a)(["font-size: 0.7em; padding: 12px 8px"]);return l=function(){return n},n}function d(){var n=Object(i.a)(["\n  background-color:#555555;\n  border: 1px solid gray;\n  color: #fff;\n  display: block; \n  font-size: .6em;\n  padding: 10px 6px;\n  text-align: center; \n  user-select: none;\n\n  ","\n  ","\n  ","\n\n  :hover{\n  background-color:#666;\n  cursor: pointer;\n  transition: background-color ease 500ms;\n  }\n\n  :active{\n  background-color:#555555;\n  transition: background-color ease 200ms;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(i.a)(["font-size: 1em;"]);return f=function(){return n},n}function p(){var n=Object(i.a)(["font-size: 0.9em;"]);return p=function(){return n},n}function g(){var n=Object(i.a)(["font-size: 0.7em;"]);return g=function(){return n},n}function m(){var n=Object(i.a)(["\n  display: block; \n  font-size: .6em;\n\n  ","\n  ","\n  ","\n"]);return m=function(){return n},n}function v(){var n=Object(i.a)(["width:calc(100vh - 200px); height:calc(100vh - 200px)"]);return v=function(){return n},n}function b(){var n=Object(i.a)(["\n  align-items:stretch;\n  display:grid;\n  grid-template-columns: ",";\n  justify-content:stretch;\n  grid-template-rows: ",";\n  grid-gap: 5px;\n  width: 90vw; \n  height:90vw;\n  \n  "," \n"]);return b=function(){return n},n}function h(){var n=Object(i.a)(["padding:40px 60px; "]);return h=function(){return n},n}function x(){var n=Object(i.a)(["padding:40px 40px; "]);return x=function(){return n},n}function E(){var n=Object(i.a)(["padding: 40px 40px; width: auto;"]);return E=function(){return n},n}function y(){var n=Object(i.a)(["padding: 20px 20px;"]);return y=function(){return n},n}function T(){var n=Object(i.a)(["\n  background-color: white;\n  box-shadow: 0 1px 5px -3px rgba(0,0,0,0.7);\n  display:grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 20px 1fr;\n  grid-gap: 5px;\n  justify-content:center;\n  margin: 0 auto;\n  padding: 20px 10px;\n  width: 90%;\n\n  ","\n  ","\n  ","\n  ","\n"]);return T=function(){return n},n}e.d(t,"GameContainer",function(){return O}),e.d(t,"BoardContainer",function(){return j}),e.d(t,"RoundsCounter",function(){return C}),e.d(t,"Button",function(){return S});var O=a.b.div(T(),c.phablet(y()),c.tablet(E()),c.desktop(x()),c.giant(h())),j=a.b.div(b(),function(n){return"repeat(".concat(n.repeat,", 1fr);")},function(n){return"repeat(".concat(n.repeat,", 1fr);")},c.tablet(v())),C=a.b.div(m(),c.phablet(g()),c.tablet(p()),c.desktop(f())),S=a.b.div(d(),c.phablet(l()),c.tablet(s()),c.desktop(u()))},,,,,,,,function(n,t,e){"use strict";e.r(t),e.d(t,"i1",function(){return i}),e.d(t,"i2",function(){return a}),e.d(t,"i3",function(){return r}),e.d(t,"i4",function(){return o}),e.d(t,"i6",function(){return c}),e.d(t,"i7",function(){return u}),e.d(t,"i8",function(){return s}),e.d(t,"i9",function(){return l}),e.d(t,"i10",function(){return d}),e.d(t,"i11",function(){return f}),e.d(t,"i12",function(){return p}),e.d(t,"i13",function(){return g}),e.d(t,"i14",function(){return m}),e.d(t,"i15",function(){return v}),e.d(t,"i16",function(){return b}),e.d(t,"i17",function(){return h}),e.d(t,"i18",function(){return x}),e.d(t,"i19",function(){return E}),e.d(t,"i20",function(){return y}),e.d(t,"i21",function(){return T}),e.d(t,"i22",function(){return O}),e.d(t,"i23",function(){return j}),e.d(t,"i24",function(){return C}),e.d(t,"i25",function(){return S}),e.d(t,"i26",function(){return k}),e.d(t,"i27",function(){return w}),e.d(t,"i28",function(){return M}),e.d(t,"i29",function(){return I}),e.d(t,"i30",function(){return G}),e.d(t,"i31",function(){return A}),e.d(t,"i32",function(){return L}),e.d(t,"i33",function(){return R}),e.d(t,"i34",function(){return D}),e.d(t,"i35",function(){return _}),e.d(t,"i36",function(){return B}),e.d(t,"i37",function(){return N}),e.d(t,"i38",function(){return P}),e.d(t,"i39",function(){return z}),e.d(t,"i40",function(){return U}),e.d(t,"i41",function(){return H}),e.d(t,"i42",function(){return F}),e.d(t,"i43",function(){return V}),e.d(t,"i44",function(){return Y}),e.d(t,"i45",function(){return J}),e.d(t,"i46",function(){return W}),e.d(t,"i47",function(){return Z}),e.d(t,"i48",function(){return q}),e.d(t,"i49",function(){return $});var i=e(73),a=e(74),r=e(75),o=e(76),c=e(77),u=e(78),s=e(79),l=e(80),d=e(81),f=e(82),p=e(83),g=e(84),m=e(85),v=e(86),b=e(87),h=e(88),x=e(89),E=e(90),y=e(91),T=e(92),O=e(93),j=e(94),C=e(95),S=e(96),k=e(97),w=e(98),M=e(99),I=e(100),G=e(101),A=e(102),L=e(103),R=e(104),D=e(105),_=e(106),B=e(107),N=e(108),P=e(109),z=e(110),U=e(111),H=e(112),F=e(113),V=e(114),Y=e(115),J=e(116),W=e(117),Z=e(118),q=e(119),$=e(120)},,function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(34),o=e(4),c=e(7),u=e(8);t.default=Object(r.a)(function(n){var t=n.cookies,e=n.history,r=Object(i.useContext)(c.LanguageContext).language.dictionary,s=t.get(o.a.GAME_STARTED)||t.get(o.a.GAME_STARTED);return a.a.createElement(u.Container,null,a.a.createElement(u.MenuContainer,null,a.a.createElement(u.Menu,null,s?a.a.createElement(u.Item,{onClick:function(){return s?e.push(o.b.GAME):null}},r.resume):null,a.a.createElement(u.Item,{onClick:function(){t.remove(o.a.GAME_STARTED),t.remove(o.a.TILES),t.remove(o.a.ROUNDS_COUNTER),t.remove(o.a.ACTIVE_TILE),t.remove(o.a.GAME_IS_COMPLETED),e.push(o.b.GAME)}},r.newGame),a.a.createElement(u.Item,{onClick:function(){return e.push(o.b.SETTINGS)}},r.settings),a.a.createElement(u.Item,{onClick:function(){return window.location=o.b.DEV_REPOSITORY}},r.exit))))})},function(n,t,e){"use strict";e.r(t);var i=e(53),a=e(16),r=e(17),o=e(19),c=e(18),u=e(20),s=e(22),l=e(0),d=e.n(l),f=e(34),p=e(4),g=e(7),m=e(15),v=e(27),b=function(n){for(var t=[],i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SocialImages",t=e(66)("./"+n);return[t.i1,t.i2,t.i3,t.i4,t.i6,t.i7,t.i8,t.i9,t.i10,t.i11,t.i12,t.i13,t.i14,t.i15,t.i16,t.i17,t.i18,t.i19,t.i20,t.i21,t.i22,t.i23,t.i24,t.i25,t.i26,t.i27,t.i28,t.i29,t.i30,t.i31,t.i32,t.i33,t.i34,t.i35,t.i36,t.i37,t.i38,t.i39,t.i40,t.i41,t.i42,t.i43,t.i44,t.i45,t.i46,t.i47,t.i48,t.i49]}(),a=!0,r="",o=0;o<n;o++)a&&(r=i[Math.floor(Math.random()*i.length)]),a=!a,i.splice(i.indexOf(r),1),t.push({id:o,content:r,isTurned:!1,isMatched:!1});return h(t)},h=function(n){for(var t,e,i=n.length-1;i>0;i--)t=Math.floor(Math.random()*(i+1)),e=n[i],n[i]=n[t],n[t]=e;for(var a=0;a<n.length;a++)n[a].id=a;return Object(s.a)(n)},x=function(n){function t(n){var e;return Object(a.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this,n))).componentDidMount=function(){var n=e.context.numberOfTiles,t=e.props.cookies;e.setState({tiles:t.get(p.a.TILES)||Object(s.a)(b(n)),activeTile:t.get(p.a.ACTIVE_TILE)||{},roundsCounter:parseInt(t.get(p.a.ROUNDS_COUNTER))||0,gameIsCompleted:t.get(p.a.GAME_IS_COMPLETED)||!1})},e.state={tiles:[],activeTile:{},roundsCounter:0,gameIsCompleted:!1},e}return Object(u.a)(t,n),Object(r.a)(t,[{key:"changeActiveTile",value:function(n){this.props.cookies.set(p.a.ACTIVE_TILE,n),this.setState({activeTile:n})}},{key:"changeRoundsCounter",value:function(n){var t=n+1;this.props.cookies.set(p.a.ROUNDS_COUNTER,t),this.setState({roundsCounter:t})}},{key:"changeTiles",value:function(n){this.props.cookies.set(p.a.TILES,n),this.setState({tiles:n})}},{key:"changeEndGameFlag",value:function(n){this.props.cookies.set(p.a.GAME_IS_COMPLETED,n),this.setState({gameIsCompleted:n})}},{key:"handleTileClick",value:function(n){var t=this,e=this.state,i=e.tiles,a=e.activeTile,r=e.roundsCounter,o=this.props.cookies,c=i.filter(function(n){return!1===n.isMatched&&!0===n.isTurned}).length;if(o.get(p.a.GAME_STARTED)||o.set(p.a.GAME_STARTED,!0),c<2){var u=Object(s.a)(i),l=u[n];l.isTurned=!0,l.content===a.content&&(l.isMatched=!0,u[a.id].isMatched=!0),this.changeTiles(u),this.changeActiveTile(l)}1===c&&(this.changeRoundsCounter(r),setTimeout(function(){return t.resetUnmatched()},500)),i.every(function(n){return!0===n.isMatched})&&this.changeEndGameFlag(!0)}},{key:"resetUnmatched",value:function(){var n=Object(s.a)(this.state.tiles);n.forEach(function(n){return!1===n.isMatched?n.isTurned=!1:n.isTurned}),this.changeTiles(n),this.changeActiveTile({})}},{key:"resetGame",value:function(){var n=this.props.cookies,t=this.state.tiles.length;n.remove(p.a.GAME_STARTED),n.remove(p.a.TILES),n.remove(p.a.ROUNDS_COUNTER),n.remove(p.a.ACTIVE_TILE),n.remove(p.a.GAME_IS_COMPLETED),this.setState(Object(i.a)({},JSON.parse(JSON.stringify(function(n){return{tiles:Object(s.a)(b(n)),activeTile:{},roundsCounter:0,gameIsCompleted:!1}}(t)))))}},{key:"shouldComponentUpdate",value:function(n,t){return t.tiles!==this.state.tiles}},{key:"render",value:function(){var n=this,t=this.state,e=t.roundsCounter,i=t.gameIsCompleted,a=t.tiles,r=a.length,o=Math.floor(Math.sqrt(r));return d.a.createElement(g.LanguageContext.Consumer,null,function(t){var r=t.language;return d.a.createElement(m.GameContainer,null,d.a.createElement(m.RoundsCounter,null,i?"".concat(r.dictionary.endGameMessage," ").concat(e):"".concat(r.dictionary.roundsCount,"  ").concat(e)),d.a.createElement(m.BoardContainer,{repeat:o},a.map(function(t){return d.a.createElement(v.default,Object.assign({},t,{key:t.id,onTurn:function(){return n.handleTileClick(t.id)}}))})),d.a.createElement(m.Button,{onClick:function(){return n.resetGame()}},i?r.dictionary.playAgain:r.dictionary.resetGame))})}}]),t}(l.Component);x.contextType=g.LanguageContext,t.default=Object(f.a)(x)},function(n,t,e){"use strict";e.r(t);var i=e(16),a=e(17),r=e(19),o=e(18),c=e(20),u=e(1),s=e(0),l=e.n(s),d=e(3);function f(){var n=Object(u.a)(["\n\ttransition: transform 0.6s;\n\ttransform-style: preserve-3d;\n  position: relative;\n  transform: ",";\n"]);return f=function(){return n},n}function p(){var n=Object(u.a)(["\n  background-color:"," ;\n  transition: background-color 0.3s ease 0.3s;\n  transform: ",";\n"]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n  background:turquoise;\n  transform: rotateY(180deg);\n"]);return g=function(){return n},n}function m(){var n=Object(u.a)(["\n  align-items:center;\n  backface-visibility: hidden;\n  display: flex;\n  justify-content: center;\n  left:0;\n  position:absolute;\n  top:0;\n  user-select:none;\n\n  img{\n    width:60%;\n  }\n"]);return m=function(){return n},n}function v(){var n=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  perspective: 1000px;\n"]);return v=function(){return n},n}function b(){var n=Object(u.a)(["\n  width:100%;\n  height:100%;\n"]);return b=function(){return n},n}var h=d.b.div(b()),x=Object(d.b)(h)(v()),E=Object(d.b)(h)(m()),y=Object(d.b)(E)(g()),T=Object(d.b)(E)(p(),function(n){return n.isMatched?"lightsalmon":"lightblue"},function(n){return n.isTurned?"rotateY(180deg)":"rotateY(0deg)"}),O=Object(d.b)(h)(f(),function(n){return n.isTurned?"rotateY(0deg)":"rotateY(180deg)"}),j=function(n){function t(){var n,e;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(e=Object(r.a)(this,(n=Object(o.a)(t)).call.apply(n,[this].concat(c)))).shouldComponentUpdate=function(n){var t=e.props,i=t.isTurned,a=t.isMatched,r=n.isTurned,o=n.isMatched;return i!==r||a!==o},e}return Object(c.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){var n=this.props,t=n.onTurn,e=n.isTurned,i=n.isMatched,a=n.content;return l.a.createElement(x,{onClick:e||i?function(){}:t},l.a.createElement(O,{isTurned:e},l.a.createElement(y,null),l.a.createElement(T,{isMatched:i},e&&l.a.createElement("img",{src:a,alt:"Tile"}))))}}]),t}(l.a.Component);t.default=j},function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(44),o=(e(71),e(7)),c=e(8),u=e(9);t.default=function(n){var t=n.changeSettings,e=n.history,s=n.openToast,l=Object(i.useContext)(o.LanguageContext),d=l.language.dictionary,f=[{label:d.difficulty.easy,value:0},{label:d.difficulty.hard,value:1}],p=[{label:d.lang.polish,value:0},{label:d.lang.english,value:1}];return a.a.createElement(c.Container,null,a.a.createElement(u.SettingsContainer,null,a.a.createElement(r.b,{initialValues:l,onSubmit:function(n){return function(n){t(n),s()}(n)},render:function(n){var t=n.setFieldValue,i=n.values,o=n.status,c=n.isSubmitting;return a.a.createElement(r.a,null,a.a.createElement(u.FormRow,null,a.a.createElement("label",{htmlFor:"difficulty"},d.difficultyLabel),a.a.createElement(u.StyledDropdown,{options:f,value:{label:i.difficulty.label,value:i.difficulty.value},onChange:function(n){return t("difficulty",{label:n.label,value:n.value})}})),a.a.createElement(u.FormRow,null,a.a.createElement("label",{htmlFor:"language"},d.langLabel),a.a.createElement(u.StyledDropdownImg,{options:p,value:{label:i.language.label,value:1},onChange:function(n){return t("language",{label:n.label,value:n.value})}})),a.a.createElement(u.CenterContent,null,o&&o.msg&&a.a.createElement("div",null,o.msg),a.a.createElement(u.Button,{type:"submit",disabled:c},d.saveButton),a.a.createElement(u.Button,{type:"button",onClick:function(){return e.goBack()}},d.goBackButton)))}})))}},function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(14),o=e(39),c=e(30);e(7);t.default=function(n){var t=n.isOpen,e=n.message,i=void 0===e?"":e;return Object(r.createPortal)(a.a.createElement(c.ToastContainer,{isOpen:t},i),o.ToastsContainer)}},function(n,t,e){"use strict";e.r(t),e.d(t,"ToastContainer",function(){return r});var i=e(1);function a(){var n=Object(i.a)(["\n    align-items:center;\n    background:white;\n    box-shadow: 0 2px 10px -5px rgba(0,0,0,0.7);\n    display: flex;\n    justify-content:center;\n    margin: 40px;\n    overflow:hidden;\n    padding:10px 20px;\n    transition:500ms ease-out;\n    width: 200px;\n\n    ","\n"]);return a=function(){return n},n}var r=e(3).b.div(a(),function(n){return n.isOpen?"height: 100px;opacity: 1;":"height: 0px;opacity: 0;"})},,,,,,,,,function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(14),o=e.n(r),c=(e(60),e(16)),u=e(17),s=e(19),l=e(18),d=e(20),f=e(1),p=e(3),g=e(124),m=e(125),v=e(126),b=e(7),h=e(25),x=e(26),E=e(12),y=e(28),T=e(29);function O(){var n=Object(f.a)(["\n  align-items: center;\n  background-color: #E0E0E0;\n  display:flex;\n  justify-content: center;\n  min-height: 100vh;\n  width: 100%;\n"]);return O=function(){return n},n}var j=[16,36],C={difficulty:{label:E.default.Polski.difficulty.easy,value:0},numberOfTiles:j[0],language:{label:E.default.Polski.lang.polish,value:1,dictionary:E.default.Polski}},S=p.b.div(O()),k=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this,n))).handleChangeSettings=function(n){var t=E.default[n.language.label];e.setState({settings:{difficulty:{label:Object.values(t.difficulty)[n.difficulty.value],value:n.difficulty.value},numberOfTiles:j[n.difficulty.value],language:{label:n.language.label,value:n.language.value,dictionary:t}},settingsToastIsOpen:!1},function(){return console.log("vallback",e.state)})},e.showSettingsToast=function(){e.setState({settingsToastIsOpen:!0})},e.hideSettingsToast=function(){e.setState({settingsToastIsOpen:!1})},e.openSettingsToast=function(){e.showSettingsToast(),setTimeout(function(){e.hideSettingsToast()},3e3)},e.state={settings:C},e}return Object(d.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){var n=this,t=this.state,e=t.settings,i=t.settingsToastIsOpen,r=e.language.dictionary,o={changeSettings:this.handleChangeSettings,openToast:this.openSettingsToast};return a.a.createElement(b.LanguageContext.Provider,{value:e},a.a.createElement(S,null,a.a.createElement(g.a,{basename:"/memory-game"},a.a.createElement(m.a,null,a.a.createElement(v.a,{exact:!0,path:"/",component:function(t){return a.a.createElement(h.default,Object.assign({changeNumberOfTiles:function(t){return n.handleChangeSettings(t)}},t))}}),a.a.createElement(v.a,{path:"/Game",component:function(n){return a.a.createElement(x.default,n)}}),a.a.createElement(v.a,{path:"/Settings",component:function(n){return a.a.createElement(y.default,Object.assign({},n,o))}}),a.a.createElement(v.a,{component:function(){return a.a.createElement("div",null,"404 Not found!")}})))),a.a.createElement(T.default,{isOpen:i,message:r.saveToastMessage}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e.d(t,"ToastsContainer",function(){return w});var w=document.getElementById("toasts");o.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},,,,,,function(n,t){},,,,,,,,,,function(n,t,e){n.exports=e(39)},,,,,function(n,t,e){},,,,,,function(n,t,e){var i={"./Context":7,"./Context.js":7,"./Game/Game":26,"./Game/Game.js":26,"./Game/GameStyles":15,"./Game/GameStyles.js":15,"./Game/Tile":27,"./Game/Tile.js":27,"./Game/TileStyles":45,"./Game/TileStyles.js":45,"./Home/Home":25,"./Home/Home.js":25,"./Home/HomeStyes":8,"./Home/HomeStyes.js":8,"./Languages":12,"./Languages.js":12,"./Settings/Settings":28,"./Settings/Settings.js":28,"./Settings/SettingsStyles":9,"./Settings/SettingsStyles.js":9,"./SocialImages":23,"./SocialImages.js":23,"./Toasts/SettingToasts":29,"./Toasts/SettingToasts.js":29,"./Toasts/ToastsStyles":30,"./Toasts/ToastsStyles.js":30};function a(n){var t=r(n);return e(t)}function r(n){var t=i[n];if(!(t+1)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t}a.keys=function(){return Object.keys(i)},a.resolve=r,n.exports=a,a.id=66},,,,,,,function(n,t,e){n.exports=e.p+"static/media/ico (1).96065583.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (2).5d3d3517.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (3).eb9042f8.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (4).a6a295dc.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (6).e52d3f67.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (7).006a7abc.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (8).cabacfd3.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (9).54ea3cdc.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (10).b2c78de0.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (11).8a8d2536.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (12).80e6bf82.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (13).966dccad.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (14).0fd72d16.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (15).941e4ca1.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (16).f5266b2c.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (17).63a252ea.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (18).8b5edd49.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (19).39a05215.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (20).ca14f2e3.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (21).d49aee80.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (22).38957dac.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (23).327a2ea8.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (24).f2687330.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (25).ce925de3.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (26).ab12b829.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (27).2e53c82e.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (28).fbb388a8.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (29).6fce892d.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (30).de4ba737.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (31).c7ed034d.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (32).5c6c5830.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (33).e7f3bd73.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (34).688b298d.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (35).aff6242c.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (36).5a4cee86.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (37).d8d7154f.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (38).f33be3cb.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (39).a9e8f1e3.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (40).cdb16b59.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (41).f5a7fbfd.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (42).b0c9e689.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (43).66c5c2e5.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (44).1d4b98fc.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (45).4d583b38.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (46).7ae05e03.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (47).402d4f19.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (48).5f304027.svg"},function(n,t,e){n.exports=e.p+"static/media/ico (49).ac1dee63.svg"}],[[55,1,2]]]);
//# sourceMappingURL=main.a2ff3129.chunk.js.map