BEGIN;

INSERT INTO grojjItems(item_id, name, image_url, condition, price, description, likes, currentUser, currentStorefront) VALUES

(1, 'Orange Vintage Armchair', 'http://www.chesterfieldsinlincolnlimited.co.uk/wp-content/uploads/2014/12/Orange-QA.png', 'Barely Used', '$', '', '0', '', ''),
(2, 'Parks and Recreation Mug', 'http://cdn.shopify.com/s/files/1/0227/5849/products/mug_11oz_handle_on_right_mockup_2.png?v=1463536641', 'Used', '$$', '', '0', '', ''),
(3, 'My walkman from 1996', 'http://davidnaylor.org/temp/d-ne700.png', 'Used', '$', '', '', '', ''),
(4, 'Piggy Bank', 'http://www.adwealthgroup.com/beta/wp-content/uploads/revslider/homepage/ahorro.png', 'Used', '$', '', '0', '', ''),
(5, 'John Deere hat', 'http://images.customplanet.com/UserCreatedImages/MainDisplayImages/Front/92da3665-1ce9-4a0c-a5f8-2ea7793c5691.png', 'New', '$$', '', '0', '', ''),
(6, 'Fahrenheit 9/11 DVD', 'https://fanart.tv/fanart/movies/1777/moviedisc/fahrenheit-911-57365e6549c32.png', 'Used', '$', '', '0', '', ''),
(7, 'Alarm Clock', 'http://www.officialpsds.com/images/thumbs/Alarm-Clock-psd74994.png', 'New', '$', '', '0', '', ''),
(8, 'Chicago Bulls jersey', 'http://www.thesportsdb.com/images/media/team/jersey/uuxtxv1431440165.png', 'New', '$$$', '', '0', '', ''),
(9, 'Glass coffee table', 'http://freepngimages.com/wp-content/uploads/2015/10/Chrome-Coffee-Table-transparent-background.png', 'Barely Used', '$', '', '0', '', ''),
(10, 'Game of Thrones Board Game', 'http://www.fantasyflightgames.com/ffg_content/agot-bg-2nd-ed/board.png', 'Used', '$$', '', '0', '', '');

INSERT INTO grojjaddresses(address_id, street, city, state, zip, latitude, longitude) VALUES

(1, '180 Rivington St', 'New York', 'NY', '10002', '40.718789°', '-73.984037°'),
(2, '420 Hudson St', 'New York', 'NY', '10014', '40.730321°', '-74.006565°'),
(3, '124 E 19th St', 'New York', 'NY', '10003', '40.737042°', '-73.98653°'),
(4, '216-218 11th Ave', 'New York', 'NY', '10001', '40.750108°', '-74.00614°'),
(5, '148 E 79th St', 'New York', 'NY', '10075', '40.774811°', '-73.958785°'),
(6, '233 W 109th St', 'New York', 'NY', '10025', '40.803194°', '-73.965657°'),
(7, '346 W 118th St', 'New York', 'NY', '10026', '40.806317°', '-73.956094°'),
(8, '85 Livingston St', 'Brooklyn', 'NY', '11201', '40.691588°', '-73.990549°'),
(9, '8666 23rd Ave', 'Brooklyn', 'NY', '11214', '40.59941°', '-73.993082°'),
(10, '243 W 54th St', 'New York', 'NY', '10019', '40.764522°', '-73.983276°');

INSERT INTO grojjusers(user_id, userimage_url, username, password) VALUES
(1, 'https://img.buzzfeed.com/buzzfeed-static/static/2016-11/18/17/asset/buzzfeed-prod-fastlane01/sub-buzz-21330-1479506533-8.jpg?resize=625:781', 'annaK234', 'annakendrick');


COMMIT;
