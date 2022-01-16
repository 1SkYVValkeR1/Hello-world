console.log("I'm connected");

function createTable(numOfRows, numOfColumns) {
    console.log("function createTable is called with parametars:" + numOfRows + ", " + numOfColumns);
    var body = document.body;
    var table = document.createElement('TABLE');
    table.setAttribute('id','slaveTable');
    table.border = '1';
    for (var i=1; i <= numOfRows; i++) {
        var tr = document.createElement('TR');
        table.appendChild(tr);
        for (var j=1; j <= numOfColumns; j++) {
            var td = document.createElement('TD');
            var text = "Row-" + i + " Column-" + j;
            var textNode = document.createTextNode(text);
            td.appendChild(textNode);
            tr.appendChild(td);
        }
    }
    body.appendChild(table);
}

function onSubmitForm(event) {
    event.preventDefault(); //ova prekinuva refresh na strana koga se pravi submit na forma
    var form = document.getElementById('createTableForm');
    console.log("onSubmitForm function called");
    var userRows = form.elements['rows'].value;
    var userColumns = form.elements['columns'].value;
    console.log("values: rows=" + userRows + " columns=" + userColumns);

    var existingTable = document.getElementById('slaveTable');
    if (existingTable != null) {
        existingTable.remove();
    }

    createTable(userRows,userColumns);
}

const tableForm = document.getElementById('createTableForm');
tableForm.addEventListener('submit', onSubmitForm);
