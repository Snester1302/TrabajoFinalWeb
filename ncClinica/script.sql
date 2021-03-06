CREATE DATABASE [clinica];
GO
USE [clinica]
GO
/****** Object:  Table [dbo].[cita]    Script Date: 22/11/2021 10:53:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cita](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NULL,
	[id_sucursal] [int] NULL,
	[id_especialidad] [int] NULL,
	[id_especialista] [int] NULL,
	[id_horario] [int] NULL,
	[fecha] [date] NULL,
	[condicion] [varchar](20) NULL,
	[estado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[especialidad]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[especialidad](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](255) NULL,
	[descripcion] [varchar](255) NULL,
	[estado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[especialista]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[especialista](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombres] [varchar](255) NULL,
	[apellidos] [varchar](255) NULL,
	[dni] [char](8) NULL,
	[id_especialidad] [int] NULL,
	[id_sucursal] [int] NULL,
	[estado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[horario]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[horario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_especialista] [int] NULL,
	[inicio] [varchar](100) NULL,
	[fin] [varchar](100) NULL,
	[estado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[prueba]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[prueba](
	[prueba] [date] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sucursal]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sucursal](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](255) NULL,
	[direccion] [varchar](255) NULL,
	[distrito] [varchar](255) NULL,
	[estado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_documento]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_documento](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_usuario]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombres] [varchar](255) NULL,
	[apellidos] [varchar](155) NULL,
	[email] [varchar](255) NULL,
	[id_tipo_documento] [int] NULL,
	[nro_documento] [varchar](255) NULL,
	[id_tipo_usuario] [int] NULL,
	[contrasena] [varbinary](128) NULL,
	[estado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[cita] ADD  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[especialidad] ADD  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[especialista] ADD  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[horario] ADD  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[sucursal] ADD  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[usuario] ADD  DEFAULT ((1)) FOR [estado]
GO
ALTER TABLE [dbo].[cita]  WITH CHECK ADD FOREIGN KEY([id_especialidad])
REFERENCES [dbo].[especialidad] ([id])
GO
ALTER TABLE [dbo].[cita]  WITH CHECK ADD FOREIGN KEY([id_especialista])
REFERENCES [dbo].[especialista] ([id])
GO
ALTER TABLE [dbo].[cita]  WITH CHECK ADD FOREIGN KEY([id_horario])
REFERENCES [dbo].[horario] ([id])
GO
ALTER TABLE [dbo].[cita]  WITH CHECK ADD FOREIGN KEY([id_sucursal])
REFERENCES [dbo].[sucursal] ([id])
GO
ALTER TABLE [dbo].[cita]  WITH CHECK ADD FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[especialista]  WITH CHECK ADD FOREIGN KEY([id_especialidad])
REFERENCES [dbo].[especialidad] ([id])
GO
ALTER TABLE [dbo].[especialista]  WITH CHECK ADD FOREIGN KEY([id_sucursal])
REFERENCES [dbo].[sucursal] ([id])
GO
ALTER TABLE [dbo].[horario]  WITH CHECK ADD FOREIGN KEY([id_especialista])
REFERENCES [dbo].[especialista] ([id])
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD FOREIGN KEY([id_tipo_documento])
REFERENCES [dbo].[tipo_documento] ([id])
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD FOREIGN KEY([id_tipo_usuario])
REFERENCES [dbo].[tipo_usuario] ([id])
GO
/****** Object:  StoredProcedure [dbo].[sp_cita_findAll]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_cita_findAll]
as
begin
	select * from cita where estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_cita_findById]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_cita_findById]
@id int
as
begin
	select * from cita where id=@id and estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_cita_pagination]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_cita_pagination](
@id_usuario int,
@search_text varchar(255),
@num_items int,
@page int)
as 
begin
	with resultIndex as (
		select 
        c.* ,
        s.nombre sucursal,
        ed.nombre especialidad,
        CONCAT(et.nombres,', ',et.apellidos) especialista,
        CONCAT(h.inicio,' - ',h.fin) horario,
        ROW_NUMBER() over (order by c.id)as row_index 
        from cita c join sucursal s on c.id_sucursal=s.id
        join especialidad ed on c.id_especialidad=ed.id 
        join especialista et on c.id_especialista=et.id 
        join horario h on c.id_horario=h.id 
        where (CONCAT(s.nombre,ed.nombre,et.nombres,et.apellidos,h.inicio,h.fin ,c.fecha ) like CONCAT('%',@search_text,'%') or @search_text  in ('_','')) and c.id_usuario=@id_usuario and c.estado=1)
	select * from resultIndex where row_index between (@page * @num_items)+1 and (@page * @num_items)+@num_items;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_cita_pagination_byIdUsuario]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_cita_pagination_byIdUsuario](
@id_usuario int,
@search_text varchar(255),
@num_items int,
@page int)
as 
begin
	with resultIndex as (
		select 
        c.* ,
        s.nombre sucursal,
        ed.nombre especialidad,
        CONCAT(et.nombres,', ',et.apellidos) especialista,
        CONCAT(h.inicio,' - ',h.fin) horario,
        ROW_NUMBER() over (order by c.id)as row_index 
        from cita c join sucursal s on c.id_sucursal=s.id
        join especialidad ed on c.id_especialidad=ed.id 
        join especialista et on c.id_especialista=et.id 
        join horario h on c.id_horario=h.id 
        where (CONCAT(s.nombre,ed.nombre,et.nombres,', ',et.apellidos,h.inicio,h.fin ,c.fecha ) like CONCAT('%',@search_text,'%') or @search_text  in ('_','')) and c.id_usuario=@id_usuario and c.estado=1)
	select * from resultIndex where row_index between (@page * @num_items)+1 and (@page * @num_items)+@num_items;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_cita_save]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_cita_save](
@id int,
@id_usuario int,
@id_sucursal int,
@id_especialidad int,
@id_especialista int,
@id_horario int,
@fecha varchar(255))
as 
declare @res table(ID int);
begin
	if @id=0	
		insert into cita(id_usuario,id_sucursal,id_especialidad,id_especialista,id_horario,fecha,condicion) 
		OUTPUT Inserted.ID into @res 
		values(@id_usuario,@id_sucursal,@id_especialidad,@id_especialista,@id_horario,CONVERT( date,@fecha),'ACTIVO')
	else
		update cita set id_usuario=@id_usuario,id_sucursal=@id_sucursal,id_especialidad=@id_especialidad,id_especialista=@id_especialista,id_horario=@id_horario,fecha=CONVERT( date,@fecha)
        OUTPUT Inserted.ID into @res 
		where id = @id;
	select * from cita where id=(select id from @res);
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_cita_totalPages_byIdUsuario]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_cita_totalPages_byIdUsuario](
@id_usuario int,
@search_text varchar(255),
@num_items int)
as 
begin
		select 
        ceiling(convert(float,count(*))/@num_items) as total_pages
        from cita c join sucursal s on c.id_sucursal=s.id
        join especialidad ed on c.id_especialidad=ed.id 
        join especialista et on c.id_especialista=et.id 
        join horario h on c.id_horario=h.id 
        where (CONCAT(s.nombre,ed.nombre,et.nombres,et.apellidos,h.inicio,h.fin ,c.fecha ) like CONCAT('%',@search_text,'%') or @search_text  in ('_','')) and c.id_usuario=@id_usuario and c.estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialidad_delete]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialidad_delete]
@id int
as 
begin 
	update especialidad set estado=0 where id=@id;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialidad_findAll]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialidad_findAll]
as
begin 
    select * from especialidad where estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialidad_findById]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialidad_findById]
@id int
as 
begin
select * from especialidad where id=@id;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialidad_pagination]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_especialidad_pagination](
@search_text varchar(255),
@num_items int,
@page int)
as 
begin
	with resultIndex as (
		select * ,ROW_NUMBER() over (order by id)as row_index from especialidad 
		where (CONCAT(nombre , descripcion ) like CONCAT('%',@search_text,'%') or @search_text  in ('_','')) and estado=1)
	select * from resultIndex where row_index between (@page * @num_items)+1 and (@page * @num_items)+@num_items;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialidad_save]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc [dbo].[sp_especialidad_save](
@id int,
@nombre varchar(255),
@descripcion varchar(255))
as 
declare @res table(ID int);
begin
	if @id=0	
		insert into especialidad(nombre,descripcion) 
		OUTPUT Inserted.ID into @res 
		values(@nombre,@descripcion)
	else
		update especialidad set nombre=@nombre,descripcion=@descripcion OUTPUT Inserted.ID into @res 
		where id = @id;
	select * from especialidad where id=(select id from @res);
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialidad_totalPages]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_especialidad_totalPages]
@search_text varchar(255),
@num_items int
as 
begin
	if(@num_items>0)
		select ceiling(convert(float,count(*))/@num_items) as total_pages from especialidad where CONCAT(nombre , descripcion ) like CONCAT('%',@search_text,'%') or @search_text  in ('_','');
	else
		select 0;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_delete]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialista_delete]
@id int
as 
begin 
	update especialista set estado=0 where id=@id;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_filter]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialista_filter](
@id_sucursal int,
@id_especialidad int,
@num_items int,
@page int)
as 
begin
	with resultIndex as (
		select 
		et.*,ed.nombre especialidad,s.nombre sucursal ,ROW_NUMBER() over (order by et.id)as row_index 
		from especialista et 
		join especialidad ed on et.id_especialidad=ed.id
		join sucursal s on et.id_sucursal=s.id
		where id_especialidad=@id_especialidad and id_sucursal=@id_sucursal and et.estado=1)
	select * from resultIndex where row_index between (@page * @num_items)+1 and (@page * @num_items)+@num_items;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_filter_totalPages]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialista_filter_totalPages]
@id_sucursal int,
@id_especialidad int,
@num_items int
as 
begin
	if(@num_items>0)
		select ceiling(convert(float,count(*))/@num_items) as total_pages 
		from especialista et 
		join especialidad ed on et.id_especialidad=ed.id
		join sucursal s on et.id_sucursal=s.id
		where id_especialidad=@id_especialidad and id_sucursal=@id_sucursal and et.estado=1;
	else
		select 0;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_findAll]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialista_findAll]
as 
begin
select 
	et.*,
	ed.nombre especialidad,
	s.nombre sucursal
from especialista et 
	join especialidad ed on et.id_especialidad=ed.id
	join sucursal s on et.id_sucursal=s.id
	where et.estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_findById]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_especialista_findById]
@id int
as 
begin
select * from especialista where id=@id and estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_pagination]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_especialista_pagination](
@search_text varchar(255),
@num_items int,
@page int)
as 
begin
	with resultIndex as (
		select 
		et.*,ed.nombre especialidad,s.nombre sucursal ,ROW_NUMBER() over (order by et.id)as row_index 
		from especialista et 
		join especialidad ed on et.id_especialidad=ed.id
		join sucursal s on et.id_sucursal=s.id
		where (CONCAT(nombres , apellidos, dni,ed.nombre,s.nombre) like CONCAT('%',@search_text,'%') or @search_text in ('_','')) and et.estado=1)
	select * from resultIndex where row_index between (@page * @num_items)+1 and (@page * @num_items)+@num_items;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_save]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_especialista_save](
@id int,
@nombres varchar(255),
@apellidos varchar(255),
@dni varchar(255),
@id_especialidad int,
@id_sucursal int
)
as 
declare @res table(ID int);
begin
	if @id=0	
		insert into especialista(nombres,apellidos,dni,id_especialidad,id_sucursal) 
		OUTPUT Inserted.ID into @res 
		values(@nombres,@apellidos,@dni,@id_especialidad,@id_sucursal)
	else
		update especialista set 
        nombres=@nombres,
        apellidos=@apellidos,
        dni=@dni, 
        id_especialidad=@id_especialidad,
        id_sucursal=@id_sucursal
        OUTPUT Inserted.ID into @res 
		where id = @id;
	select * from especialista where id=(select id from @res);
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_especialista_totalPages]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_especialista_totalPages]
@search_text varchar(255),
@num_items int
as 
begin
	if(@num_items>0)
		select ceiling(convert(float,count(*))/@num_items) as total_pages 
		from especialista et 
		join especialidad ed on et.id_especialidad=ed.id
		join sucursal s on et.id_sucursal=s.id
		where (CONCAT(nombres , apellidos, dni,ed.nombre,s.nombre) like CONCAT('%',@search_text,'%') or @search_text  in ('_',''))and et.estado=1;
	else
		select 0;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_horario_delete]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_horario_delete]
@id int
as 
begin 
	update horario set estado=0 where id=@id;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_horario_disponible]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_horario_disponible]
@id_especialista int,
@fecha varchar(255)
as
begin
	select * from horario h where id_especialista=@id_especialista and estado=1 and 
	(select count(*) from cita c where c.fecha=convert(date,@fecha) and c.id_horario=h.id and estado=1 and condicion='ACTIVO')=0
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_horario_findByIdEspecialista]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_horario_findByIdEspecialista]
@id_especialista int
as
begin
	select * from horario where id_especialista=@id_especialista and estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_horario_save]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_horario_save](
@id int,
@id_especialista int,
@inicio varchar(255),
@fin varchar(255))
as 
declare @res table(ID int);
begin
	if @id=0	
		insert into horario(id_especialista,inicio,fin) 
		OUTPUT Inserted.ID into @res 
		values(@id_especialista,@inicio,@fin)
	else
		update horario set 
            id_especialista=@id_especialista,
            inicio=@inicio,
            fin=@fin
         OUTPUT Inserted.ID into @res 
		where id = @id;
	select * from horario where id=(select id from @res);
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_sucursal_delete]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_sucursal_delete]
@id int
as 
begin 
	update sucursal set estado=0 where id=@id;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_sucursal_findAll]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[sp_sucursal_findAll]
as
begin
	select * from sucursal;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_sucursal_findById]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_sucursal_findById]
@id int
as 
begin
select * from sucursal where id=@id and estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_sucursal_pagination]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_sucursal_pagination](
@search_text varchar(255),
@num_items int,
@page int)
as 
begin
	with resultIndex as (
		select * ,ROW_NUMBER() over (order by id)as row_index from sucursal 
		where (CONCAT(nombre , direccion, distrito) like CONCAT('%',@search_text,'%') or @search_text in ('_',''))and estado=1)
	select * from resultIndex where row_index between (@page * @num_items)+1 and (@page * @num_items)+@num_items;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_sucursal_save]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_sucursal_save](
@id int,
@nombre varchar(255),
@direccion varchar(255),
@distrito varchar(255))
as 
declare @res table(ID int);
begin
	if @id=0	
		insert into sucursal(nombre,direccion,distrito) 
		OUTPUT Inserted.ID into @res 
		values(@nombre,@direccion,@distrito)
	else
		update sucursal set nombre=@nombre,direccion=@direccion,distrito=@distrito OUTPUT Inserted.ID into @res 
		where id = @id;

	select * from sucursal where id=(select id from @res);
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_sucursal_totalPages]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_sucursal_totalPages]
@search_text varchar(255),
@num_items int
as 
begin
	if(@num_items>0)
		select ceiling(convert(float,count(*))/@num_items) as total_pages from sucursal where CONCAT(nombre , direccion, distrito) like CONCAT('%',@search_text,'%') or @search_text  in ('_','');
	else
		select 0;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_usuario_delete]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[sp_usuario_delete]
@id int
as 
begin 
	update usuario set estado=0 where id=@id;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_usuario_findAll]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_usuario_findAll]
as 
begin
select  
id,
nombres,
apellidos,
email,
id_tipo_documento,
nro_documento,
id_tipo_usuario,
estado
from usuario where estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_usuario_findById]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_usuario_findById]
@id int
as 
begin
select  
id,
nombres,
apellidos,
email,
id_tipo_documento,
nro_documento,
id_tipo_usuario,
estado
from usuario where id=@id and estado=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_usuario_login]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_usuario_login](
@email varchar(255),
@contrasena varchar(255)
)
as
begin
select
id,
nombres,
apellidos,
email,
id_tipo_documento,
nro_documento,
id_tipo_usuario,
estado
from usuario where email=@email and PWDCOMPARE(@contrasena,contrasena)=1;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_usuario_pagination]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[sp_usuario_pagination](
@search_text varchar(255),
@num_items int,
@page int)
as 
begin
	with resultIndex as (
		select
		u.id,
		nombres,
		apellidos,
		email,
		id_tipo_documento,
		nro_documento,
		u.estado,
		td.descripcion tipo_documento,
		tu.descripcion tipo_usuario,
		ROW_NUMBER() over (order by u.id)as row_index 
		from usuario u join tipo_documento td on u.id_tipo_documento=td.id join tipo_usario tu on u.id_tipo_usuario=tu.id_tipo_usuario 
		where (CONCAT(nombres , apellidos,email, td.descripcion,nro_documento,tu.descripcion) like CONCAT('%',@search_text,'%') or @search_text in('','_'))and estado=1)
	select * from resultIndex where row_index between (@page * @num_items)+1 and (@page * @num_items)+@num_items;
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_usuario_save]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[sp_usuario_save](
@id int,
@nombres varchar(255),
@apellidos varchar(255),
@email varchar(255),
@id_tipo_documento varchar(255),
@nro_documento varchar(255),
@id_tipo_usuario int,
@contrasena varchar(255))
as 
declare @res table(ID int);
begin
	if @id=0	
		insert into usuario(
            nombres,
            apellidos,
            email,
            id_tipo_documento,
            nro_documento,
            id_tipo_usuario,
            contrasena
        ) 
		OUTPUT Inserted.ID into @res 
		values(
            @nombres,
            @apellidos,
            @email,
            @id_tipo_documento,
            @nro_documento,
            2,
			PWDENCRYPT(@contrasena)
        )
	else
		update usuario set 
            nombres= @nombres,
            apellidos= @apellidos,
            email= @email,
            id_tipo_documento= @id_tipo_documento,
            nro_documento= @nro_documento
        OUTPUT Inserted.ID into @res 
		where id = @id;
	select 
	id,
	nombres,
	apellidos,
	email,
	id_tipo_documento,
	nro_documento,
	id_tipo_usuario,
	estado
	from usuario where id=(select id from @res);
end;
GO
/****** Object:  StoredProcedure [dbo].[sp_usuario_totalPages]    Script Date: 22/11/2021 10:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[sp_usuario_totalPages]
@search_text varchar(255),
@num_items int
as 
begin
	if(@num_items>0)
		select ceiling(convert(float,count(*))/@num_items) as total_pages 
		from usuario u join tipo_documento td on u.id_tipo_documento=td.id join tipo_usario tu on u.id_tipo_usuario=tu.id_tipo_usuario where CONCAT(
		nombres , apellidos, td.descripcion,nro_documento,tu,descripcion) like CONCAT('%',@search_text,'%') or @search_text in ('','_');
	else
		select 0;
end;
GO

insert into tipo_usuario (descripcion)values('ADMIN');
insert into tipo_usuario (descripcion)values('CLIENT');
insert into tipo_documento (descripcion)values('DNI');
insert into tipo_documento (descripcion)values('CARNET DE EXTRANJERIA');
exec sp_usuario_save 0, 'usuario', 'usuario', 'usuario@gmail.com', 2, '12345678', 1, '12345678';
exec sp_usuario_save 0, 'admin', 'admin', 'admin@gmail.com', 1, '12345678', 1, '12345678';