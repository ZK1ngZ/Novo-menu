let data = [ 
{"dtRecord" : "2023-05-01 10:10:35",
    "nome": "Bruno Tavares",
    "eMail": "brunotvs@gmail.com",
    "assunto": " Opinião de micro-ondas",
    "mensagem": "Mensagem 1 | Achei incrível."
    },

    {"dtRecord" : "2023-05-01 12:15:35",
    "nome": "Bernardo Silva",
    "eMail": "bernardo@silva",
    "assunto": "Formas de pagamento",
    "mensagem": "Mensagem 2 | Execelente diversidade." 
    },

    {"dtRecord" : "2023-05-01 13:15:35",
    "nome": "Ana Luiza Pires",
    "eMail": "ana@gmail.com",
    "assunto": "Entrega",
    "mensagem": "Mensagem 3 | Meu produto chegou muito rápido."
    },
    
    {"dtRecord" : "2023-05-01 14:15:35",
    "nome": "Augusto Dias",
    "eMail": "augusto@gmail.com",
    "assunto": "Qualidade",
    "mensagem": "Mensagem 4 | A qualidade dos produtos é de outro mundo. "
    },

    {"dtRecord" : "2023-05-01 15:15:35",
    "nome": "Luigi Duarte",
    "eMail": "luigi@gmail.com",
    "assunto": "Loja",
    "mensagem": "Mensagem 5 | Que loja incrível."
    }
];

let table = document.getElementById("myTable");
let rowCount = table.rows.length;

for (let i = 0; i < data.length; i++) {
    const reg = data[i];

    let row = table.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
        
    cell1.innerHTML = data[i].dtRecord;
    cell2.innerHTML = data[i].nome;
    cell3.innerHTML = data[i].eMail;
    cell4.innerHTML = data[i].assunto;
    cell5.innerHTML = data[i].mensagem;

    rowCount++;    
}