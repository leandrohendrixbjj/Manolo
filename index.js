const axios = require('axios');

class Webservice {

    static async getAdress(cep) {
        const response = await (axios.get(`https://viacep.com.br/ws/${cep}/json`))
        return response;
    }
}

const data = Webservice.getAdress("03664010");

data.then((adress) => {
    console.log(adress.data);
}).catch(err => console.log(err));

