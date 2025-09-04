#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build

# 进入生成的文件夹
cd ./ #docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m 'huangpw'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
git push -f https://github.com/huangpw/vitepress-navigation-resource.git master

# 返回进入此目录之前所在目录 
# cd -

# 删除打包后的文件
# rm -rf docs/.vitepress/dist