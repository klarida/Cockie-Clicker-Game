
        let score = 0;
        let clickers = 1;
        let autoClickers = 0;

        document.getElementById("score").addEventListener("click", function () {
            score = score + clickers;
            document.getElementById("scoreText").innerText = "Score: " + score;
        });

        document.getElementById("buy").addEventListener("click", function () {
            if (score >= 10) {
                clickers = clickers + 1;
                score = score - 10;
                document.getElementById("clicker").innerText = "x" + clickers;
                document.getElementById("scoreText").innerText = "Score: " + score;
            }
        });

        document.getElementById("buy-auto-clicker").addEventListener("click", function () {
            if (score >= 1000) {
                autoClickers = autoClickers + 1;
                score = score - 1000;
                document.getElementById("scoreText").innerText = "Score: " + score;
                document.getElementById("auto-clickers").innerText = "x" + autoClickers;

                setInterval(function () {
                    score = score + clickers;
                    document.getElementById("scoreText").innerText = "Score: " + score;
                }, 1000);
            }
        });