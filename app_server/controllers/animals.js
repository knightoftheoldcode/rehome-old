const index = function (req, res) {
  res.render('animals/index', { title: 'Animals - List' });
};

const show = function (req, res) {
  res.render('animals/index', { title: 'Animals - Show' });
};

module.exports = {
     index,
   show
};

