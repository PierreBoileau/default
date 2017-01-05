var roleMiner = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        });

        if(containers.length){
            var container = containers[0];
            if (creep.pos.isEqualTo(container.pos)) {
                // harvest source
                creep.harvest(source);
            }
        // if creep is not on top of the container
            else {
                // move towards it
                creep.moveTo(container);
            }
        }
        // if creep is on top of the container
        
    }
};

module.exports = roleMiner;