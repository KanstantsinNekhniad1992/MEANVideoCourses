describe('mvUser', function() {


    var mvUser;
    beforeEach(module('app'));
    beforeEach(inject(function(_mvUser_) {
        mvUser = _mvUser_;
    }));

    describe('isAdmin', function() {
        it('should return false if the roles array does not have an admin entry:', inject(function() {
            var user = new mvUser();
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;
        }));

        it('should return true if the roles array have an admin entry:', function() {
            var user = new mvUser();
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;
        })
    });

});