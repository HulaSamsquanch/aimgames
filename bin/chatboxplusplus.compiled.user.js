// ==UserScript==
// @name        Chatbox++
// @description Adds a number of 'universal' enhancements for the AIM Games chatbox. Warning: This script is still in active development and may contain bugs!
// @namespace   the_thrasher@gmail.com
// @include     http://aimgames.forummotion.com/
// @version     1.42
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==
// ==UserScript==// @name        Chatbox++// @description Adds a number of 'universal' enhancements for the AIM Games chatbox. Warning: This script is still in active development and may contain bugs!// @namespace   the_thrasher@gmail.com// @include     http://aimgames.forummotion.com/// @version     1.42// @grant       none// @license     MIT License (Expat); opensource.org/licenses/MIT// ==/UserScript==var chatboxElement,messages;function msgSender(a){return void 0!==a.getElementsByClassName("user-msg")[0]?a.getElementsByClassName("user-msg")[0].getElementsByClassName("chatbox-username")[0].innerHTML:null}function msgTimestamp(a){return a.getElementsByClassName("date-and-time")[0].innerHTML.substring(1,a.getElementsByClassName("date-and-time")[0].innerHTML.length-1)}function isDubs(a){a=a.substring(6,8);return"11"==a||"22"==a||"33"==a||"44"==a||"55"==a||"66"==a||"77"==a||"88"==a||"99"==a||"00"==a?!0:!1}var oldMessagesAmount;function newMsgs(){return messages.length-oldMessagesAmount}function resetNewMsgs(){oldMessagesAmount=messages.length}function checkDubs(){for(var a=0;a<messages.length;a++)if(isDubs(msgTimestamp(messages[a]))){var b=document.createElement("span");b.style="color: red; text-align: right; display: block; float: right;";b.innerHTML=" CHECK 'EM";messages[a].appendChild(b)}}var boxElement,ribbonElement,ribbonText;function makeBox(){console.log("is at cbox - "+getScrollTop()+" new msgs - "+newMsgs());1400>=getScrollTop()&&(1===newMsgs()?ribbonText.innerHTML="1 new msg":ribbonText.innerHTML=newMsgs()+" new msgs",0<newMsgs()?void 0===boxElement.children[0]&&boxElement.appendChild(ribbonElement):void 0!==boxElement.children[0]&&boxElement.removeChild(ribbonElement))}function remBox(){1400<getScrollTop()&&(resetNewMsgs(),void 0!==boxElement.children[0]&&boxElement.removeChild(ribbonElement))}var ribbonCSS="@import url('http://fonts.googleapis.com/css?family=Noto+Sans:400,700');.box{width: 0px;height: 0px;position: relative;border: 0px solid #BBB;background: #EEE;font-family: 'Noto Sans', sans-serif}.ribbon{width: 200px;background: #e43;position: absolute;top: 0px;left: -10px;text-align: center;line-height: 50px;letter-spacing: 1px;color: #ff0000;font-size: 18px}.ribbon span{width: 200px;background: #e43;position: absolute;top: 25px;left: -50px;text-align: center;line-height: 50px;letter-spacing: 1px;color: #f0f0f0;transform: rotate(-45deg);-webkit-transform: rotate(-45deg);font-size: 18px}.ribbon span::before{content: \"\";position:absolute;left:0px;top:100%;z-index:-1;border-left:3px solid #8F0808;border-right:3px solid transparent;border-bottom:3px solid transparent;border-top:3px solid #8F0808}.ribbon span::after{content:\"\";position:absolute;right:0px;top:100%;z-index:-1;border-left:3px solid transparent;border-right:3px solid #8F0808;border-bottom:3px solid transparent;border-top:3px solid #8F0808}";function injectCSS(a){var b;if(b=document.getElementsByTagName("head")[0]){var c=document.createElement("style");c.type="text/css";c.innerHTML=a;b.appendChild(c)}}function injectCSSURL(a){var b;if(b=document.getElementsByTagName("head")[0]){var c=document.createElement("link");c.rel="stylesheet";c.type="text/css";c.href=a;b.appendChild(c)}}function getScrollTop(){if(void 0!==window.scrollY)return window.scrollY;if("undefined"!==typeof window.pageYOffset)return window.pageYOffset;var a=document.documentElement;return a.clientHeight?a.scrollTop:document.body.scrollTop}function getUserTagsOnDocument(){for(var a=document.getElementsByTagName("a"),b=[],c=0;c<a.length;c++)a[c]&&a[c].href&&a[c].href.match(/\/u/)&&(b[b.length]=a[c]);return b}function getPageContents(a,b,c){var d=new XMLHttpRequest;void 0!==c?(d.open("POST",b,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded")):d.open("GET",b,!0);d.onreadystatechange=function(){4==d.readyState&&200==d.status&&a(d.responseText)};d.send(c)}var lastHoveredProfileDetails,tempdoc;function getProfileDetailsCallback(a){tempdoc=document.implementation.createHTMLDocument();tempdoc.body.innerHTML=a;lastHoveredProfileDetails=tempdoc.getElementById("profile-advanced-details")}function getProfileDetails(a){getPageContents(getProfileDetailsCallback,a)}function reorganizeTimestamps(){for(var a=0;a<messages.length;a++){var b=messages[a].children,c=document.createElement("span");c.innerHTML=b[0].innerHTML;c.className="date-and-time";c.style="text-align: right;display:block;float:right;margin-left:10px;";var d=document.createElement("span");d.innerHTML=b[1].innerHTML;d.className="user-msg";messages[a].removeChild(messages[a].firstChild);messages[a].removeChild(messages[a].firstChild);messages[a].appendChild(d);messages[a].appendChild(c)}}function annoyingPrick(){for(var a=0;a<messages.length;a++)try{var b=messages[a].getElementsByClassName("msg")[0].children[0];0<b.children.length?"hoo"!=b.children[0].innerHTML.toLowerCase()&&"cookie"!=b.children[0].innerHTML.toLowerCase()&&"hoo cookie"!=b.children[0].innerHTML.toLowerCase()&&"cookie hoo"!=b.children[0].innerHTML.toLowerCase()||messages[a].parentNode.removeChild(messages[a]):"hoo"!=b.innerHTML.toLowerCase()&&"cookie"!=b.innerHTML.toLowerCase()&&"hoo cookie"!=b.innerHTML.toLowerCase()&&"cookie hoo"!=b.innerHTML.toLowerCase()||messages[a].parentNode.removeChild(messages[a])}catch(c){}}function addRefreshButton(){var a=document.createElement("span");a.innerHTML=" | ";var b=document.createElement("a");b.href="javascript:void(0)";var c=document.createElement("span");c.id="alive-refreshbutton";c.style="";c.onclick="chatbox.refresh()";c.innerHTML="Refresh";b.appendChild(c);c=chatboxFrame.getElementById("chatbox_display_archives");c.appendChild(b);c.appendChild(a)}var prevChatHTML;function checkChatboxChanged(){void 0!==prevChatHTML?chatboxElement.innerHTML!==prevChatHTML&&(annoyingPrick(),checkDubs()):(annoyingPrick(),checkDubs());prevChatHTML=chatboxElement.innerHTML}var chatboxFrame;function go(){null!==document.getElementById("i_logo")&&(document.getElementById("i_logo").src="http://i.imgur.com/LjuijqL.png");if(null!==document.getElementById("frame_chatbox"))chatboxFrame=document.getElementById("frame_chatbox").contentWindow.document,chatboxElement=chatboxFrame.getElementById("chatbox"),messages=chatboxElement.children,oldMessagesAmount=1,boxElement=document.createElement("div"),boxElement.className="box",boxElement.style="position: fixed;left: 1%;top: 2%;",ribbonElement=document.createElement("div"),ribbonElement.className="ribbon",ribbonText=document.createElement("span"),ribbonElement.appendChild(ribbonText),injectCSS(ribbonCSS),document.body.appendChild(boxElement),setInterval(function(){makeBox();checkChatboxChanged()},1E3),window.addEventListener("scroll",function(){remBox();var a=document.getElementById("box"),b=getScrollTop();null!==a&&(a.style.top=28>=b?"30px":b+2+"px")},!1),addRefreshButton();else throw"big chat is not supported by chatbox++, sorry";}window.addEventListener("load",go,!1);