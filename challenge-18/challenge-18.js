export default function fixFiles (files) {
  const uniqueFileNames = {}

  return files.map((fileName) => {
    const fileNameCount = uniqueFileNames[fileName]
    if (fileNameCount) {
      uniqueFileNames[fileName] = fileNameCount + 1
      return `${fileName}(${fileNameCount})`
    } else {
      uniqueFileNames[fileName] = 1
      return fileName
    }
  })
}
