// ==UserScript==
// @name        Color Vampire
// @namespace   Hide yo colors hide yo styles
// @include     http://aimgames.forummotion.com/*
// @version     1.2.2
// @grant       none
// ==/UserScript==

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function colourNameToHex(colour)
{
    var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (typeof colours[colour.toLowerCase()] != 'undefined')
        return colours[colour.toLowerCase()];
    console.log(colours['red']);
    return false;
}

function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    var expires = '';
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } 
  else var expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}


$(document).on("keydown", function(e){
  if (e.which === 13) { /// 13 is enter
    if ($('.msg').length > 0) {
      var msg = $(".msg");
      var more = msg[msg.length - 1].children;
      var layer = more[0].style.color;
      
      var old_msg = document.getElementById('message').value;       
      if(more[0].getElementsByTagName("strong").length > 0){        
        old_msg = '[b]' + old_msg + '[/b]'; 
      }else if(more[0].getElementsByTagName("i").length > 0 || getElementsByTagName("em").length > 0){       
        old_msg = '[i]' + old_msg + '[/i]'; 
      }else if(more[0].getElementsByTagName("u").length > 0){        
        old_msg = '[u]' + old_msg + '[/u]'; 
      }else if(more[0].getElementsByTagName("strike").length > 0){
        old_msg = '[strike]' + old_msg + '[/strike]';
      }       
      document.getElementById('message').value = old_msg;
      
      
      var test = layer.indexOf("(");
      if(test != -1){
        var strCol = layer.substr(4, layer.length - 5).split(",");    
        var red = parseInt(strCol[0]);
        var green = parseInt(strCol[1]);
        var blue = parseInt(strCol[2]);        
        var hex = rgbToHex(red, green, blue);
        document.getElementById('scolor') .value = hex;
        document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + red + ',' + green + ',' + blue + ');';
        document.getElementById('message') .style.color = hex;
        setCookie('CB_color', hex, 1)
      }else{
        var setCol = colourNameToHex(layer);
        document.getElementById('scolor') .value = setCol;
        document.getElementById('divcolor-preview') .style.cssText = 'background-color: rgb(' + hexToRgb(setCol).r + ',' + hexToRgb(setCol).g + ',' + hexToRgb(setCol).b + ');';
        document.getElementById('message') .style.color = setCol;
        setCookie('CB_color', setCol, 1)
      }      
    }  
  }
}); 
