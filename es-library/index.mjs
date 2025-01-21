export default function eyeLogger(data) {
  const fileName = getFileName();
  console.log(`👀 [${fileName}]: `, data);
}

function getFileName() {
  const stack = new Error().stack;
  const callerLine = stack.split("\n")[3]; // Get the caller's line (index 3 has the actual caller)
  const match = callerLine.match(/\/[\w-_]+(\.\w+)+/);
  return match ? match[0].split("/").pop() : "unknown";
}
