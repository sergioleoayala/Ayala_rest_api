-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
<<<<<<< HEAD:Script/127_0_0_1.sql
-- Tiempo de generación: 20-10-2023 a las 05:49:24
=======
-- Tiempo de generación: 17-10-2023 a las 20:08:52
>>>>>>> fda17fc05a1c05f40d2678f85bf775a59ea2e84a:127_0_0_1.sql
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ayala_restapi`
--
CREATE DATABASE IF NOT EXISTS `ayala_restapi` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ayala_restapi`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año_publicación` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año_publicación`, `ISBN`) VALUES
<<<<<<< HEAD:Script/127_0_0_1.sql
(1, '1984', 'George Orwell', 'Ficción', '1949-10-14', '9780151660346'),
(2, 'Cien años de soledad', 'Gabriel García Márquez', 'Novela', '1967-10-14', '9780060114183'),
(3, 'El Gran Gatsby', 'Scott Fitzgerald', 'Novela', '1925-10-01', '9780521402309'),
(4, 'El Señor de los Anillos', 'J.R.R. Tolkien', 'Fantasía épica', '1955-10-14', '9780007136568'),
(5, 'Matar a un ruiseñor', 'Harper Lee', 'Novela', '1960-10-01', '9783498038083'),
(6, 'Crimen y Castigo', 'Fyodor Dostoevsky', 'Novela', '1866-01-10', '9788420741468'),
(7, 'Sapiens: De animales a dioses', 'Yuval Noah Harari', 'divulgación científica', '2011-01-01', '9780062316097'),
(8, 'Harry Potter y la piedra filos', 'J.K. Rowling', 'Fantasía épica', '1997-10-01', '9788869183157'),
(9, 'Breve historia del tiempo', 'Stephen Hawking', 'divulgación científica', '1988-10-14', '9780593060506'),
(10, 'Orgullo y prejuicio', 'Jane Austen', 'Novela', '1813-01-01', '9783757807870'),
(11, 'E secreto de su mirada', 'Eduardo Sacheri', 'Novela', '2005-08-10', '9789505564781'),
(12, 'El alquimista', 'Paulo Coelho', 'Novela', '1988-10-01', '9788408052944');
=======
(1, '1984', 'George Orwell', 'Ficción', '1949-10-01', '9780151660346'),
(2, 'Cien años de soledad', 'Gabriel García Márquez', 'Ficción', '1967-10-01', '9780060114183'),
(3, 'El Gran Gatsby', 'Scott Fitzgerald', 'Novela', '1925-10-01', '9780521402309'),
(4, 'El Señor de los Anillos', 'J.R.R. Tolkien', 'Fantasía épica', '1954-10-01', '9780007136568'),
(5, 'Matar a un ruiseñor', 'Harper Lee', 'Novela', '1960-10-01', '9783498038083'),
(6, 'Crimen y Castigo', 'Fyodor Dostoevsky', 'Novela', '1866-01-10', '9788420741468'),
(7, 'Sapiens: De animales a dioses', 'Yuval Noah Harari', 'divulgación científica', '2011-10-01', '9780062316097'),
(8, 'Harry Potter y la piedra filos', 'J.K. Rowling', 'Fantasía', '1997-10-01', '9788869183157'),
(11, 'Orgullo y prejuicio', 'Jane Austen', 'Novela', '1813-01-01', '9783757807870'),
(12, 'El secreto de tus ojos', 'Eduardo Sarachi', 'novela', '2004-10-01', '9780151660348');
>>>>>>> fda17fc05a1c05f40d2678f85bf775a59ea2e84a:127_0_0_1.sql

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
<<<<<<< HEAD:Script/127_0_0_1.sql
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
=======
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
>>>>>>> fda17fc05a1c05f40d2678f85bf775a59ea2e84a:127_0_0_1.sql
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

