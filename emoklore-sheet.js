
console.log("script triggered");

/********************************
 * Shorten A = CONSTANT + B + C + D .... 
 * as get(B,C,D,...) => set A 
 * toSet : A 
 * konstanta : CONSTANT
 * getList is the rest: (sign, toGet) 
 */


const  summingArgs = (toSet, konstanta,  ...getList) => {
	console.log("summingArgs triggered");
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
				sum -= parseInt(values[toGet[i]]) ;
			if(signs[i] == "+" )
				sum += parseInt(values[toGet[i]]) ;
		}
		sum += konstanta;
		setAttrs( { toSet :sum } );
	});
}

//ability-point-left = abilityPoint(25) + ability-add-point - (all abilities except luck) 
const calcAbilityPointLeft = () => {
	console.log("calcAbilityPointLeft triggered");
	const abilityPoint = 25;
	summingArgs( "ability-point-left", 
		abilityPoint, 
		"+", "ability-add-point", 
		"-", "ability-shintai", 
		"-", "ability-kiyou",
		"-", "ability-seishin" ,
		"-", "ability-gokan" ,
		"-", "ability-chiryoku" ,
		"-", "ability-miryoku" ,
		"-", "ability-shakai" ,
	);
}

//return array of skills affected by ability
const getAffectedSkills = (abilityName) => {
	//iterate on skills and list up matching ones
}


/*ABILITIES PAGE
 */

on(`change:ability-add-point`, () => {
	console.log("onchange set 1");
	calcAbilityPointLeft();
});

on(`change:ability-shintai`, () => {
	console.log("onchange set 2");
	calcAbilityPointLeft();
	//hp_max = 10 + ability-shintai
	summingArgs( "hp_max", 10, "+", "ability-shintai");
	
});

on(`change:ability-kiyou`, () => {
	console.log("onchange set 3");
	calcAbilityPointLeft();
	//SKILLS PAGE
});

on(`change:ability-seishin`, () => {
	console.log("onchange set 4");
	calcAbilityPointLeft();
	summingArgs( "ability-point-left", 	abilityPoint, 	"+", "ability-add-point", "-", "ability-shintai" );
	//mp_max = ability-seishin + ability-chiryoku
	summingArgs( "mp_max", 	0 , "+", "ability-seishin", "+", "ability-chiryoku" );
});

on(`change:ability-gokan`, () => {
	console.log("onchange set 5");
	calcAbilityPointLeft();
});

on(`change:ability-chiryoku`, () => {
	console.log("onchange set 6");
	calcAbilityPointLeft();
	//mp_max = ability-seishin+ability-chiryoku
	summingArgs( "mp_max", 	0 , "+", "ability-seishin", "+", "ability-chiryoku" );
});

on(`change:ability-miryoku`, () => {
	console.log("onchange set 7");
	calcAbilityPointLeft();
});

on(`change:ability-shakai`, () => {
	console.log("onchange set 8");
	calcAbilityPointLeft();
});

on(`change:ability-unsei`, () => {
	console.log("onchange set 9");
});

on(`clicked:unsei-roll`, () => {
	console.log("onchange set a");
	//ability-unsei = 1d6;
	let keberuntungan = Math.floor(Math.random() * 6 ) + 1;
	summingArgs("ability-unsei", keberuntungan );
});


