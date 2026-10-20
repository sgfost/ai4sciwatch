// Each category is a page; its subcategories are sections, in this order.
export const categories = {
	assistants: {
		title: 'Assistants',
		subs: {
			search: 'Search and reading',
			reviews: 'Systematic reviews',
			agents: 'Research agents',
			tooling: 'Agent tooling'
		}
	},
	review: {
		title: 'Review',
		subs: {
			review: 'Manuscript review',
			integrity: 'Integrity and errors',
			reporting: 'Reporting and transparency',
			reproduction: 'Reproduction'
		}
	},
	publishing: {
		title: 'Publishing',
		subs: {
			platforms: 'Venues and platforms',
			discussion: 'Review and discussion',
			knowledge: 'Structured knowledge'
		}
	},
	benchmarks: {
		title: 'Benchmarks',
		subs: {}
	}
} as const;

export type Category = keyof typeof categories;
export type Sub = { [C in Category]: keyof (typeof categories)[C]['subs'] }[Category];

export type Organisation = { name: string; url?: string };
// The registry key is the stable identity. URLs are optional until verified.
export const organisations = {
	'42degrees': {
		name: '42Degrees',
		url: 'https://fortytwodegrees.org/'
	},
	aimos: {
		name: 'AIMOS'
	},
	ai2: {
		name: 'Ai2'
	},
	anthropic: {
		name: 'Anthropic',
		url: 'https://www.anthropic.com/'
	},
	benchling: {
		name: 'Benchling',
		url: 'https://www.benchling.com/'
	},
	bids: {
		name: 'BIDS, UC Berkeley',
		url: 'https://bids.berkeley.edu/'
	},
	'cactus-communications': {
		name: 'Cactus Communications'
	},
	'center-for-open-science': {
		name: 'Center for Open Science',
		url: 'https://www.cos.io/'
	},
	cnrs: {
		name: 'CNRS',
		url: 'https://www.cnrs.fr/'
	},
	'dp-technology': {
		name: 'DP Technology'
	},
	'desci-labs': {
		name: 'DeSci Labs'
	},
	'eppi-centre-ucl': {
		name: 'EPPI Centre, UCL'
	},
	'edison-scientific': {
		name: 'Edison Scientific',
		url: 'https://edisonscientific.com/'
	},
	frontiers: {
		name: 'Frontiers'
	},
	futurehouse: {
		name: 'FutureHouse',
		url: 'https://www.futurehouse.org/'
	},
	google: {
		name: 'Google'
	},
	inherent: {
		name: 'Inherent'
	},
	'institute-for-replication': {
		name: 'Institute for Replication'
	},
	intellicat: {
		name: 'Intellicat',
		url: 'https://intellicat.ai/'
	},
	'k-dense': {
		name: 'K-Dense',
		url: 'https://www.k-dense.ai/products'
	},
	'kishony-lab-technion': {
		name: 'Kishony Lab, Technion'
	},
	'knowledge-futures': {
		name: 'Knowledge Futures'
	},
	'knowledge-pixels': {
		name: 'Knowledge Pixels'
	},
	'laude-institute': {
		name: 'Laude Institute',
		url: 'https://www.laude.org/'
	},
	'lightcone-research': {
		name: 'Lightcone Research',
		url: 'https://www.lightconeresearch.org/'
	},
	'max-planck-institute-for-human-development': {
		name: 'Max Planck Institute for Human Development'
	},
	'metascience-observatory': {
		name: 'Metascience Observatory',
		url: 'https://metascienceobservatory.org/'
	},
	nlm: {
		name: 'National Library of Medicine',
		url: 'https://www.nlm.nih.gov/'
	},
	openai: {
		name: 'OpenAI'
	},
	phylo: {
		name: 'Phylo',
		url: 'https://phylo.bio/'
	},
	pensoft: {
		name: 'Pensoft'
	},
	princeton: {
		name: 'Princeton'
	},
	proofig: {
		name: 'Proofig',
		url: 'https://www.proofig.com/'
	},
	'river-valley-technologies': {
		name: 'River Valley Technologies'
	},
	rori: {
		name: 'RoRI'
	},
	'robyn-dawes-institute': {
		name: 'Robyn Dawes Institute',
		url: 'https://dawes.institute/'
	},
	'sai-labs': {
		name: 'SAI Labs'
	},
	stm: {
		name: 'STM'
	},
	'sakana-ai': {
		name: 'Sakana AI'
	},
	scirenity: {
		name: 'Scirenity',
		url: 'https://scirenity.com/platforms'
	},
	stanford: {
		name: 'Stanford University',
		url: 'https://www.stanford.edu/'
	},
	'stanford-ml-group': {
		name: 'Stanford ML Group'
	},
	'stanford-snap': {
		name: 'Stanford SNAP'
	},
	tib: {
		name: 'TIB',
		url: 'https://www.tib.eu/'
	},
	'university-of-padua': {
		name: 'University of Padua'
	},
	'utrecht-university': {
		name: 'Utrecht University'
	},
	'vals-ai': {
		name: 'Vals AI',
		url: 'https://www.vals.ai/'
	}
} satisfies Record<string, Organisation>;
export type OrganisationId = keyof typeof organisations;

