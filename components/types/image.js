module.exports = {
  type: 'image',
  fetch() {
    return {
      // url: 'https://raw.githubusercontent.com/DoraKit/vscode-extension/master/docs/explorer.png',
      url: {
        value: 'https://raw.githubusercontent.com/DoraKit/vscode-extension/master/docs/explorer.png',
        headers: {
          Test: 'Test-Header'
        }
      },
      summary: 'Dora.js 的 VSCode 开发插件',
      title: 'Dora.js vscode extension',
      link: 'https://github.com/DoraKit/vscode-extension',
      author: {
        name: 'linroid',
        avatar: 'https://avatars0.githubusercontent.com/u/3192142?s=460&v=4',
        route: $route('https://github.com/linroid')
      }
    }
  }
}
