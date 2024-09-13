module.exports = {
  branches: [
    'do-not-delete',
    { name: 'v4', channel: 'prerelease-v4', range: '4.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: 'v5', channel: 'prerelease-v5', range: '5.x' }
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'v${version}',
  dryRun: true
};
