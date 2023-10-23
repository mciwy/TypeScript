interface Logger {
    log(message: string): void;
}

class LogToConsole implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

type Point = number;
type Distance = number;
type Angle = number;
type Position = { x: Point; y: Point };
enum CarriageState {
    UP,
    DOWN
}
enum LineColor {
    BLACK = "черный",
    RED = "красный",
    GREEN = "зелёный"
}

class Plotter {
    private state: {
        position: Position;
        angle: Angle;
        color: LineColor;
        carriageState: CarriageState;
    };
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
        this.state = {
            position: { x: 0, y: 0 },
            angle: 0,
            color: LineColor.BLACK,
            carriageState: CarriageState.UP
        };
    }

    move(distance: Distance): void {
        let newPosition = this.calcNewPosition(distance);
        if (this.state.carriageState === CarriageState.DOWN) {
            this.drawLine(this.state.position, newPosition);
        } else {
            this.logger.log(`Передвигаем на ${distance} от точки (${this.state.position.x}, ${this.state.position.y})`);
        }
        this.state.position = newPosition;
    }

    turn(angle: Angle): void {
        this.logger.log(`Поворачиваем на ${angle} градусов`);
        this.state.angle = (this.state.angle + angle) % 360.0;
    }

    carriageUp(): void {
        this.logger.log("Поднимаем каретку");
        this.state.carriageState = CarriageState.UP;
    }

    carriageDown(): void {
        this.logger.log("Опускаем каретку");
        this.state.carriageState = CarriageState.DOWN;
    }

    setColor(color: LineColor): void {
        this.logger.log(`Устанавливаем ${color} цвет линии.`);
        this.state.color = color;
    }

    setPosition(position: Position): void {
        this.logger.log(`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`);
        this.state.position = position;
    }

    private drawLine(from: Position, to: Position): void {
        this.logger.log(`...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${this.state.color} цвет.`);
    }

    private calcNewPosition(distance: Distance): Position {
        const angle_in_rads = this.state.angle * (Math.PI / 180.0) * 1.0;
        const x = this.state.position.x + distance * Math.cos(angle_in_rads);
        const y = this.state.position.y + distance * Math.sin(angle_in_rads);
        return { x: Math.round(x), y: Math.round(y) };
    }
}

function drawTriangle(plt: Plotter, size: Distance): void {
    plt.setColor(LineColor.GREEN);
    for (let i = 0; i < 3; ++i) {
        plt.carriageDown();
        plt.move(size);
        plt.carriageUp();
        plt.turn(120.0);
    }
}

const plotter = new Plotter(new LogToConsole());
drawTriangle(plotter, 100.0);
