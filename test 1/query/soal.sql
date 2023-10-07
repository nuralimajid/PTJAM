--insert tabel Departemen #soal 1
INSERT INTO DEPARTMENT (Dname, Dnumber, Dmgr_ssn) VALUES('Operation',3,453453453);

--select semua nama pegawai dari tabel pegawai dan nama departemen dari tabel departemen #soal 2
SELECT e.Ename AS namaPegawai, d.Dname AS namaDepartement FROM EMPLOYEE e
join DEPARTMENT d ON e.Dnumber = d.Dnumber;

-- select nama pegawai, nama proyek dan juga nama departemen dari tabel proyek dengan ketentuan lokasi di huston dan stafford #soal 3
SELECT e.Ename AS namaPegawai, d.Dname AS namaDepartement, p.Pname As namaProject FROM PROJECT p
JOIN DEPARTMENT d ON p.Dnum = d.Dnumber
JOIN EMPLOYEE e ON e.dnumber=d.dnum
WHERE Plocation = 'Houston' OR Plocation ='Stafford';