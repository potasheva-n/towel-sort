
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix==undefined) return [];
    let res = [];
    for(let i=1; i<matrix.length; i+=2){
      matrix[i].reverse ();
    }
    return res.concat(...matrix);
}
