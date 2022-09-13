var editRow = null

function submitForm(){
    var formData = readData();

    if(editRow==null){
        insertData(formData);
    }
    else{
        update(formData);
    }
    resetForm();
}

function update(formData){
    editRow.cells[0].innerHTML = formData.fullname;
    editRow.cells[1].innerHTML = formData.email;
    editRow.cells[2].innerHTML = formData.empid;
    editRow.cells[3].innerHTML = formData.gender;
    editRow.cells[4].innerHTML = formData.mobile;
    editRow.cells[5].innerHTML = formData.role;
}

function readData(){
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["email"] = document.getElementById("email").value;
    formData["empid"] = document.getElementById("empid").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["role"] = document.getElementById("role").value;
    return formData;
}

function insertData(data){
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    col1 = newRow.insertCell(0);
    col1.innerHTML = data.fullname;
    col2 = newRow.insertCell(1);
    col2.innerHTML = data.email;
    col3 = newRow.insertCell(2);
    col3.innerHTML = data.empid;
    col4 = newRow.insertCell(3);
    col4.innerHTML = data.gender;
    col5 = newRow.insertCell(4);
    col5.innerHTML = data.mobile;
    col6 = newRow.insertCell(5);
    col6.innerHTML = data.role;
    col6 = newRow.insertCell(6);
    col6.innerHTML = `<button onclick="edit(this)">Edit</button> <button onClick="Delete(this)">Delete</button>`
}

function resetForm(){
    document.getElementById("fullname").value="";
    document.getElementById("email").value="";
    document.getElementById("empid").value="";
    document.getElementById("gender").value="";
    document.getElementById("mobile").value="";
    document.getElementById("role").value="";
    row = null;
}

function edit(td){
    editRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = editRow.cells[0].innerHTML;
    document.getElementById("email").value = editRow.cells[1].innerHTML;
    document.getElementById("empid").value = editRow.cells[2].innerHTML;
    document.getElementById("gender").value = editRow.cells[3].innerHTML;
    document.getElementById("mobile").value = editRow.cells[4].innerHTML;
    document.getElementById("role").value = editRow.cells[5].innerHTML;
}

function Delete(td){
    if(confirm("Are you sure?")){
    del = td.parentElement.parentElement;
    document.getElementById("emplist").deleteRow(del.rowIndex);
    resetForm();
    }
}