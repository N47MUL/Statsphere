/* ============ 1st YEAR, 2nd SEMESTER (part 1): Introduction to Probability, Sampling Techniques I ============ */
TOPICS.push(
{ id:"ip", name:"Introduction to Probability", topics:[
 { title:"Sample Space, Events & Approaches to Probability", body:`
  <p>A <b>random experiment</b> has several possible outcomes and the result cannot be predicted in advance. The set of all outcomes is the <b>sample space</b> S, and an <b>event</b> is a subset of S. Events can be simple or compound, mutually exclusive (A∩B = ∅), exhaustive (A∪B∪… = S), equally likely, or complementary.</p>
  <div class="formula">Classical: P(A) = m/n (equally likely outcomes)  ;  Empirical: P(A) = lim (f/N)</div>
  <div class="formula">Axioms: P(A) ≥ 0 ;  P(S) = 1 ;  P(A∪B) = P(A) + P(B) for mutually exclusive A, B</div>
  <div class="formula">P(Aᶜ) = 1 − P(A)  ;  P(A∪B) = P(A) + P(B) − P(A∩B)</div>
  <p><b>Example:</b> Two dice: P(sum = 7) = 6/36 = 1/6. If P(A) = 0.5, P(B) = 0.4, P(A∩B) = 0.2, then P(A∪B) = 0.7 and P(neither) = 0.3.</p>
  <div class="note">Mistake: using the classical formula when outcomes are not equally likely (for example, sum of two dice has 11 outcomes but they are not equally likely).</div>`},
 { title:"Conditional Probability & Independence", body:`
  <p>The probability of A given that B has occurred is a probability on the reduced sample space B.</p>
  <div class="formula">P(A|B) = P(A∩B)/P(B)  ,  P(B) &gt; 0</div>
  <div class="formula">Multiplicative law: P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B)</div>
  <div class="formula">Independent events: P(A∩B) = P(A)·P(B)  ⇔  P(A|B) = P(A)</div>
  <p>Independent events with positive probabilities can never be mutually exclusive, because P(A∩B) = P(A)P(B) &gt; 0. Mutually exclusive events with positive probabilities are always dependent.</p>
  <p><b>Example:</b> Two cards drawn without replacement from 52: P(both aces) = (4/52)(3/51) = 1/221. With replacement they are independent: (1/13)² = 1/169.</p>
  <div class="note">Mistake: confusing "independent" with "mutually exclusive". Also, P(A|B) ≠ P(B|A) in general.</div>`},
 { title:"Total Probability & Bayes' Theorem", body:`
  <p>If A₁,…,Aₙ partition S (mutually exclusive and exhaustive), then for any event B:</p>
  <div class="vis" data-vis="bayes"></div>
  <div class="formula">Total probability: P(B) = Σ P(Aᵢ)·P(B|Aᵢ)</div>
  <div class="formula">Bayes: P(Aᵢ|B) = P(Aᵢ)P(B|Aᵢ) / Σ P(Aⱼ)P(B|Aⱼ)</div>
  <p>P(Aᵢ) are <b>prior</b> probabilities and P(Aᵢ|B) are <b>posterior</b> probabilities (updated after seeing B).</p>
  <p><b>Example 1:</b> Machine 1 makes 60% of items, 2% defective; machine 2 makes 40%, 5% defective. P(defective) = 0.012 + 0.02 = 0.032. P(machine 1 | defective) = 0.012/0.032 = 0.375.</p>
  <p><b>Example 2:</b> A disease has prevalence 1%; the test has sensitivity 95% and false-positive rate 5%. P(positive) = 0.0095 + 0.0495 = 0.059. P(disease | positive) = 0.0095/0.059 = 0.161 only!</p>
  <div class="note">Mistake: ignoring the prior (base rate). A good test can still give mostly false positives when the disease is rare.</div>`},
 { title:"Random Variables, Probability Functions & Distribution Function", body:`
  <p>A <b>random variable</b> X assigns a real number to each outcome. Discrete X has a pmf p(x) = P(X = x) with p(x) ≥ 0 and Σp(x) = 1. Continuous X has a pdf f(x) ≥ 0 with ∫f(x)dx = 1, and P(a &lt; X &lt; b) = ∫ₐᵇ f(x)dx.</p>
  <div class="formula">Distribution function: F(x) = P(X ≤ x)  ;  f(x) = F′(x)  (continuous)</div>
  <p>F is non-decreasing, right-continuous, with F(−∞) = 0 and F(+∞) = 1. P(a &lt; X ≤ b) = F(b) − F(a). For continuous X, P(X = c) = 0.</p>
  <p><b>Example:</b> p(x) = x/10 for x = 1, 2, 3, 4 (sum = 1). P(X ≥ 3) = 7/10, F(2) = 3/10. For f(x) = kx on 0 &lt; x &lt; 2: ∫kx dx = 2k = 1, so k = 1/2.</p>
  <div class="note">Mistake: treating a pdf value as a probability (f(x) can exceed 1). Probability is the area under the pdf.</div>`},
 { title:"Joint, Marginal & Conditional Distributions", body:`
  <p>For two random variables, the joint pmf p(x, y) = P(X = x, Y = y). The <b>marginals</b> are obtained by summing out the other variable, and the <b>conditional</b> pmf is a ratio.</p>
  <div class="formula">p_X(x) = Σ_y p(x, y)  ;  p(y | x) = p(x, y)/p_X(x)  ;  Independent ⇔ p(x, y) = p_X(x)p_Y(y) for all x, y</div>
  <p><b>Example:</b> p(0,0) = 0.2, p(0,1) = 0.3, p(1,0) = 0.1, p(1,1) = 0.4. Marginal of X: 0.5, 0.5. Marginal of Y: 0.3, 0.7. P(Y = 1 | X = 1) = 0.4/0.5 = 0.8. Not independent, since p(0,0) = 0.2 ≠ 0.5 × 0.3 = 0.15.</p>
  <div class="note">Mistake: concluding independence from equal marginals. Independence needs the product rule for every cell.</div>`},
 { title:"Expectation, Variance, Covariance & Conditional Expectation", body:`
  <div class="formula">E(X) = Σx p(x) = ∫x f(x)dx  ;  Var(X) = E(X²) − [E(X)]²</div>
  <div class="formula">E(aX + b) = aE(X) + b  ;  Var(aX + b) = a²Var(X)</div>
  <div class="formula">Cov(X,Y) = E(XY) − E(X)E(Y)  ;  ρ = Cov/(σ_Xσ_Y)  ;  Var(aX + bY) = a²VarX + b²VarY + 2ab·Cov</div>
  <div class="formula">E(X) = E[E(X|Y)]  ;  Var(X) = E[Var(X|Y)] + Var[E(X|Y)]</div>
  <p>If X and Y are independent, Cov = 0, but Cov = 0 does not imply independence. Correlation is always between −1 and 1 and equals ±1 when Y = a + bX.</p>
  <p><b>Example:</b> p(x) = x/10, x = 1..4: E(X) = 3, E(X²) = 10, Var = 1. For the joint table above, E(XY) = 0.4, E(X) = 0.5, E(Y) = 0.7, so Cov = 0.4 − 0.35 = 0.05; ρ = 0.05/√(0.25 × 0.21) = 0.218. For independent X, Y: Var(2X − 3Y) = 4·VarX + 9·VarY.</p>
  <div class="note">Mistake: Var(aX) = a²Var(X), not a·Var(X). And Var(X − Y) = VarX + VarY (independent), the variances add.</div>`},
 { title:"Chebyshev's & Markov's Inequalities", body:`
  <p>These give probability bounds using only the mean and variance, without knowing the distribution.</p>
  <div class="formula">Markov (X ≥ 0): P(X ≥ a) ≤ E(X)/a</div>
  <div class="formula">Chebyshev: P(|X − μ| ≥ kσ) ≤ 1/k²  ;  P(|X − μ| &lt; kσ) ≥ 1 − 1/k²</div>
  <p><b>Example:</b> X ≥ 0 with E(X) = 10: P(X ≥ 40) ≤ 10/40 = 0.25. If μ = 50, σ = 5: P(|X − 50| ≥ 15) ≤ 25/225 = 1/9 (k = 3), so at least 8/9 of the distribution lies within 35 and 65.</p>
  <div class="note">Mistake: using Chebyshev for k ≤ 1 (the bound is trivial), and thinking the bound is exact. It is only an upper limit and is usually quite loose.</div>`},
 { title:"Moments, MGF, Characteristic Function & Distributions", body:`
  <p>The <b>rth moment</b> about the origin is μ′ᵣ = E(Xʳ). The <b>moment generating function</b> M(t) = E(e^(tX)) generates moments by differentiation: E(Xʳ) = M⁽ʳ⁾(0). The <b>characteristic function</b> φ(t) = E(e^(itX)) exists for every distribution.</p>
  <div class="formula">Bernoulli(p): M(t) = 1 − p + pe^t  ;  Binomial(n,p): (1 − p + pe^t)ⁿ  ;  Poisson(λ): exp[λ(e^t − 1)]  ;  N(μ,σ²): exp(μt + σ²t²/2)</div>
  <div class="vis" data-vis="binpois"></div>
  <p>The MGF determines the distribution uniquely, and for independent X, Y: M_{X+Y}(t) = M_X(t)·M_Y(t). Common distributions introduced here: Bernoulli, binomial, Poisson, uniform, exponential and normal.</p>
  <p><b>Example:</b> M(t) = (0.3 + 0.7e^t)⁵ is Binomial(5, 0.7): mean = 5(0.7) = 3.5, variance = 5(0.7)(0.3) = 1.05. If M(t) = exp(2t + 3t²), then it is N(2, 6).</p>
  <div class="note">Mistake: the MGF may not exist for some distributions (e.g. Cauchy), but the characteristic function always does.</div>`}
]},
{ id:"st1", name:"Sampling Techniques I", topics:[
 { title:"Concept of Sampling, Census & Survey Steps", body:`
  <p>A <b>census</b> studies every unit of the population; a <b>sample survey</b> studies only a part. Sampling is faster, cheaper and often more accurate (fewer non-sampling errors), but a census is needed when complete information on every unit is required, or when the population is very small.</p>
  <div class="vis" data-vis="sampling"></div>
  <p><b>Steps of a survey:</b> (1) state objectives, (2) define the population and sampling unit, (3) prepare the sampling frame (list of units), (4) choose sampling design and sample size, (5) design the questionnaire, (6) pilot survey, (7) field work and supervision, (8) editing, coding, analysis, (9) report.</p>
  <p>A good <b>questionnaire</b> uses short, clear, unbiased questions in logical order. A <b>pilot survey</b> is a small trial to test the questionnaire and to estimate variability for the sample size.</p>
  <div class="note">Mistake: a bigger sample does not cure a bad frame or biased questions.</div>`},
 { title:"Probability vs Non-Probability Sampling", body:`
  <p>In <b>probability sampling</b> each unit has a known, non-zero chance of selection, so sampling error can be measured and valid inference is possible: simple random, stratified, systematic, cluster, multi-stage.</p>
  <p>In <b>non-probability sampling</b> selection depends on judgement or convenience: convenience, judgement (purposive), quota and snowball sampling. These are quick and cheap, but the results cannot be generalised with a known error.</p>
  <table><tr><th>Probability</th><th>Non-probability</th></tr><tr><td>Random selection</td><td>Personal judgement</td></tr><tr><td>Sampling error estimable</td><td>Not estimable</td></tr><tr><td>Generalisable</td><td>Limited</td></tr></table>
  <p><b>Example:</b> Interviewing the first 100 students you meet is convenience sampling. Choosing every 10th name from a register after a random start is systematic (probability) sampling.</p>
  <div class="note">Mistake: calling quota sampling "stratified". Quota fills a quota by judgement, while stratified selects randomly within strata.</div>`},
 { title:"Sampling & Non-Sampling Errors, Bias & Precision", body:`
  <p><b>Sampling error</b> arises because only a part of the population is observed; it shrinks as n grows and vanishes in a census. <b>Non-sampling errors</b> (non-response, measurement, interviewer bias, coverage, processing errors) occur in both sample surveys and censuses and may grow with larger surveys.</p>
  <div class="formula">Bias = E(θ̂) − θ  ;  MSE = Var(θ̂) + Bias²  ;  Precision ∝ 1/Var(θ̂)</div>
  <p><b>Accuracy</b> = small MSE, i.e. both low bias and high precision. Think of a target: tight cluster away from the bullseye is precise but biased; scattered around the centre is unbiased but imprecise.</p>
  <p><b>Example:</b> An estimator with variance 4 and bias 3 has MSE = 4 + 9 = 13.</p>
  <div class="note">Mistake: believing that increasing n reduces every error. Bias from a faulty frame or non-response stays no matter how big the sample is.</div>`},
 { title:"Determination of Sample Size", body:`
  <p>Sample size depends on required precision (margin of error e), confidence level (Z), and population variability.</p>
  <div class="formula">Proportion: n₀ = Z²·p(1−p)/e²  ;  Mean: n₀ = (Zσ/e)²  ;  Finite population: n = n₀/[1 + (n₀ − 1)/N]</div>
  <p>When p is unknown use p = 0.5 (largest variance). Round up. Halving e quadruples n.</p>
  <p><b>Example 1:</b> p = 0.5, e = 0.05, 95% (Z = 1.96): n₀ = 3.8416 × 0.25/0.0025 = 384.16 → 385. For N = 2000: n = 384.16/(1 + 383.16/2000) = 322.4 → 323.</p>
  <p><b>Example 2:</b> σ = 15, e = 3: n₀ = (1.96 × 15/3)² = 9.8² = 96.04 → 97.</p>
  <div class="note">Mistake: forgetting to round up, and mixing e as a percent (5) with e as a proportion (0.05).</div>`},
 { title:"Simple Random Sampling (SRS)", body:`
  <p>In SRS every unit and every possible sample of size n has equal chance. <b>SRSWOR</b> (without replacement) has C(N, n) equally likely samples; SRSWR has Nⁿ.</p>
  <div class="formula">ȳ = Σyᵢ/n is unbiased for Ȳ  ;  Var(ȳ) = (1 − f)S²/n ,  f = n/N  ;  Ŷ = Nȳ,  Var(Ŷ) = N²Var(ȳ)</div>
  <div class="formula">S² = Σ(Yᵢ − Ȳ)²/(N − 1)  ;  estimated by s²;  SRSWR: Var(ȳ) = σ²/n</div>
  <p>(1 − f) is the <b>finite population correction</b>. Selection is done by lottery or random number tables.</p>
  <p><b>Example:</b> N = 500, n = 50, S² = 100: f = 0.1, Var(ȳ) = 0.9 × 100/50 = 1.8, SE = 1.34. If ȳ = 12 and N = 200, estimated total = 2400. With N = 5, n = 2 there are C(5,2) = 10 possible samples.</p>
  <div class="note">Mistake: using n instead of n−1 in s², and forgetting the fpc when n/N is large (&gt; 5%).</div>`},
 { title:"Stratified Random Sampling", body:`
  <p>The population is divided into L non-overlapping <b>strata</b> (homogeneous within, different between) and an independent SRS is taken from each. It usually gives more precise estimates than SRS, and gives estimates for each stratum.</p>
  <div class="formula">ȳ_st = Σ Wₕȳₕ ,  Wₕ = Nₕ/N  ;  Var(ȳ_st) = Σ Wₕ²(1 − fₕ)Sₕ²/nₕ</div>
  <div class="formula">Proportional: nₕ = n·Nₕ/N  ;  Neyman: nₕ = n·NₕSₕ / ΣNₕSₕ</div>
  <p>Neyman allocation gives larger samples to bigger and more variable strata (and with costs cₕ: nₕ ∝ NₕSₕ/√cₕ).</p>
  <p><b>Example:</b> N₁ = 600, N₂ = 400, n = 100. Proportional: 60 and 40. With S₁ = 10, S₂ = 20: N₁S₁ = 6000, N₂S₂ = 8000, so Neyman n₁ = 100 × 6000/14000 = 43 and n₂ = 57.</p>
  <div class="note">Mistake: strata should be homogeneous inside. If they are not, stratification gains little. Stratify by characteristic related to the study variable.</div>`},
 { title:"Systematic & Cluster Sampling, Comparison", body:`
  <p><b>Systematic sampling:</b> k = N/n; choose a random start r from 1..k and take r, r + k, r + 2k, …. Easy and spread over the frame, but dangerous if the list has periodic patterns that match k.</p>
  <p><b>Cluster sampling:</b> the population is divided into groups (clusters) such as villages or households, a random sample of clusters is selected, and <i>all</i> units in them are surveyed. It lowers cost when no complete list of units exists, but is less precise than SRS if units in a cluster are alike.</p>
  <div class="formula">Design effect: deff = 1 + (m − 1)ρ   (m = cluster size, ρ = intraclass correlation)</div>
  <table><tr><th>Design</th><th>Best when</th><th>Weakness</th></tr>
  <tr><td>SRS</td><td>Homogeneous population, full list</td><td>May miss subgroups</td></tr>
  <tr><td>Stratified</td><td>Heterogeneous, strata known</td><td>Needs stratum information</td></tr>
  <tr><td>Systematic</td><td>Ordered list</td><td>Periodicity</td></tr>
  <tr><td>Cluster</td><td>No frame, scattered units</td><td>Larger variance</td></tr></table>
  <p><b>Example:</b> N = 100, n = 10: k = 10; random start 4 gives 4, 14, 24, …, 94. For m = 10 and ρ = 0.05, deff = 1 + 9(0.05) = 1.45: you need 45% more units than SRS.</p>
  <div class="note">Mistake: for cluster sampling, you want clusters that are <i>heterogeneous inside</i> (small ρ) and similar to each other; for stratified, strata should be homogeneous inside.</div>`}
]}
);

