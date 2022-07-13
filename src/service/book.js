import api from "../config/api";

const BookService = {
  getBooks: () => api.get("/libros"),
};
export default BookService;
