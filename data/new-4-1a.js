/* ============ 4th YEAR, 1st SEMESTER (part 1): Economic Statistics, Applied Statistics ============ */
TOPICS.push(
{ id:"es", name:"Economic Statistics", topics:[
 { title:"Consumer Behaviour, Utility Maximisation & Demand Elasticities", body:`
  <p>A consumer chooses quantities of goods to maximise utility U(x₁, x₂) subject to the budget p₁x₁ + p₂x₂ = M. At the optimum the marginal utility per unit of money is equal across goods and the indifference curve is tangent to the budget line.</p>
  <div class="formula">MU₁/p₁ = MU₂/p₂  ⇔  MRS = p₁/p₂  (Lagrangian: ℒ = U + λ(M − p₁x₁ − p₂x₂))</div>
  <div class="formula">Price elasticity E_p = (dq/dp)(p/q)  ;  Income elasticity E_M = (dq/dM)(M/q)  ;  Cross elasticity E_xy = (∂q_x/∂p_y)(p_y/q_x)</div>
  <p>|E_p| &gt; 1 elastic, &lt; 1 inelastic. E_M &gt; 1 luxury, 0 &lt; E_M &lt; 1 necessity, E_M &lt; 0 inferior good. Cross elasticity &gt; 0 substitutes, &lt; 0 complements. The demand function q = A·p^(−b) has constant elasticity −b.</p>
  <p><b>Example:</b> q = 100 − 2p at p = 10: q = 80 and E_p = (−2)(10/80) = −0.25 (inelastic). If income rises 10% and quantity demanded rises 5%, E_M = 0.5 (a necessity).</p>
  <div class="note">Mistake: reading elasticity as the slope. A linear demand curve has constant slope but varying elasticity.</div>`},
 { title:"Engel Curves, Lognormal Demand & Preference Theory", body:`
  <p>An <b>Engel curve</b> shows how the quantity (or expenditure) on a good changes with income, other things fixed. <b>Engel's law:</b> as income rises, the share of food in total expenditure falls. A <b>lognormal demand curve</b> assumes the logarithm of income of consumers is normally distributed, so the proportion of households buying a good with threshold income level follows a lognormal distribution function.</p>
  <p><b>Preference theory:</b> an indifference curve joins bundles of equal utility; it is convex to the origin and its slope is −MRS. The budget line has slope −p₁/p₂. Preferences are complete, transitive and non-satiated.</p>
  <p><b>Example:</b> U = xy, M = 100, p₁ = 2, p₂ = 5. For Cobb–Douglas U = xy the consumer spends half of income on each good: x = 50/2 = 25 and y = 50/5 = 10. U = 250. Check budget: 2(25) + 5(10) = 100. ✓</p>
  <div class="note">Mistake: confusing an Engel curve (quantity against income) with a demand curve (quantity against price).</div>`},
 { title:"Distribution of Income: Pareto's Law & the Lognormal", body:`
  <p><b>Pareto's law:</b> the number of persons with income at least x is N(x) = A·x^(−α), so log N is linear in log x with slope −α. A larger α means less inequality (a thinner upper tail). Mean income for x ≥ x₀ is αx₀/(α − 1) for α &gt; 1.</p>
  <p>The <b>lognormal</b> distribution fits the whole income range better: if ln X ~ N(μ, σ²) then</p>
  <div class="formula">Median = e^μ  ;  Mean = e^(μ + σ²/2)  ;  Variance = e^(2μ+σ²)(e^(σ²) − 1)</div>
  <p>The stochastic model behind it is <b>Gibrat's law of proportionate effect</b>: income grows by a random percentage independent of its size, so ln income is a sum of many small random terms and tends to normal.</p>
  <p><b>Example:</b> μ = 3 and σ = 1: median = e³ = 20.1 and mean = e^3.5 = 33.1; mean &gt; median shows right skew. For Pareto with α = 2: mean income above x₀ is 2x₀.</p>
  <div class="note">Mistake: Pareto describes only the upper tail of incomes, not all incomes.</div>`},
 { title:"Lorenz Curve, Concentration Ratio & Gini Coefficient", body:`
  <p>The <b>Lorenz curve</b> plots the cumulative share of income (y-axis) against the cumulative share of population (x-axis), with people ordered from poorest to richest. The 45° line is perfect equality. The more the curve bows away, the greater the inequality.</p>
  <div class="vis" data-vis="lorenz"></div>
  <div class="formula">Gini G = (area between the 45° line and the curve) / (area below the 45° line) = 1 − 2 × (area under Lorenz curve)</div>
  <div class="formula">Equivalent: G = Σᵢ Σⱼ |xᵢ − xⱼ| / (2n²μ) ;  0 ≤ G ≤ 1</div>
  <p>G = 0 is perfect equality; G near 1 means one person has almost everything. The <b>concentration ratio</b> is another name for this area-ratio measure of inequality.</p>
  <p><b>Example:</b> Incomes 10, 20, 30, 40, 100 (total 200). Cumulative income shares: 0.05, 0.15, 0.30, 0.50, 1.00 at population shares 0.2, 0.4, …, 1. Area under Lorenz (trapezoids) = 0.2[(0 + 0.05)/2 + (0.05 + 0.15)/2 + (0.15 + 0.30)/2 + (0.30 + 0.50)/2 + (0.50 + 1)/2] = 0.30. So G = 1 − 2(0.30) = 0.40. Check with the pairwise formula: Σᵢ Σⱼ|xᵢ − xⱼ| = 800 and 2n²μ = 2 × 25 × 40 = 2000, so G = 0.40 ✓.</p>
  <div class="note">Mistake: using unordered data. Always sort incomes from smallest to largest before building the Lorenz curve.</div>`},
 { title:"Production Function, Marginal Productivity & MRTS", body:`
  <p>A <b>production function</b> Q = f(K, L) gives the maximum output from inputs. <b>Average product</b> AP_L = Q/L and <b>marginal product</b> MP_L = ∂Q/∂L. The <b>isoquant</b> joins input combinations giving the same output; its slope is the <b>marginal rate of technical substitution</b>.</p>
  <div class="formula">MRTS (L for K) = −dK/dL = MP_L / MP_K  ;  Output elasticity of L = (∂Q/∂L)(L/Q)</div>
  <div class="formula">Homogeneous of degree n: f(λK, λL) = λⁿf(K, L).  n = 1 constant, &gt; 1 increasing, &lt; 1 decreasing returns to scale.  Euler: K·Q_K + L·Q_L = nQ</div>
  <p>Factor intensity is the ratio K/L; efficiency means producing on the isoquant (not inside it).</p>
  <p><b>Example:</b> Q = 2K^0.3 L^0.7 has n = 0.3 + 0.7 = 1, constant returns. At K = L = 100: Q = 200, MP_L = 0.7 × 200/100 = 1.4, MP_K = 0.3 × 200/100 = 0.6, and MRTS = MP_L/MP_K = (0.7/0.3)(K/L) = 2.33.</p>
  <div class="note">Mistake: confusing diminishing marginal product (a short-run idea, one input varies) with decreasing returns to scale (all inputs change together).</div>`},
 { title:"Cobb–Douglas & CES Production Functions", body:`
  <p>The <b>Cobb–Douglas</b> function Q = A·Kᵅ·Lᵝ is linear in logs: ln Q = ln A + α ln K + β ln L, so α and β are output elasticities and can be estimated by regression. Returns to scale = α + β. Its <b>elasticity of substitution</b> is always 1.</p>
  <div class="vis" data-vis="cobb"></div>
  <div class="formula">CES: Q = γ[δK^(−ρ) + (1 − δ)L^(−ρ)]^(−ν/ρ)  ;  σ = 1/(1 + ρ)  ;  ρ → 0 gives Cobb–Douglas</div>
  <p>With perfect competition each factor is paid its marginal product, so under Cobb–Douglas the factor shares of income are α and β. CES allows σ ≠ 1: σ = 0 fixed proportions (Leontief), σ → ∞ perfect substitutes.</p>
  <p><b>Example:</b> Q = AK^0.4 L^0.8: α + β = 1.2, so increasing returns to scale; doubling both inputs raises output by 2^1.2 = 2.30 times. With ρ = 1 in a CES function, σ = 1/2.</p>
  <div class="note">Mistake: Cobb–Douglas forces σ = 1, which may be too restrictive; CES tests that restriction.</div>`},
 { title:"Cost Function, Cost Minimisation & Profit Maximisation", body:`
  <p>The <b>production possibility curve</b> shows the maximum combinations of two outputs from fixed resources; it is concave with slope = marginal rate of transformation. The <b>cost function</b> C(q) gives the minimum cost of producing q.</p>
  <div class="formula">Cost minimisation: MRTS = w/r  (equivalently MP_L/w = MP_K/r)  ;  Profit π = pq − C(q)</div>
  <div class="formula">Profit maximisation: MR = MC (competitive firm: p = MC), with MC rising at that point</div>
  <p><b>Example:</b> C(q) = 100 + 2q + 0.5q² and price p = 22. MC = 2 + q = 22 gives q = 20. Revenue = 440, cost = 100 + 40 + 200 = 340, profit = 100. Fixed cost does not change the optimal q.</p>
  <div class="note">Mistake: setting average cost equal to price instead of marginal cost, and ignoring the second-order condition (MC must be rising).</div>`},
 { title:"Dynamic Economics: Cobweb, Harrod–Domar & Growth Models", body:`
  <p>The <b>cobweb model</b>: supply responds to last period's price. Demand q_t = a − bp_t, supply q_t = c + dp_(t−1) gives p_t = (a − c)/b − (d/b)p_(t−1). Equilibrium p* = (a − c)/(b + d). It converges if d &lt; b (supply responds less strongly to price than demand does), cycles forever if d = b, and diverges if d &gt; b.</p>
  <div class="formula">Harrod–Domar: g = s/v  (s = saving rate, v = capital–output ratio)</div>
  <p>The <b>two-sector growth model</b> splits the economy into a capital-goods sector and a consumption-goods sector, and asks how investment is allocated for balanced growth.</p>
  <p><b>Example:</b> Demand q = 20 − 2p_t, supply q = −4 + p_(t−1). Here b = 2 and d = 1, so d/b = 0.5 &lt; 1 (stable). p* = 24/3 = 8. With s = 0.20 and v = 4, g = 5% per year.</p>
  <div class="note">Mistake: reading the cobweb stability condition as a condition on prices only. It is the ratio of supply slope to demand slope.</div>`},
 { title:"Input–Output Analysis (Leontief)", body:`
  <p>In the Leontief <b>static</b> model, gross output x of each sector equals the intermediate use Ax plus final demand d: x = Ax + d, so x = (I − A)⁻¹d. Entry aᵢⱼ is the input of sector i needed per unit output of sector j. (I − A)⁻¹ is the Leontief inverse.</p>
  <div class="formula">x = (I − A)⁻¹ d  ;  Hawkins–Simon: all leading principal minors of (I − A) are positive</div>
  <p>The <b>dynamic</b> model adds capital stock: x(t) = Ax(t) + B·ẋ(t) + d(t), where B is the capital coefficient matrix.</p>
  <p><b>Example:</b> A = [[0.2, 0.3], [0.4, 0.1]], d = (100, 50). I − A = [[0.8, −0.3], [−0.4, 0.9]], det = 0.72 − 0.12 = 0.60. (I − A)⁻¹ = (1/0.6)[[0.9, 0.3], [0.4, 0.8]]. So x₁ = (90 + 15)/0.6 = 175 and x₂ = (40 + 40)/0.6 = 133.3. Check: 0.2(175) + 0.3(133.3) + 100 = 175 ✓.</p>
  <div class="note">Mistake: each column of A must be interpreted as inputs per unit of that sector's output. Mixing rows and columns gives the wrong answer.</div>`}
]},
{ id:"as", name:"Applied Statistics", topics:[
 { title:"Statistical Quality Control & Control Charts for Variables", body:`
  <p>Variation in a process has <b>chance (non-assignable) causes</b>, which are small, always present and stable, and <b>assignable causes</b>, which are specific and can be found and removed. A process is "in control" when only chance causes act. A <b>control chart</b> plots a sample statistic against time with a centre line and control limits at ±3σ.</p>
  <div class="vis" data-vis="ctrlchart"></div>
  <div class="formula">X̄-chart: X̿ ± A₂R̄  ;  R-chart: UCL = D₄R̄, LCL = D₃R̄</div>
  <p>For n = 5 the constants are A₂ = 0.577, D₃ = 0, D₄ = 2.114. A point outside the limits, or a run of points on one side, signals an assignable cause.</p>
  <p><b>Example:</b> X̿ = 50, R̄ = 4, n = 5. X̄-chart: UCL = 50 + 0.577 × 4 = 52.31, LCL = 47.69. R-chart: UCL = 2.114 × 4 = 8.46, LCL = 0.</p>
  <div class="note">Mistake: confusing control limits (what the process does) with specification limits (what the customer wants).</div>`},
 { title:"Control Charts for Attributes & Special Charts", body:`
  <p>Attribute charts count defectives or defects: <b>p-chart</b> (fraction defective), <b>np-chart</b> (number defective), <b>c-chart</b> (defects per unit, fixed size) and <b>u-chart</b> (defects per unit, variable size).</p>
  <div class="formula">p-chart: p̄ ± 3√[p̄(1 − p̄)/n]  ;  c-chart: c̄ ± 3√c̄  ;  u-chart: ū ± 3√(ū/n)</div>
  <p>A negative LCL is set to 0. <b>Special charts</b> such as CUSUM (cumulative sum) and EWMA (exponentially weighted moving average) detect small, persistent shifts that Shewhart charts miss.</p>
  <p><b>Example:</b> p̄ = 0.05, n = 100: 3√(0.05 × 0.95/100) = 3(0.0218) = 0.0654. UCL = 0.1154, LCL = 0.05 − 0.0654 &lt; 0, so LCL = 0. For c̄ = 9: limits 9 ± 9 → UCL = 18, LCL = 0.</p>
  <div class="note">Mistake: using a p-chart for counts of defects (several per item). That is the c-chart or u-chart.</div>`},
 { title:"Acceptance Sampling by Attributes & OC Curve", body:`
  <p>In a <b>single sampling plan</b> (n, c): inspect n items from a lot; accept if the number of defectives ≤ c, otherwise reject. The probability of acceptance is Pₐ = P(X ≤ c), usually binomial. The <b>OC curve</b> plots Pₐ against the lot fraction defective p.</p>
  <div class="vis" data-vis="ocurve"></div>
  <div class="formula">Producer's risk α = 1 − Pₐ(AQL)  ;  Consumer's risk β = Pₐ(LTPD)  ;  AOQ ≈ p·Pₐ (large lots)</div>
  <p>AQL is the acceptable quality level (a good lot); LTPD (or RQL) is the lot tolerance percent defective (a bad lot). A steeper OC curve discriminates better. <b>Acceptance by variables</b> uses measured values (mean and SD) and needs a smaller sample for the same protection, if the distribution is normal.</p>
  <p><b>Example:</b> n = 10, c = 0: Pₐ(p = 0.05) = 0.95¹⁰ = 0.599 and Pₐ(p = 0.10) = 0.9¹⁰ = 0.349. With c = 1, p = 0.10: Pₐ = 0.9¹⁰ + 10(0.1)(0.9⁹) = 0.349 + 0.387 = 0.736.</p>
  <div class="note">Mistake: thinking acceptance means the lot is good, it only means the sample evidence was good enough.</div>`},
 { title:"Sequential Sampling, SPRT, ASN & Continuous Sampling Plans", body:`
  <p>In <b>sequential sampling</b> the sample size is not fixed: items are inspected one by one and a decision (accept, reject or continue) is made after each, using Wald's <b>sequential probability ratio test (SPRT)</b> for H₀: p = p₀ against H₁: p = p₁ with errors α and β.</p>
  <div class="formula">Likelihood ratio Lₙ = Π f(xᵢ; p₁)/f(xᵢ; p₀)  ;  A = (1 − β)/α  ;  B = β/(1 − α)</div>
  <p>Continue while B &lt; Lₙ &lt; A; reject H₀ when Lₙ ≥ A; accept H₀ when Lₙ ≤ B. The <b>ASN</b> (average sample number) is the expected sample size; SPRT needs, on average, far fewer observations than a fixed-size test with the same α and β. <b>Continuous sampling plans</b> (CSP-1) are for a continuous production line: inspect 100% until i consecutive items are good, then sample a fraction f, and return to 100% when a defective appears.</p>
  <p><b>Example:</b> α = 0.05 and β = 0.10: A = 0.90/0.05 = 18 and B = 0.10/0.95 = 0.105.</p>
  <div class="note">Mistake: A and B are bounds on the likelihood ratio (or on the log of it, ln 18 = 2.89 and ln 0.105 = −2.25), not on the number of defectives directly.</div>`},
 { title:"Time Series: Components, Trend & Seasonal Variation", body:`
  <p>A time series Y is analysed into <b>trend</b> T (long-term movement), <b>seasonal</b> S (regular within-year pattern), <b>cyclical</b> C (longer swings) and <b>irregular</b> I (random). Additive: Y = T + S + C + I. Multiplicative: Y = T × S × C × I.</p>
  <p><b>Trend methods:</b> free-hand, semi-averages, moving averages, and least squares ŷ = a + bt (with t coded about the middle so Σt = 0, a = ȳ and b = Σty/Σt²). <b>Seasonal index</b> (simple averages) = (average of the season / grand average) × 100.</p>
  <p><b>Example:</b> y = 10, 12, 14, 13, 17. Three-year moving averages: 12, 13, 14.67. With t = −2..2, Σy = 66, a = 13.2 and b = 15/10 = 1.5, so ŷ = 13.2 + 1.5t; forecast at t = 3 is 17.7. If quarter averages are 80, 120, 100, 100 (grand mean 100) the seasonal indices are 80, 120, 100, 100.</p>
  <div class="note">Mistake: an even-order moving average must be centred, and the least-squares t-coding must be consistent when forecasting.</div>`},
 { title:"Index Numbers & Cost of Living Index", body:`
  <p>An index number measures the relative change of a group of items between a base period 0 and a current period 1.</p>
  <div class="formula">Laspeyres: P₀₁ = Σp₁q₀/Σp₀q₀ × 100  ;  Paasche: Σp₁q₁/Σp₀q₁ × 100  ;  Fisher = √(Laspeyres × Paasche)</div>
  <div class="formula">Tests: time reversal P₀₁ × P₁₀ = 1 ;  factor reversal P₀₁ × Q₀₁ = Σp₁q₁/Σp₀q₀ ;  Fisher satisfies both</div>
  <p>The <b>cost of living index</b> measures the change in the cost of maintaining a fixed standard of living. By the <b>family budget method</b> I = ΣPV/ΣV, where P = (p₁/p₀) × 100 and V = p₀q₀ is the base-period expenditure used as weight.</p>
  <p><b>Example:</b> p₀ = 10, 20; q₀ = 5, 2; p₁ = 12, 25; q₁ = 6, 3. Laspeyres = (60 + 50)/(50 + 40) × 100 = 122.2. Paasche = (72 + 75)/(60 + 60) × 100 = 122.5. Fisher = √(122.2 × 122.5) = 122.4.</p>
  <div class="note">Mistake: Laspeyres tends to overstate and Paasche to understate price rise, because of substitution towards cheaper goods.</div>`},
 { title:"Educational Statistics: Scaling, IQ, Reliability & Validity", body:`
  <p><b>Scaling and standard scores:</b> z = (X − X̄)/s; T-score = 50 + 10z. IQ scores are scaled to mean 100 and SD 15 (or 16), so IQ = 100 + 15z. The classic ratio IQ = (MA/CA) × 100, where MA is mental age and CA chronological age.</p>
  <p><b>Reliability</b> is consistency of the test: test–retest, parallel forms, split-half. The <b>Spearman–Brown</b> formula steps up a split-half correlation to the full test: r_full = 2r/(1 + r). <b>Validity</b> is whether the test measures what it should (content, criterion, construct validity).</p>
  <p><b>Example:</b> score 65, mean 50, SD 10: z = 1.5, T = 65, and about 93% of students score below. MA = 12, CA = 10: IQ = 120. Split-half r = 0.60: r_full = 1.2/1.6 = 0.75.</p>
  <div class="note">Mistake: a reliable test need not be valid (a faulty scale gives the same wrong weight each time), but a valid test must be reliable.</div>`},
 { title:"Official Statistics of Bangladesh", body:`
  <p>The <b>Bangladesh Bureau of Statistics (BBS)</b>, under the Ministry of Planning, is the national statistical office. Major sources of official statistics:</p>
  <ul><li><b>Population and Housing Census</b> (every 10 years; 1974, 1981, 1991, 2001, 2011, 2022).</li>
  <li><b>Household Income and Expenditure Survey (HIES):</b> poverty, income and consumption.</li>
  <li><b>Labour Force Survey (LFS):</b> employment and unemployment.</li>
  <li><b>Sample Vital Registration System (SVRS):</b> annual birth, death and migration rates.</li>
  <li><b>Agriculture and Economic Censuses; National Accounts (GDP); Consumer Price Index (CPI)</b> for inflation.</li>
  <li><b>Bangladesh Demographic and Health Survey (BDHS),</b> run by NIPORT: fertility, mortality, family planning, nutrition.</li></ul>
  <p><b>Example:</b> The CPI (base-year weights from HIES expenditure) is a Laspeyres-type index used to measure inflation. The census gives the sampling frame (enumeration areas) for most national surveys.</p>
  <div class="note">Check years and the latest figures in the BBS website before quoting them in an exam answer; surveys are revised and repeated.</div>`}
]}
);

