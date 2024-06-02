import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type Item = {
  id: string;
  alt_description: string;
  urls: { small: string; regular: string };
};

export default function ImageGallery({
  items,
  onOpenModal,
}: {
  items: Item[];
  onOpenModal: Function;
}) {
  return (
    <ul className={css.list}>
      {items.map((item: Item) => (
        <li key={item.id}>
          <ImageCard data={item} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}