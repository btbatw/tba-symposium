const fs = require('fs');
const path = require('path');
const HummusRecipe = require('hummus-recipe');
const PDFDocument = require('pdfkit');


// const badgeDataFile = './103117_attendee.csv';
const badgeDataFile = './balnkBadgeData';


const badgeData = badgeDataFile.includes('.csv')
    ? require('./readCsvBadgeData')(badgeDataFile)
    : require(badgeDataFile);
const outputFileName = badgeDataFile.split('/').slice(-1)[0]
    ? badgeDataFile.split('/').slice(-1)[0].split('.')[0]
    : new Date().toJSON();
const outputFilePath = badgeDataFile.split(outputFileName)[0];

const [badgeWidth, badgeHeight] = [288, 216];

genZhNamePdf(badgeData, outputFileName)
    .then(() => splitPdf(`./${outputFileName}-allZhNames-tempBadge.pdf`, './', `${outputFileName}-zhNames-tempBadge`))
    .then(() => genEngBadgePdf(badgeData, `./${outputFileName}-engBadge-tempBadge.pdf`))
    .then(() => mergeZhEngBadge(badgeData, `./${outputFileName}-engBadge-tempBadge.pdf`, './', `${outputFileName}-zhNames-tempBadge`, path.join(outputFilePath, outputFileName + '.pdf')))
    .then(() => removeTempFiles('./'))
    .then(() => insertTimeTable(path.join(outputFilePath, outputFileName + '.pdf'), './timeTable.pdf', `./${outputFileName}TwoSided.pdf`, Math.ceil(badgeData.length/6) ))
    // .then(() => genTimeTable('./timeTable.pdf'))

function genEngBadgePdf (badgeData, output) {

    const pdfDoc = new HummusRecipe(
        'new',
        output,
        { fontSrcPath : path.join(__dirname, 'fonts'), test: 'test' }
    );
    const textBox = {
        width: 288,
        lineHeight: 40,
        padding: [5, 10, 0, 10],
        // style: {
        //     lineWidth: 1,
        //     stroke: '#000000'
        // }
    };
    const badgeFrameRectangleSetting = {
        stroke: '#dddddd',
        lineWidth: 1,
        opacity: 0.3
    };
    const firstNameSetting = {
        font: 'roboto-black',
        color: '#333333',
        fontSize: 32,
        textBox
    };
    const lastNameSetting = {
        font: 'roboto-light',
        color: '#333333',
        fontSize: 32,
        textBox
    };
    const elevatorTalkSetting = {
        font: 'roboto-light',
        color: '#333333',
        fontSize: 24,
    };
    infoSessionFont = {
        font: 'roboto-regular',
        color: '#aaaaaa',
        fontSize: 10
    }
    const infoSessionTitleSetting = Object.assign({}, infoSessionFont);
    const infoSessionSetting = Object.assign({}, infoSessionFont, {
        textBox: {
            width: 40,
            lineHeight: 12,
        }
    });
    const infoSessionSpeakerSetting = Object.assign({}, infoSessionFont, {
        textBox: {
            width: 60,
            lineHeight: 12,
        }
    });
    const affiliationSetting = {
        font: 'roboto-medium',
        color: '#ffffff',
        fontSize: 16,
        textBox: {
            width: 288,
            lineHeight: 20,
            padding: [5, 10, 0, 10]
        }
    };
    const roleRectangleSetting = (role) => {
        let colorMap = {
            // attendee: '#fbcb72',
            attendee: '#e6ac00',
            // speaker: '#19589b',
            speaker: '#7bb1ea',
            ttba: '#63aa9c',
            sponsor: '#ff944d'
        };
        return {
            fill: colorMap[role],
            lineWidth: 1,
            opacity: 1
        };
    };
    const roleSetting = {
        font: 'roboto-italic',
        color: '#333333',
        fontSize: 16,
        textBox: Object.assign({}, textBox, {lineHeight: 20}),
    };
    const hideSpeakerText = (str) => {

    };
    // console.log(pdfDoc.fonts);
    const makeBadge = (person, index) => {
        if (index%6 === 0) {
            pdfDoc
                .createPage()
                .text(Math.floor(index / 6) + 1, 'center', 756, {
                    color: '#777777',
                    fontSize: 12,
                    font: 'Roboto-regular',
                    align: 'center center'
                })
        }
        let positionX = 18 + badgeWidth * (index % 2);
        let positionY = 72 + badgeHeight * Math.floor((index % 6)/2);
        pdfDoc
            .rectangle(positionX, positionY, badgeWidth, badgeHeight, badgeFrameRectangleSetting)
            .text(person.firstName, positionX, positionY -3, firstNameSetting)
            .text(person.lastName, positionX, positionY + 35, lastNameSetting)
            .text(person.elevatorTalk, positionX + badgeWidth - 40, positionY + 20, elevatorTalkSetting)
            .rectangle(positionX, positionY + 127, badgeWidth, badgeHeight - 165, roleRectangleSetting(person.role.toLowerCase()))
            .image('./ttba_2017_roboto.png', positionX + badgeWidth - 13 - 120, positionY + 188, {
                width: 120
            })
            .text(person.affiliation, positionX + 1, positionY + 122 + 1, Object.assign({}, affiliationSetting, {color: '#777777'}))
            .text(person.affiliation, positionX, positionY + 122, affiliationSetting)
            
            .text(person.role.toUpperCase(), positionX, positionY + 178, roleSetting)
        if (person.role.toLowerCase() !== 'speaker') {
            pdfDoc
                .text(person.infoSession.trim() ? 'Info session' : ' ', positionX + 220, positionY + 70, infoSessionTitleSetting)
                .text(person.infoSession, positionX + 245, positionY + 85, infoSessionSetting)
        }
        if (person.role.toLowerCase() === 'speaker') {
            pdfDoc.text(person.infoSession.trim() ? 'Info session: ' + person.infoSession : ' ', positionX + 215, positionY + 85, infoSessionSpeakerSetting)
        }
        if (index % 6 === 5) pdfDoc.endPage();
    }

    badgeData.forEach(makeBadge);
    if (badgeData.length % 6 !== 0) {
        pdfDoc.endPage();
    }
    pdfDoc.endPDF(() => Promise.resolve());
};

