const gsheetdb = require('gsheetdb');
const db = new gsheetdb({
  spreadsheetId: '1Jc9TsdJwvmCdaRSIeasMOtDD_OLBs2keyMgUcsm7F8g',
  sheetName: 'test',
  credentialsJSON: require('"C:\Users\abubumusyik\Desktop\masterlist-444513-6e21f708b0a6.json"')
});

async function getData() {
  return await db.getData();
}

async function fetchData() {
  const data = await getData();
  const tableBody = document.getElementById('tableBody');
  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.date}</td><td>${row.amount}</td><td>${row.description}</td>`;
    tableBody.appendChild(tr);
  });
}
fetchData();

