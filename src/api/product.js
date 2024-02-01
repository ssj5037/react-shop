import { database } from "./firebase";
import { get, ref, remove, set, update } from "firebase/database";

export const imageUpload = async (img) => {
  const formData = new FormData();
  formData.append("file", img);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET
  );

  return await fetch(import.meta.env.VITE_APP_CLOUDINARY_URL, {
    method: "post",
    body: formData,
  })
    .then((response) => response.text())
    .then(async (data) => {
      return JSON.parse(data).secure_url;
    });
};

export const writeProduct = async (product) => {
  const id = self.crypto.randomUUID();

  const newProduct = {
    ...product,
    sizes: product.sizes.toUpperCase().split(","),
  };
  return await set(ref(database, "products/" + id), newProduct)
    .then(() => id)
    .catch(console.error);
};

export const getProducts = async () => {
  return await get(ref(database, "products"))
    .then((snapshot) => {
      const data = snapshot.val();
      const results = [];
      for (const [key, value] of Object.entries(data)) {
        results.push({ id: key, ...value });
      }
      return results;
    })
    .catch(console.error);
};

export const getProduct = async (id) => {
  return await get(ref(database, `products/${id}`))
    .then((snapshot) => snapshot.val())
    .catch(console.error);
};

export const getCart = async (uid) => {
  return await get(ref(database, `carts/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    })
    .catch(console.error);
};

export const addCart = async (uid, cart, refetch) => {
  return await set(ref(database, `carts/${uid}/${cart.id}`), cart)
    .then(refetch)
    .catch(console.error);
};

export const deleteCart = async (uid, cartId, refetch) => {
  return await remove(ref(database, `carts/${uid}/${cartId}`))
    .then(refetch)
    .catch(console.error);
};

export const updateCart = async (uid, cart, refetch) => {
  const updates = {};
  updates[`carts/${uid}/${cart.id}/count`] = cart.count;

  return await update(ref(database), updates)
    .then(refetch)
    .catch(console.error);
};
