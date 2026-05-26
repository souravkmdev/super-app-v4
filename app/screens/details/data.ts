const carDetailsData = {
  bannerImages: [
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
  ],

  info : {
    price : "12,80,000",
    name : "Grand Vitara"
  },

  modalImages: [
    'https://assets-global.website-files.com/63634f4a7b868a399577cf37/64665685a870fadf4bb171c2_labrador%20americano.jpg',
    'https://i0.wp.com/bcc-newspack.s3.amazonaws.com/uploads/2023/05/052323-Foxes-in-Millennium-Park-Colin-Boyle-9124.jpg?fit=1650%2C1099&ssl=1',
    'https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=2048x2048&w=is&k=20&c=xye_THXrYSdonhfGkhpRY4JvUGqLqjzV0tcxkbkvJVY=',
    'https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg',
    'https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=2048x2048&w=is&k=20&c=jbXMS_yFujUo29EIjPd8XBsEan-PAHUcPs0Zo1-HY_U=',
    'https://media.istockphoto.com/id/935746242/photo/mata-atlantica-atlantic-forest-in-brazil.jpg?s=2048x2048&w=is&k=20&c=X0Gcie74ozYJnS_4QwEI61_Omg7Kv8kfmAphsWve9Yk=',
    'https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=',
  ],

  highlights: [
    {
      key: 'Hybrid',
      title: 'Hybrid',
    },
    {
      key: 'Km',
      title: '23.Km/l',
    },
    {
      key: 'Ac',
      title: 'A/C',
    },
  ],

  colors: [
    {
      key: 'Red',
      color: '#A48FFF',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
    {
      key: 'Blue',
      color: '#E6FABE',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
    {
      key: 'Black',
      color: '#FACBBE',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
    {
      key: 'Royal Blue',
      color: '#24038D',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
  ],

  variants: [
    {
      key: 1,
      name: 'Sigma',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: true,
    },
    {
      key: 2,
      name: 'Delta',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: false,
    },
    {
      key: 3,
      name: 'Zeta',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: false,
    },
    {
      key: 4,
      name: 'Alpha',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: false,
    },
  ],
  about:
    'The Grand Vitara is a versatile SUV that combines style and functionality. With its spacious interior, advanced safety features, and impressive fuel efficiency, it’s perfect for both city driving and off-road adventures. The Grand Vitara also boasts a powerful engine and cutting-edge technology, making every journey enjoyable.',

  specifications: [
    {
      key: 'engine',
      title: 'Engine',
      value: '1462CC',
      icon: 'engine',
    },
    {
      key: 'power',
      title: 'Power',
      value: '103 BHP',
      icon: 'speedometer',
    },
    {
      key: 'alloy',
      title: 'Alloy',
      value: '17 Inch',
      icon: 'car-tire-alert',
    },
    {
      key: 'seats',
      title: 'Seats',
      value: '5 Seater',
      icon: 'car-seat',
    },
    {
      key: 'mileage',
      title: 'Mileage',
      value: '21 KM/L',
      icon: 'fuel',
    },
    {
      key: 'brakes',
      title: 'Brakes',
      value: 'ABS',
      icon: 'disc',
    },
  ],
};

export default carDetailsData;