QUIZZES.push(
{ id:"es", name:"Economic Statistics", questions:[
 { t:"Consumer behaviour & demand", q:"At the utility-maximising bundle:", o:["MU₁ + MU₂ = 0","p₁ = p₂","MU₁ = MU₂","MU₁/p₁ = MU₂/p₂"], a:3, e:"The marginal utility per unit of money must be equal across goods (equivalently MRS = p₁/p₂)." },
 { t:"Consumer behaviour & demand", q:"For q = 100 − 2p at p = 10, the price elasticity of demand is:", o:["−4","−0.8","−2","−0.25"], a:3, e:"q = 80, so E = (−2)(10/80) = −0.25." },
 { t:"Consumer behaviour & demand", q:"A good with income elasticity greater than 1 is a:", o:["luxury","necessity","inferior good","Giffen good only"], a:0, e:"Demand rises more than proportionately with income: luxury." },
 { t:"Consumer behaviour & demand", q:"A positive cross elasticity between goods X and Y shows that they are:", o:["inferior","unrelated","substitutes","complements"], a:2, e:"A rise in the price of Y increases demand for X: substitutes." },
 { t:"Engel curves & preferences", q:"An Engel curve relates the quantity demanded of a good to:", o:["time","price of substitutes","its own price","consumer's income"], a:3, e:"Engel curves show the income–consumption relation." },
 { t:"Engel curves & preferences", q:"Engel's law states that as income rises, the proportion of income spent on food:", o:["falls","rises","becomes zero","stays constant"], a:0, e:"Food is a necessity with income elasticity below 1." },
 { t:"Income distribution", q:"Pareto's law, N(x) = A x^(−α), is linear when plotted on:", o:["N against ln only","log N against log x","N against x²","ordinary axes"], a:1, e:"log N = log A − α log x." },
 { t:"Income distribution", q:"If income is lognormal with ln X ~ N(μ, σ²), the median income is:", o:["μ","e^μ","e^(μ+σ²/2)","σ"], a:1, e:"The median of ln X is μ, so the median of X is e^μ." },
 { t:"Income distribution", q:"For lognormal income with μ = 3 and σ = 1, the mean income is about:", o:["7.4","54.6","20.1","33.1"], a:3, e:"e^(3 + 1/2) = e^3.5 ≈ 33.1." },
 { t:"Lorenz curve & Gini", q:"The line of perfect equality in the Lorenz diagram is the:", o:["curve itself","y-axis","45° line","x-axis"], a:2, e:"With equality the cumulative income share equals the cumulative population share." },
 { t:"Lorenz curve & Gini", q:"A Gini coefficient of zero means:", o:["half the population has all income","perfect equality","perfect inequality","an error"], a:1, e:"The Lorenz curve then coincides with the 45° line." },
 { t:"Lorenz curve & Gini", q:"The Gini coefficient of incomes 10, 20, 30, 40, 100 is:", o:["0.60","0.50","0.25","0.40"], a:3, e:"Σ|xᵢ − xⱼ| over all pairs = 800; G = 800/(2 × 25 × 40) = 0.40." },
 { t:"Production function", q:"The production function Q = 2K^0.3 L^0.7 shows:", o:["increasing returns to scale","constant returns to scale","no returns","decreasing returns to scale"], a:1, e:"The exponents sum to 1." },
 { t:"Production function", q:"In Q = AKᵅLᵝ the output elasticity of labour is:", o:["α + β","β","α","A"], a:1, e:"∂ln Q/∂ln L = β." },
 { t:"Production function", q:"For Q = 2K^0.3 L^0.7 at K = L = 100, the marginal product of labour is:", o:["0.7","1.4","0.3","2"], a:1, e:"MP_L = βQ/L = 0.7 × 200/100 = 1.4." },
 { t:"Production function", q:"In the Leontief static model x = Ax + d, the gross output vector is:", o:["(I − A)d","(I − A)⁻¹d","(I + A)d","A⁻¹d"], a:1, e:"Solve x − Ax = d: x = (I − A)⁻¹d." },
 { t:"Cost & profit", q:"C(q) = 100 + 2q + 0.5q² and p = 22. The profit-maximising output is:", o:["10","22","44","20"], a:3, e:"MC = 2 + q = 22, so q = 20." },
 { t:"Cost & profit", q:"At the cost-minimising input mix, the MRTS equals:", o:["1","w/r (the input price ratio)","MP_L × MP_K","Q/L"], a:1, e:"Tangency of the isoquant with the isocost line gives MRTS = w/r." },
 { t:"Dynamic models", q:"In the cobweb model q = a − bpₜ (demand), q = c + dpₜ₋₁ (supply), prices converge to equilibrium when:", o:["d &lt; b","d = 0 only","d &gt; b","b = 0"], a:0, e:"The ratio d/b must be below 1 for the oscillations to die out." },
 { t:"Dynamic models", q:"In the Harrod–Domar model, the growth rate is g = s/v. With s = 0.2 and v = 4 the growth rate is:", o:["0.8%","5%","8%","20%"], a:1, e:"0.2/4 = 0.05 = 5%." }
]},
{ id:"as", name:"Applied Statistics", questions:[
 { t:"Control charts for variables", q:"Variation due to assignable causes is:", o:["always zero","unavoidable and always present","specific, can be traced and removed","random noise only"], a:2, e:"Assignable causes are specific and correctable." },
 { t:"Control charts for variables", q:"X̿ = 50, R̄ = 4, n = 5 (A₂ = 0.577). The UCL of the X̄-chart is:", o:["53.46","54.00","50.58","52.31"], a:3, e:"50 + 0.577 × 4 = 52.31." },
 { t:"Control charts for variables", q:"For the R-chart with R̄ = 4 and D₄ = 2.114, the UCL is:", o:["6.00","2.11","4.00","8.46"], a:3, e:"D₄R̄ = 2.114 × 4 = 8.456." },
 { t:"Control charts for attributes", q:"For a p-chart with p̄ = 0.05 and n = 100 the lower control limit is:", o:["0.05","−0.015","0.115","0"], a:3, e:"0.05 − 3(0.0218) is negative, so LCL is set to 0." },
 { t:"Control charts for attributes", q:"For a c-chart with c̄ = 9, the upper control limit is:", o:["12","9","18","27"], a:2, e:"9 + 3√9 = 18." },
 { t:"Control charts for attributes", q:"A chart plotting the fraction of defective items in each sample is the:", o:["p-chart","R-chart","c-chart","X̄ chart"], a:0, e:"The p-chart is for fraction defective." },
 { t:"Acceptance sampling", q:"The consumer's risk β is the probability of:", o:["rejecting a bad lot","accepting a good lot","accepting a bad lot","rejecting a good lot"], a:2, e:"The consumer is harmed when a bad lot is accepted." },
 { t:"Acceptance sampling", q:"The producer's risk α is the probability of:", o:["accepting a good lot","accepting a bad lot","rejecting a good lot","rejecting a bad lot"], a:2, e:"The producer is harmed when a good lot is rejected." },
 { t:"Acceptance sampling", q:"For the plan n = 10, c = 0 and p = 0.05, the probability of acceptance is about:", o:["0.60","0.05","0.35","0.95"], a:0, e:"0.95¹⁰ = 0.599." },
 { t:"Acceptance sampling", q:"The OC curve plots:", o:["probability of acceptance against lot fraction defective","sample size against cost","ASN against time","α against β only"], a:0, e:"It shows how the plan discriminates between good and bad lots." },
 { t:"Sequential sampling & SPRT", q:"In Wald's SPRT with α = 0.05 and β = 0.10, the upper bound A = (1 − β)/α is:", o:["9.5","18","0.105","19"], a:1, e:"0.90/0.05 = 18." },
 { t:"Sequential sampling & SPRT", q:"In the SPRT, sampling continues while the likelihood ratio Lₙ lies:", o:["below B","between B and A","at 1 only","above A"], a:1, e:"Stop and reject at Lₙ ≥ A, stop and accept at Lₙ ≤ B." },
 { t:"Time series", q:"The first 3-year moving average of 10, 12, 14, 13, 17 is:", o:["12.5","14","13","12"], a:3, e:"(10 + 12 + 14)/3 = 12." },
 { t:"Time series", q:"The least-squares trend y = 13.2 + 1.5t (t coded −2..2) forecasts at t = 3 the value:", o:["17.7","18.0","15.0","16.2"], a:0, e:"13.2 + 4.5 = 17.7." },
 { t:"Time series", q:"The component of a time series that repeats regularly within a year is the:", o:["trend","cyclical variation","irregular variation","seasonal variation"], a:3, e:"Seasonal variation follows the calendar." },
 { t:"Index numbers", q:"The Laspeyres price index uses as weights the:", o:["average quantities","none","base-year quantities","current-year quantities"], a:2, e:"Laspeyres = Σp₁q₀/Σp₀q₀." },
 { t:"Index numbers", q:"For p₀ = (10, 20), q₀ = (5, 2), p₁ = (12, 25), the Laspeyres index is about:", o:["125","110","122.2","118"], a:2, e:"(12×5 + 25×2)/(10×5 + 20×2) = 110/90 = 1.222." },
 { t:"Index numbers", q:"Fisher's ideal index is the:", o:["geometric mean of Laspeyres and Paasche","arithmetic mean of Laspeyres and Paasche","harmonic mean of the two","their difference"], a:0, e:"F = √(L × P); it satisfies time reversal and factor reversal." },
 { t:"Educational statistics", q:"A child with mental age 12 and chronological age 10 has IQ:", o:["120","12","83","100"], a:0, e:"IQ = (12/10) × 100 = 120." },
 { t:"Educational statistics", q:"A split-half reliability of 0.60 gives a Spearman–Brown full-test reliability of:", o:["0.60","0.80","0.90","0.75"], a:3, e:"2(0.6)/(1 + 0.6) = 0.75." }
]}
);

