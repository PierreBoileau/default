require('prototype.tower')();
require('prototype.creep')();
require('prototype.spawn')();
require('prototype.link')();

module.exports.loop = function () {

    // Garbage collector
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }

    // for each creeps
    for (let name in Game.creeps) {
        // run creep logic
        Game.creeps[name].runRole();
    }

    // find all towers
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    // for each tower
    for (let tower of towers) {
        // run tower logic
        tower.spendEnergy();
    } 

    //     // find all links
    // var links = _.filter(Game.structures, s => s.structureType == STRUCTURE_LINK);
    // // for each tower
    // for (let link of links) {
    //     // run tower logic
    //     link.run();
    // } 

    // Gestion du SPAWN des différents CREEPS selon les SPAWN


    for (let spawnName in Game.spawns) {
        // run spawn logic
        Game.spawns[spawnName].spawnCreepsIfNecessary();
    }
}