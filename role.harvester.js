let roleUpgrader = require('role.upgrader');

let roleHarvester = {

    run: function(creep) {
        
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        
        if (creep.memory.working == true) {
            let structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_EXTENSION)
                             && structure.energy < structure.energyCapacity
            });
            if (structure == undefined) {
                structure = creep.room.storage;
            }

            if (structure != undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
            else{
                roleUpgrader.run(creep);
            }
        }
        else {
            creep.collectEnergy();
        }
    }
};

module.exports = roleHarvester;