/* ============ 4th YEAR, 2nd SEMESTER (part 2): Generalized Linear Models (topic explanations) ============ */
TOPICS.push(
{ id:"glm", name:"Generalized Linear Models", topics:[
 { title:"Statistical Modelling, Formulation, Estimation & Residuals", body:`
  <p>A <b>statistical model</b> splits the response into a systematic part (the mean, explained by covariates) and a random part (the error). Steps: formulate the model, estimate the parameters, check the fit with residuals, and then interpret and predict.</p>
  <p>The classical linear model \\(y=X\\beta +e\\) (normal errors, constant variance) fails for binary, count or skewed positive data. A <b>generalized linear model (GLM)</b> keeps the linear predictor but allows other distributions and a link between the mean and the predictor.</p>
  <div class="formula">Residual \\(\\displaystyle (raw)=y-\\) μ̂  ;  Pearson: rᴾ = (\\(\\displaystyle y-\\) μ̂)/\\(\\displaystyle \\sqrt{V}\\)(μ̂)  ;  Deviance residual: sign(\\(\\displaystyle y-\\) μ̂)\\(\\displaystyle \\sqrt{d_{i}}\\)</div>
  <p>Residual plots against fitted values and covariates reveal non-linearity, wrong variance function and outliers; for a good model they show no pattern.</p>
  <p><b>Example:</b> Number of accidents (counts) per month, modelled with a normal linear model, may give negative fitted values. A Poisson GLM with a log link guarantees \\(\\mu >0\\).</p>
  <div class="note">Mistake: transforming y to make a linear model fit when a GLM can model the mean directly on its natural scale.</div>`},
 { title:"Exponential Family & Its Properties", body:`
  <p>A distribution belongs to the (one-parameter) <b>exponential family</b> if its density can be written</p>
  <div class="formula">\\(\\displaystyle f(y;\\theta , \\phi)=\\exp \\{[y\\theta -b(\\theta)]/a(\\phi)+c(y, \\phi)\\}\\)</div>
  <div class="formula">\\(\\displaystyle E(Y)=b'(\\theta)\\quad ;\\quad \\mathrm{Var}(Y)=a(\\phi)\\cdot b''(\\theta)=a(\\phi)\\cdot V(\\mu)\\)</div>
  <p>\\(\\theta\\) is the <b>canonical (natural) parameter</b>, \\(\\phi\\) the dispersion and \\(V(\\mu )\\) the <b>variance function</b>.</p>
  <table><tr><th>Distribution</th><th>\\(\\theta\\)</th><th>\\(b(\\theta )\\)</th><th>\\(V(\\mu )\\)</th><th>Canonical link</th></tr>
  <tr><td>Normal</td><td>\\(\\mu\\)</td><td>\\(\\theta ^{2}/2\\)</td><td>1</td><td>identity</td></tr>
  <tr><td>Poisson</td><td>\\(\\ln \\,\\mu\\)</td><td>\\(e^{\\theta }\\)</td><td>\\(\\mu\\)</td><td>log</td></tr>
  <tr><td>Bernoulli / binomial</td><td>\\(\\ln [\\mu /(1-\\mu )]\\)</td><td>\\(\\ln (1+e^{\\theta })\\)</td><td>\\(\\mu (1-\\mu )\\)</td><td>logit</td></tr>
  <tr><td>Gamma / exponential</td><td>\\(-1/\\mu\\)</td><td>\\(-\\ln (-\\theta )\\)</td><td>\\(\\mu ^{2}\\)</td><td>inverse</td></tr></table>
  <p><b>Example:</b> Poisson: \\(b(\\theta )=e^{\\theta }\\) gives \\(E(Y)=b'=e^{\\theta }=\\mu\\) and \\(\\mathrm{Var}(Y)=b''=e^{\\theta }=\\mu\\). Bernoulli with \\(p=0.8:\\theta =\\ln (0.8/0.2)=1.386\\).</p>
  <div class="note">Mistake: the mean–variance link is fixed by the distribution. Poisson data with variance greater than the mean (overdispersion) need extra treatment.</div>`},
 { title:"Components of a GLM & Link Functions", body:`
  <p>Every GLM has three components:</p>
  <ul><li><b>Random component:</b> y has a distribution from the exponential family.</li>
  <li><b>Systematic component:</b> the linear predictor \\(\\eta =X\\beta =\\beta _{0}+\\beta _{1}x_{1}+\\ldots +\\beta _{px}{}_{p}\\).</li>
  <li><b>Link function:</b> \\(g(\\mu )=\\eta , a\\) monotone function connecting the mean and the linear predictor.</li></ul>
  <div class="vis" data-vis="glmlink"></div>
  <div class="formula">Identity: \\(\\displaystyle \\mu =\\eta \\quad ;\\quad \\mathrm{Log}:\\mu =e^{\\eta}\\)  ;  Logit: \\(\\displaystyle \\mu =\\frac{e^{\\eta}}{1+e^{\\eta}}\\)</div>
  <p>The <b>canonical link</b> sets \\(\\eta =\\theta\\) (identity for normal, log for Poisson, logit for binomial) and gives convenient sufficient statistics. The logit link maps any \\(\\eta\\) to a probability in (0, 1); the log link keeps \\(\\mu >0\\).</p>
  <p><b>Example:</b> Logit: \\(\\eta =0\\) gives \\(\\mu =0.5;\\eta =1\\) gives \\(\\mu =0.731\\). \\(\\mathrm{Log}:\\eta =1\\) gives \\(\\mu =e=2.718\\), and a one-unit rise in x multiplies the mean by \\(e^{\\beta }_{1}\\).</p>
  <div class="note">Mistake: using the identity link for binary data may give "probabilities" outside 0–1.</div>`},
 { title:"Maximum Likelihood, Score Function, Information & IRLS", body:`
  <p>The log-likelihood is \\(l(\\beta )=\\Sigma [(y_{i}\\theta _{i}-b(\\theta _{i}))/a(\\phi )+c]\\). The <b>score function</b> is \\(U(\\beta )=\\partial l/\\partial \\beta (E(U)=0)\\), and the <b>information matrix</b> is \\(I(\\beta )=E[-\\partial ^{2}l/\\partial \\beta \\partial \\beta ^{T}]=X^{T}WX/\\phi\\) with diagonal weights \\(w_{i}=1/[V(\\mu _{i})g'(\\mu _{i})^{2}]\\).</p>
  <div class="formula">Method of scoring (Fisher): \\(\\displaystyle \\beta^{(m+1)}=\\beta^{(m)}+I^{-1}U\\quad \\Leftrightarrow \\quad \\beta^{(m+1)}=(X^{T}WX)^{-1}X^{T}\\mathrm{Wz}, \\quad z=\\eta +(y-\\mu)g'(\\mu)\\)</div>
  <p>This is <b>iteratively reweighted least squares (IRLS)</b>: at each step, run a weighted regression of the working response z on X, then update \\(\\mu , W\\) and z. For canonical links Fisher scoring equals Newton–Raphson.</p>
  <p><b>Example:</b> Poisson, intercept only, \\(y=(2, 4, 3), \\log\\) link, start \\(\\beta =0\\). Then \\(\\mu =1, w_{i}=\\mu =1\\) and \\(z=(y-1)=(1, 3, 2)\\), giving \\(\\beta =6/3=2\\). Next: \\(\\mu =e^{2}=7.39, \\bar{z}=2+(3-7.39)/7.39=1.41\\). Then \\(1.14, \\ldots\\) converging to the MLE β̂ \\(=\\ln \\,3=1.0986\\) (μ̂ \\(=\\bar{y}=3\\)).</p>
  <div class="note">Mistake: poor starting values or perfect separation (in logistic regression) can prevent IRLS from converging.</div>`},
 { title:"Inference: Deviance, Likelihood Ratio, AIC & BIC", body:`
  <p>The <b>deviance</b> compares the fitted model with the saturated model (one parameter per observation): \\(D=2\\)[l(saturated) \\(-l\\)(model)]. For the Poisson, \\(D=2\\Sigma\\)[y ln(y/μ̂) − (\\(y-\\) μ̂)]. For nested models the drop in deviance, \\(\\Delta D\\), is approximately \\(\\chi ^{2}\\) with df equal to the number of extra parameters (<b>log-likelihood ratio statistic</b>).</p>
  <div class="formula">Wald: z = β̂/SE(β̂)  ;  \\(\\displaystyle \\mathrm{AIC}=-2l+2k\\quad ;\\quad \\mathrm{BIC}=-2l+k\\,\\ln \\,n\\)  ;  McFadden pseudo\\(\\displaystyle -R^{2}=1-l\\)_model/l_null</div>
  <p>The <b>Hosmer–Lemeshow</b> test checks the fit of a logistic model by grouping observations by predicted risk and comparing observed with expected counts. Smaller AIC/BIC is better; BIC penalises complexity more when \\(n>7\\).</p>
  <p><b>Example:</b> \\(\\Delta D=7.2\\) for 1 added parameter: \\(7.2>6.63\\) (\\(\\chi ^{2}_{1}\\) at 1%), so significant. With \\(l=-50, k=3, n=100:\\mathrm{AIC}=106\\) and \\(\\mathrm{BIC}=100+3(4.605)=113.8\\). With l_null \\(=-69.3\\) and l_model \\(=-50\\): pseudo\\(-R^{2}=0.28\\).</p>
  <div class="note">Mistake: the deviance chi-square approximation is poor for sparse binary data, so use \\(\\Delta D\\) between models, not the absolute deviance.</div>`},
 { title:"Poisson Regression, Dispersion & Residuals", body:`
  <p><b>Poisson regression</b> models counts: \\(\\ln \\,\\mu =\\beta _{0}+\\beta _{1}x_{1}+\\ldots\\) (log link), with an <b>offset</b> ln(exposure) if observations have different exposure times. \\(\\exp (\\beta _{j})\\) is the multiplicative effect (rate ratio) of a one-unit increase in \\(x_{j}\\).</p>
  <p>The Poisson has \\(\\mathrm{Var}=\\mu\\). If the data show <b>overdispersion</b> (\\(\\mathrm{Var}>\\) mean), standard errors are too small. Estimate the dispersion by φ̂ = Pearson \\(\\chi ^{2}/(n-p)\\); φ̂ well above 1 means overdispersion. Remedies: quasi-Poisson, negative binomial, or random effects.</p>
  <p><b>Residuals:</b> Pearson (\\(y-\\) μ̂)/\\(\\sqrt{V}\\)(μ̂), deviance residuals, and <b>Anscombe</b> residuals (a transformation chosen to make the residual distribution nearly normal).</p>
  <p><b>Example:</b> \\(\\beta _{1}=0.405\\) gives a rate ratio \\(e^{0.405}=1.5\\), i.e. 50% more events per unit of x. Pearson \\(\\chi ^{2}=60\\) with 40 df: φ̂ \\(=1.5\\) (overdispersed). Pearson residual for \\(y=5\\) and μ̂ \\(=4:(5-4)/\\sqrt{4}=0.5\\).</p>
  <div class="note">Mistake: ignoring overdispersion makes everything look significant.</div>`},
 { title:"Quasi-Likelihood & Generalized Estimating Equations (GEE)", body:`
  <p><b>Quasi-likelihood</b> needs only the mean–variance relationship \\(\\mathrm{Var}(Y)=\\phi V(\\mu )\\), not the full distribution; the estimating equations have the same form as GLM score equations and give consistent estimates of \\(\\beta\\), with dispersion \\(\\phi\\) estimated separately.</p>
  <p><b>GEE</b> extends this to <b>repeated measures</b> or clustered data (several correlated observations per subject). GEE gives <i>population-averaged</i> (marginal) effects. Specify the mean model, the variance function and a <b>working correlation matrix</b> \\(R(\\alpha )\\): independence, exchangeable (equal correlation \\(\\rho\\)), AR(1) (correlation decays with lag) or unstructured.</p>
  <div class="formula">Robust (sandwich) variance: \\(\\displaystyle \\hat{V}=A^{-1}BA^{-1}\\)  ;  consistent even when \\(\\displaystyle R(\\alpha)\\) is misspecified</div>
  <p><b>Example:</b> Four visits per patient, exchangeable \\(\\rho =0.3\\): the working correlation matrix has 1 on the diagonal and 0.3 elsewhere. The variance inflation relative to independence for the mean is about \\(1+(4-1)(0.3)=1.9\\).</p>
  <div class="note">Mistake: GEE needs a reasonable number of subjects (clusters) for the robust standard errors to be reliable.</div>`},
 { title:"Linear Mixed Models & Generalized Linear Mixed Models", body:`
  <p>Mixed models add <b>random effects</b> to the usual fixed effects to describe subject- or cluster-specific variation. <b>Linear mixed model (LMM):</b> \\(y=X\\beta +\\mathrm{Zb}+e\\), with \\(b\\sim N(0, G)\\) and \\(e\\sim N(0, R)\\). A <b>random intercept</b> model: \\(y_{ij}=\\beta _{0}+\\beta _{1}x_{ij}+b_{i}+e_{ij}\\).</p>
  <div class="formula">\\(\\displaystyle \\mathrm{ICC}=\\frac{\\sigma_{b}^{2}}{\\sigma_{b}^{2}+\\sigma_{e}^{2}}\\quad ;\\quad \\mathrm{GLMM}:g(\\mu_{ij})=x_{ij}^{T}\\beta +z_{ij}^{T}b_{i}\\)</div>
  <p>A <b>generalized linear mixed model (GLMM)</b> uses a link function and a random effect inside the linear predictor (e.g. logistic with a random intercept). Its coefficients are <b>subject-specific</b> effects, and with a logit link they are larger in magnitude than the marginal (GEE) coefficients. Estimation uses numerical integration or approximations such as Laplace.</p>
  <p><b>Example:</b> \\(\\sigma _{b}^{2}=4\\) and \\(\\sigma _{e}^{2}=12:\\mathrm{ICC}=0.25\\), so 25% of the variability lies between subjects. Repeated measures (the same people measured several times) are the typical application.</p>
  <div class="note">Mistake: interpreting a GLMM coefficient as a population-average effect; it is conditional on the random effect (the same subject).</div>`}
]}
);
