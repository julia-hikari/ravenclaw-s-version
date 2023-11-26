create database projetohp;
use projetohp;

create table casaHogwarts(
idCasa int primary key auto_increment,
nome varchar(45),
descricao varchar(100)
);

create table pontosTeste(
idTeste int primary key auto_increment,
corvinal int,
grifinoria int,
sonserina int,
lufalufa int
);

create table quizz(
idQuizz int primary key auto_increment,
nome varchar(45),
descricao varchar(45)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
usuario varchar(45),
email varchar(100),
dtNasc date,
cidade varchar(45),
uf char(2),
fkCasa int,
fkTesteCasa int,
senha varchar(25),
constraint fkCasa foreign key (fkCasa) references casaHogwarts(idCasa),
constraint fkTesteCasa foreign key (fkTesteCasa) references pontosTeste(idTeste)
);

create table pontuacaoQuizz(
idResposta int primary key auto_increment,
fkUsuario int not null,
fkQuizz int not null,
pontuacao int,
dtHora datetime,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario),
constraint fkResposta foreign key (fkQuizz) references quizz(idQuizz)
);

create table feedback(
idFeedback int primary key auto_increment,
fkUsuario int,
fkQuizz int,
nota int,
dtFeedback datetime,
constraint fkUsuarioFeed foreign key (fkUsuario) references usuario(idUsuario),
constraint fkQuizzFeed foreign key (fkQuizz) references quizz(idQuizz)
);