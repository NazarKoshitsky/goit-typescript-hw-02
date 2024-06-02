import { useEffect, useState } from "react";
import { fetchPhotos } from "../../photos-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";

export default function App() {
  const [photos, setPhotos] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<string>("");

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  function openModal(fullImg: string): void {
    setIsOpen(true);
    setModalImg(fullImg);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getPhotos(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const data: Array<Object> = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        window.scrollBy({
          top: 460 * 2,
          behavior: "smooth",
        });
      }
    }

    getPhotos();
  }, [page, query]);
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && (
        <ImageGallery items={photos} onOpenModal={openModal} />
      )}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        modalImg={modalImg}
      />
    </div>
  );
}