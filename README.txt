STATSPHERE – HOW TO USE
1. Host free: go to https://app.netlify.com/drop and drag this whole folder (unzipped) onto the page.
2. Edit your email: open data/config.js in Notepad, change feedbackEmail (currently nazmulnasir2019@gmail.com).
3. Add Drive folder links: open data/courses.js, paste a folder link between the quotes after  drive:
4. Add quiz questions: copy a line in data/quizzes.js. Add topics in data/topics.js. Practice in data/practice.js.
After editing, upload the folder to Netlify again (Deploys > drag folder).

NEW (1st & 4th year): course lists are in data/courses.js (leave drive: "" until the folder is ready; the site shows "Drive link coming soon").
Curriculum page data: data/curriculum.js. New topics/quizzes/mocks: data/new-1-*.js and data/new-4-*.js. New graphs: js/visuals.js.

MATH (KaTeX): math is written as LaTeX inside \( ... \) (inline) or \[ ... \] (display) in data/*.js. In normal JS strings write each backslash twice, e.g. "\\(\\frac{a}{b}\\)", or use a template literal with String.raw. KaTeX files are local in lib/katex/ (no internet needed); js/math.js re-renders math after every page change.

TOPIC-WISE QUIZZES: data/quiz-*.js (QZ array). Each topic has 20 questions: 8 MCQ, 6 True/False, 6 Fill in the blank.
 MCQ row: ["question",[4 options],indexOfCorrect,"explanation"]   True/False row: ["statement",true|false,"explanation"]
 Fill-in row: ["sentence with ___","answer|alternative answer","explanation"]  (answers are matched ignoring case, spaces and punctuation)
Semester grouping: data/course-map.js (course id -> semester). Course clip-art icons: js/courseart.js. Styles: css/quiz.css.

CACHE-BUSTING (IMPORTANT): every script/stylesheet in index.html ends with ?v=VERSION (currently 20261126a). On EVERY upload, open index.html and Find & Replace the old version with a new one (e.g. 20261126a -> 20261201a) so browsers don't show stale files. Upload index.html together with the changed files.
