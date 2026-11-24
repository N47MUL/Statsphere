/* ============ 4th YEAR, 2nd SEMESTER (part 1): Multivariate Analysis, Biostatistics and Epidemiology ============ */
TOPICS.push(
{ id:"mva", name:"Multivariate Analysis", topics:[
 { title:"Non-Central Chi-Square, t and F Distributions", body:`
  <p>If \\(Z_{i}\\sim N(\\mu _{i}, 1)\\) are independent, then \\(\\sum Z_{i}^{2}\\) follows a <b>non-central chi-square</b> distribution \\(\\chi '^{2}(n, \\lambda )\\) with n df and <b>non-centrality parameter</b> \\(\\lambda =\\sum \\mu _{i}^{2}\\). When \\(\\lambda =0\\) it becomes the ordinary (central) \\(\\chi ^{2}\\).</p>
  <div class="formula">\\(\\displaystyle E[\\chi '^{2}(n, \\lambda)]=n+\\lambda \\quad ;\\quad \\mathrm{Var}=2(n+2\\lambda)\\)</div>
  <div class="formula">Non-central \\(\\displaystyle t:t'=\\frac{Z+\\delta}{\\sqrt{\\chi^{2}_{v}/\\nu}}\\quad ;\\quad \\mathrm{Non}\\)-central \\(\\displaystyle F:F'=\\frac{\\chi '^{2}_{m}\\frac{\\lambda}{m}}{\\chi^{2}_{n}/n}\\)</div>
  <p>These distributions describe the test statistic when the null hypothesis is <i>false</i>, so they are used to calculate the <b>power</b> of t, F and chi-square tests: power \\(=P\\)(statistic &gt; critical value | non-central distribution).</p>
  <p><b>Example:</b> \\(n=3\\) and \\(\\lambda =4\\): mean \\(=3+4=7\\) and variance \\(=2(3+8)=22\\). A larger \\(\\lambda\\) shifts the distribution to the right and increases the power.</p>
  <div class="note">Mistake: using the central distribution to find power. The power is always calculated from the non-central version.</div>`},
 { title:"Quadratic Forms & Cochran's Theorem", body:`
  <p>A <b>quadratic form</b> is \\(Q=x^{T}\\mathrm{Ax}\\) with A symmetric. If \\(x\\sim N_{n}(0, I)\\), then \\(Q\\sim \\chi ^{2}_{r}\\) iff A is <b>idempotent</b> \\((A^{2}=A)\\), and then \\(r=\\operatorname{rank}(A)=\\operatorname{tr}(A)\\).</p>
  <div class="formula">\\(\\displaystyle E(x^{T}\\mathrm{Ax})=\\operatorname{tr}(A\\Sigma)+\\mu^{T}A\\mu\\)  ;  for \\(\\displaystyle x\\sim N(0, \\sigma^{2}I):\\frac{x^{T}\\mathrm{Ax}}{\\sigma^{2}}\\sim \\chi^{2}_{r}\\) when A idempotent</div>
  <div class="formula">Cochran: if \\(\\displaystyle \\sum Q_{i}=x^{T}x, Q_{i}=x^{T}A_{i}x\\) and \\(\\displaystyle \\sum \\,\\operatorname{rank}(A_{i})=n\\), then the \\(\\displaystyle Q_{i}\\) are independent \\(\\displaystyle \\chi^{2}\\) with \\(\\displaystyle \\mathrm{df}=\\operatorname{rank}(A_{i})\\)</div>
  <p>Two quadratic forms \\(x^{T}\\mathrm{Ax}\\) and \\(x^{T}\\mathrm{Bx}\\) are independent iff \\(AB=0\\) (for \\(x\\sim N(0, I)\\)). This is the proof that x̄ and \\(s^{2}\\) are independent and that ANOVA sums of squares are independent chi-squares.</p>
  <p><b>Example:</b> \\(A=I-(1/n)11^{T}\\) is idempotent with rank = trace \\(=n-1\\), so \\(\\sum (x_{i}-\\bar{x})^{2}/\\sigma ^{2}\\sim \\chi ^{2}_{n-1}\\). Also \\(E(x^{T}\\mathrm{Ax})=\\sigma ^{2}\\operatorname{tr}(A)=(n-1)\\sigma ^{2}\\), which explains the divisor \\(n-1\\).</p>
  <div class="note">Mistake: forgetting to check idempotency. Without it, \\(x^{T}\\mathrm{Ax}\\) is not chi-square.</div>`},
 { title:"Multivariate Normal Distribution", body:`
  <p>A p-dimensional vector \\(X\\sim N_{p}(\\mu , \\Sigma )\\) has density \\(f(x)=(2\\pi )^{-p/2}|\\Sigma |^{-1/2}\\exp\\)[−½\\((x-\\mu )^{T}\\sum ^{-1}(x-\\mu )\\)], MGF exp(\\(t^{T}\\mu\\) + ½\\(t^{T}\\sum t\\)), and characteristic function exp(it\\(^{T}\\mu -\\) ½\\(t^{T}\\sum t\\)).</p>
  <div class="vis" data-vis="mvn"></div>
  <div class="formula">\\(\\displaystyle AX+b\\sim N(A\\mu +b, A\\sum A^{T})\\)  ;  any sub-vector is again multivariate normal</div>
  <div class="formula">\\(\\displaystyle X_{1}|X_{2}=x_{2}\\sim N(\\mu_{1}+\\sum_{12}\\sum_{22}^{-1}(x_{2}-\\mu_{2}), \\quad \\sum_{11}-\\sum_{12}\\sum_{22}^{-1}\\sum_{21})\\)</div>
  <p>For the multivariate normal, <b>zero covariance implies independence</b> (not true in general). The contours of constant density are ellipsoids and the conditional mean is linear in \\(x_{2}\\).</p>
  <p><b>Example:</b> Bivariate normal with \\(\\mu =(0, 0)\\), unit variances, \\(\\rho =0.6\\). \\(X_{1}|X_{2}=2\\) has mean \\(0.6\\times 2=1.2\\) and variance \\(1-0.36=0.64\\). For \\(a=(1, 1)\\) and \\(\\Sigma =[[1, 0.5], [0.5, 1]], \\mathrm{Var}(X_{1}+X_{2})=a^{T}\\sum a=1+1+2(0.5)=3\\).</p>
  <div class="note">Mistake: normal marginals do not make the joint distribution multivariate normal, because the joint can fail even if every marginal is normal.</div>`},
 { title:"Mahalanobis Distance, Wishart & Hotelling's T²", body:`
  <p>The <b>Mahalanobis squared distance</b> \\(D^{2}=(x-\\mu )^{T}\\sum ^{-1}(x-\\mu )\\) accounts for correlation and scale. For \\(x\\sim N_{p}(\\mu , \\Sigma ), D^{2}\\sim \\chi ^{2}_{p}\\). With \\(\\Sigma =I\\) it is the squared Euclidean distance.</p>
  <p>The <b>Wishart distribution</b> \\(W_{p}(n, \\Sigma )\\) is the distribution of \\(\\sum _{i}x_{i}x_{i}^{T}\\) for n independent \\(N_{p}(0, \\Sigma )\\) vectors, the multivariate version of \\(\\chi ^{2}\\). The sample covariance matrix S satisfies \\((n-1)S\\sim W_{p}(n-1, \\Sigma )\\).</p>
  <div class="formula">Hotelling\\(\\displaystyle 'sT^{2}=n(\\bar{x}-\\mu_{0})^{T}S^{-1}(\\bar{x}-\\mu_{0})\\quad ;\\quad [\\frac{n-p}{p(n-1)}]\\cdot T^{2}\\sim F(p, n-p)\\)</div>
  <div class="formula">Two samples: \\(\\displaystyle T^{2}=[n_{1}\\frac{n_{2}}{n_{1}+n_{2}}](\\bar{x}_{1}-\\bar{x}_{2})^{T}S_{p}^{-1}(\\bar{x}_{1}-\\bar{x}_{2})\\)  (equal covariance matrices assumed)</div>
  <p>For \\(p=1, T^{2}=t^{2}\\). \\(T^{2}\\) tests whether the mean vector equals \\(\\mu _{0}\\), using all p variables jointly (keeping the overall Type I error right).</p>
  <p><b>Example:</b> \\(x=(2, 1), \\mu =0, \\Sigma =[[1, 0.5], [0.5, 1]]:\\det \\,\\Sigma =0.75\\) and \\(D^{2}=(x_{1}^{2}-x_{1}x_{2}+x_{2}^{2})/0.75=(4-2+1)/0.75=4\\). For \\(p=2, n=20, T^{2}=10:F=[18/(2\\times 19)]\\times 10=4.74>F_{0}._{05}(2, 18)=3.55\\), so reject \\(H_{0}:\\mu =\\mu _{0}\\).</p>
  <div class="note">Mistake: running p separate t-tests instead of \\(T^{2}\\) inflates the Type I error and ignores correlations.</div>`},
 { title:"Tests for Covariance, Correlation & Multivariate Normality", body:`
  <p><b>Covariance tests</b> are based on likelihood ratio statistics: \\(H_{0}:\\Sigma =\\sum _{0}\\); <b>Bartlett's sphericity test</b> checks \\(H_{0}:R=I\\) (all correlations zero, used before factor analysis); <b>Box's M test</b> checks equality of the covariance matrices of several groups. A single correlation is tested using Fisher's transformation z = ½ \\(\\ln [(1+r)/(1-r)]\\), which is approximately \\(N(z_{\\rho }, 1/(n-3))\\).</p>
  <p><b>Multivariate normality:</b> (1) check each variable's Q–Q plot; (2) a chi-square Q–Q plot of the Mahalanobis distances \\(D_{i}^{2}\\) against \\(\\chi ^{2}_{p}\\) quantiles should be a straight line; (3) <b>Mardia's</b> skewness and kurtosis: under normality the kurtosis has expected value \\(p(p+2)\\).</p>
  <p><b>Simulation:</b> to simulate \\(X\\sim N_{p}(\\mu , \\Sigma )\\), write \\(\\Sigma =LL^{T}\\) (Cholesky), generate \\(z\\sim N(0, I)\\) and set \\(x=\\mu +\\mathrm{Lz}\\).</p>
  <p><b>Example:</b> \\(\\Sigma =[[4, 2], [2, 3]]:L=[[2, 0], [1, \\sqrt{2}]]\\) since \\(LL^{T}=[[4, 2], [2, 1+2]]\\) ✓. For \\(r=0.6, z\\) = ½ \\(\\ln (1.6/0.4)\\) = ½ \\(\\ln \\,4=0.693\\). For \\(p=2\\), Mardia's expected kurtosis \\(=2\\times 4=8\\).</p>
  <div class="note">Mistake: concluding multivariate normality from univariate normality of each variable.</div>`},
 { title:"Multivariate Linear Models, MANOVA & Conditional Independence Graphs", body:`
  <p>The multivariate linear model is \\(Y=XB+E\\), where Y is \\(n\\times p\\), with rows of E independent \\(N_{p}(0, \\Sigma )\\). <b>Multivariate regression</b> estimates \\(\\hat{B}=(X^{T}X)^{-1}X^{T}Y\\), column by column. <b>MANOVA</b> compares group mean vectors using the hypothesis (H) and error (E) SSCP matrices; <b>MANCOVA</b> adds covariates.</p>
  <div class="formula">Wilks\\(\\displaystyle '\\Lambda =|E|/|E+H|=\\Pi \\frac{1}{1+\\lambda_{i}}\\)  ;  Pillai's trace \\(\\displaystyle =\\sum \\frac{\\lambda_{i}}{1+\\lambda_{i}}\\quad ;\\quad \\lambda_{i}\\) = eigenvalues of \\(\\displaystyle E^{-1}H\\)</div>
  <p>Roy's largest root uses \\(\\max \\,\\lambda _{i}\\) and Hotelling–Lawley trace uses \\(\\sum \\lambda _{i}\\). Small \\(\\Lambda\\) means groups differ.</p>
  <p><b>Covariance selection</b> (Dempster): zeros in the <b>precision matrix</b> \\(\\Omega =\\sum ^{-1}\\) mean the two variables are <b>conditionally independent</b> given all the others. The <b>conditional independence graph</b> joins two variables by an edge only if \\(\\omega _{ij}\\ne 0\\). The partial correlation is \\(\\rho _{ij}\\cdot\\)rest \\(=-\\omega _{ij}/\\sqrt{\\omega _{ii}\\omega _{jj}}\\). For a <b>conditional Gaussian distribution</b> (mixed discrete and continuous variables) the continuous variables are normal given the discrete ones.</p>
  <p><b>Example:</b> Eigenvalues of \\(E^{-1}H\\) are 1 and \\(0.5:\\Lambda =(1/2)(1/1.5)=0.333\\); Pillai \\(=1/2+0.5/1.5=0.833\\). If \\(\\omega _{12}=-0.3\\) and \\(\\omega _{11}=\\omega _{22}=1\\), partial correlation \\(=0.3\\).</p>
  <div class="note">Mistake: zeros in \\(\\Sigma\\) itself mean marginal independence, but zeros in \\(\\sum ^{-1}\\) mean conditional independence. They are different.</div>`}
]},
{ id:"bio", name:"Biostatistics and Epidemiology", topics:[
 { title:"Survival Data: Censoring, Survival & Hazard Functions", body:`
  <p>Survival data record the time to an event (death, relapse, failure). Some times are <b>censored</b>: the exact time is unknown. <b>Right censoring</b> is most common; <b>Type I</b>: study ends at a fixed time; <b>Type II</b>: study stops after a fixed number of failures; <b>random censoring</b>: subjects drop out at random times. <b>Truncation</b> means subjects are only observed if their event time lies in a window (left truncation: delayed entry).</p>
  <div class="formula">\\(\\displaystyle S(t)=P(T>t)=1-F(t)\\quad ;\\quad h(t)=f\\frac{t}{S(t)}\\quad ;\\quad H(t)=-\\ln \\,S(t)\\)  ;  mean residual life \\(\\displaystyle m(t)=E(T-t|T>t)\\)</div>
  <p>\\(S(t)\\) is non-increasing with \\(S(0)=1\\). The hazard \\(h(t)\\) is the instantaneous risk of the event at t given survival to t.</p>
  <p><b>Example:</b> Exponential with \\(\\lambda =0.1:S(t)=e^{-0.1t}, S(5)=0.607, h(t)=0.1\\) (constant), median \\(=\\ln \\,2/0.1=6.93\\), mean residual life \\(=10\\) at every t (memoryless).</p>
  <div class="note">Mistake: dropping censored observations or treating them as events. Both bias the estimates; censored times carry the information that survival exceeded that time.</div>`},
 { title:"Nonparametric Methods: Kaplan–Meier, Nelson–Aalen, Life Table & Log-Rank", body:`
  <p>The <b>Kaplan–Meier (product-limit) estimator</b> multiplies conditional survival probabilities at each event time: \\(\\hat{S}(t)=\\Pi (1-d_{i}/n_{i})\\), where \\(d_{i}\\) = deaths and \\(n_{i}\\) = number at risk just before \\(t_{i}\\). It is a step function and handles censoring.</p>
  <div class="vis" data-vis="km"></div>
  <div class="formula">Nelson–Aalen: \\(\\displaystyle \\hat{H}(t)=\\sum \\frac{d_{i}}{n_{i}}\\quad ;\\quad \\hat{S}=\\exp (-\\hat{H})\\quad ;\\quad \\mathrm{Log}-\\operatorname{rank}:\\chi^{2}=\\frac{(O_{1}-E_{1})^{2}}{V}, \\quad E_{1}=\\sum d_{i}\\frac{n_{1i}}{n_{i}}\\)</div>
  <p>The <b>life-table method</b> groups the time into intervals and is used for large grouped data. <b>Log-rank</b> gives equal weight to all event times; the <b>Wilcoxon (Gehan)</b> test weights each time by the number at risk, so early differences count more.</p>
  <p><b>Example:</b> Times \\(2, 3^{+}, 5, 7^{+}, 8\\) (⁺ = censored). At \\(t=2:n=5, d=1:\\hat{S}=0.8\\). At \\(t=5:n=3:\\hat{S}=0.8\\times (1-1/3)=0.533\\). At \\(t=8:n=1:\\hat{S}=0\\). Nelson–Aalen at \\(t=5:\\hat{H}=1/5+1/3=0.533\\). Log-rank with \\(O_{1}=10, E_{1}=6.5, V=3.5:\\chi ^{2}=12.25/3.5=3.5&lt;3.84\\), not significant at 5%.</p>
  <div class="note">Mistake: a curve with few subjects at risk at the right tail is unreliable. Always report numbers at risk.</div>`},
 { title:"Parametric & Semi-Parametric Methods: Exponential, Weibull & Cox", body:`
  <p>The likelihood with censoring is \\(L=\\Pi f(t_{i})^{\\delta _{i}}S(t_{i})^{1-\\delta _{i}}\\), where \\(\\delta _{i}=1\\) for an event and 0 for censored.</p>
  <div class="formula">Exponential: λ̂ \\(\\displaystyle =\\frac{d}{\\sum} t_{i}\\)  (events / total time at risk)  ;  Weibull: \\(\\displaystyle S(t)=\\exp [-(\\lambda t)^{\\gamma}], \\quad h(t)=\\lambda \\gamma (\\lambda t)^{\\gamma -1}\\)</div>
  <p>Weibull: \\(\\gamma >1\\) increasing hazard, \\(\\gamma &lt;1\\) decreasing, \\(\\gamma =1\\) exponential. The <b>Cox proportional hazards model</b> is semi-parametric: \\(h(t|x)=h_{0}(t)\\cdot \\exp (\\beta ^{T}x)\\), with the baseline \\(h_{0}(t)\\) unspecified; \\(\\beta\\) is estimated from the <b>partial likelihood</b>. \\(\\exp (\\beta )\\) is the <b>hazard ratio</b>, assumed constant over time (the proportional hazards assumption).</p>
  <p><b>Example:</b> 5 events in a total of 50 person-years: λ̂ \\(=5/50=0.1\\) per year. If \\(\\beta =0.693\\) for treatment, \\(HR=e^{0.693}=2\\): the hazard is doubled.</p>
  <div class="note">Mistake: interpreting a hazard ratio as a ratio of survival times, and not checking the proportional hazards assumption.</div>`},
 { title:"Epidemiological Concepts & Sources of Community Health Data", body:`
  <p><b>Epidemiology</b> studies the distribution and determinants of health-related states in populations. History: John Snow (1854) traced a cholera outbreak in London to the Broad Street water pump. Terms: <b>endemic</b> (constantly present), <b>epidemic</b> (excess in a region), <b>pandemic</b> (worldwide), outbreak, risk factor, host–agent–environment.</p>
  <div class="formula">Prevalence = existing cases/population at a time  ;  Incidence rate = new cases/person-time  ;  \\(\\displaystyle P\\approx I\\times D\\) (stable condition)</div>
  <p><b>Data sources:</b> censuses (population denominators), <b>vital statistics</b> (registration of births and deaths), <b>morbidity data</b> (hospital records, notifiable diseases, disease registries) and health surveys.</p>
  <p><b>Example:</b> 50 new cases among 1000 people at risk in a year: cumulative incidence \\(=5\\)%. 120 existing cases in 2000 people: prevalence \\(=6\\)%. If \\(I=0.02\\) per year and the average duration \\(D=5\\) years, \\(P\\approx 0.10\\).</p>
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
  <p>For \\(a2\\times 2\\) table (exposed: a diseased, b not; unexposed: c diseased, d not):</p>
  <div class="formula">\\(\\displaystyle RR=[\\frac{a}{a+b}]/[\\frac{c}{c+d}]\\quad ;\\quad OR=\\frac{ad}{bc}\\)  ;  Attributable risk \\(\\displaystyle =I_{e}-I_{u}\\quad ;\\quad AF\\)(exposed) \\(\\displaystyle =\\frac{RR-1}{RR}\\)</div>
  <p>The <b>prevalence ratio</b> is the RR computed from prevalence. \\(OR\\approx RR\\) when the disease is rare.</p>
  <div class="vis" data-vis="roc"></div>
  <div class="formula">Sensitivity \\(\\displaystyle =\\frac{\\mathrm{TP}}{\\mathrm{TP}+\\mathrm{FN}}\\)  ;  Specificity \\(\\displaystyle =\\frac{\\mathrm{TN}}{\\mathrm{TN}+\\mathrm{FP}}\\quad ;\\quad \\mathrm{PPV}=\\frac{\\mathrm{TP}}{\\mathrm{TP}+\\mathrm{FP}}\\quad ;\\quad \\mathrm{LR}^{+}=\\frac{\\mathrm{Se}}{1-\\mathrm{Sp}}\\)</div>
  <p>The <b>ROC curve</b> plots sensitivity against \\(1-\\) specificity for all cut-offs; the area under it (AUC) summarises diagnostic accuracy (0.5 = useless, 1 = perfect).</p>
  <p><b>Example (cohort):</b> exposed 30/100 diseased, unexposed \\(10/100:RR=3, AR=0.30-0.10=0.20, AF=2/3=66.7\\)%, \\(OR=(30\\times 90)/(70\\times 10)=3.86\\). <b>Diagnostic test:</b> 100 diseased (90 test positive), 200 healthy (160 test negative): \\(\\mathrm{Se}=0.90, \\mathrm{Sp}=0.80, \\mathrm{PPV}=90/130=0.69, \\mathrm{LR}^{+}=0.9/0.2=4.5\\).</p>
  <div class="note">Mistake: PPV depends on the prevalence, but sensitivity and specificity do not.</div>`},
 { title:"Correlated Proportions & McNemar Test", body:`
  <p>When the same subjects are measured twice (before/after) or matched pairs are used, binary outcomes are <b>correlated</b>. Arrange the pairs in \\(a2\\times 2\\) table; only the <b>discordant pairs</b> carry information: b = (+ then −) and c = (− then +).</p>
  <div class="formula">McNemar: \\(\\displaystyle \\chi^{2}=\\frac{(b-c)^{2}}{b+c}\\quad \\sim \\chi^{2}_{1}\\) under \\(\\displaystyle H_{0}\\): the marginal proportions are equal  ;  matched-pair \\(\\displaystyle OR=\\frac{b}{c}\\)</div>
  <p>With small \\(b+c\\) use the exact binomial test (\\(b\\sim \\mathrm{Bin}\\)(\\(b+c\\), ½) under \\(H_{0}\\)), or the continuity-corrected \\((|b-c|-1)^{2}/(b+c)\\).</p>
  <p><b>Example:</b> \\(b=25\\) and \\(c=10:\\chi ^{2}=15^{2}/35=6.43>3.84\\), so reject \\(H_{0}\\) at 5%: the treatment changed the proportion. Matched \\(OR=25/10=2.5\\).</p>
  <div class="note">Mistake: using the ordinary chi-square test of independence for paired data. It ignores the pairing.</div>`},
 { title:"Logistic & Poisson Regression, Correlated Data & Linear Mixed Models", body:`
  <p><b>Logistic regression:</b> logit\\((p)=\\ln [p/(1-p)]=\\beta _{0}+\\beta _{1}x\\). \\(\\exp (\\beta _{1})\\) is the odds ratio for a one-unit increase in x. <b>Poisson regression</b> models counts/rates: \\(\\ln \\,\\mu =\\beta _{0}+\\beta _{1}x+\\ln\\)(time at risk) (offset); \\(\\exp (\\beta _{1})\\) is the rate ratio.</p>
  <div class="formula">\\(\\displaystyle p=\\frac{1}{1+e^{-\\eta}}\\quad ;\\quad OR=e^{\\beta}\\quad ;\\quad RR=e^{\\beta}\\)  (Poisson)</div>
  <p><b>Correlated data</b> (repeated measures, clusters) violate independence. A <b>linear mixed model</b> adds random effects: \\(y_{ij}=x_{ij}^{T}\\beta +b_{i}+e_{ij}\\), with \\(b_{i}\\sim N(0, \\sigma _{b}^{2})\\) and \\(e_{ij}\\sim N(0, \\sigma _{e}^{2})\\). The intraclass correlation is \\(\\mathrm{ICC}=\\sigma _{b}^{2}/(\\sigma _{b}^{2}+\\sigma _{e}^{2})\\).</p>
  <p><b>Example:</b> \\(\\beta _{1}=0.693:OR=2\\). \\(\\beta _{0}=-2, \\beta _{1}=0.5, x=4:\\eta =0, p=0.5\\). Poisson \\(\\beta =0.405\\) gives rate ratio \\(e^{0.405}=1.5\\). If \\(\\sigma _{b}^{2}=4\\) and \\(\\sigma _{e}^{2}=12, \\mathrm{ICC}=4/16=0.25\\).</p>
  <div class="note">Mistake: ignoring correlation gives standard errors that are too small and false significance.</div>`}
]}
);

