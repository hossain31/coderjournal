function notCalled(a){alert(a)}var o=(function(){var h={};var e="on";var j="on"+e+"mouse";var g=j+1000+"on";var a=h[g];
/*
important comment
*/
var f=1000;h.onclick=function(){};h.onmouseover=h.onmouseout=h.onmousemove=h.onclick;h.onclick=h.onclick;if(f){f++}return h})();