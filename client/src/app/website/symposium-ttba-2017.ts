export const ttbaSymposium2017 = {

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
                description: 'register @ room ... ...',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [],
                    imgFileName: '',
                    links: [],
                    description: '',
                }]
            },
            {
                from: new Date('2017/11/04 12:30 CDT'),
                to: new Date('2017/11/04 13:00 CDT'),
                title: 'Opening Remarks',
                topic: null,
                description: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [],
                    imgFileName: '',
                    links: [],
                    description: '',
                }]
            },
            {
                from: new Date('2017/11/04 13:00 CDT'),
                to: new Date('2017/11/04 14:00 CDT'),
                title: 'Keynote 1: Mien-Chie Hung, PhD',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: 'Mien-Chie Hung',
                    nameCh: '洪明奇',
                    affiliations: ['Vice President for Basic Research, the University of Texas MD Anderson Cancer Center, Houston, TX', 'Academician of Academia Sinica, Taiwan'],
                    imgFileName: 'mien-chie_hung.jpg',
                    links: ['https://faculty.mdanderson.org/profiles/mien-chie_hung.html'],
                    description: 'Mien-Chie Hung, Ph.D. received undergraduate and graduate degrees from the National Taiwan University and his PhD from Brandeis University. After completing postdoctoral training with Dr. Robert A. Weinberg at the Whitehead Institute/Massachusetts Institute of Technology. Dr. Hung was recruited to MD Anderson in 1986. Dr. Hung is internationally recognized for his studies of signal transduction pathways regulated by tyrosine kinase growth factor receptors, such as EGFR and HER-2/neu, as well as molecular mechanisms of tumorigenesis. Up to date, Dr. Hung has published more than 475 peer-reviewed articles and his lifetime h-index is 107. Dr. Hung has served in many study sections of the NIH and various funding agencies in many other countries to select awardees. He is one of members of Selection Committee for Tang Prize in Biopharmaceutical Science category and 2016 Pezcoller Foundation-AACR Award. Dr. Hung also serves as an editorial member for many journals in cancer research to evaluate quality of submission. Notable, he is one of the founding Editorial Members for Cancer Cell and Editor-in-chief for American Journal for Cancer Research. Dr. Hung was inducted as an Academician of the Academia Sinica in Taiwan in 2002. In addition, Dr. Hung was selected as a Fellow in Biological Sciences section, American Association for the Advancement of Science in 2010. Dr. Hung is a basic scientist with a keen translational vision and especially his recent research effort has significantly contributed to understanding the biology of cancer and to developing combinational cancer therapies to overcome resistance. His laboratory has a long term commitment to 1) discovery of novel functionality of epidermal growth factor receptor (EGFR) family which may provide useful insight to understand cancer formation and development; 2) identification of crosstalks of signal pathways/networks in cancer cells and tumor microenvironment which could potentially predict resistance to target therapy; and 3) development of marker-guided targeted therapy including immune checkpoint therapy which will effectively treat cancer patients.',

                }]
            },
            {
                from: new Date('2017/11/04 14:00 CDT'),
                to: new Date('2017/11/04 15:00 CDT'),
                title: 'Panel 1: Academic entrepreneur',
                topic: 'How does academic innovation initiate entrepreneurship?',
                tags: [],
                rooms: [],
                speakers: [{
                        name: 'Tim Hui-Ming Huang',
                        nameCh: '',
                        affiliations: ['Professor and Chair, Department of Molecular Medicine, UT Health Science Center at San Antonio'],
                        imgFileName: 'tim_hui-ming_huang.jpg',
                        links: ['http://molecularmedicine.uthscsa.edu/FAC_Profile.aspx?facID=133'],
                        description: 'Dr. Tim Hui-Ming Huang received his bachelor’s degree in biology from Tunghai University, Taiwan in 1980 and his Ph.D. degree in genetics from the University of California at Davis in 1989.  From 1989 to 1991, he was a clinical cytogenetics fellow at Baylor College of Medicine, Houston.  He was a faculty member at the University of Missouri-Columbia (1991-2003) and the Ohio State University (2003-2011).  In 2006, Dr. Huang was named as a Fellow of the American Association for the Advancement of Science.  Presently, he is Alice P. McDermott Distinguished University Professor and Chairman in the Department of Molecular Medicine at the University of Texas Health (UTH) - San Antonio and Deputy Director of UTH Cancer Center - San Antonio.  Dr. Huang has published ³300 peer-reviewed papers and book chapters related to cancer epigenetics and genetics and has patented technologies for global methylation screening in cancers.',
                    },
                    {
                        name: 'Hsian-Rong Tseng',
                        nameCh: '曾憲榮',
                        affiliations: ['Professor, Department of Molecular and Medical Pharmacology, the University of California Los Angeles'],
                        imgFileName: 'hsian-rong_tseng.jpg',
                        links: ['http://faculty.pharmacology.ucla.edu/institution/personnel?personnel_id=45737'],
                        description: 'Dr. Hsian-Rong (HR) Tseng is currently a Professor in the Department of Molecular & Medical Pharmacology in David Geffen School of Medicine at UCLA. He also holds memberships in the California NanoSystems Institute and Jonsson Comprehensive Cancer Center on the UCLA campus. To translate the diagnostic technologies developed in his lab into the clinical setting, HR established an extensive collaboration network with oncology programs at UCLA, Cedars Sinai Medical Center and several cancer centers in China. To initiate the commercial transition of their cancer diagnostic assay, Dr. Tseng founded CytoLumina Technologies Corp., a biotechnology company that has licensed intellectual properties from UCLA. CytoLumina has been supported by NCI SBIR funding to facilitate the commercial translation of its latest circulating tumor cell (CTC) purification platform. The company’s CTC enumeration assay is currently undergoing an FDA 510(k) medical device clearance for prognostic utility in prostate cancer. In December 2016, CytoLumina was officially invited to participate in the Blood Profiling Atlas in Cancer (BloodPAC) Consortium to establish the standard of CTC research and clinical applications.',
                    },
                    {
                        name: 'Lidong Qin',
                        nameCh: '秦立冬',
                        affiliations: ['Professor, Nanomedicine, Institute for Academic Medicine Houston Methodist'],
                        imgFileName: 'lidong_qin.jpg',
                        links: ['http://www.houstonmethodist.org/faculty/lidong-qin'],
                        description: 'Dr. Lidong Qin received his Ph.D. in Chemistry from Northwestern University, Evanston, Illinois and completed the postdoctoral traineeship in Cancer Nanotechnology at the California Institute of Technology. He joined the Department of Nanomedicine, Houston Methodist Research Institute, in July 2010 and was awarded with a prestigious startup award, the Cancer Prevention and Research Institute of Texas (CPRIT) recruitment award for first-time, tenure-track faculty. Dr. Qin has developed nonconventional technology platforms for cancer diagnosis and risk analysis, measurement of cancer cell mechanical properties and phenotype enrichment, and in vitro models for study of the cancer cell microenvironment. The combination of his technological strengths and understanding of cancer cell biology has helped us develop several interesting technological innovations and opened many new avenues of future research direction.',
                    },
                    {
                        name: 'Tim Hsin-Chih Yeh',
                        nameCh: '葉信志',
                        affiliations: ['Assistant Professor, Department of Biomedical Engineering, the University of Texas at Austin'],
                        imgFileName: 'tim_hsin-chih_yeh.jpg',
                        links: ['http://research.engr.utexas.edu/yeh/'],
                        description: 'Dr. Tim Hsin-Chih Yeh obtained his BS degree from National Taiwan University, MS degree from the University of California, Los Angeles, and PhD from Johns Hopkins University, all in mechanical engineering. After graduation from UCLA, he worked at Optical Micro Machines Inc. in San Diego from 1998 to 2003 as an R&D engineer, developing MEMS-based photonic switches for telecommunications. Dr. Yeh received his postdoctoral training at Los Alamos National Laboratory from 2009 to 2012, in the Center for Integrated Nanotechnologies. Dr. Yeh joined the Biomedical Engineering Department at the University of Texas at Austin in 2012 as an Assistant Professor. His research interests include nanobiosensor development, 3D molecular tracking and super-resolution imaging.',
                    }
                ]
            },
            {
                from: new Date('2017/11/04 15:00 CDT'),
                to: new Date('2017/11/04 15:30 CDT'),
                title: 'Coffee break',
                topic: null,
                description: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [],
                    links: [],
                    description: '',
                }]
            },
            {
                from: new Date('2017/11/04 15:30 CDT'),
                to: new Date('2017/11/04 16:30 CDT'),
                title: 'Panel 2: Beyond the bench',
                topic: 'How could we marry biotechnology with a different field?',
                tags: [],
                rooms: [],
                speakers: [{
                        name: 'C.J. George Chang',
                        nameCh: '',
                        affiliations: ['Pharmacologist (Regulatory Toxicologist), US FDA Center for Drug Evaluation and Research'],
                        imgFileName: 'cj_george_chang.jpg',
                        links: [],
                        description: '',
                    },
                    {
                        name: 'Yuan-Ping Huang',
                        nameCh: '黃元平',
                        affiliations: ['Life Science VC associate, Lam Capital'],
                        imgFileName: 'yuan-ping_huang.jpg',
                        links: [],
                        description: 'Dr. Yuan-Ping Huang received his PhD in Biomedical Sciences from Columbia University in 2014. Afterward, he worked as an Associate at McKinsey & Company in New York, where he advised top global pharmaceutical companies on R&D and operations strategy. Recently, he joined Lam Capital, the venture arm of Lam Research in Fremont, California. He is responsible for leading life sciences investments in proteomic profiling technologies.',
                    },
                    {
                        name: 'Kay Kai-Yun Chuang',
                        nameCh: '',
                        affiliations: ['Regional Business Development Manager, GenScript'],
                        imgFileName: 'kay_kai-yun_chuang.jpg',
                        links: [],
                        description: '',
                    },
                ]
            },
            {
                from: new Date('2017/11/04 16:30 CDT'),
                to: new Date('2017/11/04 17:30 CDT'),
                title: 'Panel 3: Startup',
                topic: 'Let’s dive in the shark tank.',
                tags: [],
                rooms: [],
                speakers: [{
                    name: null,
                    nameCh: null,
                    affiliations: [],
                    imgFileName: '',
                    links: [],
                    description: '',
                }]
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
                    links: [],
                    description: '',
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
                    links: [],
                    description: '',
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
                    links: [],
                    description: '',
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
                    links: [],
                    description: '',
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
                    links: [],
                    description: '',
                }]
            },
            {
                from: new Date('2017/11/05 09:00 CST'),
                to: new Date('2017/11/05 09:30 CST'),
                title: 'Panel 4: BioGroup @ NTU',
                topic: 'Introduction of BioGroup platform of National Taiwan University',
                tags: [],
                rooms: [],
                speakers: [{
                        name: 'Hsinyu Lee',
                        nameCh: '李心予',
                        affiliations: ['Professor & Director of Center for Biotechnology, National Taiwan University'],
                        imgFileName: 'hsinyu_lee.jpg',
                        links: ['http://www.lifescience.ntu.edu.tw/2016/faculty_HsinyuLee.html?lang=en'],
                        description: 'Dr. Hsinyu Lee received his PhD degree from University of California, San Francisco. He is currently the Director of  Center of Biotechnology and a jointed professor in the Department of Life Science and Department of Electrical Engineering at National Taiwan University. His research focuses on using human endothelial cell as model system to investigate the molecular and physiological functions of lysophospholipids, LPA and S1P. The research results demonstrated that LPLs might be important regulators of blood vessel formation. In his recent works, he found that LPLs are potent stimulators for the expression of cell adhesion molecules and chemotatic factors of endothelial cells.',
                    },
                    {
                        name: 'Tang-Long Shen',
                        nameCh: '沈湯龍',
                        affiliations: ['Professor, Department of Plant Pathology and Microbiology, National Taiwan University'],
                        imgFileName: 'tang-long_shen.jpg',
                        links: ['https://shentllab.wordpress.com'],
                        description: 'Dr. Tang-Long Shen received his BS and MS degrees from National Taiwan University and PhD from Cornell University in Department of Molecular Medicine. Dr. Shen joined the Department of Plant Pathology and Microbiology at the National Taiwan University in 2004. His research goal aims to explore key components, including proteins, trace elements and bioactive metabolites and their modes of action in modulation of various physiologic and pathologic roles. Firstly, we are interested in understanding the molecular mechanism of cancer progression, especially to elucidate how cancer cells and tumor microenvironment participate in cell migrate, formation of pre-metastatic niches and contributing to metastatic organotropism. Several biomolecules, including integrins, receptor tyrosine kinases and cytokines as well as extracellular vesicles exosomes, are main targets in our studies. Additionally, we are seeking useful natural products and de novo protein components in human cells including critical secondary metabolites from traditional Chinese medicinal fungi, Cordyceps spp, Antrodia cinnamonea, and metallotheioneins, to apply on anti-cancer, anti-aging or other complication therapeutics.',
                    }
                ]
            },
            {
                from: new Date('2017/11/05 09:30 CST'),
                to: new Date('2017/11/05 10:30 CST'),
                title: 'Panel 5: Industry',
                topic: 'East coast or west coast? Biotech hubs in the States.',
                tags: [],
                rooms: [],
                speakers: [{
                        name: 'Hannah Shen',
                        nameCh: '',
                        affiliations: ['Scientist, Benchling'],
                        imgFileName: 'hannah_shen.jpg',
                        links: [],
                        description: '',
                    },
                    {
                        name: 'Haofan Eric Peng',
                        nameCh: '',
                        affiliations: ['Senior Engineer II, Biogen'],
                        imgFileName: 'eric_haofan_peng.jpg',
                        links: [],
                        description: '',
                    }
                ]
            },
            {
                from: new Date('2017/11/05 10:30 CST'),
                to: new Date('2017/11/05 11:30 CST'),
                title: 'Keynote 2: Gene Lay, MS, DVM',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: 'Gene Lay',
                    nameCh: '賴正光',
                    affiliations: ['Founder and CEO, BioLegend'],
                    imgFileName: 'gene_lay.jpg',
                    links: ['https://www.linkedin.com/in/gene-lay-827a3b29/'],
                    description: 'Gene Lay, M.S., D.V.M., is the Founder, President and CEO of BioLegend, a global leader in life Science company headquartered in San Diego. Gene grew up in Taiwan, where he completed his undergraduate studies from National Pingtung University of Science and Technology, College of Veterinary Medicine. Gene pursued graduate study in University of Louisiana, Lafayette.  In 1987, he and Ernie Huang co-founded PharMingen. In 1997, PharMingen was acquired by Becton Dickinson, now BD Biosciences PharMingen.  After 5 years with BD Biosciences, Gene founded BioLegend in 2002. In 2016, Gene received EY Entrepreneur of the Year San Diego Award in Life Science and National Finalist in Life Science.',

                }]
            },
            {
                from: new Date('2017/11/05 11:30 CST'),
                to: new Date('2017/11/05 12:00 CST'),
                title: 'Closing remarks and elevator talk award ceremony',
                topic: '',
                tags: [],
                rooms: [],
                speakers: [{
                    name: '',
                    nameCh: '',
                    affiliations: [],
                    imgFileName: '',
                    links: [],
                    description: '',
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

// module.exports = ttbaSymposium2017;
