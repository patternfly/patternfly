module.exports = {
  branches: [
    'do-not-delete',
    { name: 'v4', channel: 'prerelease-v4', range: '4.x' },
    { name: 'v6', channel: 'alpha', range: 'alpha' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: 'v6', channel: 'alpha', prerelease: 'alpha' }
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
