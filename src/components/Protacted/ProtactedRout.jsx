 
//  import React, { Children } from 'react'
//  import { useContext } from 'react'
//  import { Navigate } from 'react-router-dom'
//  import { Authcontext } from '../../AuthContext/AuthContext'

// export default function ProtactedRout({children}) {
// export default function ProtactedRout() {
//  this will work perfict if the firebase did not expird 

//     const {user}=useContext(Authcontext)
//      !localStorage.getItem('token')
//     if (!user) {
//         return <Navigate to='/login'/>
//      }else{
//       return children

//     }
//   console.log('working')
// }

import React, { useContext } from 'react'
import { Authcontext } from '../../AuthContext/AuthContext'

export default function ProtactedRout({children}) {
    const {user} = useContext(Authcontext)
    
    
    return children
}
