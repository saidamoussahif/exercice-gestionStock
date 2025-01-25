import { db } from "../Config/firebaseConfig.js";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const addProduit = async () => {
  try {
    const produitsRef = collection(db, "produits");

    const newProduit = {
      codeBarre: "45678929421872340",
      nom: "Produit 1",
      prix: 55.00,
      stock: {
        "Magasin 1": 1,
        "Magasin 2": 5
      },
      expiration: "2025-08-31",
      reservation: {
        total: 0,
        status: false
      }
    };

    // Vérification de l'existence du code barre dans la collection "produits"
    const q = query(produitsRef, where("codeBarre", "==", newProduit.codeBarre));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("Un produit avec ce code barre existe déjà.");
      return;
    }

    const docRef = await addDoc(produitsRef, newProduit);
    console.log("Produit ajouté avec succès, ID du document :", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit :", error);
  }
};

addProduit();