/* ============ CHAPTERS: Principles of Statistics (1st year, 1-1) ============ */
(window.CHAPTERS = window.CHAPTERS || {}).pos = [
{ n: "Basic statistics", d: "Meaning and scope of Statistics, variables and attributes, scales of measurement, frequency distribution, stem-and-leaf analysis and graphical representation.",
  t: [
  { use: "Scope of Statistics",
    intro: "<p>Think of Statistics as a <b>detective's toolkit for numbers</b>: we collect clues (data), tidy them, look for patterns, and then make an honest decision, even though we never see the whole picture.</p>",
    vis: [
      { t: "scene", h: 190, cap: "Population → sample → inference. We study a small sample but want to say something about everyone.", i: [
        { ic: "group", x: 70, y: 100, s: 2, l: "Population (everyone we care about)" },
        { a: [125, 100, 205, 100], t: "draw a sample" },
        { ic: "student", x: 250, y: 100, s: 1.4, l: "Sample (the few we measure)" },
        { a: [300, 100, 380, 100], t: "analyse" },
        { ic: "bulb", x: 425, y: 95, s: 1.5, l: "Conclusion about the population", bob: 1 }] },
      { t: "flow", n: ["Collect data", "Organise & present", "Analyse", "Interpret & decide"], cap: "The four jobs of Statistics." },
      { t: "tree", cap: "Types of data. Pick the branch before you pick a graph or a formula.", root: { t: "Data", kids: [{ t: "Qualitative", kids: [{ t: "Nominal", e: "no order" }, { t: "Ordinal", e: "ordered" }] }, { t: "Quantitative", kids: [{ t: "Discrete", e: "counts" }, { t: "Continuous", e: "measured" }] }] } }],
    key: ["Descriptive = summarise what you have; inferential = generalise from sample to population.", "Nominal < ordinal < interval < ratio: each scale keeps everything the previous one has and adds more.", "Only ratio data have a true zero, so only they allow statements like 'twice as much'."],
    q: [["Is a student's roll number a quantitative variable?", "No. It is only a label (nominal). Averaging roll numbers has no meaning."], ["Temperature 40°C is 'twice as hot' as 20°C. True?", "False. °C is an interval scale (zero is arbitrary), so ratios are meaningless. In kelvin the ratio is not 2 either."]] },
  { use: "Frequency Distribution",
    intro: "<p>Raw data is a messy list. A frequency distribution is like sorting a pile of coins into trays: the shape of the pile appears.</p>",
    vis: [
      { t: "hist", cap: "Marks of 40 students. Drag the slider: too few classes hide the shape, too many make it jagged. Sturges' rule gives k ≈ 6–7 here.", data: [45, 52, 58, 61, 63, 64, 66, 67, 68, 69, 70, 71, 72, 72, 73, 74, 75, 75, 76, 77, 78, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 90, 91, 93, 95, 55, 60, 65, 70, 74], bins: "=p.k", range: [40, 100], xl: "Marks", sl: [{ k: "k", l: "classes k ", min: 3, max: 20, v: 7 }], msg: "k = {p.k} classes, class width = {60/p.k} marks" },
      { t: "bar", cap: "Pareto chart: bars sorted high to low with the cumulative % line. The first two causes explain most complaints.", cats: ["Late bus", "Crowded", "Fare", "Rude staff", "Other"], v: [48, 31, 12, 6, 3], line: [48, 79, 91, 97, 100], yl: "complaints" },
      { t: "pie", cap: "Pie chart for a nominal variable (share of each category). Use it only when there are few categories.", cats: ["Science", "Commerce", "Arts"], v: [45, 35, 20] }],
    key: ["Number of classes: Sturges k = 1 + 3.322 log₁₀ n; width ≈ range / k.", "Histogram = touching bars (continuous), bar chart = gaps (categories).", "Ogive (cumulative polygon) reads medians and quartiles off the graph."] },
  { title: "Choosing the Right Graph",
    intro: "<p>The data type decides the picture. A wrong graph can hide the story or even mislead.</p>",
    body: `<table><tr><th>Question you want to answer</th><th>Data</th><th>Best graph</th></tr>
<tr><td>How are the categories shared?</td><td>Nominal / ordinal</td><td>Bar chart, pie chart (few slices)</td></tr>
<tr><td>What is the shape of the distribution?</td><td>Continuous</td><td>Histogram, stem-and-leaf, density</td></tr>
<tr><td>Compare groups, show outliers</td><td>Quantitative by group</td><td>Box plot</td></tr>
<tr><td>Relation between two variables</td><td>Two quantitative</td><td>Scatter plot</td></tr>
<tr><td>Change over time</td><td>Time series</td><td>Line graph</td></tr></table>
[[0]]
<p><b>Stem-and-leaf</b> keeps every observation. For the data 23, 25, 31, 34, 34, 38, 42, 47, 51 the stems are the tens and the leaves are the units:</p>
<pre>2 | 3 5
3 | 1 4 4 8
4 | 2 7
5 | 1</pre>
<p>Turn it sideways and it looks like a histogram, but you can still read the actual values.</p>
[[1]]
<div class="note">Mistake: using a pie chart for 10 categories, or a bar chart (with gaps) for a continuous variable. Also avoid cutting the y-axis, which exaggerates differences.</div>`,
    vis: [
      { t: "bar", cap: "Honest axis (starts at 0): 50 vs 51 is a tiny difference. A chart whose axis starts at 49 would make it look huge, so always check the axis.", cats: ["Shop A", "Shop B"], series: [{ n: "full axis", v: [50, 51] }], ymax: 60, val: true },
      { t: "scatter", cap: "Scatter plot: each dot is one student (hours studied vs marks).", xl: "hours studied", yl: "marks", gen: { n: 30, seed: 4, x: [1, 9], f: "40+5*x", sd: 6 }, fit: false }],
    key: ["Match the graph to the data type first."] }
  ] },
{ n: "Summarization of data", d: "Central tendency, dispersion and their measures, moments, skewness, kurtosis and their measures, five-number summary, box-and-whisker plots.",
  t: [
  { title: "Mean, Median and Mode in Pictures",
    intro: "<p>Imagine the histogram is a see-saw. The <b>mean</b> is the balance point, the <b>median</b> cuts the area in half, and the <b>mode</b> is the tallest bar.</p>",
    body: `[[0]]
<p>For symmetric data all three coincide. When the right tail is long (income, house prices) the mean is pulled toward the tail: <b>mode &lt; median &lt; mean</b>. That is why newspapers quote the <i>median income</i>.</p>
<div class="formula">\\(\\displaystyle \\bar{x}=\\frac{\\sum x_i}{n},\\qquad \\text{Median}=\\begin{cases}x_{(\\frac{n+1}{2})}&n\\text{ odd}\\\\[2pt]\\frac{x_{(n/2)}+x_{(n/2+1)}}{2}&n\\text{ even}\\end{cases}\\)</div>
<p><b>Worked example.</b> Marks: 4, 6, 6, 7, 8, 9, 10, 10, 10, 12 (n = 10).</p>
[[1]]
<p>Sum = 82, so mean = 8.2. The two middle values are 8 and 9, so median = 8.5. The most frequent value is 10, so mode = 10. Here mean &lt; median &lt; mode, a slightly <i>left</i> skewed set.</p>
<p><b>Other means.</b> GM = (x₁x₂…xₙ)^{1/n} is right for growth rates and ratios, HM = n/Σ(1/x) for averaging speeds, and always AM ≥ GM ≥ HM.</p>
<div class="note">Mistake: averaging speeds with the arithmetic mean. Going 60 km/h and returning at 40 km/h gives HM = 2/(1/60+1/40) = <b>48</b> km/h, not 50.</div>`,
    vis: [
      { t: "plot", cap: "Slide the shape: when the skew is strong, the three averages separate (mode, median, mean left to right).", x: [0, 22], y: [0, .55], fns: [{ f: "gpdf(x,p.k,1)", c: 1, fill: true }], vl: [["=p.k-1", "mode", 0], ["=p.k-1/3", "median", 1], ["=p.k", "mean", 2]], sl: [{ k: "k", l: "skew ", min: 1.5, max: 14, step: .5, v: 3 }], xl: "x", yl: "density", msg: "Mean = {p.k}, median ≈ {p.k-1/3}, mode = {p.k-1}. Gap mean − mode = <b>1</b> regardless of k when scale is 1." },
      { t: "num", cap: "The ten marks on a number line: the mean 8.2 is the balance point.", x: [2, 14], nt: 12, h: 120, pts: [[4, "4", 1], [6, "6, 6", 1], [7, "7", 1], [8, "8", 1], [9, "9", 1], [10, "10×3", 1], [12, "12", 1], [8.2, "mean", 4], [8.5, "median", 2]] }],
    key: ["Mean uses every value but is pulled by outliers; median is robust.", "Skewed right: mode < median < mean. Skewed left: mean < median < mode.", "Use HM for speeds/rates, GM for growth."],
    q: [["Incomes: 20, 22, 25, 27, 400 (thousand). Which average describes a 'typical' person?", "The median 25. The mean 98.8 is dragged up by the 400."], ["Can the mean be larger than every value but one?", "Yes, an outlier can make it so; this is exactly why the mean is not robust."]] },
  { use: "Measures of Central Tendency & Dispersion",
    intro: "<p>Two classes can both average 60 marks, but one has everyone near 60 and the other has 20s and 100s. The average alone hides this. <b>Dispersion</b> measures the spread.</p>",
    vis: [
      { t: "plot", cap: "Same mean, different spread: only the standard deviation changes. Smaller σ = values hug the mean.", x: [-8, 8], y: [0, .5], fns: [{ f: "npdf(x,0,p.s)", c: 1, fill: true, l: "σ = {p.s}" }, { f: "npdf(x,0,1)", c: 2, d: 1 }], sl: [{ k: "s", l: "σ ", min: .5, max: 3, step: .1, v: 2 }], msg: "Within ±1σ lies about 68% of the data, within ±2σ about 95%." },
      { t: "steps", title: "Variance step by step (data 4, 6, 6, 7, 8, 9, 10, 10, 10, 12)", s: ["Mean first: x̄ = 82/10 = <b>8.2</b>.", "Deviations \\(x-\\bar{x}\\): −4.2, −2.2, −2.2, −1.2, −0.2, 0.8, 1.8, 1.8, 1.8, 3.8 (they add to 0, which is why we square them).", "Square and add: \\(\\sum (x-\\bar{x})^2 = 53.6\\).", "Divide by \\(n-1=9\\): \\(s^2 = 5.96\\), so \\(s = 2.44\\).", "Coefficient of variation: \\(CV = s/\\bar{x}\\times 100 = 29.8\\%\\). Use CV to compare spread of variables with different units."] },
      { t: "bar", cap: "Range only uses 2 values (min, max); IQR uses the middle half. One outlier changes the range completely but not the IQR.", cats: ["Range", "IQR", "SD"], series: [{ n: "without outlier", v: [8, 4, 2.4] }, { n: "with outlier 50", v: [46, 4.5, 14] }] }],
    key: ["Sample variance divides by n − 1 (unbiased), population variance by N.", "SD has the same units as the data; variance has squared units.", "CV compares spread across different units or means."] },
  { use: "Moments, Skewness & Kurtosis",
    intro: "<p>Mean and variance describe centre and spread. <b>Shape</b> needs the third and fourth moments: tilt (skewness) and tail-heaviness (kurtosis).</p>",
    vis: [
      { t: "plot", cap: "Positive skew (red), symmetric (green), negative skew (blue): the long tail points the way of the skew.", x: [0, 12], y: [0, .5], fns: [{ f: "gpdf(x,3,1)", c: 4, l: "right (+)", lx: 6 }, { f: "npdf(x,6,1.7)", c: 1, l: "symmetric", lx: 6 }, { f: "gpdf(12-x,3,1)", c: 3, l: "left (−)", lx: 8 }] },
      { t: "plot", cap: "Kurtosis = tail weight. The t distribution with small df has fatter tails than the normal curve (more outliers). As df grows it becomes normal.", x: [-5, 5], y: [0, .45], fns: [{ f: "npdf(x,0,1)", c: 2, d: 1, l: "normal", lx: 1.6 }, { f: "tpdf(x,p.v)", c: 1, fill: true }], sl: [{ k: "v", l: "df ", min: 1, max: 30, v: 3 }], msg: "df = {p.v}: " + "heavier tails than the normal (dashed) when df is small." }],
    key: ["γ₁ > 0 right skew, < 0 left skew, 0 symmetric.", "γ₂ = β₂ − 3: > 0 heavy tails (leptokurtic), < 0 light tails (platykurtic), 0 normal (mesokurtic)."] },
  { use: "Five-Number Summary",
    intro: "<p>The box plot is a one-picture summary: where the middle half lives, where the centre is, and which points look suspicious.</p>",
    vis: [
      { t: "box", five: true, cap: "Two classes compared. B has the higher median but also a wider box; the red dot is an outlier flagged by the 1.5×IQR fence.", g: { "Class A": [52, 55, 58, 60, 61, 63, 65, 66, 68, 70, 72], "Class B": [40, 58, 62, 65, 68, 70, 72, 75, 78, 80, 98] }, xl: "marks" },
      { t: "steps", title: "Reading a box plot", s: ["The <b>box</b> runs from Q1 to Q3: it contains the middle 50% of the data.", "The line inside is the <b>median</b>. If it sits off-centre the data are skewed.", "<b>Whiskers</b> extend to the farthest values still inside the fences Q1 − 1.5·IQR and Q3 + 1.5·IQR.", "Points beyond the fences are <b>outliers</b>. Investigate them before deleting."] }],
    key: ["IQR = Q3 − Q1 ignores the extreme 25% on each side.", "Fences: Q1 − 1.5 IQR and Q3 + 1.5 IQR."] }
  ] },
{ n: "Association of attributes and correlation", d: "Independence, association and disassociation, measures of association, partial association, contingency table, r×c tables, Pearson, Spearman and Kendall correlation, concordance, and the concept of simple linear regression.",
  t: [
  { use: "Association of Attributes",
    intro: "<p>Do smokers get the disease more often than non-smokers? Association asks whether two <i>qualities</i> go together more (or less) than pure chance would predict.</p>",
    vis: [
      { t: "venn", s: ["A: smoker", "B: disease"], cap: "100 people: 30 smokers (A), 20 diseased (B), 15 are both. If independent we would expect 30×20/100 = 6 in the overlap. Observed 15 &gt; 6 → positive association.", lab: { a: "15", ab: "15", b: "5", none: "65" }, sh: ["ab"], u: "N = 100" },
      { t: "table", cap: "A 2×2 contingency table. Compare the shaded cell with its expected value.", h: ["", "B (disease)", "β (healthy)", "Total"], r: [["A (smoker)", "15", "15", "30"], ["α (non-smoker)", "5", "65", "70"], ["Total", "20", "80", "100"]], hi: ["0,1"] },
      { t: "bar", cap: "Disease rate in each group: 50% of smokers vs 7% of non-smokers.", cats: ["Smokers", "Non-smokers"], v: [50, 7.1], yl: "% diseased" }],
    key: ["(AB) = (A)(B)/N means independence; larger → positive association; smaller → disassociation.", "Yule's Q = (ad − bc)/(ad + bc) ∈ [−1, 1]. Here Q = (15·65 − 15·5)/(15·65 + 15·5) = 900/1050 = 0.857."] },
  { use: "Correlation: Pearson",
    intro: "<p>Correlation answers: when x goes up, does y tend to go up, down, or do nothing, and how tightly?</p>",
    vis: [
      { t: "scatter", cap: "Slide the noise: tight cloud → r near ±1; shapeless blob → r near 0.", gen: { n: 50, seed: 11, x: [0, 10], f: "p.dir*x", sd: "=p.s" }, sl: [{ k: "s", l: "noise ", min: .5, max: 12, step: .5, v: 2 }, { k: "dir", l: "slope ", min: -2, max: 2, step: .5, v: 1 }], fit: true, xl: "x", yl: "y" },
      { t: "table", cap: "How to read r (a rough guide).", h: ["|r|", "Strength"], r: [["0.00 – 0.19", "very weak"], ["0.20 – 0.39", "weak"], ["0.40 – 0.59", "moderate"], ["0.60 – 0.79", "strong"], ["0.80 – 1.00", "very strong"]] },
      { t: "scatter", cap: "A perfect curve but r ≈ 0! Pearson r only measures <i>linear</i> association. Always draw the scatter plot.", pts: [[-5, 25], [-4, 16], [-3, 9], [-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25]], fit: true }],
    key: ["−1 ≤ r ≤ 1, no units, unchanged by changing scale/origin.", "Correlation ≠ causation (ice-cream sales and drowning both rise in summer)."] },
  { title: "Spearman and Kendall Step by Step",
    intro: "<p>When data are ranks, or the relationship is curved but always rising, use rank correlations. They look at order, not size.</p>",
    body: `<p><b>Spearman:</b> rank both variables, find the rank differences d, and use \\(\\displaystyle \\rho = 1-\\frac{6\\sum d^2}{n(n^2-1)}\\).</p>
<table><tr><th>Student</th><th>Math rank</th><th>Stat rank</th><th>d</th><th>d²</th></tr><tr><td>A</td><td>1</td><td>2</td><td>−1</td><td>1</td></tr><tr><td>B</td><td>2</td><td>1</td><td>1</td><td>1</td></tr><tr><td>C</td><td>3</td><td>3</td><td>0</td><td>0</td></tr><tr><td>D</td><td>4</td><td>5</td><td>−1</td><td>1</td></tr><tr><td>E</td><td>5</td><td>4</td><td>1</td><td>1</td></tr></table>
<p>\\(\\sum d^2 = 4\\), n = 5, so \\(\\rho = 1 - 6\\cdot 4/(5\\cdot 24) = 1 - 0.2 = \\mathbf{0.8}\\).</p>
[[0]]
<p><b>Kendall's τ</b> counts pairs. A pair is <i>concordant</i> (C) if both variables order it the same way and <i>discordant</i> (D) otherwise: \\(\\displaystyle \\tau = \\frac{C-D}{n(n-1)/2}\\). For the table above C = 8 and D = 2 out of 10 pairs, so τ = 6/10 = <b>0.6</b>. It is always a bit smaller than ρ for the same data.</p>
[[1]]
<p><b>Coefficient of concordance W</b> measures agreement among m judges ranking n items: \\(W=12S/[m^2(n^3-n)]\\), from 0 (no agreement) to 1 (perfect agreement).</p>`,
    vis: [
      { t: "scatter", cap: "Monotone but curved data: Pearson r &lt; 1, but the ranks are in perfect order, so Spearman ρ = 1.", pts: [[1, 1], [2, 2.3], [3, 4], [4, 8], [5, 16], [6, 33], [7, 60], [8, 110]], fit: true },
      { t: "steps", title: "Counting concordant and discordant pairs", s: ["List the items in order of the first ranking: A B C D E.", "Take every pair (10 pairs for n = 5).", "Pair (A,B): first ranking says A before B, second says B before A → <b>discordant</b>.", "Pair (A,C): both say A before C → <b>concordant</b>.", "Count C = 8, D = 2 → τ = (8 − 2)/10 = 0.6."] }],
    key: ["Rank correlations are robust to outliers and need only ordinal data.", "ρ = 1 − 6Σd²/[n(n²−1)]; τ = (C − D)/[n(n−1)/2]."] },
  { use: "Simple Linear Regression",
    intro: "<p>Correlation says <i>how strongly</i>; regression says <i>how much</i>: if study time rises by one hour, by how many marks do we expect the score to rise?</p>",
    vis: [
      { t: "scatter", res: true, cap: "Least squares chooses the line that makes the total of the squared red residuals as small as possible. The line always passes through (x̄, ȳ).", gen: { n: 18, seed: 21, x: [1, 9], f: "35+6*x", sd: 7 }, mean: true, xl: "hours studied", yl: "marks" },
      { t: "steps", title: "Fit a line in 4 steps", s: ["Compute x̄, ȳ, \\(S_{xx}=\\sum(x-\\bar{x})^2\\) and \\(S_{xy}=\\sum(x-\\bar{x})(y-\\bar{y})\\).", "Slope \\(b=S_{xy}/S_{xx}\\).", "Intercept \\(a=\\bar{y}-b\\bar{x}\\).", "Predict \\(\\hat{y}=a+bx\\) (only inside the range of the data!) and check \\(r^2\\)."] }],
    key: ["b = r·(s_y/s_x). The slope and r always have the same sign.", "r² is the share of variation in y explained by x.", "Do not extrapolate far beyond the observed x-values."] }
  ] }
];
