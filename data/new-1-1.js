/* ============ 1st YEAR, 1st SEMESTER: Principles of Statistics, Basic Algebra ============
   Same format as topics.js / quizzes.js / practice.js (topics, quiz questions and mock tests). */
TOPICS.push(
{ id:"pos", name:"Principles of Statistics", topics:[
 { title:"Scope of Statistics, Variables & Scales of Measurement", body:`
  <p><b>Statistics</b> is the science of collecting, organising, presenting, analysing and interpreting data to make decisions under uncertainty. <b>Descriptive</b> statistics summarise data; <b>inferential</b> statistics draw conclusions about a population from a sample.</p>
  <p>A <b>variable</b> is a measurable characteristic that changes from unit to unit (quantitative: discrete or continuous). An <b>attribute</b> is a quality that is either present or absent (qualitative), such as literate or illiterate.</p>
  <table><tr><th>Scale</th><th>Property</th><th>Example</th></tr>
  <tr><td>Nominal</td><td>Names only</td><td>Blood group, religion</td></tr>
  <tr><td>Ordinal</td><td>Names + order</td><td>Grade A/B/C, satisfaction level</td></tr>
  <tr><td>Interval</td><td>Order + equal gaps, no true zero</td><td>Temperature in °C, calendar year</td></tr>
  <tr><td>Ratio</td><td>Interval + true zero</td><td>Height, weight, income</td></tr></table>
  <p><b>Example:</b> Number of students in a class (discrete, ratio), time to finish an exam (continuous, ratio), rank in class (ordinal), roll number (nominal label).</p>
  <div class="note">Mistake: calling ranks or 1–5 satisfaction scores interval data and taking means without care. Also, 0°C is not "no temperature", so ratios like "20°C is twice 10°C" are meaningless.</div>`},
 { title:"Frequency Distribution, Stem-and-Leaf & Graphs", body:`
  <p>A <b>frequency distribution</b> groups raw data into classes and counts how many values fall in each class. Steps: find the range, choose the number of classes k, compute the width, tally.</p>
  <div class="formula">Sturges' rule: k = 1 + 3.322 log₁₀ n  ;  class width ≈ Range / k</div>
  <div class="formula">Mid-point = (lower limit + upper limit)/2  ;  relative frequency = f / n</div>
  <p>A <b>stem-and-leaf plot</b> keeps the original digits: the stem is the leading digit(s), the leaf is the last digit. A <b>histogram</b> uses touching bars (for continuous data), the <b>frequency polygon</b> joins class mid-points, and the <b>ogive</b> plots cumulative frequency against class boundaries.</p>
  <p><b>Example:</b> Data 12, 15, 21, 23, 24, 27, 31, 35, 38 give the stem-and-leaf plot: 1 | 2 5 ; 2 | 1 3 4 7 ; 3 | 1 5 8. For n = 64, k = 1 + 3.322 × 1.806 ≈ 7 classes.</p>
  <div class="note">Mistake: using unequal class widths without adjusting bar heights (use frequency density). Bar charts (for categories) have gaps; histograms do not.</div>`},
 { title:"Measures of Central Tendency & Dispersion", body:`
  <p>Central tendency gives a typical value; dispersion tells how spread out the data are.</p>
  <div class="formula">Mean x̄ = Σx/n  ;  Median = middle value  ;  Mode = most frequent value</div>
  <div class="formula">GM = (x₁x₂…xₙ)^(1/n)  ;  HM = n / Σ(1/x)  ;  AM ≥ GM ≥ HM</div>
  <div class="formula">Range = max − min  ;  QD = (Q₃ − Q₁)/2  ;  s² = Σ(x − x̄)²/(n−1)  ;  CV = (s/x̄) × 100%</div>
  <p>Use the <b>mean</b> for symmetric data, the <b>median</b> when there are outliers or skewness, the <b>GM</b> for growth rates and ratios, and the <b>HM</b> for averaging rates such as speed over equal distances. For two numbers, AM × HM = GM².</p>
  <p><b>Example:</b> Data 2, 4, 4, 6, 9. Mean = 25/5 = 5, median = 4, mode = 4. Squared deviations: 9, 1, 1, 1, 16 → SS = 28. Sample variance = 28/4 = 7, s = 2.646, CV = 2.646/5 = 52.9%. (The population variance would be 28/5 = 5.6.)</p>
  <div class="note">Mistake: dividing by n instead of n−1 for the sample variance, and comparing standard deviations of two data sets with different units instead of using CV.</div>`},
 { title:"Moments, Skewness & Kurtosis", body:`
  <p><b>Central moments</b> measure the shape of a distribution around the mean: μᵣ = Σ(x − x̄)ʳ/n. μ₂ is the variance. Skewness measures asymmetry; kurtosis measures peakedness and tail weight.</p>
  <div class="vis" data-vis="skew"></div>
  <div class="formula">β₁ = μ₃²/μ₂³ ,  γ₁ = μ₃/μ₂^(3/2) (sign shows direction)  ;  β₂ = μ₄/μ₂² ,  γ₂ = β₂ − 3</div>
  <div class="formula">Karl Pearson: Sk = (Mean − Mode)/s   ;   Bowley: Sk = (Q₃ + Q₁ − 2Q₂)/(Q₃ − Q₁)</div>
  <p>Positive skew: long right tail, mean &gt; median &gt; mode. Negative skew: the reverse. Normal curve: β₂ = 3 (mesokurtic); β₂ &gt; 3 leptokurtic (peaked, heavy tails); β₂ &lt; 3 platykurtic (flat).</p>
  <p><b>Example:</b> Data 1, 2, 3, 4, 10: mean 4. Deviations −3, −2, −1, 0, 6. μ₂ = 50/5 = 10, μ₃ = 180/5 = 36, μ₄ = 1394/5 = 278.8. γ₁ = 36/10^1.5 = 1.14 (right-skewed), β₂ = 278.8/100 = 2.79 (slightly platykurtic).</p>
  <div class="note">Mistake: using β₁ (always positive) to say the direction of skewness. Use γ₁ or the mean–median order.</div>`},
 { title:"Five-Number Summary & Box-and-Whisker Plot", body:`
  <p>The <b>five-number summary</b> is: minimum, Q₁, median, Q₃, maximum. The <b>box plot</b> draws a box from Q₁ to Q₃ with a line at the median, and whiskers to the smallest and largest values inside the fences.</p>
  <div class="vis" data-vis="boxplot"></div>
  <div class="formula">IQR = Q₃ − Q₁  ;  Fences: Q₁ − 1.5·IQR  and  Q₃ + 1.5·IQR</div>
  <p>Values outside the fences are flagged as outliers. The box tells the spread of the middle 50%; unequal whisker lengths or a median off-centre show skewness.</p>
  <p><b>Example:</b> Data 3, 5, 7, 8, 9, 11, 13, 15, 16, 20, 21 (n = 11). Median = 11, Q₁ = 7, Q₃ = 16, IQR = 9. Fences: 7 − 13.5 = −6.5 and 16 + 13.5 = 29.5, so there is no outlier. Summary: (3, 7, 11, 16, 21).</p>
  <div class="note">Mistake: different books compute quartiles slightly differently; state your method. Another mistake is to read the box length as the range of all the data.</div>`},
 { title:"Association of Attributes & Contingency Table", body:`
  <p>For two attributes A and B, classes are AB, Aβ, αB, αβ with frequencies (AB), (Aβ), (αB), (αβ). A 2×2 table sets these out.</p>
  <div class="formula">Independent:  (AB) = (A)(B)/N   |   Positive association: (AB) &gt; (A)(B)/N   |   Disassociation: (AB) &lt; (A)(B)/N</div>
  <div class="formula">Yule's Q = (ad − bc)/(ad + bc)   ;   φ = (ad − bc)/√[(a+b)(c+d)(a+c)(b+d)]</div>
  <div class="formula">χ² = Σ (O − E)²/E ,  E = row total × column total / N  ;  C = √[χ²/(χ² + N)]</div>
  <p>Q lies between −1 and +1. <b>Partial association</b> studies the A–B association within a fixed level of a third attribute C, which can differ from the overall association.</p>
  <p><b>Example:</b> a = 40, b = 10, c = 20, d = 30, N = 100. ad = 1200, bc = 200, so Q = 1000/1400 = 0.714. Expected (AB) = 50 × 60/100 = 30 &lt; 40, so positive association. χ² = 100/30 + 100/20 + 100/30 + 100/20 = 16.67, φ = 0.408, C = √(16.67/116.67) = 0.378.</p>
  <div class="note">Mistake: calling association "causation", and forgetting that a hidden third attribute can reverse the association (Simpson's paradox).</div>`},
 { title:"Correlation: Pearson, Spearman, Kendall & Concordance", body:`
  <p>Correlation measures the strength and direction of a relationship between two variables. All the coefficients below lie between −1 and +1 (W between 0 and 1).</p>
  <div class="vis" data-vis="corr"></div>
  <div class="formula">Pearson r = Sxy / √(Sxx·Syy)  ,  Sxy = Σ(x−x̄)(y−ȳ)</div>
  <div class="formula">Spearman ρ = 1 − 6Σd² / [n(n²−1)]  ;  Kendall τ = (C − D) / [n(n−1)/2]</div>
  <div class="formula">Coefficient of concordance W = 12S / [m²(n³ − n)] ,  S = Σ(Rⱼ − R̄)²  (m judges, n items)</div>
  <p>Pearson needs interval/ratio data and measures only <i>linear</i> relationship. Spearman and Kendall use ranks, so they suit ordinal data and are robust to outliers. W measures agreement among m rankers.</p>
  <p><b>Example 1:</b> x = 1,2,3,4,5; y = 2,4,5,4,5: Sxy = 6, Sxx = 10, Syy = 6, r = 6/√60 = 0.775. <b>Example 2:</b> y-ranks 2,1,4,3,5 against 1..5: Σd² = 4, ρ = 1 − 24/120 = 0.8; C = 8, D = 2, τ = 6/10 = 0.6. <b>Example 3:</b> 3 judges rank 4 items, rank sums 4, 7, 9, 10: S = 21, W = 252/540 = 0.467.</p>
  <div class="note">Mistake: r = 0 does not mean independence (a perfect U-shape can have r = 0). Correlation is not causation.</div>`},
 { title:"Simple Linear Regression (Concept)", body:`
  <p>Simple linear regression fits a straight line ŷ = a + bx to predict y (response) from x (predictor) by <b>least squares</b>: choose a, b to minimise Σ(y − a − bx)².</p>
  <div class="vis" data-vis="regfit"></div>
  <div class="formula">b = Sxy/Sxx = r·(s_y/s_x)  ;  a = ȳ − b·x̄  ;  r² = b·Sxy/Syy</div>
  <p>The slope b is the average change in y for a one-unit increase in x. The line always passes through (x̄, ȳ). r² (coefficient of determination) is the proportion of variation in y explained by x. The two regression lines (y on x and x on y) cross at (x̄, ȳ) and b_yx · b_xy = r².</p>
  <p><b>Example:</b> Using x = 1..5, y = 2,4,5,4,5: b = 6/10 = 0.6, a = 4 − 0.6×3 = 2.2. So ŷ = 2.2 + 0.6x. At x = 6, ŷ = 5.8. r² = 36/60 = 0.60, so 60% of the variation of y is explained by x.</p>
  <div class="note">Mistake: predicting far outside the range of x (extrapolation), or swapping the roles of x and y: regression of y on x is not the same line as x on y.</div>`}
]},
{ id:"alg", name:"Basic Algebra", topics:[
 { title:"Sets & Set Operations", body:`
  <p>A <b>set</b> is a well-defined collection of objects. A is a <b>subset</b> of B (A ⊆ B) if every element of A is in B; B is then a <b>superset</b>. The <b>power set</b> P(A) is the set of all subsets of A. The <b>product set</b> A × B is the set of ordered pairs (a, b).</p>
  <div class="vis" data-vis="venn"></div>
  <div class="formula">n(P(A)) = 2ⁿ  ;  n(A × B) = n(A)·n(B)  ;  n(A∪B) = n(A) + n(B) − n(A∩B)</div>
  <div class="formula">De Morgan: (A∪B)ᶜ = Aᶜ∩Bᶜ  ;  (A∩B)ᶜ = Aᶜ∪Bᶜ  ;  A − B = A ∩ Bᶜ</div>
  <p><b>Example:</b> n(A) = 30, n(B) = 25, n(A∩B) = 10 → n(A∪B) = 45. If A has 4 elements, P(A) has 2⁴ = 16 elements (15 proper subsets, excluding A itself). If n(A) = 3 and n(B) = 4 then n(A × B) = 12.</p>
  <div class="note">Mistake: forgetting the empty set and the set itself when counting subsets, and thinking A × B = B × A (it is not, in general).</div>`},
 { title:"Real Number System & Absolute Value", body:`
  <p>Natural numbers ℕ ⊂ integers ℤ ⊂ rationals ℚ ⊂ reals ℝ. A rational number is p/q (q ≠ 0); irrational numbers (√2, π, e) have non-terminating, non-repeating decimals. The reals are <b>complete</b>: every non-empty set bounded above has a least upper bound.</p>
  <div class="formula">|x| = x if x ≥ 0, −x if x &lt; 0  ;  |x − a| &lt; r ⇔ a − r &lt; x &lt; a + r  ;  |x| &gt; r ⇔ x &lt; −r or x &gt; r</div>
  <div class="formula">Triangle inequality: |a + b| ≤ |a| + |b|</div>
  <p><b>Example:</b> Solve |x − 3| &lt; 2: 1 &lt; x &lt; 5. Solve |2x + 1| ≥ 5: 2x + 1 ≥ 5 or 2x + 1 ≤ −5, so x ≥ 2 or x ≤ −3.</p>
  <div class="note">Mistake: the sum or product of irrationals may be rational (√2 × √2 = 2); but rational + irrational is always irrational.</div>`},
 { title:"Complex Numbers, De Moivre's Theorem & nth Roots", body:`
  <p>A complex number z = x + iy (i² = −1) has modulus |z| = √(x²+y²) and argument θ = arg z. In polar form z = r(cos θ + i sin θ) = r e^(iθ). The conjugate is z̄ = x − iy and z·z̄ = |z|².</p>
  <div class="vis" data-vis="nroots"></div>
  <div class="formula">De Moivre: (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ</div>
  <div class="formula">nth roots of z = r e^(iθ):  r^(1/n) · [cos((θ + 2πk)/n) + i sin((θ + 2πk)/n)],  k = 0, 1, …, n−1</div>
  <p>The n roots lie on a circle of radius r^(1/n), equally spaced by 2π/n. The n nth roots of unity add up to 0. For cube roots of unity 1, ω, ω²: ω³ = 1 and 1 + ω + ω² = 0.</p>
  <p><b>Example:</b> (1 + i)⁸: |1+i| = √2, arg = π/4, so (√2)⁸ [cos 2π + i sin 2π] = 16. Also i²⁷ = i³ = −i (27 = 4·6 + 3).</p>
  <div class="note">Mistake: forgetting that there are n distinct nth roots (not just the principal one), and using the wrong quadrant for arg z.</div>`},
 { title:"Summation of Trigonometric Series", body:`
  <p>Two standard tools: the <b>method of difference</b> (write each term as f(k+1) − f(k) so that the sum telescopes) and the <b>C + iS method</b> (sum cos terms C and sin terms S together as a geometric series in e^(iθ)).</p>
  <div class="formula">Σₖ₌₁ⁿ 1/[k(k+1)] = Σ (1/k − 1/(k+1)) = 1 − 1/(n+1) = n/(n+1)</div>
  <div class="formula">C + iS = Σₖ₌₀ⁿ⁻¹ e^(ikθ) = (1 − e^(inθ))/(1 − e^(iθ))  ⇒  C = cos((n−1)θ/2)·sin(nθ/2)/sin(θ/2)</div>
  <p>Method: take real part for the cosine series and imaginary part for the sine series, and use 1 − e^(iφ) = −2i sin(φ/2)·e^(iφ/2).</p>
  <p><b>Example:</b> Σₖ₌₀³ cos(kπ/2) = 1 + 0 − 1 + 0 = 0; the formula gives sin(4·π/4)= sin π = 0. ✓ Also Σₖ₌₁⁹ 1/[k(k+1)] = 9/10.</p>
  <div class="note">Mistake: sign errors in telescoping (check small n), and forgetting the sum starts at k = 0 versus k = 1.</div>`},
 { title:"Inequalities (AM–GM, Cauchy, Tchebyshev, Jensen)", body:`
  <p>Key inequalities for positive reals and sequences:</p>
  <div class="formula">AM ≥ GM ≥ HM :  (a₁+…+aₙ)/n ≥ (a₁…aₙ)^(1/n) ≥ n/(Σ1/aᵢ)  (equality iff all equal)</div>
  <div class="formula">Cauchy–Schwarz: (Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²)  (equality iff aᵢ/bᵢ constant)</div>
  <div class="formula">Tchebyshev (same order): n·Σaᵢbᵢ ≥ (Σaᵢ)(Σbᵢ)  ;  Jensen (f convex): f(Σλᵢxᵢ) ≤ Σλᵢf(xᵢ)</div>
  <p>Weierstrass inequalities: for 0 &lt; aᵢ &lt; 1, Π(1 − aᵢ) ≥ 1 − Σaᵢ, and for 0 &lt; aᵢ, Π(1 + aᵢ) ≥ 1 + Σaᵢ.</p>
  <p><b>Example:</b> If a + b = 10 (a, b &gt; 0) then ab ≤ 25 (AM–GM). For x &gt; 0, x + 1/x ≥ 2, equal at x = 1. Cauchy: (1·4 + 2·5 + 3·6)² = 32² = 1024 ≤ (1+4+9)(16+25+36) = 14 × 77 = 1078.</p>
  <div class="note">Mistake: using AM–GM when some numbers are negative, and forgetting to check when equality actually holds (it decides the max/min).</div>`},
 { title:"Theory of Equations", body:`
  <p>The <b>fundamental theorem of algebra</b>: a polynomial of degree n has exactly n complex roots (counted with multiplicity). The division algorithm: f(x) = (x − a)q(x) + R, and the <b>remainder theorem</b> gives R = f(a).</p>
  <div class="formula">For x³ + px² + qx + r with roots α, β, γ:  Σα = −p ,  Σαβ = q ,  αβγ = −r</div>
  <div class="formula">Descartes' rule: number of positive roots = sign changes in f(x), or less by an even number; for negative roots use f(−x)</div>
  <p><b>Synthetic division</b> divides by (x − a) using only coefficients. Complex roots of real polynomials occur in conjugate pairs. A root repeated twice is also a root of f′(x).</p>
  <p><b>Example:</b> f(x) = x³ − 6x² + 11x − 6 has roots 1, 2, 3: sum 6, pair-sum 11, product 6. Synthetic division by (x − 1): 1 | 1 −6 11 −6 → 1, −5, 6, 0; quotient x² − 5x + 6, remainder 0. Descartes: signs + − + − (3 changes), so 3 or 1 positive roots; f(−x) has no sign change, so no negative root. Dividing by (x − 4) leaves remainder f(4) = 6.</p>
  <div class="note">Mistake: wrong sign in "product of roots = −r" for odd degree, and forgetting that zero coefficients must be written as 0 in synthetic division.</div>`}
]}
);

