export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params = getRouterParams(event)
  const recipes = await $fetch(config.SP_API_URL + 'artists/?ids='+params.id, {
    headers: {
      'X-RapidAPI-Key': config.SP_RapidAPI_Key,
      'X-RapidAPI-Host': config.SP_RapidAPI_Host
    }
  })
  return recipes
})