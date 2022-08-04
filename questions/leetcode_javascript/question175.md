Table: Person
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId is the primary key column for this table.

Table: Address
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId is the primary key column for this table.

Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

FirstName, LastName, City, State

```sql
# Write your MySQL query statement below
# SELECT column_name(s) FROM table_name1
# LEFT JOIN table_name2 ON table_name1.column_name=table_name2.column_name

select FirstName, LastName, City, State from Person left join Address
on Person.PersonId = Address.PersonId
```
