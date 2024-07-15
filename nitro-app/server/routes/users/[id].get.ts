// routes/users/[id].get.ts
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
  
    // Do something with id
  
    return `User profile!`
  })
  