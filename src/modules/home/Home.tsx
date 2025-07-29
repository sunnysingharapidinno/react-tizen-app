import { MenuComponent } from "components/MenuComponent"
import React, { useRef } from "react"
import CarouselRow, {
  CarouselRowController,
} from "shared/carousel-wrapper/CarouselRow"

type Props = {}

const Home = (props: Props) => {
  const controllerRef = useRef<CarouselRowController>(null)

  return (
    <div>
      <MenuComponent />
      {/* <CarouselRow<any>
        heading='Popular Items'
        cardsPerView={4}
        handleApiCall={()=>{
            return {
              data: [],
              count: 10,
            }
        }}
        cardBuilder={(item, width, index) => (
          <div style={{ width, background: "#eee" }}>{item.title}</div>
        )}
        controllerRef={controllerRef}
      /> */}
    </div>
  )
}

export default Home
