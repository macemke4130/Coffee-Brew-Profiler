CREATE SCHEMA `brewprofiler`;

create user 'brewprofiler_user'@'localhost' identified by 'root';
GRANT ALL ON brewprofiler.* TO 'brewprofiler_user'@'localhost';

USE brewprofiler;

create table roles (
	id int primary key auto_increment not null,
    name varchar(32) not null
);
insert into roles (name) values
("Admin"), ("Guest");

create table baristas (
	id int primary key auto_increment not null,
    is_active bool default true,
    role int default 2,
		foreign key (role) references roles (id),
    username varchar(64) unique not null,
    email varchar(64) unique not null,
    password varchar(64) not null,
    _created timestamp default now()
);
select * from baristas;
update baristas set bloom = 45 where id = 1;
alter table baristas add bloom int after email;

drop table brewmethods;
create table brewmethods (
	id int primary key auto_increment not null,
    name varchar(32) not null
);
insert into brewmethods (name) values
("Chemex"), ("Hario V60"), ("Kona"), ("Aero-Press"),
("French Press"), ("Kalita Wave"), ("Clever");

create table brands (
	id int primary key auto_increment not null,
    name varchar(64) not null
);
insert into brands (name) values
("Hyperion Coffee Company"), ("Peace Coffee Company"), ("Anodyne Coffee Company");

create table grinders (
	id int primary key auto_increment not null,
    name varchar(64) not null
);
insert into grinders (name) values
("Baratza Encore"), ("Baratza Virtuoso+"), ("Baratza Sette 30"),
("Baratza Sette 270"), ("Baratza Vario"), ("Baratza Vario-W"), ("Baratza Forte AP");

create table processes (
	id int primary key auto_increment not null,
    name varchar(64) not null
);
insert into processes (name) values
("Washed / Wet"), ("Natural / Dry"), ("Honey");
insert into processes (name) values ("None");

create table brewphotos (
	id int primary key auto_increment not null,
    url varchar(1000) not null
);

drop table coffeebags;
create table coffeebags (
	id int primary key auto_increment not null,
    is_active bool default true,
    barista int not null,
		foreign key (barista) references baristas (id),
	brand int not null,
		foreign key (brand) references brands (id),
    name varchar(64) not null,
    region varchar(64),
    elevationabovesealevelinmeters int,
    breed varchar(64),
    process int default 4,
		foreign key (process) references processes (id),
    blend bool
);

select coffeebags.name as coffeename, coffeebags.region, coffeebags.elevationabovesealevelinmeters as elevation, coffeebags.breed, coffeebags.blend, brands.name as brand, processes.name as process from coffeebags join brands on brands.id = coffeebags.brand join processes on processes.id = coffeebags.process;
select coffeebags.id, coffeebags.name as coffeename, coffeebags.region, coffeebags.elevationabovesealevelinmeters as elevation, coffeebags.breed, coffeebags.blend, coffeebags.barista as baristaid, brands.name as brand, processes.name as process from coffeebags join brands on brands.id = coffeebags.brand join processes on processes.id = coffeebags.process where coffeebags.id = 6;
select brands.name, coffeebags.name, coffeebags.id from coffeebags join brands on brands.id = coffeebags.brand where barista = 1;

create table tastingnotes (
	id int primary key auto_increment not null,
    notes varchar(10000)
);
drop table brews;
create table brews (
	id int primary key auto_increment not null,
    is_active bool default true,
    _createdat timestamp default now(),
    barista int not null,
		foreign key (barista) references baristas (id),
	brewmethod int not null,
		foreign key (brewmethod) references brewmethods (id),
    coffeebag int not null,
		foreign key (coffeebag) references coffeebags (id),
	roasteddate date,
    grinder int,
		foreign key (grinder) references grinders (id),
	grindsize tinyint(1),
    gramspregrind decimal(5, 2),
    gramspostgrind decimal(5, 2),
    watertempprebrew decimal(5, 2),
    watertemppostbrew decimal(5, 2),
    bloomtimeinsec int,
    bloomweight decimal(5, 2),
    brewtimeinsec int,
    brewweight decimal(5, 2),
    tastingnote int,
		foreign key (tastingnote) references tastingnotes (id),
	brewphoto int,
		foreign key (brewphoto) references brewphotos (id)
);