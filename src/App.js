import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'
import TopBar from './components/TopBar'
import './App.css'



const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<TopBar />}/>
        <Route  path='/products' element={<TopBar />}/>
        <Route  path='/products/new' element={<TopBar />}/>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
