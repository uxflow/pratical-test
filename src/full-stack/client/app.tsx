import React from 'react';

type Item = {
  id: string;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Tarefas</h1>
      <input placeholder="Nova tarefa" />
      <button type='button'>Adicionar</button>
    </div>
  );
};

export default App;
