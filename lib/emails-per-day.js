module.exports = [
  { $project: { 
    date: { 
      $dateToString: { 
        format: '%Y-%m-%d', date: '$headers.Date' 
      } 
    } 
  } 
  },
  { $group: {
    _id: '$date',
    totalemails: {
      $sum: 1
    }
  } },
  { $group: {
    _id: null,
    min: {
      $min: '$totalemails'
    },
    max: {
      $max: '$totalemails'
    },
    avg: {
      $avg: '$totalemails'
    }
  } }
];
