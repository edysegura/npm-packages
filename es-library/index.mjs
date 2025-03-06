export default function eyeLogger(data) {
  const fileName = getFileName()
  console.log(`👀 [${fileName}]: `, data)
}

function getFileName() {
  const error = new Error()
  const stack = error.stack.split('\n')
  const fileName = stack
    .at(3)
    .match(/([^\/]+\.(mjs|js|ts))/)
    .shift()
  return fileName
}
