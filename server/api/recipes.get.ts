export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { start = 0, limit = 20 } = getQuery(event)

  const recipes = await $fetch(config.SP_API_URL + `list?from=${start}&size=${limit}`, {
    headers: {
      'X-RapidAPI-Key': config.SP_RapidAPI_Key,
      'X-RapidAPI-Host': config.SP_RapidAPI_Host
    }
  })
  return recipes
})