function search(arg) {
    const URLS = {
      "google": "https://www.google.com.br/search?q=",
      "wikipedia": "https://pt.wikipedia.org/w/index.php?search=",
      "wiktionary": "https://www.wiktionary.org/wiki/",
      "stackoverflow": "https://stackoverflow.com/search?q=",
      "youtube": "https://www.youtube.com/results?search_query="
    }

    const query = document.getElementById("search-box").value;

    if (query)
      window.open(URLS[arg] + (arg == "google" || arg == "youtube" ? query.replaceAll(" ", "+") : query));
}