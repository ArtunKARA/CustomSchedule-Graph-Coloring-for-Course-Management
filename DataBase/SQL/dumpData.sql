USE TEST;

DECLARE @counter INT
SET @counter = 0

WHILE @counter < 24
BEGIN
    INSERT INTO Day (hourGap) VALUES (FORMAT(DATEADD(HOUR, @counter, '00:00'), 'HH:mm') + '-' + FORMAT(DATEADD(HOUR, @counter + 1, '00:00'), 'HH:mm'))
    SET @counter = @counter + 1
END

