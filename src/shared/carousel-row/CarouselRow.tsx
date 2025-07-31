import { useCallback, useRef } from "react"

import {
  FocusContext,
  useFocusable,
  type FocusableComponentLayout,
  type FocusDetails,
  type KeyPressDetails,
} from "lib/spatial-navigation"
import {
  ContentRowScrollingContent,
  ContentRowScrollingWrapper,
  ContentRowTitle,
  ContentRowWrapper,
} from "./style"
import { Asset } from "shared/Asset"

interface ContentRowProps {
  title: string
  assets: Array<{ title: string; color: string }>
  onAssetPress: (props: object, details: KeyPressDetails) => void
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void
}

const CarouselRow = (props: ContentRowProps) => {
  const { title: rowTitle, assets, onAssetPress, onFocus } = props
  const { ref, focusKey } = useFocusable({
    onFocus,
    saveLastFocusedChild: false,
    preferredChildFocusKey: `${rowTitle}-0`,
  })

  const scrollingRef = useRef<HTMLDivElement>(null)

  const onAssetFocus = useCallback(
    ({ x }: { x: number }) => {
      scrollingRef.current?.scrollTo({
        left: x,
        behavior: "smooth",
      })
    },
    [scrollingRef]
  )

  return (
    <FocusContext.Provider value={focusKey}>
      <ContentRowWrapper ref={ref}>
        <ContentRowTitle>{rowTitle}</ContentRowTitle>
        <ContentRowScrollingWrapper ref={scrollingRef}>
          <ContentRowScrollingContent>
            {assets.map(({ title, color }, index) => (
              <Asset
                index={index}
                title={title}
                key={`${rowTitle}-${index}`}
                color={color}
                onEnterPress={onAssetPress}
                onFocus={onAssetFocus}
              />
            ))}
          </ContentRowScrollingContent>
        </ContentRowScrollingWrapper>
      </ContentRowWrapper>
    </FocusContext.Provider>
  )
}

export default CarouselRow
