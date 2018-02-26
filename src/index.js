module.exports = function solveEquation(equation) {
  let equationArr = equation.split(' ');
  let roots = [];
  let diskriminant;

  if ( equationArr[3] === '-' ) {
    equationArr[4] = equationArr[3] + equationArr[4];
  }
  if ( equationArr[7] === '-' ) {
    equationArr[8] = equationArr[7] + equationArr[8];
  }
  
  diskriminant = Math.sqrt( equationArr[4] * equationArr[4] - 4 * equationArr[0] * equationArr[8] );

  roots[0] = Math.round(( -equationArr[4] - diskriminant ) / ( 2 * equationArr[0] ));
  roots[1] = Math.round(( -equationArr[4] + diskriminant ) / ( 2 * equationArr[0] ));
  
  if ( roots[0] > roots[1] ) {
    let temp = roots[0];

    roots[0] = roots[1];
    roots[1] = temp;
  }

  return roots;
}