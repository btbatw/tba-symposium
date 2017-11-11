
const fs = require('fs');
const path = require('path');
const HummusRecipe = require('hummus-recipe');


const badgeDataFile = './103117_speaker.csv';

const [tagWidth, tagHeight] = [612, 180];
const badgeData = badgeDataFile.includes('.csv')
? require('./readCsvBadgeData')(badgeDataFile)
: require(badgeDataFile);


// genEngBadgePdf('test', './tagTest.pdf');
const output = './tagTest.pdf';
const pdfDoc = new HummusRecipe(
    'new',
    output
    // { fontSrcPath : path.join(__dirname, 'fonts'), test: 'test' }
);
badgeData.forEach((element, idx) => {
    genEngBadgePdf(element, idx);
})
pdfDoc.endPDF();


function genEngBadgePdf (data, idx) {

    const badgeFrameRectangleSetting = {
        stroke: '#dddddd',
        lineWidth: 1,
        opacity: 0.3
    };
    const positionX = 20;

    pdfDoc.createPage();
    Array(4).fill('ph')
        .forEach((element, idx) => {
            pdfDoc.rectangle(0, 36 + idx * tagHeight, tagWidth, tagHeight, badgeFrameRectangleSetting)
        });
    pdfDoc
        .image('./ttba_2017_roboto.png', positionX, 36 + tagHeight + 20, {
            width: 175
        })
        // .rectangle(positionX, tagHeight + 173, tagWidth - 2 * positionX, 5, { fill: '#333333' })
        .text(`${data.firstName} ${data.lastName}`, positionX, 36 + tagHeight + 33, {
            font: 'roboto-medium',
            color: '#ffffff',
            fontSize: 64,
            textBox: {
                width: tagWidth,
                lineHeight: 90,
                // padding: [5, 10, 0, 10]
            }
        })
        .text(`${data.firstName} ${data.lastName}`, positionX, 36 + tagHeight + 30, {
            font: 'roboto-medium',
            color: '#333333',
            fontSize: 64,
            textBox: {
                width: tagWidth,
                lineHeight: 90,
                // padding: [5, 10, 0, 10]
            }
        })
        .text(`${data.affiliation}`, positionX, 36 + tagHeight + 120, {
            font: 'roboto-medium',
            color: '#333333',
            fontSize: 24,
            textBox: {
                width: tagWidth,
                lineHeight: 40,
                // padding: [5, 10, 0, 10]
            }
        })
        
        .endPage()
        // .endPDF();
}