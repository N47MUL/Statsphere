/* ============ PRACTICE – 1st YEAR (worked problems with solutions) ============ */
PRACTICE.push(
{ id:"pos", name:"Principles of Statistics", items:[
 { q:"Eight students scored 12, 15, 11, 18, 14, 20, 16, 15. Find the mean, median and sample standard deviation.", a:"Σx = 121, so x̄ = 121/8 = <b>15.125</b>. Ordered: 11, 12, 14, 15, 15, 16, 18, 20, so median = (15+15)/2 = <b>15</b>. Σx² = 1891, Σ(x−x̄)² = 1891 − 121²/8 = 61.125, s² = 61.125/7 = 8.732, <b>s ≈ 2.95</b>." },
 { q:"Frequency distribution: class 0–10 (f=4), 10–20 (f=8), 20–30 (f=12), 30–40 (f=6). Find the mean and the median.", a:"n = 30; midpoints 5, 15, 25, 35. Σfx = 20+120+300+210 = 650, mean = 650/30 = <b>21.67</b>. n/2 = 15 falls in 20–30 (cumulative frequency before it = 12): median = 20 + (15−12)/12 × 10 = <b>22.5</b>." },
 { q:"For x = 1, 2, 3, 4, 5 and y = 2, 4, 5, 4, 5 find Pearson's correlation coefficient.", a:"x̄ = 3, ȳ = 4. Sxy = Σ(x−x̄)(y−ȳ) = 6, Sxx = 10, Syy = 6. r = 6/√(10×6) = <b>0.775</b>, a strong positive linear relationship." },
 { q:"Two judges rank six contestants: Judge 1 = 1,2,3,4,5,6 and Judge 2 = 2,1,4,3,6,5. Find Spearman's rank correlation.", a:"d = −1, 1, −1, 1, −1, 1 so Σd² = 6. ρ = 1 − 6Σd²/(n(n²−1)) = 1 − 36/210 = <b>0.829</b>." },
 { q:"In a 2×2 table (AB) = 25, (Aβ) = 15, (αB) = 10, (αβ) = 30. Find Yule's coefficient of association Q.", a:"Q = [(AB)(αβ) − (Aβ)(αB)] / [(AB)(αβ) + (Aβ)(αB)] = (750 − 150)/(750 + 150) = 600/900 = <b>0.667</b>, positive association." },
 { q:"Data: 3, 5, 7, 8, 9, 11, 13, 15, 16, 40. Using quartile positions (n+1)/4 and 3(n+1)/4, find the five-number summary and check for outliers with the 1.5×IQR rule.", a:"n = 10: Q₁ is at position 2.75 → 5 + 0.75×2 = 6.5; median = (9+11)/2 = 10; Q₃ at position 8.25 → 15 + 0.25×1 = 15.25. Min = 3, max = 40. IQR = 8.75, upper fence = 15.25 + 1.5×8.75 = 28.375, so <b>40 is an outlier</b>." },
 { q:"A distribution has mean 50, median 48 and standard deviation 10. Find Pearson's coefficient of skewness and interpret it.", a:"Sk = 3(mean − median)/SD = 3(2)/10 = <b>0.6</b>: moderately positively skewed (long right tail), since mean &gt; median." }
]},
{ id:"alg", name:"Basic Algebra", items:[
 { q:"If α, β, γ are the roots of x³ − 4x² + x + 6 = 0, find α² + β² + γ².", a:"Σα = 4, Σαβ = 1. α²+β²+γ² = (Σα)² − 2Σαβ = 16 − 2 = <b>14</b>. (Check: roots are −1, 2, 3, and 1+4+9 = 14.)" },
 { q:"Use De Moivre's theorem to compute (1 + i)⁸.", a:"1 + i = √2(cos 45° + i sin 45°). (1+i)⁸ = (√2)⁸ (cos 360° + i sin 360°) = 16 × 1 = <b>16</b>." },
 { q:"Resolve (3x + 5)/((x+1)(x+2)) into partial fractions.", a:"3x + 5 = A(x+2) + B(x+1). Put x = −1: 2 = A. Put x = −2: −1 = −B so B = 1. Result: <b>2/(x+1) + 1/(x+2)</b>." },
 { q:"In a class of students, |A| = 30 passed Maths, |B| = 25 Stats, |C| = 20 Physics, |A∩B| = 10, |B∩C| = 8, |A∩C| = 6, |A∩B∩C| = 3. How many passed at least one subject?", a:"Inclusion–exclusion: 30 + 25 + 20 − 10 − 8 − 6 + 3 = <b>54</b>." },
 { q:"Find the coefficient of x³ in the expansion of (2 + x)⁶.", a:"Term = C(6,3) 2³ x³ = 20 × 8 x³. Coefficient = <b>160</b>." },
 { q:"Solve the inequality |2x − 3| &lt; 5.", a:"−5 &lt; 2x − 3 &lt; 5 ⇒ −2 &lt; 2x &lt; 8 ⇒ <b>−1 &lt; x &lt; 4</b>." },
 { q:"Show that (x − 3) is a factor of x³ − 2x² − 5x + 6 and find the other factors using synthetic division.", a:"Synthetic division by 3: coefficients 1, −2, −5, 6 → 1, 1, −2, remainder <b>0</b>. Quotient x² + x − 2 = (x + 2)(x − 1). So x³ − 2x² − 5x + 6 = (x − 3)(x − 1)(x + 2)." }
]},
{ id:"ip", name:"Introduction to Probability", items:[
 { q:"Machine A makes 30% of a factory's bulbs with 4% defective; machine B makes the other 70% with 1% defective. A bulb is found defective. What is the probability it came from A?", a:"P(D) = 0.3×0.04 + 0.7×0.01 = 0.012 + 0.007 = 0.019. Bayes: P(A|D) = 0.012/0.019 = <b>0.632</b>." },
 { q:"X ~ Binomial(n = 10, p = 0.3). Find P(X = 4) and P(X ≤ 2).", a:"P(X=4) = C(10,4)(0.3)⁴(0.7)⁶ = 210 × 0.0081 × 0.117649 = <b>0.2001</b>. P(X ≤ 2) = 0.0282 + 0.1211 + 0.2335 = <b>0.3828</b>." },
 { q:"X takes 0, 1, 2, 3 with probabilities 0.1, 0.3, 0.4, 0.2. Find E(X) and Var(X).", a:"E(X) = 0.3 + 0.8 + 0.6 = <b>1.7</b>. E(X²) = 0.3 + 1.6 + 1.8 = 3.7. Var(X) = 3.7 − 1.7² = <b>0.81</b>." },
 { q:"A committee of 4 is chosen at random from 6 men and 5 women. Find the probability that it has at least 2 women.", a:"Total = C(11,4) = 330. No woman: C(6,4) = 15. One woman: 5 × C(6,3) = 100. Favourable = 330 − 15 − 100 = 215. P = 215/330 = <b>0.6515</b>." },
 { q:"A variable has mean 50 and standard deviation 5. Use Chebyshev's inequality to give a lower bound for P(40 &lt; X &lt; 60).", a:"k = 10/5 = 2. P(|X − μ| &lt; 2σ) ≥ 1 − 1/k² = 1 − 1/4 = <b>0.75</b>." },
 { q:"Two events satisfy P(A) = 0.5, P(B) = 0.4, P(A∪B) = 0.7. Find P(A∩B) and check whether A and B are independent.", a:"P(A∩B) = 0.5 + 0.4 − 0.7 = <b>0.2</b>. P(A)P(B) = 0.2, which equals P(A∩B), so <b>A and B are independent</b>." }
]},
{ id:"st1", name:"Sampling Techniques I", items:[
 { q:"A simple random sample of n = 5 is drawn without replacement from N = 20 units, with sample variance s² = 16. Estimate Var(ȳ) and the standard error.", a:"f = n/N = 0.25. Var(ȳ) = (1 − f)s²/n = 0.75 × 16/5 = <b>2.4</b>, SE = √2.4 = <b>1.549</b>." },
 { q:"How large a sample is needed to estimate a mean within d = 2 units with 95% confidence if σ = 10? Adjust for a finite population N = 500.", a:"n₀ = (1.96 × 10/2)² = 96.04 ≈ 97. Finite population correction: n = n₀/(1 + n₀/N) = 96.04/1.1921 = 80.57 ⇒ <b>n = 81</b>." },
 { q:"A population has three strata with N = 200, 300, 500 and stratum means 50, 60, 70. Find the stratified mean estimate.", a:"Weights Wₕ = 0.2, 0.3, 0.5. ȳst = 0.2×50 + 0.3×60 + 0.5×70 = 10 + 18 + 35 = <b>63</b>." },
 { q:"Two strata have N₁ = 400, N₂ = 600 with S₁ = 5, S₂ = 10. For total n = 40 find the Neyman allocation.", a:"N₁S₁ = 2000, N₂S₂ = 6000, total 8000. n₁ = 40 × 2000/8000 = <b>10</b>, n₂ = 40 × 6000/8000 = <b>30</b>." },
 { q:"From N = 1000 units a systematic sample of n = 50 is taken with a random start of 7. Find the sampling interval and the first, second and last units.", a:"k = N/n = 20. Units: 7, 27, … , 7 + 49×20 = <b>987</b> (first 7, second 27, last 987)." },
 { q:"A sample gives ȳ = 40 and x̄ = 20; the known population mean of the auxiliary variable is X̄ = 25. Find the ratio estimate of the population mean of y.", a:"R̂ = ȳ/x̄ = 2. ȳ_R = R̂ × X̄ = 2 × 25 = <b>50</b>." }
]},
{ id:"spss", name:"Introduction to Computer and SPSS", items:[
 { q:"Convert the binary number 101101 to decimal and the decimal number 29 to binary.", a:"101101₂ = 32 + 0 + 8 + 4 + 0 + 1 = <b>45</b>. 29 = 16 + 8 + 4 + 1 = <b>11101₂</b>." },
 { q:"Name the SPSS menu path to obtain the mean and standard deviation of a variable, and the one for a box plot.", a:"Analyze → Descriptive Statistics → <b>Descriptives</b> (or Frequencies / Explore). Box plot: Graphs → Legacy Dialogs → Boxplot, or Analyze → Descriptive Statistics → Explore → Plots." },
 { q:"In the SPSS Variable View, what level of measurement would you assign to (a) gender, (b) satisfaction rating Low/Medium/High, (c) height in cm?", a:"(a) <b>Nominal</b>, (b) <b>Ordinal</b>, (c) <b>Scale</b> (interval/ratio)." },
 { q:"A data file is 3 MB. How many bytes is that (1 KB = 1024 bytes)? How many such files fit on a 3 GB pen drive?", a:"3 MB = 3 × 1024 × 1024 = <b>3,145,728 bytes</b>. 3 GB = 3072 MB, so 3072/3 = <b>1024 files</b>." },
 { q:"Write an Excel formula to find the average of cells B2 to B11 and to count how many of those are greater than 50.", a:"Average: <b>=AVERAGE(B2:B11)</b>. Count: <b>=COUNTIF(B2:B11,\"&gt;50\")</b>." },
 { q:"How would you create a new variable BMI = weight/(height²) in SPSS, and how would you group age into three categories?", a:"Transform → <b>Compute Variable</b>, target variable BMI, expression weight/(height**2). Grouping: Transform → <b>Recode into Different Variables</b>, defining old ranges (e.g. 0–17, 18–40, 41 thru Highest) and new codes 1, 2, 3." }
]},
{ id:"calc1", name:"Calculus", items:[
 { q:"Evaluate lim(x→0) sin 3x / x and lim(x→0) (eˣ − 1 − x)/x².", a:"First: sin 3x/x = 3 × (sin 3x/3x) → <b>3</b>. Second: expand eˣ = 1 + x + x²/2 + …, so the ratio → <b>1/2</b>." },
 { q:"Find the third derivative of y = x² eˣ using Leibnitz's theorem.", a:"yₙ = eˣ[x² + 2n x + n(n−1)]. For n = 3: y₃ = <b>eˣ(x² + 6x + 6)</b>." },
 { q:"Evaluate ∫ x eˣ dx and ∫₀^π sin²x dx.", a:"By parts: ∫x eˣ dx = <b>eˣ(x − 1) + C</b>. sin²x = (1 − cos 2x)/2 so ∫₀^π = π/2 = <b>π/2</b>." },
 { q:"Find the maximum and minimum values of f(x) = x³ − 6x² + 9x + 1.", a:"f′ = 3x² − 12x + 9 = 3(x−1)(x−3). f″ = 6x − 12: f″(1) = −6 &lt; 0 so <b>maximum f(1) = 5</b>; f″(3) = 6 &gt; 0 so <b>minimum f(3) = 1</b>." },
 { q:"Find the area enclosed by y = x² and y = x.", a:"They meet at x = 0 and 1. Area = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = <b>1/6</b>." },
 { q:"Find the volume generated by rotating y = √x, 0 ≤ x ≤ 4, about the x-axis.", a:"V = π∫₀⁴ y² dx = π∫₀⁴ x dx = π × 16/2 = <b>8π ≈ 25.13</b> cubic units." }
]},
{ id:"la", name:"Linear Algebra", items:[
 { q:"Find the determinant of A = [[2, 1, 3], [0, 4, 1], [1, 2, 5]].", a:"Expand along row 1: 2(4×5 − 1×2) − 1(0×5 − 1×1) + 3(0×2 − 4×1) = 2(18) + 1 − 12 = <b>25</b>." },
 { q:"Find the inverse of [[4, 7], [2, 6]].", a:"det = 24 − 14 = 10. Inverse = (1/10)[[6, −7], [−2, 4]] = <b>[[0.6, −0.7], [−0.2, 0.4]]</b>." },
 { q:"Solve 2x + y = 5, x + 3y = 10 by Cramer's rule.", a:"D = 2×3 − 1×1 = 5. Dₓ = 5×3 − 1×10 = 5, D_y = 2×10 − 5×1 = 15. <b>x = 1, y = 3</b>." },
 { q:"Find the eigenvalues and eigenvectors of A = [[2, 1], [1, 2]].", a:"|A − λI| = (2−λ)² − 1 = 0 ⇒ <b>λ = 3, 1</b>. For λ = 3: (1, 1)ᵀ; for λ = 1: (1, −1)ᵀ." },
 { q:"Find the rank of [[1, 2, 3], [2, 4, 6], [1, 0, 1]].", a:"Row 2 = 2 × Row 1, so it is redundant. Rows 1 and 3 are independent. <b>Rank = 2</b>." },
 { q:"Is the quadratic form Q = x² + 2xy + 3y² positive definite?", a:"Matrix [[1, 1], [1, 3]]. Leading minors: 1 &gt; 0 and 1×3 − 1 = 2 &gt; 0. <b>Yes, positive definite</b>." }
]}
);
