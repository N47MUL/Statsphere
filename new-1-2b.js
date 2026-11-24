/* ============ 1st YEAR, 2nd SEMESTER (part 2): Introduction to Computer and SPSS, Calculus, Linear Algebra ============ */
TOPICS.push(
{ id:"spss", name:"Introduction to Computer and SPSS", topics:[
 { title:"Introduction to Computers", body:`
  <p>A computer is an electronic machine that accepts <b>input</b>, <b>processes</b> it under stored instructions and gives <b>output</b>. Its parts: <b>hardware</b> (CPU, memory, storage, input/output devices) and <b>software</b> (system software such as the operating system, and application software).</p>
  <ul><li><b>CPU</b> (ALU + control unit + registers): the "brain" that executes instructions.</li>
  <li><b>RAM</b>: temporary (volatile) working memory, lost when power is off. <b>ROM</b>: permanent (non-volatile) memory with start-up instructions.</li>
  <li><b>Input:</b> keyboard, mouse, scanner. <b>Output:</b> monitor, printer. <b>Storage:</b> hard disk, SSD, pen drive.</li></ul>
  <div class="formula">1 byte \\(\\displaystyle =8\\) bits  ;  \\(\\displaystyle 1\\,KB=1024\\) bytes  ;  \\(\\displaystyle 1\\,MB=1024\\,KB\\quad ;\\quad 1\\,GB=1024\\,MB\\)</div>
  <p><b>Example:</b> A 2 GB file needs \\(2\\times 1024\\times 1024\\times 1024=2, 147, 483, 648\\) bytes. An operating system (Windows, Linux, macOS) manages files, memory and programs; Excel and SPSS are application programs.</p>
  <div class="note">Mistake: confusing memory (RAM) with storage (disk), and confusing an input device with an output device (a touch screen does both).</div>`},
 { title:"Statistical Software & the SPSS Windows", body:`
  <p>Statistical software does the calculation and graphs for us: <b>SPSS</b> (menu-driven, popular in social and health sciences), <b>R</b> and <b>Python</b> (free, code-based), <b>STATA</b>, <b>SAS</b> and Excel for small tasks. Menu-driven software is easy to learn; code-based software is better for repeating and sharing analyses.</p>
  <ul><li><b>Data Editor, Data View:</b> a spreadsheet; each <i>row \\(=a\\) case</i> (respondent), each <i>column \\(=a\\) variable</i>.</li>
  <li><b>Variable View:</b> defines each variable: Name, Type, Width, Decimals, Label, Values, Missing, Measure (Nominal / Ordinal / Scale).</li>
  <li><b>Output Viewer:</b> tables and charts of results (saved as .spv).</li>
  <li><b>Syntax Editor:</b> commands (saved as .sps). Data files are saved as .sav.</li></ul>
  <p><b>Example:</b> Gender coded 1 = Male, 2 = Female: type Numeric, Measure Nominal, Value labels 1 "Male" and 2 "Female". Age: Measure Scale.</p>
  <div class="note">Mistake: entering one respondent's data across a row of several columns incorrectly, or putting a header line inside Data View. Each variable has one column only.</div>`},
 { title:"Data Entry, Editing & Management", body:`
  <p>Good data management saves hours later. After entering data, always check it: use <b>Frequencies</b> to catch impossible values \\((age=250)\\), define <b>missing values</b> codes (for example 99), and add variable and value labels.</p>
  <ul><li><b>Data → Sort Cases:</b> arrange rows by one or more variables.</li>
  <li><b>Data → Select Cases:</b> analyse only a subset (for example, \\(age\\ge 18\\)).</li>
  <li><b>Data → Split File:</b> repeat each analysis separately for each group (for example, by gender).</li>
  <li><b>Data → Merge Files:</b> add cases or add variables from another file.</li></ul>
  <p><b>Example:</b> To compare mean income of males and females, use Split File on gender, then run Descriptives; remember to switch Split File off afterwards.</p>
  <div class="note">Mistake: forgetting to turn off Select Cases or Split File and then wondering why the sample size looks wrong.</div>`},
 { title:"Data Transformation: Compute, Recode & Binning", body:`
  <p>The <b>Transform</b> menu creates new variables from old ones.</p>
  <ul><li><b>Compute Variable:</b> new variable from an expression, for example <code>BMI = weight / (height**2)</code> or <code>lnincome = LN(income)</code>.</li>
  <li><b>Recode into Different Variables:</b> group values and keep the original unchanged (for example, \\(age\\to age\\) group: 1 = under \\(20, 2=20\\)–\\(39, 3=40\\)+).</li>
  <li><b>Recode into Same Variables:</b> overwrites the original: risky.</li>
  <li><b>Visual Binning:</b> make groups from a scale variable using a histogram view.</li></ul>
  <p><b>Example:</b> A person with weight 70 kg and height 1.75 m has \\(\\mathrm{BMI}=70/3.0625=22.9\\). Reverse-coding a 1–5 scale item: new \\(=6-\\) old.</p>
  <div class="note">Mistake: using "Recode into Same Variables" without a backup, so the original data are lost.</div>`},
 { title:"Descriptive Statistics & Graphs in SPSS", body:`
  <p><b>Analyze → Descriptive Statistics</b> offers: <b>Frequencies</b> (tables for categorical variables, also mean, median, quartiles), <b>Descriptives</b> (quick mean, SD, min, max for scale variables), <b>Explore</b> (statistics by group, box plots, stem-and-leaf, normality tests) and <b>Crosstabs</b> (two-way tables).</p>
  <ul><li><b>Bar chart / pie chart:</b> categorical data.</li><li><b>Histogram:</b> shape of a continuous variable.</li><li><b>Box plot:</b> median, quartiles and outliers.</li><li><b>Scatter plot:</b> relation between two scale variables (Graphs → Chart Builder).</li></ul>
  <div class="vis" data-vis="boxplot"></div>
  <p><b>Example:</b> To describe monthly income: use Explore with a factor (gender); read the mean, median, SD, IQR, skewness and look at the box plot for outliers.</p>
  <div class="note">Mistake: using a pie chart for many categories, or a histogram for a nominal variable. Match the graph to the measurement scale.</div>`},
 { title:"Statistical Output & Interpretation", body:`
  <p>SPSS gives the numbers; the analyst must interpret them. For a test, compare the <b>Sig. (p-value)</b> with the level \\(\\alpha\\) (usually 0.05). If \\(p&lt;\\alpha\\), reject \\(H_{0}\\).</p>
  <ul><li><b>Independent-samples t-test:</b> Analyze → Compare Means. First read <b>Levene's test</b>: if Sig. \\(>0.05\\) use the "equal variances assumed" row.</li>
  <li><b>Chi-square:</b> Analyze → Descriptive Statistics → Crosstabs → Statistics. Check that expected counts are \\(\\ge 5\\).</li>
  <li><b>Correlation:</b> Analyze → Correlate → Bivariate. <b>Regression:</b> Analyze → Regression → Linear: read \\(R^{2}\\), the ANOVA F and the coefficients.</li></ul>
  <p><b>Example:</b> Levene Sig. \\(=0.30\\) (\\(>0.05\\), equal variances); \\(t(38)=2.5, S_{ig}\\). (2-tailed) \\(=0.017&lt;0.05\\), so the group means differ significantly. A p-value of .0004 is reported as \\(p&lt;.001\\). For \\(\\chi ^{2}=16.67\\) with \\(\\mathrm{df}=1, p&lt;.001\\): the two attributes are associated.</p>
  <div class="note">Mistake: reading "Sig. \\(=.000\\)" as \\(p=0\\). Report it as \\(p&lt;.001\\). And a significant result does not prove a large or important effect.</div>`}
]},
{ id:"calc1", name:"Calculus", topics:[
 { title:"Functions, Limits & Continuity", body:`
  <p>A function f maps each x in its domain to a unique y. The limit \\(\\lim _{x\\to a}f(x)=L\\) means \\(f(x)\\) gets arbitrarily close to L as x approaches a. A function is <b>continuous at a</b> if the limit exists and equals \\(f(a)\\).</p>
  <div class="formula">\\(\\displaystyle \\lim_{x\\to 0}\\sin \\,\\frac{x}{x}=1\\quad ;\\quad \\lim_{x\\to 0}\\frac{1-\\cos \\,x}{x^{2}}=\\frac{1}{2}\\quad ;\\quad \\lim_{x\\to \\infty}(1+\\frac{1}{x})^{x}=e\\)</div>
  <p>Methods: factor and cancel, rationalise, divide by the highest power for limits at infinity, and L'Hôpital's rule for 0/0 or ∞/∞.</p>
  <p><b>Example:</b> \\(\\lim _{x\\to 2}(x^{2}-4)/(x-2)=\\lim (x+2)=4\\). \\(\\lim _{x\\to 0}\\sin \\,3x/x=3\\). \\(\\lim _{x\\to \\infty }(3x^{2}+1)/(x^{2}+5)=3\\). The function |x| is continuous at 0 but not differentiable there.</p>
  <div class="note">Mistake: substituting \\(x=a\\) into 0/0 and stopping; or thinking continuity implies differentiability (it does not, but differentiability implies continuity).</div>`},
 { title:"Derivatives & Their Physical Meaning", body:`
  <p>\\(f'(x)=\\lim _{h\\to 0}[f(x+h)-f(x)]/h\\) is the slope of the tangent and the instantaneous rate of change. In motion: \\(s(t)\\) = position, \\(v=\\,\\mathrm{d}s/\\,\\mathrm{d}t\\) = velocity, \\(a=\\,\\mathrm{d}v/\\,\\mathrm{d}t\\) = acceleration.</p>
  <div class="formula">\\(\\displaystyle (uv)'=u'v+uv'\\quad ;\\quad (\\frac{u}{v})'=\\frac{u'v-uv'}{v^{2}}\\quad ;\\quad [f(g(x))]'=f'(g)\\cdot g'(x)\\)</div>
  <div class="formula">\\(\\displaystyle (x^{n})'=nx^{n-1};\\quad (e^{x})'=e^{x};\\quad (\\ln \\,x)'=\\frac{1}{x};\\quad (\\sin \\,x)'=\\cos \\,x;\\quad (\\cos \\,x)'=-\\sin \\,x\\)</div>
  <p><b>Example:</b> \\(s=t^{3}-6t^{2}+9t\\). \\(v=3t^{2}-12t+9\\) and \\(a=6t-12\\). \\(v=0\\) at \\(t=1\\) and \\(t=3\\). At \\(t=2, v=-3\\) and \\(a=0\\). Also \\(d/\\,\\mathrm{d}x[x^{2}\\ln \\,x]=2x\\,\\ln \\,x+x\\), and \\(d/\\,\\mathrm{d}x\\,\\sin (x^{2})=2x\\,\\cos (x^{2})\\).</p>
  <div class="note">Mistake: forgetting the chain rule's inner derivative, and the sign in \\((\\cos \\,x)'=-\\sin \\,x\\).</div>`},
 { title:"Higher Derivatives & Leibnitz's Theorem", body:`
  <p>The nth derivative is obtained by differentiating n times. Standard results: \\(D^{n}e^{ax}=a^{n}e^{ax}, D^{n}\\sin \\,x=\\sin (x+n\\pi /2), D^{n}x^{m}=m!/(m-n)!\\cdot x^{m-n}\\).</p>
  <div class="formula">Leibnitz: \\(\\displaystyle D^{n}(uv)=\\sum_{k}C(n, k)\\cdot D^{n-k}u\\cdot D^{k}v\\)</div>
  <p><b>Example:</b> \\(y=x^{2}e^{x}\\). Take \\(u=e^{x}, v=x^{2}\\) (\\(v''=2, v\\)‴ \\(=0\\)): \\(y_{n}=e^{x}[x^{2}+2nx+n(n-1)]\\). At \\(n=3\\) and \\(x=0:y_{3}(0)=3\\cdot 2=6\\). Also, \\(D^{3}\\sin \\,x\\) at \\(0=\\sin (3\\pi /2)=-1\\).</p>
  <div class="note">Mistake: choosing the wrong function as v. Pick v as the polynomial so its derivatives vanish after a few steps.</div>`},
 { title:"Rolle's Theorem, MVT & Taylor / Maclaurin Series", body:`
  <p><b>Rolle:</b> if f is continuous on [a, b], differentiable on (a, b) and \\(f(a)=f(b)\\), then \\(f'(c)=0\\) for some c. <b>Mean Value Theorem:</b> there is c with \\(f'(c)=[f(b)-f(a)]/(b-a)\\).</p>
  <div class="vis" data-vis="taylor"></div>
  <div class="formula">Taylor: \\(\\displaystyle f(x)=f(a)+f'(a)(x-a)+f''(a)\\frac{(x-a)^{2}}{2}!+\\ldots\\)  ;  Maclaurin: \\(\\displaystyle a=0\\)</div>
  <div class="formula">\\(\\displaystyle e^{x}=1+x+\\frac{x^{2}}{2}!+\\frac{x^{3}}{3}!+\\ldots \\quad ;\\quad \\sin \\,x=x-\\frac{x^{3}}{3}!+\\frac{x^{5}}{5}!-\\ldots \\quad ;\\quad \\ln (1+x)=x-\\frac{x^{2}}{2}+\\frac{x^{3}}{3}-\\ldots\\)</div>
  <p><b>Example:</b> MVT for \\(f(x)=x^{2}\\) on [1, 3]: slope \\(=(9-1)/2=4=2c\\), so \\(c=2\\). Rolle for \\(x^{2}-4x+3\\) on \\([1, 3]:f(1)=f(3)=0, f'(c)=2c-4=0, c=2\\). Approximation: \\(e^{0.1}\\approx 1+0.1+0.005=1.105\\) (true 1.10517).</p>
  <div class="note">Mistake: using the theorems without checking the conditions (continuity and differentiability), and writing a Taylor series with a wrong centre.</div>`},
 { title:"Maxima, Minima & Concavity", body:`
  <p>Critical points satisfy \\(f'(x)=0\\). The <b>second derivative test:</b> \\(f''>0\\) gives a local minimum, \\(f''&lt;0a\\) local maximum. If \\(f''>0\\) the curve is concave up (convex); \\(f''&lt;0\\) concave down; an <b>inflection point</b> is where concavity changes.</p>
  <p><b>Example:</b> \\(f(x)=x^{3}-3x:f'=3x^{2}-3=0\\) gives \\(x=\\pm 1\\). \\(f''=6x:f''(1)=6>0\\), local min value \\(-2;f''(-1)=-6&lt;0\\), local max value 2. Inflection at \\(x=0\\).</p>
  <p><b>Statistics link:</b> maximum likelihood and least squares are optimisation problems solved by setting a derivative to zero and checking the sign of the second derivative.</p>
  <div class="note">Mistake: calling every critical point a maximum or minimum. For \\(f(x)=x^{3}, f'(0)=0\\) but \\(x=0\\) is an inflection point.</div>`},
 { title:"Functions of Several Variables: Partial & Total Derivatives", body:`
  <p>For \\(z=f(x, y)\\), the <b>partial derivative</b> \\(\\partial z/\\partial x\\) differentiates with respect to x while holding y constant. The <b>total differential</b> is \\(\\,\\mathrm{d}z=f_{x}\\,\\,\\mathrm{d}x+f_{y}\\,\\,\\mathrm{d}y\\), and the chain rule gives \\(\\,\\mathrm{d}z/\\,\\mathrm{d}t=f_{x}\\cdot \\,\\mathrm{d}x/\\,\\mathrm{d}t+f_{y}\\cdot \\,\\mathrm{d}y/\\,\\mathrm{d}t\\).</p>
  <div class="formula">Euler's theorem: if f is homogeneous of degree n, then \\(\\displaystyle xf_{x}+yf_{y}=nf\\)</div>
  <div class="formula">Two-variable extremum: \\(\\displaystyle f_{x}=f_{y}=0;D=f_{xx}\\,f_{yy}-(f_{xy})^{2};D>0\\) and \\(\\displaystyle f_{xx}>0\\Rightarrow\\) minimum; \\(\\displaystyle D>0\\) and \\(\\displaystyle f_{xx}&lt;0\\Rightarrow\\) maximum; \\(\\displaystyle D&lt;0\\Rightarrow\\) saddle</div>
  <p><b>Example:</b> \\(z=x^{2}y+y^{3}:z_{x}=2xy\\) and \\(z_{y}=x^{2}+3y^{2}\\). For \\(z=x^{2}+y^{2}\\) with \\(x=t, y=t^{2}:\\,\\mathrm{d}z/\\,\\mathrm{d}t=2t+4t^{3}=6\\) at \\(t=1\\). For \\(f=x^{2}+y^{2}-2x-4y:f_{x}=2x-2=0, f_{y}=2y-4=0\\) give \\((1, 2);D=4>0, f_{xx}=2>0\\), so the minimum value is \\(-5\\).</p>
  <div class="note">Mistake: treating y as a variable when taking \\(\\partial /\\partial x\\). Hold the other variables as constants.</div>`},
 { title:"Integral Calculus: Indefinite, Riemann & Fundamental Theorem", body:`
  <p>Integration is the reverse of differentiation (\\(\\int f\\,\\,\\mathrm{d}x=F(x)+C\\) where \\(F'=f\\)) and the limit of Riemann sums: \\(\\int _{a}^{b}f\\,\\,\\mathrm{d}x=\\lim \\,\\sum f(x_{i})\\Delta x\\), the area under the curve.</p>
  <div class="vis" data-vis="trap"></div>
  <div class="formula">Fundamental Theorem: \\(\\displaystyle \\int_{a}^{b}f(x)\\,\\mathrm{d}x=F(b)-F(a)\\quad ;\\quad d/\\,\\mathrm{d}x\\int_{a}^{x}f(t)\\,\\mathrm{d}t=f(x)\\)</div>
  <div class="formula">\\(\\displaystyle \\int x^{n}\\,\\mathrm{d}x=\\frac{x^{n+1}}{n+1};\\quad \\int (\\frac{1}{x})\\,\\mathrm{d}x=\\ln |x|;\\quad \\int e^{x}\\,\\mathrm{d}x=e^{x}\\) ;  By parts: \\(\\displaystyle \\int u\\,\\,\\mathrm{d}v=uv-\\int v\\,\\,\\mathrm{d}u\\)</div>
  <p><b>Example:</b> \\(\\int _{0}^{1}x^{2}\\,\\mathrm{d}x=1/3\\). \\(\\int xe^{x}\\,\\mathrm{d}x=(x-1)e^{x}+C\\) (by parts: \\(u=x, \\,\\mathrm{d}v=e^{x}\\,\\mathrm{d}x\\)). \\(\\int _{0}^{\\pi }\\,\\sin \\,x\\,\\,\\mathrm{d}x=[-\\cos \\,x]_{0}^{\\pi }=2\\). In statistics, a probability is the area under \\(a\\,pdf:P(a&lt;X&lt;b)=\\int f\\).</p>
  <div class="note">Mistake: forgetting \\(+C\\) in indefinite integrals, and wrong sign when the area is below the axis (definite integral gives signed area).</div>`},
 { title:"Double Integrals & Applications (Length, Area, Volume)", body:`
  <p>A double integral \\(\\iint f(x, y)dA\\) is evaluated as an iterated integral; the order may be changed for continuous f on a rectangle (Fubini). Triple integrals extend this to three variables.</p>
  <div class="formula">Area between curves = ∫ (upper − lower) dx  ;  Volume of revolution (x-axis) \\(\\displaystyle =\\pi \\int y^{2}\\,\\mathrm{d}x\\quad ;\\quad \\mathrm{Arc}\\) length \\(\\displaystyle =\\int \\sqrt{1+(y')^{2}}\\,\\mathrm{d}x\\)</div>
  <p><b>Example:</b> Area between \\(y=x\\) and \\(y=x^{2}\\) on \\([0, 1]=\\int (x-x^{2})\\,\\mathrm{d}x=1/2-1/3=1/6\\). Volume when \\(y=x(0\\le x\\le 1)\\) rotates about the x-axis \\(=\\pi \\int x^{2}\\,\\mathrm{d}x=\\pi /3\\). Arc length of \\(y=x\\) on \\([0, 1]=\\int \\sqrt{2}\\,\\,\\mathrm{d}x=\\sqrt{2}\\). Double integral: \\(\\int _{0}^{1}\\int _{0}^{2}xy\\,\\,\\mathrm{d}y\\,\\,\\mathrm{d}x=(\\int _{0}^{2}y\\,\\,\\mathrm{d}y)(\\int _{0}^{1}x\\,\\,\\mathrm{d}x)=2\\times\\) ½ \\(=1\\).</p>
  <div class="note">Mistake: wrong limits when the region is not a rectangle. Sketch the region first, and keep inner-integral limits consistent with the order of integration.</div>`}
]},
{ id:"la", name:"Linear Algebra", topics:[
 { title:"Vectors & Vector Spaces", body:`
  <p>A vector in ℝⁿ is an ordered n-tuple. Operations: addition, scalar multiplication, dot product \\(u\\cdot v=\\sum u_{i}v_{i}\\), norm \\(\\Vert u\\Vert =\\sqrt{u\\cdot u}\\), and angle \\(\\cos \\,\\theta =u\\cdot v/(\\Vert u\\Vert \\Vert v\\Vert )\\). Vectors are <b>orthogonal</b> if \\(u\\cdot v=0\\).</p>
  <div class="formula">A vector space V is closed under addition and scalar multiplication. A subspace \\(\\displaystyle W\\subseteq V\\) contains 0 and is closed under both operations.</div>
  <p><b>Example:</b> \\(u=(1, 2, 2)\\) and \\(v=(2, -1, 0):u\\cdot v=2-2+0=0\\) (orthogonal), \\(\\Vert u\\Vert =\\sqrt{9}=3\\). The norm of (3, 4) is 5. The angle between (1, 0) and (0, 1) is 90°.</p>
  <div class="note">Mistake: a subspace must contain the zero vector, so a line not through the origin is not a subspace of ℝ².</div>`},
 { title:"Matrices & Matrix Operations", body:`
  <p>A matrix is a rectangular array. \\(A+B\\) needs equal order; AB needs columns of A = rows of B (an \\(m\\times n\\) times \\(n\\times p\\) gives \\(m\\times p\\)). Matrix multiplication is associative but <b>not commutative</b>.</p>
  <div class="formula">\\(\\displaystyle (AB)^{T}=B^{T}A^{T}\\quad ;\\quad (A+B)^{T}=A^{T}+B^{T}\\quad ;\\quad \\operatorname{tr}(A)=\\sum a_{ii}\\)  ;  Symmetric: \\(\\displaystyle A=A^{T}\\)  ;  Idempotent: \\(\\displaystyle A^{2}=A\\)</div>
  <p><b>Example:</b> \\(A=[[1, 2], [3, 4]], B=[[0, 1], [1, 0]]\\). \\(AB=[[2, 1], [4, 3]]\\) (columns swapped) but \\(BA=[[3, 4], [1, 2]]\\) (rows swapped), so \\(AB\\ne BA\\). \\(\\operatorname{tr}(A)=5\\).</p>
  <div class="note">Mistake: assuming \\(AB=BA\\), or \\((AB)^{T}=A^{T}B^{T}\\) (the order reverses).</div>`},
 { title:"Determinants", body:`
  <p>The determinant is a number det A defined for square matrices. For \\(2\\times 2:ad-bc\\). For \\(3\\times 3\\) expand along a row using cofactors.</p>
  <div class="formula">\\(\\displaystyle \\det (AB)=\\det \\,A\\cdot \\det \\,B\\quad ;\\quad \\det \\,A^{T}=\\det \\,A\\quad ;\\quad \\det (kA)=k^{n}\\det \\,A(n\\times n)\\)  ;  swapping two rows changes the sign</div>
  <p>\\(\\det \\,A=0\\) if two rows are equal or proportional, or a row is all zero. A is invertible iff \\(\\det \\,A\\ne 0\\).</p>
  <p><b>Example:</b> \\(\\det [[3, 2], [1, 4]]=12-2=10\\). \\(\\det [[2, 1, 0], [1, 3, 1], [0, 1, 2]]=2(6-1)-1(2-0)+0=10-2=8\\). If \\(\\det \\,A=5\\) for \\(a3\\times 3\\) matrix, \\(\\det (2A)=8\\times 5=40\\).</p>
  <div class="note">Mistake: \\(\\det (A+B)\\ne \\det \\,A+\\det \\,B\\). Also watch the alternating signs in cofactor expansion (+ − +).</div>`},
 { title:"Systems of Linear Equations & Rank", body:`
  <p>A system \\(\\mathrm{Ax}=b\\) is solved by Gaussian elimination (row operations). The <b>rank</b> of A is the number of non-zero rows after row reduction.</p>
  <div class="formula">Consistent \\(\\displaystyle \\Leftrightarrow \\operatorname{rank}(A)=\\operatorname{rank}([A|b])\\).  If rank = number of unknowns ⇒ unique solution; if \\(\\displaystyle \\operatorname{rank}&lt;\\) unknowns ⇒ infinitely many</div>
  <p>A homogeneous system \\(\\mathrm{Ax}=0\\) is always consistent \\((x=0)\\). It has non-trivial solutions iff \\(\\operatorname{rank}&lt;n\\) (i.e. \\(\\det \\,A=0\\) for square A). Cramer's rule: \\(x_{i}=\\det \\,A_{i}/\\det \\,A\\).</p>
  <p><b>Example:</b> \\(x+y=3\\) and \\(2x-y=0\\): adding gives \\(3x=3\\), so \\(x=1, y=2\\). \\(\\operatorname{rank}[[1, 2], [2, 4]]=1\\) (second row \\(=2\\times\\) first). \\(x+y=5, x-y=1\\) gives \\(x=3\\) by Cramer's rule: \\(\\det =-2, \\det \\,A_{x}=-6, x=3\\).</p>
  <div class="note">Mistake: concluding "no solution" when \\(\\operatorname{rank}&lt;n\\); compare \\(\\operatorname{rank}(A)\\) with \\(\\operatorname{rank}([A|b])\\) first.</div>`},
 { title:"Inverse of a Matrix", body:`
  <p>The inverse \\(A^{-1}\\) satisfies \\(AA^{-1}=A^{-1}A=I\\) and exists only if \\(\\det \\,A\\ne 0\\) (A is non-singular).</p>
  <div class="formula">\\(\\displaystyle A^{-1}=adj\\frac{A}{\\det} \\,A\\quad ;\\quad 2\\times 2:[[a, b], [c, d]]^{-1}=(\\frac{1}{ad-bc})[[d, -b], [-c, a]]\\quad ;\\quad (AB)^{-1}=B^{-1}A^{-1}\\)</div>
  <p><b>Example:</b> \\(A=[[2, 1], [5, 3]], \\det =6-5=1, A^{-1}=[[3, -1], [-5, 2]]\\). Check: row 1 of \\(A\\times\\) column 1 of \\(A^{-1}=6-5=1\\) ✓. For \\([[1, 2], [3, 4]], \\det =-2, A^{-1}=[[-2, 1], [1.5, -0.5]]\\). A diagonal matrix \\(\\mathrm{diag}(2, 5)\\) has inverse \\(\\mathrm{diag}(1/2, 1/5)\\).</p>
  <p>In regression, the least-squares estimate is β̂ \\(=(X^{T}X)^{-1}X^{T}y\\); it exists only when \\(X^{T}X\\) is invertible (no perfect multicollinearity).</p>
  <div class="note">Mistake: \\((AB)^{-1}=A^{-1}B^{-1}\\) is wrong; the order reverses.</div>`},
 { title:"Linear Dependence, Independence, Basis & Dimension", body:`
  <p>Vectors \\(v_{1}, \\ldots , v_{k}\\) are <b>linearly dependent</b> if some non-trivial combination equals zero (one vector is a combination of the others); otherwise independent. A <b>basis</b> is an independent set that spans the space; the number of vectors in a basis is the <b>dimension</b>.</p>
  <div class="formula">n vectors in ℝⁿ are independent \\(\\displaystyle \\Leftrightarrow \\det [v_{1}\\ldots v_{n}]\\ne 0\\)  ;  more than n vectors in ℝⁿ are always dependent</div>
  <p><b>Example:</b> (1, 2) and (2, 4) are dependent. (1,0,0), (0,1,0), (0,0,1) form a basis of \\(\\mathbb{R}^{3}(\\mathrm{dim}=3)\\). (1,2,3), (2,4,6), (1,0,1) are dependent as the second is twice the first; the rank of the three is 2. Any 4 vectors in ℝ³ are dependent.</p>
  <div class="note">Mistake: pairwise non-proportional vectors can still be dependent as a set (for example (1,0), (0,1), (1,1)).</div>`},
 { title:"Eigenvalues & Eigenvectors", body:`
  <p>A non-zero vector x with \\(\\mathrm{Ax}=\\lambda x\\) is an <b>eigenvector</b> of A, and \\(\\lambda\\) is the <b>eigenvalue</b>. A multiplies x by \\(\\lambda\\) without changing its direction.</p>
  <div class="vis" data-vis="eigen"></div>
  <div class="formula">Characteristic equation: \\(\\displaystyle \\det (A-\\lambda I)=0\\quad ;\\quad \\sum \\lambda_{i}=\\operatorname{tr}(A)\\quad ;\\quad \\Pi \\lambda_{i}=\\det \\,A\\)</div>
  <p>Symmetric matrices have real eigenvalues and orthogonal eigenvectors. This is the basis of <b>principal component analysis</b>, where eigenvectors of the covariance matrix give the principal directions.</p>
  <p><b>Example:</b> \\(A=[[2, 1], [1, 2]]:\\lambda ^{2}-4\\lambda +3=0\\) gives \\(\\lambda =1, 3\\); eigenvectors \\((1, -1)\\) and (1, 1). For \\(A=[[4, 1], [2, 3]]:\\lambda ^{2}-7\\lambda +10=0\\), so \\(\\lambda =2\\) and 5 (trace 7, det 10).</p>
  <div class="note">Mistake: the zero vector is never an eigenvector. Check your \\(\\lambda 's\\) with trace and determinant.</div>`},
 { title:"Applications of Matrix Algebra in Statistics", body:`
  <p>Matrices organise multivariate data and make formulas compact: the <b>covariance matrix</b> \\(\\Sigma\\) (symmetric, positive semi-definite), <b>Markov chain</b> transition matrices (rows sum to 1), and <b>regression</b> \\(y=X\\beta +\\varepsilon\\) with β̂ \\(=(X^{T}X)^{-1}X^{T}y\\).</p>
  <div class="formula">β̂ \\(\\displaystyle =(X^{T}X)^{-1}X^{T}y\\)  ;  fitted \\(\\displaystyle \\hat{y}=X\\)β̂ \\(\\displaystyle =\\mathrm{Hy}, \\quad H=X(X^{T}X)^{-1}X^{T}\\) (idempotent)</div>
  <p><b>Example:</b> \\(X=[[1, 1], [1, 2], [1, 3]], y=(2, 4, 5)^{T}\\). \\(X^{T}X=[[3, 6], [6, 14]](\\det \\,6), X^{T}y=(11, 25)^{T}\\). β̂ \\(=(1/6)[[14, -6], [-6, 3]](11, 25)^{T}=(4/6, 9/6)=(0.667, 1.5)\\). This matches the usual formulas: slope \\(S_{xy}/S_{xx}=3/2=1.5\\) and intercept \\(3.667-1.5\\times 2=0.667\\).</p>
  <div class="note">Mistake: if two columns of X are proportional, \\(X^{T}X\\) is singular and \\((X^{T}X)^{-1}\\) does not exist.</div>`}
]}
);

