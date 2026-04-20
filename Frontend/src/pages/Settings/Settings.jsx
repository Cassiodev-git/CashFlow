import { useEffect, useState } from "react";
import "./Settings.css";

const Settings = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [showChart, setShowChart] = useState(true);
    const [currency, setCurrency] = useState("BRL");
    const [dateFormat, setDateFormat] = useState("BR");
    const [showBalance, setShowBalance] = useState(true);
    const [roundValues, setRoundValues] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("settings"));

        if (saved) {
            setDarkMode(saved.darkMode ?? false);
            setShowChart(saved.showChart ?? true);
            setCurrency(saved.currency ?? "BRL");
            setDateFormat(saved.dateFormat ?? "BR");
            setShowBalance(saved.showBalance ?? true);
            setRoundValues(saved.roundValues ?? false);
        }

        document.body.classList.toggle("dark", saved?.darkMode);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
    }, [darkMode]);

    const handleSave = () => {
        const data = {
            darkMode,
            showChart,
            currency,
            dateFormat,
            showBalance,
            roundValues
        };

        localStorage.setItem("settings", JSON.stringify(data));
    };

    return (
        <div className="settings-container">

            <h1>Preferências</h1>

            <div className="settings-card">

                <h2>Interface</h2>

                <div className="setting-item">
                    <label>Modo escuro</label>
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                </div>

                <div className="setting-item">
                    <label>Mostrar gráfico</label>
                    <input
                        type="checkbox"
                        checked={showChart}
                        onChange={() => setShowChart(!showChart)}
                    />
                </div>

                <div className="setting-item">
                    <label>Mostrar saldo na dashboard</label>
                    <input
                        type="checkbox"
                        checked={showBalance}
                        onChange={() => setShowBalance(!showBalance)}
                    />
                </div>

            </div>

            <div className="settings-card">

                <h2>Formatação</h2>

                <div className="setting-item">
                    <label>Moeda</label>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="BRL">Real (R$)</option>
                        <option value="USD">Dólar ($)</option>
                    </select>
                </div>

                <div className="setting-item">
                    <label>Formato de data</label>
                    <select
                        value={dateFormat}
                        onChange={(e) => setDateFormat(e.target.value)}
                    >
                        <option value="BR">DD/MM/YYYY</option>
                        <option value="US">MM/DD/YYYY</option>
                    </select>
                </div>

                <div className="setting-item">
                    <label>Arredondar valores</label>
                    <input
                        type="checkbox"
                        checked={roundValues}
                        onChange={() => setRoundValues(!roundValues)}
                    />
                </div>

            </div>

            <button className="btn-save" onClick={handleSave}>
                Salvar alterações
            </button>

        </div>
    );
};

export default Settings;