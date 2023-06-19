import * as recipesList from './recipes-list.json'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { start = 0, limit = 20, q = '' } = getQuery(event)
  let url = `list?from=${start}&size=${limit}`
  if (q) {
    url = `${url}&q=${q}`
  }

  // serve the request from cached json for the first time
  // this will decrease the page load time
  if (!q && start == 0) {
    return recipesList
  }
  const recipes = await $fetch(config.SP_API_URL + url, {
    headers: {
      'X-RapidAPI-Key': config.SP_RapidAPI_Key,
      'X-RapidAPI-Host': config.SP_RapidAPI_Host
    }
  })
  return recipes
})