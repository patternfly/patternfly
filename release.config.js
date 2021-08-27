module.exports = {
  branches: ['main', { name: 'main', channel: 'prerelease' }],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'prerelease-v${version}'
};
