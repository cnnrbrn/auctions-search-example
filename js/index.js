import handleSearch from "./handlers/listings/handleSearch.js";
import handleHideResultsOnDocumentClick from "./handlers/listings/handleHideResultsOnDocumentClick.js";

function router() {
	const path = window.location.pathname;

	handleSearch();
	handleHideResultsOnDocumentClick();

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
