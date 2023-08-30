import { search } from "../../api/listings/search.js";
import displaySearchResults from "../../ui/listings/displaySearchResults.js";
import hideSearchResults from "../../ui/listings/hideSearchResults.js";
import displaySearchError from "../../ui/listings/displaySearchError.js";
import debounce from "../../helpers/debounce.js";

export default function handleSearch() {
	const input = document.querySelector("#search");

	input.addEventListener("input", debouncedSearch);
}

const debouncedSearch = debounce(doSearch, 500);

async function doSearch(event) {
	const tag = event.target.value.trim();

	if (tag.length < 3) {
		return hideSearchResults();
	}

	try {
		const results = await search(tag);
		console.log(results);
		displaySearchResults(results);
	} catch (err) {
		console.log(err);
		displaySearchError();
	}
}
