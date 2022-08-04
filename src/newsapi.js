export const getNYArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?domains=newyorker.com&apiKey=${API_KEY}`
  );
  const json = await response.json();
  return json;
};

export const getArticles = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${API_KEY}`
  );
  const json = await response.json();
  return json;
};
