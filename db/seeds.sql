-- Populating Table information/seeds
INSERT IGNORE INTO department(department_name)
VALUES 
    ("Sales"),
    ("Finance"),
    ("Marketing"),
    ("Engineering"),
    ("Legal"),
    ("Human Resources")
;

INSERT IGNORE INTO roles(title, salary, department_id)
VALUES
    ("Enterprise Account Executive", 115000, 1),
    ("Mid-Market Account Executive", 95000, 1), 
    ("Director of Sales", 145000, 1), 
    ("Analyst", 75000, 2), 
    ("CFO", 350000, 2), 
    ("Marketing Associate", 65000, 3),
    ("Marketing Manager", 95000, 3),
    ("Director of Marketing", 150000, 3),
    ("Junior Engineer", 85000, 4),
    ("Senior Engineer", 125000, 4), 
    ("General Council", 150000, 5),
    ("Chief Counsel", 300000, 5),
    ("Human Resources Generalist", 70000, 6),
    ("Human Resources Administrator", 95000, 6), 
    ("Director of Human Resources", 100000, 6)
;

INSERT IGNORE INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Debra", "Macintosh", 1, 3),
    ("Susan", "Jones", 2, 3),
    ("Janice", "Hearting", 3, null),
    ("Rhonda", "Bailey", 4, 5),
    ("Melody", "Hart", 5, null),
    ("Joanne", "Pitt", 6, 8),
    ("Olivia", "Pike", 7, 8),
    ("Emma", "Johnson", 8, null),
    ("Ava", "Miller", 9, 10),
    ("Isabella", "Davis", 10, null),
    ("Mia", "Brown", 11, 12),
    ("Judy", "Smith", 12, null),
    ("Aurora", "Lewis", 13, 15),
    ("Lily", "Harris", 14, 15),
    ("Hazel", "Allen", 15, null)
; 