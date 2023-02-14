import React from 'react'
import Footer from '../Home/Footer'
import Mission from './Mission'
import OrganizationHead from './OrganizationHead'
import OurLeaders from './OurLeaders'
import ParishPriest from './ParishPriest'
import WhatWeDo from './WhatWeDo'

const AboutUs = () => {
  return (
    <div>
      <ParishPriest/>
      <WhatWeDo/>
      <Mission/>
      <OurLeaders/>
      <OrganizationHead/>
      <Footer/>
    </div>
  )
}

export default AboutUs