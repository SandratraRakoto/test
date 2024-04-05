import { ChangeEvent, MouseEventHandler, useState } from "react";

type ArticleFormProps = {
  onAddArticle: (title: string, content: string) => void;
};

export const ArticleForm = (props: ArticleFormProps) => {
  const { onAddArticle } = props;

  const [article, setArticle] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitArticle: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onAddArticle(article.title, article.content);

    setArticle({
      title: "",
      content: "",
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={article.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="content">Contenu</label>
        <textarea
          id="content"
          name="content"
          value={article.content}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" onClick={handleSubmitArticle}>
        Valider
      </button>
    </form>
  );
};
