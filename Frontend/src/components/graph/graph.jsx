import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./graph.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = () => {
  //converter para dinamico
    const data = {
        labels: ["Entrada", "Saída"],
        datasets: [
        {
            data: [3650, 1100],
            backgroundColor: ["#4CAF50", "#F44336"],
            borderWidth: 1,
        },
        ],
    };

    return (
        <div className="grafico-card">
        <h2>Resumo</h2>

        <div className="grafico-wrapper">
            <Pie
            data={data}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                legend: {
                    position: "top",
                },
                },
                animation: {
                animateScale: true,
                animateRotate: true,
                },
            }}
            />
        </div>
        </div>
    );
};

export default Graph;