QUIZZES.push(
{ id:"spss", name:"Introduction to Computer and SPSS", questions:[
 { t:"Computer basics", q:"The 'brain' of the computer that executes instructions is the:", o:["Keyboard","Monitor","Hard disk","CPU"], a:3, e:"The CPU (central processing unit) processes instructions." },
 { t:"Computer basics", q:"One byte consists of:", o:["16 bits","8 bits","4 bits","10 bits"], a:1, e:"1 byte \\(=8\\) bits." },
 { t:"Computer basics", q:"Which memory loses its contents when the power is switched off?", o:["RAM","Pen drive","Hard disk","ROM"], a:0, e:"RAM is volatile working memory." },
 { t:"Computer basics", q:"Which of these is an operating system?", o:["SPSS","Chrome","Windows","Excel"], a:2, e:"Windows manages hardware and programs. SPSS and Excel are applications; Chrome is a browser." },
 { t:"Computer basics", q:"1 KB is equal to:", o:["8 bytes","1000 bits","1024 MB","1024 bytes"], a:3, e:"In computing \\(1\\,KB=1024\\) bytes." },
 { t:"Statistical software & SPSS windows", q:"Which of the following is NOT statistical software?", o:["Photoshop","STATA","SPSS","R"], a:0, e:"Photoshop is an image-editing program." },
 { t:"Statistical software & SPSS windows", q:"The default file extension of an SPSS data file is:", o:[".sps",".spv",".xlsx",".sav"], a:3, e:".sav is data, .sps is syntax and .spv is output." },
 { t:"Statistical software & SPSS windows", q:"In SPSS Data View, each row represents a:", o:["variable","value label","case (respondent)","chart"], a:2, e:"Rows are cases, columns are variables." },
 { t:"Statistical software & SPSS windows", q:"Variable name, type, label and measure are defined in:", o:["Output Viewer","Variable View","Data View","Syntax Editor"], a:1, e:"Variable View defines the properties of each variable." },
 { t:"Statistical software & SPSS windows", q:"The results of an analysis appear in the:", o:["Chart Builder only","Data View","Output Viewer","Variable View"], a:2, e:"Tables and charts appear in the Output Viewer." },
 { t:"Data management & transformation", q:"To create BMI from weight and height, you use:", o:["Analyze → Frequencies","Transform → Compute Variable","Data → Sort Cases","Data → Split File"], a:1, e:"Compute Variable builds a new variable from an expression." },
 { t:"Data management & transformation", q:"'Recode into Different Variables' is safer than 'Recode into Same Variables' because it:", o:["sorts the data","is faster","deletes missing data","keeps the original variable"], a:3, e:"The original values remain available." },
 { t:"Data management & transformation", q:"Which command repeats an analysis separately for males and females?", o:["Split File","Sort Cases","Weight Cases","Select Cases"], a:0, e:"Split File produces output for each group." },
 { t:"Data management & transformation", q:"Select Cases is used to:", o:["sort data","analyse only a subset of cases","create labels","merge files"], a:1, e:"It filters the data for the analysis, for example \\(age\\ge 18\\)." },
 { t:"Descriptive statistics & output", q:"A frequency table of a categorical variable is obtained from:", o:["Transform → Compute","Graphs only","Data → Merge","Analyze → Descriptive Statistics → Frequencies"], a:3, e:"Frequencies gives counts and percentages." },
 { t:"Descriptive statistics & output", q:"A histogram is used for:", o:["the distribution of a continuous variable","relation between two nominal variables","showing a time schedule","only the mean"], a:0, e:"It shows the shape of a scale variable." },
 { t:"Descriptive statistics & output", q:"A scatter plot shows:", o:["frequencies of a category","relationship between two scale variables","only outliers","only the median"], a:1, e:"It plots pairs (x, y)." },
 { t:"Descriptive statistics & output", q:"The chi-square test of independence for two categorical variables is run through:", o:["Compare Means","Crosstabs","Correlate → Bivariate","Regression"], a:1, e:"Analyze → Descriptive Statistics → Crosstabs → Statistics → Chi-square." },
 { t:"Descriptive statistics & output", q:"A test gives Sig. \\(=0.03\\). At the 5% level you:", o:["reject \\(H_{0}\\)","accept \\(H_{0}\\) as true","reject \\(H_{0}\\) only at 1%","cannot decide"], a:0, e:"\\(0.03&lt;0.05\\), so the result is significant at 5%." },
 { t:"Descriptive statistics & output", q:"In the independent-samples t-test, Levene's test has Sig. \\(=0.30\\). You should read the row:", o:["equal variances not assumed","equal variances assumed","none","paired differences"], a:1, e:"\\(0.30>0.05\\): no evidence that variances differ." }
]},
{ id:"calc1", name:"Calculus", questions:[
 { t:"Limits & continuity", q:"\\(\\lim _{x\\to 2}(x^{2}-4)/(x-2)\\) equals:", o:["4","2","0","does not exist"], a:0, e:"\\((x-2)(x+2)/(x-2)=x+2\\to 4\\)." },
 { t:"Limits & continuity", q:"\\(\\lim _{x\\to 0}(\\sin \\,x)/x\\) equals:", o:["0","1","∞","does not exist"], a:1, e:"This is the standard limit equal to 1." },
 { t:"Limits & continuity", q:"A function f is continuous at \\(x=a\\) if:", o:["the limit as \\(x\\to a\\) exists and equals \\(f(a)\\)","f(a) is defined only","\\(f'(a)\\) exists only","\\(f(a)=0\\)"], a:0, e:"Continuity needs the limit to exist and equal the function value." },
 { t:"Derivatives", q:"\\(d/\\,\\mathrm{d}x[x^{2}\\ln \\,x]\\) equals:", o:["2x/x","2x ln x + x","x ln x","2x ln x"], a:1, e:"Product rule: \\(2x\\,\\ln \\,x+x^{2}(1/x)=2x\\,\\ln \\,x+x\\)." },
 { t:"Derivatives", q:"A particle has \\(s=t^{3}-6t^{2}+9t\\). Its velocity at \\(t=2\\) is:", o:["3","\\(-3\\)","\\(-9\\)","0"], a:1, e:"\\(v=3t^{2}-12t+9\\); at \\(t=2:12-24+9=-3\\)." },
 { t:"Derivatives", q:"For the same particle, the velocity is zero at:", o:["\\(t=2\\) only","\\(t=1\\) and 3","\\(t=0\\) and 2","\\(t=3\\) only"], a:1, e:"\\(3t^{2}-12t+9=3(t-1)(t-3)=0\\)." },
 { t:"Higher derivatives & Leibnitz", q:"Leibnitz's theorem gives the nth derivative of:", o:["a quotient","a composite function","a product of two functions","a sum only"], a:2, e:"\\(D^{n}(uv)=\\sum C(n, k)D^{n-k}u\\cdot D^{k}v\\)." },
 { t:"Higher derivatives & Leibnitz", q:"For \\(y=x^{2}e^{x}\\), the value of \\(y_{3}\\) at \\(x=0\\) is:", o:["2","3","0","6"], a:3, e:"\\(y_{n}=e^{x}[x^{2}+2nx+n(n-1)];n=3, x=0\\) gives 6." },
 { t:"Rolle, MVT & Taylor series", q:"Rolle's theorem requires \\(f(a)=f(b)\\) and concludes that:", o:["f has no zero","f is increasing","\\(f'(c)=0\\) for some c in (a, b)","f is linear"], a:2, e:"There is a point with horizontal tangent." },
 { t:"Rolle, MVT & Taylor series", q:"For \\(f(x)=x^{2}\\) on [1, 3], the MVT point c is:", o:["2","1.5","3","2.5"], a:0, e:"\\(f'(c)=2c=(9-1)/2=4\\), so \\(c=2\\)." },
 { t:"Rolle, MVT & Taylor series", q:"The coefficient of \\(x^{3}\\) in the Maclaurin series of \\(e^{x}\\) is:", o:["1/6","1/2","1/3","1/24"], a:0, e:"\\(x^{3}/3!=x^{3}/6\\)." },
 { t:"Maxima & minima", q:"\\(f(x)=x^{3}-3x\\) has a local minimum at:", o:["\\(x=3\\)","\\(x=1\\)","\\(x=0\\)","\\(x=-1\\)"], a:1, e:"\\(f'(x)=3x^{2}-3=0\\) gives \\(x=\\pm 1;f''(1)=6>0\\), so \\(x=1\\) is a minimum." },
 { t:"Maxima & minima", q:"If \\(f''(x)>0\\) on an interval, the curve is:", o:["concave down","concave up","a straight line","decreasing"], a:1, e:"Positive second derivative means concave up (convex)." },
 { t:"Maxima & minima", q:"The minimum value of \\(f(x, y)=x^{2}+y^{2}-2x-4y\\) is:", o:["\\(-5\\)","\\(-1\\)","5","0"], a:0, e:"The critical point is \\((1, 2);f=1+4-2-8=-5\\)." },
 { t:"Partial derivatives", q:"For \\(z=x^{2}y+y^{3}, \\partial z/\\partial y\\) equals:", o:["\\(x^{2}+y^{2}\\)","\\(x^{2}+3y^{2}\\)","\\(2xy+3y^{2}\\)","2xy"], a:1, e:"Treat x as constant: \\(x^{2}+3y^{2}\\)." },
 { t:"Partial derivatives", q:"For a homogeneous function f of degree \\(3, xf_{x}+yf_{y}\\) equals:", o:["f/3","3f","0","f"], a:1, e:"Euler's theorem: the sum equals \\(n\\cdot f\\)." },
 { t:"Integration", q:"\\(\\int _{0}^{1}x^{2}\\,\\mathrm{d}x\\) equals:", o:["1/2","1","3","1/3"], a:3, e:"\\([x^{3}/3]\\) from 0 to \\(1=1/3\\)." },
 { t:"Integration", q:"\\(\\int xe^{x}\\,\\mathrm{d}x\\) equals:", o:["\\((x-1)e^{x}+C\\)","\\(xe^{x}+C\\)","\\(e^{x}+C\\)","\\((x+1)e^{x}+C\\)"], a:0, e:"By parts: \\(xe^{x}-\\int e^{x}\\,\\mathrm{d}x=(x-1)e^{x}+C\\)." },
 { t:"Applications & double integrals", q:"The area between \\(y=x\\) and \\(y=x^{2}\\) for \\(0\\le x\\le 1\\) is:", o:["1/3","1/6","1/2","1/12"], a:1, e:"\\(\\int (x-x^{2})\\,\\mathrm{d}x=1/2-1/3=1/6\\)." },
 { t:"Applications & double integrals", q:"\\(\\int _{0}^{1}\\int _{0}^{2}xy\\,\\,\\mathrm{d}y\\,\\,\\mathrm{d}x\\) equals:", o:["1","4","2","1/2"], a:0, e:"\\((\\int _{0}^{2}y\\,\\,\\mathrm{d}y)(\\int _{0}^{1}x\\,\\,\\mathrm{d}x)=2\\times 1/2=1\\)." }
]},
{ id:"la", name:"Linear Algebra", questions:[
 { t:"Vectors & vector spaces", q:"The dot product of (1, 2, 2) and \\((2, -1, 0)\\) is:", o:["3","4","\\(-2\\)","0"], a:3, e:"\\(2-2+0=0\\), so the vectors are orthogonal." },
 { t:"Vectors & vector spaces", q:"The norm of the vector (3, 4) is:", o:["25","5","7","12"], a:1, e:"\\(\\sqrt{9+16}=5\\)." },
 { t:"Vectors & vector spaces", q:"A non-empty subset W of a vector space is a subspace if it is closed under:", o:["scalar multiplication only","addition and scalar multiplication","addition only","multiplication of vectors"], a:1, e:"Both closure properties are required." },
 { t:"Matrices", q:"\\((AB)^{T}\\) equals:", o:["\\(A^{T}B^{T}\\)","\\(B^{T}A^{T}\\)","\\(A^{-1}B^{-1}\\)","\\(AB^{T}\\)"], a:1, e:"The transpose reverses the order." },
 { t:"Matrices", q:"For \\(A=[[1, 2], [3, 4]]\\) and \\(B=[[0, 1], [1, 0]], AB\\) is:", o:["[[2, 1], [4, 3]]","[[3, 4], [1, 2]]","[[0, 2], [3, 0]]","[[1, 2], [3, 4]]"], a:0, e:"Multiplying by B on the right swaps the columns of A." },
 { t:"Matrices", q:"The trace of [[1, 2], [3, 4]] is:", o:["4","10","5","\\(-2\\)"], a:2, e:"Sum of the diagonal: \\(1+4=5\\)." },
 { t:"Determinants", q:"det [[3, 2], [1, 4]] equals:", o:["10","12","14","5"], a:0, e:"\\(3\\times 4-2\\times 1=10\\)." },
 { t:"Determinants", q:"If A is \\(3\\times 3\\) with \\(\\det \\,A=5\\), then \\(\\det (2A)\\) is:", o:["25","10","20","40"], a:3, e:"\\(\\det (kA)=k^{n}\\det \\,A=8\\times 5=40\\)." },
 { t:"Determinants", q:"det [[2, 1, 0], [1, 3, 1], [0, 1, 2]] equals:", o:["10","8","12","6"], a:1, e:"\\(2(6-1)-1(2-0)+0=10-2=8\\)." },
 { t:"Systems & rank", q:"The solution of \\(x+y=3\\) and \\(2x-y=0\\) is:", o:["\\(x=2, y=1\\)","\\(x=3, y=0\\)","\\(x=1, y=2\\)","\\(x=0, y=3\\)"], a:2, e:"Adding: \\(3x=3\\), so \\(x=1\\) and \\(y=2\\)." },
 { t:"Systems & rank", q:"The system \\(\\mathrm{Ax}=b\\) is consistent iff:", o:["\\(\\det \\,A=0\\)","\\(\\operatorname{rank}\\,A=\\operatorname{rank}[A|b]\\)","A is symmetric","\\(b=0\\) only"], a:1, e:"This is the Rouché–Capelli condition." },
 { t:"Systems & rank", q:"The rank of [[1, 2], [2, 4]] is:", o:["0","4","1","2"], a:2, e:"The second row is twice the first, so only one independent row." },
 { t:"Inverse", q:"The inverse of [[2, 1], [5, 3]] is:", o:["\\([[3, -1], [-5, 2]]\\)","[[3, 1], [5, 2]]","\\([[-3, 1], [5, -2]]\\)","\\([[2, -1], [-5, 3]]\\)"], a:0, e:"\\(\\det =1\\); swap the diagonal and negate the off-diagonal: \\([[3, -1], [-5, 2]]\\)." },
 { t:"Inverse", q:"A square matrix A is singular if:", o:["A is diagonal","A is symmetric","\\(\\det \\,A=0\\)","\\(\\det \\,A=1\\)"], a:2, e:"Singular means not invertible, equivalent to \\(\\det \\,A=0\\)." },
 { t:"Inverse", q:"\\((AB)^{-1}\\) equals:", o:["AB","\\(A^{-1}B^{-1}\\)","\\(B^{-1}A^{-1}\\)","\\((BA)^{-1T}\\)"], a:2, e:"The order reverses." },
 { t:"Dependence & basis", q:"The vectors (1, 2) and (2, 4) are:", o:["linearly independent","orthogonal","a basis of ℝ²","linearly dependent"], a:3, e:"\\((2, 4)=2(1, 2)\\)." },
 { t:"Dependence & basis", q:"The maximum number of linearly independent vectors in ℝ³ is:", o:["4","infinite","2","3"], a:3, e:"The dimension of ℝ³ is 3." },
 { t:"Eigenvalues & eigenvectors", q:"The eigenvalues of [[2, 1], [1, 2]] are:", o:["1 and 2","1 and 3","2 and 2","0 and 4"], a:1, e:"\\(\\lambda ^{2}-4\\lambda +3=0\\) gives 1 and 3." },
 { t:"Eigenvalues & eigenvectors", q:"The sum of the eigenvalues of a square matrix equals its:", o:["trace","determinant","rank","order"], a:0, e:"\\(\\sum \\lambda\\) = trace and \\(\\Pi \\lambda\\) = determinant." },
 { t:"Eigenvalues & eigenvectors", q:"The eigenvalues of [[4, 1], [2, 3]] are:", o:["1 and 6","3 and 4","2 and 5","\\(-2\\) and 5"], a:2, e:"\\(\\lambda ^{2}-7\\lambda +10=0\\) gives \\(\\lambda =2, 5\\)." }
]}
);

