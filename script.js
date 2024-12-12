const sheetURL = 'https://docs.google.com/spreadsheets/d/1-P9fAKkmqFPuKxamR2nf-FpsMkd63SFcvIouIJWuuyU/gviz/tq?tqx=out:csv';

async function fetchData() {
    try {
        const response = await axios.get(sheetURL);
        const rows = response.data.split('\n').slice(1).map(row => row.split(','));
        populateTable(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function populateTable(data) {
    const tbody = document.querySelector('#dashboard tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    $('#dashboard').DataTable();
}

fetchData();
