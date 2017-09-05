const SymposiumStructure = {

    symposiumInfo: {
        name: 'TTBA Symposium 2017',
        location: 'Asutin',
        time: {
            from: new Date('2017/11/04 11:30 CDT'),
            to: new Date('2017/11/05 12:00 CST')
        },
        year: '2017',
        briefDescription: 'string',
        showPageLink: false,
    },

    about: {
        title: 'TTBA',
        showPageLink: true,
        text: 'Texas Taiwanese Biotechnology Association (TTBA) is a young non-profit organization established by a vibrant group of PhD students from Baylor College of Medicine, UT Southwestern, UT Austin, Texas A & M, and Rice University. Our mission is to facilitate intellectual conversation and networking among young Taiwanese biomedical scientists, and foster their career development in the US and Taiwan. \n \n We regularly host events every month. To keep up with our latest events, please like our fanpage, join the facebook group, and sign up our email updates.',
    },

    location: {
        title: 'Location',
        showPageLink: true,
        text: 'string',
        googleMapLink: 'string',
        directions: [{
            method: 'Parking',
            description: 'Street parking is available'
        }],
        lodgings: [{
            category: 'Economy',
            priceRange: 'string',
            hotels: [{
                name: 'string',
                location: 'string'
            }]
        }]
    },

    talk: {
        title: 'Talks',
        showPageLink: true,
        schedules: [{
                from: new Date('2017/11/04 11:30 CDT'),
                to: new Date("2017-11-04T17:30:00.000Z"),
                title: 'Registration',
                topic: null,
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [], 
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/04 12:30 CDT'),
                to: new Date('2017/11/04 13:00 CDT'),
                title: 'Opening Remarks',
                topic: null,
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [],
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/04 13:00 CDT'),
                to: new Date('2017/11/04 14:00 CDT'),
                title: 'Keynote 1',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: 'Mien-Chie Hung',
                    nameCh: '洪明奇',
                    affiliations: ['Vice President for Basic Research, the University of Texas MD Anderson Cancer Center, Houston, TX', 'Member of Academia Sinica, Taiwan'],
                    imgFileName: 'mien-chie_hung.jpg',
                    links: ['https://faculty.mdanderson.org/profiles/mien-chie_hung.html']
                    
                }]
            },
            {
                from: new Date('2017/11/04 14:00 CDT'),
                to: new Date('2017/11/04 15:00 CDT'),
                title: 'Academic entrepreneur',
                topic: 'How does academic innovation initiate entrepreneurship?',
                tags: [],
                rooms: [],
                speakers: [{
                        name: 'Tim Hui-Ming Huang',
                        nameCh: '',
                        affiliations: ['Professor and Chair, Department of Molecular Medicine, UT Health Science Center at San Antonio'],
                        imgFileName: 'tim_hui-ming_huang.jpg',
                        links:[]
                    },
                    {
                        name: 'Hsian-Rong Tseng',
                        nameCh: '曾憲榮',
                        affiliations: ['Professor, Department of Molecular and Medical Pharmacology, the University of California Los Angeles'],
                        imgFileName: 'hsian-rong_tseng.jpg',
                        links:[]
                    },
                    {
                        name: 'Lidong Qin',
                        nameCh: '秦立冬',
                        affiliations: ['Professor, Nanomedicine, Institute for Academic Medicine Houston Methodist'],
                        imgFileName: 'lidong_qin.jpg',
                        links:[]
                    },
                    {
                        name: 'Tim Hsin-Chih Yeh',
                        nameCh: '葉信志',
                        affiliations: ['Assistant Professor, Department of Biomedical Engineering, the University of Texas at Austin'],
                        imgFileName: 'tim_hsin-chih_yeh.jpg',
                        links:[]
                    }
                ]
            },
            {
                from: new Date('2017/11/04 15:00 CDT'),
                to: new Date('2017/11/04 15:30 CDT'),
                title: 'Coffee break',
                topic: null,
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [], 
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/04 15:30 CDT'),
                to: new Date('2017/11/04 16:30 CDT'),
                title: 'Keynote 2',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: 'Gene Lay',
                    nameCh: '賴正光',
                    affiliations: ['Founder and CEO, BioLegend'],
                    imgFileName: 'gene_lay.jpg',
                    links: ['https://faculty.mdanderson.org/profiles/mien-chie_hung.html']
                    
                }]
            },
            {
                from: new Date('2017/11/04 16:30 CDT'),
                to: new Date('2017/11/04 17:30 CDT'),
                title: 'Beyond the bench',
                topic: 'How could we marry biotechnology with a different field?',
                tags: [],
                rooms: [],
                speakers: [{
                        name: 'C.J. George Chang',
                        nameCh: '',
                        affiliations: ['Pharmacologist (Regulatory Toxicologist), US FDA Center for Drug Evaluation and Research'],
                        imgFileName: 'cj_george_chang.jpg',
                        links:[]
                    },
                    {
                        name: 'Yuan-Ping Huang',
                        nameCh: '黃元平',
                        affiliations: ['Associate, McKinsey & Company'],
                        imgFileName: 'yuan-ping_huang.jpg',
                        links:[]
                    },
                    {
                        name: 'Kay Kai-Yun Chuang',
                        nameCh: '',
                        affiliations: ['Regional Business Development Manager, GenScript'],
                        imgFileName: 'kay_kai-yun_chuang.jpg',
                        links:[]
                    },
                ]
            },
            {
                from: new Date('2017/11/04 17:30 CDT'),
                to: new Date('2017/11/04 18:30 CDT'),
                title: 'Elevator talk',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [],
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/04 18:30 CDT'),
                to: new Date('2017/11/04 19:30 CDT'),
                title: 'Reception dinner',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [], 
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/04 19:30 CDT'),
                to: new Date('2017/11/04 21:00 CDT'),
                title: 'Information session',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [], 
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/04 21:00 CDT'),
                to: new Date('2017/11/04 24:00 CDT'),
                title: 'Social night at 6th street',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [], 
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/05 08:00 CST'),
                to: new Date('2017/11/05 09:00 CST'),
                title: 'Refreshments',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: '',
                    nameCh: '',
                    affiliations: [], 
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/05 09:00 CST'),
                to: new Date('2017/11/05 09:30 CST'),
                title: 'Introduction of BioGroup platform of National Taiwan University',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: 'Hsinyu Lee',
                    nameCh: '李心予',
                    affiliations: ['Professor & Director of Center for Biotechnology, National Taiwan University'], 
                    imgFileName: 'hsinyu_lee.jpg',
                    links:[]
                },
                {
                    name: 'Tang-Long Shen',
                    nameCh: '沈湯龍',
                    affiliations: ['Professor, Department of Plant Pathology and Microbiology, National Taiwan University'], 
                    imgFileName: 'tang-long_shen.jpg',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/05 09:30 CST'),
                to: new Date('2017/11/05 10:30 CST'),
                title: 'Startup in Lone Star',
                topic: 'Let’s dive in the shark tank.',
                tags: [],
                rooms: [],
                speakers: [{
                    name: '',
                    nameCh: '',
                    affiliations: [], 
                    imgFileName: '',
                    links:[]
                }]
            },
            {
                from: new Date('2017/11/05 10:30 CST'),
                to: new Date('2017/11/05 11:30 CST'),
                title: 'Industry',
                topic: 'East coast or West coast? Biotech Hubs in the States.',
                tags: [],
                rooms: [],
                speakers: [{
                    name: 'Hannah Shen',
                    nameCh: '',
                    affiliations: ['Scientist, Benchling'], 
                    imgFileName: 'hannah_shen.jpg',
                    links:[]
                },
                {
                    name: 'Haofan Eric Peng',
                    nameCh: '',
                    affiliations: ['Senior Engineer II, Biogen'], 
                    imgFileName: 'eric_haofan_peng.jpg',
                    links:[]
                }]
            },
        ]
    },

    sponsor: {
        title: 'Sponsors',
        showPageLink: false,
        sponsors: [{
            level: 'string',
            name: 'string',
            logoUrl: 'string',
            link: 'string'
        }],
    },
        

    imgs: [{
        usage: 'string',
        imgLinks: []
    }]

}

module.exports = SymposiumStructure;