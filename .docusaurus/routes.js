import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c80'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '570'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/docusaurus',
            component: ComponentCreator('/docs/tags/docusaurus', '817'),
            exact: true
          },
          {
            path: '/docs/tags/facebook',
            component: ComponentCreator('/docs/tags/facebook', '925'),
            exact: true
          },
          {
            path: '/docs/tags/hello',
            component: ComponentCreator('/docs/tags/hello', 'c8e'),
            exact: true
          },
          {
            path: '/docs/tags/hola',
            component: ComponentCreator('/docs/tags/hola', '3c3'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cdd'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2015-01-30',
                component: ComponentCreator('/docs/2015-01-30', 'b93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/abs',
                component: ComponentCreator('/docs/abs', '90c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/accelerate-cardinality-preserving-joins',
                component: ComponentCreator('/docs/accelerate-cardinality-preserving-joins', '915'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/acos',
                component: ComponentCreator('/docs/acos', '881'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADD_BACKEND_BLACKLIST',
                component: ComponentCreator('/docs/ADD_BACKEND_BLACKLIST', '023'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/add_months',
                component: ComponentCreator('/docs/add_months', 'eb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADD_SQLBLACKLIST',
                component: ComponentCreator('/docs/ADD_SQLBLACKLIST', '6e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/adddate',
                component: ComponentCreator('/docs/adddate', '232'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_CANCEL_REPAIR',
                component: ComponentCreator('/docs/ADMIN_CANCEL_REPAIR', '7fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_CHECK_TABLET',
                component: ComponentCreator('/docs/ADMIN_CHECK_TABLET', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_REPAIR',
                component: ComponentCreator('/docs/ADMIN_REPAIR', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_SET_CONFIG',
                component: ComponentCreator('/docs/ADMIN_SET_CONFIG', '21b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_SET_PARTITION_VERSION',
                component: ComponentCreator('/docs/ADMIN_SET_PARTITION_VERSION', '508'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_SET_REPLICA_STATUS',
                component: ComponentCreator('/docs/ADMIN_SET_REPLICA_STATUS', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_SHOW_CONFIG',
                component: ComponentCreator('/docs/ADMIN_SHOW_CONFIG', 'd57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_SHOW_REPLICA_DISTRIBUTION',
                component: ComponentCreator('/docs/ADMIN_SHOW_REPLICA_DISTRIBUTION', 'a85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ADMIN_SHOW_REPLICA_STATUS',
                component: ComponentCreator('/docs/ADMIN_SHOW_REPLICA_STATUS', 'ea7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/aes_decrypt',
                component: ComponentCreator('/docs/aes_decrypt', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/aes_encrypt',
                component: ComponentCreator('/docs/aes_encrypt', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/aggregate_table',
                component: ComponentCreator('/docs/aggregate_table', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/alert',
                component: ComponentCreator('/docs/alert', '84f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/alibaba',
                component: ComponentCreator('/docs/alibaba', '47b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/all_match',
                component: ComponentCreator('/docs/all_match', '8ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_DATABASE',
                component: ComponentCreator('/docs/ALTER_DATABASE', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_LOAD',
                component: ComponentCreator('/docs/ALTER_LOAD', '2ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/ALTER_MATERIALIZED_VIEW', '1b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_PIPE',
                component: ComponentCreator('/docs/ALTER_PIPE', '3c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_RESOURCE',
                component: ComponentCreator('/docs/ALTER_RESOURCE', '8b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_RESOURCE_GROUP',
                component: ComponentCreator('/docs/ALTER_RESOURCE_GROUP', 'b34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_ROUTINE_LOAD',
                component: ComponentCreator('/docs/ALTER_ROUTINE_LOAD', '2d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_STORAGE_VOLUME',
                component: ComponentCreator('/docs/ALTER_STORAGE_VOLUME', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_SYSTEM',
                component: ComponentCreator('/docs/ALTER_SYSTEM', '42e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_TABLE',
                component: ComponentCreator('/docs/ALTER_TABLE', '174'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_USER',
                component: ComponentCreator('/docs/ALTER_USER', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ALTER_VIEW',
                component: ComponentCreator('/docs/ALTER_VIEW', '079'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ANALYZE_PROFILE',
                component: ComponentCreator('/docs/ANALYZE_PROFILE', 'b5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analyze_status',
                component: ComponentCreator('/docs/analyze_status', '687'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ANALYZE_TABLE',
                component: ComponentCreator('/docs/ANALYZE_TABLE', '986'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/any_match',
                component: ComponentCreator('/docs/any_match', '98e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/any_value',
                component: ComponentCreator('/docs/any_value', 'ea1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API',
                component: ComponentCreator('/docs/API', '2b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/append_trailing_char_if_absent',
                component: ComponentCreator('/docs/append_trailing_char_if_absent', 'cb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/applicable_roles',
                component: ComponentCreator('/docs/applicable_roles', '3c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/approx_count_distinct',
                component: ComponentCreator('/docs/approx_count_distinct', 'd28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/approx_top_k',
                component: ComponentCreator('/docs/approx_top_k', 'cfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Architecture',
                component: ComponentCreator('/docs/Architecture', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Array',
                component: ComponentCreator('/docs/Array', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_agg',
                component: ComponentCreator('/docs/array_agg', '533'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_append',
                component: ComponentCreator('/docs/array_append', 'fed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_avg',
                component: ComponentCreator('/docs/array_avg', 'f23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_concat',
                component: ComponentCreator('/docs/array_concat', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_contains',
                component: ComponentCreator('/docs/array_contains', 'e6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_contains_all',
                component: ComponentCreator('/docs/array_contains_all', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_contains_seq',
                component: ComponentCreator('/docs/array_contains_seq', '621'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_cum_sum',
                component: ComponentCreator('/docs/array_cum_sum', '0e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_difference',
                component: ComponentCreator('/docs/array_difference', '5bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_distinct',
                component: ComponentCreator('/docs/array_distinct', 'eca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_filter',
                component: ComponentCreator('/docs/array_filter', '635'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_flatten',
                component: ComponentCreator('/docs/array_flatten', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_generate',
                component: ComponentCreator('/docs/array_generate', 'dde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_intersect',
                component: ComponentCreator('/docs/array_intersect', '9af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_join',
                component: ComponentCreator('/docs/array_join', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_length',
                component: ComponentCreator('/docs/array_length', '83d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_map',
                component: ComponentCreator('/docs/array_map', '78c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_max',
                component: ComponentCreator('/docs/array_max', 'a77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_min',
                component: ComponentCreator('/docs/array_min', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_position',
                component: ComponentCreator('/docs/array_position', '337'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_remove',
                component: ComponentCreator('/docs/array_remove', '392'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_repeat',
                component: ComponentCreator('/docs/array_repeat', '390'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_slice',
                component: ComponentCreator('/docs/array_slice', '58f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_sort',
                component: ComponentCreator('/docs/array_sort', 'c63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_sortby',
                component: ComponentCreator('/docs/array_sortby', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_sum',
                component: ComponentCreator('/docs/array_sum', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_to_bitmap',
                component: ComponentCreator('/docs/array_to_bitmap', '869'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/array_unique_agg',
                component: ComponentCreator('/docs/array_unique_agg', '530'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/arrays_overlap',
                component: ComponentCreator('/docs/arrays_overlap', 'f53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/arrow_flight',
                component: ComponentCreator('/docs/arrow_flight', 'd0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/arrow-function',
                component: ComponentCreator('/docs/arrow-function', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ascii',
                component: ComponentCreator('/docs/ascii', 'f80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/asin',
                component: ComponentCreator('/docs/asin', 'bba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/atan',
                component: ComponentCreator('/docs/atan', '5af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/atan2',
                component: ComponentCreator('/docs/atan2', 'cdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/audit_loader',
                component: ComponentCreator('/docs/audit_loader', 'a84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/authenticate_to_aws_resources',
                component: ComponentCreator('/docs/authenticate_to_aws_resources', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/authenticate_to_azure_storage',
                component: ComponentCreator('/docs/authenticate_to_azure_storage', '2c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/authenticate_to_gcs',
                component: ComponentCreator('/docs/authenticate_to_gcs', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/authentication_authorization',
                component: ComponentCreator('/docs/authentication_authorization', 'cd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/AUTHORS',
                component: ComponentCreator('/docs/AUTHORS', 'cdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/auto_increment',
                component: ComponentCreator('/docs/auto_increment', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/automq-routine-load',
                component: ComponentCreator('/docs/automq-routine-load', '572'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/avg',
                component: ComponentCreator('/docs/avg', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/AWS_cloudformation',
                component: ComponentCreator('/docs/AWS_cloudformation', '812'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/aws_iam_policies',
                component: ComponentCreator('/docs/aws_iam_policies', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/azure',
                component: ComponentCreator('/docs/azure', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BACKUP',
                component: ComponentCreator('/docs/BACKUP', '225'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Backup_and_restore',
                component: ComponentCreator('/docs/Backup_and_restore', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bar',
                component: ComponentCreator('/docs/bar', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/base64_decode_binary',
                component: ComponentCreator('/docs/base64_decode_binary', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/base64_decode_string',
                component: ComponentCreator('/docs/base64_decode_string', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/base64_to_bitmap',
                component: ComponentCreator('/docs/base64_to_bitmap', '975'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BE_blacklist',
                component: ComponentCreator('/docs/BE_blacklist', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_bvars',
                component: ComponentCreator('/docs/be_bvars', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_cloud_native_compactions',
                component: ComponentCreator('/docs/be_cloud_native_compactions', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_compactions',
                component: ComponentCreator('/docs/be_compactions', '457'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_configs',
                component: ComponentCreator('/docs/be_configs', '1c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BE_configuration',
                component: ComponentCreator('/docs/BE_configuration', 'e48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_label',
                component: ComponentCreator('/docs/be_label', 'e94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_logs',
                component: ComponentCreator('/docs/be_logs', '1b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_metrics',
                component: ComponentCreator('/docs/be_metrics', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_tablets',
                component: ComponentCreator('/docs/be_tablets', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_threads',
                component: ComponentCreator('/docs/be_threads', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/be_txns',
                component: ComponentCreator('/docs/be_txns', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BIGINT',
                component: ComponentCreator('/docs/BIGINT', '66f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bin',
                component: ComponentCreator('/docs/bin', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BINARY',
                component: ComponentCreator('/docs/BINARY', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bit_shift_left',
                component: ComponentCreator('/docs/bit_shift_left', 'e06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bit_shift_right',
                component: ComponentCreator('/docs/bit_shift_right', '009'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bit_shift_right_logical',
                component: ComponentCreator('/docs/bit_shift_right_logical', '07b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitand',
                component: ComponentCreator('/docs/bitand', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BITMAP',
                component: ComponentCreator('/docs/BITMAP', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_agg',
                component: ComponentCreator('/docs/bitmap_agg', '423'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_and',
                component: ComponentCreator('/docs/bitmap_and', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_andnot',
                component: ComponentCreator('/docs/bitmap_andnot', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_contains',
                component: ComponentCreator('/docs/bitmap_contains', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_count',
                component: ComponentCreator('/docs/bitmap_count', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_empty',
                component: ComponentCreator('/docs/bitmap_empty', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_from_binary',
                component: ComponentCreator('/docs/bitmap_from_binary', '8ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_from_string',
                component: ComponentCreator('/docs/bitmap_from_string', '70c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_has_any',
                component: ComponentCreator('/docs/bitmap_has_any', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_hash',
                component: ComponentCreator('/docs/bitmap_hash', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_hash64',
                component: ComponentCreator('/docs/bitmap_hash64', '4e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Bitmap_index',
                component: ComponentCreator('/docs/Bitmap_index', 'a95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_intersect',
                component: ComponentCreator('/docs/bitmap_intersect', 'd38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_max',
                component: ComponentCreator('/docs/bitmap_max', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_min',
                component: ComponentCreator('/docs/bitmap_min', '38c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_or',
                component: ComponentCreator('/docs/bitmap_or', 'e47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_remove',
                component: ComponentCreator('/docs/bitmap_remove', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_subset_in_range',
                component: ComponentCreator('/docs/bitmap_subset_in_range', '5e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_subset_limit',
                component: ComponentCreator('/docs/bitmap_subset_limit', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_to_array',
                component: ComponentCreator('/docs/bitmap_to_array', '8f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_to_base64',
                component: ComponentCreator('/docs/bitmap_to_base64', 'a6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_to_binary',
                component: ComponentCreator('/docs/bitmap_to_binary', 'a93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_to_string',
                component: ComponentCreator('/docs/bitmap_to_string', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_union',
                component: ComponentCreator('/docs/bitmap_union', '097'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_union_count',
                component: ComponentCreator('/docs/bitmap_union_count', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_union_int',
                component: ComponentCreator('/docs/bitmap_union_int', '6fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitmap_xor',
                component: ComponentCreator('/docs/bitmap_xor', '204'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitnot',
                component: ComponentCreator('/docs/bitnot', '9ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitor',
                component: ComponentCreator('/docs/bitor', 'f00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bitxor',
                component: ComponentCreator('/docs/bitxor', '077'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Blacklist',
                component: ComponentCreator('/docs/Blacklist', '0fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/block_cache',
                component: ComponentCreator('/docs/block_cache', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/block_cache_warmup',
                component: ComponentCreator('/docs/block_cache_warmup', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Bloomfilter_index',
                component: ComponentCreator('/docs/Bloomfilter_index', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bool_or',
                component: ComponentCreator('/docs/bool_or', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BOOLEAN',
                component: ComponentCreator('/docs/BOOLEAN', '7a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BROKER_LOAD',
                component: ComponentCreator('/docs/BROKER_LOAD', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Broker_load_faq',
                component: ComponentCreator('/docs/Broker_load_faq', 'e74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/BrokerLoad',
                component: ComponentCreator('/docs/BrokerLoad', '679'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bucketing',
                component: ComponentCreator('/docs/bucketing', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bug_report',
                component: ComponentCreator('/docs/bug_report', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/bug-report',
                component: ComponentCreator('/docs/bug-report', '613'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Build_in_docker',
                component: ComponentCreator('/docs/Build_in_docker', '74a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/build_akashx_on_ubuntu',
                component: ComponentCreator('/docs/build_akashx_on_ubuntu', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/built_in_roles',
                component: ComponentCreator('/docs/built_in_roles', '388'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_ALTER_TABLE',
                component: ComponentCreator('/docs/CANCEL_ALTER_TABLE', '806'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_BACKUP',
                component: ComponentCreator('/docs/CANCEL_BACKUP', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_DECOMMISSION',
                component: ComponentCreator('/docs/CANCEL_DECOMMISSION', 'df0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_EXPORT',
                component: ComponentCreator('/docs/CANCEL_EXPORT', '4ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_LOAD',
                component: ComponentCreator('/docs/CANCEL_LOAD', '6a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_REFRESH_DICTIONARY',
                component: ComponentCreator('/docs/CANCEL_REFRESH_DICTIONARY', '89e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_REFRESH_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/CANCEL_REFRESH_MATERIALIZED_VIEW', 'be1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CANCEL_RESTORE',
                component: ComponentCreator('/docs/CANCEL_RESTORE', 'be9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cardinality',
                component: ComponentCreator('/docs/cardinality', '404'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/case_when',
                component: ComponentCreator('/docs/case_when', '1b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cast',
                component: ComponentCreator('/docs/cast', 'a52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/catalog',
                component: ComponentCreator('/docs/catalog', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/catalog_overview',
                component: ComponentCreator('/docs/catalog_overview', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cbrt',
                component: ComponentCreator('/docs/cbrt', '9a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ceil',
                component: ComponentCreator('/docs/ceil', '91d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ceiling',
                component: ComponentCreator('/docs/ceiling', 'd7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CHANGELOG',
                component: ComponentCreator('/docs/CHANGELOG', '4d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CHANGES',
                component: ComponentCreator('/docs/CHANGES', 'f44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CHAR',
                component: ComponentCreator('/docs/CHAR', 'd1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/char_length',
                component: ComponentCreator('/docs/char_length', '80f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/character_length',
                component: ComponentCreator('/docs/character_length', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/character_sets',
                component: ComponentCreator('/docs/character_sets', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CloudCanal',
                component: ComponentCreator('/docs/CloudCanal', 'c4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CloudCanal_load_faq',
                component: ComponentCreator('/docs/CloudCanal_load_faq', '9ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cluster_snapshot',
                component: ComponentCreator('/docs/cluster_snapshot', '9e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coalesce',
                component: ComponentCreator('/docs/coalesce', '888'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CODE_OF_CONDUCT',
                component: ComponentCreator('/docs/CODE_OF_CONDUCT', '72a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collations',
                component: ComponentCreator('/docs/collations', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Colocate_join',
                component: ComponentCreator('/docs/Colocate_join', '4d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/column_privileges',
                component: ComponentCreator('/docs/column_privileges', '480'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/column_size_functions',
                component: ComponentCreator('/docs/column_size_functions', 'de4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/column_stats_usage',
                component: ComponentCreator('/docs/column_stats_usage', '040'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/columns',
                component: ComponentCreator('/docs/columns', '781'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/compaction',
                component: ComponentCreator('/docs/compaction', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concat',
                component: ComponentCreator('/docs/concat', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concat_ws',
                component: ComponentCreator('/docs/concat_ws', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/congratulations',
                component: ComponentCreator('/docs/congratulations', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Connector',
                component: ComponentCreator('/docs/Connector', '565'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CONTRIBUTING',
                component: ComponentCreator('/docs/CONTRIBUTING', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CONTRIBUTORS',
                component: ComponentCreator('/docs/CONTRIBUTORS', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conv',
                component: ComponentCreator('/docs/conv', '679'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/convert_tz',
                component: ComponentCreator('/docs/convert_tz', '2d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/corr',
                component: ComponentCreator('/docs/corr', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cos',
                component: ComponentCreator('/docs/cos', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cos_similarity',
                component: ComponentCreator('/docs/cos_similarity', '043'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cos_similarity_norm',
                component: ComponentCreator('/docs/cos_similarity_norm', 'dc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cosh',
                component: ComponentCreator('/docs/cosh', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cost_based_optimizer',
                component: ComponentCreator('/docs/Cost_based_optimizer', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cot',
                component: ComponentCreator('/docs/cot', 'c70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/count',
                component: ComponentCreator('/docs/count', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/count_if',
                component: ComponentCreator('/docs/count_if', 'fab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/covar_pop',
                component: ComponentCreator('/docs/covar_pop', '568'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/covar_samp',
                component: ComponentCreator('/docs/covar_samp', 'ad7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/crc32',
                component: ComponentCreator('/docs/crc32', 'd33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_ANALYZE',
                component: ComponentCreator('/docs/CREATE_ANALYZE', '296'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_DATABASE',
                component: ComponentCreator('/docs/CREATE_DATABASE', 'd36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_DICTIONARY',
                component: ComponentCreator('/docs/CREATE_DICTIONARY', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_EXTERNAL_CATALOG',
                component: ComponentCreator('/docs/CREATE_EXTERNAL_CATALOG', 'b17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_FILE',
                component: ComponentCreator('/docs/CREATE_FILE', 'e64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_FUNCTION',
                component: ComponentCreator('/docs/CREATE_FUNCTION', 'fce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_INDEX',
                component: ComponentCreator('/docs/CREATE_INDEX', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/CREATE_MATERIALIZED_VIEW', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/create_partitioned_materialized_view',
                component: ComponentCreator('/docs/create_partitioned_materialized_view', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_PIPE',
                component: ComponentCreator('/docs/CREATE_PIPE', '43a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_REPOSITORY',
                component: ComponentCreator('/docs/CREATE_REPOSITORY', '70a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_RESOURCE',
                component: ComponentCreator('/docs/CREATE_RESOURCE', 'c32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_RESOURCE_GROUP',
                component: ComponentCreator('/docs/CREATE_RESOURCE_GROUP', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_ROLE',
                component: ComponentCreator('/docs/CREATE_ROLE', '537'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_ROUTINE_LOAD',
                component: ComponentCreator('/docs/CREATE_ROUTINE_LOAD', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_STORAGE_VOLUME',
                component: ComponentCreator('/docs/CREATE_STORAGE_VOLUME', 'e1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_TABLE',
                component: ComponentCreator('/docs/CREATE_TABLE', '707'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_TABLE_AS_SELECT',
                component: ComponentCreator('/docs/CREATE_TABLE_AS_SELECT', '1d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_TABLE_LIKE',
                component: ComponentCreator('/docs/CREATE_TABLE_LIKE', 'a36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_USER',
                component: ComponentCreator('/docs/CREATE_USER', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CREATE_VIEW',
                component: ComponentCreator('/docs/CREATE_VIEW', 'c50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/create-a-blog-post',
                component: ComponentCreator('/docs/create-a-blog-post', '630'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/create-a-document',
                component: ComponentCreator('/docs/create-a-document', '33d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/create-a-page',
                component: ComponentCreator('/docs/create-a-page', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/curdate',
                component: ComponentCreator('/docs/curdate', 'fcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/current_role',
                component: ComponentCreator('/docs/current_role', '853'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/current_timestamp',
                component: ComponentCreator('/docs/current_timestamp', 'c32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/current_version',
                component: ComponentCreator('/docs/current_version', '1fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/current_warehouse',
                component: ComponentCreator('/docs/current_warehouse', '5dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/curtime',
                component: ComponentCreator('/docs/curtime', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data_cache',
                component: ComponentCreator('/docs/data_cache', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data_cache_observe',
                component: ComponentCreator('/docs/data_cache_observe', '1ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data_cache_troubleshooting',
                component: ComponentCreator('/docs/data_cache_troubleshooting', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data_compression',
                component: ComponentCreator('/docs/data_compression', '4d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data_distribution',
                component: ComponentCreator('/docs/Data_distribution', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data_lake_query_acceleration_with_materialized_views',
                component: ComponentCreator('/docs/data_lake_query_acceleration_with_materialized_views', '4c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data_migration_tool',
                component: ComponentCreator('/docs/data_migration_tool', '097'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data_modeling_with_materialized_views',
                component: ComponentCreator('/docs/data_modeling_with_materialized_views', 'cb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data_recovery',
                component: ComponentCreator('/docs/Data_recovery', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/database',
                component: ComponentCreator('/docs/database', '766'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/datadog_support',
                component: ComponentCreator('/docs/datadog_support', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DataGrip',
                component: ComponentCreator('/docs/DataGrip', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/datalake_faq',
                component: ComponentCreator('/docs/datalake_faq', '36b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Dataphin',
                component: ComponentCreator('/docs/Dataphin', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DataX_faq',
                component: ComponentCreator('/docs/DataX_faq', '34e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DataX-akashx-writer',
                component: ComponentCreator('/docs/DataX-akashx-writer', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DATE',
                component: ComponentCreator('/docs/DATE', 'b43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/date_add',
                component: ComponentCreator('/docs/date_add', 'e81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/date_diff',
                component: ComponentCreator('/docs/date_diff', '786'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/date_format',
                component: ComponentCreator('/docs/date_format', '279'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/date_slice',
                component: ComponentCreator('/docs/date_slice', 'ebf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/date_sub',
                component: ComponentCreator('/docs/date_sub', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/date_trunc',
                component: ComponentCreator('/docs/date_trunc', 'c79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/datediff',
                component: ComponentCreator('/docs/datediff', 'd2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DATETIME',
                component: ComponentCreator('/docs/DATETIME', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day',
                component: ComponentCreator('/docs/day', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/day_of_week_iso',
                component: ComponentCreator('/docs/day_of_week_iso', 'a06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dayname',
                component: ComponentCreator('/docs/dayname', '97d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dayofmonth',
                component: ComponentCreator('/docs/dayofmonth', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dayofweek',
                component: ComponentCreator('/docs/dayofweek', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dayofyear',
                component: ComponentCreator('/docs/dayofyear', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/days_add',
                component: ComponentCreator('/docs/days_add', 'dd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/days_diff',
                component: ComponentCreator('/docs/days_diff', '76d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/days_sub',
                component: ComponentCreator('/docs/days_sub', '8cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DBeaver',
                component: ComponentCreator('/docs/DBeaver', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dbt',
                component: ComponentCreator('/docs/dbt', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/debuginfo',
                component: ComponentCreator('/docs/debuginfo', '6b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DECIMAL',
                component: ComponentCreator('/docs/DECIMAL', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/default_catalog',
                component: ComponentCreator('/docs/default_catalog', '04b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/degrees',
                component: ComponentCreator('/docs/degrees', 'f8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DELETE',
                component: ComponentCreator('/docs/DELETE', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DELETE_BACKEND_BLACKLIST',
                component: ComponentCreator('/docs/DELETE_BACKEND_BLACKLIST', 'f23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DELETE_SQLBLACKLIST',
                component: ComponentCreator('/docs/DELETE_SQLBLACKLIST', 'f5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deltalake_catalog',
                component: ComponentCreator('/docs/deltalake_catalog', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Deploy_faq',
                component: ComponentCreator('/docs/Deploy_faq', 'c0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy_manually',
                component: ComponentCreator('/docs/deploy_manually', '6d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deploy-your-site',
                component: ComponentCreator('/docs/deploy-your-site', '976'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deployment_overview',
                component: ComponentCreator('/docs/deployment_overview', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/deployment_prerequisites',
                component: ComponentCreator('/docs/deployment_prerequisites', 'dc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DESC_STORAGE_VOLUME',
                component: ComponentCreator('/docs/DESC_STORAGE_VOLUME', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DESCRIBE',
                component: ComponentCreator('/docs/DESCRIBE', '946'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-env-setup',
                component: ComponentCreator('/docs/dev-env-setup', 'b18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dict_mapping',
                component: ComponentCreator('/docs/dict_mapping', '9b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dictionary_get',
                component: ComponentCreator('/docs/dictionary_get', 'b8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/distinct_map_keys',
                component: ComponentCreator('/docs/distinct_map_keys', '3c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/divide',
                component: ComponentCreator('/docs/divide', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DOUBLE',
                component: ComponentCreator('/docs/DOUBLE', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/downgrade',
                component: ComponentCreator('/docs/downgrade', 'e0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_ANALYZE',
                component: ComponentCreator('/docs/DROP_ANALYZE', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_CATALOG',
                component: ComponentCreator('/docs/DROP_CATALOG', 'e99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_DATABASE',
                component: ComponentCreator('/docs/DROP_DATABASE', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_DICTIONARY',
                component: ComponentCreator('/docs/DROP_DICTIONARY', '9a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_FILE',
                component: ComponentCreator('/docs/DROP_FILE', 'e54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_FUNCTION',
                component: ComponentCreator('/docs/DROP_FUNCTION', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_INDEX',
                component: ComponentCreator('/docs/DROP_INDEX', 'c8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/DROP_MATERIALIZED_VIEW', '585'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_PIPE',
                component: ComponentCreator('/docs/DROP_PIPE', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_REPOSITORY',
                component: ComponentCreator('/docs/DROP_REPOSITORY', 'ceb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_RESOURCE',
                component: ComponentCreator('/docs/DROP_RESOURCE', '89e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_RESOURCE_GROUP',
                component: ComponentCreator('/docs/DROP_RESOURCE_GROUP', 'c31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_ROLE',
                component: ComponentCreator('/docs/DROP_ROLE', 'a06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_STATS',
                component: ComponentCreator('/docs/DROP_STATS', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_STORAGE_VOLUME',
                component: ComponentCreator('/docs/DROP_STORAGE_VOLUME', '103'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_TABLE',
                component: ComponentCreator('/docs/DROP_TABLE', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_TASK',
                component: ComponentCreator('/docs/DROP_TASK', 'c3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_USER',
                component: ComponentCreator('/docs/DROP_USER', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DROP_VIEW',
                component: ComponentCreator('/docs/DROP_VIEW', '0c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ds_hll_accumulate',
                component: ComponentCreator('/docs/ds_hll_accumulate', 'a8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ds_hll_combine',
                component: ComponentCreator('/docs/ds_hll_combine', '3f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ds_hll_count_distinct',
                component: ComponentCreator('/docs/ds_hll_count_distinct', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ds_hll_estimate',
                component: ComponentCreator('/docs/ds_hll_estimate', 'de5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ds_theta_count_distinct',
                component: ComponentCreator('/docs/ds_theta_count_distinct', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Dump_query',
                component: ComponentCreator('/docs/Dump_query', 'a35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/duplicate_key_table',
                component: ComponentCreator('/docs/duplicate_key_table', '416'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dynamic_partitioning',
                component: ComponentCreator('/docs/dynamic_partitioning', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/e',
                component: ComponentCreator('/docs/e', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/elasticsearch_catalog',
                component: ComponentCreator('/docs/elasticsearch_catalog', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/element_at',
                component: ComponentCreator('/docs/element_at', '707'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/enable_fqdn',
                component: ComponentCreator('/docs/enable_fqdn', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/encode_sort_key',
                component: ComponentCreator('/docs/encode_sort_key', '65e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ends_with',
                component: ComponentCreator('/docs/ends_with', 'ae0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/engines',
                component: ComponentCreator('/docs/engines', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/enhancement',
                component: ComponentCreator('/docs/enhancement', 'b42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/environment_configurations',
                component: ComponentCreator('/docs/environment_configurations', '220'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/equiwidth_bucket',
                component: ComponentCreator('/docs/equiwidth_bucket', '8e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Error_code',
                component: ComponentCreator('/docs/Error_code', '6f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Etl_in_loading',
                component: ComponentCreator('/docs/Etl_in_loading', '504'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/events',
                component: ComponentCreator('/docs/events', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/EXECUTE_AS',
                component: ComponentCreator('/docs/EXECUTE_AS', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/exp',
                component: ComponentCreator('/docs/exp', 'd53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/EXPLAIN',
                component: ComponentCreator('/docs/EXPLAIN', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/EXPLAIN_ANALYZE',
                component: ComponentCreator('/docs/EXPLAIN_ANALYZE', '382'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/EXPORT',
                component: ComponentCreator('/docs/EXPORT', '205'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Exporting_faq',
                component: ComponentCreator('/docs/Exporting_faq', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/expression_partitioning',
                component: ComponentCreator('/docs/expression_partitioning', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/External_table',
                component: ComponentCreator('/docs/External_table', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FE_configuration',
                component: ComponentCreator('/docs/FE_configuration', 'd72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fe_locks',
                component: ComponentCreator('/docs/fe_locks', 'c45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fe_mem_faq',
                component: ComponentCreator('/docs/fe_mem_faq', '937'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fe_metrics',
                component: ComponentCreator('/docs/fe_metrics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fe_tablet_schedules',
                component: ComponentCreator('/docs/fe_tablet_schedules', '1f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feature_request',
                component: ComponentCreator('/docs/feature_request', '99f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feature-request',
                component: ComponentCreator('/docs/feature-request', '970'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feature-support-asynchronous-materialized-views',
                component: ComponentCreator('/docs/feature-support-asynchronous-materialized-views', '3ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feature-support-data-distribution',
                component: ComponentCreator('/docs/feature-support-data-distribution', '90f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feature-support-data-lake-analytics',
                component: ComponentCreator('/docs/feature-support-data-lake-analytics', '12e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feature-support-loading-and-unloading',
                component: ComponentCreator('/docs/feature-support-loading-and-unloading', 'd87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feature-support-shared-data',
                component: ComponentCreator('/docs/feature-support-shared-data', 'da3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Features',
                component: ComponentCreator('/docs/Features', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/feedback-and-contribute',
                component: ComponentCreator('/docs/feedback-and-contribute', '0e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/field',
                component: ComponentCreator('/docs/field', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/file_external_table',
                component: ComponentCreator('/docs/file_external_table', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/filemanager',
                component: ComponentCreator('/docs/filemanager', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/files',
                component: ComponentCreator('/docs/files', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/find_in_set',
                component: ComponentCreator('/docs/find_in_set', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FineBI',
                component: ComponentCreator('/docs/FineBI', '5e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/first-blog-post',
                component: ComponentCreator('/docs/first-blog-post', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Flat_json',
                component: ComponentCreator('/docs/Flat_json', '36f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Flink_cdc_load',
                component: ComponentCreator('/docs/Flink_cdc_load', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flink_connector',
                component: ComponentCreator('/docs/flink_connector', '9a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Flink_connector_faq',
                component: ComponentCreator('/docs/Flink_connector_faq', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Flink-connector-akashx',
                component: ComponentCreator('/docs/Flink-connector-akashx', 'd1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FLOAT',
                component: ComponentCreator('/docs/FLOAT', 'fd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/floor',
                component: ComponentCreator('/docs/floor', 'f2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fmod',
                component: ComponentCreator('/docs/fmod', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/format_bytes',
                component: ComponentCreator('/docs/format_bytes', 'e11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/from_base64',
                component: ComponentCreator('/docs/from_base64', 'e62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/from_binary',
                component: ComponentCreator('/docs/from_binary', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/from_days',
                component: ComponentCreator('/docs/from_days', '1f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/from_unixtime',
                component: ComponentCreator('/docs/from_unixtime', '61c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gcs',
                component: ComponentCreator('/docs/gcs', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/generate_series',
                component: ComponentCreator('/docs/generate_series', '17f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/generated_columns',
                component: ComponentCreator('/docs/generated_columns', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get_json_bool',
                component: ComponentCreator('/docs/get_json_bool', 'b89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get_json_double',
                component: ComponentCreator('/docs/get_json_double', '845'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get_json_int',
                component: ComponentCreator('/docs/get_json_int', 'ce0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get_json_string',
                component: ComponentCreator('/docs/get_json_string', 'b9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get_query_dump',
                component: ComponentCreator('/docs/get_query_dump', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get_query_profile',
                component: ComponentCreator('/docs/get_query_profile', '3b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/global_variables',
                component: ComponentCreator('/docs/global_variables', '3d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GOVERNANCE',
                component: ComponentCreator('/docs/GOVERNANCE', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GRANT',
                component: ComponentCreator('/docs/GRANT', 'b1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grants_to_roles',
                component: ComponentCreator('/docs/grants_to_roles', 'ddf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grants_to_users',
                component: ComponentCreator('/docs/grants_to_users', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/greatest',
                component: ComponentCreator('/docs/greatest', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/group_concat',
                component: ComponentCreator('/docs/group_concat', 'd9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/group_provider',
                component: ComponentCreator('/docs/group_provider', '84c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grouping',
                component: ComponentCreator('/docs/grouping', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/grouping_id',
                component: ComponentCreator('/docs/grouping_id', '3c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/handbook',
                component: ComponentCreator('/docs/handbook', 'd6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hdfs',
                component: ComponentCreator('/docs/hdfs', '76e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hdfs_load',
                component: ComponentCreator('/docs/hdfs_load', '189'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/helm',
                component: ComponentCreator('/docs/helm', 'c46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Hex',
                component: ComponentCreator('/docs/Hex', '103'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hex_decode_binary',
                component: ComponentCreator('/docs/hex_decode_binary', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hex_decode_string',
                component: ComponentCreator('/docs/hex_decode_string', 'ef9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/History',
                component: ComponentCreator('/docs/History', 'b4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hive_bitmap_udf',
                component: ComponentCreator('/docs/hive_bitmap_udf', '972'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hive_catalog',
                component: ComponentCreator('/docs/hive_catalog', '48d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HLL',
                component: ComponentCreator('/docs/HLL', '6c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hll_cardinality',
                component: ComponentCreator('/docs/hll_cardinality', '4f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hll_empty',
                component: ComponentCreator('/docs/hll_empty', 'b92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hll_hash',
                component: ComponentCreator('/docs/hll_hash', 'b8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hll_raw_agg',
                component: ComponentCreator('/docs/hll_raw_agg', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hll_union',
                component: ComponentCreator('/docs/hll_union', '37c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hll_union_agg',
                component: ComponentCreator('/docs/hll_union_agg', '933'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/host_name',
                component: ComponentCreator('/docs/host_name', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hour',
                component: ComponentCreator('/docs/hour', '4f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hours_add',
                component: ComponentCreator('/docs/hours_add', 'bc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hours_diff',
                component: ComponentCreator('/docs/hours_diff', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hours_sub',
                component: ComponentCreator('/docs/hours_sub', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/How_to_Contribute',
                component: ComponentCreator('/docs/How_to_Contribute', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/How_to_Write_Functions_Documentation',
                component: ComponentCreator('/docs/How_to_Write_Functions_Documentation', '110'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/How_to_write_SQL_command_doc',
                component: ComponentCreator('/docs/How_to_write_SQL_command_doc', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/http_interface',
                component: ComponentCreator('/docs/http_interface', 'bfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/http_sql_api',
                component: ComponentCreator('/docs/http_sql_api', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/huawei',
                component: ComponentCreator('/docs/huawei', '562'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hudi',
                component: ComponentCreator('/docs/hudi', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hudi_catalog',
                component: ComponentCreator('/docs/hudi_catalog', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hybrid_table',
                component: ComponentCreator('/docs/hybrid_table', 'e25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iceberg',
                component: ComponentCreator('/docs/iceberg', 'c13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iceberg_catalog',
                component: ComponentCreator('/docs/iceberg_catalog', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iceberg_meta_table',
                component: ComponentCreator('/docs/iceberg_meta_table', 'f4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iceberg_rest_s3',
                component: ComponentCreator('/docs/iceberg_rest_s3', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iceberg_rest_security',
                component: ComponentCreator('/docs/iceberg_rest_security', '830'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iceberg_timetravel',
                component: ComponentCreator('/docs/iceberg_timetravel', '55b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ide-setup',
                component: ComponentCreator('/docs/ide-setup', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/IDEA',
                component: ComponentCreator('/docs/IDEA', 'e03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/if',
                component: ComponentCreator('/docs/if', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ifnull',
                component: ComponentCreator('/docs/ifnull', '8c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/INCIDENT_RESPONSE_PROCESS',
                component: ComponentCreator('/docs/INCIDENT_RESPONSE_PROCESS', '5ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/indexes',
                component: ComponentCreator('/docs/indexes', 'f35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inet_aton',
                component: ComponentCreator('/docs/inet_aton', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/information_schema',
                component: ComponentCreator('/docs/information_schema', '5c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/INSERT',
                component: ComponentCreator('/docs/INSERT', '8c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Insert_into_faq',
                component: ComponentCreator('/docs/Insert_into_faq', 'fa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/InsertInto',
                component: ComponentCreator('/docs/InsertInto', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_all_pipes',
                component: ComponentCreator('/docs/inspect_all_pipes', '94a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_hive_part_info',
                component: ComponentCreator('/docs/inspect_hive_part_info', '3c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_memory',
                component: ComponentCreator('/docs/inspect_memory', '76f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_memory_detail',
                component: ComponentCreator('/docs/inspect_memory_detail', '155'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_mv_meta',
                component: ComponentCreator('/docs/inspect_mv_meta', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_mv_plan',
                component: ComponentCreator('/docs/inspect_mv_plan', '1a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_mv_refresh_info',
                component: ComponentCreator('/docs/inspect_mv_refresh_info', '013'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_mv_relationships',
                component: ComponentCreator('/docs/inspect_mv_relationships', 'efa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_related_mv',
                component: ComponentCreator('/docs/inspect_related_mv', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_table_partition_info',
                component: ComponentCreator('/docs/inspect_table_partition_info', '2de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inspect_task_runs',
                component: ComponentCreator('/docs/inspect_task_runs', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/INSTALL',
                component: ComponentCreator('/docs/INSTALL', '58c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/INSTALL_PLUGIN',
                component: ComponentCreator('/docs/INSTALL_PLUGIN', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instr',
                component: ComponentCreator('/docs/instr', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/INT',
                component: ComponentCreator('/docs/INT', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intersect_count',
                component: ComponentCreator('/docs/intersect_count', '888'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inverted_index',
                component: ComponentCreator('/docs/inverted_index', '90c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/is_role_in_session',
                component: ComponentCreator('/docs/is_role_in_session', '006'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/isnotnull',
                component: ComponentCreator('/docs/isnotnull', '011'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/isnull',
                component: ComponentCreator('/docs/isnull', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ISSUE_TEMPLATE',
                component: ComponentCreator('/docs/ISSUE_TEMPLATE', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JAVA_UDF',
                component: ComponentCreator('/docs/JAVA_UDF', 'ee7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jdbc_catalog',
                component: ComponentCreator('/docs/jdbc_catalog', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jemalloc_heap_profile',
                component: ComponentCreator('/docs/jemalloc_heap_profile', 'ae0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jit',
                component: ComponentCreator('/docs/jit', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jodatime_format',
                component: ComponentCreator('/docs/jodatime_format', '46d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/JSON',
                component: ComponentCreator('/docs/JSON', '5c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_array',
                component: ComponentCreator('/docs/json_array', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_contains',
                component: ComponentCreator('/docs/json_contains', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_each',
                component: ComponentCreator('/docs/json_each', 'f69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_exists',
                component: ComponentCreator('/docs/json_exists', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_keys',
                component: ComponentCreator('/docs/json_keys', 'ea5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_length',
                component: ComponentCreator('/docs/json_length', 'da8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Json_loading',
                component: ComponentCreator('/docs/Json_loading', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_object',
                component: ComponentCreator('/docs/json_object', 'cb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_query',
                component: ComponentCreator('/docs/json_query', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_remove',
                component: ComponentCreator('/docs/json_remove', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json_string',
                component: ComponentCreator('/docs/json_string', '989'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/json-operators',
                component: ComponentCreator('/docs/json-operators', 'a8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jupysql',
                component: ComponentCreator('/docs/jupysql', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jwt_authentication',
                component: ComponentCreator('/docs/jwt_authentication', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/kafka_connector',
                component: ComponentCreator('/docs/kafka_connector', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kafka-connector-akashx',
                component: ComponentCreator('/docs/Kafka-connector-akashx', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/key_column_usage',
                component: ComponentCreator('/docs/key_column_usage', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/keywords',
                component: ComponentCreator('/docs/keywords', 'ac1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/KILL',
                component: ComponentCreator('/docs/KILL', 'f87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/KILL_ANALYZE',
                component: ComponentCreator('/docs/KILL_ANALYZE', 'b0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/kudu_catalog',
                component: ComponentCreator('/docs/kudu_catalog', 'bb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Lambda_expression',
                component: ComponentCreator('/docs/Lambda_expression', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/LARGEINT',
                component: ComponentCreator('/docs/LARGEINT', 'cd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/last_day',
                component: ComponentCreator('/docs/last_day', '57c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/last_query_id',
                component: ComponentCreator('/docs/last_query_id', 'b18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Lateral_join',
                component: ComponentCreator('/docs/Lateral_join', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/lcase',
                component: ComponentCreator('/docs/lcase', '5f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ldap_authentication',
                component: ComponentCreator('/docs/ldap_authentication', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/least',
                component: ComponentCreator('/docs/least', '34f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/left',
                component: ComponentCreator('/docs/left', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/length',
                component: ComponentCreator('/docs/length', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/LICENSE',
                component: ComponentCreator('/docs/LICENSE', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/like',
                component: ComponentCreator('/docs/like', '63e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/list_partitioning',
                component: ComponentCreator('/docs/list_partitioning', '784'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ln',
                component: ComponentCreator('/docs/ln', '880'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Load_balance',
                component: ComponentCreator('/docs/Load_balance', 'a79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/load_from_pulsar',
                component: ComponentCreator('/docs/load_from_pulsar', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Load_to_Primary_Key_tables',
                component: ComponentCreator('/docs/Load_to_Primary_Key_tables', '103'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/load_tracking_logs',
                component: ComponentCreator('/docs/load_tracking_logs', 'ca9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/loading_concepts',
                component: ComponentCreator('/docs/loading_concepts', 'ed4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/loading_considerations',
                component: ComponentCreator('/docs/loading_considerations', '453'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Loading_data_template',
                component: ComponentCreator('/docs/Loading_data_template', 'e41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Loading_faq',
                component: ComponentCreator('/docs/Loading_faq', 'f15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Loading_intro',
                component: ComponentCreator('/docs/Loading_intro', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/loading_tools',
                component: ComponentCreator('/docs/loading_tools', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/loads',
                component: ComponentCreator('/docs/loads', '6e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/locate',
                component: ComponentCreator('/docs/locate', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/log',
                component: ComponentCreator('/docs/log', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/log10',
                component: ComponentCreator('/docs/log10', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/log2',
                component: ComponentCreator('/docs/log2', 'aaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/logs',
                component: ComponentCreator('/docs/logs', '78f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/long-blog-post',
                component: ComponentCreator('/docs/long-blog-post', 'af3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/lookup_string',
                component: ComponentCreator('/docs/lookup_string', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/lower',
                component: ComponentCreator('/docs/lower', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/lpad',
                component: ComponentCreator('/docs/lpad', '597'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ltrim',
                component: ComponentCreator('/docs/ltrim', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/makedate',
                component: ComponentCreator('/docs/makedate', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manage-docs-versions',
                component: ComponentCreator('/docs/manage-docs-versions', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mann_whitney_u_test',
                component: ComponentCreator('/docs/mann_whitney_u_test', '14b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Map',
                component: ComponentCreator('/docs/Map', '1ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map_apply',
                component: ComponentCreator('/docs/map_apply', '225'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map_concat',
                component: ComponentCreator('/docs/map_concat', '938'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map_filter',
                component: ComponentCreator('/docs/map_filter', '858'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map_from_arrays',
                component: ComponentCreator('/docs/map_from_arrays', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map_keys',
                component: ComponentCreator('/docs/map_keys', 'c5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map_size',
                component: ComponentCreator('/docs/map_size', '310'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map_values',
                component: ComponentCreator('/docs/map_values', 'ce8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/markdown-page',
                component: ComponentCreator('/docs/markdown-page', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/marked.1',
                component: ComponentCreator('/docs/marked.1', '675'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Materialized_view',
                component: ComponentCreator('/docs/Materialized_view', '887'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/materialized_view_task_run_details',
                component: ComponentCreator('/docs/materialized_view_task_run_details', 'b6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Materialized_view-single_table',
                component: ComponentCreator('/docs/Materialized_view-single_table', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/materialized_views',
                component: ComponentCreator('/docs/materialized_views', '438'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/maturity',
                component: ComponentCreator('/docs/maturity', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/max',
                component: ComponentCreator('/docs/max', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/max_by',
                component: ComponentCreator('/docs/max_by', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/maxcompute_catalog',
                component: ComponentCreator('/docs/maxcompute_catalog', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md5',
                component: ComponentCreator('/docs/md5', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md5sum',
                component: ComponentCreator('/docs/md5sum', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/md5sum_numeric',
                component: ComponentCreator('/docs/md5sum_numeric', '146'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Memory_management',
                component: ComponentCreator('/docs/Memory_management', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Meta_recovery',
                component: ComponentCreator('/docs/Meta_recovery', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Metabase',
                component: ComponentCreator('/docs/Metabase', '3f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/metrics',
                component: ComponentCreator('/docs/metrics', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/metrics-materialized_view',
                component: ComponentCreator('/docs/metrics-materialized_view', '6eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/metrics-shared-data',
                component: ComponentCreator('/docs/metrics-shared-data', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/microseconds_add',
                component: ComponentCreator('/docs/microseconds_add', '900'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/microseconds_sub',
                component: ComponentCreator('/docs/microseconds_sub', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MIGRATION_GUIDE',
                component: ComponentCreator('/docs/MIGRATION_GUIDE', '4e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/milliseconds_diff',
                component: ComponentCreator('/docs/milliseconds_diff', '3a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/min',
                component: ComponentCreator('/docs/min', 'b58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/min_by',
                component: ComponentCreator('/docs/min_by', '036'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/minio',
                component: ComponentCreator('/docs/minio', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/minute',
                component: ComponentCreator('/docs/minute', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/minutes_add',
                component: ComponentCreator('/docs/minutes_add', 'dc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/minutes_diff',
                component: ComponentCreator('/docs/minutes_diff', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/minutes_sub',
                component: ComponentCreator('/docs/minutes_sub', 'b70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mod',
                component: ComponentCreator('/docs/mod', '4bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/money_format',
                component: ComponentCreator('/docs/money_format', '68a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Monitor_and_Alert',
                component: ComponentCreator('/docs/Monitor_and_Alert', 'd76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/monitor_manage_big_queries',
                component: ComponentCreator('/docs/monitor_manage_big_queries', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/month',
                component: ComponentCreator('/docs/month', 'b03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/monthname',
                component: ComponentCreator('/docs/monthname', 'bf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/months_add',
                component: ComponentCreator('/docs/months_add', '4d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/months_diff',
                component: ComponentCreator('/docs/months_diff', '31b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/months_sub',
                component: ComponentCreator('/docs/months_sub', 'eac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/multi_distinct_count',
                component: ComponentCreator('/docs/multi_distinct_count', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/multi_distinct_sum',
                component: ComponentCreator('/docs/multi_distinct_sum', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/multiply',
                component: ComponentCreator('/docs/multiply', '972'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/murmur_hash3_32',
                component: ComponentCreator('/docs/murmur_hash3_32', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mv_ref',
                component: ComponentCreator('/docs/mv_ref', 'ac8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/named_struct',
                component: ComponentCreator('/docs/named_struct', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/native_authentication',
                component: ComponentCreator('/docs/native_authentication', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/negative',
                component: ComponentCreator('/docs/negative', 'f9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next_day',
                component: ComponentCreator('/docs/next_day', '305'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ngram_Bloom_Filter_Index',
                component: ComponentCreator('/docs/Ngram_Bloom_Filter_Index', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ngram_search',
                component: ComponentCreator('/docs/ngram_search', '182'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Notes',
                component: ComponentCreator('/docs/Notes', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/now',
                component: ComponentCreator('/docs/now', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/null_or_empty',
                component: ComponentCreator('/docs/null_or_empty', '1aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/nullif',
                component: ComponentCreator('/docs/nullif', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/oauth2_authentication',
                component: ComponentCreator('/docs/oauth2_authentication', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/object_dependencies',
                component: ComponentCreator('/docs/object_dependencies', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/other',
                component: ComponentCreator('/docs/other', 'b3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Others',
                component: ComponentCreator('/docs/Others', '6df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', '2b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview-of-json-functions-and-operators',
                component: ComponentCreator('/docs/overview-of-json-functions-and-operators', '3c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/paimon_catalog',
                component: ComponentCreator('/docs/paimon_catalog', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/parse_json',
                component: ComponentCreator('/docs/parse_json', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/parse_url',
                component: ComponentCreator('/docs/parse_url', 'd4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/partitioning',
                component: ComponentCreator('/docs/partitioning', '76c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/partitions',
                component: ComponentCreator('/docs/partitions', '82a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/partitions_meta',
                component: ComponentCreator('/docs/partitions_meta', 'c58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/patchFs',
                component: ComponentCreator('/docs/patchFs', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/patchRequire',
                component: ComponentCreator('/docs/patchRequire', '44c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PATRONS',
                component: ComponentCreator('/docs/PATRONS', '0c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PAUSE_ROUTINE_LOAD',
                component: ComponentCreator('/docs/PAUSE_ROUTINE_LOAD', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_approx',
                component: ComponentCreator('/docs/percentile_approx', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_approx_raw',
                component: ComponentCreator('/docs/percentile_approx_raw', '2b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_approx_weight',
                component: ComponentCreator('/docs/percentile_approx_weight', 'c8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_cont',
                component: ComponentCreator('/docs/percentile_cont', '597'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_disc',
                component: ComponentCreator('/docs/percentile_disc', '7d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_disc_lc',
                component: ComponentCreator('/docs/percentile_disc_lc', '8cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_empty',
                component: ComponentCreator('/docs/percentile_empty', '7d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_hash',
                component: ComponentCreator('/docs/percentile_hash', '985'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/percentile_union',
                component: ComponentCreator('/docs/percentile_union', '95f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pi',
                component: ComponentCreator('/docs/pi', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pipe_files',
                component: ComponentCreator('/docs/pipe_files', '871'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pipes',
                component: ComponentCreator('/docs/pipes', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plan_cluster',
                component: ComponentCreator('/docs/plan_cluster', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pmod',
                component: ComponentCreator('/docs/pmod', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/policy_references',
                component: ComponentCreator('/docs/policy_references', 'e9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Porting-Buffer',
                component: ComponentCreator('/docs/Porting-Buffer', 'f35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/positive',
                component: ComponentCreator('/docs/positive', '4ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/post_deployment_setup',
                component: ComponentCreator('/docs/post_deployment_setup', '1e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pow',
                component: ComponentCreator('/docs/pow', 'c68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Prefix_index_sort_key',
                component: ComponentCreator('/docs/Prefix_index_sort_key', 'a17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/prepare_deployment_files',
                component: ComponentCreator('/docs/prepare_deployment_files', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/prepared_statement',
                component: ComponentCreator('/docs/prepared_statement', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/previous_day',
                component: ComponentCreator('/docs/previous_day', '2c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/primary_key_table',
                component: ComponentCreator('/docs/primary_key_table', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/primarykey_table',
                component: ComponentCreator('/docs/primarykey_table', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/privilege_faq',
                component: ComponentCreator('/docs/privilege_faq', 'd74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/privilege_item',
                component: ComponentCreator('/docs/privilege_item', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Profiling',
                component: ComponentCreator('/docs/Profiling', 'a9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/protobuf-guides',
                component: ComponentCreator('/docs/protobuf-guides', '5d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/PULL_REQUEST_TEMPLATE',
                component: ComponentCreator('/docs/PULL_REQUEST_TEMPLATE', '9c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python_UDF',
                component: ComponentCreator('/docs/Python_UDF', '4a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quarter',
                component: ComponentCreator('/docs/quarter', 'e9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_acceleration_with_auto_increment',
                component: ComponentCreator('/docs/query_acceleration_with_auto_increment', 'b57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_cache',
                component: ComponentCreator('/docs/query_cache', '60d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_external_data',
                component: ComponentCreator('/docs/query_external_data', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_feedback',
                component: ComponentCreator('/docs/query_feedback', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_hint',
                component: ComponentCreator('/docs/query_hint', '8b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Query_management',
                component: ComponentCreator('/docs/Query_management', '4a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_plan_intro',
                component: ComponentCreator('/docs/query_plan_intro', 'cca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_planning',
                component: ComponentCreator('/docs/query_planning', 'f10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_profile_operator_metrics',
                component: ComponentCreator('/docs/query_profile_operator_metrics', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_profile_overview',
                component: ComponentCreator('/docs/query_profile_overview', '312'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_profile_text_based_analysis',
                component: ComponentCreator('/docs/query_profile_text_based_analysis', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_profile_tuning_recipes',
                component: ComponentCreator('/docs/query_profile_tuning_recipes', '6f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_queues',
                component: ComponentCreator('/docs/query_queues', '9b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_rewrite_with_materialized_views',
                component: ComponentCreator('/docs/query_rewrite_with_materialized_views', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/query_trace_profile',
                component: ComponentCreator('/docs/query_trace_profile', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Querybook',
                component: ComponentCreator('/docs/Querybook', 'f5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/QuickBI',
                component: ComponentCreator('/docs/QuickBI', '0e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/radians',
                component: ComponentCreator('/docs/radians', '578'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rand',
                component: ComponentCreator('/docs/rand', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ranger_plugin',
                component: ComponentCreator('/docs/ranger_plugin', '34c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RECOVER',
                component: ComponentCreator('/docs/RECOVER', '597'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/recyclebin_catalogs',
                component: ComponentCreator('/docs/recyclebin_catalogs', '060'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/refactoring-request',
                component: ComponentCreator('/docs/refactoring-request', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/referential_constraints',
                component: ComponentCreator('/docs/referential_constraints', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/REFRESH_DICTIONARY',
                component: ComponentCreator('/docs/REFRESH_DICTIONARY', 'd56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/REFRESH_EXTERNAL_TABLE',
                component: ComponentCreator('/docs/REFRESH_EXTERNAL_TABLE', '34f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/REFRESH_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/REFRESH_MATERIALIZED_VIEW', '9ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/regexp',
                component: ComponentCreator('/docs/regexp', '9ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/regexp_count',
                component: ComponentCreator('/docs/regexp_count', 'b56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/regexp_extract',
                component: ComponentCreator('/docs/regexp_extract', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/regexp_extract_all',
                component: ComponentCreator('/docs/regexp_extract_all', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/regexp_replace',
                component: ComponentCreator('/docs/regexp_replace', '939'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/regexp_split',
                component: ComponentCreator('/docs/regexp_split', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release',
                component: ComponentCreator('/docs/release', '305'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-1.19',
                component: ComponentCreator('/docs/release-1.19', '2ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-2.0',
                component: ComponentCreator('/docs/release-2.0', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-2.1',
                component: ComponentCreator('/docs/release-2.1', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-2.2',
                component: ComponentCreator('/docs/release-2.2', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-2.3',
                component: ComponentCreator('/docs/release-2.3', '954'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-2.4',
                component: ComponentCreator('/docs/release-2.4', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-2.5',
                component: ComponentCreator('/docs/release-2.5', '60d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-3.0',
                component: ComponentCreator('/docs/release-3.0', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-3.1',
                component: ComponentCreator('/docs/release-3.1', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-3.2',
                component: ComponentCreator('/docs/release-3.2', '635'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-3.3',
                component: ComponentCreator('/docs/release-3.3', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-3.4',
                component: ComponentCreator('/docs/release-3.4', '191'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-3.5',
                component: ComponentCreator('/docs/release-3.5', 'b3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/repeat',
                component: ComponentCreator('/docs/repeat', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/replace',
                component: ComponentCreator('/docs/replace', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Replica',
                component: ComponentCreator('/docs/Replica', 'db3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resource_group',
                component: ComponentCreator('/docs/resource_group', 'fb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/restful-api-standard',
                component: ComponentCreator('/docs/restful-api-standard', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RESTORE',
                component: ComponentCreator('/docs/RESTORE', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RESUME_ROUTINE_LOAD',
                component: ComponentCreator('/docs/RESUME_ROUTINE_LOAD', 'bb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/retention',
                component: ComponentCreator('/docs/retention', 'd39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RETRY_FILE',
                component: ComponentCreator('/docs/RETRY_FILE', 'c65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reverse',
                component: ComponentCreator('/docs/reverse', 'fd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/REVOKE',
                component: ComponentCreator('/docs/REVOKE', '443'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/right',
                component: ComponentCreator('/docs/right', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rising_wave',
                component: ComponentCreator('/docs/rising_wave', '873'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/role_edges',
                component: ComponentCreator('/docs/role_edges', 'e9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/round',
                component: ComponentCreator('/docs/round', 'a8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Routine_load_faq',
                component: ComponentCreator('/docs/Routine_load_faq', 'd22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/routine_load_jobs',
                component: ComponentCreator('/docs/routine_load_jobs', 'd50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/routine-load',
                component: ComponentCreator('/docs/routine-load', '2dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RoutineLoad',
                component: ComponentCreator('/docs/RoutineLoad', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/routines',
                component: ComponentCreator('/docs/routines', '459'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/row',
                component: ComponentCreator('/docs/row', '57b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpad',
                component: ComponentCreator('/docs/rpad', '6a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtrim',
                component: ComponentCreator('/docs/rtrim', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/running_queries',
                component: ComponentCreator('/docs/running_queries', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/s3',
                component: ComponentCreator('/docs/s3', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/s3_compatible',
                component: ComponentCreator('/docs/s3_compatible', 'cc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Scale_up_down',
                component: ComponentCreator('/docs/Scale_up_down', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/schema_privileges',
                component: ComponentCreator('/docs/schema_privileges', 'd08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/schema_tuning',
                component: ComponentCreator('/docs/schema_tuning', 'a28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/schemata',
                component: ComponentCreator('/docs/schemata', '223'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/second',
                component: ComponentCreator('/docs/second', '97d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/seconds_add',
                component: ComponentCreator('/docs/seconds_add', '98f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/seconds_diff',
                component: ComponentCreator('/docs/seconds_diff', '21b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/seconds_sub',
                component: ComponentCreator('/docs/seconds_sub', 'f64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SECURITY',
                component: ComponentCreator('/docs/SECURITY', '050'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/security_integration',
                component: ComponentCreator('/docs/security_integration', '23b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SELECT',
                component: ComponentCreator('/docs/SELECT', '8d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/session_variables',
                component: ComponentCreator('/docs/session_variables', 'd0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SET',
                component: ComponentCreator('/docs/SET', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SET_CATALOG',
                component: ComponentCreator('/docs/SET_CATALOG', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SET_DEFAULT_ROLE',
                component: ComponentCreator('/docs/SET_DEFAULT_ROLE', '7be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SET_DEFAULT_STORAGE_VOLUME',
                component: ComponentCreator('/docs/SET_DEFAULT_STORAGE_VOLUME', '82c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SET_PASSWORD',
                component: ComponentCreator('/docs/SET_PASSWORD', '171'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SET_ROLE',
                component: ComponentCreator('/docs/SET_ROLE', '2f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sha2',
                component: ComponentCreator('/docs/sha2', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/shared-data',
                component: ComponentCreator('/docs/shared-data', '1e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/shared-nothing',
                component: ComponentCreator('/docs/shared-nothing', '20b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_ALTER',
                component: ComponentCreator('/docs/SHOW_ALTER', 'caa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_ALTER_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/SHOW_ALTER_MATERIALIZED_VIEW', 'd27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_ANALYZE_JOB',
                component: ComponentCreator('/docs/SHOW_ANALYZE_JOB', '9f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_ANALYZE_STATUS',
                component: ComponentCreator('/docs/SHOW_ANALYZE_STATUS', 'a3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_AUTHENTICATION',
                component: ComponentCreator('/docs/SHOW_AUTHENTICATION', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_BACKEND_BLACKLIST',
                component: ComponentCreator('/docs/SHOW_BACKEND_BLACKLIST', '918'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_BACKENDS',
                component: ComponentCreator('/docs/SHOW_BACKENDS', '931'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_BACKUP',
                component: ComponentCreator('/docs/SHOW_BACKUP', 'f95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_BROKER',
                component: ComponentCreator('/docs/SHOW_BROKER', '2c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_CATALOGS',
                component: ComponentCreator('/docs/SHOW_CATALOGS', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_COMPUTE_NODES',
                component: ComponentCreator('/docs/SHOW_COMPUTE_NODES', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_CREATE_CATALOG',
                component: ComponentCreator('/docs/SHOW_CREATE_CATALOG', 'e57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_CREATE_DATABASE',
                component: ComponentCreator('/docs/SHOW_CREATE_DATABASE', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_CREATE_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/SHOW_CREATE_MATERIALIZED_VIEW', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_CREATE_TABLE',
                component: ComponentCreator('/docs/SHOW_CREATE_TABLE', '912'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_CREATE_VIEW',
                component: ComponentCreator('/docs/SHOW_CREATE_VIEW', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_DATA',
                component: ComponentCreator('/docs/SHOW_DATA', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_DATABASES',
                component: ComponentCreator('/docs/SHOW_DATABASES', '212'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_DELETE',
                component: ComponentCreator('/docs/SHOW_DELETE', 'ae6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_DICTIONARY',
                component: ComponentCreator('/docs/SHOW_DICTIONARY', 'c4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_DYNAMIC_PARTITION_TABLES',
                component: ComponentCreator('/docs/SHOW_DYNAMIC_PARTITION_TABLES', '4db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_EXPORT',
                component: ComponentCreator('/docs/SHOW_EXPORT', '730'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_FILE',
                component: ComponentCreator('/docs/SHOW_FILE', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_FRONTENDS',
                component: ComponentCreator('/docs/SHOW_FRONTENDS', 'fc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_FULL_COLUMNS',
                component: ComponentCreator('/docs/SHOW_FULL_COLUMNS', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_FUNCTIONS',
                component: ComponentCreator('/docs/SHOW_FUNCTIONS', 'd1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_GRANTS',
                component: ComponentCreator('/docs/SHOW_GRANTS', 'e03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_INDEX',
                component: ComponentCreator('/docs/SHOW_INDEX', '09d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_LOAD',
                component: ComponentCreator('/docs/SHOW_LOAD', 'ddf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_MATERIALIZED_VIEW',
                component: ComponentCreator('/docs/SHOW_MATERIALIZED_VIEW', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_META',
                component: ComponentCreator('/docs/SHOW_META', '43d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_PARTITIONS',
                component: ComponentCreator('/docs/SHOW_PARTITIONS', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_PIPES',
                component: ComponentCreator('/docs/SHOW_PIPES', '276'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_PLUGINS',
                component: ComponentCreator('/docs/SHOW_PLUGINS', '627'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_PROC',
                component: ComponentCreator('/docs/SHOW_PROC', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_PROCESSLIST',
                component: ComponentCreator('/docs/SHOW_PROCESSLIST', '2a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_PROFILELIST',
                component: ComponentCreator('/docs/SHOW_PROFILELIST', 'df6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_PROPERTY',
                component: ComponentCreator('/docs/SHOW_PROPERTY', '4e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_REPOSITORIES',
                component: ComponentCreator('/docs/SHOW_REPOSITORIES', 'd38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_RESOURCE_GROUP',
                component: ComponentCreator('/docs/SHOW_RESOURCE_GROUP', '515'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_RESOURCES',
                component: ComponentCreator('/docs/SHOW_RESOURCES', '926'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_RESTORE',
                component: ComponentCreator('/docs/SHOW_RESTORE', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_ROLES',
                component: ComponentCreator('/docs/SHOW_ROLES', 'a68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_ROUTINE_LOAD',
                component: ComponentCreator('/docs/SHOW_ROUTINE_LOAD', '171'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_ROUTINE_LOAD_TASK',
                component: ComponentCreator('/docs/SHOW_ROUTINE_LOAD_TASK', 'a65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_RUNNING_QUERIES',
                component: ComponentCreator('/docs/SHOW_RUNNING_QUERIES', 'b8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_SNAPSHOT',
                component: ComponentCreator('/docs/SHOW_SNAPSHOT', '187'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_SQLBLACKLIST',
                component: ComponentCreator('/docs/SHOW_SQLBLACKLIST', 'c4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_STORAGE_VOLUMES',
                component: ComponentCreator('/docs/SHOW_STORAGE_VOLUMES', '66e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_TABLE_STATUS',
                component: ComponentCreator('/docs/SHOW_TABLE_STATUS', '0db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_TABLES',
                component: ComponentCreator('/docs/SHOW_TABLES', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_TABLET',
                component: ComponentCreator('/docs/SHOW_TABLET', 'd46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_TRANSACTION',
                component: ComponentCreator('/docs/SHOW_TRANSACTION', '78d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_USAGE_RESOURCE_GROUPS',
                component: ComponentCreator('/docs/SHOW_USAGE_RESOURCE_GROUPS', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_USERS',
                component: ComponentCreator('/docs/SHOW_USERS', '6ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SHOW_VARIABLES',
                component: ComponentCreator('/docs/SHOW_VARIABLES', 'e06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sign',
                component: ComponentCreator('/docs/sign', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sin',
                component: ComponentCreator('/docs/sin', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sinh',
                component: ComponentCreator('/docs/sinh', '527'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/skew_join_v2',
                component: ComponentCreator('/docs/skew_join_v2', '615'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/slack',
                component: ComponentCreator('/docs/slack', 'a85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sleep',
                component: ComponentCreator('/docs/sleep', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sm3',
                component: ComponentCreator('/docs/sm3', 'f27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SMALLINT',
                component: ComponentCreator('/docs/SMALLINT', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SMT',
                component: ComponentCreator('/docs/SMT', '1c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sorted_aggregate',
                component: ComponentCreator('/docs/sorted_aggregate', '687'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/space',
                component: ComponentCreator('/docs/space', 'a87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/spark_connector',
                component: ComponentCreator('/docs/spark_connector', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SPARK_LOAD',
                component: ComponentCreator('/docs/SPARK_LOAD', 'aa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Spark-connector-akashx',
                component: ComponentCreator('/docs/Spark-connector-akashx', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SparkLoad',
                component: ComponentCreator('/docs/SparkLoad', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/spill_to_disk',
                component: ComponentCreator('/docs/spill_to_disk', 'bba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/split',
                component: ComponentCreator('/docs/split', '232'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/split_part',
                component: ComponentCreator('/docs/split_part', '487'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SQL_command_template',
                component: ComponentCreator('/docs/SQL_command_template', 'f5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sql_digest',
                component: ComponentCreator('/docs/sql_digest', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sql_faq',
                component: ComponentCreator('/docs/Sql_faq', '212'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SQL_plan_manager',
                component: ComponentCreator('/docs/SQL_plan_manager', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SQL_transaction',
                component: ComponentCreator('/docs/SQL_transaction', 'bd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sqrt',
                component: ComponentCreator('/docs/sqrt', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/square',
                component: ComponentCreator('/docs/square', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sr_operator',
                component: ComponentCreator('/docs/sr_operator', 'f13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SSB_Benchmarking',
                component: ComponentCreator('/docs/SSB_Benchmarking', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ssl_authentication',
                component: ComponentCreator('/docs/ssl_authentication', '8f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_astext',
                component: ComponentCreator('/docs/st_astext', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_circle',
                component: ComponentCreator('/docs/st_circle', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_contains',
                component: ComponentCreator('/docs/st_contains', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_distance_sphere',
                component: ComponentCreator('/docs/st_distance_sphere', '69d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_geometryfromtext',
                component: ComponentCreator('/docs/st_geometryfromtext', '446'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_linefromtext',
                component: ComponentCreator('/docs/st_linefromtext', '189'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_point',
                component: ComponentCreator('/docs/st_point', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_polygon',
                component: ComponentCreator('/docs/st_polygon', 'bff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_x',
                component: ComponentCreator('/docs/st_x', '1a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/st_y',
                component: ComponentCreator('/docs/st_y', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/stargo',
                component: ComponentCreator('/docs/stargo', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/akashx_intro',
                component: ComponentCreator('/docs/akashx_intro', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/akashx_table_design',
                component: ComponentCreator('/docs/akashx_table_design', '939'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/akashx-kubernetes-operator',
                component: ComponentCreator('/docs/akashx-kubernetes-operator', '7f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/starts_with',
                component: ComponentCreator('/docs/starts_with', '97a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/statistics',
                component: ComponentCreator('/docs/statistics', 'e66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/std',
                component: ComponentCreator('/docs/std', '9b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/stddev',
                component: ComponentCreator('/docs/stddev', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/stddev_samp',
                component: ComponentCreator('/docs/stddev_samp', 'be4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/STOP_ROUTINE_LOAD',
                component: ComponentCreator('/docs/STOP_ROUTINE_LOAD', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/str_to_date',
                component: ComponentCreator('/docs/str_to_date', '9f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/str_to_jodatime',
                component: ComponentCreator('/docs/str_to_jodatime', '16b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/str_to_map',
                component: ComponentCreator('/docs/str_to_map', '335'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/str2date',
                component: ComponentCreator('/docs/str2date', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strcmp',
                component: ComponentCreator('/docs/strcmp', '61e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/STREAM_LOAD',
                component: ComponentCreator('/docs/STREAM_LOAD', '86a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Stream_load_faq',
                component: ComponentCreator('/docs/Stream_load_faq', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Stream_Load_transaction_interface',
                component: ComponentCreator('/docs/Stream_Load_transaction_interface', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/stream_loads',
                component: ComponentCreator('/docs/stream_loads', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/StreamLoad',
                component: ComponentCreator('/docs/StreamLoad', '879'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strict_mode',
                component: ComponentCreator('/docs/strict_mode', '575'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/STRING',
                component: ComponentCreator('/docs/STRING', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strleft',
                component: ComponentCreator('/docs/strleft', '455'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strpos',
                component: ComponentCreator('/docs/strpos', '6be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strright',
                component: ComponentCreator('/docs/strright', '957'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/STRUCT',
                component: ComponentCreator('/docs/STRUCT', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sub_bitmap',
                component: ComponentCreator('/docs/sub_bitmap', '137'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/subdivide_bitmap',
                component: ComponentCreator('/docs/subdivide_bitmap', '3aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SUBMIT_TASK',
                component: ComponentCreator('/docs/SUBMIT_TASK', '3a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/substring',
                component: ComponentCreator('/docs/substring', 'b76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/substring_index',
                component: ComponentCreator('/docs/substring_index', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sum',
                component: ComponentCreator('/docs/sum', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Superset',
                component: ComponentCreator('/docs/Superset', '517'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/superset_support',
                component: ComponentCreator('/docs/superset_support', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SUPPORT',
                component: ComponentCreator('/docs/SUPPORT', '0e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SUSPEND_or_RESUME_PIPE',
                component: ComponentCreator('/docs/SUSPEND_or_RESUME_PIPE', '25e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SYNC',
                component: ComponentCreator('/docs/SYNC', '04a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/synchronize_mysql_into_sr',
                component: ComponentCreator('/docs/synchronize_mysql_into_sr', 'd42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sys',
                component: ComponentCreator('/docs/sys', '0d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/System_limit',
                component: ComponentCreator('/docs/System_limit', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/System_variable',
                component: ComponentCreator('/docs/System_variable', 'd73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/table_capabilities',
                component: ComponentCreator('/docs/table_capabilities', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/table_clustering',
                component: ComponentCreator('/docs/table_clustering', '7a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/table_constraints',
                component: ComponentCreator('/docs/table_constraints', 'd3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/table_design',
                component: ComponentCreator('/docs/table_design', '8b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/table_privileges',
                component: ComponentCreator('/docs/table_privileges', 'd93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/table_types',
                component: ComponentCreator('/docs/table_types', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tableau_Desktop',
                component: ComponentCreator('/docs/Tableau_Desktop', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tables',
                component: ComponentCreator('/docs/tables', '428'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tables_config',
                component: ComponentCreator('/docs/tables_config', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tan',
                component: ComponentCreator('/docs/tan', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tanh',
                component: ComponentCreator('/docs/tanh', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/task_runs',
                component: ComponentCreator('/docs/task_runs', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tasks',
                component: ComponentCreator('/docs/tasks', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/template_for_config',
                component: ComponentCreator('/docs/template_for_config', 'b09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Temporary_partition',
                component: ComponentCreator('/docs/Temporary_partition', '29a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tencent',
                component: ComponentCreator('/docs/tencent', '3fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/THREAT_MODEL',
                component: ComponentCreator('/docs/THREAT_MODEL', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/thrift-guides',
                component: ComponentCreator('/docs/thrift-guides', '3ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/time_format',
                component: ComponentCreator('/docs/time_format', '38e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/time_slice',
                component: ComponentCreator('/docs/time_slice', 'afb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/time_to_sec',
                component: ComponentCreator('/docs/time_to_sec', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/timediff',
                component: ComponentCreator('/docs/timediff', '981'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/timestamp',
                component: ComponentCreator('/docs/timestamp', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/timestampadd',
                component: ComponentCreator('/docs/timestampadd', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/timestampdiff',
                component: ComponentCreator('/docs/timestampdiff', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/timezone',
                component: ComponentCreator('/docs/timezone', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TINYINT',
                component: ComponentCreator('/docs/TINYINT', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_base64',
                component: ComponentCreator('/docs/to_base64', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_binary',
                component: ComponentCreator('/docs/to_binary', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_bitmap',
                component: ComponentCreator('/docs/to_bitmap', '351'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_date',
                component: ComponentCreator('/docs/to_date', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_datetime',
                component: ComponentCreator('/docs/to_datetime', '41b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_datetime_ntz',
                component: ComponentCreator('/docs/to_datetime_ntz', 'bcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_days',
                component: ComponentCreator('/docs/to_days', 'e25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_iso8601',
                component: ComponentCreator('/docs/to_iso8601', '754'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_json',
                component: ComponentCreator('/docs/to_json', 'de5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_tera_date',
                component: ComponentCreator('/docs/to_tera_date', '528'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/to_tera_timestamp',
                component: ComponentCreator('/docs/to_tera_timestamp', '2d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tokenize',
                component: ComponentCreator('/docs/tokenize', '8d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tpc_ds_99_sql',
                component: ComponentCreator('/docs/tpc_ds_99_sql', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TPC_DS_Benchmark',
                component: ComponentCreator('/docs/TPC_DS_Benchmark', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TPC-H_Benchmarking',
                component: ComponentCreator('/docs/TPC-H_Benchmarking', '52b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Trace',
                component: ComponentCreator('/docs/Trace', '65f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/transform_keys',
                component: ComponentCreator('/docs/transform_keys', 'f33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/transform_values',
                component: ComponentCreator('/docs/transform_values', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/translate',
                component: ComponentCreator('/docs/translate', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TRANSLATE_TRINO',
                component: ComponentCreator('/docs/TRANSLATE_TRINO', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/translate-your-site',
                component: ComponentCreator('/docs/translate-your-site', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/triggers',
                component: ComponentCreator('/docs/triggers', '557'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/trim',
                component: ComponentCreator('/docs/trim', '6b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting_asynchronous_materialized_views',
                component: ComponentCreator('/docs/troubleshooting_asynchronous_materialized_views', 'f06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting_loading',
                component: ComponentCreator('/docs/troubleshooting_loading', 'c95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/truncate',
                component: ComponentCreator('/docs/truncate', '798'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TRUNCATE_TABLE',
                component: ComponentCreator('/docs/TRUNCATE_TABLE', 'a7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ucase',
                component: ComponentCreator('/docs/ucase', '99f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unhex',
                component: ComponentCreator('/docs/unhex', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unified_catalog',
                component: ComponentCreator('/docs/unified_catalog', '092'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UNINSTALL_PLUGIN',
                component: ComponentCreator('/docs/UNINSTALL_PLUGIN', '4f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unique_key_table',
                component: ComponentCreator('/docs/unique_key_table', '964'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unix_timestamp',
                component: ComponentCreator('/docs/unix_timestamp', '4cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unload_using_insert_into_files',
                component: ComponentCreator('/docs/unload_using_insert_into_files', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unnest',
                component: ComponentCreator('/docs/unnest', 'e6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unnest_bitmap',
                component: ComponentCreator('/docs/unnest_bitmap', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/UPDATE',
                component: ComponentCreator('/docs/UPDATE', 'f28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/upgrade',
                component: ComponentCreator('/docs/upgrade', '415'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/upper',
                component: ComponentCreator('/docs/upper', '703'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/url_decode',
                component: ComponentCreator('/docs/url_decode', 'd03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/url_encode',
                component: ComponentCreator('/docs/url_encode', 'a56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/url_extract_host',
                component: ComponentCreator('/docs/url_extract_host', '1d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/url_extract_parameter',
                component: ComponentCreator('/docs/url_extract_parameter', '228'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/USE',
                component: ComponentCreator('/docs/USE', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user_defined_variables',
                component: ComponentCreator('/docs/user_defined_variables', '732'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/User_privilege',
                component: ComponentCreator('/docs/User_privilege', '649'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user_privileges',
                component: ComponentCreator('/docs/user_privileges', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user_privs',
                component: ComponentCreator('/docs/user_privs', '2e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Using_bitmap',
                component: ComponentCreator('/docs/Using_bitmap', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Using_HLL',
                component: ComponentCreator('/docs/Using_HLL', '8a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/utc_time',
                component: ComponentCreator('/docs/utc_time', 'b39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/utc_timestamp',
                component: ComponentCreator('/docs/utc_timestamp', '72c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/uuid',
                component: ComponentCreator('/docs/uuid', 'b67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/uuid_numeric',
                component: ComponentCreator('/docs/uuid_numeric', 'da7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/var_samp',
                component: ComponentCreator('/docs/var_samp', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/VARCHAR',
                component: ComponentCreator('/docs/VARCHAR', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/variance',
                component: ComponentCreator('/docs/variance', 'eee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/vector_index',
                component: ComponentCreator('/docs/vector_index', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/verbose_session_variables',
                component: ComponentCreator('/docs/verbose_session_variables', '472'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/version',
                component: ComponentCreator('/docs/version', '53b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/versioning',
                component: ComponentCreator('/docs/versioning', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/versions',
                component: ComponentCreator('/docs/versions', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Video',
                component: ComponentCreator('/docs/Video', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/views',
                component: ComponentCreator('/docs/views', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/warehouse_metrics',
                component: ComponentCreator('/docs/warehouse_metrics', '892'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/warehouse_queries',
                component: ComponentCreator('/docs/warehouse_queries', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/week',
                component: ComponentCreator('/docs/week', 'bc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/week_iso',
                component: ComponentCreator('/docs/week_iso', 'eb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/weekofyear',
                component: ComponentCreator('/docs/weekofyear', 'bc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/weeks_add',
                component: ComponentCreator('/docs/weeks_add', '7d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/weeks_diff',
                component: ComponentCreator('/docs/weeks_diff', 'b82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/weeks_sub',
                component: ComponentCreator('/docs/weeks_sub', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/welcome',
                component: ComponentCreator('/docs/welcome', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/what_is_akashx',
                component: ComponentCreator('/docs/what_is_akashx', 'ae4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Window_function',
                component: ComponentCreator('/docs/Window_function', 'c86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/window_funnel',
                component: ComponentCreator('/docs/window_funnel', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/xx_hash3_128',
                component: ComponentCreator('/docs/xx_hash3_128', 'ff7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/xx_hash3_64',
                component: ComponentCreator('/docs/xx_hash3_64', 'e4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/year',
                component: ComponentCreator('/docs/year', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/years_add',
                component: ComponentCreator('/docs/years_add', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/years_diff',
                component: ComponentCreator('/docs/years_diff', '552'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/years_sub',
                component: ComponentCreator('/docs/years_sub', '77f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/yearweek',
                component: ComponentCreator('/docs/yearweek', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
