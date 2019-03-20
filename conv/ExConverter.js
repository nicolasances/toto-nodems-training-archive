var moment = require('moment-timezone');

exports.converter = {

  /**
   * Creates the persistent object from a JSON object
   */
  exPO: function(data) {

    return single(data);
  },

  /**
   * Creates the transfer object from the PO
   */
  exTO: function(data) {

    if (data == null) return {};

    let to = single(data);
    to.id = data._id;

    return to;
  },

  /**
   * Updates the exercise with the provided data
   */
  update: function(body) {

    if (body == null) return {$set: {}};

    let data = {};

    if (body.name != null) data.name = body.name;
    if (body.sets != null) data.sets = body.sets;
    if (body.reps != null) data.reps = body.reps;
    if (body.weight != null) data.weight = body.weight;
    if (body.muscleGroupId != null) data.muscleGroupId = body.muscleGroupId;

    return {$set: data};

  }


}

var single = (data) => {
  return {
      name: data.name,
      sets: data.sets,
      reps: data.reps,
      weight: data.weight,
      muscleGroupId: data.muscleGroupId
  }
}
