import React from 'react'
import Operations from './Operations/Operations'
import Bonuses from './Bonuses/Bonuses'
import Padding from '../../../ui/Padding'
import tw from 'twrnc'

const Services = () => {

  return (
    <Padding style={{...tw`flex flex-row gap-5`}}>
        <Operations/>
        <Bonuses />
    </Padding>
  )
}

export default Services