drop table if exists shelfie_table;

create table shelfie_table(
    product_id serial,
    image_url text,  
    product_Name varchar(80),
    price integer
);

insert into shelfie_table
    (image_url, product_Name, price) 
 Values 
    ('https://lor66yzmui-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/decker_306-830x467.jpg', 'Jeans', 50),
    ('https://lor66yzmui-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/decker_306-830x467.jpg', 'shorts', 40),
    ('https://lor66yzmui-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/decker_306-830x467.jpg', 't-shirt', 30);