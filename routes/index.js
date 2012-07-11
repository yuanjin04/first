
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.news = function(req, res){
    res.header('Content-Type','text/html; charset=utf-8');
    res.header('aa','bb');
    res.render('news', { title:"News",name:"远近",value: 'Express 123123' })
};

exports.login=function(req,res){
    res.header('Content-Type','text/plain');
    //req.body.age={name:123};
    res.render('login-status',{data:JSON.stringify(req.body,undefined,'\t'),data1:[1,2,34,4,5],html:"<b style=\"color:red\">BOLD</b>",layout:false});
};