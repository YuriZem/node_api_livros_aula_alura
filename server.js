import http from "http";

const PORT  = 3000;

const rotas = {
    "/":"Curso de Node.js",
    "/livros":"lista de livros",
    "/autores":"lissta de autores"
}

const server = http.createServer( (req,res) => {
    res.writeHead(200,{'Contendt-Type':"text/plain"});
    res.end(rotas[req.url]);
} )

server.listen(PORT, () => {
    console.log('Servidor ONLINE')
})
