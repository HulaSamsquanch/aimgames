!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e,t,r){return/^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}e.defineMode("javascript",function(r,n){function a(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function i(e,t,r){return Ve=e,Ee=r,t}function o(e,r){var n=e.next();if('"'==n||"'"==n)return r.tokenize=c(n),r.tokenize(e,r);if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return i("number","number");if("."==n&&e.match(".."))return i("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return i(n);if("="==n&&e.eat(">"))return i("=>","operator");if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),i("number","number");if("0"==n&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),i("number","number");if("0"==n&&e.eat(/b/i))return e.eatWhile(/[01]/i),i("number","number");if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),i("number","number");if("/"==n)return e.eat("*")?(r.tokenize=u,u(e,r)):e.eat("/")?(e.skipToEnd(),i("comment","comment")):t(e,r,1)?(a(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),i("regexp","string-2")):(e.eatWhile(Oe),i("operator","operator",e.current()));if("`"==n)return r.tokenize=l,l(e,r);if("#"==n)return e.skipToEnd(),i("error","error");if(Oe.test(n))return">"==n&&r.lexical&&">"==r.lexical.type||e.eatWhile(Oe),i("operator","operator",e.current());if(qe.test(n)){e.eatWhile(qe);var o=e.current(),s=Ce.propertyIsEnumerable(o)&&Ce[o];return s&&"."!=r.lastType?i(s.type,s.style,o):i("variable","variable",o)}}function c(e){return function(t,r){var n,a=!1;if(Ae&&"@"==t.peek()&&t.match(We))return r.tokenize=o,i("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=e||a);)a=!a&&"\\"==n;return a||(r.tokenize=o),i("string","string")}}function u(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=o;break}n="*"==r}return i("comment","comment")}function l(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=o;break}n=!n&&"\\"==r}return i("quasi","string-2",e.current())}function s(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if($e){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,o=r-1;o>=0;--o){var c=e.string.charAt(o),u=Pe.indexOf(c);if(u>=0&&u<3){if(!a){++o;break}if(0==--a){"("==c&&(i=!0);break}}else if(u>=3&&u<6)++a;else if(qe.test(c))i=!0;else{if(/["'\/]/.test(c))return;if(i&&!a){++o;break}}}i&&!a&&(t.fatArrowAt=o)}}function f(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function d(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(var r=n.vars;r;r=r.next)if(r.name==t)return!0}function p(e,t,r,n,a){var i=e.cc;for(Ne.state=e,Ne.stream=a,Ne.marked=null,Ne.cc=i,Ne.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var o=i.length?i.pop():Te?j:g;if(o(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return Ne.marked?Ne.marked:"variable"==r&&d(e,n)?"variable-2":t}}}function m(){for(var e=arguments.length-1;e>=0;e--)Ne.cc.push(arguments[e])}function v(){return m.apply(null,arguments),!0}function y(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}var r=Ne.state;if(Ne.marked="def",r.context){if(t(r.localVars))return;r.localVars={name:e,next:r.localVars}}else{if(t(r.globalVars))return;n.globalVars&&(r.globalVars={name:e,next:r.globalVars})}}function k(){Ne.state.context={prev:Ne.state.context,vars:Ne.state.localVars},Ne.state.localVars=Be}function b(){Ne.state.localVars=Ne.state.context.vars,Ne.state.context=Ne.state.context.prev}function x(e,t){var r=function(){var r=Ne.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new f(n,Ne.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function h(){var e=Ne.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function w(e){function t(r){return r==e?v():";"==e?m():v(t)}return t}function g(e,t){return"var"==e?v(x("vardef",t.length),Z,w(";"),h):"keyword a"==e?v(x("form"),V,g,h):"keyword b"==e?v(x("form"),g,h):"{"==e?v(x("}"),J,h):";"==e?v():"if"==e?("else"==Ne.state.lexical.info&&Ne.state.cc[Ne.state.cc.length-1]==h&&Ne.state.cc.pop()(),v(x("form"),V,g,h,ne)):"function"==e?v(le):"for"==e?v(x("form"),ae,g,h):"variable"==e?v(x("stat"),N):"switch"==e?v(x("form"),V,x("}","switch"),w("{"),J,h,h):"case"==e?v(j,w(":")):"default"==e?v(w(":")):"catch"==e?v(x("form"),k,w("("),se,w(")"),g,h,b):"class"==e?v(x("form"),de,h):"export"==e?v(x("stat"),ye,h):"import"==e?v(x("stat"),be,h):"module"==e?v(x("form"),_,x("}"),w("{"),J,h,h):"type"==e?v(L,w("operator"),L,w(";")):"async"==e?v(g):m(x("stat"),j,w(";"),h)}function j(e){return E(e,!1)}function M(e){return E(e,!0)}function V(e){return"("!=e?m():v(x(")"),j,w(")"),h)}function E(e,t){if(Ne.state.fatArrowAt==Ne.stream.start){var r=t?O:C;if("("==e)return v(k,x(")"),F(_,")"),h,w("=>"),r,b);if("variable"==e)return m(k,_,w("=>"),r,b)}var n=t?T:A;return Se.hasOwnProperty(e)?v(n):"function"==e?v(le,n):"class"==e?v(x("form"),fe,h):"keyword c"==e||"async"==e?v(t?z:I):"("==e?v(x(")"),I,w(")"),h,n):"operator"==e||"spread"==e?v(t?M:j):"["==e?v(x("]"),je,h,n):"{"==e?G(H,"}",null,n):"quasi"==e?m($,n):"new"==e?v(W(t)):v()}function I(e){return e.match(/[;\}\)\],]/)?m():m(j)}function z(e){return e.match(/[;\}\)\],]/)?m():m(M)}function A(e,t){return","==e?v(j):T(e,t,!1)}function T(e,t,r){var n=0==r?A:T,a=0==r?j:M;return"=>"==e?v(k,r?O:C,b):"operator"==e?/\+\+|--/.test(t)?v(n):"?"==t?v(j,w(":"),a):v(a):"quasi"==e?m($,n):";"!=e?"("==e?G(M,")","call",n):"."==e?v(B,n):"["==e?v(x("]"),I,w("]"),h,n):void 0:void 0}function $(e,t){return"quasi"!=e?m():"${"!=t.slice(t.length-2)?v($):v(j,q)}function q(e){if("}"==e)return Ne.marked="string-2",Ne.state.tokenize=l,v($)}function C(e){return s(Ne.stream,Ne.state),m("{"==e?g:j)}function O(e){return s(Ne.stream,Ne.state),m("{"==e?g:M)}function W(e){return function(t){return"."==t?v(e?S:P):m(e?M:j)}}function P(e,t){if("target"==t)return Ne.marked="keyword",v(A)}function S(e,t){if("target"==t)return Ne.marked="keyword",v(T)}function N(e){return":"==e?v(h,g):m(A,w(";"),h)}function B(e){if("variable"==e)return Ne.marked="property",v()}function H(e,t){return"async"==e?(Ne.marked="property",v(H)):"variable"==e||"keyword"==Ne.style?(Ne.marked="property",v("get"==t||"set"==t?U:D)):"number"==e||"string"==e?(Ne.marked=Ae?"property":Ne.style+" property",v(D)):"jsonld-keyword"==e?v(D):"modifier"==e?v(H):"["==e?v(j,w("]"),D):"spread"==e?v(j):":"==e?m(D):void 0}function U(e){return"variable"!=e?m(D):(Ne.marked="property",v(le))}function D(e){return":"==e?v(M):"("==e?m(le):void 0}function F(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=Ne.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),v(function(r,n){return r==t||n==t?m():m(e)},n)}return a==t||i==t?v():v(w(t))}return function(r,a){return r==t||a==t?v():m(e,n)}}function G(e,t,r){for(var n=3;n<arguments.length;n++)Ne.cc.push(arguments[n]);return v(x(t,r),F(e,t),h)}function J(e){return"}"==e?v():m(g,J)}function K(e,t){if($e){if(":"==e)return v(L);if("?"==t)return v(K)}}function L(e){return"variable"==e?(Ne.marked="variable-3",v(Y)):"string"==e||"number"==e||"atom"==e?v(Y):"{"==e?v(x("}"),F(R,"}",",;"),h):"("==e?v(F(X,")"),Q):void 0}function Q(e){if("=>"==e)return v(L)}function R(e,t){return"variable"==e||"keyword"==Ne.style?(Ne.marked="property",v(R)):"?"==t?v(R):":"==e?v(L):void 0}function X(e){return"variable"==e?v(X):":"==e?v(L):void 0}function Y(e,t){return"<"==t?v(x(">"),F(L,">"),h,Y):"|"==t||"."==e?v(L):"["==e?v(w("]"),Y):void 0}function Z(){return m(_,K,te,re)}function _(e,t){return"modifier"==e?v(_):"variable"==e?(y(t),v()):"spread"==e?v(_):"["==e?G(_,"]"):"{"==e?G(ee,"}"):void 0}function ee(e,t){return"variable"!=e||Ne.stream.match(/^\s*:/,!1)?("variable"==e&&(Ne.marked="property"),"spread"==e?v(_):"}"==e?m():v(w(":"),_,te)):(y(t),v(te))}function te(e,t){if("="==t)return v(M)}function re(e){if(","==e)return v(Z)}function ne(e,t){if("keyword b"==e&&"else"==t)return v(x("form","else"),g,h)}function ae(e){if("("==e)return v(x(")"),ie,w(")"),h)}function ie(e){return"var"==e?v(Z,w(";"),ce):";"==e?v(ce):"variable"==e?v(oe):m(j,w(";"),ce)}function oe(e,t){return"in"==t||"of"==t?(Ne.marked="keyword",v(j)):v(A,ce)}function ce(e,t){return";"==e?v(ue):"in"==t||"of"==t?(Ne.marked="keyword",v(j)):m(j,w(";"),ue)}function ue(e){")"!=e&&v(j)}function le(e,t){return"*"==t?(Ne.marked="keyword",v(le)):"variable"==e?(y(t),v(le)):"("==e?v(k,x(")"),F(se,")"),h,K,g,b):void 0}function se(e){return"spread"==e?v(se):m(_,K,te)}function fe(e,t){return"variable"==e?de(e,t):pe(e,t)}function de(e,t){if("variable"==e)return y(t),v(pe)}function pe(e,t){return"extends"==t||"implements"==t||$e&&","==e?v($e?L:j,pe):"{"==e?v(x("}"),me,h):void 0}function me(e,t){return"variable"==e||"keyword"==Ne.style?("async"==t||"static"==t||"get"==t||"set"==t||$e&&("public"==t||"private"==t||"protected"==t||"readonly"==t||"abstract"==t))&&Ne.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(Ne.marked="keyword",v(me)):(Ne.marked="property",v($e?ve:le,me)):"*"==t?(Ne.marked="keyword",v(me)):";"==e?v(me):"}"==e?v():void 0}function ve(e,t){return"?"==t?v(ve):":"==e?v(L,te):m(le)}function ye(e,t){return"*"==t?(Ne.marked="keyword",v(ge,w(";"))):"default"==t?(Ne.marked="keyword",v(j,w(";"))):"{"==e?v(F(ke,"}"),ge,w(";")):m(g)}function ke(e,t){return"as"==t?(Ne.marked="keyword",v(w("variable"))):"variable"==e?m(M,ke):void 0}function be(e){return"string"==e?v():m(xe,he,ge)}function xe(e,t){return"{"==e?G(xe,"}"):("variable"==e&&y(t),"*"==t&&(Ne.marked="keyword"),v(we))}function he(e){if(","==e)return v(xe,he)}function we(e,t){if("as"==t)return Ne.marked="keyword",v(xe)}function ge(e,t){if("from"==t)return Ne.marked="keyword",v(j)}function je(e){return"]"==e?v():m(F(M,"]"))}function Me(e,t){return"operator"==e.lastType||","==e.lastType||Oe.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}var Ve,Ee,Ie=r.indentUnit,ze=n.statementIndent,Ae=n.jsonld,Te=n.json||Ae,$e=n.typescript,qe=n.wordCharacters||/[\w$\xa1-\uffff]/,Ce=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:e("new"),delete:n,throw:n,debugger:n,var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:a,typeof:a,instanceof:a,true:i,false:i,null:i,undefined:i,NaN:i,Infinity:i,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n,async:e("async")};if($e){var c={type:"variable",style:"variable-3"},u={interface:e("class"),implements:n,namespace:n,module:e("module"),enum:e("module"),type:e("type"),public:e("modifier"),private:e("modifier"),protected:e("modifier"),abstract:e("modifier"),as:a,string:c,number:c,boolean:c,any:c};for(var l in u)o[l]=u[l]}return o}(),Oe=/[+\-*&%=<>!?|~^]/,We=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Pe="([{}])",Se={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0},Ne={state:null,column:null,marked:null,cc:null},Be={name:"this",next:{name:"arguments"}};return h.lex=!0,{startState:function(e){var t={tokenize:o,lastType:"sof",cc:[],lexical:new f((e||0)-Ie,0,"block",!1),localVars:n.localVars,context:n.localVars&&{vars:n.localVars},indented:e||0};return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),s(e,t)),t.tokenize!=u&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==Ve?r:(t.lastType="operator"!=Ve||"++"!=Ee&&"--"!=Ee?Ve:"incdec",p(t,r,Ve,Ee,e))},indent:function(t,r){if(t.tokenize==u)return e.Pass;if(t.tokenize!=o)return 0;var a,i=r&&r.charAt(0),c=t.lexical;if(!/^\s*else\b/.test(r))for(var l=t.cc.length-1;l>=0;--l){var s=t.cc[l];if(s==h)c=c.prev;else if(s!=ne)break}for(;("stat"==c.type||"form"==c.type)&&("}"==i||(a=t.cc[t.cc.length-1])&&(a==A||a==T)&&!/^[,\.=+\-*:?[\(]/.test(r));)c=c.prev;ze&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var f=c.type,d=i==f;return"vardef"==f?c.indented+("operator"==t.lastType||","==t.lastType?c.info+1:0):"form"==f&&"{"==i?c.indented:"form"==f?c.indented+Ie:"stat"==f?c.indented+(Me(t,r)?ze||Ie:0):"switch"!=c.info||d||0==n.doubleIndentSwitch?c.align?c.column+(d?0:1):c.indented+(d?0:Ie):c.indented+(/^(?:case|default)\b/.test(r)?Ie:2*Ie)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:Te?null:"/*",blockCommentEnd:Te?null:"*/",lineComment:Te?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:Te?"json":"javascript",jsonldMode:Ae,jsonMode:Te,expressionAllowed:t,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=j&&t!=M||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})});