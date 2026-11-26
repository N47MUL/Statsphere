/* ============ CHAPTERS: 1st year (alg, ip, st1, spss, calc1, la) ============ */
var _C = window.CHAPTERS = window.CHAPTERS || {};
_C.alg = [
{ n: "Sets", d: "Ideas of set, subset, superset, power set and product set; basic set operations, real number system.",
  t: [
  { use: "Sets & Set Operations", intro: "<p>A set is just a <b>bag of distinct things</b>. Set operations are the language of probability, so master the pictures here.</p>",
    vis: [
      { t: "venn", s: ["A", "B"], u: "U", sh: ["a-b"], lab: { a: "A−B", ab: "A∩B", b: "B−A", none: "(A∪B)ᶜ" }, cap: "Shaded: A − B (in A but not in B). Try to see A∪B, A∩B and the complement in the same picture." },
      { t: "venn", s: ["A", "B", "C"], u: "U", sh: ["abc"], lab: { a: "3", b: "2", c: "4", ab: "1", ac: "2", bc: "1", abc: "5", none: "6" }, cap: "Three sets: |A∪B∪C| = 3+2+4+1+2+1+5 = 18. Inclusion–exclusion: |A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|." }],
    key: ["De Morgan: (A∪B)ᶜ = Aᶜ∩Bᶜ and (A∩B)ᶜ = Aᶜ∪Bᶜ.", "A set with n elements has 2ⁿ subsets (power set); |A×B| = |A|·|B|."],
    q: [["How many subsets has {a,b,c}?", "2³ = 8 (including ∅ and the set itself)."]] },
  { use: "Real Number System", intro: "<p>Numbers grow like a family tree: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Every gap that existed in a smaller set was filled by the next one.</p>",
    vis: [
      { t: "tree", root: { t: "ℝ", kids: [{ t: "Rational ℚ", kids: [{ t: "Integers ℤ", kids: [{ t: "Naturals ℕ" }] }, { t: "Fractions" }] }, { t: "Irrational", kids: [{ t: "√2, π, e" }] }] }, cap: "The real number family." },
      { t: "num", x: [-5, 5], iv: [[-3, 2, "[)", 1, "[−3, 2)"], [3, 5, "()", 2, "(3, 5)"]], cap: "Intervals: a filled dot means the end point is included, an open dot means excluded.", h: 140 }],
    key: ["|x| < a ⟺ −a < x < a;  |x| > a ⟺ x > a or x < −a.", "Triangle inequality: |a+b| ≤ |a|+|b|."] }
  ] },
{ n: "Complex numbers", d: "Complex numbers and their properties, De Moivre's theorem and its application, nth roots.",
  t: [
  { use: "Complex Numbers, De Moivre", intro: "<p>A complex number is a <b>point on a plane</b>. Multiplying by it stretches and rotates, which is why De Moivre's theorem is so neat.</p>",
    vis: [
      { t: "plot", x: [-4, 4], y: [-3, 3], cap: "z = 3 + 2i, its conjugate and −z. |z| = √13 ≈ 3.61 is the distance from the origin; arg z = tan⁻¹(2/3) ≈ 33.7°.", seg: [[0, 0, 3, 2, 1], [0, 0, 3, -2, 2, 1], [0, 0, -3, -2, 4, 1], [3, 0, 3, 2, "m", 1]], pts: [[3, 2, "z = 3+2i", 1], [3, -2, "z̄ = 3−2i", 2], [-3, -2, "−z", 4]], xl: "Re", yl: "Im" },
      { t: "plot", x: [-1.7, 1.7], y: [-1.3, 1.3], cap: "The five 5th roots of unity sit evenly on the unit circle, 72° apart: z = cos(2πk/5) + i sin(2πk/5).", fns: [{ f: "sqrt(1-x*x)", c: 3 }, { f: "-sqrt(1-x*x)", c: 3 }], pts: [[1, 0, "k=0", 1], ["=cos(2*PI/5)", "=sin(2*PI/5)", "k=1", 1], ["=cos(4*PI/5)", "=sin(4*PI/5)", "k=2", 1], ["=cos(6*PI/5)", "=sin(6*PI/5)", "", 1], ["=cos(8*PI/5)", "=sin(8*PI/5)", "", 1]] }],
    key: ["z = r(cosθ + i sinθ); (cosθ + i sinθ)ⁿ = cos nθ + i sin nθ.", "The n nth roots of z are equally spaced on a circle of radius r^{1/n}."] }
  ] },
{ n: "Summation of trigonometric series", d: "Method of difference, C+iS method.",
  t: [
  { use: "Summation of Trigonometric Series", intro: "<p>Two tricks: telescoping (terms cancel in pairs) and the C + iS trick (add a cosine series and i times a sine series to get a geometric series).</p>",
    vis: [
      { t: "steps", title: "C + iS method", s: ["Want \\(C=\\sum\\cos k\\theta\\). Define \\(S=\\sum\\sin k\\theta\\) as its partner.", "Form \\(C+iS=\\sum (\\cos k\\theta+i\\sin k\\theta)=\\sum z^k\\) with \\(z=e^{i\\theta}\\).", "That is a geometric series: \\(\\dfrac{z(1-z^n)}{1-z}\\).", "Take the real part for C and the imaginary part for S."] },
      { t: "plot", x: [0, 12], y: [-1.5, 1.5], fns: [{ f: "sin(x)", c: 1, l: "sin x" }, { f: "sin(x)+sin(2*x)/2+sin(3*x)/3", c: 2, l: "partial sum" }], cap: "Adding sine terms builds up new shapes: this is the seed of Fourier series." }],
    key: ["Telescoping: sin(kθ) = [cos((k−½)θ) − cos((k+½)θ)]/(2 sin(θ/2))."] }
  ] },
{ n: "Inequalities", d: "Properties and solutions of inequalities with geometrical representations; inequalities involving mean; Weierstrass, Cauchy, Tchebyshev and Jensen.",
  t: [
  { use: "Inequalities", intro: "<p>Inequalities say which side is bigger. Their proofs are pictures: a curve above its chord, a mean below another mean.</p>",
    vis: [
      { t: "plot", x: [0, 10], y: [0, 10], cap: "AM ≥ GM: for fixed b the arithmetic mean (a+b)/2 is always on or above the geometric mean √(ab). They touch only when a = b.", fns: [{ f: "(x+p.b)/2", c: 1, l: "AM", lx: 8 }, { f: "sqrt(x*p.b)", c: 2, l: "GM", lx: 8 }], vl: [["=p.b", "a = b"]], sl: [{ k: "b", l: "b ", min: 1, max: 9, v: 4 }], xl: "a" },
      { t: "plot", x: [-1, 3], y: [0, 22], cap: "Jensen: for a convex function the chord lies above the curve, so f(mean) ≤ mean of f. Here f = eˣ, points x₁ = 0, x₂ = 3.", fns: [{ f: "exp(x)", c: 1, l: "f(x)=eˣ", lx: 2.6 }], seg: [[0, 1, 3, "=exp(3)", 2]], pts: [[1.5, "=exp(1.5)", "f(mean)", 1], [1.5, "=(1+exp(3))/2", "mean of f", 2]] }],
    key: ["AM ≥ GM ≥ HM; Cauchy: (Σab)² ≤ (Σa²)(Σb²).", "Jensen: f convex ⇒ f(E X) ≤ E f(X)."] }
  ] },
{ n: "Theory of equations", d: "Polynomials and division algorithm, fundamental theorem of algebra, relations between roots and coefficients, multiple roots, transformations, synthetic division, nature of roots, Descartes' rule.",
  t: [
  { use: "Theory of Equations", intro: "<p>Roots of a polynomial are where its graph crosses the x-axis. All the formulas are ways to find or count those crossings.</p>",
    vis: [
      { t: "plot", x: [-1, 5], y: [-8, 8], cap: "f(x) = (x−1)(x−2)(x−3) + c. Slide c: the three real roots merge and disappear in pairs (complex roots come in conjugate pairs).", fns: [{ f: "(x-1)*(x-2)*(x-3)+p.c", c: 1 }], hl: [[0, ""]], sl: [{ k: "c", l: "c ", min: -3, max: 3, step: .1, v: 0 }], msg: "Sum of roots = 6, product of roots = 6 − c (from the coefficients)." },
      { t: "steps", title: "Synthetic division of x³ − 6x² + 11x − 6 by (x − 1)", s: ["Write coefficients 1, −6, 11, −6 and the test root 1.", "Bring down 1. Multiply by 1 and add to −6: −5.", "Multiply −5 by 1 and add to 11: 6. Multiply 6 by 1 and add to −6: 0.", "Remainder 0 ⇒ (x − 1) is a factor; quotient x² − 5x + 6 = (x−2)(x−3)."] }],
    key: ["For ax³+bx²+cx+d: Σroots = −b/a, Σ pairs = c/a, product = −d/a.", "Descartes: positive real roots ≤ number of sign changes in f(x)."] }
  ] }
];
_C.ip = [
{ n: "Probability", d: "Sample space, events, approaches to probability, conditional probability, independence, additive and multiplicative laws, total probability, Bayes' theorem.",
  t: [
  { use: "Sample Space, Events", intro: "<p>Probability measures how likely an event is on a scale of 0 to 1. Start by listing <b>everything that can happen</b>: the sample space.</p>",
    vis: [
      { t: "scene", h: 150, cap: "Experiment → sample space → event. For one die S = {1,…,6}; the event 'even' = {2,4,6}.", i: [{ ic: "dice", x: 70, y: 80, s: 1.6, l: "roll a die" }, { a: [115, 80, 190, 80] }, { t: "S = {1, 2, 3, 4, 5, 6}", x: 270, y: 70, b: 1 }, { t: "Event E (even) = {2, 4, 6}", x: 270, y: 105, sm: 1 }, { t: "P(E) = 3/6 = 0.5", x: 400, y: 135, b: 1, al: "end" }] },
      { t: "bar", cats: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], v: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1], yl: "ways (out of 36)", cap: "Sum of two dice: 7 has the most ways (6/36), so it is the most likely sum." },
      { t: "plot", x: [0, 200], y: [0, 1], cap: "Empirical (relative-frequency) probability settles near the true value as trials increase: law of large numbers. Slide n.", fns: [{ f: "0.5+0.5*sin(x*x*0.37)/sqrt(x+1)*3", c: 1, n: 200 }], hl: [[.5, "true 0.5"]], xl: "number of tosses" }],
    key: ["Classical: P(E) = favourable/total (equally likely outcomes).", "Axioms: P(E) ≥ 0, P(S) = 1, P(A∪B) = P(A)+P(B) for disjoint A, B.", "P(Aᶜ) = 1 − P(A); P(A∪B) = P(A)+P(B)−P(A∩B)."] },
  { use: "Conditional Probability", intro: "<p>New information shrinks the sample space. P(A | B) means: <i>among the cases where B happened</i>, how often does A also happen?</p>",
    vis: [
      { t: "tree", cap: "Two draws without replacement from 3 red, 2 blue balls. P(R then R) = 3/5 × 2/4 = 0.3.", root: { t: "Start", kids: [{ t: "R1", e: "3/5", kids: [{ t: "R2", e: "2/4" }, { t: "B2", e: "2/4" }] }, { t: "B1", e: "2/5", kids: [{ t: "R2", e: "3/4" }, { t: "B2", e: "1/4" }] }] } },
      { t: "venn", s: ["A", "B"], sh: ["ab"], lab: { a: "20", ab: "10", b: "30", none: "40" }, cap: "P(A | B) = P(A∩B)/P(B) = 10/(10+30) = 0.25: zoom into circle B and ask what share is also in A." }],
    key: ["P(A∩B) = P(B)P(A|B). Independent ⇔ P(A|B) = P(A) ⇔ P(A∩B) = P(A)P(B).", "Independent is not the same as mutually exclusive."] },
  { use: "Total Probability & Bayes", intro: "<p>Bayes' theorem <b>flips</b> a conditional probability: from P(test + | disease) to P(disease | test +). The surprise is how small the answer can be when the disease is rare.</p>",
    vis: [
      { t: "plot", x: [0, .5], y: [0, 1], cap: "Test with 95% sensitivity and 90% specificity. Even with a positive test, the chance of disease is low when the disease is rare. Slide the prevalence.", fns: [{ f: "0.95*x/(0.95*x+(1-x)*0.1)", c: 1, fill: true }], pts: [["=p.pr", "=0.95*p.pr/(0.95*p.pr+(1-p.pr)*0.1)", "P(D|+) = {0.95*p.pr/(0.95*p.pr+(1-p.pr)*0.1)}", 2]], sl: [{ k: "pr", l: "prevalence ", min: .01, max: .5, step: .01, v: .02 }], xl: "prevalence P(D)", yl: "P(D | +)" },
      { t: "flow", cols: 2, n: ["1000 people", "20 have the disease (2%)", "19 test positive", "980 healthy → 98 false positives", "Positives = 19 + 98 = 117", "P(D | +) = 19/117 = 16%"], cap: "Natural frequencies make Bayes easy: count, don't compute." }],
    key: ["P(A|B) = P(B|A)P(A) / ΣP(B|Aᵢ)P(Aᵢ).", "Prior × likelihood → posterior."] }
  ] },
{ n: "Random variables", d: "Definition, probability function, distribution function, joint, marginal and conditional probability functions.",
  t: [
  { use: "Random Variables, Probability Functions", intro: "<p>A random variable turns outcomes into numbers: 'number of heads in 3 tosses'. Its distribution is the table of values and their probabilities.</p>",
    vis: [
      { t: "bar", cats: ["0", "1", "2", "3"], v: [.125, .375, .375, .125], yl: "P(X = x)", cap: "pmf of X = number of heads in 3 tosses: 1/8, 3/8, 3/8, 1/8 (they add to 1)." },
      { t: "plot", x: [-1, 4], y: [0, 1.05], cap: "The distribution function F(x) = P(X ≤ x) is a staircase that jumps at each possible value and rises to 1.", seg: [[-1, 0, 0, 0, 1], [0, .125, 1, .125, 1], [1, .5, 2, .5, 1], [2, .875, 3, .875, 1], [3, 1, 4, 1, 1], [0, 0, 0, .125, "m", 1], [1, .125, 1, .5, "m", 1], [2, .5, 2, .875, "m", 1], [3, .875, 3, 1, "m", 1]] }],
    key: ["Discrete: Σp(x)=1. Continuous: ∫f(x)dx = 1 and P(a<X<b)=area.", "F is non-decreasing, right-continuous, F(−∞)=0, F(∞)=1."] },
  { use: "Joint, Marginal", intro: "<p>A joint table shows two variables at once. Add along a row or column to get a marginal; divide a row by its total to get a conditional.</p>",
    vis: [{ t: "table", h: ["X \\ Y", "Y=0", "Y=1", "P(X)"], r: [["X=0", ".2", ".1", ".3"], ["X=1", ".3", ".4", ".7"], ["P(Y)", ".5", ".5", "1"]], hi: ["0,3", "1,3"], cap: "Marginals are the totals. P(Y=1 | X=1) = .4/.7 = 0.571." },
      { t: "bar", cats: ["Y=0", "Y=1"], series: [{ n: "given X=0", v: [.667, .333] }, { n: "given X=1", v: [.429, .571] }], cap: "Conditional distributions of Y differ between rows, so X and Y are not independent." }],
    key: ["Independent ⇔ every cell = product of its marginals."] }
  ] },
{ n: "Mathematical expectation", d: "Expectation, variance, conditional expectation, covariance and correlation, Chebyshev's and Markov inequalities, moments, MGF, characteristic function.",
  t: [
  { use: "Expectation, Variance", intro: "<p>E(X) is the <b>long-run average</b> and the balance point of the distribution; Var(X) is the average squared distance from it.</p>",
    vis: [
      { t: "bar", cats: ["1", "2", "3", "4", "5", "6"], v: [1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6], cap: "A fair die balances at E(X) = 3.5; Var(X) = E(X²) − [E(X)]² = 91/6 − 12.25 = 2.917.", yl: "p(x)" },
      { t: "plot", x: [-4, 8], y: [0, .45], cap: "Adding a constant shifts the curve; multiplying by a stretches it: E(aX+b)=aE(X)+b, Var(aX+b)=a²Var(X).", fns: [{ f: "npdf(x,0,1)", c: 2, d: 1 }, { f: "npdf(x,p.b,p.a)", c: 1, fill: true }], sl: [{ k: "a", l: "a ", min: .5, max: 2.5, step: .1, v: 1.5 }, { k: "b", l: "b ", min: -2, max: 5, step: .5, v: 2 }] }],
    key: ["Var(X) = E(X²) − [E(X)]²; Var(X+Y) = Var X + Var Y + 2Cov(X,Y).", "E[E(Y|X)] = E(Y) and Var Y = E[Var(Y|X)] + Var[E(Y|X)]."] },
  { use: "Chebyshev", intro: "<p>Chebyshev gives a guarantee for <i>any</i> distribution: at least 1 − 1/k² of the values lie within k standard deviations.</p>",
    vis: [{ t: "bar", cats: ["k=1.5", "k=2", "k=3", "k=4"], series: [{ n: "Chebyshev bound", v: [55.6, 75, 88.9, 93.8] }, { n: "Normal data", v: [86.6, 95.4, 99.7, 100] }], yl: "% within kσ", cap: "Chebyshev is weaker than the normal rule but works for every distribution." },
      { t: "plot", x: [0, 10], y: [0, 1.05], fns: [{ f: "min(1,3/x)", c: 4, l: "Markov: P(X≥a) ≤ E(X)/a", lx: 6 }, { f: "exp(-x/3)", c: 1, l: "exponential(mean 3)", lx: 6 }], cap: "Markov bound (E(X)=3) lies above the true exponential tail." }],
    key: ["P(|X−μ| ≥ kσ) ≤ 1/k²; Markov: P(X ≥ a) ≤ E(X)/a for X ≥ 0."] },
  { use: "Moments, MGF", intro: "<p>The MGF packs <b>all moments in one function</b>: differentiate and set t = 0.</p>",
    vis: [{ t: "plot", x: [-1, 1], y: [0, 6], fns: [{ f: "exp(2*x+0.5*x*x*1)", c: 1, l: "M(t) normal(2,1)", lx: .4 }], pts: [[0, 1, "M(0)=1", 2]], cap: "M(t)=E(e^{tX}). The slope at 0 is E(X) = 2 and the curvature gives E(X²)." },
      { t: "flow", n: ["Find M(t)", "Differentiate r times", "Put t = 0", "E(Xʳ)"], cap: "How to get moments." }],
    key: ["M′(0)=E(X), M″(0)=E(X²). Independent sums: M multiplies.", "The MGF uniquely identifies a distribution."] }
  ] }
];
_C.st1 = [
{ n: "Introduction", d: "Sampling versus census, survey steps, questionnaire, pilot survey, probability and non-probability sampling, errors, bias and precision, sample size.",
  t: [
  { use: "Concept of Sampling", intro: "<p>Tasting one spoon of soup tells you about the whole pot, if the pot is well stirred. That is sampling.</p>",
    vis: [{ t: "scene", h: 170, cap: "Census counts everyone (expensive, slow); a sample counts a few (cheap, fast) and estimates the rest.", i: [{ ic: "group", x: 80, y: 80, s: 2, l: "Census: all N" }, { ic: "student", x: 260, y: 80, s: 1.5, l: "Sample: n out of N" }, { ic: "money", x: 400, y: 70, s: 1, l: "less cost, less time" }] },
      { t: "flow", n: ["Define objective", "Frame & design", "Questionnaire & pilot", "Field work", "Edit & analyse", "Report"], cols: 3, cap: "Steps of a sample survey." }],
    key: ["Frame = list of units from which the sample is drawn."] },
  { use: "Probability vs Non-Probability", intro: "<p>Probability sampling gives every unit a known chance of selection, so we can measure the error. Non-probability sampling cannot.</p>",
    vis: [{ t: "tree", root: { t: "Sampling", kids: [{ t: "Probability", kids: [{ t: "SRS" }, { t: "Stratified" }, { t: "Systematic" }, { t: "Cluster" }] }, { t: "Non-probability", kids: [{ t: "Purposive" }, { t: "Quota" }, { t: "Snowball" }] }] }, cap: "Families of sampling." }] },
  { use: "Sampling & Non-Sampling Errors", intro: "<p>Accuracy has two enemies: random error (a small sample) and bias (a systematic miss). A target picture shows the difference.</p>",
    vis: [{ t: "scene", h: 160, cap: "Bias = systematically off-target; precision = tightly clustered. We want low bias and high precision.", i: [{ ic: "target", x: 100, y: 80, s: 2, l: "Unbiased but imprecise" }, { ic: "target", x: 240, y: 80, s: 2, l: "Precise but biased" }, { ic: "target", x: 380, y: 80, s: 2, l: "Both good" }] },
      { t: "plot", x: [0, 1000], y: [0, 20], fns: [{ f: "100/sqrt(x)*1.96/5", c: 1, l: "margin of error" }], cap: "Margin of error falls like 1/√n: quadrupling the sample only halves it.", xl: "sample size n", yl: "± %" }] },
  { use: "Determination of Sample Size", intro: "<p>How many do we need? It depends on how precise we want to be and how variable the population is.</p>",
    vis: [{ t: "plot", x: [.01, .1], y: [0, 2500], fns: [{ f: "1.96*1.96*p.p*(1-p.p)/(x*x)", c: 1 }], sl: [{ k: "p", l: "p ", min: .1, max: .5, step: .05, v: .5 }], cap: "n = z²p(1−p)/e². Smaller error e needs far larger n; p = 0.5 is the worst case.", xl: "error e", yl: "n" }],
    key: ["n = z²pq/e²; with finite population n′ = n/(1 + n/N)."] }
  ] },
{ n: "Random sampling design", d: "SRS, stratified, post-stratification, systematic and cluster sampling; estimation of totals, means, proportions and standard errors; ratio and regression estimators.",
  t: [
  { use: "Simple Random Sampling", intro: "<p>Put all names in a hat and draw n of them: every sample is equally likely.</p>",
    vis: [{ t: "plot", x: [0, 100], y: [0, 5], fns: [{ f: "sqrt(25/x*(1-x/100))", c: 1 }], cap: "Standard error of the mean with σ² = 25, N = 100: it shrinks as n grows and reaches 0 when n = N (census). The factor (1−n/N) is the finite population correction.", xl: "n", yl: "SE" }],
    key: ["Var(ȳ) = (1−f)S²/n, f = n/N."] },
  { use: "Stratified Random Sampling", intro: "<p>Split the population into similar groups (strata) and sample each group. It is like making sure every class in the school is represented.</p>",
    vis: [{ t: "scene", h: 150, cap: "Strata are homogeneous inside and different between each other.", i: [{ r: [30, 40, 120, 80], k: "bx1" }, { r: [180, 40, 120, 80], k: "bx2" }, { r: [330, 40, 120, 80], k: "bx3" }, { t: "Stratum 1 (urban)", x: 90, y: 30, sm: 1 }, { t: "Stratum 2 (rural)", x: 240, y: 30, sm: 1 }, { t: "Stratum 3 (tea garden)", x: 390, y: 30, sm: 1 }, { ic: "student", x: 60, y: 95, s: .6 }, { ic: "student", x: 110, y: 95, s: .6 }, { ic: "student", x: 210, y: 95, s: .6 }, { ic: "student", x: 270, y: 95, s: .6 }, { ic: "student", x: 360, y: 95, s: .6 }, { ic: "student", x: 420, y: 95, s: .6 }] },
      { t: "bar", cats: ["SRS", "Proportional", "Optimum (Neyman)"], v: [10, 6.5, 5.1], yl: "variance of estimate", cap: "Typical variance ordering: SRS ≥ proportional ≥ optimum allocation." }],
    key: ["Proportional: nₕ = nNₕ/N. Neyman: nₕ ∝ NₕSₕ."] },
  { use: "Systematic & Cluster", intro: "<p>Systematic: pick every k-th unit after a random start. Cluster: pick whole groups (villages), then measure everyone inside.</p>",
    vis: [{ t: "scene", h: 130, cap: "Every 4th unit, random start 2: units 2, 6, 10, 14, ...", i: [...[...Array(12).keys()].map(i => ({ r: [24 + i * 37, 50, 30, 30], k: i % 4 === 1 ? "bx1" : "bx" })), ...[...Array(12).keys()].map(i => ({ t: String(i + 1), x: 39 + i * 37, y: 70, sm: 1 })), { t: "sample = 2, 6, 10 ...", x: 240, y: 110, b: 1 }] },
      { t: "bar", cats: ["SRS", "Cluster (ρ=0)", "Cluster (ρ=0.3)"], v: [1, 1, 3.1], yl: "design effect", cap: "Cluster sampling loses precision when units inside a cluster are alike (high intra-cluster correlation ρ)." }] }
  ] },
{ n: "PPS and non-probability sampling", d: "PPS sampling versus equal probability; purposive, judgement, quota and snowball sampling.",
  t: [
  { title: "PPS and Non-Probability Sampling",
    intro: "<p>PPS gives large units a bigger chance: a big village counts for more than a hamlet. Non-probability methods are quick but cannot measure error.</p>",
    body: `[[0]]<p><b>PPS with replacement</b> (cumulative total method): list sizes, form cumulative totals, draw a random number r from 1 to the grand total, and select the unit whose range contains r. Selection probability \\(p_i = x_i/X\\). The Hansen–Hurwitz estimator is \\(\\hat Y=\\frac1n\\sum y_i/p_i\\).</p>[[1]]<p><b>Non-probability:</b> purposive (judgement of an expert), quota (fill fixed numbers per group), snowball (respondents recruit others, for hidden groups). Cheap and useful for exploration; results cannot be generalised with a known error.</p>`,
    vis: [{ t: "bar", cats: ["V1", "V2", "V3", "V4"], series: [{ n: "size", v: [100, 300, 50, 150] }], yl: "households", cap: "Cumulative ranges: V1 1–100, V2 101–400, V3 401–450, V4 451–600. V2 has 50% chance per draw." }, { t: "scene", h: 140, cap: "Snowball sampling: one respondent leads to the next.", i: [{ ic: "student", x: 60, y: 80, s: 1 }, { a: [95, 80, 150, 80] }, { ic: "person", x: 185, y: 80 }, { a: [220, 80, 275, 80] }, { ic: "teacher", x: 310, y: 80 }, { a: [345, 80, 400, 80] }, { ic: "group", x: 430, y: 80, s: .9 }] }] }
  ] }
];
_C.spss = [
{ n: "Introduction to computers and MS Office", d: "Basic ideas on computers, MS Word, standard statistical analysis in Excel, graphical representation.",
  t: [{ use: "Introduction to Computers", intro: "<p>A computer follows the IPO cycle: Input → Process → Output, with storage on the side.</p>", vis: [{ t: "flow", n: ["Input (keyboard, mouse)", "CPU processes", "Output (screen, printer)", "Storage (HDD/SSD)"], cap: "The input–process–output cycle." }, { t: "scene", h: 140, cap: "Hardware = parts you can touch; software = programs.", i: [{ ic: "pc", x: 90, y: 70, s: 1.6, l: "Hardware" }, { ic: "gear", x: 240, y: 70, s: 1.5, l: "System software" }, { ic: "calc", x: 390, y: 70, s: 1.4, l: "Application software (Excel, SPSS)" }] }] }] },
{ n: "Statistical analysis using SPSS", d: "Data entry, cleaning, management, graphs, central tendency, dispersion, skewness, kurtosis, correlation and regression.",
  t: [
  { use: "Statistical Software", intro: "<p>SPSS has two windows you live in: <b>Data View</b> (the spreadsheet) and <b>Variable View</b> (the dictionary).</p>", vis: [{ t: "flow", n: ["Variable View: name, type, labels", "Data View: type the values", "Analyze menu", "Output Viewer"], cap: "Typical SPSS workflow." }] },
  { use: "Data Entry", intro: "<p>One row = one case, one column = one variable. Define the variable first, then enter data.</p>", vis: [{ t: "table", h: ["id", "gender (1=M,2=F)", "age", "marks"], r: [["1", "1", "19", "72"], ["2", "2", "20", "81"], ["3", "2", "19", "65"]], cap: "A tidy data sheet." }] },
  { use: "Data Transformation", intro: "<p>Compute makes new variables, Recode regroups values, Visual Binning cuts a scale into classes.</p>", vis: [{ t: "bar", cats: ["<40", "40–59", "60–79", "80+"], v: [3, 12, 20, 5], cap: "Marks recoded into 4 grades with Recode into different variables.", yl: "students" }] },
  { use: "Descriptive Statistics", intro: "<p>Analyze → Descriptive Statistics gives Frequencies, Descriptives, Explore and Crosstabs.</p>", vis: [{ t: "hist", gen: { n: 120, m: 65, s: 12 }, bins: 10, curve: "npdf(x,65,12)", mark: true, cap: "SPSS histogram with the normal curve overlay: check whether the data look bell shaped." }, { t: "box", g: { "Male": [55, 60, 63, 68, 70, 75, 80], "Female": [58, 64, 66, 70, 73, 78, 92] }, cap: "Explore → boxplot by group." }] },
  { use: "Statistical Output", intro: "<p>Read output in this order: sample size, descriptive values, test statistic, p-value, then conclusion.</p>", vis: [{ t: "plot", x: [-4, 4], y: [0, .45], fns: [{ f: "npdf(x,0,1)", c: 1 }, { f: "npdf(x,0,1)", c: 4, fill: true, from: 1.96, to: 4 }, { f: "npdf(x,0,1)", c: 4, fill: true, from: -4, to: -1.96 }], cap: "p-value = shaded tail area. If p &lt; 0.05 (outside ±1.96 here) we reject H₀." }] }
  ] }
];
_C.calc1 = [
{ n: "Differential calculus", d: "Functions and graphs, limit, continuity, derivative and its physical meaning, higher derivatives, Leibnitz, Rolle, mean value and Taylor theorems, maxima and minima, functions of several variables, concavity.",
  t: [
  { use: "Functions, Limits", intro: "<p>A limit asks: what value is the function <i>heading toward</i> as x approaches a point, whether or not it gets there?</p>", vis: [{ t: "plot", x: [-3, 3], y: [-1, 5], fns: [{ f: "(x*x-1)/(x-1)", c: 1, a: -3, b: .999 }, { f: "(x*x-1)/(x-1)", c: 1, a: 1.001, b: 3 }], pts: [[1, 2, "hole: limit = 2", 2]], cap: "f(x) = (x²−1)/(x−1) is undefined at 1, yet the limit is 2." }, { t: "plot", x: [-1, 5], y: [-1, 5], fns: [{ f: "x<2?x:x+1", c: 1 }], cap: "A jump discontinuity: left and right limits differ, so the function is not continuous at x = 2." }] },
  { use: "Derivatives", intro: "<p>The derivative is the <b>speedometer</b>: the instantaneous rate of change, which is the slope of the tangent line.</p>", vis: [{ t: "plot", x: [-1, 5], y: [-1, 10], fns: [{ f: "x*x/2+1", c: 1 }, { f: "p.a*p.a/2+1+p.a*(x-p.a)", c: 2, d: 1 }], pts: [["=p.a", "=p.a*p.a/2+1", "slope = {p.a}", 4]], sl: [{ k: "a", l: "point x ", min: 0, max: 4, step: .1, v: 2, play: 1 }], cap: "Tangent to f(x) = x²/2 + 1: its slope equals f′(x) = x." }, { t: "plot", x: [0, 10], y: [0, 120], fns: [{ f: "5*x*x/2*1+0", c: 1, l: "distance s=2.5t²", lx: 7 }, { f: "5*x", c: 2, l: "speed s′=5t", lx: 7 }], cap: "Distance and its derivative, speed." }] },
  { use: "Higher Derivatives", intro: "<p>Differentiate again to get acceleration or curvature. Leibnitz's theorem gives the n-th derivative of a product.</p>", vis: [{ t: "plot", x: [-3, 3], y: [-8, 8], fns: [{ f: "x*x*x/3-x", c: 1, l: "f" }, { f: "x*x-1", c: 2, l: "f′", lx: 2.2 }, { f: "2*x", c: 3, l: "f″", lx: 2.2 }], cap: "Each derivative lowers the degree by one." }] },
  { use: "Rolle's Theorem", intro: "<p>If you leave and return to the same height, somewhere in between the slope must be exactly flat.</p>", vis: [{ t: "plot", x: [0, 4], y: [-1, 4], fns: [{ f: "x*(4-x)", c: 1 }], seg: [[2, 0, 2, 4, "m", 1]], pts: [[2, 4, "f′(c)=0", 2]], cap: "f(0) = f(4) = 0 ⇒ the tangent is horizontal at c = 2." }, { t: "plot", x: [0, 4], y: [0, 6], fns: [{ f: "x*x/4+x/2+.5", c: 1 }], seg: [[0, .5, 4, 6.5, 3, 1], [2, 2.5, 2, 2.5, "m"]], cap: "MVT: somewhere the tangent is parallel to the chord (secant) joining the end points." }, { t: "plot", x: [-2, 4], y: [-1, 8], fns: [{ f: "exp(x)", c: 1, l: "eˣ" }, { f: "1+x", c: 2, l: "n=1" }, { f: "1+x+x*x/2", c: 3, l: "n=2" }, { f: "1+x+x*x/2+x*x*x/6", c: 4, l: "n=3" }], cap: "Taylor/Maclaurin polynomials hug the curve near 0 and improve as n grows." }] },
  { use: "Maxima, Minima", intro: "<p>At the top of a hill and the bottom of a valley the slope is zero: set f′(x)=0, then use f″ to tell hill from valley.</p>", vis: [{ t: "plot", x: [-1, 5], y: [-2, 6], fns: [{ f: "x*x*x/3-2*x*x+3*x+1", c: 1 }, { f: "x*x-4*x+3", c: 2, d: 1 }], pts: [[1, "=1/3-2+3+1", "local max", 4], [3, 1, "local min", 2]], cap: "f′ (dashed) is 0 at x = 1 and 3. f″ &lt; 0 at 1 (max), f″ &gt; 0 at 3 (min)." }] },
  { use: "Functions of Several Variables", intro: "<p>A hill described by height z = f(x,y). Partial derivatives are the slope walking due east or due north.</p>", vis: [{ t: "plot", x: [-3, 3], y: [-3, 3], fns: [{ f: "sqrt(max(0,p.c-x*x))", c: 1 }, { f: "-sqrt(max(0,p.c-x*x))", c: 1 }], sl: [{ k: "c", l: "level c ", min: .5, max: 8, step: .5, v: 4 }], cap: "Contour of f(x,y) = x² + y² = c: circles. Gradient points straight out, perpendicular to the contour." }] }
  ] },
{ n: "Integral calculus", d: "Physical meaning of integration, indefinite integrals, Riemann integral, fundamental theorem, double and triple integration, applications to length, area and volume.",
  t: [
  { use: "Integral Calculus", intro: "<p>Integration adds up infinitely many thin slices: the area under a curve, the distance from a speedometer.</p>", vis: [{ t: "plot", x: [0, 4], y: [0, 9], fns: [{ f: "x*x/2+0.5", c: 1, fill: true, from: 0, to: "=p.u" }], sl: [{ k: "u", l: "upper limit ", min: .2, max: 4, step: .1, v: 2, play: 1 }], msg: "Area = ∫₀^{u} (x²/2 + ½)dx = u³/6 + u/2 = <b>{p.u*p.u*p.u/6+p.u/2}</b>", cap: "Area under f from 0 to u. The derivative of the area function is f itself: the Fundamental Theorem." }, { t: "bar", cats: ["n=2", "n=4", "n=8", "n=16"], v: [4.5, 3.6, 3.2, 3.05], cap: "Riemann sums converge to the exact area as slices get thinner (upper sums for ∫₀² x²dx would approach 2.667).", yl: "sum" }] },
  { use: "Double Integrals", intro: "<p>Double integrals add up volume column by column, area is the special case f = 1.</p>", vis: [{ t: "plot", x: [0, 3], y: [0, 3], fns: [{ f: "x", c: 1, fill: true }, { f: "x*x/3", c: 2 }], cap: "Region between y = x²/3 and y = x: ∬ dA = ∫₀³ (x − x²/3)dx = 4.5 − 3 = 1.5." }] }
  ] }
];
_C.la = [
{ n: "Matrices and systems", d: "Matrices, operations, adjoint and inverse, Cramer's rule, row operations, rank, solving linear systems, quadratic forms, g-inverse.",
  t: [
  { use: "Matrices & Matrix Operations", intro: "<p>A matrix is a rectangular table of numbers; matrix multiplication = rows times columns.</p>", vis: [{ t: "steps", title: "Multiply [[1,2],[3,4]] by [[5,6],[7,8]]", s: ["Entry (1,1) = row1·col1 = 1·5 + 2·7 = <b>19</b>.", "Entry (1,2) = 1·6 + 2·8 = <b>22</b>.", "Entry (2,1) = 3·5 + 4·7 = <b>43</b>; entry (2,2) = 3·6 + 4·8 = <b>50</b>.", "AB = [[19,22],[43,50]]. Note BA is different: matrix multiplication is not commutative."] }, { t: "table", h: ["", "c₁", "c₂"], r: [["r₁", "1·5+2·7", "1·6+2·8"], ["r₂", "3·5+4·7", "3·6+4·8"]], hi: ["0,1"], cap: "Rows of A times columns of B." }] },
  { use: "Determinants", intro: "<p>The determinant is the <b>area-scaling factor</b> of the transformation: if it is 0 the plane is squashed flat and the matrix has no inverse.</p>", vis: [{ t: "plot", x: [-1, 5], y: [-1, 5], seg: [[0, 0, "=p.a", 0, 1], [0, 0, 1, 2, 2], ["=p.a", 0, "=p.a+1", 2, 1, 1], [1, 2, "=p.a+1", 2, 2, 1]], sl: [{ k: "a", l: "a ", min: 0, max: 4, step: .25, v: 3 }], msg: "Vectors (a,0) and (1,2): det = 2a = <b>{2*p.a}</b> = area of the parallelogram.", cap: "|det| = area. a = 0 gives zero area (singular matrix)." }] },
  { use: "Systems of Linear Equations", intro: "<p>Each equation is a line; the solution is where they meet. Parallel lines = no solution; same line = infinitely many.</p>", vis: [{ t: "plot", x: [-1, 6], y: [-1, 6], fns: [{ f: "(6-x)/1", c: 1, l: "x+y=6" }, { f: "(x*p.m-2)/1", c: 2, l: "line 2", lx: 5 }], sl: [{ k: "m", l: "slope of line 2 ", min: .2, max: 3, step: .1, v: 1.5 }], cap: "x + y = 6 and y = m x − 2: change the slope and the intersection moves. Rank 2 = unique solution." }] },
  { use: "Inverse of a Matrix", intro: "<p>The inverse undoes the matrix: A⁻¹A = I. Solving Ax = b becomes x = A⁻¹b.</p>", vis: [{ t: "flow", n: ["Find det A ≠ 0", "Cofactor matrix", "Transpose = adjoint", "A⁻¹ = adj A / det A"], cap: "Inverse by adjoint." }] }
  ] },
{ n: "Vector spaces and transformations", d: "Vector space, subspace, linear combination, independence, basis and dimension, linear transformations, kernel and rank.",
  t: [
  { use: "Vectors & Vector Spaces", intro: "<p>A vector is an arrow; vectors add tip-to-tail and scale by stretching.</p>", vis: [{ t: "plot", x: [-1, 7], y: [-1, 6], seg: [[0, 0, 3, 1, 1, 0], [3, 1, 5, 4, 2, 0], [0, 0, 5, 4, 4, 0]], pts: [[3, 1, "u", 1], [5, 4, "u + v", 4]], cap: "u = (3,1), v = (2,3): u + v = (5,4)." }] },
  { use: "Linear Dependence", intro: "<p>Vectors are independent if none can be built from the others. A basis is the smallest set that builds everything.</p>", vis: [{ t: "plot", x: [-4, 4], y: [-4, 4], seg: [[0, 0, 2, 1, 1], [0, 0, 1, 3, 2], [0, 0, 4, 2, 4, 1]], pts: [[2, 1, "v₁", 1], [1, 3, "v₂", 2], [4, 2, "2v₁ (dependent)", 4]], cap: "v₁ and v₂ point in different directions (independent, a basis of the plane); 2v₁ lies on v₁'s line (dependent)." }] }
  ] },
{ n: "Eigenvalues and orthogonality", d: "Eigenvectors, eigenvalues, Cayley–Hamilton, similar matrices, orthogonal and Hermitian matrices, Gram–Schmidt, bilinear and quadratic forms, Kronecker products.",
  t: [
  { use: "Eigenvalues & Eigenvectors", intro: "<p>Most vectors are turned by a matrix. Eigenvectors are the special directions that are only <b>stretched</b>, by the eigenvalue.</p>", vis: [{ t: "plot", x: [-4, 4], y: [-4, 4], fns: [{ f: "x", c: 1, l: "eigen-direction λ=3", lx: 2.5 }, { f: "-x", c: 2, l: "λ=1", lx: 2.5 }], seg: [[0, 0, 1, 1, 1], [0, 0, 3, 3, 1, 1], [0, 0, 1, -1, 2], [0, 0, 1, -1, 2, 1]], cap: "A = [[2,1],[1,2]]: A(1,1) = 3(1,1) and A(1,−1) = 1·(1,−1)." }] },
  { use: "Applications of Matrix Algebra in Statistics", intro: "<p>Regression, covariance matrices and PCA are all matrix algebra in disguise.</p>", vis: [{ t: "flow", n: ["X (data matrix)", "XᵀX", "β̂ = (XᵀX)⁻¹Xᵀy", "ŷ = Xβ̂"], cap: "Least squares in matrix form." }, { t: "scatter", gen: { n: 60, seed: 3, x: [-3, 3], f: "0.8*x", sd: .9 }, fit: true, cap: "The first principal component is the leading eigenvector of the covariance matrix: the long axis of this cloud." }] }
  ] }
];