function insertTimeTable (pdf, otherPdf, outputPdf, repeats) {
    const finalPdf = new HummusRecipe(pdf, outputPdf);
    let repeat = 1;
    while (repeat < repeats + 1) {
        finalPdf.insertPage(repeat, otherPdf, 1);
        repeat += 1;
    }
    finalPdf.endPDF();
}

function mergeZhEngBadge (badgeData, pdf1, splitPdfDir, splitPdfPrefix, outputPdf) {
    const merged = new HummusRecipe(pdf1, outputPdf);
    const pages = Math.ceil(badgeData.length / 6);
    Array(pages).fill('placeholder')
        .forEach((el, idx) => {
            merged
                .editPage(idx + 1)
                .overlay(path.join(splitPdfDir, `./${splitPdfPrefix}-${idx + 1}.pdf`))
                .endPage();
        });
    merged.endPDF(() => Promise.resolve());
}

function splitPdf (pdfToBeSplit) {
    const splitPdf = new HummusRecipe(pdfToBeSplit);

    let outputDir = './';
    let outputFileNamePrefix = `${outputFileName}-zhNames-tempBadge`;
    return splitPdf
        .split(outputDir, outputFileNamePrefix)
        .endPDF(() => Promise.resolve());
}


function genZhNamePdf(badgeData, outputFileName) {
    const doc = new PDFDocument;
    let outputTo = path.join('./', `${outputFileName}-allZhNames-tempBadge.pdf`);
    
    doc
        .font('./fonts/NotoSansCJKtc-DemiLight.ttf')
        .fontSize(18)
        .fillAndStroke('#343434');
    
    badgeData.forEach((person, index) => {
        const [badgeWidth, badgeHeight] = [288, 216];
        let positionX = 28 + badgeWidth * (index % 2);
        let positionY = 163 + badgeHeight * Math.floor((index % 6)/2);
        doc.text(person.zhName, positionX, positionY);
        if (index % 6 === 5) doc.addPage();
    })
    doc.end();
    
    return new Promise((resolve, reject) => {
        doc.pipe(fs.createWriteStream(outputTo))
            .on('finish', () => resolve());
    });
}
function removeTempFiles (dir) {
    fs.readdir(dir, (err, files) => {
        let tempFiles = files.filter(element => element.includes('-tempBadge'));
        tempFiles.forEach(file => fs.unlink(path.join(dir, file)));
    });
}
function genTimeTable (dir) {
    const timeTablePdf = new HummusRecipe('new', dir);
    
    timeTablePdf.createPage();
    Array(6).fill('placeholder').forEach((element, index) => {
        let positionX = 18 + badgeWidth * (index % 2);
        let positionY = 72 + badgeHeight * Math.floor((index % 6)/2);
        timeTablePdf.image('./time_table_badge.jpg', positionX, positionY, {
            width: badgeWidth
        });
    });
    timeTablePdf.endPage();
    timeTablePdf.endPDF();
}