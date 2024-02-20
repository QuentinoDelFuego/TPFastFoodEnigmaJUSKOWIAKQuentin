const app = require('express')();

const PORT = 3000;

app.listen(
    PORT,
    () => console.log('server is running on port ${PORT}')
);


const db = supabase.createClient("https://pjbagsoxouhadvqcwhsg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYmFnc294b3VoYWR2cWN3aHNnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODQ0MDAxNCwiZXhwIjoyMDI0MDE2MDE0fQ.WIINj6lVnaMxgVCXtSMJRyXNLPsA27XgdSF98wO3aqg")

const commandes = [];
const produits = [];
const categorie = [];


// Ajouter un produit
app.post("/produit", (req, res) => {
    const produit = req.body;
    produits.push(produit);
    res.json({ message: "Produit ajouté avec succès", produit });
});

// Récupérer la liste des produits
app.get("/produits", (req, res) => {
    res.json(produits);
});

//Supprimer un produit
app.delete("/produit", async (req, res) => {
    const { data, error } = await db.from("produits").delete().eq("id", 4);
    res.send("fin");
});

// Passer une commande
app.post("/commandes", (req, res) => {
    const commande = req.body;
    commandes.push(commande);
    res.json({ message: "Commande passée avec succès", commande });
});

// Récupérer la liste des commandes
app.get("/commandes", (req, res) => {
    res.json(commandes);
});

// supprimer une commande
app.delete("/commandes", async (req, res) => {
    const { data, error } = await db.from("commandes").delete().eq("id", 4);
    res.send("fin");
});

// Ajouter une catégorie
app.post("/categories", (req, res) => {
    const categorie = req.body;
    categorie.push(categorie);
    res.json({ message: "Catégorie ajoutée avec succès", categorie });
});

// Récupérer la liste des catégories
app.get("/categories", (req, res) => {
    res.json(categorie);
});

//Supprimer une catégorie
app.delete("/categories", async (req, res) => {
    const { data, error } = await db.from("categories").delete().eq("id", 4);
    res.send("fin");
});
