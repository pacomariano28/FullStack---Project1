import { useState } from 'react';
import '../styles/App.css';
import Intro from './intro';
import Pokemon from './pokemon';
import Form from './form';
import axios from 'axios';
import Login from './login'; // Un componente para el modal de inicio de sesión

/*
	docker-compose up -d
	docker exec -it vite_docker
	npm run dev
*/

const App = () => {
	/* const [token, setToken] = useState(null);
	const [showModal, setShowModal] = useState(true); // Mostrar el modal al inicio

	const handleLogin = async (username, password) => {
		try {
			const response = await axios.post('https://api.intra.42.fr/v2/auth', {
				grant_type: 'password', // Usar el flujo de contraseña
				client_id: 'u-s4t2ud-8432c3b9831b148e771f1915058b797a094b62d66f4638912b8b809ea3a7f944', // Reemplaza con tu Client ID
				client_secret: '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', // Reemplaza con tu Client Secret
				username,
				password,
			});
			const accessToken = response.data.access_token; // Asegúrate de que el token está en esta ubicación
			setToken(accessToken);
			setShowModal(false); // Ocultar el modal al iniciar sesión
		} catch (error) {
			console.error('Error during login:', error);
			alert('Login failed: ' + (error.response?.data?.message || 'Unknown error')); // Manejo básico de errores
		}
	}; */
	
	const [inputValue, setInputValue] = useState('');
	return (
		<>
			{/* {showModal && <Login onLogin={handleLogin} />} {/* Mostrar modal */}
			{/* <Intro /> */}
            <Pokemon inputValue={inputValue} />
            <Form setInputValue={setInputValue} />
		</>
	);
};

export default App;
