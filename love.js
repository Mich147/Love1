document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    const yourNameInput = document.getElementById("yourName");
    const partnerNameInput = document.getElementById("partnerName");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function () {
        const yourName = yourNameInput.value.trim();
        const partnerName = partnerNameInput.value.trim();

        if (yourName === "" || partnerName === "") {
            alert("Please enter both names.");
            return;
        }

        const lovePercentage = calculateLovePercentage(yourName, partnerName);

        resultDiv.textContent = `Love Percentage: ${lovePercentage}%`;
    });

    function calculateLovePercentage(name1, name2) {
        const combinedNames = (name1 + name2).toLowerCase();
        const loveCount = countLoveLetters(combinedNames);
        return loveCount % 101;
    }

    function countLoveLetters(name) {
        const loveLetters = ["l", "o", "v", "e"];
        let count = 0;
        for (const letter of name) {
            if (loveLetters.includes(letter)) {
                count++;
            }
        }
        return count;
    }
});