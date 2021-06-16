async function async1() {
    console.log('A')//入栈立马弹栈 
    await async2()//顺序弹栈
    console.log('B')//加入微任务队列
  }
  async function async2() {
    console.log('C')
  }
  console.log('D')
  
  setTimeout(function() {
    console.log('E')
  })
  
  async1()
  
  new Promise(function(resolve) {
    console.log('F')//入栈的时候申明且执行
  }).then(function() {
    console.log('G')//永远不会执行
  })
  console.log('H')