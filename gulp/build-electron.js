////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

var gulp = require('gulp');
var electron = require('gulp-electron');
// var info = require('./src/package.json');

gulp.task('electron', function() {
    gulp.src("")
        .pipe(electron({
            src: './dist',
            packageJson: {
                "name": "triangular",
                "version": "2.5.0",
                "private": true,
                "main": "main-electron.js",
                "scripts": {
                    "start": "electron main-electron.js"
                }
            },
            release: './release',
            cache: './cache',
            version: 'v0.31.2',
            packaging: true,
            platforms: ['linux-x64', 'darwin-x64'],
            platformResources: {
                darwin: {
                    CFBundleDisplayName: "triangular",
                    CFBundleIdentifier: "triangular",
                    CFBundleName: "triangular",
                    CFBundleVersion: "2.5.0"
                },
                win: {
                    "version-string": "2.5.0",
                    "file-version": "2.5.0",
                    "product-version": "2.5.0"
                }
            }
        }))
        .pipe(gulp.dest(""));
});