-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2023 at 11:38 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adminpanel_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(100) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` int(100) NOT NULL,
  `order_date` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `product_id`, `price`, `order_date`, `created_at`, `updated_at`) VALUES
(1, 3, 1, 700, '2023-06-25 16:38:15', '2023-06-30 15:18:52', NULL),
(2, 23, 1, 700, '2023-06-25 16:40:17', '2023-06-30 15:18:52', NULL),
(3, 12, 1, 1700, '2023-06-25 16:41:53', '2023-06-30 15:18:52', NULL),
(4, 12, 1, 2000, '2023-06-26 02:43:19', '2023-06-30 15:18:52', NULL),
(5, 12, 1, 2000, '2023-06-26 09:53:50', '2023-06-30 15:18:52', NULL),
(6, 12, 1, 2000, '2023-06-26 09:53:53', '2023-06-30 15:18:52', NULL),
(7, 12, 1, 2000, '2023-06-26 09:54:48', '2023-06-30 15:18:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(100) NOT NULL,
  `url` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `url`) VALUES
(1, 'shoes12@kkkkkkkkk', 'mustbuy', 300, 'https://th.bing.com/th/id/OIP.mNUE5g3lbnZDeabiUf-sfgHaHa?pid=ImgDet&w=474&h=474&rs=1'),
(2, 'shoes', 'mustbuy', 500, 'https://th.bing.com/th/id/R.215c7f92539b4b2c7084fda8c4364740?rik=jDqp0Q7zWEgXNQ&riu=http%3a%2f%2fwww.liveenhanced.com%2fwp-content%2fuploads%2f2018%2f03%2fCasual-Shoes-for-Men-1.jpg&ehk=1Ji%2fMXUP9scxqJ9yfivoAe4u3qp8Qp47TI3u8nb2tbo%3d&risl=&pid=ImgRaw&r=0'),
(3, 'shoes', 'mustbuyjlj', 700, 'https://navbharattimes.indiatimes.com/thumb/92916160/running-shoes-for-men-92916160.jpg?imgsize=108272&width=1200&height=900&resizemode=75'),
(10, 'jeans', 'kjjkj', 780, 'https://www.parmigianicalzature.com/wp-content/uploads/2020/03/IMG_8513-scaled.jpg'),
(28, 'aparajit', 'apar', 799, 'https://th.bing.com/th/id/OIP.KL9kI9WB2fecwQtb5VBgSgAAAA?pid=ImgDet&w=362&h=320&rs=1'),
(30, 'AMIT', 'skkm', 500, 'https://th.bing.com/th/id/OIP.1wfYhb7BU03QPLG99HmTRgHaDn?pid=ImgDet&w=191&h=93&c=7&dpr=1.5'),
(35, 'uk', 'yhfhyg', 7890, 'https://i1.wp.com/www.kintec.net/wp-content/uploads/2019/05/best-trail-running-shoes-header.jpg?fit=6000%2C4000&ssl=1'),
(46, 'l', 'k', 90, 'C:\\fakepath\\jiu.jfif');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`) VALUES
(1, 'shivam@gmail.com', 'shiva', 'Shaib@'),
(2, 'klm23@gmail.com', 'fksdf', 'rfrfrn'),
(3, 'khk@bjh.com', 'frf', 'srfrfw'),
(4, 'teju@gmail.com', 'tejaswi', 'asd23e'),
(5, 'bharat@gmail.com', 'bharat', 'jnkj89'),
(6, '', '', ''),
(7, '', '', ''),
(8, 'prince@gmail.com', 'prince', 'Prince@12'),
(9, 'tejaswi122@gmail.com', 'teju', 'TejuLo90'),
(10, 'aparajita@gmail.com', 'aparajita', 'panda'),
(11, 'bharat23@gmail.com', 'bharat', 'bharat'),
(12, 'sh1ivam@gmail.com', 'shivam', 'Shivam@1234'),
(13, 'asd@gmail.com', 'asd', 'assdjliu38o'),
(14, 'rajshree@gmail.com', 'rajshree', 'Rajshree12'),
(15, 'shivam@gmail.com', 'shiva', 'Vivekgoyal@123'),
(16, 'aparajita123@gmail.com', 'aparajita', 'Aparajit78'),
(17, 'mudit@gmail.com', 'mudit', 'mudit443'),
(18, 'prince22@gmail.com', 'prince', 'lkdo4e2fd'),
(19, '', '', ''),
(20, '', '', ''),
(21, 'abcd@gmail.com', 'ddd', 'sdes3w4e'),
(22, '', '', ''),
(23, '', '', ''),
(24, 'prince@gmail.com', 'prince', 'jkjdiwou87'),
(25, 'rahu@gmail.com', 'rahul', '123455eed'),
(26, 'sandeep12@gmail.com', 'sandeep', 'sandeep12'),
(27, '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
