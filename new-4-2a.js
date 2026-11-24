/* ============ 4th YEAR, 2nd SEMESTER (part 1): Multivariate Analysis, Biostatistics and Epidemiology ============ */
TOPICS.push(
{ id:"mva", name:"Multivariate Analysis", topics:[
 { title:"Non-Central Chi-Square, t and F Distributions", body:`
  <p>If Zᵢ ~ N(μᵢ, 1) are independent, then Σ Zᵢ² follows a <b>non-central chi-square</b> distribution χ′²(n, λ) with n df and <b>non-centrality parameter</b> λ = Σμᵢ². When λ = 0 it becomes the ordinary (central) χ².</p>
  <div class="formula">E[χ′²(n, λ)] = n + λ  ;  Var = 2(n + 2λ)</div>
  <div class="formula">Non-central t: t′ = (Z + δ)/√(χ²ᵥ/ν)  ;  Non-central F: F′ = (χ′²ₘ(λ)/m)/(χ²ₙ/n)</div>
  <p>These distributions describe the test statistic when the null hypothesis is <i>false</i>, so they are used to calculate the <b>power</b> of t, F and chi-square tests: power = P(statistic &gt; critical value | non-central distribution).</p>
  <p><b>Example:</b> n = 3 and λ = 4: mean = 3 + 4 = 7 and variance = 2(3 + 8) = 22. A larger λ shifts the distribution to the right and increases the power.</p>
  <div class="note">Mistake: using the central distribution to find power. The power is always calculated from the non-central version.</div>`},
 { title:"Quadratic Forms & Cochran's Theorem", body:`
  <p>A <b>quadratic form</b> is Q = xᵀAx with A symmetric. If x ~ N_n(0, I), then Q ~ χ²_r iff A is <b>idempotent</b> (A² = A), and then r = rank(A) = tr(A).</p>
  <div class="formula">E(xᵀAx) = tr(AΣ) + μᵀAμ  ;  for x ~ N(0, σ²I): xᵀAx/σ² ~ χ²_r when A idempotent</div>
  <div class="formula">Cochran: if Σ Qᵢ = xᵀx, Qᵢ = xᵀAᵢx and Σ rank(Aᵢ) = n, then the Qᵢ are independent χ² with df = rank(Aᵢ)</div>
  <p>Two quadratic forms xᵀAx and xᵀBx are independent iff AB = 0 (for x ~ N(0, I)). This is the proof that x̄ and s² are independent and that ANOVA sums of squares are independent chi-squares.</p>
  <p><b>Example:</b> A = I − (1/n)11ᵀ is idempotent with rank = trace = n − 1, so Σ(xᵢ − x̄)²/σ² ~ χ²_{n−1}. Also E(xᵀAx) = σ²tr(A) = (n − 1)σ², which explains the divisor n − 1.</p>
  <div class="note">Mistake: forgetting to check idempotency. Without it, xᵀAx is not chi-square.</div>`},
 { title:"Multivariate Normal Distribution", body:`
  <p>A p-dimensional vector X ~ N_p(μ, Σ) has density f(x) = (2π)^(−p/2)|Σ|^(−1/2) exp[−½(x − μ)ᵀΣ⁻¹(x − μ)], MGF exp(tᵀμ + ½tᵀΣt), and characteristic function exp(itᵀμ − ½tᵀΣt).</p>
  <div class="vis" data-vis="mvn"></div>
  <div class="formula">AX + b ~ N(Aμ + b, AΣAᵀ)  ;  any sub-vector is again multivariate normal</div>
  <div class="formula">X₁ | X₂ = x₂ ~ N( μ₁ + Σ₁₂Σ₂₂⁻¹(x₂ − μ₂),  Σ₁₁ − Σ₁₂Σ₂₂⁻¹Σ₂₁ )</div>
  <p>For the multivariate normal, <b>zero covariance implies independence</b> (not true in general). The contours of constant density are ellipsoids and the conditional mean is linear in x₂.</p>
  <p><b>Example:</b> Bivariate normal with μ = (0, 0), unit variances, ρ = 0.6. X₁ | X₂ = 2 has mean 0.6 × 2 = 1.2 and variance 1 − 0.36 = 0.64. For a = (1, 1) and Σ = [[1, 0.5], [0.5, 1]], Var(X₁ + X₂) = aᵀΣa = 1 + 1 + 2(0.5) = 3.</p>
  <div class="note">Mistake: normal marginals do not make the joint distribution multivariate normal, because the joint can fail even if every marginal is normal.</div>`},
 { title:"Mahalanobis Distance, Wishart & Hotelling's T²", body:`
  <p>The <b>Mahalanobis squared distance</b> D² = (x − μ)ᵀΣ⁻¹(x − μ) accounts for correlation and scale. For x ~ N_p(μ, Σ), D² ~ χ²_p. With Σ = I it is the squared Euclidean distance.</p>
  <p>The <b>Wishart distribution</b> W_p(n, Σ) is the distribution of Σᵢ xᵢxᵢᵀ for n independent N_p(0, Σ) vectors, the multivariate version of χ². The sample covariance matrix S satisfies (n − 1)S ~ W_p(n − 1, Σ).</p>
  <div class="formula">Hotelling's T² = n(x̄ − μ₀)ᵀS⁻¹(x̄ − μ₀)  ;  [(n − p)/(p(n − 1))]·T² ~ F(p, n − p)</div>
  <div class="formula">Two samples: T² = [n₁n₂/(n₁ + n₂)](x̄₁ − x̄₂)ᵀS_p⁻¹(x̄₁ − x̄₂)  (equal covariance matrices assumed)</div>
  <p>For p = 1, T² = t². T² tests whether the mean vector equals μ₀, using all p variables jointly (keeping the overall Type I error right).</p>
  <p><b>Example:</b> x = (2, 1), μ = 0, Σ = [[1, 0.5], [0.5, 1]]: det Σ = 0.75 and D² = (x₁² − x₁x₂ + x₂²)/0.75 = (4 − 2 + 1)/0.75 = 4. For p = 2, n = 20, T² = 10: F = [18/(2 × 19)] × 10 = 4.74 &gt; F₀.₀₅(2, 18) = 3.55, so reject H₀: μ = μ₀.</p>
  <div class="note">Mistake: running p separate t-tests instead of T² inflates the Type I error and ignores correlations.</div>`},
 { title:"Tests for Covariance, Correlation & Multivariate Normality", body:`
  <p><b>Covariance tests</b> are based on likelihood ratio statistics: H₀: Σ = Σ₀; <b>Bartlett's sphericity test</b> checks H₀: R = I (all correlations zero, used before factor analysis); <b>Box's M test</b> checks equality of the covariance matrices of several groups. A single correlation is tested using Fisher's transformation z = ½ ln[(1 + r)/(1 − r)], which is approximately N(z_ρ, 1/(n − 3)).</p>
  <p><b>Multivariate normality:</b> (1) check each variable's Q–Q plot; (2) a chi-square Q–Q plot of the Mahalanobis distances Dᵢ² against χ²_p quantiles should be a straight line; (3) <b>Mardia's</b> skewness and kurtosis: under normality the kurtosis has expected value p(p + 2).</p>
  <p><b>Simulation:</b> to simulate X ~ N_p(μ, Σ), write Σ = LLᵀ (Cholesky), generate z ~ N(0, I) and set x = μ + Lz.</p>
  <p><b>Example:</b> Σ = [[4, 2], [2, 3]]: L = [[2, 0], [1, √2]] since LLᵀ = [[4, 2], [2, 1 + 2]] ✓. For r = 0.6, z = ½ ln(1.6/0.4) = ½ ln 4 = 0.693. For p = 2, Mardia's expected kurtosis = 2 × 4 = 8.</p>
  <div class="note">Mistake: concluding multivariate normality from univariate normality of each variable.</div>`},
 { title:"Multivariate Linear Models, MANOVA & Conditional Independence Graphs", body:`
  <p>The multivariate linear model is Y = XB + E, where Y is n × p, with rows of E independent N_p(0, Σ). <b>Multivariate regression</b> estimates B̂ = (XᵀX)⁻¹XᵀY, column by column. <b>MANOVA</b> compares group mean vectors using the hypothesis (H) and error (E) SSCP matrices; <b>MANCOVA</b> adds covariates.</p>
  <div class="formula">Wilks' Λ = |E|/|E + H| = Π 1/(1 + λᵢ)  ;  Pillai's trace = Σ λᵢ/(1 + λᵢ)  ;  λᵢ = eigenvalues of E⁻¹H</div>
  <p>Roy's largest root uses max λᵢ and Hotelling–Lawley trace uses Σλᵢ. Small Λ means groups differ.</p>
  <p><b>Covariance selection</b> (Dempster): zeros in the <b>precision matrix</b> Ω = Σ⁻¹ mean the two variables are <b>conditionally independent</b> given all the others. The <b>conditional independence graph</b> joins two variables by an edge only if ωᵢⱼ ≠ 0. The partial correlation is ρᵢⱼ·rest = −ωᵢⱼ/√(ωᵢᵢωⱼⱼ). For a <b>conditional Gaussian distribution</b> (mixed discrete and continuous variables) the continuous variables are normal given the discrete ones.</p>
  <p><b>Example:</b> Eigenvalues of E⁻¹H are 1 and 0.5: Λ = (1/2)(1/1.5) = 0.333; Pillai = 1/2 + 0.5/1.5 = 0.833. If ω₁₂ = −0.3 and ω₁₁ = ω₂₂ = 1, partial correlation = 0.3.</p>
  <div class="note">Mistake: zeros in Σ itself mean marginal independence, but zeros in Σ⁻¹ mean conditional independence. They are different.</div>`}
]},
{ id:"bio", name:"Biostatistics and Epidemiology", topics:[
 { title:"Survival Data: Censoring, Survival & Hazard Functions", body:`
  <p>Survival data record the time to an event (death, relapse, failure). Some times are <b>censored</b>: the exact time is unknown. <b>Right censoring</b> is most common; <b>Type I</b>: study ends at a fixed time; <b>Type II</b>: study stops after a fixed number of failures; <b>random censoring</b>: subjects drop out at random times. <b>Truncation</b> means subjects are only observed if their event time lies in a window (left truncation: delayed entry).</p>
  <div class="formula">S(t) = P(T &gt; t) = 1 − F(t)  ;  h(t) = f(t)/S(t)  ;  H(t) = −ln S(t)  ;  mean residual life m(t) = E(T − t | T &gt; t)</div>
  <p>S(t) is non-increasing with S(0) = 1. The hazard h(t) is the instantaneous risk of the event at t given survival to t.</p>
  <p><b>Example:</b> Exponential with λ = 0.1: S(t) = e^(−0.1t), S(5) = 0.607, h(t) = 0.1 (constant), median = ln 2/0.1 = 6.93, mean residual life = 10 at every t (memoryless).</p>
  <div class="note">Mistake: dropping censored observations or treating them as events. Both bias the estimates; censored times carry the information that survival exceeded that time.</div>`},
 { title:"Nonparametric Methods: Kaplan–Meier, Nelson–Aalen, Life Table & Log-Rank", body:`
  <p>The <b>Kaplan–Meier (product-limit) estimator</b> multiplies conditional survival probabilities at each event time: Ŝ(t) = Π (1 − dᵢ/nᵢ), where dᵢ = deaths and nᵢ = number at risk just before tᵢ. It is a step function and handles censoring.</p>
  <div class="vis" data-vis="km"></div>
  <div class="formula">Nelson–Aalen: Ĥ(t) = Σ dᵢ/nᵢ  ;  Ŝ = exp(−Ĥ)  ;  Log-rank: χ² = (O₁ − E₁)²/V,  E₁ = Σ dᵢn₁ᵢ/nᵢ</div>
  <p>The <b>life-table method</b> groups the time into intervals and is used for large grouped data. <b>Log-rank</b> gives equal weight to all event times; the <b>Wilcoxon (Gehan)</b> test weights each time by the number at risk, so early differences count more.</p>
  <p><b>Example:</b> Times 2, 3⁺, 5, 7⁺, 8 (⁺ = censored). At t = 2: n = 5, d = 1: Ŝ = 0.8. At t = 5: n = 3: Ŝ = 0.8 × (1 − 1/3) = 0.533. At t = 8: n = 1: Ŝ = 0. Nelson–Aalen at t = 5: Ĥ = 1/5 + 1/3 = 0.533. Log-rank with O₁ = 10, E₁ = 6.5, V = 3.5: χ² = 12.25/3.5 = 3.5 &lt; 3.84, not significant at 5%.</p>
  <div class="note">Mistake: a curve with few subjects at risk at the right tail is unreliable. Always report numbers at risk.</div>`},
 { title:"Parametric & Semi-Parametric Methods: Exponential, Weibull & Cox", body:`
  <p>The likelihood with censoring is L = Π f(tᵢ)^(δᵢ) S(tᵢ)^(1 − δᵢ), where δᵢ = 1 for an event and 0 for censored.</p>
  <div class="formula">Exponential: λ̂ = d / Σtᵢ  (events / total time at risk)  ;  Weibull: S(t) = exp[−(λt)^γ],  h(t) = λγ(λt)^(γ−1)</div>
  <p>Weibull: γ &gt; 1 increasing hazard, γ &lt; 1 decreasing, γ = 1 exponential. The <b>Cox proportional hazards model</b> is semi-parametric: h(t | x) = h₀(t)·exp(βᵀx), with the baseline h₀(t) unspecified; β is estimated from the <b>partial likelihood</b>. exp(β) is the <b>hazard ratio</b>, assumed constant over time (the proportional hazards assumption).</p>
  <p><b>Example:</b> 5 events in a total of 50 person-years: λ̂ = 5/50 = 0.1 per year. If β = 0.693 for treatment, HR = e^0.693 = 2: the hazard is doubled.</p>
  <div class="note">Mistake: interpreting a hazard ratio as a ratio of survival times, and not checking the proportional hazards assumption.</div>`},
 { title:"Epidemiological Concepts & Sources of Community Health Data", body:`
  <p><b>Epidemiology</b> studies the distribution and determinants of health-related states in populations. History: John Snow (1854) traced a cholera outbreak in London to the Broad Street water pump. Terms: <b>endemic</b> (constantly present), <b>epidemic</b> (excess in a region), <b>pandemic</b> (worldwide), outbreak, risk factor, host–agent–environment.</p>
  <div class="formula">Prevalence = existing cases/population at a time  ;  Incidence rate = new cases/person-time  ;  P ≈ I × D (stable condition)</div>
  <p><b>Data sources:</b> censuses (population denominators), <b>vital statistics</b> (registration of births and deaths), <b>morbidity data</b> (hospital records, notifiable diseases, disease registries) and health surveys.</p>
  <p><b>Example:</b> 50 new cases among 1000 people at risk in a year: cumulative incidence = 5%. 120 existing cases in 2000 people: prevalence = 6%. If I = 0.02 per year and the average duration D = 5 years, P ≈ 0.10.</p>
  <div class="note">Mistake: prevalence is a proportion at a time, not a rate. It depends on both the incidence and how long the disease lasts.</div>`},
 { title:"Study Designs & Causal Inference", body:`
  <ul><li><b>Cross-sectional:</b> exposure and outcome measured at one time; gives prevalence.</li>
  <li><b>Case-control (retrospective):</b> start with cases and controls, look back at exposure; gives the odds ratio; good for rare diseases.</li>
  <li><b>Cohort:</b> follow exposed and unexposed groups; <b>prospective</b> (forward in time) or <b>retrospective</b> (historical records); gives incidence, relative risk.</li>
  <li><b>Longitudinal:</b> repeated measurements on the same subjects over time. <b>Randomised controlled trial:</b> the gold standard, random assignment removes confounding.</li></ul>
  <p><b>Causal inference:</b> association is not causation. Check bias, confounding and chance. The <b>Bradford Hill criteria</b>: strength, consistency, temporality (cause before effect: essential), dose–response, plausibility, coherence, experiment, analogy.</p>
  <p><b>Example:</b> To study a link between smoking and a rare cancer, a case-control design is efficient (few cases needed). To measure the actual risk of cancer in smokers you need a cohort.</p>
  <div class="note">Mistake: calculating relative risk from a case-control study. The odds ratio is the valid measure there.</div>`},
 { title:"Measures of Effect & Association, Sensitivity, Specificity & ROC", body:`
  <p>For a 2×2 table (exposed: a diseased, b not; unexposed: c diseased, d not):</p>
  <div class="formula">RR = [a/(a + b)]/[c/(c + d)]  ;  OR = ad/(bc)  ;  Attributable risk = I_e − I_u  ;  AF(exposed) = (RR − 1)/RR</div>
  <p>The <b>prevalence ratio</b> is the RR computed from prevalence. OR ≈ RR when the disease is rare.</p>
  <div class="vis" data-vis="roc"></div>
  <div class="formula">Sensitivity = TP/(TP + FN)  ;  Specificity = TN/(TN + FP)  ;  PPV = TP/(TP + FP)  ;  LR⁺ = Se/(1 − Sp)</div>
  <p>The <b>ROC curve</b> plots sensitivity against 1 − specificity for all cut-offs; the area under it (AUC) summarises diagnostic accuracy (0.5 = useless, 1 = perfect).</p>
  <p><b>Example (cohort):</b> exposed 30/100 diseased, unexposed 10/100: RR = 3, AR = 0.30 − 0.10 = 0.20, AF = 2/3 = 66.7%, OR = (30 × 90)/(70 × 10) = 3.86. <b>Diagnostic test:</b> 100 diseased (90 test positive), 200 healthy (160 test negative): Se = 0.90, Sp = 0.80, PPV = 90/130 = 0.69, LR⁺ = 0.9/0.2 = 4.5.</p>
  <div class="note">Mistake: PPV depends on the prevalence, but sensitivity and specificity do not.</div>`},
 { title:"Correlated Proportions & McNemar Test", body:`
  <p>When the same subjects are measured twice (before/after) or matched pairs are used, binary outcomes are <b>correlated</b>. Arrange the pairs in a 2×2 table; only the <b>discordant pairs</b> carry information: b = (+ then −) and c = (− then +).</p>
  <div class="formula">McNemar: χ² = (b − c)²/(b + c)  ~ χ²₁ under H₀: the marginal proportions are equal  ;  matched-pair OR = b/c</div>
  <p>With small b + c use the exact binomial test (b ~ Bin(b + c, ½) under H₀), or the continuity-corrected (|b − c| − 1)²/(b + c).</p>
  <p><b>Example:</b> b = 25 and c = 10: χ² = 15²/35 = 6.43 &gt; 3.84, so reject H₀ at 5%: the treatment changed the proportion. Matched OR = 25/10 = 2.5.</p>
  <div class="note">Mistake: using the ordinary chi-square test of independence for paired data. It ignores the pairing.</div>`},
 { title:"Logistic & Poisson Regression, Correlated Data & Linear Mixed Models", body:`
  <p><b>Logistic regression:</b> logit(p) = ln[p/(1 − p)] = β₀ + β₁x. exp(β₁) is the odds ratio for a one-unit increase in x. <b>Poisson regression</b> models counts/rates: ln μ = β₀ + β₁x + ln(time at risk) (offset); exp(β₁) is the rate ratio.</p>
  <div class="formula">p = 1/(1 + e^(−η))  ;  OR = e^(β)  ;  RR = e^(β)  (Poisson)</div>
  <p><b>Correlated data</b> (repeated measures, clusters) violate independence. A <b>linear mixed model</b> adds random effects: y_ij = xᵢⱼᵀβ + bᵢ + eᵢⱼ, with bᵢ ~ N(0, σ_b²) and eᵢⱼ ~ N(0, σ_e²). The intraclass correlation is ICC = σ_b²/(σ_b² + σ_e²).</p>
  <p><b>Example:</b> β₁ = 0.693: OR = 2. β₀ = −2, β₁ = 0.5, x = 4: η = 0, p = 0.5. Poisson β = 0.405 gives rate ratio e^0.405 = 1.5. If σ_b² = 4 and σ_e² = 12, ICC = 4/16 = 0.25.</p>
  <div class="note">Mistake: ignoring correlation gives standard errors that are too small and false significance.</div>`}
]}
);

