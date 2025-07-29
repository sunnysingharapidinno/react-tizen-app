import React from "react"
import { PageWrap } from "./style"
import Sidebar from "shared/sidebar/Sidebar"

interface IPageWrapper {
  children: React.ReactNode
}

const PageWrapper = (props: IPageWrapper) => {
  return (
    <PageWrap>
      {/* <Sidebar />  */}
      {props.children}
    </PageWrap>
  )
}

export default PageWrapper
