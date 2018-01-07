import ElizaBot from "elizabot"

const getAppResponse = (inputString) => {
  const eliza = new ElizaBot()
  return eliza.transform(inputString)
}

export default getAppResponse