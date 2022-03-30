const connection = require('../database/connection');

module.exports = {
    async listAll (request, response) {
        const clientidentity = await connection('clientidentity').select('*').where({id: request.clientidentity.id});
        return response.status(200).json(clientidentity);
    },

    async listByFederalId (request, response) {
        const {page = 1} = request.query;
        const [count] = await connection('clientidentity').count(); 
        const clientidentity = await connection('clientidentity')
                                .limit(5)
                                .offset((page -1) * 5)
                                .select('*')
                                .where({id: request.clientidentity.id});
        response.header('X-Total-Count', count['count(*)']);
        
        return response.status(200).json(clientidentity);
    },

    async list (request, response) {
        const {page = 1} = request.query;
        const [count] = await connection('clientidentity').count(); 
        const clientidentity = await connection('clientidentity')
                                .limit(5)
                                .offset((page -1) * 5)
                                .select('*')
                                .where({id: request.clientidentity.id});
        response.header('X-Total-Count', count['count(*)']);
        
        return response.status(200).json(clientidentity);
    },

    async create (request, response) {
        const {name, cpf, email, id = request.clientidentity.id} = request.body;
        /*TODO
        Criar hash para o code caso não seja enviado na requisição*/
        await connection('clientidentity').insert({
            name,
            cpf,
            email,
            id
        })
        return response.status(200).json([request.body]);
    },

    async update (request, response) {
        const { id = request.clientidentity.id } = request.body
        await connection('clientidentity')
          .where({id: id})
            .then(([row]) => {
            if (!row) {
              return response.status(404).send();
            }
            const clientidentity = connection('clientidentity').update(request.body)
                            .where('id', row.id)
                            .then(data => {
                                return response.status(200).json([request.body]);
                            });
        });
    },

    async delete (request, response) {
        const { id = request.clientidentity.id } = request.params;
        const clientidentityId = id.replace(/:/g, "")
        const clientidentity = await connection('clientidentity')
        .where({id: clientidentityId})
        .select('id')
        .first();
        /**
         * Inserir valição de authorization - products x company x user logado
         */

        await connection('clientidentity').where('id', clientidentity.id).delete();
        return response.status(200).json({delete: 'true'});
    }

};