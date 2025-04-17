-- Active: 1744898044399@@153.92.15.57@3306@u241792908_wilayah_dki
CREATE TABLE wilayah (
  id BIGINT PRIMARY KEY,
  kecamatan VARCHAR(100) NOT NULL,
  kota VARCHAR(100) NOT NULL,
  provinsi VARCHAR(100) NOT NULL
);

INSERT INTO wilayah (id, kecamatan, kota, provinsi) VALUES
(3173010001, 'Gambir', 'Jakarta Pusat', 'DKI Jakarta'),
(3173010002, 'Tanah Abang', 'Jakarta Pusat', 'DKI Jakarta'),
(3173010003, 'Menteng', 'Jakarta Pusat', 'DKI Jakarta'),
(3173010004, 'Senen', 'Jakarta Pusat', 'DKI Jakarta'),
(3173010005, 'Cempaka Putih', 'Jakarta Pusat', 'DKI Jakarta'),
(3173010006, 'Johar Baru', 'Jakarta Pusat', 'DKI Jakarta'),
(3173010007, 'Kemayoran', 'Jakarta Pusat', 'DKI Jakarta'),
(3173010008, 'Sawah Besar', 'Jakarta Pusat', 'DKI Jakarta'),
-- Jakarta Barat
(3173020001, 'Cengkareng', 'Jakarta Barat', 'DKI Jakarta'),
(3173020002, 'Grogol Petamburan', 'Jakarta Barat', 'DKI Jakarta'),
(3173020003, 'Kalideres', 'Jakarta Barat', 'DKI Jakarta'),
(3173020004, 'Palmerah', 'Jakarta Barat', 'DKI Jakarta'),
(3173020005, 'Taman Sari', 'Jakarta Barat', 'DKI Jakarta'),
(3173020006, 'Tambora', 'Jakarta Barat', 'DKI Jakarta'),
(3173020007, 'Kebon Jeruk', 'Jakarta Barat', 'DKI Jakarta'),
(3173020008, 'Kembangan', 'Jakarta Barat', 'DKI Jakarta'),
-- Jakarta Selatan
(3173030001, 'Kebayoran Baru', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030002, 'Kebayoran Lama', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030003, 'Cilandak', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030004, 'Jagakarsa', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030005, 'Mampang Prapatan', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030006, 'Pancoran', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030007, 'Pasar Minggu', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030008, 'Pesanggrahan', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030009, 'Setiabudi', 'Jakarta Selatan', 'DKI Jakarta'),
(3173030010, 'Tebet', 'Jakarta Selatan', 'DKI Jakarta'),
-- Jakarta Timur
(3173040001, 'Cakung', 'Jakarta Timur', 'DKI Jakarta'),
(3173040002, 'Cipayung', 'Jakarta Timur', 'DKI Jakarta'),
(3173040003, 'Ciracas', 'Jakarta Timur', 'DKI Jakarta'),
(3173040004, 'Duren Sawit', 'Jakarta Timur', 'DKI Jakarta'),
(3173040005, 'Jatinegara', 'Jakarta Timur', 'DKI Jakarta'),
(3173040006, 'Kramat Jati', 'Jakarta Timur', 'DKI Jakarta'),
(3173040007, 'Makasar', 'Jakarta Timur', 'DKI Jakarta'),
(3173040008, 'Matraman', 'Jakarta Timur', 'DKI Jakarta'),
(3173040009, 'Pasar Rebo', 'Jakarta Timur', 'DKI Jakarta'),
(3173040010, 'Pulo Gadung', 'Jakarta Timur', 'DKI Jakarta'),
-- Jakarta Utara
(3173050001, 'Cilincing', 'Jakarta Utara', 'DKI Jakarta'),
(3173050002, 'Kelapa Gading', 'Jakarta Utara', 'DKI Jakarta'),
(3173050003, 'Koja', 'Jakarta Utara', 'DKI Jakarta'),
(3173050004, 'Pademangan', 'Jakarta Utara', 'DKI Jakarta'),
(3173050005, 'Penjaringan', 'Jakarta Utara', 'DKI Jakarta'),
(3173050006, 'Tanjung Priok', 'Jakarta Utara', 'DKI Jakarta'),
-- Kepulauan Seribu
(3173060001, 'Kepulauan Seribu Utara', 'Kepulauan Seribu', 'DKI Jakarta'),
(3173060002, 'Kepulauan Seribu Selatan', 'Kepulauan Seribu', 'DKI Jakarta');

