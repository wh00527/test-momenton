const employee = require("../lib/employee"),
      chai  = require("chai"),
      expect = chai.expect;


describe('employee', () => {
    
    describe('Constructor', () => {

        it('should be have correct result', () => {
            const result = employee();
            expect(result).to.have.property('items');
            // expect(result).to.have.property('');
            // expect(result).to.have.property('');
        });
    });    
});