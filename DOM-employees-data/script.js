let employees = getEmployeesData();

// All employees button
let allEmpButton = document.querySelector('#all-emp-btn');
allEmpButton.addEventListener('click',function() {
    displayEmployees(employees);
});

// Male employees button
let maleEmpButton = document.querySelector('#male-emp-btn');
maleEmpButton.addEventListener('click',function() {
    let maleEmployees = employees.filter(function(employee) {
        return employee.gender === 'Male';
    });
    displayEmployees(maleEmployees);
});

// Female employees button
let femaleEmpButton = document.querySelector('#female-emp-btn');
femaleEmpButton.addEventListener('click',function() {
    let femaleEmployees = employees.filter(function(employee) {
        return employee.gender === 'Female';
    });
    displayEmployees(femaleEmployees);
});

// employee Search
let searchBox = document.querySelector('#emp-search');
searchBox.addEventListener('keyup',function() {
   let searchQuery = searchBox.value;
   if(searchQuery !== ''){
       let filteredEmployees = employees.filter(function(employee) {
           return employee.first_name.toUpperCase().trim().startsWith(searchQuery.toUpperCase().trim());
       });
       displayEmployees(filteredEmployees);
   }
   else{
       displayEmployees([]);
   }
});

// display employees
let displayEmployees = (employees) => {
    // display employee count
    document.querySelector('#count').innerText = employees.length;
    let tableRow = '';
    for(let employee of employees){
        tableRow += `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.country}</td>
                    </tr>`;
    }
    document.querySelector('#table-body').innerHTML = tableRow;
};