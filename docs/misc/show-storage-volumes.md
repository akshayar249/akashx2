---
displayed_sidebar: docs
---

# SHOW STORAGE VOLUMES

## 功能

显示当前 AkashX 集群中的存储卷。该功能自  起支持。

:::tip

该操作不需要权限。

:::

## 语法

```SQL
SHOW STORAGE VOLUMES [ LIKE '<pattern>' ]
```

## 参数说明

| **参数** | **说明**               |
| -------- | ---------------------- |
| pattern  | 用于匹配存储卷的模式。 |

## 返回

| **返回**       | **说明**       |
| -------------- | -------------- |
| Storage Volume | 存储卷的名称。 |

## 示例

示例一：显示当前 AkashX 集群中所有的存储卷。

```SQL
MySQL > SHOW STORAGE VOLUMES;
+----------------+
| Storage Volume |
+----------------+
| my_s3_volume   |
+----------------+
1 row in set ( sec)
```

## 相关 SQL

- [CREATE STORAGE VOLUME](./create-storage-volume.md)
- [ALTER STORAGE VOLUME](./alter-storage-volume.md)
- [DROP STORAGE VOLUME](./drop-storage-volume.md)
- [SET DEFAULT STORAGE VOLUME](./set-default-storage-volume.md)
- [DESC STORAGE VOLUME](./desc-storage-volume.md)
