/* ============ 4th YEAR, 2nd SEMESTER (part 2): Generalized Linear Models (topic explanations) ============ */
TOPICS.push(
{ id:"glm", name:"Generalized Linear Models", topics:[
 { title:"Statistical Modelling, Formulation, Estimation & Residuals", body:`
  <p>A <b>statistical model</b> splits the response into a systematic part (the mean, explained by covariates) and a random part (the error). Steps: formulate the model, estimate the parameters, check the fit with residuals, and then interpret and predict.</p>
  <p>The classical linear model y = Xβ + e (normal errors, constant variance) fails for binary, count or skewed positive data. A <b>generalized linear model (GLM)</b> keeps the linear predictor but allows other distributions and a link between the mean and the predictor.</p>
  <div class="formula">Residual (raw) = y − μ̂  ;  Pearson: rᴾ = (y − μ̂)/√V(μ̂)  ;  Deviance residual: sign(y − μ̂)√dᵢ</div>
  <p>Residual plots against fitted values and covariates reveal non-linearity, wrong variance function and outliers; for a good model they show no pattern.</p>
  <p><b>Example:</b> Number of accidents (counts) per month, modelled with a normal linear model, may give negative fitted values. A Poisson GLM with a log link guarantees μ &gt; 0.</p>
  <div class="note">Mistake: transforming y to make a linear model fit when a GLM can model the mean directly on its natural scale.</div>`},
 { title:"Exponential Family & Its Properties", body:`
  <p>A distribution belongs to the (one-parameter) <b>exponential family</b> if its density can be written</p>
  <div class="formula">f(y; θ, φ) = exp{ [yθ − b(θ)]/a(φ) + c(y, φ) }</div>
  <div class="formula">E(Y) = b′(θ)  ;  Var(Y) = a(φ)·b″(θ) = a(φ)·V(μ)</div>
  <p>θ is the <b>canonical (natural) parameter</b>, φ the dispersion and V(μ) the <b>variance function</b>.</p>
  <table><tr><th>Distribution</th><th>θ</th><th>b(θ)</th><th>V(μ)</th><th>Canonical link</th></tr>
  <tr><td>Normal</td><td>μ</td><td>θ²/2</td><td>1</td><td>identity</td></tr>
  <tr><td>Poisson</td><td>ln μ</td><td>e^θ</td><td>μ</td><td>log</td></tr>
  <tr><td>Bernoulli / binomial</td><td>ln[μ/(1 − μ)]</td><td>ln(1 + e^θ)</td><td>μ(1 − μ)</td><td>logit</td></tr>
  <tr><td>Gamma / exponential</td><td>−1/μ</td><td>−ln(−θ)</td><td>μ²</td><td>inverse</td></tr></table>
  <p><b>Example:</b> Poisson: b(θ) = e^θ gives E(Y) = b′ = e^θ = μ and Var(Y) = b″ = e^θ = μ. Bernoulli with p = 0.8: θ = ln(0.8/0.2) = 1.386.</p>
  <div class="note">Mistake: the mean–variance link is fixed by the distribution. Poisson data with variance greater than the mean (overdispersion) need extra treatment.</div>`},
 { title:"Components of a GLM & Link Functions", body:`
  <p>Every GLM has three components:</p>
  <ul><li><b>Random component:</b> y has a distribution from the exponential family.</li>
  <li><b>Systematic component:</b> the linear predictor η = Xβ = β₀ + β₁x₁ + … + β_px_p.</li>
  <li><b>Link function:</b> g(μ) = η, a monotone function connecting the mean and the linear predictor.</li></ul>
  <div class="vis" data-vis="glmlink"></div>
  <div class="formula">Identity: μ = η  ;  Log: μ = e^η  ;  Logit: μ = e^η/(1 + e^η)</div>
  <p>The <b>canonical link</b> sets η = θ (identity for normal, log for Poisson, logit for binomial) and gives convenient sufficient statistics. The logit link maps any η to a probability in (0, 1); the log link keeps μ &gt; 0.</p>
  <p><b>Example:</b> Logit: η = 0 gives μ = 0.5; η = 1 gives μ = 0.731. Log: η = 1 gives μ = e = 2.718, and a one-unit rise in x multiplies the mean by e^β₁.</p>
  <div class="note">Mistake: using the identity link for binary data may give "probabilities" outside 0–1.</div>`},
 { title:"Maximum Likelihood, Score Function, Information & IRLS", body:`
  <p>The log-likelihood is l(β) = Σ[(yᵢθᵢ − b(θᵢ))/a(φ) + c]. The <b>score function</b> is U(β) = ∂l/∂β (E(U) = 0), and the <b>information matrix</b> is I(β) = E[−∂²l/∂β∂βᵀ] = XᵀWX/φ with diagonal weights wᵢ = 1/[V(μᵢ)g′(μᵢ)²].</p>
  <div class="formula">Method of scoring (Fisher): β⁽ᵐ⁺¹⁾ = β⁽ᵐ⁾ + I⁻¹U  ⇔  β⁽ᵐ⁺¹⁾ = (XᵀWX)⁻¹XᵀWz,  z = η + (y − μ)g′(μ)</div>
  <p>This is <b>iteratively reweighted least squares (IRLS)</b>: at each step, run a weighted regression of the working response z on X, then update μ, W and z. For canonical links Fisher scoring equals Newton–Raphson.</p>
  <p><b>Example:</b> Poisson, intercept only, y = (2, 4, 3), log link, start β = 0. Then μ = 1, wᵢ = μ = 1 and z = (y − 1) = (1, 3, 2), giving β = 6/3 = 2. Next: μ = e² = 7.39, z̄ = 2 + (3 − 7.39)/7.39 = 1.41. Then 1.14, … converging to the MLE β̂ = ln 3 = 1.0986 (μ̂ = ȳ = 3).</p>
  <div class="note">Mistake: poor starting values or perfect separation (in logistic regression) can prevent IRLS from converging.</div>`},
 { title:"Inference: Deviance, Likelihood Ratio, AIC & BIC", body:`
  <p>The <b>deviance</b> compares the fitted model with the saturated model (one parameter per observation): D = 2[l(saturated) − l(model)]. For the Poisson, D = 2Σ[y ln(y/μ̂) − (y − μ̂)]. For nested models the drop in deviance, ΔD, is approximately χ² with df equal to the number of extra parameters (<b>log-likelihood ratio statistic</b>).</p>
  <div class="formula">Wald: z = β̂/SE(β̂)  ;  AIC = −2l + 2k  ;  BIC = −2l + k ln n  ;  McFadden pseudo-R² = 1 − l_model/l_null</div>
  <p>The <b>Hosmer–Lemeshow</b> test checks the fit of a logistic model by grouping observations by predicted risk and comparing observed with expected counts. Smaller AIC/BIC is better; BIC penalises complexity more when n &gt; 7.</p>
  <p><b>Example:</b> ΔD = 7.2 for 1 added parameter: 7.2 &gt; 6.63 (χ²₁ at 1%), so significant. With l = −50, k = 3, n = 100: AIC = 106 and BIC = 100 + 3(4.605) = 113.8. With l_null = −69.3 and l_model = −50: pseudo-R² = 0.28.</p>
  <div class="note">Mistake: the deviance chi-square approximation is poor for sparse binary data, so use ΔD between models, not the absolute deviance.</div>`},
 { title:"Poisson Regression, Dispersion & Residuals", body:`
  <p><b>Poisson regression</b> models counts: ln μ = β₀ + β₁x₁ + … (log link), with an <b>offset</b> ln(exposure) if observations have different exposure times. exp(βⱼ) is the multiplicative effect (rate ratio) of a one-unit increase in xⱼ.</p>
  <p>The Poisson has Var = μ. If the data show <b>overdispersion</b> (Var &gt; mean), standard errors are too small. Estimate the dispersion by φ̂ = Pearson χ²/(n − p); φ̂ well above 1 means overdispersion. Remedies: quasi-Poisson, negative binomial, or random effects.</p>
  <p><b>Residuals:</b> Pearson (y − μ̂)/√V(μ̂), deviance residuals, and <b>Anscombe</b> residuals (a transformation chosen to make the residual distribution nearly normal).</p>
  <p><b>Example:</b> β₁ = 0.405 gives a rate ratio e^0.405 = 1.5, i.e. 50% more events per unit of x. Pearson χ² = 60 with 40 df: φ̂ = 1.5 (overdispersed). Pearson residual for y = 5 and μ̂ = 4: (5 − 4)/√4 = 0.5.</p>
  <div class="note">Mistake: ignoring overdispersion makes everything look significant.</div>`},
 { title:"Quasi-Likelihood & Generalized Estimating Equations (GEE)", body:`
  <p><b>Quasi-likelihood</b> needs only the mean–variance relationship Var(Y) = φV(μ), not the full distribution; the estimating equations have the same form as GLM score equations and give consistent estimates of β, with dispersion φ estimated separately.</p>
  <p><b>GEE</b> extends this to <b>repeated measures</b> or clustered data (several correlated observations per subject). GEE gives <i>population-averaged</i> (marginal) effects. Specify the mean model, the variance function and a <b>working correlation matrix</b> R(α): independence, exchangeable (equal correlation ρ), AR(1) (correlation decays with lag) or unstructured.</p>
  <div class="formula">Robust (sandwich) variance: V̂ = A⁻¹ B A⁻¹  ;  consistent even when R(α) is misspecified</div>
  <p><b>Example:</b> Four visits per patient, exchangeable ρ = 0.3: the working correlation matrix has 1 on the diagonal and 0.3 elsewhere. The variance inflation relative to independence for the mean is about 1 + (4 − 1)(0.3) = 1.9.</p>
  <div class="note">Mistake: GEE needs a reasonable number of subjects (clusters) for the robust standard errors to be reliable.</div>`},
 { title:"Linear Mixed Models & Generalized Linear Mixed Models", body:`
  <p>Mixed models add <b>random effects</b> to the usual fixed effects to describe subject- or cluster-specific variation. <b>Linear mixed model (LMM):</b> y = Xβ + Zb + e, with b ~ N(0, G) and e ~ N(0, R). A <b>random intercept</b> model: y_ij = β₀ + β₁x_ij + bᵢ + e_ij.</p>
  <div class="formula">ICC = σ_b²/(σ_b² + σ_e²)  ;  GLMM: g(μ_ij) = x_ijᵀβ + z_ijᵀbᵢ</div>
  <p>A <b>generalized linear mixed model (GLMM)</b> uses a link function and a random effect inside the linear predictor (e.g. logistic with a random intercept). Its coefficients are <b>subject-specific</b> effects, and with a logit link they are larger in magnitude than the marginal (GEE) coefficients. Estimation uses numerical integration or approximations such as Laplace.</p>
  <p><b>Example:</b> σ_b² = 4 and σ_e² = 12: ICC = 0.25, so 25% of the variability lies between subjects. Repeated measures (the same people measured several times) are the typical application.</p>
  <div class="note">Mistake: interpreting a GLMM coefficient as a population-average effect; it is conditional on the random effect (the same subject).</div>`}
]}
);
