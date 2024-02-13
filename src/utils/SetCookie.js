// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

// Set a new cookie
const SetCookie = (passedCookie) => {
    document.cookie = passedCookie+'; SameSite=Lax; Secure; max-age=31536000; path=/';
    return null;
}

export default SetCookie