import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import "./graph.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({ entries = 0, said = 0 }) => {
    const data = {
        labels: ["Entrada", "Saída"],
        datasets: [
            {
                data: [entries || 0, said || 0],
                backgroundColor: ["#4CAF50", "#F44336"],
                borderWidth: 1,
            },
        ],
    };
    const [showChart, setShowChart] = useState(true);

    return (
        <div className="grafico-card">
            <div className="grafico-header">
                <h2>Resumo</h2>
                <button className="toggle-btn" onClick={() => setShowChart(!showChart)}>
                    {showChart ? "Ocultar" : "Mostrar"}
                </button>
            </div>

            <div className={`grafico-wrapper ${showChart ? "" : "hidden"}`}>
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
