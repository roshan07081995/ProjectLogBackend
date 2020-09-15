-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2020 at 06:59 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_log`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL,
  `organization` varchar(255) NOT NULL,
  `designation` varchar(30) NOT NULL,
  `salary` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `is_deleted` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`, `updated_at`) VALUES
(3, 'roshan56', 'tets5', 't5@gmail.com', 2147483647, 'test5', 'test5', 5676, 1, 0, '2020-09-14 20:09:07', '2020-09-14 20:09:07'),
(6, 'df', 'df', 'df@gmail.com', 2147483647, 'test', 'test', 444, 1, 0, '2020-09-15 12:44:22', '2020-09-15 12:44:22'),
(7, 'rrt', 'rtr', 't@gmail.com', 2147483647, 'gf', 'ggf', 455, 1, 0, '2020-09-15 19:42:37', '2020-09-15 19:42:37'),
(8, 'g', 'fgggg', 'f@gmail.com', 6567676, 'fg', 'f', 5, 1, 0, '2020-09-15 19:43:18', '2020-09-15 19:43:18'),
(9, 'cg', 'fg', 'f@gmail.com', 56546, 'fg', 'dfg', 56, 1, 0, '2020-09-15 19:43:52', '2020-09-15 19:43:52'),
(10, 'cg', 'fg', 'fg@gmail.com', 56767767, 'f', 'fg', 55, 1, 0, '2020-09-15 19:44:06', '2020-09-15 19:44:06');

-- --------------------------------------------------------

--
-- Table structure for table `logtime`
--

CREATE TABLE `logtime` (
  `id` int(11) NOT NULL,
  `dateSelected` date NOT NULL,
  `timeLogged` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `employeeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logtime`
--

INSERT INTO `logtime` (`id`, `dateSelected`, `timeLogged`, `projectId`, `employeeId`) VALUES
(4, '2020-09-03', 23, 3, 3),
(5, '2020-09-03', 34, 3, 6),
(6, '2020-09-03', 12, 3, 6);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `projectName` varchar(255) NOT NULL,
  `projectDescription` varchar(255) NOT NULL,
  `totalEstimate` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `projectName`, `projectDescription`, `totalEstimate`, `created_at`) VALUES
(3, 'test2', 'test2', 40, '2020-09-15 08:58:32'),
(4, 'test23', 'dfg', 3, '2020-09-15 14:34:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logtime`
--
ALTER TABLE `logtime`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `logtime`
--
ALTER TABLE `logtime`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
