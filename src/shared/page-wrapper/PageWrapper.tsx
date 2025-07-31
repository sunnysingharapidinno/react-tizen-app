import { MainContent, PageWrap } from "./style"
import Sidebar from "shared/sidebar/Sidebar"
import React from "react"
import AppBar from "shared/app-bar/AppBar"

interface IPageWrapper {
  children: React.ReactNode
}

const PageWrapper = (props: IPageWrapper) => {
  const { children } = props

  return (
    <PageWrap>
      <AppBar />

      <MainContent>
        <Sidebar focusKey='SIDEBAR' />
        {children}
      </MainContent>
    </PageWrap>
  )
}

export default PageWrapper
