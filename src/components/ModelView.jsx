import { Html, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import Iphone from "./Iphone"

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={`w-full h-full ${index === 2} ? 'right-[-100%] : ''`}
    >
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <Suspense fallback={<Html><div>Loading</div></Html>}>
            <Iphone
             scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
             item={item}
             size={size}
            />
        </Suspense>
    </View>
  )
}

export default ModelView