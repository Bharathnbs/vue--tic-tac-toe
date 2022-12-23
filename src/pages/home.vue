<template>
    <div class="m-8 font-black text-center">
        <h1 class="text-2xl">Tic Tac Toe</h1>
    </div>

    <div class="flex justify-center">
        <div class="grid grid-cols-3 grid-rows-3 w-60 ">
            <div class="w-20 h-20 font-black border border-gray-500 p-7 p-2text-center bg-sky-500" v-for="(value,index) in boxs" @click="boxClick(value,index)">{{ value }}</div>
        </div>
    </div>

    <div class="m-5 text-center">
        <h2 class="font-bold text-green-600">{{ winningStatus }}</h2>   
    </div>

    <div class="flex justify-center mt-5">
        <button class="w-16 p-2 bg-yellow-400 rounded-md" @click="restart">Restart</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return{
                symbol: '',
                count : 0,
                running_status: false,
                boxs : ['','','', '','','','','',''],
                currentPlayer: 'X',
                winningState : [
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6],
                ],
                winningStatus: '',
            }
        },

        methods: {

            restart(){  
                for(var i =0; i < this.boxs.length;i++){
                    this.boxs[i] = '';    
                }
                this.winningStatus ='';
            },

            boxClick(value,index) {
                this.count++;
                if (this.boxs[index] == '') {
                    this.boxs[index] = this.currentPlayer;
                    console.log(this.count);
                    this.changePlayer();
                    this.winningCheck(this.count);
                }
              
            },
            
            changePlayer() {
                if (this.currentPlayer == 'X') this.currentPlayer = 'O';
                else if (this.currentPlayer == 'O') this.currentPlayer = 'X';
            },

            winningCheck(count){
                var a = [];
                var b = [];
                var c = 0;
                var x = false;
                var o = false;
              

                for (let i = 0; i < this.boxs.length; i++) {
                    //  console.log(this.boxs[i]); 
                     if(this.boxs[i] == 'X')  
                     {
                        a[i] = i;
                     }
                     else if(this.boxs[i] == 'O')
                     {
                        b[i]= i;
                     }
                }

                for(var i = 0; i < this.winningState.length; i++){
                    // console.log(a.join(''), this.winningState[i].join(''));
                        if(i == c){
                            if(a.join('') == this.winningState[i].join('')){
                                console.log('x palyer win')
                                this.winningStatus ='X Win';
                                var x = true;
                            }
                            else if(b.join('') == this.winningState[i].join('')){
                                console.log('o palyer win')
                                this.winningStatus ='O Win';
                                var o = true;
                            }  
                            else{
                                if(count == 8 && x !=true && o !=true){
                                    this.winningStatus = 'Match Draw';
                                }
                            }
                            c++;
                        }    
                }
      
            },              
        },
        
        created(){
        },
    }
</script>