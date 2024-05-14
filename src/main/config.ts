
import fs from 'fs';
import { useLogger } from './logs';
const { log } = useLogger();

let config: any = {}
try {
  const data = fs.readFileSync('C:\\config\\config.json');
  const json = data.toString('utf8');
  config = JSON.parse(json);

  // console.log(settings)
} catch (e) {

  config = {
    "branchUuid": "",
    "deviceUuid": "638686c23c34de71326f9fd6",
    "timer_Network": 40000,
    "health_check": 'https://fluyapp.com/devices/health-check'
  }
  log("Error al leer el archivo de configuración")
  log(JSON.stringify(e))

}

export default config; 