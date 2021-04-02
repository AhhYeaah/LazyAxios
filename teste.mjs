import axios from 'axios'

//Create Array
let names = []
let secondname = []
let cpf = []
let rg = []
let email = []
let phone = []
let cell = []

//Get 10 names from randomuser.me api, an api made so you can generate random people informations
axios.get('https://randomuser.me/api/?nat=br&results=10').then(response =>{
    //Then I get the results
    const {results} = response.data;

    //Use a map, but for objects
    Object.keys(results).map(function(key, index){

        //For each person in the object, get the first name
        names[index] = results[key].name.first

        //And then the second one
        secondname[index] = results[key].name.last

        //Here we have an random numer generator for rg and cpf, two brazilians documents
        cpf[index] = Math.floor(Math.random() * (99999999999 - 10000000000) + 10000000000);
        rg[index] = Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
        
        //getting email...
        email[index] = results[key].email

        //You get the idea
        phone[index] = results[key].phone
        cell[index] = results[key].cell

        
    })
    for(let i= 0; i<10; i++){
        console.log("INSERT INTO tbl_aluno(nome, sobrenome , rg , cpf, email_paciente, telefone, celular) VALUES ( '"
        + names[i] + "' , '" + secondname[i] + "' , '" + cpf[i] + "' , '" + rg[i] + "' , '" + email[i] + "' , '" + phone[i] + "' , '" + cell[i] + "');");     
    }
});



