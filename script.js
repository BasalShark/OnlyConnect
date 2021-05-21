//Game 1 Walls
/*
var wordsOrig1 = ["Stone", "Information", "Middle", "Bronze", "Angel", "Lemon", "Basking", "Tiger", "Rolling", "Median", "Mean", "Mode", "Classical", "Soul", "Rock", "Blues"];
var wordsOrig2 = ["Death", "Mail", "Adder", "Beauty", "Pong", "Snake", "Asteroids", "Gauntlet", "Ace", "Love", "Serve", "Volley", "Cardboard", "Match", "Post", "Tool"];
*/

//Game 2 Walls
/*
var wordsOrig1 = ["Nicholson", "Black", "Frost", "Sparrow", "Link", "Peach", "Daisy", "Toad", "Whitehall", "Buckingham", "Kensington", "Scone", "Rhea", "Penguin", "Emu", "Kiwi"];
var wordsOrig2 = ["Spider", "Strong", "Police", "Fire", "Polo", "Lacrosse", "Hurling", "Hockey", "Bee", "Worm", "Snail", "Fly", "Atlas", "Golf", "Caddy", "Beetle"];
*/

//Game 3 Walls
/*
var wordsOrig1 = ["Sonnet", "Ode", "Elegy", "Concrete", "Over", "Floor", "Circuit", "Dash", "Escape", "Control", "Enter", "Shift", "Down", "Galway", "Cork", "Limerick"];
var wordsOrig2 = ["Diamond", "Belfast", "Enterprise", "Victory", "Amber", "Jade", "Onyx", "Jet", "Feud", "Brothers", "Moon", "Orange", "Scratch", "Swift", "Ruby", "Python"];
*/

//Game 4 Walls
/*
var wordsOrig1 = ["Bishop", "Major", "Legend", "Sergeant", "Zinc", "AA", "Car", "Watch", "Admiral", "Churchill", "Confused", "Cooperative", "General", "Private", "Mate", "Cadet"];
var wordsOrig2 = ["Cycle", "Polar", "Plane", "Son", "Black", "Sun", "Spectacled", "Panda", "Sloth", "Pride", "Greed", "Wrath", "Murder", "Pack", "School", "Caravan"];
*/

//Game 5 Walls
/*
var wordsOrig1 = ["Port", "Hold", "Bridge", "Bow", "Shut", "Count", "Lock", "Cool", "Steady", "Calm", "Compose", "Relax", "Bourbon", "Club", "Nice", "Penguin"];
var wordsOrig2 = ["Barrel", "Cross", "Dutch", "Bass", "Heel", "Cap", "Sole", "Lace", "Corkscrew", "Pike", "Tuck", "Twist", "Bun", "Extension", "Highlight", "Fade"];
*/
//Game 6 Walls

var wordsOrig1 = ["Proverbs", "Numbers", "Matthew", "Lamentations", "Word", "Sway", "Defender", "Teams", "Forward", "Keeper", "Wing", "Centre", "Range", "Standing", "Will", "Styles"];
var wordsOrig2 = ["Sargasso", "Dead", "Black", "Adriatic", "Red", "Tiananmen", "Trafalgar", "Times", "Sun", "Mirror", "Star", "Telegraph", "North", "Bean", "Flag", "Tad"];

//Other walls (Mine)

//var wordsOrig2 = ["Foot", "League", "Stone", "Cable", "Hair", "Disco", "Swing", "Masked", "Reel", "Line", "Rod", "Hook", "Crunch", "Kirk", "America", "Caveman"];
//var wordsOrig = ["Beethoven", "Snowy", "Pluto", "Bolt", "Spike", "Pass", "Serve", "Dig", "Bed", "Water", "Window", "Reference", "Zimmer","Bach", "Sondheim", "Schumann"];
//var wordsOrig = ["Pop", "Crackle", "Buzz", "Crunch", "Out", "Dance", "Fast", "Down", "Parking", "Jail", "Chance", "Go", "Cheat", "Bridge", "Gin", "Snap"];


//Other walls (Not mine)

//Molly:
//var wordsOrig = ["Never", "Master", "Mega", "Hive", "Honey", "Bronze", "Rust", "Sunrise" ,"Civic", "Radar", "Noon", "Madam", "Tango", "Foxtrot", "Kilo", "Echo"];

//Molly & George
//var wordsOrig = ["Tornado", "Mosquito", "Mohawk", "Lightning", "Mull", "Rum", "Yell",  "Holy",  "Hurricane", "Wine", "Flute", "Shot", "Bath", "Beer", "Place", "Door"];

//Callum & Struan
//var wordsOrig1 = ["Skye", "Raider", "Perri", "Strokes", "Killers", "Kooks", "Wombats", "Weeknd", "Crown", "Kangaroo", "Sheriff", "High", "Cause", "A", "By", "Path"];

//Callum, Dylan & Charlie
//var wordsOrig2 = ["Vision", "Scope", "Graph", "Phone", "Who", "Al", "Evil", "Strange", "Condor", "Wolverine", "Ghost", "Pelican", "Flash", "Robin", "Atom", "Storm"]

//Charlie & Annie
//var wordsOrig1 = ["Season", "Suit", "Humour", "Musketeer", "Muse", "Hypnosis", "Narcissism", "Atlas", "Blur", "Pilot", "Wings", "Queen", "Expose", "Rotate", "Filter", "Crop"];
//var wordsOrig2 = ["Spine", "Leaf", "Sleeve", "Index", "Pinky", "Scrat", "Basil", "Simon", "Ring", "Tape", "Earth", "Hook", "Rodgers", "Hall", "Lennon", "Sonny"];

//Aishling & Struan
//var wordsOrig = ["Glass", "Shadow", "Witness", "Lash", "Intersection", "Fall", "Chips", "Pants", "Straight", "Flush", "Pair", "House", "Granny", "Stopper", "Reef", "Slip"]


//Millie, Islay, Louise

//var wordsOrig1 = ["Persian", "Norwegian Forest", "Munchkin", "Cheshire", "Red", "Bee", "Elizabeth II", "Land", "Screen", "Finger", "News", "Digital", "Dean", "Sherwood", "Dalby", "Galloway"];
//var wordsOrig2 = ["Marigold", "Mustard", "Canary", "Lemon", "Tulips", "Carnations", "Daisies", "Buttercup", "Rose", "Lilly", "Islay", "Millie", "Ball", "Stool", "Print", "Note"];

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
