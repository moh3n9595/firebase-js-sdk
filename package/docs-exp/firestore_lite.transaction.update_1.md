<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [lite](./firestore_lite.md) &gt; [Transaction](./firestore_lite.transaction.md) &gt; [update](./firestore_lite.transaction.update_1.md)

## Transaction.update() method

Updates fields in the document referred to by the provided [DocumentReference](./firestore_.documentreference.md)<!-- -->. The update will fail if applied to a document that does not exist.

Nested fields can be updated by providing dot-separated field path strings or by providing `FieldPath` objects.

<b>Signature:</b>

```typescript
update(documentRef: DocumentReference<unknown>, field: string | FieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  documentRef | [DocumentReference](./firestore_lite.documentreference.md)<!-- -->&lt;unknown&gt; | A reference to the document to be updated. |
|  field | string \| [FieldPath](./firestore_lite.fieldpath.md) | The first field to update. |
|  value | unknown | The first value. |
|  moreFieldsAndValues | unknown\[\] | Additional key/value pairs. |

<b>Returns:</b>

this

This `Transaction` instance. Used for chaining method calls.
