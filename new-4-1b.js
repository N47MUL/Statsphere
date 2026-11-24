/* ============ 4th YEAR, 1st SEMESTER (part 2): Design & Analysis of Experiments II, Sampling Techniques II ============ */
TOPICS.push(
{ id:"doe2", name:"Design and Analysis of Experiments II", topics:[
 { title:"Linear Estimation, Estimability & Normal Equations", body:`
  <p>The linear model is y = Xβ + e with E(e) = 0 and Var(e) = σ²I. In ANOVA models X has <b>less than full column rank</b> (more parameters than rank), so the <b>normal equations</b> XᵀXβ = Xᵀy have infinitely many solutions β⁰ = (XᵀX)⁻Xᵀy, where (XᵀX)⁻ is a generalised inverse.</p>
  <div class="formula">λᵀβ is <b>estimable</b> ⇔ λᵀ is a linear combination of the rows of X (λ in the row space)</div>
  <div class="formula">Gauss–Markov: for estimable λᵀβ, the least-squares estimator λᵀβ⁰ is BLUE (and is the same for every solution β⁰)</div>
  <p>For the one-way model yᵢⱼ = μ + τᵢ + eᵢⱼ, individual parameters μ and τᵢ are not estimable, but <b>contrasts</b> Σcᵢτᵢ with Σcᵢ = 0 (such as τ₁ − τ₂) and μ + τᵢ are estimable. Under normality the tests use F = (SS due to hypothesis / q)/(SSE/(n − r)), with r = rank(X).</p>
  <p><b>Example:</b> Three treatments, 4 parameters (μ, τ₁, τ₂, τ₃), rank 3. If ȳ₁ = 12 and ȳ₂ = 9, the estimate of τ₁ − τ₂ is 12 − 9 = 3, whatever solution of the normal equations is used.</p>
  <div class="note">Mistake: reporting an individual τᵢ as an "estimate". It depends on the constraint chosen (for example Στᵢ = 0), only estimable functions are meaningful.</div>`},
 { title:"Weighing Designs", body:`
  <p>A weighing design finds the weights of p objects from n weighings. In a <b>spring balance</b> design each object is either on the pan (1) or not (0). In a <b>chemical balance</b> design objects may be placed on either pan (+1, −1) or left out (0). The model is y = Xβ + e, estimated by β̂ = (XᵀX)⁻¹Xᵀy with Var(β̂) = σ²(XᵀX)⁻¹.</p>
  <div class="formula">Chemical balance, optimum when XᵀX = nI : Var(β̂ᵢ) = σ²/n for every object</div>
  <p><b>Example:</b> Two objects A and B. Weigh them separately: Var(Â) = σ². Instead weigh y₁ = A + B and y₂ = A − B: Â = (y₁ + y₂)/2 with Var(Â) = (σ² + σ²)/4 = σ²/2. The same two weighings give half the variance, a gain from the chemical balance design.</p>
  <div class="note">Mistake: assuming weighing design means weighing each object alone. Combining objects spreads the information so every weighing contributes to every estimate.</div>`},
 { title:"Balanced Incomplete Block (BIB) Designs", body:`
  <p>When the block size k is smaller than the number of treatments v, a complete block cannot hold all treatments. A <b>BIB design</b> has v treatments, b blocks of size k, each treatment replicated r times, and every pair of treatments appearing together in exactly λ blocks.</p>
  <div class="formula">bk = vr  ;  λ(v − 1) = r(k − 1)  ;  Fisher's inequality: b ≥ v  ;  Efficiency E = λv/(rk)</div>
  <div class="formula">Intra-block: Qᵢ = Tᵢ − (1/k)Σ(totals of blocks containing i)  ;  τ̂ᵢ = kQᵢ/(λv)  ;  Var(τ̂ᵢ − τ̂ⱼ) = 2kσ²/(λv)</div>
  <p>The analysis adjusts treatment totals for block effects (intra-block analysis). <b>Inter-block analysis</b> recovers extra information from block totals when blocks are random, and the two estimates are combined with weights from their variances.</p>
  <p><b>Example:</b> v = b = 7, r = k = 3, λ = 1 (7 blocks of 3, every pair occurs once). Check: bk = 21 = vr ✓; λ(v − 1) = 6 = r(k − 1) ✓. E = 7/9 = 0.78. Var(τ̂ᵢ − τ̂ⱼ) = 2(3)σ²/7 = 0.857σ².</p>
  <div class="note">Mistake: BIB parameters must be integers; if λ = r(k − 1)/(v − 1) is not an integer, no BIB exists.</div>`},
 { title:"Missing Plot, Latin Squares, Orthogonal Latin Squares & Youden Squares", body:`
  <p>If one observation is lost in an RCBD, estimate it by minimising the error SS. The error df is then reduced by 1 (and the treatment SS needs a correction).</p>
  <div class="formula">RCBD: x = (bB′ + tT′ − G′)/[(b − 1)(t − 1)]  ;  Latin square: x = [t(R′ + C′ + T′) − 2G′]/[(t − 1)(t − 2)]</div>
  <p>(′ means total of the observed values in the row/block/treatment of the missing plot and G′ is the grand total of the observed values.)</p>
  <div class="vis" data-vis="latin"></div>
  <p><b>Orthogonal Latin squares:</b> two t×t Latin squares are orthogonal if, superimposed, each ordered pair of symbols occurs exactly once. At most t − 1 mutually orthogonal Latin squares (MOLS) exist (t − 1 when t is a prime power, e.g. 3 MOLS for t = 4). A <b>Graeco-Latin square</b> uses two orthogonal squares to control three blocking factors. A <b>Youden square</b> is a Latin square with one or more columns deleted: each row has all treatments, columns form a BIB.</p>
  <p><b>Example:</b> RCBD with t = 3, b = 4, B′ = 20, T′ = 15, G′ = 60: x = (80 + 45 − 60)/6 = 10.83. Latin square t = 4 with R′ = 30, C′ = 35, T′ = 32, G′ = 120: x = (4 × 97 − 240)/6 = 24.67.</p>
  <div class="note">Mistake: forgetting to subtract one error df for each estimated missing value.</div>`},
 { title:"Lattice Designs & Partially Balanced Incomplete Block Designs", body:`
  <p><b>Lattice designs</b> are for k² treatments in blocks of size k. A <b>simple lattice</b> has 2 replicates (each replicate is a set of k blocks, with the second arranged "orthogonally" to the first), a <b>triple lattice</b> has 3. They are used when v is large and the available blocks are small, e.g. in variety trials.</p>
  <p>A <b>partially balanced incomplete block design (PBIB)</b> has m associate classes: pairs of treatments are 1st, 2nd, …, m-th associates, and the pair occurs together in λ₁, λ₂, …, λₘ blocks, respectively (λᵢ differ across the classes). Lattice designs are PBIBs with two associate classes. PBIBs exist for many more (v, b, k) than BIBs, with slightly unequal precision for different treatment pairs.</p>
  <p><b>Example:</b> k = 3: 9 treatments, blocks of 3. A simple lattice has 2 × 3 = 6 blocks and r = 2 replicates. Treatments in the same block of the first replicate are 1st associates (λ₁ = 1), the rest 2nd associates (λ₂ = 0 or 1).</p>
  <div class="note">Mistake: calling a PBIB "balanced". Different pairs of treatments have different variances.</div>`},
 { title:"Factorial Experiments, Confounding & Fractional Replication", body:`
  <p>In a 2ⁿ (or 3ⁿ) factorial experiment all combinations of n factors at 2 (or 3) levels are used. Main effects and interactions are estimated by contrasts; Yates' algorithm gets them quickly.</p>
  <div class="vis" data-vis="factorial"></div>
  <p><b>Confounding:</b> when a full replicate cannot fit one block, some effects (usually the highest-order interaction) are deliberately mixed up with block effects. In a 2³ with ABC confounded: Block 1 = (1), ab, ac, bc; Block 2 = a, b, c, abc. <b>Partial</b> confounding uses a different effect in different replicates, so every effect is estimated in some replicate; <b>simultaneous</b> confounding confounds several effects at once (generalised interaction included).</p>
  <p><b>Fractional replication:</b> use a fraction of the combinations. A ½ fraction of 2³ with I = ABC consists of a, b, c, abc, with aliases A = BC, B = AC, C = AB (resolution III: main effects are aliased with two-factor interactions). Asymmetric factorials mix different numbers of levels (for example 2 × 3).</p>
  <p><b>Example:</b> In a 3² factorial, df = 8: A (2), B (2), AB (4). In a 2³: 7 treatment df. A 2⁴ factorial has 16 treatment combinations.</p>
  <div class="note">Mistake: confounding an effect you want to estimate. Choose a high-order interaction you are willing to sacrifice.</div>`},
 { title:"Split-Plot, Strip-Plot & Nested Designs", body:`
  <p><b>Split-plot:</b> factor A (hard to change) is applied to whole plots in an RCBD with r blocks; factor B is applied to subplots within each whole plot. Whole-plot comparisons use <b>Error(a)</b> = A × Block; subplot comparisons (B and A×B) use <b>Error(b)</b>, which is usually smaller, so B is more precisely estimated.</p>
  <div class="vis" data-vis="anova"></div>
  <p><b>Split-split-plot</b> adds a third factor C applied to sub-subplots (three error terms). <b>Strip-plot (split-block):</b> A is applied in strips across the blocks and B in strips in the other direction, with three errors: rows, columns and the interaction.</p>
  <p><b>Nested design:</b> levels of B are not crossed with A but are different within each level of A (for example, teachers within schools): df A = a − 1, B(A) = a(b − 1), error = ab(n − 1).</p>
  <p><b>Example:</b> Split-plot with a = 3, b = 2, r = 4 blocks (N = 24; total df 23): Block 3, A 2, Error(a) = (a − 1)(r − 1) = 6, B 1, A×B 2, Error(b) = a(b − 1)(r − 1) = 9. Sum = 23 ✓. For nested a = 3, b = 4: B(A) has 3 × 3 = 9 df.</p>
  <div class="note">Mistake: testing A against the subplot error. A must be tested against Error(a).</div>`},
 { title:"Analysis of Covariance & Transformations", body:`
  <p><b>Analysis of covariance (ANCOVA)</b> combines ANOVA and regression: the response y is adjusted for an <b>ancillary</b> (concomitant) variable x measured before treatment (for example, initial weight). Model: yᵢⱼ = μ + τᵢ + β(xᵢⱼ − x̄) + eᵢⱼ.</p>
  <div class="formula">b = E_xy/E_xx (error sums of products)  ;  Adjusted mean ȳᵢ′ = ȳᵢ − b(x̄ᵢ − x̄)  ;  Error df reduced by the number of covariates</div>
  <p>ANCOVA reduces error variance, removes bias from unequal x between groups, and can also be used to analyse data with <b>missing observations</b> (a missing value is treated as a covariate). With more than one ancillary variable, b becomes a vector, found by multiple regression on the error SPs.</p>
  <p><b>Transformations</b> stabilise variance or normalise data: log for multiplicative effects and standard deviation ∝ mean, √y for counts (Poisson), arcsin √p for proportions.</p>
  <p><b>Example:</b> ȳ₁ = 20, x̄₁ = 12, x̄ = 10 and b = 0.5: adjusted mean = 20 − 0.5(12 − 10) = 19.</p>
  <div class="note">Mistake: the covariate must not be affected by the treatment; otherwise the adjustment removes part of the real treatment effect.</div>`}
]},
{ id:"st2", name:"Sampling Techniques II", topics:[
 { title:"Unequal Probability Sampling, PPS & the Horvitz–Thompson Estimator", body:`
  <p>When units differ greatly in size, SRS is inefficient. In <b>PPS</b> (probability proportional to size) unit i is selected with probability pᵢ = xᵢ/X, where x is a size measure related to the study variable y.</p>
  <div class="formula">Hansen–Hurwitz (with replacement): Ŷ = (1/n)Σ yᵢ/pᵢ  ;  Var(Ŷ) = (1/n)Σpᵢ(yᵢ/pᵢ − Y)²</div>
  <div class="formula">Horvitz–Thompson (any design): Ŷ_HT = Σ yᵢ/πᵢ  ;  Var = Σ(1 − πᵢ)yᵢ²/πᵢ + 2ΣΣ (πᵢⱼ − πᵢπⱼ)yᵢyⱼ/(πᵢπⱼ)</div>
  <p>πᵢ is the inclusion probability of unit i and πᵢⱼ that of the pair (i, j). The Sen–Yates–Grundy form of the variance is non-negative if πᵢπⱼ ≥ πᵢⱼ. <b>Cumulative total method:</b> list cumulative sizes and select unit i when the random number R satisfies Tᵢ₋₁ &lt; R ≤ Tᵢ.</p>
  <p><b>Example:</b> Sizes (10, 20, 70), so p = (0.1, 0.2, 0.7). Draw the second unit with y = 50: Ŷ = 50/0.2 = 250. HT with y = 8 (π = 0.4) and y = 12 (π = 0.6): Ŷ = 8/0.4 + 12/0.6 = 40.</p>
  <div class="note">Mistake: PPS helps only when y is roughly proportional to x. If not, PPS can be worse than SRS.</div>`},
 { title:"Selection Methods: Brewer, Durbin, Raj, Murthy, RHC, Sampford & PPS Systematic", body:`
  <p>PPS <b>without replacement</b> avoids selecting a unit twice and is more efficient than with replacement.</p>
  <ul><li><b>Brewer and Durbin (n = 2):</b> two units selected so that πᵢ = 2pᵢ (needs pᵢ &lt; 1/2).</li>
  <li><b>Raj's and Murthy's methods:</b> successive draws with probabilities adjusted after each draw; <b>Murthy's</b> estimator is an unordered estimator (Rao–Blackwellised), usually more efficient than Raj's ordered estimator.</li>
  <li><b>Rao–Hartley–Cochran (RHC):</b> randomly split the N units into n groups, select one unit from each group with probability proportional to size within the group: Ŷ = Σ yᵢPᵢ/pᵢ, where Pᵢ is the sum of p in group i.</li>
  <li><b>Sampford's method:</b> a PPS scheme without replacement for any n which guarantees πᵢⱼ ≤ πᵢπⱼ (non-negative SYG variance estimator).</li>
  <li><b>PPS systematic:</b> sampling interval k = X/n, random start r ≤ k, choose units whose cumulative size range contains r, r + k, r + 2k, ….</li></ul>
  <p><b>Example (PPS systematic):</b> sizes 10, 20, 30, 40 with cumulative totals 10, 30, 60, 100 and n = 2. k = 100/2 = 50. Random start 25 gives points 25 and 75: 25 lies in (10, 30] (unit 2) and 75 lies in (60, 100] (unit 4). Selected: units 2 and 4.</p>
  <div class="note">Mistake: in PPS systematic sampling a unit with size greater than k can be selected twice, so the very large units must be handled separately.</div>`},
 { title:"Multi-Stage Sampling", body:`
  <p>In multi-stage sampling the population is divided into <b>primary stage units (PSUs)</b>, a sample of PSUs is chosen, then <b>secondary stage units (SSUs)</b> are chosen within the selected PSUs, and so on (villages → households → persons). Only the selected PSUs need a complete list of units, which greatly reduces cost.</p>
  <div class="formula">Two-stage, equal PSUs (N PSUs of M SSUs; n PSUs, m SSUs each):  ȳ = Σȳᵢ/n  ;  Var(ȳ) = (1 − f₁)S₁²/n + f₁(1 − f₂)S₂²/(nm)</div>
  <p>Here f₁ = n/N and f₂ = m/M. For <b>unequal</b> clusters, units can be chosen with equal probability or PPS (with or without replacement). A design is <b>self-weighting</b> if every ultimate unit has the same probability of selection, so the sample mean needs no weights: for example PSU chosen PPS to size Mᵢ, then a fixed number m within each: P = n(Mᵢ/M₀)(m/Mᵢ) = nm/M₀, constant.</p>
  <p><b>Example:</b> N = 100, n = 10, M = 50, m = 5, S₁² = 40, S₂² = 60: f₁ = f₂ = 0.1. Var(ȳ) = 0.9 × 40/10 + 0.1 × 0.9 × 60/50 = 3.6 + 0.108 = 3.708.</p>
  <div class="note">Mistake: the first-stage term usually dominates, so adding more PSUs is better than adding more SSUs per PSU.</div>`},
 { title:"Double Sampling (Two-Phase Sampling)", body:`
  <p>When the population mean x̄′ of an auxiliary variable is unknown, take a large first-phase sample n′ and measure only the cheap variable x, then a second-phase subsample n and measure the expensive variable y (and x).</p>
  <div class="formula">Ratio: ȳ_dr = (ȳ/x̄)x̄′  ;  Regression: ȳ_lr = ȳ + b(x̄′ − x̄)  ;  Difference: ȳ_d = ȳ + K(x̄′ − x̄)</div>
  <p><b>Double sampling for stratification:</b> the first phase classifies the n′ units into strata and estimates the weights wₕ = n′ₕ/n′; the second phase takes a subsample from each stratum to measure y. <b>Repetitive surveys</b> repeat a survey on a regular basis (for example every year) and use earlier information.</p>
  <p><b>Example:</b> n′ = 500 with x̄′ = 50; n = 50 with ȳ = 24 and x̄ = 48. Ratio estimate: (24/48) × 50 = 25. Regression with b = 0.4: 24 + 0.4(50 − 48) = 24.8. Difference with K = 1: 24 + 2 = 26.</p>
  <div class="note">Mistake: double sampling needs a cheap auxiliary variable x strongly correlated with y. A weak correlation cannot repay the cost of the extra phase.</div>`},
 { title:"Sampling on Two or More Occasions", body:`
  <p>Many surveys repeat the sampling: monthly labour force surveys, annual price surveys. We want an estimate for the current occasion, the change between occasions, or the average over all occasions. A <b>partial replacement</b> (rotation) design retains part of the first-occasion sample (the <b>matched</b> part) and replaces the rest with new units (<b>unmatched</b>).</p>
  <div class="formula">Combined: ȳ₂ = Q·ȳ₂ᵤ + (1 − Q)[ȳ₂ₘ + b(ȳ₁ − ȳ₁ₘ)]  (unmatched mean combined with a regression estimate from the matched part)</div>
  <p>Matching helps estimate <b>change</b> and, when the correlation ρ between occasions is high, also improves the current estimate. Rotating part of the sample also reduces respondent fatigue. The gain in precision grows with ρ; when ρ = 0 matching offers no gain.</p>
  <p><b>Example:</b> A monthly survey keeps 75% of households from the previous month and adds 25% new ones: month-to-month changes are measured precisely because most households are the same.</p>
  <div class="note">Mistake: keeping the same sample forever biases the results (panel conditioning, fatigue). Rotation solves both problems.</div>`},
 { title:"Sampling & Non-Sampling Errors, Non-Response & Interpenetrating Subsamples", body:`
  <p>Non-sampling errors include <b>non-response</b>, <b>coverage errors</b>, <b>measurement errors</b> and <b>interviewer bias</b>. They can be estimated by re-interviews, check surveys, record checks, or by the method of <b>interpenetrating subsamples</b> (Mahalanobis).</p>
  <div class="formula">Non-response bias of the respondents' mean:  W₂(Ȳ₁ − Ȳ₂)  (W₂ = non-respondent fraction)</div>
  <div class="formula">Interpenetrating subsamples: k independent subsamples ⇒ Var(ȳ) = Σ(ȳᵢ − ȳ)²/[k(k − 1)]</div>
  <p>To cut non-response use <b>callbacks</b>, better timing and, as in the Hansen–Hurwitz technique, a <b>subsample of the non-respondents</b> followed up intensively. Assigning subsamples at random to different interviewers separates the interviewer effect from the real variation. Differences between subsample means signal interviewer bias.</p>
  <p><b>Example:</b> W₂ = 0.2, Ȳ₁ = 50, Ȳ₂ = 40: bias = 0.2 × 10 = 2. Four subsample means 20, 22, 18, 24: ȳ = 21, Σ(ȳᵢ − ȳ)² = 20, Var(ȳ) = 20/12 = 1.67.</p>
  <div class="note">Mistake: replacing a non-respondent by a convenient neighbour does not remove the non-response bias; it hides it.</div>`},
 { title:"Large-Scale Surveys in Bangladesh: DHS, HIES, SVRS", body:`
  <p>Large national surveys in Bangladesh use stratified, multi-stage cluster designs with PSUs taken from the latest population census.</p>
  <ul><li><b>BDHS (Bangladesh Demographic and Health Survey):</b> part of the international DHS programme; fertility, mortality, family planning, maternal and child health and nutrition; repeated about every 3–4 years (NIPORT).</li>
  <li><b>HIES (Household Income and Expenditure Survey), BBS:</b> income, consumption and poverty lines, and the weights for the consumer price index.</li>
  <li><b>SVRS (Sample Vital Registration System), BBS:</b> continuous registration of births, deaths and migration in sample areas, giving annual vital rates.</li></ul>
  <p><b>Design features:</b> stratification by division, urban/rural; first stage PSUs (enumeration areas) selected with PPS to the number of households, then a fixed number of households by systematic sampling. Such a design is close to self-weighting. Sampling weights correct for unequal probabilities and non-response.</p>
  <p><b>Example:</b> A 2-stage design selecting 600 EAs and 30 households per EA gives 18,000 households. The design effect is the ratio of the variance of the complex design to the variance of an SRS of the same size.</p>
  <div class="note">Check the latest survey year and sample size before quoting numbers: they change with each round.</div>`}
]}
);

