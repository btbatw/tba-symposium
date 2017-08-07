module.export = {
    
    eventInfo: {
        name: String,
        location: String,
        time: Date,
        year: String,
        briefDescription: String,
    },

    about: {
        title: String,
        text: String
    },

    location: {
        title: String,
        text: String,
        googleMapLink: String,
        directions: [
            {
                method: String,
                text: String,
                description: String
            }
        ],
        lodgings: [
            {
                category: String,
                priceRange: String,
                hotels: [
                    {
                        name: String,
                        location: String
                    }
                ]
            }
        ]
    },

    schedules: [
        {
            from: Date,
            to: Date,
            title: String,
            topic: String,
            tags: [],
            rooms: [],
            speakers: [
                {
                    name: String,
                    nameCh: String,
                    affiliation: String,
                }
            ]
        }
    ],

    sponsors : [
        {
            level: String,
            name: String,
            logoUrl: String,
            link: String
        }
    ],

    imgs: [
        {
            usage: String,
            imgLinks: []
        }
    ]

}