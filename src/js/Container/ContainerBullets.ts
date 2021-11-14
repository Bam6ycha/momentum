import { ChildElement } from "../childElementType";
import { Bullet, BulletStates } from "../components/Bullet";
import { Container } from "./Container";

export class ContainerBullets extends Container {
  public element: HTMLDivElement;

  public counter: number;

  private bulletsContainer: Container;

  private bullets: Bullet[];

  constructor(className: string, children?: ChildElement[]) {
    super(className, children);

    this.counter = 0;

    this.bullets = this.createBullets();

    this.bulletsContainer = new Container(
      "artistQuizQuestions-mainContainer__bullets",
      [...this.bullets.map((bullet) => bullet.element)]
    );
    this.nextActive();
    this.element = this.bulletsContainer.element;
  }

  private createBullets() {
    const bulletsAmount = 10;
    const bullets: Bullet[] = [];
    for (let i = 0; i < bulletsAmount; i++) {
      const bullet = new Bullet();
      bullets.push(bullet);
    }
    return bullets;
  }

  public nextActive() {
    this.bullets[this.counter].changeBulletState(BulletStates.Active);
    this.counter++;
    if (this.counter === 10) {
      this.counter = 1;
    }
  }

  public rightAnswer() {
    this.bullets[this.counter - 1].changeBulletState(BulletStates.RightAnswer);
  }

  public wrongAnswer() {
    this.bullets[this.counter - 1].changeBulletState(BulletStates.WrongAnswer);
  }
}
