const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',   // Le fichier js principal de notre code source.
  mode: 'development',
  output: {
    filename: 'main.js',    // Le nom du bundle à générer
    path: path.resolve(__dirname, 'dist'),   // Le chemin dans lequel le bundle doit être généré
    publicPath: '/integration_lilipinso/',
    clean: true,            // Nettoie le répertoire dist avant chaque build
  },
  module: {
    rules: [
      {
        test: /\.scss$/,    // Pour les fichiers SCSS
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,   // Pour charger les fichiers HTML
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Ton fichier HTML source
      inject: 'body',             // Injecte le bundle dans le body de l'HTML
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Sert les fichiers depuis le répertoire dist
    open: true,            // Ouvre automatiquement le navigateur
    hot: true,             // Active le Hot Module Replacement pour JavaScript et CSS
    watchFiles: ['src/**/*.html'],  // Surveille les changements sur les fichiers HTML pour un rechargement automatique
  },
};