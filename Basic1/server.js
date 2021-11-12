const http = require('http');// modulo para utilização do http
const port = 8888;// porta que o servidor roda
const url = require('url');

function start(route){ // função envolvendo a criação do servidor 
    function onRequest(request,response){
        let pathName = url.parse(request.url).pathname; //pega o path da url de requisição
        response.writeHead(200,{'Content-Type': 'text/html'});
        console.log(`I'm a request and im goin to ${pathName}`);
        route(pathName);
        response.end();
        
    }
    http.createServer(onRequest).listen(port);
    console.log(`Server running on http://localhost:${port}`)
}
    
exports.start = start;// Exporta a função start pra usar em outros módulos