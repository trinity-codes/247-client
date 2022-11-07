const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://247api-env.eba-ndr8iuri.us-west-2.elasticbeanstalk.com/'
});

async function getQuestion(){
    const res = await instance.get('/daily')
    console.log(res.data)
    console.log(3)


}

//   module.exports = { getQuestions }

getQuestion();