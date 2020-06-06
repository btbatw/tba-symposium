import { speakersObj } from './speakers-obj';

export const ttbaSymposium2017 = {
    'symposiumInfo': {
        'name': 'BTBA Symposium 2019',
        'location': 'Boston',
        'time': {
            'from': new Date('2019/08/03'),
            'to': new Date('2019/08/04')
		},
		'timeZone': 'America/Chicago',
        'year': '2019',
        'title': 'HUSTLING IN THE ERA OF BIOTECH',
        'showPageLink': false,
        'registrationLink': 'https://www.eventbrite.com/e/btba-annual-symposium-tickets-62120152047'
    },
    'host': {
        'name': 'Boston Taiwanese Biotechnology Association',
        'nameShort': 'BTBA',
        'nameCh': '波士頓臺灣人生物科技協會',
        'webLink': 'https://www.btbatw.org/',
		'logoSmall': 'logo-ttba-small.png',
		'email': 'btbatw@gmail.com',
		'supportLink': 'https://www.btbatw.org/support.html'
    },
    'about': {
        'title': 'The symposium',
        'showPageLink': true,
        'subjects': [{
            'title': '',
            'description': '<p>Our annual symposiums attract more than 350 professionals and students every year from biology-related fields across the US. This two-day event is a great platform for attendees to network and engage in conversations about career development and trending topics in biotechnology. This year, the symposium will be held on August 3-4 at Harvard University Northwest Science Building, Cambridge, MA. We are honored to have Dr. Seng H. Cheng, Senior Vice President and Chief Scientific Officer at Pfizer and Dr. Jenny P-Y Ting, William Rand Kenan Professor at University of North Carolina at Chapel Hill as our keynote speakers. The registration is open. We invite you to participate in the event!</p>'
        }, {
            'title': 'About BTBA',
            'description': '<p>Boston Taiwanese Biotechnology Association (BTBA) was founded in 2012 by a group of Taiwanese graduate students, postdocs and young professionals in the greater Boston area. Our goals are to enhance scientific collaborations, to foster individual career development, to facilitate interactions and to strengthen networking among academic and industrial bioscience communities in Taiwan and the US.</p>'
        }]
    },
    'talk': {
        'title': 'Talks',
        'showPageLink': true,
        'schedules': [{
            'from': new Date('2019/08/03 08:00 EDT'),
            'to': new Date('2019/08/03 09:00 EDT'),
            'title': 'Registration and Poster Setup',
            'topic': null,
            'sessionDescription': 'register @ room ... ...',
            'tags': [],
            'rooms': ['B100 Prefunction area'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2019/08/03 09:00 EDT'),
            'to': new Date('22019/08/03 09:10 EDT'),
            'title': 'Opening Remarks',
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
        }, {
            'from': new Date('2019/08/03 09:10 EDT'),
            'to': new Date('2019/08/03 10:10 EDT'),
            'title': 'Keynote: Dr. Seng Cheng',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Seng Cheng'],
			]
        }, {
            'from': new Date('2019/08/03 10:10 EDT'),
            'to': new Date('22019/08/03 10:30 EDT'),
            'title': 'Group Photo & Coffee Break',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': ['B100 Prefunction area'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2019/08/03 10:30 EDT'),
            'to': new Date('2019/08/03 12:15 EDT'),
            'title': 'Biotech Forum: Drug Modality',
            'topic': null,
            'sessionDescription': 'This session aims to provide our audience with a general overview of the various modalities of drug research and development in the pharmaceutical industry. From traditional small molecules to biologics and all the way to the new gene therapy and cell therapy. We will discuss basic mechanisms of each modality, delivery route, unique properties and challenges in the discovery/development process. We are excited to have a diverse group of panelists; each has first-hand experiences with these respective drug types. This would be a great discussion! We welcome our audience to bring your specific questions for an interactive session!',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Chi-Wang Lin'],
				speakersObj['Yvonne Meng'],
				speakersObj['April Kuo'],
				speakersObj['Wei-Chiang Chen'],
				speakersObj['Leslie Wu'],
				speakersObj['Ho-Chou Tu'],
				speakersObj['Hon-Ren Huang'],
				speakersObj['DeKuan Chang'],
				speakersObj['Pam Shou-Ping Wang']
			]
        }, {
            'from': new Date('2019/08/03 12:15 EDT'),
            'to': new Date('2019/08/03 13:45 EDT'),
            'title': 'Lunch & Elevator Pitch',
            'topic': null,
            'sessionDescription': 'Can you talk about your research? Now is your show time to present your esoteric works to strangers from any background. Please prepare 2.5 minutes talk and 3 slides for our elevator pitch and you might have a chance to win a prize!',
            'tags': [],
            'rooms': ['B100 Prefunction area'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2019/08/03 13:45 EDT'),
            'to': new Date('2019/08/03 14:45 EDT'),
            'title': 'Careers in Biotech Industry',
            'topic': null,
			'sessionDescription': `<p>As many people dream about entering the biotech/pharmaceutical industry after receiving their science diplomas, do you know what real life is like working in a biotech/pharmaceutical organization? What are the career pathways you can choose and the challenges you will eventually face as you climb the corporate ladder? How to maximize your strengths, expand skills in the industry as well as build your value over time?</p><p>Come join us for an hour discussion with some industrial pioneers -- from R&D to Patient Safety, Regulatory, Legal, Business Development and Equity Investment. Let’s find out how to prepare yourself step by step towards your dream lifestyle!</p>`,
			'numOfParallelSessions': 2,
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Leyi (Colin) Wang'],
				speakersObj['Seng-Lai (Thomas) Tan'],
				speakersObj['Joy Chen'],
				speakersObj['I-Hung Shih'],
				speakersObj['Allyson Hatton'],
				speakersObj['Curtis Chang']
			]
        }, {
            'from': new Date('2019/08/03 13:45 EDT'),
            'to': new Date('2019/08/03 14:45 EDT'),
            'title': 'Academic Panel Discussion',
            'topic': null,
			'sessionDescription': 'Do you wonder what a career in academia would be like and how to be successful in this path? Join us in an academic panel featuring professors with rich experiences, who will share their tips on how to thrive in this rapidly expanding field of academia!',
			'numOfParallelSessions': 2,
            'tags': [],
            'rooms': ['Room B101'],
            'speakers': [
				speakersObj['Isaac M. Chiu'],
				speakersObj['Gene-Wei Li'],
				speakersObj['Chih-Hao Lee'],
				speakersObj['Lee-Yuan Liu-Chen'],
			]
        }, {
            'from': new Date('2019/08/03 14:45 EDT'),
            'to': new Date('2019/08/03 15:45 EDT'),
            'title': 'Managing Up, Down and Across',
            'topic': null,
			'sessionDescription': 'Trained as scientists, we pursue a better understanding of the world and aim to improve human well-being. In the real world, achieving these goals often takes the effort from the whole team, if not multiple teams. Graduate school never taught us how to work with people! Worry not. In this session, we invited 4 respected professionals from both the academia and the industry to share with us their experiences in managing or collaborating with groups of different sizes and expertise. Our panelists will also be giving practical advice for young professionals to advance their managing skills strategically. Come join us and learn how to build a team, resolve conflicts, and manage up.',
			'numOfParallelSessions': 2,
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Albert Hwa'],
				speakersObj['Lih-Ling Lin'],
				speakersObj['Mary Ellen Lane']
			]
        }, {
            'from': new Date('2019/08/03 14:45 EDT'),
            'to': new Date('2019/08/03 15:45 EDT'),
            'title': 'Academic Roundtable',
            'topic': null,
			'sessionDescription': 'Would you like to ask more questions about the academic field? The roundtable discussion offers a chance to network with outstanding professors in a small group setting, allowing you to get insights among local academic circumstance as well as to discover and develop your strengths!',
			'numOfParallelSessions': 2,
            'tags': [],
            'rooms': ['Room B109 & B110'],
            'speakers': [
				speakersObj['Isaac M. Chiu'],
				speakersObj['Gene-Wei Li'],
				speakersObj['Chih-Hao Lee'],
				speakersObj['Lee-Yuan Liu-Chen'],
			]
        }, {
            'from': new Date('2019/08/03 15:40 EDT'),
            'to': new Date('2019/08/03 17:00 EDT'),
            'title': 'Poster Session (w/ Coffee & Snacks)',
            'topic': null,
            'sessionDescription': '',
            'tags': [],
            'rooms': ['B100 Prefunction area'],
            'speakers': [{
                'name': null,
                'nameCh': null,
                'affiliations': [],
                'links': [],
                'description': ''
            }]
        }, {
            'from': new Date('2019/08/04 08:00 EDT'),
            'to': new Date('2019/08/04 09:00 EDT'),
            'title': 'Breakfast and Meet',
            'topic': '',
            'sessionDescription': 'Are you graduating and thinking about landing a job in the biotech industry? Are you considering a career change but don’t know what options you have? We understand that the job hunting process can often feel frustrating and overwhelming! Come to our networking session to chat with young professionals with advanced degrees. Learn about useful skills to get your first job and explore the different fields in the biotech industry',
            'tags': [],
            'rooms': ['B100 Prefunction area'],
            'speakers': [
				speakersObj['Jimmy Chu'],
				speakersObj['Chien-Chung (James) Wang'],
				speakersObj['Kuei Ting (Tim) Chen'],
				speakersObj['Jun-Yuan Huang'],
				speakersObj['Eric Chen'],
				speakersObj['Yian Ruan'],
				speakersObj['Jessica Huang'],
				speakersObj['Yi-Dong Lin'],
				speakersObj['Pi-i Debby Lin'],
				speakersObj['Ling-Fang Tseng'],
				speakersObj['Po-Jen (Will) Yen'],
				speakersObj['Pei-Wen Chu']
			]
        }, {
            'from': new Date('2019/08/04 09:00 EDT'),
            'to': new Date('2019/08/04 10:00 EDT'),
            'title': 'Keynote: Dr. Jenny P-Y Ting',
            'topic': '',
            'sessionDescription': '',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [speakersObj['Jenny P-Y Ting']]
        }, {
            'from': new Date('2019/08/04 10:10 EDT'),
            'to': new Date('2019/08/04 10:40 EDT'),
            'title': 'Massachusetts Life Science Center (MLSC): Overview of Boston Biotech Ecosystem',
            'topic': '',
            'sessionDescription': 'Have you ever heard of Biotech clusters? These clusters are geographic regions active in bioscience and can range from small emerging groups to large, full-blown clusters like Boston. Despite the commonly shared key factors to make a top-tier biocluster: Talents and Capital. Each cluster has its advantages and focuses. In this session, we are honored to have Mass Life Science Center (MLSC) to give us an overview of Boston Biotech Ecosystem explaining why the Great Boston is the most successful Biotech Cluster.',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Sandhya Iyer']
			]
        }, {
            'from': new Date('2019/08/04 10:40 EDT'),
            'to': new Date('2019/08/04 11:40 EDT'),
            'title': 'Biotech Clusters Across the US',
            'topic': '',
            'sessionDescription': 'Have you ever heard of Biotech clusters? These clusters are geographic regions active in bioscience and can range from small emerging groups to large, full-blown clusters like Boston. Despite the commonly shared key factors to make a top-tier biocluster: Talents and Capital. Each cluster has its advantages and focuses. In this session, three young professionals across the U.S will share their valuable experiences and observations of their local biotech environments. Join us to learn more about the culture and career opportunities in these biotech clusters!',
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Chih-Hsu (Jack) Lin'],
				speakersObj['Hao-Wei Chang'],
				speakersObj['Eric Du']
			]
        }, {
            'from': new Date('2019/08/04 11:40 EDT'),
            'to': new Date('2019/08/04 12:40 EDT'),
            'title': 'Trending Topic: Synthetic Biology',
            'topic': '',
			'sessionDescription': `
			<p><strong>Imagine</strong> a future where microbe acts as fertilizers for cereal crops, where wastewater is purified by bacteria, where cultured ingredients are produced by microbes in a sustainable way, and genetic diseases are cured with engineered microorganisms. Welcome to the world of synthetic biology, an innovative field that brings chemistry, biology, engineering, and computer science together. </p>
			<p>Join us as we explore this multi-billion-dollar industry that is making a huge impact across agriculture, energy, pharmaceutical, and manufacturing industries, and learn about its present and promising future.</p>
			`,
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [
				speakersObj['Dawn Thompson'],
				speakersObj['Sergio Florez'],
				speakersObj['Felipe Sarmiento'],
				speakersObj['Chin Giaw (Ryan) Lim'],
				speakersObj['Jacky Ng']
			]
        }, {
            'from': new Date('2019/08/04 12:40 EDT'),
            'to': new Date('2019/08/04 13:00 EDT'),
            'title': 'Closing Remarks & Poster Award Ceremony',
            'topic': null,
            'sessionDescription': null,
            'tags': [],
            'rooms': ['Room B103'],
            'speakers': [{
                'name': '',
                'nameCh': '',
                'affiliations': [],
                'imgFileName': '',
                'links': [],
                'description': ''
            }]
        }]
    },
    'elevatorPitch': {
        'title': 'Elevator Pitch & Poster Session',
        'showPageLink': 'true',
        'text': '',
        'link': 'http://abstract2017.ttbatw.org/'
    },
    'location': {
        'title': 'Location',
        'showPageLink': true,
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
            'logoUrl': 'logo_biolegend.png',
            'link': 'https://www.biolegend.com/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'logo_scismic.png',
            'link': 'https://scismic.com/beta'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'logo_taa_boston.png',
            'link': 'https://www.facebook.com/TAABoston.Page/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'itri.png',
            'link': 'https://www.itri.org.tw/'
        }, {
            'level': 'string',
            'name': 'string',
            'logoUrl': 'logo_pfizer.png',
            'link': 'https://www.pfizer.com/'
        }]
    },
    'imgs': [{
        'usage': 'string',
        'imgLinks': []
    }]
};

// module.exports = ttbaSymposium2017;


