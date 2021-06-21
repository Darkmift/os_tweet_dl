const si = require('systeminformation');

async function fetchSystemInfo() {
  try {
    const os = await si.osInfo()
    const system = await si.system()
    const memory = await si.mem()
    const cpu = await si.cpu()

    return {
      os,
      system,
      memory,
      cpu
    }
  } catch (error) {
    return error
  }
}

module.exports = { fetchSystemInfo }