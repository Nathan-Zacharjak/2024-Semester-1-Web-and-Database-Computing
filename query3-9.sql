SELECT staff_id, given_name, family_name FROM Teachers INNER JOIN Subjects
    ON Teachers.staff_id = Subjects.teacher_id
    INNER JOIN Enrolments
    ON Subjects.subject_code = Enrolments.subject_code
    WHERE student_id = 'a1111113' AND Teachers.faculty = 'ECMS';