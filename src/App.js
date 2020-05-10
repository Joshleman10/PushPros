import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import DataTable from './components/table'

function App() {
  return (
    <Container>
      <div className="App">
        <DataTable></DataTable>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </Container>
  );
}

export default App;
