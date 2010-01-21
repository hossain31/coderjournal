function notCalled(text) {
	alert(text);
}
/**
 * @license comment
 */
var o = (function(){
var o = {};
var b = "on";
var c = "on" + b + "mouse";
var d = c + 1000 + "on";
var x = o[d];
/*!
important comment
*/
var i = 1000;
o["on" + "click"] = function(){};
o["on" + "mouse" + "over"] =
o["on" + "mouse" + "out"] =
o["on" + "mouse" + "move"] = o["on" + "click"];
o["on" + "click"] = o["on" + "click"];
if(i)
i++
;
return o
})();
