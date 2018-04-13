var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var new_object = Object.assign({}, object, {[key]:value})
  return new_object
}

<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var sweet = Object.assign({}, object)
  delete sweet[key]
  return sweet
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

=======
fu
>>>>>>> 8ae646f3bd4d8bf40be25abea5cf05b22a47f4f8
