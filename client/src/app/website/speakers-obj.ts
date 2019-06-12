import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `	Name	NameCh	Affiliations	Links	ImgFileName	Description
Keynote	Seng Cheng		Senior Vice President & Chief Scientific Officer, Rare Diseases Research Unit at Pfizer	https://www.linkedin.com/in/seng-h-cheng-414295;https://twitter.com/scheng100	sheng_cheng.jpg
Keynote	Jenny P-Y Ting		William Rand Kenan Professor of Genetics, Microbiology and Immunology at UNC-Chapel Hill	https://unclineberger.org/directory/jenny-p-ting/	jenny_ting.jpg
Biotech Forum: Drug Modality	Chi-Wang Lin		Senior research investigator II, Brstol-Myers Squibb
Biotech Forum: Drug Modality	Yvonne Meng		Senior Scientist, Merck & Co.
Biotech Forum: Drug Modality	April Kuo		Scientist II, Acceleron Pharma
Biotech Forum: Drug Modality	Wei-Chiang Chen		Senior Scientist, Solid Bioscience	https://www.linkedin.com/in/weichiangchen/
Biotech Forum: Drug Modality	Leslie Wu		Scientist, Serepta Therapeutics	https://www.linkedin.com/in/chialingwu/
Biotech Forum: Drug Modality	Ho-Chou Tu		Senior Scientist, Alnylam Pharmaceuticals	https://www.linkedin.com/in/ho-chou-tu/
Biotech Forum: Drug Modality	Hong-Ren Huang		Associate Director, Intellia Therapeutics
Biotech Forum: Drug Modality	DeKuan Chang		Senior Scientist, Takeda Pharmaceuticals
Managing Up, Down and Across	Hsien-Chung Tseng	曾賢中	Head of Strains Developement, Manus Bio	https://www.linkedin.com/in/hsien-chung-tseng-3ab58b28
Managing Up, Down and Across	Albert Hwa		Operations Director, Joslin's Center for Cell-Based Therapy for Diabetes	https://www.linkedin.com/in/albert-hwa-3670345
Managing Up, Down and Across	Lih-Ling Lin		Cluster Head, Immunology and Inflammation, Sanofi	https://www.linkedin.com/in/lih-ling-lin-12bb4b4
Managing Up, Down and Across	Mary Ellen Lane		Dean of the Graduate School of Biomedical Sciences, University of Massachusetts Medical School	https://www.linkedin.com/in/mary-ellen-lane-83320021
Trending Topic: Synthetic Biology	Dawn Thompson		Chief Scientific Officer at Directed Genomics	https://www.linkedin.com/in/dawn-thompson-52964a69/
Trending Topic: Synthetic Biology	Sergio Florez		Senior Fermentation Engineer at Ginkgo Bioworks	https://www.linkedin.com/in/slflorez/
Trending Topic: Synthetic Biology	Felipe Sarmiento		Associate Director, Commercial Operations at Ginkgo Bioworks	https://www.linkedin.com/in/felipe-sarmiento-phd/
Trending Topic: Synthetic Biology	Hsien-Chun Tseng 	曾賢中	Head of Strains Development at Manus Biosynthesis	https://www.linkedin.com/in/hsien-chung-tseng-3ab58b28
Trending Topic: Synthetic Biology	Jacky Ng		Senior Scientist at Joyn Bio	https://www.linkedin.com/in/ngwingon
Careers in Biotech Industry	Leyi (Colin) Wang		Vice President of Business Development at Phoenix Tissue Repair	https://www.linkedin.com/in/leyi-colin-wang-4547b017/	LeYi_Wang.jpg	<p>LeYi Wang is currently serving as VP of Business Development and Operation at Phoenix Tissue Repair, a Boston-based biotechnology company developing treatments for rare genetic diseases. LeYi previously worked at WuXi NextCODE's global headquarter in Cambridge, Mass. as Director of Corporate Development prior to joining Phoenix in 2017.</p><p>LeYi obtained his PhD in Biophysics at Weill Cornell Graduate School of Sciences, where he studied single-molecule fluorescence resonance energy transfer (smFRET) in the laboratory of Dr. Scott Blanchard. Upon graduation, he joined L.E.K. Consulting’s Boston office as a Life Science Specialist, focusing on working with biotech/pharma clients in strategic planning and portfolio analysis. Between 2015 and 2017, LeYi worked as Associate and VP of Equity Research at Leerink Partners (now SVB Leerink), covering stocks of US/EU Large Cap pharmaceuticals and biotechnology companies as well as working with China-based biotech companies to list in NASDAQ. LeYi currently resides in Arlington, Mass.</p>
Careers in Biotech Industry	Seng-Lai (Thomas) Tan		Senior Manager of Regulatory at Pfizer	https://www.linkedin.com/in/joychenphd/
Careers in Biotech Industry	Joy Chen		Vice President of R&D at Elstar Therapeutics	https://www.linkedin.com/in/senglaitan/
Careers in Biotech Industry	I-Hung Shih		Biotech Analyst (equity investment) at Wellington Management	https://www.linkedin.com/in/i-hung-shih-81b6094/
Careers in Biotech Industry	Allyson Hatton		Principal Counsel of Biologics Patents US at Sanofi	https://www.linkedin.com/in/allyson-hatton-3535a03/
Careers in Biotech Industry	Curtis Chang		Senior Medical Director of Global Patient Safety at Takeda	https://www.linkedin.com/in/curtis-chang-3aa7716/
Academia	Isaac M. Chiu		Assistant professor at Harvard Medical School, Department of Immunology	http://chiulab.med.harvard.edu	ChiuImage.jpg
Academia	Gene-Wei Li		Assistant professor at MIT, Department of Biology	https://biology.mit.edu/profile/gene-wei-li/
Academia	Chih-Hao Lee	李志浩	Professor, Department of Genetics and Complex Diseases, Division of Biological Sciences, Harvard T.H. Chan School of Public Health	http://www.hsph.harvard.edu/chihhao-lee/	Chih-Hao_Lee.jpg	<p>B.S. 1989, National Tsing-Hua University (Taiwan, ROC); Ph.D. 1998, University of Minnesota</p> <p>Postdoctoral Associate 1999-2004 - Salk Institute</p> <p>Assistant Professor 2004-2010; Associate Professor 2004-2015; Professor 2015, Harvard University.</p> <p>Lab Research Interest: Metabolic biology and diseases</p>  <p>Dr. Lee obtained his PhD degree in Pharmacology at University of Minnesota. He then joined the laboratory of Dr. Ronald Evans at the Salk Institute for his post-doctoral training on nuclear receptors and lipid metabolism. During this time, he studied mechanisms that couple lipid sensing signaling and inflammatory responses in immune cells critical to vasculature inflammation in atherosclerosis. In 2004, Dr. Lee was recruited to Harvard T.H. Chan School of Public Health as a faculty member of the Department of Genetics and Complex Diseases and continued his research focusing on understanding metabolic and inflammatory processes relevant to human diseases. The ongoing work in Dr. Lee’s laboratory is to characterize novel aspects of immune function in metabolic regulation and identify lipid-signaling molecules that control metabolic flexibility. The research goal is to apply knowledge derived from mechanistic studies to the development of safer, more effective drugs for treating metabolic disorders, including obesity, insulin resistance, hyperlipidemia, fatty liver and cardiovascular diseases.</p>
Academia	Lee-Yuan Liu-Chen	劉麗雲	Professor at Temple University	https://medicine.temple.edu/lee-yuan-liu-chen		`;

const tsv_array = tsv_str
	.split('\n')
	.map(el => el.split('\t'))
	.filter(el => el[1])
	.map(el => {
		return {
			'name': el[1] || null,
			'nameCh': el[2] || null,
			'affiliations': el[3] ? el[3].split(';') : [],
			'imgFileName': el[5] || 'placeholder.jpg',
			'links': el[4] ? el[4].split(';') : [],
			'description': el[6] || ''
		};
	});

const tsv_dict = {};

tsv_array.forEach(el => {
	el.name.trim() in Object.keys(tsv_dict)
		? false
		:  tsv_dict[el.name.trim()] = el;
});

export const speakersObj = tsv_dict;
