https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server

install lastest PPA nodejs

NOTE: ubuntu repo 里有个包叫 `node` ，（注意不是 nodejs ），这个安装后可能会造成问题，因为他的二进制名字叫 node，而 nodejs 安装好之后二进制名叫 nodejs ，同时，


- sudo npm install -g gulp
  - trying to avoid sudo , I can change prefix, as show here:
    https://docs.npmjs.com/getting-started/fixing-npm-permissions
  - mkdir ~/.npm-global
    export PATH=~/.npm-global/bin:$PATH >> .bashrc
    cat .npmrc
- now I can run `npm install -g gulp` to install gulp globally
- then I can find gulp in ~/.npm-global
- but you still need to install gulp in your project root
  https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
- can I just install gulp locally? NO, cause 'gulp command PATH' issue

- to get the right package.json file
  - first npm npm init then npm install --save-dev gulp
