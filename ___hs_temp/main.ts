// HTTP Request - Fetch - LFZ Proxy Cors Server:
async function fetchData(): Promise<void> {
  // const targetUrl = encodeURIComponent('http://api.no-cors.com/data?foo=bar');
  const targetUrl = encodeURIComponent(
    'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines'
  );
  try {
    const response = await fetch(
      'https://cors.learningfuze.com/?url=' + targetUrl
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
