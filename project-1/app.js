const maxHp = 100;
const LogEntryTypeEnum = {
    PlayerAttack : 1,
    MonsterAttack : 2,
    PlayerHeal : 3
};

new Vue({
    el: "#app",
    data: {
        i: 0,
        j: 0,
    },
    watch: {
        i: function() {
            console.log('test ' + this.j)
            this.j++
        },
        j: function() {
            console.log(this.i)
            this.i++
        }
    }
    
})



function getRandomInt(minValue, maxValue) {
    let result = Math.floor(Math.random() * (maxValue - minValue)) + minValue; 

    return result;
}