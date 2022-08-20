import axios from "axios";

class Http {
	constructor(url) {
		this.url = url;
	}

	async post(data, header = {}) {
		try {
			const { data: res, status } = !Object.keys(header).length
				? await axios.post(this.url, data)
				: await axios.post(this.url, data, header);
			return { res, status };
		} catch (error) {
			const {
				response: { data: res },
			} = error;
			return res;
		}
	}

	async get(header = {}) {
		try {
			const { data: res, status } = Object.keys(header).length
				? await axios.get(this.url, header)
				: await axios.get(this.url);
			return { res, status };
		} catch (error) {
			const {
				response: { data: res },
			} = error;
			return res;
		}
	}

	async put(data, header = {}) {
		try {
			const { data: res, status } = !Object.keys(header).length
				? await axios.put(this.url, data)
				: await axios.put(this.url, data, header);
			return { res, status };
		} catch (error) {
			const {
				response: { data: res },
			} = error;
			return res;
		}
	}

	async delete(header = {}) {
		try {
			const { data: res, status } = !Object.keys(header).length
				? await axios.delete(this.url)
				: await axios.put(this.url, {}, header);
			return { res, status };
		} catch (error) {
			const {
				response: { data: res },
			} = error;
			return res;
		}
	}
}

export default Http;
