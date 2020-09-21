function towelSort(matrix) {

    if (!Array.isArray(matrix)) return []
    let resultArr = []
    for (let i = 0; i < matrix.length; i++) {
        (i + 1) % 2 === 0 ? resultArr.push(...matrix[i].reverse()) : resultArr.push(...matrix[i])

    }
    return resultArr
}

console.log(towelSort([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]))
