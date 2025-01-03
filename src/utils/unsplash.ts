const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = "https://api.unsplash.com";

export async function searchImages(query: string) {
  const response = await fetch(
    `${UNSPLASH_API_URL}/search/photos?query=${encodeURIComponent(
      query
    )}&per_page=20`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.results;
}
