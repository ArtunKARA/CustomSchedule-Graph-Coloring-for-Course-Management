//Ders Create
CREATE (:Ders{dersIsmi:"",ogrenciSayisi:,sinif:""})

//Ogretmen Create
CREATE (:Ogretmen{Ismi:""})

//MusaitZamanlar Create
CREATE (:MusaitZamalar{Gun:"",MusaitSaatler:""})

//Ogretmen add MusaitZamalar
CREATE (m:MusaitZamalar {Gun: "pazartesi", MusaitSaatler: "1,2,3"})
WITH m
MATCH (o:Ogretmen)
WHERE o.Ismi = "a"
CREATE (o)-[:Muasit]->(m)