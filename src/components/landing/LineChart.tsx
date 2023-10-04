/*
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Line Chart</h2>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
}
export default LineChart;
*/

import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Chart, registerables } from 'chart.js';
// import { Data } from '~/utils/Data';

export interface Props {
    data: any
}

export const LineChart = component$<Props>((props) => {
    const myChart = useSignal<HTMLCanvasElement>();

    useVisibleTask$(() => {
        if (myChart.value) {
            Chart.register(...registerables);
            new Chart(myChart.value, props.data);
        }
    });

    return (
        <div class="flex flex-col items-center justify-center" style={{ position: "relative", height: "40vh", width: "80vw" }}>
            <canvas ref={myChart} id="myChart"></canvas>
        </div>
    );
});


export default LineChart