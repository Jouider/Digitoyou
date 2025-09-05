'use strict';

/* Paths */
var path = {
  dev: {
    html: 'dev/',
    js: 'dev/assets/js/',
    css: 'dev/assets/css/',
    style: 'dev/assets/css/',
    fontcss: 'dev/assets/css/fonts/',
    colorcss: 'dev/assets/css/colors/',
    img: 'dev/assets/img/',
    fonts: 'dev/assets/fonts/',
    media: 'dev/assets/media/',
    php: 'dev/assets/php/'
  },
  dist: {
    html: 'dist/',
    js: 'dist/assets/js/',
    css: 'dist/assets/css/',
    style: 'dist/assets/css/',
    fontcss: 'dist/assets/css/fonts/',
    colorcss: 'dist/assets/css/colors/',
    img: 'dist/assets/img/',
    fonts: 'dist/assets/fonts/',
    media: 'dist/assets/media/',
    php: 'dist/assets/php/'
  },
  src: {
    html: ['src/**/*.html', '!src/partials/**/*.html', '!src/assets/php/**/*.html'],
    partials: 'src/partials/',
    js: 'src/assets/js/',
    vendorjs: 'src/assets/js/vendor/*.*',
    themejs: 'src/assets/js/theme.js',
    style: 'src/assets/scss/style.scss',
    fontcss: 'src/assets/scss/fonts/*.*',
    colorcss: ['src/assets/scss/colors/*.scss', 'src/assets/scss/theme/_colors.scss'],
    vendorcss: 'src/assets/css/vendor/*.*',
    img: 'src/assets/img/**/*.*',
    fonts: 'src/assets/fonts/**/*.*',
    media: 'src/assets/media/**/*.*',
  php: 'src/assets/php/**/*.*',
  rootExtras: ['src/.htaccess']
  },
  watch: {
    html: ['src/**/*.html', '!src/assets/php/**/*.html'],
    partials: 'src/partials/**/*.*',
    themejs: 'src/assets/js/theme.js',
    vendorjs: 'src/assets/js/vendor/*.*',
    css: ['src/assets/scss/**/*.scss', '!src/assets/scss/fonts/*.scss', '!src/assets/scss/colors/*.scss', '!src/assets/scss/theme/_colors.scss'],
    fontcss: 'src/assets/scss/fonts/*.scss',
    colorcss: ['src/assets/scss/colors/*.scss', 'src/assets/scss/theme/_colors.scss'],
    vendorcss: 'src/assets/css/vendor/*.*',
    img: 'src/assets/img/**/*.*',
    fonts: 'src/assets/fonts/**/*.*',
    media: 'src/assets/media/**/*.*',
    php: 'src/assets/php/',
    user: 'src/assets/scss/_user-variables.scss'
  },
  clean: {
    dev: 'dev/*',
    dist: 'dist/*',
  }
};

