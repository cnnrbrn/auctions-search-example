import { listingsUrl } from "../../constants/api.js";

export async function search(tag) {
	const url = `${listingsUrl}?_tag=${tag}`;

	const response = await fetch(url);

	if (response.ok) {
		const json = await response.json();
		return json;
	}

	throw new Error("Search failed");
}
