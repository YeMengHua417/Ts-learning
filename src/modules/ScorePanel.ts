// 定义表示记分牌的类
class ScorePanel{
    private score = 0;
    private level = 1;

    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    maxLevel:number;
    upScore:number;
    // 没有传参用默认值，传了用传参值
    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore(){
        this.scoreEle.innerHTML = ++this.score+'';
        if(this.score % this.upScore === 0){ // 为整10的倍数
            this.levelUp();
        }
    }
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level+'';
        }
    }
}

export default ScorePanel;