QUIZZES.push(
{ id:"mva", name:"Multivariate Analysis", questions:[
 { t:"Non-central distributions", q:"The mean of a non-central chi-square distribution with n df and non-centrality \\(\\lambda\\) is:", o:["2n","\\(\\lambda\\)","n","\\(n+\\lambda\\)"], a:3, e:"\\(E=n+\\lambda\\)." },
 { t:"Non-central distributions", q:"The variance of a non-central chi-square with \\(n=3\\) and \\(\\lambda =4\\) is:", o:["28","22","14","10"], a:1, e:"\\(\\mathrm{Var}=2(n+2\\lambda )=2(3+8)=22\\)." },
 { t:"Quadratic forms & Cochran's theorem", q:"If \\(x\\sim N(0, I)\\), the quadratic form \\(x^{T}\\mathrm{Ax}\\) is chi-square distributed iff A is:", o:["idempotent","singular","diagonal","symmetric only"], a:0, e:"\\(A^{2}=A\\) (and then \\(\\mathrm{df}=\\operatorname{rank}\\,A\\))." },
 { t:"Quadratic forms & Cochran's theorem", q:"The matrix \\(I-(1/n)11^{T}\\) has rank:", o:["n + 1","n","\\(n-1\\)","1"], a:2, e:"Its trace \\((n-1)\\) equals its rank because it is idempotent." },
 { t:"Quadratic forms & Cochran's theorem", q:"Cochran's theorem is used to show that sums of squares in ANOVA are:", o:["equal to zero","identical","independent chi-square variables","normal variables"], a:2, e:"With ranks adding up to n, the quadratic forms are independent \\(\\chi ^{2}\\)." },
 { t:"Multivariate normal distribution", q:"If \\(X\\sim N_{p}(\\mu , \\Sigma )\\), then \\(AX\\sim\\)", o:["\\(N(A\\mu , \\Sigma )\\)","\\(N(\\mu , \\Sigma )\\)","\\(N(A\\mu , A\\sum A^{T})\\)","\\(N(0, AA^{T})\\)"], a:2, e:"Linear transformations of normals are normal." },
 { t:"Multivariate normal distribution", q:"For the multivariate normal, zero covariance between two components implies:", o:["nothing","dependence","independence","they are equal"], a:2, e:"This special property holds for the multivariate normal." },
 { t:"Multivariate normal distribution", q:"For a bivariate normal with unit variances and \\(\\rho =0.6, E(X_{1}|X_{2}=2)\\) is:", o:["0.8","2","0.6","1.2"], a:3, e:"\\(E=\\rho x_{2}=0.6\\times 2=1.2\\)." },
 { t:"Multivariate normal distribution", q:"For the same bivariate normal, \\(\\mathrm{Var}(X_{1}|X_{2}=2)\\) is:", o:["0.6","0.36","0.64","1"], a:2, e:"\\(1-\\rho ^{2}=0.64\\)." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"\\(x=(2, 1), \\mu =0\\) and \\(\\Sigma =[[1, 0.5], [0.5, 1]]\\). The Mahalanobis \\(D^{2}\\) is:", o:["4","1","5","3"], a:0, e:"\\(D^{2}=(x_{1}^{2}-x_{1}x_{2}+x_{2}^{2})/0.75=3/0.75=4\\)." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"For \\(x\\sim N_{p}(\\mu , \\Sigma )\\), the quantity \\((x-\\mu )^{T}\\sum ^{-1}(x-\\mu )\\) follows:", o:["N(0, p)","F(p, 1)","\\(\\chi ^{2}\\) with p df","t with p df"], a:2, e:"It is the sum of p squared independent standard normals." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"For \\(p=2, n=20\\) and \\(T^{2}=10\\), the F statistic \\([(n-p)/(p(n-1))]T^{2}\\) is:", o:["4.74","9.5","10","2.0"], a:0, e:"\\((18/38)\\times 10=4.74\\)." },
 { t:"Mahalanobis, Wishart & Hotelling T²", q:"The Wishart distribution is the multivariate generalisation of the:", o:["normal distribution","t distribution","Poisson distribution","chi-square distribution"], a:3, e:"\\(W_{1}(n, \\sigma ^{2})=\\sigma ^{2}\\chi ^{2}_{n}\\)." },
 { t:"Tests & simulation", q:"Bartlett's sphericity test tests the hypothesis that:", o:["the correlation matrix is the identity","the data are normal","the covariance matrices are equal across groups","the means are equal"], a:0, e:"All variables are uncorrelated \\((R=I)\\)." },
 { t:"Tests & simulation", q:"To simulate \\(X\\sim N(\\mu , \\Sigma )\\) we use \\(x=\\mu +\\mathrm{Lz}\\) where \\(\\Sigma =LL^{T}\\), which is the:", o:["Cholesky factor","identity","trace of \\(\\Sigma\\)","inverse of \\(\\Sigma\\)"], a:0, e:"Cholesky decomposition provides L." },
 { t:"Tests & simulation", q:"Under multivariate normality with \\(p=2\\), the expected value of Mardia's kurtosis \\(p(p+2)\\) is:", o:["2","6","4","8"], a:3, e:"\\(2\\times 4=8\\)." },
 { t:"MANOVA & conditional independence", q:"If the eigenvalues of \\(E^{-1}H\\) are 1 and 0.5, Wilks\\('\\Lambda\\) is:", o:["0.333","1.5","0.667","0.5"], a:0, e:"\\(\\Lambda =1/(1+1)\\times 1/(1+0.5)=1/3\\)." },
 { t:"MANOVA & conditional independence", q:"MANOVA tests the equality of:", o:["two proportions","mean vectors of several groups","variances of one variable","two correlations"], a:1, e:"It generalises ANOVA to several response variables." },
 { t:"MANOVA & conditional independence", q:"A zero entry in the precision matrix \\(\\sum ^{-1}\\) means the two variables are:", o:["conditionally independent given all others","perfectly correlated","marginally independent","identical"], a:0, e:"This is the basis of covariance selection and conditional independence graphs." },
 { t:"MANOVA & conditional independence", q:"If \\(\\omega _{12}=-0.3\\) and \\(\\omega _{11}=\\omega _{22}=1\\), the partial correlation of \\(X_{1}\\) and \\(X_{2}\\) is:", o:["0.7","\\(-0.3\\)","0.09","0.3"], a:3, e:"\\(\\rho =-\\omega _{12}/\\sqrt{\\omega _{11}\\omega _{22}}=0.3\\)." }
]},
{ id:"bio", name:"Biostatistics and Epidemiology", questions:[
 { t:"Survival data basics", q:"A patient is still alive at the end of the study. Their survival time is:", o:["uncensored","left truncated","right censored","an outlier to delete"], a:2, e:"We only know that survival exceeded the follow-up time." },
 { t:"Survival data basics", q:"The hazard function can be written as:", o:["\\(h(t)=1-S(t)\\)","\\(h(t)=S(t)/f(t)\\)","\\(h(t)=F(t)/S(t)\\)","\\(h(t)=f(t)/S(t)\\)"], a:3, e:"\\(h(t)=f(t)/S(t)=-d\\,\\ln \\,S/\\,\\mathrm{d}t\\)." },
 { t:"Survival data basics", q:"For an exponential distribution with \\(\\lambda =0.1, S(5)\\) is:", o:["0.905","0.5","0.393","0.607"], a:3, e:"\\(e^{-0.5}=0.607\\)." },
 { t:"Nonparametric methods", q:"In Kaplan–Meier for 5 subjects with the first death at \\(t=2, \\hat{S}(2)\\) is:", o:["0.6","0.5","0.2","0.8"], a:3, e:"\\(1-1/5=0.8\\)." },
 { t:"Nonparametric methods", q:"Times: \\(2, 3^{+}, 5, 7^{+}, 8\\) (⁺ = censored). The Kaplan–Meier Ŝ just after \\(t=5\\) is:", o:["0.4","0.533","0.6","0.667"], a:1, e:"\\(0.8\\times (1-1/3)=0.533\\) (3 at risk at \\(t=5\\))." },
 { t:"Nonparametric methods", q:"The Nelson–Aalen estimator estimates the:", o:["density","cumulative hazard \\(\\sum d_{i}/n_{i}\\)","median","mean"], a:1, e:"\\(\\hat{H}(t)=\\sum d_{i}/n_{i}\\)." },
 { t:"Nonparametric methods", q:"Log-rank test with \\(O_{1}=10, E_{1}=6.5\\) and \\(V=3.5\\). At the 5% level (critical 3.84):", o:["\\(\\chi ^{2}=3.5\\), significant","\\(\\chi ^{2}=12.25\\), significant","\\(\\chi ^{2}=7\\), significant","\\(\\chi ^{2}=3.5\\), not significant"], a:3, e:"\\((10-6.5)^{2}/3.5=3.5&lt;3.84\\)." },
 { t:"Parametric & Cox models", q:"With 5 events and a total follow-up of 50 person-years, the exponential MLE of \\(\\lambda\\) is:", o:["10","0.1","0.01","0.5"], a:1, e:"λ̂ \\(=d/\\sum t=5/50=0.1\\)." },
 { t:"Parametric & Cox models", q:"A Weibull distribution with shape \\(\\gamma >1\\) has a hazard that is:", o:["increasing","zero","constant","decreasing"], a:0, e:"\\(h(t)\\propto t^{\\gamma -1}\\) increases when \\(\\gamma >1\\)." },
 { t:"Parametric & Cox models", q:"In a Cox model \\(\\beta =0.693\\) for treatment. The hazard ratio is:", o:["2","0.5","1","0.693"], a:0, e:"\\(HR=e^{\\beta }=2\\)." },
 { t:"Epidemiological concepts", q:"John Snow's study of cholera in 1854 traced the outbreak to:", o:["a contaminated water pump","food imports","air pollution","a school"], a:0, e:"The Broad Street pump in London." },
 { t:"Epidemiological concepts", q:"Prevalence is:", o:["all existing cases in a population at a given time divided by the population","deaths divided by cases","new cases per person-time","cases per control"], a:0, e:"It is a proportion at a point (or period) of time." },
 { t:"Epidemiological concepts", q:"If the incidence is 0.02 per year and the mean duration is 5 years, the prevalence is about:", o:["0.25","0.004","0.10","0.02"], a:2, e:"\\(P\\approx I\\times D=0.1\\)." },
 { t:"Study designs", q:"In a case-control study the usual measure of association is the:", o:["incidence rate","odds ratio","prevalence","relative risk"], a:1, e:"Case-control studies fix the numbers of cases and controls, so only the OR is valid." },
 { t:"Study designs", q:"A study that follows exposed and unexposed groups forward in time to compare incidence is a:", o:["cross-sectional survey","cohort study","case-control study","case report"], a:1, e:"Cohort studies follow groups defined by exposure." },
 { t:"Measures of association", q:"Exposed: 30 of 100 diseased. Unexposed: 10 of 100 diseased. The relative risk is:", o:["2","20","3","0.33"], a:2, e:"\\(0.30/0.10=3\\)." },
 { t:"Measures of association", q:"Sensitivity of a test is:", o:["P(no disease | test negative)","P(test positive | disease)","P(disease | test positive)","P(test negative | no disease)"], a:1, e:"The true positive rate among the diseased." },
 { t:"Measures of association", q:"100 diseased (90 test positive) and 200 healthy (160 test negative). The positive predictive value is:", o:["0.69","0.90","0.45","0.80"], a:0, e:"\\(\\mathrm{TP}=90, \\mathrm{FP}=40;\\mathrm{PPV}=90/130=0.69\\)." },
 { t:"McNemar test & regression", q:"Discordant pairs \\(b=25\\) and \\(c=10\\). McNemar\\('s\\chi ^{2}\\) is:", o:["6.43","15","1.0","2.5"], a:0, e:"\\((25-10)^{2}/35=6.43\\)." },
 { t:"McNemar test & regression", q:"In logistic regression a coefficient \\(\\beta _{1}=0.693\\) means the odds ratio per unit increase of x is:", o:["0.5","1.5","0.693","2"], a:3, e:"\\(e^{0.693}=2\\)." }
]},
{ id:"glm", name:"Generalized Linear Models", questions:[
 { t:"Components & link functions", q:"The three components of a generalized linear model are:", o:["likelihood, prior and posterior","random component, systematic component and link function","mean, median and mode","x, y and z"], a:1, e:"The distribution of y, the linear predictor \\(\\eta =X\\beta\\) and the link \\(g(\\mu )=\\eta\\)." },
 { t:"Components & link functions", q:"The ordinary linear regression model is a GLM with:", o:["binomial distribution and logit link","Poisson distribution and log link","normal distribution and identity link","gamma distribution and inverse link"], a:2, e:"\\(\\mu =\\eta\\) with normal errors." },
 { t:"Components & link functions", q:"In the logit link model, \\(\\eta =0\\) corresponds to a mean \\(\\mu\\) equal to:", o:["0.5","1","0.73","0"], a:0, e:"\\(\\mu =e^{0}/(1+e^{0})=0.5\\)." },
 { t:"Components & link functions", q:"In a Poisson model with a log link and \\(\\eta =1\\), the mean \\(\\mu\\) is:", o:["2.718","10","0","1"], a:0, e:"\\(\\mu =e^{1}=2.718\\)." },
 { t:"Exponential family", q:"The canonical link for the Poisson distribution is the:", o:["logit link","identity link","inverse link","log link"], a:3, e:"\\(\\theta =\\ln \\,\\mu\\) is the canonical parameter." },
 { t:"Exponential family", q:"The canonical link for the binomial (Bernoulli) distribution is the:", o:["logit link","log link","probit link","identity link"], a:0, e:"\\(\\theta =\\ln [p/(1-p)]\\)." },
 { t:"Exponential family", q:"The variance function \\(V(\\mu )\\) of the Poisson distribution is:", o:["\\(\\mu ^{2}\\)","\\(\\mu\\)","\\(\\mu (1-\\mu )\\)","1"], a:1, e:"\\(\\mathrm{Var}(Y)=\\mu\\)." },
 { t:"Exponential family", q:"The variance function of the gamma distribution is:", o:["1","\\(\\mu ^{3}\\)","\\(\\mu\\)","\\(\\mu ^{2}\\)"], a:3, e:"For gamma, \\(\\mathrm{Var}=\\phi \\mu ^{2}\\)." },
 { t:"Estimation: score, information & IRLS", q:"The score function is \\(U=\\partial l/\\partial \\beta\\). Its expected value at the true \\(\\beta\\) is:", o:["\\(\\beta\\)","0","the information","1"], a:1, e:"\\(E[U]=0\\) under regularity conditions." },
 { t:"Estimation: score, information & IRLS", q:"The Fisher information matrix of a GLM is:", o:["\\(X^{T}X\\) only","\\(X^{T}WX\\)","WX","\\((X^{T}X)^{-1}\\)"], a:1, e:"W is a diagonal matrix of weights." },
 { t:"Estimation: score, information & IRLS", q:"For a Poisson model with a log link, the IRLS weights \\(w_{i}\\) equal:", o:["\\(\\mu _{i}^{2}\\)","1","\\(1/\\mu _{i}\\)","\\(\\mu _{i}\\)"], a:3, e:"\\(W=1/[V(\\mu )g'(\\mu )^{2}]=\\mu\\) for the log link." },
 { t:"Estimation: score, information & IRLS", q:"The MLE of the intercept-only Poisson model for \\(y=(2, 4, 3)\\) is μ̂ =", o:["2","3","4","9"], a:1, e:"μ̂ \\(=\\bar{y}=3\\)." },
 { t:"Deviance & goodness of fit", q:"The deviance of a GLM is defined as:", o:["\\(-2l\\)_model only","l_model \\(-l\\)_null","SSE/n","2(l_saturated \\(-l\\)_model)"], a:3, e:"Twice the log-likelihood difference between the saturated and fitted models." },
 { t:"Deviance & goodness of fit", q:"For nested models the deviance drops by 7.2 with 1 extra parameter. At the 1% level (critical 6.63):", o:["not significant","the models are identical","significant improvement","cannot be said"], a:2, e:"\\(7.2>6.63\\)." },
 { t:"Deviance & goodness of fit", q:"A model with log-likelihood \\(-50\\) and 3 parameters has AIC:", o:["103","150","100","106"], a:3, e:"\\(\\mathrm{AIC}=-2l+2k=100+6=106\\)." },
 { t:"Deviance & goodness of fit", q:"With \\(l=-50, k=3\\) and \\(n=100, \\mathrm{BIC}=-2l+k\\,\\ln \\,n\\) is about:", o:["113.8","106","100","103"], a:0, e:"\\(100+3(4.605)=113.8\\)." },
 { t:"Deviance & goodness of fit", q:"The Hosmer–Lemeshow test is used for the goodness of fit of a:", o:["logistic regression model","survival curve","Poisson model","linear model"], a:0, e:"It compares observed and expected events in groups of predicted risk." },
 { t:"Poisson regression & overdispersion", q:"In a Poisson regression with \\(\\beta _{1}=0.405\\), the rate ratio per unit of x is about:", o:["0.405","1.0","2.0","1.5"], a:3, e:"\\(e^{0.405}=1.5\\)." },
 { t:"Poisson regression & overdispersion", q:"Pearson \\(\\chi ^{2}=60\\) with 40 residual df. The estimated dispersion parameter is:", o:["40","0.67","1.5","60"], a:2, e:"φ̂ \\(=60/40=1.5\\), which suggests overdispersion." },
 { t:"GEE & mixed models", q:"In GEE the estimates of \\(\\beta\\) remain consistent even if the working correlation matrix is wrong, provided the mean model is correct and we use the:", o:["MLE variance","naive variance only","Bayesian variance","robust (sandwich) variance estimator"], a:3, e:"The sandwich variance corrects for misspecified correlation." }
]}
);