/* Include gulp and plugins */
var gulp = require('gulp'),
    webserver = require('browser-sync'),
    reload = webserver.reload,
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass')(require('sass')),
    sassUnicode = require('gulp-sass-unicode'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    jpegrecompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant'),
    del = require('del'),
    fileinclude = require('gulp-file-include'),
    beautify = require('gulp-beautify'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    jsImport = require('gulp-js-import'),
    newer = require('gulp-newer'),
    replace = require('gulp-replace'),
    touch = require('gulp-touch-cmd');
// Node stdlib helpers (avoid clashing with the `path` object above)
var fs = require('fs');
var nodePath = require('path');
    
/* Server */
var config = {
    server: {
    baseDir: './dist'
    },
  // Map clean URLs like /about -> /about.html for local dev
  middleware: [function (req, res, next) {
    try {
      var url = req.url.split('?')[0];
      if (url === '/' || url === '') return next();
      if (/\.[a-zA-Z0-9]+$/.test(url)) return next(); // has extension
      if (url.startsWith('/assets/') || url.startsWith('/assets') || url.startsWith('/vendor/') || url.startsWith('/php/') || url.startsWith('/api/')) return next();
      var fs = require('fs');
      var candidate = pathJoin(process.cwd(), 'dist', url.replace(/^\/+/, '') + '.html');
      if (fs.existsSync(candidate)) {
        req.url = url + '.html' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
      }
    } catch (e) {}
    next();
    function pathJoin() { return Array.prototype.slice.call(arguments).join(require('path').sep); }
  }],
    ghostMode: false, // By setting true, clicks, scrolls and form inputs on any device will be mirrored to all others
    notify: false
};

/* Tasks */

// Start the server
gulp.task('webserver', function () {
    webserver(config);
});

// Compile html
gulp.task('html:dev', function () {
  return gulp.src(path.src.html)
    .pipe(newer({ dest: path.dev.html, extra: path.watch.partials }))
    .pipe(plumber())
    .pipe(fileinclude({ prefix: '@@', basepath: path.src.partials }))
    .pipe(beautify.html({ indent_size: 2, preserve_newlines: false }))
    .pipe(gulp.dest(path.dev.html))
    .pipe(touch())
});
gulp.task('html:dist', function () {
  return gulp.src(path.src.html)
    .pipe(newer({ dest: path.dist.html, extra: path.watch.partials }))
    .pipe(plumber())
    .pipe(fileinclude({ prefix: '@@', basepath: path.src.partials }))
    .pipe(beautify.html({ indent_size: 2, preserve_newlines: false }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(touch())
    .on('end', () => { reload(); });
});

// Compile theme styles
gulp.task('css:dev', function () {
  return gulp.src(path.src.style)
    .pipe(newer(path.dev.style))
    .pipe(plumber())
    .pipe(sass()
      .on('error', function (err) {
        sass.logError(err);
        this.emit('end');
      })
    )
    .pipe(sassUnicode())
    .pipe(autoprefixer())
    .pipe(beautify.css({ indent_size: 2, preserve_newlines: false, newline_between_rules: false }))
    .pipe(gulp.dest(path.dev.style))
    .pipe(touch())
});
gulp.task('css:dist', function () {
  return gulp.src(path.src.style)
    .pipe(newer(path.dist.style))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', function (err) {
        sass.logError(err);
        this.emit('end');
      })
    )
    .pipe(sassUnicode())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dist.style))
    .pipe(touch())
    .on('end', () => { reload(); });
});

// Move fonts
gulp.task('fonts:dev', function () {
  return gulp.src(path.src.fonts)
    .pipe(newer(path.dev.fonts))
    .pipe(gulp.dest(path.dev.fonts));
});
gulp.task('fonts:dist', function () {
  return gulp.src(path.src.fonts)
    .pipe(newer(path.dist.fonts))
    .pipe(gulp.dest(path.dist.fonts));
});

// Compile font styles
gulp.task('fontcss:dev', function () {
  return gulp.src(path.src.fontcss)
    .pipe(newer(path.dev.fontcss))
    .pipe(plumber())
    .pipe(sass()
      .on('error', function (err) {
        sass.logError(err);
        this.emit('end');
      })
    )
    .pipe(sassUnicode())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(beautify.css({ indent_size: 2, preserve_newlines: false, newline_between_rules: false }))
    .pipe(gulp.dest(path.dev.fontcss))
    .pipe(touch())
});
gulp.task('fontcss:dist', function () {
  return gulp.src(path.src.fontcss)
    .pipe(newer(path.dist.fontcss))
    .pipe(plumber())
    .pipe(sass()
      .on('error', function (err) {
        sass.logError(err);
        this.emit('end');
      })
    )
    .pipe(sassUnicode())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(beautify.css({ indent_size: 2, preserve_newlines: false, newline_between_rules: false }))
    .pipe(gulp.dest(path.dist.fontcss))
    .pipe(touch())
    .on('end', () => { reload(); });
});

// Compile color styles
gulp.task('colorcss:dev', function () {
  return gulp.src(path.src.colorcss)
    .pipe(plumber())
    .pipe(sass()
      .on('error', function (err) {
        sass.logError(err);
        this.emit('end');
      })
    )
    .pipe(sassUnicode())
    .pipe(autoprefixer())
    .pipe(beautify.css({ indent_size: 2, preserve_newlines: false, newline_between_rules: false }))
    .pipe(gulp.dest(path.dev.colorcss))
    .pipe(touch())
});
gulp.task('colorcss:dist', function () {
  return gulp.src(path.src.colorcss)
    .pipe(plumber())
    .pipe(sass()
      .on('error', function (err) {
        sass.logError(err);
        this.emit('end');
      })
    )
    .pipe(sassUnicode())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.dist.colorcss))
    .pipe(touch())
    .on('end', () => { reload(); });
});

