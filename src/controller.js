import {pool} from './database.js';

class LibroController{

	async getAll (req, res) {
		const [result] = await pool.query(`SELECT * FROM libros`);
		res.json(result);

	}
	async getOne (req, res) {
		try {
  		const libro=req.body;
  		const id_libro=parseInt(libro.id);
  		const [result] = await pool.query(`SELECT * FROM libros WHERE id=(?)`, [id_libro]);
   			if (result[0]!=undefined){
    		res.json(result);
    		} else {
    		res.json({"Error":"No se ha encontrado el libro solicitado con el Id indicado"});
    	}
    	} catch(e){
    		console.log(e);
    	}
			try {
  		const libro=req.body;
  		const isbn_libro=parseInt(libro.isbn);
  		const [result] = await pool.query(`SELECT * FROM libros WHERE isbn=(?)`, [isbn_libro]);
   			if (result[0]!=undefined){
    		res.json(result);
    		} else {
    		res.json({"Error":"No se ha encontrado el libro solicitado con el ISBN indicado"});
    	}
    	} catch(e){
    		console.log(e);
    	}

	}

	async add (req, res) {
		const libro = req.body;
		const [result] = await pool.query(`INSERT INTO libros (nombre, autor, categoria, año_publicación, isbn) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicación, libro.isbn])
		res.json({"Id insertado": result.insertId});
	}


	async delete (req, res){
		const libro = req.body;
		const [result] = await pool.query (`DELETE FROM libros WHERE isbn=(?)`, [libro.isbn]);
		res.json({"Registros eliminados": result.affectedRows});
}
	
	async update (req, res){
		const libro = req.body;
		const [result] = await pool.query (`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicación=(?), isbn=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicación, libro.isbn, libro.id]);
		res.json({"Registros actualizados": result.changedRows});
	}
}

export const libro = new LibroController();


