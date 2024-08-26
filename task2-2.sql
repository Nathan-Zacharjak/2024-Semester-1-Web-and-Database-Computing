CREATE TABLE Students (student_id VARCHAR(100), given_name VARCHAR(100), family_name VARCHAR(100), program VARCHAR(100));

CREATE TABLE Subjects (subject_code VARCHAR(100), subject VARCHAR(100), faculty VARCHAR(100));

CREATE TABLE Enrolments (student_id VARCHAR(100), subject_code VARCHAR(100), mark INT);


INSERT INTO Students (student_id, given_name, family_name, program) VALUES ('a1111111', 'Fang', 'Li', 'BE(Hons)(Soft)');

INSERT INTO Students (student_id, given_name, family_name, program) VALUES ('a1111112', 'Jane', 'Brown', 'BE(Hons)(Soft)');

INSERT INTO Students (student_id, given_name, family_name, program) VALUES ('a1111113', 'Bob', 'Smith', 'BCompSc');

INSERT INTO Students (student_id, given_name, family_name, program) VALUES ('a1111114', 'Wei', 'Zhang', 'BCompSc');


INSERT INTO Subjects (subject_code, subject, faculty) VALUES ('COMP SCI 1102', 'Object Oriented Programming', 'ECMS');

INSERT INTO Subjects (subject_code, subject, faculty) VALUES ('COMP SCI 2207', 'Web and Database Computing', 'ECMS');

INSERT INTO Subjects (subject_code, subject, faculty) VALUES ('COMP SCI 2000', 'Computer Systems', 'ECMS');

INSERT INTO Subjects (subject_code, subject, faculty) VALUES ('PHIL 2039', 'Philosophy of Mind', 'Arts');


INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111111', 'COMP SCI 1102', 62);

INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111111', 'COMP SCI 2000', 80);

INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111112', 'COMP SCI 1102', 55);

INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111112', 'COMP SCI 2207', 80);

INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111113', 'PHIL 2039', 65);

INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111113', 'COMP SCI 1102', 46);

INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111114', 'COMP SCI 2207', 67);

INSERT INTO Enrolments (student_id, subject_code, mark) VALUES ('a1111114', 'COMP SCI 2000', 49);

