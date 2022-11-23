const abilityPoint = 25;

//Functions

/********************************
 * Shorten A = + B + C + D .... 
 * as get(B,C,D,...) => set A 
 * toSet : A 
 * getList is the rest: (sign, toGet) 
 */
function summingArgs(toSet, ...getList) {
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
		setAttrs( { toSet, sum } );
	}
}


//return array of skills affected by ability
function getAffectedSkills(abilityName) {
	//iterate on skills and list up matching ones
}

on(`change:ability-add-point`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-shintai
	summingArgs( "ability-point-left", 
		"+", "ability-point", "+", "ability-add-point", "-", "ability-shintai" );
});

on(`change:ability-shintai`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left 	= abilityPoint + ability-add-point - ability-shintai
	//hp_max 				= ability-shintai + 10
	
});

on(`change:ability-kiyou`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left = abilityPoint + ability-add-point - ability-kiyou
	
	//SKILLS PAGE
});

on(`change:ability-seishin`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left = abilityPoint + ability-add-point - ability-seishin
	//mp_max = ability-seishin + ability-chiryoku
	
});

on(`change:ability-gokan`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left = abilityPoint + ability-add-point - ability-gokan
});


on(`change:ability-chiryoku`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left = abilityPoint + ability-add-point - ability-chiryoku
	//mp_max = ability-seishin+ability-chiryoku
});

on(`change:ability-miryoku`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left = abilityPoint + ability-add-point - ability-miryoku
});

on(`change:ability-shakai`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left = abilityPoint + ability-add-point - ability-shakai
});

on(`change:ability-unsei`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-point-left = abilityPoint + ability-add-point - ability-unsei
});

on(`clicked:unsei-roll`, () => {
	//ABILITIES PAGE 
	//--------------
	//ability-unsei = 1d6;

});


