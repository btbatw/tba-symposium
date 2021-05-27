import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `Role	Name	Position	Image filename	Links
Co-President	Hsien-Wei Yvonne Meng	Principal Scientist, Johnson and Johnson	Yvonne_Meng.jpeg	https://www.linkedin.com/in/hwyvonnemeng/
Co-President	Erica P. Cai	Principal Investigator, Indiana Bioscience Research Institute	Erica_Cai.jpg	https://www.linkedin.com/in/ericapcai/
Advisory Board	Margaret (Chia-Ying) Wey	Senior Medical Scientist, AstraZeneca	Margaret_Wey.jpg	https://www.linkedin.com/in/margaretwey/
Advisory Board	Chih-Chung (Jerry) Lin	Postdoc, Masschusetts General Hospital	Jerry.png	https://www.linkedin.com/in/chih-chung-lin-680b48113/
Advisory Board	Jimmy Chiu	Scientist II, bluebird bio	Jimmy_Chu.jpg	https://www.linkedin.com/in/chih-chi-jimmy-chu-526b0073/
Advisory Board	Yung-Chih Cheng	Principal Scientist, Pfizer	Yung-Chih_Cheng.jpg	https://www.linkedin.com/in/yung-chih-cheng-60522333/
Chief Executive	Ling-Fang Tseng	Clinical Scientist, Vertex Pharmaceuticals	Ling-Fang_Tseng.jpg	https://www.linkedin.com/in/lingfangtseng/
Chief Executive	Mei-Hsiu Lai	Vertex Pharmaceuticals	Mei-Hsiu_Lai.jpg	https://www.linkedin.com/in/mhlai/
Chief Scientific	Pin-Kuang Lai	Incoming Assistant Professor, Stevens Institute of Technology	Pin-kuang_Lai.jpg	https://www.linkedin.com/in/pin-kuang-lai/
Chief Scientific	Ting-Ya Chang	PhD candidate, Boston University	Tingya_Chang.JPG	https://www.linkedin.com/in/chang-ting-ya-sophia-76577420a/
Chief Technology	Ming-Ju Tsai	Postdoc, Harvard Medical School	Ming-Ju_Tsai.jpg	https://www.linkedin.com/in/mingju-tsai/
Chief Technology	Chih-Hung Chou	Postdoc, Broad Institute of MIT and Harvard	Chih-Hung_Chou.jpg	https://www.linkedin.com/in/chchou23/
Chief Technology	Yu-An Chen	Research Scientist, Harvard Medical School	yu-an_chen.jpg	https://www.linkedin.com/in/yuanchenbio/
Chief Technology	Li-Yuan Hung	Postdoc, Masschusetts General Hospital		https://www.linkedin.com/in/liyuanhung/
Chief Tax	Ting-Ya Chang	PhD candidate, Boston University	Tingya_Chang.JPG	https://www.linkedin.com/in/chang-ting-ya-sophia-76577420a/
Chief Finance	Shu-Wei Wu	Senior Associate Scientist, Sanofi	Shu-Wei_Wu.jpg	https://www.linkedin.com/in/shu-wei-wu-570a98120/
Chief Creative	Amy Kao
Chief Operating	Chi-Hsiu Liu	Scientist, Editas Medicine	CHLiuPhotoFromLinkedin.jpeg	https://www.linkedin.com/in/chi-hsiu-zoe-liu-8436417a/
Session Chairs	Chi-An (Annie) Cheng	Postdoc, Harvard Medical School	Chi-An_Cheng.JPG	https://www.linkedin.com/in/chi-an-annie-cheng-774797103/`;

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
