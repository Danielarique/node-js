info = function info(text){
    console.log("info: ", text);
    return text;
}

/*Una de las formas de exportar */
module.exports.error = function error(text){
    console.log("Error: ",text);
    return text;
}
/*Otra de las formas de exportar */
module.exports.info = info;

//module.exports = {info,error}; /*Exportacion global, para exportar una funcion se pone module.exports 
/* en la funcion a exportar */