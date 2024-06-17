document.addEventListener('DOMContentLoaded' , ()=>{
    loadHtmlTable([])
});

function loadHtmlTable(data){
    const table = document.querySelector('table tbody');
    if(data.length === 0){
        table.innerHTML = "<tr><td class ='no-data' colspan = '5'>No Data</td></tr>"
    };
}





// import mysql from "./node_modules/mysql2/index.js"
// // let mysql = require("mysql2");

// const connection = mysql
//   .createPool({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "bitcom_test",
//   })
//   .promise();
// // node bincom.js
//  // "type": "module",

// async function vote(id){
//   const result = await connection.query(`SELECT * FROM ${id}`);
//   return result[0];
// }

// const result = await connection.query("SELECT * FROM agentname");
// console.log(result[0]);
// const result2 = await connection.query("SELECT * FROM announced_lga_results");
// console.log(result2[0]);
// const data = vote('announced_pu_results');




