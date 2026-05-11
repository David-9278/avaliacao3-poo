const sqlite3 = require('sqlite3').verbose();


function initializeDatabase() {
   let db
   try {
       db = new sqlite3.Database('./meuBanco.db')
   }catch (err) {
       console.error('Deu ruim inicializando o BD:', err.message);
   }
   return db;
}


function criaTabelas(){
   const db = initializeDatabase();
   db.serialize(() => {
       db.run(`create table autor(
          id integer,
          nome text,
          nacionalidade integer
      )`);




      db.run(`create table livro(
          id integer,
          titulo text,
          ano integer
      )`);




      db.run(`create table autor_livro(
          id_autor integer,
          id_livro integer,

          foreign key(id_autor) references autor(id),
          foreign key(id_livro) references livro(id)
      )`);
})
}

criaTabelas();