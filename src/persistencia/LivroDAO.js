const sqlite3 = require('sqlite3');

export class LivroDAO {
    iniciarBanco() {
        let db

        try {
            db = new sqlite3.Database('./meuBanco.db');
        } catch (e) {
            console.error(e)
        }

        return db;
    }

    create(livro){
        const db = this.iniciarBanco();

        try {
            db.run(`insert into livro values (?, ?, ?)`, [livro.id, livro.titulo, livro.ano])
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }

    readAll() {
        const db = this.iniciarBanco();

        try {
            db.run(`select * from livro`)
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }

    addAutorToLivro(id_autor, id_livro) {
        const db = this.iniciarBanco();

        try {
            db.run(`insert into autorLivro values (?, ?)`, [id_autor, id_livro])
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }

    delete(id) {
        const db = this.iniciarBanco();

        try {
            db.run(`delete from livro where id = ?`, id)
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }

    join() {
        const db = this.iniciarBanco();

        try {
            db.run(`select l.titulo, a.nome 
                from livro l 
                inner join autorLivro al on (al.id_livro = l.id) 
                inner join autor a on (al.id_autor = a.id)`)
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }
}