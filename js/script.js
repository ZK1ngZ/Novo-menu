let Nome = document.querySelector("#txtnome")
let Email = document.querySelector("#Email")
let Telefone = document.querySelector("#Telefone")
let Mensagem = document.querySelector("#btn1")
let msg_final = document.querySelector('.msg-final')

Mensagem.addEventListener("click", () =>{
    console.log("teste");
    msg_final.classList.add("erro_auth")
});


let data = [
    {"dtRecord" : "2023-05-01 10:10:35",
    "nome": "Eletronico",
    "email": "eletrocenter548@gmail.com",
    "telefone": "123456789",
    "mensagem": "Ótimos produtos e vendas"
    },

    {"dtRecord" : "2023-05-01 12:15:35",
    "nome": "Eletronico",
    "email": "eletrocenter548@gmail.com",
    "telefone": "123456789",
    "mensagem": "Ótimos produtos e vendas"
    },

    {"dtRecord" : "2023-05-01 13:15:35",
    "nome": "Eletronico",
    "email": "eletrocenter548@gmail.com",
    "telefone": "123456789",
    "mensagem": "Ótimos produtos e vendas"
    },
    
    {"dtRecord" : "2023-05-01 14:15:35",
    "nome": "Eletronico",
    "email": "eletrocenter548@gmail.com",
    "telefone": "123456789",
    "mensagem": "Ótimos produtos e vendas"
    },

];

// let table = document.getElementById("myTable");
// let rowCount = table.rows.length;

// for (let i = 0; i < data.length; i++) {
//     const reg = data[i];

//     let row = table.insertRow(rowCount);
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     let cell3 = row.insertCell(2);
//     let cell4 = row.insertCell(3);
//     let cell5 = row.insertCell(4);
        
//     cell1.innerHTML = data[i].dtRecord;
//     cell2.innerHTML = data[i].nome;
//     cell3.innerHTML = data[i].eMail;
//     cell4.innerHTML = data[i].assunto;
//     cell5.innerHTML = data[i].mensagem;

//     rowCount++;    
// }