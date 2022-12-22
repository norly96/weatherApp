import { createContext, useState, useContext } from "react";

export const CardsContext = createContext({
    type: "",
    setType: (v) => {},
    toFahr: (v) => num,
});

const CardsProvider = ({ children }) => {
    const [type, setType] = useState("");

    const toFahr = (c) => {
      return c * 1.8 + 32;
    };
    
    return (
    <CardsContext.Provider
        value={{
        type,
        setType,
        toFahr,
        }}
    >
        {children}
    </CardsContext.Provider>
    );
};
export const useCards = () => useContext(CardsContext);

export default CardsProvider;