QUIZZES.push(
{ id:"mva", name:"Multivariate Analysis", questions:[
 { t:"Non-central distributions", q:"The mean of a non-central chi-square distribution with n df and non-centrality λ is:", o:["2n","λ","n","n + λ"], a:3, e:"E = n + λ." },
 { t:"Non-central distributions", q:"The variance of a non-central chi-square with n = 3 and λ = 4 is:", o:["28","22","14","10"], a:1, e:"Var = 2(n + 2λ) = 2(3 + 8) = 22." },
 { t:"Quadratic forms & Cochran's theorem", q:"If x ~ N(0, I), the quadratic form xᵀAx is chi-square distributed iff A is:", o:["idempotent","singular","diagonal","symmetric only"], a:0, e:"A² = A (and then df = rank A)." },
 { t:"Quadratic forms & Cochran's theorem", q:"The matrix I − (1/n)11ᵀ has rank:", o:["n + 1","n","n − 1","1"], a:2, e:"Its trace (n − 1) equals its rank because it is idempotent." },
 { t:"Quadratic forms & Cochran's theorem", q:"Cochran's theorem is used to show that sums of squares in ANOVA are:", o:["equal to zero","identical","independent chi-square variables","normal variables"], a:2, e:"With ranks adding up to n, the quadratic forms are independent χ²." },
 { t:"Multivariate normal distribution", q:"If X ~ N_p(μ, Σ), then AX ~", o:["N(Aμ, Σ)","N(μ, Σ)","N(Aμ, AΣAᵀ)","N(0, AAᵀ)"], a:2, e:"Linear transformations of normals are normal." },
 { t:"Multivariate normal distribution", q:"For the multivariate normal, zero covariance between two components implies:", o:["nothing","dependence","independence","they are equal"], a:2, e:"This special property holds for the multivariate normal." },
 { t:"Multivariate normal distribution", q:"For a bivariate normal with unit variances and ρ = 0.6, E(X₁ | X₂ = 2) is:", o:["0.8","2","0.6","1.2"], a:3, e:"E = ρx₂ = 0.6 × 2 = 1.2." },
 { t:"Multivariate normal distribution", q:"For the same bivariate normal, Var(X₁ | X₂ = 2) is:", o:["0.6","0.36","0.64","1"], a:2, e:"1 − ρ² = 0.64." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"x = (2, 1), μ = 0 and Σ = [[1, 0.5], [0.5, 1]]. The Mahalanobis D² is:", o:["4","1","5","3"], a:0, e:"D² = (x₁² − x₁x₂ + x₂²)/0.75 = 3/0.75 = 4." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"For x ~ N_p(μ, Σ), the quantity (x − μ)ᵀΣ⁻¹(x − μ) follows:", o:["N(0, p)","F(p, 1)","χ² with p df","t with p df"], a:2, e:"It is the sum of p squared independent standard normals." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"For p = 2, n = 20 and T² = 10, the F statistic [(n − p)/(p(n − 1))]T² is:", o:["4.74","9.5","10","2.0"], a:0, e:"(18/38) × 10 = 4.74." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"The Wishart distribution is the multivariate generalisation of the:", o:["normal distribution","t distribution","Poisson distribution","chi-square distribution"], a:3, e:"W₁(n, σ²) = σ²χ²ₙ." },
 { t:"Tests & simulation", q:"Bartlett's sphericity test tests the hypothesis that:", o:["the correlation matrix is the identity","the data are normal","the covariance matrices are equal across groups","the means are equal"], a:0, e:"All variables are uncorrelated (R = I)." },
 { t:"Tests & simulation", q:"To simulate X ~ N(μ, Σ) we use x = μ + Lz where Σ = LLᵀ, which is the:", o:["Cholesky factor","identity","trace of Σ","inverse of Σ"], a:0, e:"Cholesky decomposition provides L." },
 { t:"Tests & simulation", q:"Under multivariate normality with p = 2, the expected value of Mardia's kurtosis p(p + 2) is:", o:["2","6","4","8"], a:3, e:"2 × 4 = 8." },
 { t:"MANOVA & conditional independence", q:"If the eigenvalues of E⁻¹H are 1 and 0.5, Wilks' Λ is:", o:["0.333","1.5","0.667","0.5"], a:0, e:"Λ = 1/(1 + 1) × 1/(1 + 0.5) = 1/3." },
 { t:"MANOVA & conditional independence", q:"MANOVA tests the equality of:", o:["two proportions","mean vectors of several groups","variances of one variable","two correlations"], a:1, e:"It generalises ANOVA to several response variables." },
 { t:"MANOVA & conditional independence", q:"A zero entry in the precision matrix Σ⁻¹ means the two variables are:", o:["conditionally independent given all others","perfectly correlated","marginally independent","identical"], a:0, e:"This is the basis of covariance selection and conditional independence graphs." },
 { t:"MANOVA & conditional independence", q:"If ω₁₂ = −0.3 and ω₁₁ = ω₂₂ = 1, the partial correlation of X₁ and X₂ is:", o:["0.7","−0.3","0.09","0.3"], a:3, e:"ρ = −ω₁₂/√(ω₁₁ω₂₂) = 0.3." }
]},
{ id:"bio", name:"Biostatistics and Epidemiology", questions:[
 { t:"Survival data basics", q:"A patient is still alive at the end of the study. Their survival time is:", o:["uncensored","left truncated","right censored","an outlier to delete"], a:2, e:"We only know that survival exceeded the follow-up time." },
 { t:"Survival data basics", q:"The hazard function can be written as:", o:["h(t) = 1 − S(t)","h(t) = S(t)/f(t)","h(t) = F(t)/S(t)","h(t) = f(t)/S(t)"], a:3, e:"h(t) = f(t)/S(t) = −d ln S/dt." },
 { t:"Survival data basics", q:"For an exponential distribution with λ = 0.1, S(5) is:", o:["0.905","0.5","0.393","0.607"], a:3, e:"e^(−0.5) = 0.607." },
 { t:"Nonparametric methods", q:"In Kaplan–Meier for 5 subjects with the first death at t = 2, Ŝ(2) is:", o:["0.6","0.5","0.2","0.8"], a:3, e:"1 − 1/5 = 0.8." },
 { t:"Nonparametric methods", q:"Times: 2, 3⁺, 5, 7⁺, 8 (⁺ = censored). The Kaplan–Meier Ŝ just after t = 5 is:", o:["0.4","0.533","0.6","0.667"], a:1, e:"0.8 × (1 − 1/3) = 0.533 (3 at risk at t = 5)." },
 { t:"Nonparametric methods", q:"The Nelson–Aalen estimator estimates the:", o:["density","cumulative hazard Σdᵢ/nᵢ","median","mean"], a:1, e:"Ĥ(t) = Σ dᵢ/nᵢ." },
 { t:"Nonparametric methods", q:"Log-rank test with O₁ = 10, E₁ = 6.5 and V = 3.5. At the 5% level (critical 3.84):", o:["χ² = 3.5, significant","χ² = 12.25, significant","χ² = 7, significant","χ² = 3.5, not significant"], a:3, e:"(10 − 6.5)²/3.5 = 3.5 &lt; 3.84." },
 { t:"Parametric & Cox models", q:"With 5 events and a total follow-up of 50 person-years, the exponential MLE of λ is:", o:["10","0.1","0.01","0.5"], a:1, e:"λ̂ = d/Σt = 5/50 = 0.1." },
 { t:"Parametric & Cox models", q:"A Weibull distribution with shape γ &gt; 1 has a hazard that is:", o:["increasing","zero","constant","decreasing"], a:0, e:"h(t) ∝ t^(γ−1) increases when γ &gt; 1." },
 { t:"Parametric & Cox models", q:"In a Cox model β = 0.693 for treatment. The hazard ratio is:", o:["2","0.5","1","0.693"], a:0, e:"HR = e^β = 2." },
 { t:"Epidemiological concepts", q:"John Snow's study of cholera in 1854 traced the outbreak to:", o:["a contaminated water pump","food imports","air pollution","a school"], a:0, e:"The Broad Street pump in London." },
 { t:"Epidemiological concepts", q:"Prevalence is:", o:["all existing cases in a population at a given time divided by the population","deaths divided by cases","new cases per person-time","cases per control"], a:0, e:"It is a proportion at a point (or period) of time." },
 { t:"Epidemiological concepts", q:"If the incidence is 0.02 per year and the mean duration is 5 years, the prevalence is about:", o:["0.25","0.004","0.10","0.02"], a:2, e:"P ≈ I × D = 0.1." },
 { t:"Study designs", q:"In a case-control study the usual measure of association is the:", o:["incidence rate","odds ratio","prevalence","relative risk"], a:1, e:"Case-control studies fix the numbers of cases and controls, so only the OR is valid." },
 { t:"Study designs", q:"A study that follows exposed and unexposed groups forward in time to compare incidence is a:", o:["cross-sectional survey","cohort study","case-control study","case report"], a:1, e:"Cohort studies follow groups defined by exposure." },
 { t:"Measures of association", q:"Exposed: 30 of 100 diseased. Unexposed: 10 of 100 diseased. The relative risk is:", o:["2","20","3","0.33"], a:2, e:"0.30/0.10 = 3." },
 { t:"Measures of association", q:"Sensitivity of a test is:", o:["P(no disease | test negative)","P(test positive | disease)","P(disease | test positive)","P(test negative | no disease)"], a:1, e:"The true positive rate among the diseased." },
 { t:"Measures of association", q:"100 diseased (90 test positive) and 200 healthy (160 test negative). The positive predictive value is:", o:["0.69","0.90","0.45","0.80"], a:0, e:"TP = 90, FP = 40; PPV = 90/130 = 0.69." },
 { t:"McNemar test & regression", q:"Discordant pairs b = 25 and c = 10. McNemar's χ² is:", o:["6.43","15","1.0","2.5"], a:0, e:"(25 − 10)²/35 = 6.43." },
 { t:"McNemar test & regression", q:"In logistic regression a coefficient β₁ = 0.693 means the odds ratio per unit increase of x is:", o:["0.5","1.5","0.693","2"], a:3, e:"e^0.693 = 2." }
]},
{ id:"glm", name:"Generalized Linear Models", questions:[
 { t:"Components & link functions", q:"The three components of a generalized linear model are:", o:["likelihood, prior and posterior","random component, systematic component and link function","mean, median and mode","x, y and z"], a:1, e:"The distribution of y, the linear predictor η = Xβ and the link g(μ) = η." },
 { t:"Components & link functions", q:"The ordinary linear regression model is a GLM with:", o:["binomial distribution and logit link","Poisson distribution and log link","normal distribution and identity link","gamma distribution and inverse link"], a:2, e:"μ = η with normal errors." },
 { t:"Components & link functions", q:"In the logit link model, η = 0 corresponds to a mean μ equal to:", o:["0.5","1","0.73","0"], a:0, e:"μ = e⁰/(1 + e⁰) = 0.5." },
 { t:"Components & link functions", q:"In a Poisson model with a log link and η = 1, the mean μ is:", o:["2.718","10","0","1"], a:0, e:"μ = e¹ = 2.718." },
 { t:"Exponential family", q:"The canonical link for the Poisson distribution is the:", o:["logit link","identity link","inverse link","log link"], a:3, e:"θ = ln μ is the canonical parameter." },
 { t:"Exponential family", q:"The canonical link for the binomial (Bernoulli) distribution is the:", o:["logit link","log link","probit link","identity link"], a:0, e:"θ = ln[p/(1 − p)]." },
 { t:"Exponential family", q:"The variance function V(μ) of the Poisson distribution is:", o:["μ²","μ","μ(1 − μ)","1"], a:1, e:"Var(Y) = μ." },
 { t:"Exponential family", q:"The variance function of the gamma distribution is:", o:["1","μ³","μ","μ²"], a:3, e:"For gamma, Var = φμ²." },
 { t:"Estimation: score, information & IRLS", q:"The score function is U = ∂l/∂β. Its expected value at the true β is:", o:["β","0","the information","1"], a:1, e:"E[U] = 0 under regularity conditions." },
 { t:"Estimation: score, information & IRLS", q:"The Fisher information matrix of a GLM is:", o:["XᵀX only","XᵀWX","WX","(XᵀX)⁻¹"], a:1, e:"W is a diagonal matrix of weights." },
 { t:"Estimation: score, information & IRLS", q:"For a Poisson model with a log link, the IRLS weights wᵢ equal:", o:["μᵢ²","1","1/μᵢ","μᵢ"], a:3, e:"W = 1/[V(μ)g′(μ)²] = μ for the log link." },
 { t:"Estimation: score, information & IRLS", q:"The MLE of the intercept-only Poisson model for y = (2, 4, 3) is μ̂ =", o:["2","3","4","9"], a:1, e:"μ̂ = ȳ = 3." },
 { t:"Deviance & goodness of fit", q:"The deviance of a GLM is defined as:", o:["−2 l_model only","l_model − l_null","SSE/n","2(l_saturated − l_model)"], a:3, e:"Twice the log-likelihood difference between the saturated and fitted models." },
 { t:"Deviance & goodness of fit", q:"For nested models the deviance drops by 7.2 with 1 extra parameter. At the 1% level (critical 6.63):", o:["not significant","the models are identical","significant improvement","cannot be said"], a:2, e:"7.2 &gt; 6.63." },
 { t:"Deviance & goodness of fit", q:"A model with log-likelihood −50 and 3 parameters has AIC:", o:["103","150","100","106"], a:3, e:"AIC = −2l + 2k = 100 + 6 = 106." },
 { t:"Deviance & goodness of fit", q:"With l = −50, k = 3 and n = 100, BIC = −2l + k ln n is about:", o:["113.8","106","100","103"], a:0, e:"100 + 3(4.605) = 113.8." },
 { t:"Deviance & goodness of fit", q:"The Hosmer–Lemeshow test is used for the goodness of fit of a:", o:["logistic regression model","survival curve","Poisson model","linear model"], a:0, e:"It compares observed and expected events in groups of predicted risk." },
 { t:"Poisson regression & overdispersion", q:"In a Poisson regression with β₁ = 0.405, the rate ratio per unit of x is about:", o:["0.405","1.0","2.0","1.5"], a:3, e:"e^0.405 = 1.5." },
 { t:"Poisson regression & overdispersion", q:"Pearson χ² = 60 with 40 residual df. The estimated dispersion parameter is:", o:["40","0.67","1.5","60"], a:2, e:"φ̂ = 60/40 = 1.5, which suggests overdispersion." },
 { t:"GEE & mixed models", q:"In GEE the estimates of β remain consistent even if the working correlation matrix is wrong, provided the mean model is correct and we use the:", o:["MLE variance","naive variance only","Bayesian variance","robust (sandwich) variance estimator"], a:3, e:"The sandwich variance corrects for misspecified correlation." }
]}
);

