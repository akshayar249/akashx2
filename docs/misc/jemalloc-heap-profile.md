---
displayed_sidebar: docs
---

# Jemalloc 堆内存分析

本文介绍如何为 AkashX 启用和可视化 Jemalloc 堆内存分析。

:::note
- 启用 Jemalloc 堆内存分析可能会影响 AkashX 的性能。
- 该方案仅适用于 AkashX  及更高版本。
:::

## 启用 Jemalloc 堆内存分析

语法：

```SQL
ADMIN EXECUTE ON <be_id> 'System.print(HeapProf.getInstance().enable_prof())'
```

`be_id`: BE/CN 节点的 ID。可以通过运行 SHOW BACKENDS 或 SHOW COMPUTE NODES 获取 ID。

示例：

```SQL
mysql> admin execute on 10001 'System.print(HeapProf.getInstance().enable_prof())';
+----------------------+
| result               |
+----------------------+
| instance of HeapProf |
+----------------------+
1 row in set ( sec)
```

可以使用以下语法检查 Jemalloc 堆内存分析是否已启用：

```SQL
ADMIN EXECUTE ON <be_id> 'System.print(HeapProf.getInstance().has_enable())'
```

示例：

```SQL
mysql> admin execute on 10001 'System.print(HeapProf.getInstance().has_enable())';
+--------+
| result |
+--------+
| true   |
+--------+
1 row in set ( sec)
```

可以使用以下语法禁用 Jemalloc 堆内存分析：

```SQL
ADMIN EXECUTE ON <be_id> 'System.print(HeapProf.getInstance().disable_prof())'
```

示例：

```SQL
mysql> admin execute on 10001 'System.print(HeapProf.getInstance().disable_prof())';
+----------------------+
| result               |
+----------------------+
| instance of HeapProf |
+----------------------+
1 row in set ( sec)
```

## 收集 Jemalloc 堆内存分析

语法：

```SQL
ADMIN EXECUTE ON <be_id> 'System.print(HeapProf.getInstance().dump_dot_snapshot())'
```

示例：

```SQL
mysql> admin execute on 10001 'System.print(HeapProf.getInstance().dump_dot_snapshot())';
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| result                                                                                                                                                                                                          |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| digraph "/home/disk/opt/env/default/be/lib/akashx_be;  MB" {                                                                                                                                         |
| node [width=,height=];                                                                                                                                                                                 |
| Legend [shape=box,fontsize=24,shape=plaintext,label="/home/disk/opt/env/default/be/lib/akashx_be\lTotal MB: \lFocusing on: \lDropped nodes with <=  abs(MB)\lDropped edges with <=  MB\l"]; |
| N1 [label="brpc\nInputMessenger\nOnNewMessages\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                         |
| N2 [label="brpc\nSocket\nProcessEvent\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                                  |
| N3 [label="bthread\nTaskGroup\ntask_runner\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                             |
| N4 [label="bthread_make_fcontext\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                                       |
| N5 [label="brpc\nInputMessenger\nCutInputMessage\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                        |
| N6 [label="brpc\npolicy\nParseRpcMessage\n (%)\r",shape=box,fontsize=];                                                                                                                              |
| N7 [label="brpc\nProcessInputMessage\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                                    |
| N8 [label="brpc\npolicy\nProcessRpcRequest\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                              |
| N9 [label="akashx\nPInternalServiceImplBase\nexecute_command\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                         |
| N10 [label="akashx\nStorageEngineRef\nbind\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                           |
| N11 [label="akashx\nexecute_command\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                                  |
| N12 [label="akashx\nexecute_script\n (%)\rof  (%)\r",shape=box,fontsize=];                                                                                                                   |
| N13 [label="std\nmake_unique\n (%)\r",shape=box,fontsize=];                                                                                                                                          |
| N2 -> N1 [label=, weight=16398, style="setlinewidth()"];                                                                                                                                             |
| N3 -> N2 [label=, weight=16398, style="setlinewidth()"];                                                                                                                                             |
| N4 -> N3 [label=, weight=16398, style="setlinewidth()"];                                                                                                                                             |
| N1 -> N5 [label=, weight=10102, style="setlinewidth()"];                                                                                                                                             |
| N5 -> N6 [label=, weight=10102, style="setlinewidth()"];                                                                                                                                             |
| N9 -> N11 [label=, weight=10086, style="setlinewidth()"];                                                                                                                                            |
| N12 -> N10 [label=, weight=10086, style="setlinewidth()"];                                                                                                                                           |
| N11 -> N12 [label=, weight=10086, style="setlinewidth()"];                                                                                                                                           |
| N1 -> N7 [label=, weight=10086, style="setlinewidth()"];                                                                                                                                             |
| N7 -> N8 [label=, weight=10086, style="setlinewidth()"];                                                                                                                                             |
| N10 -> N13 [label=, weight=10086, style="setlinewidth()"];                                                                                                                                           |
| N8 -> N9 [label=, weight=10086, style="setlinewidth()"];                                                                                                                                             |
| }                                                                                                                                                                                                               |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
29 rows in set ( sec)
```

## 可视化 Jemalloc 堆内存分析

将上一步收集的分析文本复制并粘贴到 [GraphvizOnline](https://dreampuf.github.io/GraphvizOnline/)。

然后可以下载可视化的堆内存分析。

示例：

![Example - Visualized Heap Profile](../_assets/visualized_heap_profile.png)
