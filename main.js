let assignWork = require('assign.Work');
let cleanMemory = require('clean.memory');
let createCreeps = require('create.creep');
let activateTower = require('structure.tower');

module.exports.loop = function () {
    cleanMemory.deleteCreepMemory();
    createCreeps.create();
    assignWork.assignWorkToCreep();
    activateTower.run();
};