MOCKS.push(
{ id:"mva", name:"Multivariate Analysis", minutes:30, questions:[
 { q:"A non-central t statistic has the form:", o:["\\((Z+\\delta )/\\sqrt{\\chi ^{2}_{v}/\\nu }\\)","\\(Z+\\chi ^{2}\\)","\\(\\chi ^{2}/Z\\)","\\(Z/\\sqrt{\\chi ^{2}_{v}/\\nu }\\)"], a:0, e:"\\(\\delta\\) is the non-centrality parameter." },
 { q:"When \\(\\lambda =0a\\,non\\)-central chi-square distribution reduces to the:", o:["central chi-square distribution","F distribution","t distribution","normal distribution"], a:0, e:"No shift in the mean of the normal variables." },
 { q:"An idempotent matrix has trace 4. Its rank is:", o:["4","1","2","16"], a:0, e:"For an idempotent matrix rank = trace." },
 { q:"If \\(x\\sim N(0, I)\\) then \\(E(x^{T}\\mathrm{Ax})\\) equals:", o:["\\(\\operatorname{tr}(A^{2})\\cdot n\\)","A","det A","tr(A)"], a:3, e:"\\(E(x^{T}\\mathrm{Ax})=\\operatorname{tr}(A\\Sigma )\\) with \\(\\Sigma =I\\)." },
 { q:"The sum of independent \\(\\chi ^{2}_{3}\\) and \\(\\chi ^{2}_{5}\\) variables is:", o:["\\(t_{8}\\)","\\(\\chi ^{2}_{8}\\)","\\(\\chi ^{2}_{2}\\)","\\(\\chi ^{2}_{15}\\)"], a:1, e:"Degrees of freedom add." },
 { q:"Any subset of components of a multivariate normal vector is:", o:["Poisson","non-normal","multivariate normal","uniform"], a:2, e:"Marginals of a MVN are MVN." },
 { q:"If \\((X_{1}, X_{2})\\) is bivariate normal with \\(\\rho =0\\), then \\(X_{1}\\) and \\(X_{2}\\) are:", o:["dependent","identical","perfectly correlated","independent"], a:3, e:"For a MVN, uncorrelated implies independent." },
 { q:"For \\(\\Sigma =[[1, 0.5], [0.5, 1]]\\) and \\(a=(1, 1)\\), the variance of \\(X_{1}+X_{2}\\) is:", o:["3","4","2","1"], a:0, e:"\\(a^{T}\\sum a=1+1+2(0.5)=3\\)." },
 { q:"The contours of constant density of a multivariate normal are:", o:["random","squares","straight lines","ellipsoids"], a:3, e:"\\((x-\\mu )^{T}\\sum ^{-1}(x-\\mu )=c\\) defines an ellipsoid." },
 { q:"With \\(\\Sigma =I\\), the Mahalanobis distance reduces to the:", o:["squared Euclidean distance","correlation","Manhattan distance","determinant"], a:0, e:"No scaling or correlation adjustment remains." },
 { q:"For \\(p=2\\) the 95th percentile of \\(\\chi ^{2}_{2}\\) is 5.99. The proportion of a bivariate normal within the ellipse \\(D^{2}\\le 5.99\\) is:", o:["0.99","0.05","0.5","0.95"], a:3, e:"\\(D^{2}\\sim \\chi ^{2}_{2}\\)." },
 { q:"A Wishart matrix arises as:", o:["the determinant of \\(\\Sigma\\)","\\(\\sum x_{i}x_{i}^{T}\\) for n independent \\(N(0, \\Sigma )\\) vectors","the mean vector","a correlation"], a:1, e:"It is the distribution of the SSCP matrix." },
 { q:"Hotelling\\('sT^{2}\\) is used to test:", o:["regression slope only","a single proportion","a mean vector","a single variance"], a:2, e:"\\(H_{0}:\\mu =\\mu _{0}\\) (or equal mean vectors in two samples)." },
 { q:"The two-sample Hotelling \\(T^{2}\\) assumes:", o:["non-normal data","zero means","equal sample sizes only","equal covariance matrices"], a:3, e:"It uses the pooled covariance matrix." },
 { q:"Box's M test checks the equality of:", o:["covariance matrices","proportions","mean vectors","medians"], a:0, e:"It is the multivariate analogue of Bartlett's test." },
 { q:"Fisher's z-transformation of \\(r=0.6\\) gives about:", o:["0.693","0.36","0.6","1.2"], a:0, e:"½ \\(\\ln (1.6/0.4)\\) = ½ \\(\\ln \\,4=0.693\\)." },
 { q:"For \\(\\Sigma =[[4, 2], [2, 3]]\\), the Cholesky factor L has lower-left element:", o:["0.5","1","\\(\\sqrt{2}\\)","2"], a:1, e:"\\(L=[[2, 0], [1, \\sqrt{2}]]:l_{21}=2/2=1\\)." },
 { q:"Pillai's trace for eigenvalues 1 and 0.5 is:", o:["1.5","0.833","0.333","0.5"], a:1, e:"\\(1/2+0.5/1.5=0.833\\)." },
 { q:"Wilks\\('\\Lambda\\) near 0 indicates:", o:["missing data","no group differences","strong differences between group mean vectors","equal covariances"], a:2, e:"\\(\\Lambda =|E|/|E+H|\\) is small when H is large." },
 { q:"MANCOVA extends MANOVA by adding:", o:["random effects only","more error terms","covariates","a prior"], a:2, e:"It adjusts the multivariate response for continuous covariates." }
]},
{ id:"bio", name:"Biostatistics and Epidemiology", minutes:30, questions:[
 { q:"Type I censoring means the study:", o:["is random","ends after a fixed number of failures","ends at a fixed time","has no censoring"], a:2, e:"Observation stops at a pre-set time." },
 { q:"Type II censoring means the study:", o:["ends at a fixed time","stops after a pre-fixed number of failures","has no failures","never ends"], a:1, e:"Observation stops after the r-th failure." },
 { q:"The survival function S(t) is:", o:["constant","increasing with \\(S(0)=0\\)","negative","non-increasing with \\(S(0)=1\\)"], a:3, e:"It is the probability of surviving beyond t." },
 { q:"The exponential distribution has a hazard function that is:", o:["decreasing","increasing","zero","constant"], a:3, e:"\\(h(t)=\\lambda\\) for all t." },
 { q:"The median survival time of an exponential with \\(\\lambda =0.1\\) is about:", o:["0.69","6.93","5","10"], a:1, e:"\\(\\ln \\,2/\\lambda =6.93\\)." },
 { q:"With 10 at risk and 2 deaths at the first event time, the Kaplan–Meier Ŝ is:", o:["0.8","0.98","0.2","0.9"], a:0, e:"\\(1-2/10=0.8\\)." },
 { q:"The Kaplan–Meier estimator is a:", o:["smooth curve","straight line","step function","parabola"], a:2, e:"It changes only at event times." },
 { q:"Compared with the log-rank test, the Wilcoxon (Gehan) test gives more weight to:", o:["all times equally","censored times","early event times","late event times"], a:2, e:"Weights are the numbers at risk, which are largest early on." },
 { q:"The intraclass correlation with \\(\\sigma _{b}^{2}=4\\) and \\(\\sigma _{e}^{2}=12\\) is:", o:["0.5","0.33","0.25","0.75"], a:2, e:"\\(4/(4+12)=0.25\\)." },
 { q:"For times \\(2, 3^{+}, 5, 7^{+}, 8\\), the Nelson–Aalen cumulative hazard at \\(t=5\\) is:", o:["1.0","0.533","0.2","0.8"], a:1, e:"\\(1/5+1/3=0.533\\)." },
 { q:"A Weibull distribution with shape \\(\\gamma =1\\) is the:", o:["normal distribution","exponential distribution","uniform distribution","gamma with shape 2"], a:1, e:"\\(h(t)=\\lambda\\) becomes constant." },
 { q:"The proportional hazards assumption means that the hazard ratio between two groups:", o:["increases with time","is always 1","is constant over time","is zero"], a:2, e:"\\(h(t|x_{1})/h(t|x_{2})\\) does not depend on t." },
 { q:"The incidence rate equals:", o:["cases/controls","new cases/person-time at risk","deaths/cases","all cases/population"], a:1, e:"It uses person-time in the denominator." },
 { q:"The ROC curve plots:", o:["cases against time","incidence against prevalence","specificity against PPV","sensitivity against \\(1-\\) specificity"], a:3, e:"Each cut-off gives a point \\((1-\\mathrm{Sp}, \\mathrm{Se})\\)." },
 { q:"120 existing cases in a population of 2000 give a prevalence of:", o:["1.2%","12%","60%","6%"], a:3, e:"\\(120/2000=0.06\\)." },
 { q:"McNemar test with \\(b=25\\) and \\(c=10\\): compared with the critical value 3.84, the test is:", o:["invalid","significant \\((\\chi ^{2}=6.43)\\)","not significant \\((\\chi ^{2}=6.43)\\)","significant \\((\\chi ^{2}=2.5)\\)"], a:1, e:"\\((15)^{2}/35=6.43>3.84\\)." },
 { q:"A retrospective cohort study uses:", o:["historical records to identify exposure and follow-up","only future data","only case reports","no records"], a:0, e:"The cohort and outcomes are already recorded in the past." },
 { q:"With \\(a=30, b=70, c=10\\) and \\(d=90\\), the odds ratio is about:", o:["3.0","3.86","9.0","0.26"], a:1, e:"\\(ad/bc=2700/700=3.86\\)." },
 { q:"The attributable risk (risk difference) with 30% and 10% disease risks in exposed and unexposed is:", o:["3.0","0.20","0.40","0.67"], a:1, e:"\\(0.30-0.10=0.20\\)." },
 { q:"Specificity for 200 healthy people of whom 160 test negative is:", o:["0.20","0.90","0.80","0.69"], a:2, e:"\\(\\mathrm{TN}/(\\mathrm{TN}+\\mathrm{FP})=160/200\\)." }
]},
{ id:"glm", name:"Generalized Linear Models", minutes:30, questions:[
 { q:"The systematic component of a GLM is:", o:["the linear predictor \\(\\eta =X\\beta\\)","the error distribution","the deviance","the link function"], a:0, e:"It combines the covariates linearly." },
 { q:"The link function relates:", o:["y to x directly","the mean \\(\\mu\\) to the linear predictor","variance to mean","\\(\\beta\\) to \\(\\sigma\\)"], a:1, e:"\\(g(\\mu )=\\eta\\)." },
 { q:"A GLM with normal errors and identity link is:", o:["Poisson regression","ordinary linear regression","survival regression","logistic regression"], a:1, e:"\\(\\mu =X\\beta\\)." },
 { q:"The dispersion parameter \\(\\phi\\) of the Poisson distribution equals:", o:["1","\\(\\mu\\)","\\(\\sigma ^{2}\\)","0"], a:0, e:"Variance equals the mean, so \\(\\phi =1\\)." },
 { q:"In the exponential family form, E(Y) equals:", o:["\\(c(y, \\phi )\\)","\\(\\theta\\)","\\(b''(\\theta )\\)","\\(b'(\\theta )\\)"], a:3, e:"The first derivative of the cumulant function gives the mean." },
 { q:"For Poisson, \\(b(\\theta )=e^{\\theta }\\). The mean is:", o:["\\(\\theta ^{2}\\)","1","\\(e^{\\theta }\\)","\\(\\theta\\)"], a:2, e:"\\(\\mu =b'(\\theta )=e^{\\theta }\\)." },
 { q:"The canonical parameter of Bernoulli\\((p=0.8)\\) is \\(\\ln [p/(1-p)]\\) =", o:["0.8","0.223","1.386","2"], a:2, e:"\\(\\ln (0.8/0.2)=\\ln \\,4=1.386\\)." },
 { q:"The odds ratio for \\(\\beta =0.693\\) in logistic regression is:", o:["2","0.5","1.5","0.693"], a:0, e:"\\(e^{\\beta }=2\\)." },
 { q:"The exponential distribution is a special case of the:", o:["Poisson family","gamma family","binomial family","normal family"], a:1, e:"Gamma with shape 1; its variance function is \\(\\mu ^{2}\\)." },
 { q:"For Bernoulli data the MLE of p is:", o:["\\(\\bar{y}^{2}\\)","\\(1-\\bar{y}\\)","ȳ","median"], a:2, e:"The sample proportion." },
 { q:"For the canonical link, the observed and expected information matrices are:", o:["zero","equal","infinite","unrelated"], a:1, e:"Then Fisher scoring and Newton–Raphson coincide." },
 { q:"The IRLS working response is \\(z=\\eta +(y-\\mu )g'(\\mu )\\). For a log link with \\(y=2, \\mu =1\\) and \\(\\eta =0, z\\) =", o:["1","2","0","3"], a:0, e:"\\(g'(\\mu )=1/\\mu =1\\), so \\(z=0+(2-1)\\times 1=1\\)." },
 { q:"One IRLS step for the intercept-only Poisson model with \\(y=(2, 4, 3)\\) starting from \\(\\beta =0\\) gives \\(\\beta\\) =", o:["1.1","0","3","2"], a:3, e:"\\(\\mu =1, W=1, z=(1, 3, 2)\\), mean \\(z=2\\)." },
 { q:"β̂ \\(=0.8\\) with \\(\\mathrm{SE}=0.4\\). The Wald z statistic is:", o:["0.5","0.32","1.2","2"], a:3, e:"z = β̂/\\(\\mathrm{SE}=2\\)." },
 { q:"The Pearson residual for \\(y=5\\) and μ̂ \\(=4\\) in a Poisson model is:", o:["0.5","2","1","0.25"], a:0, e:"(\\(y-\\) μ̂)/√μ̂ \\(=1/2\\)." },
 { q:"Anscombe residuals are designed to be:", o:["always positive","integers","equal to y","approximately normally distributed"], a:3, e:"A transformation that makes the residual distribution close to normal." },
 { q:"McFadden's pseudo\\(-R^{2}\\) with l_null \\(=-69.3\\) and l_model \\(=-50\\) is about:", o:["0.72","1.4","0.5","0.28"], a:3, e:"\\(1-(-50)/(-69.3)=0.278\\)." },
 { q:"Quasi-likelihood requires the specification of:", o:["only the mean–variance relationship","the full distribution","the prior","nothing"], a:0, e:"\\(\\mathrm{Var}(Y)=\\phi V(\\mu )\\)." },
 { q:"In GEE, common working correlation structures include:", o:["mean and median","logit and probit","normal and Poisson","independence, exchangeable, AR(1) and unstructured"], a:3, e:"These describe correlation within a cluster." },
 { q:"In a random-intercept GLMM, the intraclass correlation with \\(\\sigma _{b}^{2}=4\\) and \\(\\sigma _{e}^{2}=12\\) (linear case) is:", o:["0.25","0.75","0.5","0.33"], a:0, e:"\\(4/16=0.25\\)." }
]}
);
