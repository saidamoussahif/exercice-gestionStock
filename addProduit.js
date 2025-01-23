import { db } from "./firebaseConfig.js"; // Import ES module
import { collection, addDoc } from "firebase/firestore";

// Fonction pour ajouter un document à la collection "produits"
const addProduit = async () => {
  try {
    // Référence à la collection "produits"
    const produitsRef = collection(db, "produits");

    // Ajouter un document
    const docRef = await addDoc(produitsRef, {
      codeBarre: "2367845652253", // Identifiant unique du produit
      nom: "Cahier", // Nom du produit
      prix: 11.5,
      stock: 70,
      expiration: "2025-07-31",
      magasin: ["Magasin 1", "Magasin 2"], // Magasins où le produit est disponible
      reservation: false, // Produit réservé ou non
    });

    console.log("Document ajouté avec l'ID :", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit :", error);
  }
};

// Appeler la fonction
addProduit();