MOCKS.push(
{ id:"es", name:"Economic Statistics", minutes:30, questions:[
 { q:"According to the law of demand, other things equal, when price rises, quantity demanded:", o:["falls","stays constant","doubles","rises"], a:0, e:"Price and quantity demanded move in opposite directions." },
 { q:"For a demand function q = A·p⁻², the price elasticity of demand is:", o:["−A","−1","−2 at every price","varies with p"], a:2, e:"A power function has constant elasticity equal to the exponent." },
 { q:"If income rises by 10% and quantity demanded by 5%, the income elasticity is:", o:["2","5","0.5","0.05"], a:2, e:"5/10 = 0.5, a necessity." },
 { q:"With budget line 2x + 5y = 100, the maximum amount of y that can be bought is:", o:["10","40","50","20"], a:3, e:"Set x = 0: y = 100/5 = 20." },
 { q:"For U = xy, M = 100, p₁ = 2, p₂ = 5, the optimal x is:", o:["25","10","20","50"], a:0, e:"Half the budget goes to x: 50/2 = 25." },
 { q:"A good whose demand falls when income rises is called:", o:["luxury","inferior","normal","complement"], a:1, e:"Negative income elasticity: inferior good." },
 { q:"If ln X ~ N(μ, σ²), the variance of ln X is:", o:["μ","σ","e^σ²","σ²"], a:3, e:"That is the definition of the parameter σ²." },
 { q:"Gibrat's law of proportionate effect states that:", o:["income follows Pareto exactly","growth rate of income is independent of income size","richer people grow slower","income is uniform"], a:1, e:"Proportional random growth leads to a lognormal distribution." },
 { q:"In Pareto's law a larger value of α means:", o:["less inequality","no change","more inequality","a bigger mean"], a:0, e:"A larger α gives a thinner upper tail." },
 { q:"The Lorenz curve always lies:", o:["on the x-axis","on or below the 45° line","above the 45° line","above the y-axis only"], a:1, e:"Cumulative income share cannot exceed cumulative population share when sorted from the poorest." },
 { q:"The Gini coefficient equals:", o:["1/(area)","2 × area above 45° line","area under Lorenz curve","1 − 2 × (area under the Lorenz curve)"], a:3, e:"G = 1 − 2A, where A is the area under the Lorenz curve." },
 { q:"If the area under the Lorenz curve is 0.35, the Gini coefficient is:", o:["0.70","0.30","0.65","0.35"], a:1, e:"1 − 2(0.35) = 0.30." },
 { q:"With Q = 200 and L = 100, the average product of labour is:", o:["100","2","20000","0.5"], a:1, e:"AP = Q/L = 2." },
 { q:"The MRTS of L for K is defined as:", o:["w + r","−dK/dL along an isoquant","MP_L + MP_K","Q/L"], a:1, e:"It is the rate at which K can be given up per unit increase of L keeping output fixed." },
 { q:"A Cobb–Douglas function with α + β = 1.2 has:", o:["no returns to scale","decreasing returns to scale","constant returns to scale","increasing returns to scale"], a:3, e:"The degree of homogeneity is 1.2 &gt; 1." },
 { q:"For a CES function with ρ = 1, the elasticity of substitution is:", o:["0.5","2","1","0"], a:0, e:"σ = 1/(1 + ρ) = 0.5." },
 { q:"By Euler's theorem, for a linearly homogeneous production function K·Q_K + L·Q_L equals:", o:["Q²","0","2Q","Q"], a:3, e:"Degree 1 gives n·Q = Q." },
 { q:"The cost-minimising condition for inputs is:", o:["MC = 0","MRTS = w/r","w = r","MRTS = 1"], a:1, e:"Isoquant tangent to isocost line." },
 { q:"With s = 0.2 and capital–output ratio v = 4, the Harrod–Domar growth rate is:", o:["80%","5%","20%","0.8%"], a:1, e:"g = s/v = 0.05." },
 { q:"In the Leontief model with A = [[0.2, 0.3], [0.4, 0.1]] and d = (100, 50), the gross output of sector 1 is:", o:["200","100","175","150"], a:2, e:"x₁ = (0.9 × 100 + 0.3 × 50)/0.6 = 105/0.6 = 175." }
]},
{ id:"as", name:"Applied Statistics", minutes:30, questions:[
 { q:"The usual control limits of a Shewhart chart are placed at:", o:["±6σ","±3σ","±1σ","±2σ"], a:1, e:"Three-sigma limits are standard." },
 { q:"A process is said to be in statistical control when:", o:["only chance causes of variation are present","all items meet specifications","no sample is taken","the range is zero"], a:0, e:"Only stable chance variation remains." },
 { q:"For X̿ = 50, R̄ = 4 and A₂ = 0.577, the LCL of the X̄-chart is:", o:["45.30","46.00","49.42","47.69"], a:3, e:"50 − 0.577 × 4 = 47.69." },
 { q:"For n = 5 the LCL of the R-chart (D₃ = 0) is:", o:["−R̄","2.114","0","R̄"], a:2, e:"D₃ = 0 for n ≤ 6, so LCL = 0." },
 { q:"The np-chart plots:", o:["the number of defects per unit","the mean","the range","the number of defective items per sample"], a:3, e:"np is the count of defectives in a sample of fixed size." },
 { q:"The u-chart is used for:", o:["defects per unit when sample size varies","fraction defective","the sample range","the sample median"], a:0, e:"The u-chart handles a varying inspection unit size." },
 { q:"CUSUM charts are especially good at detecting:", o:["large sudden shifts only","nothing","small persistent shifts in the mean","only attributes"], a:2, e:"They accumulate small deviations." },
 { q:"AQL stands for:", o:["Allowed Quota Level","Acceptable Quality Level","Actual Quantity Limit","Average Quality Line"], a:1, e:"AQL is the poorest process quality still considered satisfactory." },
 { q:"For n = 10, c = 1, p = 0.1 the probability of acceptance is about:", o:["0.9","0.349","0.5","0.736"], a:3, e:"0.9¹⁰ + 10(0.1)(0.9⁹) = 0.349 + 0.387 = 0.736." },
 { q:"As the lot fraction defective increases, the probability of acceptance on the OC curve:", o:["rises","becomes 1","falls","stays constant"], a:2, e:"Worse lots are accepted less often." },
 { q:"For large lots the approximate average outgoing quality is AOQ ≈ p × Pₐ. With p = 0.05 and Pₐ = 0.9, AOQ is:", o:["0.14","0.5","0.95","0.045"], a:3, e:"0.05 × 0.9 = 0.045." },
 { q:"In the SPRT with α = 0.05, β = 0.10, the lower bound B = β/(1 − α) is about:", o:["18","1.9","0.5","0.105"], a:3, e:"0.10/0.95 = 0.105." },
 { q:"ASN stands for:", o:["Actual Standard Normal","Annual Sales Number","Average Sample Number","Accepted Sample Number"], a:2, e:"The expected sample size of a sequential plan." },
 { q:"A long-term upward or downward movement in a time series is the:", o:["cycle","seasonal variation","irregular variation","trend"], a:3, e:"Trend is the long-term direction." },
 { q:"In the multiplicative time-series model, Y =", o:["T × S × C × I","T + S + C + I","T/S + C","T − S"], a:0, e:"Components multiply." },
 { q:"With t coded −2..2, Σty = 15 and Σt² = 10, the slope b is:", o:["0.67","3","1.5","15"], a:2, e:"b = Σty/Σt² = 1.5." },
 { q:"The Paasche price index uses the quantities of the:", o:["base year","average of both years","current year","first year only"], a:2, e:"Paasche = Σp₁q₁/Σp₀q₁." },
 { q:"The time reversal test requires:", o:["P₀₁ × P₁₀ = 1","P₀₁ + P₁₀ = 1","P₀₁ = P₁₀","P₀₁ = 0"], a:0, e:"Reversing the base and current years gives the reciprocal index." },
 { q:"A cost of living index measures the change in:", o:["production volume","population","incomes only","the cost of maintaining a fixed standard of living"], a:3, e:"It tracks the cost of a fixed basket of consumption." },
 { q:"In Bangladesh the Population and Housing Census is conducted about every:", o:["5 years","20 years","10 years","1 year"], a:2, e:"Censuses were held in 1974, 1981, 1991, 2001, 2011 and 2022." }
]}
);
