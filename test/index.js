const checkRelation = require("../lib/employee"),
      employees = require('../resource/source'),
      chai  = require("chai"),
      expect = chai.expect;


describe('employee', () => {
    
    describe('generation of relations ', () => {

        it('should be have correct result', () => {
            const result = checkRelation(employees);
            expect(result[0]).to.have.property('manager_id');
            expect(result[0].id).to.equal(150);
            expect(result.length).to.equal(1);
        });

        it('should be have correct result with sub obj', () => {
            const result = checkRelation(employees);
            //should return 2 sub obj
            expect(result[0].children.length).to.equal(2);
        });
    });    
});