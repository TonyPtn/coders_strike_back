/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
  var inputs = readline().split(' ');
  var x = parseInt(inputs[0]);
  var y = parseInt(inputs[1]);
  var nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
  var nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
  var nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
  var nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
  var inputs = readline().split(' ');
  var opponentX = parseInt(inputs[0]);
  var opponentY = parseInt(inputs[1]);

  // Write an action using print()
  // To debug: printErr('Debug messages...');


  // You have to output the target position
  // followed by the power (0 <= thrust <= 100) or "BOOST"
  // i.e.: "x y thrust"
  print(nextCheckpointX + ' ' + nextCheckpointY + ' 80');
}