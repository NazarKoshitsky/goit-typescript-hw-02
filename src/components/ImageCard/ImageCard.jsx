import css from "./ImageCard.module.css";

export default function ImageCard({
  data: { alt_description, urls },
  onOpenModal,
}) {
  return (
    <img
      onClick={() => {
        onOpenModal(urls.regular);
      }}
      className={css.img}
      src={urls.small}
      alt={alt_description}
    />
  );
}