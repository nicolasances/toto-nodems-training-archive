var Controller = require('toto-api-controller');

var getMuscles = require('./dlg/GetMuscles');

var getMuscleExercises = require('./dlg/GetMuscleExercises');
var postMuscleExercises = require('./dlg/PostMuscleExercise');
var putMuscleExercises = require('./dlg/PutMuscleExercise');
var deleteMuscleExercises = require('./dlg/DeleteMuscleExercise');

var apiName = 'training-archive';

var api = new Controller(apiName);

api.path('GET', '/muscles', getMuscles);

api.path('GET', '/muscles/:mid/exercises', getMuscleExercises);
api.path('POST', '/muscles/:mid/exercises', postMuscleExercises);

api.path('PUT', '/muscles/:mid/exercises/:eid', putMuscleExercises);
api.path('DELETE', '/muscles/:mid/exercises/:eid', deleteMuscleExercises);

/***********
 * START
 **********/
api.listen();
