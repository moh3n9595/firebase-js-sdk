<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [lite](./firestore_lite.md) &gt; [FirestoreDataConverter](./firestore_lite.firestoredataconverter.md)

## FirestoreDataConverter interface

Converter used by `withConverter()` to transform user objects of type `T` into Firestore data.

Using the converter allows you to specify generic type arguments when storing and retrieving objects from Firestore.

<b>Signature:</b>

```typescript
export declare interface FirestoreDataConverter<T> 
```

## Example


```typescript
class Post {
  constructor(readonly title: string, readonly author: string) {}

  toString(): string {
    return this.title + ', by ' + this.author;
  }
}

const postConverter = {
  toFirestore(post: Post): firebase.firestore.DocumentData {
    return {title: post.title, author: post.author};
  },
  fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot): Post {
    const data = snapshot.data(options)!;
    return new Post(data.title, data.author);
  }
};

const postSnap = await firebase.firestore()
  .collection('posts')
  .withConverter(postConverter)
  .doc().get();
const post = postSnap.data();
if (post !== undefined) {
  post.title; // string
  post.toString(); // Should be defined
  post.someNonExistentProperty; // TS error
}

```

## Methods

|  Method | Description |
|  --- | --- |
|  [fromFirestore(snapshot)](./firestore_lite.firestoredataconverter.fromfirestore.md) | Called by the Firestore SDK to convert Firestore data into an object of type T. You can access your data by calling: <code>snapshot.data()</code>. |
|  [toFirestore(modelObject)](./firestore_lite.firestoredataconverter.tofirestore.md) | Called by the Firestore SDK to convert a custom model object of type <code>T</code> into a plain Javascript object (suitable for writing directly to the Firestore database). Used with ,  and . |
|  [toFirestore(modelObject, options)](./firestore_lite.firestoredataconverter.tofirestore_1.md) | Called by the Firestore SDK to convert a custom model object of type <code>T</code> into a plain Javascript object (suitable for writing directly to the Firestore database). Used with ,  and  with <code>merge:true</code> or <code>mergeFields</code>. |
