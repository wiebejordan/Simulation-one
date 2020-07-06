update shelfie_table
set image_url = ${imageUrl},
    product_name = ${productName},
    price = ${price}
where product_id = ${id};