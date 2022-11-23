
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

//ability-point-left = abilityPoint(25) + ability-add-point - (all abilities except luck) 
function calcAbilityPointLeft() {
	const abilityPoint = 25;
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


/*ABILITIES PAGE
 */

on(`change:ability-add-point`, () => {
	calcAbilityPointLeft();
});

on(`change:ability-shintai`, () => {
	calcAbilityPointLeft();
	//hp_max = 10 + ability-shintai
	summingArgs( "hp_max", 10, "+", "ability-shintai");
	
});

on(`change:ability-kiyou`, () => {
	calcAbilityPointLeft();
	//SKILLS PAGE
});

on(`change:ability-seishin`, () => {
	calcAbilityPointLeft();
	summingArgs( "ability-point-left", 	abilityPoint, 	"+", "ability-add-point", "-", "ability-shintai" );
	//mp_max = ability-seishin + ability-chiryoku
	summingArgs( "mp_max", 	0 , "+", "ability-seishin", "+", "ability-chiryoku" );
});

on(`change:ability-gokan`, () => {
	calcAbilityPointLeft();
});

on(`change:ability-chiryoku`, () => {
	calcAbilityPointLeft();
	//mp_max = ability-seishin+ability-chiryoku
	summingArgs( "mp_max", 	0 , "+", "ability-seishin", "+", "ability-chiryoku" );
});

on(`change:ability-miryoku`, () => {
	calcAbilityPointLeft();
});

on(`change:ability-shakai`, () => {
	calcAbilityPointLeft();
});

on(`change:ability-unsei`, () => {
});

on(`clicked:unsei-roll`, () => {
	//ability-unsei = 1d6;
	let keberuntungan = Math.floor(Math.random() * 6 ) + 1;
	summingArgs("ability-unsei", keberuntungan );
});


