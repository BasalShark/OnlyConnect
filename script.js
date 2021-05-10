var wordsOrig = ["Bishop", "Major", "Legend", "Sergeant", "Zinc", "AA", "Car", "Watch", "Admiral", "Churchill", "Confused", "Cooperative", "General", "Private", "Mate", "Cadet"];
var wordsOrig = ["Cycle", "Polar", "Plane", "Son", "Black", "Sun", "Spectacled", "Panda", "Sloth", "Pride", "Greed", "Wrath", "Murder", "Pack", "School", "Caravan"];
var wordsOrig2 = ["Chips", "Intersection", "Fall", "Pants", "Granny", "Reef", "Stopper",  "Slip", "Lash", "Witness", "Shadow", "Glass", "Flush",  "Pair", "House", "Straight"];
var wordsOrig = ["Beethoven", "Snowy", "Pluto", "Bolt", "Spike", "Pass", "Serve", "Dig", "Bed", "Water", "Window", "Reference", "Zimmer","Bach", "Sondheim", "Schumann"];
var wordsOrig1 = ["Never", "Master", "Mega", "Hive", "Honey", "Bronze", "Rust", "Sunrise" ,"Civic", "Radar", "Noon", "Madam", "Tango", "Foxtrot", "Kilo", "Echo"];
var wordsOrig = ["Sonnet", "Ode", "Elegy", "Concrete", "Over", "Floor", "Circuit", "Dash", "Escape", "Control", "Enter", "Shift", "Down", "Galway", "Cork", "Limerick"];
var wordsOrig = ["Diamond", "Belfast", "Enterprise", "Victory", "Amber", "Jade", "Onyx", "Jet", "Feud", "Brothers", "Moon", "Orange", "Scratch", "Swift", "Ruby", "Python"];
var wordsOrig = ["Pop", "Crackle", "Buzz", "Crack", "Out", "Dance", "Fast", "Down", "Parking", "Jail", "Chance", "Go", "Cheat", "Bridge", "Gin", "Snap"];
var wordsOrig = ["Skye", "Raider", "Perri", "Strokes", "Killers", "Kooks", "Wombats", "Weeknd", "Crown", "Kangaroo", "Sheriff", "High", "Cause", "A", "By", "Path"];
var wordsOrig = ["Foot", "League", "Stone", "Cable", "Hair", "Disco", "Swing", "Masked", "Reel", "Line", "Rod", "Hook", "Crunch", "Kirk", "America", "Caveman"];
var wordsOrig = ["Tornado", "Mosquito", "Mohawk", "Lightning", "Mull", "Rum", "Yell",  "Holy",  "Hurricane", "Wine",  "Flute","Shot", "Bath", "Beer", "Place", "Door"];
	
var groups = [[],[],[],[]];
var guess = [];
var counter = 0;
var j, value;
var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var words = [];
var elem = document.documentElement;	
var wordNum;
var alive = true;
var lives = 3;

//Called by hieroglyphs - sets up the wall.	
function beginWall(wordNumber) {
	if (wordNumber == 1) {
		words = Array.from(wordsOrig1);
		wordNum = 1;
	} else {
		words = Array.from(wordsOrig2);
		wordNum = 2;
	}
	
	openFullScreen();
	shuffleArray(array, words);
	sortGroups(array, words);
	document.getElementById("wall").style.display = "block";
}

//Shuffles the words array.
function shuffleArray(array, words) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		temp = words[i];
		words[i] = words[j];
		words[j] = temp;
	}
}

//Sorts into groups
function sortGroups(array, words) {
	for (var number = 0; number < 16; number++) {
		document.getElementById(number).innerHTML = words[number];
		var q = Math.floor(number/4);
		groups[q].push(array.indexOf(number));
		groups[q] = insertionSort(groups[q]);
	}
}

function insertionSort(list) {
	var value = 0;
	var index = 0;
	for (var i = 1; i < list.length; i++) {
		value = list[i];
		index = i;
		while (index > 0 && value < list[index - 1]) {
			list[index] = list[index - 1];
			index -= 1;
		}
		list[index] = value;
	}
	return list;
}

function openFullScreen() {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0; // Chrome, Firefox, Internet Explorer and Opera
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { // Firefox 
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* Internet Explorer and Edge */
		elem.msRequestFullscreen();
	}
	document.getElementById("imageLogo1").style.display = "none";
	document.getElementById("imageLogo2").style.display = "none";
	document.getElementById("next").style.display = "block";
	
}

//--------------------------------- Selection ------------------------------------------\\
	
function selectButton(selected) {
	value = 0;
	repeated = false;
	
	//Checks each value in guess to see if already selected
	while (value < 4 && repeated == false && alive == true){
		if (guess[value] == selected){
			document.getElementById(selected).style.backgroundColor = "white";
			
			//Removes value from list
			for (m = value; m < guess.length; m++) {
				guess[m] = guess[m+1];
			}
			repeated = true;
			guess.pop();
		}
		value += 1;
	}

	//Add guess to guess array
	if (repeated == false && alive == true) {
		guess.push(selected);
		document.getElementById(selected).style.backgroundColor = "#ff9933";
	}
	
	//If guess has four values, sort guess array and then check if it matches.
	if (guess.length >= 4 && alive == true) {
		guess = insertionSort(guess);
			
		if (checkGroup(guess) == true) {
			setTimeout(removeGuess, 200, guess);
		}
		else {
			setTimeout(clearGuess, 200, guess);
		}
	}
}

//Checks if sorted guess matches any of the wordlist groups.
function checkGroup(guess) {
	var k = 0;
	var found = false;
	while (found == false && k < groups.length) {
		if (groups[k].toString() == guess.toString()) {
			found = true;
		}
		k += 1
	}
	return found;
}

//Incorrect guesses
function clearGuess(guess) {
	if (counter == 2) {
		lives -= 1;
	}
	if (lives == 0) {
		alive = false;
		for (var number = 0; number < 16; number++) {
			document.getElementById(number).style.backgroundColor = "#cccccc";
		}
	} else {
		while (guess.length > 0) {
			document.getElementById(guess[0]).style.backgroundColor = "white";
			guess.shift();
		}
	}	
}


//Correct guesses
function removeGuess(guess) {
	while (guess.length > 0) {
		document.getElementById(guess[0]).style.display = "none";
		guess.shift();
	}
	counter += 1;
	if (counter == 3) {
		showAnswers();
	}
}


function showAnswers() {
	document.getElementById("wall").style.display = "none";
	document.getElementById("next").style.display = "none";
	document.getElementById("answers").style.display = "block";
	
	if (wordNum == 1) {
		for (var k = 0; k < 16; k++) {
			document.getElementById(k+16).innerHTML = wordsOrig1[k];
		}
	} else {
		for (var k = 0; k < 16; k++) {
			document.getElementById(k+16).innerHTML = wordsOrig2[k];
		}
	}
}
