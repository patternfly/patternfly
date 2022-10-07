module.exports = {
  branches: ['v5', { name: 'v5', channel: 'alpha' }],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { tag: 'doc', release: 'patch' },
        { tag: 'chore', release: 'patch' },
        { tag: 'feat', release: 'patch' },
        { tag: 'fix', release: 'patch' },
        { tag: 'bug', release: 'patch' }
      ]
    }],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'alpha-v${version}'
};
