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
      title: 'Maggie Caspar'
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
      title: 'UX Futures Summit'
    });
  })

  .get('/empathy', function *() {
    yield this.render('blogposts/empathy', {
      title: 'What is Empathy?'
    });
  })

  .get('/design', function *() {
    yield this.render('blogposts/design', {
      title: 'How did you become a Designer?'
    });
  })

  .get('/develop', function *() {
    yield this.render('blogposts/develop', {
      title: 'How did you become a Developer?'
    });
  })

  .get('/messaging', function *() {
    yield this.render('portfolio/messaging', {
      title: 'Messaging Feature for ParkPnP'
    });
  })

  .get('/ebrake', function *() {
    yield this.render('portfolio/ebrake', {
      title: 'Creating a sleek corporate experience'
    });
  })

    .get('/dittly', function *() {
    yield this.render('portfolio/dittly', {
      title: 'Solving the DIY experience'
    });
  })


  .get('/hotnight', function *() {
    yield this.render('portfolio/hotnight', {
      title: 'Hotnight.ca'
    });
  })

  .get('/lighthouselabs', function *() {
    yield this.render('portfolio/lighthouselabs', {
      title: 'Lighthouselabs'
    });
  })

  .get('/kidsclub', function *() {
    yield this.render('portfolio/kidsclub', {
      title: 'Canucks kids club'
    });
  })

  .get('/digital-divide', function *() {
    yield this.render('portfolio/digitaldivide', {
      title: 'Infographics'
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
  })

  .get('/painpal', function *() {
    yield this.render('portfolio/painpal', {
      title: 'Pain Pal'
    });
  });
app.use(router.routes());

if (!module.parent) {
  app.listen(process.env.PORT || 3300);
  console.log('listening on port 3300');
}