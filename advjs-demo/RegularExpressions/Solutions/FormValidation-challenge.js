//	Regular Expressions
var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
var rePassword = /^[A-Za-z\d]{6,8}$/;
var reProperName = /^([A-Z][A-Za-z']+ )*[A-Z][A-Za-z']+$/;
var reInitial = /^[A-Z]?$/;
var reState = /^[A-Z]{2}$/;
var rePostalUS = /^\d{5}(\-\d{4})?$/;
var rePostalCA = /^[A-Z]\d[A-Z] \d[A-Z]\d$/;
var rePostalUK = /^[A-Z]{2}[0-9]{1,2} ?[0-9]{1}[A-Z]{2}$/;
var reUsername = /^[A-Za-z\d]{6,15}$/;

/*
	Function Name: compareValues
	Arguments: val1, val2
	Returns:
		0 if two values are equal
		-1 if val1 is greater than val2
		1 if val2 is greater than val1
*/
function compareValues(val1, val2){
	if (val1 > val2) {
		return -1;
	} else if(val2 > val1) {
		return 1;
	} else {
		return 0;
	}
}

/*
	Function Name: checkRadioArray
	Arguments: radioButtons
	Returns:
		true if one of the radio buttons is checked
		false otherwise
*/
function checkRadioArray(radioButtons){
	for (var i=0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			return true;
		}
	}
	return false;
}

/*
	Function Name: checkCheckBox
	Arguments: cb
	Returns:
		true if the checkbox is checked
		false otherwise
*/
function checkCheckBox(cb){
	return cb.checked;
}

/*
	Function Name: checkSelect
	Arguments: select
	Returns:
		false if the first option is selected
		true otherwise
*/
function checkSelect(select){
	return (select.selectedIndex > 0);
}

/*
	Function Name: checkTextArea
	Arguments: text, max
	Returns: nothing
	Action: alerts user if length of text is greater than max
*/
function checkTextArea(text, max){
	if (!checkLength(text, 0, max)) {
		var numChars = text.length;
		var chopped = text.substr(0, max);
		var message = 'You typed ' + numChars + ' characters.\n';
		message += 'The limit is 100.';
		message += 'Your entry will be shortened to:\n\n' + chopped;
		alert(message); 
	}
}

function checkLength(text, min, max){
	min = min || 1;
	max = max || 10000;

	if (text.length < min || text.length > max) {
		return false;
	}
	return true;
}
