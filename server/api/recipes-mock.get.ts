import * as recipesList from './recipes-list.json'

export default defineEventHandler(async (event) => {
  return recipesList
})