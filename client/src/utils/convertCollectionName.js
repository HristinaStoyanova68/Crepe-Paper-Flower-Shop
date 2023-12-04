export default function convertCollectionName(collection) {
    let collectionName = collection.toLowerCase();

    if (collection.includes(' ')) {
        
        collectionName = collectionName.replaceAll(' ', '_');
    }

    return collectionName;
}