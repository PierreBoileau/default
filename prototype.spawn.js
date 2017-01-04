module.exports = function() {

	StructureSpawn.prototype.createCustomCreep = function(energy, roleName) {
		
		var body = [];

		if (roleName == 'miner') {
			"Miner is focused on WORK with a decent amount of CARRY as well. Just one MOVE"
			"Miner do not need more than 1200 energy to be fully optimizing one mine"
			var energyUsed = Math.min(energy, 1200);
			var numberOfWork = Math.floor((energyUsed*3/4)/100);
			var numberOfCarry = Math.min(5, energyUsed/50-(2*numberOfWork)-1);
			"We will stick with one MOVE body part"
			for (let i = 0; i < numberOfWork; i++) {
				body.push(WORK);
			}
			for (let i = 0; i < numberOfCarry; i++) {
				body.push(CARRY);
			}
			body.push(MOVE);
		}

		if (roleName == 'harvester') {
			"harvester are focused on transporting energy at max speed, so we basically focus on CARRY and MOVE"
			"We will not want more than 8 CARRY parts at the moment, so 8 MOVE as well"
			var energyUsed = Math.min(energy, 800);
			var numberOfCarry = Math.floor(energyUsed/100);
			"We will equal the number of CARRY body parts with MOVE body parts"
			for (let i = 0; i < numberOfCarry; i++) {
				body.push(CARRY); body.push(MOVE);
			}
		}

		if (roleName == 'builder') {
			"builders should be able to move, work and carry equally"
			"for safety reasons we will not want builders with more than 6 WORK, 6 CARRY, 6 MOVE"
			var energyUsed = Math.min(energy, 1200);
			var numberOfWork = Math.floor(energyUsed/200);
			"We will equal the number of WORK with CARRY and MOVE body parts"
			for (let i = 0; i < numberOfCarry; i++) {
				body.push(WORK); body.push(CARRY); body.push(MOVE);
			} 
		}

		if (roleName == 'upgrader') {
			"upgraders should be able to work hard with little ability to CARRY and MOVE"
			"More than 6 WORK outpaces the mining ability of the miners"
			var energyUsed = Math.min(energy, 800);
			var numberOfCarry = Math.floor((energy-50)/250);
			var numberOfWork = Math.floor((energy-50*(1+numberOfCarry))/100);
			for (let i = 0; i < numberOfWork; i++) {
				body.push(WORK);
			}
			for (let i = 0; i < numberOfCarry; i++) {
				body.push(CARRY);
			}
			body.push(MOVE);
		}

		return this.createCreep(body, undefined, { role : roleName});
	}
}