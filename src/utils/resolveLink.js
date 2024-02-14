const resolveLink = ( path ) => {
    const prefix = 
        path.startsWith('https') ? '' :
        path.startsWith('www.') ? 'https://' :
        path.startsWith('/') ? '' :
        '/'
    return `${prefix}${path.replace(/\/$|$/, `/`)}`
}

export default resolveLink