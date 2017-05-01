const koa     = require('koa'),
      router  = require('koa-router')(),
      logger  = require('koa-logger'),
      serve   = require('koa-static'),
      hbs     = require("koa-handlebars");


const app = new koa();

process.env.PWD = process.cwd()
// Logger
app.use(logger());
app.use(serve(process.env.PWD + '/dist'));


app.use(hbs({
  defaultLayout: 'main', 
  viewsDir: './views', 
  layoutsDir: './views/layouts', 
  partialsDir: './views/partials', 
  extension: 'hbs',
  cache: false
}));

router.get('/', function *() {
  yield this.render('home', {
    title: 'Home'
  });
});

router.get('/blog', function *() {
  yield this.render('blog', {
    title: 'blog'
  });
});

router.get('/post', function *() {
  yield this.render('post', {
    title: 'project-title'
  });
});

router.get('/uxsummit', function *() {
  yield this.render('blogposts/uxsummit', {
    title: 'project-title'
  });
});

router.get('/messaging', function *() {
  yield this.render('portfolio/messaging', {
    title: 'messaging'
  });
});

router.get('/hotnight', function *() {
  yield this.render('portfolio/hotnight', {
    title: 'hotnight'
  });
});

router.get('/lighthouselabs', function *() {
  yield this.render('portfolio/lighthouselabs', {
    title: 'lighthouselabs'
  });
});

router.get('/kidsclub', function *() {
  yield this.render('portfolio/kidsclub', {
    title: 'Canucks kids club'
  });
});

router.get('/digital-divide', function *() {
  yield this.render('portfolio/digitaldivide', {
    title: 'Nuancing the Digital Divide'
  });
});

router.get('/stormythreads', function *() {
  yield this.render('portfolio/stormythreads', {
    title: 'Stormy Threads'
  });
});

app.use(router.routes());

if (!module.parent) {
  app.listen(process.env.PORT || 1337);
  console.log('listening on port 1337');
}