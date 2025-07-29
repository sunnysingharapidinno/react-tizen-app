import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
  useImperativeHandle,
} from "react"
import "./CarouselRow.css" // Optional: styles for skeletons, spacing, etc.

// A generic paginated type like Flutter's Paginated<T>
export interface Paginated<T> {
  data: T[]
  count: number
}

// Controller to trigger refresh externally
export interface CarouselRowController {
  refresh?: () => void
}

interface CarouselRowProps<T> {
  heading: string
  cardBuilder: (item: T, itemWidth: number, index: number) => ReactNode
  cardSpacing?: number
  cardsPerView?: number
  sectionHeight?: number
  handleApiCall?: (page: number) => Promise<Paginated<T>>
  controllerRef?: React.MutableRefObject<CarouselRowController | null>
}

const CarouselRow = <T,>({
  heading,
  cardBuilder,
  cardSpacing = 20,
  cardsPerView = 5,
  sectionHeight = 550,
  handleApiCall,
  controllerRef,
}: CarouselRowProps<T>) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState<T[]>([])
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  // External refresh
  const fetchInitialData = useCallback(async () => {
    if (!handleApiCall) return
    setIsInitialLoading(true)
    try {
      const result = await handleApiCall(1)
      setItems(result.data)
      setCurrentPage(1)
      setHasMore(result.count > result.data.length)
    } catch (error) {
      console.error("Initial data fetch error:", error)
    } finally {
      setIsInitialLoading(false)
    }
  }, [handleApiCall])

  useEffect(() => {
    fetchInitialData()
  }, [fetchInitialData])

  useImperativeHandle(controllerRef, () => ({
    refresh: fetchInitialData,
  }))

  const loadMore = async () => {
    if (!handleApiCall || isLoadingMore || !hasMore) return
    setIsLoadingMore(true)
    try {
      const nextPage = currentPage + 1
      const result = await handleApiCall(nextPage)
      if (result.data.length > 0) {
        setItems((prev) => [...prev, ...result.data])
        setCurrentPage(nextPage)
        setHasMore(result.count > items.length + result.data.length)
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error("Load more error:", error)
    } finally {
      setIsLoadingMore(false)
    }
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (
      el &&
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 100 &&
      !isInitialLoading &&
      hasMore
    ) {
      loadMore()
    }
  }

  const totalSpacing = cardSpacing * (cardsPerView - 1)
  const itemWidth = scrollRef.current
    ? (scrollRef.current.offsetWidth - totalSpacing) / cardsPerView
    : 200

  const totalItems = isInitialLoading
    ? cardsPerView
    : items.length + (isLoadingMore ? cardsPerView : 0)

  return (
    <div style={{ height: sectionHeight }}>
      <h2>{heading}</h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: `${cardSpacing}px`,
          paddingBottom: "10px",
        }}>
        {Array.from({ length: totalItems }).map((_, index) => {
          const isSkeleton =
            isInitialLoading || (isLoadingMore && index >= items.length)
          return (
            <div
              key={index}
              style={{ flex: `0 0 ${itemWidth}px`, height: "100%" }}>
              {isSkeleton ? (
                <div className='skeleton' />
              ) : (
                cardBuilder(items[index], itemWidth, index)
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CarouselRow
