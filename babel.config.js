module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Utilise la version actuelle de Node.js
        },
      },
    ],
  ],
};