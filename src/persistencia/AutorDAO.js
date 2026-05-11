export class AutorDAO {
    iniciarBanco() {
        let db

        try {
            db = new sqlite3.Database('./meuBanco.db');
        } catch (e) {
            console.error(e)
        }

        return db;
    }

    create(autor){
        const db = this.iniciarBanco();

        try {
            db.run(`insert into autor values (?, ?, ?)`, [autor.id, autor.nome, autor.nacionalidade])
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }

    readAll() {
        const db = this.iniciarBanco();

        try {
            db.run(`select * from autor`)
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }

    delete(id) {
        const db = this.iniciarBanco();

        try {
            db.run(`delete from autor where id = ?`, id)
        } catch (e) {
            console.error(e)
        } finally {
            db.close;
        }
    }
}
