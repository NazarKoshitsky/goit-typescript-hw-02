import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void;
}
const notify = () => toast.error("Please fill in the field!");

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <header className={css.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values: { query: string }, actions) => {
          if (values.query == "") {
            notify();
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <Field
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.button} type="submit">
              <IoIosSearch />
            </button>
          </div>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;