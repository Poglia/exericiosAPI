create table exercicios (
codigo serial not null primary key, 
nome varchar(50) not null, 
series integer not null
repeticoes integer not null);

-- inserir alguns registros
insert into exercicios (nome, series, repeticoes) values ('Supino' , 3, 15) , 
('Leg Press', 3, 20), ('Agachamento', 4, 10);
