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
-- Table structure for table `keeper`
--

DROP TABLE IF EXISTS `keeper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keeper` (
  `user` int NOT NULL,
  `book` int NOT NULL,
  `section` int NOT NULL,
  `keep_date` datetime DEFAULT NULL,
  PRIMARY KEY (`user`,`book`,`section`),
  KEY `fk_id_book_K_idx` (`book`),
  KEY `fk_id_section_K_idx` (`section`),
  CONSTRAINT `fk_id_book_K` FOREIGN KEY (`book`) REFERENCES `book` (`id_book`),
  CONSTRAINT `fk_id_section_K` FOREIGN KEY (`section`) REFERENCES `section` (`id_section`),
  CONSTRAINT `fk_id_user_K` FOREIGN KEY (`user`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keeper`
--

LOCK TABLES `keeper` WRITE;
/*!40000 ALTER TABLE `keeper` DISABLE KEYS */;
INSERT INTO `keeper` VALUES (1,1,2,NULL),(1,1,4,'2021-08-23 18:55:29'),(1,2,2,'2021-08-16 18:28:36'),(1,2,3,'0000-00-00 00:00:00'),(1,2,4,'2021-08-12 18:28:36'),(1,2,5,'2021-08-18 19:38:20'),(1,3,2,'2021-08-25 19:52:20'),(1,4,2,NULL);
/*!40000 ALTER TABLE `keeper` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-16 11:52:04
