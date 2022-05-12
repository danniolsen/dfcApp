import { getDatabase, ref, child, get } from 'firebase/database'

const getTeams = async ({ teamType }) => {
  const dbRef = ref(getDatabase())
  return await get(child(dbRef, teamType))
    .then((snapshot) => {
      return snapshot.val()
    })
    .catch((error) => {
      console.error('error ', error)
      return error
    })
}

export { getTeams }
