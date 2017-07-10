'use strict';

angular.module('sdlctoolApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('training', {
                parent: 'entity',
                url: '/trainings',
                data: {
                    roles: ['ROLE_TRAINER'],
                    pageTitle: 'Trainings'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/training/trainings.html',
                        controller: 'TrainingController'
                    }
                },
                resolve: {
                }
            })
            .state('training.detail', {
                parent: 'entity',
                url: '/training/{id}',
                data: {
                    roles: ['ROLE_TRAINER'],
                    pageTitle: 'Training'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/training/training-detail.html',
                        controller: 'TrainingDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Training', function($stateParams, Training) {
                        return Training.get({id : $stateParams.id});
                    }]
                }
            })
            .state('training.generate', {
                parent: 'training',
                abstract: 'true',
                data: {
                    roles: ['ROLE_TRAINER'],
                    pageTitle: 'Generate a new Training'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/training/training-generate.html',
                        controller: 'TrainingGenerateController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Training', function($stateParams, Training) {
                        return new Training();
                    }]
                }
            })
            .state('training.new', {
                parent: 'training.generate',
                url: '/generate',
                views: {
                    'skeleton@training.generate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-skeleton.html',
                        controller: 'TrainingSkeletonController'
                    },
                    'requirements@training.generate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-requirements.html',
                        controller: 'TrainingRequirementsController'
                    },
                    'optcolumns@training.generate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-content.html',
                        controller: 'TrainingContentController'
                    },
                    'customize@training.generate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-customize.html',
                        controller: 'TrainingCustomizeController'
                    }
                }
                // inherits resolve von parent
            })
            .state('training.regenerate', {
                parent: 'training',
                url: '/{id}',
                abstract: 'true',
                data: {
                    roles: ['ROLE_TRAINER'],
                    pageTitle: 'Generate a new Training'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/training/training-edit.html',
                        controller: 'TrainingEditController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Training', function($stateParams, Training) {
                        return Training.get({id : $stateParams.id});
                    }]
                }
            })
            .state('training.edit', {
                parent: 'training.regenerate',
                url: '/edit',
                views: {
                    'skeleton@training.regenerate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-skeleton.html',
                        controller: 'TrainingSkeletonController'
                    },
                    'requirements@training.regenerate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-requirements.html',
                        controller: 'TrainingRequirementsController'
                    },
                    'optcolumns@training.regenerate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-content.html',
                        controller: 'TrainingContentController'
                    },
                    'customize@training.regenerate': {
                        templateUrl: 'scripts/app/entities/training/nested-views/training-customize.html',
                        controller: 'TrainingCustomizeController'
                    }
                }
                // inherits resolve von parent
            })
    });