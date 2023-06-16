export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const recipes = await $fetch(config.SP_API_URL + 'list', {
    headers: {
      'X-RapidAPI-Key': config.SP_RapidAPI_Key,
      'X-RapidAPI-Host': config.SP_RapidAPI_Host
    }
  })
  return recipes
})