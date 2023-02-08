import { createContext } from "react"

type ToggleType = boolean

const ToggleCardContext = createContext<ToggleType>(false)

// export default function toggleCard(children: ToggleType) {
//   return (
//     // <ToggleCardContext.Provider>
//     //   { ...children }
//     // </ToggleCardContext.Provider>
//   )
// }
