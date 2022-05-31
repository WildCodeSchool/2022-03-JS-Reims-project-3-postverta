-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `Card`
--

CREATE TABLE `Card` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Card`
--

INSERT INTO `Card` (`id`, `name`) VALUES
(1, "La Cigale Chanteuse"),
(2, "Maitre Corbeau"),
(3, "Barbe Bleu"),
(4, "Blanche De Gibeaumex"),
(5, "Génie De L'Asama"),
(6, "Hikusen, Daïmio De Taratori"),
(7, "Le Chevalier De La Merlus"),
(8, "Maître Loup"),
(9, "Nareya"),
(10, "Otohimé, Déesse De L'Océan"),
(11, "Ourashima Taro"),
(12, "Dragon A Plusieurs Queues"),
(13, "Seigneur Aigle"),
(14, "Seigneur Dragon"),
(15, "Seigneur Poisson"),
(16, "Sentinelle De L'Asama"),
(17, "Yasumasu , Le Joueur De Flûte"),
(18, "Yori, Le Daïmio"),
(19, "Yotsu, Daïmio De Nagawa"),
(20, "Asama-Yama"),
(21, "Forêt Enchantée D'Homokusai"),
(22, "Palais D'Otohimé"),
(23, "Aki, La petite voleuse"),
(24, "Talisman De l'Asama-Yama"),
(25, "Plutôt Souffrir Que Mourir"),
(26, "En Société Avec Le Lion"),
(27, "L'amour De Nikkô"),
(28, "Boite D'Otohimé"),
(29, "Malédiction Du Génie De Corée"),
(30, "Cabinet Des Princesses Infortunées"),
(31, "Funeste Présage"),
(32, "Héritage d'Outarde"),
(33, "La Clef Du Cabinet De Barbe Bleu"),
(34, "La Mort Et Le Malheureux"),
(35, "Mariage Des Etoiles"),
(36, "Prophétie De L'Hirondelle");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Card`
--
ALTER TABLE `Card`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Card`
--
ALTER TABLE `Card`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;


-- Structure de la table `User`

CREATE TABLE `User` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`id`, `name`, `email`, `password`) VALUES
(1, "Louis", "louis@wild.com", "Wild51"),
(2, "Quentin", "quentin@wild.com", "Wild99");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `User`
--

ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `User`
--

ALTER TABLE `User`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;