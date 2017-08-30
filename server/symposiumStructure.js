const SymposiumStructure =  {
    
    symposiumInfo: {
        name: 'string',
        location: 'string',
        time: 'Date',
        year: 'string',
        briefDescription: 'string',
    },

    about: {
        title: 'string',
        text: 'string'
    },

    location: {
        title: 'string',
        text: 'string',
        googleMapLink: 'string',
        directions: [
            {
                method: 'string',
                text: 'string',
                description: 'string'
            }
        ],
        lodgings: [
            {
                category: 'string',
                priceRange: 'string',
                hotels: [
                    {
                        name: 'string',
                        location: 'string'
                    }
                ]
            }
        ]
    },

    schedules: [
        {
            from: 'Date',
            to: 'Date',
            title: 'string',
            topic: 'string',
            tags: [],
            rooms: [],
            speakers: [
                {
                    name: 'string',
                    nameCh: 'string',
                    affiliation: 'string',
                }
            ]
        }
    ],

    sponsors : [
        {
            level: 'string',
            name: 'string',
            logoUrl: 'string',
            link: 'string'
        }
    ],

    imgs: [
        {
            usage: 'string',
            imgLinks: []
        }
    ]

}

module.exports = SymposiumStructure;