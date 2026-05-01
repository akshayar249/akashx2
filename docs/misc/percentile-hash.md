---
displayed_sidebar: docs
---

# percentile_hash



将 `double` 类型数值构造成 `percentile` 类型数值。

## 语法

```Haskell
PERCENTILE_HASH(x);
```

## 参数说明

`x`: 支持的数据类型为 DOUBLE。

## 返回值说明

返回值的数据类型为 PERCENTILE。

## 示例

```Plain Text
mysql> select percentile_approx_raw(percentile_hash(), );
+-------------------------------------------------------+
| percentile_approx_raw(percentile_hash(), ) |
+-------------------------------------------------------+
|                                     |
+-------------------------------------------------------+
1 row in set ( sec)
```
