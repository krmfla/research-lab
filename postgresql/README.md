# PostgreSQL  

with pgAdmin

### Create Table

```sql
CREATE TABLE table_name (
  column_name data_type column_constraint
)
```

example

```sql
CREATE TABLE store (
  store_name varchar(100),
  amount varchar(100)
)

CREATE TABLE store (
  store_name varchar(100) UNIQUE NOT NULL,
  amount varchar(100) NOT NULL
)


```

### Select

```sql
SELECT * FROM table_name
```

### Insert

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)
```

### Add new column

```sql
ALTER TABLE table_name
ADD COLUMN new_column_name data_type
```
