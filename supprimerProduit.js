// Importer les dépendances nécessaires
import { db } from "./firebaseConfig"; // Fichier de configuration Firebase
import { doc, deleteDoc } from "firebase/firestore";

// Fonction pour supprimer un produit
const supprimerProduit = async (id) => {
  try {
    // Référence au document du produit à supprimer
    const produitRef = doc(db, "produits", id);

    // Supprimer le document
    await deleteDoc(produitRef);

    console.log(`Produit avec l'ID ${id} a été supprimé avec succès.`);
  } catch (error) {
    console.error("Erreur lors de la suppression du produit :", error);
  }
};

// Appeler la fonction pour supprimer un produit par son ID
supprimerProduit("MV8sSqhOhVhGCDL6H1I7"); // Remplacez l'ID par celui que vous voulez supprimer