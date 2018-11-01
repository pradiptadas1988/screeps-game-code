let roles = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    repairer: require('roleRepairer'),
    towerWorker: require('role.towerWorker')
};

Creep.prototype.runRole = function() {
    roles[this.memory.role].run(this);
}    

Creep.prototype.collectEnergy = function () {
        let source = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        let showPath = {visualizePathStyle: {stroke: '#ffaa00'}};
        
        if (source == undefined) {
                source = this.room.storage;
        }

        if (this.harvest(source) == ERR_NOT_IN_RANGE) {
            this.moveTo(source, showPath);
        }
}