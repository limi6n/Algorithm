# <Duplicate Emails>

1. 이해

   Table : Person <br>
   +-------------+---------+ <br>
   | Column Name | Type | <br>
   +-------------+---------+ <br>
   | Id | int | <br>
   | Email | varchar | <br>
   +-------------+---------+ <br>
   <br>
   Id is the primary key column for this table.
   Each row of this table contains an email. The emails will not contain uppercase letters.

2. 계획

   group by 를 사용하여 중복되는 Email을 추출한다.

3. 실행

4. 회고

   우연히 SQL 문제를 골랐는데, 쿼리를 오랜만에 작성하는 거라 간단한 쿼리문인데도 순간 group by를 써야한다는 생각을 바로 해내지 못했다.
