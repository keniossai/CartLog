const SHOP_DATA = {
  collection:{
      id: 1,
      title: 'Collections',
      routeName: 'collection',
      items: [
        {
          id: 1,
          name: 'Ear Ring',
          imageUrl: 'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/07/gold-colored-earrings.jpg',
          price: 5000
        },
        {
          id: 2,
          name: 'Jewel Shutter',
          imageUrl: 'https://i.pinimg.com/originals/6d/b5/2d/6db52d76b167b48903b4a61228622ed3.jpg',
          price: 1800
        },
        {
          id: 3,
          name: 'Beach Short',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71QRaiMM7LL._AC_SL1000_.jpg',
          price: 2000
        },
        {
          id: 4,
          name: 'Reebok Crossfit',
          imageUrl: 'https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/9df78eab33525d08d6e5fb8d27136e95/r/e/reebok_crossfit_austin_ii_short_gold_dp4583_01_th.jpg',
          price: 1950
        },
        {
          id: 5,
          name: 'Brown Loafers Shoe',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1090/7042/products/a6f069174b155d77513c777548572c17.png?v=1571269294',
          price: 25000
        },
        {
          id: 6,
          name: 'Rally Pro B&W',
          imageUrl: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg',
          price: 8000
        },
        {
          id: 7,
          name: 'Grid Stripe',
          imageUrl: 'https://i1.wp.com/menclothing.xyz/wp-content/uploads/2019/07/Jacket-Vest-Pants-2018-High-quality-Men-Suits-Fashion-grid-stripe-Men-s-Slim-Fit-2.jpg?fit=800%2C800&ssl=1',
          price: 40000
        },
        {
          id: 8,
          name: 'Specter Denim',
          imageUrl: 'https://cdn.shopclues.com/images1/thumbnails/101449/640/1/146973691-101449741-1561615563.jpg',
          price: 12000
        },
        {
          id: 9,
          name: 'Torque Caelus',
          imageUrl: 'https://cdn.dalvey.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/t/o/torque_wrist_watch_white--03360.webp',
          price: 14000
        },
        {
          id: 10,
          name: 'Wine Slim fit Suit',
          imageUrl: 'https://image.made-in-china.com/2f0j00AsiQWruBHkzg/High-Quality-Fashion-Men-Slim-Fit-Wedding-Men-Suits.jpg',
          price: 26000
        },
        {
          id: 11,
          name: 'Geometric Beach Bag',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1pfLyazzuK1RjSspeq6ziHVXa6.jpg',
          price: 7500
        },
        {
          id: 12,
          name: 'Boot Locker DLX70L',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0242/3141/1792/products/BOOTLOCKERDLX70L-DARKSLATE-610934313710_10001454_darkslate-02M_MAIN_1024x1024.jpg?v=1571748183',
          price: 15000
        },
        {
          id: 13,
          name: 'Grey boy T-shirt',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1501/0532/products/product-image-110942888.jpg?v=1571439338',
          price: 2500
        },
        {
          id: 14,
          name: 'New Summer',
          imageUrl: 'https://global2019-static-cdn.kikuu.com/upload-productImg-28850704320060020_320_234.jpg?',
          price: 4000
        },
        {
          id: 15,
          name: 'Lakeshi',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1p6tquQOWBuNjSsppq6xPgpXao/LAKESHI-Women-Pumps-Extrem-Sexy-High-Heels-Women-Shoes-Thin-Heels-Female-Shoes-Wedding-Shoes-Gold.jpg',
          price: 14000
        },
        {
          id: 16,
          name: 'Wine Shoe',
          imageUrl: 'https://ng.swapix.com/uploads/items/95/thumb_95a090c03f38cfda79df4eae5e79706a_s5x4.jpg',
          price: 9000
        },
        {
          id: 17,
          name: 'Skin By Titan',
          imageUrl: 'https://staticimg.titan.co.in/Skinn/Catalog/FW04PFL_2.jpg',
          price: 26000
        },
        {
          id: 18,
          name: 'Daisy Marc Jacob',
          imageUrl: 'https://i5.walmartimages.com/asr/b8a1e0f8-7154-4a69-af22-f53b9970f291_3.600ef75af25b4fadb9aca2a6f96454a0.jpeg',
          price: 19000
        },
        {
          id: 19,
          name: 'Attrape-Reves',
          imageUrl: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--LP0083_PM1_Interior%20view.jpg?wid={IMG_WIDTH}&hei={IMG_HEIGHT}',
          price: 15000
        },
        {
          id: 20,
          name: 'Ustraa Cologne',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61h77zIRszL._SX679_.jpg',
          price: 30000
        }
      ]
    },
      accessories:{

      id: 2,
      title: 'Accessories',
      routeName: 'accessories',
      items: [
        {
          id: 21,
          name: 'Nevea After-Shave',
          imageUrl: 'https://www.nivea.co.uk/~/images/media-center-items/2/9/f-371895-1.png?h=1180&w=1010',
          price: 5000
        },
        {
          id: 22,
          name: 'WMark LCD',
          imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/W/92329_1558581021.jpg',
          price: 12500
        },
        {
          id: 23,
          name: 'Gold Watch',
          imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/h15_watch.png',
          price: 21000
        },
        {
          id: 24,
          name: 'Hand Dryer',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6opn3IdzdbGoRzdqqm41bju6BN5WWDSm7ahhgyorg7nafgsyG&usqp=CAU',
          price: 10000
        },
        {
          id: 25,
          name: 'Luxurax Rose Gold',
          imageUrl: 'https://i0.wp.com/luxurax.com/wp-content/uploads/2019/07/0_AULEEZE-18K-Rose-Gold-Real-Diamond-Couple-Wedding-Rings-For-Women-and-Men-Lovers-Rings-Set.jpg?fit=1000%2C1000&ssl=1',
          price: 15000
        },
        {
          id: 26,
          name: 'Analog Quatz Bracelet',
          imageUrl: 'https://www.markhortrends.pk/wp-content/uploads/2019/07/4-7.jpg',
          price: 17000
        },
        {
          id: 27,
          name: 'Rusian Neckless',
          imageUrl: 'https://www.poshtottydesigns.com/media/catalog/product/cache/521a7c155cd8b6caba84b4d4dd055a1f/m/i/mini_russian_group_1.jpg',
          price: 8550
        },
        {
          id: 28,
          name: 'Black Sapphire',
          imageUrl: 'https://www.lajerrio.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/0/901011-01.jpg',
          price: 6000
        },
        {
          id: 29,
          name: 'Double Heart Pendant',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0283/9845/2815/products/product-image-1125131713_771x1000.jpg?v=1577546759',
          price: 7000
        },
        {
          id: 30,
          name: 'Royce Leather',
          imageUrl: 'https://ak1.ostkcdn.com/images/products/12022043/Royce-Leather-100-Step-Wallet-RFID-Mens-Slim-Bifold-Wallet-e5dcbb1c-9566-4b62-8c3b-fd6dd336a697.jpg',
          price: 1890
        },
        {
          id: 31,
          name: 'Leather Bi fold Wallet',
          imageUrl: 'https://bellroy.imgix.net/dynamic-assets/W1siZnUiLCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vcHJvZHVjdC5pbWFnZXMuYmVsbHJveS5jb20vcHJvZHVjdF9pbWFnZXMvaW1hZ2VzLzAwMC8wMTMvNjU0L29yaWdpbmFsLzg4YmJhNzFkOTg5NWYwMDZkMzBkZGU2NjhlNTJmMjc1YmIyM2NhYWYzMTlmNzFmZDI1MDM2MDFjMmVkYTVjMzAuanBnIl1d/ac82892b5bd733da/88bba71d9895f006d30dde668e52f275bb23caaf319f71fd2503601c2eda5c30.jpg?w=730&h=487&fit=crop&crop=entropy&auto=format',
          price: 1500
        },
        {
          id: 32,
          name: 'Wild Stone',
          imageUrl: 'https://www.wildstone.in/wp-content/uploads/2018/10/Hydra-energy-bottle-100ml-grey-1.jpg',
          price: 22500
        },
        {
          id: 33,
          name: 'Amazing Grac',
          imageUrl: 'https://images.ulta.com/is/image/Ulta/2154024?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg',
          price: 19500
        },
        {
          id: 34,
          name: 'Bleu Chanel',
          imageUrl: 'https://image.made-in-china.com/2f0j00NAYQVwsMMcqu/Original-1-1-Channel-Perfume-Made-in-Prc.jpg',
          price: 30000
        },
        {
          id: 35,
          name: 'Victoria Secret',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61aAD6t%2BQ0L._SX466_.jpg',
          price: 18000
        },
        {
          id: 36,
          name: 'Olay Set',
          imageUrl: 'https://n3.sdlcdn.com/imgs/g/4/5/Victoria-s-Secret-Coconut-Passion-SDL404802429-1-b01bf.jpg',
          price: 8500
        }
      ]
    },

      kids:{

      id: 3,
      title: 'Kids Collection',
      routeName: 'kids',
      items: [
        {
          id: 37,
          name: 'Tuxedo',
          imageUrl: 'https://sc01.alicdn.com/kf/HTB1Okj3OpXXXXX4XXXXq6xXFXXX2.jpg',
          price: 14000
        },
        {
          id: 38,
          name: 'Ankara Gown',
          imageUrl: 'https://connectnigeria.com/articles/wp-content/uploads/2019/05/ms-izella-2.jpg',
          price: 7000
        },
        {
          id: 39,
          name: 'Moana Costume',
          imageUrl: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2841041618172',
          price: 6000
        },
        {
          id: 40,
          name: 'Wine Stripe',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1PDMvu79WBuNjSspeq6yz5VXaH/2018-Trendy-Kids-Dresses-Party-Girl-Clothes-Baby-Girl-Dress-Children-Clothing-Summer-Little-Girl-Clothing.jpg_640x640q70.jpg',
          price: 6065
        },
        {
          id: 41,
          name: 'Boy Ninja',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1qUdBnVOWBuNjy0Fiq6xFxVXay/Summer-Top-Baby-Boy-T-shirt-Clothes-Kids-Boys-Ninja-Clothes-Ninjago-t-shirt-Children-Clothing.jpg',
          price: 1785
        },
        {
          id: 42,
          name: 'Diesel Boys Top',
          imageUrl: 'https://images.child.boutique/wp-content/uploads/2015/04/DIESEL-KIDS-Boys-Yellow-The-Best-Way-Slogan-T-Shirt-600x600.jpg',
          price: 1985
        },
        {
          id: 43,
          name: 'T9 Candy Color',
          imageUrl: 'https://www.koogush.com/2005660-large_default/summer-cotton-baby-kids-boys-top-short-sleeve-caroon-airplane-t-shirt-children-tee-9-candy-colors.jpg',
          price: 1805
        },
        {
          id: 44,
          name: 'Spider Man Toddler Top',
          imageUrl: 'https://img10.joybuy.com/N0/s560x560_jfs/t30646/123/853285900/39016/ac5aa47/5bff4924N625ecbe1.jpg.dpg',
          price: 1850
        },
        {
          id: 45,
          name: 'Track Suit',
          imageUrl: 'https://image.kilimall.com/nigeria/shop/store/goods/1624/2018/04/1624_05765243846843021_720.jpg',
          price: 2800
        },
        {
          id: 46,
          name: 'Red Shoe',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB14c_mevNZWeJjSZFpq6xjBFXa9/party-girls-shoes-new-fashion-2019-baby-children-kids-girl-princess-leather-red-shoe-spring-autumn.jpg',
          price: 18500
        },
        {
          id: 47,
          name: 'Sandal Beach',
          imageUrl: 'https://i.pinimg.com/originals/a7/22/03/a722037ac52a5890477e3b489ad5227c.jpg',
          price: 4000
        },
        {
          id: 48,
          name: 'Ragazzi Scarpa',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1DgMCXrPx2eJjSZFBq6zmZVXa8/COZULMA-Delle-Ragazze-Dei-Ragazzi-Scarpe-Da-Ginnastica-Elegante-Fiore-Stampa-Floreale-Scarpe-Da-Tennis-Dei.jpg',
          price: 6000
        },
        {
          id: 49,
          name: 'Sleeveless Top',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1NsItPXXXXXaDXFXXq6xXFXXXI/Girls-Clothes-2017-Girl-Clothing-Sets-Kids-Clothes-Dot-Children-Clothing-Toddler-Girl-Red-Sleeveless-Tank.jpg',
          price: 4500
        },
        {
          id: 50,
          name: 'Red canvas',
          imageUrl: 'https://cdn.shopify.com/s/files/1/2805/4116/products/kids-shoes-for-girl-children-canvas-boys-sneakers-2017-spring-autumn-girls-flats-solid-fashion-24-black-boysandgirl-childrenscanvasshoe-nicerin-best-goods-free_336.jpg',
          price: 3500
        },
        {
          id: 51,
          name: 'Bridemaids Elegant Dress',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1083/6796/products/product-image-954147523.jpg?v=1571439437',
          price: 12500
        },
        {
          id: 52,
          name: 'Rainbow Printed Dress',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61t8tsPlLPL._AC_UX385_.jpg',
          price: 2850
        }
      ]
    },

      womens:{

      id: 4,
      title: 'Womens Collection',
      routeName: 'womens',
      items: [
        {
          id: 53,
          name: 'Blue Ankara Gown',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1MatTRVzqK1RjSZFoq6zfcXXa7/african-dresses-for-women-ankara-dresses-africain-women-dress-african-women-clothing-cotton-wax-traditional-africanl.jpg_q50.jpg',
          price: 25000
        },
        {
          id: 54,
          name: 'Floral Blouse',
          imageUrl: 'https://guddiesplanet.com/wp-content/uploads/2020/03/Summer-Fashion-Floral-Print-Blouse-Pullover-Ladies-O-Neck-Tee-Tops-Female-Women-s-Short-Sleeve.jpg',
          price: 2500
        },
        {
          id: 55,
          name: 'Floral Dress',
          imageUrl: 'https://shopzire.com/wp-content/uploads/2018/06/summer-floral-printed-women-vintage-dress-green-600x600.jpg',
          price: 18000
        },
        {
          id: 56,
          name: 'Red Dots Dress',
          imageUrl: 'https://theseamstressofbloomsbury.co.uk/wp-content/uploads/Mabel-Red-Moonshine-Spot-1000x1080.png',
          price: 8000
        },
        {
          id: 57,
          name: 'Striped Sweater',
          imageUrl: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/11/22/goods-first-img/1512068777323464735.jpg',
          price: 2500
        },
        {
          id: 58,
          name: 'Purple Dress',
          imageUrl: 'https://fabwoman.ng/wp-content/uploads/2019/03/purple-ankara-styles-for-weddings-8-1.jpg',
          price: 13500
        },
        {
          id: 59,
          name: 'White Blouse',
          imageUrl: 'https://contestimg.wish.com/api/webimage/578da4f506ff596682b30621-large.jpg?cache_buster=e01eb609c23b48b4c9597c549f93f0fc',
          price: 4500
        },
        {
          id: 60,
          name: 'Wine Gown',
          imageUrl: 'https://cf.shopee.ph/file/f141ddd75804a526b85c3bae0194573e',
          price: 13700
        },
        {
          id: 61,
          name: 'Bodycon Dress',
          imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/o/Women-s-Vintage-Bodycon-Dress---Red-Black-8052751.jpg',
          price: 16000
        },
        {
          id: 62,
          name: 'Classy Dinner Gown',
          imageUrl: 'https://76.my/Malaysia/elegant-korean-fashion-women-lady-mid-calf-formal-dinner-dress-lifeonlineshop-1704-16-lifeonlineshop@8.jpg',
          price: 20700
        },
        {
          id: 63,
          name: 'White Mini A',
          imageUrl: 'https://www.october77.com/wp-content/uploads/2019/05/16090-zlk9rz.jpg',
          price: 10000
        },
        {
          id: 64,
          name: 'Varsace Gold',
          imageUrl: 'https://i.ebayimg.com/images/g/xmMAAOSwq9lZg5Fy/s-l1600.jpg',
          price: 48000
        },
        {
          id: 65,
          name: 'African Printed',
          imageUrl: 'https://www.afrizar.com/dashboard/uploads/product/african-wax-dre1558294956133.jpeg',
          price: 20000
        },
        {
          id: 66,
          name: 'Padegao',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0005/4876/5743/products/Womens-Shoes-2020-High-Heels-Casual-OL-Korean-Shoes-Fashion-Women-Shoes-Kitten-Heels_1200x1200.jpg?v=1579163389',
          price: 18000
        },
        {
          id: 67,
          name: 'Puff Sleeveless',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0289/9673/products/product-image-285574674.jpg?v=1578618873',
          price: 20000
        },
        {
          id: 68,
          name: 'Mary Jane Heals',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0063/5269/9462/products/product-image-990211613.jpg?v=1572012225',
          price: 17500
        }
      ]
    },

      mens:{
      id: 5,
      title: 'Mens Collection',
      routeName: 'mens',
      items: [
        {
          id: 69,
          name: 'Mens Party Wear',
          imageUrl: 'https://5.imimg.com/data5/FE/KA/MY-30555720/men-party-wear-suits-500x500.jpg',
          price: 22000
        },
        {
          id: 70,
          name: 'Slim Fitted Warmsuit',
          imageUrl: 'https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/AC/E2/2662c43d-b8ac-441b-818b-08664bf390b7.jpg',
          price: 28000
        },
        {
          id: 71,
          name: 'Black Wikileaks',
          imageUrl: 'https://ae01.alicdn.com/kf/Hb5da584cf3ce469d9c98c6899ca3500cb/Mens-Formal-Shoes-Genuine-Leather-Corporate-Shoes-For-Men-Italian-Shoes-Men-Chaussure-Homme-Mariage-Scarpe.jpg',
          price: 25700
        },
        {
          id: 72,
          name: '15 by Dr Watson',
          imageUrl: 'https://media.un-cd.net/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/6/7/67_4.jpg',
          price: 23000
        },
        {
          id: 73,
          name: 'Casual Fashion',
          imageUrl: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/27738/257844/Jacket-Vest-Pants-Men-s-suits-2017-new-style-Men-s-casual-fashion-wool-suit__76935.1553945761.jpg?c=2?imbypass=on',
          price: 28000
        },
        {
          id: 74,
          name: 'Retro Block',
          imageUrl: 'https://i.pinimg.com/originals/a8/a5/9a/a8a59a38c85ff8ec3f7e3c1e88bfa774.jpg',
          price: 8500
        },
        {
          id: 75,
          name: 'Pin On Blazer',
          imageUrl: 'https://i.pinimg.com/originals/07/0d/a4/070da4a14b832b5c4e4a70316076ef61.jpg',
          price: 25000
        },
        {
          id: 76,
          name: 'Blue Check Sleeve',
          imageUrl: 'https://www.dhresource.com/0x0/f2/albu/g10/M00/37/09/rBVaVlyktamAaMItAACo9Qhz5no083.jpg',
          price: 2000
        },
        {
          id: 77,
          name: 'Vaspue Blazers',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71s2-Re6MUL._AC_UX385_.jpg',
          price: 16000
        },
        {
          id: 78,
          name: 'Fashion Slippers',
          imageUrl: 'https://sc02.alicdn.com/kf/HTB1r4nAj8jTBKNjSZFwq6AG4XXar.jpg',
          price: 5500
        },
        {
          id: 79,
          name: 'Prime Top',
          imageUrl: 'https://i2.wp.com/vitengetailor.com/wp-content/uploads/2019/12/Patchwork-African-Shirt-Geo-Paisley-Print-Long-Sleeves-Top-Mens-Ankara-Ghana-V-Neck-Cut-T.jpg_640x640.jpg?fit=640%2C640&ssl=1',
          price: 14000
        },
        {
          id: 80,
          name: 'Blue Jean',
          imageUrl: 'https://rohan.imgix.net/product/04399188.jpg?w=2500&auto=format&q=77',
          price: 3000
        },
        {
          id: 81,
          name: 'Manchester Jersey',
          imageUrl: 'https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw98c12d6a/images/57414701/Rebel_57414701_red_hi-res.jpg?sw=558&sh=558&sm=fit',
          price: 5000
        },
        {
          id: 82,
          name: 'Faded Jean Trouser',
          imageUrl: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/15132/146071/Sulee-Brand-Men-Spring-Summer-Jeans-Denim-Mens-Jeans-Slim-Fit-Plus-Size-to-40-Big__06722.1544531258.jpg?c=2&imbypass=on',
          price: 2500
        },
        {
          id: 83,
          name: 'Men Military Jean',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1aWQ.XHGYBuNjy0Foq6AiBFXap/Fashion-2019-New-Style-Men-s-Denim-Jackets-Men-Military-Jeans-Jacket-Top-Quality-MYDBSH-Brand.jpg',
          price: 3000
        },
        {
          id: 84,
          name: 'Plaid Striped',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1083/6796/products/product-image-1092955217_grande.jpg?v=1571439572',
          price: 9000
        }
      ]
  }
}

export default SHOP_DATA