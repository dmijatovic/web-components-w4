import './components/simpleHeader'
import './components/ourClient'

import getUsers from './services/getUsers'

// debugger

let main = document.querySelector('#app')

if (main) {
  let el = document.createElement('simple-header')
  if (el) {
    el.content = 'Add content to custom element'
    main.appendChild(el)
  }
}
//get user data
getUsers.getList().then(data => {
  // debugger
  displayUsers(data)
})

function displayUsers(users) {
  users.map(user => {
    // debugger
    let el = document.createElement('our-client-card')

    if (el) {
      el.props = user
      main.appendChild(el)
    }
  })
}
