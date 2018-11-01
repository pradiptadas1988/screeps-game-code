require('creep.prototype');

module.exports = {
    assignWorkToCreep:function () {
        for (let name in Game.creeps) {
           Game.creeps[name].runRole();
        }
    }
};