/*
  getUsers service to fetch data from demo api point
*/
const getUsers = {
  url: 'https://jsonplaceholder.typicode.com/users',

  getList: () => {
    // debugger
    return fetch(getUsers.url)
      .then(d => {
        return d.json()
      })
      .then(data => {
        return data
        //console.log(data)
      })
      .catch(e => {
        console.error('This is error!')
        throw e
      })
  }
}

export default getUsers
