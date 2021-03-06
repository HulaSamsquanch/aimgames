// ==UserScript==
// @name        Swearify Image Utility
// @namespace   samsquanchhunter
// @include     *
// @version     alpha.1.4
// @icon        http://i.imgur.com/MnWNRBL.png
// @grant       none
// ==/UserScript==

/**
 * a rewrite of the Image Reuploader userscript
 *
 */

/**
 * some utility functions
 */
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

/**
 * create the context item
 */
function createStuff() {
    document.addEventListener('contextmenu', onRightClick, false);

    if (document.getElementsByTagName('menu').length === 0) {
        var menu = document.createElement('menu');
        menu.id = 'userscript-grease';
        menu.type = 'context';
    } else {
        menu = document.getElementsByTagName('menu')[0];
    }
    var menuitem = document.createElement('menuitem');
    menuitem.id = 'menu_imgre';
    menuitem.label = 'Resize and Upload';
    menuitem.icon = 'http://i.imgur.com/F2wghzO.png';
    menu.appendChild(menuitem);
    document.body.appendChild(menu);

    document.querySelector('#userscript-grease #menu_imgre')
        .addEventListener('click', checkImageOrigin, false);
}

function onRightClick(e) {
    // Executed when user right click on web page body
    // aEvent.target is the element you right click on
    document.body.setAttribute('contextmenu', 'userscript-grease');
    var node = e.target;
    link = e.target.getAttribute('imageURL');
    var item = document.querySelector('#userscript-grease #menu_imgre');
    if (node.localName == 'img') {
        item.disabled = false;
        item.setAttribute('imageURL', node.src);
    } else {
        item.disabled = true;
    }
}

/**
 * if the image is from the same origin, we can place it into a canvas
 * if not, we just upload it to imgur
 */
function checkImageOrigin(){
    var pageOrigin = window.location.origin;
    var imageOrigin = document.getElementById('menu_imgre').getAttribute('imageurl');
    
    console.log(pageOrigin + ' ' + imageOrigin);
    
    createCanvas();
}

/**
 * part of a lifesaving library https://github.com/viliusle/Hermite-resize
 */
function resample_hermite(canvas, W, H, W2, H2) {
    var time1 = Date.now();
    W2 = Math.round(W2);
    H2 = Math.round(H2);
    var img = canvas.getContext('2d').getImageData(0, 0, W, H);
    var img2 = canvas.getContext('2d').getImageData(0, 0, W2, H2);
    var data = img.data;
    var data2 = img2.data;
    var ratio_w = W / W2;
    var ratio_h = H / H2;
    var ratio_w_half = Math.ceil(ratio_w / 2);
    var ratio_h_half = Math.ceil(ratio_h / 2);

    for (var j = 0; j < H2; j++) {
        for (var i = 0; i < W2; i++) {
            var x2 = (i + j * W2) * 4;
            var weight = 0;
            var weights = 0;
            var weights_alpha = 0;
            var gx_r = gx_g = gx_b = gx_a = 0;
            var center_y = (j + 0.5) * ratio_h;
            for (var yy = Math.floor(j * ratio_h); yy < (j + 1) * ratio_h; yy++) {
                var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                var center_x = (i + 0.5) * ratio_w;
                var w0 = dy * dy; //pre-calc part of w
                for (var xx = Math.floor(i * ratio_w); xx < (i + 1) * ratio_w; xx++) {
                    var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                    var w = Math.sqrt(w0 + dx * dx);
                    if (w >= -1 && w <= 1) {
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        if (weight > 0) {
                            dx = 4 * (xx + yy * W);
                            //alpha
                            gx_a += weight * data[dx + 3];
                            weights_alpha += weight;
                            //colors
                            if (data[dx + 3] < 255)
                                weight = weight * data[dx + 3] / 250;
                            gx_r += weight * data[dx];
                            gx_g += weight * data[dx + 1];
                            gx_b += weight * data[dx + 2];
                            weights += weight;
                        }
                    }
                }
            }
            data2[x2] = gx_r / weights;
            data2[x2 + 1] = gx_g / weights;
            data2[x2 + 2] = gx_b / weights;
            data2[x2 + 3] = gx_a / weights_alpha;
        }
    }
    console.log('hermite = ' + (Math.round(Date.now() - time1) / 1000) + ' s');
    canvas.getContext('2d').clearRect(0, 0, Math.max(W, W2), Math.max(H, H2));
    canvas.width = W2;
    canvas.height = H2;
    canvas.getContext('2d').putImageData(img2, 0, 0);
}

