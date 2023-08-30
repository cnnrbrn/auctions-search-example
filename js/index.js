import handleSearch from "./handlers/listings/handleSearch.js";

function router() {
	const path = window.location.pathname;

	handleSearch();

	switch (path) {
		case "/":
		case "/index.html":
			console.log("home page");
			break;
		case "/listing.html":
			console.log("listing page");
			break;
	}
}

router();
