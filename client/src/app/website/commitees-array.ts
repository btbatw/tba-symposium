import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `Role	Name	Position	Image filename	Links
Co-President	Hsien-Wei Yvonne Meng	Principal Scientist, Johnson and Johnson	Yvonne_Meng.jpeg
Co-President	Erica P. Cai	Principal Investigator, Indiana Bioscience Research Institute	Erica_Cai.jpg
Advisory Board	Margaret (Chia-Ying) Wey	Senior Medical Scientist, AstraZeneca	Margaret_Wey.jpg
Advisory Board	Chih-Chung (Jerry) Lin	Postdoc, Masschusetts General Hospital	Jerry.png
Advisory Board	Jimmy Chiu	Scientist II, bluebird bio	Jimmy_Chu.jpg
Advisory Board	Yung-Chih Cheng	Principal Scientist, Pfizer	Yung-Chih_Cheng.jpg
Chief Executive	Ling-Fang Tseng	Clinical Scientist, Vertex Pharmaceuticals	Ling-Fang_Tseng.jpg
Chief Executive	Mei-Hsiu Lai	Vertex Pharmaceuticals	Mei-Hsiu_Lai.jpg
Chief Scientific	Pin-Kuang Lai	Incoming Assistant Professor, Stevens Institute of Technology	Pin-kuang_Lai.jpg
Chief Scientific	Ting-Ya Chang	PhD candidate, Boston University	Tingya_Chang.JPG
Chief Technology	Ming-Ju Tsai	Postdoc, Harvard Medical School	Ming-Ju_Tsai.jpg
Chief Technology	Chih-Hung Chou	Postdoc, Broad Institute of MIT and Harvard	Chih-Hung_Chou.jpg
Chief Technology	Yu-An Chen	Research Scientist, Harvard Medical School	yu-an_chen.jpg	https://www.linkedin.com/in/yuanchenbio/
Chief Technology	Li-Yuan Hung	Postdoc, Masschusetts General Hospital
Chief Tax	Ting-Ya Chang	PhD candidate, Boston University	Tingya_Chang.JPG
Chief Finance	Shu-Wei Wu	Senior Associate Scientist, Sanofi	Shu-Wei_Wu.jpg
Chief Creative	Amy Kao
Chief Operating	Chi-Hsiu Liu	Scientist, Editas Medicine	CHLiuPhotoFromLinkedin.jpeg
Session Chairs	Chi-An (Annie) Cheng	Postdoc, Harvard Medical School	Chi-An_Cheng.JPG	`;

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