/**
 * create a canvas then call the function to resize the image into the canvas
 */
function createCanvas() {
    var bodyCanvas = document.createElement('canvas');
    bodyCanvas.id = 'canvasImg';
    bodyCanvas.style = 'display:none;';
    document.body.appendChild(bodyCanvas);
    resizeIntoCanvas();
}

/**
 * gets the canvas created in the last function and places the resized image into it
 * after waiting a timeout to make sure the canvas is filled, the uploadtoimgur function is called
 */
function resizeIntoCanvas() {
    var canvas = document.getElementById('canvasImg');
    var ctx = canvas.getContext('2d');

    var img = new Image();    
    img.crossOrigin = 'Anonymous'; //cors support
    img.onload = function() {
        var W = img.width;
        var H = img.height;
        canvas.width = W;
        canvas.height = H;
        ctx.drawImage(img, 0, 0); //draw image

        //resize by ratio
        var prefH = 50;
        var heightR = prefH / H;
        //var ratio = 0.43895525; //from 0 to 1
        resample_hermite(canvas, W, H, Math.round(W * heightR), prefH);

        //resize manually
        //resample_hermite(canvas, W, H, 439, 222);
    };
    var str = document.getElementById('menu_imgre').getAttribute('imageurl');    
    console.log(str);
    
    /* before the .src is set, we'll add a event listener */
    
    var booleanError = false;
    
    img.addEventListener('error', function (e) {
        e.preventDefault(); // Prevent error from getting thrown
        console.log('errored');
        booleanError = true;
    });
    
    img.src = str;
    
    if(booleanError){
        /* errors, default to imgur direct */
        uploadImagetoImgur(document.getElementById('menu_imgre').getAttribute('imageurl'));
    } else {
        /* no errors */
        setTimeout(function() {
            uploadCanvastoImgur(canvas);        
            document.getElementById('canvasImg').remove();
        }, 1000);    
    }              
}

/**
 * this uploads the canvas passed to it
 */
function uploadImagetoImgur(dataIn) {
    console.log('attempting to upload');    
    /* */

    var fd = new FormData();
    fd.append('image', dataIn); // Append the file
    
    var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
    xhr.open('POST', 'https://api.imgur.com/3/image.json'); // Boooom!
    xhr.onload = function() {
        var link = JSON.parse(xhr.responseText).data.link;
        alert(link);
    };
    xhr.onerror = function() { alert('error'); };
    xhr.setRequestHeader('Authorization', 'Client-ID d8b88dd7493540b');
    xhr.send(fd);
}

/**
 * this uploads the canvas passed to it
 */
function uploadCanvastoImgur(dataIn) {
    console.log('attempting to upload');    
    /* */

    var fd = new FormData();
    fd.append('image', dataIn.toDataURL().split(',')[1]); // Append the file
    fd.append('type', 'base64');
    
    var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
    xhr.open('POST', 'https://api.imgur.com/3/image.json'); // Boooom!
    xhr.onload = function() {
        var link = JSON.parse(xhr.responseText).data.link;
        alert(link);
    };
    xhr.onerror = function() { alert('error'); };
    xhr.setRequestHeader('Authorization', 'Client-ID d8b88dd7493540b');
    xhr.send(fd);
}

/**
 * uhh
 */
if (document.addEventListener)
  document.addEventListener('DOMContentLoaded', createStuff(), false);



