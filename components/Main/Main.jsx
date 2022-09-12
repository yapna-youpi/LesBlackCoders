import React from 'react'
import Action from './callAction/Action'
import Work from './work/Work'
import Services from '../../components/services/Services.jsx'

function Home() {
  return (
    <div>
      <Services />
      <Work />
      <Action />
    </div>
  )
}

export default Home