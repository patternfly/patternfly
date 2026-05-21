module.exports = {
  branches: [
    'do-not-delete',
    { name: 'v5', channel: 'prerelease-v5', range: '5.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: '6.5.x', channel: 'prerelease-bugfix', range: '6.5.x' }
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    ['@semantic-release/commit-analyzer',
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
  tagFormat: 'patch-v${version}',
  dryRun: true
};
