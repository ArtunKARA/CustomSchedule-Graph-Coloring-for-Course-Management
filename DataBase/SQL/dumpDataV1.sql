use school;
-- Egitmenler tablosuna örnek girişler
INSERT INTO Egitmenler (isim, musaitGunler) VALUES 
    ('Eğitmen 1', 'Pt,Sa,Ça'),
    ('Eğitmen 2', 'Pe,Cu,Ct,Pa'),
    ('Eğitmen 3', 'Pt,Pa');
    
-- Eğitmen 1 için müsait saatler
INSERT INTO SaatAraliklari (musaitSaatler, gun, egitmenId) VALUES 
    ('06,07,08', 'Pt', 1),
    ('14,15,16', 'Sa', 1),
    ('10,11,12', 'Ça', 1);

-- Eğitmen 2 için müsait saatler
INSERT INTO SaatAraliklari (musaitSaatler, gun, egitmenId) VALUES 
    ('17,18,19', 'Pe', 2),
    ('20,21,22', 'Cu', 2),
    ('00,01,02', 'Ct', 2),
    ('08,09,10', 'Pa', 2);

-- Eğitmen 3 için müsait saatler
INSERT INTO SaatAraliklari (musaitSaatler, gun, egitmenId) VALUES 
    ('12,13,14', 'Pt', 3),
    ('18,19,20', 'Pa', 3);

-- Dersler tablosuna örnek girişler
INSERT INTO Dersler (isim, ogrenciSayisi, egitmenId) VALUES 
    ('Matematik', 25, 1),
    ('Fizik', 20, 2),
    ('Biyoloji', 30, 3),
    ('Kimya', 15, 1);