import 'isomorphic-fetch'
export const apiCall = (link) =>
  fetch(link).then(response =>
      response.json()
  )