MOCKS.push(
{ id:"mva", name:"Multivariate Analysis", minutes:30, questions:[
 { q:"A non-central t statistic has the form:", o:["(Z + δ)/√(χ²ᵥ/ν)","Z + χ²","χ²/Z","Z/√(χ²ᵥ/ν)"], a:0, e:"δ is the non-centrality parameter." },
 { q:"When λ = 0 a non-central chi-square distribution reduces to the:", o:["central chi-square distribution","F distribution","t distribution","normal distribution"], a:0, e:"No shift in the mean of the normal variables." },
 { q:"An idempotent matrix has trace 4. Its rank is:", o:["4","1","2","16"], a:0, e:"For an idempotent matrix rank = trace." },
 { q:"If x ~ N(0, I) then E(xᵀAx) equals:", o:["tr(A²)·n","A","det A","tr(A)"], a:3, e:"E(xᵀAx) = tr(AΣ) with Σ = I." },
 { q:"The sum of independent χ²₃ and χ²₅ variables is:", o:["t₈","χ²₈","χ²₂","χ²₁₅"], a:1, e:"Degrees of freedom add." },
 { q:"Any subset of components of a multivariate normal vector is:", o:["Poisson","non-normal","multivariate normal","uniform"], a:2, e:"Marginals of a MVN are MVN." },
 { q:"If (X₁, X₂) is bivariate normal with ρ = 0, then X₁ and X₂ are:", o:["dependent","identical","perfectly correlated","independent"], a:3, e:"For a MVN, uncorrelated implies independent." },
 { q:"For Σ = [[1, 0.5], [0.5, 1]] and a = (1, 1), the variance of X₁ + X₂ is:", o:["3","4","2","1"], a:0, e:"aᵀΣa = 1 + 1 + 2(0.5) = 3." },
 { q:"The contours of constant density of a multivariate normal are:", o:["random","squares","straight lines","ellipsoids"], a:3, e:"(x − μ)ᵀΣ⁻¹(x − μ) = c defines an ellipsoid." },
 { q:"With Σ = I, the Mahalanobis distance reduces to the:", o:["squared Euclidean distance","correlation","Manhattan distance","determinant"], a:0, e:"No scaling or correlation adjustment remains." },
 { q:"For p = 2 the 95th percentile of χ²₂ is 5.99. The proportion of a bivariate normal within the ellipse D² ≤ 5.99 is:", o:["0.99","0.05","0.5","0.95"], a:3, e:"D² ~ χ²₂." },
 { q:"A Wishart matrix arises as:", o:["the determinant of Σ","Σxᵢxᵢᵀ for n independent N(0, Σ) vectors","the mean vector","a correlation"], a:1, e:"It is the distribution of the SSCP matrix." },
 { q:"Hotelling's T² is used to test:", o:["regression slope only","a single proportion","a mean vector","a single variance"], a:2, e:"H₀: μ = μ₀ (or equal mean vectors in two samples)." },
 { q:"The two-sample Hotelling T² assumes:", o:["non-normal data","zero means","equal sample sizes only","equal covariance matrices"], a:3, e:"It uses the pooled covariance matrix." },
 { q:"Box's M test checks the equality of:", o:["covariance matrices","proportions","mean vectors","medians"], a:0, e:"It is the multivariate analogue of Bartlett's test." },
 { q:"Fisher's z-transformation of r = 0.6 gives about:", o:["0.693","0.36","0.6","1.2"], a:0, e:"½ ln(1.6/0.4) = ½ ln 4 = 0.693." },
 { q:"For Σ = [[4, 2], [2, 3]], the Cholesky factor L has lower-left element:", o:["0.5","1","√2","2"], a:1, e:"L = [[2, 0], [1, √2]]: l₂₁ = 2/2 = 1." },
 { q:"Pillai's trace for eigenvalues 1 and 0.5 is:", o:["1.5","0.833","0.333","0.5"], a:1, e:"1/2 + 0.5/1.5 = 0.833." },
 { q:"Wilks' Λ near 0 indicates:", o:["missing data","no group differences","strong differences between group mean vectors","equal covariances"], a:2, e:"Λ = |E|/|E + H| is small when H is large." },
 { q:"MANCOVA extends MANOVA by adding:", o:["random effects only","more error terms","covariates","a prior"], a:2, e:"It adjusts the multivariate response for continuous covariates." }
]},
{ id:"bio", name:"Biostatistics and Epidemiology", minutes:30, questions:[
 { q:"Type I censoring means the study:", o:["is random","ends after a fixed number of failures","ends at a fixed time","has no censoring"], a:2, e:"Observation stops at a pre-set time." },
 { q:"Type II censoring means the study:", o:["ends at a fixed time","stops after a pre-fixed number of failures","has no failures","never ends"], a:1, e:"Observation stops after the r-th failure." },
 { q:"The survival function S(t) is:", o:["constant","increasing with S(0) = 0","negative","non-increasing with S(0) = 1"], a:3, e:"It is the probability of surviving beyond t." },
 { q:"The exponential distribution has a hazard function that is:", o:["decreasing","increasing","zero","constant"], a:3, e:"h(t) = λ for all t." },
 { q:"The median survival time of an exponential with λ = 0.1 is about:", o:["0.69","6.93","5","10"], a:1, e:"ln 2/λ = 6.93." },
 { q:"With 10 at risk and 2 deaths at the first event time, the Kaplan–Meier Ŝ is:", o:["0.8","0.98","0.2","0.9"], a:0, e:"1 − 2/10 = 0.8." },
 { q:"The Kaplan–Meier estimator is a:", o:["smooth curve","straight line","step function","parabola"], a:2, e:"It changes only at event times." },
 { q:"Compared with the log-rank test, the Wilcoxon (Gehan) test gives more weight to:", o:["all times equally","censored times","early event times","late event times"], a:2, e:"Weights are the numbers at risk, which are largest early on." },
 { q:"The intraclass correlation with σ_b² = 4 and σ_e² = 12 is:", o:["0.5","0.33","0.25","0.75"], a:2, e:"4/(4 + 12) = 0.25." },
 { q:"For times 2, 3⁺, 5, 7⁺, 8, the Nelson–Aalen cumulative hazard at t = 5 is:", o:["1.0","0.533","0.2","0.8"], a:1, e:"1/5 + 1/3 = 0.533." },
 { q:"A Weibull distribution with shape γ = 1 is the:", o:["normal distribution","exponential distribution","uniform distribution","gamma with shape 2"], a:1, e:"h(t) = λ becomes constant." },
 { q:"The proportional hazards assumption means that the hazard ratio between two groups:", o:["increases with time","is always 1","is constant over time","is zero"], a:2, e:"h(t | x₁)/h(t | x₂) does not depend on t." },
 { q:"The incidence rate equals:", o:["cases/controls","new cases/person-time at risk","deaths/cases","all cases/population"], a:1, e:"It uses person-time in the denominator." },
 { q:"The ROC curve plots:", o:["cases against time","incidence against prevalence","specificity against PPV","sensitivity against 1 − specificity"], a:3, e:"Each cut-off gives a point (1 − Sp, Se)." },
 { q:"120 existing cases in a population of 2000 give a prevalence of:", o:["1.2%","12%","60%","6%"], a:3, e:"120/2000 = 0.06." },
 { q:"McNemar test with b = 25 and c = 10: compared with the critical value 3.84, the test is:", o:["invalid","significant (χ² = 6.43)","not significant (χ² = 6.43)","significant (χ² = 2.5)"], a:1, e:"(15)²/35 = 6.43 &gt; 3.84." },
 { q:"A retrospective cohort study uses:", o:["historical records to identify exposure and follow-up","only future data","only case reports","no records"], a:0, e:"The cohort and outcomes are already recorded in the past." },
 { q:"With a = 30, b = 70, c = 10 and d = 90, the odds ratio is about:", o:["3.0","3.86","9.0","0.26"], a:1, e:"ad/bc = 2700/700 = 3.86." },
 { q:"The attributable risk (risk difference) with 30% and 10% disease risks in exposed and unexposed is:", o:["3.0","0.20","0.40","0.67"], a:1, e:"0.30 − 0.10 = 0.20." },
 { q:"Specificity for 200 healthy people of whom 160 test negative is:", o:["0.20","0.90","0.80","0.69"], a:2, e:"TN/(TN + FP) = 160/200." }
]},
{ id:"glm", name:"Generalized Linear Models", minutes:30, questions:[
 { q:"The systematic component of a GLM is:", o:["the linear predictor η = Xβ","the error distribution","the deviance","the link function"], a:0, e:"It combines the covariates linearly." },
 { q:"The link function relates:", o:["y to x directly","the mean μ to the linear predictor","variance to mean","β to σ"], a:1, e:"g(μ) = η." },
 { q:"A GLM with normal errors and identity link is:", o:["Poisson regression","ordinary linear regression","survival regression","logistic regression"], a:1, e:"μ = Xβ." },
 { q:"The dispersion parameter φ of the Poisson distribution equals:", o:["1","μ","σ²","0"], a:0, e:"Variance equals the mean, so φ = 1." },
 { q:"In the exponential family form, E(Y) equals:", o:["c(y, φ)","θ","b″(θ)","b′(θ)"], a:3, e:"The first derivative of the cumulant function gives the mean." },
 { q:"For Poisson, b(θ) = e^θ. The mean is:", o:["θ²","1","e^θ","θ"], a:2, e:"μ = b′(θ) = e^θ." },
 { q:"The canonical parameter of Bernoulli(p = 0.8) is ln[p/(1 − p)] =", o:["0.8","0.223","1.386","2"], a:2, e:"ln(0.8/0.2) = ln 4 = 1.386." },
 { q:"The odds ratio for β = 0.693 in logistic regression is:", o:["2","0.5","1.5","0.693"], a:0, e:"e^β = 2." },
 { q:"The exponential distribution is a special case of the:", o:["Poisson family","gamma family","binomial family","normal family"], a:1, e:"Gamma with shape 1; its variance function is μ²." },
 { q:"For Bernoulli data the MLE of p is:", o:["ȳ²","1 − ȳ","ȳ","median"], a:2, e:"The sample proportion." },
 { q:"For the canonical link, the observed and expected information matrices are:", o:["zero","equal","infinite","unrelated"], a:1, e:"Then Fisher scoring and Newton–Raphson coincide." },
 { q:"The IRLS working response is z = η + (y − μ)g′(μ). For a log link with y = 2, μ = 1 and η = 0, z =", o:["1","2","0","3"], a:0, e:"g′(μ) = 1/μ = 1, so z = 0 + (2 − 1) × 1 = 1." },
 { q:"One IRLS step for the intercept-only Poisson model with y = (2, 4, 3) starting from β = 0 gives β =", o:["1.1","0","3","2"], a:3, e:"μ = 1, W = 1, z = (1, 3, 2), mean z = 2." },
 { q:"β̂ = 0.8 with SE = 0.4. The Wald z statistic is:", o:["0.5","0.32","1.2","2"], a:3, e:"z = β̂/SE = 2." },
 { q:"The Pearson residual for y = 5 and μ̂ = 4 in a Poisson model is:", o:["0.5","2","1","0.25"], a:0, e:"(y − μ̂)/√μ̂ = 1/2." },
 { q:"Anscombe residuals are designed to be:", o:["always positive","integers","equal to y","approximately normally distributed"], a:3, e:"A transformation that makes the residual distribution close to normal." },
 { q:"McFadden's pseudo-R² with l_null = −69.3 and l_model = −50 is about:", o:["0.72","1.4","0.5","0.28"], a:3, e:"1 − (−50)/(−69.3) = 0.278." },
 { q:"Quasi-likelihood requires the specification of:", o:["only the mean–variance relationship","the full distribution","the prior","nothing"], a:0, e:"Var(Y) = φV(μ)." },
 { q:"In GEE, common working correlation structures include:", o:["mean and median","logit and probit","normal and Poisson","independence, exchangeable, AR(1) and unstructured"], a:3, e:"These describe correlation within a cluster." },
 { q:"In a random-intercept GLMM, the intraclass correlation with σ_b² = 4 and σ_e² = 12 (linear case) is:", o:["0.25","0.75","0.5","0.33"], a:0, e:"4/16 = 0.25." }
]}
);
