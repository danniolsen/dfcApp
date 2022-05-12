import { useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { getTeams } from './api/getTeams'

const TeamPicker = () => {
  const [selectedTeams, setSelectedTeams] = useState([null, null])
  const router = useRouter()

  const { data } = useSWR(`teams/${router.query.type}`, () =>
    getTeams({ teamType: router.query.type })
  )

  const pickRandomTeams = () => {
    const firstTeam = Math.floor(Math.random() * data.length + 1)
    const secoundTeam = Math.floor(Math.random() * data.length + 1)

    const teams = [findTeamById(firstTeam), findTeamById(secoundTeam)]
    setSelectedTeams(teams)
  }

  const findTeamById = (index) => data?.find(({ id }) => index === id)

  return (
    <div className="h-screen w-full mt-12">
      <div className="flex">
        <div className="w-1/2">
          {selectedTeams[0] && (
            <>
              <p className="font-bold">{selectedTeams?.[0]?.name}</p>
              <p className="text-sm">{selectedTeams?.[0]?.country}</p>
            </>
          )}
        </div>

        <div className="w-1/2">
          {selectedTeams[1] && (
            <>
              <p className="font-bold">{selectedTeams?.[1]?.name}</p>
              <p className="text-sm">{selectedTeams?.[1]?.country}</p>
            </>
          )}
        </div>
      </div>

      <div className="w-full mt-8 text-center">
        <p onClick={() => (!data ? null : pickRandomTeams())}>team picker</p>
      </div>
    </div>
  )
}

export default TeamPicker
