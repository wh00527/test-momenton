const employees = require('../resource/source');
const util = require('util');
const checkRelation = require('../lib/employee');



//get map result of relations
const finalResult = checkRelation(employees);
console.log(util.inspect(finalResult, {showHidden: false, depth: null}))