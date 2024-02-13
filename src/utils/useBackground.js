import { useContext, useEffect } from "react";
import { PageContext } from "src/utils/context";

const useBackground = ({ isVisible, color }) => {
    const { setBackgroundColor } = useContext(PageContext);

    useEffect(() => {
        if( isVisible ) {
            setBackgroundColor(color);
        }
    }, [isVisible, setBackgroundColor, color]);    
}

export default useBackground;