module.exports = {
  branches: [
    'do-not-delete',
    { name: 'v5', channel: 'prerelease-v5', range: '5.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: '6.2.x', channel: 'prerelease-bugfix', range: '6.2.x' }

  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'patch' },
          { type: 'fix', release: 'patch' }
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'v${version}',
  dryRun: true
};
