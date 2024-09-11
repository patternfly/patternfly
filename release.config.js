module.exports = {
  branches: [
    'do-not-delete',
    { name: 'v5', channel: 'prerelease-v5', range: '5.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' }
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING-CHANGE']
        }
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'prerelease-v${version}',
  dryRun: false
};
