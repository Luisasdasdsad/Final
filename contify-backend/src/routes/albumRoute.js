import { addAlbum, listAlbum, removeAlbum, playAlbum } from "../controllers/albumController.js";
import express from "express";
import upload from "../middleware/multer.js";

const albumRouter = express.Router();

albumRouter.post('/add', upload.single('image'), addAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.delete('/remove/:id', removeAlbum);
albumRouter.get('/play/:id', playAlbum); // Nueva ruta para reproducir el álbum

export default albumRouter;