import * as recipesList from './recipes-list.json'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { mock = false, id } = getQuery(event)

  if (!mock) {
    const recipes = await $fetch(config.SP_API_URL + `get-more-info?id=${id}`, {
      headers: {
        'X-RapidAPI-Key': config.SP_RapidAPI_Key,
        'X-RapidAPI-Host': config.SP_RapidAPI_Host
      }
    })
    return recipes
  } else {
    return recipesList.results[0]
  }
})