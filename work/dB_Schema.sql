DROP DATABASE IF EXISTS ecommerce_dB;
CREATE DATABASE ecommerce_dB;
USE ecommerce_dB;
CREATE TABLE Products (
product_id INT NOT NULL AUTO_INCREMENT, 
product_name VARCHAR(255),
product_image VARCHAR(70),
product_description VARCHAR(500), 
product_price VARCHAR(10), 
category VARCHAR(50),
PRIMARY KEY (product_id)
);
DESCRIBE Products;

INSERT INTO Products (product_id, product_name, product_images, product_description, product_price, category)
VALUES 
(1, 'Necklace Chain, 14K Gold','https://bit.ly/2Gxv5Hs', 'Delicate yet strong, this classic anchor chain necklace in 14k gold is the perfect carrier for pendants and dangles alike. Due to its popular princess length, it will complement both high and low necklines.', '140', 'Necklaces'),
(2, 'GOLD Shine™ Necklace', 'https://bit.ly/2K6KqQn', 'Create a golden look with this core ingredient: an adjustable PANDORA Shine™ necklace chain in 18K gold-plated sterling silver. Just add your perfect pendant or dangle and layer it with other necklace styles.', '115', 'Necklaces'),
(3, 'Classic Cable Chain Necklace', 'https://bit.ly/2SHu04J', 'Discover the perfect way to display your favorite Pandora pendants and charms with this classic cable chain necklace, crafted in Pandora Rose™ – a 14k rose gold-plated unique metal blend. The lobster clasp and jump ring are made from sterling silver plated with 14k rose gold. Fully adjustable, it can be worn in three different lengths, complementing a variety of necklines. Embellish it with your favorite Pandora pendants or layer it with other Pandora chains for an eclectic, on-trend look.', '120', 'Necklaces'),
(4, 'Alluring Brilliant Marquise Ring, Clear CZ & 14K Gold', 'https://bit.ly/2SL09Zc', 'Putting a new spin on the classic eternity ring, this stunning 14K gold style alternates marquise-cut stones with brilliant-cut stones, lending an appealing geometric quality to the design.', '125', 'Rings'),
(5, 'Linked Love Ring, PANDORA Shine™', 'https://bit.ly/2YfCo1z', 'Beam a loving expression onto your finger with this PANDORA Shine™ stacking ring in 18K gold-plated sterling silver. It adds a luxurious touch to ring stacks in an elegantly simple way.', '80', 'Rings'),
(6, 'Exotic Stones Ring, Pandora Shine™', 'https://bit.ly/2Y5ilCK', 'Make a bold statement with this 18k gold-plated sterling silver ring, inspired by the graphic lines of triangles. The Pandora Shine design features an exotic pattern of carefully clustered stones. The stackable ring is finished with milgrain edges. Wear with other band rings or style alone as a stand-out statement to show it off to full effect.', '115', 'Rings'),
(7, 'Petite Runway Mercer Pavé Rose Gold-Tone and Pearl Watch', 'https://bit.ly/2SGrwU4', 'Iridescent mother-of-pearl and pavé accents elevate our petite Runway Mercer watch with high-impact glamour. Crafted from rose gold-tone stainless steel, it features a dazzling bracelet strap inspired by our Mercer lock charm. We think it looks especially chic with an all-white ensemble.', '120', 'Watches'),
(8, 'Mini Lauryn Pavé Gold-Tone Watch', 'https://bit.ly/2LLlWPE', 'Our Mini Lauryn watch boasts a mother-of-pearl dial detailed with drops of pavé and Roman numeral indexes. The gold-tone bracelet strap is complemented by sparkling crystals for a brilliant effect. Let it punctuate any look with everyday glamour.', '140', 'Watches'),
(9, 'Jaryn Rose Gold-Tone and Acetate Watch', 'https://bit.ly/2Ype9Jj', 'A minimalist dial and ultra-slim band combine for an elevated take on our Jaryn watch. Its radiant rose gold-tone finish is highlighted by a white acetate bangle. Mix and match it with colorful styles.', '170', 'Watches'),
(10, 'Judith Ripka Goldtone Stainless LinkWatch', 'https://bit.ly/2Hb7lJH', 'A minimalist dial and ultra-slim band combine for an elevated take on our Jaryn watch. Its radiant rose gold-tone finish is highlighted by a white acetate bangle. Mix and match it with colorful styles.', '160', 'Watches'),
(11, '14K Gold Oval Byzantine Watch', 'https://bit.ly/2OYs1uI', 'Impress at all occasions with this timeless 14K yellow gold watch featuring a Byzantine-style bracelet band.','160', 'Watches'),
(12, 'Citizen Eco-Drive Womens Goldtone Diamond Accent Watch', 'https://qvc.co/2YU9Xqe', 'For both the appointments you have booked months in advance and those that pop up within the hour, this diamond-accented watch makes a worthy companion. From Citizen.','200', 'Watches');