QUIZZES.push(
{ id:"doe2", name:"Design and Analysis of Experiments II", questions:[
 { t:"Linear estimation & estimability", q:"A parametric function λᵀβ is estimable if:", o:["X has full column rank only","σ² is known","λ = 0 only","λᵀ is a linear combination of the rows of X"], a:3, e:"Estimability means λᵀβ has a linear unbiased estimator, equivalent to λ lying in the row space of X." },
 { t:"Linear estimation & estimability", q:"In the one-way model yᵢⱼ = μ + τᵢ + eᵢⱼ with 3 treatments, which function is estimable?", o:["τ₁","μ","τ₁ + τ₂ + τ₃ + μ + 1","τ₁ − τ₂"], a:3, e:"Treatment contrasts are estimable; individual parameters are not." },
 { t:"Linear estimation & estimability", q:"The Gauss–Markov theorem says that the least-squares estimator of an estimable function is:", o:["the median","the best linear unbiased estimator","always the MLE of σ²","biased but efficient"], a:1, e:"It has the smallest variance among linear unbiased estimators." },
 { t:"Weighing designs", q:"Two objects are weighed as y₁ = A + B and y₂ = A − B. The variance of Â = (y₁ + y₂)/2 is:", o:["2σ²","σ²/2","σ²/4","σ²"], a:1, e:"Var = (σ² + σ²)/4 = σ²/2." },
 { t:"Weighing designs", q:"In a chemical balance weighing design the elements of the design matrix are:", o:["+1, −1 or 0","any real numbers","only −1","0 or 1 only"], a:0, e:"Objects may be on the left pan (+1), right pan (−1) or not weighed (0)." },
 { t:"BIB designs", q:"In a BIB design with parameters (v, b, r, k, λ), the identity bk equals:", o:["λv","r + k","v(k − 1)","vr"], a:3, e:"The total number of plots is counted by blocks (bk) and by treatments (vr)." },
 { t:"BIB designs", q:"For a BIB design with v = 7, r = 3, k = 3 the value of λ is:", o:["3","2","0","1"], a:3, e:"λ = r(k − 1)/(v − 1) = 6/6 = 1." },
 { t:"BIB designs", q:"Fisher's inequality for a BIB design states:", o:["k ≥ v","b ≤ v","r ≤ λ","b ≥ v"], a:3, e:"The number of blocks cannot be smaller than the number of treatments." },
 { t:"BIB designs", q:"The efficiency factor E = λv/(rk) of the BIB design with v = 7, r = 3, k = 3 and λ = 1 is about:", o:["0.50","0.33","1.00","0.78"], a:3, e:"7/9 = 0.778." },
 { t:"Missing plot & Latin squares", q:"RCBD with t = 3, b = 4, B′ = 20, T′ = 15 and G′ = 60: the estimate of the missing value is:", o:["20","10.83","5","15"], a:1, e:"x = (4 × 20 + 3 × 15 − 60)/(3 × 2) = 65/6 = 10.83." },
 { t:"Missing plot & Latin squares", q:"When one missing value is estimated, the error df of the analysis is reduced by:", o:["t","0","2","1"], a:3, e:"One df is used up for the estimated value." },
 { t:"Missing plot & Latin squares", q:"The maximum number of mutually orthogonal Latin squares of order t is:", o:["t + 1","t","2t","t − 1"], a:3, e:"At most t − 1, attained when t is a prime power." },
 { t:"Youden squares", q:"A Youden square is:", o:["a Latin square with one or more columns removed","a split-plot design","a design with no blocks","a square factorial"], a:0, e:"It is an incomplete Latin square: rows are complete blocks and columns form a BIB." },
 { t:"Lattice & PBIB", q:"A simple lattice design for 9 treatments in blocks of size 3 has how many blocks?", o:["9","6","3","12"], a:1, e:"k = 3, 2 replicates of 3 blocks each: 6 blocks." },
 { t:"Lattice & PBIB", q:"In a PBIB design, the number of times a pair of treatments occurs together:", o:["equals r","is always 0","depends on the associate class of the pair","is the same λ for every pair"], a:2, e:"Different associate classes have different λᵢ." },
 { t:"Factorial & confounding", q:"In a 2³ factorial with ABC confounded, the block containing (1) also contains:", o:["ab, c, bc","abc, a, b","ab, ac, bc","a, b, c"], a:2, e:"The block with an even number of letters: (1), ab, ac, bc." },
 { t:"Factorial & confounding", q:"In the half fraction I = ABC of a 2³ design, the alias of A is:", o:["C","ABC","BC","AB"], a:2, e:"A·ABC = A²BC = BC." },
 { t:"Factorial & confounding", q:"The number of treatment combinations in a 2⁴ factorial is:", o:["8","24","16","32"], a:2, e:"2⁴ = 16." },
 { t:"Split-plot", q:"In a split-plot design with a = 3, b = 2 and r = 4 blocks, the error (b) df is:", o:["12","3","6","9"], a:3, e:"a(b − 1)(r − 1) = 3 × 1 × 3 = 9." },
 { t:"Analysis of covariance", q:"ȳ₁ = 20, x̄₁ = 12, x̄ = 10 and b = 0.5. The adjusted mean of treatment 1 is:", o:["20","19","21","10"], a:1, e:"20 − 0.5(12 − 10) = 19." }
]},
{ id:"st2", name:"Sampling Techniques II", questions:[
 { t:"Unequal probability sampling & HT estimator", q:"The Horvitz–Thompson estimator of the population total is:", o:["N·ȳ only","Σ yᵢπᵢ","Σ yᵢ/πᵢ","Σ yᵢ/n"], a:2, e:"Each sampled value is weighted by the inverse of its inclusion probability." },
 { t:"Unequal probability sampling & HT estimator", q:"Two sampled units have y = 8, π = 0.4 and y = 12, π = 0.6. The HT estimate of the total is:", o:["35","20","40","60"], a:2, e:"8/0.4 + 12/0.6 = 20 + 20 = 40." },
 { t:"Unequal probability sampling & HT estimator", q:"In PPS sampling the selection probability pᵢ is proportional to:", o:["a size measure of the unit","the sample size","the study variable's variance","the sampling interval"], a:0, e:"pᵢ = xᵢ/X where x measures size." },
 { t:"Unequal probability sampling & HT estimator", q:"Sizes (10, 20, 70) give p = (0.1, 0.2, 0.7). In a PPS-with-replacement draw of one unit, the second unit with y = 50 is selected. The estimate of the total is:", o:["100","500","250","50"], a:2, e:"Ŷ = y/p = 50/0.2 = 250." },
 { t:"Unequal probability sampling & HT estimator", q:"PPS sampling is most beneficial when the study variable y is roughly:", o:["negatively related to x","unrelated to size","constant","proportional to size x"], a:3, e:"Then yᵢ/pᵢ is nearly constant and the variance is small." },
 { t:"Selection methods", q:"Sizes 10, 20, 30, 40 (cumulative 10, 30, 60, 100), n = 2 and a random start 25 in PPS systematic sampling. The selected units are:", o:["2 and 4","1 and 3","2 and 3","3 and 4"], a:0, e:"k = 50; points 25 and 75 fall in unit 2 (10, 30] and unit 4 (60, 100]." },
 { t:"Selection methods", q:"The Brewer–Durbin method of PPS without replacement is designed for samples of size:", o:["1","3","2","any n"], a:2, e:"It was devised for n = 2 with πᵢ = 2pᵢ." },
 { t:"Selection methods", q:"In the Rao–Hartley–Cochran (RHC) method:", o:["all units in a cluster are chosen","units are selected systematically by name","units are randomly divided into n groups and one unit is chosen from each group","every unit is chosen with equal probability"], a:2, e:"One unit is drawn with PPS within each random group." },
 { t:"Selection methods", q:"Raj's, Murthy's and Sampford's methods are procedures for selecting units with PPS:", o:["without replacement","by judgement","with replacement only","from strata only"], a:0, e:"They avoid repeated selection of a unit." },
 { t:"Multi-stage sampling", q:"N = 100, n = 10, M = 50, m = 5, S₁² = 40 and S₂² = 60. The variance of ȳ in two-stage sampling is:", o:["4.0","3.6","3.71","0.108"], a:2, e:"0.9(40)/10 + 0.1(0.9)(60)/50 = 3.6 + 0.108 = 3.708." },
 { t:"Multi-stage sampling", q:"A self-weighting sample design is one in which:", o:["only large clusters are chosen","each stage uses stratification","weights are estimated afterwards","every ultimate unit has the same probability of selection"], a:3, e:"Then the simple sample mean is unbiased without weights." },
 { t:"Multi-stage sampling", q:"With N = 100 PSUs and n = 10 selected, the first-stage finite population correction (1 − f₁) is:", o:["0.9","1.1","0.1","0.99"], a:0, e:"f₁ = 0.1, so 1 − f₁ = 0.9." },
 { t:"Double sampling", q:"Double sampling is mainly useful when:", o:["the population is very small","the population mean of an auxiliary variable is unknown but cheap to estimate","no auxiliary variable exists","a census is available"], a:1, e:"A large first-phase sample estimates x̄′ cheaply." },
 { t:"Double sampling", q:"With x̄′ = 50, ȳ = 24 and x̄ = 48, the ratio-type double sampling estimate ȳ_dr = (ȳ/x̄)x̄′ equals:", o:["25","24","23","26"], a:0, e:"(24/48) × 50 = 25." },
 { t:"Double sampling", q:"The regression estimate ȳ + b(x̄′ − x̄) with ȳ = 24, b = 0.4, x̄′ = 50 and x̄ = 48 is:", o:["26","24.4","25","24.8"], a:3, e:"24 + 0.4 × 2 = 24.8." },
 { t:"Non-sampling errors", q:"Interpenetrating subsamples are used mainly to:", o:["assess non-sampling (for example interviewer) errors and obtain a variance estimate","stratify","increase the sample size","select clusters"], a:0, e:"Independent subsamples let you compare enumerators and compute variance from subsample means." },
 { t:"Non-sampling errors", q:"Non-respondents are 20% of the sample; the respondents' mean is 50 and the non-respondents' mean is 40. The bias of the respondents' mean is:", o:["8","2","0.2","10"], a:1, e:"Bias = W₂(Ȳ₁ − Ȳ₂) = 0.2 × 10 = 2." },
 { t:"Non-sampling errors", q:"Four independent subsample means are 20, 22, 18 and 24. The variance of their mean is:", o:["5","1.67","6.67","20"], a:1, e:"Σ(ȳᵢ − 21)² = 20; 20/(4 × 3) = 1.67." },
 { t:"Large-scale surveys in Bangladesh", q:"SVRS in Bangladesh stands for:", o:["Survey of Village Records and Statistics","Sample Variable Rate Survey","Sample Vital Registration System","Standard Variance Reporting Scheme"], a:2, e:"It provides annual estimates of vital events such as births and deaths." },
 { t:"Large-scale surveys in Bangladesh", q:"The Bangladesh Demographic and Health Survey (BDHS) mainly provides:", o:["stock prices","fertility, mortality and health indicators","road lengths","only census counts"], a:1, e:"BDHS is part of the DHS programme on population and health." }
]}
);

