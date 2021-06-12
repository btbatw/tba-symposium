import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `Role	Name	Position	Image filename	Links
Co-President	Hsien-Wei Yvonne Meng	Principal Scientist, Johnson and Johnson	Yvonne_Meng.jpeg	https://www.linkedin.com/in/hwyvonnemeng/
Co-President	Erica P. Cai	Principal Investigator, Indiana Bioscience Research Institute	Erica_Cai.jpg	https://www.linkedin.com/in/ericapcai/
Advisory Board	Margaret (Chia-Ying) Wey	Senior Medical Scientist, AstraZeneca	Margaret_Wey.jpg	https://www.linkedin.com/in/margaretwey/
Advisory Board	Chih-Chung (Jerry) Lin	Postdoc, Masschusetts General Hospital	Jerry.jpg	https://www.linkedin.com/in/chih-chung-lin-680b48113/
Advisory Board	Jimmy Chu	Scientist II, bluebird bio	Jimmy_Chu.jpg	https://www.linkedin.com/in/chih-chi-jimmy-chu-526b0073/
Advisory Board	Yung-Chih Cheng	Principal Scientist, Pfizer	Yung-Chih_Cheng.jpg	https://www.linkedin.com/in/yung-chih-cheng-60522333/
Chief Executive	Ling-Fang Tseng	Clinical Scientist, Vertex Pharmaceuticals	Ling-Fang_Tseng.jpg	https://www.linkedin.com/in/lingfangtseng/
Chief Executive	Mei-Hsiu Lai	Vertex Pharmaceuticals	Mei-Hsiu_Lai.jpg	https://www.linkedin.com/in/mhlai/
Chief Scientific	Pin-Kuang Lai	Incoming Assistant Professor, Stevens Institute of Technology	Pin-kuang_Lai.jpg	https://www.linkedin.com/in/pin-kuang-lai/
Chief Scientific	Ting-Ya Chang	PhD candidate, Boston University	Tingya_Chang.JPG	https://www.linkedin.com/in/chang-ting-ya-sophia-76577420a/
Chief Technology	Ming-Ju Tsai	Postdoc, Harvard Medical School	Ming-Ju_Tsai.jpg	https://www.linkedin.com/in/mingju-tsai/
Chief Technology	Chih-Hung Chou	Postdoc, Broad Institute of MIT and Harvard	Chih-Hung_Chou.jpg	https://www.linkedin.com/in/chchou23/
Chief Technology	Yu-An Chen	Research Scientist, Harvard Medical School	yu-an_chen.jpg	https://www.linkedin.com/in/yuanchenbio/
Chief Technology	Li-Yuan Hung	Postdoc, Masschusetts General Hospital	li-yuan_hung.jpg	https://www.linkedin.com/in/liyuanhung/
Chief Tax	Ting-Ya Chang	PhD candidate, Boston University	Tingya_Chang.JPG	https://www.linkedin.com/in/chang-ting-ya-sophia-76577420a/
Chief Finance	Shu-Wei Wu	Senioår Associate Scientist, Sanofi	Shu-Wei_Wu.jpg	https://www.linkedin.com/in/shu-wei-wu-570a98120/
Chief Creative	Amy Kao		Amy.jpg
Chief Operating	Chi-Hsiu Liu	Scientist, Editas Medicine	CHLiuPhotoFromLinkedin.jpeg	https://www.linkedin.com/in/chi-hsiu-zoe-liu-8436417a/
Session Chair	Chi-An (Annie) Cheng	Postdoc, Harvard Medical School	Chi-An_Cheng.JPG	https://www.linkedin.com/in/chi-an-annie-cheng-774797103/
Session Chair	Yu-Tien Hsu	PhD Student, Poulation Health Sceicnes, Harvard University	Yu-Tien_Hsu.jpg	https://www.linkedin.com/in/yu-tien-hsu-04043241/
Session Chair	Szu-Ta Chen	Associate Medical Director, Takeda Pharmaceuticals	Szu-Ta_Chen.jpg	https://www.linkedin.com/in/szutachen-md-phd/
Session Chair	Yi-Hui Lai	PhD candidate, Helmholtz centre for Infection Research	Yi-Hui-Lai.jpeg	https://www.linkedin.com/in/yi-hui-lai-87070b9a/
Session Chair	Richard Liang	Biomarker Scientist, Denali Therapeutics	Richard_Liang.jpg	https://www.linkedin.com/in/richardliangphd/
Session Chair	Linda Kang	Scientist, NovoBind	Linda_Kang.JPG	https://www.linkedin.com/in/linda-kang-64bb8546/
Session Chair	Sheng Chih (Peter) Jin	Assistant Professor, Washington University in St. Louis	Peter_Jin.jpg	https://www.linkedin.com/in/sheng-chih-jin-3b60a011/
Session Chair	Hanting Phoebe Tsai	Senior Research Associate, Vertex Pharmaceuticals	Hanting_Phoebe_Tsai .jpg	https://www.linkedin.com/in/hanting-phoebe-tsai-298a443b/`;

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
export const commiteesObj = tsv_dict;
