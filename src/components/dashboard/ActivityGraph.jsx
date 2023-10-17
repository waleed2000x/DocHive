import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale, 
    PointElement, 
    Tooltip
} from 'chart.js'
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale, 
    PointElement,
    Tooltip
    )


    export default function ActivityGraph() {
        const data ={
            labels:['Mon', "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets:[{
                label:'Daily Time Use',
                data:[3, 5, 6.7, 6, 3, 2, 2],
                backgroundColor:'white',
                borderColor:'#43ff64',
                pointBorderColor:'white',
                tension:0.4
            }]
        }
        const options ={
            plugins:{
                legend: false,
            }, 
            scales:{
                y : {
                    min:0,
                    max:12
                }
            }
        }
        return (
      <Line style={{width:'100%', height:'200px'}}
      data={data}
      options={options}
      ></Line>
  )
}
