let SCREEP_CONSTANTS = require('constant.values');

StructureTower.prototype.work = function () {
        
        let target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        let closestDamagedStructure = this.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {return structure.structureType != STRUCTURE_WALL && structure.hits < structure.hitsMax}
            });
        
        if (target != undefined) {
            this.attack(target);
        }
        else if(closestDamagedStructure && this.energy > 600) {
            this.repair(closestDamagedStructure);
        }
};