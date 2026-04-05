module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'type-enum': [ 2, 'always', [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert'
      ]
    ]
  }
}
