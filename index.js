// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
    [key]: value,
    };
}


//DestructivelyUpdateEmployeeWithKeyAndValue()
//Note: you must use Bracket Notation, if you use Dot Notation
//The "employee.key" key will be taken literally, not evaluated
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return(employee)
}

//deleteFromEmployeeByKey()
function deleteFromEmployeeByKey(employee,key){
    const noKeyEmployee = {...employee}
    delete noKeyEmployee[key]
    return(noKeyEmployee)
}

//destructivelyDeleteFromEmployeeByKey()
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return(employee)
}