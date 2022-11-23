const abilityPoint = 25;

//Functions

/********************************
 * Shorten A = CONSTANT + B + C + D .... 
 * as get(B,C,D,...) => set A 
 * toSet : A 
 * konstanta : CONSTANT
 * getList is the rest: (sign, toGet) 
 */
function summingArgs(toSet, konstanta,  ...getList) {
	let toGet = [];
	let signs = [];
	for(let i=0; i<getList.length; i++) {
		toGet.push(getList[2*i-1]);	
		signs.push(getList[2*i]);	
	}
	getAttrs(toGet, values => {
		let sum = 0;
		for(let i=0; i<toGet.length; i++) {
			if(signs[i] == "-" ) 
				sum -= values.[toGet[i]];
			if(signs[i] == "+" )
				sum += values.[toGet[i]];
		}
		setAttrs( { toSet, sum + konstanta } );
	}
}

function calcAbilityPointLeft() {
	//ability-point-left = abilityPoint(25) + ability-add-point - (all abilities except luck) 
	summingArgs( "ability-point-left", 
		abilityPoint, 
		"+", "ability-add-point", 
		"-", "ability-shintai" 
		"-", "ability-kiyou"
		"-", "ability-seishin" 
		"-", "ability-gokan" 
		"-", "ability-chiryoku" 
		"-", "ability-miryoku" 
		"-", "ability-shakai" 
	);
}

//return array of skills affected by ability
function getAffectedSkills(abilityName) {
	//iterate on skills and list up matching ones
}

on(`change:ability-add-point`, () => {
	calcAbilityPointLeft();
});

on(`change:ability-shintai`, () => {
	//ABILITIES PAGE 
	//--------------
	calcAbilityPointLeft();
	//hp_max = 10 + ability-shintai
	summingArgs( "hp_max", 10, "+", "ability-shintai");
	
});

on(`change:ability-kiyou`, () => {
	//ABILITIES PAGE 
	//--------------
	calcAbilityPointLeft();
	//SKILLS PAGE
});

on(`change:ability-seishin`, () => {
	//ABILITIES PAGE 
	//--------------
	calcAbilityPointLeft();
	summingArgs( "ability-point-left", 	abilityPoint, 	"+", "ability-add-point", "-", "ability-shintai" );
	//mp_max = ability-seishin + ability-chiryoku
	
});

on(`change:ability-gokan`, () => {
	//ABILITIES PAGE 
	//--------------
	calcAbilityPointLeft();
});


on(`change:ability-chiryoku`, () => {
	//ABILITIES PAGE 
	//--------------
	calcAbilityPointLeft();
	//mp_max = ability-seishin+ability-chiryoku
});

on(`change:ability-miryoku`, () => {
	//ABILITIES PAGE 
	//--------------
	calcAbilityPointLeft();
});

on(`change:ability-shakai`, () => {
	//ABILITIES PAGE 
	//--------------
	calcAbilityPointLeft();
});

on(`change:ability-unsei`, () => {
	//ABILITIES PAGE 
	//--------------
});

on(`clicked:unsei-roll`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-unsei = 1d6;

});


