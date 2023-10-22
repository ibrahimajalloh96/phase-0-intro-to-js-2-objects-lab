const employee={name:'bob', streetAdress:'John'}
 function updateEmployeeWithKeyAndValue(object, key, value){
    return {
        ...object,
        [key]: value
    }
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee; 
 }
 function deleteFromEmployeeByKey(employee, key, value){
   let obj = {...employee}
   delete obj[key]
   return obj
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key, value){
  delete employee[key]
   return employee
 }