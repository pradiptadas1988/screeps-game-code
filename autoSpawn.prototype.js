StructureSpawn.prototype.autoSpawn = (creepRole,numOfWork,numOfCarry,numOfMove ) => {
    
    let newBuilder = creepRole + '_' + Game.time;
    let body = [];
    
    for (let i = 0; i < numOfWork; i++) {
        body.push(WORK);
    }
    for (let i = 0; i < numOfCarry; i++) {
        body.push(CARRY);
    }
    for (let i = 0; i < numOfMove; i++) {
        body.push(MOVE);
    }
    
    Game.spawns.PraddyBorg.createCreep(body, newBuilder, { role: creepRole, working: false}); 
}
    

