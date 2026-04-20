import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("settings");

        if (saved) {
            return JSON.parse(saved);
        }

        return {
            darkMode: false,
            showChart: true
        };
    });

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings));
        document.body.classList.toggle("dark", settings.darkMode);
    }, [settings]);

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    return useContext(SettingsContext);
};