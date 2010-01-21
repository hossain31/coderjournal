/*
 comment
*/
function notCalled(a){alert(a)}var o=function(){var a={},b=1E3;a.onclick=function(){};a.onmouseover=a.onmouseout=a.onmousemove=a.onclick;a.onclick=a.onclick;b&&b++;return a}();