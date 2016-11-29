DROP TABLE IF EXISTS grojjItems;
DROP TABLE IF EXISTS grojjUsers;
DROP TABLE IF EXISTS grojjAddresses;
DROP TABLE IF EXISTS grojjStorefronts;

BEGIN;

CREATE TABLE grojjItems(
  item_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  image_url VARCHAR,
  condition VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  description VARCHAR,
  likes INT NOT NULL DEFAULT 0,
  currentUser VARCHAR NOT NULL,
  currentStorefront VARCHAR NOT NULL
);

CREATE TABLE grojjUsers(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE
);

CREATE TABLE grojjStorefronts(
  storefront_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  borough VARCHAR NOT NULL,
  zip VARCHAR NOT NULL,
  directions VARCHAR,
  sale_date VARCHAR NOT NULL,
  startTime VARCHAR NOT NULL,
  endTime VARCHAR NOT NULL,
  unitedState VARCHAR NOT NULL,
  currentUser VARCHAR NOT NULL
);

CREATE TABLE grojjAddresses(
  address_id SERIAL PRIMARY KEY,
  street VARCHAR NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'NY',
  zip VARCHAR NOT NULL,
  latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL
);

COMMIT;
