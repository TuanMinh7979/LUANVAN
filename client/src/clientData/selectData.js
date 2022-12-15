export const jobCats = [
  {
    _id: "635042e5ed1ee7636e6178d0",
    name: "IT",
  },
  {
    _id: "635042dded1ee7636e6178ce",
    name: "Bán hàng",
  },
  {
    _id: "6350425ded1ee7636e6178cc",
    name: "Kế toán",
  },
];

export const salaryTypes = [
  {
    _id: "639204922011ecee21d3d5c4",
    title: "Trong khoảng"
  },
  {
    _id: "6392049b2011ecee21d3d5c6",
    title: "Cố định"
  },
  {
    _id: "639204a22011ecee21d3d5c8",
    title: "Thỏa thuận"
  },
]
export const ranks =
  [{

    _id: "63920ecb75bd5201310c644d"
    ,
    title: "Thực tập sinh",


  }, {
    _id:
      "63920ee075bd5201310c644f",

    title: "Nhân viên",


  }, {
    _id:
      "63920ef675bd5201310c6451",

    title: "Trưởng nhóm",


  }, {
    _id:
      "63920f0475bd5201310c6453",

    title: "Trưởng/Phó phòng",


  }, {
    _id:
      "63920f0f75bd5201310c6455",

    title: "Quản lý / Giám sát",


  }, {
    _id:
      "63920f1c75bd5201310c6457",

    title: "Tổng chi nhánh",


  }, {
    _id:
      "63920f2975bd5201310c6459",

    title: "Giám đốc",


  }]


export const workTypes = [
  {
    _id: "639217641fcf965827a4d716",
    title: "Toàn thời gian"
  },
  {
    _id: "639217781fcf965827a4d718",
    title: "Bán thời gian"
  },
  {
    _id: "6392178d1fcf965827a4d71a",
    title: "Làm từ xa"
  },

]
export const workExps = [
  {
    _id: "639221e3528e21ed458af03d",

    title: "Không yêu cầu",

  }, {
    _id: "639221ec528e21ed458af03f",

    title: "Dưới 1 năm",

  }, {
    _id: "639221f2528e21ed458af041",

    title: "1 năm",

  }, {
    _id: "639221f6528e21ed458af043",

    title: "2 năm",

  }, {
    _id: "639221f9528e21ed458af045",

    title: "3 năm",

  }, {
    _id: "639221fe528e21ed458af047",

    title: "5 năm",

  }, {
    _id: "63922201528e21ed458af049",

    title: "Trên 5 năm",

  }
  , {
    _id: "639285cbaba1741daca28678",

    title: "Khoảng 1 đến 3 năm",

  }

]
export const addresss = [

  {
    _id: "638afe7f7ec61f444c65f4e0",

    title: "TP Hồ Chí Minh"
  },
  {
    _id: "638afe887ec61f444c65f4e2",

    title: "Cần Thơ"
  },
  {
    _id: "638afe8f7ec61f444c65f4e4",
    title: "Hà Nội"
  }, {
    _id: "6392263ff944c49d3c683aa7",
    title: "Đà Nẵng",

  },
  {
    _id:
      "638afe6c7ec61f444c65f4de",
    title: "Cà Mau"
  },
]



//salary jobs filter
export const salaryFilterSelect = [

  {
    _id: 1,

    title: "Đến 7 triệu",
    query: "salaryMax[lte]=7000000&salaryMax[ne]=0&"
  },

  {
    _id: 2,

    title: "Từ 7 triệu đến 15 triệu",
    query: "salaryMin[gte]=7000000&salaryMax[lte]=15000000&"
  },

  {
    _id: 3,
    title: "Từ 15 triệu",
    query: "salaryMax[gte]=15000000&"
  },
  {
    _id: 4,
    title: "Thoả thuận",
    query: "salaryMin[eq]=0&salaryMax[eq]=0&"
  }

]


// enum: ["consider", "interview", "accept", "refuse"]
export const contactProcesses = [

  {
    val: 1,

    title: "Xem xét",

  },

  {
    val: 2,

    title: "Phỏng vấn",

  },

  {
    val: 3,
    title: "Hợp tác",

  },
  {
    val: 0,
    title: "Từ chối",

  }

]