QUIZZES.push(
{ id:"pos", name:"Principles of Statistics", questions:[
 { t:"Scope, variables & scales", q:"Blood group (A, B, AB, O) is measured on which scale?", o:["Nominal","Interval","Ordinal","Ratio"], a:0, e:"Blood group only names categories with no order, so it is nominal." },
 { t:"Scope, variables & scales", q:"Which of the following has a true zero point (ratio scale)?", o:["Calendar year","Temperature in °C","Weight in kg","Rank in class"], a:2, e:"Weight has a true zero, so ratios are meaningful. °C and year are interval; rank is ordinal." },
 { t:"Scope, variables & scales", q:"The number of students in a class is a:", o:["continuous variable","discrete variable","qualitative variable","attribute"], a:1, e:"It is a count taking whole values only, so it is discrete." },
 { t:"Frequency distribution & graphs", q:"By Sturges' rule the number of classes for n = 64 observations is about:", o:["7","6","5","8"], a:0, e:"k = 1 + 3.322 log₁₀ 64 = 1 + 6 = 7." },
 { t:"Frequency distribution & graphs", q:"In a stem-and-leaf plot where stems are tens, the value 138 is written as:", o:["138 | 0","1 | 38","13 | 8","1 | 3"], a:2, e:"The stem is the leading digits (13) and the leaf is the last digit (8)." },
 { t:"Frequency distribution & graphs", q:"A curve of cumulative frequencies plotted against class boundaries is called a(n):", o:["histogram","frequency polygon","pie chart","ogive"], a:3, e:"The cumulative frequency curve is an ogive." },
 { t:"Central tendency & dispersion", q:"The arithmetic mean of 2, 4, 4, 6, 9 is:", o:["4","6","5.5","5"], a:3, e:"Sum = 25, n = 5, mean = 5." },
 { t:"Central tendency & dispersion", q:"The median of 3, 7, 1, 9, 5, 11 is:", o:["6.5","5","6","7"], a:2, e:"Sorted: 1, 3, 5, 7, 9, 11. Median = (5 + 7)/2 = 6." },
 { t:"Central tendency & dispersion", q:"The geometric mean of 2 and 8 is:", o:["4","3.2","6","5"], a:0, e:"GM = √(2 × 8) = 4. (AM = 5, HM = 3.2.)" },
 { t:"Central tendency & dispersion", q:"For the data 2, 4, 4, 6, 9 the sample variance is:", o:["28","7","2.65","5.6"], a:1, e:"SS = 9 + 1 + 1 + 1 + 16 = 28, so s² = 28/(5 − 1) = 7. (5.6 is the population variance.)" },
 { t:"Central tendency & dispersion", q:"A data set has mean 50 and standard deviation 10. Its coefficient of variation is:", o:["50%","0.2%","20%","5%"], a:2, e:"CV = (10/50) × 100 = 20%." },
 { t:"Moments, skewness & kurtosis", q:"For a positively skewed distribution:", o:["mean &lt; median &lt; mode","mean = median = mode","median &gt; mean &gt; mode","mean &gt; median &gt; mode"], a:3, e:"The long right tail pulls the mean above the median, and the median above the mode." },
 { t:"Moments, skewness & kurtosis", q:"The second central moment μ₂ is the:", o:["variance","kurtosis","skewness","mean"], a:0, e:"μ₂ = Σ(x − x̄)²/n is the (population) variance." },
 { t:"Moments, skewness & kurtosis", q:"For the normal distribution, the kurtosis coefficient β₂ equals:", o:["0, leptokurtic","1, platykurtic","3, leptokurtic","3, mesokurtic"], a:3, e:"Normal curve has β₂ = 3 and is called mesokurtic (excess kurtosis 0)." },
 { t:"Five-number summary & box plot", q:"The five-number summary consists of:", o:["mean, median, mode, range, SD","Q₁, Q₂, Q₃, D₅, P₉₀","min, Q₁, median, Q₃, max","min, mean, median, mode, max"], a:2, e:"It is the minimum, first quartile, median, third quartile and maximum." },
 { t:"Five-number summary & box plot", q:"If Q₁ = 7 and Q₃ = 16, the upper outlier fence (1.5 × IQR rule) is:", o:["23.5","29.5","31","25.5"], a:1, e:"IQR = 9; 16 + 1.5 × 9 = 29.5." },
 { t:"Association & contingency table", q:"In a 2×2 table a = 40, b = 10, c = 20, d = 30. Yule's coefficient of association Q is about:", o:["0.29","0.50","0.83","0.71"], a:3, e:"Q = (ad − bc)/(ad + bc) = (1200 − 200)/(1200 + 200) = 0.714." },
 { t:"Association & contingency table", q:"Attributes A and B are independent when:", o:["(AB) = (A) + (B)","(AB) = (A)(B)/N","(AB) = N/[(A)(B)]","(AB) = (A) − (B)"], a:1, e:"Independence means the observed (AB) equals the expected frequency (A)(B)/N." },
 { t:"Correlation & regression", q:"Spearman's rank correlation for n = 5 with Σd² = 4 is:", o:["0.2","0.6","0.8","0.96"], a:2, e:"ρ = 1 − 6(4)/[5(25 − 1)] = 1 − 24/120 = 0.8." },
 { t:"Correlation & regression", q:"If Sxy = 6 and Sxx = 10, the slope of the regression of y on x is:", o:["0.36","0.77","0.6","1.67"], a:2, e:"b = Sxy/Sxx = 6/10 = 0.6." }
]},
{ id:"alg", name:"Basic Algebra", questions:[
 { t:"Sets", q:"A set with 4 elements has how many subsets?", o:["8","15","16","4"], a:2, e:"Number of subsets is 2⁴ = 16 (15 are proper subsets)." },
 { t:"Sets", q:"If n(A) = 30, n(B) = 25 and n(A∩B) = 10, then n(A∪B) is:", o:["55","35","45","65"], a:2, e:"30 + 25 − 10 = 45." },
 { t:"Sets", q:"By De Morgan's law, (A∪B)ᶜ equals:", o:["Aᶜ∩Bᶜ","Aᶜ − B","A∩B","Aᶜ∪Bᶜ"], a:0, e:"The complement of a union is the intersection of the complements." },
 { t:"Sets", q:"If n(A) = 3 and n(B) = 4, the number of elements in A × B is:", o:["7","64","81","12"], a:3, e:"n(A × B) = n(A)·n(B) = 12." },
 { t:"Real numbers", q:"Which of the following is irrational?", o:["√2","22/7","√16","0.75"], a:0, e:"√2 cannot be written as p/q. 0.75 = 3/4, 22/7 is rational, √16 = 4." },
 { t:"Real numbers", q:"The solution of |x − 3| &lt; 2 is:", o:["x &lt; 5","1 &lt; x &lt; 5","x &gt; 1","−1 &lt; x &lt; 5"], a:1, e:"−2 &lt; x − 3 &lt; 2 gives 1 &lt; x &lt; 5." },
 { t:"Complex numbers & De Moivre", q:"The value of i²⁷ is:", o:["−i","−1","1","i"], a:0, e:"27 = 4·6 + 3, so i²⁷ = i³ = −i." },
 { t:"Complex numbers & De Moivre", q:"De Moivre's theorem states (cos θ + i sin θ)ⁿ =", o:["cosⁿθ + i sinⁿθ","n cos θ + i n sin θ","cos nθ + i sin nθ","cos θ + i sin nθ"], a:2, e:"The angle is multiplied by n." },
 { t:"Complex numbers & De Moivre", q:"The value of (1 + i)⁸ is:", o:["16","8","−16","16i"], a:0, e:"1 + i = √2 e^(iπ/4); raising to 8 gives 16 e^(i2π) = 16." },
 { t:"Complex numbers & De Moivre", q:"The sum of the three cube roots of unity is:", o:["−1","1","3","0"], a:3, e:"1 + ω + ω² = 0." },
 { t:"Trigonometric series", q:"The sum Σₖ₌₁ⁿ 1/[k(k + 1)] equals:", o:["1/(n + 1)","n/(n + 1)","(n + 1)/n","n²/(n + 1)"], a:1, e:"Telescoping: Σ(1/k − 1/(k + 1)) = 1 − 1/(n + 1) = n/(n + 1)." },
 { t:"Trigonometric series", q:"In the C + iS method, the series Σ e^(ikθ) is summed as a:", o:["Taylor series","arithmetic series","geometric series","harmonic series"], a:2, e:"Each term is the previous term times e^(iθ), so it is a geometric series with ratio e^(iθ)." },
 { t:"Inequalities", q:"If a, b &gt; 0 and a + b = 10, the maximum value of ab is:", o:["50","10","100","25"], a:3, e:"AM–GM: ab ≤ ((a + b)/2)² = 25, at a = b = 5." },
 { t:"Inequalities", q:"For x &gt; 0, the minimum value of x + 1/x is:", o:["1","4","0","2"], a:3, e:"AM–GM gives x + 1/x ≥ 2, equal at x = 1." },
 { t:"Inequalities", q:"Equality holds in the Cauchy–Schwarz inequality when:", o:["the sequences are orthogonal","aᵢ + bᵢ is constant","the sequences are proportional","the sequences are equal to zero only"], a:2, e:"Equality iff aᵢ/bᵢ is constant, i.e. one sequence is a multiple of the other." },
 { t:"Inequalities", q:"Jensen's inequality for a convex function f says:", o:["f(E X) ≥ E f(X)","f(E X) = E f(X)","f(E X) ≤ E f(X)","f(E X) &lt; 0"], a:2, e:"For convex f, the function of the mean is at most the mean of the function." },
 { t:"Theory of equations", q:"The sum of the roots of x³ − 6x² + 11x − 6 = 0 is:", o:["−11","6","−6","11"], a:1, e:"Sum of roots = −(coefficient of x²) = 6 (roots 1, 2, 3)." },
 { t:"Theory of equations", q:"For x³ − 2x² + x − 8 = 0, the product of the roots is:", o:["2","−8","8","−2"], a:2, e:"For a monic cubic, product of roots = −r = −(−8) = 8." },
 { t:"Theory of equations", q:"By Descartes' rule, x³ − 6x² + 11x − 6 has how many positive roots?", o:["3 or 1","0","exactly 2","2 or 0"], a:0, e:"Signs + − + − have 3 changes, so 3 or 1 positive roots." },
 { t:"Theory of equations", q:"The remainder when x³ − 6x² + 11x − 6 is divided by (x − 4) is:", o:["6","−6","4","0"], a:0, e:"Remainder theorem: f(4) = 64 − 96 + 44 − 6 = 6." }
]}
);

