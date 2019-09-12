/*

NO ONE COPYS MY CODE DIRECTLY

*/

//PLZ DON'T ASK WHY THERE IS SO MANY VARIABLES
var name = "P1";
var Ename = "P2";
var WeakA = "slash";
var StrongA = "DIE";
var EWeakA = "punch";
var EStrongA = "mega DIE";
var MultiP = false;
//Stats // Health
var h;
var Mh = 1000; //Max Health
var e;
var Me = 1200; //Max Health

//Move Probibility
var WeakP = 80;
var StrongP = 60;
var EWeakP = 90;
var EStrongP = 70;

//Damage
var AWeakD = [20, 80];
var AStrongD = [200, 400];
var AEWeakD = [10, 80];
var AEStrongD = [400, 500];
//Shake
var shake = 1;

//Opponent's Charged Attack Probabilty
var ChargedR = 2 / 3;

//Damage Change in Setup
var WeakD;
var StrongD;
var EWeakD;
var EStrongD;

//Turns (If both Always and NEVER are false, it's random)
var Always = true; //Aways be the first turn
var NEVER = false; //Never be the first turn
var yourTurn;

//Charge
var charge = 0;
var Echarge = 0;
//Charge Amount
var Mcharge = 5;
var EMcharge = 10;

///NO TOUCH THIS
var textShow = true;
var counter = 0;
var showText = -100;

//General
var rand;
var dT;
var hit;
var a = false;
var b;
var c;
var healthColorH, healthColorE;
var position;
var Eposition;

function setup() {
	createCanvas(400, 400);
	h = Mh;
	e = Me;
	position = createVector(100, 200);
	Eposition = createVector(300, 200);

	//Damage
	WeakD = createVector(AWeakD[0], AWeakD[1]);
	StrongD = createVector(AStrongD[0], AStrongD[1]);
	EWeakD = createVector(AEWeakD[0], AEWeakD[1]);
	EStrongD = createVector(AEStrongD[0], AEStrongD[1]);

	//Turns
	if (Always === true) {
		yourTurn = true
	} else if (NEVER === true) {
		yourTurn = false;
	} else {
		var TURN = floor(random(2));
		if (TURN === 0) {
			yourTurn = true;
		} else {
			yourTurn = false;
		}
	}
}

