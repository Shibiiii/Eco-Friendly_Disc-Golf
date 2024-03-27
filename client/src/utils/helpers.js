export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + 's';
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('Eco-Friendly_Disc-Golf', 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore('products', { keyPath: 'id' });
      db.createObjectStore('categories', { keyPath: 'name' });
      db.createObjectStore('cart', { keyPath: 'id' });
    };

    request.onerror = function (e) {
      console.log('There was an error');
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(storeName, 'readwrite');
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          if (!object.hasOwnProperty(store.keyPath)) {
            console.error(
              `Object does not have required property: ${store.keyPath}`
            );
            break;
          }
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object.id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
