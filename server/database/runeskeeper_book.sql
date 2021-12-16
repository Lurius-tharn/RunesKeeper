-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: runeskeeper
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id_book` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `subtitle` varchar(45) NOT NULL,
  `publisher` varchar(45) NOT NULL,
  `nb_pages` int NOT NULL,
  `published_date` year DEFAULT NULL,
  `resume` varchar(1000) DEFAULT NULL,
  `author` varchar(25) DEFAULT NULL,
  `genre` int NOT NULL,
  `thumbnail` varchar(1000) NOT NULL,
  `Isbn` varchar(14) NOT NULL,
  PRIMARY KEY (`id_book`),
  KEY `fk_id_genre_idx` (`genre`),
  CONSTRAINT `fk_id_genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`id_genre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'Le Portail de la Sor\'cière','Les Bannis et les Proscrits, T4','Flagelonne',402,0000,'Elena et son armée de hors-la-loi ont vaincu les suppôts du mal qui occupaient l\'île de Val\'loa et déverrouillé les secrets mystiques du Journal Sanglant. Mais durant la bataille, l\'infâme Seigneur Noir a mis en place les portails du Weir auxquels il puise l\'essentiel de son pouvoir. Pour les trouver et les détruire, les alliés d\'Elena embarquent pour de dangereuses destinations à bord de vaisseaux aériens... Aucun des rebelles ne rentrera indemne et certains ne reviendront pas. Elena elle-même, dans l\'antre de son ennemi juré, parviendra-t-elle à découvrir l\'identité du Seigneur Noir ?','James Clémens',1,'http://books.google.com/books/content?id=bcCGAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api','9791028110529'),(2,'Les chevaliers','De l\'adoubement aux champs de bataille','Quelle Histoire',40,0000,'Tous les nobles du voisinage se sont réunis pour l\'occasion. A genoux devant l\'assemblée, l\'écuyer prête serment et reçoit humblement son épée. Le voici enfin nommé chevalier, prêt à partir à l\'aventure sur son fier destrier ! Toi aussi, remonte le temps jusqu\'au Moyen Age, enfile ton armure et engage-toi dans la chevalerie...','Clémentine-V Baron',3,'https://books.google.fr/googlebooks/images/no_cover_thumb.gif','9782371044210'),(3,'Les Chevaliers d\'Emeraude','Le Feu Dans le Ciel','Boucherville, Québec : Éditions de Mortagne',359,0000,'Maintenant âgée de neuf ans, Kira désire plus que tout au monde devenir Écuyer. Mais pour la protéger de l\'Empereur Noir, Wellan et le magicien Élund doivent refuser sa candidature. Décidant alors de prendre son destin en main, la fillette conjure un Chevalier mort depuis des centaines d\'années afin qu\'il lui apprenne le maniement des armes. Pendant ce temps, les dragons d\'Amecareth font des percées surprenantes sur le territoire d\'Enkidiev. Les Chevaliers d\'Émeraude et leurs nouveaux Écuyers partent donc à la chasse aux monstres. Au même moment, Asbeth, le sorcier à la solde de l\'empereur, se prépare à s\'attaquer aux guerriers magiciens, semant la destruction sur son passage. Désirant accroître sa puissance magique avant d\'affronter l\'homme-oiseau en duel, Wellan se rendra au Royaume des Ombres, où il recevra l\'enseignement des maîtres magiciens. Il y découvrira aussi un grand secret ...','Anne Robillard',1,'https://books.google.fr/googlebooks/images/no_cover_thumb.gif','9782253109266'),(4,'Les Chevaliers d\'Emeraude','Irianeth','Michel Lafon',350,0000,'Après des siècles de paix, les armées de l\'Empereur Noir Amecareth envahissent les royaumes du continent d\'Enkidiev. Les Chevaliers d\'Émeraude doivent alors protéger Kira, la princesse magique liée à la prophétie et qui peut sauver le monde. Pressé par l\'ennemi, Onyx adoube les jeunes Écuyers, les estimant capables de se débrouiller seuls. Mais la perte du grand commandant de l\'armée continue de démoraliser les Chevaliers... Rongé par le chagrin, l\'un d\'eux quitte même le groupe pourtant si près du dernier affrontement. Malgré les bons soins prodigués par les araignées, Liam dépérit, comprenant qu\'il ne reverra plus jamais ses proches. Mais ces derniers ne l\'ont pas abandonné et feront tout pour lui venir en aide par-delà les Territoires Inconnus. Acceptant enfin son destin, la princesse rebelle vole au secours du porteur de lumière et des Chevaliers d\'Émeraude qui subissent les attaques incessantes de l\'Empereur Noir. Cependant, Asbeth lui a préparé un piège machiavélique... Et c\'est ','Anne Robillard',1,'https://books.google.fr/googlebooks/images/no_cover_thumb.gif','9782749911946');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-16 11:52:03
