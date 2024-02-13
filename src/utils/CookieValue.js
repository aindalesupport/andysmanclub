// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
import { useState, useEffect } from 'react'

// Get the cookie value
const CookieValue = (passedName) => {
    const [cookieValue, setCookieValue] = useState(false)

    useEffect(() => {
        const cookieTest = document?.cookie?.split('; ')?.find(row => row?.startsWith(`${passedName}=`))?.split('=')[1];
        setCookieValue(cookieTest)
    }, [passedName])   

    return cookieValue
}

export default CookieValue