// Compile vendor styles
gulp.task('vendorcss:dev', function () {
  return gulp.src(path.src.vendorcss)
    .pipe(concat('plugins.css'))
    .pipe(beautify.css({ indent_size: 2, preserve_newlines: false, newline_between_rules: false }))
    .pipe(gulp.dest(path.dev.css))
    .pipe(touch())
});
gulp.task('vendorcss:dist', function () {
  return gulp.src(path.src.vendorcss)
    .pipe(concat('plugins.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.dist.css))
    .pipe(touch())
    .on('end', () => { reload(); });
});

// Compile vendor plugins js
gulp.task('pluginsjs:dev', function() {
    return gulp.src([
      'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
      path.src.vendorjs
    ])
    .pipe(jsImport({hideConsole: true}))
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(path.dev.js))
    .pipe(touch())
});
gulp.task('pluginsjs:dist', function() {
    return gulp.src([
      'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
      path.src.vendorjs
    ])
    .pipe(jsImport({hideConsole: true}))
    .pipe(concat('plugins.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist.js))
    .pipe(touch())
    .on('end', () => { reload(); });
});

// Compile theme js
gulp.task('themejs:dev', function () {
  return gulp.src(path.src.themejs)
    .pipe(gulp.dest(path.dev.js))
    .pipe(plumber())
    .pipe(gulp.dest(path.dev.js))
});
gulp.task('themejs:dist', function () {
  return gulp.src(path.src.themejs)
    .pipe(gulp.dest(path.dist.js))
    .pipe(plumber())
    //.pipe(uglify())
    .pipe(gulp.dest(path.dist.js))
    .on('end', () => { reload(); });
});

// Copy other JS (i18n, etc.) to dist
gulp.task('js:dist', function () {
  return gulp.src([
      path.src.js + '*.js',
      '!' + path.src.themejs,
      '!' + path.src.vendorjs,
      // Exclude empty config placeholder to avoid upload issues on some FTP servers
      '!' + path.src.js + 'config.js'
    ])
    .pipe(newer(path.dist.js))
    .pipe(gulp.dest(path.dist.js))
    .pipe(touch())
    .on('end', () => { reload(); });
});

// Move media
gulp.task('media:dev', function () {
  return gulp.src(path.src.media)
    .pipe(newer(path.dev.media))
    .pipe(gulp.dest(path.dev.media));
});
gulp.task('media:dist', function () {
  return gulp.src(path.src.media)
    .pipe(newer(path.dist.media))
    .pipe(gulp.dest(path.dist.media));
});

// Move php
gulp.task('php:dev', function () {
  return gulp.src(path.src.php)
    .pipe(newer(path.dev.php))
    .pipe(gulp.dest(path.dev.php));
});
gulp.task('php:dist', function () {
  return gulp.src(path.src.php)
    .pipe(newer(path.dist.php))
    .pipe(gulp.dest(path.dist.php));
});

// Copy root-level extras (.htaccess, etc.)
gulp.task('root:dist', function () {
  return gulp.src(path.src.rootExtras, { allowEmpty: true, dot: true })
    .pipe(gulp.dest(path.dist.html));
});

// Image processing
gulp.task('image:dev', function () {
  return gulp.src(path.src.img)
    .pipe(newer(path.dev.img))
    .pipe(cache(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      jpegrecompress({
        progressive: true,
        max: 90,
        min: 80
      }),
      pngquant(),
      imagemin.svgo({ plugins: [{ removeViewBox: false }] })])))
    .pipe(gulp.dest(path.dev.img));
});
gulp.task('image:dist', function () {
  return gulp.src(path.src.img)
    .pipe(newer(path.dist.img))
    .pipe(cache(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      jpegrecompress({
        progressive: true,
        max: 90,
        min: 80
      }),
      pngquant(),
      imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ])))
    .pipe(gulp.dest(path.dist.img))
    .on('end', () => { reload(); });
});

// Generate sitemap.xml with clean URLs based on src/*.html
gulp.task('sitemap:dist', function (done) {
  try {
    var baseUrl = (process.env.SITE_URL || '').trim().replace(/\/$/, '');
    if (!baseUrl) {
      baseUrl = 'https://digitoyou.com';
      console.warn('[sitemap] SITE_URL not set. Using placeholder https://digitoyou.com');
    }

    // Collect top-level HTML files in src (exclude partials and 404)
    var files = fs.readdirSync('src')
      .filter(function (f) { return f.toLowerCase().endsWith('.html'); })
      .filter(function (f) { return f.toLowerCase() !== '404.html'; });

    var urls = files.map(function (file) {
      if (file.toLowerCase() === 'index.html') return baseUrl + '/';
      return baseUrl + '/' + file.replace(/\.html?$/i, '');
    });

    var now = new Date().toISOString();
    var xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
      + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
      + urls.map(function (u) {
          var isHome = /\/$/.test(u);
          return '  <url>\n'
               + '    <loc>' + u + '</loc>\n'
               + '    <lastmod>' + now + '</lastmod>\n'
               + '    <changefreq>weekly</changefreq>\n'
               + '    <priority>' + (isHome ? '1.0' : '0.8') + '</priority>\n'
               + '  </url>';
        }).join('\n')
      + '\n</urlset>\n';

    if (!fs.existsSync(path.dist.html)) fs.mkdirSync(path.dist.html, { recursive: true });
    fs.writeFileSync(nodePath.join(path.dist.html, 'sitemap.xml'), xml, 'utf8');
    console.log('[sitemap] Generated dist/sitemap.xml with', urls.length, 'URLs');
  } catch (err) {
    console.error('[sitemap] Failed to generate sitemap:', err);
  }
  done();
});

