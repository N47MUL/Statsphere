/* ============ TOPIC EXPLANATIONS ============
   To add a topic: copy one { title, body } block inside a subject and edit it.
   body is simple HTML:  <p>, <ul><li>, <div class="formula">, <div class="note">
   To add a new subject: copy a whole { id, name, topics:[...] } block.
*/
const TOPICS = [
{ id:"tos", name:"Theory of Statistics", topics:[
 { title:"Sampling Distributions & CLT", body:`
  <p>A <b>parameter</b> \\((\\mu , \\sigma ^{2})\\) is a fixed number describing the population. A <b>statistic</b> \\((\\bar{x}, s^{2})\\) is computed from the sample and is a random variable, so it has its own <b>sampling distribution</b>.</p>
  <div class="vis" data-vis="clt"></div>
  <div class="formula">\\(\\displaystyle E(\\bar{x})=\\mu , \\quad \\mathrm{Var}(\\bar{x})=\\frac{\\sigma^{2}}{n}\\)</div>
  <div class="formula">\\(\\displaystyle Z=\\frac{\\bar{x}-\\mu}{\\sigma/\\sqrt{n}}\\to N(0, 1)\\) as \\(\\displaystyle n\\to \\infty \\quad (\\mathrm{CLT})\\)</div>
  <p>CLT: for any population with finite variance, x̄ is approximately normal when n is large (\\(n\\ge 30\\) is the usual rule). If the population is normal, x̄ is exactly normal for every n.</p>
  <p><b>Example:</b> \\(\\mu =50, \\sigma =10, n=25\\). \\(\\mathrm{SE}=10/5=2\\). \\(P(\\bar{x}>52)=P(Z>(52-50)/2)=P(Z>1)=0.1587\\).</p>
  <div class="note">Mistake: using \\(\\sigma\\) instead of \\(\\sigma /\\sqrt{n}\\) as the standard deviation of x̄. Also, CLT is about the mean, not about the shape of the data itself.</div>`},
 { title:"Chi-square, t and F Distributions", body:`
  <p>These three are built from normal variables and are the base of all exact tests.</p>
  <div class="vis" data-vis="dist"></div>
  <div class="formula">\\(\\displaystyle \\chi^{2}_{n}=Z_{1}^{2}+Z_{2}^{2}+\\ldots +Z_{n}^{2}\\)   (mean n, variance 2n)</div>
  <div class="formula">\\(\\displaystyle t=\\frac{Z}{\\sqrt{\\chi^{2}_{v}/\\nu}}\\)   (\\(\\displaystyle \\nu \\,\\mathrm{df}\\), symmetric about 0)</div>
  <div class="formula">\\(\\displaystyle F=\\frac{\\frac{\\chi^{2}_{1}}{\\nu_{1}}}{\\chi^{2}_{2}/\\nu_{2}}\\quad ;\\quad F(\\nu_{1}, \\nu_{2})=\\frac{1}{F(\\nu_{2}, \\nu_{1})}\\)</div>
  <p>Also \\(t^{2}(\\nu )=F(1, \\nu )\\). The t distribution has heavier tails than normal and tends to \\(N(0, 1)\\) as \\(\\nu \\to \\infty\\). Sum of independent chi-squares adds the df.</p>
  <p><b>Example:</b> A sample of \\(n=36\\) from a normal population gives \\(\\bar{x}=52, s=6\\). Test \\(\\mu =50:t=(52-50)/(6/\\sqrt{36})=2/1=2.0\\) with 35 df.</p>
  <div class="note">Mistake: wrong df. For one sample mean, \\(\\mathrm{df}=n-1\\); for two samples with equal variance, \\(\\mathrm{df}=n_{1}+n_{2}-2\\). The F table gives only upper tail values, so use the reciprocal rule for lower points.</div>`},
 { title:"Joint Distribution of Sample Mean and Variance", body:`
  <p>For a random sample from \\(N(\\mu , \\sigma ^{2}), \\bar{x}\\) and \\(s^{2}\\) are <b>independent</b>. This property (true only for the normal) is why the t statistic works.</p>
  <div class="formula">\\(\\displaystyle \\bar{x}\\sim N(\\mu , \\frac{\\sigma^{2}}{n})\\)</div>
  <div class="formula">\\(\\displaystyle (n-1)\\frac{s^{2}}{\\sigma^{2}}\\sim \\chi^{2}(n-1)\\)</div>
  <div class="formula">\\(\\displaystyle E(s^{2})=\\sigma^{2}, \\quad \\mathrm{Var}(s^{2})=\\frac{2\\sigma^{4}}{n-1}\\)</div>
  <p>Proof idea: write the joint density, use Helmert orthogonal transformation; x̄ depends on one new variable and \\(\\sum (x_{i}-\\bar{x})^{2}\\) on the other \\(n-1\\) variables, so the density factorizes.</p>
  <p><b>Example:</b> \\(n=16, \\sigma ^{2}=4\\). Then \\(E(s^{2})=4\\) and \\(\\mathrm{Var}(s^{2})=2\\times 16/15=2.133\\). Also \\((n-1)s^{2}/\\sigma ^{2}=15s^{2}/4\\) has mean 15.</p>
  <div class="note">Mistake: saying independence holds for any population. It characterises the normal distribution. Remember the divisor \\(n-1\\) in \\(s^{2}\\).</div>`},
 { title:"Distribution of Correlation Coefficient", body:`
  <p>For a bivariate normal sample, the distribution of r depends on \\(\\rho\\). When \\(\\rho =0\\) we can convert r into a t variable. When \\(\\rho \\ne 0\\) the distribution is skewed, so use Fisher's z-transformation.</p>
  <div class="vis" data-vis="corr"></div>
  <div class="formula">\\(\\displaystyle H_{0}:\\rho =0:\\quad t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^{2}}}\\sim t(n-2)\\)</div>
  <div class="formula">z = ½ \\(\\displaystyle \\ln [\\frac{1+r}{1-r}]=\\tanh^{-1}(r)\\)</div>
  <div class="formula">\\(\\displaystyle z\\approx N\\)( ½ \\(\\displaystyle \\ln [\\frac{1+\\rho}{1-\\rho}], \\frac{1}{n-3}\\) )</div>
  <p><b>Example:</b> \\(n=27, r=0.6\\). \\(t=0.6\\times \\sqrt{25}/\\sqrt{1-0.36}=3.0/0.8=3.75\\) with 25 df, which exceeds 2.06, so reject \\(\\rho =0\\) at 5%. Fisher: z = ½ \\(\\ln (1.6/0.4)\\) = ½ \\(\\ln \\,4=0.693, \\mathrm{SE}=1/\\sqrt{24}=0.204\\).</p>
  <div class="note">Mistake: using the t test for \\(H_{0}:\\rho =0.5\\). For \\(\\rho _{0}\\ne 0\\,you\\) must use Fisher's z with \\(\\mathrm{SE}=1/\\sqrt{n-3}\\). The df of the t test is \\(n-2\\), not \\(n-1\\).</div>`},
 { title:"Order Statistics: Median and Range", body:`
  <p>Order the sample \\(x_{(1)}\\le x_{(2)}\\le \\ldots \\le x_{(n)}\\). The minimum, maximum, median and range \\(R=x_{(n)}-x_{(1)}\\) are functions of order statistics.</p>
  <div class="formula">\\(\\displaystyle f(x_{(k)})=n!/[(k-1)!(n-k)!]\\cdot F(x)^{k-1}[1-F(x)]^{n-k}f(x)\\)</div>
  <div class="formula">Max: \\(\\displaystyle F(y)=[F(y)]^{n}\\) ;  Min: \\(\\displaystyle 1-[1-F(y)]^{n}\\)</div>
  <p>For a Uniform(0,1) population, \\(x_{(k)}\\sim\\) Beta\\((k, n-k+1)\\), so \\(E(x_{(k)})=k/(n+1)\\).</p>
  <p><b>Example:</b> \\(n=4\\) from \\(U(0, 1)\\). \\(E(\\min )=1/5, E(\\max )=4/5\\), so E(range) \\(=4/5-1/5=3/5=(n-1)/(n+1)\\). For odd \\(n=2m+1\\) the median is \\(x_{(m+1)}\\).</p>
  <div class="note">Mistake: forgetting the factor \\(n!/[(k-1)!(n-k)!]\\). For the range, the joint density of min and max is needed, \\(f=n(n-1)[F(y)-F(x)]^{n-2}f(x)f(y)\\).</div>`},
 { title:"Tests for Mean, Variance, Proportion", body:`
  <p>Choose the test by the parameter and what is known.</p>
  <div class="vis" data-vis="power"></div>
  <div class="formula">Mean (\\(\\displaystyle \\sigma\\) unknown): \\(\\displaystyle t=\\frac{\\bar{x}-\\mu_{0}}{s/\\sqrt{n}}, \\mathrm{df}=n-1\\)</div>
  <div class="formula">Variance: \\(\\displaystyle \\chi^{2}=(n-1)\\frac{s^{2}}{\\sigma_{0}^{2}}, \\mathrm{df}=n-1\\)</div>
  <div class="formula">Proportion: \\(\\displaystyle Z=\\frac{\\hat{p}-p_{0}}{\\surd} [p_{0}\\frac{1-p_{0}}{n}]\\)</div>
  <p>Variance tests are sensitive to non-normality. For two variances use \\(F=s_{1}^{2}/s_{2}^{2}\\) with \\((n_{1}-1, n_{2}-1)\\mathrm{df}\\).</p>
  <p><b>Example 1:</b> \\(n=100, x=60\\) successes, \\(H_{0}:p=0.5\\). \\(Z=(0.6-0.5)/0.05=2.0>1.96\\), reject at 5%.</p>
  <p><b>Example 2:</b> \\(n=20, s^{2}=30, H_{0}:\\sigma ^{2}=20\\). \\(\\chi ^{2}=19\\times 30/20=28.5\\); the 5% critical value for 19 df is 30.14, so do not reject.</p>
  <div class="note">Mistake: in the proportion test, use \\(p_{0}\\) (not p̂) in the standard error. In the variance test the statistic compares \\(s^{2}\\) with \\(\\sigma ^{2}\\), not s with \\(\\sigma\\).</div>`},
 { title:"Bartlett's Test for Equal Variances", body:`
  <p>Tests \\(H_{0}:\\sigma _{1}^{2}=\\sigma _{2}^{2}=\\ldots =\\sigma _{k}^{2}\\) against at least one different. Needs normal populations. Let \\(\\nu _{i}=n_{i}-1\\) and \\(\\nu =\\sum \\nu _{i}\\).</p>
  <div class="formula">\\(\\displaystyle s_{p}^{2}=\\sum \\nu_{i}\\frac{s_{i}^{2}}{\\nu}\\)</div>
  <div class="formula">\\(\\displaystyle M=\\nu \\,\\ln \\,s_{p}^{2}-\\sum \\nu_{i}\\ln \\,s_{i}^{2}\\)</div>
  <div class="formula">\\(\\displaystyle C=1+[\\sum (\\frac{1}{\\nu_{i}})-\\frac{1}{\\nu}]/[3(k-1)];\\quad \\frac{M}{C}\\sim \\chi^{2}(k-1)\\)</div>
  <p><b>Example:</b> \\(k=3\\), each \\(n_{i}=11(\\nu _{i}=10, \\nu =30), s^{2}=2, 4, 8\\). \\(s_{p}^{2}=14/3=4.667\\). \\(M=30\\,\\ln \\,4.667-10(\\ln 2+\\ln 4+\\ln 8)=46.213-41.589=4.625\\). \\(C=1+(0.3-0.0333)/6=1.0444\\). \\(\\chi ^{2}=4.625/1.0444=4.43&lt;5.99(2\\,\\mathrm{df})\\), so do not reject equal variances.</p>
  <div class="note">Mistake: using \\(n_{i}\\) instead of \\(\\nu _{i}=n_{i}-1\\). Bartlett is very sensitive to non-normality; large M means variances differ.</div>`},
 { title:"Exact Tests for 2×2 and r×c Tables", body:`
  <p>With small expected counts (any below 5) the \\(\\chi ^{2}\\) approximation is poor. <b>Fisher's exact test</b> conditions on the margins: the cell a follows a hypergeometric law under independence.</p>
  <div class="formula">\\(\\displaystyle P(a)=C(a+b, a)\\cdot \\frac{C(c+d, c)}{C(N, a+c)}\\)</div>
  <div class="formula">\\(\\displaystyle \\chi^{2}=\\sum \\frac{(O-E)^{2}}{E}, \\quad E\\) = row total × col total / \\(\\displaystyle N, \\quad \\mathrm{df}=(r-1)(c-1)\\)</div>
  <p>The p-value adds the probabilities of all tables as extreme or more extreme than the observed one (one-sided: in one direction).</p>
  <p><b>Example:</b> table \\([31;13], N=8\\), all margins 4. \\(P(a=3)=C(4, 3)C(4, 1)/C(8, 4)=16/70\\) and \\(P(a=4)=1/70\\). One-sided \\(p=17/70=0.243\\), not significant.</p>
  <div class="note">Mistake: using Fisher's p for only the observed table; you must add the more extreme ones. For \\(r\\times c\\) tables the exact test enumerates all tables with the same margins.</div>`}
]},
{ id:"pd", name:"Probability Distributions", topics:[
 { title:"Binomial and Poisson Distributions", body:`
  <p>Binomial counts successes in n independent trials with success probability p. Poisson counts rare events in a fixed interval with average \\(\\lambda\\), and is the limit of Binomial when n is large, p small, \\(np=\\lambda\\).</p>
  <div class="vis" data-vis="binpois"></div>
  <div class="formula">Binomial: \\(\\displaystyle P(X=x)=C(n, x)p^{x}q^{n-x}\\) ; mean np, var npq</div>
  <div class="formula">Poisson: \\(\\displaystyle P(X=x)=e^{-}\\lambda \\frac{\\lambda^{x}}{x}\\)! ; mean \\(\\displaystyle =\\mathrm{var}=\\lambda\\)</div>
  <p><b>Example:</b> \\(n=5, p=0.4:P(X=2)=10\\times 0.16\\times 0.216=0.3456\\). For Poisson \\(\\lambda =2:P(X=0)=e^{-2}=0.1353\\), so \\(P(X\\ge 1)=0.8647\\).</p>
  <div class="note">Mistake: using Poisson when the variance clearly differs from the mean. Remember \\(q=1-p\\), and \\(P(X\\ge 1)=1-P(0)\\) is the easy way.</div>`},
 { title:"Geometric and Negative Binomial", body:`
  <p>Geometric: number of trials until the <b>first</b> success. Negative binomial: number of trials until the <b>\\(r-th\\)</b> success.</p>
  <div class="formula">Geometric: \\(\\displaystyle P(X=x)=q^{x-1}p, x=1, 2, \\ldots\\)  mean \\(\\displaystyle \\frac{1}{p}, \\mathrm{var}\\,\\frac{q}{p^{2}}\\)</div>
  <div class="formula">Neg. \\(\\displaystyle \\mathrm{Bin}:P(X=x)=C(x-1, r-1)p^{r}q^{x-r}, x\\ge r\\)</div>
  <div class="formula">mean r/p, variance \\(\\displaystyle \\frac{rq}{p^{2}}\\)</div>
  <p>Geometric has the <b>memoryless</b> property: \\(P(X>m+n|X>m)=P(X>n)\\).</p>
  <p><b>Example:</b> \\(p=0.25, P(X=3)=0.75^{2}\\times 0.25=0.1406\\), mean \\(=4\\). Neg. \\(\\mathrm{Bin}\\,r=2, p=0.5:P(X=4)=C(3, 1)\\times 0.5^{4}=3/16=0.1875\\).</p>
  <div class="note">Mistake: mixing the two forms of geometric (counting trials vs counting failures). Check whether the support starts at 1 or 0, as the mean changes (1/p vs q/p).</div>`},
 { title:"Hypergeometric Distribution", body:`
  <p>Sampling n items <b>without replacement</b> from N items containing K successes. Trials are not independent.</p>
  <div class="formula">\\(\\displaystyle P(X=x)=C(K, x)\\frac{C(N-K, n-x)}{C(N, n)}\\)</div>
  <div class="formula">mean \\(\\displaystyle =\\frac{nK}{N};\\quad \\mathrm{var}=n(\\frac{K}{N})(1-\\frac{K}{N})\\frac{N-n}{N-1}\\)</div>
  <p>The factor \\((N-n)/(N-1)\\) is the finite population correction. If N is very large, it approaches Binomial(n, K/N).</p>
  <p><b>Example:</b> \\(N=10, K=4\\) defective, draw \\(n=3\\). \\(P(X=2)=C(4, 2)C(6, 1)/C(10, 3)=36/120=0.3\\). Mean \\(=3\\times 0.4=1.2\\); variance \\(=3\\times 0.4\\times 0.6\\times (7/9)=0.56\\).</p>
  <div class="note">Mistake: using binomial for sampling without replacement from a small lot. The numerator choose-terms must add up: \\(x+(n-x)=n\\).</div>`},
 { title:"Normal Distribution", body:`
  <p>Bell-shaped, symmetric about \\(\\mu\\), completely determined by \\(\\mu\\) and \\(\\sigma ^{2}\\). Standardise \\(Z=(X-\\mu )/\\sigma\\) to use tables.</p>
  <div class="vis" data-vis="normal"></div>
  <div class="formula">\\(\\displaystyle f(x)=[\\frac{1}{\\sigma \\sqrt{2\\pi}}]\\exp [-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}]\\)</div>
  <div class="formula">\\(\\displaystyle M(t)=\\exp (\\mu t+\\sigma^{2}\\frac{t^{2}}{2})\\)</div>
  <p>Linear combinations of independent normals are normal: \\(aX+bY\\sim N(a\\mu _{1}+b\\mu _{2}, a^{2}\\sigma _{1}^{2}+b^{2}\\sigma _{2}^{2})\\). Within 1, 2, 3 SD lies about 68.27%, 95.45%, 99.73%.</p>
  <p><b>Example:</b> \\(X\\sim N(100, 15^{2})\\). \\(P(X>130)=P(Z>2)=0.0228\\). \\(P(85&lt;X&lt;115)=P(-1&lt;Z&lt;1)=0.6827\\).</p>
  <div class="note">Mistake: using variance instead of SD when standardising. For differences, variances \\(add:\\mathrm{Var}(X-Y)=\\sigma _{1}^{2}+\\sigma _{2}^{2}\\) for independent X, Y.</div>`},
 { title:"Exponential, Gamma and Beta", body:`
  <p>Exponential: waiting time with rate \\(\\lambda\\) (memoryless). Gamma\\((\\alpha , \\lambda )\\): sum of \\(\\alpha\\) independent exponentials. Beta\\((\\alpha , \\beta ):a\\) proportion on (0,1).</p>
  <div class="vis" data-vis="gamma"></div>
  <div class="formula">\\(\\displaystyle \\mathrm{Exp}:f=\\lambda e^{-}\\lambda x\\) ; mean \\(\\displaystyle \\frac{1}{\\lambda} , \\mathrm{var}\\,\\frac{1}{\\lambda^{2}};P(X>t)=e^{-}\\lambda t\\)</div>
  <div class="formula">Gamma: \\(\\displaystyle f=\\lambda^{\\alpha}x^{\\alpha-1}e^{-}\\lambda \\frac{x}{\\Gamma} (\\alpha)\\); mean \\(\\displaystyle \\frac{\\alpha}{\\lambda} , \\mathrm{var}\\,\\frac{\\alpha}{\\lambda^{2}}\\)</div>
  <div class="formula">Beta: mean \\(\\displaystyle \\frac{\\alpha}{\\alpha +\\beta}, \\mathrm{var}\\,\\alpha \\beta/[(\\alpha +\\beta)^{2}(\\alpha +\\beta +1)]\\)</div>
  <p><b>Example:</b> Exp with mean \\(2(\\lambda =0.5):P(X>3)=e^{-1}\\cdot ^{5}=0.2231\\). Beta(2,3): mean \\(=2/5=0.4\\), variance \\(=6/(25\\times 6)=0.04\\).</p>
  <div class="note">Mistake: confusing rate \\(\\lambda\\) with scale \\(1/\\lambda\\) in the Gamma/Exponential. Always check which form the question uses. \\(\\Gamma (n)=(n-1)\\)!.</div>`},
 { title:"Moment Generating Function", body:`
  <p>\\(M(t)=E(e^{tx})\\). Differentiating at \\(t=0\\) gives the raw moments, and MGF determines the distribution uniquely.</p>
  <div class="formula">\\(\\displaystyle E(X^{r})=M^{(r)}(0)\\)</div>
  <div class="formula">Independent \\(\\displaystyle X, Y:\\quad M(X+Y)(t)=M_{x}(t)\\cdot M_{\\gamma}(t)\\)</div>
  <div class="formula">Poisson: \\(\\displaystyle e^{\\lambda (e^{t}-1)};\\mathrm{Exp}:\\frac{\\lambda}{\\lambda -t}, t&lt;\\lambda\\)</div>
  <p><b>Example:</b> \\(M(t)=(0.3+0.7e^{t})^{4}\\) is the MGF of Binomial(4, 0.7), so mean \\(=2.8\\) and variance \\(=4\\times 0.7\\times 0.3=0.84\\). Check: \\(M'(0)=4\\times 0.7=2.8\\). Also the sum of independent Poisson\\((\\lambda _{1})\\) and Poisson\\((\\lambda _{2})\\) has \\(\\mathrm{MGF}\\,e^{(\\lambda _{1}+\\lambda _{2})(e^{t}-1)}\\), so it is Poisson\\((\\lambda _{1}+\\lambda _{2})\\).</p>
  <div class="note">Mistake: forgetting that independence is needed for the product rule. Variance \\(=M''(0)-[M'(0)]^{2}\\).</div>`},
 { title:"Transformation of Variables", body:`
  <p>For \\(Y=g(X)\\) with g monotone, use the Jacobian: \\(f_{Y}(y)=f_{X}(x)|\\,\\mathrm{d}x/\\,\\mathrm{d}y|\\). For two variables use the absolute value of the determinant \\(J=\\partial (x, y)/\\partial (u, v)\\).</p>
  <div class="formula">\\(\\displaystyle f_{Y}(y)=f_{X}(g^{-1}(y))\\cdot |dg^{-1}(y)/\\,\\mathrm{d}y|\\)</div>
  <div class="formula">\\(\\displaystyle f(u, v)=f(x, y)\\cdot |J|, \\quad J=\\partial \\frac{x, y}{\\partial} (u, v)\\)</div>
  <p>If g is not monotone (like \\(X^{2}\\)), add the contributions of each inverse branch, or use the CDF method: \\(F_{Y}(y)=P(g(X)\\le y)\\).</p>
  <p><b>Example:</b> \\(X\\sim U(0, 1), Y=X^{2}\\). \\(x=\\sqrt{y}, \\,\\mathrm{d}x/\\,\\mathrm{d}y=1/(2\\sqrt{y})\\), so \\(f_{Y}(y)=1/(2\\sqrt{y}), 0&lt;y&lt;1\\). Check: \\(E(Y)=\\int y/(2\\sqrt{y})\\,\\mathrm{d}y\\) = ½ \\(\\times (2/3)=1/3=E(X^{2})\\). ✓</p>
  <div class="note">Mistake: forgetting the absolute value of the Jacobian or not changing the range of the new variable.</div>`},
 { title:"Joint, Marginal, Conditional and Bivariate Normal", body:`
  <p>Marginal: integrate (or sum) out the other variable. Conditional: \\(f(y|x)=f(x, y)/f_{x}(x)\\). X and Y are independent iff \\(f(x, y)=f_{x}(x)f_{\\gamma}(y)\\).</p>
  <div class="vis" data-vis="corr"></div>
  <div class="formula">\\(\\displaystyle \\mathrm{Cov}(X, Y)=E(XY)-E(X)E(Y);\\quad \\rho =\\frac{\\mathrm{Cov}}{\\sigma_{x}\\sigma_{\\gamma}}\\)</div>
  <div class="formula">Bivariate normal: \\(\\displaystyle Y|X=x\\sim N(\\mu_{\\gamma}+\\rho (\\frac{\\sigma_{\\gamma}}{\\sigma_{x}})(x-\\mu_{x}), \\sigma_{\\gamma}^{2}(1-\\rho^{2}))\\)</div>
  <p><b>Example 1:</b> \\(f(x, y)=x+y\\) on the unit square. \\(f_{x}(x)=x\\) + ½, \\(E(X)=1/3+1/4=7/12, E(XY)=1/3, \\mathrm{Cov}=1/3-49/144=-1/144\\), so not independent.</p>
  <p><b>Example 2:</b> \\(\\mu _{x}=50, \\mu _{\\gamma}=60, \\sigma _{x}=10, \\sigma _{\\gamma}=8, \\rho =0.5, x=60:E(Y|x)=60+0.5\\times 0.8\\times 10=64, \\mathrm{Var}=64\\times 0.75=48\\).</p>
  <div class="note">Mistake: for bivariate normal, zero correlation does imply independence (not true for other distributions). Do not forget the \\((1-\\rho ^{2})\\) in conditional variance.</div>`}
]},
{ id:"stata", name:"STATA and C++", topics:[
 { title:"C++ Program Structure and Basic I/O", body:`
  <p>Every C++ program has a <b>main()</b> function. Header files bring in library tools; <b>cout</b> prints and <b>cin</b> reads. Statements end with a semicolon.</p>
  <div class="formula">#include &lt;iostream&gt;<br>using namespace std;<br>int main() {<br>&nbsp;int a, b;<br>&nbsp;\\(\\displaystyle cin>>a>>b\\);<br>&nbsp;cout &lt;&lt; "Sum = " \\(\\displaystyle &lt;&lt;a+b&lt;&lt;\\) endl;<br>&nbsp;return 0;<br>}</div>
  <p>Basic types: int, float, double, char, bool. Integer division truncates.</p>
  <p><b>Example:</b> Input 7 and 5 prints Sum \\(=12\\). But 7/2 gives 3 for ints, while 7/2.0 gives 3.5.</p>
  <div class="note">Mistakes: missing semicolon, using = instead of == in conditions, and forgetting that cin uses &gt;&gt; while cout uses &lt;&lt;.</div>`},
 { title:"Control Structures and Functions", body:`
  <p>Decisions use if / else / switch; loops use for, while, do-while. A <b>function</b> packages code; parameters can be passed by value (copy) or by reference (&amp;, original changes).</p>
  <div class="formula">int fact(int n) {<br>&nbsp;\\(\\displaystyle int\\,f=1\\);<br>&nbsp;for \\(\\displaystyle (int\\,i=2;i&lt;=n;i++)f*=i\\);<br>&nbsp;return f;<br>}</div>
  <div class="formula">void swap2(int &amp;a, int &amp;b) \\(\\displaystyle \\{int\\,t=a;a=b;b=t;\\}\\)</div>
  <p><b>Example:</b> fact\\((5)=2\\times 3\\times 4\\times 5=120\\). After swap2(x, y) with \\(x=1, y=2\\) we get \\(x=2, y=1\\). With pass by value the swap would not change the caller's variables.</p>
  <div class="note">Mistake: forgetting break in switch (fall-through), and off-by-one errors in loop limits (\\(i&lt;n\\) versus \\(i&lt;=n\\)).</div>`},
 { title:"Arrays, Pointers and Dynamic Memory", body:`
  <p>An array stores same-type elements with index from <b>0</b>. A pointer holds an address: &amp;x is the address of \\(x, *p\\) is the value at address p. The array name is the address of its first element.</p>
  <div class="formula">\\(\\displaystyle int\\,a[3]=\\{2, 4, 6\\}\\);<br>\\(\\displaystyle int*p=a;\\quad//p\\) points to a[0]<br>cout \\(\\displaystyle &lt;&lt;*(p+1)\\);   // prints 4</div>
  <div class="formula">\\(\\displaystyle int*d\\) = new int[n];   // heap memory<br>...<br>delete[] d;           // release it</div>
  <p><b>Example:</b> With \\(a=\\{2, 4, 6\\}, *(p+2)=6=a[2]\\). Sum of array \\(=2+4+6=12\\) by a loop over \\(i=0..2\\).</p>
  <div class="note">Mistakes: accessing a[n] (valid indices 0 to \\(n-1\\)), forgetting delete (memory leak), using delete instead of delete[] for arrays.</div>`},
 { title:"Classes, Inheritance and Polymorphism", body:`
  <p>A <b>class</b> bundles data (members) and functions (methods) with access control (private, public). A <b>constructor</b> initialises objects. A derived class inherits from a base class. A <b>virtual</b> function lets the right version run through a base pointer (polymorphism).</p>
  <div class="formula">class Shape { public:<br>&nbsp;virtual double area() { return 0; } };<br>class Rect : public Shape { double w, h; public:<br>&nbsp;Rect(double a, double b) \\(\\displaystyle \\{w=a;h=b;\\}\\)<br>&nbsp;double area() { return \\(\\displaystyle w*h\\); } };</div>
  <p><b>Example:</b> Shape *s = new Rect\\((3, 4);s->\\)area() returns 12 because area() is virtual. Without virtual it would return 0 (base version).</p>
  <div class="note">Mistake: forgetting public in inheritance, forgetting virtual (no polymorphism), and making data public instead of private (breaks encapsulation).</div>`},
 { title:"STATA Data Management", body:`
  <p>STATA works on a dataset in memory. Commands are typed in the command window or saved in a do-file.</p>
  <div class="formula">use "data.dta", clear<br>import excel "data.xlsx", firstrow clear<br>describe<br>list in 1/5</div>
  <div class="formula">generate bmi = weight/(height\\(\\displaystyle ^{2}\\))<br>replace age = . if \\(\\displaystyle age&lt;0\\)<br>recode \\(\\displaystyle sex(1=0)(2=1)\\)<br>keep if \\(\\displaystyle age>=18\\)<br>sort id<br>merge 1:1 id using "other.dta"</div>
  <p><b>Example:</b> If weight \\(=60\\,kg\\) and height \\(=1.5m, bmi=60/2.25=26.67\\). Use label define and label values to attach value labels.</p>
  <div class="note">Mistakes: using = instead of == in if conditions, forgetting that missing values (.) are larger than all numbers in comparisons, and forgetting clear when loading a new dataset.</div>`},
 { title:"Descriptive Statistics and Tests in STATA", body:`
  <p>Summaries first, then tests. The p-value in the output is compared with \\(\\alpha =0.05\\).</p>
  <div class="formula">summarize age income, detail<br>tabulate sex<br>tabulate sex smoker, chi2<br>histogram income, normal</div>
  <div class="formula">ttest score \\(\\displaystyle ==50\\)<br>ttest score, by(group)<br>prtest smoker \\(\\displaystyle ==0.3\\)<br>correlate x y<br>pwcorr x y, sig</div>
  <p><b>Example:</b> ttest score \\(==50\\) with \\(n=25\\), mean \\(54, s=10:\\mathrm{SE}=10/5=2, t=(54-50)/2=2.0, \\mathrm{df}=24\\), two-sided \\(p\\approx 0.057\\), so do not reject at 5%.</p>
  <div class="note">Mistake: reading the wrong p-value. STATA shows three: Ha: mean \\(&lt;50\\), mean !\\(=50\\) (two-sided), mean \\(>50\\). Use the middle one for a two-sided test.</div>`},
 { title:"Regression and Diagnostics in STATA", body:`
  <p>regress fits OLS. After fitting, check assumptions with post-estimation commands.</p>
  <div class="vis" data-vis="regfit"></div>
  <div class="formula">regress y x1 x2<br>predict yhat<br>predict e, residuals<br>rvfplot, yline(0)</div>
  <div class="formula">estat hettest    // heteroskedasticity<br>estat vif        // multicollinearity<br>swilk e          // normality of residuals<br>estat dwatson    // after tsset</div>
  <p><b>Example (by hand):</b> \\(x=1, 2, 3, 4, 5;y=2, 4, 5, 4, 5\\). \\(\\bar{x}=3, \\bar{y}=4, S_{xy}=6, S_{xx}=10\\). Slope \\(b=0.6\\), intercept \\(a=4-0.6\\times 3=2.2\\), so \\(\\hat{y}=2.2+0.6x\\). STATA's regress y x gives the same coefficients.</p>
  <div class="note">Mistake: a VIF above 10 signals serious multicollinearity. A small p-value in hettest means heteroskedasticity is present (reject constant variance); robust SE: regress y x, robust.</div>`}
]},
{ id:"calc", name:"Advance Calculus and Differential Equations", topics:[
 { title:"Gamma and Beta Functions", body:`
  <p>These handle integrals that have no elementary antiderivative.</p>
  <div class="formula">\\(\\displaystyle \\Gamma (n)=\\int_{0}\\^{}\\infty x^{n-1}e^{-x}\\,\\mathrm{d}x;\\quad \\Gamma (n+1)=n\\Gamma (n)\\)</div>
  <div class="formula">\\(\\displaystyle \\Gamma (n)=(n-1)\\)! (integer n) ;  \\(\\displaystyle \\Gamma\\)(½) \\(\\displaystyle =\\sqrt{\\pi}\\)</div>
  <div class="formula">\\(\\displaystyle B(m, n)=\\int_{0}^{1}x^{m-1}(1-x)^{n-1}\\,\\mathrm{d}x=\\Gamma (m)\\Gamma \\frac{n}{\\Gamma} (m+n)\\)</div>
  <p><b>Example:</b> \\(\\int _{0}\\^{}\\infty x^{4}e^{-x}\\,\\mathrm{d}x=\\Gamma (5)=4!=24\\). And \\(\\int _{0}^{1}x(1-x)^{2}\\,\\mathrm{d}x=B(2, 3)=\\Gamma (2)\\Gamma (3)/\\Gamma (5)=(1\\times 2)/24=1/12\\). Direct check: \\(\\int (x-2x^{2}+x^{3})\\) = ½ − ⅔ + ¼ \\(=1/12\\) ✓.</p>
  <div class="note">Mistake: the exponent is \\(n-1\\), so \\(x^{4}\\) gives \\(\\Gamma (5)\\), not \\(\\Gamma (4)\\). Also \\(\\Gamma (3/2)\\) = ½\\(\\sqrt{\\pi }\\).</div>`},
 { title:"Improper Integrals", body:`
  <p>An integral is improper if a limit is infinite or the integrand blows up. Replace the problem point by a limit and evaluate. It <b>converges</b> if the limit is finite.</p>
  <div class="formula">\\(\\displaystyle \\int_{1}\\^{}\\infty \\,\\mathrm{d}\\frac{x}{x^{p}}\\) converges iff \\(\\displaystyle p>1\\)</div>
  <div class="formula">\\(\\displaystyle \\int_{0}^{1}\\,\\mathrm{d}\\frac{x}{x^{p}}\\) converges iff \\(\\displaystyle p&lt;1\\)</div>
  <div class="formula">Comparison: \\(\\displaystyle 0\\le f\\le g\\) and \\(\\displaystyle \\int g\\) converges \\(\\displaystyle \\Rightarrow \\int f\\) converges</div>
  <p><b>Example:</b> \\(\\int _{0}\\^{}\\infty e^{-2x}\\,\\mathrm{d}x=\\lim\\) [−½\\(e^{-2x}\\)]₀ᵇ = ½ (converges). \\(\\int _{1}\\^{}\\infty x^{-2}\\,\\mathrm{d}x=1\\), while \\(\\int _{1}\\^{}\\infty x^{-1}\\,\\mathrm{d}x=\\lim \\,\\ln \\,b=\\infty\\) (diverges).</p>
  <div class="note">Mistake: forgetting to check interior singularities, e.g. \\(\\int _{-1}^{1}\\,\\mathrm{d}x/x^{2}\\) diverges even though the antiderivative \\(-1/x\\) seems to give \\(-2\\).</div>`},
 { title:"Taylor and Maclaurin Expansion", body:`
  <p>A smooth function is approximated near \\(x=a\\) by a polynomial built from its derivatives. Maclaurin series is the case \\(a=0\\).</p>
  <div class="vis" data-vis="taylor"></div>
  <div class="formula">\\(\\displaystyle f(x)=\\sum f^{(n)}(a)\\frac{(x-a)^{n}}{n}\\)!</div>
  <div class="formula">\\(\\displaystyle e^{x}=1+x+\\frac{x^{2}}{2}!+\\frac{x^{3}}{3}!+\\ldots\\)</div>
  <div class="formula">\\(\\displaystyle \\sin \\,x=x-\\frac{x^{3}}{3}!+\\frac{x^{5}}{5}!-\\ldots ;\\cos \\,x=1-\\frac{x^{2}}{2}!+\\frac{x^{4}}{4}!-\\ldots\\)</div>
  <div class="formula">\\(\\displaystyle \\ln (1+x)=x-\\frac{x^{2}}{2}+\\frac{x^{3}}{3}-\\ldots (|x|&lt;1)\\)</div>
  <p><b>Example:</b> \\(\\ln (1.1)\\approx 0.1-0.005+0.000333=0.09533\\) (true value 0.09531). The error is bounded by the next term, about \\(x^{4}/4=0.000025\\).</p>
  <div class="note">Mistake: forgetting the n! in the denominator and the alternating signs; also using the series outside its radius of convergence.</div>`},
 { title:"Maxima, Minima and Lagrange Multipliers", body:`
  <p>For \\(f(x, y)\\): find critical points where \\(f_{x}=f_{\\gamma}=0\\), then test with \\(D=f_{xx}f_{\\gamma\\gamma}-(f_{x\\gamma})^{2}\\).</p>
  <div class="vis" data-vis="lagrange"></div>
  <div class="formula">\\(\\displaystyle D>0, f_{xx}>0\\): minimum ; \\(\\displaystyle D>0, f_{xx}&lt;0\\): maximum</div>
  <div class="formula">\\(\\displaystyle D&lt;0\\): saddle point ; \\(\\displaystyle D=0\\): inconclusive</div>
  <div class="formula">Constraint \\(\\displaystyle g=0:\\quad \\nabla f=\\lambda \\nabla g\\quad (f_{x}=\\lambda g_{x}, f_{\\gamma}=\\lambda g_{\\gamma})\\)</div>
  <p><b>Example 1:</b> \\(f=x^{2}+y^{2}-2x-4y\\). \\(f_{x}=2x-2=0, f_{\\gamma}=2y-4=0\\) gives (1,2). \\(D=4>0, f_{xx}=2>0\\), so minimum \\(f=1+4-2-8=-5\\).</p>
  <p><b>Example 2:</b> Maximise xy subject to \\(x+y=10\\). \\(y=\\lambda , x=\\lambda\\) so \\(x=y=5\\), maximum \\(=25\\).</p>
  <div class="note">Mistake: forgetting to use the constraint equation as the last equation, or declaring a minimum with \\(D&lt;0\\).</div>`},
 { title:"Multiple Integrals and Jacobians", body:`
  <p>Double integrals are evaluated as iterated integrals; change the order or coordinates to simplify. For a change of variables \\((x, y)\\to (u, v)\\), multiply by the absolute Jacobian.</p>
  <div class="formula">\\(\\displaystyle \\iint f\\,\\,\\mathrm{d}x\\,\\,\\mathrm{d}y=\\iint f\\cdot |\\partial \\frac{x, y}{\\partial} (u, v)|\\,\\mathrm{d}u\\,\\,\\mathrm{d}v\\)</div>
  <div class="formula">Polar: \\(\\displaystyle x=r\\,\\cos \\theta , y=r\\,\\sin \\theta , \\,\\mathrm{d}x\\,\\,\\mathrm{d}y=r\\,\\,\\mathrm{d}r\\,d\\theta\\)</div>
  <p><b>Example 1:</b> \\(\\iint (x^{2}+y^{2})dA\\) over \\(x^{2}+y^{2}\\le 4:\\int _{0}^{2}\\pi \\int _{0}^{2}r^{3}\\,\\mathrm{d}r\\,d\\theta =2\\pi \\times 4=8\\pi\\).</p>
  <p><b>Example 2:</b> \\(u=x+y, v=x-y\\). \\(\\partial (u, v)/\\partial (x, y)=-2\\), so \\(\\partial (x, y)/\\partial (u, v)=-1/2\\) and dx dy = ½ du dv.</p>
  <div class="note">Mistake: forgetting the extra factor r in polar coordinates, and using the Jacobian of the wrong direction (inverse). Always take the absolute value.</div>`},
 { title:"Laplace Transforms", body:`
  <p>\\(L\\{f(t)\\}=F(s)=\\int _{0}\\^{}\\infty e^{-st}f(t)\\,\\mathrm{d}t\\) turns a differential equation into algebra.</p>
  <div class="formula">\\(\\displaystyle L\\{t^{n}\\}=n!/s^{n+1};L\\){e^{at}} \\(\\displaystyle =\\frac{1}{s-a}\\)</div>
  <div class="formula">\\(\\displaystyle L\\{\\sin \\,bt\\}=\\frac{b}{s^{2}+b^{2}};L\\{\\cos \\,bt\\}=\\frac{s}{s^{2}+b^{2}}\\)</div>
  <div class="formula">\\(\\displaystyle L\\{y'\\}=sY-y(0);L\\{y''\\}=s^{2}Y-sy(0)-y'(0)\\)</div>
  <div class="formula">Shift: L{e^{at} \\(\\displaystyle f(t)\\)} \\(\\displaystyle =F(s-a)\\)</div>
  <p><b>Example:</b> Solve \\(y'+y=1, y(0)=0\\). \\(sY+Y=1/s\\), so \\(Y=1/[s(s+1)]=1/s-1/(s+1)\\). Hence \\(y=1-e^{-t}\\). Also \\(L\\{e^{2t}\\sin \\,3t\\}=3/[(s-2)^{2}+9]\\).</p>
  <div class="note">Mistake: forgetting initial-condition terms when transforming derivatives; and skipping partial fractions before inversion.</div>`},
 { title:"Fourier Series", body:`
  <p>A periodic function on \\((-\\pi , \\pi )\\) is written as sum of sines and cosines.</p>
  <div class="vis" data-vis="fourier"></div>
  <div class="formula">\\(\\displaystyle f(x)=\\frac{a_{0}}{2}+\\sum (a_{n}\\cos \\,nx+b_{n}\\sin \\,nx)\\)</div>
  <div class="formula">\\(\\displaystyle a_{n}=(\\frac{1}{\\pi})\\int f\\,\\cos \\,nx\\,\\,\\mathrm{d}x;b_{n}=(\\frac{1}{\\pi})\\int f\\,\\sin \\,nx\\,\\,\\mathrm{d}x\\)</div>
  <p>Even f gives only cosine terms \\((b_{n}=0)\\); odd f gives only sine terms \\((a_{n}=0)\\). At a jump the series converges to the average of left and right limits.</p>
  <p><b>Example:</b> \\(f(x)=x\\) on \\((-\\pi , \\pi )\\) is odd, so \\(a_{n}=0\\) and \\(b_{n}=(2/\\pi )\\int _{0}^{\\pi }x\\,\\sin \\,nx\\,\\,\\mathrm{d}x=2(-1)^{n+1}/n\\). Thus \\(x=2\\)(\\(\\sin \\,x-\\) ½ sin 2x + ⅓ \\(\\sin \\,3x-\\ldots\\)). Put \\(x=\\pi /2:\\pi /2=2(1-1/3+1/5-\\ldots )\\), i.e. \\(\\pi /4=1-1/3+1/5-\\ldots\\) ✓</p>
  <div class="note">Mistake: using the wrong interval length (for period 2L use \\(n\\pi x/L\\)), and forgetting the \\(a_{0}/2\\) convention.</div>`},
 { title:"Ordinary Differential Equations and Systems", body:`
  <p><b>First order linear</b> \\(y'+\\mathrm{Py}=Q\\): multiply by integrating factor \\(\\mu =e^{\\int P\\,\\,\\mathrm{d}x}\\). <b>Separable</b>: put x and y on separate sides and integrate.</p>
  <div class="formula">\\(\\displaystyle (\\mu y)'=\\mu Q;y=(\\frac{1}{\\mu})\\int \\mu Q\\,\\,\\mathrm{d}x\\)</div>
  <div class="formula">\\(\\displaystyle ay''\\) + by\\(\\displaystyle '+cy=0\\): roots of \\(\\displaystyle ar^{2}+br+c=0\\)</div>
  <div class="formula">real distinct: \\(\\displaystyle C_{1}e^{r_{1}x}+C_{2}e^{r_{2}x}\\) ; repeated: \\(\\displaystyle (C_{1}+C_{2}x)e^{rx}\\)</div>
  <div class="formula">complex \\(\\displaystyle \\alpha \\pm i\\beta :e^{\\alpha x}(C_{1}\\cos \\,\\beta x+C_{2}\\sin \\,\\beta x)\\)</div>
  <p><b>Example 1:</b> \\(y'+2y=e^{-x}:\\mu =e^{2x}, (ye^{2x})'=e^{x}\\), so \\(y=e^{-x}+\\mathrm{Ce}^{-2x}\\). <b>Example 2:</b> \\(y''-3y'+2y=0\\) gives \\(r=1, 2, y=C_{1}e^{x}+C_{2}e^{2x}\\).</p>
  <p><b>Systems:</b> \\(X'=AX\\). With \\(A=[12;21]\\), eigenvalues 3 and \\(-1\\) with eigenvectors \\((1, 1), (1, -1):X=C_{1}(1, 1)e^{3t}+C_{2}(1, -1)e^{-t}\\).</p>
  <div class="note">Mistake: for nonhomogeneous equations the general solution = complementary function + particular integral; do not drop either part.</div>`}
]},
{ id:"micro", name:"Principles of Microeconomics", topics:[
 { title:"Scarcity, Opportunity Cost and PPF", body:`
  <p>Resources are limited but wants are unlimited, so choices must be made. <b>Opportunity cost</b> is the value of the next best alternative given up. The production possibility frontier (PPF) shows the maximum combinations of two goods with given resources and technology.</p>
  <div class="vis" data-vis="ppf"></div>
  <ul><li>Points on the curve: efficient. Inside: unemployment/inefficiency. Outside: unattainable now.</li><li>Bowed-out (concave) shape: increasing opportunity cost.</li><li>Growth shifts the PPF outward.</li></ul>
  <div class="formula">Opportunity cost of good \\(\\displaystyle X=\\Delta Y\\) lost / \\(\\displaystyle \\Delta X\\) gained</div>
  <p><b>Example:</b> Moving from A (100 food, 0 cloth) to B (60 food, 20 cloth): 40 food is sacrificed for 20 cloth, so 1 cloth costs 2 food.</p>
  <div class="note">Mistake: counting all alternatives; only the best forgone one counts. A straight-line PPF means constant opportunity cost.</div>`},
 { title:"Demand, Supply and Equilibrium", body:`
  <p>Demand slopes downward (law of demand); supply slopes upward. Equilibrium is where \\(\\mathrm{Qd}=\\mathrm{Qs}\\). A shift of a curve comes from non-price factors (income, tastes, input cost); a price change moves along the curve.</p>
  <div class="vis" data-vis="supdem"></div>
  <div class="formula">Equilibrium: \\(\\displaystyle \\mathrm{Qd}(P*)=\\mathrm{Qs}(P*)\\)</div>
  <p><b>Example:</b> \\(\\mathrm{Qd}=100-2P, \\mathrm{Qs}=20+3P\\). Set equal: \\(80=5P, P*=16, Q*=100-32=68\\) (check \\(\\mathrm{Qs}=20+48=68\\) ✓). A price ceiling at 10 gives \\(\\mathrm{Qd}=80, \\mathrm{Qs}=50\\), so a shortage of 30.</p>
  <div class="note">Mistake: a price ceiling is binding only if below equilibrium; a price floor only if above. Do not confuse "change in demand" with "change in quantity demanded".</div>`},
 { title:"Elasticities", body:`
  <p>Price elasticity of demand measures the responsiveness of quantity to price.</p>
  <div class="vis" data-vis="elast"></div>
  <div class="formula">\\(\\displaystyle E_{p}\\) = (%\\(\\displaystyle \\Delta Q\\))/(%\\(\\displaystyle \\Delta P\\)) \\(\\displaystyle =(\\frac{dQ}{dP})(\\frac{P}{Q})\\)</div>
  <div class="formula">Midpoint: \\(\\displaystyle E_{p}=[\\Delta Q/(Q_{1}+Q_{2})/2]/[\\Delta P/(P_{1}+P_{2})/2]\\)</div>
  <div class="formula">Income: (%\\(\\displaystyle \\Delta Q\\))/(%\\(\\displaystyle \\Delta I\\)) ; Cross: (%\\(\\displaystyle \\Delta \\mathrm{Qx}\\))/(%\\(\\displaystyle \\Delta \\mathrm{Py}\\))</div>
  <p>\\(|E|>1\\) elastic (price rise lowers revenue), \\(|E|&lt;1\\) inelastic (price rise raises revenue), \\(|E|=1\\) unit elastic. Cross elasticity positive: substitutes; negative: complements.</p>
  <p><b>Example:</b> \\(Q=100-2P\\) at \\(P=20:Q=60, E=-2\\times 20/60=-0.67\\) (inelastic). Midpoint: \\(P10\\to 12, Q100\\to 80\\): %\\(\\Delta Q=-20/90=-22.2\\)%, %\\(\\Delta P=2/11=18.2\\)%, \\(E=-1.22\\) (elastic).</p>
  <div class="note">Mistake: ignoring the sign and mixing point and midpoint formulas. Elasticity is not the slope.</div>`},
 { title:"Utility and Consumer Equilibrium", body:`
  <p>Consumers maximise utility given income. Indifference curves are downward sloping, convex and do not cross. The slope is the marginal rate of substitution \\((\\mathrm{MRS}=\\mathrm{MUx}/\\mathrm{MUy})\\). The budget line has slope \\(-\\mathrm{Px}/\\mathrm{Py}\\).</p>
  <div class="formula">Equilibrium: \\(\\displaystyle \\frac{\\mathrm{MUx}}{\\mathrm{Px}}=\\frac{\\mathrm{MUy}}{\\mathrm{Py}}\\quad (\\mathrm{MRS}=\\frac{\\mathrm{Px}}{\\mathrm{Py}})\\)</div>
  <div class="formula">Budget: \\(\\displaystyle \\mathrm{Px}\\cdot x+\\mathrm{Py}\\cdot y=I\\)</div>
  <p><b>Example:</b> \\(U=xy, I=120, \\mathrm{Px}=2, \\mathrm{Py}=4\\). \\(\\mathrm{MUx}=y, \\mathrm{MUy}=x\\). \\(\\mathrm{MRS}=y/x=2/4=0.5\\), so \\(x=2y\\). Budget: \\(2(2y)+4y=120, y=15, x=30\\). Utility \\(=450\\). (Spend half of income on each good: \\(60/2=30, 60/4=15\\) ✓.)</p>
  <div class="note">Mistake: equating MU instead of MU per taka. Law of diminishing marginal utility: MU falls as consumption rises, but total utility still rises while \\(MU>0\\).</div>`},
 { title:"Production and Cost Curves", body:`
  <p>In the short run, with a fixed input, marginal product eventually falls (diminishing returns), so marginal cost eventually rises. MC cuts AVC and ATC at their minimum points.</p>
  <div class="vis" data-vis="costs"></div>
  <div class="formula">\\(\\displaystyle TC=FC+VC;\\mathrm{ATC}=\\frac{TC}{q}=\\mathrm{AFC}+\\mathrm{AVC}\\)</div>
  <div class="formula">MC = dTC/\\(\\displaystyle dq;\\mathrm{MP}=\\Delta \\frac{Q}{\\Delta} L;AP=\\frac{Q}{L}\\)</div>
  <p><b>Example:</b> \\(TC=100+10q+q^{2}\\). At \\(q=10:TC=300, \\mathrm{ATC}=30, \\mathrm{AVC}=20, \\mathrm{AFC}=10, MC=10+2q=30\\). Since \\(\\mathrm{ATC}=100/q+10+q\\), its minimum is at \\(q=10\\) where \\(MC=\\mathrm{ATC}=30\\) ✓.</p>
  <div class="note">Mistake: fixed cost does not affect MC. Long-run: economies of scale (LRAC falling) then diseconomies; all inputs variable.</div>`},
 { title:"Perfect Competition", body:`
  <p>Many small firms, identical product, free entry and exit: firms are <b>price takers</b>, so \\(P=MR=AR\\). The firm maximises profit where \\(MR=MC\\) with MC rising.</p>
  <div class="formula">Profit\\(\\displaystyle -\\max :P=MC;\\quad \\pi =(P-\\mathrm{ATC})q\\)</div>
  <div class="formula">Shutdown if \\(\\displaystyle P&lt;\\min \\,\\mathrm{AVC}\\) ;  long run: \\(\\displaystyle P=\\min \\,\\mathrm{ATC}, \\pi =0\\)</div>
  <p><b>Example:</b> \\(TC=100+10q+q^{2}, P=50\\). \\(MC=10+2q=50\\) gives \\(q=20\\). \\(TR=1000, TC=100+200+400=700\\), profit \\(=300\\). Positive profit attracts entry, which lowers price until profit is zero.</p>
  <div class="note">Mistake: shutting down whenever profit is negative; the short-run rule is \\(P&lt;\\mathrm{AVC}\\) (loss is then smaller than FC). The firm's supply curve is the MC curve above AVC.</div>`},
 { title:"Monopoly", body:`
  <p>A single seller with barriers to entry faces the downward-sloping market demand, so \\(MR&lt;P\\). It maximises profit where \\(MR=MC\\) and charges the price on the demand curve at that quantity.</p>
  <div class="vis" data-vis="monopoly"></div>
  <div class="formula">Linear demand \\(\\displaystyle P=a-bq:\\quad MR=a-2bq\\)</div>
  <div class="formula">Lerner index: \\(\\displaystyle \\frac{P-MC}{P}=1/|E_{p}|\\)</div>
  <p><b>Example:</b> \\(P=60-q, MC=10\\). \\(MR=60-2q=10\\) gives \\(q=25, P=35\\), profit \\(=(35-10)\\times 25=625\\). Under competition \\(P=MC:q=50, P=10\\). Deadweight loss = ½ \\(\\times (35-10)\\times (50-25)=312.5\\).</p>
  <div class="note">Mistake: reading the price from the MR curve; go up to the demand curve. A monopolist always operates on the elastic part of demand \\((|E|>1)\\). Price discrimination can raise profit.</div>`},
 { title:"Oligopoly and Monopolistic Competition", body:`
  <p><b>Oligopoly:</b> few firms, interdependent decisions. Models: Cournot (choose quantities), Bertrand (prices), kinked demand (price rigidity), cartel (collusion, unstable because of cheating).</p>
  <div class="formula">Cournot: each firm\\(\\displaystyle 's\\,MR=MC\\) given rival's output</div>
  <p><b>Example:</b> \\(P=100-Q, Q=q_{1}+q_{2}, MC=10\\). \\(MR_{1}=100-2q_{1}-q_{2}=10\\), so \\(q_{1}=(90-q_{2})/2\\). Symmetric: \\(q=30\\) each, \\(Q=60, P=40\\), profit each \\(=(40-10)\\times 30=900\\).</p>
  <p><b>Monopolistic competition:</b> many firms, differentiated products, free entry. Short run: monopoly-like profit. Long run: \\(P=\\mathrm{ATC}\\) (zero profit) but at ATC above its minimum, which means <b>excess capacity</b>.</p>
  <div class="note">Mistake: saying monopolistic competition gives zero profit with \\(P=MC\\); that is perfect competition. Here \\(P>MC\\) even in the long run.</div>`}
]},
{ id:"reg", name:"Regression Analysis I", topics:[
 { title:"Simple Linear Regression", body:`
  <p>Model: \\(y_{i}=\\beta _{0}+\\beta _{1}x_{i}+\\varepsilon _{i}\\), with \\(\\varepsilon _{i}\\sim (0, \\sigma ^{2})\\) independent.</p>
  <div class="vis" data-vis="regfit"></div>
  <p>Least squares estimates minimise \\(\\sum (y_{i}-\\beta _{0}-\\beta _{1}x_{i})^{2}\\):</p>
  <div class="formula">β̂\\(\\displaystyle _{1}=\\frac{S_{xy}}{S_{xx}}=\\sum (x_{i}-\\bar{x})\\frac{y_{i}-\\bar{y}}{\\sum} (x_{i}-\\bar{x})^{2}\\),&nbsp; β̂\\(\\displaystyle _{0}=\\bar{y}-\\) β̂\\(\\displaystyle _{1}\\bar{x}\\)</div>
  <p>Unbiased estimate of variance: σ̂\\(^{2}=\\mathrm{MSE}=\\mathrm{SSE}/(n-2)\\). Var(β̂₁) \\(=\\sigma ^{2}/S_{xx}\\).</p>
  <p><b>Gauss–Markov:</b> OLS estimators are the Best Linear Unbiased Estimators (BLUE) under the assumptions of zero mean, constant variance and uncorrelated errors.</p>`},
 { title:"ANOVA and R²", body:`
  <div class="formula">\\(\\displaystyle \\mathrm{SST}=\\mathrm{SSR}+\\mathrm{SSE}\\) &nbsp;&nbsp; \\(\\displaystyle R^{2}=\\frac{\\mathrm{SSR}}{\\mathrm{SST}}=1-\\frac{\\mathrm{SSE}}{\\mathrm{SST}}\\)</div>
  <p>F-test for the regression (simple case): \\(F=\\mathrm{MSR}/\\mathrm{MSE}\\sim F(1, n-2)\\) under \\(H_{0}:\\beta _{1}=0\\), and \\(F=t^{2}\\) for the slope.</p>
  <p>\\(R^{2}\\) is the proportion of variability in y explained by the model. <b>Adjusted \\(R^{2}\\)</b> \\(=1-(\\mathrm{SSE}/(n-p-1))/(\\mathrm{SST}/(n-1))\\) penalises extra predictors; \\(R^{2}\\) never decreases when adding variables, adjusted \\(R^{2}\\) can.</p>`},
 { title:"Multiple Regression in Matrix Form", body:`
  <div class="formula">\\(\\displaystyle y=X\\beta +\\varepsilon\\) &nbsp;⇒&nbsp; β̂ \\(\\displaystyle =(X^{T}X)^{-1}X^{T}y\\), &nbsp; Var(β̂) \\(\\displaystyle =\\sigma^{2}(X^{T}X)^{-1}\\)</div>
  <p>Hat matrix \\(H=X(X^{T}X)^{-1}X^{T}\\) gives fitted values \\(\\hat{y}=\\mathrm{Hy}\\) and residuals \\(e=(I-H)y\\). H is symmetric and idempotent; trace\\((H)=p+1\\).</p>
  <p>Test for a single coefficient: t = β̂\\(_{j}/se\\)(β̂ⱼ) with \\(\\mathrm{df}=n-p-1\\).</p>`},
 { title:"Checking Assumptions & Problems", body:`
  <ul>
  <li><b>Non-constant variance (heteroscedasticity):</b> residual-vs-fitted plot funnels out; fix with transformation or weighted least squares.</li>
  <li><b>Autocorrelation:</b> Durbin–Watson statistic \\(d\\approx 2(1-r);d\\) near 2 means no first-order autocorrelation.</li>
  <li><b>Multicollinearity:</b> predictors highly correlated. Detect with \\(\\mathrm{VIF};\\mathrm{VIF}_{j}=1/(1-R_{j}^{2})\\), values above 10 are a concern.</li>
  <li><b>Non-normal errors:</b> check Q–Q plot.</li>
  <li><b>Outliers / influential points:</b> studentised residuals, leverage \\(h_{ii}\\), Cook's distance.</li></ul>`},
 { title:"Types of Correlation: Point-Biserial, Phi, Intra-class, Spurious", body:`
  <p>Pearson's r needs two continuous variables. When one or both are binary, special forms are used. <b>Point-biserial</b> r is used when one variable is truly dichotomous (pass/fail) and the other continuous. <b>Biserial</b> r is used when the dichotomy is artificial (a continuous normal variable cut into two groups). <b>Fourfold \\((phi, \\phi )\\)</b> correlation is for two binary variables in \\(a2\\times 2\\) table.</p>
  <div class="vis" data-vis="resid"></div>
  <div class="vis" data-vis="corr"></div>
  <div class="formula">\\(\\displaystyle r_{pb}=(\\frac{M_{1}-M_{0}}{s})\\times \\sqrt{pq}\\)</div>
  <div class="formula">\\(\\displaystyle \\phi =\\frac{ad-bc}{\\surd} [(a+b)(c+d)(a+c)(b+d)]\\)</div>
  <p><b>Intra-class correlation</b> measures similarity within a group (e.g. siblings, repeated measures) when the variables are of the same kind and cannot be separated as X and Y. <b>Spurious (nonsense) correlation</b> is a high r with no causal link, caused by a common third factor or by chance (e.g. ice-cream sales and drowning, both rise with temperature).</p>
  <p><b>Example:</b> Pass group mean 70, fail group mean 50, overall \\(\\mathrm{SD}\\,s=20, p=q=0.5\\). Then \\(r_{pb}=(20/20)\\times \\sqrt{0.25}=0.5\\). For \\(a2\\times 2\\) table \\(a=30, b=20, c=10, d=40:ad-bc=1200-200=1000\\); denominator \\(=\\sqrt{50\\times 50\\times 40\\times 60}=\\sqrt{6}, 000, 000=2449.5;\\phi =0.408\\).</p>
  <div class="note">Here s uses divisor n (population SD). \\(\\phi\\) lies in \\([-1, 1]\\) but its maximum can be less than 1 if the marginals are unequal. Correlation never proves causation.</div>`},
 { title:"Gauss–Markov Theorem & Properties of OLS", body:`
  <p>For the model \\(y=X\\beta +\\varepsilon\\) the classical assumptions are: \\(E(\\varepsilon )=0, \\mathrm{Var}(\\varepsilon )=\\sigma ^{2}I\\) (constant variance, no autocorrelation), X has full column rank and is non-random. Under only these (normality is NOT needed), the Gauss–Markov theorem says the OLS estimator is the <b>BLUE</b>: Best (minimum variance) Linear Unbiased Estimator among all linear unbiased estimators.</p>
  <div class="formula">β̂ \\(\\displaystyle =(X'X)^{-1}X'y\\)</div>
  <div class="formula">E(β̂) \\(\\displaystyle =\\beta , \\quad \\mathrm{Var}\\)(β̂) \\(\\displaystyle =\\sigma^{2}(X'X)^{-1}\\)</div>
  <div class="formula">σ̂\\(\\displaystyle ^{2}=\\frac{\\mathrm{SSE}}{n-p}, \\quad E\\)(σ̂²) \\(\\displaystyle =\\sigma^{2}\\)</div>
  <p>Other properties: residuals sum to zero (if intercept is present), \\(X'e=0\\) (residuals orthogonal to regressors), the line passes through (x̄, ȳ). If \\(\\varepsilon\\) is also normal, β̂ is the MLE and has a normal distribution.</p>
  <p><b>Example:</b> In simple regression, \\(\\mathrm{Var}(b_{1})=\\sigma ^{2}/S_{xx}\\). With \\(\\sigma ^{2}=4\\) and \\(S_{xx}=100:\\mathrm{Var}(b_{1})=0.04\\) and \\(\\mathrm{SE}(b_{1})=0.2\\).</p>
  <div class="note">Mistake: saying OLS is "best" among all estimators. It is best only among LINEAR UNBIASED ones. If errors are heteroscedastic, OLS is still unbiased but no longer BLUE (use GLS/WLS).</div>`},
 { title:"Partial and Multiple Correlation", body:`
  <p><b>Partial correlation</b> \\(r_{12}._{3}\\) is the correlation between \\(X_{1}\\) and \\(X_{2}\\) after removing the linear effect of \\(X_{3}\\) from both. <b>Multiple correlation</b> \\(R_{1}._{23}\\) is the correlation between \\(X_{1}\\) and its best linear prediction from \\(X_{2}\\) and \\(X_{3};R^{2}\\) is the proportion of variance of \\(X_{1}\\) explained by them.</p>
  <div class="formula">\\(\\displaystyle r_{12}._{3}=\\frac{r_{12}-r_{13}r_{23}}{\\surd} [(1-r_{13}^{2})(1-r_{23}^{2})]\\)</div>
  <div class="formula">\\(\\displaystyle R^{2}_{1}._{23}=\\frac{r_{12}^{2}+r_{13}^{2}-2r_{12}r_{13}r_{23}}{1-r_{23}^{2}}\\)</div>
  <p><b>Example:</b> \\(r_{12}=0.8, r_{13}=0.6, r_{23}=0.5\\).</p>
  <p>Numerator of \\(r_{12}._{3}=0.8-0.6\\times 0.5=0.5\\). Denominator \\(=\\sqrt{0.64\\times 0.75}=\\sqrt{0.48}=0.6928\\). So \\(r_{12}._{3}=0.722\\).</p>
  <p>\\(R^{2}_{1}._{23}=(0.64+0.36-2\\times 0.8\\times 0.6\\times 0.5)/0.75=(1-0.48)/0.75=0.6933\\), so \\(R=0.833\\).</p>
  <div class="note">R is always between 0 and 1 and \\(R\\ge |r_{12}|, |r_{13}|\\). A partial correlation can be larger or smaller than the simple correlation and can even change sign. The sign of \\(r_{12}._{3}\\) follows the numerator.</div>`},
 { title:"Polynomial Regression & Lack-of-Fit Test", body:`
  <p>When the relation is curved, add powers of \\(x:y=\\beta _{0}+\\beta _{1}x+\\beta _{2}x^{2}+\\varepsilon\\). It is still a <b>linear</b> model (linear in the \\(\\beta 's\\)), so OLS and matrix methods apply. Use low order (usually 2 or 3), centre x (use \\(x-\\bar{x}\\)) to reduce multicollinearity between x and \\(x^{2}\\), and test the highest-order term with a t or extra-sum-of-squares F test.</p>
  <div class="vis" data-vis="poly"></div>
  <p><b>Lack of fit</b> needs repeated observations at the same x. Split SSE into pure error (variation among replicates) and lack of fit.</p>
  <div class="formula">\\(\\displaystyle \\mathrm{SSE}=\\mathrm{SS}_{PE}+\\mathrm{SS}_{\\mathrm{LOF}}\\)</div>
  <div class="formula">\\(\\displaystyle F=[\\frac{\\mathrm{SS}_{\\mathrm{LOF}}}{m-p}]/[\\frac{\\mathrm{SS}_{PE}}{n-m}]\\)</div>
  <p>Here m = number of distinct x levels, p = number of parameters, n = observations.</p>
  <p><b>Example:</b> \\(n=10, m=5\\) levels, straight line \\(p=2, \\mathrm{SSE}=40, \\mathrm{SS}_{PE}=20\\). Then \\(\\mathrm{SS}_{\\mathrm{LOF}}=20, F=(20/3)/(20/5)=6.667/4=1.667\\) on (3, 5) df. This is below \\(F_{0}._{05}(3, 5)=5.41\\), so no significant lack of fit; the straight line is adequate.</p>
  <div class="note">Do not drop a lower-order term (x) while keeping \\(x^{2}\\). Beware extrapolating a polynomial: it can behave wildly outside the data range.</div>`}
]},
{ id:"nm", name:"Numerical Methods", topics:[
 { title:"Finite Differences & Shift Operators", body:`
  <p>For equally spaced x with step \\(h, y_{0}=f(x_{0}), y_{1}=f(x_{0}+h)\\), ... the differences are built from the table of y values.</p>
  <div class="formula">Forward: \\(\\displaystyle \\Delta y_{i}=y_{i+1}-y_{i}\\)</div>
  <div class="formula">Backward: \\(\\displaystyle \\nabla y_{i}=y_{i}-y_{i-1}\\)</div>
  <div class="formula">Central: \\(\\displaystyle \\delta y_{i}=y\\)(i+½) \\(\\displaystyle -y\\)(\\(\\displaystyle i-\\)½)</div>
  <p>Operators: <b>E</b> (shift) \\(Ef(x)=f(x+h)\\); <b>\\(\\Delta =E-1\\)</b>; <b>\\(\\nabla =1-E^{-1}\\)</b>; <b>\\(\\delta =E\\)^½ \\(-E^{-}\\)½</b>; mean \\(\\mu\\) = ½(E^½ \\(+E^{-}\\)½). Also \\(\\Delta =E\\nabla =\\nabla E\\). The nth difference of a polynomial of degree n is constant \\((=n!h^{n}a_{n})\\) and later differences are zero.</p>
  <p><b>Example:</b> \\(f(x)=x^{3}\\) at \\(x=0, 1, 2, 3, 4\\) gives \\(y=0, 1, 8, 27, 64\\).</p>
  <p>\\(\\Delta y:1, 7, 19, 37\\). \\(\\Delta ^{2}y:6, 12, 18\\). \\(\\Delta ^{3}y:6, 6\\). \\(\\Delta ^{4}y:0\\). Third difference is constant \\(=3!=6\\), as expected for a cubic.</p>
  <div class="note">Mistake: \\(\\Delta (uv)\\) is not \\(\\Delta u\\cdot \\Delta v\\). Remember \\(E\\ne \\Delta ;E=1+\\Delta\\). Differences are only for equal spacing.</div>`},
 { title:"Newton's Forward & Backward Interpolation", body:`
  <p>Use <b>forward</b> formula when the point is near the start of the table, <b>backward</b> when near the end.</p>
  <div class="formula">\\(\\displaystyle u=\\frac{x-x_{0}}{h}\\)</div>
  <div class="formula">\\(\\displaystyle y=y_{0}+u\\Delta y_{0}+u\\frac{u-1}{2}!\\Delta^{2}y_{0}+u(u-1)\\frac{u-2}{3}!\\Delta^{3}y_{0}\\) + ...</div>
  <div class="formula">\\(\\displaystyle v=\\frac{x-x_{n}}{h}\\)</div>
  <div class="formula">\\(\\displaystyle y=y_{n}+v\\nabla y_{n}+v\\frac{v+1}{2}!\\nabla^{2}y_{n}+v(v+1)\\frac{v+2}{3}!\\nabla^{3}y_{n}\\) + ...</div>
  <p><b>Example:</b> \\(x=0, 1, 2, 3\\) and \\(y=1, 2, 5, 10\\). Differences: \\(\\Delta y=1, 3, 5;\\Delta ^{2}y=2, 2;\\Delta ^{3}y=0\\).</p>
  <p>Find \\(y(0.5):u=0.5\\). \\(y=1+0.5(1)+[0.5(-0.5)/2](2)=1+0.5-0.25=1.25\\).</p>
  <p>Find \\(y(2.5)\\) by backward: \\(v=-0.5, \\nabla y_{3}=5, \\nabla ^{2}y_{3}=2\\). \\(y=10+(-0.5)(5)+[(-0.5)(0.5)/2](2)=10-2.5-0.25=7.25\\). (Data came from \\(x^{2}+1\\), so both are exact.)</p>
  <div class="note">In backward formula the terms use the LAST row of each difference column. Signs of v are negative for points inside the table. Extrapolation outside the table has larger error.</div>`},
 { title:"Lagrange & Newton's Divided Difference", body:`
  <p>These work for <b>unequal</b> spacing. Lagrange gives the polynomial through \\((x_{i}, y_{i})\\) directly; divided-difference form is easier to extend when a new point is added.</p>
  <div class="formula">\\(\\displaystyle P(x)=\\sum y_{i}L_{i}(x), \\quad L_{i}=\\Pi_{j\\ne i}\\frac{x-x_{j}}{x_{i}-x_{j}}\\)</div>
  <div class="formula">\\(\\displaystyle f[x_{0}, x_{1}]=\\frac{f_{1}-f_{0}}{x_{1}-x_{0}}\\)</div>
  <div class="formula">\\(\\displaystyle P(x)=f_{0}+(x-x_{0})f[x_{0}, x_{1}]+(x-x_{0})(x-x_{1})f[x_{0}, x_{1}, x_{2}]\\) + ...</div>
  <p><b>Example:</b> Points (0,1), (1,3), (3,13). Find \\(f(2)\\).</p>
  <p>Lagrange: \\(L_{0}(2)=(1)(-1)/(3)=-1/3;L_{1}(2)=(2)(-1)/(-2)=1;L_{2}(2)=(2)(1)/(6)=1/3\\). \\(f(2)=1(-1/3)+3(1)+13(1/3)=7\\).</p>
  <p>Divided difference: \\(f[0, 1]=2, f[1, 3]=(13-3)/2=5, f[0, 1, 3]=(5-2)/3=1\\). \\(P(x)=1+2x+x(x-1);P(2)=1+4+2=7\\). Same answer.</p>
  <div class="note">Divided differences are symmetric in their arguments. For \\(n+1\\) points the polynomial has degree at most n. Error term \\(=f^{(n+1)}(\\xi )/(n+1)!\\times \\Pi (x-x_{i})\\).</div>`},
 { title:"Central Differences (Stirling, Bessel) & Inverse Interpolation", body:`
  <p>For a point near the <b>middle</b> of the table use central difference formulas. <b>Stirling</b> is best when u is small (about −¼ to ¼, around a tabulated \\(x_{0}\\)). <b>Bessel</b> is best when u is near ½ (between two tabulated points).</p>
  <div class="formula">Stirling: \\(\\displaystyle y=y_{0}+u\\frac{\\Delta y_{0}+\\Delta y_{-1}}{2}+(\\frac{u^{2}}{2}!)\\Delta^{2}y_{-1}\\) + ...</div>
  <div class="formula">Bessel: \\(\\displaystyle y=\\frac{y_{0}+y_{1}}{2}\\) + (\\(\\displaystyle u-\\)½)\\(\\displaystyle \\Delta y_{0}+[u\\frac{u-1}{2}!]\\frac{\\Delta^{2}y_{-1}+\\Delta^{2}y_{0}}{2}\\) + ...</div>
  <p><b>Example (Stirling):</b> \\(x=-1, 0, 1\\) and \\(y=2, 1, 2(h=1, x_{0}=0)\\). \\(\\Delta y_{-1}=-1, \\Delta y_{0}=1, \\Delta ^{2}y_{-1}=2\\). At \\(x=0.5, u=0.5:y=1+0.5(0)+(0.25/2)(2)=1.25\\).</p>
  <p><b>Inverse interpolation</b> finds x for a given y. If spacing is unequal use Lagrange with x and y swapped. Example: \\(y=x^{2}\\) at \\(x=1, 2, 3\\) gives \\(y=1, 4, 9\\). Find x when \\(y=5\\).</p>
  <p>\\(x=1(5-4)(5-9)/[(1-4)(1-9)]+2(5-1)(5-9)/[(4-1)(4-9)]+3(5-1)(5-4)/[(9-1)(9-4)]=-0.1667+2.1333+0.3=2.267\\) (true \\(\\sqrt{5}=2.236\\); only approximate).</p>
  <div class="note">Do not use Stirling/Bessel near the ends (no central differences exist there). Inverse interpolation is approximate because the inverse function is not a polynomial.</div>`},
 { title:"Numerical Differentiation", body:`
  <p>Differentiate the interpolating polynomial. With \\(u=(x-x_{0})/h\\), derivatives at the first tabular point from Newton's forward formula are:</p>
  <div class="formula">\\(\\displaystyle f'(x_{0})=(\\frac{1}{h})[\\Delta y_{0}-\\Delta^{2}\\frac{y_{0}}{2}+\\Delta^{3}\\frac{y_{0}}{3}-\\Delta^{4}\\frac{y_{0}}{4}+...]\\)</div>
  <div class="formula">\\(\\displaystyle f''(x_{0})=(\\frac{1}{h^{2}})[\\Delta^{2}y_{0}-\\Delta^{3}y_{0}+(\\frac{11}{12})\\Delta^{4}y_{0}-...]\\)</div>
  <p>Near the end use the backward version with ∇ and plus signs: \\(f'(x_{n})=(1/h)[\\nabla y_{n}+\\nabla ^{2}y_{n}/2+\\nabla ^{3}y_{n}/3+...]\\). Simple two-point formulas: forward \\((y_{1}-y_{0})/h\\), central \\((y_{1}-y_{-1})/2h\\).</p>
  <p><b>Example:</b> \\(y=x^{3}\\) at \\(x=0, 1, 2, 3, 4:y=0, 1, 8, 27, 64, h=1\\). \\(\\Delta y_{0}=1, \\Delta ^{2}y_{0}=6, \\Delta ^{3}y_{0}=6, \\Delta ^{4}y_{0}=0\\).</p>
  <p>\\(f'(0)=1-6/2+6/3=1-3+2=0\\) (true \\(3x^{2}=0\\)). \\(f''(0)=6-6=0\\) (true \\(6x=0\\)).</p>
  <div class="note">Differentiation magnifies errors (round-off) so it is less accurate than interpolation. Use a smaller h only until round-off dominates. Central formulas have error \\(O(h^{2})\\), forward \\(O(h)\\).</div>`},
 { title:"Numerical Integration: Trapezoidal, Simpson, Weddle", body:`
  <p>Divide [a,b] into n equal strips of width \\(h=(b-a)/n\\) and approximate the curve by polynomials.</p>
  <div class="vis" data-vis="trap"></div>
  <div class="formula">Trapezoidal: \\(\\displaystyle (\\frac{h}{2})[y_{0}+y_{n}+2(y_{1}+...+y_{n-1})]\\)</div>
  <div class="formula">Simpson 1/3 (n even): (h/3)[\\(\\displaystyle y_{0}+y_{n}+4\\)(odd y) \\(\\displaystyle +2\\)(even y)]</div>
  <div class="formula">Simpson 3/8 (n mult. of 3): \\(\\displaystyle (\\frac{3h}{8})[y_{0}+y_{n}+3(y_{1}+y_{2}+y_{4}+y_{5}..)+2(y_{3}+y_{6}..)]\\)</div>
  <div class="formula">Weddle (n mult. of 6): \\(\\displaystyle (\\frac{3h}{10})[y_{0}+5y_{1}+y_{2}+6y_{3}+y_{4}+5y_{5}+y_{6}]\\)</div>
  <p><b>Example:</b> \\(\\int _{0}^{2}x^{2}\\,\\mathrm{d}x\\) (exact \\(8/3=2.6667\\)), \\(h=0.5, y=0, 0.25, 1, 2.25, 4\\).</p>
  <p>Trapezoidal \\(=0.25[0+4+2(0.25+1+2.25)]=0.25\\times 11=2.75\\). Simpson \\(1/3=(0.5/3)[0+4+4(0.25+2.25)+2(1)]=(1/6)(16)=2.6667\\) (exact for quadratics).</p>
  <p>Check Weddle: \\(\\int _{0}^{6}x^{2}\\,\\mathrm{d}x=72, h=1:0.3[0+5+4+54+16+125+36]=0.3\\times 240=72\\).</p>
  <div class="note">Simpson 1/3 needs an EVEN number of strips (odd number of points). Trapezoidal error is proportional to \\(h^{2}\\), Simpson's to \\(h^{4}\\). Simpson's rules are exact up to cubics.</div>`},
 { title:"Root Finding: Bisection, Regula Falsi, Newton–Raphson", body:`
  <p><b>Bisection:</b> if \\(f(a)f(b)&lt;0\\), root lies in [a,b]. Take midpoint, keep the half where the sign changes. Always converges but slowly (linear). Iterations needed: \\(n\\ge \\log _{2}((b-a)/\\varepsilon )\\).</p>
  <div class="vis" data-vis="newton"></div>
  <p><b>Regula falsi:</b> use the chord's x-intercept, \\(x=(a\\cdot f(b)-b\\cdot f(a))/(f(b)-f(a))\\). <b>Secant:</b> same formula but without keeping the bracket.</p>
  <div class="formula">Newton–Raphson: \\(\\displaystyle x_{n+1}=x_{n}-f\\frac{x_{n}}{f}'(x_{n})\\)</div>
  <p>Newton has quadratic convergence (order 2) when \\(f'\\)(root) \\(\\ne 0\\) and the start is close; secant has order \\(\\approx 1.618\\); bisection and regula falsi order 1.</p>
  <p><b>Example:</b> Solve \\(x^{2}-2=0\\) (root \\(\\sqrt{2}=1.41421\\)). Newton, \\(x_{0}=1.5:x_{1}=1.5-0.25/3=1.41667;x_{2}=1.41667-0.00694/2.83333=1.41422\\).</p>
  <p>Bisection on \\([1, 2]:mid\\,1.5(f>0)\\to [1, 1.5];1.25(f&lt;0)\\to [1.25, 1.5];1.375(f&lt;0)\\to [1.375, 1.5];1.4375(f>0)\\to [1.375, 1.4375]\\). For error below \\(0.001:n\\ge \\log _{2}(1000)=9.97\\), so 10 iterations.</p>
  <div class="note">Newton fails if \\(f'(x_{n})=0\\) or the start is poor. Convergence condition for \\(x=g(x)\\) iteration: \\(|g'(x)|&lt;1\\) near the root.</div>`},
 { title:"Solving Linear Systems: Gauss Elimination, Jacobi, Gauss–Seidel", body:`
  <p><b>Gauss elimination</b> (direct): reduce the augmented matrix to upper triangular form, then back-substitute. <b>Jacobi</b> and <b>Gauss–Seidel</b> (iterative) rewrite each equation for its diagonal unknown. Jacobi uses only old values; Gauss–Seidel uses the newest values immediately, so it usually converges faster. Both are guaranteed to converge if the matrix is <b>strictly diagonally dominant</b> (\\(|a_{ii}|>\\Sigma |a_{ij}|\\) for each row).</p>
  <p><b>Example:</b> \\(2x+y+z=7;x+3y+z=10;x+y+4z=15\\).</p>
  <p>Gauss: \\(R_{2}-\\) ½\\(R_{1}\\) gives \\(2.5y+0.5z=6.5;R_{3}-\\) ½\\(R_{1}\\) gives \\(0.5y+3.5z=11.5\\); then \\(R_{3}-0.2R_{2}\\) gives \\(3.4z=10.2\\), so \\(z=3, y=(6.5-1.5)/2.5=2, x=(7-2-3)/2=1\\).</p>
  <p>Gauss–Seidel from \\((0, 0, 0):x=(7-y-z)/2=3.5;y=(10-3.5-0)/3=2.1667;z=(15-3.5-2.1667)/4=2.3333\\). Next iterations approach (1, 2, 3).</p>
  <div class="note">Use partial pivoting (largest pivot) in Gauss elimination to reduce round-off. Iterative methods: check dominance first, rearrange equations if needed. Truncation error comes from cutting the method, round-off error from limited digits.</div>`}
]},
{ id:"real", name:"Real Analysis", topics:[
 { title:"Supremum, Infimum & Completeness", body:`
  <p>For a non-empty set \\(S\\subset \\mathbb{R}\\) bounded above, the <b>supremum</b> sup S is the least upper bound. The <b>Completeness Axiom</b> says every non-empty set bounded above has a supremum in ℝ (this is what separates ℝ from ℚ).</p>
  <p><b>Characterisation:</b> \\(s=\\sup \\,S\\) iff s is an upper bound and for every \\(\\varepsilon >0\\) there is \\(x\\in S\\) with \\(x>s-\\varepsilon\\).</p>
  <p><b>Archimedean property:</b> for any \\(x\\in \\mathbb{R}\\) there is \\(n\\in \\mathbb{N}\\) with \\(n>x\\). Hence ℚ is dense in ℝ.</p>`},
 { title:"Sequences and Convergence", body:`
  <p>\\(a_{n}\\to L\\) if for every \\(\\varepsilon >0\\) there exists N such that \\(|a_{n}-L|&lt;\\varepsilon\\) for all \\(n\\ge N\\).</p>
  <div class="vis" data-vis="seq"></div>
  <ul><li>Convergent sequences are bounded and have unique limits.</li>
  <li><b>Monotone Convergence Theorem:</b> a bounded monotone sequence converges.</li>
  <li><b>Bolzano–Weierstrass:</b> every bounded sequence has a convergent subsequence.</li>
  <li><b>Cauchy criterion:</b> a sequence converges iff it is Cauchy (\\(|a_{n}-a_{m}|&lt;\\varepsilon\\) for \\(n, m\\ge N\\)).</li>
  <li><b>Squeeze theorem:</b> if \\(a_{n}\\le b_{n}\\le c_{n}\\) and \\(a_{n}, c_{n}\\to L\\), then \\(b_{n}\\to L\\).</li></ul>`},
 { title:"Series Convergence Tests", body:`
  <ul>
  <li><b>Divergence test:</b> if \\(a_{n}\\) does not \\(\\to 0\\), then \\(\\sum a_{n}\\) diverges.</li>
  <li><b>Geometric series</b> \\(\\sum r^{n}\\) converges iff \\(|r|&lt;1\\), with sum \\(1/(1-r)\\) from \\(n=0\\).</li>
  <li><b>p-series</b> \\(\\sum 1/n^{p}\\) converges iff \\(p>1\\).</li>
  <li><b>Comparison test:</b> \\(0\\le a_{n}\\le b_{n};\\sum b_{n}\\) converges \\(\\Rightarrow \\sum a_{n}\\) converges.</li>
  <li><b>Ratio test:</b> \\(L=\\lim |a_{n+1}/a_{n}|;L&lt;1\\) converges absolutely, \\(L>1\\) diverges, \\(L=1\\) inconclusive.</li>
  <li><b>Root test:</b> \\(L=\\lim |a_{n}|^{1/n}\\), same rule.</li>
  <li><b>Alternating series test:</b> if \\(a_{n}\\) decreases to \\(0, \\sum (-1)^{n}a_{n}\\) converges.</li></ul>
  <div class="note">Absolute convergence ⇒ convergence, but not the other way (e.g. alternating harmonic series).</div>`},
 { title:"Continuity and Differentiability", body:`
  <p>f is continuous at c if for every \\(\\varepsilon >0\\) there is \\(\\delta >0\\) such that \\(|x-c|&lt;\\delta \\Rightarrow |f(x)-f(c)|&lt;\\varepsilon\\).</p>
  <ul><li><b>Intermediate Value Theorem:</b> f continuous on [a,b], y between \\(f(a)\\) and \\(f(b)\\Rightarrow \\exists c\\) with \\(f(c)=y\\).</li>
  <li><b>Extreme Value Theorem:</b> continuous on \\([a, b]\\Rightarrow\\) attains max and min.</li>
  <li><b>Uniform continuity:</b> \\(\\delta\\) depends only on \\(\\varepsilon\\); continuous on a closed bounded interval ⇒ uniformly continuous.</li>
  <li>Differentiable ⇒ continuous (not conversely, e.g. |x| at 0).</li>
  <li><b>Mean Value Theorem:</b> f continuous on [a,b], differentiable on \\((a, b)\\Rightarrow \\exists c:f'(c)=(f(b)-f(a))/(b-a)\\).</li></ul>`},
 { title:"Riemann Integration", body:`
  <p>f bounded on [a,b] is Riemann integrable if upper and lower Darboux sums agree: \\(U(f)=L(f)\\), where \\(U(f)=\\inf\\) over partitions of \\(U(f, P)\\) and \\(L(f)=\\sup\\) of \\(L(f, P)\\).</p>
  <div class="vis" data-vis="trap:left"></div>
  <ul><li>Continuous functions are integrable. Monotone functions are integrable.</li>
  <li>A bounded function with finitely many discontinuities is integrable.</li>
  <li><b>Fundamental Theorem of Calculus:</b> if \\(F'=f\\) continuous, then \\(\\int _{a}^{b}f=F(b)-F(a)\\).</li></ul>`},
 { title:"Open Sets, Closed Sets & Limit Points", body:`
  <p>A set \\(G\\subseteq \\mathbb{R}\\) is <b>open</b> if every point has a neighbourhood \\((x-\\varepsilon , x+\\varepsilon )\\) fully inside G. A point p is a <b>limit point</b> (accumulation point) of S if every neighbourhood of p contains a point of S other than p. A set is <b>closed</b> if it contains all its limit points, equivalently if its complement is open.</p>
  <div class="formula">closure\\(\\displaystyle (S)=S\\cup S'\\)  (\\(\\displaystyle S'\\) = set of limit points)</div>
  <ul><li>Union of any number of open sets is open; finite intersection of open sets is open.</li>
  <li>Intersection of any number of closed sets is closed; finite union of closed sets is closed.</li>
  <li>Bolzano–Weierstrass: every bounded infinite set has a limit point.</li></ul>
  <p><b>Example:</b> \\(S=\\{1, 1/2, 1/3, ...\\}\\). Every point of S is isolated, so none is a limit point. The only limit point is 0, which is not in S. So \\(S'=\\{0\\}\\), closure\\((S)=S\\cup \\{0\\}\\), and S is neither open nor closed.</p>
  <div class="note">Finite sets have no limit points. ℚ has every real number as a limit point. (a,b) is open, [a,b] is closed, ℝ and ∅ are both open and closed. Intersection of infinitely many open sets, such as \\(\\cap (-1/n, 1/n)=\\{0\\}\\), need not be open.</div>`},
 { title:"Cauchy Sequences", body:`
  <p>A sequence \\((x_{n})\\) is <b>Cauchy</b> if its terms get arbitrarily close to <i>each other</i> far out, without mentioning a limit.</p>
  <div class="formula">\\(\\displaystyle \\forall \\varepsilon >0\\exists N:m, n\\ge N\\Rightarrow |x_{m}-x_{n}|&lt;\\varepsilon\\)</div>
  <p><b>Cauchy criterion:</b> in \\(\\mathbb{R}a\\) sequence converges if and only if it is Cauchy (this is equivalent to completeness). Every convergent sequence is Cauchy and every Cauchy sequence is bounded. In ℚ this fails: a sequence of rationals approaching \\(\\sqrt{2}\\) is Cauchy but has no limit in ℚ.</p>
  <p><b>Example:</b> Show \\(x_{n}=1/n\\) is Cauchy. For \\(m, n\\ge N:|1/m-1/n|&lt;\\max (1/m, 1/n)\\le 1/N\\). Given \\(\\varepsilon =0.01\\) choose \\(N=100\\); then \\(|x_{m}-x_{n}|&lt;0.01\\) for all \\(m, n\\ge 100\\).</p>
  <p>Non-example: \\(x_{n}=(-1)^{n}\\) is not Cauchy since \\(|x_{n+1}-x_{n}|=2\\) always.</p>
  <div class="note">Mistake: thinking \\(|x_{n+1}-x_{n}|\\to 0\\) is enough. Harmonic partial sums \\(H_{n}=1+1/2\\) + ... \\(+1/n\\) have differences \\(1/(n+1)\\to 0\\) but are not Cauchy \\((H_{n}\\to \\infty )\\). The condition must hold for \\(\\mathrm{ALL}\\,m, n\\ge N\\).</div>`},
 { title:"Uniform Continuity", body:`
  <p>f is continuous on a set if for each point x and \\(\\varepsilon\\) there is \\(a\\delta\\) that may depend on x. f is <b>uniformly continuous</b> if one \\(\\delta\\) works for the whole set.</p>
  <div class="formula">\\(\\displaystyle \\forall \\varepsilon \\exists \\delta\\) (depends only on \\(\\displaystyle \\varepsilon\\)): \\(\\displaystyle |x-y|&lt;\\delta \\Rightarrow |f(x)-f(y)|&lt;\\varepsilon\\)</div>
  <ul><li>Uniformly continuous implies continuous, not conversely.</li>
  <li>Continuous on a closed bounded interval [a,b] implies uniformly continuous (Heine–Cantor).</li>
  <li>Lipschitz \\((|f(x)-f(y)|\\le K|x-y|)\\) implies uniformly continuous.</li>
  <li>Uniformly continuous maps Cauchy sequences to Cauchy sequences.</li></ul>
  <p><b>Example:</b> \\(f(x)=x^{2}\\) on \\([0, 2]:|x^{2}-y^{2}|=|x-y||x+y|\\le 4|x-y|\\). Choose \\(\\delta =\\varepsilon /4\\), so f is uniformly continuous there.</p>
  <p>On ℝ it is not: take \\(x=n+1/n, y=n\\). Then \\(|x-y|=1/n\\to 0\\) but \\(|x^{2}-y^{2}|=2+1/n^{2}>2\\). Likewise \\(f(x)=1/x\\) on (0,1) is continuous but not uniformly continuous (use \\(x_{n}=1/n, y_{n}=1/(n+1)\\)).</p>
  <div class="note">Exam trick: to disprove, find two sequences with \\(x_{n}-y_{n}\\to 0\\) but \\(f(x_{n})-f(y_{n})\\) does not \\(\\to 0\\). Bounded derivative on an interval implies uniform continuity (by MVT).</div>`},
 { title:"Rolle's Theorem, Mean Value Theorem & Taylor's Theorem", body:`
  <p><b>Rolle:</b> f continuous on [a,b], differentiable on \\((a, b), f(a)=f(b)\\Rightarrow\\) there is c in (a,b) with \\(f'(c)=0\\).</p>
  <div class="vis" data-vis="mvt"></div>
  <p><b>MVT (Lagrange):</b> same conditions without \\(f(a)=f(b)\\Rightarrow\\) there is c with</p>
  <div class="formula">\\(\\displaystyle f'(c)=[f(b)-f(a)]/(b-a)\\)</div>
  <p><b>Taylor (Lagrange remainder):</b> if f has \\(n+1\\) derivatives,</p>
  <div class="formula">\\(\\displaystyle f(x)=\\sum_{k=0}^{n}f^{(k)}(a)\\frac{(x-a)^{k}}{k}!+R_{n}\\)</div>
  <div class="formula">\\(\\displaystyle R_{n}=f^{(n+1)}(c)\\frac{(x-a)^{n+1}}{n+1}!, \\quad c\\) between a and x</div>
  <p><b>Example (MVT):</b> \\(f(x)=x^{2}\\) on [1,3]: slope \\(=(9-1)/2=4\\) and \\(f'(c)=2c=4\\), so \\(c=2\\), which lies in (1,3).</p>
  <p><b>Example (Taylor):</b> \\(e^{x}\\) about 0 with \\(n=2:e^{x}\\approx 1+x+x^{2}/2\\). At \\(x=1\\), the sum is 2.5 and \\(R_{2}=e^{c}/6\\le e/6&lt;0.453\\), so e is between 2.5 and 2.953.</p>
  <div class="note">Check all three hypotheses (continuity, differentiability, \\(f(a)=f(b)\\) for Rolle). \\(f(x)=|x|\\) on \\([-1, 1]\\) has \\(f(-1)=f(1)\\) but no zero derivative, because it is not differentiable at 0. MVT proves: \\(f'=0\\Rightarrow f\\) constant, and \\(f'>0\\Rightarrow\\) increasing.</div>`}
]},
{ id:"macro", name:"Principles of Macroeconomics", topics:[
 { title:"Measuring National Income: GDP, GNI, NNP, NI", body:`
  <p><b>GDP</b> is the market value of all final goods and services produced inside a country in a year. Three equal approaches: output (value added), income (wages + rent + interest + profit), and expenditure.</p>
  <div class="formula">\\(\\displaystyle \\mathrm{GDP}=C+I+G+(X-M)\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{GNI}=\\mathrm{GDP}+\\mathrm{Net}\\) Factor Income from Abroad (NFIA)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{NNI}=\\mathrm{GNI}-\\) Depreciation</div>
  <div class="formula">National Income \\(\\displaystyle =\\mathrm{NNI}\\) at factor cost \\(\\displaystyle =\\mathrm{NNI}-\\) Indirect taxes + Subsidies</div>
  <p>Count only <b>final</b> goods (avoid double counting of intermediate goods), and exclude transfer payments, second-hand sales and pure financial transactions.</p>
  <p><b>Example:</b> \\(C=600, I=150, G=200, X=100, M=50\\) gives \\(\\mathrm{GDP}=600+150+200+50=1000\\). If \\(\\mathrm{NFIA}=-20, \\mathrm{GNI}=980\\). Depreciation 80 gives \\(\\mathrm{NNI}=900\\). Net indirect taxes 50 gives \\(NI=850\\).</p>
  <div class="note">Imports are subtracted because C, I, G already include spending on imported goods. I means investment (machines, buildings, inventory), not buying shares. GDP is not a perfect welfare measure (ignores informal work, environment, distribution).</div>`},
 { title:"Nominal vs Real GDP, Price Indices & Inflation", body:`
  <p><b>Nominal GDP</b> uses current prices; <b>real GDP</b> uses base-year prices and removes the effect of price change. The <b>GDP deflator</b> covers all domestic output; the <b>CPI</b> covers a fixed basket bought by consumers (so includes imports).</p>
  <div class="formula">GDP deflator = (Nominal GDP / Real GDP) \\(\\displaystyle \\times 100\\)</div>
  <div class="formula">CPI = (Cost of basket now / Cost in base year) \\(\\displaystyle \\times 100\\)</div>
  <div class="formula">Inflation rate \\(\\displaystyle =\\frac{\\mathrm{CPI}_{t}-\\mathrm{CPI}_{t-1}}{\\mathrm{CPI}_{t-1}}\\times 100\\)</div>
  <p><b>Example:</b> Nominal \\(\\mathrm{GDP}=1, 200\\) and deflator \\(=120\\) gives real \\(\\mathrm{GDP}=1200/1.20=1000\\). If next year real GDP is 1050, real growth \\(=5\\)%. If CPI rises from 100 to 108, inflation \\(=8\\)%.</p>
  <p><b>Causes:</b> demand-pull (too much demand), cost-push (higher costs, e.g. fuel or wages), and excess money growth. Costs: reduces purchasing power of fixed incomes, shoe-leather and menu costs, redistributes from lenders to borrowers.</p>
  <div class="note">CPI tends to overstate inflation (substitution bias, quality change). Real interest rate ≈ nominal rate − inflation. Do not confuse a rise in the price level (inflation) with a rise in a single price.</div>`},
 { title:"Consumption Function, Equilibrium Output & Multiplier", body:`
  <p>In the simple Keynesian model (closed economy, no government) planned spending is \\(AE=C+I\\) with \\(C=a+bY\\), where a is autonomous consumption, \\(b=\\mathrm{MPC}\\) and \\(0&lt;b&lt;1\\). Saving \\(S=Y-C, \\mathrm{MPS}=1-b\\).</p>
  <div class="vis" data-vis="keynes"></div>
  <div class="formula">Equilibrium: \\(\\displaystyle Y=C+I\\)  (or \\(\\displaystyle S=I\\))</div>
  <div class="formula">\\(\\displaystyle Y*=\\frac{a+I}{1-b}\\)</div>
  <div class="formula">Multiplier \\(\\displaystyle k=\\Delta \\frac{Y}{\\Delta} I=\\frac{1}{1-b}=\\frac{1}{\\mathrm{MPS}}\\)</div>
  <p>With proportional tax rate \\(t:k=1/[1-b(1-t)]\\). Tax multiplier \\(=-b/(1-b)\\). Balanced budget multiplier \\((\\Delta G=\\Delta T)=1\\).</p>
  <p><b>Example:</b> \\(C=100+0.8Y\\) and \\(I=100\\). \\(Y*=200/0.2=1000\\). Check: \\(C=900, S=100=I\\). Multiplier \\(=5\\), so if I rises by 20, Y rises by 100 to 1100. With \\(t=0.25:k=1/(1-0.8\\times 0.75)=1/0.4=2.5\\).</p>
  <div class="note">The multiplier works through repeated rounds of spending: each round is b times the previous (\\(\\Delta I+b\\Delta I+b^{2}\\Delta I\\) + ... \\(=\\Delta I/(1-b)\\)). Mistake: forgetting that higher MPC means a larger multiplier. Leakages (saving, taxes, imports) reduce it.</div>`},
 { title:"Paradox of Thrift", body:`
  <p>If everyone tries to save more, total saving in the economy may stay the same or even fall. Reason: extra saving means less consumption spending, so income falls through the multiplier, and with lower income people can save less. In equilibrium \\(S=I\\), and if investment does not change, aggregate saving cannot rise.</p>
  <div class="vis" data-vis="keynes"></div>
  <div class="formula">\\(\\displaystyle S=-a+(1-b)Y\\)</div>
  <div class="formula">Equilibrium: \\(\\displaystyle S=I\\),  so  \\(\\displaystyle Y*=\\frac{a+I}{1-b}\\)</div>
  <p><b>Example:</b> Start with \\(C=100+0.8Y, I=100, Y*=1000, S=-100+0.2(1000)=100\\). People become thriftier and autonomous consumption falls to 80.</p>
  <p>New \\(Y*=(80+100)/0.2=900\\). New saving \\(=-80+0.2(900)=100\\). Saving is unchanged (still equal to \\(I=100\\)), but income has dropped by 100 and people are worse off.</p>
  <p>If saving rises because MPS increases (b falls), income also falls and saving stays equal to I.</p>
  <div class="note">The paradox holds only in a Keynesian economy with unemployed resources and fixed investment. If saving lowers interest rates and raises investment (classical view), more saving is good for growth. Do not write that total saving rises.</div>`},
 { title:"Aggregate Demand and Aggregate Supply (AD–AS)", body:`
  <p><b>AD</b> shows total planned spending at each price level; it slopes down (wealth effect, interest-rate effect, exchange-rate effect). It shifts with C, I, G, NX and money supply. <b>Short-run AS</b> slopes up (sticky wages and prices); <b>long-run AS</b> is vertical at potential output. SRAS shifts with input costs, productivity and expectations.</p>
  <div class="vis" data-vis="adas"></div>
  <ul><li>AD rises: price and output both rise (demand-pull inflation).</li>
  <li>SRAS falls: price rises, output falls (<b>stagflation</b>).</li>
  <li>If output &gt; potential, wages rise and SRAS shifts left until back at LRAS; if output &lt; potential, a recession gap needs AD stimulus or time.</li></ul>
  <p><b>Example:</b> \\(AD:Y=1200-20P\\) and \\(\\mathrm{SRAS}:Y=800+20P\\). Setting equal: \\(40P=400, P=10, Y=1000\\). If AD shifts to \\(Y=1400-20P:40P=600\\), so \\(P=15\\) and \\(Y=800+300=1100\\). Both price and output rise.</p>
  <div class="note">AD slopes down for different reasons than a micro demand curve (not just substitution). Move ALONG a curve when price changes; SHIFT the curve for any other factor. In long run, AD changes only change prices, not output.</div>`},
 { title:"Unemployment, Okun's Law & the Phillips Curve", body:`
  <p>The <b>labour force</b> = employed + unemployed (actively seeking work). Those not working and not seeking (students, retired, discouraged) are outside the labour force. Types: frictional (job search), structural (skills mismatch), cyclical (low demand). The <b>natural rate</b> includes frictional and structural unemployment.</p>
  <div class="vis" data-vis="phillips"></div>
  <div class="formula">Unemployment rate \\(\\displaystyle =\\frac{U}{E+U}\\times 100\\)</div>
  <div class="formula">LFPR = Labour force / Working-age population \\(\\displaystyle \\times 100\\)</div>
  <div class="formula">Okun: %\\(\\displaystyle \\Delta Y\\approx -2\\times\\) (change in u)  (rule of thumb)</div>
  <div class="formula">Phillips (expectations-augmented): \\(\\displaystyle \\pi =\\pi^{e}-\\beta (u-u*)\\)</div>
  <p><b>Example:</b> Employed 90 million, unemployed 10 million, outside labour force 40 million. Labour force \\(=100\\) million, \\(u=10\\)%, \\(\\mathrm{LFPR}=100/140=71.4\\)%. If \\(\\pi ^{e}=3\\)%, \\(\\beta =0.5, u=6\\)%, \\(u*=5\\)%, then \\(\\pi =3-0.5(1)=2.5\\)%.</p>
  <p>The original Phillips curve shows a short-run trade-off between inflation and unemployment. In the long run it is vertical at u* (no trade-off) once expectations adjust.</p>
  <div class="note">Mistake: including discouraged workers or children in the labour force. Unemployment rate can fall because people quit searching, not because jobs were created.</div>`},
 { title:"Money Creation & the Money Multiplier", body:`
  <p>Banks keep only a fraction of deposits as reserves and lend the rest; loans become new deposits elsewhere, so the banking system creates money. Required reserve ratio r limits this.</p>
  <div class="formula">Simple deposit multiplier \\(\\displaystyle =\\frac{1}{r}\\)</div>
  <div class="formula">Money multiplier \\(\\displaystyle =\\frac{1+c}{c+r}, \\quad c\\) = currency/deposits</div>
  <div class="formula">M = money multiplier × monetary base (high-powered money)</div>
  <p><b>Example:</b> \\(r=10\\)% and a new deposit of 1000 with no cash leakage. Bank keeps 100, lends 900; that is deposited, bank keeps 90, lends 810, and so on. Total deposits \\(=1000/0.1=10, 000\\); newly created money \\(=9, 000\\). With cash drain \\(c=0.2\\) and \\(r=0.1\\): multiplier \\(=1.2/0.3=4\\), so a monetary base of 1000 supports money supply of 4000.</p>
  <p>The central bank controls the base using open market operations, the policy (discount) rate and the reserve requirement.</p>
  <div class="note">Initial deposit is part of the total deposits (10,000), while new loans created are 9,000. Excess reserves and public cash holding both reduce the multiplier.</div>`},
 { title:"Fiscal and Monetary Policy", body:`
  <p><b>Fiscal policy</b>: government changes spending (G) or taxes (T). <b>Monetary policy</b>: central bank changes money supply or interest rates. Expansionary policy fights recession; contractionary policy fights inflation.</p>
  <div class="formula">Government spending multiplier \\(\\displaystyle =\\frac{1}{1-\\mathrm{MPC}}\\)</div>
  <div class="formula">Tax multiplier \\(\\displaystyle =-\\frac{\\mathrm{MPC}}{1-\\mathrm{MPC}}\\)</div>
  <p><b>Example:</b> \\(\\mathrm{MPC}=0.8\\). Raise G by \\(50:\\Delta Y=5\\times 50=250\\). Cut taxes by \\(50:\\Delta Y=4\\times 50=200\\) (smaller, since part of the tax cut is saved). Raise both G and T by 50 (balanced budget): \\(\\Delta Y=250-200=50\\), multiplier 1.</p>
  <p><b>Monetary transmission:</b> lower policy rate (or buying bonds) → lower interest rates → higher investment and consumption → higher AD and output. Tools: open market operations, discount rate, reserve ratio.</p>
  <ul><li><b>Crowding out:</b> deficit borrowing raises interest rates and reduces private investment.</li>
  <li><b>Lags:</b> recognition, decision, implementation, effect lags.</li>
  <li>Automatic stabilizers: progressive taxes and unemployment benefits.</li></ul>
  <div class="note">Mistake: using the same multiplier for G and T. In a liquidity trap, monetary policy is weak and fiscal policy matters more.</div>`}
]},
{ id:"db", name:"Database Management and Programming", topics:[
 { title:"DBMS Basics & the Entity–Relationship Model", body:`
  <p>A <b>database</b> is an organized collection of related data; a <b>DBMS</b> is the software to define, store, query and secure it. Compared with file systems, a DBMS reduces redundancy, keeps data consistent, allows concurrent access, security and recovery. Three-level architecture: <b>external</b> (user views), <b>conceptual</b> (whole logical design) and <b>internal</b> (physical storage). Data independence means changing one level without affecting the one above.</p>
  <p>The <b>ER model</b> designs data before building tables. <b>Entity</b> = thing (Student). <b>Attribute</b> = property (name); can be simple, composite, multivalued, derived, and one attribute is the key. <b>Relationship</b> links entities (Student enrolls in Course) with cardinality 1:1, 1:N or M:N, and participation total or partial.</p>
  <div class="formula">ER diagram: rectangle = entity, ellipse = attribute,</div>
  <div class="formula">diamond = relationship, double rectangle = weak entity</div>
  <p><b>Example:</b> Student–Course is M:N, so convert it into a new table Enroll(student\\(_{id}\\), course\\(_{id}\\), grade) with a composite primary key and two foreign keys. A 1:N relationship (Department has many Students) is converted by putting dept\\(_{id}\\) as a foreign key in the N side (Student).</p>
  <div class="note">Mistake: keeping an M:N relationship as a single foreign key. A weak entity has no key of its own and depends on an owner entity (e.g. Dependent of Employee).</div>`},
 { title:"Relational Model & Keys", body:`
  <p>Data is stored in <b>relations</b> (tables). A row is a <b>tuple</b>, a column is an <b>attribute</b>, the set of allowed values is its <b>domain</b>. Degree = number of columns, cardinality = number of rows.</p>
  <ul><li><b>Super key:</b> any set of attributes that uniquely identifies rows.</li>
  <li><b>Candidate key:</b> a minimal super key.</li>
  <li><b>Primary key:</b> the chosen candidate key (unique, not NULL).</li>
  <li><b>Alternate key:</b> a candidate key not chosen as primary.</li>
  <li><b>Foreign key:</b> attribute referring to the primary key of another table (may be NULL, may repeat).</li>
  <li><b>Composite key:</b> a key with more than one attribute.</li></ul>
  <p><b>Integrity rules:</b> <b>entity integrity</b> (primary key cannot be NULL) and <b>referential integrity</b> (a foreign key value must match an existing primary key value, or be NULL).</p>
  <p><b>Example:</b> Student(sid, email, name, dept\\(_{id}\\)) with sid and email both unique. Candidate keys: sid, email. Choose sid as primary; email is the alternate key; dept\\(_{id}\\) is a foreign key to Dept. {sid, name} is a super key but not candidate since sid alone is enough.</p>
  <div class="note">Relational algebra basics: \\(\\sigma\\) (select rows), \\(\\pi\\) (project columns), ⋈ (join), ∪, −, × . Every candidate key is a super key but not conversely.</div>`},
 { title:"SQL: Creating Tables & Constraints (DDL/DML)", body:`
  <p>SQL groups: <b>DDL</b> (CREATE, ALTER, DROP), <b>DML</b> (INSERT, UPDATE, DELETE, SELECT), <b>DCL</b> (GRANT, REVOKE), <b>TCL</b> (COMMIT, ROLLBACK). Constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT.</p>
  <div class="formula">CREATE TABLE Dept (</div>
  <div class="formula">  dept\\(\\displaystyle _{id}\\,\\mathrm{INT}\\) PRIMARY KEY,</div>
  <div class="formula">  dname VARCHAR(30) NOT NULL UNIQUE );</div>
  <div class="formula">CREATE TABLE Student (</div>
  <div class="formula">  sid INT PRIMARY KEY,</div>
  <div class="formula">  name VARCHAR(50) NOT NULL,</div>
  <div class="formula">  \\(\\displaystyle age\\,\\mathrm{INT}\\,\\mathrm{CHECK}(age>=16)\\),</div>
  <div class="formula">  dept\\(\\displaystyle _{id}\\,\\mathrm{INT}\\),</div>
  <div class="formula">  FOREIGN KEY (dept\\(\\displaystyle _{id}\\)) REFERENCES Dept(dept\\(\\displaystyle _{id}\\)) );</div>
  <div class="formula">INSERT INTO Student VALUES (1, 'Rahim', 20, 10);</div>
  <div class="formula">UPDATE Student SET age = 21 WHERE sid = 1;</div>
  <div class="formula">DELETE FROM Student WHERE sid = 1;</div>
  <p><b>Example:</b> Inserting a Student with dept\\(_{id}=99\\) when Dept has no row 99 fails (referential integrity). Inserting age 15 fails the CHECK. Inserting a second row with \\(sid=1\\) fails the PRIMARY KEY.</p>
  <div class="note">DELETE removes rows (can have WHERE, can roll back); TRUNCATE empties the table; DROP removes the table itself. UPDATE or DELETE without WHERE affects ALL rows.</div>`},
 { title:"SQL: SELECT, WHERE, GROUP BY, HAVING", body:`
  <p>Order of writing: \\(\\mathrm{SELECT}\\to \\mathrm{FROM}\\to \\mathrm{WHERE}\\to \\mathrm{GROUP}\\,BY\\to \\mathrm{HAVING}\\to \\mathrm{ORDER}\\,BY\\). Logical order of execution: \\(\\mathrm{FROM}\\to \\mathrm{WHERE}\\to \\mathrm{GROUP}\\,BY\\to \\mathrm{HAVING}\\to \\mathrm{SELECT}\\to \\mathrm{ORDER}\\,BY\\). <b>WHERE</b> filters rows before grouping; <b>HAVING</b> filters groups after aggregation. Aggregates: COUNT, SUM, AVG, MIN, MAX.</p>
  <div class="formula">SELECT dept, AVG(salary) AS avg_sal</div>
  <div class="formula">FROM Emp</div>
  <div class="formula">GROUP BY dept</div>
  <div class="formula">HAVING AVG(salary) \\(\\displaystyle >25000\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{ORDER}\\,BY\\,avg_{sal}\\,\\mathrm{DESC}\\);</div>
  <p><b>Example:</b> Emp rows (dept, salary): (A, 30000), (A, 40000), (B, 20000). Groups: A has \\(\\mathrm{AVG}=35000;B\\) has \\(\\mathrm{AVG}=20000\\). HAVING AVG(salary) \\(>25000\\) keeps only A, so the result is one row: A, 35000.</p>
  <p>Other useful forms: WHERE name LIKE 'R%' (starts with R); WHERE age BETWEEN 18 AND 25; WHERE dept\\(_{id}\\,IN(10, 20);\\mathrm{WHERE}\\) dept\\(_{id}\\,IS\\,\\mathrm{NULL};\\mathrm{SELECT}\\) DISTINCT dept FROM Emp; subquery: SELECT name FROM Emp WHERE salary = (SELECT MAX(salary) FROM Emp);</p>
  <div class="note">Use IS NULL, never \\(=\\mathrm{NULL}\\). Every non-aggregated column in SELECT must appear in GROUP BY. \\(\\mathrm{COUNT}(*)\\) counts all rows, COUNT(col) ignores NULLs. You cannot use an aggregate in WHERE.</div>`},
 { title:"SQL Joins", body:`
  <p>A join combines rows from two tables based on a related column.</p>
  <div class="vis" data-vis="joins"></div>
  <ul><li><b>INNER JOIN:</b> only matching rows.</li>
  <li><b>LEFT JOIN:</b> all rows of the left table plus matches (NULL when no match).</li>
  <li><b>RIGHT JOIN:</b> all rows of the right table plus matches.</li>
  <li><b>FULL OUTER JOIN:</b> all rows from both sides.</li>
  <li><b>CROSS JOIN:</b> every combination (\\(m\\times n\\) rows).</li></ul>
  <div class="formula">SELECT s.name, d.dname</div>
  <div class="formula">FROM Student s</div>
  <div class="formula">LEFT JOIN Dept d ON s.dept\\(\\displaystyle _{id}=d\\).dept\\(\\displaystyle _{id}\\);</div>
  <p><b>Example:</b> Student: (1, Rahim, 10), (2, Karim, 20), (3, Salma, NULL). Dept: (10, Stat), (20, Math), (30, Phy).</p>
  <ul><li>INNER JOIN gives 2 rows: Rahim–Stat, Karim–Math.</li>
  <li>LEFT JOIN gives 3 rows: the two above plus Salma–NULL.</li>
  <li>RIGHT JOIN gives 3 rows: Rahim–Stat, Karim–Math, NULL–Phy.</li>
  <li>FULL JOIN gives 4 rows (Salma and Phy both appear).</li>
  <li>CROSS JOIN gives \\(3\\times 3=9\\) rows.</li></ul>
  <div class="note">A NULL never equals another NULL, so Salma does not match anything in an INNER JOIN. Forgetting the ON condition turns a join into a Cartesian product. MySQL has no FULL JOIN (use UNION of LEFT and RIGHT).</div>`},
 { title:"Normalization: 1NF, 2NF, 3NF, BCNF", body:`
  <p>Normalization removes redundancy and update, insert, delete anomalies by decomposing tables using functional dependencies (\\(X\\to Y\\) means X determines Y). Decomposition must be lossless (and preferably dependency-preserving).</p>
  <ul><li><b>1NF:</b> all values atomic, no repeating groups or multivalued cells.</li>
  <li><b>2NF:</b> 1NF and no <i>partial</i> dependency (non-key attribute depending on part of a composite key).</li>
  <li><b>3NF:</b> 2NF and no <i>transitive</i> dependency \\((non-key\\to non-key)\\).</li>
  <li><b>BCNF:</b> for every dependency \\(X\\to Y, X\\) must be a super key.</li></ul>
  <p><b>Example (2NF):</b> R(StudentID, CourseID, StudentName, CourseTitle) with key (StudentID, CourseID). StudentID → StudentName and CourseID → CourseTitle are partial. Decompose into Student(StudentID, StudentName), Course(CourseID, CourseTitle), Enroll(StudentID, CourseID).</p>
  <p><b>Example (3NF):</b> Emp(empid, deptid, dname) with empid → deptid and deptid → dname, so empid → dname is transitive. Decompose into Emp(empid, deptid) and Dept(deptid, dname).</p>
  <div class="note">3NF but not BCNF happens when a non-key attribute determines part of a candidate key. Every BCNF table is in 3NF. Denormalization (deliberate redundancy) is sometimes done for speed.</div>`},
 { title:"Indexing & Transactions (ACID)", body:`
  <p>An <b>index</b> is a separate structure (usually a <b>B-tree</b> or B+ tree; hash for equality only) that lets the DBMS find rows without scanning the entire table. A primary key creates an index automatically. Indexes speed up SELECT, WHERE, JOIN and ORDER BY but slow INSERT/UPDATE/DELETE and use more space.</p>
  <div class="formula">CREATE INDEX idx_name ON Student(name);</div>
  <p><b>Example:</b> Searching 1,000,000 rows without an index needs up to 1,000,000 comparisons; with a balanced search structure about \\(\\log _{2}(1, 000, 000)\\approx 20\\).</p>
  <p>A <b>transaction</b> is a logical unit of work. <b>ACID</b>: <b>Atomicity</b> (all or nothing), <b>Consistency</b> (database moves from one valid state to another), <b>Isolation</b> (concurrent transactions do not interfere), <b>Durability</b> (committed changes survive failures).</p>
  <div class="formula">START TRANSACTION;</div>
  <div class="formula">UPDATE Account SET bal = bal - 500 WHERE id = 'A';</div>
  <div class="formula">UPDATE Account SET bal = bal + 500 WHERE id = 'B';</div>
  <div class="formula">COMMIT;  -- or ROLLBACK;</div>
  <p>If \\(A=1000\\) and \\(B=200\\), after \\(\\mathrm{COMMIT}\\,A=500, B=700\\) and the total 1200 is preserved. If the system fails after the first UPDATE, atomicity rolls it back.</p>
  <div class="note">Concurrency problems: dirty read, lost update, non-repeatable read. Locks and isolation levels handle them. Do not index every column.</div>`},
 { title:"Programming Concepts & Computer Networking Basics", body:`
  <p><b>Stored procedure:</b> named block of SQL stored in the database, can take IN/OUT parameters and need not return a value. <b>Function:</b> returns a single value and can be used inside a SELECT. Benefits: reuse, less network traffic, security.</p>
  <div class="formula">DELIMITER //</div>
  <div class="formula">CREATE PROCEDURE GetDept(IN d INT)</div>
  <div class="formula">BEGIN SELECT * FROM Student WHERE dept_id = d; END //</div>
  <div class="formula">DELIMITER ;   CALL GetDept(10);</div>
  <div class="formula">CREATE FUNCTION Grade(m INT) RETURNS CHAR(1)</div>
  <div class="formula">DETERMINISTIC \\(\\displaystyle \\mathrm{RETURN}\\,IF(m>=80, 'A', 'B')\\);</div>
  <p>SELECT Grade(85); returns A (MySQL syntax). <b>Arrays:</b> an ordered collection indexed by position (x[1], x[2] ...); standard SQL tables play the role of arrays, while Oracle PL/SQL has VARRAY and programming languages like R, C, Python have native arrays. <b>Macros:</b> named, reusable code that is expanded in place, e.g. in SAS: %macro hi(n); %put Hello &amp;n; %mend; %hi(Ali); prints Hello Ali.</p>
  <p><b>Computer and network basics:</b> hardware (CPU, RAM, storage, I/O), software (system vs application). Network types: LAN, MAN, WAN. IP address identifies a host; DNS maps names to IPs; the OSI model has 7 layers (Physical, Data link, Network, Transport, Session, Presentation, Application); TCP/IP has 4. Client–server is the common architecture for databases.</p>
  <div class="note">RAM is volatile, disk is persistent. TCP is reliable, UDP is faster but unreliable. Remember DELIMITER when writing procedures in the MySQL client.</div>`}
]},
{ id:"doe", name:"Design and Analysis of Experiments I", topics:[
 { title:"Principles of Design & CRD", body:`
  <p>Three basic principles: <b>Replication</b> (repeat each treatment to estimate error and increase precision), <b>Randomization</b> (random allocation of treatments to units, removes bias and justifies the F-test), and <b>Local control</b> (blocking, grouping similar units to reduce error). In a <b>Completely Randomized Design (CRD)</b> t treatments are allocated at random to N homogeneous units; it is used when the material is uniform (lab, pot experiments).</p>
  <div class="formula">Model: \\(\\displaystyle y_{ij}=\\mu +\\tau_{i}+\\varepsilon_{ij}, \\varepsilon_{ij}\\sim N(0, \\sigma^{2})\\)</div>
  <div class="formula">df: treatment \\(\\displaystyle =t-1\\), error \\(\\displaystyle =N-t\\), total \\(\\displaystyle =N-1\\)</div>
  <p><b>Example:</b> \\(t=4\\) treatments, \\(r=5\\) replicates each, so \\(N=20\\). Treatment \\(\\mathrm{df}=3\\), error \\(\\mathrm{df}=20-4=16\\), total \\(\\mathrm{df}=19(3+16=19)\\).</p>
  <div class="note">Advantages of CRD: simple, flexible, missing units are easy to handle. Disadvantage: inefficient if units are not homogeneous. Do not confuse replication with repeated measurement on the same unit.</div>`},
 { title:"One-way ANOVA (Equal & Unequal Replicates)", body:`
  <p>We split total variation into between-treatment and within-treatment parts and compare their mean squares by an F-test of \\(H_{0}:\\tau _{1}=\\ldots =\\tau _{t}=0\\).</p>
  <div class="vis" data-vis="anova"></div>
  <div class="formula">\\(\\displaystyle CF=\\frac{G^{2}}{N}, \\mathrm{TSS}=\\sum y_{ij}^{2}-CF\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{SSTr}=\\sum \\frac{T_{i}^{2}}{r_{i}}-CF, \\mathrm{SSE}=\\mathrm{TSS}-\\mathrm{SSTr}\\)</div>
  <div class="formula">\\(\\displaystyle F=[\\frac{\\mathrm{SSTr}}{t-1}]/[\\frac{\\mathrm{SSE}}{N-t}]\\)</div>
  <p>For unequal replicates just use \\(r_{i}\\) in each term \\((T_{i}^{2}/r_{i})\\) and \\(N=\\sum r_{i}\\).</p>
  <p><b>Example:</b> \\(A:6, 8, 7, 7(T=28);B:9, 11, 10, 10(T=40);C:5, 4, 6, 5(T=20)\\). \\(G=88, N=12, CF=7744/12=645.33\\). \\(\\sum y^{2}=198+402+102=702\\), so \\(\\mathrm{TSS}=56.67\\). \\(\\mathrm{SSTr}=(784+1600+400)/4-CF=696-645.33=50.67\\). \\(\\mathrm{SSE}=6\\). \\(\\mathrm{MSTr}=50.67/2=25.33, \\mathrm{MSE}=6/9=0.667\\), <b>\\(F=38.0\\)</b> with (2, 9) df. Since \\(F_{0}._{05}(2, 9)=4.26\\), reject \\(H_{0}\\): treatment means differ.</p>
  <div class="note">Always compute CF first and subtract it. SSE can never be negative; if it is, check arithmetic. A significant F only says some means differ; use multiple comparison to find which.</div>`},
 { title:"Two-way ANOVA & Randomized Block Design", body:`
  <p>In an <b>RBD</b>, units are grouped into b blocks, each containing all t treatments once, and randomization is done within each block. Block variation is removed from error.</p>
  <div class="formula">Model: \\(\\displaystyle y_{ij}=\\mu +\\tau_{i}+\\beta_{j}+\\varepsilon_{ij}\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{SSTr}=\\sum \\frac{T_{i}^{2}}{b}-CF, \\mathrm{SSB}=\\sum \\frac{B_{j}^{2}}{t}-CF\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{SSE}=\\mathrm{TSS}-\\mathrm{SSTr}-\\mathrm{SSB}\\) , error \\(\\displaystyle \\mathrm{df}=(t-1)(b-1)\\)</div>
  <p><b>Example:</b> \\(t=3, b=3\\). Treatment 1: 4,5,7; Treatment 2: 6,7,8; Treatment 3: 8,10,9 (columns = blocks). \\(G=64, CF=4096/9=455.11, \\sum y^{2}=484, \\mathrm{TSS}=28.89\\). \\(\\mathrm{SSTr}=1426/3-CF=20.22, \\mathrm{SSB}=1384/3-CF=6.22, \\mathrm{SSE}=2.44(4\\,\\mathrm{df})\\). \\(\\mathrm{MSTr}=10.11, \\mathrm{MSE}=0.611\\), <b>\\(F=16.55\\)</b> (2,4 df). \\(F_{0}._{05}(2, 4)=6.94\\), so treatments differ significantly.</p>
  <div class="note">Blocks are not tested for treatment effect; the block F only shows if blocking was useful. Relative efficiency of RBD over CRD can be checked from MSB and MSE.</div>`},
 { title:"Fixed, Random & Mixed Models", body:`
  <p><b>Fixed effects:</b> the levels are chosen specifically and inference is only about those levels \\((\\sum \\tau _{i}=0)\\). <b>Random effects:</b> levels are a random sample from a large population; \\(\\tau _{i}\\sim N(0, \\sigma ^{2}_{\\tau })\\) and we estimate variance components. <b>Mixed:</b> some factors fixed, some random. The choice changes the expected mean squares and so the denominator of the F-test.</p>
  <div class="formula">One-way random: \\(\\displaystyle E(\\mathrm{MSTr})=\\sigma^{2}+r\\sigma^{2}_{\\tau}, E(\\mathrm{MSE})=\\sigma^{2}\\)</div>
  <div class="formula">σ̂\\(\\displaystyle ^{2}_{\\tau}=\\frac{\\mathrm{MSTr}-\\mathrm{MSE}}{r}\\)</div>
  <div class="formula">Two factors A (a levels), B (b levels), n replicates:</div>
  <ul><li>Both fixed: test A, B, AB all against MSE.</li><li>Both random: test A and B against \\(\\mathrm{MS}(AB);AB\\) against MSE.</li><li>A fixed, B random (mixed): A against \\(\\mathrm{MS}(AB);B\\) and AB against MSE.</li></ul>
  <p><b>Example:</b> With \\(\\mathrm{MSTr}=25.33, \\mathrm{MSE}=0.667\\) and \\(r=4\\), σ̂\\(^{2}_{\\tau }=(25.33-0.667)/4\\) = <b>6.17</b>.</p>
  <div class="note">Classic mistake: using MSE as denominator for a fixed factor in a mixed model. Write the EMS column first, then pick the denominator whose EMS differs only by the term being tested.</div>`},
 { title:"Model Adequacy Checking", body:`
  <p>ANOVA assumes errors are independent, normal, with constant variance. We check these using residuals \\(e_{ij}=y_{ij}-\\hat{y}_{ij}\\).</p>
  <ul><li><b>Normality:</b> normal probability plot of residuals, or Shapiro–Wilk test.</li><li><b>Constant variance:</b> plot residuals vs fitted values (funnel shape means trouble); Bartlett's test (sensitive to non-normality) or Levene's test.</li><li><b>Independence:</b> plot residuals in time order; randomization protects us.</li></ul>
  <div class="formula">\\(\\displaystyle \\mathrm{CRD}:e_{ij}=y_{ij}-\\bar{y}_{i}\\).</div>
  <div class="formula">\\(\\displaystyle \\mathrm{RBD}:e_{ij}=y_{ij}-\\bar{y}_{i}\\). \\(\\displaystyle -\\bar{y}._{j}+\\bar{y}\\)..</div>
  <p><b>Example:</b> Group A (6,8,7,7) has mean 7, so residuals are \\(-1, +1, 0, 0\\) and they sum to zero (a residual check). If variance grows with the mean, use a variance stabilizing transformation: \\(\\sqrt{y}\\) for Poisson counts, log y when \\(\\sigma \\propto\\) mean, \\(\\arcsin \\sqrt{p}\\) for proportions.</p>
  <div class="note">Residuals in a CRD always sum to zero within each treatment, that is not evidence of normality. F-test is fairly robust to mild non-normality, but less robust to unequal variance when group sizes are unequal.</div>`},
 { title:"Multiple Comparison Procedures", body:`
  <p>After rejecting \\(H_{0}\\) in ANOVA, we compare pairs of means. Doing many t-tests inflates the type I error, so we use special procedures.</p>
  <ul><li><b>LSD:</b> \\(t\\sqrt{2\\mathrm{MSE}/r}\\), no protection against inflation.</li><li><b>Tukey (HSD):</b> controls the experimentwise error for all pairs, uses studentized range q.</li><li><b>Newman–Keuls and Duncan:</b> step-wise range tests, critical value depends on the number of means spanned (Duncan is more liberal).</li><li><b>Dunnett:</b> compares every treatment with a control only.</li><li><b>Bonferroni:</b> use \\(\\alpha /m\\) for each of m comparisons.</li></ul>
  <div class="formula">Tukey: \\(\\displaystyle T=q_{\\alpha}(t, \\mathrm{df}_{E})\\cdot \\sqrt{\\frac{\\mathrm{MSE}}{r}}\\)</div>
  <p><b>Example:</b> Means \\(A=7, B=10, C=5, \\mathrm{MSE}=0.667, r=4, \\mathrm{df}=9\\). \\(q_{0}._{05}(3, 9)=3.95, \\mathrm{SE}=\\sqrt{0.667/4}=0.408\\), so \\(T=1.61\\). Differences: \\(B-A=3, A-C=2, B-C=5\\), all greater than 1.61, so all three pairs differ. With Bonferroni, \\(m=3\\) and each test uses \\(\\alpha =0.05/3=0.0167\\).</p>
  <div class="note">Order of strictness: Tukey is more conservative than Newman–Keuls, which is more conservative than Duncan. Do not use Tukey for unequal r without adjustment (Tukey–Kramer).</div>`},
 { title:"Latin Square, Graeco-Latin & Missing Plot", body:`
  <p>A <b>Latin square</b> \\((p\\times p)\\) controls two blockings (rows and columns): each treatment appears once in each row and column. A <b>Graeco-Latin square</b> superimposes a second orthogonal Latin square (Greek letters) to control a third blocking factor; it exists for \\(p\\ge 3\\) except \\(p=6\\).</p>
  <div class="vis" data-vis="latin"></div>
  <div class="formula">LSD error \\(\\displaystyle \\mathrm{df}=(p-1)(p-2)\\)</div>
  <div class="formula">Graeco-Latin error \\(\\displaystyle \\mathrm{df}=(p-1)(p-3)\\)</div>
  <p>For \\(p=4\\): Latin square error \\(\\mathrm{df}=6\\), Graeco-Latin error \\(\\mathrm{df}=3\\) (total 15).</p>
  <p><b>Missing plot technique:</b> estimate the lost value x by minimizing SSE, then do ANOVA and reduce error df and total df by 1.</p>
  <div class="formula">\\(\\displaystyle \\mathrm{RBD}:x=\\frac{tT'+bB'-G'}{(t-1)(b-1)}\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{LSD}:x=\\frac{p(R'+C'+T')-2G'}{(p-1)(p-2)}\\)</div>
  <p><b>Example (RBD):</b> \\(t=4, b=4, T'=30, B'=28, G'=120\\) (all totals without the missing value). \\(x=(120+112-120)/9=112/9\\) = <b>12.44</b>.</p>
  <div class="note">Primes mean totals of the observed values only. Treatment SS in presence of a missing plot is biased upward, so use the corrected treatment SS if testing carefully.</div>`},
 { title:"2ᵏ Factorial Designs", body:`
  <p>\\(A2^{k}\\) design has k factors each at two levels (low/high). Total \\(2^{k}\\) treatment combinations, written \\((1), a, b, ab, \\ldots\\) Main effects and interactions are found by contrasts.</p>
  <div class="vis" data-vis="factorial"></div>
  <div class="formula">Effect \\(\\displaystyle A=[a+ab-b-(1)]/(2n)\\)</div>
  <div class="formula">Effect \\(\\displaystyle B=[b+ab-a-(1)]/(2n)\\)</div>
  <div class="formula">Effect \\(\\displaystyle AB=[ab+(1)-a-b]/(2n)\\)</div>
  <div class="formula">SS = (Contrast)\\(\\displaystyle \\frac{^{2}}{4n}\\) for \\(\\displaystyle a2^{2}\\) design</div>
  <p><b>Example:</b> \\(n=3\\) replicates; totals \\((1)=60, a=90, b=75, ab=105\\). Contrast \\(A=90+105-75-60=60\\), so Effect \\(A=60/6=10\\) and \\(\\mathrm{SSA}=3600/12=300\\). Contrast \\(B=75+105-90-60=30\\), Effect \\(B=5, \\mathrm{SSB}=900/12=75\\). Contrast \\(AB=105+60-90-75=0\\), so no interaction and \\(\\mathrm{SSAB}=0\\).</p>
  <div class="note">In general SS = (contrast)\\(^{2}/(n\\cdot 2^{k})\\). Signs for AB come by multiplying the signs of A and B. Interpret main effects carefully when interaction is large.</div>`}
]},
{ id:"inf", name:"Statistical Inference", topics:[
 { title:"Estimation: Properties of Good Estimators", body:`
  <ul><li><b>Unbiased:</b> E[θ̂] \\(=\\theta\\).</li>
  <li><b>Consistent:</b> θ̂\\(_{n}\\to \\theta\\) in probability as \\(n\\to \\infty\\).</li>
  <li><b>Efficient:</b> smallest variance among unbiased estimators (attains the Cramér–Rao lower bound).</li>
  <li><b>Sufficient:</b> contains all information about \\(\\theta\\) in the sample. <i>Factorization theorem:</i> \\(f(x;\\theta )=g(T(x);\\theta )\\cdot h(x)\\).</li></ul>
  <div class="formula">Cramér–Rao: Var(θ̂) \\(\\displaystyle \\ge \\frac{1}{nI(\\theta)}\\),&nbsp; \\(\\displaystyle I(\\theta)=E[(\\partial \\ln \\,\\frac{f}{\\partial} \\theta)^{2}]\\)</div>
  <p>Mean squared error: MSE(θ̂) \\(=\\mathrm{Var}\\)(θ̂) + Bias(θ̂)².</p>`},
 { title:"Maximum Likelihood Estimation (MLE)", body:`
  <p>The MLE maximizes the likelihood \\(L(\\theta )=\\Pi f(x_{i};\\theta )\\), usually by solving \\(d\\,\\ln \\,L/d\\theta =0\\).</p>
  <div class="vis" data-vis="mle"></div>
  <p><b>Example (Exponential with mean \\(1/\\lambda\\)):</b> \\(\\ln \\,L=n\\,\\ln \\,\\lambda -\\lambda \\sum x_{i}\\Rightarrow\\) λ̂ \\(=n/\\sum x_{i}=1/\\bar{x}\\).</p>
  <p><b>Example (Normal):</b> μ̂ \\(=\\bar{x}\\), σ̂\\(^{2}=(1/n)\\sum (x_{i}-\\bar{x})^{2}\\) (biased; the unbiased version divides by \\(n-1\\)).</p>
  <div class="note">Invariance: if θ̂ is the MLE of \\(\\theta\\) then g(θ̂) is the MLE of \\(g(\\theta )\\). Under regularity conditions the MLE is consistent and asymptotically Normal with variance \\(1/(nI(\\theta ))\\).</div>`},
 { title:"Hypothesis Testing Basics", body:`
  <ul><li><b>Type I error \\((\\alpha )\\):</b> reject \\(H_{0}\\) when it is true.</li>
  <li><b>Type II error \\((\\beta )\\):</b> accept \\(H_{0}\\) when it is false.</li>
  <li><b>Power</b> \\(=1-\\beta\\).</li>
  <li><b>p-value:</b> probability, under \\(H_{0}\\), of a result at least as extreme as observed. Reject \\(H_{0}\\) if \\(p&lt;\\alpha\\).</li></ul>
  <p><b>Neyman–Pearson Lemma:</b> for simple \\(H_{0}:\\theta =\\theta _{0}\\) vs \\(H_{1}:\\theta =\\theta _{1}\\), the most powerful test of size \\(\\alpha\\) rejects when</p>
  <div class="vis" data-vis="power"></div>
  <div class="formula">\\(\\displaystyle \\frac{L(\\theta_{1})}{L(\\theta_{0})}>k\\)</div>
  <p><b>Likelihood Ratio Test:</b> \\(\\Lambda =\\sup _{H_{0}}L/\\sup \\,L\\). Under \\(H_{0}, -2\\,\\ln \\,\\Lambda \\to \\chi ^{2}\\) with df = difference in number of free parameters.</p>`},
 { title:"Common Tests (z, t, χ², F)", body:`
  <ul>
  <li><b>z-test</b> for mean, \\(\\sigma\\) known: \\(z=(\\bar{x}-\\mu _{0})/(\\sigma /\\sqrt{n})\\).</li>
  <li><b>t-test</b> for mean, \\(\\sigma\\) unknown: \\(t=(\\bar{x}-\\mu _{0})/(s/\\sqrt{n}), \\mathrm{df}=n-1\\).</li>
  <li><b>Two-sample t</b> (equal variances): \\(t=(\\bar{x}_{1}-\\bar{x}_{2})/(s_{p}\\sqrt{1/n_{1}+1/n_{2}}), \\mathrm{df}=n_{1}+n_{2}-2\\).</li>
  <li><b>\\(\\chi ^{2}\\) test for variance:</b> \\((n-1)s^{2}/\\sigma _{0}^{2}\\sim \\chi ^{2}_{n-1}\\).</li>
  <li><b>F-test</b> for equality of variances: \\(F=s_{1}^{2}/s_{2}^{2}\\sim F(n_{1}-1, n_{2}-1)\\).</li>
  <li><b>\\(\\chi ^{2}\\) goodness of fit:</b> \\(\\sum (O-E)^{2}/E, \\mathrm{df}=k-1-\\) (number of estimated parameters).</li></ul>`},
 { title:"Confidence Intervals", body:`
  <p>\\(A100(1-\\alpha )\\)% confidence interval for \\(\\mu\\) (\\(\\sigma\\) unknown):</p>
  <div class="vis" data-vis="dist"></div>
  <div class="vis" data-vis="ci"></div>
  <div class="formula">\\(\\displaystyle \\bar{x}\\pm t(\\frac{\\alpha}{2}, n-1)\\cdot \\frac{s}{\\sqrt{n}}\\)</div>
  <p>Interpretation: if we repeated the sampling many times, about \\(100(1-\\alpha )\\)% of such intervals would contain the true \\(\\mu\\). It is <b>not</b> "the probability that \\(\\mu\\) is in this particular interval".</p>
  <p>For a proportion: \\(\\hat{p}\\pm z(\\alpha /2)\\sqrt{\\hat{p}(1-\\hat{p})/n}\\). For variance: \\([(n-1)s^{2}/\\chi ^{2}(\\alpha /2), (n-1)s^{2}/\\chi ^{2}(1-\\alpha /2)]\\).</p>`},
 { title:"Cramér–Rao Lower Bound & Efficiency", body:`
  <p>Under regularity conditions, the variance of any unbiased estimator T of \\(\\theta\\) cannot go below a fixed bound. An unbiased estimator that reaches the bound is the <b>MVUE</b> (efficient estimator).</p>
  <div class="formula">\\(\\displaystyle \\mathrm{Var}(T)\\ge \\frac{1}{I(\\theta)}, I(\\theta)=n\\cdot E[(\\partial \\ln \\,\\frac{f}{\\partial} \\theta)^{2}]\\)</div>
  <div class="formula">\\(\\displaystyle I(\\theta)=-n\\cdot E[\\partial^{2}\\ln \\,\\frac{f}{\\partial} \\theta^{2}]\\)</div>
  <div class="formula">Efficiency \\(\\displaystyle =[\\frac{1}{I(\\theta)}]/\\mathrm{Var}(T)\\le 1\\)</div>
  <p><b>Example:</b> \\(X\\sim N(\\mu , \\sigma ^{2}=16), n=25\\). \\(I(\\mu )=n/\\sigma ^{2}=25/16\\), bound \\(=16/25=0.64\\). \\(\\mathrm{Var}(\\bar{x})=\\sigma ^{2}/n=0.64\\) which equals the bound, so x̄ is efficient (efficiency 1). For Bernoulli(p) with \\(p=0.4, n=100\\): bound \\(=p(1-p)/n=0.24/100=0.0024\\).</p>
  <div class="note">CRLB does not apply when the range of X depends on \\(\\theta\\) (e.g. \\(U(0, \\theta )\\)). It is for unbiased estimators; for a biased estimator the numerator becomes \\([1+b'(\\theta )]^{2}\\).</div>`},
 { title:"Sufficiency & Factorization Theorem", body:`
  <p>A statistic T is <b>sufficient</b> for \\(\\theta\\) if the conditional distribution of the sample given T does not depend on \\(\\theta\\), i.e. T holds all the information about \\(\\theta\\) in the data.</p>
  <div class="formula">Neyman factorization: \\(\\displaystyle L(x;\\theta)=g(T(x), \\theta)\\cdot h(x)\\)</div>
  <p>T is sufficient if and only if the likelihood factors like this, where h does not involve \\(\\theta\\).</p>
  <p><b>Example:</b> \\(X_{1}, \\ldots , X_{n}\\sim\\) Poisson\\((\\lambda )\\). \\(L=e^{-n\\lambda }\\lambda ^{\\sum x_{i}}/\\Pi x_{i}\\)!. Take \\(g=e^{-n\\lambda }\\lambda ^{\\sum x_{i}}\\) which depends on data only through \\(T=\\sum x_{i}\\), and \\(h=1/\\Pi x_{i}\\)!. So \\(\\sum x_{i}\\) is sufficient for \\(\\lambda\\). For \\(N(\\mu , 1), \\sum x_{i}\\) (equivalently x̄) is sufficient. For \\(U(0, \\theta )\\), the maximum \\(X_{(n)}\\) is sufficient.</p>
  <div class="note">Any one-to-one function of a sufficient statistic is sufficient. Rao–Blackwell: conditioning an unbiased estimator on a sufficient statistic never increases variance. Do not forget the indicator function (range) in the likelihood when it depends on \\(\\theta\\).</div>`},
 { title:"Method of Moments & Bayes Estimation", body:`
  <p><b>Method of moments:</b> equate population moments to sample moments and solve for the parameters: \\(E(X)=\\bar{x}\\) (and \\(E(X^{2})=(1/n)\\sum x_{i}^{2}\\) for a second parameter). Simple, but not always efficient.</p>
  <p><b>Bayes estimation:</b> treat \\(\\theta\\) as random with prior \\(\\pi (\\theta )\\). Posterior ∝ likelihood × prior. Under squared error loss, the Bayes estimator is the posterior mean.</p>
  <div class="formula">\\(\\displaystyle \\pi (\\theta |x)\\propto L(x|\\theta)\\cdot \\pi (\\theta)\\)</div>
  <div class="formula">Binomial + Beta\\(\\displaystyle (\\alpha , \\beta)\\): posterior Beta\\(\\displaystyle (\\alpha +x, \\beta +n-x)\\)</div>
  <div class="formula">Posterior mean \\(\\displaystyle =\\frac{\\alpha +x}{\\alpha +\\beta +n}\\)</div>
  <p><b>Example 1:</b> \\(X\\sim U(0, \\theta ), E(X)=\\theta /2\\), so θ̂ \\(=2\\bar{x}\\). If \\(\\bar{x}=5\\) then θ̂ \\(=10\\).</p>
  <p><b>Example 2:</b> Prior Beta\\((2, 2), n=10\\) trials, \\(x=7\\) successes. Posterior is Beta(9,5), Bayes estimate \\(=9/14\\) = <b>0.643</b>, compared with MLE 0.7.</p>
  <div class="note">Absolute error loss gives the posterior median instead of the mean. The method of moments estimate for \\(U(0, \\theta )\\) can be smaller than the sample maximum, which is impossible, a known weakness.</div>`},
 { title:"Neyman–Pearson Lemma & UMP Tests", body:`
  <p>For testing a simple \\(H_{0}:\\theta =\\theta _{0}\\) against a simple \\(H_{1}:\\theta =\\theta _{1}\\), the most powerful test of size \\(\\alpha\\) rejects \\(H_{0}\\) when the likelihood ratio is large.</p>
  <div class="formula">Reject \\(\\displaystyle H_{0}\\) if \\(\\displaystyle \\frac{L(\\theta_{1};x)}{L(\\theta_{0};x)}>k\\)</div>
  <div class="formula">with k chosen so that P(reject \\(\\displaystyle |H_{0}\\)) \\(\\displaystyle =\\alpha\\)</div>
  <p>If the same test is best for every \\(\\theta _{1}\\) in a composite alternative (for example all \\(\\theta _{1}>\\theta _{0}\\)), it is <b>Uniformly Most Powerful (UMP)</b>.</p>
  <p><b>Example:</b> \\(X\\sim N(\\mu , \\sigma ^{2}=4), n=16, H_{0}:\\mu =0\\) vs \\(H_{1}:\\mu =1\\). The ratio is increasing in x̄, so reject if \\(\\bar{x}>c\\). \\(\\mathrm{SE}=2/4=0.5, \\alpha =0.05\\) gives \\(c=1.645\\times 0.5=0.8225\\). Power \\(=P(\\bar{x}>0.8225|\\mu =1)=P(Z>-0.355)=\\Phi (0.355)\\approx\\) <b>0.639</b>. Since this test does not depend on the particular \\(\\mu _{1}>0\\), it is UMP for \\(H_{1}:\\mu >0\\).</p>
  <div class="note">No UMP test exists for the two-sided alternative \\(\\mu \\ne \\mu _{0}\\) in general. Power \\(=1-\\beta\\). For discrete distributions, size \\(\\alpha\\) may need randomization.</div>`}
]},
{ id:"sim", name:"Statistical Simulation and Data Analysis with R and Python", topics:[
 { title:"Random Number Generation: LCG", body:`
  <p>Computers produce <b>pseudo-random</b> numbers by a deterministic recursion. The most common is the Linear Congruential Generator (LCG). Dividing by m gives numbers in [0,1) that behave like \\(U(0, 1)\\).</p>
  <div class="formula">\\(\\displaystyle X_{n+1}=(a\\cdot X_{n}+c)\\operatorname{mod}\\,m\\)</div>
  <div class="formula">\\(\\displaystyle U_{n}=\\frac{X_{n}}{m}\\)</div>
  <p>\\(X_{0}\\) is the seed. The period is at most m; full period needs: c and m coprime, \\(a-1\\) divisible by every prime factor of m, and by 4 if 4 divides m (Hull–Dobell).</p>
  <p><b>Example:</b> \\(a=5, c=1, m=16, X_{0}=1\\). \\(X_{1}=6, X_{2}=(30+1)\\operatorname{mod}\\,16=15, X_{3}=76\\,\\operatorname{mod}\\,16=12, X_{4}=61\\,\\operatorname{mod}\\,16=13, X_{5}=66\\,\\operatorname{mod}\\,16=2\\). So \\(U_{1}=6/16=0.375, U_{2}=15/16=0.9375\\).</p>
  <div class="formula">lcg = function(n, seed, \\(\\displaystyle a=5, c=1, m=16\\)) {<br>&nbsp;x = numeric(n); s = seed<br>&nbsp;for (i in 1:n) { \\(\\displaystyle s=(a*s+c)\\) %% \\(\\displaystyle m;x[i]=\\frac{s}{m}\\) }<br>&nbsp;x }</div>
  <div class="note">Same seed gives same sequence (use set.seed in R, for reproducibility). Tests of randomness: chi-square uniformity test, runs test, serial correlation.</div>`},
 { title:"Inverse Transform Method", body:`
  <p>If F is the CDF of X and \\(U\\sim U(0, 1)\\), then \\(X=F^{-1}(U)\\) has CDF F. For discrete X, take the smallest x with \\(F(x)\\ge U\\).</p>
  <div class="vis" data-vis="invtr"></div>
  <div class="formula">\\(\\displaystyle X=F^{-1}(U)\\)</div>
  <div class="formula">Exponential\\(\\displaystyle (\\lambda):X=-\\ln \\frac{U}{\\lambda}\\)</div>
  <p>(Using \\(1-U\\) or U gives the same distribution, since \\(1-U\\) is also \\(U(0, 1)\\).)</p>
  <p><b>Example 1:</b> Exponential with \\(\\lambda =2\\) and \\(U=0.5:X=-\\ln (0.5)/2=0.6931/2\\) = <b>0.3466</b>.</p>
  <p><b>Example 2 (discrete):</b> \\(P(X=0)=0.3, P(X=1)=0.5, P(X=2)=0.2\\). Cumulative: 0.3, 0.8, 1. If \\(U=0.65\\), then \\(0.3&lt;0.65\\le 0.8\\), so \\(X=1\\).</p>
  <div class="formula">u = runif(1000)<br>\\(\\displaystyle x=-\\log \\frac{u}{2}\\)<br>mean(x)   # close to \\(\\displaystyle \\frac{1}{2}=0.5\\)</div>
  <div class="note">Works well only if \\(F^{-1}\\) is available in closed form (exponential, Weibull, Cauchy, uniform on \\((a, b):a+(b-a)U\\)). The normal needs other methods.</div>`},
 { title:"Acceptance–Rejection Method", body:`
  <p>To sample from density f when \\(F^{-1}\\) is hard, choose an easy proposal density g and a constant c with \\(f(x)\\le c\\cdot g(x)\\) for all x.</p>
  <ul><li>Generate \\(Y\\sim g\\) and \\(U\\sim U(0, 1)\\) independently.</li><li>If \\(U\\le f(Y)/(c\\cdot g(Y))\\), accept \\(X=Y\\); else reject and repeat.</li></ul>
  <div class="formula">P(accept) \\(\\displaystyle =\\frac{1}{c}\\) , expected trials \\(\\displaystyle =c\\)</div>
  <p><b>Example:</b> Beta\\((2, 2):f(x)=6x(1-x)\\) on (0,1). Take \\(g=U(0, 1)\\), so \\(g=1\\). The maximum of f is at \\(x=0.5, f=1.5\\), so \\(c=1.5\\). Accept if \\(U\\le 6Y(1-Y)/1.5=4Y(1-Y)\\). Acceptance probability \\(=1/1.5\\) = <b>2/3</b>. For \\(Y=0.5\\) the test is \\(U\\le 1\\) (always accept); for \\(Y=0.1\\) it is \\(U\\le 0.36\\).</p>
  <div class="formula">x = numeric(0)<br>while (length\\(\\displaystyle (x)&lt;1000\\)) {<br>&nbsp;y = runif(1); u = runif(1)<br>&nbsp;if \\(\\displaystyle (u&lt;=4*y*(1-y))x=c(x, y)\\)<br>}</div>
  <div class="note">Choose the smallest c to waste fewer samples. The target f needs to be known only up to a constant. Do not forget the bound must hold for all x.</div>`},
 { title:"Box–Muller & Simulating Distributions", body:`
  <p>The normal CDF has no closed-form inverse. <b>Box–Muller</b> turns two independent uniforms into two independent standard normals.</p>
  <div class="formula">\\(\\displaystyle Z_{1}=\\sqrt{-2\\,\\ln \\,U_{1}}\\cdot \\cos (2\\pi U_{2})\\)</div>
  <div class="formula">\\(\\displaystyle Z_{2}=\\sqrt{-2\\,\\ln \\,U_{1}}\\cdot \\sin (2\\pi U_{2})\\)</div>
  <div class="formula">\\(\\displaystyle X=\\mu +\\sigma Z\\)  gives \\(\\displaystyle N(\\mu , \\sigma^{2})\\)</div>
  <p><b>Example:</b> \\(U_{1}=0.5, U_{2}=0.25\\). \\(R=\\sqrt{-2\\,\\ln \\,0.5}=\\sqrt{1.3863}=1.1774\\). Angle \\(=2\\pi (0.25)=\\pi /2\\), so \\(Z_{1}=1.1774\\times \\cos (\\pi /2)\\) = <b>0</b> and \\(Z_{2}=1.1774\\times 1\\) = <b>1.177</b>.</p>
  <p>Other distributions from standard ones:</p>
  <ul><li>\\(\\chi ^{2}(k)\\) = sum of k squared \\(N(0, 1)\\).</li><li>Binomial(n,p) = sum of n Bernoulli(p) (\\(U&lt;p\\) gives success).</li><li>Poisson\\((\\lambda )\\): count exponential arrivals in unit time.</li><li>Gamma\\((k, 1/\\lambda )\\) with integer k = sum of k exponentials.</li></ul>
  <div class="formula">chi = rowSums(matrix(rnorm(5000), ncol\\(\\displaystyle =5\\))\\(\\displaystyle ^{2}\\))<br>mean(chi)   # about 5</div>
  <div class="note">Use log base e. Angle in radians. \\(Z_{1}\\) and \\(Z_{2}\\) are independent only if \\(U_{1}, U_{2}\\) independent.</div>`},
 { title:"Monte Carlo Integration", body:`
  <p>To estimate \\(\\theta =\\int _{a}^{b}h(x)\\,\\mathrm{d}x\\), write it as an expectation: with \\(U\\sim U(a, b), \\theta =(b-a)\\cdot E[h(U)]\\). Average h at random points.</p>
  <div class="vis" data-vis="mcpi"></div>
  <div class="formula">θ̂ \\(\\displaystyle =(b-a)\\cdot (\\frac{1}{n})\\sum h(U_{i})\\)</div>
  <div class="formula">SE(θ̂) \\(\\displaystyle =(b-a)\\cdot \\frac{s}{\\sqrt{n}}\\) , error \\(\\displaystyle \\propto \\frac{1}{\\sqrt{n}}\\)</div>
  <p><b>Example:</b> \\(\\theta =\\int _{0}^{1}e^{x}\\,\\mathrm{d}x=e-1=1.71828\\). \\(\\mathrm{Var}(e^{U})=(e^{2}-1)/2-(e-1)^{2}=3.1945-2.9525=0.2420\\), so \\(sd=0.492\\). With \\(n=10, 000, \\mathrm{SE}=0.492/100\\approx\\) <b>0.0049</b>. To halve the error we need 4 times as many points.</p>
  <p><b>Estimating \\(\\pi\\):</b> pick (x,y) uniform in the unit square; the proportion inside \\(x^{2}+y^{2}&lt;1\\) estimates \\(\\pi /4\\). If 7850 of 10,000 fall inside, π̂ \\(=4(0.785)=3.14\\).</p>
  <div class="formula">u = runif(10000)<br>mean\\(\\displaystyle (\\exp (u))\\)   # about 1.718</div>
  <div class="note">Variance reduction: antithetic variables (use U and \\(1-U\\)), control variates, importance sampling. Accuracy depends on n, not on the dimension, which is why MC is good for high dimensions.</div>`},
 { title:"R Basics: Data Frames, Loops, Functions, apply", body:`
  <p>R is vector-based; most operations work on a whole vector at once. Assignment uses <b>&lt;-</b> or =. Indexing starts at 1.</p>
  <div class="formula">\\(\\displaystyle x&lt;-c(4, 8, 6, 2)\\)<br>mean(x); sd(x); sum\\(\\displaystyle (x^{2})\\)<br>\\(\\displaystyle x[x>3]\\)    # logical subsetting</div>
  <div class="formula">\\(\\displaystyle \\mathrm{df}&lt;\\)- data.frame(\\(\\displaystyle g=c\\)("a","b","a","b"),<br>&nbsp;\\(\\displaystyle v=c(4, 8, 6, 2)\\))<br>df$v; df[df$g == "a", ]<br>aggregate(\\(\\displaystyle v\\sim g, \\mathrm{df}\\), mean)</div>
  <div class="formula">\\(\\displaystyle sq&lt;\\)- function(n) { \\(\\displaystyle s&lt;-0\\)<br>&nbsp;for (i in 1:n) \\(\\displaystyle s&lt;-s+i^{2}\\)<br>&nbsp;s }<br>sq(3)   # 14</div>
  <div class="formula">sapply(df[ , "v", drop\\(\\displaystyle =\\mathrm{FALSE}\\)], mean)<br>tapply(df$v, df$g, mean)</div>
  <p><b>Example:</b> For x above, mean \\(=20/4=5\\) and \\(sd=\\sqrt{20/3}=2.58\\). Group means in \\(\\mathrm{df}:a=(4+6)/2=5, b=(8+2)/2=5\\). And \\(sq(3)=1+4+9=14\\).</p>
  <div class="note">apply family avoids explicit loops: apply (matrix rows/cols), sapply/lapply (lists, columns), tapply (by group). sd() uses \\(n-1\\). Remember %% is modulus and ^ is power.</div>`},
 { title:"Python Equivalents: numpy, pandas & Plots", body:`
  <p>Python uses numpy for arrays and random numbers, pandas for data frames, matplotlib for graphs. Indexing starts at 0. Lists are not vectors; use numpy arrays for arithmetic.</p>
  <div class="formula">import numpy as np, pandas as pd<br>import matplotlib.pyplot as plt<br>rng = np.random.default_rng(1)   # seed<br>x = np.array([4, 8, 6, 2])<br>x.mean(); x.std(ddof=1); x[x &gt; 3]</div>
  <div class="formula">\\(\\displaystyle \\mathrm{df}=pd\\).DataFrame({"g": ["a","b","a","b"],<br>&nbsp;"v": [4, 8, 6, 2]})<br>df["v"].describe()<br>df.groupby("g")["v"].mean()</div>
  <div class="formula">\\(\\displaystyle z=rng\\).normal(50, 10, 200)<br>plt.hist(z, bins\\(\\displaystyle =10\\)); plt.show()<br>plt.boxplot(z); plt.show()</div>
  <p><b>Example:</b> x.mean\\(()=5.0, x.std\\)(ddof\\(=1\\)) \\(=2.58\\) (without ddof\\(=1\\) numpy gives the population value \\(\\sqrt{5}=2.24\\)). Group means: \\(a=5, b=5\\).</p>
  <p>R to Python: summary(x) is describe(); rnorm is rng.normal; runif is rng.uniform; sapply is a list comprehension or df.apply; hist(x) is plt.hist(x).</p>
  <div class="note">Common error: numpy std divides by n by default, R sd divides by \\(n-1\\). Use plots (histogram, boxplot, scatter, \\(Q-Q\\) plot) along with summary statistics (mean, median, sd, quartiles) before any modelling.</div>`},
 { title:"Simulating Tests: Type I Error, Power & CI Coverage", body:`
  <p>Simulation checks how a statistical procedure behaves in repeated sampling: generate many samples from a known model, apply the procedure each time, and study the results.</p>
  <div class="vis" data-vis="ci"></div>
  <ul><li><b>Type I error:</b> simulate under \\(H_{0}\\), the rejection rate should be about \\(\\alpha\\).</li><li><b>Power:</b> simulate under a specific \\(H_{1}\\), rejection rate estimates power.</li><li><b>CI coverage:</b> proportion of intervals containing the true parameter should be about \\(1-\\alpha\\).</li></ul>
  <div class="formula">set.seed(1); cover \\(\\displaystyle &lt;-0\\)<br>for (i in 1:1000) {<br>&nbsp;\\(\\displaystyle x&lt;\\)- rnorm(20, 10, 2)<br>&nbsp;\\(\\displaystyle ci&lt;-t\\).test(x)$conf.int<br>&nbsp;if (\\(\\displaystyle ci[1]&lt;10\\) &amp;&amp; \\(\\displaystyle 10&lt;ci[2]\\)) cover &lt;- cover \\(\\displaystyle +1\\)<br>}<br>cover/1000   # about 0.95</div>
  <p><b>Example:</b> With 1000 replications and true coverage 0.95, the Monte Carlo SE is \\(\\sqrt{0.95\\times 0.05/1000}=0.0069\\). So an observed coverage between about 0.936 and \\(0.964(\\pm 2\\,\\mathrm{SE})\\) is consistent with 95%. The same loop with t.test\\((x, mu=10)\\)$p.value \\(&lt;0.05\\) estimates the type I error, again near 0.05.</p>
  <div class="note">Always set a seed for reproducibility. More replications give a smaller Monte Carlo error. Coverage of a z-interval with small n and unknown \\(\\sigma\\) falls below 95%, a nice simulation demonstration.</div>`}
]},
{ id:"lp", name:"Linear Programming", topics:[
 { title:"Formulation & Graphical Method", body:`
  <p>An LP has a linear objective, linear constraints and non-negative variables. Steps: (1) define decision variables, (2) write the objective, (3) write constraints, \\((4)add\\,x\\ge 0\\).</p>
  <div class="vis" data-vis="lp"></div>
  <p><b>Example:</b> A firm makes tables (x) with profit 3 and chairs (y) with profit 2 (per unit). Carpentry limit: \\(x+y\\le 4\\); finishing limit: \\(x+3y\\le 6\\).</p>
  <div class="formula">Max \\(\\displaystyle Z=3x+2y\\)</div>
  <div class="formula">s.t. \\(\\displaystyle x+y\\le 4, x+3y\\le 6, x, y\\ge 0\\)</div>
  <p><b>Graphical method (2 variables):</b> plot the constraints, shade the feasible region, find its corner points and evaluate Z. Corners: \\((0, 0)Z=0;(4, 0)Z=12;(3, 1)Z=11\\) (intersection of the two lines); \\((0, 2)Z=4\\). Maximum is <b>\\(Z=12\\) at (4,0)</b>.</p>
  <div class="note">The optimum, if it exists, is at a corner point of the feasible region. Special cases: multiple optima (objective parallel to a constraint), unbounded solution, infeasible (empty region). Always check the optimal point in every constraint.</div>`},
 { title:"Simplex Method (Worked Tableau)", body:`
  <p>Convert ≤ constraints to equations by adding slack variables. Start from the origin (slacks are the basic variables), then repeatedly pivot: choose the entering variable (most negative Z-row entry for max), the leaving variable by the minimum ratio test, and do row operations. Stop when no Z-row entry is negative.</p>
  <div class="formula">Max \\(\\displaystyle Z=3x+2y;x+y+s_{1}=4;x+3y+s_{2}=6\\)</div>
  <div class="formula">Initial: Z-row: \\(\\displaystyle x-3|y-2|s_{1}0|s_{2}0|\\mathrm{RHS}\\,0\\)<br>\\(\\displaystyle s_{1}:1110|4\\)<br>\\(\\displaystyle s_{2}:1301|6\\)</div>
  <p>x enters \\((-3)\\). Ratios: \\(4/1=4, 6/1=6\\), so \\(s_{1}\\) leaves. Pivot on the 1 in \\(s_{1}\\) row. New rows: \\(x:1110|4;s_{2}=R_{2}-R_{1}:02-11|2;Z=Z+3R_{1}:0130|12\\).</p>
  <div class="formula">Final Z-row: \\(\\displaystyle x0|y1|s_{1}3|s_{2}0|\\mathrm{RHS}\\,12\\)</div>
  <p>All entries \\(\\ge 0\\), so optimal: <b>\\(x=4, y=0, s_{2}=2, Z=12\\)</b> (matches the graph). Z-row entries under slacks (3 and 0) are the shadow prices.</p>
  <div class="note">Ratio test only uses positive entries in the pivot column. A tie in ratios means degeneracy. If a non-basic variable has zero in the final Z-row, alternative optima exist.</div>`},
 { title:"Big-M and Two-Phase Methods", body:`
  <p>When constraints are ≥ or =, we cannot start from the origin. Add <b>artificial variables</b> (A) to get a starting basis, but force them out of the solution.</p>
  <p><b>Big-M:</b> \\(add-M\\cdot A\\) (in max) or \\(+M\\cdot A\\) (in min) to the objective, M a very large number. Optimal solution must have \\(A=0\\), otherwise the problem is infeasible.</p>
  <p><b>Two-phase:</b> Phase I minimizes the sum of artificials \\((W=\\sum A)\\). If minimum \\(W=0, go\\) to Phase II with the original objective, starting from the Phase I final tableau (drop artificial columns). If \\(W>0\\), infeasible.</p>
  <div class="formula">Min \\(\\displaystyle Z=2x+3y;x+y\\ge 4;x+3y\\ge 6\\)</div>
  <div class="formula">\\(\\displaystyle x+y-s_{1}+A_{1}=4;x+3y-s_{2}+A_{2}=6\\)</div>
  <div class="formula">Big-M: Min \\(\\displaystyle Z=2x+3y+M\\cdot A_{1}+M\\cdot A_{2}\\)</div>
  <p><b>Example:</b> The feasible corners are \\((0, 4)Z=12, (3, 1)Z=9, (6, 0)Z=12\\). So the optimum is <b>\\(Z=9\\) at \\(x=3, y=1\\)</b>, and the simplex method with artificials ends at this point with \\(A_{1}=A_{2}=0\\).</p>
  <div class="note">Surplus variable \\((-s)\\) for ≥ ; slack \\((+s)\\) for ≤ ; artificial only for ≥ and =. Before starting, express the Z-row in terms of non-basic variables (remove M from basic artificial columns).</div>`},
 { title:"Duality & Sensitivity Analysis", body:`
  <p>Every LP (primal) has a dual. Max problem with ≤ constraints becomes a min problem with ≥ constraints: the dual objective coefficients are the primal RHS, and the dual RHS are the primal objective coefficients; the constraint matrix is transposed.</p>
  <div class="formula">Primal: Max \\(\\displaystyle c^{T}x, \\mathrm{Ax}\\le b, x\\ge 0\\)</div>
  <div class="formula">Dual: Min \\(\\displaystyle b^{T}w, A^{T}w\\ge c, w\\ge 0\\)</div>
  <p><b>Strong duality:</b> if both have optimal solutions, their optimal values are equal. <b>Complementary slackness:</b> \\(x_{j}\\cdot\\)(slack in dual constraint j) \\(=0\\) and \\(w_{i}\\cdot\\)(slack in primal constraint i) \\(=0\\). The dual-simplex and primal-dual methods use these relations.</p>
  <p><b>Example:</b> Primal: Max \\(3x+2y, x+y\\le 4, x+3y\\le 6\\). Dual: Min \\(4u+6v, u+v\\ge 3, u+3v\\ge 2\\). The final primal tableau gives \\(u=3, v=0\\), so dual value \\(=12\\), equal to the primal. Slack \\(s_{2}=2>0\\) so \\(v=0\\).</p>
  <p><b>Sensitivity:</b> shadow price \\(u=3\\) means one extra unit of RHS 1 raises Z by 3, valid while the basis stays feasible: \\(x=b_{1}\\ge 0\\) and \\(s_{2}=6-b_{1}\\ge 0\\), so \\(b_{1}\\in [0, 6]\\).</p>
  <div class="note">Dual of an equality constraint has a free (unrestricted) variable. Shadow price is valid only within the RHS range. Compare Z-row of the final tableau for coefficient ranging.</div>`},
 { title:"Transportation Problem: NWC, VAM, MODI", body:`
  <p>Ship goods from m sources to n destinations at minimum cost. Balanced if total supply = total demand (otherwise add a dummy). A basic feasible solution has \\(m+n-1\\) allocated cells.</p>
  <ul><li><b>North-West Corner (NWC):</b> start at the top-left cell, allocate min(supply, demand), move right or down.</li><li><b>VAM:</b> for each row and column compute the penalty = difference of two smallest costs; allocate as much as possible to the least cost cell in the row/column with the biggest penalty; repeat. Usually gives a better start.</li><li><b>\\(\\mathrm{MODI}(u-v)\\):</b> test optimality.</li></ul>
  <div class="formula">For allocated cells: \\(\\displaystyle u_{i}+v_{j}=c_{ij}\\)</div>
  <div class="formula">Opportunity cost: \\(\\displaystyle d_{ij}=c_{ij}-u_{i}-v_{j}\\ge 0\\to\\) optimal</div>
  <p><b>Example:</b> Supplies 20, 30; demands 10, 25, 15. Costs: row\\(1=4, 6, 8\\); row\\(2=5, 3, 7\\). \\(\\mathrm{NWC}:x_{11}=10, x_{12}=10, x_{22}=15, x_{23}=15\\), cost \\(=40+60+45+105=250\\). MODI with \\(u_{1}=0:v_{1}=4, v_{2}=6, u_{2}=-3, v_{3}=10\\). \\(d_{13}=8-0-10=-2&lt;0, d_{21}=5+3-4=4\\). Cell (1,3) enters; loop \\((1, 3)+, (1, 2)-, (2, 2)+, (2, 3)-;\\theta =\\min (10, 15)=10\\). New cost \\(=250-2\\times 10\\) = <b>230</b>.</p>
  <div class="note">Degeneracy: if allocated cells are fewer than \\(m+n-1, add\\,\\varepsilon\\) in an independent cell. In the loop, the \\(\\theta\\) is the smallest allocation at a minus (−) position.</div>`},
 { title:"Integer Programming: Branch & Bound, Cutting Plane", body:`
  <p>If variables must be integers, the LP relaxation may give fractions. Rounding can be wrong, so use <b>branch and bound</b> or <b>cutting planes</b>.</p>
  <div class="vis" data-vis="lp"></div>
  <p><b>Branch and bound:</b> solve the LP relaxation (its value is an upper bound for max). Choose a fractional variable \\(x_{j}=f\\) and create two subproblems: \\(x_{j}\\le \\lfloor f\\rfloor\\) and \\(x_{j}\\ge \\lceil f\\rceil\\). Keep the best integer solution found; prune nodes that are infeasible or whose bound is no better than it.</p>
  <p><b>Example:</b> Max \\(5x+4y, x+y\\le 5, 10x+6y\\le 45, x, y\\) integer. \\(\\mathrm{LP}:x=3.75, y=1.25, Z=23.75\\). Branch \\(x\\le 3\\): gives \\((3, 2), Z=23\\) (integer, best so far). Branch \\(x\\ge 4:\\mathrm{LP}\\) gives \\(x=4, y=5/6, Z=23.33\\); branching \\(y\\ge 1\\) is infeasible, \\(y\\le 0\\) gives \\(Z\\le 22.5&lt;23\\), so pruned. Optimum <b>\\((3, 2), Z=23\\)</b>.</p>
  <p><b>Gomory cutting plane:</b> take a row of the final tableau with fractional RHS, e.g. \\(x+0.5s_{1}+0.25s_{2}=3.75\\). Take fractional parts to form the cut:</p>
  <div class="formula">\\(\\displaystyle \\sum f_{j}x_{j}\\ge f_{0}\\) , i.e. \\(\\displaystyle 0.5s_{1}+0.25s_{2}\\ge 0.75\\)</div>
  <p>Add it to the tableau and apply the dual simplex method; repeat until all integer.</p>
  <div class="note">The LP optimum is only a bound (for max, integer optimum \\(\\le \\mathrm{LP}\\) optimum). Fractional part of a negative number: \\(-1.25=-2+0.75\\), so \\(f=0.75\\), not 0.25.</div>`},
 { title:"Decision Theory", body:`
  <p>Choose among actions \\(A_{i}\\) when the state of nature \\(S_{j}\\) is uncertain, using a payoff table.</p>
  <ul><li><b>Maximin</b> (pessimist): maximize the row minimum.</li><li><b>Maximax</b> (optimist): maximize the row maximum.</li><li><b>Minimax regret</b> (Savage): regret = column best − payoff; minimize the maximum regret.</li><li><b>EMV</b> (under risk): maximize expected payoff using state probabilities.</li></ul>
  <div class="formula">\\(\\displaystyle \\mathrm{EVPI}=EV\\) with perfect information − best EMV</div>
  <p><b>Example:</b> States \\(S_{1}, S_{2}\\) with probabilities 0.6, 0.4. Payoffs: \\(A_{1}=(50, 30), A_{2}=(40, 40), A_{3}=(70, 10)\\).</p>
  <ul><li>Maximin: row minimums 30, 40, 10, choose <b>\\(A_{2}\\)</b>. Maximax: choose \\(A_{3}(70)\\).</li><li>\\(\\mathrm{EMV}:A_{1}=30+12=42;A_{2}=24+16=40;A_{3}=42+4=46\\), choose <b>\\(A_{3}\\)</b>.</li><li>Regret table (column best 70, 40): \\(A_{1}=(20, 10), A_{2}=(30, 0), A_{3}=(0, 30)\\). Max regrets 20, 30, 30, choose <b>\\(A_{1}\\)</b>.</li><li>EV with perfect info \\(=0.6\\times 70+0.4\\times 40=58\\), so \\(\\mathrm{EVPI}=58-46\\) = <b>12</b> (equals the expected regret of \\(A_{3}\\)).</li></ul>
  <div class="note">Different criteria can give different answers, so state the criterion with the answer. Regret is computed on columns, not rows. EVPI is the maximum you should pay for perfect information.</div>`},
 { title:"Two-Person Zero-Sum Games & LP", body:`
  <p>In a zero-sum game, one player's gain is the other's loss. Row player A picks the maximin; column player B the minimax. If maximin = minimax, there is a <b>saddle point</b> and the game has a pure-strategy value. Otherwise use mixed strategies. First reduce the matrix using <b>dominance</b> (drop a row that is never better, a column never better for B).</p>
  <p>For \\(a2\\times 2\\) game without saddle point, with A's payoffs [[a, b], [c, d]], A plays row 1 with probability p, which equates the expected payoff against both columns:</p>
  <div class="formula">\\(\\displaystyle p=\\frac{d-c}{a+d-b-c}\\)</div>
  <div class="formula">\\(\\displaystyle V=\\frac{ad-bc}{a+d-b-c}\\)</div>
  <p><b>Example:</b> Matrix \\([[3, -1], [-2, 4]]\\). Row minimums \\(-1, -2\\) so maximin \\(=-1\\); column maximums 3, 4 so minimax \\(=3\\). No saddle. \\(p=(4+2)/(3+4+1+2)=0.6, V=(12-2)/10\\) = <b>1</b>. B plays column 1 with \\(q=(4+1)/10=0.5\\); check: \\(3(0.5)-0.5=1\\). ✓.</p>
  <p><b>Equivalence with LP:</b> A solves (let probabilities \\(p_{1}, p_{2}\\), value v):</p>
  <div class="formula">Max v s.t. \\(\\displaystyle 3p_{1}-2p_{2}\\ge v;-p_{1}+4p_{2}\\ge v\\)<br>\\(\\displaystyle p_{1}+p_{2}=1, p\\ge 0\\)</div>
  <p>B's problem is the dual of A's problem. Their optimal values are equal (minimax theorem). If any payoff is negative, add a constant to make all positive before the LP.</p>
  <div class="note">Check for a saddle point and dominance before using formulas. The \\(2\\times 2\\) formula is valid only when there is no saddle point.</div>`}
]},
{ id:"stoch", name:"Stochastic Processes", topics:[
 { title:"What is a Stochastic Process?", body:`
  <p>A <b>stochastic process</b> is a collection of random variables \\(\\{X(t), t\\in T\\}\\) defined on the same probability space, indexed by a parameter t (usually time). Each \\(X(t)\\) takes values in the <b>state space</b> S.</p>
  <ul><li><b>Discrete time, discrete state:</b> e.g. a Markov chain (daily weather: sunny/rainy).</li>
  <li><b>Continuous time, discrete state:</b> e.g. Poisson process (number of calls by time t).</li>
  <li><b>Continuous time, continuous state:</b> e.g. Brownian motion.</li></ul>
  <div class="note">Exam tip: always identify the index set T and state space S first. This classifies the process.</div>`},
 { title:"Markov Chains: basics", body:`
  <p>A discrete-time process \\(\\{X_{n}\\}\\) is a <b>Markov chain</b> if the future depends on the past only through the present (Markov property):</p>
  <div class="vis" data-vis="markov"></div>
  <div class="formula">\\(\\displaystyle P(X_{n+1}=j|X_{n}=i, X_{n-1}, \\ldots , X_{0})=P(X_{n+1}=j|X_{n}=i)=p_{ij}\\)</div>
  <p>The one-step <b>transition matrix</b> \\(P=[p_{ij}]\\) has non-negative entries and every row sums to 1 (a stochastic matrix).</p>
  <p><b>Chapman–Kolmogorov equations:</b></p>
  <div class="formula">\\(\\displaystyle p_{ij}^{(n+m)}=\\sum_{k}p_{ik}^{(n)}p_{kj}^{(m)}\\)  &nbsp;⇒&nbsp; \\(\\displaystyle P^{(n)}=P^{n}\\)</div>
  <p>If the initial distribution is the row vector \\(\\pi _{0}\\), then the distribution at time n is \\(\\pi _{0}P^{n}\\).</p>`},
 { title:"Classification of States", body:`
  <ul>
  <li><b>Accessible:</b> j is accessible from i if \\(p_{ij}^{(n)}>0\\) for some \\(n\\ge 0\\). If i and j are accessible from each other they <b>communicate</b>.</li>
  <li><b>Irreducible chain:</b> all states communicate (one class).</li>
  <li><b>Period</b> of \\(i:d(i)=\\gcd \\{n:p_{ii}^{(n)}>0\\}\\). If \\(d=1\\) the state is <b>aperiodic</b>.</li>
  <li><b>Recurrent</b> state: return probability \\(f_{ii}=1\\). <b>Transient</b>: \\(f_{ii}&lt;1\\).</li>
  <li>Recurrent iff \\(\\sum _{n}p_{ii}^{(n)}=\\infty\\); transient iff the sum is finite.</li>
  <li><b>Positive recurrent</b>: mean return time \\(\\mu _{i}&lt;\\infty\\). <b>Null recurrent</b>: \\(\\mu _{i}=\\infty\\).</li>
  <li><b>Absorbing</b> state: \\(p_{ii}=1\\).</li></ul>
  <div class="note">Recurrence, transience and period are class properties: all states in one communicating class share them. A finite irreducible chain is always positive recurrent.</div>`},
 { title:"Stationary Distribution", body:`
  <p>A probability vector \\(\\pi\\) is <b>stationary</b> if it does not change after one step:</p>
  <div class="vis" data-vis="markov"></div>
  <div class="formula">\\(\\displaystyle \\pi =\\pi P\\), &nbsp; \\(\\displaystyle \\sum_{i}\\pi_{i}=1\\)</div>
  <p>For an irreducible, aperiodic, positive recurrent chain, the stationary distribution is unique and is also the <b>limiting distribution</b>: \\(p_{ij}^{(n)}\\to \\pi _{j}=1/\\mu _{j}\\) as \\(n\\to \\infty\\).</p>
  <p><b>Example:</b> \\(P=[[0.7, 0.3], [0.4, 0.6]]\\). Solve \\(\\pi _{1}=0.7\\pi _{1}+0.4\\pi _{2}\\Rightarrow 0.3\\pi _{1}=0.4\\pi _{2}\\Rightarrow \\pi _{1}:\\pi _{2}=4:3\\). So \\(\\pi =(4/7, 3/7)\\).</p>`},
 { title:"Poisson Process", body:`
  <p>A counting process \\(\\{N(t), t\\ge 0\\}\\) is a <b>Poisson process with rate \\(\\lambda\\)</b> if:</p>
  <div class="vis" data-vis="poisson"></div>
  <ul><li>\\(N(0)=0\\);</li><li>it has independent increments;</li><li>the number of events in any interval of length t is Poisson\\((\\lambda t)\\).</li></ul>
  <div class="formula">\\(\\displaystyle P(N(t)=n)=e^{-\\lambda t}\\frac{(\\lambda t)^{n}}{n}\\)!,&nbsp; \\(\\displaystyle E[N(t)]=\\mathrm{Var}[N(t)]=\\lambda t\\)</div>
  <p><b>Inter-arrival times</b> are i.i.d. Exponential\\((\\lambda )\\) with mean \\(1/\\lambda\\). The time of the \\(n-th\\) event \\(S_{n}\\) follows Gamma\\((n, \\lambda )\\).</p>
  <p><b>Superposition:</b> sum of independent Poisson processes with rates \\(\\lambda _{1}, \\lambda _{2}\\) is Poisson with rate \\(\\lambda _{1}+\\lambda _{2}\\). <b>Thinning:</b> if each event is kept with probability p, the kept events form a Poisson process with rate \\(\\lambda p\\).</p>
  <div class="note">Memoryless property: \\(P(T>s+t|T>s)=P(T>t)\\) for exponential T.</div>`},
 { title:"Birth–Death Processes & Queues", body:`
  <p>A <b>birth–death process</b> moves only to neighbouring states: \\(n\\to n+1\\) at rate \\(\\lambda _{n}\\) (birth) and \\(n\\to n-1\\) at rate \\(\\mu _{n}\\) (death).</p>
  <p>Balance equations give the stationary distribution:</p>
  <div class="formula">\\(\\displaystyle \\pi_{n}=\\pi_{0}\\cdot \\frac{\\lambda_{0}\\lambda_{1}\\ldots \\lambda_{n-1}}{\\mu_{1}\\mu_{2}\\ldots \\mu_{n}}\\)</div>
  <p><b>M/M/1 queue</b> (arrival rate \\(\\lambda\\), service rate \\(\\mu , \\rho =\\lambda /\\mu &lt;1\\)):</p>
  <div class="formula">\\(\\displaystyle \\pi_{n}=(1-\\rho)\\rho^{n}\\),&nbsp; \\(\\displaystyle L=\\frac{\\rho}{1-\\rho}\\),&nbsp; \\(\\displaystyle W=\\frac{1}{\\mu -\\lambda}\\),&nbsp; \\(\\displaystyle \\mathrm{Lq}=\\frac{\\rho^{2}}{1-\\rho}\\)</div>
  <p>Little's law: \\(L=\\lambda W\\).</p>`},
 { title:"Branching Process & Gambler's Ruin", body:`
  <p><b>Gambler's ruin:</b> start with i units, win 1 w.p. p, lose 1 w.p. \\(q=1-p\\), stop at 0 or N. Probability of reaching N:</p>
  <div class="vis" data-vis="walk"></div>
  <div class="formula">p = ½: \\(\\displaystyle P_{i}=\\frac{i}{N}\\) &nbsp;&nbsp; \\(\\displaystyle p\\ne\\) ½: \\(\\displaystyle P_{i}=\\frac{1-(\\frac{q}{p})^{i}}{1-(q/p)^{N}}\\)</div>
  <p><b>Galton–Watson branching process:</b> each individual produces \\(\\xi\\) offspring independently with mean \\(m=E[\\xi ]\\). The population dies out with probability 1 if \\(m\\le 1\\). If \\(m>1\\), the extinction probability is the smallest root in [0,1] of \\(s=G(s)\\), where G is the probability generating function of \\(\\xi\\).</p>`},
 { title:"Probability Generating Functions", body:`
  <p>For a non-negative integer random variable X with \\(P(X=k)=p_{k}\\), the PGF packs the whole distribution into one function. It is very useful for sums of independent variables and for branching processes.</p>
  <div class="formula">\\(\\displaystyle P(s)=E(s^{x})=\\sum p_{k}s^{k}, \\quad |s|\\le 1, \\quad P(1)=1\\)</div>
  <div class="formula">\\(\\displaystyle E(X)=P'(1)\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{Var}(X)=P''(1)+P'(1)-[P'(1)]^{2}\\)</div>
  <div class="formula">X, Y independent: \\(\\displaystyle P_{X+Y}(s)=P_{X}(s)\\cdot P_{Y}(s)\\)</div>
  <p>Standard PGFs: Binomial \\((q+ps)^{n}\\); Poisson \\(e^{\\lambda (s-1)}\\); Geometric \\(ps/(1-qs)\\).</p>
  <p><b>Example:</b> \\(X\\sim\\) Binomial\\((n=4, p=0.5)\\), so \\(P(s)=(0.5+0.5s)^{4}\\). \\(P'(s)=2(0.5+0.5s)^{3}\\), so \\(P'(1)=2=np\\). \\(P''(s)=3(0.5+0.5s)^{2}\\), so \\(P''(1)=3\\). \\(\\mathrm{Var}=3+2-2^{2}=1\\), which matches \\(npq=4(0.5)(0.5)=1\\).</p>
  <div class="note">Do not forget the "\\(+P'(1)-[P'(1)]^{2}\\)" part of the variance; \\(P''(1)\\) alone is \\(E[X(X-1)]\\), not \\(E[X^{2}]\\). The sum of a RANDOM number N of iid variables has \\(\\mathrm{PGF}\\,P_{N}(P_{X}(s))\\).</div>`},
 { title:"Modes of Convergence, LLN & CLT", body:`
  <p>Four modes, from strongest to weakest: almost sure (a.s.) and convergence in \\(r-th\\) mean both imply convergence in probability, which implies convergence in distribution.</p>
  <div class="vis" data-vis="clt"></div>
  <div class="formula">In probability: \\(\\displaystyle P(|X_{n}-X|>\\varepsilon)\\to 0\\) for every \\(\\displaystyle \\varepsilon >0\\)</div>
  <div class="formula">Chebyshev: \\(\\displaystyle P(|X-\\mu |\\ge k\\sigma)\\le \\frac{1}{k^{2}}\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{WLLN}:\\bar{X}_{n}\\to \\mu\\) in probability (if \\(\\displaystyle \\sigma^{2}\\) finite)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{CLT}:\\frac{\\bar{X}_{n}-\\mu}{\\sigma/\\sqrt{n}}\\to N(0, 1)\\) in distribution</div>
  <p>SLLN (Kolmogorov) gives \\(\\bar{X}_{n}\\to \\mu\\) almost surely. The CLT needs finite variance and iid observations (Lindeberg-Lévy).</p>
  <p><b>Example:</b> Toss a fair coin 100 times. Heads \\(S\\sim \\mathrm{Bin}(100, 0.5)\\): mean \\(50, sd=\\sqrt{25}=5\\). \\(P(S\\ge 60)\\) with continuity correction \\(=P(Z\\ge (59.5-50)/5)=P(Z\\ge 1.9)=1-0.9713=0.0287\\). Chebyshev only gives \\(P(|S-50|\\ge 10)\\le 25/100=0.25, a\\) much weaker bound.</p>
  <div class="note">Convergence in distribution does NOT imply convergence in probability (except to a constant). Cauchy distribution has no mean, so LLN fails for it.</div>`},
 { title:"Random Walk with Reflecting Barriers", body:`
  <p>Simple random walk: each step is \\(+1\\) with probability p and \\(-1\\) with probability \\(q=1-p\\). Absorbing barriers (gambler's ruin) stop the walk. A <b>reflecting barrier</b> instead pushes the walk back, so the chain stays alive and has a stationary distribution.</p>
  <div class="vis" data-vis="walk:reflect"></div>
  <div class="formula">Free walk: \\(\\displaystyle E(S_{n})=n(p-q), \\quad \\mathrm{Var}(S_{n})=4npq\\)</div>
  <div class="formula">Reflecting at \\(\\displaystyle 0:P(0\\to 1)=1\\) (or p, stay with q)</div>
  <div class="formula">Reflecting at \\(\\displaystyle a:P(a\\to a-1)=1\\)</div>
  <p>Solve \\(\\pi P=\\pi , \\sum \\pi _{i}=1\\) using the balance (local) equations.</p>
  <p><b>Example:</b> States \\(0, 1, 2, 3, p=q\\) = ½, with reflection at both ends (\\(0\\to 1\\) and \\(3\\to 2\\) with probability 1). Balance: \\(\\pi _{0}=\\pi _{1}/2, \\pi _{1}=\\pi _{0}+\\pi _{2}/2, \\pi _{3}=\\pi _{2}/2\\). Put \\(\\pi _{0}=x\\). Then \\(\\pi _{1}=2x, \\pi _{2}=2x, \\pi _{3}=x\\). Sum \\(=6x=1\\), so \\(x=1/6\\).</p>
  <div class="formula">\\(\\displaystyle \\pi =(\\frac{1}{6}, \\frac{1}{3}, \\frac{1}{3}, \\frac{1}{6})\\)</div>
  <div class="note">The chain with reflecting barriers is irreducible and periodic (period 2) but still has a unique stationary distribution. Do not mix it up with absorbing barriers, where states 0 and a are absorbing and no stationary distribution of interior states exists.</div>`},
 { title:"Renewal and Recurrent Events", body:`
  <p>A recurrent event E (Feller) is an event that, after each occurrence, the process starts afresh. Let \\(u_{n}=P\\)(E occurs at trial n), \\(u_{0}=1\\), and \\(f_{n}=P\\)(E occurs for the first time at n after the previous occurrence).</p>
  <div class="formula">\\(\\displaystyle U(s)=\\sum u_{n}s^{n}, \\quad F(s)=\\sum f_{n}s^{n}\\)</div>
  <div class="formula">\\(\\displaystyle U(s)=\\frac{1}{1-F(s)}\\)</div>
  <div class="formula">\\(\\displaystyle u_{n}=f_{1}u_{n-1}+f_{2}u_{n-2}+\\ldots +f_{n}u_{0}\\)</div>
  <p>E is <b>persistent</b> if \\(f=F(1)=1\\), otherwise <b>transient</b>. Mean recurrence time \\(\\mu =F'(1)\\). If persistent with finite \\(\\mu\\) and not periodic, \\(u_{n}\\to 1/\\mu\\).</p>
  <p><b>Example:</b> \\(f_{1}\\) = ½, \\(f_{2}\\) = ½ (so \\(F(1)=1\\), persistent). Then \\(\\mu =1\\)(½) \\(+2\\)(½) \\(=1.5\\). \\(u_{1}\\) = ½; \\(u_{2}=f_{1}u_{1}+f_{2}u_{0}\\) = ¼ + ½ = ¾; \\(u_{3}=f_{1}u_{2}+f_{2}u_{1}\\) = ⅜ + ¼ = ⅝. The limit is \\(1/\\mu =2/3\\) (\\(u_{4}=0.6875\\), approaching 0.667).</p>
  <div class="note">Period \\(=\\gcd\\) of all n with \\(u_{n}>0\\); if period \\(>1\\) then \\(u_{n}\\) does not converge to \\(1/\\mu\\). Persistent but \\(\\mu =\\infty\\) is called null persistent. Use \\(u_{0}=1\\) in the recurrence.</div>`}
]},
{ id:"dem", name:"Demography", topics:[
 { title:"Sources of Data & Errors: Age Heaping", body:`
  <p>Main sources: census (complete count every 10 years), civil registration (births, deaths, marriages), sample surveys (e.g. BDHS) and population registers. Errors are of two types: <b>coverage errors</b> (omission or double count) and <b>content errors</b> (wrong age, wrong answers). A Post-Enumeration Survey (PES) estimates net undercount.</p>
  <div class="vis" data-vis="heaping"></div>
  <p>Age heaping (digit preference): people report ages ending in 0 and 5. It is measured by indices.</p>
  <div class="formula">Whipple \\(\\displaystyle =5\\times\\) (pop. at ages ending 0 and 5, ages 23–62)</div>
  <div class="formula">          / (total pop. aged 23–62) \\(\\displaystyle \\times 100\\)</div>
  <p>Range: 100 = no heaping, 500 = all ages end in 0 or 5. Below 105 highly accurate; 105–110 fairly accurate; 110–125 approximate; 125–175 rough; above 175 very rough.</p>
  <p><b>Example:</b> Total population aged 23–62 is 10,000 and 2,400 report an age ending in 0 or 5. Whipple \\(=5\\times 2400/10000\\times 100=120\\), so data quality is "approximate".</p>
  <p>Myers' blended index: for each terminal digit 0–9, compute a blended weighted share of population; the index is half the sum of absolute deviations of these shares from 10%. Zero means no preference.</p>
  <div class="note">Whipple uses ONLY ages 23–62 and multiplies by 5 because 2 out of 10 digits are 0 or 5 (expected 1/5 of the total).</div>`},
 { title:"Population Growth Rates", body:`
  <p>Three models give the growth rate r between two times separated by t years (\\(P_{0}\\) = initial, \\(P_{t}\\) = later population).</p>
  <div class="vis" data-vis="logistic"></div>
  <div class="formula">Arithmetic: \\(\\displaystyle P_{t}=P_{0}(1+rt), \\quad r=\\frac{P_{t}-P_{0}}{P_{0}t}\\)</div>
  <div class="formula">Geometric: \\(\\displaystyle P_{t}=P_{0}(1+r)^{t}, \\quad r=(\\frac{P_{t}}{P_{0}})^{\\frac{1}{t}}-1\\)</div>
  <div class="formula">Exponential: \\(\\displaystyle P_{t}=P_{0}e^{rt}, \\quad r=\\ln \\frac{\\frac{P_{t}}{P_{0}}}{t}\\)</div>
  <div class="formula">Doubling time \\(\\displaystyle =\\ln \\,\\frac{2}{r}\\approx \\frac{0.693}{r}\\)</div>
  <p><b>Example:</b> \\(P_{0}=100, 000\\) and \\(P_{2}=121, 000\\) after \\(t=2\\) years.</p>
  <ul><li>Arithmetic: \\(r=21, 000/(100, 000\\times 2)=0.105\\) (10.5%)</li>
  <li>Geometric: \\(r=\\sqrt{1.21}-1=0.10\\) (10%)</li>
  <li>Exponential: \\(r=\\ln (1.21)/2=0.1906/2=0.0953\\) (9.53%)</li></ul>
  <p>Doubling time at the exponential rate \\(=0.6931/0.0953=7.27\\) years.</p>
  <div class="note">Exponential (continuous) rate is always less than the geometric rate for the same data. Natural increase rate \\(=\\mathrm{CBR}-\\mathrm{CDR}\\) (per 1000) and excludes migration.</div>`},
 { title:"Fertility Measures (CBR, GFR, ASFR, TFR, GRR, NRR)", body:`
  <p>Fertility = actual births (fecundity is the biological capacity). Measures go from crude to refined.</p>
  <div class="formula">CBR = births / mid-year population \\(\\displaystyle \\times 1000\\)</div>
  <div class="formula">GFR = births / women aged 15–\\(\\displaystyle 49\\times 1000\\)</div>
  <div class="formula">ASFR = births to women of age group / women of that group \\(\\displaystyle \\times 1000\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{TFR}=5\\times \\sum \\,\\mathrm{ASFR}\\) (5-year groups)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{GRR}=\\mathrm{TFR}\\times\\) (female births / all births)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{NRR}=\\sum 5\\cdot \\mathrm{ASFR}_{f}\\cdot (\\frac{L_{x}}{l_{0}})\\)</div>
  <p><b>Example:</b> Births 3,000, population 100,000 gives \\(\\mathrm{CBR}=30\\). With 25,000 women aged 15–\\(49, \\mathrm{GFR}=3000/25000\\times 1000=120\\).</p>
  <p>ASFR per 1000 for ages 15–\\(19, \\ldots , 45\\)–49: 40, 160, 180, 120, 70, 25, 5. Sum \\(=600\\), so \\(\\mathrm{TFR}=5\\times 600/1000=3.0\\) children per woman. If half of births are girls, \\(\\mathrm{GRR}=3.0\\times 0.5=1.5\\). If the weighted survival of girls to mother's age is \\(0.92, \\mathrm{NRR}\\approx 1.5\\times 0.92=1.38\\).</p>
  <div class="note">\\(\\mathrm{NRR}=1\\) means replacement level. NRR is always \\(\\le \\mathrm{GRR}\\) because it allows for mortality. Use ASFR of FEMALE births only in NRR. Do not forget the factor 5 in TFR.</div>`},
 { title:"Mortality Measures (CDR, ASDR, IMR)", body:`
  <p>Mortality is measured by rates per 1000 of the exposed population.</p>
  <div class="formula">CDR = deaths in year / mid-year population \\(\\displaystyle \\times 1000\\)</div>
  <div class="formula">ASDR = deaths in age group / population of that \\(\\displaystyle age\\times 1000\\)</div>
  <div class="formula">IMR = deaths under age 1 / live births \\(\\displaystyle \\times 1000\\)</div>
  <div class="formula">NMR = deaths under 28 days / live births \\(\\displaystyle \\times 1000\\)</div>
  <div class="formula">MMR = maternal deaths / live births \\(\\displaystyle \\times 100, 000\\)</div>
  <p><b>Example:</b> A town has 50,000 people and 800 deaths in the year: \\(\\mathrm{CDR}=800/50000\\times 1000=16\\). In age group 40–44 there are 10,000 people and 50 deaths: \\(\\mathrm{ASDR}=5\\) per 1000. With 3,000 live births and 90 infant deaths: \\(\\mathrm{IMR}=90/3000\\times 1000=30\\). If 60 of these died within 28 days, \\(\\mathrm{NMR}=20\\) and post-neonatal \\(MR=10\\).</p>
  <p>Crude CDR is the weighted average of ASDR, with weights equal to the age structure: \\(\\mathrm{CDR}=\\sum c_{x}\\cdot \\mathrm{ASDR}_{x}\\).</p>
  <div class="note">IMR denominator is live births, NOT mid-year population. CDR depends on age structure, so comparing two countries by CDR can mislead; use standardization.</div>`},
 { title:"Standardization: Direct and Indirect", body:`
  <p>Crude rates are affected by age composition. Standardization removes this effect.</p>
  <ul><li><b>Direct:</b> apply the population's own age-specific rates to a standard population.</li>
  <li><b>Indirect:</b> apply standard age-specific rates to the population's own age structure (used when its age-specific rates are unknown or unreliable).</li></ul>
  <div class="formula">Direct rate \\(\\displaystyle =\\Sigma\\)(rateᵢ × standard \\(\\displaystyle pop_{i}\\)) / \\(\\displaystyle \\Sigma\\) standard \\(\\displaystyle pop_{i}\\)</div>
  <div class="formula">SMR = observed deaths / expected deaths</div>
  <div class="formula">Indirect rate \\(\\displaystyle =\\mathrm{SMR}\\times\\) crude rate of standard</div>
  <p><b>Example:</b> Population A: young 8,000 (rate 5/1000), old 2,000 (40/1000), so deaths \\(=40+80=120, \\mathrm{CDR}=12\\). Population B: young 4,000 (4/1000), old 6,000 (30/1000): deaths \\(=16+180=196, \\mathrm{CDR}=19.6\\). Standard: 5,000 young and 5,000 old.</p>
  <p>Direct: \\(A=(5000\\times 5+5000\\times 40)/10000=22.5;B=(5000\\times 4+5000\\times 30)/10000=17.0\\). After adjustment A has the HIGHER mortality.</p>
  <p>Indirect for A using B's rates as standard: expected \\(=8000(0.004)+2000(0.03)=32+60=92\\). \\(\\mathrm{SMR}=120/92=1.304\\). Standardized rate \\(=1.304\\times 19.6=25.6\\) per 1000.</p>
  <div class="note">\\(\\mathrm{SMR}>1\\) means more deaths than expected. Always state the standard population used; a different standard changes the numbers.</div>`},
 { title:"Life Table Construction", body:`
  <p>A life table follows a hypothetical cohort (radix \\(l_{0}\\), e.g. 1000 or 100,000) through ages, applying age-specific death probabilities.</p>
  <div class="formula">\\(\\displaystyle q_{x}=\\frac{d_{x}}{l_{x}}, \\quad p_{x}=1-q_{x}, \\quad d_{x}=l_{x}-l_{x+1}\\)</div>
  <div class="formula">\\(\\displaystyle L_{x}=\\frac{l_{x}+l_{x+1}}{2}\\)  (person-years lived in \\(\\displaystyle [x, x+1]\\))</div>
  <div class="formula">\\(\\displaystyle T_{x}=\\sum L_{y}\\) for \\(\\displaystyle y\\ge x, \\quad e_{x}=\\frac{T_{x}}{l_{x}}\\)</div>
  <div class="formula">From rate \\(\\displaystyle m_{x}:q_{x}=\\frac{2m_{x}}{2+m_{x}}\\)</div>
  <p><b>Example:</b> Toy table, radix 1000, everyone dead by age 3:</p>
  <table><tr><td>x</td><td>\\(l_{x}\\)</td><td>\\(d_{x}\\)</td><td>\\(q_{x}\\)</td><td>\\(L_{x}\\)</td><td>\\(T_{x}\\)</td><td>\\(e_{x}\\)</td></tr>
  <tr><td>0</td><td>1000</td><td>100</td><td>0.100</td><td>950</td><td>2000</td><td>2.00</td></tr>
  <tr><td>1</td><td>900</td><td>300</td><td>0.333</td><td>750</td><td>1050</td><td>1.17</td></tr>
  <tr><td>2</td><td>600</td><td>600</td><td>1.000</td><td>300</td><td>300</td><td>0.50</td></tr></table>
  <p>Life expectancy at birth \\(e_{0}=2000/1000=2.0\\) years. Check: if \\(m=0.04, q=0.08/2.04=0.0392\\).</p>
  <div class="note">Fill columns in order \\(l\\to d\\to q\\to L\\to T\\to e\\). T is a cumulative sum from the BOTTOM up. For infants, \\(L_{0}\\) is not the simple average because deaths are concentrated early (use separation factor \\(\\approx 0.3\\)).</div>`},
 { title:"Nuptiality (SMAM) and Migration", body:`
  <p>Nuptiality studies marriage patterns. <b>SMAM</b> (Singulate Mean Age at Marriage, Hajnal) estimates the average years lived single by those who ever marry, using proportions single \\(S_{a}\\) in 5-year groups from 15–19 to 45–49.</p>
  <div class="formula">\\(\\displaystyle \\mathrm{SMAM}=\\frac{15+5\\cdot \\sum S_{a}-50\\cdot S_{50}}{1-S_{50}}\\)</div>
  <p>\\(S_{50}\\) = proportion still single at 50 (often average of 45–49 and 50–54).</p>
  <p><b>Example:</b> Proportions single at ages 15–19, 20–\\(24, \\ldots , 45\\)–49: 0.90, 0.60, 0.30, 0.10, 0.05, 0.03, 0.02; the last group (45–49) is used as \\(S_{50}=0.02\\). \\(\\sum S_{a}=2.00\\), so \\(5\\sum S_{a}=10\\). \\(\\mathrm{SMAM}=(15+10-50\\times 0.02)/(1-0.02)=24/0.98=24.5\\) years.</p>
  <p><b>Migration:</b> movement across an area boundary. Balancing equation:</p>
  <div class="formula">\\(\\displaystyle P_{1}=P_{0}+B-D+I-O\\)</div>
  <div class="formula">Net migration \\(\\displaystyle =(P_{1}-P_{0})-(B-D)\\)</div>
  <div class="formula">Net migration rate \\(\\displaystyle =\\frac{NM}{mid}\\)-year \\(\\displaystyle pop\\times 1000\\)</div>
  <p><b>Example:</b> \\(P_{0}=500, 000, P_{1}=540, 000, B=40, 000, D=10, 000\\). \\(NM=40, 000-30, 000=10, 000\\). Mid-year population \\(=520, 000\\), so rate \\(=19.2\\) per 1000.</p>
  <div class="note">The "15 +" term counts the single years before age 15. Net migration is the residual, so errors in census and births/deaths pile up in it.</div>`},
 { title:"Population Projection & Growth Curves", body:`
  <p>Projection methods: (1) mathematical extrapolation (arithmetic, geometric, exponential); (2) <b>component (cohort-survival) method</b>, which projects each age-sex group with survival ratios, adds births from ASFR and adds migrants; (3) logistic and Gompertz curves.</p>
  <div class="vis" data-vis="logistic"></div>
  <div class="formula">Component: \\(\\displaystyle P(x+5, t+5)=P(x, t)\\times (\\frac{L_{(x+5)}}{L_{x}})\\pm\\) migrants</div>
  <div class="formula">Logistic: \\(\\displaystyle P_{t}=\\frac{K}{1+e^{a-bt}}\\),  inflection at K/2</div>
  <div class="formula">Gompertz: \\(\\displaystyle P_{t}=K\\cdot \\exp (-e^{a-bt})\\),  inflection at \\(\\displaystyle \\frac{K}{e}\\approx 0.368K\\)</div>
  <p>K is the upper asymptote (carrying capacity). Both curves are S-shaped; the Gompertz is asymmetric.</p>
  <p><b>Example 1:</b> \\(P_{0}=100, 000, r=2\\)% geometric, 10 years: \\(P_{10}=100, 000\\times 1.02^{10}=121, 899\\).</p>
  <p><b>Example 2:</b> Logistic with \\(K=1000, e^{a}=4, b=0.5\\). \\(P_{0}=1000/5=200\\). \\(P_{2}=1000/(1+4e^{-1})=1000/2.4715=404.6\\). Inflection when \\(e^{a-bt}=1\\), i.e. \\(t=\\ln 4/0.5=2.77\\), where \\(P=500\\).</p>
  <p><b>Example 3:</b> Gompertz with \\(K=1000, a=0, b=0.5:P_{0}=1000e^{-1}=367.9;P_{2}=1000\\,\\exp (-e^{-1})=692.2\\).</p>
  <div class="note">Simple extrapolation is only good for short periods; it ignores age structure. Logistic gives a symmetric curve about K/2; do not confuse the inflection points.</div>`}
]},
{ id:"sas", name:"Data Analysis with SAS", topics:[
 { title:"DATA Step and PROC Step Basics", body:`
  <p>A SAS program is a series of steps. A <b>DATA step</b> creates or changes a dataset (row-by-row processing). A <b>PROC step</b> analyses or prints a dataset. Every statement ends with a semicolon; a step ends with RUN; (or QUIT; for some procs).</p>
  <div class="formula">libname mylib 'C:sasdata';<br>data mylib.students;<br>&nbsp;&nbsp;input id name $ sex $ score;<br>&nbsp;&nbsp;datalines;<br>1 Rahim M 70<br>2 Nila F 80<br>3 Karim M 90<br>;<br>run;<br>proc print data=mylib.students; run;</div>
  <p>The LIBNAME gives a permanent library; without it, data goes to the temporary WORK library. The $ after a variable name means character. The PDV (program data vector) holds one observation at a time while the step loops.</p>
  <p><b>Example:</b> PROC MEANS on the three scores above (70, 80, 90) shows \\(N=3\\), Mean \\(=80, S_{td}\\,\\mathrm{Dev}=10\\), Min \\(=70\\), Max \\(=90\\).</p>
  <div class="formula">proc means data=mylib.students n mean std min max;<br>&nbsp;&nbsp;var score;<br>run;</div>
  <div class="note">Missing semicolons are the most common error. Remember DATA= names the input dataset, OUT= names the output. Variable names: up to 32 characters, start with a letter or underscore.</div>`},
 { title:"Reading Raw Data: INPUT, INFILE, Informats", body:`
  <p>Use INFILE to point to an external file and INPUT to describe its fields. Three input styles: list (space-separated), column (fixed positions) and formatted (informats).</p>
  <div class="formula">data emp;<br>&nbsp;&nbsp;infile 'C:dataemp.csv' dlm=',' dsd firstobs=2 missover;<br>&nbsp;&nbsp;input id name :$12. joindate :date9. salary :comma8.;<br>&nbsp;&nbsp;format joindate date9. salary comma10.;<br>run;</div>
  <ul><li>\\(\\mathrm{DLM}=', '\\) sets the delimiter; DSD treats consecutive commas as a missing value and strips quotes.</li>
  <li>FIRSTOBS\\(=2\\) skips the header line; MISSOVER sets missing values for short lines.</li>
  <li>The colon modifier (:) allows informats with list input.</li>
  <li>Column input: <b>input name $ 1-10 age 12-13;</b> Pointer controls: @ and #.</li></ul>
  <p><b>Missing values:</b> numeric missing is a period (.), character missing is a blank. In comparisons, a numeric missing is smaller than every number, so <b>if \\(x&lt;50\\)</b> is TRUE for missing x.</p>
  <p><b>Example:</b> For \\(x=4\\), . , 6: <b>sum(x1, x2)</b> ignores missing, but <b>\\(x1+x2\\)</b> gives missing. \\(\\mathrm{MEAN}(4, ., 6)=5\\) (average of non-missing values).</p>
  <div class="note">An informat READS data (date9. turns 01JAN2024 into a number of days since 1 Jan 1960); a format DISPLAYS data. Do not mix them up.</div>`},
 { title:"Formats, New Variables & Conditional Processing", body:`
  <p>Create new variables with assignment statements and control logic with IF-THEN/ELSE or SELECT. User-defined formats are made with PROC FORMAT.</p>
  <div class="formula">data g;<br>&nbsp;&nbsp;set mylib.students;<br>&nbsp;&nbsp;length grade $ 1;<br>&nbsp;&nbsp;if score &gt;= 80 then grade = 'A';<br>&nbsp;&nbsp;else if score &gt;= 60 then grade = 'B';<br>&nbsp;&nbsp;else grade = 'C';<br>&nbsp;&nbsp;pass = (score &gt;= 40);<br>run;</div>
  <div class="formula">proc format;<br>&nbsp;&nbsp;value $sexf 'M'='Male' 'F'='Female';<br>&nbsp;&nbsp;value agegrp low-&lt;20='Teen' 20-&lt;40='Adult' 40-high='Older';<br>run;<br>proc print data=g; format sex $sexf.; run;</div>
  <p>Other tools: <b>SELECT/WHEN/OTHERWISE</b>, DO loops, IF with AND/OR, <b>WHERE</b> (filters before reading, works in procs) versus subsetting <b>IF</b> (DATA step only), and <b>DELETE</b>.</p>
  <p><b>Example:</b> Scores 70, 80, 90 get grades B, A, A; a score of 40 or more gives pass \\(=1\\).</p>
  <div class="note">Use the LENGTH statement before first use, otherwise a character variable takes the length of its first value and later values are truncated. Use ELSE IF (not many separate IFs) so a record is not overwritten. Formats end with a period in use (sexf. not sexf).</div>`},
 { title:"Combining Datasets: SET, MERGE, PROC SORT", body:`
  <p><b>Concatenate (stack)</b> with SET: rows are appended. <b>Merge (side by side)</b> with MERGE and BY: rows are matched on a key. MERGE requires both datasets sorted by the BY variable.</p>
  <div class="formula">data allrows;<br>&nbsp;&nbsp;set jan feb;<br>run;</div>
  <div class="formula">proc sort data=a; by id; run;<br>proc sort data=b; by id; run;<br>data both;<br>&nbsp;&nbsp;merge a(in=ina) b(in=inb);<br>&nbsp;&nbsp;by id;<br>&nbsp;&nbsp;if ina and inb;<br>run;</div>
  <p>IN= creates a temporary 0/1 flag showing whether the dataset contributed to the current row. Variants: <b>if ina;</b> (left join), <b>if ina and not inb;</b> (only in A), no IF (full outer join). PROC SORT options: <b>nodupkey</b> removes duplicate keys, <b>descending</b> reverses order.</p>
  <p><b>Example:</b> A has ids 1, 2, 3 and B has ids 2, 3, 4. Using "if ina and inb" gives ids 2 and 3 (2 rows). "if ina" gives 1, 2, 3 (3 rows). No IF gives 1, 2, 3, 4 (4 rows).</p>
  <div class="note">Forgetting PROC SORT gives the error "BY variables are not properly sorted". Variables with the same name in both datasets: values from the last dataset overwrite. Without BY, MERGE does a one-to-one (positional) merge.</div>`},
 { title:"Descriptive PROCs: PRINT, MEANS, FREQ, UNIVARIATE, TABULATE, CORR", body:`
  <div class="formula">proc print data=g noobs; var id score grade; run;</div>
  <div class="formula">proc means data=g n mean std maxdec=2;<br>&nbsp;&nbsp;class sex; var score;<br>run;</div>
  <div class="formula">proc freq data=g;<br>&nbsp;&nbsp;tables sex*grade / chisq nocol nopercent;<br>run;</div>
  <div class="formula">proc univariate data=g normal plot;<br>&nbsp;&nbsp;var score; histogram score / normal;<br>run;</div>
  <div class="formula">proc tabulate data=g;<br>&nbsp;&nbsp;class sex; var score;<br>&nbsp;&nbsp;table sex, score*(n mean);<br>run;</div>
  <div class="formula">proc corr data=g pearson spearman;<br>&nbsp;&nbsp;var x y z;<br>run;</div>
  <ul><li><b>MEANS</b>: summary statistics; CLASS gives group-wise results (BY needs sorted data).</li>
  <li><b>FREQ</b>: frequency and cross-tables; CHISQ gives the chi-square test of independence.</li>
  <li><b>UNIVARIATE</b>: moments, quantiles, extremes, normality tests (NORMAL), histogram, QQ plot.</li>
  <li><b>TABULATE</b>: custom table layout: rows, columns, statistics.</li>
  <li><b>CORR</b>: correlation matrix with p-values.</li></ul>
  <p><b>Example:</b> For scores 70, 80, 90 PROC MEANS (default) prints \\(N=3\\), Mean \\(=80, S_{td}\\,\\mathrm{Dev}=10\\), Minimum \\(=70\\), Maximum \\(=90\\).</p>
  <div class="note">PROC MEANS default statistics are N, Mean, Std Dev, Min, Max. Std Dev is the sample \\((n-1)\\) one. For normality, read the Shapiro-Wilk p-value: \\(p&lt;0.05\\) means reject normality.</div>`},
 { title:"PROC TTEST, ANOVA and GLM", body:`
  <div class="formula">proc ttest data=d h0=50;  var score; run;<br>proc ttest data=d;<br>&nbsp;&nbsp;class group; var score;<br>run;<br>proc ttest data=d; paired pre*post; run;</div>
  <p>The two-sample output gives both <b>Pooled</b> (equal variance) and <b>Satterthwaite</b> t-tests, plus a "Folded F" test for equality of variances. Choose by the F-test p-value.</p>
  <div class="vis" data-vis="anova"></div>
  <div class="formula">proc anova data=d;<br>&nbsp;&nbsp;class trt; model y = trt;<br>&nbsp;&nbsp;means trt / tukey;<br>run;</div>
  <div class="formula">proc glm data=d;<br>&nbsp;&nbsp;class trt block; model y = trt block;<br>&nbsp;&nbsp;lsmeans trt / pdiff adjust=tukey;<br>run; quit;</div>
  <p>PROC ANOVA is only for balanced designs; PROC GLM handles unbalanced data, covariates and interactions (use <b>trt*block</b>).</p>
  <p><b>Example:</b> Groups \\(A=4, 5, 6;B=6, 7, 8;C=8, 9, 10\\). Means 5, 7, 9; grand mean 7. \\(\\mathrm{SSB}=3(4+0+4)=24, \\mathrm{SSW}=2+2+2=6\\). \\(\\mathrm{MSB}=24/2=12, \\mathrm{MSW}=6/6=1, F=12>F_{0}._{05}(2, 6)=5.14\\), so group means differ.</p>
  <div class="note">CLASS statement is needed for categorical factors, otherwise they are treated as numeric. Post-hoc tests (MEANS / LSMEANS) only make sense after a significant F.</div>`},
 { title:"PROC REG and ODS", body:`
  <div class="formula">proc reg data=d;<br>&nbsp;&nbsp;model y = x1 x2 / vif dw clb;<br>&nbsp;&nbsp;output out=res p=yhat r=resid;<br>run; quit;</div>
  <p>Output: ANOVA table \\((F, R^{2}, \\mathrm{Adj}\\,R^{2})\\), Parameter Estimates (coefficient, SE, t, p). Useful options: <b>vif</b> (multicollinearity), <b>dw</b> (Durbin-Watson), <b>clb</b> (CI for \\(\\beta\\)), <b>selection=stepwise slentry\\(=0.15\\) slstay\\(=0.15\\)</b> (variable selection). OUTPUT OUT= saves fitted values and residuals; PLOT residual.*predicted. gives diagnostic plots.</p>
  <div class="vis" data-vis="regfit"></div>
  <p><b>Example:</b> \\(x=1, \\ldots , 5\\) and \\(y=2, 4, 5, 4, 5\\). \\(\\bar{x}=3, \\bar{y}=4, S_{xy}=6, S_{xx}=10\\). SAS reports slope \\(=6/10=0.6\\) and Intercept \\(=4-0.6\\times 3=2.2\\). \\(\\mathrm{SST}=6, \\mathrm{SSR}=0.6^{2}\\times 10=3.6\\), so \\(R^{2}=0.6\\).</p>
  <p><b>ODS</b> (Output Delivery System) controls where output goes and in which format:</p>
  <div class="formula">ods html file='C:out
eport.html';<br>ods graphics on;<br>proc reg data=d; model y = x1; run; quit;<br>ods html close;</div>
  <div class="formula">ods trace on;<br>ods output ParameterEstimates=pe;<br>ods rtf file='out.rtf'; ... ods rtf close;</div>
  <div class="note">ODS TRACE ON lists the names of output tables; ODS OUTPUT saves any table as a dataset. Always close the ODS destination, otherwise the file stays locked. PROC REG is interactive, so end it with QUIT;.</div>`}
]},
{ id:"reg2", name:"Regression Analysis II", topics:[
 { title:"Generalized & Weighted Least Squares (Aitken)", body:`
  <p>When \\(\\mathrm{Var}(u)=\\sigma ^{2}\\Omega\\) with \\(\\Omega\\) known and not identity (heteroscedastic or autocorrelated errors), OLS is still unbiased but no longer BLUE. <b>Aitken's theorem</b>: the GLS estimator is BLUE.</p>
  <div class="formula">β̂\\(\\displaystyle _{\\mathrm{GLS}}=(X'\\Omega^{-1}X)^{-1}X'\\Omega^{-1}y\\)</div>
  <div class="formula">Var(β̂\\(\\displaystyle _{\\mathrm{GLS}}\\)) \\(\\displaystyle =\\sigma^{2}(X'\\Omega^{-1}X)^{-1}\\)</div>
  <p>Idea: find P with \\(P'P=\\Omega ^{-1}\\), transform \\(y*=\\mathrm{Py}, X*=PX\\); the new errors are spherical, then apply OLS. <b>WLS</b> is GLS with diagonal \\(\\Omega\\): weights \\(w_{i}=1/\\mathrm{Var}(u_{i})\\).</p>
  <p><b>Example:</b> \\(y=\\beta x+u, \\mathrm{Var}(u_{i})=\\sigma ^{2}x_{i}^{2}\\). Weights \\(1/x_{i}^{2}\\). Data \\(x=1, 2, 4;y=2, 6, 8\\). β̂\\(_{\\mathrm{WLS}}=\\sum wxy/\\sum wx^{2}=\\sum (y/x)/n=(2+3+2)/3=2.333\\). OLS gives \\(\\sum xy/\\sum x^{2}=46/21=2.190\\).</p>
  <div class="note">In practice \\(\\Omega\\) is unknown, so we estimate it (feasible GLS). Then optimality holds only asymptotically. OLS standard errors are wrong under heteroscedasticity, so t and F tests are unreliable.</div>`},
 { title:"Tests of Linear Restrictions", body:`
  <p>To test \\(H_{0}:R\\beta =r\\) (q independent restrictions) in the model with k parameters, compare the restricted and unrestricted fits.</p>
  <div class="formula">\\(\\displaystyle F=[\\frac{\\mathrm{RSS}_{R}-\\mathrm{RSS}_{U}}{q}]/[\\frac{\\mathrm{RSS}_{U}}{n-k}]\\quad \\sim F(q, n-k)\\)</div>
  <div class="formula">F = (Rβ̂ \\(\\displaystyle -r\\))\\(\\displaystyle '[R(X'X)^{-1}R']^{-1}\\)(Rβ̂ \\(\\displaystyle -r\\)) / \\(\\displaystyle (qs^{2})\\)</div>
  <p>Special cases: a single coefficient \\((q=1, F=t^{2})\\); overall significance (all slopes zero, \\(F=[R^{2}/(k-1)]/[(1-R^{2})/(n-k)]\\)); equality of coefficients \\(\\beta _{2}=\\beta _{3}\\); the Chow test (same coefficients in two subsamples).</p>
  <p><b>Example:</b> \\(n=23, k=3\\) (parameters, including the intercept), test \\(\\beta _{2}=\\beta _{3}=0(q=2)\\). \\(\\mathrm{RSS}_{U}=100, \\mathrm{RSS}_{R}=150\\). \\(F=(50/2)/(100/20)=25/5=5\\). Since \\(F_{0}._{05}(2, 20)=3.49\\), reject \\(H_{0}\\): the two variables are jointly significant.</p>
  <div class="note">\\(\\mathrm{RSS}_{R}\\ge \\mathrm{RSS}_{U}\\) always; if the F value comes out negative you swapped them. Degrees of freedom: q in the numerator (number of restrictions, not number of variables) and \\(n-k\\) (of the unrestricted model) in the denominator.</div>`},
 { title:"Heteroscedasticity: Detection Tests", body:`
  <p>Heteroscedasticity means \\(\\mathrm{Var}(u_{i})=\\sigma _{i}^{2}\\) is not constant. Consequences: OLS unbiased but inefficient, standard errors biased.</p>
  <div class="vis" data-vis="resid"></div>
  <p><b>Goldfeld-Quandt:</b> order observations by the suspected variable, drop c central ones, fit separate regressions on the two halves.</p>
  <div class="formula">\\(\\displaystyle F=\\frac{\\mathrm{RSS}_{2}}{\\mathrm{RSS}_{1}}\\quad \\sim F(\\frac{n-c-2k}{2}, \\frac{n-c-2k}{2})\\)</div>
  <p><b>Breusch-Pagan:</b> regress \\(\\hat{u}_{i}^{2}\\) on suspected variables z (p of them); under \\(H_{0}\\) (homoscedasticity)</p>
  <div class="formula">\\(\\displaystyle LM=nR^{2}_{aux}\\quad \\sim \\chi^{2}(p)\\)</div>
  <p><b>White:</b> same, but regress \\(\\hat{u}_{i}^{2}\\) on all regressors, their squares and cross-products (no form assumed).</p>
  <p><b>Example (GQ):</b> \\(n=30, c=6, k=2\\). Each half has \\((30-6-4)/2=10\\,\\mathrm{df}\\). \\(\\mathrm{RSS}_{1}=20, \\mathrm{RSS}_{2}=80\\), so \\(F=4>F_{0}._{05}(10, 10)=2.98\\): reject, heteroscedasticity present.</p>
  <p><b>Example (BP):</b> \\(n=50\\), auxiliary \\(R^{2}=0.16, p=2:LM=8>\\chi ^{2}_{0}._{05}(2)=5.99\\), so reject \\(H_{0}\\).</p>
  <div class="note">Remedies: WLS, log transformation, or White's robust standard errors. In GQ put the larger-variance group in the numerator. BP assumes normal errors.</div>`},
 { title:"Multicollinearity, VIF & Ridge Regression", body:`
  <p>Multicollinearity means regressors are (nearly) linearly related. OLS stays unbiased but variances inflate, signs may flip, \\(R^{2}\\) high but t-values insignificant.</p>
  <div class="formula">\\(\\displaystyle \\mathrm{VIF}_{j}=\\frac{1}{1-R^{2}_{j}}\\),  Tolerance \\(\\displaystyle =1-R^{2}_{j}\\)</div>
  <div class="formula">Var(β̂ⱼ) \\(\\displaystyle =\\sigma^{2}\\cdot \\frac{\\mathrm{VIF}_{j}}{\\sum} (x_{j}-\\bar{x}_{j})^{2}\\)</div>
  <p>\\(R^{2}_{j}\\) is from regressing \\(x_{j}\\) on the other regressors. Rule: \\(\\mathrm{VIF}>10\\) is serious. Other signs: small eigenvalues of \\(X'X\\), condition index \\(=\\sqrt{\\lambda _{\\max }/\\lambda _{\\min }}>30\\), large pairwise correlations.</p>
  <p><b>Remedies:</b> drop or combine variables, collect more data, principal components, and <b>ridge regression</b>:</p>
  <div class="formula">β̂\\(\\displaystyle (k)=(X'X+kI)^{-1}X'y, \\quad k>0\\)</div>
  <p>Ridge is biased but has smaller variance; \\(k=0\\) gives OLS.</p>
  <p><b>Example:</b> \\(R^{2}_{j}=0.90\\) gives \\(\\mathrm{VIF}=10\\), so SE is \\(\\sqrt{10}=3.16\\) times larger than with uncorrelated regressors. For standardized X with \\(r=0.9:X'X=[[1, 0.9], [0.9, 1]]\\), eigenvalues 1.9 and 0.1, condition index \\(\\sqrt{19}=4.36\\); ridge with \\(k=0.1\\) shifts them to 2.0 and 0.2.</p>
  <div class="note">Multicollinearity is a sample problem, not a violation of the Gauss-Markov assumptions (unless it is perfect). Do not drop a theoretically important variable; that causes omitted-variable bias.</div>`},
 { title:"Variable Selection: Stepwise, Cp, AIC", body:`
  <p>Goal: a parsimonious model that predicts well. Methods: forward selection, backward elimination, stepwise (add and remove with F-to-enter and F-to-remove), best subsets using a criterion.</p>
  <div class="formula">Mallows \\(\\displaystyle \\mathrm{Cp}=\\frac{\\mathrm{RSS}_{p}}{s^{2}}-(n-2p)\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{AIC}=n\\,\\ln (\\frac{\\mathrm{RSS}_{p}}{n})+2p\\)</div>
  <div class="formula">\\(\\displaystyle \\mathrm{Adj}\\,R^{2}=1-(1-R^{2})\\frac{n-1}{n-p}\\)</div>
  <p>Here p = number of parameters (incl. intercept) in the subset model and \\(s^{2}=\\mathrm{RSS}/(n-k)\\) from the FULL model. A good model has \\(\\mathrm{Cp}\\approx p\\); choose the smallest AIC.</p>
  <p><b>Example:</b> \\(n=20\\), full model \\(k=5\\) with \\(\\mathrm{RSS}=30\\), so \\(s^{2}=30/15=2\\). Subset with \\(p=3\\) has \\(\\mathrm{RSS}=34:\\mathrm{Cp}=34/2-(20-6)=17-14=3=p\\), so it is adequate.</p>
  <p>AIC: subset \\(=20\\,\\ln (34/20)+6=10.61+6=16.61\\); full \\(=20\\,\\ln (30/20)+10=8.11+10=18.11\\). The subset model has smaller AIC and is preferred.</p>
  <div class="note">For the full model, \\(\\mathrm{Cp}=k\\) always. Cp much larger than p signals bias (missing important variables). Stepwise p-values are not valid for ordinary inference after selection.</div>`},
 { title:"Autocorrelation: Durbin-Watson & Cochrane-Orcutt", body:`
  <p>Autocorrelation: errors are correlated over time, e.g. \\(u_{t}=\\rho u_{t-1}+\\varepsilon _{t}(AR(1))\\). OLS remains unbiased but SEs are understated (when \\(\\rho >0\\)), so t-values look too large.</p>
  <div class="formula">\\(\\displaystyle d=\\sum \\frac{(e_{t}-e_{t-1})^{2}}{\\sum} e_{t}^{2}\\quad \\approx 2\\)(\\(\\displaystyle 1-\\) ρ̂)</div>
  <p>Range 0 to \\(4:d\\approx 2\\) no autocorrelation; d near 0 positive; d near 4 negative. Decision using \\(dL, dU:d&lt;dL\\) reject \\(H_{0}\\) (positive); \\(dL\\le d\\le dU\\) inconclusive; \\(d>dU\\) accept; for negative use \\(4-d\\).</p>
  <p><b>Cochrane-Orcutt:</b> estimate ρ̂ from residuals, transform, and re-estimate; iterate until ρ̂ converges.</p>
  <div class="formula">\\(\\displaystyle y_{t}-\\) ρ̂\\(\\displaystyle y_{t-1}=\\beta_{0}\\)(\\(\\displaystyle 1-\\) ρ̂) \\(\\displaystyle +\\beta_{1}\\)(\\(\\displaystyle x_{t}-\\) ρ̂\\(\\displaystyle x_{t-1}\\)) \\(\\displaystyle +\\varepsilon_{t}\\)</div>
  <p><b>Example:</b> \\(n=30\\), one regressor, \\(d=0.64\\). The 5% bounds are \\(dL=1.28\\) and \\(dU=1.57\\). Since \\(0.64&lt;1.28\\), reject \\(H_{0}\\): positive autocorrelation, with ρ̂ \\(\\approx 1-0.64/2=0.68\\). Transform with ρ̂ \\(=0.68\\).</p>
  <div class="note">DW is invalid when a lagged dependent variable is a regressor (use Durbin's h-test) and the model must have an intercept. The first observation is lost in Cochrane-Orcutt (Prais-Winsten keeps it by scaling with \\(\\sqrt{1-\\rho ^{2}}\\)).</div>`},
 { title:"Dummy Variables", body:`
  <p>Dummy (indicator) variables bring qualitative factors (sex, region, season) into regression. If a factor has g categories, use \\(g-1\\) dummies; the omitted one is the base category.</p>
  <div class="vis" data-vis="dummy"></div>
  <div class="formula">\\(\\displaystyle Y=\\beta_{0}+\\beta_{1}D+\\beta_{2}X+u, \\quad D=1\\) (male), 0 (female)</div>
  <div class="formula">With interaction: \\(\\displaystyle Y=\\beta_{0}+\\beta_{1}D+\\beta_{2}X+\\beta_{3}(D\\cdot X)+u\\)</div>
  <p>\\(\\beta _{1}\\) is the difference in intercepts relative to the base group; \\(\\beta _{3}\\) is the difference in slopes. The Chow test compares pooled with separate regressions; the dummy approach tests the same thing.</p>
  <p><b>Example:</b> Fitted wage \\(=5+2D+0.5X\\) (X = years of experience). For a woman with \\(X=10:5+5=10\\). For a man with \\(X=10:5+2+5=12\\). Men earn 2 units more at any experience level.</p>
  <p>Seasonal data (4 quarters) need 3 dummies: Q2, Q3, Q4, with Q1 as base.</p>
  <div class="note">Dummy variable trap: g dummies plus an intercept give perfect multicollinearity (the dummies sum to the constant column). Interpret every dummy coefficient relative to the base category.</div>`},
 { title:"Errors in Variables", body:`
  <p>The true regressor X is observed with measurement error: \\(X*=X+v\\), where v is independent of X and u with variance \\(\\sigma _{v}^{2}\\). Then OLS of y on X* is biased and inconsistent. Error in y alone only inflates the variance; it does not bias β̂.</p>
  <div class="formula">plim β̂ \\(\\displaystyle =\\beta \\cdot \\frac{\\sigma^{2}_{x}}{\\sigma^{2}_{x}+\\sigma^{2}_{v}}=\\beta \\lambda\\)</div>
  <p>\\(\\lambda\\) is the reliability ratio \\((0&lt;\\lambda &lt;1)\\). The estimate is biased toward zero (<b>attenuation bias</b>). The bigger the error variance, the bigger the bias.</p>
  <p><b>Remedies:</b> instrumental variables (a Z correlated with X but not with v and u), known reliability ratio (β̂/\\(\\lambda\\)), repeated measurements, grouping methods (Wald).</p>
  <div class="formula">IV estimator: β̂\\(\\displaystyle _{IV}=\\sum z_{i}\\frac{y_{i}}{\\sum} z_{i}x_{i}\\)*</div>
  <p><b>Example:</b> \\(\\sigma ^{2}_{x}=9, \\sigma ^{2}_{v}=1\\), true \\(\\beta =2\\). \\(\\lambda =9/10=0.9\\), so plim β̂ \\(=1.8\\). If the reliability ratio is known, corrected estimate \\(=1.8/0.9=2\\).</p>
  <div class="note">Attenuation applies to the simple regression; with several regressors the direction of bias in the other coefficients can be unclear. Error in the dependent variable: no bias. Error in a regressor: bias and inconsistency.</div>`}
]}
];
