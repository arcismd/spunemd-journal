import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { DailyNews } from '../../components/DailyNews/DailyNews'
import { Posts } from '../../components/Posts/Posts'
import { LeftNavbar } from '../../components/LeftNavbar/LeftNavbar'
import { RightNavbar } from '../../components/RightNavbar/RightNavbar'
import { Form } from '../../components/Form/Form'

export const HomePage = () => {
  return (
    <>
        <Navbar />
        <LeftNavbar />
        <DailyNews />
        <RightNavbar />
        <Posts />
        <Form />
    </>
  )
}
