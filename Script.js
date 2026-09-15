function calcGPA() {
  const gpa1 = parseFloat(document.getElementById("gpa1").value) || 0;
  const gpa2 = parseFloat(document.getElementById("gpa2").value) || 0;
  const gpa3 = parseFloat(document.getElementById("gpa3").value) || 0;

  const average = (gpa1 + gpa2 + gpa3) / 3;

  document.getElementById("gpaResult").textContent =
    "Average GPA: " + average.toFixed(2);
}

function calcPercentage() {
  const obtained = parseFloat(document.getElementById("obtained").value);
  const total = parseFloat(document.getElementById("total").value);

  if (!total || total <= 0) {
    document.getElementById("percentResult").textContent =
      "সঠিক মোট নম্বর দিন।";
    return;
  }

  const percentage = (obtained / total) * 100;

  document.getElementById("percentResult").textContent =
    "Percentage: " + percentage.toFixed(2) + "%";
}

function countdown() {
  const date = document.getElementById("examDate").value;

  if (!date) {
    document.getElementById("countResult").textContent =
      "Exam date নির্বাচন করুন।";
    return;
  }

  const exam = new Date(date + "T00:00:00");
  const today = new Date();

  const difference = exam - today;
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  if (days > 0) {
    document.getElementById("countResult").textContent =
      days + " days remaining!";
  } else if (days === 0) {
    document.getElementById("countResult").textContent =
      "Exam is today!";
  } else {
    document.getElementById("countResult").textContent =
      "Exam date has passed.";
  }
}
