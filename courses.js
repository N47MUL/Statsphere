/* ============ RESOURCE LIBRARY ============
   Each course has:  name, drive (a Google Drive folder link, or "" to use the semester/root folder).
   To add a course folder link: open the folder in Google Drive -> Share -> "Anyone with the link" -> Copy link,
   then paste it between the quotes after  drive:
   You may also set  embed: true  to show the folder inside the page (works for public folders).
*/
const ROOT = SITE.driveRoot;
const LIBRARY = [
  { year: "2nd Year", semesters: [
    { code: "2-1", folder: "2-1 by N@sir", drive: "", courses: [
      { name: "Theory of Statistics", drive: "https://drive.google.com/drive/folders/1Fd_G3GPvZC1LZo6BvPqm0b-MS8Prw3dj" },
      { name: "Probability Distributions", drive: "https://drive.google.com/drive/folders/1FAKCH3IgYCvBi_uWrTkIDM_uPu0pfMSd" },
      { name: "Advance Calculus and Differential Equations", drive: "https://drive.google.com/drive/folders/1Ff7UX5G3CFjuGRp0LF9IwtXYEr8i0Iek" },
      { name: "Principles of Microeconomics", drive: "https://drive.google.com/drive/folders/1FikjbcxIQE_cc-be0FMPPhw3X5NFfWp7" },
      { name: "STATA and C++", drive: "https://drive.google.com/drive/folders/1wHg7IKr3CVdxlRMic1c3PaTAPnB4z_V3" },
      { name: "TT and Semester Final Questions", drive: "https://drive.google.com/drive/folders/1it7rHY2i2WvhTYeUa2C-yP0BbaYMQgRA", note: "TT = Term Test" } ] },
    { code: "2-2", folder: "2-2 by N@sir", drive: "", courses: [
      { name: "Regression Analysis I", drive: "https://drive.google.com/drive/folders/1pslMvbT1T17r9qVpRNmdvHr_d8hFdA2h" },
      { name: "Numerical Methods", drive: "https://drive.google.com/drive/folders/1pxq-ZwDunElWHKCd0ucIYGhUwRlvlEWP" },
      { name: "Principles of Macroeconomics", drive: "https://drive.google.com/drive/folders/1qA46MfewoQAVA7YmJ2R3gn6cUzE68-0r" },
      { name: "Real Analysis", drive: "https://drive.google.com/drive/folders/1pvAHptYDc-pwkmC66ElX_3Nk8i8Lwb3s" },
      { name: "Database Management and Programming", drive: "https://drive.google.com/drive/folders/1qAGVONu8enSeUhrn34OYzzp3YdceoaX-" },
      { name: "TT and Semester Final Questions", drive: "https://drive.google.com/drive/folders/1Wya-xYTkv7Btc3K9M2AJ-4CyZPIo0w8b", note: "TT = Term Test" } ] } ] },
  { year: "3rd Year", semesters: [
    { code: "3-1", folder: "3-1 by N@sir", drive: "", courses: [
      { name: "Design and Analysis of Experiments I", drive: "https://drive.google.com/drive/folders/1qJNdq-sPCqjb4kuUOHtBdt1SzbBxdEwc" },
      { name: "Statistical Inference", drive: "https://drive.google.com/drive/folders/1SiYKxHuyBDjea0Rv-Ga1CpXXDb7rd7Pq" },
      { name: "Statistical Simulation and Data Analysis with R and Python", drive: "https://drive.google.com/drive/folders/1nrxyuscKuD0694mp6_5wMgPEpK_vQizE" },
      { name: "Linear Programming", drive: "https://drive.google.com/drive/folders/1RQ3KzEIWlVP__6YDwRZHsHwKEnjoE_Rl" },
      { name: "Previous Questions", drive: "https://drive.google.com/drive/folders/1RSZ7UTggGF_H7Wsa1vzohkL0EXCkHzQJ" },
      { name: "Statistical Tables", drive: "https://drive.google.com/drive/folders/1WFLBHBebPYgNY5z951W2PsbTPAB7kxtp" } ] },
    { code: "3-2", folder: "3-2 by N@sir", drive: "", courses: [
      { name: "Stochastic Processes", drive: "https://drive.google.com/drive/folders/155qmBC393bZedK2h68DFOd2mSVN2Y1cg" },
      { name: "Demography", drive: "https://drive.google.com/drive/folders/12vMCq8oKsw9JsMh8UjU1ggMFIaQrggqA" },
      { name: "Data Analysis with SAS", drive: "https://drive.google.com/drive/folders/1GMq4hEZkHun1luYBvbHeV3mMJah90jXc" },
      { name: "Regression Analysis II", drive: "https://drive.google.com/drive/folders/1y5gEYIekLApsmkFiMGf2yfQt1QzBihmc" },
      { name: "Field Work", drive: "https://drive.google.com/drive/folders/1LPtnzvPyye-rvRc75c1y3ThynnO376zD" },
      { name: "TT and Semester Final Questions", drive: "https://drive.google.com/drive/folders/1_H4IydFRfAL2I_AksM7baNcd1UyO7k8E", note: "TT = Term Test" } ] } ] }
];
