require('autoSpawn.prototype');
let SCREEP_CONSTANTS = require('constant.values');

let createCreeps = {
    
    create:function(){
        const AVAILABLE_HARVESTER = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        const AVAILABLE_UPGRADER = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
        const AVAILABLE_BUILDER = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
        const AVAILABLE_TOWER_WORKER = _.sum(Game.creeps, (c) => c.memory.role == 'towerWorker');
        const AVAILABLE_REPAIRER = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
        
        if (AVAILABLE_HARVESTER < SCREEP_CONSTANTS.MIN_REQ_HARVESTER) {
            SCREEP_CONSTANTS.MySpawn.autoSpawn(SCREEP_CONSTANTS.HARVESTER_CREEP,4,8,4);//@param {ROLE,NUMVER_WORK,NUMBER_CARRY,NUMBER_MOVE}
        }
        else if (AVAILABLE_UPGRADER < SCREEP_CONSTANTS.MIN_REQ_UPGRADER) {
            SCREEP_CONSTANTS.MySpawn.autoSpawn(SCREEP_CONSTANTS.UPGRADER_CREEP,4,8,6);
        }
        else if (AVAILABLE_BUILDER < SCREEP_CONSTANTS.MIN_REQ_BUILDER) {
            SCREEP_CONSTANTS.MySpawn.autoSpawn(SCREEP_CONSTANTS.BUILDER_CREEP,4,6,4);
        }
        else if (AVAILABLE_REPAIRER < SCREEP_CONSTANTS.MIN_REQ_REPAIRER) {
            SCREEP_CONSTANTS.MySpawn.autoSpawn(SCREEP_CONSTANTS.REPAIRER_CREEP,4,6,4);
        }
        else if (AVAILABLE_TOWER_WORKER < SCREEP_CONSTANTS.MIN_REQ_TOWER_WORKER) {
            SCREEP_CONSTANTS.MySpawn.autoSpawn(SCREEP_CONSTANTS.TOWER_WORKER,4,6,4);
        }
        console.log("H(1000)-U(1000)-B(900)-R(900)-T(900) (A)::",AVAILABLE_HARVESTER, AVAILABLE_UPGRADER,AVAILABLE_BUILDER,
                    AVAILABLE_REPAIRER,AVAILABLE_TOWER_WORKER);
    }
}

module.exports = createCreeps;