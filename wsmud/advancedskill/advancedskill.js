function start() {
	var force = [["force"],
			 ["御气之道", "内力上限＋", 125000],
			 ["防御之道", "防御＋", 2500],
			 ["气血之道", "气血＋", 60000],
			 ["炼体之道", "根骨＋", 400],
			 ["强体之道", "臂力＋", 300],
			 ["永生之道", "年龄－", 10, "岁"],
			 ["守护之道", "免伤＋", 5, "%"],
			 ["暴虐之道", "终伤＋", 5, "%"]];
	var dodge = [["dodge"],
			 ["躲闪之道", "躲闪＋", 2500],
			 ["防御之道", "防御＋", 2500],
			 ["御气之道", "内力上限＋", 110000],
			 ["命中之道", "命中＋", 2000],
			 ["轻盈之道", "身法＋", 300]];
	var unarmed = [["unarmed"],
			 ["命中之道", "命中＋", 2500],
			 ["攻击之道", "攻击＋", 2150],
			 ["御气之道", "内力上限＋", 110000],
			 ["防御之道", "防御＋", 2000],
			 ["招架之道", "招架＋", 2000],
			 ["强体之道", "臂力＋", 400]];
	var parry = [["parry"],
			 ["招架之道", "招架＋", 2400],
			 ["气血之道", "气血＋", 47500],
			 ["御气之道", "内力上限＋", 110000],
			 ["防御之道", "防御＋", 2000],
			 ["明悟之道", "悟性＋", 150],
			 ["炼体之道", "根骨＋", 300]];
	var weapon = [["weapon"],
			 ["攻击之道", "攻击＋", 2000],
			 ["命中之道", "命中＋", 2300],
			 ["防御之道", "防御＋", 2300],
			 ["招架之道", "招架＋", 2000],
			 ["强体之道", "臂力＋", 300],
			 ["躲闪之道", "躲闪＋", 2000],
			 ["残暴之道", "暴击＋", 2.5]];
	createButton(force);
	createButton(dodge);
	createButton(unarmed);
	createButton(parry);
	createButton(weapon);
}



function createButton(array) {
	var tr = document.getElementById(array[0][0]);
	for (var i = 1; i < array.length; i++) {
		var name = array[i][0];
		var effect = array[i][1];
		var number = array[i][2];
		var unit = array[i][3];

		var button = document.createElement("button");
		button.type = "button";
		button.innerHTML = name;
		button.value = number;
		button.onclick = clickAdvancedButton;

		var td = document.createElement("td");
		td.appendChild(button);
		tr.appendChild(td);
	}
}
function clickAdvancedButton() {
	
}



// 913级轻功 橙色 御气之道 内力上限＋100430

// 3018级武器 紫色 强体之术 臂力＋724
// 3018级武器 紫色 残暴之心 暴击＋6%

// 2686级武器 紫色 招架之道 招架＋4297

// 1426级武器 黄色 防守之道 防御＋2010
// 1426级武器 黄色 招架之道 招架＋1711


// 878级内功 黄色 防御之道 防御＋1317
// 878级内功 黄色 炼体之术 根骨＋210


