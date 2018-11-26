<template>
    <div class="statC">
        <div>
            <b-btn v-b-modal.myModal variant="primary" class="float-lg-right">용병등록</b-btn>
                <b-modal no-close-on-backdrop centered id="myModal"
                    size="md"  hide-footer title="용병등록">
                <mercenary></mercenary>
                </b-modal>
        </div>
        <br><br> 
        <div class="border border-secondary mt-5">
            <b-row class= m-1>
                <b-col cols="4" class="ml-10">
                        <b-img left src="https://picsum.photos/125/125/?image=43" rounded="circle" height='70%' width='70%'  class="mr-3 mt-1"/>
                        <p class="text-left mt-4">{{this.$store.getters.id}}</p>
                </b-col>
                <b-col cols="8">
                    <b-row class="border border-info w-50 ">
                        <b-col cols="5">
                            <p class="text-left ">Win : 8</p>
                        </b-col>
                        <b-col cols="5">
                            <p class="text-right">Lose : 9</p>
                        </b-col>
                        <b-col cols="2" class="border black">
                            54%
                        </b-col>    
                    </b-row>
                
                    <b-row class="border border-info w-75 mt-1">
                        <b-col cols="6">
                            <p class="text-left">1300 points</p>
                        </b-col>
                        <b-col cols="6">
                            <p class="text-left">45위</p>
                        </b-col>
                    </b-row>
                    
                </b-col>
            </b-row>
        </div>
    </div>            
</template>

<script>
import mercenary from './modal/mercenary'
export default {
    data(){
        return{

        }
    },
    components:{
        mercenary
    }
}
</script>

<style>
    .modal-dialog.modal-fullsize { width: 100%; height: 100%; margin: 0; padding: 0; }


    #myInfo{
        border: 0.1px black
    }
</style>
