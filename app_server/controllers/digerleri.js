
/* GET home page. */

const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında','footer': 'Ömer Mert Usta 2020', });
}
module.exports={
	hakkinda
}
