module.exports = {
  branches: ['master', { name: 'master', channel: 'prerelease' }],
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