// Generate robots.txt (include sitemap in production)
gulp.task('robots:dist', function (done) {
  try {
    var baseUrl = (process.env.SITE_URL || '').trim().replace(/\/$/, '');
    var ref = process.env.GITHUB_REF || '';
    var isProd = /\/main$/.test(ref) || process.env.NODE_ENV === 'production';
    var disallow = process.env.ROBOTS === 'disallow' || process.env.DISALLOW_ROBOTS === '1' || !isProd;

    var lines = [];
    lines.push('User-agent: *');
    if (disallow) {
      lines.push('Disallow: /');
    } else {
      lines.push('Allow: /');
      if (baseUrl) lines.push('Sitemap: ' + baseUrl + '/sitemap.xml');
    }
    lines.push('');

    if (!fs.existsSync(path.dist.html)) fs.mkdirSync(path.dist.html, { recursive: true });
    fs.writeFileSync(nodePath.join(path.dist.html, 'robots.txt'), lines.join('\n'), 'utf8');
    console.log('[robots] Generated dist/robots.txt (disallow=' + disallow + ')');
  } catch (err) {
    console.error('[robots] Failed to generate robots.txt:', err);
  }
  done();
});

// Remove catalog dev
gulp.task('clean:dev', function () {
  return del(path.clean.dev);
});
gulp.task('clean:dist', function () {
  return del(path.clean.dist);
});

// Clear cache
gulp.task('cache:clear', function () {
    cache.clearAll();
});

// Assembly Dev
gulp.task('build:dev',
    gulp.series('clean:dev',
      gulp.parallel(
      'html:dev',
      'css:dev',
      'fontcss:dev',
      'colorcss:dev',
      'vendorcss:dev',
      'pluginsjs:dev',
      'themejs:dev',
      'fonts:dev',
      'media:dev',
      'php:dev',
      'image:dev'
      )
    )
);

// Assembly Dist
gulp.task('build:dist',
    gulp.series('clean:dist',
      gulp.parallel(
      'html:dist',
  'sitemap:dist',
  'robots:dist',
      'css:dist',
      'fontcss:dist',
      'colorcss:dist',
      'vendorcss:dist',
      'pluginsjs:dist',
      'themejs:dist',
      'js:dist',
      'fonts:dist',
      'media:dist',
      'php:dist',
  'root:dist',
      'image:dist'
      )
    )
);


// Launching tasks when files change
gulp.task('watch', function () {
  gulp.watch(path.watch.html, gulp.series('html:dist', 'sitemap:dist', 'robots:dist'));
    gulp.watch(path.watch.css, gulp.series('css:dist'));
    gulp.watch(path.watch.fontcss, gulp.series('fontcss:dist'));
    gulp.watch(path.watch.colorcss, gulp.series('colorcss:dist'));
    gulp.watch(path.watch.vendorcss, gulp.series('vendorcss:dist'));
    gulp.watch(path.watch.vendorjs, gulp.series('pluginsjs:dist'));
    gulp.watch(path.watch.themejs, gulp.series('themejs:dist'));
    // watch general JS files (i18n.js etc.)
    gulp.watch(path.src.js + '*.js', gulp.series('js:dist'));
    gulp.watch(path.watch.img, gulp.series('image:dist'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:dist'));
    gulp.watch(path.watch.media, gulp.series('media:dist'));
    gulp.watch(path.watch.php, gulp.series('php:dist'));
    gulp.watch(path.watch.user, gulp.series('colorcss:dist'));
});

// Serve
gulp.task('serve', gulp.series(
    gulp.parallel('webserver','watch')
));

// Dev
gulp.task('build:dev', gulp.series(
    'build:dev'
));

// Dist
gulp.task('build:dist', gulp.series(
    'build:dist'
));

// Default tasks
gulp.task('default', gulp.series(
    'build:dist',
    gulp.parallel('webserver','watch')
));
