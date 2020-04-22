function calculate(candidate) {
    const votes = [51, 5, 23, 21];
    const table = [
        ['candidate1', 'candidate3', 'candidate2', 'candidate4'],
        ['candidate3', 'candidate2', 'candidate4', 'candidate1'],
        ['candidate2', 'candidate3', 'candidate4', 'candidate1'],
        ['candidate4', 'candidate3', 'candidate2', 'candidate1']
    ];
    return table.map((value, index) => (4 - value.indexOf(candidate)) * votes[index])
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}

module.exports = calculate;