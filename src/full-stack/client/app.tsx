import React, { useState, useEffect } from "react";

type EmployeeDailyEntity = {
  id: string;
  morningEntrance: Date;
  afternoonExit: Date;
  createdAt: Date;
};

type Daily = {
  id: string;
  day: string;
  morningEntrance: Date;
  afternoonExit: Date;
  employeeDaily: EmployeeDailyEntity;
};

// Função utilitária para formatar o horário
const formatTime = (date: Date | string) => {
  if (!date) {
    return "-";
  }

  if (typeof date === "string") {
    date = new Date(date);
  }

  return date.getHours() + ":" + date.getMinutes();
}


const App: React.FC = () => {
  const [dailies, setDailies] = useState<Daily[]>([]);
  const [selectedDaily, setSelectedDaily] = useState<Daily | null>(null);

  // Busca a lista de dias da semana (implementar no backend)
  useEffect(() => {
    fetch("http://localhost:3333/dailies")
      .then((response) => response.json())
      .then((data) => setDailies(data))
      .catch((error) => console.error("Erro ao buscar dailies:", error));
  }, []);

  const getDaily = async (id: string) => {
    // Buscar dados do dia selecionado (GET /dailies/:id)
  }

  const saveDaily = async (id: string, data: Daily) => {
    // Salvar dados do dia selecionado (PATCH /dailies/:id)
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Sistema de Controle de Horas</h1>

      <h2>Selecione um dia da semana:</h2>
      <div style={{ marginBottom: "20px" }}>
        {dailies.map((daily) => (
          <button
            key={daily.id}
            onClick={() => getDaily(daily.id)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              border: "1px solid #ccc",
              backgroundColor:
                selectedDaily?.id === daily.id ? "#007bff" : "#f8f9fa",
              color: selectedDaily?.id === daily.id ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {daily.day}
          </button>
        ))}
      </div>

      <div>
        <h3>
          {selectedDaily
            ? `Dados de ${selectedDaily.day}`
            : "Nenhum dia selecionado..."}
        </h3>
      </div>

      {selectedDaily && (
        <div style={{ marginBottom: "20px" }}>
          <div>
            <p>Expediente: {formatTime(selectedDaily.morningEntrance)} às {formatTime(selectedDaily.afternoonExit)}</p>
          </div>

          {/* Preencha os inputs com os dados do dia selecionado se houver */}
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="morningEntrance">Entrada: </label>
            <input
              required
              id="morningEntrance"
              type="time"
              style={{ padding: "5px", marginLeft: "10px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="afternoonExit">Saída: </label>
            <input
              required
              id="afternoonExit"
              type="time"
              style={{ padding: "5px", marginLeft: "10px" }}
            />
          </div>

          <button
            onClick={() => saveDaily(selectedDaily.id, selectedDaily)}
            style={{
              color: "white",
              cursor: "pointer",
              border: "1px solid #ccc",
              padding: "10px 15px",
              fontWeight: "bold",
              backgroundColor: "#007bff",
            }}
          >
            Salvar
          </button>
        </div>
      )}

      {selectedDaily && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "4px",
            backgroundColor: "#f8f9fa",
          }}
        >
          {/* Implementar o valor do cálculo de horas (afternoonExit - morningEntrance) */}
          <h3>Total de horas: {0} horas</h3>
        </div>
      )}
    </div>
  );
};

export default App;
