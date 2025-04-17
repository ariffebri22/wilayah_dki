# Aplikasi Pencarian Kecamatan

![Preview](https://ik.imagekit.io/ucgcz7azi/Cari%20Wilayah%20DKI%20WEB.png?updatedAt=1744913202205)

Aplikasi pencarian wilayah dengan autocomplete untuk menemukan kecamatan di DKI Jakarta.

## Fitur Utama

🔍 Pencarian realtime (debounce 300ms)  
📌 Bisa cari berdasarkan kecamatan/kota/provinsi  
💾 Penyimpanan pilihan terakhir  
🔄 Tombol reset pilihan  
📱 Responsive design

## Teknologi

-   **Frontend**: React + Vite + TailwindCSS
-   **Backend**: Express.js + MySQL
-   **Deployment**: Docker

## Cara Install

1. Clone repo:
    ```bash
    git clone https://github.com/ariffebri22/wilayah_dki.git
    cd wilayah_dki
    ```
2. Setup environment:

# Backend

cd wilayah_dki_be && npm install
cp .env.example .env

# Frontend

cd ../wilayah_dki-fe && npm install
cp .env.example .env

3. Jalankan
   docker-compose up --build

## Env

# Backend

DB_HOST=153.92.15.57
DB_USER=u241792908_wilayah_dki
DB_PASSWORD=WilayahDKI123
DB_NAME=u241792908_wilayah_dki
DB_PORT=3306

# Frontend

VITE_API_URL=http://localhost:8000
