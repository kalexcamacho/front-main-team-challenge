import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import TrainingDataForm from './components/TrainingDataForm';
import TeamManager from './components/TeamManager';

function App() {
  return (
    <BrowserRouter>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Training Data Form</Button>
        <Button color="inherit" component={Link} to="/team-selection">Team Selection Form</Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Routes>
        <Route path="/" element={<TrainingDataForm />} />
        <Route path="/team-selection" element={<TeamManager />} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
