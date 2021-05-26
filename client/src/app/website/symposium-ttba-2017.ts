import { speakersObj } from './speakers-obj';
import { commiteesArray } from './commitees-array';

export const ttbaSymposium2017 = {
    'symposiumInfo': {
        'name': 'BTBA Symposium 2020',
        'location': 'Virtual',
        'time': {
            'from': new Date('2020/07/11'),
            'to': new Date('2020/07/11')
		},
		'timeZone': 'America/New_York',
        'year': '2020',
        'title': 'HUSTLING IN THE ERA OF BIOTECH',
        'showPageLink': false,
        'registrationLink': 'https://www.eventbrite.com/e/2020-btba-virtual-symposium-registration-107354969604'
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
        'title': '2020 BTBA Virtual Symposium',
        'showPageLink': true,
        'subjects': [{
            'title': '',
            'description': `<p>Boston Taiwanese Biotechnology Association (BTBA) will hold the 2020 Annual Symposium virtually from 12:30 pm to 6:30 pm EDT on July 11 (Saturday), 2020. This event is co-hosted by the Harvard GSAS Taiwan Student Association.</p>

			<p>This online symposium will bring experts from academia and industry to share their experiences in research, social responsibility, and career development, and lessons for young scientists. This year, we are honored to have Dr. Taiyin Yang, the Executive Vice President of Gilead Sciences, who supervised the development of Remdesivir, to deliver the keynote address.</p>

			<p>This event is free. Please <a href="https://www.eventbrite.com/e/2020-btba-virtual-symposium-registration-107354969604" target="_blank">register on Eventbrite</a>, and you will receive information on how to join the meeting virtually.</p>

			<p>As a non-profit organization,  we appreciate your consideration of giving a small gift to support BTBA! Your donation qualifies for tax-exemption and grants you guaranteed access to the 2020 BTBA Virtual Symposium meeting rooms.</p>`
        }, {
            'title': 'About BTBA',
            'description': '<p>BTBA is a 501(c)(3) non-profit organization started in 2012 by a group of Taiwanese graduate Students, postdocs and young professionals in the greater Boston area. Our goals are to foster individual career development, to enhance scientific collaborations, to facilitate interactions and to strengthen networking among academic and industrial bioscience communities in Taiwan and the US. We hold annual symposiums as well as seminars and workshops throughout the year. We hope to serve as a platform to foster a community for young scientists to share their research, exchange ideas and explore career opportunities.</p>'
        }]
    },
    'talk': {
        'title': 'Talks',
        'showPageLink': true,
        'schedules': [{
            'from': new Date('2020/07/11 12:30 EDT'),
            'to': new Date('2020/07/11 12:50 EDT'),
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
            'from': new Date('2020/07/11 12:50 EDT'),
            'to': new Date('22020/07/11 13:00 EDT'),
            'title': 'Opening Remarks',
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
            'from': new Date('2020/07/11 13:00 EDT'),
            'to': new Date('2020/07/11 14:10 EDT'),
            'title': 'Keynote by Dr. Taiyin Yang: Making a Difference',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Taiyin Yang'],
			]
        }, {
            'from': new Date('2020/07/11 14:10 EDT'),
            'to': new Date('22020/07/11 14:20 EDT'),
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
            'from': new Date('2020/07/11 14:20 EDT'),
            'to': new Date('2020/07/11 15:50 EDT'),
            'title': 'Academia Session - A Reality Check on Becoming Faculty',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Hsiao-Ying Monica Wey'],
				speakersObj['Ming-Ru Wu'],
				speakersObj['Wan-Ting Grace Chen'],
				speakersObj['Han-Yu Shih'],
				speakersObj['Yu-Chen Tony Tsai']
			]
        }, {
            'from': new Date('2020/07/11 15:50 EDT'),
            'to': new Date('2020/07/11 16:00 EDT'),
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
            'from': new Date('2020/07/11 16:00 EDT'),
            'to': new Date('2020/07/11 17:20 EDT'),
            'title': 'Industry Session - Career Exploration: Navigating Your Next Journey',
            'topic': null,
			'sessionDescription': '',
            'tags': [],
            'rooms': [],
            'speakers': [
				speakersObj['Steven Chang'],
				speakersObj['Hank Lin'],
				speakersObj['Hannah Shen'],
				speakersObj['Shianhuey Chiang'],
			]
        }, {
            'from': new Date('2020/07/11 17:20 EDT'),
            'to': new Date('2020/07/11 17:30 EDT'),
            'title': 'Closing Remarks',
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
            'from': new Date('2020/07/11 17:30 EDT'),
            'to': new Date('2020/07/11 18:30 EDT'),
            'title': 'Happy Hour Networking ',
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
		'title': 'acknowledgement',
		'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat duis. Eget est lorem ipsum dolor. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Bibendum neque egestas congue quisque. Volutpat blandit aliquam etiam erat. Nec nam aliquam sem et tortor consequat id porta nibh. Urna nunc id cursus metus aliquam eleifend.',
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


