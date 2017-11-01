module.exports = Array(36).fill('placeholder')
    .map((element, idx) => {
        let outputObj = {
            firstName: ' ',
            lastName: ' ',
            zhName: ' ',
            affiliation: ' ',
            role: ' ',
            elevatorTalk: ' ',
            infoSession: ' ',

        };
        outputObj.role = idx / 6 < 3 
            ? 'attendee'
            : idx / 6 < 4
            ? 'ttba'
            : idx / 6 < 5
            ? 'speaker'
            : 'sponsor';
        return outputObj;
    });
