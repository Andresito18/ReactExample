import fetch from 'node-fetch';

const ConsumeService = (ruta, method, body) => {
    url = ''
    fetch(url+ruta, {
        method: method,
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    }).then(res =>res.json())
      .then(json => console.log(json));
}


export default ConsumeService