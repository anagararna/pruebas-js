/* 1 Crear función que reciba como parámetros
 dos números y que devuelva la suma de 
ellos*/
// function sumar_dos_numeros(a,b){
// let suma = a + b ;
// console.log(suma);
// return suma;
// }
// sumar_dos_numeros(2,8);

/*- 2 Crear función que determine si un número es par
 o impar*/
//  function determinar_par(d){
// var numero = d;
// if(numero%2==0){
//     console.log('par')
// }
// else{
//     console.log('impar')
// }
// }
// determinar_par(8);

/*- 3 Crear un objeto carro haciendo la abstracción de
 sus atributos y un objeto anidado.*/ 
//  let carro = {
//     nombre: "PepeCar" ,
//     edad: 122,
//     material: "madera" ,dueño:{
//         señor:"manolo",
//     }
//  }
//  console.log(carro)  

//  4 Crear una función que devuelva la marca del carro.
// let carro = {
//         marca: "PepeCar" ,
//         edad: 122,
//         material: "madera" ,dueño:{
//             señor:"manolo",
//         }
//      }
// function marca_carro(l){
//     let marca=l;
//     console.log(marca);
//     return marca;
// }
// marca_carro(carro.marca);

//      console.log(carro.marca) 

//5puerta
// let carro = {
//             marca: "PepeCar" ,
//             edad: 122,
//             puerta:"no tiene",
//             material: "madera" ,dueño:{
//                 señor:"manolo",
//             }
//          }
//     function puerta_carro(l){
//         let puerta=l;
//         console.log(puerta);
//         return puerta;
//     }
//     puerta_carro(carro.puerta);
    
//          console.log(carro.puerta) 
// - 5 Crear una función que devuelva un atributo del objeto anidado.


// let carro = {
//             marca: "PepeCar" ,
//             edad: 122,
//             material: "madera" ,dueño:{
//                 señor:"manolo",
//             }
//          }
//          console.log(carro.dueño.señor) 
// function quien(l){
//             let señor=l;
//             console.log(señor);
//             return señor;
//         }
//         quien(carro.dueño.señor);
        
//              console.log(carro.dueño.señor) 

// - 7 Crear una función que imprima en consola todos los números de un array (Investigar
//     ciclo for)
// let carro = {
//             marca: "PepeCar" ,
//             edad: 122,
//             material: "madera" ,
//             dueño:{
//                 señor:"manolo",
//             },
//             partes:["ruedas","timon","amarres","burros"]
//          }
//          function listar_numeros(j){
//             let listar=j;
//             for (prop in carro.partes) {
//                 console.log(prop);
//             }
//             return listar;
//         }
//         listar_numeros()
     
// - 8 NOOOOO Crear una función que elimine los números pares de ese array.
//            var partes=[2,4,6,8,1,3,9,11]
         
    // function determinar_par(d) {
    //         let partes_1 = d;
    //     for (let d = 0; d < partes.length; d++){
    //         let elemento = partes[d];
    //         if (partes[d] % 2 ==0) {
    //         }
    //         else{
    //           console.log(partes[d]);  
    //         }
    //     }
    //         return partes_1;
    // }   
    //     determinar_par()

// - 9 Crear una función que devuelva el número mayor de un array.
// - 10 Crear una función que devuelva el número menos de un array.
// var partes=[2,4,6,8,]
// function definir_menor(l) {
//         let definir = l;
//     for (let l = 0; l < partes.length; l++){
//                     if (partes[l] <3 ) {
//                         console.log(partes[l])
//                     }
//                 }
// return definir;
// }
// definir_menor()
 
// - 11 Crear un función que convierta en minúsculas todas las letras de un texto.
// var texto_min = "ESTAMOS CANSADAS"
// function minusculas(a) {
//     let minuscula = a;
//     console.log(texto_min.toLowerCase())
//     return minuscula;
// }
// minusculas()

// - 12 Crear una función que convierta en mayúsculas todas las letras de un texto. 
// var texto_min = "queremos comer"
// function mayusculas(a) {
//     let mayus = a;
//     console.log(texto_min.toUpperCase())
//     return mayus;
// }
// mayusculas()

// 13- Crear una función que reciba un array de nombres y que convierta la primera letra 
// var nombres = ["manolo","juan","pepe","alicia"]
// function mayusculas(a) {
//     let mayus = a;
//     for (let a =0 ; a < nombres.length ; a++) {
//         let nombres1 = nombres [a];
//      console.log(nombres1.toUpperCase().charAt(0) + nombres1.substring(1));
//     }
//     return mayus;
// }
// mayusculas()

