const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url === '/demo'){
        res.statusCode = 200; // 
        res.setHeader('Content-Type','text/html');
        res.write("<h1>Demo back end</h1>");
        res.end();
    } else if(req.url === '/demo2')
    {     
        res.statusCode = 200; // 
        res.setHeader('Content-Type','text/html');
        res.write("<h1>Demo back end, DEMO 2</h1>");
        res.end();
    }

}
)

server.listen(port,function() {
    console.log("Listening on port http://localhost:" + port);
});
