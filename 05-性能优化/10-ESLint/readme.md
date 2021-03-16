# ESLint 使用

ESLint 通常配合编辑使用

1. 在 vscode 中安装 ESLint，该工具会检查 js 文件
2. 检查的工作交给 eslint 库，如果当前的工程没有则去全局检查
3. 另外，检查的依据是 eslint 的配置文件。 .eslintrc,如果没有该配置文件，也无法完成检查

## 使用流程

npx eslint --init 生成配置文件

## 工作原理

eslint 的工作原理是先将代码进行解析，然后按照规则进行分析
eslint 默认使用 Espree 作为其解析器，可以在配置中指定不同的解析器

## 配置忽略

新建.eslintignore，配置需要忽略检查的文件

还可以在 packge.json "eslintConfig": {}写配置
也可以直接在书写的文件里面配置

## rules(规则集)

每条规则都有下面几条取值

- off | 0 | false 关闭该规则检查
- warn | 1 | true 警告，不会导致程序退出
- error | 2 错误，触发时程序会退出

有扳手的可以自动修复 eslint fix 文件
