import {pool} from './database.js';

class LibroController{

	async getAll (req, res) {
		const [result] = await pool.query('SELECT * FROM libros');
		res.json(result);

	}
	async getOne (req, res) {
  		const libroId = req.params.id;
  		const [result] = await pool.query('SELECT * FROM libros WHERE id = ?', [libroId]);
  
  			if (result.length === 0) {
    		res.status(404).json({ message: 'Libro no encontrado' });
  			} else {
    	res.json(result[0]);
  		}
	}
	async add (req, res) {
		const libro = req.body;
		const [result] = await pool.query(`INSERT INTO libros (nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN])
		res.json({"Id insertado": result.insertId});
	}


	async delete (req, res){
		const libro = req.body;
		const [result] = await pool.query (`DELETE FROM libros WHERE id=(?)`, [libro.id]);
		res.json({"Registros eliminados": result.affectedRows});
	}   

	async update (req, res){
		const libro = req.body;
		const [result] = await pool.query (`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]);
		res.json({"Registros actualizados": result.changedRows});
	}
}

export const libro = new LibroController();