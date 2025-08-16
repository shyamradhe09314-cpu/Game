const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let lanes = [70, 185, 300];
let player1 = { x: lanes[0], y: 500, color: "red" };
let player2 = { x: lanes[2], y: 100, color: "blue" };
let speed1 = 2;
let speed2 = 2;

function drawCar(car) {
    ctx.fillStyle = car.color;
    ctx.fillRect(car.x, car.y, 50, 80);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "a" && player1.x > lanes[0]) player1.x -= 115;
    if (e.key === "d" && player1.x < lanes[2]) player1.x += 115;
    if (e.key === "ArrowLeft" && player2.x > lanes[0]) player2.x -= 115;
    if (e.key === "ArrowRight" && player2.x < lanes[2]) player2.x += 115;
    if (e.key === "w") speed1 += 1;
    if (e.key === "s" && speed1 > 1) speed1 -= 1;
    if (e.key === "ArrowUp") speed2 += 1;
    if (e.key === "ArrowDown" && speed2 > 1) speed2 -= 1;
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    player1.y -= speed1;
    player2.y += speed2;
    
    if (player1.y < -80) player1.y = 600;
    if (player2.y > 600) player2.y = -80;
    
    if (Math.abs(player1.x - player2.x) < 50 && Math.abs(player1.y - player2.y) < 80) {
        alert("Game Over!");
        player1.y = 500;
        player2.y = 100;
    }
    
    drawCar(player1);
    drawCar(player2);
    
    requestAnimationFrame(gameLoop);
}

gameLoop();