QUIZZES.push(
{ id:"ip", name:"Introduction to Probability", questions:[
 { t:"Events & approaches to probability", q:"When two dice are rolled, P(sum = 7) is:", o:["1/9","7/36","1/6","1/12"], a:2, e:"Six of the 36 equally likely outcomes give a sum of 7: 6/36 = 1/6." },
 { t:"Events & approaches to probability", q:"If P(A) = 0.5, P(B) = 0.4 and P(A∩B) = 0.2, then P(A∪B) is:", o:["0.6","0.7","0.9","0.3"], a:1, e:"P(A∪B) = 0.5 + 0.4 − 0.2 = 0.7." },
 { t:"Events & approaches to probability", q:"The classical definition of probability requires the outcomes to be:", o:["exhaustive only","independent","equally likely","mutually dependent"], a:2, e:"P(A) = m/n assumes the n outcomes are equally likely." },
 { t:"Conditional probability & independence", q:"Two cards are drawn without replacement from a pack of 52. P(both are aces) is:", o:["1/13","4/663","1/221","1/169"], a:2, e:"(4/52)(3/51) = 12/2652 = 1/221." },
 { t:"Conditional probability & independence", q:"Two events A and B with P(A) &gt; 0, P(B) &gt; 0 that are mutually exclusive are:", o:["independent","exhaustive","equally likely","dependent"], a:3, e:"P(A∩B) = 0 ≠ P(A)P(B) &gt; 0, so they are dependent." },
 { t:"Conditional probability & independence", q:"If A and B are independent with P(A) = 0.6 and P(B) = 0.5, then P(A∩B) is:", o:["0.5","1.1","0.3","0.1"], a:2, e:"P(A∩B) = P(A)P(B) = 0.3." },
 { t:"Total probability & Bayes' theorem", q:"Machine 1 makes 60% of items with 2% defective; machine 2 makes 40% with 5% defective. P(an item is defective) is:", o:["0.026","0.032","0.035","0.07"], a:1, e:"0.6 × 0.02 + 0.4 × 0.05 = 0.012 + 0.02 = 0.032." },
 { t:"Total probability & Bayes' theorem", q:"In the same problem, P(machine 1 | item defective) is:", o:["0.625","0.375","0.60","0.30"], a:1, e:"Bayes: 0.012/0.032 = 0.375." },
 { t:"Total probability & Bayes' theorem", q:"A disease has prevalence 1%. A test has sensitivity 95% and false-positive rate 5%. P(disease | positive) is about:", o:["0.05","0.16","0.95","0.50"], a:1, e:"0.0095/(0.0095 + 0.0495) = 0.161. The rare disease makes most positives false." },
 { t:"Random variables & distribution function", q:"For p(x) = x/10, x = 1, 2, 3, 4, the value of P(X ≥ 3) is:", o:["0.4","0.7","0.6","0.3"], a:1, e:"(3 + 4)/10 = 0.7." },
 { t:"Random variables & distribution function", q:"f(x) = kx on 0 &lt; x &lt; 2 is a valid pdf when k equals:", o:["2","1","1/4","1/2"], a:3, e:"∫₀² kx dx = 2k = 1, so k = 1/2." },
 { t:"Random variables & distribution function", q:"A distribution function F(x) is:", o:["with F(−∞) = 1","non-increasing","non-decreasing with limits 0 and 1","able to exceed 1"], a:2, e:"F is non-decreasing, F(−∞) = 0 and F(∞) = 1." },
 { t:"Expectation & variance", q:"For p(x) = x/10, x = 1,…,4, E(X) equals:", o:["10","3","4","2.5"], a:1, e:"E(X) = (1 + 4 + 9 + 16)/10 = 3." },
 { t:"Expectation & variance", q:"For the same distribution E(X²) = 10. Var(X) is:", o:["1","3","10","9"], a:0, e:"Var = 10 − 3² = 1." },
 { t:"Expectation & variance", q:"X and Y are independent with Var(X) = 4 and Var(Y) = 9. Var(2X − 3Y) is:", o:["25","85","−5","97"], a:3, e:"4 × 4 + 9 × 9 = 16 + 81 = 97. Variances add, with squared coefficients." },
 { t:"Joint distributions & covariance", q:"With p(0,0) = 0.2, p(0,1) = 0.3, p(1,0) = 0.1, p(1,1) = 0.4, the value of P(Y = 1 | X = 1) is:", o:["0.7","0.4","0.5","0.8"], a:3, e:"P(X = 1) = 0.5, so 0.4/0.5 = 0.8." },
 { t:"Joint distributions & covariance", q:"For that joint table E(XY) = 0.4, E(X) = 0.5, E(Y) = 0.7. Cov(X, Y) is:", o:["0.35","0.05","0.4","0.15"], a:1, e:"Cov = 0.4 − 0.5 × 0.7 = 0.05." },
 { t:"Inequalities", q:"By Chebyshev's inequality, the proportion of a distribution within 3 standard deviations of the mean is at least:", o:["99.7%","8/9","68%","95%"], a:1, e:"1 − 1/3² = 8/9 ≈ 88.9%, for any distribution with finite variance." },
 { t:"Moments & MGF", q:"M(t) = (0.3 + 0.7eᵗ)⁵ is the MGF of a distribution with mean:", o:["5","3.5","0.7","1.5"], a:1, e:"This is Binomial(5, 0.7), mean np = 3.5." },
 { t:"Moments & MGF", q:"The MGF of Poisson(λ) is:", o:["e^{λ(eᵗ−1)}","e^{λ(t−1)}","1 − λ + λeᵗ","λeᵗ"], a:0, e:"M(t) = Σ eᵗˣ e^(−λ)λˣ/x! = exp[λ(eᵗ − 1)]." }
]},
{ id:"st1", name:"Sampling Techniques I", questions:[
 { t:"Census, survey & questionnaire", q:"Complete enumeration of every unit of the population is called a:", o:["sample survey","pilot survey","quota survey","census"], a:3, e:"A census covers the whole population." },
 { t:"Census, survey & questionnaire", q:"The first step in planning a sample survey is:", o:["writing the report","defining the objectives","printing questionnaires","data analysis"], a:1, e:"Everything else (population, design, questions) follows from the objectives." },
 { t:"Census, survey & questionnaire", q:"A pilot survey is mainly used to:", o:["test the questionnaire and estimate variability","select strata","reduce non-response to zero","replace the main survey"], a:0, e:"It is a small trial run to find problems and to get a variance estimate for the sample size." },
 { t:"Probability vs non-probability sampling", q:"Which of these is a non-probability sampling method?", o:["Quota sampling","Simple random","Systematic sampling","Stratified random"], a:0, e:"Quota sampling relies on the interviewer's judgement." },
 { t:"Probability vs non-probability sampling", q:"In probability sampling each unit has:", o:["equal weight in the report","a judged importance","a known non-zero chance of selection","a quota to fill"], a:2, e:"This allows sampling error to be measured." },
 { t:"Errors, bias & precision", q:"Non-sampling errors:", o:["occur only in sample surveys","can occur even in a census","are measured by the standard error","vanish as n increases"], a:1, e:"Non-response, measurement and processing errors exist in a census too." },
 { t:"Errors, bias & precision", q:"The bias of an estimator θ̂ is:", o:["E(θ̂) − θ","Var(θ̂)","E(θ̂²)","θ̂ − θ"], a:0, e:"Bias is the difference between the expected value of the estimator and the true parameter." },
 { t:"Errors, bias & precision", q:"An estimator has variance 4 and bias 3. Its mean squared error is:", o:["25","5","7","13"], a:3, e:"MSE = Var + Bias² = 4 + 9 = 13." },
 { t:"Sample size", q:"For estimating a proportion with p = 0.5, e = 0.05 at 95% confidence, the required n is about:", o:["1537","385","196","100"], a:1, e:"n = 1.96² × 0.25/0.05² = 384.16, rounded up to 385." },
 { t:"Sample size", q:"To estimate a mean with σ = 15 and margin of error e = 3 at 95% confidence, n is:", o:["25","30","96","97"], a:3, e:"n = (1.96 × 15/3)² = 96.04, rounded up to 97." },
 { t:"Sample size", q:"If the margin of error is halved (other things equal), the required sample size becomes:", o:["unchanged","double","half","4 times"], a:3, e:"n is proportional to 1/e², so halving e multiplies n by 4." },
 { t:"Simple random sampling", q:"The number of possible SRSWOR samples of size 2 from a population of 5 units is:", o:["5","20","10","25"], a:2, e:"C(5, 2) = 10." },
 { t:"Simple random sampling", q:"N = 500, n = 50 and S² = 100. In SRSWOR, Var(ȳ) is:", o:["2","1.8","0.2","1"], a:1, e:"(1 − 50/500) × 100/50 = 0.9 × 2 = 1.8." },
 { t:"Simple random sampling", q:"In SRS, an unbiased estimator of the population total is:", o:["ȳ/N","ȳ","Nȳ","n·ȳ"], a:2, e:"Ŷ = Nȳ." },
 { t:"Stratified sampling", q:"Stratified sampling is most effective when strata are:", o:["heterogeneous within and alike between","as small as possible","of equal size only","homogeneous within and different between"], a:3, e:"Homogeneous strata reduce within-stratum variances, which is what the variance of ȳ_st depends on." },
 { t:"Stratified sampling", q:"N₁ = 600, N₂ = 400 and n = 100. Under proportional allocation n₁ is:", o:["70","50","60","40"], a:2, e:"n₁ = 100 × 600/1000 = 60." },
 { t:"Stratified sampling", q:"Neyman allocation allocates more units to strata that are larger and have:", o:["smaller cost","smaller variance","larger standard deviation","smaller mean"], a:2, e:"nₕ ∝ NₕSₕ, so bigger and more variable strata get more units." },
 { t:"Stratified sampling", q:"The stratified mean estimator is ȳ_st =", o:["ΣNₕ/ȳₕ","Σnₕȳₕ","ΣWₕȳₕ","Σȳₕ"], a:2, e:"Weighted mean of stratum means with Wₕ = Nₕ/N." },
 { t:"Systematic sampling", q:"For N = 100 and n = 10, the sampling interval k of systematic sampling is:", o:["10","20","100","5"], a:0, e:"k = N/n = 10." },
 { t:"Cluster sampling", q:"Cluster sampling is most efficient when units within a cluster are:", o:["all missing","very similar","as varied as the whole population","identical"], a:2, e:"Heterogeneous clusters (low intraclass correlation) behave like small copies of the population." }
]}
);

