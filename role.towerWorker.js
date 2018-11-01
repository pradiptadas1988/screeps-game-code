let roleRepairer = require('roleRepairer');

let roleTowerWorker = {

    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            creep.collectEnergy();
        }
        else {
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER) &&
                        structure.energy < structure.energyCapacity;
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else{
                roleRepairer.run(creep);
            }
        }
    }
};

module.exports = roleTowerWorker;