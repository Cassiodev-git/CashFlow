import { useEffect } from "react";
import { useSettings } from "../../contexts/SettingsContext";
import "./Settings.css";

const Settings = () => {
    const { settings, setSettings } = useSettings();

    useEffect(() => {
        document.body.classList.toggle("dark", settings.darkMode);
    }, [settings.darkMode]);

    const handleSave = () => {
        setSettings(settings);
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
                        checked={settings.darkMode}
                        onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
                    />
                </div>

                <div className="setting-item">
                    <label>Mostrar gráfico</label>
                    <input
                        type="checkbox"
                        checked={settings.showChart}
                        onChange={(e) => setSettings({ ...settings, showChart: e.target.checked })}
                    />
                </div>

                <div className="setting-item">
                    <label>Mostrar saldo na dashboard</label>
                    <input
                        type="checkbox"
                        checked={settings.showBalance}
                        onChange={(e) => setSettings({ ...settings, showBalance: e.target.checked })}
                    />
                </div>

            </div>

            <div className="settings-card">

                <h2>Formatação</h2>

                <div className="setting-item">
                    <label>Moeda</label>
                    <select
                        value={settings.currency}
                        onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                    >
                        <option value="BRL">Real (R$)</option>
                        <option value="USD">Dólar ($)</option>
                    </select>
                </div>

                <div className="setting-item">
                    <label>Formato de data</label>
                    <select
                        value={settings.dateFormat}
                        onChange={(e) => setSettings({ ...settings, dateFormat: e.target.value })}
                    >
                        <option value="BR">DD/MM/YYYY</option>
                        <option value="US">MM/DD/YYYY</option>
                    </select>
                </div>

                <div className="setting-item">
                    <label>Arredondar valores</label>
                    <input
                        type="checkbox"
                        checked={settings.roundValues}
                        onChange={(e) => setSettings({ ...settings, roundValues: e.target.checked })}
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