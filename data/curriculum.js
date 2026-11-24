/* ============ CURRICULUM (year/semester-wise course list) ============
   Source: SUST Department of Statistics, Undergraduate Curriculum 2022-2023,
   Section 18: Year/Semester-wise Distribution of Courses, pages 21-28.
   Each course row: [name, type, credit]. "total" is the credit total printed in the curriculum.
   For 4-2, "totalOpt" is the total including the optional Comprehensive course. */
const CURRICULUM = [
{ year:"1st Year", semesters:[
 { code:"1-1", total:14.0, courses:[
  ["Principles of Statistics","Theory",3.0],["Principles of Statistics Lab","Lab",2.0],["Basic Algebra","Theory",3.0],["English Language","Theory",2.0],
  ["History of the Emergence of Independent Bangladesh","Theory",3.0],["Presentation & Viva-voce","Viva-voce",1.0] ]},
 { code:"1-2", total:18.5, courses:[
  ["Introduction to Probability","Theory",3.0],["Sampling Techniques – I","Theory",3.0],["Sampling Techniques – I Lab","Lab",2.0],
  ["Introduction to Computer and SPSS (Lab)","Lab",1.5],["Calculus","Theory",3.0],["Linear Algebra","Theory",3.0],["Academic Writing","Theory",2.0],
  ["Presentation & Viva-voce","Viva-voce",1.0] ]} ]},
{ year:"2nd Year", semesters:[
 { code:"2-1", total:16.5, courses:[
  ["Probability Distributions","Theory",3.0],["Theory of Statistics","Theory",3.0],["Theory of Statistics Lab","Lab",2.0],
  ["Statistical Computing with C++ & STATA","Lab",1.5],["Advanced Calculus & Differential Equations","Theory",3.0],["Principles of Microeconomics","Theory",3.0],
  ["Presentation & Viva-voce","Viva-voce",1.0] ]},
 { code:"2-2", total:19.5, courses:[
  ["Regression Analysis – I","Theory",3.0],["Regression Analysis – I Lab","Lab",1.5],["Numerical Methods","Theory",3.0],["Real Analysis","Theory",3.0],
  ["Principles of Macroeconomics","Theory",3.0],["Database Management & Programming","Theory",2.0],["Database Management & Programming Lab","Lab",3.0],
  ["Presentation & Viva-voce","Viva-voce",1.0] ]} ]},
{ year:"3rd Year", semesters:[
 { code:"3-1", total:17.5, courses:[
  ["Design & Analysis of Experiments – I","Theory",3.0],["Design & Analysis of Experiments – I Lab","Lab",2.0],["Statistical Inference","Theory",3.0],
  ["Statistical Inference Lab","Lab",2.0],["Simulation and Data Analysis with R & Python","Theory",2.0],["Simulation and Data Analysis with R & Python Lab","Lab",1.5],
  ["Linear Programming","Theory",3.0],["Presentation & Viva-voce","Viva-voce",1.0] ]},
 { code:"3-2", total:18.5, courses:[
  ["Stochastic Processes","Theory",3.0],["Stochastic Processes Lab","Lab",2.0],["Demography","Theory",3.0],["Demography Lab","Lab",2.0],
  ["Data Analysis with SAS","Lab",1.5],["Regression Analysis – II","Theory",3.0],["Regression Analysis – II Lab","Lab",2.0],
  ["Field Work","Field Work",1.0],["Presentation & Viva-voce","Viva-voce",1.0] ]} ]},
{ year:"4th Year", semesters:[
 { code:"4-1", total:20.5, courses:[
  ["Economic Statistics","Theory",3.0],["Economic Statistics Lab","Lab",2.0],["Applied Statistics","Theory",3.0],["Applied Statistics Lab","Lab",1.5],
  ["Design & Analysis of Experiments – II","Theory",3.0],["Design & Analysis of Experiments – II Lab","Lab",2.0],["Sampling Techniques – II","Theory",3.0],
  ["Sampling Techniques – II Lab","Lab",2.0],["Presentation & Viva-voce","Viva-voce",1.0] ]},
 { code:"4-2", total:19.0, totalOpt:23.0, courses:[
  ["Multivariate Analysis","Theory",3.0],["Multivariate Analysis Lab","Lab",2.0],["Biostatistics and Epidemiology","Theory",3.0],
  ["Biostatistics and Epidemiology Lab","Lab",2.0],["Generalized Linear Models","Theory",2.0],["Research Methodology","Theory",2.0],
  ["Research Project","Project",4.0],["Comprehensive (Optional)","Theory",4.0,"optional"],["Presentation & Viva-voce","Viva-voce",1.0] ]} ]}
];
const CURRICULUM_SOURCE = "SUST Department of Statistics, Undergraduate Curriculum 2022–2023, Section 18: Year/Semester-wise Distribution of Courses, pages 21–28.";
const CURRICULUM_NOTE = "The curriculum has no separate Theory/Lab classification for Presentation & Viva-voce, Field Work and Research Project, so they are shown under their own type.";