MOCKS.push(
{ id:"doe2", name:"Design and Analysis of Experiments II", minutes:30, questions:[
 { q:"The normal equations XᵀXβ = Xᵀy have a unique solution only when XᵀX is:", o:["non-singular (full rank)","zero","singular","symmetric only"], a:0, e:"A unique β̂ = (XᵀX)⁻¹Xᵀy needs full column rank." },
 { q:"In a less-than-full-rank model a solution of the normal equations is found using:", o:["a generalised inverse","the median","only the mean","logarithms"], a:0, e:"β⁰ = (XᵀX)⁻Xᵀy." },
 { q:"If ȳ₁ = 12 and ȳ₂ = 9 in a one-way layout, the estimate of τ₁ − τ₂ is:", o:["1.33","21","−3","3"], a:3, e:"It is the difference of treatment means." },
 { q:"A BIB design has v = 5, b = 10, k = 3. The replication r is:", o:["3","6","10","5"], a:1, e:"r = bk/v = 30/5 = 6." },
 { q:"For that design the value of λ is:", o:["1","6","2","3"], a:3, e:"λ = r(k − 1)/(v − 1) = 6 × 2/4 = 3." },
 { q:"For a BIB with v = 7, k = 3, λ = 1 the variance of the difference of two adjusted treatment means is:", o:["2σ²/3","6σ²/7","2σ²","σ²/7"], a:1, e:"2kσ²/(λv) = 6σ²/7." },
 { q:"In intra-block analysis of a BIB design, treatment totals are adjusted for:", o:["the error","nothing","block effects","the grand mean only"], a:2, e:"Qᵢ = Tᵢ − (1/k)Σ block totals." },
 { q:"In a 4 × 4 Latin square with R′ = 30, C′ = 35, T′ = 32 and G′ = 120, the missing value estimate is:", o:["30","24.67","12","8"], a:1, e:"(4 × 97 − 240)/6 = 148/6 = 24.67." },
 { q:"Two Latin squares are orthogonal if, when superimposed:", o:["all cells are equal","every ordered pair of symbols occurs exactly once","rows are the same","they share all symbols in the same positions"], a:1, e:"That is the definition of orthogonality." },
 { q:"The number of mutually orthogonal Latin squares of order 4 is:", o:["1","3","4","2"], a:1, e:"For t = 4, a prime power, t − 1 = 3." },
 { q:"A Graeco-Latin square controls:", o:["no factors","only treatments","three blocking factors","one blocking factor"], a:2, e:"Rows, columns and the Greek letters give three sources of control, plus the Latin letter treatments." },
 { q:"A triple lattice design has how many replicates?", o:["9","2","4","3"], a:3, e:"Simple lattice: 2; triple lattice: 3." },
 { q:"The number of treatment degrees of freedom in a 2³ factorial is:", o:["7","8","6","3"], a:0, e:"2³ − 1 = 7." },
 { q:"The interaction AB in a 3² factorial has how many df?", o:["2","4","1","8"], a:1, e:"(3 − 1)(3 − 1) = 4." },
 { q:"With ABC confounded in a 2³ design, the treatment 'a' shares a block with:", o:["b","(1)","ab","bc"], a:0, e:"The odd-letter block is a, b, c, abc." },
 { q:"A resolution III fractional factorial has main effects aliased with:", o:["four-factor interactions only","two-factor interactions","the mean","nothing"], a:1, e:"In resolution III, main effects are confounded with two-factor interactions." },
 { q:"A strip-plot design has how many error terms?", o:["2","4","3","1"], a:2, e:"Rows, columns and the row × column interaction errors." },
 { q:"In a nested design with a = 3 levels of A and b = 4 levels of B within each A, the df for B(A) is:", o:["3","2","9","12"], a:2, e:"a(b − 1) = 3 × 3 = 9." },
 { q:"In ANCOVA with one covariate, the error df is reduced by:", o:["2","0","the number of treatments","1"], a:3, e:"One df is used for estimating the regression slope." },
 { q:"A variance-stabilising transformation for Poisson count data is:", o:["reciprocal","none","square root","exponential"], a:2, e:"The variance of counts increases with the mean; √y stabilises it." }
]},
{ id:"st2", name:"Sampling Techniques II", minutes:30, questions:[
 { q:"Unequal-probability sampling is useful when:", o:["unit sizes vary widely","there is no frame","the population is a single unit","all units are the same size"], a:0, e:"Selecting larger units with higher probability reduces the variance." },
 { q:"The Horvitz–Thompson variance estimator requires knowledge of:", o:["only the stratum weights","only N","only the sample mean","the joint inclusion probabilities πᵢⱼ"], a:3, e:"The variance involves pairwise inclusion probabilities." },
 { q:"With sizes (10, 20, 70), the PPS selection probability of the third unit is:", o:["0.5","0.1","0.7","0.3"], a:2, e:"70/100 = 0.7." },
 { q:"In PPS with replacement, n = 2, y = (50, 35), p = (0.2, 0.1). The Hansen–Hurwitz estimate of the total is:", o:["300","600","250","350"], a:0, e:"(50/0.2 + 35/0.1)/2 = (250 + 350)/2 = 300." },
 { q:"Sizes 10, 20, 30, 40 (cumulative 10, 30, 60, 100). With the cumulative total method and random number R = 45, the selected unit is:", o:["2","3","1","4"], a:1, e:"30 &lt; 45 ≤ 60, which is unit 3." },
 { q:"Lahiri's method of PPS selection is based on:", o:["a rejection (accept–reject) procedure","systematic start only","clusters","stratification"], a:0, e:"Pairs of random numbers are drawn and rejected unless a size condition holds." },
 { q:"In Brewer's method (n = 2) the inclusion probability of a unit with p = 0.3 is:", o:["0.6","0.15","0.9","0.3"], a:0, e:"πᵢ = 2pᵢ." },
 { q:"With N = 12 units divided at random into n = 3 groups by the RHC method, each group has:", o:["12 units","6 units","3 units","4 units"], a:3, e:"12/3 = 4." },
 { q:"Murthy's estimator is an:", o:["ordered estimator only","unordered estimator","estimator for strata only","biased estimator always"], a:1, e:"It uses the sample as a set, not the order of drawing." },
 { q:"A main advantage of multi-stage sampling is that:", o:["a complete list of ultimate units is needed only in the selected clusters","it needs no PSUs","it always has a smaller variance than SRS","it eliminates sampling error"], a:0, e:"This reduces frame construction and travel cost." },
 { q:"In two-stage sampling, the larger part of the variance usually comes from:", o:["the first stage (between PSUs)","the questionnaire","the second stage","the finite population correction"], a:0, e:"The between-PSU term is typically larger." },
 { q:"With f₁ = 0.1 and f₂ = 0.2, the overall sampling fraction of a self-weighting two-stage design is:", o:["0.1","0.2","0.02","0.3"], a:2, e:"f₁ × f₂ = 0.02." },
 { q:"In three-stage sampling the stages are typically:", o:["stratum → block → item only","PSU → SSU → TSU (ultimate units)","SRS only","two stages repeated"], a:1, e:"First, second and third stage units." },
 { q:"In double sampling for stratification, the first phase is used to:", o:["classify units into strata and estimate stratum weights","measure y accurately","select clusters","select the interviewers"], a:0, e:"The second phase subsamples within each stratum." },
 { q:"The difference estimator ȳ + K(x̄′ − x̄) with ȳ = 24, x̄ = 48, x̄′ = 50 and K = 1 is:", o:["22","25","26","24"], a:2, e:"24 + 1 × 2 = 26." },
 { q:"In sampling on two occasions, partial replacement of the sample is most beneficial when the correlation between occasions is:", o:["high","negative only","unknown and irrelevant","zero"], a:0, e:"Matched units then carry information about the earlier occasion." },
 { q:"Callbacks are used mainly to reduce:", o:["sampling error","stratification error","the sample size","non-response"], a:3, e:"Returning to contact absent respondents raises the response rate." },
 { q:"The Hansen–Hurwitz technique for non-response takes:", o:["a larger census","only respondents","a subsample of the non-respondents for intensive follow-up","no further action"], a:2, e:"The subsample's mean is weighted by the non-respondent fraction." },
 { q:"HIES stands for:", o:["Housing Inspection and Evaluation Study","Highest Income Earner Survey","Household Income and Expenditure Survey","Health Index and Economic Statistics"], a:2, e:"It measures household income, expenditure and poverty." },
 { q:"The Bangladesh Demographic and Health Survey (BDHS) is mainly designed to provide:", o:["only the census count","stock market indices","road traffic counts","fertility, mortality, family planning and health indicators"], a:3, e:"BDHS is a DHS-programme survey on population and health." }
]}
);
