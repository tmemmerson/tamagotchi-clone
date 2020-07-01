export class Pet {
  constructor(name) {
    this.name = name;
    this.gameOver = false;
    this.hunger = 0;
    this.hungerIncrement;
    this.fatigue = 0;
    this.fatigueIncrement;
    this.mood = 0;
    this.moodIncrement;
    this.needsCap = 120;
    this.levelUpPoints = 0;
    this.needinessLevel = 1;
  }

  detectGameOver() {
    if (this.hunger >= this.needsCap || this.fatigue >= this.needsCap || this.mood >= this.needsCap || this.gameOver === true) {
      return true;
    } else {
      return false;
    }
  }
  incrementNeeds() {
    this.incrementHunger();
    this.incrementFatigue();
    this.incrementMood();
  }

  incrementHunger() {
    this.hungerIncrement = setInterval(()=>{
      this.hunger++;
      this.gameOver = this.detectGameOver();
    }, 1000);
  }

  incrementFatigue() {
    this.fatigueIncrement = setInterval(()=>{
      this.fatigue++;
      this.gameOver = this.detectGameOver();
    }, 2000);
  }

  incrementMood() {
    this.moodIncrement = setInterval(()=>{
      this.mood+=2;
      this.gameOver = this.detectGameOver();
    }, 1000);
  }

  levelUpDetector() {
    if (this.levelUpPoints === 5) {
      this.needsCap -= 10;
      this.levelUpPoints = 0;
      this.needinessLevel++;
    }
  }

  feed() {
    if (!this.gameOver) {
      this.hunger = 0;
      this.levelUpPoints++;
      clearInterval(this.hungerIncrement);
      this.incrementHunger();
      this.levelUpDetector();
    }
  }

  nap() {
    if (!this.gameOver) {
      this.fatigue = 0;
      this.levelUpPoints++;
      clearInterval(this.fatigueIncrement);
      this.incrementFatigue();
      this.levelUpDetector();
    }
  }

  play() {
    if (!this.gameOver) {
      this.mood = 0;
      this.levelUpPoints++;
      clearInterval(this.moodIncrement);
      this.incrementMood();
      this.levelUpDetector();
    }
  }
}