module.exports = {
  // Branch order is significant: each line must be lower than the next. Maintenance
  // lines (5.x, 6.5.x) must appear before `main`, or semantic-release intersects ranges
  // incorrectly and fails with EINVALIDNEXTVERSION (e.g. ">=6.5.0 <5.4.0").
  branches: [
    'do-not-delete',
    { name: 'v5', channel: 'prerelease-v5', range: '5.x' },
    { name: '6.5.x', channel: 'prerelease-bugfix', range: '>=6.5.0 <6.6.0' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' }
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
    ['@semantic-release/github', { successComment: false, failComment: false }],
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'patch-v${version}'
};
