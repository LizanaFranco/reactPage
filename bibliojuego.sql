-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2024 a las 01:56:44
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
-- Base de datos: `bibliojuego`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Tipo` varchar(20) NOT NULL,
  `Precio` float NOT NULL,
  `Stock` int(11) NOT NULL,
  `Descripcion` text NOT NULL,
  `imgId` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `Nombre`, `Tipo`, `Precio`, `Stock`, `Descripcion`, `imgId`) VALUES
(4, 'Half Life', 'Multijugador', 20, 10, '41341req1e12312f3123enfjinejoifn e nfnf nd', 'c770yhqmrqkwvl0qcgyo'),
(5, 'Skyrim', 'Deportes', 1800, 12, 'lorem', 'hf06xpc284fxgbrrcrmp'),
(7, 'Hellblade', 'Solo', 15, 1111, '111', 'tgxfg4tah6m1rdplrazh'),
(8, 'Fallout 2 ', 'Deportes', 12, 1, 'cqusd', 'advaejdie9rabemh123n'),
(9, 'Hora de Aventura', 'Estrategia', 10, 1231, '123123', 'to2yqajpvuyts29iwk35'),
(13, 'Truck', 'Simulacion', 20, 222, '222', 'fkz2offp55q7fjxprdaz'),
(14, 'God of War', 'Solo', 15, 12, 'blablabal', 'okzf6s41hrxr4yr3gtbl'),
(15, 'FC 24', 'Deportes', 10, 12, 'Juego de estrategia', 'l37eafkhwim6fsiggyhi'),
(16, 'Fallout 4', 'Disparos', 11.99, 2, 'dajshdiqhw', 'bulohaeyt6gh816dn80j'),
(17, 'Half Life 2 ', 'Accion/Aventura', 5, 1, 'fdafadw', 'kosks8lvr0njqsxhzfrn'),
(18, 'Tekken', 'Multijugador', 29.99, 2, 'brjnrbr', 'gmn9mxyhzfwocfjejcke'),
(19, 'Marvel vs Capcom', 'Multijugador', 12, 1, 'bnmbnm', 'kvjagozvslrgejn5l15s'),
(20, 'Fallout New Vegas', 'Solo', 16, 12, 'fghfgh', 'l2sm9vnm412qw0xt7vva'),
(21, 'Days Gone', 'Accion/Aventura', 25, 1, 'fsdf', 'ossmwpantsshrxqbg5ix'),
(22, 'Fallout 3 ', 'Accion/Aventura', 23, 1, 'frefre', 'bywedlwxkqqyilsvge1m');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
