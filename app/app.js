const http = require('http'),
    path = require("path"),
    fs = require("fs");

const config = {
    app: {
        name: "neurojs"
    },
    server: {
        port: 3000
    },
    models: [
        {
            dir: "./public/data/model/"
        }
    ]
};

http.createServer(function(request, response){
    for (const model of config.models) {
        const dirBuffer = fs.readdirSync(model.dir);
        for (const f of dirBuffer) {
            const fPath = path.join(model.dir, f);
            const basefname = path.basename(fPath);
            const fext = path.extname(fPath);
            if (fs.statSync(fPath).isFile()) {
                if(request.url==`/models/${basefname}`){
                    response.setHeader('Access-Control-Allow-Origin', '*');
                    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                    response.writeHead(200, {"Content-Type" : `application/${fext}`});
                    fs.createReadStream(fPath).pipe(response);
                    return;
                }
            }
        }
    }
    response.end("404");
}).listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});

module.exports = {
    closeServer() {
        server.close();
    }
};