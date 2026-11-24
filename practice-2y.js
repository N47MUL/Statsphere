/* ============ PRACTICE – 2nd YEAR (worked problems with solutions) ============ */
PRACTICE.push(
{ id:"pd", name:"Probability Distributions", items:[
 { q:"Calls arrive as Poisson with mean λ = 3 per minute. Find P(X = 2) and P(X ≥ 1).", a:"P(X=2) = e⁻³·3²/2! = 0.04979 × 4.5 = <b>0.2240</b>. P(X ≥ 1) = 1 − e⁻³ = <b>0.9502</b>." },
 { q:"IQ scores are N(100, 15²). Find P(85 &lt; X &lt; 130).", a:"z-values: (85−100)/15 = −1 and (130−100)/15 = 2. P = Φ(2) − Φ(−1) = 0.9772 − 0.1587 = <b>0.8186</b>." },
 { q:"A shooter hits a target with probability 0.2 each trial. Find the probability that the first hit occurs on the 5th trial, and the expected number of trials.", a:"Geometric: P(X=5) = (0.8)⁴(0.2) = <b>0.0819</b>. E(X) = 1/p = <b>5</b>." },
 { q:"Lifetime T is exponential with mean 10 hours. Find P(T &gt; 15) and P(T &gt; 25 | T &gt; 10).", a:"P(T&gt;15) = e^(−15/10) = <b>0.2231</b>. By the memoryless property, P(T&gt;25 | T&gt;10) = P(T&gt;15) = <b>0.2231</b>." },
 { q:"X ~ Gamma with shape α = 3 and rate β = 2. Find E(X) and Var(X).", a:"E(X) = α/β = <b>1.5</b>, Var(X) = α/β² = <b>0.75</b>." },
 { q:"X ~ Beta(2, 3). Find E(X) and Var(X).", a:"E(X) = α/(α+β) = <b>0.4</b>. Var = αβ/[(α+β)²(α+β+1)] = 6/(25×6) = <b>0.04</b>." },
 { q:"A box has 20 items, 8 defective. Five are drawn without replacement. Find P(exactly 2 defective).", a:"Hypergeometric: C(8,2)C(12,3)/C(20,5) = 28 × 220/15504 = <b>0.3973</b>." },
 { q:"A random variable has MGF M(t) = (0.3 + 0.7eᵗ)⁵. Identify the distribution and find its mean and variance.", a:"This is the Binomial MGF with <b>n = 5, p = 0.7</b>. Mean = np = <b>3.5</b>, variance = npq = 5×0.7×0.3 = <b>1.05</b>." }
]},
{ id:"tos", name:"Theory of Statistics", items:[
 { q:"A population has mean 60 and SD 12. For n = 36 find P(x̄ &gt; 63).", a:"SE = 12/√36 = 2. z = (63−60)/2 = 1.5. P = 1 − Φ(1.5) = <b>0.0668</b> (by the Central Limit Theorem)." },
 { q:"A normal population has σ² = 4. A sample of n = 16 gives s² = 7. Compute (n−1)s²/σ² and say how likely such a value is.", a:"χ² = 15 × 7/4 = <b>26.25</b> with 15 df. P(χ²₁₅ &gt; 26.25) ≈ <b>0.035</b>, so this s² is fairly unusual if σ² = 4." },
 { q:"A sample of n = 9 has x̄ = 52, s = 6. Test H₀: μ = 48 against H₁: μ ≠ 48 at 5%. (t₀.₀₂₅,₈ = 2.306)", a:"t = (52−48)/(6/3) = <b>2.0</b>. Since 2.0 &lt; 2.306, <b>do not reject H₀</b> (p ≈ 0.081)." },
 { q:"Test independence at 5% for the table [[30, 20], [20, 30]]. (χ²₀.₀₅,₁ = 3.841)", a:"n = 100, all row/column totals 50, expected = 25 in each cell. χ² = 4 × (5²/25) = <b>4.0</b> &gt; 3.841, so <b>reject independence</b>." },
 { q:"Two normal samples: n₁ = 11, s₁² = 25 and n₂ = 13, s₂² = 10. Test equality of variances at 5%. (F₀.₀₅(10,12) = 2.75)", a:"F = 25/10 = <b>2.5</b> &lt; 2.75, so <b>do not reject</b> equal variances (p ≈ 0.068, one-sided)." },
 { q:"In a sample of 100 voters 40% support a candidate. Find the standard error of the sample proportion.", a:"SE = √(p̂q̂/n) = √(0.4×0.6/100) = <b>0.049</b>." }
]},
{ id:"stata", name:"Statistical Computing: C++ and STATA", items:[
 { q:"What does this C++ code print? <code>int a = 7, b = 2; cout &lt;&lt; a/b &lt;&lt; \" \" &lt;&lt; a%b &lt;&lt; \" \" &lt;&lt; (float)a/b;</code>", a:"Integer division gives 3, remainder 1, and the float cast gives 3.5: <b>3 1 3.5</b>." },
 { q:"Write a C++ loop to find the sum of the first 10 integers and state the output.", a:"<code>int s = 0; for (int i = 1; i &lt;= 10; i++) s += i; cout &lt;&lt; s;</code> Output: <b>55</b>." },
 { q:"What is printed? <code>int f = 1; for (int i = 1; i &lt;= 5; i++) f *= i; cout &lt;&lt; f;</code>", a:"It computes 5! = <b>120</b>." },
 { q:"Write the STATA commands to (a) get summary statistics with percentiles for variable income, (b) correlate age and income, (c) regress income on age and education.", a:"(a) <code>summarize income, detail</code> (b) <code>correlate age income</code> (c) <code>regress income age education</code>." },
 { q:"In STATA, how do you create a new variable lincome = natural log of income and draw a histogram of it?", a:"<code>generate lincome = ln(income)</code> then <code>histogram lincome</code>." },
 { q:"In C++, write the declaration and a loop to compute the mean of an array of 5 doubles.", a:"<code>double x[5] = {2,4,6,8,10}, s = 0; for (int i = 0; i &lt; 5; i++) s += x[i]; double mean = s/5;</code> Mean = <b>6</b>. (Use s/5.0 or a double s to avoid integer division.)" }
]},
{ id:"calc", name:"Advance Calculus and Differential Equations", items:[
 { q:"Evaluate Γ(5), Γ(½) and B(2, 3).", a:"Γ(5) = 4! = <b>24</b>. Γ(½) = <b>√π</b>. B(2,3) = Γ(2)Γ(3)/Γ(5) = 1×2/24 = <b>1/12</b>." },
 { q:"Evaluate ∫₀^∞ x³ e^(−2x) dx.", a:"Using ∫ x^(n−1)e^(−ax)dx = Γ(n)/aⁿ with n = 4, a = 2: Γ(4)/2⁴ = 6/16 = <b>0.375</b>." },
 { q:"For f(x, y) = x²y + y³ find fₓ, f_y and f_xy.", a:"fₓ = <b>2xy</b>, f_y = <b>x² + 3y²</b>, f_xy = ∂/∂y(2xy) = <b>2x</b> (= f_yx)." },
 { q:"Use Lagrange multipliers to maximise xy subject to x + y = 10.", a:"ℒ = xy − λ(x+y−10): y = λ, x = λ so x = y = 5. Maximum = <b>25</b>." },
 { q:"Evaluate ∫₀¹∫₀² (x + y) dy dx.", a:"Inner: ∫₀² (x+y)dy = 2x + 2. Outer: ∫₀¹ (2x+2)dx = 1 + 2 = <b>3</b>." },
 { q:"Solve (a) dy/dx = 2xy, (b) y″ − 5y′ + 6y = 0, (c) y′ + 2y = e⁻ˣ.", a:"(a) separate variables: y = <b>Ce^(x²)</b>. (b) m² − 5m + 6 = 0 ⇒ m = 2, 3: y = <b>C₁e²ˣ + C₂e³ˣ</b>. (c) integrating factor e²ˣ: (e²ˣy)′ = eˣ ⇒ y = <b>e⁻ˣ + Ce⁻²ˣ</b>." }
]},
{ id:"micro", name:"Principles of Microeconomics", items:[
 { q:"Demand is Q = 100 − 2P. Find the price elasticity of demand at P = 20 and say whether demand is elastic.", a:"Q = 60. e = (dQ/dP)(P/Q) = −2 × 20/60 = <b>−0.67</b>. |e| &lt; 1 so demand is <b>inelastic</b>." },
 { q:"When price rises from 10 to 12, quantity demanded falls from 50 to 40. Find the arc (midpoint) elasticity.", a:"%ΔQ = −10/45 = −0.2222, %ΔP = 2/11 = 0.1818. e = <b>−1.22</b> (elastic)." },
 { q:"U = xy, income M = 100, Pₓ = 2, P_y = 5. Find the utility-maximising bundle.", a:"For Cobb–Douglas, half of income goes to each good: x = 50/2 = <b>25</b>, y = 50/5 = <b>10</b>, U = 250." },
 { q:"A competitive firm has TC = 100 + 10q + q² and faces P = 50. Find the profit-maximising output and profit.", a:"MC = 10 + 2q = 50 ⇒ <b>q = 20</b>. Revenue = 1000, TC = 100 + 200 + 400 = 700, profit = <b>300</b>." },
 { q:"A monopolist faces P = 100 − Q with MC = 20. Find the output, price and profit.", a:"MR = 100 − 2Q = 20 ⇒ <b>Q = 40, P = 60</b>. Profit = (60 − 20) × 40 = <b>1600</b> (no fixed cost)." },
 { q:"Demand is P = 100 − 2Q and the market price is 40. Find the consumer surplus.", a:"Q = 30. CS = ½ × 30 × (100 − 40) = <b>900</b>." }
]},
{ id:"reg", name:"Regression Analysis", items:[
 { q:"In a simple regression with n = 12, β̂₁ = 2.4 and SE(β̂₁) = 0.8. Test H₀: β₁ = 0 at 5% and give a 95% CI. (t₀.₀₂₅,₁₀ = 2.228)", a:"t = 2.4/0.8 = <b>3.0</b> &gt; 2.228, so <b>reject H₀</b>. CI = 2.4 ± 2.228×0.8 = <b>(0.62, 4.18)</b>." },
 { q:"Using ŷ = 5 + x, predict y when x = 6. If an observed y is 13 at x = 6, find the residual.", a:"ŷ = 5 + 6 = <b>11</b>. Residual = 13 − 11 = <b>2</b>." },
 { q:"A multiple regression with k = 2 predictors and n = 12 has R² = 0.90. Find the adjusted R².", a:"R²adj = 1 − (1 − R²)(n−1)/(n−k−1) = 1 − 0.10 × 11/9 = <b>0.878</b>." },
 { q:"The regression coefficients are b_yx = 0.8 and b_xy = 0.45. Find the correlation coefficient.", a:"r² = b_yx × b_xy = 0.36, so r = <b>0.6</b> (positive since both slopes are positive)." },
 { q:"State the Gauss–Markov theorem.", a:"Under the classical assumptions (linearity, E(e)=0, constant variance, uncorrelated errors, X fixed with full rank), the OLS estimator is the <b>Best Linear Unbiased Estimator (BLUE)</b>: among all linear unbiased estimators it has the smallest variance." }
]},
{ id:"nm", name:"Numerical Methods", items:[
 { q:"Use three bisection steps to locate the root of f(x) = x³ − x − 2 in [1, 2].", a:"f(1) = −2, f(2) = 4. Mid 1.5: f = −0.125 &lt; 0 ⇒ [1.5, 2]. Mid 1.75: f = 1.609 &gt; 0 ⇒ [1.5, 1.75]. Mid 1.625: f = 0.666 &gt; 0 ⇒ [1.5, 1.625]. Root ≈ 1.52 (true value <b>1.5214</b>)." },
 { q:"Find √2 by Newton–Raphson on f(x) = x² − 2 with x₀ = 1.5 (two iterations).", a:"xₙ₊₁ = xₙ − (xₙ²−2)/(2xₙ). x₁ = 1.41667, x₂ = <b>1.41422</b> (√2 = 1.41421)." },
 { q:"Find the polynomial through (0, 1), (1, 3), (3, 13) and estimate f(2).", a:"Divided differences: f[0,1] = 2, f[1,3] = 5, f[0,1,3] = (5−2)/3 = 1. P(x) = 1 + 2x + x(x−1) = x² + x + 1. <b>f(2) = 7</b>." },
 { q:"Estimate ∫₀¹ x² dx with n = 4 using the trapezoidal rule and Simpson's 1/3 rule.", a:"h = 0.25, values 0, 0.0625, 0.25, 0.5625, 1. Trapezoidal = 0.125[0 + 2(0.875) + 1] = <b>0.34375</b>. Simpson = (0.25/3)[0 + 4(0.625) + 2(0.25) + 1] = <b>0.3333</b> (exact)." },
 { q:"Solve by Gaussian elimination: x + y + z = 6, 2y + 5z = −4, 2x + 5y − z = 27.", a:"Eliminate x from eq. 3: 3y − 3z = 15 ⇒ y − z = 5. From eq. 2: 2y + 5z = −4. Then y = z + 5 ⇒ 7z = −14, z = −2, y = 3, x = 6 − 3 + 2 = 5. <b>(x, y, z) = (5, 3, −2)</b>." },
 { q:"Apply Euler's method to y′ = x + y, y(0) = 1 with h = 0.1 for two steps.", a:"y₁ = 1 + 0.1(0 + 1) = 1.1. y₂ = 1.1 + 0.1(0.1 + 1.1) = <b>1.22</b>." },
 { q:"Form the forward difference table of y = x³ at x = 0, 1, 2, 3.", a:"y: 0, 1, 8, 27. Δy: 1, 7, 19. Δ²y: 6, 12. <b>Δ³y = 6</b> (= 3! for a cubic with unit step)." }
]},
{ id:"real", name:"Real Analysis", items:[
 { q:"Find sup and inf of S = {1 − 1/n : n ∈ ℕ}. Are they attained?", a:"inf S = <b>0</b> (attained at n = 1). sup S = <b>1</b>, not attained." },
 { q:"For aₙ = (2n+1)/(n+3), show aₙ → 2 and find N for ε = 0.01.", a:"|aₙ − 2| = |(2n+1 − 2n − 6)/(n+3)| = 5/(n+3). Need 5/(n+3) &lt; 0.01 ⇒ n &gt; 497. <b>N = 498</b>." },
 { q:"Verify Rolle's theorem for f(x) = x² − 6x + 8 on [2, 4].", a:"f(2) = f(4) = 0 and f is continuous and differentiable. f′(x) = 2x − 6 = 0 ⇒ <b>c = 3</b> ∈ (2, 4)." },
 { q:"Does Σ(−1)ⁿ⁺¹/n converge absolutely or conditionally?", a:"By the alternating series test it converges, but Σ1/n diverges (harmonic). So it is <b>conditionally convergent</b>." },
 { q:"State the Bolzano–Weierstrass theorem.", a:"Every <b>bounded sequence</b> of real numbers has a convergent subsequence (equivalently, every bounded infinite set has a limit point)." }
]},
{ id:"macro", name:"Principles of Macroeconomics", items:[
 { q:"C = 500, I = 200, G = 300, X = 150, M = 100 (billion). Find GDP by the expenditure approach, and NDP if depreciation is 50.", a:"GDP = C + I + G + (X − M) = 500 + 200 + 300 + 50 = <b>1050</b>. NDP = 1050 − 50 = <b>1000</b>." },
 { q:"MPC = 0.8. Find the spending multiplier, the effect of ΔG = 20, and the tax multiplier.", a:"k = 1/(1 − MPC) = <b>5</b>. ΔY = 5 × 20 = <b>100</b>. Tax multiplier = −MPC/(1 − MPC) = <b>−4</b>." },
 { q:"The CPI rises from 120 to 126. Find the inflation rate. If nominal GDP is 2100 with deflator 120, find real GDP.", a:"Inflation = (126 − 120)/120 = <b>5%</b>. Real GDP = 2100/1.20 = <b>1750</b>." },
 { q:"Reserve ratio is 10%. A bank receives a fresh deposit of 50. Find the money multiplier and the maximum total deposit creation.", a:"Multiplier = 1/0.10 = <b>10</b>. Maximum deposits = 50 × 10 = <b>500</b>." },
 { q:"C = 100 + 0.75(Y − T), I = 150, G = 200, T = 100. Find equilibrium income.", a:"Y = 100 + 0.75Y − 75 + 150 + 200 ⇒ 0.25Y = 375 ⇒ <b>Y = 1500</b>." },
 { q:"Labour force is 800 and 56 are unemployed. Find the unemployment rate.", a:"56/800 = <b>7%</b>." }
]},
{ id:"db", name:"Database Management and Programming", items:[
 { q:"Write an SQL query to list students with GPA above 3.5, highest GPA first.", a:"<code>SELECT name, gpa FROM students WHERE gpa &gt; 3.5 ORDER BY gpa DESC;</code>" },
 { q:"Write SQL to show departments whose average marks exceed 60.", a:"<code>SELECT dept, AVG(marks) FROM results GROUP BY dept HAVING AVG(marks) &gt; 60;</code> (HAVING filters groups, WHERE filters rows.)" },
 { q:"Table A has ids 1, 2, 3 and table B has ids 2, 3, 3, 5. How many rows does (a) A CROSS JOIN B and (b) A INNER JOIN B ON A.id = B.id give?", a:"(a) 3 × 4 = <b>12</b> rows. (b) matches: 2↔2, 3↔3, 3↔3 = <b>3</b> rows." },
 { q:"Students enrol in many courses and each course has many students. How do you represent this in a relational database?", a:"A many-to-many relationship needs a <b>junction (associative) table</b> such as Enrollment(student_id, course_id) with a composite primary key and two foreign keys." },
 { q:"A table Orders(order_id, product_id, product_name, qty) has key (order_id, product_id) and product_name depends only on product_id. Which normal form is violated and how do you fix it?", a:"A partial dependency violates <b>2NF</b>. Move product_name into Products(product_id, product_name) and keep Orders(order_id, product_id, qty)." },
 { q:"Differentiate between a primary key and a foreign key.", a:"A <b>primary key</b> uniquely identifies each row of its table (unique, not null). A <b>foreign key</b> is a column that refers to the primary key of another table and enforces referential integrity." }
]}
);
