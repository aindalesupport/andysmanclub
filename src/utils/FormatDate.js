const FormatDate = (date) => {
    const displayDate = new Date(date).toLocaleDateString("en", { day: 'numeric', month: 'long', year: 'numeric', })
    return displayDate
}

export default FormatDate