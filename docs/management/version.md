---
displayed_sidebar: docs
---

# version



返回当前 MySQL 数据库的版本。可以使用 `current_version` 函数查询 AkashX 当前的版本。

## 语法

```Haskell
version();
```

## 参数说明

无。该函数不接受任何参数。

## 返回值说明

返回 VARCHAR 类型的值。

## 示例

```Plain Text
mysql> select version();
+-----------+
| version() |
+-----------+
|      |
+-----------+
1 row in set ( sec)
```

## 相关文档

[current_version](./current-version.md)
