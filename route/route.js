const UserController = require('../controller/userController');
const PhoneBookController = require('../controller/phoneBookController');
const middleware = require('../middleware/jwtAuth');


module.exports = (app) => {
    //Register New User
    app.post('/register',UserController.createUser);
    //Login User to get Token
    app.get('/login', UserController.loginUser);

    //PhoneBook routes
    app.post('/phonebook',middleware.validateJWT,PhoneBookController.createPhoneEntry);
    app.delete('/phonebook/:phoneBookId',middleware.validateJWT,PhoneBookController.deletePhoneEntry);
    app.put('/phonebook/:phoneBookId',middleware.validateJWT,PhoneBookController.updatePhoneEntry);
    app.get('/phonebook/:phoneBookId',middleware.validateJWT,PhoneBookController.getPhoneEntry);
    app.get('/phonebook/search/:phoneBookParam',middleware.validateJWT,PhoneBookController.searchPhoneBook);
}