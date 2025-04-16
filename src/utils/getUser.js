
/**
 * This function returns user object
 * @returns {Object<{name:string,token:string}>}
 */
export default function getUser() {
  var name = localStorage.getItem('name') || '';
  var token = localStorage.getItem(name) || '';
  return {
    name,
    token
  }
}
