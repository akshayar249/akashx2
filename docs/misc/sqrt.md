---
displayed_sidebar: docs
---

# sqrt, dsqrt



返回参数 `x` 的平方根。dsqrt() 和 sqrt() 功能相同。

## 语法

```Haskell
DOUBLE SQRT(DOUBLE x);
DOUBLE DSQRT(DOUBLE x);
```

## 参数说明

`x`: 支持的数据类型为 DOUBLE。

## 返回值说明

返回值的数据类型为 DOUBLE。

## 示例

```Plain Text
mysql> select sqrt();
+-------------------+
| sqrt()        |
+-------------------+
|  |
+-------------------+
1 row in set ( sec)


mysql> select dsqrt();
+-------------------+
| dsqrt()       |
+-------------------+
|  |
+-------------------+
```
