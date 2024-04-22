document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
    
    document.getElementById('refreshBtn').addEventListener('click', function() {
      fetchNews();
    });
  });
  
  function fetchNews() {
    // Simulating fetching news data
    const newsData = [
      { headline: 'Sample Headline 1', summary: 'This is a sample summary for article 1.', link: 'https://example.com/article1' },
      { headline: 'Sample Headline 2', summary: 'This is a sample summary for article 2.', link: 'https://example.com/article2' },
      { headline: 'Sample Headline 3', summary: 'This is a sample summary for article 3.', link: 'https://example.com/article3' },
    ];
  
    displayNews(newsData);
  }
  
  function displayNews(newsData) {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';
  
    newsData.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
  
      const headlineElement = document.createElement('h2');
      headlineElement.textContent = article.headline;
      headlineElement.classList.add('headline');
  
      const summaryElement = document.createElement('p');
      summaryElement.textContent = article.summary;
      summaryElement.classList.add('summary');
  
      const linkElement = document.createElement('a');
      linkElement.textContent = 'Read more';
      linkElement.href = article.link;
      linkElement.target = '_blank';
      linkElement.classList.add('link');
  
      articleElement.appendChild(headlineElement);
      articleElement.appendChild(summaryElement);
      articleElement.appendChild(linkElement);
  
      newsList.appendChild(articleElement);
    });
  }
  