MOCKS.push(
{ id:"spss", name:"Introduction to Computer and SPSS", minutes:30, questions:[
 { q:"RAM stands for:", o:["Read Access Memory","Random Access Memory","Run Access Module","Rapid Active Memory"], a:1, e:"Random Access Memory is the working memory." },
 { q:"Which of the following is an output device?", o:["Mouse","Monitor","Keyboard","Scanner"], a:1, e:"A monitor displays output." },
 { q:"Which of the following is an input device?", o:["Speaker","Monitor","Scanner","Printer"], a:2, e:"A scanner feeds data into the computer." },
 { q:"ROM is:", o:["volatile and writable","a type of printer","a software","non-volatile, permanent memory"], a:3, e:"ROM keeps start-up instructions even when power is off." },
 { q:"1 MB equals:", o:["1000 bytes","1024 GB","8 KB","1024 KB"], a:3, e:"\\(1\\,MB=1024\\,KB\\)." },
 { q:"Missing-value codes (for example 99) are defined in:", o:["Syntax only","Chart Builder","Output Viewer","Variable View"], a:3, e:"Variable View has a Missing column." },
 { q:"A variable 'gender' coded 1 = Male, 2 = Female has the measure level:", o:["Scale","Ordinal","Nominal","Interval"], a:2, e:"Categories without order are nominal." },
 { q:"Value labels are used to:", o:["delete missing data","change the data type","sort the cases","attach text meanings to numeric codes"], a:3, e:"For example 1 = Male." },
 { q:"The menu path to arrange cases by a variable is:", o:["Data → Sort Cases","Graphs → Chart Builder","Analyze → Frequencies","Transform → Recode"], a:0, e:"Sort Cases arranges the rows." },
 { q:"To compute the natural log of income into a new variable you would use:", o:["Split File","Compute Variable with LN(income)","Sort Cases","Weight Cases"], a:1, e:"Transform → Compute Variable, expression LN(income)." },
 { q:"Which command gives mean and SD of a scale variable quickly?", o:["Chart Builder only","Descriptives","Merge Files","Crosstabs"], a:1, e:"Analyze → Descriptive Statistics → Descriptives." },
 { q:"A box plot in SPSS helps to see:", o:["median, quartiles and outliers","only the mode","a time trend","only the mean"], a:0, e:"The box shows \\(Q_{1}\\), median, \\(Q_{3}\\); points beyond whiskers are outliers." },
 { q:"The Pearson correlation is found at:", o:["Analyze → Correlate → Bivariate","Analyze → Regression","Transform → Compute","Data → Merge"], a:0, e:"Correlate → Bivariate." },
 { q:"A paired-samples t-test is appropriate for:", o:["categorical variables","three or more groups","two unrelated groups","before and after measures on the same subjects"], a:3, e:"The two measurements are dependent." },
 { q:"SPSS output files have the extension:", o:[".sav",".csv",".sps",".spv"], a:3, e:".spv is the output file; .sav data; .sps syntax." },
 { q:"SPSS syntax files have the extension:", o:[".sps",".sav",".docx",".spv"], a:0, e:".sps stores commands." },
 { q:"Linear regression in SPSS is found under:", o:["Graphs → Legacy","Analyze → Regression → Linear","Data → Select Cases","Transform → Rank Cases"], a:1, e:"Analyze → Regression → Linear." },
 { q:"In the Model Summary, R Square shows:", o:["the standard error only","the sample size","the proportion of variance in y explained by the model","the p-value"], a:2, e:"\\(R^{2}\\) is the explained proportion of the variation." },
 { q:"A printed value of Sig. \\(=.000\\) should be reported as:", o:["\\(p=0\\)","\\(p&lt;.001\\)","\\(p>.05\\)","\\(p=1\\)"], a:1, e:"The p-value is tiny but never exactly zero." },
 { q:"For the chi-square test the usual rule is that expected counts should be:", o:["exactly equal","at most 1","at least 5 in most cells","negative"], a:2, e:"Small expected counts make the chi-square approximation poor." }
]},
{ id:"calc1", name:"Calculus", minutes:30, questions:[
 { q:"\\(\\lim _{x\\to 0}(1-\\cos \\,x)/x^{2}\\) equals:", o:["1","2","1/2","0"], a:2, e:"Using \\(1-\\cos \\,x\\approx x^{2}/2\\), the limit is 1/2." },
 { q:"\\(\\lim _{x\\to \\infty }(3x^{2}+1)/(x^{2}+5)\\) equals:", o:["∞","3","1","0"], a:1, e:"Divide by \\(x^{2}:(3+1/x^{2})/(1+5/x^{2})\\to 3\\)." },
 { q:"\\(d/\\,\\mathrm{d}x\\,\\sin (x^{2})\\) equals:", o:["\\(2x\\,\\sin (x^{2})\\)","\\(-2x\\,\\cos (x^{2})\\)","\\(2x\\,\\cos (x^{2})\\)","\\(\\cos (x^{2})\\)"], a:2, e:"Chain rule: \\(\\cos (x^{2})\\cdot 2x\\)." },
 { q:"\\(d/\\,\\mathrm{d}x\\,e^{3x}\\) equals:", o:["\\(e^{3x}/3\\)","\\(3e^{3x}\\)","\\(e^{3x}\\)","\\(3xe^{3x}\\)"], a:1, e:"The inner derivative is 3." },
 { q:"\\(f(x)=|x|\\) at \\(x=0\\) is:", o:["neither defined","continuous and differentiable","discontinuous","continuous but not differentiable"], a:3, e:"The corner at 0 gives different left and right slopes." },
 { q:"The derivative of position with respect to time is:", o:["acceleration","displacement","velocity","jerk"], a:2, e:"\\(v=\\,\\mathrm{d}s/\\,\\mathrm{d}t\\)." },
 { q:"For \\(y=\\sin \\,x\\), the value of \\(y_{3}\\) (third derivative) at \\(x=0\\) is:", o:["0","3","\\(-1\\)","1"], a:2, e:"\\(D^{3}\\sin \\,x=-\\cos \\,x\\), and at 0 this is \\(-1\\)." },
 { q:"The nth derivative of \\(e^{ax}\\) is:", o:["\\(n\\cdot a\\cdot e^{ax}\\)","\\(e^{ax}/a^{n}\\)","\\(ae^{n}\\)","\\(a^{n}e^{ax}\\)"], a:3, e:"Each differentiation multiplies by a." },
 { q:"The second-order Maclaurin approximation of \\(e^{0.1}\\) is:", o:["1.105","1.11","1.1","1.0"], a:0, e:"\\(1+0.1+0.01/2=1.105\\)." },
 { q:"The coefficient of \\(x^{3}\\) in the Maclaurin series of sin x is:", o:["1/3","1/6","\\(-1/3\\)","\\(-1/6\\)"], a:3, e:"\\(\\sin \\,x=x-x^{3}/6+\\ldots\\)" },
 { q:"For \\(f(x)=x^{2}-4x+3\\) on [1, 3], the number c given by Rolle's theorem is:", o:["3","1","2","1.5"], a:2, e:"\\(f(1)=f(3)=0\\) and \\(f'(c)=2c-4=0\\) gives \\(c=2\\)." },
 { q:"The maximum value of \\(f(x)=-x^{2}+4x\\) is:", o:["8","4","2","0"], a:1, e:"At \\(x=2:-4+8=4\\)." },
 { q:"The inflection point of \\(f(x)=x^{3}\\) is at:", o:["\\(x=0\\)","\\(x=1\\)","\\(x=-1\\)","none"], a:0, e:"\\(f''=6x\\) changes sign at 0." },
 { q:"For \\(f(x, y)=xy\\) at the point \\((2, 3), \\partial f/\\partial x\\) is:", o:["6","3","5","2"], a:1, e:"\\(f_{x}=y=3\\)." },
 { q:"For \\(z=x^{2}+y^{2}\\) with \\(x=t\\) and \\(y=t^{2}, \\,\\mathrm{d}z/\\,\\mathrm{d}t\\) at \\(t=1\\) is:", o:["6","2","8","4"], a:0, e:"\\(\\,\\mathrm{d}z/\\,\\mathrm{d}t=2t+4t^{3}=6\\) at \\(t=1\\)." },
 { q:"\\(\\int _{0}^{\\pi }\\,\\sin \\,x\\,\\,\\mathrm{d}x\\) equals:", o:["\\(\\pi\\)","1","2","0"], a:2, e:"\\([-\\cos \\,x]_{0}^{\\pi }=1+1=2\\)." },
 { q:"\\(\\int (1/x)\\,\\mathrm{d}x\\) equals:", o:["\\(e^{x}+C\\)","\\(1/x^{2}+C\\)","ln|x| + C","x + C"], a:2, e:"The antiderivative of 1/x is ln|x|." },
 { q:"\\(\\int _{0}^{1}2x\\,\\,\\mathrm{d}x\\) equals:", o:["1/2","2","0","1"], a:3, e:"\\([x^{2}]_{0}^{1}=1\\)." },
 { q:"The volume generated by rotating \\(y=x(0\\le x\\le 1)\\) about the x-axis is:", o:["\\(\\pi\\)","\\(2\\pi /3\\)","\\(\\pi /3\\)","\\(\\pi /2\\)"], a:2, e:"\\(\\pi \\int _{0}^{1}x^{2}\\,\\mathrm{d}x=\\pi /3\\)." },
 { q:"The length of the curve \\(y=x\\) from \\(x=0\\) to \\(x=1\\) is:", o:["\\(\\sqrt{2}\\)","1","2","\\(\\pi\\)"], a:0, e:"\\(\\int \\sqrt{1+1}\\,\\mathrm{d}x=\\sqrt{2}\\)." }
]},
{ id:"la", name:"Linear Algebra", minutes:30, questions:[
 { q:"The norm of (1, 2, 2) is:", o:["1","3","9","5"], a:1, e:"\\(\\sqrt{1+4+4}=3\\)." },
 { q:"The angle between (1, 0) and (0, 1) is:", o:["180°","90°","45°","0°"], a:1, e:"The dot product is 0, so they are perpendicular." },
 { q:"If A is \\(2\\times 3\\) and B is \\(3\\times 4, AB\\) has order:", o:["\\(4\\times 2\\)","\\(2\\times 4\\)","not defined","\\(3\\times 3\\)"], a:1, e:"\\((2\\times 3)(3\\times 4)\\) gives \\(2\\times 4\\)." },
 { q:"A matrix A is symmetric if:", o:["\\(A=A^{T}\\)","\\(A=-A^{T}\\)","\\(A=A^{-1}\\)","\\(A^{2}=A\\)"], a:0, e:"Symmetric means equal to its transpose." },
 { q:"A matrix with \\(A^{2}=A\\) is called:", o:["idempotent","symmetric","nilpotent","orthogonal"], a:0, e:"Idempotent matrices (like the hat matrix) satisfy \\(A^{2}=A\\)." },
 { q:"For any matrix A, AI equals:", o:["I","A","0","\\(A^{T}\\)"], a:1, e:"I is the multiplicative identity." },
 { q:"det [[1, 2], [3, 4]] equals:", o:["2","\\(-2\\)","\\(-10\\)","10"], a:1, e:"\\(1\\times 4-2\\times 3=-2\\)." },
 { q:"Interchanging two rows of a matrix:", o:["leaves det unchanged","doubles det","changes the sign of det","makes det zero"], a:2, e:"A row swap changes the sign." },
 { q:"If two rows of a matrix are identical, det is:", o:["1","undefined","0","\\(-1\\)"], a:2, e:"Equal rows make the determinant zero." },
 { q:"If \\(\\det \\,A=3\\) and \\(\\det \\,B=4\\), then \\(\\det (AB)\\) is:", o:["7","12","0.75","1"], a:1, e:"\\(\\det (AB)=\\det \\,A\\cdot \\det \\,B\\)." },
 { q:"By Cramer's rule, for \\(x+y=5\\) and \\(x-y=1, x\\) equals:", o:["2","1","4","3"], a:3, e:"\\(x=\\det [[5, 1], [1, -1]]/\\det [[1, 1], [1, -1]]=(-6)/(-2)=3\\)." },
 { q:"The rank of the \\(3\\times 3\\) identity matrix is:", o:["3","2","1","0"], a:0, e:"All three rows are independent." },
 { q:"A homogeneous system \\(\\mathrm{Ax}=0\\) always has:", o:["exactly two solutions","the trivial solution \\(x=0\\)","no solution","a unique non-zero solution"], a:1, e:"\\(x=0\\) always satisfies it." },
 { q:"For \\(A=[[1, 2], [3, 4]]\\), the (1, 1) element of \\(A^{-1}\\) is:", o:["\\(-1/2\\)","4","\\(-2\\)","2"], a:2, e:"\\(A^{-1}=(1/-2)[[4, -2], [-3, 1]]\\); the (1,1) entry is \\(4/(-2)=-2\\)." },
 { q:"The (2, 2) element of the inverse of diag(2, 5) is:", o:["0.2","0.5","5","2"], a:0, e:"The inverse of a diagonal matrix inverts each diagonal entry: 1/5." },
 { q:"The vectors (1,0,0), (0,1,0), (0,0,1) form:", o:["a subspace of dimension 2","a basis of ℝ³","a dependent set","a basis of ℝ²"], a:1, e:"They are independent and span ℝ³." },
 { q:"Four vectors in ℝ³ are always:", o:["orthogonal","dependent","a basis","independent"], a:1, e:"More than n vectors in ℝⁿ must be dependent." },
 { q:"The eigenvalues of A satisfy:", o:["\\(A-\\lambda =0\\) only","\\(A^{-1}=\\lambda\\)","\\(\\det (A-\\lambda I)=0\\)","\\(A^{T}A=\\lambda\\)"], a:2, e:"The characteristic equation is \\(\\det (A-\\lambda I)=0\\)." },
 { q:"The eigenvalues of a matrix are 2 and 5. Its determinant is:", o:["2.5","3","7","10"], a:3, e:"The determinant is the product of the eigenvalues." },
 { q:"The least-squares estimator in matrix form is:", o:["\\((XX^{T})^{-1}y\\)","\\(X^{T}y\\)","\\(XX^{T}y\\)","\\((X^{T}X)^{-1}X^{T}y\\)"], a:3, e:"β̂ \\(=(X^{T}X)^{-1}X^{T}y\\) solves the normal equations." }
]}
);
