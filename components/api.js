// components/api.js - Dora.js API 演示应用
// 这是一个为 Dora.js 框架设计的 API 演示模块
// 定义了一系列 API 功能的演示条目，用于展示 Dora.js 提供的各种 API 功能

const apiDemo = {
  // 主要的 API 演示数据获取方法
  fetch() {
    return [
      // $ui - UI 相关 API 演示
      {
        title: '$ui',
        style: 'category' // 分类标题样式
      },
      {
        title: '显示一个 Toast 消息',
        summary: '$ui.toast(title: string)', // API 方法签名
        onClick: () => {
          $ui.toast('Hello World!') // 调用 API 显示 Toast
        }
      },
      {
        title: '显示一个弹窗警告',
        summary: '$ui.alert(message: string)',
        onClick: async () => {
          await $ui.alert('Hello World') // 异步调用弹窗 API
          console.log('alert finished') // 弹窗结束后执行
        }
      },
      {
        title: '打开浏览器',
        summary: '$ui.browser(url: string)',
        onClick: () => {
          $ui.browser('https://www.npmjs.com/') // 打开指定 URL
        }
      },
      {
        title: '查看一个 npm 用户',
        summary: '$ui.viewUser(userId: string)',
        onClick: () => {
          $ui.viewUser('linroid') // 查看 npm 用户信息
        }
      },
      
      // $input - 输入相关 API 演示
      {
        title: '$input',
        style: 'category'
      },
      {
        title: '显示一个确认弹窗',
        summary: '$input.confirm(params: ConfirmParams)',
        onClick: async () => {
          let ok = await $input.confirm({
            title: 'Confirmation',
            message: 'Are you sure?',
            okBtn: 'okBtn'
          })
          $ui.toast(`ok=${ok}`) // 显示确认结果
        }
      },
      {
        title: '请求输入文本',
        summary: '$input.text(params: InputParams)',
        onClick: async () => {
          let name = await $input.prompt({
            title: '输入姓名',
            hint: '姓名',
            value: ''
          })
          $ui.toast(`Hello ${name}`) // 显示输入的姓名
        }
      },
      {
        title: '请求输入数字',
        summary: '$input.text(params: InputParams)',
        onClick: async () => {
          let age = await $input.number({
            title: '输入年龄',
            hint: '年龄',
            value: ''
          })
          $ui.toast(`年龄: ${age}`) // 显示输入的年龄
        }
      },
      {
        title: '请求输入密码',
        summary: '$input.password(params: InputParams)',
        onClick: async () => {
          let age = await $input.password({
            title: '输入密码',
            hint: '密码',
            value: ''
          })
          $ui.toast(`密码: ${age}`) // 显示输入的密码（实际应用中不应显示）
        }
      },
      {
        title: '进行单项选择',
        summary: '$input.select(data: object)',
        onClick: async () => {
          let selected = await $input.select({
            title: 'Dora.js select',
            options: [
              { id: 'option1', title: 'Option 1' },
              { id: 'option2', title: 'Option 2' }
            ]
          })
          $ui.toast(`Selected ${JSON.stringify(selected)}`) // 显示选择结果
        }
      },
      {
        title: '进行多项选择',
        summary: '$input.select(data: object)',
        onClick: async () => {
          let selected = await $input.select({
            title: 'Dora.js select',
            multiple: true, // 允许多选
            options: [
              { id: 'option1', title: 'Option 1' },
              { id: 'option2', title: 'Option 2' }
            ]
          })
          $ui.toast(`Selected ${JSON.stringify(selected)}`) // 显示选择结果
        }
      },
      
      // $router - 路由相关 API 演示
      {
        title: '$router',
        style: 'category'
      },
      {
        title: '跳转指定路由',
        summary: '$router.to(route: Route)',
        onClick: () => {
          $router.to($route('index')) // 跳转到指定路由
        }
      },

      // $prefs - 配置相关 API 演示
      {
        title: '$prefs',
        style: 'category'
      },
      {
        title: '打开配置页',
        summary: '$prefs.open()',
        onClick: () => {
          $prefs.open() // 打开配置页面
        }
      },
      {
        title: '获取一个配置值',
        summary: '$prefs.get(key: string): any',
        onClick: () => {
          this.dump($prefs.get('name')) // 获取并显示配置值
        }
      },
      {
        title: '设置一个配置',
        summary: '$prefs.set(key: string, value: any)',
        onClick: () => {
          $prefs.set('name', 'Dora.js') // 设置配置值
          this.dump($prefs.get('name')) // 获取并显示配置值
        }
      },
      {
        title: '获取所有配置',
        summary: '$prefs.all(): object',
        onClick: () => {
          this.dump($prefs.all()) // 获取并显示所有配置
        }
      },

      // $storage - 存储相关 API 演示
      {
        title: '$storage',
        style: 'category'
      },
      {
        title: '获取一个值',
        summary: '$storage.get(key: string): any',
        onClick: () => {
          this.dump($storage.get('author')) // 获取并显示存储值
        }
      },
      {
        title: '设置一个值',
        summary: '$storage.put(key: string, value: any)',
        onClick: () => {
          $storage.put('author', {
            name: 'linroid',
            github: 'https://github.com/linroid'
          }) // 设置存储值
          this.dump($storage.get('author')) // 获取并显示存储值
        }
      },
      {
        title: '删除一个值',
        summary: '$storage.remove(key: string)',
        onClick: () => {
          $storage.remove('author') // 删除存储值
          this.dump($storage.get('author')) // 获取并显示存储值（应为 undefined）
        }
      },
      {
        title: '获取所有存储值',
        summary: '$storage.all(): object',
        onClick: () => {
          this.dump($storage.all()) // 获取并显示所有存储值
        }
      },
      
      // $dora - Dora.js 框架相关 API 演示
      {
        title: '$dora',
        style: 'category'
      },
      {
        title: '获取已安装的扩展列表',
        summary: '$dora.addons(): Promise<Addon[]>',
        onClick: async () => {
          const addons = await $dora.addons() // 获取扩展列表
          $ui.showCode(JSON.stringify(addons, null, '  ')) // 以代码格式显示
        }
      },
      {
        title: '安装一个扩展',
        summary: '$dora.install(url: Url): Promise<Addon | null>',
        onClick: async () => {
          const result = await $dora.install('npm://@dora.js/unsplash') // 安装扩展
          $ui.toast(`install result: ${result}`) // 显示安装结果
        }
      },
      {
        title: '卸载一个扩展',
        summary: '$dora.uninstall(uuid: string): Promise<boolean>',
        onClick: async () => {
          const addons = await $dora.addons()
          const item = await $input.select({
            title: '卸载哪一个？',
            options: addons.map(addon => ({
              title: addon.displayName,
              uuid: addon.uuid
            }))
          }) // 选择要卸载的扩展
          const result = await $dora.uninstall(item.uuid) // 卸载扩展
          $ui.toast(`uninstall result: ${result}`) // 显示卸载结果
        }
      },
      {
        title: '判断是否安装指定扩展',
        summary: '$dora.isInstalled(uuid: string): boolean',
        onClick: () => {
          const result = $dora.isInstalled(
            '2f33d8de-c474-4f38-a19b-cf2cab4228cc'
          ) // 检查扩展是否已安装
          $ui.toast(`is installed: ${result}`) // 显示检查结果
        }
      },
      
      // 权限相关 API 演示
      {
        title: '权限申请',
        style: 'category'
      },
      {
        title: '申请权限',
        summary: '$permission.request(family: string)',
        onClick: async () => {
          const result = await $permission.request('sdcard') // 申请存储权限
          $ui.toast(`申请结果: ${result}`) // 显示申请结果
        }
      },

      // 下载器相关 API 演示
      {
        title: '$downloader',
        style: 'category'
      },
      {
        title: '下载文件',
        summary: '$downloader.add(params: DownloadParams)',
        onClick: () => {
          $downloader.add({
            url: 'http://r.cnpmjs.org/@dora.js/api-demo/download/@dora.js/api-demo-1.4.0.tgz',
            filename: 'api-demo-1.4.0.dora',
            headers: {
              "User-Agent": "api_demo/1.0.0" 
            }
          }) // 添加下载任务
        }
      },
      
      // 任务调度相关 API 演示
      {
        title: '$task',
        style: 'category'
      },
      {
        title: '执行任务',
        summary: '$task.add(params: TaskParams)',
        onClick: () => {
          $task.schedule({
            name: 'get_ip',
            at: new Date() // 在当前时间执行任务
          })
        }
      },
      
      // 全局工具函数演示
      {
        title: 'global',
        style: 'category'
      },
      {
        title: '生成 assets 目录下的文件 Url',
        summary: '$assets(path: string)',
        onClick: () => {
          $ui.toast($assets('nokia.jpeg')) // 生成 assets 文件的 URL
        }
      },
      {
        title: '生成一个内置图标 Url',
        summary: '$icon(name: string, color: string|null)',
        onClick: () => {
          $ui.toast($icon('ic_settings', 'black')) // 生成图标 URL
        }
      },
      {
        title: '生成一个路由',
        summary: '$route(path: string, data: object)',
        onClick: () => {
          $ui.toast(JSON.stringify($route('index', { id: 1 }))) // 生成路由对象
        }
      }
    ]
  },
  
  // 辅助方法：以 Toast 形式显示数据
  dump(data) {
    $ui.toast(JSON.stringify(data, null, '  ')) // 格式化 JSON 数据并显示
  }
}

// 导出模块
module.exports = apiDemo



