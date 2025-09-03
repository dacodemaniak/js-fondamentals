module.exports = {
  // Indique à Jest de transformer les fichiers JS avec babel-jest
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  
  // Extensions de fichiers que Jest doit traiter
  moduleFileExtensions: ['js', 'json'],
  
  // Chemins à ignorer lors des tests
  testPathIgnorePatterns: ['/node_modules/'],
  
  // Répertoires où chercher les tests
  testMatch: [
    '**/tests/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // Configuration pour gérer les imports ES
  moduleNameMappings: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  
  // Environnement de test
  testEnvironment: 'node',
  
  // Options pour les imports ES
  transformIgnorePatterns: [
    // Ne pas ignorer node_modules (important pour les modules ES)
    // '/node_modules/(?!(your-esm-package)/)'
  ]
};