## perbedaan linux kernel dan distro

Kernel merupakan base os yang pasti dimiliki seluruh distro
sedangakan distro adalah pengembangan dari linux kernel yang memiliki feature feature tambahan sesuai dengan distro masing masing seperti software,tools, dekstop environtment

## Linux FHS adalah

adalah standard hirarki file dalam sistem linux yang mengatur directory dan file
contoh

```
/
|
L/home
|
L/etc
|
L/dev
|
L/var
|    |
|    L/cache
|    L/log
|    L/spool
|    L/tmp
L/usr
|
L/lib
```

## Owner dan Permission

Owner merupakan pemilik dari file yang berisikan sumber user
group nerupakan sebuah penelompokan user dalam sistem Linux
Other merupakan pengguna lain yang tidak masuk dalam owner dan group
setiap file dan direktori memiliki batasan akses dengan izin dan batasan penggunaan melalui kepemilikan

## Prinsip Encryption SSH

Untuk menjaga keamanan komunikasi antar client dan remote server dengan menggunakan key pair public key dan private key dimana private key di simpan oleh client dan public key di kirim ke server untuk di duplikasi untuk autentikasi ketika terjadi komunikasi

## perbedaan HTTP dan HTTPS

Port HTTP 80 dan HTTPS 443
HTTPS lebih aman di banding HTTP dalam keaman pengiriman data karna kekuranga HTTP yang mengirim data secara mentah
teknologi HTTPS yaitu SSL/TLS melindungi data dan dapat menjamin privasi antara client dan server dalam mengirim data

## OCI standard

Runtime Spesification mengatur cara menjalankan "filesystem bundle" kontainer contoh implementasinya adalah runc

Image Specification (image-spec): Mendefinisikan format standar untuk image kontainer (manifest, konfigurasi).

Distribution Specification (distribution-spec): Menstandarisasi API untuk mendistribusikan image kontainer (seperti Docker Hub atau registry lainnya).

## Perbedaan Container dan VM

Kontainer seperti Docker dan Virtual Machine VM adalah teknologi virtualisasi dengan perbedaan mendasar: kontainer memvirtualisasi sistem operasi (OS) agar ringan dan portabel, sementara VM memvirtualisasi perangkat keras fisik sehingga lebih berat dan terisolasi. Kontainer berbagi kernel OS host, membuat booting hitungan detik, sedangkan VM membawa guest OS

## images layer pada docker

Image layer pada Docker adalah lapisan-lapisan sistem file read-only (tidak dapat diubah) yang ditumpuk satu sama lain untuk membentuk sebuah Docker Image. Setiap lapisan mewakili instruksi spesifik (seperti RUN, COPY, ADD) dalam Dockerfile yang menambahkan, menghapus, atau mengubah file dari lapisan sebelumnya
sistem Cache yang mengefesiensikan waktu dalam membuat instance comtainer lainnya dalam deployment maksud mengefisiesikan adalah kita tidak perlu melakukan menjalakan setiap perintah yang ada jika tidak terjadi perubahan pada baris tersebut

## penggunaan docker Volume dan newtwork

Volume sebagai disk virtual yang digunakan oleh container , untuk menyimpan file file atau data pengguna dilokasi lain yang relatif aman, docker container juga bisa menggunakan penyimpanan selain docker volume, yaitu dengan terhubung langusung ke data lokal komputer command `docker volume`

Network Jaringan virtual yang memungkinkan setiap cotainer berkomunikasi dengan docker network kita dapat dengan mudah mengatur container mana yanh harus ada di dalam raung lingkup yang sama
jenis newridk di diocker ada bridge(defaukt),host dan none command `docker network`

## penggunaan web server dan reverse proxy

penggunaan web server penyimpan, pemroses, dan penyaji konten situs web (HTML, CSS, gambar, video) kepada pengguna melalui browser internet. Ia menerima permintaan HTTP/HTTPS dari klien, memprosesnya, dan mengirimkan kembali data yang diminta agar halaman website dapat ditampilkan.
reverse proxy load balancing mendistribusikan beban ke setiap instance server untuk mencegah overload pada 1 server saja
peningkatan keamanan melindungi server backend dengan menyembunyikan IP aslinya
caching dan akses cepat : menhyediakan resource yang selalu di request oleh client sehingga tidak perlu memproses ke backend lagi cukup samapi di webserver
kopresi data
enkripsi ssl/tls
