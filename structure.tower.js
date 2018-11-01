require('tower.prototype');

let activateTower = {
    run: function() {
        let towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
        
        for (let tower of towers) {
            tower.work();
        }
    }
};

module.exports = activateTower;
