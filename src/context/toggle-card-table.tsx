import React, { createContext, useState } from "react";

// interface IToggleCardContext {
//   isToggleCard: boolean;
//   setIsToggleCard?: (c: boolean) => void;
// }

// interface AuxProps {
//     children: React.ReactNode
// }

// const defaultState = {
//   isToggleCard: false,
// };

// const ToggleCardContext = createContext<IToggleCardContext>(defaultState);

// const [isToggleCard, setIsToggleCard] = useState<IToggleCardContext>(defaultState)
// function Provider(props: AuxProps) {

//     <ToggleCardContext.Provider value={{isToggleCard, setIsToggleCard}}>
//         { props.children }
//     </ToggleCardContext.Provider>
// }