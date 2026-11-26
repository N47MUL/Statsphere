/* Course id -> semester code (used to group courses under Year / Semester headings) */
const COURSE_SEM = {
 pos:"1-1", alg:"1-1", eng:"1-1", hist:"1-1",
 ip:"1-2", aw:"1-2", st1:"1-2", spss:"1-2", calc1:"1-2", la:"1-2",
 tos:"2-1", pd:"2-1", stata:"2-1", calc:"2-1", micro:"2-1",
 reg:"2-2", nm:"2-2", real:"2-2", macro:"2-2", db:"2-2",
 doe:"3-1", inf:"3-1", sim:"3-1", lp:"3-1",
 stoch:"3-2", dem:"3-2", sas:"3-2", reg2:"3-2",
 es:"4-1", as:"4-1", doe2:"4-1", st2:"4-1",
 mva:"4-2", bio:"4-2", glm:"4-2", rm:"4-2"
};
const SEM_GROUPS = [
 { year:"1st Year", code:"1-1", label:"1st Year · 1st Semester" },
 { year:"1st Year", code:"1-2", label:"1st Year · 2nd Semester" },
 { year:"2nd Year", code:"2-1", label:"2nd Year · 1st Semester" },
 { year:"2nd Year", code:"2-2", label:"2nd Year · 2nd Semester" },
 { year:"3rd Year", code:"3-1", label:"3rd Year · 1st Semester" },
 { year:"3rd Year", code:"3-2", label:"3rd Year · 2nd Semester" },
 { year:"4th Year", code:"4-1", label:"4th Year · 1st Semester" },
 { year:"4th Year", code:"4-2", label:"4th Year · 2nd Semester" }
];
