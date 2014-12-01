function populateMain(mainSel, subSel){
	var mainMenu = mainSel;
	var subMenu = subSel;
	mainMenu.options.length = 0;
	for (var i = 0; i < MENU.length; i++) {
		mainMenu.options[i] = MENU[i][0];
	}
	populateSub(mainMenu, subMenu);
}

function populateSub(mainSel, subSel){
	var mainMenu = mainSel;
	var subMenu = subSel;
	subMenu.options.length=1;
	var optMainMenu = mainMenu.selectedIndex;
	for (var i=1; i < MENU[optMainMenu].length; i++) {
		subMenu.options[i] = MENU[optMainMenu][i];
	}
}

function jumpMenu(select){
	var i = select.selectedIndex;
	var url = select.options[i].value;
	if (i > 0) {
		location.href = url;
	}
}
