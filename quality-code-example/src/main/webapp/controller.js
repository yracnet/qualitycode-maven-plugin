/* 
	* To change this license header, choose License Headers in Project Properties.
	* To change this template file, choose Tools | Templates
	* and open the template in the editor.
	*/
var a = a || {}; 
var f = function (a,b,c){ b=a; c=b; return a+b+c;};
var action={
	create:function(a,b){ var c = b;b=a;return a+b+c;},
	update:function(a,b){return a*b*f(a,b,a+b);}
};
action.remove = function(){
	action.create(0,1);
};