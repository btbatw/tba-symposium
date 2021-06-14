import { speakersObj } from './speakers-obj';
import { commiteesArray } from './commitees-array';
import { commiteesObj } from './commitees-array';


export const ttbaSymposium2017 = {
    'symposiumInfo': {
        'name': 'BTBA Symposium 2021',
        'location': 'Virtual',
        'time': {
            'from': new Date('2021/07/10'),
            'to': new Date('2021/07/11')
		},
		'timeZone': 'America/New_York',
        'year': '2021',
        'title': 'HUSTLING IN THE ERA OF BIOTECH',
        'showPageLink': false,
        'registrationLink': 'https://www.eventbrite.com/e/2021-btba-virtual-annual-symposium-registration-155894517699'
    },
    'host': {
        'name': 'Boston Taiwanese Biotechnology Association',
        'nameShort': 'BTBA',
        'nameCh': '波士頓臺灣人生物科技協會',
        'webLink': 'https://www.btbatw.org/',
		'logoSmall': 'logo-ttba-small.png',
		'email': 'btba.tw@gmail.com',
		'supportLink': 'https://www.btbatw.org/support.html'
    },
    'about': {
        'title': '2021 BTBA Virtual Symposium',
        'showPageLink': true,
        'subjects': [{
            'title': '',
            'description': `<p>Boston Taiwanese Biotechnology Association (BTBA) will hold the 2021 BTBA Virtual Annual Symposium from 12:50 pm to 6:30 pm EDT on July 10 & 11 (Saturday and Sunday) 2021.</p>

			<p>This online symposium will bring experts from academia and industry to share their experiences and knowledge on their research/responsibility, personal career development, and lessons learned for young scientists. This year, we are honored to have Dr. Herren Wu, Ph.D., the Senior Vice President of AstraZeneca, and Dr. Jeannie T. Lee, M.D., Ph.D., Professor of Genetics of Harvard Medical School.</p>

			<p>This event is free. Please <a href="https://www.eventbrite.com/e/2021-btba-virtual-annual-symposium-registration-155894517699" target="_blank">register on Eventbrite</a>, and you will receive information on how to join the meeting virtually.</p>

			<p>As a non-profit organization, we appreciate your consideration of giving a small gift to support BTBA! Your donation qualifies for tax-exemption and grants you guaranteed access to the 2021 BTBA Virtual Symposium meeting rooms.</p>`
        }, {
            'title': 'About BTBA',
            'description': '<p>BTBA is a 501(c)(3) non-profit organization started in 2012 by a group of Taiwanese graduate Students, postdocs and young professionals in the greater Boston area. Our goals are to foster individual career development, to enhance scientific collaborations, to facilitate interactions and to strengthen networking among academic and industrial bioscience communities in Taiwan and the US. We hold annual symposiums as well as seminars and workshops throughout the year. We hope to serve as a platform to foster a community for young scientists to share their research, exchange ideas and explore career opportunities.</p>'
        }]
    },
    'talk': {
        'title': 'Talks',
        'showPageLink': true,
        'schedules': [{
            'from': new Date('2021/07/10 12:30 EDT'),
            'to': new Date('2021/07/10 12:50 EDT'),
            'title': 'Meeting room opens for attendees',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2021/07/10 12:50 EDT'),
            'to': new Date('22021/07/10 13:00 EDT'),
            'title': 'Opening Remarks',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
                commiteesObj['Erica P. Cai'],
                commiteesObj['Hsien-Wei Yvonne Meng'],
            ]
        }, {
            'from': new Date('2021/07/10 13:00 EDT'),
            'to': new Date('2021/07/10 14:10 EDT'),
            'title': 'Opening Keynote',
            'topic': "Keynote by Dr. Herren Wu: Transforming patients’ lives: A story of innovation, strategy and resilience",
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Herren Wu'],
			]
        }, {
            'from': new Date('2021/07/10 14:10 EDT'),
            'to': new Date('22021/07/10 14:20 EDT'),
            'title': 'Short Break',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2021/07/10 14:20 EDT'),
            'to': new Date('2021/07/10 15:50 EDT'),
            'title': 'Academia to Industry I: Bench to Bedside',
            'topic': 'How do you evaluate biotechnology',
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Gautam Rajpal'],
				speakersObj['Jeremy Chang'],
				speakersObj['Ying-Li Chen'],
				// speakersObj['Han-Yu Shih'],
				// speakersObj['Yu-Chen Tony Tsai']
			]
        }, {
            'from': new Date('2021/07/10 15:50 EDT'),
            'to': new Date('2021/07/10 16:00 EDT'),
            'title': 'Short Break',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2021/07/10 16:00 EDT'),
            'to': new Date('2021/07/10 17:20 EDT'),
            'title': 'Trending Topic I: Real World Evidence',
            'topic': 'Real World Evidence: Trends and Application of Real-World Data in Drug Development and Safety',
			'sessionDescription': null,
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Sengwee Darren Toh'],
				speakersObj['Lina Titievsky'],
				speakersObj['Liz Garry'],
				// speakersObj['Shianhuey Chiang'],
			]
        }, {
            'from': new Date('2021/07/10 17:20 EDT'),
            'to': new Date('2021/07/10 17:30 EDT'),
            'title': 'Short Break',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B101'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2021/07/10 17:30 EDT'),
            'to': new Date('2021/07/10 18:30 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Networking - Clinical Research',
            'topic': '',
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                commiteesObj['Szu-Ta Chen'],
                speakersObj['Hsiao-Ling Hung'],
                speakersObj['Allen Chia-En Lien'],
                speakersObj['Dajun Sun'],
                speakersObj['Rosa Wang'],
                commiteesObj['Margaret (Chia-Ying) Wey'],
            ]
        }, {
            'from': new Date('2021/07/10 17:30 EDT'),
            'to': new Date('2021/07/10 18:30 EDT'),
			'numOfParallelSessions': 2,
            'title': 'Networking - Start-ups & VC',
            'topic': '',
			'sessionDescription': 'zzz',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Shaoyu Chang'],
                speakersObj['Yi-Kai Lo'],
                speakersObj['Ting-Hui Wu'],
            ]
        }, {
            'from': new Date('2021/07/11 12:50 EDT'),
            'to': new Date('2021/07/11 13:00 EDT'),
            'title': 'Virtual Lunch ',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        },{
            'from': new Date('2021/07/11 13:00 EDT'),
            'to': new Date('2021/07/11 14:10 EDT'),
            'title': 'Closing Keynote ',
            'topic': "Keynote by Dr. Jeannie T. Lee, M.D., Ph.D. : Reactivating a sex chromosome to treat Rett syndrome and other X-linked disorders",
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                speakersObj['Jeannie Lee'],
            ]
        },{
            'from': new Date('2021/07/11 14:10 EDT'),
            'to': new Date('2021/07/11 14:20 EDT'),
            'title': 'Short Break ',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        },{
            'from': new Date('2021/07/11 14:20 EDT'),
            'to': new Date('2021/07/11 15:50 EDT'),
            'title': 'Trending Topic II: RNA Technology & Application ',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                speakersObj['Tasuku Kitada'],
                speakersObj['Allen Horhota'],
                speakersObj['Ho-Chou Tu']
            ]
        },{
            'from': new Date('2021/07/11 15:50 EDT'),
            'to': new Date('2021/07/11 16:00 EDT'),
            'title': 'Short Break ',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        },{
            'from': new Date('2021/07/11 16:00 EDT'),
            'to': new Date('2021/07/11 17:20 EDT'),
            'title': 'Academia to Industry II: Ways to Gene Therapy',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                speakersObj['Ariel (Wei-His) Yeh'],
                speakersObj['Yi-Li Min']
            ]
        },{
            'from': new Date('2021/07/11 17:20 EDT'),
            'to': new Date('2021/07/11 17:30 EDT'),
            'title': 'Closing Remarks ',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                commiteesObj['Erica P. Cai'],
                commiteesObj['Hsien-Wei Yvonne Meng'],
            ]
        }, {
            'from': new Date('2021/07/11 17:30 EDT'),
            'to': new Date('2021/07/11 18:30 EDT'),
			'numOfParallelSessions': 3,
            'title': 'Networking - Academia',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                commiteesObj['Erica P. Cai'],
                speakersObj['Chia-Wei Cheng'],
                speakersObj['Meng-Chuan Lai'],
                commiteesObj['Sheng Chih (Peter) Jin'],
                speakersObj['Hsiao-Ying (Monica) Wey']
            ]
        }, {
            'from': new Date('2021/07/11 17:30 EDT'),
            'to': new Date('2021/07/11 18:30 EDT'),
			'numOfParallelSessions': 3,
            'title': 'Networking - Preclinical and R&D',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                speakersObj['Shian-Huey Chiang'],
                speakersObj['Meredith Kuo'],
                commiteesObj['Richard Liang'],
                commiteesObj['Hsien-Wei Yvonne Meng']
            ]
        }, {
            'from': new Date('2021/07/11 17:30 EDT'),
            'to': new Date('2021/07/11 18:30 EDT'),
			'numOfParallelSessions': 3,
            'title': 'Networking - AI & Machine Learning ',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
                commiteesObj['Pin-Kuang Lai'],
                speakersObj['Ching-Yung Lin'],
                speakersObj['Michael Shih']
            ]
        }]
    },
    'elevatorPitch': {
        'title': 'Elevator Pitch & Poster Session',
        'showPageLink': false,
        'text': '',
        'link': 'http://abstract2017.ttbatw.org/'
    },
    'location': {
        'title': 'Location',
        'showPageLink': false,
        'text': 'Venue',
        'address': 'Harvard Northwest Science Building <br/>52 Oxford St, Cambridge, MA 02138',
        'googleMapLink': 'https://www.google.com/maps/place/Harvard+Northwest+Science+Building/@42.3799895,-71.1153309,18.44z/data=!4m12!1m6!3m5!1s0x89e37740b5a8044b:0x57eea3d2dca3f603!2sHarvard+Northwest+Science+Building!8m2!3d42.3799895!4d-71.1153309!3m4!1s0x89e37740b5a8044b:0x57eea3d2dca3f603!8m2!3d42.3799895!4d-71.1153309',
        'directions': [{
            'method': 'Parking',
            'lots': [{
                'name': 'street parking',
                'description': '$1/hour on Saturday free after 6 pm; free on Sunday',
                'address': 'On Dean Keeton Street',
                'link': ''
            }, {
                'name': 'San Jacinto Garage (SJG)',
                'description': '$3/hour, max $18/day',
                'address': '2401 San Jacinto Boulevard',
                'link': 'https://www.google.com/maps/place/San+Jacinto+Garage/@30.2866002,-97.7330305,17.36z/data=!4m5!3m4!1s0x0:0xa097d977872555e7!8m2!3d30.287725!4d-97.7328837'
            }, {
                'name': 'Speedway Garage (SWG)',
                'description': '$3/hour, max $18/day',
                'address': '2105 E. 27th Street',
                'link': 'https://www.google.com/maps/place/Speedway+Garage+(SWG)/@30.2901508,-97.737673,18z/data=!4m5!3m4!1s0x8644b583975605b3:0x2e2d30a8bb92908a!8m2!3d30.2911695!4d-97.7370948'
            }, {
                'name': '27th Street Garage (TSG)',
                'description': '$3/hour, max $18/day',
                'address': '109 W. 27th St.',
                'link': 'https://www.google.com/maps/place/27th+Street+Garage,+109+W+27th+St,+Austin,+TX+78712/@30.2912949,-97.7407441,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b583b190db59:0x2e1eb5678aa95217!8m2!3d30.2912611!4d-97.7385507'
            }]
        }],
        'lodging': {
            'text': 'Lodging',
            'description': '<a>Drury Inn & Suites Austin North</a> is our partner of TTBA 2017 Symposium. Rooms have been held for TTBA attendees. Make your reservations by <a>Friday, October 13, 2017</a> to receive the group rate. For more info, click the button below.',
            'hotels': [{
                'name': 'Drury Inn & Suites Austin North',
                'location': '6711 IH 35 NORTH, Austin, TX 78752',
                'tel': '(512) 467-9500',
                'displayText': 'Please make your reservations by Wednesday, October 13, 2017 to receive the group rate.'
            }]
        }
    },
	'acknowledgement': {
		'title': 'Organizing Committee',
		'description': '',
		'commitees': commiteesArray
	},
    'sponsor': {
        'title': 'Sponsors',
        'showPageLink': false,
        'sponsors': [{
            'level': 'string',
            'name': 'string',
            'logoUrl': 'taiwan_ministry_of_science_and_technology.png',
            'link': 'https://www.most.gov.tw/?l=en'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'logo_teco_boston.png',
            'link': 'https://www.roc-taiwan.org/usbos_en/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'lift_logo.png',
            'link': 'https://lifttaiwan.stpi.narl.org.tw/en'
        }]
    },
    'imgs': [{
        'usage': 'string',
        'imgLinks': []
    }]
};

// module.exports = ttbaSymposium2017;


