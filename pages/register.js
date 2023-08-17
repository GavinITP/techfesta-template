const handleSubmit = () => {
  const companyName = document.getElementById("companyName").value;
  const contactName = document.getElementById("contactName").value;
  const contactTel = document.getElementById("contactTel").value;
  const boothSize = document.getElementById("boothSize").value;
  const numberOfChairs = document.getElementById("numberOfChairs").value;

  if (!companyName) alert("Please fill in your company name.");
  if (!contactName) alert("Please fill in your contact name.");
  if (!contactTel) alert("Please fill in your contact telephone number.");
  if (!boothSize) alert("Please select your booth size");

  if (numberOfChairs < 1 || numberOfChairs > 10)
    alert("The number of chairs must be in range 1 to 10");
};

document.getElementById("submitButton").addEventListener("click", handleSubmit);
