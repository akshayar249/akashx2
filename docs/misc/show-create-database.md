---
displayed_sidebar: docs
---

# SHOW CREATE DATABASE

查看指定数据库的创建语句。

## 语法

```sql
SHOW CREATE DATABASE <db_name>
```

## 参数说明

`db_name`：数据库的名称，必填。

## 返回结果说明

返回两个字段：

- Database：数据库名称

- Create Database：数据库的创建语句

## 示例

```sql
mysql > show create database zj_test;
+----------+---------------------------+
| Database | Create Database           |
+----------+---------------------------+
| zj_test  | CREATE DATABASE `zj_test` |
+----------+---------------------------+
```

## 相关参考

- [CREATE DATABASE](create-database.md)
- [SHOW DATABASES](show-databases.md)
- [USE](use.md)
- [DESC](../table_bucket_part_index/describe.md)
- [DROP DATABASE](drop-database.md)
