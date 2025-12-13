-- 1. How many tasks are in the task table?
SELECT  COUNT(*) AS total FROM  task ;   

-- 2. How many tasks in the task table do not have a valid due date?
SELECT  count(*) AS unValid FROM task WHERE due_date IS null

-- 3. Find all the tasks that are marked as done.
SELECT *  FROM task WHERE status_id = 3;

-- 4. Find all the tasks that are not marked as done.
SELECT * FROM task WHERE status_id != 3;

-- 5. Get all the tasks, sorted with the most recently created first.
SELECT  * FROM  task ORDER BY created DESC 

-- 6. Get the single most recently created task.
SELECT  * FROM  task ORDER BY  created DESC  LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database.
SELECT title, due_date FROM task WHERE  title LIKE  "%database%" OR description LIKE "%database%";	

-- 8. Get the title and status (as text) of all tasks.
SELECT task.title, status.name FROM task JOIN status ON task.status_id = status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status.
SELECT status.name AS status_name, COUNT(task.id) AS task_count FROM status LEFT JOIN task
ON status.id = task.status_id GROUP BY status.id, status.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first.
SELECT status.name AS status_name, COUNT(task.id) AS task_count FROM status
LEFT JOIN task ON status.id = task.status_id GROUP BY status.id, status.name ORDER BY task_count DESC