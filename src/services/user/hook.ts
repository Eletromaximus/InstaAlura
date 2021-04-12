import { useEffect, useState } from 'react'
import { userService } from './userService'

export const userUserService = {
  getProfilePage () {
    const [response, setResponse] = useState({
      data: null,
      loading: true,
      error: null
    })

    useEffect(() => {
      userService.getProfilePage()
        .then((responseFromServer: any) => {
          setResponse((currentState) => ({
            ...currentState,
            data: responseFromServer,
            loading: false,
            error: null
          }))
        })
        .catch((err: any) => {
          setResponse((currentState) => ({
            ...currentState,
            data: null,
            loading: false,
            error: err.message
          }))
        })
    }, [])
    return response
  }
}
