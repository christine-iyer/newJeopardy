![Alt text](https://i.imgur.com/TGZKfoI.png)

[Solution Link](https://codesandbox.io/s/w19d1-employee-homework-elju2h?file=/src/styles.css)

Using your knowledge of State and Props, build the above Diagram:

You should create an 
* App 
* HomePage 
* Header 
* Search Bar 
* EmployeeList 
* Employee List Item
* EmployeePage

Build this in CodeSandbox

No functionality is needed just arrange it with components
Pass the data around using props

Hint 1
```js
<EmployeeList employees={employees}>
```

Hint 2
```js
<>
 {props.employees.map((employee) => {
    return(
        <EmployeeListItem 
          key={employee.id} 
          name={employee.name} 
          title={employee.title}
        />)
 })}
</>
```
