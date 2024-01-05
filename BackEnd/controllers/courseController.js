const e = require("express");
const connection = require("../service/connection.js");

exports.getAllCourses = (req, res) => {
    const q = "SELECT * FROM Dersler";
    connection.query(q, (err, data) => {
        if (err) throw err
        res.json(data);
    });
}

exports.getCourseByCourseId = (req, res) => {
    const q = "SELECT * FROM Dersler WHERE id = ?";
    connection.query(q, [req.params.id], (err, data) => {
        if (err) throw err;
        res.json(data);
    });
}

exports.createCourse = (req, res) => {
    const q = "INSERT INTO Dersler (isim, ogrenciSayisi, egitmenId) SET (?, ?, ?)";
    const course = [req.body.isim, req.body.ogrenciSayisi, req.body.egitmenId];
    connection.query(q, course, (err, data) => {
        if (err) throw err;
        res.json("course data inserted");
    });
}