

const abilityPoint = 25;

on(`change:ability-add-point`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-shintai
});

on(`change:ability-shintai`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-shintai
	//
	//hp_max = ability-shintai + 10
	
	//
});

on(`change:ability-kiyou`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-kiyou
});

on(`change:ability-seishin`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-seishin
	//
	//mp_max = seishin+chiryoku
});

on(`change:ability-gokan`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-gokan
});


on(`change:ability-chiryoku`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-chiryoku
	//
	//mp_max = seishin+chiryoku
});

on(`change:ability-miryoku`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-miryoku
});

on(`change:ability-shakai`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-shakai
});

on(`change:ability-unsei`, () => {
	//ability-point-left = abilityPoint + ability-add-point - ability-unsei
});

on(`clicked:unsei-roll`, () => {
	//ability-unsei = 1d6;

});


