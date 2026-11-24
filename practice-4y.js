/* ============ PRACTICE – 4th YEAR + conceptual courses (worked problems with solutions) ============ */
PRACTICE.push(
{ id:"es", name:"Economic Statistics", items:[
 { q:"Income rises from 1000 to 1200 and spending on food from 400 to 440. Find the income elasticity of food and classify the good.", a:"%ΔQ = 40/400 = 10%, %ΔI = 200/1000 = 20%. η = 0.10/0.20 = <b>0.5</b>. Between 0 and 1, so food is a <b>necessity</b>; Engel's law holds." },
 { q:"Incomes of four households are 5, 15, 30, 50. Compute the Gini coefficient.", a:"x̄ = 25. Σ|xᵢ − xⱼ| over all ordered pairs = 2 × (10+25+45+15+35+20) = 300. G = 300/(2n²x̄) = 300/(2×16×25) = <b>0.375</b>." },
 { q:"p₀ = (2, 5), p₁ = (3, 6), q₀ = (10, 4), q₁ = (8, 5). Find the Laspeyres, Paasche and Fisher price indices.", a:"Laspeyres = (3×10 + 6×4)/(2×10 + 5×4) × 100 = 54/40 × 100 = <b>135.0</b>. Paasche = (3×8 + 6×5)/(2×8 + 5×5) × 100 = 54/41 × 100 = <b>131.7</b>. Fisher = √(135.0 × 131.7) = <b>133.3</b>." },
 { q:"A Cobb–Douglas function is Q = A L^0.7 K^0.5. What are the output elasticities and the returns to scale?", a:"Elasticities: 0.7 (labour) and 0.5 (capital). Sum = 1.2 &gt; 1 ⇒ <b>increasing returns to scale</b>." },
 { q:"The money wage index is 150 and the CPI is 120 (same base). Find the real wage index.", a:"Real wage index = 150/120 × 100 = <b>125</b>." },
 { q:"A log-linear demand function is ln Q = 5 − 1.5 ln P. What is the price elasticity? Estimate the change in Q for a 10% rise in price.", a:"The slope on ln P is the elasticity: <b>−1.5</b>. Q falls by about 1.5 × 10 = <b>15%</b>." },
 { q:"GDP grows from 100 to 121 over 2 years. Find the compound annual growth rate.", a:"(121/100)^(1/2) − 1 = 1.1 − 1 = <b>10% per year</b>." }
]},
{ id:"as", name:"Applied Statistics", items:[
 { q:"Samples of size n = 4 give x̿ = 80 and R̄ = 6 (A₂ = 0.729). Find the X̄-chart control limits.", a:"UCL = 80 + 0.729×6 = <b>84.374</b>, LCL = 80 − 0.729×6 = <b>75.626</b>." },
 { q:"For the same data (n = 4: D₃ = 0, D₄ = 2.282), find the R-chart limits.", a:"UCL = D₄R̄ = 2.282 × 6 = <b>13.692</b>, LCL = D₃R̄ = <b>0</b>." },
 { q:"A p-chart has p̄ = 0.04 and sample size 100. Find the 3σ limits.", a:"σ = √(0.04×0.96/100) = 0.0196. UCL = 0.04 + 0.0588 = <b>0.0988</b>. LCL = 0.04 − 0.0588 &lt; 0, so <b>LCL = 0</b>." },
 { q:"A c-chart has average 9 defects per unit. Find the control limits.", a:"UCL = 9 + 3√9 = <b>18</b>; LCL = 9 − 9 = <b>0</b>." },
 { q:"A single sampling plan has n = 50 and acceptance number c = 1. Find the probability of acceptance when the lot fraction defective is 0.02.", a:"Pa = P(X ≤ 1), X ~ Binomial(50, 0.02) = 0.98⁵⁰ + 50(0.02)(0.98⁴⁹) = 0.3642 + 0.3716 = <b>0.736</b>." },
 { q:"Compute the 3-year moving averages for 10, 12, 14, 13, 16.", a:"(10+12+14)/3 = <b>12</b>; (12+14+13)/3 = <b>13</b>; (14+13+16)/3 = <b>14.33</b>." }
]},
{ id:"doe2", name:"Design and Analysis of Experiments II", items:[
 { q:"Show how to arrange a 2³ factorial in two blocks of 4, confounding ABC.", a:"Block 1 (even number of letters in common with ABC): <b>(1), ab, ac, bc</b>. Block 2: <b>a, b, c, abc</b>. ABC is confounded with blocks; main effects and two-factor interactions remain estimable." },
 { q:"A split-plot has 3 whole-plot levels (A), 4 sub-plot levels (B) and 2 replicates. Write the df of the ANOVA.", a:"Replicates 1; A = 2; Error(a) = 2; B = 3; A×B = 6; Error(b) = a(b−1)(r−1) = 9. Total = 1 + 2 + 2 + 3 + 6 + 9 = <b>23</b> = abr − 1." },
 { q:"In ANCOVA, treatment mean ȳᵢ = 30, covariate mean x̄ᵢ = 20, grand covariate mean 18, and within-treatment slope b = 0.5. Find the adjusted mean.", a:"ȳᵢ(adj) = ȳᵢ − b(x̄ᵢ − x̄) = 30 − 0.5 × 2 = <b>29</b>." },
 { q:"A 4 × 4 Latin square is used. Find the error df.", a:"df(error) = (t − 1)(t − 2) = 3 × 2 = <b>6</b>." },
 { q:"RBD with b = 4 blocks, t = 3 treatments, MS(blocks) = 24, MSE = 4. Find the efficiency of RBD relative to CRD.", a:"RE = [(b−1)MSB + b(t−1)MSE]/[(bt−1)MSE] = (3×24 + 4×2×4)/(11×4) = 104/44 = <b>2.36</b>: RBD is about 2.4 times as efficient." },
 { q:"A 2² factorial with r = 2 has totals (1) = 40, a = 60, b = 50, ab = 90. Find the sums of squares of A, B and AB.", a:"Contrasts: A = 60 + 90 − 50 − 40 = 60; B = 50 + 90 − 60 − 40 = 40; AB = 90 + 40 − 60 − 50 = 20. SS = contrast²/(4r): <b>SSA = 450, SSB = 200, SSAB = 50</b>." }
]},
{ id:"st2", name:"Sampling Techniques II", items:[
 { q:"PPS with replacement: two sampled units have yᵢ = 20, 30 and selection probabilities pᵢ = 0.2, 0.3. Find the Hansen–Hurwitz estimate of the total.", a:"Estimates yᵢ/pᵢ = 100 and 100. Mean = <b>100</b>." },
 { q:"Horvitz–Thompson: sample units have y = 10, 20 and inclusion probabilities π = 0.4, 0.5. Estimate the population total.", a:"Ŷ_HT = Σ yᵢ/πᵢ = 10/0.4 + 20/0.5 = 25 + 40 = <b>65</b>." },
 { q:"From N = 50 clusters, n = 5 are chosen with totals 80, 90, 70, 85, 75, each cluster having M = 10 units. Estimate the population total and the mean per unit.", a:"Mean cluster total = 400/5 = 80. Total = 50 × 80 = <b>4000</b>. Mean per unit = 4000/500 = <b>8</b>." },
 { q:"Double sampling for ratio estimation: the large first-phase sample has x̄′ = 22; the second-phase sample has x̄ = 20 and ȳ = 50. Estimate the mean of y.", a:"ȳ_R = ȳ (x̄′/x̄) = 50 × 22/20 = <b>55</b>." },
 { q:"A cluster design has average cluster size m = 10 and intraclass correlation ρ = 0.05. Find the design effect, and the sample size needed if SRS requires 300.", a:"deff = 1 + (m − 1)ρ = 1 + 9 × 0.05 = <b>1.45</b>. n = 300 × 1.45 = <b>435</b>." },
 { q:"In a self-weighting design with N = 20,000 households and a sample of 500, what is the weight of each sampled household?", a:"Weight = N/n = <b>40</b>, the same for all units, so unweighted means are unbiased." }
]},
{ id:"mva", name:"Multivariate Analysis", items:[
 { q:"Data rows (2, 3), (4, 7), (6, 5). Find the mean vector, covariance matrix and correlation.", a:"Mean = <b>(4, 5)</b>. S₁₁ = 4, S₂₂ = 4, S₁₂ = ((−2)(−2) + 0 + (2)(0))/2 = 2, so S = <b>[[4, 2], [2, 4]]</b>. r = 2/4 = <b>0.5</b>." },
 { q:"Find the eigenvalues of S = [[4, 2], [2, 4]] and the proportion of variance explained by PC1.", a:"λ = 6 and 2. PC1 explains 6/8 = <b>75%</b>." },
 { q:"With the same S and mean (4, 5), find the squared Mahalanobis distance of the point (6, 5).", a:"d = (2, 0). S⁻¹ = (1/12)[[4, −2], [−2, 4]]. D² = dᵀS⁻¹d = 4×4/12 = <b>1.333</b>." },
 { q:"A sample of n = 10 has x̄ − μ₀ = (1, 2) and S = [[4, 2], [2, 4]]. Compute Hotelling's T² and test at 5%. (F₀.₀₅(2,8) = 4.46)", a:"dᵀS⁻¹d = 12/12 = 1, so T² = 10. F = (n−p)T²/(p(n−1)) = 8×10/18 = <b>4.44 &lt; 4.46</b>: marginally, <b>do not reject</b> H₀: μ = μ₀." },
 { q:"Find Fisher's discriminant direction for mean difference (2, 0) and pooled S = [[4, 2], [2, 4]].", a:"w = S⁻¹(μ₁ − μ₂) = (1/12)[[4, −2], [−2, 4]](2, 0)ᵀ = <b>(0.667, −0.333)</b>." },
 { q:"In factor analysis a variable has loadings 0.8 and 0.3 on two factors. Find its communality and specific variance (standardised variable).", a:"Communality = 0.8² + 0.3² = <b>0.73</b>. Specific variance = 1 − 0.73 = <b>0.27</b>." }
]},
{ id:"bio", name:"Biostatistics and Epidemiology", items:[
 { q:"Survival times (months): 3, 4+, 6, 6, 9 (+ = censored). Estimate the Kaplan–Meier survival function.", a:"t = 3: 5 at risk, 1 death, S = 4/5 = 0.80. t = 4 is censored (no change). t = 6: 3 at risk, 2 deaths, S = 0.80 × 1/3 = <b>0.267</b>. t = 9: 1 at risk, 1 death, S = <b>0</b>." },
 { q:"Exposed: 30 diseased, 70 healthy. Unexposed: 10 diseased, 90 healthy. Find the relative risk and odds ratio.", a:"RR = (30/100)/(10/100) = <b>3.0</b>. OR = (30×90)/(70×10) = <b>3.86</b>." },
 { q:"A test gives TP = 90, FN = 10, TN = 160, FP = 40. Find sensitivity, specificity, PPV and NPV.", a:"Sensitivity = 90/100 = <b>0.90</b>. Specificity = 160/200 = <b>0.80</b>. PPV = 90/130 = <b>0.692</b>. NPV = 160/170 = <b>0.941</b>." },
 { q:"There were 15 new cases during 500 person-years of follow-up. Find the incidence rate.", a:"15/500 = 0.03 per person-year = <b>30 per 1000 person-years</b>." },
 { q:"Survival time is exponential with hazard λ = 0.1 per year. Find S(5) and the median survival.", a:"S(5) = e^(−0.5) = <b>0.607</b>. Median = ln 2/λ = <b>6.93 years</b>." },
 { q:"A Cox model gives β̂ = 0.693 for a treatment indicator. Interpret.", a:"HR = e^0.693 ≈ <b>2.0</b>: the hazard of the event is twice as high in the treated group, holding other covariates fixed." }
]},
{ id:"glm", name:"Generalized Linear Models", items:[
 { q:"A logistic model is logit(p) = −1 + 0.8x. Find p at x = 2 and the odds ratio per one unit of x.", a:"η = −1 + 1.6 = 0.6, p = 1/(1 + e^(−0.6)) = <b>0.646</b>. OR per unit = e^0.8 = <b>2.226</b>." },
 { q:"A Poisson regression is log μ = 0.5 + 0.3x. Find μ at x = 2 and the rate ratio per one unit.", a:"μ = e^(0.5+0.6) = e^1.1 = <b>3.004</b>. Rate ratio = e^0.3 = <b>1.35</b>." },
 { q:"A model has null deviance 120 (df 99) and residual deviance 80 (df 97). Test the two added parameters at 5%. (χ²₀.₀₅,₂ = 5.99)", a:"Likelihood ratio statistic = 120 − 80 = <b>40</b> on 2 df, far above 5.99, so the covariates are significant." },
 { q:"Give the canonical link and variance function for Normal, Poisson, Binomial and Gamma responses.", a:"Normal: identity, V = 1. Poisson: log, V = μ. Binomial: logit, V = μ(1−μ). Gamma: inverse (1/μ), V = μ²." },
 { q:"Find the Poisson deviance contribution for y = 5 with fitted μ̂ = 4.", a:"d = 2[y ln(y/μ̂) − (y − μ̂)] = 2[5 ln 1.25 − 1] = 2(1.1157 − 1) = <b>0.231</b>." },
 { q:"A fitted model has log-likelihood −120.5 and 4 parameters. Find AIC and BIC if n = 100.", a:"AIC = 2k − 2 log L = 8 + 241 = <b>249</b>. BIC = k ln n − 2 log L = 4 × 4.605 + 241 = <b>259.4</b>. The model with the smaller value is preferred." }
]},
{ id:"eng", name:"English Language (conceptual)", items:[
 { q:"Correct the sentence: \"Each of the students have submitted their assignment.\"", a:"<b>Each of the students has submitted his or her assignment.</b> \"Each\" is singular and takes a singular verb (formal usage; \"their\" is common in speech)." },
 { q:"Fill in the blank with the correct tense: \"By the time we reached the station, the train ____ (leave).\"", a:"<b>had left</b>: past perfect shows an action completed before another past action." },
 { q:"Convert to passive voice: \"The committee approved the proposal.\"", a:"<b>The proposal was approved by the committee.</b>" },
 { q:"Choose the correct word: \"The decision will (affect / effect) all students.\"", a:"<b>affect</b> (verb: to influence). \"Effect\" is usually a noun meaning result." },
 { q:"Write one sentence each using the idioms \"break the ice\" and \"a blessing in disguise\".", a:"Model: \"He told a joke to <b>break the ice</b> at the meeting.\" / \"Missing the bus was <b>a blessing in disguise</b>, because we met an old friend.\" Any correct use of meaning is acceptable." },
 { q:"Identify the topic sentence and supporting detail: \"Regular revision improves memory. Studies show that spaced practice helps long-term recall.\"", a:"Topic sentence: <b>\"Regular revision improves memory.\"</b> Supporting detail: \"Studies show that spaced practice helps long-term recall.\"" }
]},
{ id:"aw", name:"Academic Writing (conceptual)", items:[
 { q:"Name the usual sections of a research article (IMRaD).", a:"<b>Introduction, Methods, Results and Discussion</b>, preceded by the title and abstract and followed by conclusion and references." },
 { q:"Rewrite informally worded text in academic style: \"Lots of people think smoking is bad.\"", a:"<b>\"Many people consider smoking harmful to health.\"</b> Academic style avoids vague quantifiers (\"lots of\") and casual expressions." },
 { q:"What is plagiarism and how can it be avoided?", a:"Using another person's words or ideas without credit. Avoid it by <b>quoting, paraphrasing with a citation</b>, and listing every source in the references." },
 { q:"Give a reference for a book in APA format: author Gupta S. C., year 2000, title Fundamentals of Mathematical Statistics, publisher Sultan Chand.", a:"<b>Gupta, S. C. (2000). <i>Fundamentals of mathematical statistics</i>. Sultan Chand.</b> In-text citation: (Gupta, 2000)." },
 { q:"What makes a good thesis statement?", a:"A single clear, arguable sentence stating the paper's main claim and scope, for example: \"Spaced practice improves exam performance more than last-minute revision.\"" },
 { q:"What should an abstract contain?", a:"A short summary of the <b>purpose, method, main results and conclusion</b> (typically 150–250 words), written after the paper is complete." }
]},
{ id:"hist", name:"History of the Emergence of Independent Bangladesh (conceptual)", items:[
 { q:"When and why is 21 February observed as a national day?", a:"On <b>21 February 1952</b> students and citizens of Dhaka protested for Bangla as a state language and several were killed by police fire. The day is now International Mother Language Day (UNESCO, 1999)." },
 { q:"What was the Six-Point Programme?", a:"Presented by <b>Sheikh Mujibur Rahman in 1966</b> in Lahore, it demanded autonomy for East Pakistan: federal parliamentary government, only defence and foreign affairs with the centre, separate currency, taxation by the provinces, separate foreign-exchange accounts and a militia for East Pakistan." },
 { q:"What was the importance of the 1970 election?", a:"The Awami League won <b>160 of the 162 general seats</b> in East Pakistan and a majority in the National Assembly, but power was not transferred, which led to the non-cooperation movement of March 1971." },
 { q:"What is the importance of 7 March 1971?", a:"Sheikh Mujibur Rahman's speech at the Race Course Ground declared: <i>\"The struggle this time is for freedom, the struggle this time is for independence\"</i>, guiding the non-cooperation movement and the liberation struggle." },
 { q:"Write the key dates: Declaration of Independence, formation of the Mujibnagar government and Victory Day.", a:"Independence declared <b>26 March 1971</b>; Mujibnagar government sworn in <b>17 April 1971</b>; Victory Day <b>16 December 1971</b>." },
 { q:"When was the Constitution of Bangladesh adopted, and when did it come into effect?", a:"Adopted on <b>4 November 1972</b>; effective from <b>16 December 1972</b>." }
]},
{ id:"rm", name:"Research Methodology (conceptual)", items:[
 { q:"Distinguish between a research problem, objective and hypothesis.", a:"The <b>problem</b> is the question or gap to be studied; <b>objectives</b> state what the study will do about it; a <b>hypothesis</b> is a testable statement of the expected relationship between variables." },
 { q:"Differentiate between qualitative and quantitative research with examples.", a:"Quantitative research measures variables numerically and tests hypotheses (e.g. a survey of exam scores). Qualitative research explores meanings and experiences in words (e.g. interviews on why students drop out)." },
 { q:"List the components of a research proposal.", a:"Title, introduction and background, problem statement, objectives, literature review, methodology (design, sampling, tools, analysis plan), work plan, budget and references." },
 { q:"What is the difference between primary and secondary data? Give sources.", a:"<b>Primary</b> data are collected first-hand (questionnaire, interview, experiment). <b>Secondary</b> data already exist (BBS reports, DHS, journals, census)." },
 { q:"Name three types of validity and a way to check reliability of a questionnaire.", a:"Content, construct and criterion validity. Reliability can be checked by <b>Cronbach's alpha</b> (internal consistency) or test–retest correlation." },
 { q:"Why is a pilot study conducted?", a:"To test the questionnaire and procedures on a small sample, find unclear questions, estimate time and variability (for sample size), and fix problems before the main study." }
]}
);
