import { component$ } from "@builder.io/qwik";
import LineChart from "~/components/landing/LineChart";
import { Data } from "~/utils/Data";

export default component$(() => {
    // const [chartData, setChartData] = useState({
    //   labels: Data.map((data) => data.year), 
    //   datasets: [
    //     {
    //       label: "Users Gained ",
    //       data: Data.map((data) => data.userGain),
    //       backgroundColor: [
    //         "rgba(75,192,192,1)",
    //         &quot;#ecf0f1",
    //         "#50AF95",
    //         "#f3ba2f",
    //         "#2a71d0"
    //       ],
    //       borderColor: "black",
    //       borderWidth: 2
    //     }
    //   ]
    // });

    const dataEbook = {
        type: 'line',
        data: {
            labels: Data.map((data) => data.month),
            datasets: [
                {
                    label: "Kunjungan Ebook (Per 2022)",
                    data: Data.map((data) => data.ebook),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }

    const dataWeb = {
        type: 'line',
        data: {
            labels: Data.map((data) => data.month),
            datasets: [
                {
                    label: "Kunjungan Website (Per 2022)",
                    data: Data.map((data) => data.web),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }

    return <div>
        <section class="my-10 container mx-auto">
            <div class="mb-10">
                <h1 class="text-center font-bold">Laporan Kunjungan Web Ebook</h1>
                <LineChart data={dataEbook} />
            </div>
            <div class="mb-10">
                <h1 class="text-center font-bold">Laporan Kunjungan Website Perpus</h1>
                <LineChart data={dataWeb} />
            </div>
        </section>
    </div>
});