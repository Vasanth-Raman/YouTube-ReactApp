const API_KEY = "";

export const API_URI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const AUTOCOMPLETE_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&q=";
