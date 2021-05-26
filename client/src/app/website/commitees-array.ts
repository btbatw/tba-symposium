import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `Role	Name	Position	Image filename	Links
Co-President	Hsien-Wei Yvonne Meng	Principal Scientist, Johnson and Johnson	Yvonne Meng.jpeg
Co-President	Erica P. Cai	Principal Investigator, Indiana Bioscience Research Institute
Advisory Board	Margaret (Chia-Ying) Wey	Senior Medical Scientist, AstraZeneca
Advisory Board	Chih-Chung (Jerry) Lin	Postdoc, Masschusetts General Hospital
Advisory Board	Jimmy Chiu	Scientist II, bluebird bio
Advisory Board	Yung-Chih Cheng	Principal Scientist, Pfizer	Yung-Chih Cheng.tif
Chief Executive	Ling-Fang Tseng	Clinical Scientist, Vertex Pharmaceuticals
Chief Executive	Mei-Hsiu Lai	Vertex Pharmaceuticals
Chief Scientific	Pin-Kuang Lai	Incoming Assistant Professor, Stevens Institute of Technology
Chief Scientific	Ting-Ya Chang	PhD candidate, Boston University	Chang, Tingya_8470.JPG
Chief Technology	Ming-Ju Tsai	Postdoc, Harvard Medical School
Chief Technology	Chih-Hung Chou
Chief Technology	Yu-An Chen	Research Scientist, Harvard Medical School		https://www.linkedin.com/in/yuanchenbio/
Chief Technology	Li-Yuan Hung	Postdoc, Masschusetts General Hospital
Chief Tax	Ting-Ya Chang	PhD candidate, Boston University
Chief Finance	Shu-Wei Wu	Senior Associate Scientist, Sanofi
Chief Creative	Amy Kao
Chief Operating	Chi-Hsiu Liu	Scientist, Editas Medicine
Session Chairs	Chi-An (Annie) Cheng	Postdoc, Harvard Medical School		`;

const tsv_array = tsv_str
	.split('\n')
	.map(el => el.split('\t'))
	.filter(el => el[1])
	.map(el => {
		return {
			'name': el[1] || null,
			'affiliations': el[2] ? el[2].split(';') : [],
			'imgFileName': el[3] || 'placeholder.jpg',
			'role': el[0] || '',
			'links': el[4] ? el[4].split(';') : [],
		};
	});

const tsv_dict = {};

tsv_array.forEach(el => {
	el.name.trim() in Object.keys(tsv_dict)
		? false
		:  tsv_dict[el.name.trim()] = el;
});

export const commiteesArray = tsv_array.slice(1);
