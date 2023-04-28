Project: /docs/reference/js/_project.yaml
Book: /docs/reference/_book.yaml
page_type: reference

{% comment %}
DO NOT EDIT THIS FILE!
This is generated by the JS SDK team, and any local changes will be
overwritten. Changes should be made in the source code at
https://github.com/firebase/firebase-js-sdk
{% endcomment %}

# MemoryCacheSettings interface
An settings object to configure an `MemoryLocalCache` instance.

<b>Signature:</b>

```typescript
export declare interface MemoryCacheSettings 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [garbageCollector](./firestore_.memorycachesettings.md#memorycachesettingsgarbagecollector) | [MemoryGarbageCollector](./firestore_.md#memorygarbagecollector) | The garbage collector to use, for the memory cache layer. A <code>MemoryEagerGarbageCollector</code> is used when this is undefined. |

## MemoryCacheSettings.garbageCollector

The garbage collector to use, for the memory cache layer. A `MemoryEagerGarbageCollector` is used when this is undefined.

<b>Signature:</b>

```typescript
garbageCollector?: MemoryGarbageCollector;
```