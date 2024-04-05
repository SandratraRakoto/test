"use client";

import { Article } from "@/components/article/article";
import { ArticleForm } from "@/components/articleForm";
import { useState } from "react";

const PageHome = () => {
  const [articles, setArticles] = useState(ListOfArticles);

  const handleAddArticle = (title: string, content: string) => {
    setArticles([
      ...articles,
      {
        id: Math.random(),
        content: content,
        title: title,
        likes: 0,
      },
    ]);
  };

  const handleRemoveArticle = (id: number) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-semibold italic">Hello</h1>

      {articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          content={article.content}
          author={article.author}
          likes={article.likes}
          onRemoveArticle={handleRemoveArticle}
        />
      ))}

      <ArticleForm onAddArticle={handleAddArticle} />
    </div>
  );
};

export default PageHome;

const ListOfArticles = [
  {
    id: 1,
    title: "Hello",
    content: "Contenu",
    author: "Sandratra",
    likes: 5,
  },
  { id: 2, title: "Bonjour", content: "Bonjour tout le monde", likes: 10 },
  {
    id: 3,
    title: "Kzy",
    content: "Bonjour tout le monde",
    author: "Fanasina",
    likes: 100,
  },
];
