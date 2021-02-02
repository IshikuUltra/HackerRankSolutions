//2d Array-DS Hacker Rank challenge

function hourGlass(arr) {
	let maxGlass = -100, glass;
	let a=0, b=1, c=2, m=1, x=0, y=1, z=2;
	for(let i=0; i < 4; i++) {
		for(let j=0; j <= 3; j++) {
			glass = arr[i][a] + arr[i][b] + arr[i][c] +arr[i+1][m] + arr[i+2][x] + arr[i+2][y] + arr[i+2][z];
			console.log(glass);
			if(glass > maxGlass) {
				maxGlass = glass;
			}
			a++, b++, c++, m++, x++, y++, z++
		}
		a=0, b=1, c=2, m=1, x=0, y=1, z=2;
	}
	return maxGlass;
}

const input = [[-1, -1, -1, 0, 0, 0],[0, -1, 0, 0, 0, 0], [-1, -1, -1, 0, 0 ,0], [0 ,0 ,-2, -4, -4, 0],[0, 0, 0 ,-2 ,0 ,0],[0, 0, -1, -2, -4 ,0]]
console.log(hourGlass(input));
