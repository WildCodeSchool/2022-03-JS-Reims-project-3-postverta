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

CREATE TABLE `card` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `attack` INT,
  `defense` INT,
  `pv` INT,
  `skill` varchar(250),
  `type` varchar(100),
  `element` varchar(100),
  `classe` varchar(100),
  `starCount` INT
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Card`
--

INSERT INTO `card` (`id`, `name`,`attack`, `defense`, `pv`, `skill`, `type`, `element`, `classe`, `starCount`) VALUES
(1, "La Cigale Chanteuse", 2, 2, 6, "Lorem ipsum dolor sit amet.", "Insecte", "Terre", "Gardien Normal", 1),
(2, "Maitre Corbeau", 6, 2, 6, "Lorem ipsum dolor sit amet.", "Oiseau", "Air", "Gardien Normal", 1),
(3, "Barbe Bleu", 5, 10, 15, "Lorem ipsum dolor sit amet.", "Guerrier", "Terre", "Gardien De Synthèse", 3),
(4, "Blanche De Gibeaumex", 0, 3, 3, "Lorem ipsum dolor sit amet.", "Dame", "Lumière", "Gardien De Support", 2),
(5, "Génie De L'Asama", 20, 5, 25, "Lorem ipsum dolor sit amet.", "Esprit", "Feu", "Gardien Normal", 5),
(6, "Hikusen, Daïmio De Taratori", 2, 6, 2, "Lorem ipsum dolor sit amet.", "Guerrier", "Feu", "Gardien Normal", 1),
(7, "Le Chevalier De La Merlus", 20, 10, 10, "Lorem ipsum dolor sit amet.", "Chevalier", "Terre", "Gardien Normal", 4),
(8, "Maître Loup", 10, 6, 4, "Lorem ipsum dolor sit amet.", "Bête", "Ténèbres", "Gardien Normal", 2),
(9, "Nareya", 1, 4, 10, "Lorem ipsum dolor sit amet.", "Dame", "Eau", "Gardien De Support", 1),
(10, "Otohimé, Déesse De L'Océan", 1, 4, 10, "Lorem ipsum dolor sit amet.", "Divinité", "Eau", "Gardien De Support", 5),
(11, "Ourashima Taro", 2, 5, 5, "Lorem ipsum dolor sit amet.", "Héros", "Eau", "Gardien A Talent", 2),
(12, "Dragon A Plusieurs Queues", 10, 10, 10, "Lorem ipsum dolor sit amet.", "Dragon", "Poison", "Gardien A Talent", 5),
(13, "Seigneur Aigle", 4, 0, 2, "Lorem ipsum dolor sit amet.", "Homme-bête", "Air", "Gardien A Talent", 1),
(14, "Seigneur Dragon", 5, 5, 40, "Lorem ipsum dolor sit amet.", "Homme-bête", "Plante", "Gardien Normal", 5),
(15, "Seigneur Poisson", 4, 6, 8, "Lorem ipsum dolor sit amet.", "Homme-bête", "Eau", "Gardien A Talent", 3),
(16, "Sentinelle De L'Asama", 10, 5, 15, "Lorem ipsum dolor sit amet.", "Guerrier", "Feu", "Gardien Normal", 3),
(17, "Yasumasu , Le Joueur De Flûte", 3, 3, 4, "Lorem ipsum dolor sit amet.", "Artiste", "Air", "Gardien De Synthèse", 1),
(18, "Yori, Le Daïmio", 5, 5, 10, "Lorem ipsum dolor sit amet.", "Héros", "Lumière", "Gardien Normal", 2),
(19, "Yotsu, Daïmio De Nagawa", 20, 15, 5, "Lorem ipsum dolor sit amet.", "Guerrier", "Plante", "Gardien Normal", 4),
(20, "Asama-Yama",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Terrain",NULL),
(21, "Forêt Enchantée D'Homokusai",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Terrain",NULL),
(22, "Palais D'Otohimé",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Terrain",NULL),
(23, "Aki, La petite voleuse",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Clé",NULL),
(24, "Talisman De l'Asama-Yama",NULL,NULL,NULL, "Lorem ipsum dolor sit amet.",NULL,NULL,"Clé",NULL),
(25, "Plutôt Souffrir Que Mourir",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Clé",NULL),
(26, "En Société Avec Le Lion",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Piège",NULL),
(27, "L'amour De Nikkô",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(28, "Boite D'Otohimé",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(29, "Malédiction Du Génie De Corée",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(30, "Cabinet Des Princesses Infortunées",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(31, "Funeste Présage",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(32, "Héritage d'Outarde",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(33, "La Clef Du Cabinet De Barbe Bleu",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(34, "La Mort Et Le Malheureux",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(35, "Mariage Des Etoiles",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL),
(36, "Prophétie De L'Hirondelle",NULL,NULL,NULL,"Lorem ipsum dolor sit amet.",NULL,NULL,"Magie",NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Card`
--
ALTER TABLE `card`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;


-- Structure de la table `User`

CREATE TABLE `user` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `pseudo` varchar(15) NOT NUll,
  `birthdate` DATE,
  `gender` varchar(15),
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `User`
--

INSERT INTO `user` (`id`, `name`, `pseudo`, `birthdate`, `gender`, `email`, `password`) VALUES
(1, "Louis", "Dufour51", "1998-04-07", "Homme", "louis@wild.com", "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"),
(2, "Quentin", "Quentou51", "1999-07-28", "Homme", "quentin@wild.com", "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `User`
--

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `User`
--

ALTER TABLE `user`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;