import ConsultantSource from '../../../data/consultant-source';
import { createCardArticleTemplate } from '../templates/templates-creator';

const ArticlePage = {
  async render() {
    return `
        <section class="articles">
          <div id="article-card" class="container article-cards">
          
          </div>
        </section>
      `;
  },

  async afterRender() {
    const articles = await ConsultantSource.listArticles();
    // console.log(articles);
    const articlesContainer = document.querySelector('#article-card');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createCardArticleTemplate(article);
    });
  },
};

export default ArticlePage;
