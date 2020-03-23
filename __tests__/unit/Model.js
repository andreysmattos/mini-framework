const Model = require('../../src/app/models/Model');
const knex = require('../../src/config/database');

beforeAll(async () => {
    await knex.schema.dropTableIfExists('users')
    await knex.schema.dropTableIfExists('players')

    await knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('email');
        table.string('password');
    })

    await knex.schema.createTable('players', function (table) {
        table.increments('player_id');
        table.string('name');
    })

    await knex('users').insert([
        {
            id: 3,
            email: 'andreysmattos@dasdas.com',
            password: 'adsdas'
        },
        {
            id: 4,
            email: 'dasda@dasdas.com',
            password: '12dasda3'
        }
    ]);

    await knex('players').insert([
        {
            name: 'Andrey'
        },
        {
            name: 'Teste'
        }
    ]);
});

describe('Model class.', () => {


    it('Retornar o nome da tabela formatada. Deve gerar o nome da tabela com base no nome do Model. (Tudo em minusculo, snake-case, plural', () => {

        class User extends Model { }
        class Player extends Model { }
        class PlayerKill extends Model { }
        class Corona extends Model { }
        class TwitchTvUser extends Model { }
        class FacebookInstagramConfigTesteName extends Model { }


        expect(User.table).toBe('users');
        expect(Player.table).toBe('players');
        expect(PlayerKill.table).toBe('player_kills');
        expect(Corona.table).toBe('coronas');
        expect(TwitchTvUser.table).toBe('twitch_tv_users');
        expect(FacebookInstagramConfigTesteName.table).toBe('facebook_instagram_config_teste_names');

    });

    it('Deve retornar o nome da chave primaria, caso não informado, retorna a string "id"', () => {

        class User extends Model { }
        class Player extends Model { }

        class PlayerKill extends Model {
            static get primaryKey() {
                return 'isso_e_um_teste';
            }
        }

        expect(User.primaryKey).toBe('id');
        expect(Player.primaryKey).toBe('id');
        expect(PlayerKill.primaryKey).toBe('isso_e_um_teste');
    });


    it('Deve retornar o registro conforme o que foi procurado.', async () => {
        class User extends Model { }

        const response = await User.findBy('email', 'dasda@dasdas.com');

        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('password');
        expect(response).toHaveProperty('email');

    });


    it('Deve retornar o registro a primaryKey do model', async () => {

        class User extends Model { }
        class Player extends Model {

            static get primaryKey() {
                return 'player_id';
            }
        }

        expect(await User.find(3)).toHaveProperty('email', 'andreysmattos@dasdas.com');
        expect(await User.find(4)).toHaveProperty('password', '12dasda3');

        expect(await Player.find(1)).toHaveProperty('name', 'Andrey');
        expect(await Player.find(2)).toHaveProperty('name', 'Teste');

    });


    it('Retornar todos os registros da tabela', async () => {

        class User extends Model { }
        class Player extends Model {

            static get primaryKey() {
                return 'player_id';
            }
        }

        const allUsers = await User.all();
        const allPlayers = await Player.all();

        expect(allUsers.length).toBeGreaterThan(1);
        expect(allPlayers.length).toBeGreaterThan(1);

    });


    it('Retornar a quantidade de dados da tabela ou de determinada coluna', async () => {
        class User extends Model { }
        class Player extends Model { }

        const qtdUser = await User.getCount();
        const qtdPlayer = await Player.getCount();

        expect(qtdUser).toBeGreaterThan(1);
        expect(qtdPlayer).toBeGreaterThan(1);

    });


    it('Retornar informações de outra tabela dentro de um Model', async () => {
        class User extends Model {
            static async getPlayer(id) {
                const player = this.query('players').where('player_id', id).first();
                return player;
            }
        }

    });






});