// -14 Crear un array de 10 nombres.
// let nombres = [manolo,pepe,juan,veronica,silvia,sara,adriana,ana,raul,tomas];

// -15 Crear una función que imprima en pantalla una lista con los nombres del array de 
// nombres.

// function imprimir_lista() {

//     let nombres = ["moises","alejandro","lucy","erick","marvellita","antonio","andrea","ana","pacha","nicole"]
//     for (let listar = 0 ; listar < nombres.length ; listar++) { 
//         let lista = document.createElement("li");
//         lista.innerHTML = (nombres[listar])
//         document.getElementById('lista1').appendChild(lista)
//     }
// }
// imprimir_lista()

// -16 Crear un array de números.
    // let numeros = [1,2,3,4,5,6,7,8,9]

// 17 Crear una función que pinte en pantalla cuántos números tiene el array de números.
  // function cantidad() {
  //   let numeros = [1,2,3,4,5,6,7,8,9];
  //   let total = numeros.length;
  //   document.getElementById("demo").innerHTML = total;
  // }
  // cantidad()

  // - 18 Crea los nodos necesarios para imprimir un formulario.
// function GeneraF() {
//     let formulario = document.createElement("form");
//     let titulo = document.createElement("label");
//     let cajaTextName = document.createElement("input");
//     let cajaTextApell = document.createElement("input");
//     let cajaTextEmail = document.createElement("input");
//     let cajaTextAsunto = document.createElement("input");
//     let cajaTextMensaje = document.createElement("textarea");
//     let boton = document.createElement("input");

//     formulario.setAttribute('method', "pame");
//     formulario.setAttribute('action', "");
//     formulario.setAttribute('style', "width: 300px; margin: 0px auto");

//     cajaTextName.setAttribute('type', "text");
//     cajaTextName.setAttribute('placeholder', "Nombres");
//     cajaTextName.setAttribute('style', "width: 100% ;margin: 10px 0px;padding: 5px");

//     cajaTextApell.setAttribute('type', "text");
//     cajaTextApell.setAttribute('placeholder', "Apellidos");
//     cajaTextApell.setAttribute('style', "width: 100%; margin: 10px 0px;padding: 5px");

//     cajaTextEmail.setAttribute('type', "text");
//     cajaTextEmail.setAttribute('placeholder', "Email");
//     cajaTextEmail.setAttribute('style', "width: 100%; margin: 10px 0px; padding: 5px");

//     cajaTextAsunto.setAttribute('type', "text");
//     cajaTextAsunto.setAttribute('placeholder', "Asunto");
//     cajaTextAsunto.setAttribute('style', "width: 100%; margin: 10px 0px; padding: 5px");

//     cajaTextMensaje.setAttribute('placeholder', "Mensaje");
//     cajaTextMensaje.setAttribute('style', "width: 100%; height: 200px; margin: 10px 0px;padding: 5px");

//     boton.setAttribute('type', "button");
//     boton.setAttribute('value', "Enviar");
//     boton.setAttribute('style', "width: 100px; margin: 10px 0px; padding: 10px; background: #F05133; color: #fff; border: solid 1px #000;");
//     boton.setAttribute('onclick', "alert('Se envio el mensaje')");

 
//     titulo.innerHTML='<h1>Contacto</h1>';
//         	formulario.appendChild(titulo);
//         	formulario.appendChild(cajaTextName);
//         	formulario.appendChild(cajaTextApell);
//         	formulario.appendChild(cajaTextEmail);
//         	formulario.appendChild(cajaTextAsunto);
//         	formulario.appendChild(cajaTextMensaje);
//         	formulario.appendChild(boton);
//         	document.getElementById('contentForm').appendChild(formulario);
// }
// GeneraF()

// pruebas mias 1

// function cambiar() {
//   let boton = document.createElement("input");
//       boton.setAttribute('type', "button");
//       boton.setAttribute('value', "Enviar");
//       boton.setAttribute('style', "width: 100px; margin: 10px 0px; padding: 10px; background: #F05133; color: #fff; border: solid 1px #000;");
//       onclick = document.getElementById('dem').setAttribute('style', "fontSize:'35px;");
      
// }
// cambiar

var numero = 24
// console.log("mi edad es " + numero);

numero = 12
// console.log("mi edad ahora es " + numero)
var op1 = 2
var op2 = 3 
var resultado = op1 + op2;
console.log("resultado vale: " + resultado);

let miNumero = 6
if (miNumero == 7){
  console.log('si mi numero vale 6')
}  else {
    console.log('no ,mi numero no vale 6')
}








    

      

