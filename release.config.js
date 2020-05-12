module.exports = {
  branches: ['master', { name: 'v4', channel: 'prerelease-v4' }],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: `prerelease-v\${version}`
};
