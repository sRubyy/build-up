-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: build_up_db
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `UK_gex1lmaqpg0ir5g1f5eftyaa1` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'$2a$10$L8cCa2LHRqIijh6Uz.M2iOGoVIDx1CIvGpHOlfSiXigMndVyS.7vW','admin'),(2,'$2a$10$J1RJnTg3SKsffXSg7i0WrujK.yAnJM40fNqRHV1qmiOy0ub4MENje','user');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank_account`
--

DROP TABLE IF EXISTS `bank_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank_account` (
  `bank_account_id` int NOT NULL AUTO_INCREMENT,
  `balance` double DEFAULT NULL,
  `bank_account_number` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `holder_name` varchar(255) DEFAULT NULL,
  `account_id` int DEFAULT NULL,
  PRIMARY KEY (`bank_account_id`),
  KEY `FK3ad0vrnev901fgihu217ucdcm` (`account_id`),
  CONSTRAINT `FK3ad0vrnev901fgihu217ucdcm` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_account`
--

LOCK TABLES `bank_account` WRITE;
/*!40000 ALTER TABLE `bank_account` DISABLE KEYS */;
INSERT INTO `bank_account` VALUES (1,66593.91,'1234567890','SCB','John Doe',2),(2,60716.90000000001,'2345678901','Krungthai','Jane Smith',2);
/*!40000 ALTER TABLE `bank_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit_card`
--

DROP TABLE IF EXISTS `credit_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credit_card` (
  `card_id` int NOT NULL AUTO_INCREMENT,
  `balance` double DEFAULT NULL,
  `card_number` varchar(255) DEFAULT NULL,
  `cvv` varchar(255) DEFAULT NULL,
  `expiration_date` varchar(255) DEFAULT NULL,
  `holder_name` varchar(255) DEFAULT NULL,
  `account_id` int DEFAULT NULL,
  PRIMARY KEY (`card_id`),
  KEY `FKimolliig2ewssb3jm63n1dv03` (`account_id`),
  CONSTRAINT `FKimolliig2ewssb3jm63n1dv03` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit_card`
--

LOCK TABLES `credit_card` WRITE;
/*!40000 ALTER TABLE `credit_card` DISABLE KEYS */;
INSERT INTO `credit_card` VALUES (1,81755.17,'1234-5678-9012-3456','102','12/25','John Doe',2);
/*!40000 ALTER TABLE `credit_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `item_quantity` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `FKt4dc2r9nbvbujrljv3e23iibt` (`order_id`),
  KEY `FK551losx9j75ss5d6bfsqvijna` (`product_id`),
  CONSTRAINT `FK551losx9j75ss5d6bfsqvijna` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FKt4dc2r9nbvbujrljv3e23iibt` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,1,1,39),(2,1,1,58),(3,1,2,38),(4,1,2,50),(5,1,3,57),(6,1,3,151),(7,1,3,177),(8,1,3,158),(9,1,4,231),(10,1,4,227),(11,1,5,124),(12,1,5,102),(13,1,5,5),(14,1,6,47),(15,1,7,103),(16,1,7,93),(17,1,7,165);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `order_date` datetime(6) DEFAULT NULL,
  `owner_account_id` int DEFAULT NULL,
  `bank_account_id` int DEFAULT NULL,
  `credit_card_id` int DEFAULT NULL,
  `shipping_address_id` int DEFAULT NULL,
  `status_id` int DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FKnihpm3prm0n8w47njd552glj4` (`owner_account_id`),
  KEY `FKg4s7vyiy96x31ru56wcd1db1p` (`bank_account_id`),
  KEY `FKk1lrdcu67n31mg9ujce24b9hs` (`credit_card_id`),
  KEY `FK2dntnxe9677sy06ujhix6o2bp` (`shipping_address_id`),
  KEY `FKnoettwqr56yaai4i8nwxg4huo` (`status_id`),
  CONSTRAINT `FK2dntnxe9677sy06ujhix6o2bp` FOREIGN KEY (`shipping_address_id`) REFERENCES `shipping_address` (`address_id`),
  CONSTRAINT `FKg4s7vyiy96x31ru56wcd1db1p` FOREIGN KEY (`bank_account_id`) REFERENCES `bank_account` (`bank_account_id`),
  CONSTRAINT `FKk1lrdcu67n31mg9ujce24b9hs` FOREIGN KEY (`credit_card_id`) REFERENCES `credit_card` (`card_id`),
  CONSTRAINT `FKnihpm3prm0n8w47njd552glj4` FOREIGN KEY (`owner_account_id`) REFERENCES `account` (`account_id`),
  CONSTRAINT `FKnoettwqr56yaai4i8nwxg4huo` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2023-11-19 23:07:47.803190',2,2,NULL,3,1),(2,'2023-11-19 23:08:44.132634',2,2,NULL,3,1),(3,'2023-11-20 02:20:58.693579',2,1,NULL,3,1),(4,'2023-11-20 02:22:08.093485',2,1,NULL,2,1),(5,'2023-11-20 02:27:47.061396',2,2,NULL,1,1),(6,'2023-11-20 03:02:30.217760',2,1,NULL,1,1),(7,'2023-11-20 03:05:11.370875',2,NULL,1,2,1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_brand_new` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `purchase_date` datetime(6) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `seller_account_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FKml3ncw8vugwhxtl2tsbcbt056` (`seller_account_id`),
  CONSTRAINT `FKml3ncw8vugwhxtl2tsbcbt056` FOREIGN KEY (`seller_account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=321 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',9866.66,NULL,'9','shoes',1),(2,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',7747.69,NULL,'8','shoes',1),(3,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',8442.25,NULL,'9','shoes',1),(4,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',9235.05,NULL,'7','shoes',1),(5,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',4913.67,'2023-11-20 02:27:47.104275','5','shoes',1),(6,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',8744.03,NULL,'7.5','shoes',1),(7,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',4911.55,NULL,'5.5','shoes',1),(8,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',7834.47,NULL,'6.5','shoes',1),(9,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',9192.91,NULL,'8.5','shoes',1),(10,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',3953.75,NULL,'5.5','shoes',1),(11,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',3078.64,NULL,'5.5','shoes',1),(12,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',4536.91,NULL,'5.5','shoes',1),(13,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',4846.72,NULL,'5.5','shoes',1),(14,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',4255.98,NULL,'7','shoes',1),(15,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',4623.85,NULL,'4.5','shoes',1),(16,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',8009.79,NULL,'7.5','shoes',1),(17,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',9989.49,NULL,'7','shoes',1),(18,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',6954.69,NULL,'6','shoes',1),(19,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',4677.2,NULL,'8.5','shoes',1),(20,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',9402.01,NULL,'5.5','shoes',1),(21,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',7942.2,NULL,'7','shoes',1),(22,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',8553.04,NULL,'9.5','shoes',1),(23,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',5847.57,NULL,'6.5','shoes',1),(24,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',3884.25,NULL,'6.5','shoes',1),(25,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',3854.97,NULL,'6','shoes',1),(26,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',5528.8,NULL,'8.5','shoes',1),(27,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',7244.46,NULL,'4.5','shoes',1),(28,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',8317.62,NULL,'8','shoes',1),(29,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '\0','New Balance 530 White Silver Navy',5853.2,NULL,'9','shoes',1),(30,'2023-11-01 22:21:05.000000','NEW BALANCE | MR530SG',_binary '','New Balance 530 White Silver Navy',3692.45,NULL,'7','shoes',1),(31,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',9355.9,NULL,'4.5','shoes',1),(32,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',9844.35,NULL,'8','shoes',1),(33,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',7991.67,NULL,'7.5','shoes',1),(34,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',7566.51,NULL,'6','shoes',1),(35,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',9577.63,NULL,'8','shoes',1),(36,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',6972,NULL,'6','shoes',1),(37,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',3183.97,NULL,'9','shoes',1),(38,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',8459.34,'2023-11-19 23:08:44.170043','7','shoes',1),(39,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',7841.42,'2023-11-19 23:07:47.909184','5','shoes',1),(40,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',4945.54,NULL,'7','shoes',1),(41,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',6927.7,NULL,'10','shoes',1),(42,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',5723.5,NULL,'5','shoes',1),(43,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',9847.27,NULL,'7','shoes',1),(44,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',8313.89,NULL,'7','shoes',1),(45,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',5268.92,NULL,'5.5','shoes',1),(46,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',6043.94,NULL,'9','shoes',1),(47,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',3280.08,'2023-11-20 03:02:30.250732','7','shoes',1),(48,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',6210.95,NULL,'9','shoes',1),(49,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',7348.8,NULL,'6','shoes',1),(50,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',5245.76,'2023-11-19 23:08:44.181192','8','shoes',1),(51,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',9251.01,NULL,'6.5','shoes',1),(52,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',8507.23,NULL,'5','shoes',1),(53,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',8839.33,NULL,'5.5','shoes',1),(54,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',6496.37,NULL,'9.5','shoes',1),(55,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',6064.36,NULL,'7','shoes',1),(56,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',6767.86,NULL,'7','shoes',1),(57,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',4722.04,'2023-11-20 02:20:58.794500','8.5','shoes',1),(58,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',4036.03,'2023-11-19 23:07:47.918798','5.5','shoes',1),(59,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',4392.46,NULL,'10','shoes',1),(60,'2023-11-01 22:21:05.000000','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',_binary '\0','Nike Air Force 1 Low Gore-Tex Hangul Day (2023)',9434.97,NULL,'7','shoes',1),(61,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',4269.14,NULL,'6.5','shoes',1),(62,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',7775.75,NULL,'6','shoes',1),(63,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',7842.19,NULL,'9.5','shoes',1),(64,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',9465.74,NULL,'8.5','shoes',1),(65,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',4574.81,NULL,'5.5','shoes',1),(66,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',3402.85,NULL,'10','shoes',1),(67,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',6705.82,NULL,'7.5','shoes',1),(68,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',8628.97,NULL,'5','shoes',1),(69,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',3310.26,NULL,'4.5','shoes',1),(70,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',8819.49,NULL,'5.5','shoes',1),(71,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',5247.03,NULL,'9','shoes',1),(72,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',4639.64,NULL,'8.5','shoes',1),(73,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',3510.95,NULL,'5.5','shoes',1),(74,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',6605.17,NULL,'8.5','shoes',1),(75,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',4656.89,NULL,'6','shoes',1),(76,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',3216.71,NULL,'7','shoes',1),(77,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',3597.04,NULL,'7.5','shoes',1),(78,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',9916.83,NULL,'4.5','shoes',1),(79,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',8302.09,NULL,'6','shoes',1),(80,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',9445.74,NULL,'5.5','shoes',1),(81,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',4556.12,NULL,'6.5','shoes',1),(82,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',9446.22,NULL,'8','shoes',1),(83,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',7749.47,NULL,'9','shoes',1),(84,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',5938.65,NULL,'5.5','shoes',1),(85,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '','Nike Dunk Low Vintage Panda (W)',4871.63,NULL,'4.5','shoes',1),(86,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',3396.5,NULL,'8','shoes',1),(87,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',5183.31,NULL,'7','shoes',1),(88,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',5982.15,NULL,'8.5','shoes',1),(89,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',7648.03,NULL,'5.5','shoes',1),(90,'2023-11-01 22:21:05.000000','Nike Dunk Low Vintage Panda (W)',_binary '\0','Nike Dunk Low Vintage Panda (W)',7365.48,NULL,'10','shoes',1),(91,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',9772.15,NULL,'9.5','shoes',1),(92,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',6963.86,NULL,'9','shoes',1),(93,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',4280.19,'2023-11-20 03:05:11.411721','6','shoes',1),(94,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',5389.94,NULL,'5.5','shoes',1),(95,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',5652.45,NULL,'9.5','shoes',1),(96,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',3688.55,NULL,'7','shoes',1),(97,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',7465.16,NULL,'9','shoes',1),(98,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',5669.84,NULL,'8.5','shoes',1),(99,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',5041.09,NULL,'10','shoes',1),(100,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',3214.32,NULL,'5.5','shoes',1),(101,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',7030.42,NULL,'6.5','shoes',1),(102,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',4691.83,'2023-11-20 02:27:47.097280','6.5','shoes',1),(103,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',8528.07,'2023-11-20 03:05:11.405727','5','shoes',1),(104,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',7622.41,NULL,'6.5','shoes',1),(105,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',6565.69,NULL,'8.5','shoes',1),(106,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',9472.03,NULL,'9.5','shoes',1),(107,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',4548.96,NULL,'8.5','shoes',1),(108,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',8163.58,NULL,'8.5','shoes',1),(109,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',3318.01,NULL,'9.5','shoes',1),(110,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',8006.65,NULL,'8.5','shoes',1),(111,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',3001.66,NULL,'4.5','shoes',1),(112,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',7933.15,NULL,'4.5','shoes',1),(113,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',5663.05,NULL,'8','shoes',1),(114,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',5860.21,NULL,'7.5','shoes',1),(115,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',5936.76,NULL,'9.5','shoes',1),(116,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',6736.82,NULL,'9.5','shoes',1),(117,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',5683.97,NULL,'9','shoes',1),(118,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',4839.25,NULL,'7','shoes',1),(119,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '','Jordan 1 Retro High OG Sky J Mauve',7682.96,NULL,'7','shoes',1),(120,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Sky J Mauve',_binary '\0','Jordan 1 Retro High OG Sky J Mauve',6023.35,NULL,'4.5','shoes',1),(121,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',6444.13,NULL,'8.5','shoes',1),(122,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',7927.25,NULL,'8','shoes',1),(123,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',3231.02,NULL,'7.5','shoes',1),(124,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',7429.3,'2023-11-20 02:27:47.091712','5.5','shoes',1),(125,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',8154.97,NULL,'7','shoes',1),(126,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',8847.49,NULL,'6.5','shoes',1),(127,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',9661.31,NULL,'7','shoes',1),(128,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',7075.89,NULL,'5','shoes',1),(129,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',9235.97,NULL,'7.5','shoes',1),(130,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',6883.77,NULL,'10','shoes',1),(131,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',5350.18,NULL,'9.5','shoes',1),(132,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',9163.71,NULL,'9','shoes',1),(133,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',5703.12,NULL,'5.5','shoes',1),(134,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',3836.16,NULL,'6.5','shoes',1),(135,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',3908.02,NULL,'8','shoes',1),(136,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',4072.49,NULL,'6.5','shoes',1),(137,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',8290.27,NULL,'6.5','shoes',1),(138,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',5320.25,NULL,'6','shoes',1),(139,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',3789.09,NULL,'5','shoes',1),(140,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',3480.62,NULL,'5.5','shoes',1),(141,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',6145.87,NULL,'7','shoes',1),(142,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',3726.63,NULL,'5.5','shoes',1),(143,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',4187.96,NULL,'6','shoes',1),(144,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',8427.92,NULL,'9','shoes',1),(145,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',6215.47,NULL,'8','shoes',1),(146,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',8699.15,NULL,'9','shoes',1),(147,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '','Jordan 1 Retro High Element Gore-Tex Sky J Purple',8165.86,NULL,'5','shoes',1),(148,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',3429.11,NULL,'7','shoes',1),(149,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',9834.18,NULL,'4.5','shoes',1),(150,'2023-11-01 22:21:05.000000','Jordan 1 Retro High Element Gore-Tex Sky J Purple',_binary '\0','Jordan 1 Retro High Element Gore-Tex Sky J Purple',6224.49,NULL,'4.5','shoes',1),(151,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',6446.46,'2023-11-20 02:20:58.803007','6.5','shoes',1),(152,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',9681.9,NULL,'5.5','shoes',1),(153,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',3560.65,NULL,'10','shoes',1),(154,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',7420.84,NULL,'10','shoes',1),(155,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',5577.71,NULL,'8','shoes',1),(156,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',5866.02,NULL,'9','shoes',1),(157,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',8705.47,NULL,'9','shoes',1),(158,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',4109.29,'2023-11-20 02:20:58.820019','8','shoes',1),(159,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',7685.27,NULL,'9.5','shoes',1),(160,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',4919.75,NULL,'5.5','shoes',1),(161,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',9080.96,NULL,'7','shoes',1),(162,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',3705.82,NULL,'5','shoes',1),(163,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',7263.25,NULL,'7.5','shoes',1),(164,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',3048.77,NULL,'9.5','shoes',1),(165,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',3777.95,'2023-11-20 03:05:11.418933','9','shoes',1),(166,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',7927.52,NULL,'10','shoes',1),(167,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',5249.96,NULL,'4.5','shoes',1),(168,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',7959.76,NULL,'5','shoes',1),(169,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',3079.71,NULL,'6','shoes',1),(170,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',8444.1,NULL,'6','shoes',1),(171,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',9437.04,NULL,'9','shoes',1),(172,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',7024.64,NULL,'6','shoes',1),(173,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',4191.95,NULL,'6.5','shoes',1),(174,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',3688.92,NULL,'5','shoes',1),(175,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',4933.62,NULL,'6.5','shoes',1),(176,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',6107.47,NULL,'9','shoes',1),(177,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '','Jordan 1 Retro High OG Satin Bred (W)',3418.34,'2023-11-20 02:20:58.812012','7.5','shoes',1),(178,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',8557.05,NULL,'7.5','shoes',1),(179,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',9330.09,NULL,'8','shoes',1),(180,'2023-11-01 22:21:05.000000','Jordan 1 Retro High OG Satin Bred (W)',_binary '\0','Jordan 1 Retro High OG Satin Bred (W)',9416.71,NULL,'7.5','shoes',1),(181,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',9472.38,NULL,'9.5','shoes',1),(182,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',4588.37,NULL,'8.5','shoes',1),(183,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',4308.13,NULL,'8','shoes',1),(184,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',8772.56,NULL,'9','shoes',1),(185,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',9545.23,NULL,'8','shoes',1),(186,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',6811.21,NULL,'9.5','shoes',1),(187,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',5193.69,NULL,'5.5','shoes',1),(188,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',5602.59,NULL,'9.5','shoes',1),(189,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',4998.17,NULL,'6','shoes',1),(190,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',8596.09,NULL,'5','shoes',1),(191,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',4792.71,NULL,'9.5','shoes',1),(192,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',9320.65,NULL,'8','shoes',1),(193,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',5313.43,NULL,'8','shoes',1),(194,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',3418.97,NULL,'8.5','shoes',1),(195,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',9049.66,NULL,'5','shoes',1),(196,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',6728.07,NULL,'8.5','shoes',1),(197,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',4923.5,NULL,'5','shoes',1),(198,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',7229.2,NULL,'6','shoes',1),(199,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',9441.66,NULL,'6','shoes',1),(200,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',5201.28,NULL,'8.5','shoes',1),(201,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',5177.62,NULL,'5.5','shoes',1),(202,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',5791.38,NULL,'8.5','shoes',1),(203,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',6537.37,NULL,'7.5','shoes',1),(204,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',7651.11,NULL,'7.5','shoes',1),(205,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',6618.74,NULL,'8.5','shoes',1),(206,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',5941.98,NULL,'8.5','shoes',1),(207,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',7671.9,NULL,'6','shoes',1),(208,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '\0','Jordan 1 Retro Low OG University Red',3360.73,NULL,'9','shoes',1),(209,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',3702.72,NULL,'9','shoes',1),(210,'2023-11-01 22:21:05.000000','Jordan 1 Retro Low OG University Red',_binary '','Jordan 1 Retro Low OG University Red',7483.93,NULL,'7','shoes',1),(211,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',6789.19,NULL,'6','shoes',1),(212,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',3094.95,NULL,'7','shoes',1),(213,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',6273.78,NULL,'9.5','shoes',1),(214,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',3375.79,NULL,'7','shoes',1),(215,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',7661.78,NULL,'8','shoes',1),(216,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',8846.96,NULL,'5','shoes',1),(217,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',8937.14,NULL,'9','shoes',1),(218,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',5148.49,NULL,'9.5','shoes',1),(219,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',7577.46,NULL,'9.5','shoes',1),(220,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',3231.65,NULL,'7.5','shoes',1),(221,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',9924.32,NULL,'7','shoes',1),(222,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',4769.42,NULL,'10','shoes',1),(223,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',6589.54,NULL,'6','shoes',1),(224,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',4423.33,NULL,'9.5','shoes',1),(225,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',5950.65,NULL,'10','shoes',1),(226,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',4650,NULL,'6','shoes',1),(227,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',6339.82,'2023-11-20 02:22:08.133487','6.5','shoes',1),(228,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',8666.2,NULL,'6','shoes',1),(229,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',9171.89,NULL,'6','shoes',1),(230,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',7811.47,NULL,'6.5','shoes',1),(231,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',4307.66,'2023-11-20 02:22:08.125487','4.5','shoes',1),(232,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',5699.52,NULL,'7','shoes',1),(233,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',8680.05,NULL,'6','shoes',1),(234,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',6570.46,NULL,'6','shoes',1),(235,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',9293.98,NULL,'8','shoes',1),(236,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',4173.72,NULL,'8','shoes',1),(237,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',3949.1,NULL,'9.5','shoes',1),(238,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',5243.25,NULL,'8','shoes',1),(239,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '\0','Adidas Samba OG White Green',9855.76,NULL,'6.5','shoes',1),(240,'2023-11-01 22:21:05.000000','Adidas Samba OG White Green',_binary '','Adidas Samba OG White Green',7962.04,NULL,'8','shoes',1),(281,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',6377.79,NULL,'M','t-shirt',1),(282,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '\0','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',6833.72,NULL,'XS','t-shirt',1),(283,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',7799.66,NULL,'M','t-shirt',1),(284,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '\0','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',7704.06,NULL,'S','t-shirt',1),(285,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',5124.46,NULL,'M','t-shirt',1),(286,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',9904.04,NULL,'M','t-shirt',1),(287,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',4590.34,NULL,'XL','t-shirt',1),(288,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '\0','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',3017.53,NULL,'M','t-shirt',1),(289,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',3825.55,NULL,'L','t-shirt',1),(290,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '\0','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',6560,NULL,'L','t-shirt',1),(291,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '\0','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',9060.6,NULL,'M','t-shirt',1),(292,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',9995.11,NULL,'L','t-shirt',1),(293,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',5284.78,NULL,'L','t-shirt',1),(294,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',3143.89,NULL,'M','t-shirt',1),(295,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',6298.46,NULL,'S','t-shirt',1),(296,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',9933.57,NULL,'M','t-shirt',1),(297,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',7520.55,NULL,'M','t-shirt',1),(298,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '\0','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',9667.45,NULL,'S','t-shirt',1),(299,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',8885.85,NULL,'M','t-shirt',1),(300,'2023-11-01 22:21:05.000000','FEAR OF GOD | FOG-HDAFOGEPHALBB5BS',_binary '\0','Fear of God Essentials Pullover Hoodie Applique Logo Buttercream',7237.94,NULL,'S','t-shirt',1),(301,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',5621.48,NULL,'M','t-shirt',1),(302,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',4137.9,NULL,'S','t-shirt',1),(303,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',5795.16,NULL,'M','t-shirt',1),(304,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',8698.19,NULL,'L','t-shirt',1),(305,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',7245.41,NULL,'S','t-shirt',1),(306,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',6965.17,NULL,'M','t-shirt',1),(307,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',5666.88,NULL,'L','t-shirt',1),(308,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',5971.45,NULL,'XS','t-shirt',1),(309,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',6315.98,NULL,'M','t-shirt',1),(310,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',8650.39,NULL,'L','t-shirt',1),(311,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',4387.65,NULL,'XS','t-shirt',1),(312,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',4750.49,NULL,'L','t-shirt',1),(313,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',7723.48,NULL,'S','t-shirt',1),(314,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',9967.38,NULL,'XS','t-shirt',1),(315,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',3232.14,NULL,'L','t-shirt',1),(316,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',3960.84,NULL,'S','t-shirt',1),(317,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',4179.92,NULL,'S','t-shirt',1),(318,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',7931.34,NULL,'S','t-shirt',1),(319,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '\0','Stussy Diced Out T-Shirt Black',3104.43,NULL,'L','t-shirt',1),(320,'2023-11-01 22:21:05.000000','STUSSY | 1904971-BLAC',_binary '','Stussy Diced Out T-Shirt Black',4248.86,NULL,'M','t-shirt',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping_address`
--

DROP TABLE IF EXISTS `shipping_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipping_address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `sub_district` varchar(255) DEFAULT NULL,
  `account_id` int DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `FK4c1eq910pt015rxml1aaxj3m9` (`account_id`),
  CONSTRAINT `FK4c1eq910pt015rxml1aaxj3m9` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping_address`
--

LOCK TABLES `shipping_address` WRITE;
/*!40000 ALTER TABLE `shipping_address` DISABLE KEYS */;
INSERT INTO `shipping_address` VALUES (1,'Thailand','123 Sukhumvit Road','Khlong Toei','John Doe','+66 123456789','10110','Bangkok','Watthana',2),(2,'Thailand','456 Ratchadaphisek Road','Chatuchak','Jane Smith','+66 987654321','10900','Bangkok','Chatuchak',2),(3,'Thailand','789 Silom Road','Bang Rak','Bob Johnson','+66 555555555','10500','Bangkok','Silom',2);
/*!40000 ALTER TABLE `shipping_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `status_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Ordered');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-21  0:45:04
