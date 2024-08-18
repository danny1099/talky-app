export const textCapitalize = (text: string, allWords = false) => {
  const textToCapitalize = text.toLowerCase()

  if (allWords) {
    return textToCapitalize
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return textToCapitalize.charAt(0).toUpperCase() + textToCapitalize.slice(1)
}