MOCKS.push(
{ id:"pos", name:"Principles of Statistics", minutes:30, questions:[
 { q:"Satisfaction rating (poor, fair, good, excellent) is measured on which scale?", o:["Interval","Ratio","Ordinal","Nominal"], a:2, e:"The categories have a natural order but unequal or unknown gaps: ordinal." },
 { q:"Temperature in degrees Fahrenheit is measured on the:", o:["interval scale","ratio scale","nominal scale","ordinal scale"], a:0, e:"Equal intervals but no true zero: interval scale." },
 { q:"The mid-point of the class 20–30 is:", o:["25","20","30","10"], a:0, e:"(20 + 30)/2 = 25." },
 { q:"A range of 47 is to be grouped into 5 classes. The approximate class width is:", o:["9.4","235","47","5"], a:0, e:"Width ≈ Range/k = 47/5 = 9.4 (usually rounded to 10)." },
 { q:"Which of these is true for a histogram of a continuous variable?", o:["it shows only mean","bars touch each other","it needs a pie","bars have gaps"], a:1, e:"Continuous classes are adjacent, so the bars touch." },
 { q:"The mode of 3, 5, 5, 7, 5, 8, 3 is:", o:["3","7","8","5"], a:3, e:"5 occurs three times, the most." },
 { q:"Marks 80 (weight 2) and 60 (weight 3). The weighted mean is:", o:["66","70","68","72"], a:2, e:"(80·2 + 60·3)/5 = 340/5 = 68." },
 { q:"If every observation is multiplied by 3, the standard deviation becomes:", o:["9 times","the same","3 more","3 times"], a:3, e:"SD scales by |c| = 3 (variance by 9)." },
 { q:"If 5 is added to every observation, the variance:", o:["becomes 5 times","increases by 5","is unchanged","increases by 25"], a:2, e:"Adding a constant shifts the mean but not the spread." },
 { q:"If Q₁ = 20 and Q₃ = 60, the quartile deviation is:", o:["10","80","20","40"], a:2, e:"QD = (60 − 20)/2 = 20." },
 { q:"Skewness coefficient γ₁ = μ₃/μ₂^(3/2) with μ₂ = 4 and μ₃ = −16 equals:", o:["−0.5","−2","2","−4"], a:1, e:"μ₂^(3/2) = 8, so γ₁ = −16/8 = −2 (negatively skewed)." },
 { q:"Bowley's skewness with Q₁ = 10, Q₂ = 15, Q₃ = 30 is:", o:["0.33","0.25","−0.5","0.5"], a:3, e:"(30 + 10 − 30)/(30 − 10) = 10/20 = 0.5." },
 { q:"A distribution with β₂ &gt; 3 is called:", o:["symmetric","platykurtic","mesokurtic","leptokurtic"], a:3, e:"β₂ &gt; 3 means more peaked with heavier tails: leptokurtic." },
 { q:"The line inside the box of a box plot represents the:", o:["mean","range","median","mode"], a:2, e:"The line in the box marks the median." },
 { q:"With Q₁ = 12 and Q₃ = 30, the interquartile range is:", o:["42","21","9","18"], a:3, e:"IQR = Q₃ − Q₁ = 18." },
 { q:"In a 2×2 table the row total is 50, column total 60 and N = 100. The expected frequency of that cell is:", o:["25","60","30","50"], a:2, e:"E = 50 × 60/100 = 30." },
 { q:"A 2×2 table has χ² = 16.67 with N = 100. The phi coefficient is about:", o:["0.38","0.41","0.17","1.67"], a:1, e:"φ = √(χ²/N) = √0.1667 = 0.408." },
 { q:"Which value of Pearson's r is impossible?", o:["0.5","1.2","0","−0.9"], a:1, e:"r must lie in [−1, 1]." },
 { q:"With C = 8 concordant and D = 2 discordant pairs among n = 5 items, Kendall's τ is:", o:["0.8","0.2","0.4","0.6"], a:3, e:"τ = (C − D)/[n(n − 1)/2] = 6/10 = 0.6." },
 { q:"For ŷ = 2.2 + 0.6x, the predicted y at x = 6 is:", o:["3.6","6.4","5.8","4.0"], a:2, e:"2.2 + 0.6 × 6 = 5.8." }
]},
{ id:"alg", name:"Basic Algebra", minutes:30, questions:[
 { q:"The number of proper subsets of a set with 3 elements is:", o:["6","8","3","7"], a:3, e:"2³ − 1 = 7 (all subsets except the set itself)." },
 { q:"If A = {1, 2, 3} and B = {2, 3, 4}, then A − B is:", o:["{4}","{1}","{1, 4}","{2, 3}"], a:1, e:"Elements in A but not in B: {1}." },
 { q:"The symmetric difference of A = {1, 2, 3} and B = {2, 3, 4} is:", o:["{1, 2, 3, 4}","{1}","{2, 3}","{1, 4}"], a:3, e:"(A − B) ∪ (B − A) = {1} ∪ {4}." },
 { q:"If n(A∪B) = 50, n(A) = 30 and n(B) = 35, then n(A∩B) is:", o:["20","65","15","5"], a:2, e:"n(A∩B) = 30 + 35 − 50 = 15." },
 { q:"The sum of a rational and an irrational number is always:", o:["an integer","irrational","rational","zero"], a:1, e:"If it were rational, the irrational number would equal a difference of rationals, which is impossible." },
 { q:"The solution set of |x| &gt; 3 is:", o:["−3 &lt; x &lt; 3","x &lt; −3 or x &gt; 3","x &gt; −3","x &gt; 3 only"], a:1, e:"|x| &gt; r means x &lt; −r or x &gt; r." },
 { q:"(2 + 3i)(1 − i) equals:", o:["2 − 3i","−1 + i","5 + i","5 − i"], a:2, e:"2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i." },
 { q:"The conjugate of 3 − 4i is:", o:["3 + 4i","4 − 3i","−3 + 4i","−3 − 4i"], a:0, e:"Change the sign of the imaginary part." },
 { q:"The modulus and argument of 1 + i√3 are:", o:["2 and π/3","4 and π/3","2 and π/6","√2 and π/4"], a:0, e:"|z| = √(1 + 3) = 2, tan θ = √3 so θ = π/3." },
 { q:"The number of distinct fifth roots of unity is:", o:["5","1","10","4"], a:0, e:"There are exactly n distinct nth roots of unity." },
 { q:"(cos 20° + i sin 20°)³ equals:", o:["cos 60° − i sin 60°","√3/2 + i/2","1","1/2 + i√3/2"], a:3, e:"By De Moivre: cos 60° + i sin 60° = 1/2 + i√3/2." },
 { q:"If ω is a complex cube root of unity, ω¹⁰⁰ equals:", o:["ω","1","0","ω²"], a:0, e:"ω³ = 1 and 100 = 3·33 + 1, so ω¹⁰⁰ = ω." },
 { q:"The value of Σₖ₌₁⁹ 1/[k(k + 1)] is:", o:["9/10","10/9","8/9","1/10"], a:0, e:"n/(n + 1) with n = 9." },
 { q:"The sum Σₖ₌₀³ cos(kπ/2) equals:", o:["−1","2","1","0"], a:3, e:"1 + 0 − 1 + 0 = 0." },
 { q:"Tchebyshev's inequality for two sequences in the same order states:", o:["nΣaᵢbᵢ ≤ ΣaᵢΣbᵢ","Σaᵢbᵢ ≥ nΣaᵢΣbᵢ","nΣaᵢbᵢ ≥ ΣaᵢΣbᵢ","Σaᵢbᵢ = ΣaᵢΣbᵢ"], a:2, e:"When both sequences are similarly ordered, n times the sum of products is at least the product of the sums." },
 { q:"If a, b &gt; 0 and ab = 16, the minimum of a + b is:", o:["8","32","4","16"], a:0, e:"AM ≥ GM: (a + b)/2 ≥ √16 = 4, so a + b ≥ 8." },
 { q:"By Descartes' rule, the polynomial x⁴ + x² + 1 has how many positive roots?", o:["0","1","4","2"], a:0, e:"No sign changes, so no positive roots." },
 { q:"A monic cubic with roots 1, 2 and 4 has coefficient of x equal to:", o:["14","7","8","−7"], a:0, e:"Pair-sum: 1·2 + 1·4 + 2·4 = 14; the cubic is x³ − 7x² + 14x − 8." },
 { q:"By the fundamental theorem of algebra, a polynomial of degree n has:", o:["n/2 roots","at most n real roots exactly","only one root","exactly n complex roots counting multiplicity"], a:3, e:"Over ℂ every degree-n polynomial has n roots counted with multiplicity." },
 { q:"If 2 + 3i is a root of a real polynomial, another root is:", o:["−2 − 3i","2 − 3i","−2 + 3i","3 + 2i"], a:1, e:"Non-real roots of real polynomials occur in conjugate pairs." }
]}
);
