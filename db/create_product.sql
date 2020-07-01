insert into prods (
  name,
  description,
  price,
  mage_url
) values (
  $1, 
  $2, 
  $3,
  $4
);

select * from prods