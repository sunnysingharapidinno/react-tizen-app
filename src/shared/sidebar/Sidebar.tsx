import React from "react"
import { gameDetailsPath, homePath } from "routes/path"
import { SideBarItem, SidebarWrap } from "./style"

type Props = {}

interface ISidebar {
  label: string
  path: string
}

const sidebarList: ISidebar[] = [
  {
    label: "Home",
    path: homePath,
  },
  {
    label: "Game Details",
    path: gameDetailsPath,
  },
]

const Sidebar = (props: Props) => {
  return (
    <SidebarWrap>
      {sidebarList.map((item) => (
        <SideBarItem key={item.label} to={item.path}>
          {item.label}
        </SideBarItem>
      ))}
    </SidebarWrap>
  )
}

export default Sidebar
