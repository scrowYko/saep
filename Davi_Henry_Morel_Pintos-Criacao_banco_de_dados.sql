create table usuario(
	id_usuario serial primary key,
	email varchar(255) not null,
	nome varchar(255) not null
);

create table tarefa(
	id_tarefa serial primary key,
	id_usuario int not null,
	setor varchar(255) not null,
	prioridade varchar(5) not null,
	data_cadastro date not null,
	status varchar(7) not null default 'a fazer',
	descricao varchar(255) not null,
	
	foreign key(id_usuario) references usuario(id_usuario)
)