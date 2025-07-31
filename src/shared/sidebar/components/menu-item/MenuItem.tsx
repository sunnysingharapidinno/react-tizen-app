import { useFocusable } from "lib/spatial-navigation"
import { MenuItemBox, MenuItemIcon, MenuItemTitle } from "./style"

interface IMenuItemProps {
  title: string
  expanded: boolean
  isActive: boolean
  iconType: string
  onSelect: () => void
}

const MenuItem = (props: IMenuItemProps) => {
  const { title, expanded, isActive, iconType, onSelect } = props
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      onSelect()
    },
  })

  return (
    <MenuItemBox
      ref={ref}
      isFocused={focused}
      isExpanded={expanded}
      isActive={isActive}>
      <MenuItemIcon isExpanded={expanded} $iconType={iconType} />
      <MenuItemTitle $expanded={expanded}>{title}</MenuItemTitle>
    </MenuItemBox>
  )
}

export default MenuItem
