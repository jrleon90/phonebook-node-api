const request = require('supertest');
const app = require('../app');
const PhoneBook = require('../model/phoneBook');

before(function(done){
    request(app)
        .get('/login')
        .auth('test','12345')
        .end(function(err,res){
            token = res.body.token;
            done();
        });
});
it('should create a new phonebook entry', function(done){
    request(app)
        .post('/phonebook')
        .set({'x-access-token':token})
        .send({
            name:'test_name',
            phone:'1111'
        })
        .expect(200,done);
});
it('should get a phonebook entry',function(done){
    PhoneBook.find({name:'test_name'}).exec((err, phoneBookData)=>{
        request(app)
            .get('/phonebook/'+phoneBookData[0]._id)
            .set({'x-access-token':token})
            .expect(200,done);
    })
});

it('should updata a phonebook entry',function(done){
    PhoneBook.find({name:'test_name'}).exec((err,phoneBookData)=>{
        request(app)
            .put('/phonebook/'+phoneBookData[0]._id)
            .set({'x-access-token':token})
            .send({
                name:'new_test_name',
                phone:'2222'
            })
            .expect(200,done)
    })
});

it('should delete a phonebook entry',function(done){
    PhoneBook.find({name:'new_test_name'}).exec((err,phoneBookData)=>{
        request(app)
        .delete('/phonebook/'+phoneBookData[0]._id)
        .set({'x-access-token':token})
        .expect(200,done);
    });
});
