const request = require('request');
//

module.exports = new Promise((resolve, reject) => {
    
    var uri       = "http://www.cotodigital3.com.ar/AtgServiceWS/restfull/searchws/search/200?textinput=smart&cantidadPorPagina=10";
    request.get(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body);
            resolve(body);
            //resolve.bind(null, body);
            //resolve.apply(null, body)
         }
       console.log(error);
    });
});