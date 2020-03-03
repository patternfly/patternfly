module.exports = {
  branch: 'v4',
  analyzeCommits: {
    preset: 'angular'
  },
  prepare: [
    {
      path: '@semantic-release/npm',
      pkgRoot: 'dist'
    }
  ],
  tagFormat: `prerelease-v\${version}`
};
