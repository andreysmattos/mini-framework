const Controller = require('../../src/app/http/controllers/Controller');
// const util = require('../../src/lib/util')


describe('Controller class.', () => {

    it('Deve validar os dados', () => {
        
        class UserController extends Controller {
            index() {

                const schema = this.validator().object({
                    username: this.validator().string().required(),
                    email: this.validator().string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                });

                const {value: value1, error: error1} = schema.validate({
                    username: 'andrey',
                    email: 'andreysmattos@hotmail.com'
                });

                expect(value1).toBeDefined();
                expect(error1).toBeUndefined();
                expect(value1.username).toBe('andrey');
                expect(value1.email).toBe('andreysmattos@hotmail.com');

                const {value: value2, error: error2} = schema.validate({
                    username: '',
                    email: 'andreysmattos@hotmail.com'
                });
             
                expect(value2).toBeDefined();
                expect(error2).toBeDefined();
                expect(value2.username).toBe("");
                expect(value2.email).toBe('andreysmattos@hotmail.com');  
                
                const {value: value3, error: error3} = schema.validate({
                    username: 'dasdas',
                    email: 'OR 1=1; # KLDSJHASD'
                });
               
                expect(error3).toBeDefined();

                expect(value3).toBeDefined();
                expect(value3.username).toBe('dasdas');
                expect(value3.email).toBe('OR 1=1; # KLDSJHASD');
               

                return 'teste'
            }
        }

        const User = new UserController();


        User.index();





    });


    it('Teste JOI', () => {
        const Joi = require('@hapi/joi');

        const schema = Joi.object({
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        });


        const result = schema.validate({ username: 'abc' });
        // console.log('result', result)

        const result2 = schema.validate({ username: 'abdasdasc' });
        // console.log('result2', result2)

        const result3 = schema.validate({ username: '' });
        // console.log('result3', result3)


        const result4 = schema.validate({ username: null });
        // console.log('result4', result4)

        const result5 = schema.validate({  });
        // console.log('result5', result5)

        // schema.validate({});

    });


});