// ============================================================
// SECTION 1: Student Profile & Variable Declarations (Correct)
// ============================================================
const studentName = "Alex";
const studentId = 101;
const isEnrolled = true;

console.log("Student: " + studentName);
console.log(typeof studentName);

// ============================================================
// SECTION 2: Scores & Grade Calculation (Correct)
// ============================================================
const scores = [85, 90, 78, 92];
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

const average = totalScore / scores.length;

let grade = "F";
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Average: " + average);
console.log("Grade: " + grade);

// ============================================================
// SECTION 3: Budget & Expense Tracking (Partial / Minor Logic Gap)
// Student declares variables and array, but calculates remainder before total sum
// ============================================================
const initialBudget = 500;
const expenses = [120, 45, 85];
let totalExpenses = 0;

// Subtracted only first expense rather than iterating all
const remainingBalance = initialBudget - expenses[0];

console.log("Remaining Balance: " + remainingBalance);
