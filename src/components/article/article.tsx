import { useState } from "react";
import "./article.css";

type ArticleProps = {
  id: number;
  title: string;
  content: string;
  author?: string;
  likes: number;

  onRemoveArticle: (id: number) => void;
};

export const Article = (props: ArticleProps) => {
  const { id, title, content, author, likes, onRemoveArticle } = props;

  const [likeNumber, setLikeNumber] = useState(likes);

  const handleLikeClick = () => {
    setLikeNumber(likeNumber + 1);
  };

  const handleDelete = () => {
    onRemoveArticle(id);
  };

  return (
    <article className="flex space-x-2">
      <h3 className="title">{title}</h3>
      <p>{content}</p>
      {author && <p>{author}</p>}

      <button onClick={handleLikeClick}>J&apos;aime</button>
      <p>{likeNumber}</p>

      <button className="btn-jaune" onClick={handleDelete}>
        Supprimer
      </button>

      <hr />
    </article>
  );
};