function draw() {
	background(0);
	fill(0);
	textAlign(LEFT);
	textSize(12);

	//Heath calculations
	var currentH = map(h, 0, Mh, 0, 100);
	var currentE = map(e, 0, Me, 0, 100);
	healthColorH = createVector(map(currentH, 0, 100, 255, 0), map(currentH, 0, 100, 0, 255), 0);
	healthColorE = createVector(map(currentE, 0, 100, 255, 0), map(currentE, 0, 100, 0, 255), 0);
	stroke(255);
	rect(0, 4 * height / 5, width - 1, height / 5 - 1);

	//Health
	noStroke();
	fill(255);
	rect(10, 4 * height / 5 + 20, 100, 20);
	fill(healthColorH.x, healthColorH.y, 0);
	rect(10, 4 * height / 5 + 20, currentH, 20);
	fill(255);
	text(h + '/' + Mh + " Health", 10, 4 * height / 5 + 50);
	text(charge + "/" + Mcharge + " Charge", 10, 4 * height / 5 + 70);
	text(name, 10, 4 * height / 5 + 15);

	// Bad guy health
	fill(255);
	rect(width - 110, 4 * height / 5 + 20, 100, 20);
	fill(healthColorE.x, healthColorE.y, 0);
	rect(width - 110, 4 * height / 5 + 20, currentE, 20);
	fill(255);
	text(e + '/' + Me, width - 110, 4 * height / 5 + 50);
	text(Ename, width - 110, 4 * height / 5 + 15);
	text(Echarge + "/" + EMcharge + " Charge", width - 110, 4 * height / 5 + 70);

	//TEXT
	text("Press A to do weak, but reliable attack.", 10, 20);
	text("DATA: prob:" + WeakP + "%" + ", att:" + WeakD.x + "~" + WeakD.y, 10, 40);
	text("Press S to do strong, but you have to charge it.", 10, 80);
	text("Data: charge: " + Mcharge + ", prob:" + StrongP + "%, att:" + StrongD.x + "~" + StrongD.y, 10, 100);
	text("Opponent's stats:  Weak: prob:" + EWeakP + "%, att: " + EWeakD.x + "~" + EWeakD.y, 10, 4 * height / 5 - 20);
	text("                                 Strong: charge: " + EMcharge + ", prob:" + EStrongP + "%, att:" + EStrongD.x + "~" + EStrongD.y, 10, 4 * height / 5 - 5);


	//Turn Base Stuff

	if (MultiP === false) {
		if (textShow) {
			if (yourTurn) {
				text(name + " turn!", width / 2 - 80, 4 * height / 5 + 20);
				if (key == 'a' && keyIsPressed) {
					showText = 0;
					textShow = false;
				}

				if (charge >= Mcharge) {
					if (key == 's' && keyIsPressed) {
						charge -= Mcharge;
						showText = 1;
						textShow = false;
					}
				}
			} else {
				if (counter >= 60) {
					counter = 0;
					textShow = 0;
					if (Echarge >= EMcharge) {
						rand = random(0, 1);

						if (rand <= ChargedR) {
							showText = 2;
						} else {
							showText = 3;
						}
					} else {
						showText = 2;
					}

				} else {
					text(Ename + " turn!", width / 2 - 80, 4 * height / 5 + 20);
					counter++;
				}
			}
		}
	} else {
		if (textShow) {
			if (yourTurn) {
				text(name + " turn!", width / 2 - 80, 4 * height / 5 + 20);
				if (key == 'a' && keyIsPressed) {
					showText = 0;
					textShow = false;
				}

				if (charge >= Mcharge) {
					if (key == 's' && keyIsPressed) {
						charge -= Mcharge;
						showText = 1;
						textShow = false;
					}
				}
			} else {
				text(Ename + " turn!", width / 2 - 80, 4 * height / 5 + 20);
				if (key == 'k' && keyIsPressed) {
					showText = 2;
					textShow = false;
				}

				if (charge >= Mcharge) {
					if (key == 'l' && keyIsPressed) {
						Echarge -= EMcharge;
						showText = 3;
						textShow = false;
					}
				}
			}
		}
	}

	//EVERTHING
	if (showText === 0 && a === false) {
		//Counter
		if (counter === 60) {
			//Random
			rand = floor(random(0, 101));

			if (rand <= WeakP) {
				dT = floor(random(WeakD.x, WeakD.y));
				e -= dT;
				counter = 0;
				hit = true;
				a = true;
			} else {
				counter = 0;
				hit = false;
				a = true;
			}

		} else {
			//IT HIT thing
			text(name + " used " + WeakA + "!", width / 2 - 80, 4 * height / 5 + 20);
			counter++;
		}
	}

	if (showText === 0 && a === true) {
		if (counter === 60) {
			showText = -100;
			textShow = true;
			yourTurn = false;
			a = false;
			if (hit) {
				charge++;
			}
			counter = 0;
		} else {
			if (hit) {
				text(Ename + " " + "took " + dT + " damage!", width / 2 - 80, 4 * height / 5 + 20);
				textSize(20);
				textAlign(CENTER);
				text("-" + dT + "HP", 300, 170);
				textSize(15);
				textAlign(LEFT);
				if (counter === 0) {
					Eposition.x += shake;
				} else if (counter === 59) {
					Eposition.x = 300
				} else if (Eposition.x === 300 - shake) {
					Eposition.x += 2 * shake;
				} else if (Eposition.x === 300 + shake) {
					Eposition.x -= 2 * shake;
				}
			} else {
				text("It missed!", width / 2 - 80, 4 * height / 5 + 20);
			}
			counter++;
		}
	}


	if (showText === 1 && a === false) {
		//Counter
		if (counter === 60) {
			//Random
			rand = floor(random(0, 101));

			if (rand <= StrongP) {
				dT = floor(random(StrongD.x, StrongD.y));
				e -= dT;
				counter = 0;
				hit = true;
				a = true;
			} else {
				counter = 0;
				hit = false;
				a = true;
			}

		} else {
			//IT HIT thing
			text(name + " used " + StrongA + "!", width / 2 - 80, 4 * height / 5 + 20);
			counter++;
		}
	}

	if (showText === 1 && a === true) {
		if (counter === 60) {
			showText = -100;
			textShow = true;
			a = false;
			yourTurn = false;
			// charge++;
			counter = 0;
		} else {
			if (hit) {
				text(Ename + " " + "took " + dT + " damage!", width / 2 - 80, 4 * height / 5 + 20);
				textSize(20);
				textAlign(CENTER);
				text("-" + dT + "HP", 300, 170);
				textSize(15);
				textAlign(LEFT);
				if (counter === 0) {
					Eposition.x += shake;
				} else if (counter === 59) {
					Eposition.x = 300
				} else if (Eposition.x === 300 - shake) {
					Eposition.x += 2 * shake;
				} else if (Eposition.x === 300 + shake) {
					Eposition.x -= 2 * shake;
				}
			} else {
				text("It missed!", width / 2 - 80, 4 * height / 5 + 20);
			}
			counter++;
		}
	}


	//BAD GUY
	if (showText === 2 && a === false) {
		//Counter
		if (counter === 60) {
			//Random
			rand = floor(random(0, 101));

			if (rand <= EWeakP) {
				dT = floor(random(EWeakD.x, EWeakD.y));
				h -= dT;
				counter = 0;
				hit = true;
				a = true;
			} else {
				counter = 0;
				hit = false;
				a = true;
			}

		} else {
			//IT HIT thing
			text(Ename + " used " + EWeakA + "!", width / 2 - 80, 4 * height / 5 + 20);
			counter++;
		}
	}

	if (showText === 2 && a === true) {
		if (counter === 60) {
			showText = -100;
			textShow = true;
			yourTurn = true;
			a = false;
			if (hit) {
				Echarge++;
			}
			counter = 0;
		} else {
			if (hit) {
				text(name + " " + "took " + dT + " damage!", width / 2 - 80, 4 * height / 5 + 20);
				textSize(20);
				textAlign(CENTER);
				text("-" + dT + "HP", 100, 170);
				textSize(15);
				textAlign(LEFT);
				if (counter === 0) {
					position.x += shake;
				} else if (counter === 59) {
					position.x = 100
				} else if (position.x === 100 - shake) {
					position.x += 2 * shake;
				} else if (position.x === 100 + shake) {
					position.x -= 2 * shake;
				}
			} else {
				text("It missed!", width / 2 - 80, 4 * height / 5 + 20);
			}
			counter++;
		}
	}


	if (showText === 3 && a === false) {
		//Counter
		if (counter === 60) {
			Echarge -= EMcharge;
			//Random
			rand = floor(random(0, 101));

			if (rand <= EStrongP) {
				dT = floor(random(EStrongD.x, EStrongD.y));
				h -= dT;
				counter = 0;
				hit = true;
				a = true;
			} else {
				counter = 0;
				hit = false;
				a = true;
			}

		} else {
			//IT HIT thing
			text(Ename + " used " + EStrongA + "!", width / 2 - 80, 4 * height / 5 + 20);
			counter++;
		}
	}

	if (showText === 3 && a === true) {
		if (counter === 60) {
			showText = -100;
			textShow = true;
			yourTurn = true;
			a = false;
			counter = 0;
			// charge++;
		} else {
			if (hit) {
				text(name + " " + "took " + dT + " damage!", width / 2 - 80, 4 * height / 5 + 20);
				textSize(20);
				textAlign(CENTER);
				text("-" + dT + "HP", 100, 170);
				textSize(15);
				textAlign(LEFT);
				if (counter === 0) {
					position.x += shake;
				} else if (counter === 59) {
					position.x = 100
				} else if (position.x === 100 - shake) {
					position.x += 2 * shake;
				} else if (position.x === 100 + shake) {
					position.x -= 2 * shake;
				}
			} else {
				text("It missed!", width / 2 - 80, 4 * height / 5 + 20);
			}
			counter++;
		}
	}

	noStroke();
	fill(100, 255, 100);
	ellipse(position.x, position.y, 50, 50);
	// ellipse(100, 200, 50, 50);

	fill(255, 100, 100);
	ellipse(Eposition.x, Eposition.y, 50);
	// ellipse(300, 200, 50, 50);

	textAlign(CENTER);
	fill(255);
	textSize(20);

	// if (yourTurn) {
	// 	text(name + " turn!", 200, 200);
	// 	if (a === true) {
	// 		if (rand <= 90) {
	// 			text("-" + dT + " HP", 300, 170);
	// 		}
	// 	}
	// } else {
	// 	text(Ename + " turn!", 200, 200);
	// 	if (a === true) {
	// 		if (rand <= 90) {
	// 			text("-" + dT + " HP", 100, 170);
	// 		}
	// 	}
	// }

	if (yourTurn) {
		text(name + " turn!", 200, 200);
	} else {
		text(Ename + " turn!", 200, 200);
	}

	//No Extra Deathing

	if (h <= 0) {
		h = 0;
	}
	if (e <= 0) {
		e = 0;
	}
	if (h <= 0 && a === false) {
		h = 0;
		fill(255, 0, 0);
		rect(0, 0, width, height);
		textSize(50);
		fill(255);
		text("You lose!", 200, 200);
		b = true;
		textShow = false;
	}
	if (e <= 0 && a === false) {
		e = 0;
		fill(100, 255, 100);
		rect(0, 0, width, height);
		textSize(50);
		fill(0);
		text("You win!", 200, 200);
		c = true;
		textShow = false;
	}

	if (b === true || c === true) {
		a = false;
	}

}


