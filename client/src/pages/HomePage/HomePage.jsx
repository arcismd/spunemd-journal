import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Posts } from '../../components/Posts/Posts'
import { LeftNavbar } from '../../components/LeftNavbar/LeftNavbar'

import { Form } from '../../components/Form/Form'

export const HomePage = () => {
  return (
    <>
        <Navbar />
        <LeftNavbar />
        <Posts />
        <Form />
    </>
  )
}
