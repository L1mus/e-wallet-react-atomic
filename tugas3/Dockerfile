#Base Image ubuntu noble
FROM ubuntu:noble

#Jalankan upgrade lalu update kemudian install openssh
RUN apt-get update 
RUN apt-get install openssh-server -y

#menambah user limus dengan option buat dir /home jika tidak ada dan mengatur users login shell ke file /bin/bash  
RUN useradd -m -s /bin/bash limus

#menambah group baru
RUN groupadd devteams

#menambah anggota ke grup
RUN usermod -aG devteams limus

#Buat directory parent /home/limus/.ssh
RUN mkdir -p /home/limus/.ssh

# ubah permission pada file /home/limus/.ssh ke user/owner rwx group --- other ---
RUN chmod 700 /home/limus/.ssh

# copy key public yang sudah di buat di directory yang sama dengan Dockerfile ke /home/limus/.ssh/authorized_keys
COPY keysSSH.pub /home/limus/.ssh/authorized_keys

#Ubah kepemilikan file secara rekursif ke user limus dan group devteams 
RUN chown -R limus:devteams /home/limus/.ssh

#Ubah permission ke file /home/limus/.ssh/authorized_keys menjadi user/owner wr- group --- other ---
RUN chmod 600 /home/limus/.ssh/authorized_keys

#Ubah Permit root login ke no untuk keamanan root bisa di akses via ssh untuk kendali penuh container
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config

#Ubah password autentifikasi ke no agar nanti ketika ingin melakukan remote komukasi mengandalkan key public yang sudah diberikan
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config

#Ubah Publickey autentifikasi ke yes 
RUN sed -i 's/#PubkeyAuthentication no/PubkeyAuthentication yes/' /etc/ssh/sshd_config

#Buat file sshd
RUN mkdir -p /var/run/sshd

EXPOSE 22

#Menjalankan ssh daemon dan menjalankan nya di foreground sehingga container tetap berjalan terus
CMD ["/usr/sbin/sshd", "-D"]
