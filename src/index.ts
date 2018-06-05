import * as MyModule from './modules/module'

let myModule: typeof MyModule = <any>require('./modules/module.ts')

if (module.hot) {
  console.log('module is hot!')
  module.hot.accept(['./modules/module.ts'], function() {
    console.log('module: accept 01')
    myModule = <any>require('./modules/module.ts')
    updateContents()
  })
} else {
  console.log("module is not hot. Can't reload the module")
}

let updateContents = function() {
  document.getElementById('content').innerText = myModule.func01()
}
document.addEventListener('DOMContentLoaded', () => {
  updateContents()
})
