// Brute Force
var maxAreaBruteForce = function(height) {
    let res = 0;
    for(let i=0;i<height.length;i++) {
        for(let j=0;j<height.length;j++) {
            const area = (j-i) * Math.min(height[i], height[j]);
            res = Math.max(res, area);
        }
    }
    return res;
};

// 2 Pointers
var maxArea = function(height) {
    let res = 0;
    let l = 0,
        r = height.length - 1;
    while(l<r) {
        const area = (r-l) * Math.min(height[l], height[r]);
        res = Math.max(res, area);
        if(height[l] < height[r]) {
            l++;
        }
        else {
            r--;
        }
    }
    return res;
};
