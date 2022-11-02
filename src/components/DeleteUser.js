import React from 'react'

import { deleteUser } from '../utils'

const UpdateUser = ({user}) => {
    const deleteAcc = async (event) => {
        event.preventDefault()
        await deleteUser(user)
    }

    return ( 

        <form onSubmit = {deleteAcc}>
            <button type="submit">Delete your account</button>
        </form>
    )
}


export default UpdateUser