---
displayed_sidebar: docs
---

# DROP TABLE

## 功能

该语句用于删除表。

## 语法

```sql
DROP [TEMPORARY] TABLE [IF EXISTS] [db_name.]table_name [FORCE]
```

说明：

- 执行 DROP TABLE 后一段时间内（默认 1 天），可以通过 [RECOVER](../backup_restore/recover.md) 语句恢复被删除的表。
- 如果执行 `DROP TABLE FORCE`，则系统不会检查该表是否存在未完成的事务，表将直接被删除并且不能被恢复，一般不建议执行此操作。
- 临时表删除后不可以通过 RECOVER 语句恢复。

## 示例

1. 删除一个 table。

    ```sql
    DROP TABLE my_table;
    ```

2. 如果存在，删除指定 database 的 table。

    ```sql
    DROP TABLE IF EXISTS example_db.my_table;
    ```

3. 强制删除表，并清理磁盘文件。

    ```sql
    DROP TABLE my_table FORCE;
    ```

## References

* [CREATE TABLE](create-table.md)
* [SHOW TABLES](show-tables.md)
* [SHOW CREATE TABLE](SHOW_create-table.md)
* [ALTER TABLE](alter-table.md)
* [SHOW ALTER TABLE](show-alter.md)
