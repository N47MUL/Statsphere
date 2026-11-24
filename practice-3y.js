/* ============ PRACTICE – 3rd YEAR (worked problems with solutions) ============ */
PRACTICE.push(
{ id:"doe", name:"Design and Analysis of Experiments I", items:[
 { q:"Three treatments give A: 5, 7, 6; B: 8, 9, 10; C: 4, 5, 6. Carry out the one-way ANOVA and test at 5%. (F₀.₀₅(2,6) = 5.14)", a:"G = 60, N = 9, CF = 400. SST = 432 − 400 = 32 (Σy² = 432). SSTr = (18² + 27² + 15²)/3 − 400 = 426 − 400 = 26. SSE = 32 − 26 = 6. MSTr = 13, MSE = 1, <b>F = 13 &gt; 5.14</b>, so the treatment means differ significantly." },
 { q:"A CRD has 4 treatments with 5 replicates each. Write the degrees of freedom for treatments, error and total.", a:"Treatments = 4 − 1 = <b>3</b>; total = 20 − 1 = <b>19</b>; error = 19 − 3 = <b>16</b>." },
 { q:"In an RBD with 3 treatments and 4 blocks, SST = 200, SS(treatments) = 90, SS(blocks) = 60. Complete the ANOVA and test treatments at 5%. (F₀.₀₅(2,6) = 5.14)", a:"SSE = 200 − 90 − 60 = 50. df: treatments 2, blocks 3, error 6. MSTr = 45, MSE = 8.33. <b>F = 5.40 &gt; 5.14</b>, so treatment effects are significant." },
 { q:"In a CRD with MSE = 8, r = 5 replicates and error df = 20, compute the LSD at 5% (t₀.₀₂₅,₂₀ = 2.086).", a:"LSD = t√(2·MSE/r) = 2.086 × √(16/5) = <b>3.73</b>. Two treatment means differing by more than 3.73 are significantly different." },
 { q:"RBD with t = 4 treatments and b = 5 blocks: one observation is missing; the treatment total (of the other 4 observations) T = 40, block total B = 30, grand total of available data G = 210. Estimate the missing value.", a:"x = (tT + bB − G)/((t−1)(b−1)) = (160 + 150 − 210)/(3×4) = 100/12 = <b>8.33</b>." },
 { q:"In a 2² factorial with one replicate: (1) = 20, a = 30, b = 25, ab = 40. Find the main effects of A and B and the interaction.", a:"A = ½(a + ab − b − (1)) = ½(30+40−25−20) = <b>12.5</b>. B = ½(b + ab − a − (1)) = ½(25+40−30−20) = <b>7.5</b>. AB = ½(ab + (1) − a − b) = ½(40+20−30−25) = <b>2.5</b>." }
]},
{ id:"inf", name:"Statistical Inference", items:[
 { q:"A sample from an exponential distribution with density λe^(−λx) has x̄ = 4. Find the MLE of λ.", a:"ln L = n ln λ − λΣx ⇒ λ̂ = n/Σx = 1/x̄ = <b>0.25</b>." },
 { q:"In 200 trials p̂ = 0.56. Test H₀: p = 0.5 against H₁: p &gt; 0.5 at 5%.", a:"z = (0.56 − 0.5)/√(0.25/200) = 0.06/0.03536 = <b>1.70</b> &gt; 1.645, so <b>reject H₀</b> (one-sided). A two-sided test (1.96) would not reject." },
 { q:"A normal sample of n = 10 has s² = 8. Find a 95% CI for σ². (χ²₀.₀₂₅,₉ = 19.02, χ²₀.₉₇₅,₉ = 2.70)", a:"CI = ((n−1)s²/χ²upper, (n−1)s²/χ²lower) = (72/19.02, 72/2.70) = <b>(3.79, 26.67)</b>." },
 { q:"A die is rolled 60 times giving counts 5, 8, 9, 8, 10, 20 for faces 1–6. Test fairness at 5%. (χ²₀.₀₅,₅ = 11.07)", a:"Expected = 10 each. χ² = (25 + 4 + 1 + 4 + 0 + 100)/10 = <b>13.4</b> &gt; 11.07, so <b>reject</b>: the die is not fair." },
 { q:"For Poisson(λ), find the Cramér–Rao lower bound for unbiased estimators of λ and show x̄ attains it.", a:"I(λ) = 1/λ per observation, so the bound is λ/n. Var(x̄) = λ/n, so <b>x̄ attains the bound</b> (it is the UMVUE)." },
 { q:"Find the method-of-moments estimator of θ for Uniform(0, θ).", a:"E(X) = θ/2 = x̄ ⇒ <b>θ̂ = 2x̄</b>." }
]},
{ id:"sim", name:"Simulation and Data Analysis with R and Python", items:[
 { q:"Generate an Exponential(λ = 2) value by the inverse transform method from U = 0.5.", a:"F⁻¹(u) = −ln(1 − u)/λ (or −ln(u)/λ). X = −ln(0.5)/2 = <b>0.3466</b>." },
 { q:"A linear congruential generator is Xₙ₊₁ = (5Xₙ + 3) mod 16 with X₀ = 7. Write the next four values.", a:"5×7+3 = 38 mod 16 = 6; 5×6+3 = 33 mod 16 = 1; 8; 43 mod 16 = 11. Sequence: <b>6, 1, 8, 11</b>." },
 { q:"1000 random points in the unit square are generated and 785 fall inside the quarter circle x² + y² ≤ 1. Estimate π.", a:"π ≈ 4 × 785/1000 = <b>3.14</b>." },
 { q:"What is the output? In R: <code>x &lt;- c(2,4,6,8); mean(x); sd(x)</code>", a:"mean = <b>5</b>; sd (n−1 divisor) = √(20/3) = <b>2.582</b>." },
 { q:"What does this Python print? <code>print([i**2 for i in range(1,6) if i%2==1])</code>", a:"range(1,6) = 1..5; odd values 1, 3, 5 squared: <b>[1, 9, 25]</b>." },
 { q:"A Monte Carlo estimate has σ ≈ 0.5 per replication. How many replications give a standard error of 0.01?", a:"SE = σ/√n ⇒ n = (0.5/0.01)² = <b>2500</b>." }
]},
{ id:"lp", name:"Linear Programming", items:[
 { q:"Maximise Z = 3x + 2y subject to x + y ≤ 4, x + 3y ≤ 6, x, y ≥ 0 (graphical method).", a:"Corner points: (0,0) → 0; (4,0) → 12; (3,1) → 11; (0,2) → 4. <b>Optimum at (4, 0), Z = 12</b>." },
 { q:"Maximise Z = 5x₁ + 4x₂ subject to 6x₁ + 4x₂ ≤ 24, x₁ + 2x₂ ≤ 6. Write the dual and verify the optimal values agree.", a:"Primal optimum: x₁ = 3, x₂ = 1.5, Z = 21. Dual: minimise 24y₁ + 6y₂ s.t. 6y₁ + y₂ ≥ 5, 4y₁ + 2y₂ ≥ 4, y ≥ 0; optimum y = (0.75, 0.5) gives <b>21</b>, equal to the primal value." },
 { q:"Supplies 30 and 40; demands 20, 30, 20. Costs: row 1 = 4, 6, 8; row 2 = 5, 3, 7. Find the North-West Corner solution and its cost.", a:"Balanced (70 = 70). x₁₁ = 20, x₁₂ = 10, x₂₂ = 20, x₂₃ = 20. Cost = 20×4 + 10×6 + 20×3 + 20×7 = <b>340</b>." },
 { q:"Find the optimal strategy and value of the game with payoff matrix [[5, 2], [1, 4]] for the row player.", a:"No saddle point (maximin 2 ≠ minimax 4). p = (d−c)/(a+d−b−c) = (4−1)/(5+4−2−1) = <b>0.5</b> for row 1, 0.5 for row 2. Value = (5×4 − 2×1)/6 = <b>3</b>." },
 { q:"A LP has 3 constraints and 5 variables (including slacks). What is the maximum number of basic solutions?", a:"C(5, 3) = <b>10</b>." },
 { q:"Solve the assignment problem with cost matrix [[9, 2, 7], [6, 4, 3], [5, 8, 1]] (minimise).", a:"Best assignment: row 1 → column 2 (2), row 2 → column 1 (6), row 3 → column 3 (1). <b>Minimum cost = 9</b>." }
]},
{ id:"stoch", name:"Stochastic Processes", items:[
 { q:"For P = [[0.5, 0.5], [0.2, 0.8]] find the two-step transition matrix.", a:"P² = [[0.25+0.10, 0.25+0.40], [0.10+0.16, 0.10+0.64]] = <b>[[0.35, 0.65], [0.26, 0.74]]</b>." },
 { q:"Arrivals form a Poisson process with rate 3 per hour. What is the mean waiting time to the next arrival and P(no arrival in 1 hour)?", a:"Inter-arrival times are Exp(3): mean = <b>1/3 hour (20 min)</b>. P(T &gt; 1) = e⁻³ = <b>0.0498</b>." },
 { q:"M/M/1 queue with λ = 3 and μ = 5 per hour. Find P₀, L, Lq and Wq.", a:"ρ = 0.6. P₀ = 1 − ρ = <b>0.4</b>. L = ρ/(1−ρ) = <b>1.5</b>. Lq = ρ²/(1−ρ) = <b>0.9</b>. Wq = Lq/λ = <b>0.3 hour</b>." },
 { q:"Gambler's ruin with p = 0.6, q = 0.4: starting capital 2, target 5. Find the probability of reaching 5.", a:"With q/p = 2/3: P = (1 − (2/3)²)/(1 − (2/3)⁵) = 0.5556/0.8683 = <b>0.640</b>." },
 { q:"For the chain with P(1→2) = P(2→3) = P(3→1) = 1, classify the states and find the period.", a:"All states communicate (one class), and every return takes a multiple of 3 steps: the chain is <b>irreducible, recurrent and periodic with period 3</b>." }
]},
{ id:"dem", name:"Demography", items:[
 { q:"A country has 1,200 live births in a year, mid-year population 40,000 and 10,000 women aged 15–49. Find the CBR and GFR.", a:"CBR = 1200/40000 × 1000 = <b>30</b> per 1000. GFR = 1200/10000 × 1000 = <b>120</b> per 1000 women." },
 { q:"Age-specific fertility rates (per 1000) for 15–19, 20–24, …, 45–49 are 40, 150, 180, 120, 70, 25, 5. Find the TFR.", a:"Sum = 590. TFR = 5 × 590/1000 = <b>2.95</b> children per woman." },
 { q:"A population grows at 2% per year. Find the doubling time. A population of 100,000 grows exponentially at r = 2.5% for 10 years; find P₁₀.", a:"Doubling time = ln 2/ln 1.02 ≈ <b>35 years</b> (rule of 70: 35). P₁₀ = 100000 e^(0.025×10) = <b>128,403</b>." },
 { q:"There were 300 deaths under age 1 and 6,000 live births. Find the infant mortality rate.", a:"IMR = 300/6000 × 1000 = <b>50</b> per 1000 live births." },
 { q:"From a life table l₆₀ = 80,000 and l₆₅ = 70,000. Find ₅q₆₀ and ₅p₆₀.", a:"₅q₆₀ = (80000 − 70000)/80000 = <b>0.125</b>; ₅p₆₀ = <b>0.875</b>." },
 { q:"A population has 520,000 males and 500,000 females; 300 thousand are aged 0–14, 600 thousand aged 15–64 and 100 thousand aged 65+. Find the sex ratio and the total dependency ratio.", a:"Sex ratio = 520/500 × 100 = <b>104</b> males per 100 females. Dependency ratio = (300 + 100)/600 × 100 = <b>66.7</b>." }
]},
{ id:"sas", name:"Data Analysis with SAS", items:[
 { q:"Write a SAS program to read three observations of name and score and print the mean score.", a:"<code>data a; input name $ score; datalines; Ami 70 Rahim 80 Sumi 90 ; run; proc means data=a mean; var score; run;</code> The mean is <b>80</b>." },
 { q:"What does this code do? <code>data b; set a; bmi = wt/(ht**2); if bmi &gt;= 25 then g = 'High'; else g = 'Normal'; run;</code>", a:"It copies dataset A into B, creates the variable BMI = weight/height², and adds the character variable G, which is 'High' when BMI ≥ 25 and 'Normal' otherwise." },
 { q:"Write SAS code for a frequency table of gender and a chi-square test of gender by smoking.", a:"<code>proc freq data=a; tables gender; tables gender*smoking / chisq; run;</code>" },
 { q:"Write SAS code to regress y on x1 and x2, and a two-sample t-test of score by group.", a:"<code>proc reg data=a; model y = x1 x2; run;</code> and <code>proc ttest data=a; class group; var score; run;</code>" },
 { q:"Write the SAS procedure to sort a dataset by descending age and print the first 5 observations.", a:"<code>proc sort data=a; by descending age; run; proc print data=a (obs=5); run;</code>" }
]},
{ id:"reg2", name:"Regression Analysis II", items:[
 { q:"A multiple regression with k = 3 predictors and n = 24 gives SSR = 240 and SSE = 60. Compute F and test at 5%. (F₀.₀₅(3,20) = 3.10)", a:"F = (SSR/k)/(SSE/(n−k−1)) = (240/3)/(60/20) = 80/3 = <b>26.7</b> &gt; 3.10, so the regression is significant." },
 { q:"The R² from regressing predictor Xⱼ on the other predictors is 0.90. Find its VIF and comment.", a:"VIF = 1/(1 − R²ⱼ) = 1/0.10 = <b>10</b>, the usual threshold: serious multicollinearity." },
 { q:"The residual autocorrelation is ρ̂ = 0.4. Approximate the Durbin–Watson statistic.", a:"d ≈ 2(1 − ρ̂) = <b>1.2</b>, which suggests positive autocorrelation (d below 2)." },
 { q:"Wage = 20 + 5·Experience + 8·Male (Male = 1, Female = 0). Predict wages for a man and a woman each with 4 years experience.", a:"Man: 20 + 20 + 8 = <b>48</b>. Woman: 20 + 20 = <b>40</b>. The dummy coefficient 8 is the average gap, holding experience fixed." },
 { q:"If Var(eᵢ) = σ²xᵢ², how can you correct for heteroscedasticity?", a:"Use weighted least squares with weights wᵢ = 1/xᵢ². Equivalently divide the model by xᵢ so that the new error has constant variance." },
 { q:"For a subset model with p = 3 parameters: SSEₚ = 40, full-model MSE = 2 and n = 20. Compute Mallows' Cp.", a:"Cp = SSEₚ/σ̂² − (n − 2p) = 40/2 − (20 − 6) = <b>6</b>. Since Cp &gt; p = 3, this subset model shows bias." },
 { q:"With n = 20 and p = 3 parameters, what is the average leverage hᵢᵢ, and what cut-off flags a high-leverage point?", a:"Average h = p/n = <b>0.15</b>. A common cut-off is 2p/n = <b>0.30</b>." }
]}
);
