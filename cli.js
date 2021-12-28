#!/usr/bin/env node
const program = require('commander');
const api = require('./index')

program
  .option('-x, --xxx', 'the x')

program
  .command('add')
  .description('添加任务')
  .action((...args) => {
    const words = args.slice(0,args.length-1).join(' ')
    api.add(words).then(()=>{console.log("添加成功")},()=>{console.log("添加失败")})
  });

program
  .command('clear')
  .description('清空任务')
  .action(() => {
    api.clear().then(()=>{console.log("清除成功")},()=>{console.log("清除失败")})
  });

if (process.argv.length===2){
  void api.showAll()
}
program.parse(process.argv);