MOCKS.push(
{ id:"ip", name:"Introduction to Probability", minutes:30, questions:[
 { q:"A card is drawn from a pack of 52. P(heart or king) is:", o:["17/52","5/13","1/2","4/13"], a:3, e:"13 hearts + 4 kings − 1 king of hearts = 16, so 16/52 = 4/13." },
 { q:"A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.5. P(A∪B) is:", o:["0.15","0.8","0.65","0.2"], a:1, e:"For mutually exclusive events probabilities add: 0.8." },
 { q:"If P(A∩B) = 0.2 and P(B) = 0.5, then P(A|B) is:", o:["0.4","2.5","0.7","0.1"], a:0, e:"P(A|B) = 0.2/0.5 = 0.4." },
 { q:"A bag has 5 red and 3 blue balls. Two are drawn without replacement. P(both red) is:", o:["5/8","5/14","25/64","15/56"], a:1, e:"(5/8)(4/7) = 20/56 = 5/14." },
 { q:"A and B are independent with P(A) = 0.4 and P(B) = 0.5. P(A∪B) is:", o:["0.45","0.7","0.9","0.2"], a:1, e:"0.4 + 0.5 − 0.4 × 0.5 = 0.7." },
 { q:"In Bayes' theorem, the probabilities P(Aᵢ) before the event is observed are called:", o:["likelihoods","marginal densities","posterior probabilities","prior probabilities"], a:3, e:"Priors are the probabilities before the evidence." },
 { q:"P(A₁) = 0.3, P(A₂) = 0.7, P(B|A₁) = 0.8, P(B|A₂) = 0.2. Then P(A₁|B) is:", o:["0.3","0.8","0.24","0.632"], a:3, e:"P(B) = 0.24 + 0.14 = 0.38; P(A₁|B) = 0.24/0.38 = 0.632." },
 { q:"X takes 0, 1, 2 with probabilities 0.2, 0.5, 0.3. E(X) is:", o:["1.2","1.1","1.0","0.5"], a:1, e:"0 + 0.5 + 0.6 = 1.1." },
 { q:"For the same X, Var(X) is:", o:["1.7","0.3","1.21","0.49"], a:3, e:"E(X²) = 0.5 + 1.2 = 1.7; Var = 1.7 − 1.21 = 0.49." },
 { q:"f(x) = 2x on 0 &lt; x &lt; 1. P(X &lt; 0.5) is:", o:["0.25","0.75","0.5","0.1"], a:0, e:"∫₀^0.5 2x dx = 0.25." },
 { q:"For f(x) = 2x on (0, 1), E(X) is:", o:["2/3","3/4","1/2","1/3"], a:0, e:"∫₀¹ x·2x dx = 2/3." },
 { q:"If Var(X) = 4, then Var(3X + 2) is:", o:["12","36","14","38"], a:1, e:"Var(aX + b) = a²Var(X) = 9 × 4 = 36." },
 { q:"If Cov(X, Y) = 0, then X and Y are:", o:["independent","identical","mutually exclusive","uncorrelated"], a:3, e:"Zero covariance means uncorrelated; independence is stronger." },
 { q:"The correlation between X and Y = 2X + 3 is:", o:["2","−1","+1","0.5"], a:2, e:"A perfect increasing linear relation gives ρ = +1." },
 { q:"If E(X | Y = y) = 5 for every y, then E(X) is:", o:["25","0","5","depends on Y"], a:2, e:"E(X) = E[E(X|Y)] = E(5) = 5." },
 { q:"X ≥ 0 with E(X) = 10. By Markov's inequality, P(X ≥ 40) is at most:", o:["4","0.1","0.4","0.25"], a:3, e:"E(X)/a = 10/40 = 0.25." },
 { q:"μ = 50 and σ = 5. By Chebyshev, P(|X − 50| ≥ 15) is at most:", o:["1/15","1/9","1/25","1/3"], a:1, e:"k = 3, so the bound is 1/k² = 1/9." },
 { q:"M(t) = exp(2t + 3t²) is the MGF of:", o:["mean 2, variance 3","mean 2, variance 6","mean 2, variance 9","mean 3, variance 2"], a:1, e:"Normal MGF is exp(μt + σ²t²/2): μ = 2 and σ²/2 = 3, so σ² = 6." },
 { q:"The characteristic function of a random variable:", o:["exists for every distribution","exists only if the MGF exists","exists only for the normal","exists only for discrete variables"], a:0, e:"|e^(itX)| = 1, so the expectation always exists." },
 { q:"If X and Y are independent, M_{X+Y}(t) equals:", o:["M_X(t)/M_Y(t)","M_X(t)·M_Y(t)","M_X(t) + M_Y(t)","M_X(M_Y(t))"], a:1, e:"E(e^{t(X+Y)}) = E(e^{tX})E(e^{tY}) for independent variables." }
]},
{ id:"st1", name:"Sampling Techniques I", minutes:30, questions:[
 { q:"A sampling frame is:", o:["a list of all the units of the population","the sample size","the questionnaire","the sample taken"], a:0, e:"The frame is the list from which the sample is drawn." },
 { q:"Judgement (purposive) sampling is a type of:", o:["non-probability sampling","systematic sampling","probability sampling","cluster sampling"], a:0, e:"The investigator picks units by judgement." },
 { q:"Sampling error arises because:", o:["data are entered wrongly","interviewers make mistakes","only a part of the population is observed","respondents lie"], a:2, e:"It is the difference between sample estimate and population value due to observing a sample." },
 { q:"Non-response in a survey is an example of:", o:["sampling error","random error only","non-sampling error","stratification"], a:2, e:"Non-response is a non-sampling error." },
 { q:"Interviewer's bias is a:", o:["design effect","sampling error","non-sampling error","fpc"], a:2, e:"It arises in data collection, not from sampling." },
 { q:"Precision of an estimator is inversely related to its:", o:["sample frame","bias","variance","mean"], a:2, e:"A smaller variance means higher precision." },
 { q:"An estimator is biased if:", o:["n is small","it uses a sample","Var(θ̂) &gt; 0","E(θ̂) ≠ θ"], a:3, e:"Bias exists when the expected value differs from the parameter." },
 { q:"For N = 1000 and n = 100, the finite population correction (1 − f) is:", o:["0.9","0.99","1.1","0.1"], a:0, e:"f = 0.1, so 1 − f = 0.9." },
 { q:"In SRS with n = 36 and s² = 36 (ignore the fpc), the variance of ȳ is:", o:["36","6","1","0.5"], a:2, e:"s²/n = 36/36 = 1." },
 { q:"In SRS ȳ = 12 and N = 200. The estimated population total is:", o:["212","16.7","2400","1200"], a:2, e:"Nȳ = 200 × 12 = 2400." },
 { q:"The sample size for a proportion with p = 0.3, e = 0.05 at 95% confidence is about:", o:["600","200","385","323"], a:3, e:"n = 1.96² × 0.3 × 0.7/0.05² = 322.7, rounded up to 323." },
 { q:"With n₀ = 400 and N = 1000, the finite-population adjusted n = n₀/[1 + (n₀ − 1)/N] is about:", o:["286","400","600","200"], a:0, e:"400/(1 + 399/1000) = 400/1.399 = 285.9 ≈ 286." },
 { q:"Strata sizes are 500, 300 and 200 and n = 50. Under proportional allocation the second stratum gets:", o:["15","20","25","10"], a:0, e:"50 × 300/1000 = 15." },
 { q:"With N₁S₁ = 6000 and N₂S₂ = 8000 and n = 100, the Neyman allocation n₂ is about:", o:["43","50","60","57"], a:3, e:"100 × 8000/14000 = 57.1 ≈ 57." },
 { q:"The variance of the stratified mean estimator depends on:", o:["within-stratum variances","the population range","between-stratum variances","the grand mean only"], a:0, e:"Var(ȳ_st) = ΣWₕ²(1 − fₕ)Sₕ²/nₕ involves only within-stratum variances." },
 { q:"With k = 8 and random start 3, the third unit selected in systematic sampling is:", o:["24","11","19","16"], a:2, e:"3, 11, 19, …" },
 { q:"The main danger of systematic sampling is:", o:["no randomness at all in the start","its high cost","a list with a periodic pattern matching k","very large samples"], a:2, e:"If the list has a cycle equal to k, the sample can be badly biased." },
 { q:"For cluster size m = 10 and intraclass correlation ρ = 0.05, the design effect is:", o:["1.45","1.05","10.5","0.55"], a:0, e:"deff = 1 + (m − 1)ρ = 1 + 9 × 0.05 = 1.45." },
 { q:"Cluster sampling is mainly used when:", o:["strata are known exactly","a complete list of units is unavailable and units are scattered","the population is small","precision is the only goal"], a:1, e:"Clusters need a list only of clusters and reduce travel cost." },
 { q:"Compared to SRS of the same size, stratified random sampling (with proper strata) generally gives:", o:["biased estimates","smaller or equal variance","no estimates by group","larger variance"], a:1, e:"Stratification removes between-stratum variation from the error." }
]}
);
