/*Enunciado:  Se deben crear tres (3)  
funciones de flecha que permitan recibir dentro de sus párametros 
de entrada una Callback function de acuerdo a lo visto en clase.  
La función de flecha a entregar debe realizar manipulación de uno o mas arreglos.

Nota:  Si dicha función no recibe una callback function o no manipula como minimo un arreglo,  
no cumplirá lo solicitado y, por lo tanto, no obtendrá nota por dicha función.  
 Debe cumplir con ambas restricciones para obtener nota.*/

//1
funcionArreglo = () =>{
    const empresas = ["epm", "haceb", "sura", "cocacola"];
    empresas.push("pepsi");
    return empresas;
}

const calling = (callbackFunction) =>{
   const funct = callbackFunction();
   console.log(funct);
}

calling(funcionArreglo);

//2
funcionArreglo2 = () =>{
    const amigos = ["yiceth", "daniela", "victor", "mariana", "andres"];
    amigos.pop();
    return amigos;
}

const calling2 = (callbackFunction) =>{
   const funct = callbackFunction();
   console.log(funct);
}

calling2(funcionArreglo2);

//3
funcionArreglo3 = () =>{
    const resta = [16, 154, 2, 9, 17, 15, 123, 50];
    const restica = resta.reduce((restadito, restado) => {
    return restadito - restado;
})
    return restica
}

const calling3 = (callbackFunction) =>{
   const funct = callbackFunction();
   console.log(funct);
}

calling3(funcionArreglo3);



