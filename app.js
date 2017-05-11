const koa     = require('koa'),
      router  = require('koa-router')(),
      logger  = require('koa-logger'),
      serve   = require('koa-static'),
      hbs     = require("koa-handlebars");


const app = new koa();

// Logger
app.use(logger());
app.use(serve(process.cwd() + '/dist'));

app.use(hbs({
  defaultLayout: 'main', 
  viewsDir: './views', 
  layoutsDir: './views/layouts', 
  partialsDir: './views/partials', 
  extension: 'hbs',
  cache: false
}));

router
  .get('/', function *() {
    yield this.render('home', {
      title: 'Home'
    });
  })

  .get('/blog', function *() {
    yield this.render('blog', {
      title: 'blog'
    });
  })

  .get('/post', function *() {
    yield this.render('post', {
      title: 'project-title'
    });
  })

  .get('/uxsummit', function *() {
    yield this.render('blogposts/uxsummit', {
      title: 'project-title'
    });
  })

  .get('/messaging', function *() {
    yield this.render('portfolio/messaging', {
      title: 'messaging'
    });
  })

  .get('/hotnight', function *() {
    yield this.render('portfolio/hotnight', {
      title: 'hotnight'
    });
  })

  .get('/lighthouselabs', function *() {
    yield this.render('portfolio/lighthouselabs', {
      title: 'lighthouselabs'
    });
  })

  .get('/kidsclub', function *() {
    yield this.render('portfolio/kidsclub', {
      title: 'Canucks kids club'
    });
  })

  .get('/digital-divide', function *() {
    yield this.render('portfolio/digitaldivide', {
      title: 'Nuancing the Digital Divide'
    });
  })

  .get('/stormythreads', function *() {
    yield this.render('portfolio/stormythreads', {
      title: 'Stormy Threads'
    });
  })

  .get('/posters', function *() {
    yield this.render('portfolio/posters', {
      title: 'Graphic posters'
    });
  })

  .get('/wip', function *() {
    yield this.render('portfolio/wip', {
      title: 'Works in progress'
    });
  })

  .get('/bd-hack', function *() {
    yield this.render('portfolio/bd-hack', {
      title: 'BuildDirect Hackathon Project'
    });
  })

  .get('/forward', function *() {
    yield this.render('portfolio/forward', {
      title: 'Code it Forward'
    });
  })

  .get('/possible', function *() {
    yield this.render('portfolio/possible', {
      title: 'Possible Canadas'
    });
  });
app.use(router.routes());

if (!module.parent) {
  app.listen(process.env.PORT || 3300);
  console.log('listening on port 3300');
}