export type Entry = {
	name: string;
	url: string;
	category: Category;
	sub?: Sub;
	blurb: string;
	organisationIds?: OrganisationId[];
	author?: string;
	sources?: string[];
	notes?: string[];
	reviewed?: string;
};

export const entries: Entry[] = [
	{
		name: 'Bohrium',
		url: 'https://www.bohrium.com/en',
		category: 'assistants',
		sub: 'search',
		blurb:
			'Finds papers, verifies citations, and drafts literature reviews; also hosts domain agents such as BioMaster.',
		organisationIds: ['dp-technology']
	},
	{
		name: 'Consensus',
		url: 'https://consensus.app/',
		category: 'assistants',
		sub: 'search',
		blurb: 'Academic search engine that answers questions from peer-reviewed literature.'
	},
	{
		name: 'Elicit',
		url: 'https://elicit.com/',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Literature search, screening, and data extraction for evidence synthesis and research planning.'
	},
	{
		name: 'PaperQA2',
		url: 'https://github.com/Future-House/paper-qa',
		category: 'assistants',
		sub: 'search',
		blurb: 'Retrieval-augmented question answering over scientific papers, with citations.',
		organisationIds: ['futurehouse']
	},
	{
		name: 'scienceOS',
		url: 'https://www.scienceos.ai/',
		category: 'assistants',
		sub: 'search',
		blurb: 'Science chat, multi-PDF chat, and an AI reference manager in one workspace.',
		reviewed: '2026-09-24'
	},
	{
		name: 'SciSpace',
		url: 'https://scispace.com/',
		category: 'assistants',
		sub: 'search',
		blurb:
			'Paper search, chat-with-PDF, literature reviews, and data extraction, plus agents for biomedical work.',
		reviewed: '2026-09-24'
	},
	{
		name: 'Scite',
		url: 'https://scite.ai/',
		category: 'assistants',
		sub: 'search',
		blurb:
			'Shows whether later work supports or disputes a claim, using the context of each citation.'
	},
	{
		name: 'SciWeave',
		url: 'https://sciweave.com/',
		category: 'assistants',
		sub: 'search',
		blurb: 'Question answering over peer-reviewed literature with linked citations.'
	},
	{
		name: 'Undermind',
		url: 'https://www.undermind.ai/',
		category: 'assistants',
		sub: 'search',
		blurb:
			'Agentic search that reads full texts and follows citations to produce source-linked reports.'
	},
	{
		name: 'ASReview',
		url: 'https://asreview.nl/',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Active-learning screening for systematic reviews that surfaces the likeliest relevant records first.',
		organisationIds: ['utrecht-university'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Bird’s Eye Reviews',
		url: 'https://metascienceobservatory.org/birds-eye-reviews',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Interactive dashboards summarising every paper on a topic by study type, location, and treatment.',
		organisationIds: ['metascience-observatory'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Covidence',
		url: 'https://www.covidence.org/',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Systematic-review management: screening, full-text review, extraction, and risk of bias.'
	},
	{
		name: 'DataMint',
		url: 'https://datamint.ing/',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Codebook-driven extraction from document collections, with agreement checks and provenance for every cell.',
		author: 'Karl Rohe',
		reviewed: '2026-09-24'
	},
	{
		name: 'DistillerSR',
		url: 'https://www.distillersr.com/',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'AI-assisted literature-review platform for screening and extraction, used widely in regulated industries.'
	},
	{
		name: 'EPPI-Reviewer',
		url: 'https://eppi.ioe.ac.uk/cms/er4/',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Review software for screening, coding, and synthesis, with machine-learning prioritisation.',
		organisationIds: ['eppi-centre-ucl']
	},
	{
		name: 'Rayyan',
		url: 'https://www.rayyan.ai/',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Collaborative screening for systematic reviews, with AI prioritisation, deduplication, and PICO extraction.'
	},
	{
		name: 'RobotReviewer',
		url: 'https://github.com/ijmarshall/robotreviewer',
		category: 'assistants',
		sub: 'reviews',
		blurb: 'Machine-learning extraction and risk-of-bias assessment for randomised-trial reports.',
		reviewed: '2026-09-24'
	},
	{
		name: 'Agent Laboratory',
		url: 'https://github.com/SamuelSchmidgall/AgentLaboratory',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'End-to-end research workflow, from literature review to experiments to report, with a human in the loop.'
	},
	{
		name: 'AI co-scientist',
		url: 'https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/',
		category: 'assistants',
		sub: 'agents',
		blurb: 'Google’s AI that suggests and tests research ideas; now part of Gemini for Science.',
		organisationIds: ['google'],
		reviewed: '2026-10-18',
		sources: ['https://ai.google/gemini-for-science/']
	},
	{
		name: 'Asta',
		url: 'https://allenai.org/asta',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Scientific agents for literature and data-driven discovery, with open benchmarks for evaluating them.',
		organisationIds: ['ai2']
	},
	{
		name: 'data-to-paper',
		url: 'https://github.com/Technion-Kishony-lab/data-to-paper',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Guides agents from raw data to a manuscript, with every result traceable to the code behind it.',
		organisationIds: ['kishony-lab-technion']
	},
	{
		name: 'Kosmos',
		url: 'https://edisonscientific.com/',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'AI scientist that searches literature, analyses data, generates hypotheses, and runs research workflows for scientific R&D.',
		organisationIds: ['edison-scientific'],
		reviewed: '2026-09-24',
		sources: ['https://edisonscientific.com/']
	},
	{
		name: 'FutureHouse',
		url: 'https://www.futurehouse.org/',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Nonprofit lab developing AI for scientific discovery. Its former public platform is now part of Edison Scientific.',
		organisationIds: ['futurehouse'],
		reviewed: '2026-09-24',
		sources: ['https://www.futurehouse.org/about']
	},
	{
		name: 'POPPER',
		url: 'https://github.com/snap-stanford/POPPER',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Tests free-form hypotheses through a sequence of falsification experiments with statistical error control.',
		organisationIds: ['stanford-snap']
	},
	{
		name: 'The Agentic Scientist',
		url: 'https://github.com/SakanaAI/AI-Scientist-v3',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Sakana’s successor to The AI Scientist, which has coding agents run experiments and write up a paper.',
		organisationIds: ['sakana-ai'],
		reviewed: '2026-10-20',
		sources: [
			'https://github.com/SakanaAI/AI-Scientist-v3',
			'https://pub.sakana.ai/agentic-scientist/',
			'https://arxiv.org/abs/2610.18933'
		]
	},
	{
		name: 'Inherent Faraday',
		url: 'https://inherentlabs.ai/research/training-to-replicate',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'A 27B-parameter AI-scientist agent trained with reinforcement learning to replicate published research.',
		organisationIds: ['inherent']
	},
	{
		name: 'CORE-Bench',
		url: 'https://github.com/siegelz/core-bench',
		category: 'benchmarks',
		blurb:
			'270 tasks from 90 papers in CS, social science, and medicine: can an agent reproduce results from code?',
		organisationIds: ['princeton'],
		notes: [
			'The original harness is no longer maintained; the repository directs users to the Holistic Agent Leaderboard harness.'
		],
		reviewed: '2026-09-24'
	},
	{
		name: 'ReplicatorBench',
		url: 'https://github.com/CenterForOpenScience/llm-benchmarking',
		category: 'benchmarks',
		blurb:
			'Replicable and non-replicable social-science claims for testing agents on data retrieval, execution, and interpretation.',
		organisationIds: ['center-for-open-science'],
		reviewed: '2026-09-24'
	},
	{
		name: 'SciReplicate-Bench',
		url: 'https://github.com/xyzCS/SciReplicate-Bench',
		category: 'benchmarks',
		blurb:
			'Reproducing algorithms from papers, with Sci-Reproducer: paired paper-reading and coding agents.',
		reviewed: '2026-09-24'
	},
	{
		name: 'Replica',
		url: 'https://inherentlabs.ai/research/training-to-replicate#replica',
		category: 'benchmarks',
		blurb:
			'310 tasks from 100 ML and AI-for-science papers: reproduce a figure without seeing the original plot.',
		organisationIds: ['inherent']
	},
	{
		name: 'PaperBench',
		url: 'https://github.com/openai/frontier-evals/tree/main/project/paperbench',
		category: 'benchmarks',
		blurb:
			'Agents replicate 20 ICML 2024 papers from scratch, graded against rubrics written with the papers’ authors.',
		organisationIds: ['openai']
	},
	{
		name: 'ReplicationBench',
		url: 'https://arxiv.org/abs/2510.24591',
		category: 'benchmarks',
		blurb:
			'107 tasks from 19 astrophysics papers, written with their authors, testing end-to-end replication.'
	},
	{
		name: 'evidence.guide',
		url: 'https://evidence.guide/',
		category: 'review',
		sub: 'reporting',
		blurb:
			'Turns experimental papers into structured rows of tests, statistics, sample sizes, and design, with source snippets.',
		organisationIds: ['robyn-dawes-institute'],
		reviewed: '2026-09-24'
	},
	{
		name: 'AI Peer Review',
		url: 'https://github.com/poldrack/ai-peer-review',
		category: 'review',
		sub: 'review',
		blurb:
			'Collects independent reviews from several LLMs, then a meta-review showing which model raised which concern.',
		author: 'Russell Poldrack'
	},
	{
		name: 'coarse',
		url: 'https://coarse.ink/',
		category: 'review',
		sub: 'review',
		blurb:
			'Multi-agent referee reports with literature search; bring your own key, usually under $2 a paper.',
		reviewed: '2026-09-24'
	},
	{
		name: 'DeepThought',
		url: 'https://deepthought.fortytwodegrees.org/',
		category: 'review',
		sub: 'review',
		blurb:
			'Scores novelty, methodology, and impact by placing a manuscript in a network of 250,000 publications.',
		organisationIds: ['42degrees']
	},
	{
		name: 'Frontiers AIRA',
		url: 'https://www.frontiersin.org/about/artificial-intelligence',
		category: 'review',
		sub: 'review',
		blurb:
			'Frontiers’ in-house suite for image checks and reviewer assistance, including manuscript summaries and gap finding.',
		organisationIds: ['frontiers'],
		notes: ['Available within Frontiers’ publishing and review workflows.'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Fukurō',
		url: 'https://fukuro.review/',
		category: 'review',
		sub: 'review',
		blurb:
			'Multi-agent pre-submission review, line-level language checks, rebuttal help, and version comparison.'
	},
	{
		name: 'Manusights',
		url: 'https://manusights.com/',
		category: 'review',
		sub: 'review',
		blurb: 'Pre-submission review of methods, framing, citations, figures, and journal fit.'
	},
	{
		name: 'PapeReview',
		url: 'https://papereview.com/',
		category: 'review',
		sub: 'review',
		blurb:
			'Structured feedback on clarity, methodology, and contribution, plus signals of AI-generated text.'
	},
	{
		name: 'QED Science',
		url: 'https://www.qedscience.com/',
		category: 'review',
		sub: 'review',
		blurb:
			'Breaks papers and grants into claims to expose gaps in logic and evidence; a cross-paper Validity Machine is sold to R&D teams.',
		reviewed: '2026-10-20',
		sources: ['https://www.qedscience.com/', 'https://x.com/qedScience/status/2112513653199004058']
	},
	{
		name: 'Refine',
		url: 'https://www.refine.ink/',
		category: 'review',
		sub: 'review',
		blurb:
			'Spends hours of compute hunting fixable errors: broken proofs, mis-specified estimators, text that contradicts tables.'
	},
	{
		name: 'Review-it',
		url: 'https://review-it.ai/',
		category: 'review',
		sub: 'review',
		blurb: 'Pre-submission peer review with structural suggestions and journal matching.'
	},
	{
		name: 'Reviewer3',
		url: 'https://reviewer3.com/',
		category: 'review',
		sub: 'review',
		blurb:
			'Editor-style review in minutes, flagging methodology flaws, reproducibility gaps, and fabricated citations.'
	},
	{
		name: 'Rigor',
		url: 'https://rigor.me/',
		category: 'review',
		sub: 'reproduction',
		blurb:
			'Runs your code in containers to reproduce reported values, checks the statistics, and adds a structured review.',
		organisationIds: ['max-planck-institute-for-human-development']
	},
	{
		name: 'SAI',
		url: 'https://sai.science/',
		category: 'review',
		sub: 'reproduction',
		blurb:
			'Rigorous document review, plus in-depth paper replication that can extend a method to new data.',
		organisationIds: ['sai-labs']
	},
	{
		name: 'Stanford Agentic Reviewer',
		url: 'https://paperreview.ai/',
		category: 'review',
		sub: 'review',
		blurb: 'Free agentic reviews of uploaded papers, optionally targeted to a specific venue.',
		organisationIds: ['stanford-ml-group']
	},
	{
		name: 'SymbyAI',
		url: 'https://symbyai.com/',
		category: 'review',
		sub: 'reproduction',
		blurb:
			'Audits methods, code, figures, and statistics and attempts computational replication, returning an editorial verdict.'
	},
	{
		name: 'Thesify',
		url: 'https://www.thesify.ai/',
		category: 'review',
		sub: 'review',
		blurb:
			'Reviewer predicts how journal referees will judge a draft; Coauthor helps with the writing.'
	},
	{
		name: 'Clear Skies',
		url: 'https://clear-skies.co.uk/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Oversight platform and Papermill Alarm, flagging paper-mill patterns for publishers, institutions, and funders.'
	},
	{
		name: 'DataSeer SnapShot',
		url: 'https://dataseer.ai/snapshot/',
		category: 'review',
		sub: 'reporting',
		blurb:
			'Checks data sharing and other open-science practices in manuscripts and returns contextual feedback.'
	},
	{
		name: 'Imagetwin',
		url: 'https://imagetwin.ai/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Detects duplicated, manipulated, and AI-generated figures against 160 million published images.'
	},
	{
		name: 'Octym',
		url: 'https://octym.proofig.com/',
		category: 'review',
		sub: 'integrity',
		blurb: 'Checks a manuscript’s images, references, statistics, and methods in one review.',
		organisationIds: ['proofig'],
		reviewed: '2026-10-18',
		sources: ['https://octym.proofig.com/', 'https://www.proofig.com/refguard/']
	},
	{
		name: 'Penelope.ai',
		url: 'https://www.penelope.ai/',
		category: 'review',
		sub: 'reporting',
		blurb: 'Checks manuscripts against journal requirements and reporting guidelines.'
	},
	{
		name: 'Proofig AI',
		url: 'https://www.proofig.com/',
		category: 'review',
		sub: 'integrity',
		blurb: 'Checks figures for copied, edited, or AI-made images.',
		organisationIds: ['proofig'],
		reviewed: '2026-10-18',
		sources: ['https://www.proofig.com/refguard/']
	},
	{
		name: 'RegCheck',
		url: 'https://regcheck.app/',
		category: 'review',
		sub: 'reporting',
		blurb: 'Compares a preregistration with the final paper and highlights the supporting text.'
	},
	{
		name: 'ReviewerZero',
		url: 'https://www.reviewerzero.ai/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Screens for image manipulation, statistical and citation errors, and author identity fraud.'
	},
	{
		name: 'Rigor Scan',
		url: 'https://www.k-dense.ai/tools/rigor-scan',
		category: 'review',
		sub: 'reporting',
		blurb:
			'Checks reporting completeness with sentence-linked evidence, recalculates statistics, and flags retracted references. Its score measures reporting, not whether findings are correct.',
		organisationIds: ['k-dense'],
		reviewed: '2026-09-24'
	},
	{
		name: 'RVT Integrity Checker',
		url: 'https://rivervalley.io/',
		category: 'review',
		sub: 'integrity',
		blurb: 'Flags potential issues at submission inside River Valley’s ReView peer-review system.',
		organisationIds: ['river-valley-technologies']
	},
	{
		name: 'SciMeto',
		url: 'https://scimeto.app/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Free manuscript checker: citation matching, DOI and retraction checks, statistical consistency, predatory-journal flags.',
		organisationIds: ['scirenity']
	},
	{
		name: 'SciScore',
		url: 'https://www.sciscore.com/',
		category: 'review',
		sub: 'reporting',
		blurb:
			'Scores methods sections against rigour and transparency criteria and identifies research resources.'
	},
	{
		name: 'STM Integrity Hub',
		url: 'https://stm-assoc.org/what-we-do/strategic-areas/research-integrity/integrity-hub/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Shared infrastructure where publishers screen submissions for paper mills and other integrity signals.',
		organisationIds: ['stm']
	},
	{
		name: 'Black Spatula Project',
		url: 'https://the-black-spatula-project.github.io/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Volunteer effort measuring how well LLMs catch errors in published papers, with a shared test set.',
		notes: [
			'Research initiative evaluating error detection, rather than a ready-to-use paper checker.'
		],
		reviewed: '2026-09-24'
	},
	{
		name: 'Forensic Metascience Agent',
		url: 'https://metascienceobservatory.org/forensic-metascience-agent',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Agent with 58 tools for statistical inconsistencies, data anomalies, image duplication, and tortured phrases; findings are human-reviewed.',
		organisationIds: ['metascience-observatory']
	},
	{
		name: 'INSPECT-AI',
		url: 'https://inspectai.app/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Integrity checks on clinical-trial documents, building on the INSPECT-SR trustworthiness checklist.'
	},
	{
		name: 'Intellicat',
		url: 'https://intellicat.ai/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Credibility score for papers from text, figures, and citation networks; flags work built on retracted sources.',
		organisationIds: ['intellicat']
	},
	{
		name: 'MAARVIN',
		url: 'https://maarvin.ai/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Statistical forensics, study-design review, reference verification, and registration comparison, linked to the PDF.'
	},
	{
		name: 'Science Detective',
		url: 'https://www.sciencedetective.org/',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Investigations into fabricated data, including a scan of spreadsheets from 600 papers for copy-paste errors.',
		reviewed: '2026-09-24'
	},
	{
		name: 'YesNoError',
		url: 'https://yesnoerror.com/',
		category: 'assistants',
		sub: 'search',
		blurb:
			'Began as an agent auditing new papers for errors; now presents itself mainly as a research-alert feed.',
		notes: ['Linked to a cryptocurrency token.'],
		reviewed: '2026-09-24'
	},
	{
		name: 'I4R Package Checker',
		url: 'https://www.i4replication.org/tools',
		category: 'review',
		sub: 'reproduction',
		blurb:
			'Checks replication packages for required files, documentation, and whether the code runs.',
		organisationIds: ['institute-for-replication'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Viten Hub',
		url: 'https://vitenhub.no/replication-services/',
		category: 'review',
		sub: 'reproduction',
		blurb:
			'Rebuilds studies to run end to end, tests them on your data, and records outcomes on Science Live.'
	},
	{
		name: '42Degrees',
		url: 'https://fortytwodegrees.org/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Journal of short multimodal “publons” (text, infographics, video, interactives) with human and AI review.',
		organisationIds: ['42degrees']
	},
	{
		name: 'alphaXiv',
		url: 'https://www.alphaxiv.org/',
		category: 'publishing',
		sub: 'discussion',
		blurb: 'Discussion layer on arXiv, with an AI assistant for reading and querying papers.'
	},
	{
		name: 'Curvenote',
		url: 'https://curvenote.com/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Modular, computational publishing that keeps articles connected to their data, methods, and provenance.'
	},
	{
		name: 'DeSci Publish',
		url: 'https://publish.desci.com/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Versioned research objects bundling manuscript, data, code, and review under persistent identifiers.',
		organisationIds: ['desci-labs']
	},
	{
		name: 'Lifecycle Journal',
		url: 'https://lifecyclejournal.org/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Pilot publishing model for outputs at every stage of research. The pilot is now closed to new submissions.',
		organisationIds: ['center-for-open-science'],
		reviewed: '2026-09-24'
	},
	{
		name: 'MetaROR',
		url: 'https://metaror.org/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Publish–review–curate platform for metaresearch, with open reviews and editorial assessments.',
		organisationIds: ['rori', 'aimos']
	},
	{
		name: 'Octopus',
		url: 'https://www.octopus.ac/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Publishes each stage of research (problem, hypothesis, method, data, analysis, review) as a linked unit.'
	},
	{
		name: 'openpub',
		url: 'https://openpub.org/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'“Git for verified science”: fork a PubMed paper, verify its AI-extracted claims against the data, push the result.',
		reviewed: '2026-09-24'
	},
	{
		name: 'OpenReview',
		url: 'https://openreview.net/about',
		category: 'publishing',
		sub: 'discussion',
		blurb:
			'Open peer-review infrastructure for conferences, with public submissions and discussion.'
	},
	{
		name: 'PubPeer',
		url: 'https://pubpeer.com/',
		category: 'publishing',
		sub: 'discussion',
		blurb: 'Post-publication comments on any paper, often where integrity problems first surface.'
	},
	{
		name: 'PubPub',
		url: 'https://www.pubpub.org/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Community publishing platform with rich media, DOIs, and configurable submission and review.',
		organisationIds: ['knowledge-futures'],
		reviewed: '2026-09-24'
	},
	{
		name: 'ResearchEquals',
		url: 'https://researchequals.com/en-US',
		category: 'publishing',
		sub: 'platforms',
		blurb: 'Modular publishing: each output gets a DOI and links into a chain of research steps.'
	},
	{
		name: 'ResearchHub',
		url: 'https://www.researchhub.com/',
		category: 'publishing',
		sub: 'platforms',
		blurb: 'Community platform for sharing, openly reviewing, and funding research.'
	},
	{
		name: 'ScienceCast',
		url: 'https://sciencecast.org/',
		category: 'assistants',
		sub: 'search',
		blurb: 'Turns arXiv and bioRxiv preprints into AI-generated audio summaries and slide decks.'
	},
	{
		name: 'Sciety',
		url: 'https://sciety.org/about',
		category: 'publishing',
		sub: 'discussion',
		blurb: 'Gathers public evaluations of preprints and community-curated reading lists.',
		reviewed: '2026-09-24'
	},
	{
		name: 'Stencila',
		url: 'https://stencila.io/',
		category: 'publishing',
		sub: 'platforms',
		blurb:
			'Executable documents in Markdown, with agents and workflows, published as interactive articles.',
		reviewed: '2026-09-24'
	},
	{
		name: 'Replications Database',
		url: 'https://metascienceobservatory.org/replications-database',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Aggregates reported replication attempts; a record of outcomes, not an automated rerun.',
		organisationIds: ['metascience-observatory']
	},
	{
		name: 'CAVEAT',
		url: 'https://intellicat-ai.github.io/caveat/',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Vocabulary of how science goes wrong: conceptual, interpretive, methodological, and misconduct failures.',
		organisationIds: ['intellicat']
	},
	{
		name: 'DeSci Codex',
		url: 'https://codex.desci.com/',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Protocol for persistent research objects whose parts (data, code, figures) are individually addressable.',
		organisationIds: ['desci-labs']
	},
	{
		name: 'Nanodash',
		url: 'https://nanodash.knowledgepixels.com/',
		category: 'publishing',
		sub: 'knowledge',
		blurb: 'Web client for browsing, writing, and signing nanopublications.',
		organisationIds: ['knowledge-pixels']
	},
	{
		name: 'Nanopublications',
		url: 'https://nanopub.net/',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Small, citable knowledge-graph units: one assertion plus its provenance and publication record.'
	},
	{
		name: 'ORKG',
		url: 'https://orkg.org/',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Describes papers as structured, comparable contributions; ORKG Ask adds semantic search and answers.',
		organisationIds: ['tib']
	},
	{
		name: 'PROV-K',
		url: 'https://prov-k.dei.unipd.it/ontology/',
		category: 'publishing',
		sub: 'knowledge',
		blurb: 'Extends PROV-O to track the provenance of assertions aggregated from multiple sources.',
		organisationIds: ['university-of-padua']
	},
	{
		name: 'RIO Journal nanopublications',
		url: 'https://riojournal.com/',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Publishes machine-readable nanopublications alongside articles, linking narrative to assertions.',
		organisationIds: ['pensoft']
	},
	{
		name: 'Science Live',
		url: 'https://sciencelive4all.org/',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Records findings, replication outcomes, and reviews as nanopublications beside a readable narrative.',
		reviewed: '2026-09-24'
	},
	{
		name: 'TIB Knowledge Loom',
		url: 'https://knowledgeloom.tib.eu/',
		category: 'publishing',
		sub: 'knowledge',
		blurb:
			'Publishes individual statements with their own DOIs, alongside the data, code, and analyses behind them.',
		organisationIds: ['tib']
	},
	{
		name: 'K-Dense Web',
		url: 'https://www.k-dense.ai/products/k-dense-web',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Hosted research agent that runs code, queries scientific databases, analyses data, and produces manuscripts and figures.',
		organisationIds: ['k-dense'],
		reviewed: '2026-09-24'
	},
	{
		name: 'K-Dense BYOK',
		url: 'https://github.com/K-Dense-AI/k-dense-byok',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Desktop research assistant, Kady, that delegates work to specialist agents using your own API keys or local models.',
		organisationIds: ['k-dense'],
		reviewed: '2026-09-24'
	},
	{
		name: 'K-Dense Faraday',
		url: 'https://www.k-dense.ai/products/faraday',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Lab hardware running an AI co-scientist locally, designed for research using private data and on-premises computation.',
		organisationIds: ['k-dense'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Claude Scientific Writer',
		url: 'https://github.com/K-Dense-AI/claude-scientific-writer',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Researches and drafts scientific papers, reports, and proposals, with literature lookup and citation verification.',
		organisationIds: ['k-dense'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Scientific Agent Skills',
		url: 'https://github.com/K-Dense-AI/scientific-agent-skills',
		category: 'assistants',
		sub: 'tooling',
		blurb:
			'Reusable instructions and workflows for scientific analysis and database access in compatible AI agents.',
		organisationIds: ['k-dense'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Claimscape',
		url: 'https://www.k-dense.ai/tools/claimscape',
		category: 'assistants',
		sub: 'reviews',
		blurb:
			'Maps PubMed evidence for a claim by study design and date, linking assessments to abstract sentences; reviews are separated from primary evidence.',
		organisationIds: ['k-dense'],
		reviewed: '2026-09-24'
	},
	{
		name: 'Deep Review',
		url: 'https://research.google/deepreview',
		category: 'review',
		sub: 'review',
		blurb:
			'Google’s AI that reads a paper or document and points out errors in its logic and claims.',
		organisationIds: ['google'],
		reviewed: '2026-10-18',
		sources: [
			'https://research.google/blog/analyzing-technical-documents-with-deep-review/',
			'https://arxiv.org/abs/2606.28277'
		]
	},
	{
		name: 'AstaBench',
		url: 'https://allenai.org/asta/bench',
		category: 'benchmarks',
		blurb:
			'Tests how well AI agents handle science tasks like finding papers, running code, and analysing data.',
		organisationIds: ['ai2'],
		reviewed: '2026-10-18',
		sources: ['https://allenai.org/asta/bench']
	},
	{
		name: 'LABBench2',
		url: 'https://huggingface.co/datasets/futurehouse/labbench2',
		category: 'benchmarks',
		blurb:
			'About 1,900 biology research questions for testing AI, harder than the original LAB-Bench.',
		organisationIds: ['edison-scientific', 'futurehouse'],
		reviewed: '2026-10-18',
		sources: ['https://huggingface.co/datasets/futurehouse/labbench2']
	},
	{
		name: 'Paperpal Preflight',
		url: 'https://paperpal.com/preflight',
		category: 'review',
		sub: 'integrity',
		blurb:
			'Screens manuscripts for language, integrity, AI-written text, and image problems before review.',
		organisationIds: ['cactus-communications'],
		reviewed: '2026-10-18',
		sources: ['https://paperpal.com/preflight']
	},
	{
		name: 'Prism',
		url: 'https://openai.com/prism/',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Free online LaTeX editor with ChatGPT built in to help write papers and find citations.',
		organisationIds: ['openai'],
		reviewed: '2026-10-18',
		sources: ['https://openai.com/index/introducing-prism/', 'https://openai.com/prism/']
	},
	{
		name: 'Claude Science',
		url: 'https://www.anthropic.com/news/claude-science-ai-workbench',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Anthropic’s app where an AI runs scientific analyses and checks its own citations and numbers.',
		organisationIds: ['anthropic'],
		reviewed: '2026-10-18',
		sources: ['https://www.anthropic.com/news/claude-science-ai-workbench']
	},
	{
		name: 'Biomni Lab',
		url: 'https://phylo.bio/biomni',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Online workspace where biologists direct AI agents that use 300+ research tools and databases.',
		organisationIds: ['phylo'],
		reviewed: '2026-10-18',
		sources: [
			'https://www.prnewswire.com/news-releases/phylo-introduces-biomni-lab-an-integrated-environment-for-ai-native-biology-302677036.html',
			'https://phylo.bio/announcement'
		]
	},
	{
		name: 'Lightcone Research',
		url: 'https://www.lightconeresearch.org/',
		category: 'assistants',
		sub: 'tooling',
		blurb:
			'Open-source tools that make AI-run scientific analyses record their choices and stay re-runnable, built for Claude Code and Codex.',
		organisationIds: ['lightcone-research', 'bids', 'cnrs'],
		reviewed: '2026-10-19',
		sources: [
			'https://www.lightconeresearch.org/',
			'https://docs.lightconeresearch.org/',
			'https://bids.berkeley.edu/programs-initiatives/lightcone-research',
			'https://pypi.org/project/lightcone-cli/'
		]
	},
	{
		name: 'Terminal-Bench-Science',
		url: 'https://www.terminal-bench-science.ai/',
		category: 'benchmarks',
		blurb:
			'Tests AI agents on real research tasks written by working scientists, with a public leaderboard.',
		organisationIds: ['stanford', 'laude-institute'],
		reviewed: '2026-10-20',
		sources: [
			'https://www.terminal-bench-science.ai/',
			'https://www.terminal-bench-science.ai/announcement'
		]
	},
	{
		name: 'Rosalind Workbench',
		url: 'https://developers.openai.com/blog/rosalind-workbench',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'OpenAI’s biology workspace in ChatGPT that links research tools to help analyse data and plan experiments.',
		organisationIds: ['openai'],
		reviewed: '2026-10-20',
		sources: ['https://developers.openai.com/blog/rosalind-workbench']
	},
	{
		name: 'Vals Science Index',
		url: 'https://www.vals.ai/benchmarks/science_index',
		category: 'benchmarks',
		blurb:
			'Averages three science benchmarks into one score for comparing how well AI models do research.',
		organisationIds: ['vals-ai'],
		reviewed: '2026-10-20',
		sources: ['https://www.vals.ai/benchmarks/science_index']
	},
	{
		name: 'Science Foundries',
		url: 'https://www.benchling.com/blog/introducing-science-foundries',
		category: 'assistants',
		sub: 'agents',
		blurb:
			'Teams of AI agents run lab processes for Benchling customers, pausing for scientists’ approval at chosen steps.',
		organisationIds: ['benchling'],
		reviewed: '2026-10-20',
		sources: ['https://www.benchling.com/blog/introducing-science-foundries']
	},
	{
		name: 'Linked Discoveries',
		url: 'https://linkeddiscoveries.ncbi.nlm.nih.gov/',
		category: 'assistants',
		sub: 'search',
		blurb:
			'Free NIH tool that maps the papers around a PubMed article, including replications, reviews and retractions.',
		organisationIds: ['nlm'],
		reviewed: '2026-10-20',
		sources: [
			'https://linkeddiscoveries.ncbi.nlm.nih.gov/',
			'https://www.nih.gov/news-events/news-releases/nih-launches-new-pubmed-tool-strengthen-research-replication-reproducibility',
			'https://ncbiinsights.ncbi.nlm.nih.gov/2026/09/24/explore-connections-biomedical-literature/'
		]
	}
];

// A category's entries, alphabetical, in its subcategory sections; one untitled section if it has none.
export function sections(id: Category, list = entries) {
	const rows = list
		.filter((e) => e.category === id)
		.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
	const subs: [string, string][] = Object.entries(categories[id].subs);
	if (!subs.length) return [{ title: '', rows }];
	return subs.map(([sub, title]) => ({ title, rows: rows.filter((e) => e.sub === sub) }));
}
