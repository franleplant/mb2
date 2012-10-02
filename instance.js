
//juego.level[0] = [new Element(300, 200, 30, 30, document.getElementById("block"), juego,0,0), 
//                  new BloqueHorizontal(0, juego.height - juego.celda, 100, document.getElementById("ground"), juego, 0, 0)]
//

var juego = new Game();
var p1 = new Floor(0,4, "block",juego);
var p2 = new Static(200,200,30,30, "block",juego);

//esto es para player
//-------------------

//var standL = new Face(0,0, 25,33);
//var riftL =  new Face(31,1,28,33);
//var walkL0 = new Face(97,0,28,33);
//var walkL1 = new Face(68, 0 ,24,33);
//var walkL2 = new Face(131,0,32,33);
//var jumpL = new Face(175,0,34,33)
////main, riftL, standL, ,jumpL
//var marioMini = [walkL0,walkL1, walkL2 ,walkL1]
//var p3 = new Animable(100,338,"mMini",juego,marioMini);
juego.lvls[0] = new Level("#5983FF", [p1,p2])
juego.beginGame(juego);
console.log(juego);