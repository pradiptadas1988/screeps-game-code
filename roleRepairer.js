let roleBuilder = require('role.builder');
let SCREEP_CONSTANTS = require('constant.values');

let roleRepairer = {

    run: function(creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            let structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_WALL && s.hits < SCREEP_CONSTANTS.MIN_REQ_WALL_HITS
            });

            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
            else {
                roleBuilder.run(creep);
            }
        }
        else {
            creep.collectEnergy();
        }
    }
};

module.exports = roleRepairer;