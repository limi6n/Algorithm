# <Combine Two Tables>

1.  이해

    Table : Person <br>
    +-------------+---------+ <br>
    | Column Name | Type | <br>
    +-------------+---------+ <br>
    | PersonId | int | <br>
    | FirstName | varchar | <br>
    | LastName | varchar | <br>
    +-------------+---------+ <br>
    PersonId is the primary key column for this table.
    This table contains information about the ID of some persons and their first and last names.
    <br><br>
    Table : Address <br>
    +-------------+---------+ <br>
    | Column Name | Type | <br>
    +-------------+---------+ <br>
    | AddressId | int | <br>
    | PersonId | int | <br>
    | City | varchar | <br>
    | State | varchar | <br>
    +-------------+---------+ <br>
    AddressId is the primary key column for this table.
    Each row of this table containts information about the city and state of one person with ID = PersonId.
    <br><br>
    Write an SQL query to report the first name, last name, city, and state of each person in the Person table. If the address of a PersonId is not present in the Address table, report null instead.

2.  계획

    join 을 이용하여 테이블을 합친다.

3.  실행

4.  회고

    역시 left outer join 은 그림 그려보는 게 최고..
