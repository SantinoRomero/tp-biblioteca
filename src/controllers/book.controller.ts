import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { Book } from '../models/book.model';
import { sendSuccess, sendError } from '../utils/response.util';

export const getAllBooks = async (_req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.find();
    sendSuccess(res, 200, 'Lista de libros obtenida correctamente', books);
  } catch (error) {
    sendError(res, 500, 'Error interno al obtener los libros', error);
  }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      sendError(res, 400, 'El ID proporcionado no tiene un formato válido de MongoDB');
      return;
    }

    const book = await Book.findById(id);
    if (!book) {
      sendError(res, 404, 'Libro no encontrado');
      return;
    }

    sendSuccess(res, 200, 'Libro obtenido correctamente', book);
  } catch (error) {
    sendError(res, 500, 'Error interno al buscar el libro', error);
  }
};

export const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, author, publishedYear, genre, available } = req.body;

    if (!title || !author) {
      sendError(res, 400, 'Los campos title y author son obligatorios');
      return;
    }

    const newBook = new Book({
      title,
      author,
      publishedYear,
      genre,
      available
    });

    const savedBook = await newBook.save();
    sendSuccess(res, 201, 'Libro creado exitosamente', savedBook);
  } catch (error: any) {
    if (error.code === 11000) {
      sendError(res, 409, 'Ya existe un libro registrado con ese título');
      return;
    }
    sendError(res, 400, 'Error al crear el libro', error);
  }
};export const updateBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      sendError(res, 400, 'El ID proporcionado no tiene un formato válido de MongoDB');
      return;
    }

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedBook) {
      sendError(res, 404, 'Libro no encontrado para actualizar');
      return;
    }

    sendSuccess(res, 200, 'Libro actualizado correctamente', updatedBook);
  } catch (error: any) {
    if (error.code === 11000) {
      sendError(res, 409, 'Ya existe otro libro con ese título');
      return;
    }
    sendError(res, 400, 'Error al actualizar el libro', error);
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      sendError(res, 400, 'El ID proporcionado no tiene un formato válido de MongoDB');
      return;
    }

    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      sendError(res, 404, 'Libro no encontrado para eliminar');
      return;
    }

    sendSuccess(res, 200, 'Libro eliminado correctamente', deletedBook);
  } catch (error) {
    sendError(res, 500, 'Error interno al eliminar el libro', error);
  }
};