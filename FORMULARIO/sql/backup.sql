-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 27-11-2024 a las 07:56:36
-- Versión del servidor: 8.0.39
-- Versión de PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Proyecto`
--
CREATE DATABASE IF NOT EXISTS `Proyecto` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `Proyecto`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cliente`
--

CREATE TABLE `Cliente` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `genero` enum('H','M') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Cliente`
--

INSERT INTO `Cliente` (`id`, `nombre`, `apellidos`, `correo`, `genero`) VALUES
(1, 'Manuel', 'Santos Márquez', 'xmsanmar318@ieshnosmachado.org', 'H'),
(2, 'Ángel', 'Gallego Zayas', 'xagalzay219@ieshnosmachado.org', 'H'),
(3, 'Pedro Luis', 'Linero Arias', 'xplinari763@ieshnosmachado.org', 'H'),
(4, 'María', 'Pérez Gutierrez', 'mariaperez@gmail.com', 'M'),
(5, 'Laura', 'Herrera Cayos', 'lauracayos@hotmail.es', 'M'),
(6, 'Nazaret', 'Martínez Carmona', 'nazaretmartinez@gmail.com', 'M'),
(7, 'Solomeo', 'Paredes Mendoza', 'solomeoparedes@palacio.es', 'H'),
(8, 'Rosa', 'Valverde Funlabrada', 'rosavalverde@hotmail.es', 'M'),
(9, 'Soledad', 'Sonsoles Carrasco', 'asonsol@migasa.org', 'M'),
(10, 'Orlando', 'Martinez Ocasio', 'orlandito@hotmail.mx', 'H');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Proyectos`
--

CREATE TABLE `Proyectos` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `objetivo` varchar(1500) NOT NULL,
  `presupuesto` double(10,2) NOT NULL,
  `id_Cliente` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Proyectos`
--

INSERT INTO `Proyectos` (`id`, `nombre`, `tipo`, `objetivo`, `presupuesto`, `id_Cliente`) VALUES
(1, 'Asesoría', 'Asesoría', 'Proyecto de asesoría para asesorar a nuestros clientes de la mejor manera posible. Para el proyecto crearemos una página web interactiva mediante la que el usuario podrá comunicarse con nuestros expertos.', 899.99, NULL),
(2, 'Consultería', 'Auditoría', 'Proyecto enfocado a las consultas de los clientes. Implementación de una línea telefónica de Cisco para que nuestros teleoperadores puedan comunicarse y manejar las llamadas de los clientes de manera eficiente.', 1250.00, NULL),
(3, 'Extranjero', 'Residencia', 'Proyecto enfocado a nuestros clientes del extranjero que quieren tener la mejor ayuda posible de nuestra empresa. Crearemos una estructura en la empresa con routers y Switches para tener la mejor conexión posible con el extranjero.', 75000.00, NULL),
(4, 'Innovación', 'Residencia', 'Desarrollo de un sistema de inteligencia artificial para personalizar las recomendaciones financieras ofrecidas a los clientes, mejorando la experiencia del usuario y optimizando los resultados.', 15000.00, NULL),
(5, 'Digitalización', 'Asesoría', 'Digitalizar toda la documentación financiera de los clientes y optimizar los procesos administrativos mediante un software seguro y eficiente.', 8200.00, NULL),
(6, 'Expansión Nacional', 'Residencia', 'Proyecto para abrir nuevas oficinas en diferentes provincias de España, con el objetivo de acercar nuestros servicios a más clientes en el ámbito nacional.', 40000.00, NULL),
(7, 'Capacitación', 'Auditoría', 'Organización de un programa de formación avanzada para nuestro personal en áreas como gestión de activos, contabilidad avanzada y manejo de clientes estratégicos.', 10000.00, NULL),
(8, 'Gestión Empresarial', 'Asesoría', 'Implementación de un sistema ERP para optimizar la gestión interna de recursos, mejorando la eficiencia y reduciendo costos operativos.', 32000.00, NULL),
(9, 'Atención 24/7', 'Residencia', 'Creación de un centro de atención al cliente que funcione las 24 horas del día, incluyendo un chatbot avanzado para consultas básicas y un equipo de soporte para temas complejos.', 5600.00, NULL),
(10, 'Fidelización', 'Auditoría', 'Proyecto para mejorar la fidelización de clientes mediante la implementación de un programa de puntos y recompensas adaptado a sus necesidades financieras.', 7200.00, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Servicios`
--

CREATE TABLE `Servicios` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(1500) NOT NULL,
  `precio` double(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Servicios`
--

INSERT INTO `Servicios` (`id`, `nombre`, `descripcion`, `precio`) VALUES
(1, 'Asesoría Fiscal', 'Gestión de impuestos y declaraciones fiscales.', 150.00),
(2, 'Asesoría Contable', 'Contabilidad y estados financieros.', 120.00),
(3, 'Asesoría Laboral', 'Gestión de nóminas y contratos laborales.', 100.00),
(4, 'Gestión de Subvenciones', 'Tramitación de ayudas públicas.', 200.00),
(5, 'Consultoría Financiera', 'Análisis y planificación financiera.', 250.00),
(6, 'Auditoría Interna', 'Revisión de procesos y controles.', 300.00),
(7, 'Planificación de Inversiones', 'Estrategias para maximizar beneficios.', 400.00),
(8, 'Formación Financiera', 'Cursos sobre finanzas personales.', 75.00),
(9, 'Análisis de Riesgos', 'Evaluación de riesgos empresariales.', 350.00),
(10, 'Creación de Empresas', 'Asistencia para nuevos negocios.', 500.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Servicios_Proyectos`
--

CREATE TABLE `Servicios_Proyectos` (
  `id_Proyecto` int NOT NULL,
  `id_Servicio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Servicios_Proyectos`
--

INSERT INTO `Servicios_Proyectos` (`id_Proyecto`, `id_Servicio`) VALUES
(1, 9),
(1, 10),
(1, 8),
(7, 8),
(7, 9),
(2, 8),
(4, 8),
(9, 1),
(9, 7),
(8, 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_correo` (`correo`);

--
-- Indices de la tabla `Proyectos`
--
ALTER TABLE `Proyectos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nombre_Proyecto` (`nombre`),
  ADD KEY `FK1_id_Cliente` (`id_Cliente`);

--
-- Indices de la tabla `Servicios`
--
ALTER TABLE `Servicios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nombre` (`nombre`);

--
-- Indices de la tabla `Servicios_Proyectos`
--
ALTER TABLE `Servicios_Proyectos`
  ADD KEY `FK2_id_Servicio` (`id_Servicio`),
  ADD KEY `FK1_id_Proyecto` (`id_Proyecto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Cliente`
--
ALTER TABLE `Cliente`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `Proyectos`
--
ALTER TABLE `Proyectos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `Servicios`
--
ALTER TABLE `Servicios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Proyectos`
--
ALTER TABLE `Proyectos`
  ADD CONSTRAINT `FK1_id_Cliente` FOREIGN KEY (`id_Cliente`) REFERENCES `Cliente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Servicios_Proyectos`
--
ALTER TABLE `Servicios_Proyectos`
  ADD CONSTRAINT `FK1_id_Proyecto` FOREIGN KEY (`id_Proyecto`) REFERENCES `Proyectos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK2_id_Servicio` FOREIGN KEY (`id_Servicio`) REFERENCES `Servicios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
