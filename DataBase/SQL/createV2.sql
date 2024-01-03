--mssql
USE TEST;



CREATE TABLE Day (
    dayID int PRIMARY KEY IDENTITY(1,1),
    hourGap varchar(11) 
);

CREATE TABLE ClassTypes (
    classTypeID int PRIMARY KEY IDENTITY(1,1),
    name nvarchar(50)
);

CREATE TABLE Students (
    studentID int PRIMARY KEY IDENTITY(1,1),
    name nvarchar(50),
    email nvarchar(50)
   );

CREATE TABLE Lessons (
    lessonID int PRIMARY KEY IDENTITY(1,1),
    name nvarchar(50),
    requiredHours int
);

CREATE TABLE Classes (
    classID int PRIMARY KEY IDENTITY(1,1),
    capacity int,
    classAddress nvarchar(150),
    classTypeID int,
    FOREIGN KEY (classTypeID) REFERENCES ClassTypes(classTypeID)
);

CREATE TABLE Teachers (
    teacherID int PRIMARY KEY IDENTITY(1,1),
    name nvarchar(50),
    email nvarchar(50)
);

CREATE TABLE LessonTeacher (
    lessonTeacherID int PRIMARY KEY IDENTITY(1,1),
    lessonID int,
    teacherID int,
    FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID),
    FOREIGN KEY (teacherID) REFERENCES Teachers(teacherID)
);

CREATE TABLE StudentLesson (
    studentLessonID int PRIMARY KEY IDENTITY(1,1),
    lessonID int,
    studentID int,
    FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID),
    FOREIGN KEY (studentID) REFERENCES Students(studentID)
);

CREATE TABLE TimeTable (
    cellID int PRIMARY KEY IDENTITY(1,1),
    day nvarchar(14),
    hourID int,
    teacherID int,
    lessonID int,
    classID int,
    FOREIGN KEY (hourID) REFERENCES Day(dayID),
    FOREIGN KEY (teacherID) REFERENCES Teachers(teacherID),
    FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID),
    FOREIGN KEY (classID) REFERENCES Classes(classID)
);

CREATE TABLE TeacherSchedule (
    teacherScheduleID int PRIMARY KEY IDENTITY(1,1),
    teacherID int,
    monday varchar(72),
    tuesday varchar(72),
    wendnesday varchar(72),
    thursday varchar(72),
    friday varchar(72),
    saturday varchar(72),
    sunday varchar(72),
    FOREIGN KEY (teacherID) REFERENCES Teachers(teacherID)
);