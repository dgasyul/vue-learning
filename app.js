const maxHp = 100;
const LogEntryTypeEnum = {
    PlayerAttack : 1,
    MonsterAttack : 2,
    PlayerHeal : 3
};

new Vue({
    el: "#app",
    data: {
        isStarted: false,
        myHp: maxHp,
        monsterHp: maxHp,
        log:[]
    },
    watch: {
        myHp: function() {
            this.endGameIfNeeded();
        },
        monsterHp: function() {
            this.endGameIfNeeded();
        }
    },
    methods: {
        startNewGame: function() {
            this.resetGame(true);
        },
        giveUp: function() {
            this.resetGame(false);
        },
        attack: function() {
            this.playerAttack();
            this.monsterAttack();
        },
        specialAttack: function() {
            this.playerSpecialAttack();
            this.monsterAttack();
        },
        heal: function() {
            this.playerHeal();
            this.monsterAttack();
        },
        monsterAttack: function() {
            const damage = getRandomInt(1, 5);
            this.myHp -= damage;
            this.logCombatAction(LogEntryTypeEnum.MonsterAttack, damage)
        },
        playerAttack: function() {
            const damage = getRandomInt(1, 10);
            this.monsterHp -= damage;
            this.logCombatAction(LogEntryTypeEnum.PlayerAttack, damage)
        },
        playerSpecialAttack: function() {
            const damage = getRandomInt(5, 15);
            this.monsterHp -= damage;
            this.logCombatAction(LogEntryTypeEnum.PlayerAttack, damage)
        },
        playerHeal: function() {
            const heal = getRandomInt(1, 7);
            this.myHp += heal;
            if (this.myHp > maxHp) {
                this.myHp = maxHp;
            }

            this.logCombatAction(LogEntryTypeEnum.PlayerHeal, heal)
        },
        resetGame: function(shouldStartNewGame) {
            this.myHp = maxHp;
            this.monsterHp = maxHp;
            this.isStarted = shouldStartNewGame;
            this.log = [];
        },
        endGameIfNeeded: function() {
            let confirmationMessage = "";
            if (this.myHp <= 0) {
                confirmationMessage = "Monster won. Start a new game?"

            } else if (this.monsterHp <= 0) {
                confirmationMessage = "Player won. Start a new game?"
            } else {
                return;
            }

            const shouldStartNewGame = confirm(confirmationMessage);
            this.resetGame(shouldStartNewGame);

        },
        logCombatAction: function(logEntryType, value) {
            this.log.push({
                logEntryType,
                value
            });
        },
        getLogEntryClasses: function(logEntryType) {
            if (logEntryType === LogEntryTypeEnum.MonsterAttack) {
                return 'monster-turn';
            } else {
                return 'player-turn';
            }
        },
        getLogEntryText: function(value, logEntryType){
            switch(logEntryType) {
                case LogEntryTypeEnum.PlayerAttack:
                    return `Player attacked for ${value}`;
                case LogEntryTypeEnum.PlayerHeal:
                    return `Player healed for ${value}`
                case LogEntryTypeEnum.MonsterAttack:
                    return `Monster attacked for ${value}`
            }
        }
    }
})



function getRandomInt(minValue, maxValue) {
    let result = Math.floor(Math.random() * (maxValue - minValue)) + minValue; 

    return result;
}