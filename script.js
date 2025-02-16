const gridSize = 16;
        let score = 0;
        const gameContainer = document.getElementById('game-container');
        const scoreDisplay = document.getElementById('score');
        
        function createGrid() {
            gameContainer.innerHTML = '';
            for (let i = 0; i < gridSize; i++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.addEventListener('click', () => checkTarget(square));
                gameContainer.appendChild(square);
            }
            setNewTarget();
        }
        
        function setNewTarget() {
            document.querySelectorAll('.square').forEach(sq => sq.classList.remove('target'));
            const squares = document.querySelectorAll('.square');
            const randomIndex = Math.floor(Math.random() * squares.length);
            squares[randomIndex].classList.add('target');
        }
        
        function checkTarget(square) {
            if (square.classList.contains('target')) {
                score++;
                scoreDisplay.textContent = `Pontszám: ${score}`;
                square.classList.add('clicked');
                setTimeout(() => {
                    square.classList.remove('clicked');
                    setNewTarget();
                }, 200);
            }
        }
        
        createGrid();