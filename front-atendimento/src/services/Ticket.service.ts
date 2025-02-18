import axios from 'axios';

enum Urls {
	BASE_URL_HTTPS = 'https://fakestoreapi.com/',
	BASE_URL_HTTP = 'http://localhost:8080/'
}

export const ApiHttps = axios.create({
	baseURL: Urls.BASE_URL_HTTPS,
});

export const ApiHttp = axios.create({
	baseURL: Urls.BASE_URL_HTTP,
});
export interface Ticket {
	id: number, 
	bookingCode: string,
	title: string,
	status: string
}

export const getAllTickets = async (): Promise<any> => {
	try {
		const response = await ApiHttp.get('tickets');
		return {success: true, response: response.data};
	} catch (error) {
		console.log(error);
		return {success: false, error: error};
	}

	//mock enquanto nao tem a API pra buscar informação
    // return new Promise((resolve, reject)=> {
		// 	try {
		// 		const tickets = [
		// 			{ id: 1, bookingCode: "2025ABAUE", title: "Problema com Wi-Fi", status: "Aberto" },
		// 			{ id: 2, bookingCode: "2025YNBRB", title: "Ar-condicionado não funciona", status: "Em andamento" },
		// 			{ id: 3, bookingCode: "2025ABAUE", title: "Problema com Wi-Fi", status: "Novo" },
		// 		];
		// 		resolve(tickets);
		// 	} catch (error) {
		// 		reject(error);
		// 	}
    // });
}