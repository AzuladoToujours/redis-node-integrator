import { Job } from "bull";
import axios from "axios"

const emailProcess = async (job: Job) => {
   try{
    let response = await axios.post('https://argoscolqa.myvtex.com/api/io/_v/prices', job.data,

    { 
        headers: {
            'Content-Type': 'application/json',        
            'X-VTEX-API-AppKey': 'vtexappkey-argoscolqa-NFQUXM',
            'X-VTEX-API-AppToken': 'ZGGGAKNLNPRRWFOTOVFXKLMFJFHRSFRMOEJLBSCCMHZXJYXCCQJDEXJNTBWUDWTHXFDRVCRWSCKCMPVLIFOBWOHRVVSAWHZPORZEUFGAYNKCMGBEGKMXIRLJXLVZKRZK'
        }
    }
    )

    console.log('Horita', new Date)
    console.log("Response: %s", response.data);

    return response.data;
    
   }catch(e){
       console.log(e)
       return 'error'
   }

};

export default emailProcess;