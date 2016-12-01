(function () {
    'use strict';

    module.exports = function(grunt) {
        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        // Configuração do Projeto
        grunt.initConfig({
            uglify: {
                deiretivas: {
                    expand: true,
                    src: 'app/js/directives/**/*.js',
                    dest: 'build/directives'
                },
                filtros:{
                    expand: true,
                    src: 'app/js/filtros/**/*.js',
                    dest: 'build/filtros'
                }
            },
            ngdocs: {
                options: {
                    dest: 'docs', 
                    html5Mode: false,
                    scripts: [
                        'bower_components/angular/angular.js'
                    ]
                },
                api: {
                    src: ['app/**/*.js', '!app/**/my-app.js'],
                    title: 'Docs'
                }
            },
            watch:{
                files: ['app/less/*.less'],
                tasks: ['less','postcss']
            },
            less: {
                app:{
                    options:{
                        compress: false
                    },
                    files:{
                        'app/css/curso-angular-acesso.css' : 'app/less/curso-angular.less'
                    }
                }
            },
            postcss: {
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer')({
                            browsers: ['last 2 versions']
                        })
                    ]
                },
                app: {
                    src: 'app/css/*.css'
                }

            }
        });

        // Carrega o plugin que fornee a tarefa de uglify
        // grunt.loadNpmTasks('grunt-contrib-uglify');

        // Tarefa de mimificar
        grunt.registerTask('mimificar', ['uglify']);

        // Tarefa de documentar
        grunt.registerTask('gerardocs', ['ngdocs']);

        // Tarefa para rodar as tasks
        grunt.registerTask('default', ['watch']);
    };
})();