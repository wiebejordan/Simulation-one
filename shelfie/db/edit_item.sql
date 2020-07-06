update shelfie_table
set image_url = ${imageURl},
    product_Name = ${productName},
    price = ${price}
where product_id = $1;