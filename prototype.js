var Game = {
	INTERVAL : 1000,
	INTERVAL_ATTACKER : 500
};

//类的构造方法，面向对象编程思想
Game.player = function(role){
	this.role = role;
};

//在类的原型上构造函数
Game.player.prototype.outputRole = function() {
	alert(this.role);
};

Game.player.prototype.tmpRole = "tmpRole";//其他类型的对象也可以，不一定是函数

//以下无效，会报错
// Game.prototype.outputPara = function() {
// 	alert(this.INTERVAL);
// };



//-------------------------------------------------

Game2 = function(role){
	this.role = role;
}
Game2.prototype.outputRole = function() {
	alert(this.role);
};

