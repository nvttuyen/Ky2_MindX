import React from 'react'
import Header from './Header'
import Boxcontent from './Boxcontent'
import Footerbar from './Footerbar'
import Slider from './Slider'

export default function Homepage() {
  return (
    <div>
        <Header/>
        <Slider/>
        <Boxcontent/>
        <Footerbar/>
    </div>
  )
}
