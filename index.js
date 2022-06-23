import 'regenerator-runtime/runtime.js'
import functions from './src/functions'

module.exports.workerFunction = async (message, context) => {
  const data = JSON.parse(Buffer.from(message.data, 'base64').toString());
  functions.workerFunction(data)
}
