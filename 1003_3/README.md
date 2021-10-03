# <Customers Who Never Order>

1.  이해

    Table : Customers <br>
    +-------------+---------+ <br>
    | Column Name | Type | <br>
    +-------------+---------+ <br>
    | Id | int | <br>
    | Name | varchar | <br>
    +-------------+---------+ <br>
    Id is the primary key column for this table.
    Each row of this table indicates the ID and name of a customer.
    <hr>
    Table : Orders <br>
    +-------------+------+ <br>
    | Column Name | Type | <br>
    +-------------+------+ <br>
    | Id | int | <br>
    | CustomerId | int | <br>
    +-------------+------+ <br>
    Id is the primary key column for this table.
    CustomerId is a foreign key of the ID from the Customers table.
    Each row of this table indicates the ID of an order and the ID of the customer who ordered it.
    <br><br>
    Write an SQL query to report all customers who never order anything.

2.  계획

    is null 을 이용한다.

3.  실행

4.  회고
