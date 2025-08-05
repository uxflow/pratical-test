import React, { useState, useEffect } from "react";

type Daily = {
  id: string;
  day: string;
  morningEntrance: string;
  afternoonExit: string;
};

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

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Sistema de Controle de Horas</h1>

      <h2>Selecione um dia da semana:</h2>
      <div style={{ marginBottom: "20px" }}>
        {dailies.map((daily) => (
          <button
            key={daily.id}
            onClick={() => {
              setSelectedDaily(daily);
              // Implementar a função para buscar os dados do dia
            }}
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
        <h3>{selectedDaily ? `Dados de ${selectedDaily.day}` : "Nenhum dia selecionado..."}</h3>
      </div>
    

      {selectedDaily && (
        <div style={{ marginBottom: "20px" }}>
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
          onClick={() => {
            // Implementar a função para salvar os dados do dia
          }}
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
            padding: "15px",
            border: "1px solid #ddd",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
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
