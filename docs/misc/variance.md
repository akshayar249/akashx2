---
displayed_sidebar: docs
---

# variance, var_pop, variance_pop



返回表达式的总体方差。从  版本开始，该函数也可以用作窗口函数。

## 语法

```Haskell
VARIANCE(expr)
```

## 参数说明

`expr`: 选取的表达式。当表达式为表中一列时，支持以下数据类型: TINYINT、SMALLINT、INT、BIGINT、LARGEINT、FLOAT、DOUBLE、DECIMAL。

## 返回值说明

返回值为 DOUBLE 类型。

## 示例

```plaintext
select var_pop(i_current_price), i_rec_start_date from item group by i_rec_start_date;
+--------------------------+------------------+
| var_pop(i_current_price) | i_rec_start_date |
+--------------------------+------------------+
|        | 1997-10-27       |
|        | NULL             |
|        | 1999-10-28       |
|         | 2000-10-27       |
|        | 2001-10-27       |
+--------------------------+------------------+

select variance(i_current_price), i_rec_start_date from item group by i_rec_start_date;
+---------------------------+------------------+
| variance(i_current_price) | i_rec_start_date |
+---------------------------+------------------+
|         | 1997-10-27       |
|          | NULL             |
|         | 1999-10-28       |
|          | 2000-10-27       |
|         | 2001-10-27       |
+---------------------------+------------------+
```
