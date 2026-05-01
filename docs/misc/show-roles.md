---
displayed_sidebar: docs
---

# SHOW ROLES

import UserManagementPriv from '../../../_assets/commonMarkdown/userManagementPriv.mdx'

## 功能

查看当前系统中的所有角色。如果要查看角色的权限信息，可以使用 `SHOW GRANTS FOR ROLE <role_name>;`，具体参见 [SHOW GRANTS](show-grants.md)。

该命令从  版本开始支持。

<UserManagementPriv />

## 语法

```SQL
SHOW ROLES
```

返回字段说明：

| **字段** | **描述**   |
| -------- | ---------- |
| Name     | 角色名称。 |

## 示例

查看当前系统中的所有角色。

```Plain
mysql> SHOW ROLES;
+---------------+
| Name          |
+---------------+
| root          |
| db_admin      |
| cluster_admin |
| user_admin    |
| public        |
| testrole      |
+---------------+
```

## 相关参考

- [CREATE ROLE](create-role.md)
- [ALTER USER](alter-user.md)
- [SET ROLE](set-role.md)
- [DROP ROLE](drop-role.md)
