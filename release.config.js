module.exports = {
  branches: [
    'main',
    { name: 'main', channel: 'prerelease' },
    { name: 'v5', channel: 'alpha', prerelease: 'alpha' }
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
  tagFormat: 'patch-v${version}'
};
