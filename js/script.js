 Vue.config.devtools = true;

//  Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

 const app = new Vue (
    {
       el: '#root',
        data: {
            singleMail:'',
            mailList:[],
        },
        created:function(){
            for(let i = 0; i<10;i++){
             this.getRandomMail();
            }
           
           
        },
        methods: {
            getRandomMail:function(){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        // console.log(response.data.response);
                        this.singleMail = response.data.response;
                        console.log(this.singleMail);

                        this.mailList.push(this.singleMail);
                        console.log(this.mailList);
                
                });
            },
          
        },
        
    }
);


