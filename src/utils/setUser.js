
/**
 * This function set user object and save he
 * @param {Object<{name:string,token:string}>} user
 * @returns {Promise<void>}
 */
export default function setUser(user) {
  return Promise.resolve().then(() =>
    localStorage.setItem('name', user.name)
  ).then(() =>
    localStorage.setItem(user.name, user.token)
  )
}
