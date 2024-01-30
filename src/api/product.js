import { database } from "../firebase";
import { ref, set } from "firebase/database";
import { Cloudinary } from "@cloudinary/url-gen";

export default class Product {
  constructor() {
    this.db = database;
    this.cld = new Cloudinary({
      cloud: {
        cloudName: "drag0fgme",
      },
    });
  }

  async writeProduct(product) {
    const id = self.crypto.randomUUID();
    await set(ref(this.db, "products/" + id), product).then(() => {
      return id;
    });
  }
}
