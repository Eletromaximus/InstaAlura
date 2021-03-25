const shell = require('shelljs')
const resultado = shell.exec(
  'git diff --name-only branch-scripts-testes..main',
  { silent: true }
)
console.log(resultado.stdout.split('\n'))
