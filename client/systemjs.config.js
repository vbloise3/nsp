/**
 * Created by vincebloise on 1/18/17.
 */
// This file is used by samples that are loaded from the local Node server

System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true,
        target: "ES5",
        module: "commonjs"},
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs'    : 'node_modules/rxjs',
        '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js',
        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.min.js',
        '@angular/animations/browser':'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js'
    },
    paths: {
        'node_modules/@angular/material/*': 'node_modules/@angular/material/bundles/material.umd.js',
        'node_modules/@angular/platform-browser/animations/*': 'node_modules/@angular/platform-browser/animations/bundles/platform-browser-animations.umd.js',
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
        /*added these next three lines
        '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js'*/
    },
    meta: {
        '@angular/*': {'format': 'cjs'},
        'app/mediator/stock.ts': {
            format: 'es6'
        }
    },
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'Rx'},
        '@angular/core'                    : {main: 'core.umd.min.js'},
        '@angular/common'                  : {main: 'common.umd.min.js'},
        '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/router'                  : {main: 'router.umd.min.js'},
        '@angular/forms'                  : {main: 'forms.umd.min.js'},
        '@angular/http'                    : {main: 'http.umd.min.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'},
        /* added this */
        '@angular/platform-browser': {main: 'platform-browser-animations.umd.js'}
    }
});

/*
 System.config({
 transpiler: 'typescript',
 typescriptOptions: {emitDecoratorMetadata: true},
 map: {
 '@angular': 'node_modules/@angular'
 },
 paths: {
 'node_modules/@angular/!*': 'node_modules/@angular/!*!/bundles'
 },
 meta: {
 '@angular/!*': {'format': 'cjs'}
 },
 packages: {
 'app'                              : {main: './bids/bid-component', defaultExtension: 'ts'},
 '@angular/core'                    : {main: 'core.umd.min.js'},
 '@angular/common'                  : {main: 'common.umd.min.js'},
 '@angular/compiler'                : {main: 'compiler.umd.min.js'},
 '@angular/forms'                   : {main: 'forms.umd.min.js'},
 '@angular/http'                    : {main: 'http.umd.min.js'},
 '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
 '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
 }
 });*/