export const getMatch = (queryString, ...numberFields) => {
  //FOR $MATCH
  const queryObj = { ...queryString };
  const removeField = ["page", "sort", "limit", "fields"];
  removeField.forEach((el) => delete queryObj[el]);

  let queryStr = JSON.stringify(queryObj);

  queryStr = queryStr.replace(
    /\b(gte|gt|lte|lt|ne|eq)\b/g,
    (match) => `$${match}`
  );

  let a = JSON.parse(queryStr);

  if (numberFields) {

    for (let numField of numberFields) {
      if (a[numField]) {

        if (a[numField]['$gt'] && !isNaN(a[numField]['$gt'])) {
          a[numField]['$gt'] = parseFloat(a[numField]['$gt']);
        }
        if (a[numField]['$lt'] && !isNaN(a[numField]['$lt'])) {
          a[numField]['$lt'] = parseFloat(a[numField]['$lt']);
        }
        if (a[numField]['$lte'] && !isNaN(a[numField]['$lte'])) {
          a[numField]['$lte'] = parseFloat(a[numField]['$lte']);
        }
        if (a[numField]['$gte'] && !isNaN(a[numField]['$gte'])) {
          a[numField]['$gte'] = parseFloat(a[numField]['$gte']);
        }
        if (a[numField]['$ne'] && !isNaN(a[numField]['$ne'])) {
          a[numField]['$ne'] = parseFloat(a[numField]['$ne']);
        }
        if (a[numField]['$eq'] && !isNaN(a[numField]['$eq'])) {
          a[numField]['$eq'] = parseFloat(a[numField]['$eq']);
        }
        if (!isNaN(a[numField])) {
          a[numField] = parseFloat(a[numField])
        }

      }

    }

  }


  console.log(a)
  return a;
};


export const getSort = (sortString) => {
  //sort= -salary
  let a = { $sort: {} }
  let sortField = ""
  if (sortString.startsWith("-")) {
    sortField = sortString.substring(1);
    a["$sort"][sortField] = -1
  } else {
    sortField = sortString;
    a["$sort"][sortField] = 1
  }



  return a;

}

export const getPagination = (pagePar, limitPar) => {
  const page = pagePar * 1 || 1;
  const limitNum = limitPar * 1 || 10;
  const skipNum = (page - 1) * limitNum;

  return [{ $skip: skipNum }, { $limit: limitNum }]
}


