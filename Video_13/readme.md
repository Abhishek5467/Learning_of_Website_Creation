```sql
SELECT Orders.OrderID, Employees.LastName, Employee.FirstName
FROM Orders
RIGHT JOIN Employes ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```
- Full Outer Join
```sql
SELECT
```