const express = require('express');
const path = require('path');

const app = express();

// Hostinger fournit le port via la variable d'environnement PORT.
// En local (sur ton PC), il utilisera 3000 par défaut.
const PORT = process.env.PORT || 3000;

// Sert tous les fichiers statiques (HTML, images, CSS, JS) du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Pour toute autre route, renvoyer index.html (utile si tu ajoutes des pages plus tard)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Belya Solutions website running on port ${PORT}`);
});
