
var muscles = [
  {id: 'abs', name: 'Abs'},
  {id: 'back', name: 'Back'},
  {id: 'biceps', name: 'Biceps'},
  {id: 'chest', name: 'Chest'},
  {id: 'legs', name: 'Legs'},
  {id: 'obliques', name: 'Obliques'},
  {id: 'shoulders', name: 'Shoulders'},
  {id: 'triceps', name: 'Triceps'}
]

exports.do = (req) => {

  return new Promise( (success, failure) => {

    success({muscles: muscles});

  });

}
