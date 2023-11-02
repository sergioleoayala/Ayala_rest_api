import {pool} from './database.js';

class LibroController{
	//lista de libros actuales
	async getAll (req, res) {
		try {
		const [result] = await pool.query(`SELECT * FROM libros`);
		res.json(result);
	} catch (error) {
			res.status(500).json({"Error":"Ocurrió un error al obtener los libros"});
		}
	}

	//pedir un libro desde ID o desde ISBN
	async getOne (req, res) {
    const libro = req.body;
    try {
        if (!libro || (!libro.isbn && !libro.id)) {
            throw new Error("Debes proporcionar ISBN o ID para buscar un libro.");
        }

        let query;
        let queryParams;

        if (libro.isbn) {
            query = `SELECT * FROM Libros WHERE isbn = ?`;
            queryParams = [libro.isbn];
        } else {
            query = `SELECT * FROM Libros WHERE id = ?`;
            queryParams = [libro.id];
        }

        const [result] = await pool.query(query, queryParams);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
	//agregar libro nuevo libro
	async add (req, res) {
		try {
		const libro = req.body;
		const [result] = await pool.query(`INSERT INTO libros (nombre, autor, categoria, año_publicación, isbn) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicación, libro.isbn])
		res.json({"Libro insertado": result.insertId});
	} catch (error) {
			res.status(500).json({"Error":"Ocurrió un error al intentar agregar un libro"});
		}
	}

//borrar libro desde ISBN o ID
async delete (req, res) {
    const libro = req.body;
    try {
        if (!libro || (!libro.isbn && !libro.id)) {
            throw new Error("Debes proporcionar ISBN o ID para eliminar un libro.");
        }

        let query;
        let queryParams;

        if (libro.isbn) {
            query = `DELETE FROM Libros WHERE isbn =(?)`;
            queryParams = [libro.isbn];
        } else {
            query = `DELETE FROM Libros WHERE id =(?)`;
            queryParams = [libro.id];
        }

        const [result] = await pool.query(query, queryParams);
        res.json({ "Registro eliminado": result.affectedRows });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
	//Actualizar dato de un libro
	async update(req, res){
        try {
        const libro = req.body;
        const [result] = await pool.query("UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicación=(?), isbn=(?) WHERE isbn=(?)", [libro.nombre, libro.autor, libro.categoria, libro.año_publicación, libro.isbn]);
        if (result.affectedRows > 0) {
        res.json({"Libro con ISBN actualizado exitosamente": result.affectedRows });
    } else {
        res.status(404).json({"Error": "No se encontró ningun libro con el ISBN ${libro.ISBN}" });
    }
    } catch (error) {
        res.status(500).json({"Error": "Ocurrió un error al actualizar el libro" });
    }
    }
}

export const libro = new LibroController();


