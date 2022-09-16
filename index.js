const axios = require('axios');

class Webservice {

    static async getAdress(cep) {
        const response = await (axios.get(`https://viacep.com.br/ws/${cep}/json`))
        return response;
    }
}

console.log(
    Webservice.getAdress("03664010")
        .then((res) => {
            console.log(
                res.data
            );
        }).catch(err => console.log(err)));