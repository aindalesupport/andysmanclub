const SizeMap = {
    "small": "sm:col-span-3 col-span-6",
    "medium": "sm:col-span-4 col-span-6",
    "large": "sm:col-span-6 col-span-6"    
}

const InputSizeMap = (size) => {
    return SizeMap[size]
}

export default InputSizeMap