SELECT * FROM Products;

USE ecommerce_dB;

CREATE TABLE Contacts (
contact_id INT NOT NULL AUTO_INCREMENT, 
first_name VARCHAR(255), 
last_name VARCHAR(500), 
contact_email VARCHAR(100),
contact_address VARCHAR(255),
city VARCHAR(70),
zipcode VARCHAR(15), 
state VARCHAR(5),
phone VARCHAR(15),
PRIMARY KEY (contact_id)
);

DESCRIBE Contacts;

INSERT INTO Contacts (contact_id, first_name, last_name, contact_email, contact_address, city, zipcode, state, phone)
VALUES 
(1, 'Lily', 'James', 'ljames@something.com', '4006 Board Street', 'Charlotte', '28213', 'NC','704-123-1234'),
(2, 'Reggie', 'Colley', 'rcolley@something.com', '469 Grand Drive', 'Uniondale', '11553', 'NY','704-173-1984'),
(3, 'Kalvin', 'Boyer', 'kboyer@something.com', '766 Valley Circle', 'Muskegon', '49441', 'MI','704-983-1654'),
(4, 'Edgar', 'Parks', 'eparks@something.com', '576 Cementery Court', 'Racine', '53402', 'WI','704-653-1287'),
(5, 'Stefo', 'McCoy', 'smccoy@something.com', '9974 Windfall Street', 'Trevose', '19053', 'PA','704-923-9844'),
(6, 'Piper', 'Rigby', 'prigby@something.com', '300 Proctor Avenue', 'Adrian', '49221', 'MI','704-103-1256'),
(7, 'Imaan', 'Sims', 'isims@something.com', '93 S York Avenue', 'Jacksonville', '28540', 'NC','704-198-1724'),
(8, 'Prince', 'Herbert', 'pherbet@something.com', '323 Lincoln Lane', 'Fort Wayne', '46804', 'IN','704-973-8467'),
(9, 'Aniya', 'Buck', 'abuck@something.com', '726 8th Street', 'Ladson', '29456', 'SC','704-193-9564'),
(10, 'Jai', 'Long', 'jlong@something.com', '227 Court Street', 'Perkasie', '18944', 'PA','704-093-1024');

SELECT * FROM Contacts;

CREATE TABLE Price (
price_id INT NOT NULL AUTO_INCREMENT, 
product_name VARCHAR(255),
category VARCHAR(50), 
currency VARCHAR(25),
price_amount VARCHAR(25),
PRIMARY KEY (price_id)
);

DESCRIBE Price;

INSERT INTO Price (price_id, product_name, category, currency,price_amount)
VALUES 
(1, 'Necklace Chain, 14K Gold', 'Necklaces', 'USD$$', '140'),
(2, 'GOLD Shine™ Necklace', 'Necklaces', 'USD$$', '115'),
(3, 'Classic Cable Chain Necklace', 'Necklaces', 'USD$$', '120'),
(4, 'Alluring Brilliant Marquise Ring, Clear CZ & 14K Gold', 'Rings', 'USD$$', '125'),
(5, 'Linked Love Ring, PANDORA Shine™', 'Rings', 'USD$$', '80'),
(6, 'Exotic Stones Ring, Pandora Shine™', 'Rings', 'USD$$', '115'),
(7, 'Petite Runway Mercer Pavé Rose Gold-Tone and Pearl Watch', 'Watches', 'USD$$', '120'),
(8, 'Mini Lauryn Pavé Gold-Tone Watch', 'Watches', 'USD$$', '140'),
(9, 'Jaryn Rose Gold-Tone and Acetate Watch', 'Watches', 'USD$$', '170'),
(10, 'Judith Ripka Goldtone Stainless LinkWatch', 'Watches', 'USD$$', '160'),
(11, '14K Gold Oval Byzantine Watch', 'Watches', 'USD$$', '160'),
(12, 'Citizen Eco-Drive Womens Goldtone Diamond Accent Watch', 'Watches', 'USD$$', '200');

SELECT * FROM Price;
DESCRIBE Products;
DESCRIBE Contacts;
DESCRIBE Price;





