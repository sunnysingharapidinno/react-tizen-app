import { useEffect } from "react"

import { useLocation, useNavigate } from "react-router-dom"
import { gameDetailsRoute, homePath, profileRoute } from "routes/path"
import { SidebarWrap } from "./style"
import { FocusContext, useFocusable } from "lib/spatial-navigation"
import MenuItem from "./components/menu-item/MenuItem"

interface ISidebar {
  focusKey: string
}

const menuItems = [
  {
    title: "Home",
    page: "home",
    iconType: "home",
    path: homePath,
  },
  {
    title: "Profile",
    page: "movies",
    iconType: "movies",
    path: `${profileRoute}/123`,
  },
  {
    title: "Series",
    page: "series",
    iconType: "series",
    path: `${gameDetailsRoute}/1233`,
  },
  { title: "Sports", page: "sports", iconType: "sports", path: homePath },
  {
    title: "Settings",
    page: "settings",
    iconType: "settings",
    path: `${profileRoute}/123`,
  },
]

const Sidebar = (props: ISidebar) => {
  const { focusKey: focusKeyParam } = props
  const navigate = useNavigate()
  const location = useLocation()

  const { ref, focusSelf, hasFocusedChild, focusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: undefined,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onArrowRelease: () => {},
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: "bar" },
  })

  useEffect(() => {
    focusSelf()
  }, [focusSelf])

  const isExpanded = hasFocusedChild

  return (
    <FocusContext.Provider value={focusKey}>
      <SidebarWrap ref={ref} isFocused={isExpanded}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            expanded={isExpanded}
            isActive={location.pathname === item.path}
            iconType={item.iconType}
            onSelect={() => navigate(item.path)}
          />
        ))}
      </SidebarWrap>
    </FocusContext.Provider>
  )
}

export default Sidebar
