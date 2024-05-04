/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const diagonals = new Map();
    
    // Store elements in diagonals map
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const diagonalIndex = i - j;
            if (!diagonals.has(diagonalIndex)) {
                diagonals.set(diagonalIndex, []);
            }
            diagonals.get(diagonalIndex).push(mat[i][j]);
        }
    }
    
    // Sort elements along each diagonal
    for (const [diagonalIndex, elements] of diagonals.entries()) {
        elements.sort((a, b) => a - b);
    }
    
    // Reconstruct the matrix using sorted elements
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const diagonalIndex = i - j;
            mat[i][j] = diagonals.get(diagonalIndex).shift();
        }
    }
    
    return mat;
};