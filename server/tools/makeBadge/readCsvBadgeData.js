const fs = require('fs');

module.exports = (file) => {
    const data = fs.readFileSync(file, { encoding: 'UTF8'});
    
    const infoSessionTimes = ['7:30', '8:00', '8:30'];
    let delimiter = data.includes('\t') ? '\t' : /\,(?!\s.nc)/;
    
    return data
        .replace(/"/g, '')
        .split('\r')
        .map(element => element.split(delimiter))
        .map(element => {
            let infoSessionText = !element[6]
                ? ' '
                : element[6].toUpperCase().trim().length < 8
                ? element[6].toUpperCase().trim().split(' ').map((element, idx) => `${infoSessionTimes[idx]} ${element}`).join(' ')
                : element[6].trim();
            return {
                firstName: element[0],
                lastName: element[1],
                zhName: !element[2] ? ' ' : element[2],
                affiliation: element[3],
                role: element[4] ? element[4].toUpperCase() : 'ATTENDEE',
                elevatorTalk: !element[5] ? ' ' : element[5].length === 1 ? '  ' + element[5] : element[5],
                infoSession: infoSessionText,
            };
        });
    
    function _parseSentenceCase (str) {
        return str.split('-')
            .map(element => 
                element[0].toUpperCase() + element.slice(1).toLowerCase()
            )
            .join('-');
    }
}
