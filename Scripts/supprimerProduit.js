import { db } from "../Config/firebaseConfig.js";
import { doc, deleteDoc } from "firebase/firestore";

const supprimerProduit = async (id) => {
  try {
    const produitRef = doc(db, "produits", id);
    await deleteDoc(produitRef);

    console.log(`Produit avec l'ID ${id} a été supprimé avec succès.`);
  } catch (error) {
    console.error("Erreur lors de la suppression du produit :", error);
  }
};

supprimerProduit("zGpd7mXNFv7LLkle0Pgs"); 
// Remplacez l'ID par celui que vous voulez supprimer