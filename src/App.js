//CSS style and theme
import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';

//Router
import { Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import ScrollToTop from './components/ScrollToTop';

//Pages
import CardCountries from './pages/CardCountries';
import Country from './pages/Country';

//Custom hooks
import useLocalStorage from './hooks/useLocalStorage';



function App() {
	const [theme, setTheme] = useLocalStorage('theme', 'dark'),
			isDarkTheme = theme === 'dark',
			toggleTheme = () => setTheme(isDarkTheme ? 'dark' : 'light');
		
	const API_URL = 'https://restcountries.com/v2/';

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header theme={theme} toggleTheme={toggleTheme} />
			<main>
				<Routes>
					<Route path="/" element={<CardCountries API_URL={API_URL} />} />
					<Route path="/:code" element={<Country API_URL={API_URL} />} />
					<Route path="/*" element={<ErrorMessage />} />
				</Routes>
			</main>
			<ScrollToTop />
		</ThemeProvider>
	);
}

export default App;